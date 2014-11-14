.. _clojurescript:

*********************
ClojureScript
*********************

The final thing we will do is show how to integrate ClojureScript into a
project. Thanks to ``leiningen``, this is very easy to do. 


Dependencies & Plugins
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






