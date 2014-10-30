.. _enlive:

**************************
Enlive
**************************

Until now we've been manually bashing strings together for our very simple
response examples. We've gone as far as I'm willing to tolerate with that
approach: it's ugly, brittle and hard to maintain. In this document we'll
quickly introduce the use of `the Enlive library`_ as an alternative strategy.

.. _`the Enlive library`: https://github.com/cgrand/enlive

*Enlive* is a templating solution that lets you use HTML files and/or fragments
as the basis for your templating, without polluting the HTML with special
templating codes. This lets you keep your HTML files well-formed and clean,
which has a bunch of advantages. For one thing, you can preview your HTML files
directly in any browser. For another, it's easier for web designers to
understand what's happening in a clean HTML file, which can be a big deal when
you're working in a team. Perhaps most importantly, 100% separation of concerns
between controller and view is just plain good design.

It's more common to see `Hiccup`_ used as the templating strategy in tutorials,
but I really dislike mingling my markup code with my programming code. It's fine
for very short examples, or in a client-side UI scenario like `Om`_, where the
view and controller really are tightly and inextricably linked. But the vast
majority of the time, it's far better to keep those two concerns completely
separate.

.. _`Hiccup`: https://github.com/weavejester/hiccup

.. _`Om`: https://github.com/swannodette/om


Source Files
================

Plain old HTML files are the sources for all of the Enlive response-building
functions. You must always specify a sub-node within the source file as the main
target for the function, which means you are free to use either complete HTML
files or fragments as you prefer.

Assuming you're using the ``compojure.route/resources`` helper (and why wouldn't
you be?), your HTML source files should be located inside the
``{PROJECT}/resources/public/html/`` directory. Inside the Enlive functions, all
paths to source files omit the ``resources`` directory name, so the path to a
source file at ``{PROJECT}/resources/public/html/foo.html`` would appear in an
Enlive function as *"public/html/foo.html"*.

While we're here, this is as good a time as any to mention that this is also
where you store all of your other static resources, in the appropriate
sub-directories. So (for example) you could store your main CSS file at
``{PROJECT}/resources/public/css/main.css``. However, on the HTML page, you
reference it with an even shorter relative URL: *"/css/main.css"*.  

So for scripts and CSS files and images linked on an output page, both
``resources/`` and ``public/`` are omitted from the path, but for Enlive macros,
only ``resources/`` is omitted. Why ask why? It is what it is.




Snippets and Templates
==========================

The two main macros that you'll use to build up responses are ``(defsnippet)``
and ``(deftemplate)``. They both have very similar signatures, but different
outputs. The output from ``(defsnippet)`` is a *sequence of nodes*, where each
node is a Clojure data structure that can easily be converted to an HTML string
if need be. In contrast, the output from ``(deftemplate)`` is a *sequence of
strings*, suitable for using as the ``:body`` in any Ring response.

The upshot of this is that you'll often use one or more calls to
``(defsnippet)`` to assemble bits and pieces of a response. Then when all the
snippets are in order, you will assemble them as one final sequence of strings
via one (1) call to ``(deftemplate)``. So snippets are for intermediate work,
and templates are for final output.


Arguments
--------------

Both macros always start with the macro name, followed by a symbol binding name
of your choice, followed by the path to the source document. Next,
``(defsnippet)`` takes a *selector* vector, telling Enlive which sub-node of the
source document to use. ``(deftemplate)`` omits this item completely. Finally,
both macros take a standard arguments vector, and then a body. In both cases,
the body is composed of a sequence of transformation calls, modifying the source
HTML as you see fit. 

So the signature of ``(defsnippet)`` is:

.. code-block:: clojure

    (defsnippet my-snippet           ; symbol binding
           "public/html/foo.html"    ; source document
           [:div#contents]           ; sub-node selector
           [x y z]                   ; arguments
           ; transformation dyads
    )

The *transformation dyads* are optional, but none of the other arguments are.
You'll get an error if you omit the sub-node selector, and even if the snippet
requires no arguments, you must provide an empty vector there! But if you have
no transformations to apply, you can end the snippet definition after that. 

Meanwhile, the signature of ``(deftemplate)`` is:
   
.. code-block:: clojure

    (deftemplate my-template           ; symbol binding
           "public/html/foo.html"      ; source document
           []                          ; arguments vector required even when empty!
           ; transformation dyads
   )

Note the lack of any sub-node selector; you always get the whole document when
you use ``(deftemplate)``. 


Selectors
===============

We referred to *selectors* before defining them: what are they? *Selectors* are
how Enlive selects specific nodes in a blob of HTML. The good news is that they
work as a *very* thin layer over standard CSS selector syntax. You just add a 
Clojure keyword colon to the front of a standard CSS selector, and *voila*, you
have an Enlive selector. Well, technically you should also wrap it in a vector,
and we'll see why later on:

.. code-block:: clojure

     [:div#main]   ; selector that selects the one <div> with id='main'

     [:head]       ; selects the whole <head> section

     [:body]       ; selects the whole <body> section

     [:p]          ; selects the *sequence* of all <p> nodes

     [:div.spam :p]  ; all <p> nodes that are children of <div class='spam'>

     ; use Clojure sets to define multiple valid matches
     
     #{[:ul.outline :> :li] [:ol.outline :> li]}  
     
     ;That selects like this CSS: ul.outline > li, ol.outline > li


See the Enlive documentation for a comprehensive review of selector syntax. The
important thing to remember is that an Enlive selector is always going to be a
very minor twist on the equivalent pure CSS selector, but decorated as Clojure
keywords and wrapped in a vector.



Transformations
===================

Once you've selected a target node, you will want to run some kind of
*transformation* on it. A transformation is any function that changes a node or
its contents in some way. Assuming you'd aliased ``net.cgrand.enlive-html`` to
``h``, here are some sample transformations. Note that transformations are
always used in *dyad* with a selector, so imagine that the target node is
inserted as the first argument, as is often the case with Clojure macros.

.. code-block:: clojure

   (h/content "foobar")  ; set contents of the (implied) target to "foobar"

   (h/wrap :div {:class "foo"}  ; wrap the (implied) target node in a div
                                ; with class='foo', i.e. <div class='foo'>

   (h/add-class "alert")       ; adds 'alert' as one of the classes

   (h/set-attr "blub" false)         ; sets 'blub=false' as an attribute

   (h/do-> transform1 transform2)      ; applies multiple transforms in a row
                                     ; to the same target node. DRY!

Again, you should review the official docs and source for a complete list of the
available transformation functions. Enlive includes a very comprehensive list of
pre-made transformation functions, but you can always write your own in the
unlikely event that there is no appropriate pre-made one.

   

Dyads
=============

We've mentioned that the body of ``(defsnippet)`` and ``(deftemplate)`` must be
*transformation dyads*. That means they always come in pairs, like a map
definition:

.. code-block:: clojure

    [:div.spam] (h/add-class "beans")    ; adds "class='beans'" to div.spam

So in practice, a complete ``(defsnippet)`` might look like this:

.. code-block:: clojure

    (defsnippet my-snippet           ; symbol binding
           "public/html/foo.html"    ; source document
           [:div#contents]           ; sub-node selector
           []                        ; arguments
           [:h1]  (h/content "Hello World!")
           [:div.spam]   (h/do-> 
                           (h/add-class "beans")  
                           (h/content "I'm a lumberjack"))
           [:div.footer] (h/content "Copyright 2014 Fitzbits Inc"))


Putting It All Together
============================

Now that we've briefly touched on all of the various moving parts of Enlive,
let's see an example where we put everything together. We'll replace the orginal
``volta-home`` handler with one based on Enlive. 

We'll start by adding three static static source files to the locations we
discussed up above:

#. ``public/css/main.css``   The main CSS file
#. ``public/html/base.html``  A base HTML file to be re-used over and over.
#. ``public/html/home.tpl.html``   An HTML fragment for the home page.


Next we'll need to add  ``[enlive "1.1.5"]`` to the ``project.clj`` dependencies
array. Then we'll require the main Enlive namespace under the alias ``h`` inside
our ``volta.handlers`` namespace.

.. code-block:: clojure

    (ns volta.handlers
        (:require [ring.util.response :as rr]
                  [net.cgrand.enlive-html :as h]))


Before we replace the original ``(volta-home)`` handler, let's define some
helper functions that we can use to compose it, and then re-use again later for
other handlers. We will often want to add single ``<link rel='stylesheet'>``
nodes, and single ``<script>`` nodes, so we'll make helper functions to do that.
Both of these return Clojure data structures, not pure HTML; we can plug their
results into transformation dyads and they will end up being converted to pure
HTML when the time comes. 

.. code-block:: clojure

    ;; helper function that yields one single stylesheet element
    (defn stylesheet [href]
       (first (h/html [:link {:href href :rel "stylesheet" :type "text/css"}])))

    ;; helper function that gives one script element
    (defn script [src]
       (first (h/html [:script {:src src :type "text/javascript"}])))    


Next, we'll define the snippet that gives us the main body for the home page.


.. code-block:: clojure

    (h/defsnippet home-body "public/html/home.tpl.html" [:div#main] [])

That gives us the complete contents of ``home.tpl.html``, because that file is
an HTML fragment that starts with ``<div id='main'>``. Note that snippets are
not *required* to come from HTML fragmentary files like this; we could just as
easily pulled out ``<div id='main'>`` from inside a complete, well-formed HTML
document if we wanted to.

Also note that we are *not* doing any transformations in this snippet, because
there are no *transformation dyads*. We *could* have included any number of
transformations here if we wanted to, but for now, we're just demonstrating the
very simple case of assembling a page from mostly-static components.

Finally, we'll create a re-usable template function. 

.. code-block:: clojure

   (h/deftemplate base-page
     "public/html/base.html"
     [{:keys [extra-css extra-js title] :as context}]
     [:title] (h/content title)
     [:head] (h/append (map stylesheet extra-css))
     [:#contents] (h/content (:content context))
     [:body] (h/append (map script extra-js)))

This function takes a context map and pulls out some keys explicitly 
(``extra-css``, ``extra-js`` and ``title``), while retaining a reference to the
complete context map as ``context``. This is just plain old Clojure
destructuring 101.

This function sets the window title based on the value of the ``:title`` key,
and plops the value of the ``:content`` key into the ``div#contents`` region of
the document. When we invoke this function, we will want to include the results
from a call to a ``(defsnippet)`` function as the value for that key.

The context map can *optionally* include ``:extra-css`` and ``:extra-js`` keys.
If those keys exist, their values must be vectors of file paths, and those files
will be inserted as well-formed CSS or JS elements. If those keys do not exist,
the function just gracefully skips those transformations.

The final step is to rewrite the ``volta-home`` function to use these Enlive
macros rather than just blobbing out some strings. We do that by invoking our new
``(base-page)`` function with the results from our ``(home-body)`` function
under the ``:content`` key:

.. code-block:: clojure

   (defn volta-home [request]
         (base-page {:title "Project Volta"
                     :content (home-body)
                     :extra-css ["css/volta_home.css"]
                     :extra-js ["js/volta_home.js"]}))

And now the we should be able to run the server as usual.

Now as we move forward, adding new pages will just be a matter of adding new
HTML fragments, along with a new ``(defsnippet)`` macro, and then invoking that
macro with the desired context dictionary. 





