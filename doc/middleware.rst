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
discouraging me from looking seriously into using Ring as a web server. The idea
of manually keeping a half-dozen or more completely separate dependencies
up-to-date was just too daunting. Security is too important of a concern to
handle in such an ad hoc way, and even with the help of ``Leiningen``, there
would be too many opportunities for me to allow packages to slip into
obsolescence.

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
        (:require [ring.middleware.defaults :as defaults]
                  ; other :requires are unchanged))

   ; most of file omitted

   (def wrapped-routes
       (-> all-routes
           (vm/ignore-trailing-slash)
           (defaults/wrap-defaults defaults/site-defaults)))

Now when you run the server, you will have access to parameters, cookies, and
sessions, plus basic CSRF protection, XSS protection, SAME-ORIGIN protection,
and so on. That *does* mean you'll need to worry about including a CSRF token in
either a hidden form field or in a header, just like in Django. This is a pain,
but you were just complaining about the lack of security a few paragraphs ago,
and now this issue is addressed, so don't come complaining to *me* about what a
PITA it is to follow through on all of the security issues!

Take a moment to appreciate how the second layer of middleware just slides on in
there after the first one with no fuss, muss or bother. The whole point of
middleware is that we can keep adding to that ``->`` macro without needing to
micromanage the relationship between the different types of middleware. The
order that you place the middlewares in *can* matter sometimes, but other than
that, they are completely independent of each other.


Conclusion
================

Moving up to a *comprehensive* set of middleware, which (crucially!) includes a
standard set of *security* middleware by default, all of which is officially
supported via one anoninted package maintained by the core devs, is a
tremendous, giganormous win for Ring. This new package goes a long, long way to
addressing the *missing batteries* problem that Ring has always had when
compared with Django. ``ring-defaults``: learn it, live it, love it.






                   
