.. Two dots without any valid following markup is a plain old ordinary comment. 
   Note the use of the ``compojure`` reference below: this makes this document 
   a valid target for other documents to provide internal links to. 

.. _compojure:

**********************
Compojure
**********************

As discussed in :ref:`ring_intro`, the fundamental purpose
of ``compojure`` is to build up a single uber-handler to be the single point of
entry for the web site. This is done by composing many individual routes, where
you can specify each route based on a few key pieces of data:

#. The HTTP request method
#. A glob-style string (sadly, you don't have the full power of regular expressions)
#. Expected arguments.
#. A reference to a single vanilla Ring handler.


Routes
===========

A **route** is a standard Ring handler function that's been associated with
an exact URI and method. In other words, it's a handler that might *match* a
specific HTTP request, or it might *not* match. The macros defined in
``compojure`` encapsulate that whole process: they store the URI, the method,
and the conditional logic to control whether or not a given request matches that
particular request. 

So routes are fundamentally one step of abstraction over and above where
handlers are. Every route wraps a handler, but it includes other logic. As such,
it makes sense to put your routes in their own namespace: a ``routes``
namespace. This new namespace will manipulate and refer to the core handler
functions, but it's much clearer if it isn't all mingled in with those handlers. 

We started this process at the end of :ref:`ring_details`, when we set up the
``volta.routes`` namespace, and defined the ``main`` and ``all-routes`` symbols:


.. code-block:: clojure

    (ns volta.routes
        (:require [volta.handlers :as h]))

    (def all-routes h/handler-beta)

    (def main #'all-routes)

The next step is to give ``all-routes`` contents that are more appropriate to
its name. 


(defroutes)
------------------

It turns out that there's no macro for defining a *single* route, because (by
definition!) the only reason you're using routes is because you are juggling
multiple different handlers. So the main macro is just ``(defroutes)`` *plural*,
and if for some strange reason you just want one route, you use ``(defroutes)``
with a sequence containing only one definition. 

The macro takes a name for the resulting sequence of routes, followed by a
sequence of individual route definitions. So we could bundle up our two existing
handlers into a symbol called ``greek-routes`` like so:

.. code-block:: clojure

    (ns volta.routes
        (:require [volta.handlers :as h]
                  [compojure.core :refer [GET ANY defroutes] :as cj]))

    (defroutes greek-routes
       (GET "/alpha" [] h/handler-alpha)
       (GET "/beta" [] h/handler-beta))

    (def all-routes greek-routes)

Now the server points to one uberhandler that handles either of those two URIs
(provided they involve a GET method). Note that after this change, we will get a
404 for any request to the root, because neither of those routes matches a root
request! We will of course fix that asap.


Combining Routes
...................

Let's add a new handler inside ``volta.handlers``, to handle the base case.

.. code-block:: clojure

   ;; inside volta.handlers; not repeating the entire file!
   (defn volta-home
     "A minimalist home page"
     [request]
     (rr/response
        (str  "<HTML><BODY><H1>Project Volta</H1>"
        (str request)
        "</BODY></HTML>")))   

Then back inside ``volta.routes``:

.. code-block:: clojure

   (ns volta.routes
     (:require [volta.handlers :as h]
     [compojure.core :refer [GET ANY defroutes] :as cj]))

   (defroutes greek-routes
     (GET "/alpha" [] h/handler-alpha)
     (GET "/beta" [] h/handler-beta))

   (defroutes all-routes
     greek-routes
     (ANY "/" [] h/volta-home))

   (def main #'all-routes)

Note that we've completely redefined ``all-routes``: where before it was
directly and plainly bound to a single uberhandler function, now it is, in turn,
defined by yet another call to the ``defroutes`` macro. And since we set
everything up with our double-indirection ``(main)`` symbol, the change will be
invisible to any outer entity using this namespace (i.e. ``lein-ring``). 

It's Routes All The Way Down
.......................................

Even cooler, note that the output of ``greek-routes`` is just plopped down into
the sequence of definitions provided to ``all-routes`` without any extra
ceremony whatsoever. Let's pause and contemplate this for a moment. We have
already established that the **input** to ``defroutes`` (after the name) is
always a sequence of route definitions. But now we see that the **output** from
``defroutes`` is a perfectly valid route definition in and of itself! As a final
wrinkle, all of the ``compojure`` method references (``GET``, ``POST``, ``PUT``,
``ANY``, and so on) are *also* macros, not functions... and they, too, define
one route each!

So the arguments to ``defroutes`` can be a wild and wooly mix of HTTP
method-name macros plus the unadorned output from other ``defroutes`` macros.
Compojure is 100% hip to the concept that any non-trivial web site will need to
nest routes, and so it makes the nesting process as easy and seamless as
possible.


(context)
-----------------------

Finally, let's show the use of the ``context`` macro, another one of the
fundamental macros included in the ``compojure.core`` namespace. This macro lets
you bundle up a sequence of routes so that they all share the same prefix.

.. code-block:: clojure

   (defroutes all-routes
       (cj/context "/greek" [] greek-routes)
       (ANY "/" [] h/volta-home))

Now when the server runs, the two routes inside ``greek-routes`` will be
accessible under the URI ``/greek/alpha`` and ``/greek/beta`` respectively. This
lets you define lower-level routes anywhere you like (even within their own
dedicated namespaces) and then assemble the actual working URIs in a top-level
namespace, as we are doing here. 

As a final example, just to emphasize the modularity and TIMTOWDIness of it all,
let's add two more handler functions to ``volta.handlers``:

.. code-block:: clojure

   ; most of volta.handlers is unchanged

   (defn red-page
     [request]
     (rr/response
       (str "<HTML><BODY style='background-color:red'>Red</BODY></HTML>")))

   (defn blue-page
     [request]
     (rr/response
       (str "<HTML><BODY style='background-color:blue'>Blue</BODY></HTML>")))

And then add two more routes to the main route, as unbundled, loose compojure
routes:

.. code-block:: clojure

   (defroutes all-routes
     (cj/context "/greek" [] greek-routes)
     (cj/context "/colors" []
         (GET "/red" [] h/red-page)
         (GET "/blue" [] h/blue-page))
     (ANY "/" [] h/volta-home))

And now the URI ``/colors/red`` leads to the ``red-page`` handler, while the URI
``/colors/blue`` leads to the ``blue-page`` handler. 

So now we've seen all of the possible things you can feed to a ``defroutes``
macro: a single loose route definition, or the results of another call to
``defroutes`` (containing as many nested sub-routes as you like) or the results
of a call to ``context`` (again containing potentially many sub-routes). These
examples give you the building blocks you need to assemble a site of any size,
from a small one where everything lives in one namespace, to a huge site with
routes and handlers split across many different namespaces.


miscellaneous helpers
------------------------

Finally, we should mention the ``resources`` and ``not-found`` macros, which
cover some very standard scenarios. The former specifies where to look for
static resources like CSS and JavaScript files, and the latter specifies the
handler for all requests that don't match anything (i.e. **404** responses).

With those two helper routes in place, the final contents of ``volta.routes``
would be as follows:

.. code-block:: clojure

   (ns volta.routes
     (:require [volta.handlers :as h]
               [compojure.core :refer [GET ANY defroutes] :as cj]
               [compojure.route :as route]))

   (defroutes greek-routes
     (GET "/alpha" [] h/handler-alpha)
     (GET "/beta" [] h/handler-beta))

   (defroutes all-routes
     (cj/context "/greek" [] greek-routes)
     (cj/context "/colors" []
         (GET "/red" [] h/red-page)
         (GET "/blue" [] h/blue-page))
     (ANY "/" [] h/volta-home)
     (route/resources "/")
     (route/not-found "Not Found"))

   (def main #'all-routes)

And now things are really starting to take shape, aren't they?


Extracting Parameters
========================

Finally, note that all of the examples above have used an empty vector (``[]``)
in the spot where you would extract parameters from the URL. Generally, this is
not a topic that I find difficult to grok, so I won't belabor it. The basic
rules are as follows:

#. If that empty vector is replaced with a naked symbol, it will be bound to the
   request map. Naming this anything other than ``request`` is just asking for
   trouble, but you are free to do silly things.
#. If that empty vector is replaced with a standard Clojure map destructuring
   form, then ``compojure`` performs that destructuring on the *request URI
   string*.
#. If the empty vector is replaced with a vector of symbol names, then
   ``compojure`` performs map destructing on the *request URI string* as though
   the vector were the arguments to ``:keys`` in a regular clojure map
   destructuring form.

In both of the latter cases, note that the destructuring looks inside the *URI
string* for fragments demarcated with a colon, as though they were Clojure
keywords. The colon is not a legal part of any URL, so there is no chance that
this will mistakenly match the wrong subset of any valid URL. 

Here are examples of all three forms:

.. code-block:: clojure

   ; Send the request map to the handler
   (GET "/gamma" request (h/handler-gamma request))

   ; Look for specific keys inside the URI
   (GET "/gamma/:foo/" {{:foo foo} :params} (h/handler-gamma foo))

   ;; Look for specific keys inside the URI (more idiomatic!)
   (GET "/gamma/:foo/" [foo] (h/handler-gamma foo))

Note that the third form is by far the most common one. It does the same thing
as the middle form, but in a much terser way. And the first form is redundant,
since the entire request map is already sent to every handler by default even if
you don't explicitly bind and pass on a ``request`` symbol manually (remember
that our original ``handler-beta`` function used the request map, but our route
definition above never explicitly sends it). So really, the third form is the
only one you need to remember... but you may see code in the wild using one of
the others.
   

See the `compojure wiki article`_ for more details on this topic.  

.. _`compojure wiki article`: https://github.com/weavejester/compojure/wiki/Destructuring-Syntax


A Final Note On Parameters
-------------------------------

Finally, note that extracting parameters *from the URI* is fundamentally
different from extracting them from the *query string* or as *submitted form
data*. Both of those tasks are handled by *middleware*, which we'll talk about
in the next section.

And note that this split is nothing odd or unusual: the same thing is true in
Django. You can bind variables from the URI as part of ``urls.py``, but to
access either the query string or form data, you must always manually extract
them from the ``request`` object inside your Django view function. The same
thing is true in the Clojure web stack. 





