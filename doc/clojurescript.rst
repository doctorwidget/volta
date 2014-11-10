.. _clojurescript:

*********************
ClojureScript
*********************

The final thing we will do is show how to integrate ClojureScript into a
project. Thanks to ``leiningen``, this is very easy to do. The most difficult
thing will be to refactor the main ``src`` directory to have separate
sub-directories for ``clj`` and ``cljs``. 

Once that's done, a somewhat ambitious (but *very* useful!) example would be to
redo the ``notes`` example from before as a single-page ClojureScript/AJAX
application.


Conclusion
=================

Once this feature is complete, I think we will really have the minimum set of
batteries up and running. Obviously you can always add more, but this current
set of batteries does (I think) represent a true minimal level of real
functionality. We have the all-important persistent database level, real
sessions stored in our real database, real users authenticated with real
passwords also stored in our real database, and working demonstrations of basic
CRUD operations with varying availability depending on the authorization level
of the user. All of it running on Heroku where anyone can see it in action, and
even showing how to do basic integration of ClojureScript into the dev
environment. That's *far* more than any single tutorial that I have found ever
covers. Usually they go through Ring, Compojure and Hiccup, and maybe Enlive if
you're lucky. 

Time to declare victory and move on!





