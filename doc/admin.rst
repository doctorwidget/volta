.. _admin:

***************
Admin
***************


Intro
==========

As one last demonstration of everything working together before we migrate
things up to Heroku, let us create a rudimentary admin interface. In the long
run, you will want something much more elaborate than this (this is one of the
areas where Django really shines), but you have to start somewhere. 

The route for ``/admin`` already exists -- we created as a proof-of-concept demo
for authorization in the :ref:`friend` document. Now we will beef it up
significantly. This will involve changes to the usual quartet of suspects: the
template fragment, ``volta.routes``, ``volta.handlers``, and ``volta.db``. 


Template Fragment
--------------------

We won't duplicate the new template fragment here; you can inspect it at
``resources/public/html/admin.tpl.html``. We've added one div that will show all
of the currently-existing Mongo collections, along with the count of documents
for each collection. We've also added a **clear old sessions** button, which we
will use to clear out all sessions other than the currently-active one. In the
long run, a better solution would be of course to designate the ``web_sessions``
collection as a `TTL collection`_. But for now, we want to at least make sure
that administrators can kill all existing sessions (other than the one they're
in at the moment!). 

.. _`TTL collection`: http://docs.mongodb.org/manual/tutorial/expire-data/


volta.routes
-------------------

The pre-existing ``admin`` page is housed inside ``auth-routes``, which was the
bundle of routes we created when we first integrated Friend into the server. We
only need one new route; a POST endpoint for triggering the cleanup of old
sessions. This needs the same authorization protection that the admin page
itself has.

.. code-block:: clojure

    ;inside auth-routes

    (GET "/admin" request
           (friend/authorize #{::vdb/admin} h/admin-page))
    (POST "/admin/clean-sessions" request
           (friend/authorize #{::vdb/admin} h/clean-sessions!))


volta.handlers
-----------------

The first thing we do to the handlers is to beef up the ``defsnippet`` helper to
plug in data based on some new input arguments. The ``colls`` argument should be
a sequence of maps, where each map has a collection name plus a collection
document count. And of course, ``username`` should be self-explanatory. As
always, we expect the main function to calculate these values for us, so that
the snippet is free to concentrate on just plugging values in.

.. code-block:: clojure

   (h/defsnippet admin-body "public/html/admin.tpl.html"
     [:div#main]
     [colls username]
     [:.username] (h/content username)
     [:div#csrf] (h/html-content (af/anti-forgery-field))
     [:.mongoPanel :.oneColl]
     (h/clone-for [c colls]
        [:.oneColl :.collName] (h/content (:name c))
        [:.oneColl :.collCount] (h/content (str (:count c)))))

We've seen all of these operations before, but let's review them briefly. The
``#csrf`` div in this case applies to our upcoming *clean-sessions* button,
which we've implemented as a form that does a ``POST`` to the route we defined
up above. Meanwhile, we do a very simple example of the Enlive ``clone-for``
transformation, just plugging in the ``:name`` and ``:count`` values for each
map in the ``colls`` sequence supplied as an argument to this function.

Next, the ``admin-page`` function itself changes only a tiny bit. We call the
(as-yet-unimplemented) ``volta.db/collection-summaries`` helper function, which
will supply us with the ``colls`` argument mentioned above. And we pull out the
username tersely, using the thrush macro. Both of those values are sent as
arguments to the ``admin-body`` snippet helper.

.. code-block:: clojure

    (defn admin-page [request]
      (let [colls (v/collection-summaries)
            username (-> request auth-map :username)]
        (base-page {:title "Admin Demo"
                    :content (admin-body colls username)
                    :extra-css ["css/volta_admin.css"]})))

And as an aside, note that we're tossing in an extra stylesheet, which was not
part of the earlier incarnation of this function. 

Finally, we need to implement the handler for the ``POST`` route. This is
another example of the pattern we've seen a few times before in earlier
tutorials: call a database helper function to do the actual work, and then
promptly redirect to a different view. 

.. code-block:: clojure

    (defn clean-sessions!
      "Clean out all sessions other than the current session."
      [request]
      (v/purge-other-sessions (-> request :session :_id))
      (rr/redirect-after-post "/admin"))

As usual, we're trying to keep the ``volta.db`` namespace from needing to know
about or deal with HTTP sessions in any way. Therefore, we send it the
``ObjectId`` instance for the session after pulling it out of the request
ourselves. The ``volta.db`` namespace doesn't need to know anything about any of
that! 


volta.db
--------------

As always, we're trying to keep everything as encapsulated as possible, so we've
isolated both of the new database-related functions into the ``volta.db``
namespace. Now that we've been using ``Monger`` for a while, there's really not
to much to say about these new functions; both of them good clean Clojure with a
bit of ``Monger`` thrown in. 

First, the funciton that returns a summary of all of the collections. 

.. code-block:: clojure

    (defn collection-summaries
      "Get a vector of maps about each available collection in the database."
      []
      (mapv #(hash-map :name %  :count (mc/count db %)) (show-collections)))

Here we're re-using our show-collections function from earlier in ``volta.db``.
Then we just map an anonymous hashmap-making function over every available
collection name. Simple!

Next, the helper that purges sessions. This one has more work to do:

.. code-block:: clojure

    (defn purge-other-sessions
      "Purges all session other than the current session"
      [current-id]
      (let [selector {:_id {$ne current-id}}]
        (mc/remove db session-coll selector)))

This function takes an ``ObjectId`` instance, which is the one (1) and only
one (1) session that will **not** be cleared. The function itself is agnostic
about where that ID comes from; I suppose we could have named this function
``(clear-all-but-one)``. In practice, the handler function calculates this for
us, and sends it along, so that ``volta.db`` can remain blissfully ignorant of
Ring sessions. 

Next, we we define the selection object that we'll use to target sessions to be
deleted. That means we want everything **except** the currently active session.
To do that we use the ``$ne`` symbol from the ``monger.operators`` namespace,
which lets us say, in effect, *all documents except the one that matches this
id*. Note that we could skip this step; I kept the intermediate ``selector``
variable around because I had a temporary ``(println)`` statement while
developing this function. It would be useful to have this reference if we wanted
to do any kind of logging about what we were about to do, and keeping it around
makes it easier to highlight this first use of ``$ne``. 

Finally, we perform the actual removal of all of those sessions based on the
``selector``. Scary!



Extra Credit
=================

The most obvious improvement we could make to this whole system would be to
conver the ``web_sessions`` collection into a time-to-live collection, as
discussed above. That is a two-step process: first, we would have to make sure
that all of our session entries had ``:created`` and ``:modified`` keys, which
would mean writing some new custom middleware. After that, it's just a matter of
calling the ``ensureIndex`` command on that particular collection: see the Mongo
documentation for details. 

A second (and more ambitious) improvement would be to let this admin screen
perform all of the CRUD operations for user accounts. It could show the list of
all existing users as a ``list`` view, and then provide ``create``, ``update``
and ``delete`` operations for each of them. While we're at it, we would probably
want to add a password-reset route available from the ``update`` view. 

From there, it's easy to think of additional features we would want (many of
them based on features available in the Django admin UI). It would be nice to
keep track of the number of logins per account, the date and time for the most
recent login, the date and time the account was created, and so on and so forth.
All of those things would be great, but they all fall outside the scope of our
goals here: to get a complete database-driven Ring web server with
authentication up and running on Heroku. So think of all of these things as
extra credit, and plan to come back for them later. 

