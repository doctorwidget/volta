.. _clojurescript:

*********************
ClojureScript
*********************

The final thing we will do is show how to `integrate ClojureScript`_ into a
project. Thanks to the `lein-cljsbuild`_ plugin, this is very easy to do.


.. _`integrate ClojureScript`: https://github.com/clojure/clojurescript

.. _`lein-cljsbuild`: https://github.com/emezeske/lein-cljsbuild


:dependencies & :plugins
============================

As always, we start by changing ``project.clj``, adding both a new
``:dependency`` and a new ``:plugin``.

.. code-block:: clojure

   :dependencies [  ;... elided
                    [org.clojure/clojurescript "0.0-2371"]]

   :plugins [ ;... elided
              [lein-cljbuild "1.0.3"]]

This should be seeming like common sense by now. 


Subdirectories
====================

By far the biggest change we need to make to integrate ClojureScript is to
divide up our ``src`` and ``test`` directories so that they have separate
subdirectories for ``clj`` versus ``cljs`` files. So (for example), any path
that we have until now described as ``src/volta/db.clj`` will become
``src/clj/volta/db.clj``.

.. code-block:: bash

    $: mkdir src/clj
    $: mkdir src/cljs
    $: mkdir test/clj
    $: mkdir test/cljs

    # then use the git `mv` command:

    $: git mv src/volta src/clj
    $: git mv test/volta test/clj

    $: git status
    # lots of changes to commit...

    $: git commit -am "Created clj and cljs subdirectories inside src and test"


:source-paths and :test-paths
====================================

At this point, since we have a nonstandard location for our source files, we
need to explicitly inform ``leiningen`` where to look for source files. Until
now we've just skated along under the assumption that ``{PROJECT}/src`` was the
default. As always, we do this inside ``project.clj``

.. code-block:: clojure

     :source-paths ["src" "src/clj" "src/cljs"]
     :test-paths ["test" "test/clj" "test/cljs"]

And now ``lein`` knows to look in the appropriate subdirectories for source code
at compile time. We could have omitted the naked ``src`` and ``test``
directories, but I like the idea that ``lein`` still considers those two
top-level directories to be special, so I leave them in.


:cljsbuild
================

Finally, the ``lein-cljsbuild`` plugin uses a new top-level configuration key in
the ``project.clj`` map. Not too surprisingly, this key is named ``:cljsbuild``.
Let's configure it to have two different build profiles: one suitable for
development, and the other suitable for production. 

.. code-block:: clojure

   :cljsbuild {:builds 
                [{:id "dev"
                  :source-paths ["src/cljs"]
                  :compiler {:pretty-print true
                             :output-to "resources/public/js/volta.js"
                             :source-map "resources/public/js/volta.js.map"
                             :output-dir "resources/public/js/out-dev"
                             :optimizations :whitespace}}
                 {:id "prod"
                  :source-paths ["src/cljs"]
                  :compiler {:output-to "resources/public/js/volta.min.js"
                             :source-map "resources/public/js/volta.min.js.map"
                             :output-dir "resources/public/js/out"
                             :optimizations :advanced}}]})


This sets up a ``dev`` and a ``prod`` target, so we can run ``lein`` commands
using one profile or the other. Or we can use both! Note that they have
different output file names... by default, if you don't specify one particular
target, ``lein-cljsbuild`` builds them all. 

The output of ``lein-cljsbuild`` is one single unified JavaScript file, with the
name specified by the ``:output-to`` key. The ``:source-map`` and ``output-dir``
keys are optional but very useful; they cause source maps to be built, so any
JavaScript errors point back to the correct line number in the originating
*ClojureScript* file. 

Note that we *do* have to repeat the ``:source-paths`` directive even though it
is stated up above. It may be that we can omit the outer reference to
``src/cljs``, but we definitely cannot omit the one inside the ``:cljsbuild``
directive. Should check on that further, but I note that other third party
examples (e.g. the ``chestnut`` project template) does repeat ``src/cljs``
twice, just as we are doing here.

Finally, we're using ``:optimizations :whitespace`` for the dev target; this
means we get one concatenated single file, but there is no attempt to eliminate
dead code or do other fancy optimizations. Meanwhilie, the prod target will be
aggressively minimized, with dead code eliminated and everything renamed to very
terse alphabet soup variable names. The former file will obviously be much
bigger than the latter, but in theory, either one will have the exact same
effect when loaded onto any old HTML page. 


Next, let's start with the classic ``hello world``. We'll move up from there, but
you have to start somewhere. 



A ClojureScript Source File
=================================

The basic pattern in ClojureScript development is that you write nice, clean,
separate ClojureScript namespaces, and the compiler converts and concatenates
them into one big JavaScript file. That final output file is then included on
host page inside a ``<script>`` block. To the HTML page, this will appear to be
just another JavaScript file... but to the developer, they get to work in
beautiful, safe, sane Clojure syntax. And thanks to source maps, it's not even
hard to track down the true location in the source code of any bugs.

So our first job is to create the ``src/cljs/volta/clj_demo.cljs`` file. 
Note that this file needs to be created inside the ``src/cljs`` namespace, not
``src/clj``. Also note the conversion from dashes (``-``) in the ClojureScript
code to underscores (``_``) in the file name.

.. code-block:: clojure

    (ns volta.cljs-demo
      (:require [goog.dom :as gdom]))

    (def $output (gdom/getElement "cljsOutput"))

    (defn timed-string
      "A timestamped greeting"
      []
      (str "This greeting dynamically created on " (js/Date.)))

    (defn ^:export init
      "Initialize the main cljs-demo page"
      []
      (.log js/console "initializing cljs-demo page...")
      (gdom/setTextContent $output (timed-string)))


There's nothing much to say about this. We're using the Google Clojure Toolkit
as a poor man's JQuery; any non-trivial application would probably use something
more Clojurrific, like `Domina`_ or `Dommy`_, not to mention the fantabulous
`Om`_. But this demonstrates that you *always* have access to the various
``goog.*`` namespaces whenever you use ClojureScript. Their syntax is somewhat 
depressingly Java-centric, but they are really quite comprehensive, and they are
always available.

.. _`Domina`: https://github.com/levand/domina

.. _`Dommy`: https://github.com/Prismatic/dommy

.. _`Om`: https://github.com/swannodette/om


The other thing to note is the use of the ``^:export`` metadata key for our
``(init)`` function. If you don't include that, the host HTML page can't call
this function: *functions are not visible outside of the namespace by default*.
That's not a huge burden, because the best pattern is to do what we have done
here, and have one single entry point that initializes the page, which means you
usually don't need more than one ``^:export`` on one single main function.
Nontheless, it's an important point to keep in mind. 


A Demo Route
=========================

Next, we need to *include* the compiled JavaScript version of that file on an
actual HTML page. Including it is not enough -- note that it is just a series of
definitions, without any imperative code. So the host HTML page must both *load*
the compiled JavaScript file and make a *function call* to the ``(init)``
function which we so carefully marked with ``^:export``. 

So the next step is to make a new route for this host HTML page. As
always, that means a new template fragment, a new route, a new handler, and a
modification to the home page to show a link to this new demo page. We won't
duplicate most of that code here. However, we should talk about one modification
to the ``volta.handlers/base-page`` function which makes it easier to call our 
``(init)`` function -- or any arbitrary JavaScript function -- once when the
host page starts up.

First, an extra helper that formats a ``<script>`` block with an arbitrary
function call to an arbitrary namespace. This function will be called once when
the page loads and then never again, which is perfect for our ``(init)``
function. 

.. code-block:: clojure

   ; inside volta.handlers

    (defn js-call
      "Render a script block that performs one function call to a JavaScript
       namespace. Intended to kick off a page 'main()' method, but can be
       used to run any kind of initialization function. The argument to the
       function should be a two-item vector containing the namespace and the
       desired function to be called."
      [[namespace fun]]
      (first (h/html [:script (format "%s.%s()" namespace fun)])))   

Yes, the function could just take an arbitrary blob of text to use as the body
of the script block, but this way seems less brittle and more elegant. In the
future, we might want the ability to trigger more than one function call per
namespace. This way, we have broken things down into the true underlying pattern
rather than simply saying "give me string fodder to feed to eval()". 

Then inside the ``(base-page)`` function, we add one final transformation.

.. code-block:: clojure

   ;; inside volta.handlers

   (h/deftemplate base-page
     "public/html/base.html"
      [{:keys [extra-css extra-js js-calls title] :as context}]
      [:title] (h/content title)
      [:head] (h/append (map stylesheet extra-css))
      [:#contents] (h/content (:content context))
      [:body] (h/append (map script extra-js))
      [:body] (h/append (map js-call js-calls)))   

Note that this occurs *after* the transformation that inserts the script files
themselves. Obviously you can only call particular methods after the source
files are loaded!

And finally, the page function that calls ``(base-page)`` includes a new
sub-map, with a vector of vectors representing functions to be called. 

.. code-block:: clojure

    ;; inside volta.handlers

    (defn cljs-demo-page [request]
      (base-page {:title "Admin Demo"
                  :content (cljs-demo-body request)
                  :extra-js ["/js/volta.js"]
                  :js-calls [["volta.cljs_demo" "init"]]}))   

We know that the final compiled JavaScript file will be called ``volta.js``,
because that's what we specified in our ``:cljsbuild`` settings. And the actual
*function call* to trigger our ``(init)`` function will be added to the page
because of what we've specified under the ``:js-calls`` key.

One more thing to notice is that the path is ``/js/volta.js`` instead of
``js/volta.js``. All of the earlier examples should probably be changed to
include that initial slash. The initial slash makes it explicit that the link is
an *absolute* one, beginning from the root of the domain. Without it, the links
are *relative* to the current URI. Since our example URIs are mostly short,
single-segment URLs, that has always worked out for us. But as soon as you have
a path with even one subdirectory, those relative URIs will not successfully
lead to our ``resources/public`` directory. In other words, all those relative
resource URIs we've seen so far have led to the correct resource *by accident*.
DOH!



Compile It
=============

``lein-cljsbuild`` works best when you give it its own dedicated terminal
window. Then you can just leave this background process running:


.. code-block:: bash

  $: lein cljsbuild auto
  # Compiling ClojureScript

When that process is running, ``lein-cljsbuild`` monitors all ``*.cljs`` source
files for changes, automatically recompiles everything for you in the
background. Very handy!

You should review the main ``lein-cljsbuild`` documentation (linked above) for
more examples of using it. For example, you can also run ``lein cljsbuild once``
to just compile once without starting a background process. Or you can target a
specific build (e.g. ``dev`` or ``prod``) instead of compiling all of the
targets every time. 

After at least one compilation cycle, you can find the resulting JavaScript
files  inside the ``/resources/public/js`` directory, named just as we asked for
inside our ``:cljsbuild`` configuration map.  That brings us full circle: we now
have a host HTML page that looks for that compiled file and calls its ``(init)``
method.


See It In Action
===================

At this point, we are done configuring this very basic example. When you re-run
the server (either via ``lein run`` or ``java jar``), there should be a new
ClojureScript demo page linked from the main page. That page should both output
a message to the JavaScript console and also put a timestamped message into the
visible DOM. 

This is obviously an extremely trivial example, but it shows all of the steps
required to integrate ClojureScript into our Clojure server. From here on out,
adding more ClojureScript is just a matter of adding or augmenting files in the
``src/cljs`` directories. That is a huge topic, and we won't go further into
detail about it here in Project Volta. The point is, we've shown how to set up
all of the scaffolding to get your ClojureScript files compiled and placed onto
host pages. The rest is up to you. 


Further Changes
==================

A few other things we might think about implementing. Some of these are easier
to quickly demonstrate than others, and none of them are as foundational as what
we've shown above. But still, they would be nice to include as part of
``Volta``. 

#. Show use of Om
#. Show how to use ``react.js`` from a ``/lib`` directory.
#. Show how to use ``:preamble`` to just inline that baby on in there.
#. Show how to use externs files.
#. Show how to separate ClojureScript and ``lein-cljsbuild`` out of the main
   profile and into a ``:dev`` profile so we can shave tens of megabytes off of
   the Heroku distribution slug size.



Appendix I: Git
==================

It's worth talking about what gets included or excluded from the git repository.
Obviously all of the ``*.cljs`` files need to be included. And since we don't
plan to re-compile our JavaScript files on Heroku (i.e. we're not going to try
to run ``heroku run lein cljsbuild auto`` as a remote command), we **do** need
to include the compiled JavaScript files. 

That's noteworthy because the normal rule of thumb would be that we *don't* want
to include compiled files in any repository! The JavaScript files compiled from
ClojureScript are a special case, because we overload the concept of a git
repository when we run on Heroku; it's a true *source code* repository on github,
but it's a *runtime environment* on Heroku. So all of those compiled JavaScript
files and map files should be included. Yes, this makes our Heroku slug size
perilously large: it's definitely worth looking into how to be more selective
about what goes up to Heroku. But that's an advanced topic for a later time.



