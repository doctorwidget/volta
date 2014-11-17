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
``src/cljs`` directories. 


Shrinking The Slug
=======================

A local repository as stored on ``github`` just includes your source files and
asset files; it doesn't include all of the various libraries. That's kind of the
whole point! But during deployment, Heroku builds what they call a *compiled
slug*. That slug *does* include copies of every single referenced library, so
that your app can run in splendid isolation from the rest of the system. That
means as you use more libraries, your Heroku *compiled slug* gets larger, even
though your github repository does not change at all (beyond the few bytes to
name a new dependency inside ``project.clj``). 

The total repository size of ``volta`` as of this writing is 46 megabytes
locally, which includes all of the intermediate revision stages. The final
compiled slug on Heroku is over 92 megabytes! For a long time, Heroku limited
your compiled slug size to 100 megabytes, so when I first saw the 92, I was more
than a little bit worried! Sometime recently, Heroku upped their limit to 300
megabytes, so we're not actually near the limit, but I would still like to shave
things down as much as possible.

One way to do that is to move the requirement for ``ClojureScript`` and
``lein-cljsbuild`` from the top level of ``project.clj`` into the ``:dev``
profile. That way we will still have access to them locally (where we need
them), but Heroku won't include them in the compiled slug. Since the
ClojureScript->JavaScript compilation stage is strictly a local affair, that is
a perfectly acceptable tradeoff. 

So let's remove ``[org.clojure/clojurescript "0.0-2371"]`` from the
``:dependencies`` vector, and ``[lein-cljsbuild "1.0.3"]`` from the ``:plugins``
vector, and instead declare both of those inside the ``:profiles`` area:

.. code-block:: clojure

     :profiles {:uberjar {:aot :all}
                :default [:base :system :user :provided :dev :dev*]
                :dev {:env {:demo-foo "FOO from project.clj"
                            :demo-bar "BAR from project.clj"}
                      :dependencies [[org.clojure/clojurescript "0.0-2371"]]
                      :plugins [[lein-cljsbuild "1.0.3"]]}
                :production {:env {:production true}}}
   
Now those libraries will still be available for development, but Heroku won't
uselessly stuff the entire Google Closure Compiler into our compiled slug. After
pushing that change to Heroku, we shave off 11 megabytes from our compiled slug.
It's still big (82 megabytes), but we would still have breathing room even under
the old limit of 100 megabytes, let alone the new limit of 300.


Om In Action
===================

Let's integrate the use of `Om`_ into the ``volta`` project. Not only is this
the most clojuriffic way to do client-side UIs, it means we will need to show
how to include the pure-JavaScript `React`_ library, which ``Om`` wraps. That
means this will also serve as a good example of using a third-party JavaScript
library as part of any ``lein``-based ClojureScript project.

.. _`React`: http://facebook.github.io/react/


add React to the project
---------------------------------------------

First we move copies of ``react.js`` and ``react.min.js`` to our
``resources/public/js`` directory. This makes them valid targets for links on
our HTML pages; our server can serve them like any other static file. Since they
need to be served at runtime, they should be included (not ignored!) in the git
repository, so that they are included when we push to Heroku.

We will *also* put a copy inside the ``src/lib`` directory, because it's
convenient to have a copy living there in addition to the one inside
``resources/public``. Some compiler tasks don't look into ``resources/public``
by default. Since we explicitly specified ``src`` as one of our source
directories, ``src/lib`` *will* be checked when it's time to deal with those
compiler tasks (e.g. the ``:preamble`` key and any necessary *externs*
files).

make host page script block
-------------------------------

Next, we add the script block to the ClojureScript demo page in
``volta.handlers``. Our ``(base-page)`` function takes arbitrary extra JS files
as a vector under the ``:extra-js`` key, so this is just a matter of modifying
the ``volta.handlers/cljs-demo-page`` function so that it includes the React
file. 

.. code-block:: clojure

    ; inside volta.handlers

    (defn cljs-demo-page [request]
       (base-page {:title "ClojureScript Demo"
                   :content (cljs-demo-body request)
                   :extra-js ["/js/react.min.js" 
                              "/js/volta.js"]
                   :js-calls [["volta.cljs_demo" "init"]]}))    

Order matters: ``React`` must already be loaded into the JavaScript engine
before our ``volta`` source file is. Fortunately, the script blocks will be
included on the page in the order supplied, so this is just a matter of putting
``react.js`` before ``volta.js``, as shown above. 


``:preamble``
.................

Alternatively, ``lein-cljsbuild`` accepts a ``:preamble`` key as part of the
map defining one build target. The value for that key should be a vector of file
names, which must be available somewhere on :source-paths, not just inside
``resources/public``. 

When you do that, the targetted files are all included in the build target,
before any of your minified, compiled code. The benefit is that you have one
less link to create on the page. The drawback is that it makes every compilation
take a little big longer -- sometimes a lot longer. 

I don't mind having an extra link on the page (since we've made that easy to do
in our ``base-page`` function), and I tend to want my compile times to be as
fast as possible. So I prefer not to use ``:preamble``, but you should remember
that it exists.
   

the externs file
--------------------------

When you use ``:optimizations :advanced`` (which you will want to do for your
production build), the Google Closure Compiler will munge the hell out of all of
your carefully-chosen class, variable and function names, compacting them into
an alphabet soup of illegibility. As long as your *only* source files are
ClojureScript namespaces (your own custom ones but also external ClojureScript
libraries), the compiler will do a **perfect** job of maintaining all of the
cross-links so that everything still works. 

But when your code depends on *any* external, non-ClojureScript libraries which
use the global namespace (which is, sadly, the default state of affairs in pure
JavaScript libraries and toolkits), all references to those external libraries
will be broken by this rampant renaming. This issue will affect us, because the
``Om`` library makes copious references to the ``React`` library. ``Om`` is in
ClojureScript, so the compiler will handle its relationship to our code
perfectly right out of the box: but ``React`` is a plain old vanilla JavaScript
library.

Since this has always been a known issue, the GCC has always had a solution to
the problem: an *externs file*. An externs file is just a plain JavaScript file
that *declares* global namespace objects and function names. When you tell the
GCC that file X is an externs file, it knows to treat all those declarations as
inviolable. You don't have to provide any *function bodies*; your job is just to
declare that those names are special and should not be munged. Plus, you don't
have to do that for *every* function or global variable; only for the ones that
are referenced by your own code. That means that externs files can be much much
smaller than their originals.

If you were using the GCC by itself, you'd have to know the command-line
arguments to specify your externs files. But since we're using
``lein-cljsbuild``, we just supply an ``:externs`` key with a vector of file
names. Each file in the vector will be treated as an externs file. 

In this case, we need to supply an externs file for ``React.js``. Where do we
get it? Some web sites (including Google) publish repositories of externs files
for the most popular libraries, and in this case, we do have access to a
``react-externs.js`` file, which we place inside the ``src/lib`` directory.
Then, once we add the ``:externs`` key, the ``:cljsbuild`` portion of our
``project.clj`` settings now looks like this:

.. code-block:: clojure

    :cljsbuild {:builds 
                [{:id "dev"
                  :source-paths ["src/cljs"]
                  :compiler {:pretty-print true
                             :output-to "resources/public/js/volta.js"
                             :source-map "resources/public/js/volta.js.map"
                             :output-dir "resources/public/js/out-dev"
                             ;:preamble ["lib/react.js"]
                             :externs ["lib/react-externs.js"]
                             :optimizations :whitespace}}
                 {:id "prod"
                  :source-paths ["src/cljs"]
                  :compiler {:output-to "resources/public/js/volta.min.js"
                             :source-map "resources/public/js/volta.min.js.map"
                             :output-dir "resources/public/js/out"
                             ;:preamble ["lib/react.min.js"]
                             :externs ["lib/react-externs.js"]
                             :optimizations :advanced}}]})  

So here we're showing the new ``:externs`` key, and also the (commented-out)
``:preamble`` key, just for reference. 


:externs tricks
......................

Finally, it's worth noting that you can just supply the *complete library file
itself as the externs file*. So we could specify ``lib/react.js`` as the externs
file, without needing to seek out and download an official externs file! This is
a stunningly useful option, and I can't help but think that it would have been
available as the default option if anyone had thought of it earlier.

Now, *tanstaffl* must of course apply: I presume that it must add some number of
milliseconds (or even seconds for a huge library) to the compilation process if
you use the main library instead of a special externs file, because those
special externs files are always much much smaller than the originals. But for
now, I've left the ``:externs`` value pointing to the special externs file. Just
remember that you always have this option if need be.


using Om
-------------

Finally, let's do a tiny but less-trivial example of some ClojureScript code,
this time using ``Om``.  The intent here is *not* to do a comprehensive
introduction to ``Om``: it's just to make sure that everything has been wired up
correctly. See the main site for ``Om`` or my own ``clui-om`` project for a far
more comprehensive discussion of building UIs using ``Om``. 


install ``Om``
....................................

``Om`` needs to be available to ``lein``. It's safe to add it as a one of the
``:dependencies`` associated with the ``:profile`` that includes ClojureScript
and ``lein-cljsbuild``. You could also add it to the main ``:dependencies``
vector, but then it will get included in the Heroku compiled slug, where it will
do nothing but sit there taking up space.

.. code-block:: clojure

   ;; inside project.clj, as in [:profiles :dev]
   :dependencies  [[org.clojure/clojurescript "0.0-2371"]
                   [om "0.7.3"]]

All ClojureScript-specific :dependencies can go here rather than in the main
``:dependecnies`` vector. 


``:require`` Om
.........................

Next, the ``volta.cljs-demo`` namespace now needs to mention ``Om`` by name:

.. code-block:: clojure

    (ns volta.cljs-demo
      (:require [goog.dom :as gdom]
                [om.core :as om :include-macros true]
                [om.dom :as odom :include-macros true]))

Note that we have to explicitly ask for the macros... these are not optional!


a little state
.................

``Om`` applications are always built around a central ``(atom)`` of state,
usually a map but potentially a vector. From there you can created a nested
structure of arbitrary complexity to suit your needs. The important thing is
that because it's a Clojure atom, it is immutable by default, and so it is
therefore both safe and sane to use.

Let's define some different internationalized greetings in our one centralized
state atom:

.. code-block:: clojure

   ; inside src/cljs/cljs_demo.cljs

   (def app-state (atom {:greetings 
                          [{:language "English" :greeting "Hello World!"}
                           {:language "French" :greeting "Bonjour Monde!"}
                           {:language "Spanish" :greeting "Hola Mundo!"}]
                         :extra "spam"
                         :other 42}))

Now we have some available state to work with. The name ``app-state`` is pretty
standard, and should make it clear that this is the one *Single Source of Truth*
for the client-side state. 


components
..............

An Om **component** is a JavaScript function that knows how to take a little
piece of *state* as an argument, from which it returns a reified React instance
that knows how to paint one tiny part of the screen. 

The tiny little piece of state is wrapped in an Om **cursor**, which is like a
porthole onto an atom which knows both what the local value is *and* where the
porthole sits with regards to the entire ``app-state`` atom. Basically, Om
cursors are intended to let your subcomponents deal with subsets of the overall
state so you don't always have to drill down from the top of ``app-state`` every
time.

Om also helps you with the process of returning a reified React instance. When
you use ``Om``, you are free to simply create an ordinary Clojure ``(reify)``
instance that satisfies at least one of the React lifecycle method names. React
has a whole slew of these, but you can often get away with just implementing
``render``, which is the one that paints a widget based on the local cursor.

This component will take a *cursor* representing one language (i.e. ``{:language
"Spanish" :greeting "Hola Mundo!"}``). It will then paint a *very simple*
``<li>`` element based on that state.

.. code-block:: clojure

    (defn greeting [cursor owner opts]
      (reify
        om/IRender
        (render [_]
          (odom/li #js {:className "oneGreeting"}
                   (odom/strong #js {} (str (:language cursor) ": "))
                   (odom/em #js {} (:greeting cursor)))))) 

This super-simple component just prints one ``<li>`` element, with the language
name wrapped in a ``<strong>`` element, and the greeting itself wrapped in an
``<em>`` element. Every HTML element is at your disposal as a symbol inside the
``om.dom`` namespace, and you next calls to ``odom/foo`` just like you would if
you were composing HTML output in (for example) ``Hiccup``. Each ``om.dom``
function also takes an *optional* JavaScript literal of attributes; you can see
that we've provided a ``:className`` attribute to the overall ``<li>`` element. 

As always, you are free to name your arguments whatever you like, but the above
*cursor, owner, opts* is standard and a good habit to get into. When ``Om``
invokes your function, it will send you the following items (regardless of what
you've named your arguments):

#. The cursor with the local sub-state.
#. The reified instance -- a React JavaScript object
#. A map of options, which might very well be ``nil``.


Here's another component that takes the whole ``app-state`` as its cursor, and
then instantiates one of our ``greeting`` components for each item in the
``:greetings`` vector of the overall state.

.. code-block:: clojure

    (defn all-greetings [cursor owner opts]
      (reify
        om/IRender
        (render [_]
          (apply odom/ul #js {:className "allGreetings"}
                 (om/build-all greeting (:greetings cursor))))))

There are a couple of commentworthy points here. First, note the unfortunate
need to wrap the call to ``odom/ul`` in an ``apply``: it would be nicer to be
able to supply any sequence, but you must handle the unwrapping explicitly.
Second, note the use of the ``om/build-all`` macro: this hands off the process
to ``Om``, telling it to use our ``greeting`` function once per element in the
``:greetings`` vector of the cursor. 

Next, we need to define a top-level widget and give it a target somewhere on
the page. ``React`` needs a single target HTML node, which it will take over and
micromanage based on our code. So we add a simple target element to our
``resources/public/html/cljs-demo.tpl.html`` file:

.. code-block:: html

    <!-- inside resources/public/html/cljs-demo.tpl.html -->

    <div id="omTarget"></div>

Obviously you can name that node whatever you like. 

Next, we define a top-level widget function:

.. code-block:: clojure

    (defn top-level-widget [app owner opts]
      (reify
        om/IRender
        (render [_]
          (odom/div #js {:className "outerBox"}
                    (om/build all-greetings app)))))

This is a very minimalistic top level widget; it doesn't really do anything
other than define one outermost ``<div>`` and then instantiate the
``all-greetings`` instance. In a less-trivial app it's a good idea to have an
outermost widget like this one that kicks off the whole nested pyramid of
sub-widgets.


launch the app
.................

And finally, we add a one-liner to the ``(init)`` function, telling ``Om`` to
create the ``top-level-widget`` instance, using our newly-created ``<div>`` as
the target. 

.. code-block:: clojure

    ; get a reference to the ``omTarget`` div
    (def APP-ROOT (.getElementById js/document "omTarget"))

    (defn ^:export init
       "Initialize the main cljs-demo page"
       []
       (.log js/console "(init) called on cljs-demo page...")
       (gdom/setTextContent $output (timed-string))
       (om/root top-level-widget app-state {:target APP-ROOT})))

And that's it -- we don't need to change anything else. When the ``(init)``
function is called (and we already established that it is up above), it will now
trigger ``Om`` to create an instance of our ``top-level-widget`` at the
"omTarget" ``<div>`` element. This is Om in action. 


Summary
=============

This has just shown the process of *wiring up* ClojureScript and ``Om``. It has
barely scratched the surface of actually doing anyting *useful* with either
technology. Still, sometimes the thought of wiring things up is daunting enough
to make you put off trying something for another day. Hopefully these docs will
make you less prone to doing that!


Appendix I: further refinements
==================================

There are a few more ClojureScript-related refinements we could make. We won't
implement them all here, since they aren't really part of the core of getting
everything up and running. Think of them as extra credit exercises. They would
all be useful if you were putting a real app into production.

First, we could take advantage of the ``:production`` environmental variable
(which is ``true`` on Heroku) to refine the behavior of our app. Normally, we
have tried to avoid having special code for production versus development, but
there will inevitably be a few things that really *should* differ between the
two environments. In the end, a small number of boolean checks on the
``production`` variable could be useful for:

#. turning off all of our wrap-spy middlewares when running on Heroku
#. having HTML pages link to the minified ``volta.min.js`` when a page is served
   from Heroku, while still linking to the less-minified ``volta.js`` locally.

In addition, Heroku allows you to create a special file named `.slugignore`_,
which has a similar syntax to the standard ``.gitignore`` file. This file is
only for use on Heroku; it lets you exclude specific files in your final
compiled slug. So, for example, after we made sure that Heroku-side HTML pages
always link only to ``volta.min.js``, we could exclude ``volta.js`` (and its
associated map file and loose source directories) from the compiled slug.

.. _`.slugignore`: https://devcenter.heroku.com/articles/slug-compiler



Appendix II: Git
======================

It's worth talking about what gets included or excluded from the git repository.
Obviously all of the ``*.cljs`` files need to be included. And since we don't
plan to re-compile our JavaScript files on Heroku (i.e. we're not going to try
to run ``heroku run lein cljsbuild auto`` as a remote command), we **do** need
to include the compiled JavaScript files. 

That's noteworthy because the normal rule of thumb would be that we *don't* want
to include compiled files in any repository! The JavaScript files compiled from
ClojureScript are a special case, because when we run on Heroku we are
*overloading* the concept of a git repository. Our repository is a true *source
code* repository on github, but it's a *runtime environment* on Heroku. So all
of those compiled JavaScript files and map files really **must** be included in
the repository.







