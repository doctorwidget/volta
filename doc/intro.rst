Introduction to volta
############################

This project is intended to act as my own personal seed for Clojure projects.

Clojure has a wide array of different libraries available to let you roll your
own web application stack. In addition, it has pseudo-frameworks (such as
`Luminous`_) that make it more convenient to cobble together your own collection
of packages. But there is no equivalent to `Django`_: a unified, full-service stack
where (crucially!) all of the pieces have been *tested together*, and there is a
dedicate team watching out for *security issues*. Those two points are pretty
important to me, and I wish that Clojure offered a full-stack framework.

.. _`Luminous`: http://www.luminusweb.net/

.. _`Django`: https://www.djangoproject.com/

Until then, in the absence of a true framework, the next best solution I can
think of is to create a seed project like this one. Whereas Luminous offers to
configure you a new project using many different libraries for many different
scenarios, *Project Volta* is going to be highly opinionated, with all of my own
preferred batteries in place. 

Doing it this way should serve two purposes. First, I may be able to just
quickly duplicate this seed for other projects. But second (and less obviously),
I suspect this is the only way I can truly get comfortable with the whole
roll-your-own ecosystem that Clojure offers. To the degree that Luminous shields
you from dealing with the minutiae of managing those libraries, it's actually
hindering the learning process, rather than helping it.

Again, in the long run, I'd love to see a batteries-included, well-maintained,
Clojure web stack that's both *secure* and *complete*. I'd rather not re-invent
the wheel where I don't have to, and the majority of the code for every new web
application is simply not going to fall into unique snowflake territory. But
until then, this project will serve as my own customized set of batteries.


TODO:
========

*DONE* -- create project in Lein
*DONE* -- create initial documentation

*DONE* -- (pip) add Sphinx documentation
*DONE* -- add lein-sphinx plugin
*DONE* -- build first round of docs
*DONE* -- eyeball everything to make sure it looks good

*DONE* -- get into a Clojure REPL and make sure everything looks good there
*DONE* -- fix the broken unit test supplied by Lein

-- create the git repository

-- (homebrew) brew doctor / brew update / brew install mongodb




