.. _heroku:

******************
Heroku
******************

Let's deploy this baby to Heroku. We haven't really proved a damn thing until
anyone on earth can look at our running application. 

Heroku has supported Clojure in the cloud for several years now. You can find
detailed information about `Heroku Clojure support`_ here. They also provide 
a `step-by-step guide`_ for deploying a Clojure app to Heroku, as well as an
older and smaller database-driven `Clojure app tutorial`_ here. Finally, it's
always useful to see someone else (not associated with Heroku at all) provide an
example of a ready-for-Heroku setup, such as this one for the `Chestnut`_
project.

.. _`Heroku Clojure support`: https://devcenter.heroku.com/articles/clojure-support

.. _`step-by-step guide`: https://devcenter.heroku.com/articles/getting-started-with-clojure#introduction

.. _`Clojure app tutorial`: https://devcenter.heroku.com/articles/clojure-web-application 

.. _`Chestnut`: https://github.com/plexus/chestnut

All of those resources are very recent (mid-to-late 2014) as of the time of this
writing. The take-home message is that Heroku takes Clojure support seriously,
and you should use them!


Create The App
=====================

You must have both a Heroku account and the `Heroku toolbelt`_ installed to
proceed any further. Also, we're assuming that you've had a git repository all
along. The details of setting that all of those things up are outside the scope
of this documentation.

Once that's ready, the actual process of creating a Heroku app is ridiculously
simple. From a terminal window at the root directory of the project (i.e. the
same tier as ``project.clj``), you simply call ``heroku create``:

.. _`Heroku toolbelt`: https://toolbelt.heroku.com/

.. code-block:: bash

   $ heroku create
   # Creating peaceful-mountain-9656... done, stack is cedar-14
   # https://peaceful-mountain-9656.herokuapp.com/ | git@heroku.com:peaceful-mountain-9656.git
   # Git remote heroku added


First, let us pause and take a moment to appreciate how awesome Heroku is.

That ``heroku create`` command did several things.

#. Initialized a brand new Heroku app *remotely*, up on Heroku.
#. Gave it a random name, which you are free to rename if you want. 
#. Added a *remote* git repository to our local git repository. 

In theory, we could immediately run a ``git push``, and we would have a running
application. Many tutorials immediately jump to that step. But we've already
done a significant amount of local development, which means our app is
nonfunctional in the absence of a database. Fortunately, it's also very easy to
set that up. 


Add The Database
====================

You add resources (like a Mongo database) via the Heroku toolbelt. We will use
`Mongolab`_ for our MongoDB needs. From a terminal window at the same tier as
``project.clj``, type the following:

.. _`Mongolab`: https://devcenter.heroku.com/articles/mongolab

.. code-block:: bash

   $: heroku addons:add mongolab
   # Adding mongolab on peaceful-mountain-9656... done, v3 (free)
   # Welcome to MongoLab.  Your new subscription is being created and will be available shortly 
   # Please consult the MongoLab Add-on Admin UI to check on its progress.
   # Use `heroku addons:docs mongolab` to view documentation.

This is a pattern every Heroku user quickly becomes familiar with; almost every
interaction with Heroku will be via the ``heroku`` command. Mongolab, like many
other addons, also provides you with a web UI interface to your account, which
you can track down as part of the app list in your account area. 

A New Environmental Variable
--------------------------------------

In addition to adding the database, the Mongolab addon should have configured
our ``MONGOLAB_URI``. Let's check:

.. code-block:: bash

    $: heroku config

    # MONGOLAB_URI: mongodb://heroku_app... (REDACTED)



Sure enough, there it is! We now have a Mongo database ready and waiting for us
when we push our repository. Thanks to the work we did in the :ref:`environment`
tutorial, we don't need to write any new code to access this database:
``environ`` will automatically use this value rather than the one inside
``profiles.clj``.

A First User?
-----------------

The web UI would let us add a brand new user, *but* the web UI doesn't give us
access to ``Bcrypt`` to properly hash passwords. That means there's no point in
using their web UI to actually add a first user with ``::admin`` privileges.
Instead, we'll need to add our first admin user via a remote REPL session. And
we can only do that *after* we push the repository and get the app running.
Fortunately, the app will still be functional even before there are any users,
because we have a few views (including the root ``"/"`` route) that require no
authentication whatsoever.


The Procfile
==============

The single entry point for all Heroku apps is the ``Procfile``. This is a plain
text file with no suffix which includes at least one Heroku ``process`` type
that will start up and run the app. This is true regardless of what language you
are working in; the only thing that varies is the content of that one-liner.
Here is the complete contents of our new ``Procfile``.

.. code-block:: bash

   web: java $JVM_OPTS -cp target/volta.standalone.jar clojure.main -m volta.web

The astute reader will immediately note that we do not have any file named
``volta-standalone.jar`` inside our ``target/`` directory, nor any namespace
named ``volta.web``. That's because up until now, everything we've done has been
oriented towards running via ``lein`` at the command line. But to run on
Heroku, we will need to deploy as a standard Java ``jar`` file. 

This is a feature, not a bug. Running Clojure apps as ``jar`` files is yet
another example of Clojure geting big returns from being hosted on the JVM. By
piggybacking on Java, Clojure apps have access to the ubiquituous Java server
runtime environment. That's why Clojure support was added to Heroku so early on;
it's just a minor wrapping around basic Java support, and everyone offers that!

In the next section, we will see how to give our project the ability to run as a
``jar`` file. We will try to keep the *altering* of old code to a minimum,
because we'd like for any given tutorial in this set to be comprehensible even
after we're done. Instead, we will *add* a few lines of code to a few locations,
creating the aforementioned ``volta.web`` namespace, and building the
``volta-standalone.jar`` file. But unfortunately, we will also have to make a
few changes to the ``volta.db`` namespace.

After we've finished these changes, ``volta`` will be able to run either from
``lein`` at the command line, or as an ordinary Java ``jar``, on demand. It will
gain a new *option* for where and how it runs, without breaking any of our old
examples. Sweet!


Ring In A Jar
==========================

The following changes details all of the changes that need to be made to get
``volta`` ready to run as a standard ``jar`` file. Most of these changes involve
simple one-line additions to settings files, which is no big deal. However, it
turns out that there is a moderate amount of work that we need to put in to make
our application AOT-friendly. However, those AOT-related changes are not because
of any Heroku-specific requirements; we would have to make very similar changes
to run on any cloud service (e.g. `OpenShift`_, `Engine Yard`_, etc).

.. _`OpenShift`: http://www.openshift.com

.. _`Engine Yard`: https://blog.engineyard.com/2014/clojure-web-app-engine-yard


:min-lein-version
------------------------

The first thing to keep in mind is that you will *not* upload your compiled jar
to Heroku! Any compiled ``jar`` files go into the ``/target`` directory, which
is part of your ``.gitignore`` by default. And that just makes sense: Heroku
only wants your *sources*, along with instructions as to how *they* should
compile and deploy.  Your ``project.clj`` is the roadmap for how that happen:
Heroku will run a remote ``leiningen`` process for you that compiles, packages,
and runs the application from your sources. Your application is fresh every
time!

That means ``leiningen`` is the linchpin of this whole process, which in turn
means we must think about which version we're going to use. By default, Heroku
gives you get Lein version 1.7, which is very old! To specify a more-recent
version, you add a ``:min-lein-version`` key to ``project.clj``. We've done all
of this tutorial with version 2.4.2, so let's make sure that's reflected in our
``project.clj``:

.. code-block:: clojure

    ; brand new key inside project.clj

    :min-lein-version "2.0.0"

According to the official Heroku Clojure support docs, if you specify *2.0.0*
here, you will actually end up with the latest release in the *2.x* series.
That's perfect, since there shouldn't be any API-breakers as long as the major
version matches.


.. note::

   The main ``Leiningen`` github repository has a very helpful comprehensive
   list of all of the available `options for project.clj`_. Most of them will
   never come up for you, but it's a good learning experience just to read
   through it. Remember that it exists for future reference!

.. _`options for project.clj`: https://github.com/technomancy/leiningen/blob/master/sample.project.clj


system.properties
---------------------------------

By default, Heroku gives you Java 8, which you may or may not want. You can
request a specific Java version by including a tiny little ``system.properties``
file as part of your repository. This is a standard Java properties file (i.e.
a sequence of ``x=y`` key-value strings). 

We've done all of our development with Java 7, so let's explicitly tell Heroku
to use that version for consistency. You can create your ``system.properties``
file right at the command line:

.. code-block:: bash

   $: echo "java.runtime.version=1.7" > system.properties

   $: git add system.properties

If you omit this file, you get whatever the current Heroku default version is.


Uberjar settings
---------------------------------

One of the standard ``leiningen`` commands is ``lein uberjar``; when you run
this, you get a standard all-in-one ``jar`` file (aka the ``uberjar``) based on
Leiningen default settings. We'd like to customize a couple of things:

First, we want to give an explicit name to our jar file. This is done by
specifying a string value for the ``:uberjar-name`` key. 

Second, we want to make sure that all of our class files are compiled ahead of
time. This is done by including ``:aot :all`` in the ``:uberjar`` profile.
That's a profile like any of the other profiles we discussed in the earlier
section. 

We also want to add one key to the production environment: a ``:production``
key. This will be checkable via ``environ`` just like any other environmental
variable. It's fine for it to be ``nil`` everywhere but Heroku, which means we
can just add it to an ``:env`` sub-dictionary to the ``:uberjar`` profile. 

It's much easier to make those changes than it is to type out descriptions of
them. Here is how the modified portions of ``project.clj`` should look:

.. code-block:: clojure

    ; inside project.clj

    :uberjar-name "volta.standalone.jar"

    :profiles { ;... other profiles elided
                :uberjar {:aot :all
                          :env {:production true}}}

                   

a single entry point for the web
---------------------------------------

Finally, the ``jar`` must have a single class with a ``main`` method that will
act as the single anointed entry point for the application on Heroku. Up until
now we've just launched via the ``:ring {:handler volta.routes/main}`` entry in
``project.clj``, which means we were using ``lein-ring`` for everything. Rather
than *alter* that old code, let's *add* a new entry point, in a brand new
``volta.web`` namespace.

.. code-block:: clojure

    (ns volta.web
      (:require [volta.routes :as v]
                [environ.core :refer [env]]
                [ring.adapter.jetty :as jetty]))


    (defn -main [& [port]]
      (let [port (Integer. (or port (env :port) 5000))]
        (jetty/run-jetty v/main {:port port :join? false})))


This namespace is short, sweet, and to the point. The ``(-main)`` function
explicitly runs a ``jetty`` instance using the *exact same symbol*
(``volta.routes/main``) that we have been using all along during development.
All of the middleware and Compojure routing and authorization checks are all
still encapsulated within that one symbol. The net effect should be that this is
the *exact same application* as it has always been, except that this time
around, we have manually specified the server container instead of delegating to
``lein-ring``.

And when we inevitably change our ``volta.routes`` namespace in the future,
those changes should automagically propagate through to both our local
``lein-ring`` server, and also to the Heroku Jetty server. Now that we've
created our ``volta.web.-main`` function, we should never need to touch it
again! That's the plan, anyway. 

Note that the extra code regarding *ports* is exactly as suggested by the
official Heroku docs. As you can see, we allow the port to come in as an
argument, or from an environmental variable, and if both of those fail, we
provide a default port of 5000. On our local machine, the question of which port
to use is really a non-issue, but since Heroku manages a veritable multitude of
apps across a multitude of servers, they understandably require far more
flexibility.


AOT and You
------------------

The final changes all have to do with *ahead-of-time* compilation, which we
asked for up above when we specified ``:aot :all``. This is necessary for
performance reasons (it's already slow enough to spin up a Heroku dyno, let
alone the whole application should have to be recompiled every time it wakes
from sleep!), but it raises a tricky issue with the way we've defined our
database connection.

So far we've always created our database connection up at the top of the
``volta.db`` namespace, either via ``mongo.core/connect`` or
``mongocore/connect-via-uri``. But that's not friendly to aot compilation, since
you are not always free to make connections (even local connections) at
compile-time. 

the AOT-friendly database
................................

So how do we ensure that the ``volta.db`` namespace can be compiled in advance,
while still allowing us to freely run the *same* application either via ``lein``
at the command line, or via the ``Procfile`` up on Heroku? The answer is to
redefine the ``volta.db`` connection using *atoms*. 

.. code-block:: clojure

   ; top of volta.db

   ; replace the older (not AOT friendly!) definitions with these:

   (def conn (atom nil))

   (def db (atom nil))

   (defn init []
      (let [connection-map (m/connect-via-uri (venv/volta-uri))]
           (reset! db (:db connection-map))
           (reset! conn (:conn connection-map))))   

   ; also add the deref (@) symbol to every reference to db in helper functions!

Now the *symbols* ``conn`` and ``db`` are floating around in the namespace, safe
to refer to inside all of our helper functions. But they will be ``nil`` until
we call the brand new ``(init)`` function. The only really ugly part of this
change is that we must now dereference ``db`` every time we want to use it:
replacing ``db`` with ``@db``. That's unfortunate, but what are you going to do?
We are living on the crazy bleeding edge of cloud technology here.


the AOT-friendly session store
..................................

Next, we need to change the way the session store is handled. A Ring session
store is a *reified instance* that implements the
``ring.middleware.session.store/SessionStore`` protocol. This turns out to
create an issue with AOT compilation, because the session-store instance is
compiled and instantiated before we know anything about the operating
environment. If we don't know the operating environment, we can't supply the
correct URI connection string, because the whole point is to pull that out at
runtime via ``environ``. As a result, the default ``session-store`` provided by
Monger just plain doesn't work in an AOT environment.

However, that default Monger class is fine for all other purposes, so we will
implement a simple two-step solution. First, we will define another atom holding
a reference to a standard Monger ``session-store`` instance, which we will
``(reset!)`` from nil to a valid instance as part of the ``(init)`` function.

.. code-block:: clojure

   ; inside volta.db
   ; One new :require inside the namespace declaration

   (:require   ; ... elided
        [ring.middleware.session.store :refer :all])

   ; one new atom 

   (def monger-store (atom nil))

   ; upgrade the (init) function so that it updates monger-store too
    (defn init []
      (let [connection-map (m/connect-via-uri (venv/volta-uri))]
        (reset! db (:db connection-map))
        (reset! conn (:conn connection-map))
        (reset! monger-store (session-store @db session-coll))))


Secondly, we will define our own wrapper record that is hip to the concept of
atoms. Our wrapper will delegate everything else to the underlying Monger
implementation, but only after first dereferencing the atom.

.. code-block:: clojure

   ; still inside volta.db

    (defrecord VoltaSessionStore []
      SessionStore
      (read-session [store key]
        (read-session @monger-store key))
      (write-session [store key data]
        (write-session @monger-store key data))
      (delete-session [store key]
        (delete-session @monger-store key)))   


Then, over in the ``volta.routes`` namespace, we need to change the value we're
sending to the ring middleware from its old value (an instance of vanilla
``monger.ring.session-store``) to an instance of our newer, smarter
``VoltaSessionStore``.

.. code-block:: clojure

   ; now inside volta.routes

    (def volta-defaults
      (assoc-in d/site-defaults [:session :store] (vdb/->VoltaSessionStore)))   

Note the use of the factory method ``->VoltaSessionStore``, which Clojure
creates for you as a freebie whenever you use ``defrecord``. 


ensuring that ``(init)`` is called
......................................

Making sure that ``(init)`` gets called in our two scenarios is very easy. The
``lein-ring`` plugin accepts a number of arguments in addition to ``:handler``.
One of those arguments is ``:init``, which is *precisely* what we want: a
function that is called once at startup and then never again. So we just add
that key to the ``:ring`` configuration map inside ``project.clj``.

.. code-block:: clojure

    ; inside project.clj

    :ring  {:handler volta.routes/main
            :init volta.db/init}   
 
And *poof*, ``lein-ring`` will now run ``volta.db/init`` once per startup, every
startup, and never again. 

And then finally, we add a one-liner to our ``volta.web/-main`` function. This
function is also run once on startup, every startup, and then never again. 

.. code-block:: clojure

    (ns volta.web
      (:require [volta.db :as db]
                [volta.routes :as v]
                [environ.core :refer [env]]
                [ring.adapter.jetty :as jetty]))


    (defn -main [& [port]]
      (let [port (Integer. (or port (env :port) 5000))]
        (db/init)
        (jetty/run-jetty v/main {:port port :join? false})))


And now everything is AOT friendly. We can run from ``lein-ring`` (which is
*not* AOT compiled) or from ``java -jar`` (which *is*). In either case, the
``db`` atom is not set until a specific point in time of our choosing, via the
``(volta.db/init)`` function call. 


AOT Conclusions
.....................

Frankly, even though we only made these changes because the AOT issue forced our
hand, I think the are good one for the overall design. This seems like a tidier,
better-organized approach than what we had previously, where the database
connection and session store instantiation both happened behind the scenes, at
an unknown time, as part of the compilation process. Before, the all-important
initial connection to the database had a certain magical black box quality to
it, but now it is perfectly explicit. I think we can all agree that *explicit is
better than implicit*.


Summary
-----------

Once all of the above is complete, we've filled in all of those missing
arguments in our  ``Procfile`` up above. There is now a ``volta.web`` namespace
with a ``(-main)`` function, and there will also be a
``target/volta.standalone.jar`` file when the time comes. 

Remember that we don't actually upload that uberjar; we just upload the sources.
Heroku will compile their own uberjar based on our specifications. As we
mentioned above, the ``target/`` directory is part of our ``.gitignore``, so
nothing from it will ever get committed anywhere. That's actually useful; it
means we can take the ``lein uberjar`` command for a test run, woohoo!

.. code-block:: bash

   $: lein uberjar
   # compiling volta.db
   # compiling volta.routes
   # ... etc
   # Created {PROJECT}/target/uberjar/volta.standalone.jar   

And now sure enough, there is a ``volta.standalone.jar`` inside the ``target/``
directory. We can even try running it via a command which is (almost) the same
as the one in our ``Procfile``. 

.. code-block:: bash

   $  java -cp target/uberjar/volta.standalone.jar clojure.main -m volta.web

(Note that this is not the *exact* same path required in the ``Procfile``,
because of the extra ``/uberjar/`` in the path. I can only assume that Heroku
does something automagical about this... be alert for possible issues here!).

Locally, the above command works just fine, giving us a server that is up and
running *locally*, using the exact same jar-based AOT-compiled deployment
strategy that will be used on Heroku. *Ta daaaa!*. You can point a browser at
``localhost:5000`` (remember that port 5000 is our chosen default for the
``jar`` main method) and see the same home page that we get when we run via
``lein ring server``.



Push To Heroku
============================

Once you have all of those ducks in a row, you are finally ready to push to
Heroku and see your app in action. 


git push heroku master
------------------------

Pushing to Heroku is as simple as running ``git push heroku master`` from the
command line. This astonishing simplicity is what first made me a fan of heroku.

.. code-block:: bash

   $: git push heroku master

   # ... extensive output elided

   # ... massive (once-only) download of jar files

   # ... compilation of all our own custom namespaces

   # ... jar file created

   # -----> Discovering process types
   #        Procfile declares types -> web

   #-----> Compressing... done, 88.1MB
   #-----> Launching... done, v4
   #       https://peaceful-mountain-9656.herokuapp.com/ deployed to Heroku

And that's it. We now have our application up and running on Heroku. 


Add An Admin
===============

Of course the database is completely free of all users at the moment. We will
add a couple of them next, just so we can inspect all of the routes. We will do
this from a ``REPL`` with the help of helper functions in our ``volta.db``
namespace. Yes, you can use a remote REPL *running on Heroku*  with access to
all of your own namespaces... slick, no?










