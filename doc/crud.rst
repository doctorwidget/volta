.. _crud:

***************
CRUD
***************

A demonstration page intended for showing basic CRUD operations. We'll let users
*create*, *read*, *update*, and *delete* from a list of notes. This will only
work for logged-in users, and each user will have their own list of notes, which
means this example will integrate pretty much everything else we've seen up to
now. 

Obviously this sort of task cries out for an AJAX API approach. But you have to
start somewhere, so we're going to start with a classic round-trip form-based
approach. Perhaps the final addition to the Volta project will be a
ClojureScript-based single-page version of this section.


Routes
=========

We will need a total of eight new routes. 

.. code-block:: clojure

    
 

#. A GET route for the *list* view of all owned notes. 
#. A GET route for *reading* a single note.
#. A GET route for the *create* page
#. A POST route for the *create* page
#. A GET route for the *update* page
#. A POST route for the *update* page.
#. A GET route for the *delete* page.
#. A POST route for the *delete* page.

Here is the first pass at defining these routes:


Note that we wrap them all inside ``friend/authorize``. 

Also note that this is the first time we're picking out parameters from the URI. 


Handlers
==============

And along with those eight routes we will need eight handlers. The *update* and *create*
routes will all share the pattern we saw in an earlier tutorial, where POSTing has a handler
that updates the server, followed by a redirect to the GET route of the same
name. However, the *delete* route must redirect to the list view after a POST.
Finally, the two different *read* routes (single and list) only exist in GET form.

For the template fragments, the *read-list* and *delete* routes need their own
dedicated sources. But the *read*, *create*, and *update* routes can all share
one source fragment, which can then be manipulated inside their own
``(defsnippet)``. 

