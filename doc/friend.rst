.. _friend:

************************
Friend
************************

This will be a fairly-complete tutorial on using `the friend library`_, the
closest thing Clojure has to a standard authentication and authorization
library. Friend supports all three of the approaches we settled on in the end of
the prior document (:ref:`authentication`). 

.. _`the friend library`: https://github.com/cemerick/friend

In this document we will go through three different approaches to using Friend.
First, we'll show the simplest-case scenario where we have an in-memory
pseudo-database, and just show the basic wiring works. Then we'll do a second
round where we use ``Monger`` to manage the users in a real database. Finally,
we'll show how to use Friend with ``OpenID``, which is, perhaps, the wave of the
future. 


Friend Basics
===================

Add Friend as a dependency inside ``project.clj``.

.. code-block:: clojure

   ; inside project-clj
   :dependencies [; blah blah
                  ; other dependencies elided for clarity
                  [com.cemerick/friend "0.2.1"]]
                  
The two most important concepts when dealing with Friend are *credentials* and
*workflows*. Each concept has its own namespace inside the Friend libary. 

Workflows
----------------------

The *workflow* abstraction encapsulates everything about one authentication
strategy: so there is one workflow for HTTP Basic authentication, another for
form-based classic authentication, a third for OpenID, a fourth for OAuth,
etcetera. Each of requires a completely different sequence of events: *when is
the user prompted for credentials?*... *who are they sent to?*... *what
information comes back and how does it come back?*, and so on.

So *workflows* should be seen as the highest-level abstraction, which are used
to organize and make sense of the whole process. Contrast that with
*credentials functions*, which are much more limited, but still an essential
part of the whole process. 


Credentials
-----------------------

*Credential functions* are invoked once per login session. This function is the
one that actually inspects the proposed user credentials against some known
source of user data, and passes judgement on whether this is a good and valid
authentication or not. In the case of HTTP Basic or form-based authentication
(we'll call these the *local* flavors of authentication) this is where password
hashing algorithm get triggered and where database access occurs. In the case of
OAuth or OpenID workflows (we'll call these the *remote* flavors of
authentication), this happens *after* the server-to-server calls to the 3rd
party identity provider has already occurred, and the credentials function is
only required to detect a value of ``nil``, which is what we get back for failed
remote authentication.

So in either case, this is where the rubber hits the road. But once this
function is done judging the login attempt, this function is done. It has no
concept of any more-complicated sequences of events, the way a workflow does.
The credentials function simply has the job of deciding *yea* or *nay*, on this
one specific attempt to authenticate. When the answer is *yea*, a *credentials
map* is returned, which we will discuss in detail below. When the answer is
*nay*, a value of ``nil`` is returned. In either case, the credentials function
has now done its job, and it walks away into the sunset.

The ``friend.credentials`` namespace includes helper functions for this
process when using a *local* workflow. The workhorse function here is
``bcrypt-credentials-fn``, which is a higher-order function intended to be used
with ``(partial)`` to create the final *credentials function* discussed above. 

The first argument to ``bcrypt-credentials-fn`` must be another function which
should yield a user map based on an input username as a string. This is where
**you** come into the picture, supplying a function that can (for example) call
your database and come back with a collection of user maps. Alternatively, the
simplest possible scenario is for you to supply an in-memory map here, where the
keys to the map are simple strings, one simple string username per user map.

Meanwhile, the ``friend.openid`` namespace has helper functions for this process
when using a *remote* workflow. In this case, the credentials function can be as
simple as ``(identity)``, because the relevant information comes back from a a
third-party server, and our server neither sees a password that needs hashing,
nor has any relevant database to look up user maps in. 

When the *credentials function* is finally invoked, the only argument it will be
given is some kind of *credentials map*. This is always a map which has (at
least) keys for ``:username`` and ``:password``. Depending on the workflow, it
might also have more information than that.

In the case of a remote workflow, the credentials map will be the *output* from
the remote call! Remember that the remote call is hard-coded in as part of the
specific ``workflow`` function, and isn't something you need to fine-tune.
Therefore, for remote workflows, ``(identity)`` is typically used to just pass
the result right through the credential function stage without stopping. A
``nil``, representing failure, is passed through unchanged... and a successful
authentication map returned from the remote service is also passed through
unchanged. So the credentials function in a remote workflow only exists because
Friend is supporting different workflows: a less-ambitious library that was
limited to only remote workflows would just skip this step entirely.

But in the case of local workflows, the credentials function has more work to
do. It uses the ``:username`` to pull out a user record either from the database
or from the in-memory map, and then it uses BCrypt to see if newly-supplied
password hashes out to match the stored version. In the case of OpenID or OAuth,
the credentials function is just a black box that calls the 3rd party identity
verifier.

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









