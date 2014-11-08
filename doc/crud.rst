.. _crud:

***************
CRUD
***************

Next, let's create a demonstration page for showing basic CRUD operations. We'll
let users *create*, *read*, *update*, and *delete* from a list of notes. This
will only work for logged-in users, and each user will have their own list of
notes, which means this example will integrate pretty much everything else we've
seen up to now.

Obviously this sort of task cries out for an AJAX API approach. But you have to
start somewhere, so we're going to start with a classic round-trip form-based
approach. Perhaps the final addition to the Volta project will be a
ClojureScript-based single-page version of this section.


Create
============

Let's start with *create*, since there's obviously nothing to read, update or
delete until something has been created. Implementing each new CRUD route will
always involve the same set of five changes:

#. Make a template fragment inside ``resources/public/html``
#. Add a route to ``volta.routes``
#. Add a handler (plus any desired helpers) to ``volta.handlers``
#. Add database function(s) to ``volta.db``
#. Add links from *somewhere* on the rest of the site to the new route!


template fragment
----------------------

In this case, the template fragment is
``resources/public/crud-create.tpl.html``. The contents are simple:

.. code-block:: html

   <div id="main">
      <h1><span class="verb">New</span> note for <span class="currentUser"></h1>
      <form action="" method="POST">
           <label><strong>Title: </strong>
               <input type="text" name="title" class="title" 
                      placeholder="Enter title">
           </label>
           <label><strong>Contents: </strong>
               <textarea rows="3" cols="50" 
                         name="contents" 
                         class="contents">Type here...</textarea>
           </label>
           <div id="csrf" />
           <input type="submit" value="Save">
      </form>
      <hr>
      <div class="loginStatus">Placeholder for login status info</div>
   </div>

For the most part, this is just a simple HTML form, but there are quite a few
little details that would be a pain in the ass to create and fine-tune if we
were creating HTML elements one-at-a-time in Clojure (i.e. in ``Hiccup``).
Thanks to ``Enlive``, we can create it, preview it, and update it as a pure HTML
fragment. Note the inclusion of several attributes as markers to use as targets
at transformation time: ``.currentUser``, ``#csrf``, ``.loginStatus``, etc.


route
---------------

Inside ``volta.routes``, we'll start a new set of routes that can later be
incorporated into our main ``all-routes`` handler:

.. code-block:: clojure

   (defroutes crud-routes
     (GET "/create" [] h/crud-create-page)
     (POST "/create" [] h/crud-create!))

As we discussed when we introduced session-based notes in an earlier tutorial,
the Ring pattern is to have separate ``GET`` and ``POST`` routes right from the
start, in contrast to Django where you would mix them in a single route by
default. I note that the Django devs clearly prefer that people migrate to their
new class-based views system, and in that system, ``GET`` and ``POST`` are
separate by default, just as we are doing here. 

Obviously we will need to implement those handlers ASAP. But before we do that,
let's show how this is placed inside the ``all-routes`` uberhandler. We will of
course, need a Friend authorization check:

.. code-block:: clojure

   (defroutes all-routes
       ; earlier routes omitted for clarity
       (cj/context "/crud" []
               (friend/wrap-authorize crud-routes #{::vdb/user}))
       ; other routes unchanged
       ; ... etc etc
       (ANY "/" request h/volta-home)
       (route/not-found "Not Found"))

The location of the ``friend/wrap-authorize`` is very important; it must happen
*inside* the context or you will hit a rather subtle bug. When
``wrap-authorize`` is located outside of a ``cj/context`` block, then the Friend
authorization check happens on *every* request when the routing gets to this
block, meaning all of the handlers after this one in the list are blocked unless
you pass this local authorization check! So even the public ``ANY`` route and
the generic resources route would be blocked for unauthorized visitors! That's
obviously not what you intend to happen.

By locating the authorization check *inside* the context, the authorization code
will only run if and only if the outer context URI is matched, and under no
other circumstances. And that *is* exactly what we want.


handler(s)
---------------------------------

First, let's look at the ``volta.handlers/crud-create-page`` function, along
with its ``(defsnippet)`` sidekick/helper. By now this should be a very
familiar pattern:

.. code-block:: clojure

   (h/defsnippet crud-create-body 
     "public/html/crud-create.tpl.html"   ; target HTML fragment
     [:div#main]                          ; selector for HTML fragment
     [username status]                    ; arguments
     [:.currentUser] (h/content username)
     [:div#csrf] (h/html-content (af/anti-forgery-field))
     [:.loginStatus] (h/content status))

   (defn crud-create-page
     "Handles GET requests to create a new note"
     [request]
     (let [authmap (auth-map request)
           username (:username authmap)
           status (login-status request)
           contents (crud-create-body username status)]
       (base-page {:title "New Note"
                   :content contents})))
  

The ``(defsnippet)`` helper targets the HTML fragment we just created above. It
targets and fills in the various fields we mentioned above. Remember that
because we wisely used ``ring.util.anti-forgery`` as part of our
``ring.defaults`` middleware, we must follow through and include a CSRF token as
part of all ``POST`` (and ``PUSH`` and ``PATCH`` and so on) requests to the
server. 

The ``crud-create-page`` function is the one that's actually called from the
``volta.routes`` namespace. It pulls out the required arguments (such as the
username and the login status) and sends them along to the ``defsnippet``
helper. Note that because ``(defsnippet)`` is a macro with fairly rigid
requirements for how its body is arranged, it's *much* easier to create
intermediate arguments in the main function and then send everything to the
``defsnippet`` as ready-to-go values, as we have done here.

Finally, let's look at the ``volta.handlers/crud-create!`` function, which is
the handler to all ``POST`` requests to this route.

.. code-block:: clojure

   (defn crud-create!
     "Handles POST requests to create a new note"
     [{{:keys [title contents]} :params :as request}]
     (let [authmap (auth-map request)
           username (:username authmap)
           uuid (:_id authmap)]  
       (println (format "New note titled %s (contents: %s) for %s (%s)"
                        title contents username uuid))
       (v/new-note! title contents uuid)
       (rr/redirect-after-post "/crud/list")))   

The most complex thing here is the deconstruction of the arguments, which is
admittedly somewhat gnarly. This function expects precisely one (1) map as the
sole argument: the standard Ring request map. It pulls out the ``:params``
sub-map, and then performs a second level of deconstruction on that, seeking out
the ``:title`` and ``:contents`` keys therein. Meanwhile, we retain a reference
to the original Ring map under the binding ``request``. This gets all of the
information that we need out in one single line.

After that, the function is pretty straightforward, mainly involving pulling
info out of the authorization map. We re-use the ``auth-map`` helper that we
wrote for the login page, but we're not duplicating that code here; you can find
it inside ``volta.handlers``. The ``uuid`` is an instance of
``org.bson.types.ObjectId`` that we will use to store an ``:owner`` property on
the new note. Meanwhile,  the ``println`` is completely optional; I found
it helpful during development but you could easily take it out. 

The real action takes place in the final two expressions. The first is an
as-yet-unimplemented helper function ``(v/new-note!)``, which we will have to
implement ourselves inside ``volta.db``. The second is a
``ring.util.response/redirect`` back to the list view. But wait! We haven't
implemented the list view yet either! Obviously, these very early stages are
hard to develop in a completely incremental way. *C'est la vie.*


database 
----------------------

Inside ``volta.db``, we'll add a couple of timestamp-related requirements to the
main namespace declaration:

.. code-block:: clojure
   
   (ns volta.db
      (:require  ; ... others elided...
                 [clj-time.core :as t]
                 [monger.joda-time :as mjt]))
              
See the Appendix for a much longer discussion of time-related issues. For now,
just know that we are going to use ``clj-time`` instead of relying on plain old
``java.util.Date``, which Clojure gives you interop access to by default.
``Monger`` supports either one, but you really don't want to spend your time
wrangling native Java time classes, trust me.

Then with that done, we can implement our first note-related database code:

.. code-block:: clojure

    (def note-coll "user_notes")

    (defn new-note!
      "Add a new note to the database"
      [title contents uuid]
      (mc/insert db note-coll {:_id (oid)
                               :title title
                               :contents contents
                               :owner uuid
                               :created (t/now)
                               :modified (t/now)}))

Note that we're using underscores instead of dashes in our collection names.
Lisp-style dashes would be more idiomatic in Clojure, and there's no problem
using them with ``Monger``-related Clojure code. But if you ever need to use the
native Mongo command-line client, you'll find that it chokes on all names with
dashes, trying to interpret them as minus operators. Since Clojure and
``Monger`` are perfectly capable of using either, we'll respect the limits of
JavaScript and Mongo, and use underscores instead of dashes.

The ``new-note!`` function itself is very straightforward. It is just a standard
call to ``monger.collection/insert``, which we have seen many times before. It
expects to receive ``title`` and ``content`` as strings, and it expects to
receive the ``uuid`` as an instance of ``org.bson.types.ObjectId``. We saw how
those things were picked out in the handler up above. The ``title`` and
``content`` will come in over the wire as strings by default, and since we're
pulling the ``uuid`` from a Friend authorization map, it's already an
``ObjectId`` by default. 

Once all the input arguments are accounted for, the rest of the function is a
plain old insert. We generate a fresh ``ObjectId`` using our ``(oid)`` helper,
since the input UUID is intended to link to the ``:owner`` property, rather than
being the unique ``:_id`` for the new note. The ``:owner`` field is, in effect, a
*foreign key*, though such SQL-esque terminology sounds distinctly out of place
in this MongoDB environment. We also generate ``:created`` and ``:modified``
timestamps using the ``clj-time`` library.

And that's it!  When this helper is called, the new note will be created and
inserted, with the correct ``:owner`` and timestamp information. 


links
----------------------

We don't want to have a link to creating notes anywhere on a main page; the only
sensible place to put is inside the CRUD ``list`` view, which we're about to
make next. So let's do that!



Read
==============

**Read** operations come in two flavors: *read-single* or *read-list*. Since our
*update* and *delete* views will load a single note as a matter of course,
spending time on a dedicated *read-a-single-note* won't be necessary. Therefore,
we will implement a *read-list* view that shows everything about the note,
and have no other dedicated *read* route.

Note that we already implemented a generic ``/crud/`` route when we were talking
about Friend. Rather than *altering* that pre-existing code, we will simply add
a new route for the URI ``/crud/list``, and create a link to it from the older
``crud.tpl.html`` document fragment. The documentation will be better off
growing by adding new examples, rather than changing old examples. 


template fragment
---------------------------------

The list fragment can be found in ``resources/public/html/crud-list.tpl.html``.
It's shown here:

.. code-block:: html

    <div id="main">
       <h1><span class="currentUser"></span>s' notes</h1>
       <div id="allNotes">
             <h3>You have <span class="noteCount"></span> notes.</h3>
             <div class="oneNote" oid="">
                 <a href="" class="title"></a>
                 <div class="timestamps">
                     <span class="created"></span>
                     <span class="modified"></span>
                 </div>
                 <div class="contents"></div>
                 <span><a class="delete" href=""></a></span>
             </div><!-- ./.oneNote -->
       </div><!-- ./.allNotes -->
       <div class="buttonbar">
          <form method="GET" action="/crud">
             <button>CRUD Home</button>
          </form>
          <form method="GET" action="/crud/create">
             <button>Add note!</button>
          </form>
       </div><!-- ./.buttonbar -->
       <hr>
       <div class="loginStatus">Placeholder for login status info</div>
    </div><!-- ./#main -->

Again, we've sprinkled in a number of extra attributes on purpose so that we can
use them in our Enlive transformations. There is also a fair amount of
associated CSS inside ``resources/public/css/base.css``, but that is, of course,
*not* an essential part of the functionality.


route
----------------------

This route is only ever accessed as a ``GET`` request. Note that if we were
making a JavaScript API instead of a form-based system, there would be no
``create`` route, and a ``POST`` to the ``list`` route would be the way users
triggered a creation event. But we're doing a form-based system, so all the list
view has is ``GET`` access. 

.. code-block:: clojure

    (defroutes crud-routes
      (GET "/create" [] h/crud-create-page)
      (POST "/create" [] h/crud-create!)
      (GET "/list" [] h/crud-list-page))

There's nothing much else to say here; time to write the handler!


handler(s)
----------------------

First let's look at the ``(defsnippet)`` helper, which has quite a bit going on. 

.. code-block:: clojure

    (h/defsnippet crud-list-body "public/html/crud-list.tpl.html" 
      [:div#main]
      [username notes status]
      [:.currentUser] (h/content username)
      [:.noteCount] (h/content (str (count notes)))
      [:.loginStatus] (h/content status)
      [:#allNotes :.oneNote]
      (h/clone-for [note notes]
         [:div.oneNote] (h/set-attr :oid (:_id note))
         [:div.oneNote :a.title] (h/content (:title note))
         [:div.oneNote :a.title]  (h/set-attr :href (str "/crud/" (:_id note) "/update"))
         [:div.oneNote :.created] (h/content (str "created: " (:created note "n/a")))
         [:div.oneNote :.modified] (h/content (str "modified: " (:modified note "n/a")))
         [:div.oneNote :.contents] (h/content (:contents note "n/a"))
         [:div.oneNote :a.delete] (h/content "X")
         [:div.oneNote :a.delete] (h/set-attr :href (str "/crud/" (:_id note) "/delete"))))  


Again, we assume that the main function will call this snippet with all of the
preparation work done, so that the snippet can just plug values in without doing
any logic of its own. The first few transformations are all identical to the
ones we saw earlier, but that last one kind of ginormous, mainly because it's
the first time we're seeing Enlives' ``clone-for`` function in action.

This function works similarly to a standard Clojure ``(for)`` macro. The first
argument is a vector that deconstructs a collection (``notes``) into a reference
that will be used once per loop (``note``). After that we have a sequence of
transformation dyads, just like we have in the outer ``(defsnippet)``. So we
have an inner sequence of dyads as part of the overall sequence of dyads... stay
with me here! 

The outer dyad was defined based on the ``[:#allNotes :.oneNote]`` selector, and
each inner transformation dyad gets a chance to define a new selector. The inner
selectors can safely assume that they will only find nodes inside the outer dyad
node. 

Once we have *that* all sorted out, the rest of the ``clone-for`` macro is
straightforward. We're just plugging values into various sub-nodes of the main
outer node. The main thing that leaps out as me as noteworthy is the need to
manually create ``:href`` strings: I miss Django's named routes. It seems to me
that any moderately-large Ring project would absolutely need to have some
home-grown equivalent to those named routes, because repeated manual string
monging is brittle and error-prone. At the very least you could create your own
namespace with a map of keywords to URI patterns, and use that same map both to
create the original Compojure routes, and again in functions like this.

Next, we have the main function ``crud-list-page``. Again, this function is
*not* trying to play code golf! It would be easy to condense many of these
intermediate variables, but my goal here is clarity over conciseness. 

.. code-block:: clojure

    (defn crud-list-page [request]
      (let [authmap (auth-map request)
            username (:username authmap)
            user-id (:_id authmap)
            notes (v/all-notes-for-user user-id)
            total (count notes)
            status (login-status request)
            contents (crud-list-body username notes status)] 
        (base-page {:title "Note List"
                    :content contents})))

Again, note the final call to the snippet helper, with exactly the values it
needs already calculated. 

And finally, note the call to the ``volta.db/all-notes-for-user`` helper
function, which we will implement next. 

database
----------------------

That new helper function is super easy to implement; it would have been trivial
to implement it as a one-liner inside the handler. But it is a much much better
approach to encapsulate every single database access instance to the
``volta.db`` namespace, so that's what we've done here. If we ever want to
refactor anything, we'll be very happy that we did it this way. 

.. code-block:: clojure

    (defn all-notes-for-user
      "Get all of the notes associated with a single *user*, specified by the UUID
      of the *owner*. The input must be an *instance* of ObjectId, not a string."
      [uuid]
      (mc/find-maps db note-coll {:owner uuid}))

There's not much to say about this function; it is more or less Monger 101. The
only remotely interesting point is that once again, the ``uuid`` parameter is an
actual instance of ``org.bson.types.ObjectId``, rather than being a plain
string. That works out fine because we originally pulled it out of a Friend
authentication map which was in turn backed by a Monger session store. That
means Monger was the ultimate source of the ``uuid`` in the first place, and
therefore it's going to come to us as an ``ObjectId`` automagically. From Monger
to Monger, so it was, and so it shall be.



links
----------------------

As we mentioned earlier, we have a generic landing page for the ``/crud`` URI,
which we have modified to link to this new ``/crud/list`` URI. You can see the
template fragment for it at ``resources/public/html/crud.tpl.html``. 

Also note that our ``(defsnippet)`` helper put in the correct ``delete`` link
for each and every note as part of its ``clone-for`` loop. That means we now
have everything linked up by visible pages somewhere. 

All of which means that you could run the server at this point and you would be
able to create new notes and review your existing note collection. That would be
fine if you wanted a write-once read-many system, but most of the time you're
going to want to be able to update and delete as well, so let's add that next. 


Update
=========

**Update** operations will take the same series of steps that the earlier two
did, and we won't go through them in as much detail. 

template fragment
--------------------

The *update* route is going to re-use the original *create* fragment, with a few
minor changes to how we transform it via ``Enlive``. That's called keeping it
DRY, baby.

route
--------

The route is worth commenting on, because it's the first time we're going to see
parameters pulled out of the URI. 

.. code-block:: clojure

      ; inside volta.routes/crud-routes 

      (GET "/:id/update" [id :as request]
           (h/crud-update-page request id))
      (POST "/:id/update" [id :as request]
            (h/crud-update! request id))


Compojure tutorials always start with clear examples of doing pulling out URI
parameters, but they never seem to show you how to *both* pull parametes out of
the URI *and* also keep a reference to the original request. Thanks to some
googling and some trial-and-error, I've figured out how to do this, as shown
above. The syntax looks more than a little bit weird, but it works, and it's
pretty damn concise to boot.


handler(s)
-------------

Again, ``volta.handlers`` will have a combination of a ``(defsnippet)`` helper
with a public-facing ``(crud-update-page)`` function. This time, the original
``create`` template fragment is being repurposed to do updates, which means it
needs to change a few key words on the page, and pull out some pre-existing
content from the note being updated. 

.. code-block:: clojure

    (h/defsnippet crud-update-body "public/html/crud-create.tpl.html" [:div#main]
      [username status note]
      [:.currentUser] (h/content username)
      [:div#csrf] (h/html-content (af/anti-forgery-field))
      [:h1 :span.verb] (h/content "Update")
      [:input.title] (h/set-attr :value (:title note "wtfnil"))
      ;; note: inputs need h/set-attr
      [:textarea.contents] (h/content (:contents note "wtfnil"))
      ;; but textareas need h/content!
      [[:input (h/attr= :type "submit")]] (h/set-attr :value "Update")
      [:.loginStatus] (h/content status))

Note that we still need that pesky ``div#csrf`` transformation. Security is a
thankless task. 

Also note the crazy-looking selector near the end: ``[[:input (h/attr= :type
"submit")]]``. That's definitely the most complex selector anywhere in this
project. The *inner* vector denotes an ``AND`` operation, so this can be read as 
*select an input which also has an attribute of type 'submit'*. See the Enlive
documentation for more. 



database
-------------

The database helper for updating is a bit more elaborate than the ones we've
seen before. As always, we expect an ``ObjectId`` argument, plus strings for the
*new* values of ``:title`` and ``:content``.

.. code-block:: clojure

    (defn update-note!
      "Update a note. We could also use mc/update-by-id here, but for now I prefer
      the more generalized (but more verbose) syntax."
      [uuid title contents]
      (mc/update db note-coll
                 {:_id uuid}
                 {$set {:title title :contents contents :modified (t/now)}}
                 {:multi false}))

Note that this time around, the UUID refers to the *note* and not the *author*.
When we performed *creation*, the supplied UUID was for the *author*, but this
time around we are trying to update a particular pre-existing note, so that's
the UUID of interest. 

Also note the use of the ``$set`` operator to modify within an existing document
without overwriting it. Again, this is Mongo/``Monger`` 101. 

Finally, note that we're modifying the ``:modified`` field, because the whole
point of that field is for it to act as a timestamp on the most recent change to
the document. Mongo may have some other way to detect and record this for all I
know, but doing it manually like this is very straightforward, as you can see. 


links
-----------

We already built the links to this route when we created the ``crud-list-page``
function: part of the gigantic ``clone-for`` operation monges up the proper
string URI to update each individual note. So this page is already wired up to
the rest of the UI. 


Delete
=============

Finally, the **delete** route. This is scary mainly because Mongo (and hence
``Monger``) make is surprisingly easy to drop your whole collection all at once,
just by omitting an argument from what you had hoped would be a targetted
removal. Whoops!

template fragment
--------------------

The template fragment is short and sweet, consisting mainly of panicky-sounding
warnings:

.. code-block:: html

    <div id="main">
       <h1><span class="verb">Really Truly Delete?</h1>
       <p>Once you delete, there's no going back. That's just how we roll.</p>
       <p class="warning">
            The note titled <span class="title"></span> will be deleted 
            <span class="danger">forever</span>.
       </p>
      <form class="deleteForm" action="" method="POST">
            <div id="csrf" />
            <input type="submit" value="Delete">
       </form>
       <hr>
       <div class="loginStatus">Placeholder for login status info</div>
    </div>


route
--------

The route is formatted exactly like the *update* route was: a split between
``GET`` and ``POST``, plus our fancy-schmancy URI parameter deconstruction:

.. code-block:: clojure

      ; inside volta.routes/crud-routes 

      (GET "/:id/delete" [id :as request]
           (h/crud-delete-page request id))
      (POST "/:id/delete" [id :as request]
            (h/crud-delete! request id))


handler(s)
-------------

The helper snippet is too short to bother reproducing here (you can inspect it
if you like). The main page function again has an overly-verbose ``(let)`` block
that stores and names a bunch of intermediate values. But then it does something
new: checks the *owner* of the current item against the identity of the
currently-logged in user. If the two UUIDs match, the operation is allowed to
proceed; otherwise the request is summarily rejected with an ``HTTP 401
Unauthorized``.

.. code-block:: clojure

    (defn crud-delete-page
      "Handles GET requests to delete a note"
      [request id]
      (let [authmap (auth-map request)
            user-id (:_id authmap)
            status (login-status request)
            note-id (v/str->oid id)
            note (v/get-note-from-id note-id)
            owner-id (:owner note)
            contents (crud-delete-body status note)]
        (if (= owner-id user-id)
          (base-page {:title "Delete Note"
                      :content contents})
          {:status 401
           :headers {}
           :body "You can only delete notes you own, sorry."})))

This is a perfectly good way to enforce this kind of security, but as soon as
the issue comes up again, it will be clear that we should find a way to factor
that logic out and apply it as middleware. That's left as an exercise for the
reader. 

Note the use of the ``volta.db/str->oid`` helper to conver the ``id`` from the
request URI to an instance of ``org.bson.types.ObjectId``. All UUIDs that come
in over the wire as part of an HTTP request will be plain vanilla strings, but
all of our database helpers want instances of ``ObjectId``. This helper is just
a way to encapsulate the conversion. It's a short process, and we could easily
have done it inline, but again, we're trying to build a sane, well-encapsulated
system that will be friendly to refactor down the road.

That's just the handler for the ``GET`` request. When a ``POST`` request is
received, it means the owner has thought about it and they really truly want to
go ahead and delete the note. That gets its own handler, which in turn calls a
helper from ``volta.db``:

.. code-block:: clojure

    (defn crud-delete!
      "Handles POST requests to delete a particular note."
      [{{:keys [title contents]} :params :as request} id]
      (let [authmap (auth-map request)
            user-id (:_id authmap)
            note-id (v/str->oid id)
            note (v/get-note-from-id note-id)
            owner-id (:owner note)]
        (if (= owner-id user-id)
          (do
            (v/delete-note! note-id)
            (rr/redirect-after-post "/crud/list"))
          {:status 401
           :headers {}
           :body "You can only delete notes you own. We mean it!"})))

And note that sure enough, we want to compare the ID for the owner of the note
to the ID of the currently-logged in user, just as we predicted we would. So
obviously if you were to expand on this example, you would want to have some
kind of ownership-detecting middleware. But again, we're just trying to show the
basic wiring here, so we haven't implemented it in these tutorials. 

database
-------------

The ``delete`` helper function is pretty short. 

.. code-block:: clojure

    (defn delete-note!
      "Delete a note. Uses the more-verbose mc/remove-by-id syntax, just to minimize
      the chances of accidentally deleting the whole collection. DOH!"
      [uuid]
      (mc/remove-by-id db note-coll uuid))


links
-----------

Just as was the case for the *update* route, our main ``/crud/list`` handler
builds all of the links to delete each note individually, so this page is
already wired up and ready to go. 


Summary
=============

We now have all four of the core CRUD operations up and running. Even better,
the operations are all fully integrated with our Friend-based authentication and
authorization system. New notes are automatically tied to the user account that
you were currently authenticated under, and if you were not authenticated, you
cannotnot read or create any notes. That means we've reached a fairly
sophisticated level of functionality that I have never seen laid out all at once
in any Ring tutorial all in one place like this. Therefore, I am going to pause
and give myself a pat on the back before moving on.


Appendix I: Time
============================


Mongo Time Formats
-----------------------

In the oldest versions of Mongo, JavaScript ``Date`` objects were always
converted to UNIX Epoch timestamps (a biginteger representing the number of
milliseconds since Jan 01 1970). This is exactly what you get when you use
``System/currentTimeMillis`` in Java, so there was always an unambiguous,
high-precision way to convert between JavaScript Dates, Mongo BSON dates, and
Java Dates.

However, UNIX timestamps never carry any information about timezones, and a
datetime without timezone information is *very* imprecise; it's never more
accurate than plus or minus 12 hours (unless you assume every end-user in the
world has their cell phone or desktop computer set to Greenwich Mean Time!).
So UNIX timestamps may be *unambiguous*, but they are not *precise* in real-world
situations. They are really a product of a simpler time, before the ubiquitous
internationality of the modern user base.

Early versions of Mongo suggested that you could add a second key to your
document to represent the timezone, but that's hacky and inelegant. More recent
versions of Mongo offer the superior option of storing dates as a new BSON
datatype: the ``ISODate`` object. This is a thin wrapper around an ``ISO-8601``
date string, which means it is just as precise as UNIX Timestamp, but more
appropriate for the internet era.


Java Date Formats
----------------------

When using ``Monger``, you don't need to worry about any of this. You can just
create standard ``java.util.Date`` instances (e.g. via ``(java.util.Date.)``),
and Monger will store *and retrieve* them for you as instances of that class. If
you go into the native JavaScript shell, you can see that ``Monger`` stores them
as ``ISODate`` strings, but in your Clojure code, you just instantiate and store
Java dates on the way in, and that's also what you find on the way out.

As a result, when you are in a REPL, your dates will appear as Clojure date
literals (e.g. ``#inst "2014-11-07T17:37:19.308-00:00"``). But that's just
because that's how Clojure is hard-coded to represent instances of
``java.util.Date``. You instantiate a ``java.util.Date`` instance, and the REPL
shows you a date literal:

.. code-block:: clojure

   ; in a REPL

   (def x (java.util.Date.))
   ;#'volta.core/x

   x
   ;#inst "2014-11-07T17:55:23.284-00:00"

If you then save and restore it to Mongo, it will still look like a date literal
when it comes back, which means it is still an instance of ``java.util.Date``
under the hood. **BUT** if you use the native JavaScript mongo shell and inspect
it inside a document, you will see that Mongo is storing the value as one of
their ``ISODate`` instances, eg: ``ISODate("2014-11-07T17:55:23.284Z")``. Mongo
still has the option to store dates as a UNIX timestamp, but ``Monger``
explicitly chooses the more-modern ``ISODate`` datatype for you.

Using plain unmodified Java dates like this is fine for immutable timestamps, as
long as you remember all these transitions (Java Date instances <> Clojure date
literals <> Mongo ISODates). But as soon as you want to actually *compare* dates
or *modify* dates, the core Java Date ecosystem is a mess: there is a Date
class, a Timestamp class, a Calendar class, plus formatters and other utility
classes, each with its' own semi-incompatible API and history of unique bugs.


joda-time
------------------

So don't use the native Java ecosystem: use `joda-time`_ instead. This library
was developed to bring order to that chaos, and it has become the de facto
standard for Java chronological code. Because the Clojure community loves Clojure
syntax but hates unnecessarily reinventing wheels, the `clj-time`_ library was
developed as a thin layer around ``joda-time``. The idea is not to replace it
(because it is excellent and needs no replacing), but just to give you a
Clojure-idiomatic facade for it.

.. _`joda-time`: http://www.joda.org/joda-time/

.. _`clj-time`: https://github.com/clj-time/clj-time

The ``Monger`` team also prefers ``clj-time`` and they've made it easy to
integrate as your default. All you do is include ``(:require monger.joda-time)``
in any namespace that needs to use dates.

.. code-block:: clojure

   ;inside volta.db, or other namespace that will mess with times
   (:require   ;... elided
          [monger.joda-time])


Note that you don't even need to *use* ``monger.joda-time``; you just need to
**require** it in a namespace! That ``:require`` clause will alter
the other ``monger`` namespaces as necessary, so you get seamless use of
``joda-time`` in the background. You don't even need to save a reference to the
``joda-time`` namespace (i.e. no ``:as`` clause inside the ``:require``). This
feels a little bit odd, because obviously something must be monkey-patching
something else in the background, or perhaps secretly setting an ``*earmuffed*``
var somewhere, neither of which is a very clojuriffic approach... but there it is.

Also note that for this to work, you must add *two* new dependencies to your
``project.clj``: one for ``clj-time``, and one for `cheshire`_.

.. _`cheshire`: https://github.com/dakrone/cheshire

.. code-block:: clojure

   ; inside project.clj

   :dependencies [ ; elided...
                   [clj-time "0.8.0"]
                   [cheshire "5.3.1"]]
                  
The ``clj-time`` dependency makes perfect sense, but the ``cheshire`` one seems
like an minor oversight. The problem manifests itself as an error in the REPL
when you try to require a namespace that calls ``(:require [monger.joda-time])``
without first altering ``project.clj`` as above. Note that there is nothing
inherently wrong with ``cheshire``! It is a very nice library for JSON
serialization that the Monger team likes and supports, just as they do for
``clj-time``. So this is not a huge deal, because as we said, we will eventually
want both, but I still found it odd and worth commenting on.

Once you have access to ``clj-time``, you can bypass the multitude of core Java
date and time classes:

.. code-block:: clojure

    (require '[clj-time.core :as t])
    ;nil

    (def x (t/now))
    ;#<DateTime 2014-11-07T18:43:16.391Z>

    (def y (t/now))
    ;#<DateTime 2014-11-07T18:43:16.391Z>


Note that these dates are instances of ``org.joda.time.DateTime``. Once you've
done the monkey patching above, ``Monger`` will *bidirectionally* convert all
``ISODate`` instances into ``org.joda.time.DateTime`` instances,
rather than ``java.util.Date`` instances. So under the hood, you have Mongo storing
``ISODates`` in either case, but your ``Monger``-based Clojure code will always
get to play with ``org.joda.time.DateTime`` instances, rather than plain old
``java.util.Date`` instances.


Summary
-------------

#. ``(java.util.Date.)`` can be used to make new timestamps in a pinch. These
   are represented as Clojure date literals in the REPL, because that's just how
   Clojure rolls.
#. ``clj-time`` is a much better choice for time handling, because it includes
   timezone support, time intervals, and better tools for relative date
   comparisons, all backed by the venerable ``joda-time`` library.
#. Once you switch to ``clj-time`` as described above, Monger will instantiate
   all dates in the REPL as ``org.joda.time.DateTime`` instances instead of
   ``java.util.Date`` instances.
#. Mongo will store your dates as ``ISODate`` instances in either case. This is
   just another very light wrapper around ISO-8601 date strings.



