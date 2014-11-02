   .. _sessions:

********************
Sessions
********************

This document provides a quick intro to using sessions, first just with the
default in-memory store, and then moving on to using :ref:`monger`, which means
we are finally coming full circle!


A Complete New Route
========================

Let's start by summarizing the process of getting a new route up and running.
There are three required steps we need to take, plus one optional-but-very-sensible one. 

#. Create new template fragment to be the target of a call to ``(defsnippet)``. 
#. Change ``volta.handlers``, adding a new ``(defsnippet)`` for the body
   function, and also a complete page function based on (or delegating to)
   ``(deftemplate)``.
#. Change ``volta.routes``, creating a route matching a new URI to the new page function.

The fourth-and-optional step is to change the ``home.tpl.html`` fragment so that
it shows a link to the new route. This is strictly for our own convenience, and
is absolutely not required.


Template fragment
------------------

The new template fragment is ``resources/public/html/sessions_simple.tpl.html``,
and we won't reproduce the whole thing here. However, there are few things to
point out about it. 

First, it has a form targetting itself (i.e. ``action=""``). Since the form
has a self-referential URI, the link is fairly robust. Unfortantely, because
Compojure does not have the equivalent of Djangos' named routes, we would have
to insert a brittle hard-coded URI if we were going to link to any other route. 


Next, note the existence of the CSRF placeholder:

.. code-block:: html

   <div id="csrf"></div>

This is an essential part of providing CSRF protection, which is really a very
basic and fundamental form of security. It gets turned on when you include
``ring-defaults/site-defaults`` (which is the basic level of site middleware,
not the advanced form!) whether you ask for it or not. When the page is
ultimately rendered, our handler function will have to call on a
``ring-anti-forgery`` utility function to replace this placeholder div with the
correct HTML containing our anti-CSRF token. This doesn't happen automatically,
and we will point it out again when discussing the handler function.

Note that ``ring-anti-forgery`` uses the *double token* strategy for CSRF
protection, just as Django does. In that system, the CSRF middleware on the
server expects to see the correct CSRF token *twice* for every non-GET request.

The first token comes from the cookies, which are *automatically* sent with every
request to the appropriate domain. Sadly, that *automatic-ness* is what *creates* the
security flaw in the first place, because it lets third-party sites submit
requests to *your* site that get to re-use *your* cookies even if the link
itself is hosted on a malicious page that is not under your control!

This flaw is fixed by requiring the second token, which is *not* automatically
sent, and which a third-party site has no way to access, review or trigger in
any way. The second token can be in a header or in a hidden form field; both
locations are entirely safe from third-party shenanigans. Using a hidden form
field makes sense for a form-based submission like this one. If you were
making an AJAX request, you would want to set one of the standard ``X-CSRF`` 
request headers: see the ``ring-anti-forgery`` docs for more details. 



Handlers
------------

Next, let's talk about the new handler functions inside ``volta.handlers``. When
all is said and done, we end up adding three new functions for a complete
GET/POST cycle. Django would handle that all in one single function (at the cost
of some clarity, IMHO), but Django also spreads some of you code logic inside
the template itself. Clojure has three smaller functions and 100% pure
templates, rather than one big function and an impure template.


The Body Function
......................

This is the ``(defsnippet)`` for the route: it will create the main content for
the page, but not the entire page. It is shown below in its entirety:

.. code-block:: clojure

    (ns volta.handlers
       (:require [ring.util.anti-forgery :as af]
                 ; rest of this block unchanged))

    ; most of file elided

    (h/defsnippet session-body
      "public/html/sessions_simple.tpl.html"
      [:div#main]
      [request] ; NOTE: argument sent!
      [:span#visitCount] (h/content (str (get-in request [:session :visit-count] 0)))
      [:ul#toDoItems :> :li] (h/clone-for [t (get-in request [:session :todos] [])]
                                          (h/content t))
      [:div#csrf] (h/html-content (af/anti-forgery-field)))

Note that this is the first time we're seeing ``(defsnippet)`` invoked with the
request map as an argument! In the past we've just omitted it and left the
arguments vector empty -- presumably Enlive or Compojure does some macro magic
for us behind the scenes in those cases. But this time we need it and want it,
so we declare it. The function then contains three transformation dyads.

The first dyad selects the ``visitCount`` span and sets its contents to equal
the total number of visits. Note the use of ``(get-in)`` to try to keep things
relatively terse, along with a default value of 0 should we end up with ``nil``.

The second dyad is our first look at Enlive-based repeats; it should be fairly
self-explanatory. The arguments to ``h/clone-for`` are a *for*-style vector
(e.g. *for i in items*, or in this case *for t in todos*, where *todos* is
generated on the spot via another call to ``(get-in)``). Then you follow that
with a series of transformation *monads* (as opposed to *dyads*): the target
will always be the newly-repeated node, so you just include the transformations.
There is an implied ``(do)`` going on here, so you could include as many
transformation monads as you like, but our needs are simple, and we just have
one transformation for each new ``<li>`` item.

The final dyad replaces the placeholder CSRF div with the required hidden form
field for use with our ``ring-anti-forgery`` middleware. Note that
``(ring-anti-forgery/anti-forgery-field)`` generates a complete blob of
already-escaped HTML, which means we need to insert it with the Enlive
``html-content`` function, instead of our usual vanilla call to ``content``.
Now when the POST request is made, the hidden form field will exist and be
populated with the correct second token to match the (insecure) cookie tokens
that kicked off this whole CSRF problem in the first place. 

Finally, note that this function is completely *passive*: it reports on the
current status of the request, but it does not alter the session or request in
any way. It is a read-only function!


The Page Function
......................

The page function, on the other hand, contains the logic required to modify the
session and keep the total count up to date. 

.. code-block:: clojure

   (defn session-page [request]
     (let [old-session (:session request)
           new-session (update-in old-session [:visit-count] (fnil inc 0))
           new-request (assoc request :session new-session)
           response-body (base-page {:title "Simple Sessions"
                                     :content (session-body new-request)})]
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body response-body
        :session new-session}))


This is a pretty long function compared to our previous page functions. We are
explicitly *not* trying to play code golf here! Everything could be made terser
if we didn't have all of these named intermediates inside our ``(let)`` block,
but I don't think that would actually be any *clearer*. 

The good news is how clean and purely-functional this approach is: everything is
happily immutable, and we are not bashing any atoms around in place. Instead, we create
new references at every step, and save named references to them for clarity.

Also note that we explicitly send along the modified request (aka
``new-request``) as the only argument to ``(session-body)``. As we discussed
above, this is the first time we're doing that, and we do have to follow through
at every stage. Outside of your top-level ``compojure`` macros, you should never
expect to *automatically* get free access to any request maps! Instead, you must
always declare it in your arguments vector and be sure to pass it along to
helpers.

Also note that we are *explicitly* returning the complete response map. The
``(base-page)`` function that we've been using all along 
delegates to ``(deftemplate)``, which means it only returns a *sequence of
strings*. But a Ring response must be a **map**, not a **sequence**. Yet all of
our prior examples just returned the results of ``(base-page)`` and they worked
just fine. What's up?

It turns out that ``compojure`` has been providing you with invisible help all
along. If your ``compojure`` route definition return a plain string (which all of
our previous examples have done so far), ``compojure`` handles the rest of the
details for you, attaching your string as the ``:body`` of a complete response
map. When you *invoke* a function that evaluates to a string (which is very
easy to do when you are writing simple *Hello World*-style functions that take
no arguments and do very little), you end up returning that string, and
``compojure`` just *Does The Right Thing* with it, creating the complete response map
for you automagically.

That's worked fine until now, although it has perhaps misled us a bit about the
real nature of what's happening under the hood. But now that we want to specify
a ``:session`` key as part of the response, we can't get away with that implicit
magic any more. Instead, we must manually create our response map, which we do
here, explicitly specifying the *modified* session object in our final response
map.

Couldn't we just skip that final step of associating an explicit ``:session``
key onto the response map? Absolutely not. Remember that as we laboriously
demonstrated in a previous tutorial, each layer of middleware expects to get a shot at
both the request map **and** the response map.  That's an explicit part of the
social contract that lets middleware work. And *session* middleware absolutely
needs to do stuff during both phases: it must pull out the old session from the
persistent data store for requests, and it must store the new session in the
persistent data store for responses. So you *must* return your session map under
the ``:session`` key in your response, or the whole system breaks down.



Routes
----------

Finally, we wire this route up inside ``volta.routes``.

.. code-block:: clojure

   (defroutes session-routes
       (GET "/sessions/simple" [] h/session-page))

This is vanilla Compojure 101 stuff. We supply a reference to our function as a
first-class object as the fourth and final argument to the macro. In theory we
could explicitly replace the empty vector with a symbol to map the request to,
and then explicitly invoke our handler with that request as an argument, but
that would make that line of code longer and noisier without changing the net
effect one bit.


Handling POSTS
=================

In the preceding section, we wired this up to work with GET requests only. But
what if a user wants to add an item? The ``sessions_simple.tpl.html`` source
file includes an HTML form with an action of ``POST``. Right now, that would
generate an error, which will never do. Let's fix that.

In Django, this would be handled by one function that had an ``if/else`` clause
for handling ``GET`` and ``POST`` separately. In Clojure, we will instead use
completely separate handlers for the two different HTTP methods. The ``POST``
handler will do its business and then apply a server-side redirect back to the
``GET`` handler. That way we can re-use all of the earlier code, keeping
everything nice and DRY.

This time we'll go in reverse order, starting from the routes and working our
way back to the handlers. We don't need to create any new HTML documents or
fragments, since our existing template includes space to generate the list of
TODO items. 


Routes
---------

We will add the ``POST`` route inside the same context as the ``GET`` route, so
they are obviously related to anyone reviewing the code.

.. code-block:: clojure

   (defroutes session-routes
     (cj/context "/sessions" []
                 (GET "/simple" [] h/session-page)
                 (POST "/simple" [] h/add-todo-item)))  

Now both routes share the same ``/sessions/simple`` URI, but all ``GET``
requests will be served by ``h/session-page``, whereas all ``POST`` requests
will be served by our new ``add-todo-item`` handler. 


Handler
----------

Here is our complete ``(add-todo-item)`` function from ``volta.handlers``:

.. code-block:: clojure

   (defn add-todo-item
     [request]
     (let [items (get-in request [:session :todos] [])
           new-str (get-in request [:params :todo] :empty)
           new-items (if (= :empty new-str)
                       items
                       (conj items new-str))
           new-session (assoc (:session request) :todos new-items)]
       (assoc (rr/redirect-after-post "/sessions/simple")
         :session new-session)))   

Again, note how purely functional this is: there is no mutability anywhere. That
comes at the cost of some verboseness, but again we're not even trying to
minimize that, since we're naming and keeping various intermediate values as we
go. Code golfers could certainly shrink this down quite a bit.

Also note that the final expression is perhaps a bit tricksy. The response map is
created via ``rr/redirect-after-post``, and then promptly gets the new session
associated with it. The entire final expression evaluates to the response plus
the new session, which is what is returned for the function, to be passed up the
chain so that the session middleware can persist the new session to the
datastore. *Whew!*

While we're here, we should mention a subtle difference between the ``:params``
and ``:form-params`` maps, which are attached to our request via the
``ring-defaults`` middleware. The ``:form-params`` map contains all of the items
that came in as part of a multipart form submission. All keys for this map are
exactly as they were in the original HTML, which means keys are plain vanilla
strings. In contrast, the ``:params`` map merges the ``:form-params`` map with
the ``:query-params`` map (which in turn contains parameters extracted from the
query string as urlencoded key-value pairs). The ``:params`` map uses Clojurized
keywords as arguments, even though the original inputs were always plain vanilla
strings. Just something to keep in mind when dealing with user input. 

Finally, note that ``rr/redirect-after-post`` returns status code ``303 (See
Other)``. This is apparantly considered by some to be the appropriate response
to a POST that changed the server in some way. I'm don't think most RESTful APIs
(at least not the ones I've seen) use this status code that way, but it's always
fun to see HTTP status codes used in new and exciting ways!


Summary
----------

With this new function in place and matched to a compojure route, users can now
run the complete GET/POST cycle, building up a list of todo items as arbitrary
strings.



Sessions In Mongo
======================

The obvious problem with this setup is that the to-do list will persist as only
as long as the users' session does. By default, Ring sessions use an in-memory
datastore, which means all sessions are wiped clean whenever the server restarts
or hiccups. 

The *most* useful way to keep a to-do list would obviously be to store those
items in a database as their own first-class entries, rather than making them a
subset of any kind of session. We'll get there eventually (baby steps!), but for
now, let's at least improve our sessions to use a persistent database rather
than the default in-memory datastore.

``Monger`` contains plug-and-play helper functions that let you use it to store
your Ring sessions. That will take a bit of wiring, which we will start on next. 


Run Mongo
-----------------

Start by running ``mongod`` in its own terminal. Duh!


volta.datastore
-----------------

Next, we'll create a new namespace called ``volta.db``, where we can call all of
the database-related configuration and connection code. In the long run, for a
real app, you would certainly want to have sub-namespaces of this namespace, but
for now, we'll toss everything together here. 

.. code-block:: clojure

   (ns volta.db
     (:require [monger.core :as m]
               [monger.db :as md]
               [monger.collection :as mc]
               [monger.operators :refer :all]
               [monger.ring.session-store :refer [session-store]])
     (:import org.bson.types.ObjectId))

   ; create the connection
   (def conn (m/connect))

   ; specify one particular database
   (def db (m/get-db conn "volta"))


   (defn show-collections
     "Show all available collections. Intended for easily checking
     this in a REPL without needing to import anythign but this namespace."
     []
     (md/get-collection-names db))

   (defn oid
     "Generate one random ObjectId."
     []
     (ObjectId.))

   (def monger-store (session-store db "web-sessions"))


The last line is perhaps the most important one here; the ``monger-store``
symbol is now bound to a closure that can be fed to the ``ring-defaults``
configuration map, telling Ring to use Mongo as the storage, rather than the
default in-memory store.

You should take a moment and play around with the namespace above in a REPL for
a minute before proceeding. The hope is that this namespace will be our window
into interacting with Mongo without needing to do all of the tedious imports:
just one ``(require '[volta.db :as v])`` and we should be able to run all of our
desired commands as ``v/blahblahblah``.

With that done, it's back to ``volta.routes`` so that we can tell
``ring-defaults`` to use our new ``monger-store`` instead of the default store.


volta.routes
----------------

We're interested in our middleware configuration:

.. code-block:: clojure

   (def wrapped-routes
     (-> all-routes
         (vm/ignore-trailing-slash)
         (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])
         (d/wrap-defaults d/site-defaults)))   

Remember that ``d/site-defaults`` is nothing more than a map predefined in the
same namespace as the ``wrap-defaults`` function. All we need to do is specify
our new ``monger-session-store`` as the appropriate session store. We do that by
associating the new key and value with the predefined map supplied by
``ring-defaults``. This creates a new, very-lightly-modified configuration map,
which we will save as ``volta-defaults``.

.. code-block:: clojure

   ; don't forget to add volta.db to the :require clause!
   (ns volta.routes
        (:require [volta.db :as vdb]
                  ;others elided
         ))

   (def volta-defaults 
     (assoc-in d/site-defaults [:session :store] vdb/monger-store))

   (def wrapped-routes
     (-> all-routes
         (vm/ignore-trailing-slash)
         (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])
         (d/wrap-defaults volta-defaults)   

And that's it!


Victory!
-------------

Now when you visit the sessions page, everything should work just as it did before, EXCEPT
that sessions now persist even if you start and stop the server! 

As a second confirmation that everything is working as expected, you can use a REPL to
load the ``volta.db`` namespace and confirm via ``show-collections`` that the
brand new ``web-sessions`` collection has been created. Better yet, let's add
some additional utility functions to the ``volta.db`` namespace:

.. code-block:: clojure

    ; inside volta.db

  (defn get-web-sessions
      "Get all current web-sessions as Clojure maps"
      []
      (mc/find-maps db "web-sessions" {}))

You can use ``(get-web-sessions)`` in a REPL to get a view of all of the actual
sessions maps exactly as they are stored in the database. You can save a
reference to the results and inspect them at your leisure: for now, you're
likely to see just one session for your current browser (mine is Chrome). Try
opening a second browser (say, Firefox) and start a new session by connecting to
our ``/sessions/simple`` route. Once you've done that, calling
``(get-web-sessions)`` in the REPL should instantly show the new
Firefox-specific session right alongside the Chrome session.

At this point, we have achieved one of the most important batteries so
prominently and peculiarly missing from a vanilla Ring setup: persistent
sessions stored in the database of our choosing. Obviously, if we continue down
this road, we would soon want to add more utility functions to ``volta.db``,
allowing us to (for example) delete old sessions and so on. But that's a story
for another tutorial. For now, bask in the glory of a truly persistent session
setup. 



   
