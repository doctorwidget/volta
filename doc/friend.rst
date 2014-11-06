.. _friend:

************************
Friend
************************

This will be a fairly-complete tutorial on using `the friend library`_, the
closest thing Clojure has to a standard authentication and authorization
library. Friend supports all three of the approaches we settled on in the end of
the prior document (:ref:`authentication`). 

.. _`the friend library`: https://github.com/cemerick/friend

In this document we will go through two different approaches to using Friend.
First, we'll show the simplest-case scenario where we have an in-memory
pseudo-database, and just show the basic wiring works. Then we'll do a second
round where we use ``Monger`` to manage the users in a real database. 

For now, we will *not* show the use of ``OpenID``, even though Friend does
support it, because there's no way to test it until your app has a public URI
freely available on the internet. That means there's no way to test or develop
using OpenID until we are (for example) running as a test app on Heroku. Once we
have finished getting project Volta running on Heroku, adding OpenID
authentication will be the obvious next step after that. We will defer a
discussion of that process until that time.


Installation
===================

Add Friend as a dependency inside ``project.clj``.

.. code-block:: clojure

   ; inside project-clj
   :dependencies [; blah blah
                  ; other dependencies elided for clarity
                  [com.cemerick/friend "0.2.1"]]
            

Authentication
====================
      
Friend authentication is implemented as *middleware*, so that it can affect all
routes in your application all at once. There is exactly one authentication
middleware defined in Friend: ``cemerick.friend/authenticate``, but it can be
configured in a veritable multitude of different ways to suit your needs.

The two most important concepts when authenticating with Friend are
*credentials* and *workflows*. Each concept has its own namespace inside the
Friend libary, and each can be a top-level key in the configuration map for the
middleware. 

So for example, adding Friend to your app can be as simple as:

.. code-block:: clojure

     ; inside volta.routes

     (def wrapped-routes
          (-> all-routes
              (friend/authenticate {
                  :credential-fn (partial creds/bcrypt-credential-fn user-fn)
                  :workflows [(workflows/interactive-form)]}
              (ring.defaults/wrap-defaults site-defaults)))

As noted, you *must* have session middleware turned on for this to work, and the
Friend middleware must come *before* the session middleware if you're using the
thrush macro. If you are instead using ordinary nesting syntax, the Friend
middleware must be *inner* to the session middleware.



Workflows
----------------------

The *workflow* abstraction encapsulates everything about the flow of control for
one specific authentication strategy. There is one workflow for HTTP Basic
authentication, another for form-based classic authentication, a third for
OpenID, a fourth for OAuth, etcetera. Each one involves a completely different
sequence of events: *when is the user prompted for credentials?*... *who are
they sent to?*... *what information comes back and how does it come back?*, and
so on. 

So *workflows* should be seen as the highest-level abstraction, which are used
to organize and make sense of the whole process in a consistent way regardless
of which authentication strategy you have chosen. 

Note that in the configuration map above, the ``:workflows`` key takes a
*vector* of workflows. This example has only one workflow, but it is perfectly
valid to have more than one. When you have multiple workflows, Friend will check
each workflow in the order provided, until one of them returns a non-nil result.
So the meaning of the vector is that succeeding with *any one* of those
workflows is sufficent; the user does not need to pass *all* of them.

This lets you have (for
example) form-based authentication based on a database for yourself plus a few
trusted helpers, while also supporting OpenID authentication for the vast majority
of your users. 

.. code-block:: clojure

     ; most of code elided
     (friend/authenticate {
              :workflows [(friend.workflows/interactive-form)
                          (friend.openid/workflow)]}


So that's two workflows being applied to the singular Friend middleware. You
would also want to make sure that the different workflows resulted in the
administrators getting a different (higher, more-privileged) set of roles, but
we'll talk about that more in the *authorization* section. Also note that if you
do this, you can (and should!) apply separate credential functions to each
workflow; a credential function specific to a workflow overrides one declared at
the general middleware level). 


Credentials
-----------------------

*Credential functions* are invoked once per login session. This function is the
one that actually inspects the proposed user credentials against some known
source of user data, and passes judgement on whether this is a good and valid
authentication or not.

In the case of HTTP Basic or form-based authentication
(we'll call these the *local* flavors of authentication) this is where password
hashing algorithm get triggered and where database access occurs. In the case of
OAuth or OpenID workflows (we'll call these the *remote* flavors of
authentication), this happens *after* the server-to-server calls to the 3rd
party identity provider has already occurred, and the credentials function is
only required to detect a value of ``nil``, which is what we get back for failed
remote authentication.

Note that this makes the *credentials function* much more limited in scope than
the *workflow* is. Once it is done judging the login attempt, it has no further
responsibilities. It has no concept of any more-complicated sequences of events,
the way a workflow does. It simply has the job of deciding *yea* or *nay*, on
this one specific attempt to authenticate. When the answer is *yea*, a
*credentials map* is returned, which we will discuss in detail below. When the
answer is *nay*, a value of ``nil`` is returned. In either case, the credentials
function has now done its job, and it rides off into the sunset.


Credentials In A Local Workflow
........................................

The ``friend.credentials`` namespace includes helper functions for this
process when using a *local* workflow. The workhorse function here is
``bcrypt-credentials-fn``, which is a higher-order function intended to be used
with ``(partial)`` to create the final *credentials function* discussed above. 

.. code-block:: clojure

    ;; another incomplete code fragment: more complete examples down below!
    (friend/authenticate 
           {:credential-fn (partial creds/bcrypt-credential-fn user-fn)}
            :workflows #_blahblah )


The first argument to ``bcrypt-credentials-fn`` must be *another function*,
which should yield a user map based on an input username string. This is where
**you** come into the picture, supplying a function that can (for example) call
your database and come back with a collection of user maps. In the example
above, we've specified  a function named ``(user-fn)``. 

Alternatively, the simplest possible scenario is for you to supply an in-memory 
Clojure map here, where the keys to the map are simple strings, one simple
string username per user map. Since Clojure maps *are* functions, such a map meets
the critera above for the argument supplied to ``bcrypt-credentials-fn``. So in
the example above, ``(user-fn)`` could be an elaborate helper that delegates to
``Monger``, or it could be a plain old in-memory map. 

When the *credentials function* is finally invoked, the only argument it will be
given is some kind of *credentials map*. This is always a map which has (at
least) keys for ``:username`` and ``:password``, representing a user who is
trying to get authenticated. The credentials function uses the value of
``:username`` from the *credentials map* to pull out a single matching user
record (either from the database or from the in-memory map). If a matching user
is found, the credentials function uses BCrypt to see if proferred password
hashes out to match the stored version.


Credentials In A Remote Workflow
.....................................

This contrasts dramatically with what happens in a *remote* workflow, where the
credentials function can be as simple as ``(identity)``. This is so because the
relevant information comes back from a a third-party server, and our server
neither sees a password that needs hashing, nor has any relevant database to
look up user maps in. There is a ``friend.openid`` namespace, but it includes
helper functions which are invoked *prior* to calling the credential function.
Those helpers perform the actual remote call to a third party verifier, and they
return either ``nil`` (if the remote authentication failed) or a successful 
credentials map.

This is why, for remote workflows, ``(identity)`` is used to just pass the
result right through the credential function stage without stopping. A ``nil``
(= failure) is passed through unchanged... and a successful authentication map
(= success) is also passed through unchanged. So the credentials function in a
remote workflow only exists because Friend wants to use the *workflow*
abstraction to unify some very very different authentication procedures. A
less-ambitious library that was limited to only remote workflows could just skip
the idea of a credentials function entirely.


Credential Function Output
................................

If the credentials function fails in either scenario, it must return ``nil``.
This is true whether the workflow is remote or local! But if it succeeds, it
should return an *authentication map*, which is intended to be the single source
of truth for one successfully-authenticated user. The specific details of each
authentication map will vary depending on the workflow, but two keys are
special:

#. ``:identity``. This key is *required*. It contains the username for local
   authentication, or some kind of token for 3rd party authentication. This
   value must be unique for all users, or the whole system breaks down.
#. ``:roles``. This key is *optional*. If it is provided, the idea is that it
   contains a list of roles which the user is authorized to act in (e.g.
   ``:user``, ``:admin``, etcetera). This is most likely to come up in local
   authentication systems where you control the entire process from start to
   finish. 

The authentication middleware will attach the *authentication map* to the user
session under the ``::cemeric.friend/identity`` key. That means you *must* have
session middleware enabled to use Friend (surely this is not a surprising
requirement!).


Authorization
===================

After you have authenticated a user, then you can start to think about
*authorization*. Whereas *authentication* is handled by one large piece of
middleware which can be configured in a myriad of ways, Friends' *authorization*
software is broken up into a bunch of smaller helper functions and macros.

Prerequisites
-----------------

All of these helper functions and macros assume that the authentication process
is complete. That means they expect to find the *authentication map* in the
session under the ``::cemeric.friend/identity`` key. Note that this is a
double-colon keyword, aka a *namespaced keyword*. The *Monger* session store
plays nicely with these keywords, but not all database libraries do, so beware!


Helpers
------------

You can use the ``(authorize)`` macro to wrap any body of code in your handlers
or routes. This macro takes a set of roles (e.g. ``#{::user}``) as its first
argument, followed by the code you're trying to guard. That code will only be
allowed to run if the user has the proper role in their authentication map.
Unauthenticated users have no authentication map, so they always fail.

Here's some (completely context-free) sample code:

.. code-block:: clojure

   ;; requires admin role
   (GET "/admin" request 
                 (friend/authorize #{::admin} (admin-control-panel-fn)))   

In the example above, the route is only accessible for visitors have the
``::admin`` role in their authentication map. Again, unauthenticated visitors
have no authentication map in their session at all, so they definitely fail this
test. 

There are other helper macros and functions also (e.g. ``authorized?`` and
``wrap-authorize``) which we will talk about in more detail as we go. The key
thing to keep in mind is that authorization always depends on that
*authentication map* being in the Ring session under the
``::cemeric.friend/identity`` key. If it's not there, the authorization check
automatically fails.


Exceptions
---------------

Failures are generally handled by throwing exceptions, which is relatively
atypical in Clojure code. This can make it difficult to follow the flow of
control: be extra wary about this when setting up your authorization code!


Hierarchies
---------------

User roles are the perfect place to use Clojure hierarchies; Friend was designed
with this dea in mind. So you can, for example, say that:

.. code-block:: clojure

    (derive ::admin ::user)

And *poof*, anyone with the ``::admin`` role is also allowed through any
authorization checks that require the ``::user`` role. You could use this to
build very complex inheritance hierarchies if you were feeling ambitious.




Integration
========================

Let us integrate simple form-based authentication and authorization into our
existing routes. We'll start by checking credentials against an in-memory map
for our "database" of users. Then once we've seen that working, we will modify
it to use a real database via ``Monger``.

Because of the way we've been structuring our Ring application, all of our
Friend code will live inside ``volta.routes``. The *authentication* process is
another layer of middleware around your entire collection of routes, so it will
be applied inside our ``volta.routes/wrapped-routes`` symbol, along with all of
the other middleware. Meanwhile, the *authorization* process will be invoked as
wrappers around individual routes.


A User Store
----------------

Let's add an in-memory database of users to our pre-existing ``volta.db``
namespace:

.. code-block:: clojure

    ;requires friend.credentials :as creds

    (def mem-users {"admin" {:username "admin"
                             :password (creds/hash-bcrypt "adminpass")
                             :roles #{::admin}}
                    "scott" {:username "scott"
                             :password (creds/hash-bcrypt "scottpass")
                             :roles #{::user}}})

Later on, we can define ``db-users`` as a function that actually uses ``Monger``
to get a list of users. For now, we'll stick with just this simple in-memory
map. 


An Unauthorized Handler
--------------------------

We will need a function that returns ``HTTP 401`` and tells users that they
aren't allowed to view resource X. We'll add that as a handler to
``volta.handlers``.

.. code-block:: clojure

    ; inside volta.handlers

    (defn unauthorized [request]
       (let [uri (:uri request)]
         (-> (simple-response (str "You are not authorized to view " uri))
             (rr/status 401))))
               

A Login Status Helper
---------------------------

Let's add a small helper function that any handler can use to read out the
current user authorization status. For now we'll throw it into the
``volta.handlers`` namespace, though in the long run it might make sense to have
a ``util`` namespace for this kind of thing.

.. code-block:: clojure

   ; inside volta.handlers
     
   (defn login-status
     "A helper function for returning a string about the current login status.
      Does not return a complete Ring response!"
     [request]
     (if-let [user (friend/identity request)]
       (let [authmap (friend/current-authentication user)
             username (:username authmap)
             roles (:roles authmap)]
         (format "Logged in as %s with these roles: %s" username roles))
       "Anonymous User"))

That will return one of two strings: either the elaborate logged-in version
which includes all current roles, or (if the call to ``cemeric.friend/identity``
fails) the simple string "Anonymous User".

Pay close attention to the overloading of the word **identity** here! The
aforementioned ``cemeric.friend/identity`` function pulls out the
``cemerick.friend/::identity`` key from the session if it exists, or returns
``nil`` for anonymous users. That function is *not* the same as the Clojure core
``(identity)`` function. In fact, when you inspect the Friend source code, you
can see that the core namespace calls ``(:refer-clojure :exclude (identity)))``,
just to minimize the chances that the two different functions will be confused.
    

New Routes
---------------

Next we add two new routes which will be needed to demonstrate the
complete authorization process:

.. code-block:: clojure

   ;inside volta.routes

   (defroutes auth-routes
      (GET "/login" request h/login-page)
      (GET "/logout" request "logging out"))

   (defroutes all-routes
        ; most of this definition remains unchanged; just add auth-routes
        auth-routes
        )


In addition to these routes inside ``volta.routes``, you will obviously need to
create the the handler referenced above inside ``volta.handlers``. This will be
a standard Enlive snippet and body function pair, and we won't show all of that
code here. You will also need to create an HTML fragment for the route, which is
just a very ordinary looking HTML form with ``username`` and ``password``
fields. You can inspect it inside the ``volta/resources/public/html`` directory.


Namespace Changes
--------------------

Next, you will need to adjust the namespace for ``volta.routes``:

.. code-block:: clojure

    (ns volta.routes
       (:require [cemerick.friend :as friend]
                 (cemerick.friend [workflows :as workflows]
                                  [credentials :as creds])
                 [volta.db :as vdb]
                 ;; other requires and imports unchanged 
                ))


New Middleware
-------------------

Finally, we can wrap the main app with ``friend/authenticate``. Note that the
rest of the code is unchanged from prior examples: we're still wrapping with a
couple of pieces of custom middleware and the outermost wrapper is still
``ring-defaults``. Sessions are added in that lowest wrapper (the outermost
wrapper in vanilla Clojure), and so it's important that the friend middleware be
above it (innermost to it in vanilla Clojure).

.. code-block:: clojure

    (def wrapped-routes
        (-> all-routes 
            (vm/ignore-trailing-slash)
            (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])
            (friend/authenticate
                 {:allow-anon? true
                  :login-uri "/login"
                  :default-landing-uri "/"
                  :unauthorized-handler h/unauthorized
                  :credential-fn #(creds/bcrypt-credential-fn vdb/mem-users %)
                  :workflows [(workflows/interactive-form)]})
            (d/wrap-defaults volta-defaults)))

Here we see a lot of options supplied to ``friend/authenticate``, most of which
we have not discussed yet. 


:allow-anon
.................

This allows you to set a blanket authorization for the entire site. If you
choose to set it to *false*, then every single page requires authorization (any
level of authorization), whether or not you wrap it that route with
``authorize``. That would be appropriate for highly secure sites where only
known users could even see the home page. When ``true`` (the default value),
only routes that you have explicitly wrapped with ``authorize`` require
authentication. Since the default is ``true``, we could omit this, but this was
as good of a place to discuss it as any.


:login-uri
..................

When the Friend middleware determines that someone needs to be authenticated,
this is where it will redirect the user. The ``/login`` route is one of the ones
we just created up above; the associated template fragment shows a standard
login form with ``username`` and ``password`` fields. 


:default-landing-uri
........................

The default URI to redirect newly-authenticated users to. You can override this
by including an explicit redirect in your own code, but that's up to you to
handle on a per-route basis. 


:unauthorized-handler
.........................

How to handle user requests where authentication fails. Here we redirect to the
new ``h/unauthorized`` function that we defined above. 


:credentials-fn
....................

We've already discussed this at some length. Here we implement it as an
anonymous function, and use the ``db/mem-users`` map as our
user-finding-function. The final argument (``%``) will be a proposed credentials
map from the user requesting authentication. 

:workflows
...................

Finally, ``:workflows``, which we've already discussed above. This site will
have only one allowed workflow, based on a standard HTTP form. 



Logging In
==================================

So when the time finally comes to have the user authenticate, where is the
handler with the actual login function? *There isn't one*. Whoah. That is pretty
weird, but it's just the way Friend works. Remember that ``friend/authenticate``
is middleware; it scans each and every incoming request. When it detects *any* POST
requests to the anointed ``:login-uri``, it takes over and handles that request.
In other words, under the hood, ``friend/authenticate`` takes care of setting up
this route for you:

.. code-block:: clojure

   (POST "/login" request (friend/automagically-handle-me request))

When I was first setting things up based on the official Friend tutorial, I
noted that their source code did not explicitly set up a ``POST`` route to
handle logins, and that worried me. I was fairly certain that was an error in
the documentation and that I would have to add such a route. But it turns out I
was wrong, and you don't. When you inspect the ``friend`` source
code, you see that it does check for this automatically as part of the
``interactive-form`` workflow:

.. code-block:: clojure

    ; inside friend.workflows/interactive-form
  
       ; most of the function omitted, but see this snippet
       (when (and (= :post request-method)  ; AHAH
                  (= (gets :login-uri #_etc)))
   
So Friend in effect configures an extra compojure-style ``POST`` route for you,
and you should not try to do it yourself. When you specify the ``:login-uri`` as
an option to ``friend/authenticate``, you are saying *all POST requests to this
route should trigger Friends' authentication code*. 

As a result, you are not required (or *allowed*) to write the login-handling
code yourself. Neither do you need to manually delegate any explicit calls to
it inside any of your handlers. That is *very* different from the way things are
handled in Django, so it's worth calling out and commenting on.


Logging Out
===============

What about logging out? Here you do have to explicitly create a route, but
Friend provides you with a simple helper function for it. Up above we defined a
``/logout`` Compojure route that just returned a string and did nothing else.
Now we rewrite that to delegate to ``friend/logout*`` instead of just returning
a string:

.. code-block:: clojure

   ;; inside volta.routes
   (defroutes auth-routes
      (GET "/login" request h/login-page)
      (GET "/logout" request 
           (friend/logout* (rr/redirect (str (:context request) "/"))))) 


The first thing to note is that logging out is handled in a fundamentally
different way than logging in was. Logging in used implicit middleware magic
that you configure only tangentially via the ``:login-fn`` key. In contrast, you
manually control logging out, triggering it as soon as you call
``(friend/logout*)``.

The other thing worth pointing out is that we've chosen to trigger logging out
inside a ``GET`` route. In theory you should probably do this inside of a
``POST`` route, since logging out is *never* idempotent (something has changed
on the server, by definition). But on the other hand, it is crucial that logging
out be easy and foolproof: more harm is caused by people walking away from a
keyboard without logging out than is caused by people logging out on accident.
*A foolish consistency is the hobgoblin of little minds*, and so we choose to
err on the side of safety over technical correctness.

With that in mind, an even *more* lenient way to allow logging out would be to
use the ``(friend/logout)`` wrapper (note: no asterisk) around an ``ANY`` route:

.. code-block:: clojure

   (friend/logout (ANY  "/logout" request (rr/redirect "/")))

As always, there is more than one way to do it. 


Authorization
==================

Once we've got everything configured to support logging in and logging out, the
bulk of the configuration work is done. As mentioned earlier, *authorization* is
handled on a route-by-route basis using specific helpers, rather than being
configured as middleware. Let's add a few more routes for pages that we will
fill in during the next few tutorials:

.. code-block:: clojure

   ; inside volta.routes

   (defroutes auth-routes
     (GET "/login" request h/login-page)
     (GET "/logout" request
                    (friend/logout* (rr/redirect (str (:context request) "/"))))
     (GET "/user" request h/user-page)
     (GET "/admin" request h/admin-page)
     (GET "/crud" request h/crud-page))   

As before, we won't explicitly show the other tasks associated with setting up a
route: each route needs the named handler function, which will live inside
``volta.handlers``, and an HTML fragment of the proper name inside
``resources/public/html``. Those things are available for you to inspect but we
will not duplicate them here.

Next, we will use the ``friend/authenticated`` helper to make the ``/user`` URI
only accessible to authenticated users. This helper does *not* care which roles
the current user has: it only cares that they *have* been authenticated. 

After that, we will wrap the ``/admin`` URI with ``friend/authorize`` and
specify that only users with the ``::admin`` role can visit this page. Finally,
we will wrap the ``/crud`` URI with ``friend/authorize`` and specify that users
with the ``::user`` role can visit it. 

.. code-block:: clojure

   ; inside volta.routes

   (defroutes auth-routes
     (GET "/login" request h/login-page)
     (GET "/logout" request
                    (friend/logout* (rr/redirect (str (:context request) "/"))))
     (GET "/user" request 
           (friend/authenticated h/user-page))
     (GET "/admin" request 
           (friend/authorize #{::vdb/admin} h/admin-page))
     (GET "/crud" request 
           (friend/authorize #{::vdb/user} h/crud-page)))  

Once you've done all of that, those routes will be protected. Unauthenticated
users will be bounced to the ``/login`` route when they try to visit any of the
three protected routes. Anyone logged in as ``::user`` will be able to visit
``/user`` and ``/crud``, but will be told they are unauthorized when they try to
visit ``/admin``. And anyone logged in as ``::admin`` will be able to visit all
three routes (assuming you called ``(derive ::admin ::user)`` inside
``volta.db``, as we suggested above). 

Meanwhile, all of the previously-defined routes remain accessible to everyone
under all circumstances. When you have ``::allow-anon?`` set to ``true`` (which
it is by default) Friend authorization only applies where you explicitly wrap a
route. By default, *everything not forbidden is allowed*. 

In contrast, if you're trying to make a private site, you should specify 
``:allow-anon? false`` when configuring the middleware. That will cause
all routes to require authentication (but no specific roles) by default. 


Monger
=============

Switching to the ``Monger`` database will actually be fairly simple. All of the
relevant code is already encapsulated in the ``volta.db`` namespace. It's even
more encapsulated than that, really: all of the functionality is completely
contained in the ``mem-users`` map. To switch over to using a real database, all
we need to do is write a single function that can perform the same input and
output as ``mem-users`` does. 



Stocking The Database
----------------------

Before we can write a function that queries the database, we must create the
target collection and insert some users. This will have to be done at the REPL.

Note that this stage will need to be redone on Heroku when we first load up.
This kind of brittle interaction with a database is common to all web
applications; some parts of the application always require a manual
bootstrapping that is outside the scope of the repetitive request serving that
follows. When we first ran ProtoGenie up on Heroku I had to manually add the
first few users before we had automated registration working. That will be true
here as well.


Prep The REPL
....................

Start by running a REPL and requiring some namespaces. 

.. code-block:: clojure

    (require '[volta.db :as v])
    ; now we can access the volta database as v/db
    ; and use v/oid as function to generate ObjectIDs

    (require '[cemerick.friend.credentials :as creds])
    ; now we can hash our credentials rather than storing them as plaintext

Until now, our users have been stored in the ``volta.db/mem-users`` in-memory
map, which uses simple string keys. That map also re-uses the username, once as
the outer overall string key and once again under the explicit keyword
``:username``. All of this will have to be structured differently in Monger,
because a MongoDB collection is a *vector or list* of documents, not a *map or
dictionary*. Thus, there is no one single key for each entry. That actually
makes the overall structure *cleaner*: we will keep the ``:username`` field,
and it won't be duplicated in Mongo the way it is in ``mem-users``.

.. code-block:: clojure

    (def user-coll "auth-users")
    ;#'volta.core/user-coll

    (require '[monger.collection :as mc])
    ;nil

    ;; add one user
    (mc/insert v/db user-coll {:_id (v/oid) 
                               :username "root"
                               :password (creds/hash-bcrypt "rootpass")
                               :roles #{:volta.db/admin}})
    ;#<WriteResult {"serverUsed": "127.0.0.1:27017", "ok":1, "n":0}>


However, we do need each username to be unique, just like the ``_id`` is.
Fortunately, Monger lets us declare a *unique index* on any field.

.. code-block:: clojure

    ;; declare unique index -- note the explicit use of (array-map)

    (mc/ensure-index v/db user-coll (array-map :username 1) {:unique true})
    ;nil
    
    ;; double check results
    (mc/indexes-on v/db user-coll)
    ; ...an array of two index objects; one for :_id and one for :username

Next, let's add a second user. 

.. code-block:: clojure

    (mc/insert v/db user-coll {:_id (v/oid)
                               :username "nathan"
                               :password (creds/hash-bcrypt "nathanpass")
                               :roles #{:volta.db/user}})
   ;#<WriteResult...

Then make sure everything is working as expected.

.. code-block:: clojure

    (def all (mc/find-maps v/db user-coll)
    ;#'volta.core/all

    (count all)
    ;2
  
    (first all)
    ; {:_id #<ObjectId 545a5968d4c6a59dc2769cac>, :username "root", 
    ;  :password "$2a$10$xXxUsQ..."
    ;  :roles ["admin"]}
 
    (def nate (mc/find-maps v/db user-coll {:username "nathan"}
    ; ({:_id #<ObjectId 545a5b9dd4c6a59dc2769cae>, :username "nathan", 
    ; :password "$2a$10$f2.1w4W..."
    ; :roles ["user"]})

Now the database is stocked with data, and we've had a little bit of practice in
querying it and inspecting the results. It's time to move on to writing a
function that uses MongoDB instead of our in-memory map of users.



``db-users``
------------------

We'll call this function ``db-users``. It needs to do exactly what ``mem-users``
does in the function position: take a string username and return a Clojure map
with keys for ``:username``, ``:password`` and ``:roles``.

.. code-block:: clojure
   
   ;inside volta.db

   (def user-coll "auth-users")

   (defn db-users
     "Take proposed username as a string and look for that username in the database.
     Returns a map with the keys expected by friend if a match exists."
     [targetname]
     (if-let [user (mc/find-one-as-map db user-coll {:username targetname})]
       (assoc user :roles (map #(keyword "volta.db" %) (:roles user)))))

And that's really all there is to it! If we didn't care about fixing the
namespacing on the ``:roles``, we could just return the value of of ``user``
from the ``(let)``. But by default, Monger doesn't store namespaced keywords, so
even though we inserted the ``:roles`` as namespaced keywords, they come back to
us as plain strings. The Monger team knows about this issue, which is why they
have a special function for the ``session-store`` used with Friend. We have to
apply our own fix to this manually for our users database. 

Finally note that I'm not even sure we really *need* to use namespaced keywords
in the first place! If we just used plain string roles in our calls to
``friend/authorize``, we could get away without any of this extra code in the
``db-users`` function. But since we *did* set everything up with named keywords
up above, it's better to stick with that and show how to correct for it. It's
not a difficult issue to fix as long as you're aware of it.


replace ``mem-users``
------------------------

Now we just swap out ``mem-users`` for ``db-users`` inside ``volta.routes``:

.. code-block:: clojure

   ;; inside the friend/authenticate block of #'volta.routes/wrapped-routes

   ; ... elided
   :credential-fn #(creds/bcrypt-credential-fn vdb/db-users %)
   ; ... 
    
And again, that's all there is to it. It seems almost too easy, but there it is.
Now the two users we inserted into our MongoDB are the only valid ones. The
``mem-users`` map still exists, but it's not currently used for anything, and
users cannot log in with those accounts. 


summary
------------

Careful encapsulation makes this final step very easy. It should be clear that
using multiple databases would be also be straightforward. You would just
compose a function that called ``or`` on the results from ``db-users`` and 
``mem-users``; any match from either database would be considered valid for
logging in. Of course, then you'd run into potential issues with duplicate
usernames, so this may not be the best place to implement multiple databases.
But in principle, it's all simple composition, like everything else in Clojure.


Conclusion
==============

Authentication and authorization are painful but necessary tasks for any serious
web application. Friend tackles these problems in a very idiomatic, Clojuriffic
way. Once you understand all of the moving pieces, it should be crystal clear 
how you would go about building on this foundation. 

