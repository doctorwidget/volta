.. _admin:

***************
Admin
***************


Intro
==========
Finally, to wrap up the core of the Volta project, we'll include a rudimentary
admin interface. This will show that Friend can handle the core *three* levels
of authentication: 

#. Anonymous (default)
#. Registered 
#. Registered **and** ``:admin``.

The admin interface will only be visible to the latter. At a minimum it should
show some info about the database. Beyond that, it would be nice to add a
one-click way to clear old HTTP sessions (remember that we have to do this via a
daily cron script in Django, so this is not some kind of unique weakness for
Clojure). 

Finally, as a much more advanced feature, consider adding the ability to add and
delete registered users. To start with, all users (including the first
administrator) will have to be bootstrapped in via a REPL and the ``monger``
library. But after the first superuser, it would be nice to have an admin
interface for that sort of thing. 


Conclusion
=================

Finally, at that point, I think we will really have the minimum set of batteries
up and running. Obviously you can always add more, but this current set of
batteries does (I think) represent a true minimal level of real functionality.
We have the all-important persistent database level, real sessions stored in our
real database, real users authenticated with real passwords also stored in our
real database, and working demonstrations of basic CRUD operations with varying
availability depending on the authorization level of the user. That's *far*
more than any single tutorial that I have found ever covers. Usually they go
through Ring, Compojure and Hiccup, and maybe Enlive if you're lucky. y
