.. _middleware:

**************************
Middleware
**************************

We discussed the topic of middleware in :ref:`ring_intro`, but didn't give any
concrete examples of using it. This is an example taken from this `github gist`_
that we will define in a brand-new namespace:

.. _`github gist`: https://gist.github.com/dannypurcell/8215411

.. code-block:: clojure

   (ns volta.middleware)

   (defn ignore-trailing-slash
     "Modifies the request uri before calling the handler.
     Removes a single trailing slash from the end of the uri if present.
     Handles optional trailing slashes until Compojure's route matching syntax supports regex."
     [handler]
     (fn [request]
       (let [uri (:uri request)]
         (handler (assoc request :uri (if (and (not (= "/" uri))
                                               (.endsWith uri "/"))
                                        (subs uri 0 (dec (count uri)))
                                        uri))))))

Note that this function takes a handler function as its sole argument. It
returns a *modified* version of the same function. It doesn't *invoke* the new
and modified function; it just *returns* it. When the wrapped function is
finally invoked, we manually strip off the trailing "/" from the ``:uri`` value
in the request map before passing it to the original handler. At that point, the
original handler will do whatever it would normally do, but based on our
slightly modified request map.

To use this, we go back to our ``volta.routes`` namespace and yet another
indirection layer. We create a new symbol (``wrapped-routes``) and in it we
apply the middleware above. 

.. code-block:: clojure

   (ns volta.routes
      (:require [volta.handlers :as h]
                [volta.middleware :as vm]
                [compojure.core :refer [GET ANY defroutes] :as cj]
                [compojure.route :as route]))

   ; most of volta.routes omitted

   ; inside volta.routes
   (def wrapped-routes
       (-> all-routes
           (vm/ignore-trailing-slash)))
           

Then we redefine the ``main`` symbol to point to the new ``wrapped-routes`` var. 

.. code-block:: clojure

    ; still inside volta.routes

    (def main #'wrapped-routes)

And now you should be able to get to (for example) the ``alpha`` route via
either ``/greek/alpha`` or ``/greek/alpha/``. Without the middleware the latter
format yields a 404: feel free to ytoggle our middleware on and off to confirm
this!

In this case, the net effect of the wrapper is just to remove the trailing slash
in the ``:uri`` key of the request map, which changes how requests will be
matched via ``compojure``. But middleware can do *anything*; it can modify the
request map in *any* way, and also the response map in *any* way. 


Spying On Ourselves
=======================

As a second example, let us add a middleware function that echoes both the
inoming and outgoing response maps to *system.out*, so that we can watch what's
happening in the terminal window. Thanks to John Aspden and `this post`_ for the
inspiration for this.

.. _`this post`: http://www.learningclojure.com/2013/01/how-sessions-work-in-ring.html

Our ``volta.middleware`` namespace will gain the following imports and functions:

.. code-block:: clojure

   (ns volta.middleware
      (:require [clojure.pprint :as p]))


   (defn format-map
      "Returns a single string version of a single request or response.
       Skips any keys mentioned in the skip-keys sequence"
     [name request skip-keys]
     (let [divider (apply str (repeat 20 "-"))
           final-request (apply dissoc request skip-keys)]
        (with-out-str
          (println divider)
          (println (str name ": "))
          (p/pprint final-request)
          (println divider))))

   (defn matches?
      "Tests an input URI string for any matches with any of a sequence
      of regular expressions."
      [uri regexps]
      (if (some #(re-find % uri) regexps)
        true
        false))

   (defn wrap-spy
     "Causes the *complete* incoming and outgoing request maps to echoed to *out*.
      Gives terse output for any URI that matches regular expressions included
      in the terse-files sequence (e.g. #'\\.js'  #'\\.css'  #favicon\\.ico')"
     [handler spyname terse-patterns]
     (fn [{:keys [uri request-method] :as request}]
       (if (matches? uri terse-patterns)
         (let [response (handler request)]
           (println (str request-method  " \"" uri "\" >> " (:status response) "\n"))
           response)
         (let [title-in (str spyname ":\n Request for " request-method " \"" uri "\"")
                 incoming (format-map title-in request [:body])]
             (println incoming)
             (let [title-out (str spyname ":\n Response to " request-method " \"" uri "\"")
                   response (handler request)
                   outgoing (format-map title-out response [:body])]
               (println outgoing)
               response))))) ; return response to next middleware in the series, if any

The first two functions are just helpers, and ``wrap-spy`` is our new middleware
example. This function takes another handler, along with a ``spyname`` to
differentiate between multiple spies (so you can choose to use more than one
spy at different layers of the middleware stack if desired).
Finally, you can provide a vector of regular expression literals to define
patterns that you don't want the full verbose output for (if you don't do this,
then every single request for CSS and JS files and so on gets the full
treatment, making it easy to lose the main request and response in the noise). 

The ``wrap-spy`` function deconstructs the request map, and then takes one of
two paths. If the incoming URI matches any one of the original regexp patterns,
then this wrapper doesn't do anything to the *request*, and prints only a short
one-liner report about the response before returning the unmodified response map.

But if the incoming URI doesn't match any of our terse patterns, this middleware
does some fairly verbose reporting about both the request and response. The
middleware pretty-prints the incoming request map, then passes the request
downstream so that the next middleware (or the main handler) can do whatever
they want to do. Then ``wrap-spy`` pretty-prints the outgoing response map as
well. 

So we see here that one middleware is free to act on both the request
*and* the response. This will obviously be useful in a variety of scenarios.
Consider the standard session middleware; it must pull the session out of some
persistent storage so that it can be placed in the request map. And then once
the response has been generated, it must pull the session out of the response
map so that it can store the current version back in the persistent storage.
Having two different middlewares for the two different stages would suck;
thankfully, every single middleware gets access to both, and is free to act on
one or the other or both, as necessary.

Finally note that in both the terse and verbose paths, the response is returned
as the final value of the expression. This is obviously necessary for the
middleware to be a well-behaved citizen that plays well with other middleware.

The last thing to do is to actually enable the middleware, which we do inside
``volta.routes``:

.. code-block:: clojure

   ; most of namespace "volta.routes"  omitted for clarity

   (def wrapped-routes
     (-> all-routes
         (vm/ignore-trailing-slash)
         (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])))

And now we see how easy it is to layer in more than one middleware. This also
provides a good example of configuring middleware: ``ignore-trailing-slash``
takes no arguments (other than the implied first argument due to the thrush ``->``
operator), but ``wrap-spy`` two additional arguments over and above the base
handler, and they are specified in the same closure as ``wrap-spy`` itself.

As more middlewares are added, they will simply be added to this thrush clause
with no fuss, muss or bother. 

ring-defaults
======================

Historically, Ring has shipped with a variety of useful middleware, but no
particular way to turn them on all at once. To address this concern, people
would often use the ``compojure.handler/api`` or ``compojure.handler/site``
helper functions, which bundled up a minimal (for ``api``) or relatively maximal
(for ``site``) set of middleware all in one command. 

But more ominously, for most of its history, Ring did *not* ship with security
middleware for issues like CSRF, HSTS, XSS, clickjacking and so on. Third-party
packages existed to handle those concerns, but they were not included as part of
the standard Ring package. 

This lack of *security batteries* has always been one of the biggest barriers
discouraging me from looking seriously into using Ring as a web server. Even
with the help of ``Leiningen``, the onus would still be on me, the developer, to
manually revisit the library home pages periodically to be sure I was using the
most-current version. The idea of manually keeping a half-dozen or more
completely separate dependencies up-to-date was just too daunting. Security is
too important of a concern to handle in such an ad hoc way,

Fortunately, this situation changed for the better in 2014, with the addition of
the `ring-defaults`_ library, created and maintained by the same people who make
Ring itself. This kills two birds with one stone: first of all, there is now one
canonical set of security middleware being organized and tracked by the main
Ring project. And secondly, there's no need to mess with the ``compojure``
helpers, since ``ring-defaults`` also includes basic middleware for cookies and
sessions and so on. 

.. _`ring-defaults`: https://github.com/ring-clojure/ring-defaults


Using Ring-Defaults
-----------------------

``ring-defaults`` is installed like anything else, by adding it to ``project.clj``:

.. code-block:: clojure

    :dependencies [; blah blah other dependencies
                   [ring/ring-defaults "0.1.2"]]

Then you require it and call its wrapper function with one of four maps:

#. **api-defaults**, with parameter middleware and little else
#. **site-defaults**, for the whole web site shebang (cookies, sessions, etc)
#. **secure-api-defaults**, like *api-defaults*, but with all of the security
   batteries turned on.
#. **secure-site-defaults**, like *site-defaults*, but with all of the security
   batteries turned on. Requires SSL and HTTPS, and so on. 

Those four settings are literally just maps whose contents you can inspect in
the ``ring-defaults`` source code to see exactly which packages are included.
The main ``ring-defaults`` documentation covers additional options that you can
specify. One very important which we will look at in more detail is to specify a
persistent storage solution for sessions rather than relying cookies or the
default in-memory store.

Given our setup from above, after including ``ring-defaults`` inside
``project-clj``, we would need to make the following changes to
``volta.routes``:

.. code-block:: clojure

    (ns volta.routes
        (:require [ring.middleware.defaults :as d]
                  ; other :requires are unchanged))

   ; most of file omitted

   (def wrapped-routes
       (-> all-routes
           (vm/ignore-trailing-slash)
           (d/wrap-defaults d/site-defaults)))

Now when you run the server, you will have access to parameters, cookies, and
sessions, as well flash-sessions and automatic parameter decoding. Most of those
things will be evident in the terminal window because of our ``wrap-spy``
middleware (e.g. there is now ``:session/key`` entry, which was absent before). 


If you use the ``secure-site-defaults`` instead of ``site-defaults``, you'll get
all of the above plus basic CSRF protection, XSS protection, SAME-ORIGIN
protection, and so on. That *does* mean you'll need to worry about including a
CSRF token in either a hidden form field or in a header, just like in Django.
Perhaps more importantly, unless you configure things properly, even your dev
server will need an SSL certificate, which isn't going to happen, and you run
the risk of the HSTS policy hitting your local browser with a long-lived
redirect cookie. All of this is something of a pain in the butt in your dev
environment, but you were just complaining about the lack of security a few
paragraphs ago, and now this issue is addressed, so don't come complaining to
*me*! Just be sure to study the security middleware documentation carefully and
configure it properly before you enable it for your local dev environment.

Before we move on, please take a moment to appreciate how the third layer of
middleware just slides on in there after the first one with no fuss, muss or
bother. The whole point of middleware is that we can keep adding to that ``->``
macro without needing to micromanage the relationship between the different
layers. The order that you place the middlewares in *can* matter
sometimes, but other than that, they are completely independent of each other.


Conclusion
================

Moving up to a *comprehensive* set of middleware, which (crucially!) includes a
standard set of *security* middleware by default, all of which is officially
supported via one anointed package maintained by the core devs, is a
tremendous, giganormous win for Ring. This new package goes a long, long way to
addressing the *missing batteries* problem that Ring has always had when
compared with Django. ``ring-defaults``: learn it, live it, love it.






                   
