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


Mongo URI Connection
=========================

Before we can perform the actual migration, we need to alter the ``Monger``
connection so that it works via a URI. On Heroku, the ``Mongolab`` plugin will
automatically configure a URI connection string as an environmental variable for
us. We want to use the *exact same pattern* locally, to minimize the chances
of unwelcome surprises when we deploy. 

Fortunately, thanks to our tutorial on :ref:`environment`, this is now trivial. 
Let's start by adding a trivial function to our ``volta.env`` namespace:

.. code-block:: clojure

   ; add to bottom of ``volta.env``

   (defn volta-uri [] (env :mongolab-uri))

As we discussed earlier, it might be overkill to have a whole ``volta.env``
namespace. But if we *do* ever need to add more complex conditional code related
to the runtime environment, we will be much better off if 100% of that code is
isolated to its own namespace. So better safe than sorry!

Next, we add one new variable to the ``profiles.clj`` file:

.. code-block:: clojure

    {:dev* {:env {:mongolab-uri "mongodb://127.0.0.1/volta"
                  :demo-bar "BAR from profiles.clj"
                  :demo-zug "ZUG from profiles.clj"}}}   


Note that we're using the keyword ``:mongolab-uri`` even for our local
connection. When we move up to Heroku, there will be an environmental variable
with this exact name, but it will contain the correct Heroku-side remote URI.
This way we won't have to change a single thing in the code between our local
and Heroku environments. 

Finally, we alter ``volta.db`` to use this new system in liu of a direct
connection:

.. code-block:: clojure

    ; new :require

    (:require    ;... others elided
              [volta.env :as venv[)


    (def uri-connection
        (m/connect-via-uri (venv/volta-uri)))

    (def conn (:conn uri-connection))

    (def db (:db uri-connection)

As you can see, the ``monger.core/connect-via-uri`` function takes a string URI
as its only argument. If usernames and passwords are required they will be a
part of the string, but our local connection requires neither. The function
returns a map with keys for ``:db``  and ``:conn``, which we map to the same
symbols we were using before. 

And that's it! You can now run your ``mongodb`` process, followed by ``lein ring
server``, and you will see that our Ring server seamlessly connects to the Mongo
database just like it did before. Now when we finally push to Heroku, we won't
need to add even a single conditional check to our code: the ``environ`` library
will handle sorting out the difference between ``profiles.clj`` and the
available environmental variables for us. 


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

In addition to adding the database, the Mongolab addon should have configured
our ``MONGOLAB_URI``. Let's check:

.. code-block:: bash

    $: heroku config

    # MONGOLAB_URI: mongodb://heroku_app... (REDACTED)



Sure enough, there it is! We now have a Mongo database ready and waiting for us
when we push our repository. Thanks to the work we did above, we don't need to
write any new code to access this database: ``environ`` will automatically use
this value rather than the one inside ``profiles.clj``. 

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

   web: java $JVM_OPTS -cp target/{XXX}.jar clojure.main -m {{XXX}}.web

The astute reader will immediately note that we do not have any file named
XXX.jar inside our ``target/`` directory. Up until now, everything we've done
has been oriented towards running via ``lein`` on a development machine. But to
run on Heroku, we will need to deploy as a standard Java ``jar`` file. 

This is a feature, not a bug. Running Clojure apps as ``jar`` files is yet
another example of Clojure geting big returns from being hosted on the JVM. By
piggybacking on Java, Clojure apps have access to the ubiquituous Java server
runtime environment. That's why Clojure support was added to Heroku so early on;
it's just a minor wrapping around basic Java support, and everyone offers that!

In the next section, we will see how to give our project the ability to run as a
``jar`` file. This won't involve *altering* any old code, which would suck.
Instead, we will *add* a few lines of code to a few locations, and ``volta``
will become able to run both from ``lein`` and also as a ``jar``, on demand. It
will gain a new *option* for where and how it runs, without breaking any of our
old examples. Sweet!


Clojure Tweaks
==========================

The following changes details all of the changes that need to be made to get
``volta`` ready to run as a standard ``jar`` file. As a bonus, these changes are
not generally Heroku-specific; we would have to make similar changes to run on
any cloud service (such `OpenShift`_, or any of the others). None of these are
complicated; most are simple one-line additions to our ``project.clj`` file.
Let's go through them one at a time. 

.. _`OpenShift`: http://www.openshift.com


:min-lein-version
------------------------

by default you get Lein version 1.7, which is very old!


system.properties
---------------------------------

by default you get OpenJDK 1.6, which you may or may not want
you can configure a system.properties file


uberjar :profile
---------------------------------

Java apps are deployed to Heroku in the form of an ``uberjar``, which is one
gigantic zip file with some extra Java metadata. Fortunately, ``leiningen``
makes it easy to add just such an uberjar file. 


a single main entry point
-------------------------------

Finally, the app needs a single class with a ``main`` method that will act as
the single anointed entry point for the application on Heroku.


Summary
-----------

Once all of the above is complete, you can now fill in the arguments to the
``Procfile`` up above, replacing those ``{XXX}``'s with our actual ``jar`` file
name:

TODO: show this





Push To Heroku
============================

Once you have all of those ducks in a row, you are finally ready to push to
Heroku and see your app in action. 


git push heroku master
------------------------



now after waiting, main page should be visible


Add An Admin
===============

heroku run lein REPL

add the user via our ``volta.db`` commands








