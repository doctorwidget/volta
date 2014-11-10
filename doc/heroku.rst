.. _heroku:

******************
Heroku
******************

Let's deploy this baby to Heroku. We haven't really proved a damn thing until
anyone on earth can look at our running application. 


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

You add resources (like a Mongo database) via the Heroku toolbelt. From a
terminal window at the same tier as ``project.clj``, type the following:

.. code-block:: bash

   $ heroku addons:add mongolab
   # Adding mongolab on peaceful-mountain-9656... done, v3 (free)
   # Welcome to MongoLab.  Your new subscription is being created and will be available shortly 
   # Please consult the MongoLab Add-on Admin UI to check on its progress.
   # Use `heroku addons:docs mongolab` to view documentation.

This is a pattern every Heroku user quickly becomes familiar with; almost every
interaction with Heroku will be via the ``heroku`` command. Mongolab, like many
other addons, also provides you with a web UI interface to your account, which
you can track down as part of the app list in your account area. 

In addition to adding the database, the Mongolab addon should have configured
our ``MONGOLAB_URI``. Let's check::

.. code-block:: bash

   $ heroku config
   # MONGOLAB_URI: mongodb://heroku_app... (REDACTED)

Sure enough, there it is! We now have a Mongo database ready and waiting for us
when we push our repository. Thanks to the work we did above, we don't need to
write any new code to access this database: ``environ`` will automatically use
this value rather than the one inside ``profiles.clj``. 

The web UI would let us add a brand new user, *but* the web UI doesn't give us
access to Bcrypt to properly hash passwords. That means we'll need to add our
first admin user via a remote REPL session. And we can only do that *after* we
push the repository and get the app running. Fortunately, the app will still be
functional even before there are any users, because we have a few views
(including the root ``"/"`` route) that require no authentication whatsoever.







