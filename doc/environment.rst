.. _environment:

*************************
Environmental Concerns
*************************

Eventually, we're going to want to deploy this project onto a cloud service such
as :ref:`heroku`. Before we do that, we will need a plan for handling deployment
into different environments. 

There are a wide variety of settings that inevitably differ between your development
and production environments. The primary database connection is the most
obvious example of this, but it will also come up when (for example) we
eventually set up a logging system, or a system for sending external e-mails, or
when we decide whether or not to redirect all HTTP connections to HTTPS, or add
a second database for caching, and so on and so forth.

These are generalized issues that show up no matter what language or framework
you're developing your server with. When I first encountered it while deploying
a Django application to Heroku, I was discouraged by the cornucopia of ad hoc
TIMTOWDI strategies I heard suggested for tackling the problem. And conversely,
I was very pleased the first time I heard of the pattern I ended up using, which
involves cleanly-separate settings files, each of which can be included or
omitted from ``git`` as desired. A good solution should not just work; it should
feel elegant.


Environ
===============

Fortunately, Clojure has an elegant solution available via the `Environ`_
library, and its associated plugin. This system lets you define settings as a
combination of local files and environmental variables -- mixed and matched as
you see fit for your security and version control needs. It then pulls out the
correct values at runtime, depending on which environment you are running in.

.. _`Environ`: https://github.com/weavejester/environ  

Of course it's true that ``leiningen`` already uses a `profiles`_ system, and it
has always had it! The problem is that any information stored under the
``:profiles`` key *always* goes into version control, which makes it an
inappropriate location for many kinds of configuration data. The whole point of
``Environ`` is to give you the *option* to store that information outside of
``project.clj``, and hence outside of version control. 

.. _`profiles`: https://github.com/technomancy/leiningen/blob/stable/doc/PROFILES.md

Also note that you could always use vanilla Java interop to access environmental
variables (e.g. ``(System/getenv "MY_DATABASE_URL")``, but that approach leads
to a proliferation of ``(if)`` checks, where you have to manually decide whether
to use an the environment or a local file as the source depending on the runtime
environment. ``Environ`` is a way to isolate all of those issues from the body
of your Clojure code.


Installation
----------------

You install both the library and the plugin just like anything else:

.. code-block:: clojure

    ; inside project.clj

    :dependencies [[environ "1.0.0"]]  ; others elided for clarity

    :plugins [[lein-environ "1.0.0"]]  ; ditto


How To Find Stuff
---------------------

Once you've done the above, you can then do the following in any block of
Clojure code:

.. code-block:: clj

   (require '[environ.core :refer [env]])

   (def my-spiffy-configuration-value
      (env :spiffy-config))

And at that point, ``Environ`` takes over and looks for a *value* associated
with the ``:spiffy-config`` *key* somewhere. Where?


Where To Put Stuff
-----------------------

``Environ`` looks for data in *four* locations. This is the search order:

#. Inside your ``project.clj`` file, as part of the ``:profiles`` key:
    E.g. ``:profiles {:dev {:env {:spiffy-config 3.14159}}}``.
#. Inside a ``profiles.clj`` file, again under an ``:env`` sub-map of a
   particular profile. 
#. Environmental variables
#. Java system properties. 

A final map is built by merging the values found in each of these locations. Because this
is a plain old Clojure ``merge`` operation, the list above runs from lowest
priority to highest priority. The ``profiles.clj`` file trumps the
``project.clj`` file, environmental variables trump ``profiles.clj``,
and JRE properties trump everything. This gives you an easy-to-manage,
unambiguous priority system, where you can easily override things in different
environments as desired, all while keeping the actual Clojure code clean and
immutable, as it should be.


``profiles.clj`` vs ``.lein-env``
......................................

The official docs for this file are a bit misleading; when I first read through
them, they mention the file ``.lein-env`` file long before they mention the
``profiles.clj`` file. Worse, they explicitly say that ``.lein-env`` is the
first place where ``Environ`` looks for stuff, from which I wrongly inferred
that I would need to create and edit my own ``.lein-env`` file. (I eventually
learned that `I was not alone`_ in this misconception, which made me feel better).

.. _`I was not alone`: http://yobriefca.se/blog/2014/04/29/managing-environment-variables-in-clojure/

It is true that ``.lein-env`` is the first (and therefore lowest-priority) place
that ``lein-environ`` looks for values, but it's not true that you create and
edit it yourself. In fact, ``.lein-env`` is dynamically created by
``lein-environ`` plugin at runtime, so you should think of it as a *transient*,
even *ephemeral* file, which you do **not** micromanage or even touch in any
way.

Instead, you create a ``profiles.clj`` file as a top-level sibling of
``project.clj``. At runtime, the ``lein-environ`` plugin knows which environment
you're running in, and it looks for a ``profiles.clj`` file with an ``:env``
sub-map for the correct environment . For example, your ``profiles.clj`` file
might look something like this:

.. code-block:: clojure

   ; complete contents of ``profiles.clj``

    {:dev {:env  {:database-url "jdbc:postgres://localhost/dev"
                  :motd "I'm being developed!"}}
     :test {:env {:database-url "jdbc:postgres://localhost/test"
                  :motd "I'm running unit tests!"}}
     :prod {:env {:database-url "heroku:long-heroku-uri"}
                  :motd "I'm deployed on Heroku!!"}}
 
When configured correctly (*see the note below about issue #15*), the plugin
will merge the *correct* ``:env`` sub-maps from ``project.clj`` and
``profiles.clj`` and stores the *merged* final version of the map in the
``.lein-env`` file. But you never need to manually manage that process!. So
one (1) and only one (1) of the ``:env`` keys from ``profiles.clj`` will exist
in the final ``.lein-env`` file, depending on whether you are running in
``:dev``, ``:test``, or ``:prod`` modes.

So *technically*, ``lein-environ`` is indeed looking inside the ``.lein-env``
file which is why the docs bring it up, but as a *practical matter*, you only
ever touch the ``profiles.clj`` file. And you can create multiple different
``:env`` sub-maps in that ``profiles.clj`` file -- whereas if you were trying to
manually manage ``.lein-env``, you would only be able to have one single
``:env`` map! 

The beauty of this system is that you get incredibly fine-grained control of
whether or not any particular setting goes into version control or not. You can
distribute your settings at different storage tiers depending on how sensitive
the information is:

#. directly inside ``project.clj``, under the standard top-level ``:profiles``
   key, e.g. ``:profiles {:env {:foo "bar"}}``. Because ``project.clj`` is
   always under version control, anything stored like this will **always** end
   up inside version control.
#. inside ``profiles.clj``, in one of several different ``:env`` sub-maps, as
   shown in our sample file above. In the end, one and only one of those
   ``:env`` sub-maps will be merged onto ``project.clj`` and saved to ``.lein-env``.
#. as an environmental variable, with all of the privacy and micromanagement
   that implies. 
#. as a Java system property (mentioned only for completeness sake). 

But regardless of where you've chosen to *store* each bit of information, your
Clojure source code will always *retrieve* it in the exact same way:

.. code-block:: clojure

    (require '[environ.core :refer [env]])

    (def my-config-setting
       (env :my-config-setting))

And **this** is the real value added by ``Environ``. It means your code stays
nice and clean without being the least bit insecure, and without being littered
with boolean checks (e.g. (``(if (= (:env config) :prod))``). All of boolean
checks and security issues are localized to the ``Environ`` ecosystem rather
than being strewn across your codebase. Yes, this is all a bit more TIMTOWDI
than I usually like, but in this case it is a *perfectly appropriate* level of
configurability. 


Environmental Variables
.........................

We've described the whole system mainly in terms of the two Clojure files
(``project.clj`` and ``profile.clj``) because that's where the most obvious
benefits of the system come in. But sometimes it makes perfect sense to store
data in an environmental variable. If that time comes, you *always* want to have
the environmental values trump any file values, and that's just what
``Environ`` does. 

Once you get to this point, ``Environ`` is just acting as a thin layer around
Java interop (``System/getenv``), but it's *very* useful to have it do this only
after ruling out a local source. As an added bonus, ``Environ`` converts all of
the variables to Lisp style: lower-casing everything and converting both dots
and underscores to dashes. So you get to use ``:spiffy-config`` in your code,
instead of the somewhat-hideous ``SPIFFY_CONFIG``. 

Let's say that you want to `install Mongolab`_ as a Heroku plugin. When you do
that, the installation process automatically creates an environmental variable
called ``MONGOLAB_URI``. You can access that value via a simple call to
``(eviron.core/env :mongolab-uri)``. Meanwhile, back in your ``profiles.clj``
file, you could include the exact same key as a local value. Now *poof*, your
code does not need to change from dev to production, and it will get the correct
URI for the correct environment automagically.

.. _`install Mongolab`: https://devcenter.heroku.com/articles/mongolab


Java System Properties
.........................

Finally, the last place ``Environ`` will look is in your Java system properties,
which can easily be set as part of the argument that launches your JRE process.
I don't see myself doing this, but it's worth remembering that the option
exists. This is the last-place, highest-priority location, so it will always
override any settings that were configured higher up in the chain.


Putting It All Together
---------------------------

Let's end with an example that shows all of this in action. We will add a new
namespace called ``volta.env``, and put in some helper functions there. As a
practical matter, that's probably namespace overkill, since it's already easy to
integrate the use of ``environ.core/env`` as one-liner calls as needed. But this
way you will be able to see three different priorities in action as part of
the actual working project. The whole point of having a *batteries-included*
project is that it's *always* easier to delete stuff you don't want than it is
to set up your own working pieces from scratch.


volta.env
..................

Create the ``volta.env`` namespace and put in the following helper functions:

.. code-block:: clojure

    (ns volta.env
      (:require [environ.core :refer [env]]))

    (defn get-foo []
      (env :demo-foo))

    (defn get-bar []
      (env :demo-bar))

    (defn get-zug []
      (env :demo-zug))

    (defn get-blort []
       (env :demo-blort))

That's the only code we will need. Everything else will be configured in one of
the environments discussed above. 

project.clj
...............

There's one small oversight in the otherwise-excellent ``environ`` library, as
documented in `this issue`_. By default, ``leiningen`` automatically makes
anything defined inside ``profiles.clj`` **overwrite** entries of the same name
inside ``project.clj``. That means if you add a new ``:dev`` entry inside
``profiles.clj``, it doesn't *merge* with the one from ``project.clj``: it just
outright replaces it. 

.. _`this issue`: https://github.com/weavejester/environ/issues/15

Per the issue noted above, the ``environ`` devs agree that this is unfortunate,
but they don't think it's an important enough problem to fix in the code. Their
orientation is clearly that they expect most people to put their *entire*
``:dev`` profile inside ``profiles.clj``, rather than splitting it between the
``project.clj`` and ``profiles.clj`` files. However, I think that splitting it
up like that is part of the charm of the system! Ideally there should be a clean
series of merges from ``project.clj`` to ``profiles.clj`` to the environment to
the JRE.

Fortunately, the devs suggest a workaround that's pretty easy to implement.
Leiningen already allows you to specify a vector keywords that will be used to
build the default map of settings for the ``dev`` environment. So rather than
*redefining* the ``dev`` profile, the suggestion is that you pick a
slightly-different name for use inside ``profiles.clj``, such as ``:dev-local``
or ``:dev*``. Then, back inside ``project.clj``, you include that profile in the
``:defaults`` vector.

This will probably be clearer with an example. Starting with the more-familiar
``project.clj``: 

.. code-block:: clojure

   ; inside project.clj

   :profiles {:default [:base :system :user :provided :dev :dev*]
              :dev {:env {:demo-foo "FOO from project.clj" 
                          :demo-bar "BAR from project.clj"}}}

The ``:default`` key defines how the default settings map will be built. By
appending our new ``dev*`` map to it, we will get the desired *merge* behavior
instead of *overwrite* behavior.

And then in our brand-spanking new ``profiles.clj`` file:

.. code-block:: clojure

   ; complete contents of ``profiles.clj!``

   {:dev {:env {:demo-bar "BAR from profiles.clj"
                :demo-zug "ZUG from profiles.clj"}}}

Note that this is not a well-formed statement, by any measure! It's just a map
definition which is not bound to anything! Not to worry; ``lein-environ`` will
sort all of that out for you.

That should be all we need to see that value inside a REPL:

.. code-block:: clojure
  
   ; in a REPL

   (require '[volta.env :as v])
   ;nil

   (v/get-foo)
   ;"FOO from project.clj"

   (v/get-bar)
   ;"BAR from profiles.clj"

   (v/get-zug)
   ;"ZUG from profiles.clj"

   (v/get-blort)
   ;nil

So because ``:demo-foo`` was *only* defined inside ``project.clj``, it survives
to the end of the merge process. But ``:demo-bar`` and ``:demo-zug`` are both
pulled from ``profiles.clj``, overriding one of the ``project.clj`` values.
Finally, we haven't set ``:demo-blort`` anywhere, but note that we get a nice clean
``nil`` back for it, rather than any kind of error.

Next, quit the REPL and add a value for ``DEMO_ZUG`` to the environment. This
will be cleaned up by ``lein-environ`` to the more idiomaic ``:demo-zug`` inside
Clojure. 

.. code-block:: bash

   $ export DEMO_ZUG="ZUG from the shell"
   #...elided...
 
Go back to the REPL and try again:

.. code-block:: clojure

   (require '[volta.env :as v])
   ;nil

   (v/get-foo)
   ;"FOO from project.clj"

   (v/get-bar)
   ;"BAR from "profiles.clj"

   (v/get-zug)
   ;"ZUG from the shell"

   (v/get-blort)
   ;nil

And that shows the whole process in action, with all variables stored where
you want them for your own security needs, but always accessible the exact same
way in your Clojure code. Beautiful!






