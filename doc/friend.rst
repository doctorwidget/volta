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
      
Friend authentication is implemented as *middleware*, so that it can potentially
affect all routes in your application by just adding one block of code.  There
is exactly one authentication middleware defined in Friend:
``cemerick.friend/authenticate``, but it can be configured in a wide variety of
ways by passing along a configuration map.

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
thrush macro.



Workflows
----------------------

The *workflow* abstraction encapsulates everything about one authentication
strategy: so there is one workflow for HTTP Basic authentication, another for
form-based classic authentication, a third for OpenID, a fourth for OAuth,
etcetera. Each of requires a completely different sequence of events: *when is
the user prompted for credentials?*... *who are they sent to?*... *what
information comes back and how does it come back?*, and so on.

So *workflows* should be seen as the highest-level abstraction, which are used
to organize and make sense of the whole process. Contrast that with *credentials
functions*, which are an essential part of the whole process, but which have a
much more limited scope of control. Every workflow must have a credential
function, but the workflow controls when it is invoked, and how important it
is for that workflow. 

Note that in the configuration map above, the ``:workflows`` key takes a
*vector* of workflows. This example has only one workflow, but it is perfectly
valid to have more than one. When you have multiple workflows, Friend will check
each workflow in the order provided, until one of them returns a non-nil result.
So the meaning of the vector is that passing *any one* of those workflows is 
sufficent; the user does not need to pass *all* of them. 

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

So in either case, this is where the rubber hits the road. But once this
function is done judging the login attempt, it has no further responsibilities.
It has no concept of any more-complicated sequences of events, the way a
workflow does. The credentials function simply has the job of deciding *yea* or
*nay*, on this one specific attempt to authenticate. When the answer is *yea*, a
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

Let's put in the most basic example we can of a form-based authentication. We'll
start by using an in-memory map for our "database" of users. Then once we've
seen that working, we will modify it to use a real database via ``Monger``. 

Because of the way we've been structuring our Ring application, all of our
Friend code will live inside ``volta.routes``. The *authentication* process is
another layer of middleware around your entire collection of routes, so it will
be applied inside our ``volta.routes/wrapped-routes`` symbol, along with all of
the other middleware. Meanwhile, the *authorization* process will be invoked as
wrappers around individual routes.

Start by adjusting the namespace declaration:

.. code-block:: clojure

    (ns volta.routes
       (:require [cemerick.friend :as friend]
                 (cemerick.friend [workflows :as workflows]
                                  [credentials :as creds])
                 ;; other requires and imports unchanged 
                ))

Then let's define some users as a simple map in the same namespace:

.. code-block:: clojure

    (def mem-users {"admin" {:username "admin"
                             :password (creds/hash-bcrypt "adminpass")
                             :roles #{::admin}}
                    "scott" {:username "scott"
                             :password (creds/hash-bcrypt "scottpass")
                             :roles #{::user}}})

Then wrap the main app with friend as shown earlier, but including all of the
other middleware we've referenced in other tutorials. 

.. code-block:: clojure

  
    (def wrapped-routes
        (-> all-routes 
            (vm/ignore-trailing-slash)
            (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])
            (friend/authenticate
                 {:credential-fn (partial creds/bcrypt-credential-fn mem-users)
                  :workflows [(workflows/interactive-form)]})
            (d/wrap-defaults volta-defaults)))


Now the question is, how on earth does Friend decide where to redirect people if
they require authentication? That has not yet been specified anywhere. 










