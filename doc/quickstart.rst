.. _quickstart:

********************************
QuickStart
*********************************

Tools
=========

There are three different package managers that we're going to use in this
project. Ideally, we'd only have one that could do it all... but having access
to three is far better than needing one and not having it at all! The three
package managers we'll be using are `leiningen`_ (usually just referred to as
*lein*) `pip`_, and `homebrew`_.

.. _`leiningen`: http://leiningen.org/

.. _`pip`: https://pip.pypa.io/en/latest/installing.html

.. _`homebrew`: http://brew.sh/


All three of those programs are easily installed on any OSX machine. You
might get into a house-that-jack-built scenario if you're missing the underlying
language runtimes that each of them depends on (Java for *lein*, Python for
*pip*, and Ruby for *homebrew*), but that's well beyond the scope of this
documentation. See the provided URLs for complete instructions. 


Create A Clojure Project
==========================

This is done via *lein*:

.. code-block:: bash

    ~path/to/project $: lein new app volta
    
    Generating a project called volta based on the 'app' template.


This will give you the usual layout for a Clojure project: 

.. code-block:: bash

    ~/path/to/project $: cd volta
    
    volta $: ls

    LICENSE     doc/          resources   test
    README.md   project.clj   src


Eventually we will spend a lot of time in the ``project.clj`` file, and in the
``src`` directories, but first, let's get the documentation rolling. 


Sphinx and rST
==================

`Sphinx`_ is the finest tool available for documenting projects. Built using
python, it converts files from `restructured text`_ format into clean,
correctly-linked HTML files. 

.. _`Sphinx`: http://sphinx-doc.org/

.. _`restructured text`: http://sphinx-doc.org/rest.html

As mentioned above, you should have access to *pip*, which is a python-based
package manager. In addition to *pip*, I also use `virtualenvwrapper`_, which is
a tool for managing multiple different python virtual environments on one
machine in such a way that none of them can conflict. You should definitely use
*virtualenvwrapper* or something like it, but it's not technically *required*
(just a really good idea). I use one generic virtualenv called *spameggs* for
projects which aren't python-related but which need access to python tools like
Sphinx.

.. _`virtualenvwrapper`: http://virtualenvwrapper.readthedocs.org/en/latest/

.. code-block:: bash

      volta $: workon spameggs   # note: virtualenv fu going on

     (spameggs) volta $: pip list
     
     docutils (0.12)
     Jinja2 (2.7.2)
     MarkupSafe (0.23)
     pip (1.4.1)
     Pygments (1.6)
     setuptools (0.9.8)
     Sphinx (1.2.2)


Assuming that you already have *pip*, adding Sphinx is trivially easy:

.. code-block:: bash

      (spameggs) volta $: pip install Sphinx

      #... download output elided
      Successfully installed Sphinx Pygments docutils Jinja2 markupsafe
      Cleaning up...

      # oddly, there is no plain old 'Sphinx' command.
      (spameggs) volta $: sphinx-build --version
      Sphinx (sphinx-build) 1.2.2


Now you'll want to change to your ``doc/`` directory (at the top level of the
``volta`` project that we created earlier), and run *sphinx-quickstart*:

.. code-block:: bash

      (spameggs) volta $: cd docs

      (spameggs) volta/doc $: sphinx-quickstart

      # ... Sphinx questionnaire follows
      # ... just use all the defaults
      # ... sphinx makes files

You should now have all of the basic files you need to begin your documentation.
The top-level files for the project will be found at
``.../volta/doc/index.rst``, and built files will appear inside
``.../volta/doc/_build/``. I let the Sphinx-created ``index.rst`` serve only as
an index, and usually do a general introduction to the project inside
``intro.rst``, which is followed by this document, ``quickstart.rst``. 


Lein-Sphinx
==============

You can choose to issue the ``make html`` command  from the command line while in the ``doc/``
directory, but I prefer to use the `lein-sphinx`_ plugin, which lets you do
everything as a *lein* command while still at the project root level. 

.. _`lein-sphinx`: https://github.com/SnootyMonkey/lein-sphinx

Install and configure it like any other ``lein`` plugin:

.. code-block:: clojure
    
    ;; most of project.clj elided
    
    :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            [lein-sphinx "1.0.0"]]
            
    ;; ... more stuff skipped

    :sphinx {
        :builder :html
        :source "doc" 
        :output "doc/_build"
        :rebuild true
        :nitpicky true
        :setting-values {
            :html_theme "agogo" 
           ; agogo, haiku, traditional, scrolls, nature, pyramid
        }
    }
    
There are sensible defaults for everything, but I like to explicitly specify my
``:source`` and ``:output`` directories, at a minimum. The ``:settings-values``
key holds a map of values whose ``conf.py`` equivalents you want to *override*.
See the official ``lein-sphinx`` github page for a comprehensive list of all of
the various options.

Once everything is configured, and your virtualenv is activated, you can build
the docs via a lein command:

.. code-block:: bash

    (spameggs) volta $: lein sphinx
    #... output elided
    build succeeded


Clojure Sanity Check
=======================

Confirm that you have access to a Clojure REPL via ``lein repl``.

.. code-block:: bash

    (spameggs) volta $: lein repl

    nREPL server started on port 51685 on host 127.0.0.1 - nrepl://127.0.0.1:51685
    REPL-y 0.3.1
    Clojure 1.6.0
       #... output elided

   volta.core=> 

   volta.core=> (def x 3)
   #'volta.core/x

   volta.core=> x
   3

   volta.core=>(quit)
   By for now!


Also, be sure to check out the free (failing!) test that *lein* provides for
you.

.. code-block:: bash

   (spameggs) volta $: lein test

   #... output elided
   Ran 1 tests containing 1 assertions.
   1 failures, 0 errors.
   Tests failed

Fixing and re-running the test is left as an exercise for the reader. 
