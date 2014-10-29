*******************
MongoDB
*******************

Rationale
============

SQL databases are the perfect tool when your data is highly relational and has
a well-defined structure. However, if your data model is not yet well defined,
(as is often the case early in development), and if your data is unlikely to
ever require complex joins, you may be better off with a *document-oriented*
database. 

`MongoDB`_ is a great example of a document-oriented NoSQL database. It's
designed from the ground up with web applications in mind, with sharding and
scaling built right into the core, and it has a great Clojure API in the form of
`Monger`_. You can easily add free (but limited to dev-sized unless you pay)
Mongo databases to your `Heroku`_ apps as well. As long as we're trying to come
up with a Clojure-centric web stack, Clojure and MongoDB are an obvious match.

.. _`MongoDB`: http://www.mongodb.org/

.. _`Monger`: http://clojuremongodb.info/

.. _`Heroku`: https://devcenter.heroku.com/


One of the purported strengths of Mongo is how well it should scale for very
large applications. But ironically, my decision to go with Mongo for the Volta
template has nothing to do with that; in fact, quite the opposite! Most of the
simple Clojure-based web applications that I'm likely to want to use this
template for will have very modest database needs (i.e., I will want to maintain
records of users and sessions, plus possibly one or two extra collections of
data for each user). But MongoDB remains a great fit even then, because data
schemas are at their most mutable early on in development. Frequently-changing
schemas shows SQL in its least flattering light, but it is a complete non-issue
in MongoDB.

But if you're doing something where you know in advance that your data is highly
relational and that it can be dealt with in terms of a finite number of clearly
defined object models, then you should probably just stick with Django and
Postgres. Really! The point is not that one type of database is always better
than the other: the point is to use the right tool for the right job.



Installation
=================

Obviously you'll want a local database running as a server locally. The best
way to do that is to use the Ruby-based ``homebrew`` tool mentioned up above.
You'll want to start with a couple of incantations to make sure everything is up
to date:

.. code-block:: bash

    volta $: brew doctor
    Your system is ready to brew.

    volta $: brew update
    Already up-to-date.y

    volta $: brew install mongodb
    #... output elided


Then you'll need to create the directory where MongoDB will store its data. By
default that's a directory directly off of the root: ``/data/db``. You will need
to create this manually, and you'll probably need to add permissions manually.
Whichever user account launches the ``mongod`` process is the user process that
will need read/write access to that directory. 

.. code-block:: bash

   volta $: sudo mkdir -p /data/db

   volta $: sudo chown scottfitz /data/db

Now my account owns that directory, so when I start the ``mongod`` process, it
will inherit my read-write access. 


Execution
=====================

Starting the mongodb server is done via the ``mongod`` command at the command line:

.. code-block:: bash

   volta $: mongod
   #... output elided
   2014-07-20T19:10:35.849-0700 [initandlisten] waiting for connections on port 27017
                

Recent versions of OSX throw a warning about *soft rlimits too low* when you run
``mongod`` right out of the box. The warnings are harmless for a dev
environment, but you can turn them off by launching mongod with explicit rlimit
values:

.. code-block:: bash

   volta $: ulimit -n 1024 && mongod
   #... output elided ... with no warning woot!



As usual, you can use ``CTRL-C`` to stop the server when you're done. Now you
can switch to a different shell or terminal and run the client, which is invoked
with plain old ``mongo``.

.. code-block:: bash

   # in another terminal
   
   volta $: mongo
   MongoDB shell version: 2.6.3
   connecting to: test
   Welcome to the MongoDB shell.
   For interactive help, type "help".
   For more comprehensive documentation, see http://docs.mongodb.org/

   > db             # tells us which db we are in right now
   test
   
   > show dbs       # show all available dbs
   admin  (empty)
   local  0.078GB
   
   > use foodb
   switched to db foodb

   > db
   foodb

   >db.mystuff.find()   # gets ALL items in the mystuff collection!
                      # mystuff is *created* simply by *referring* to it
                      # and (oops) we didn't save a reference to the result!

   >var stuff = db.mystuff.find()  #now we can call methods on the stuff object

   >stuff.objects.leftInBatch()
   0                              #doh! empty collection!

   >db.mystuff.insert({first: "Ann", last: "Nonymus"})
   WriteResult({"nInserted": 1})

   >stuff = db.mystuff.find()
  { "_id" : ObjectId("54498f6ac2badcb76930ec2d"), "first" : "Ann", "last" : "Nonymus" }



Note that we get the ``_id`` property for free, even though we never asked for
it or specified it. That's a Very Important Point: the ``_id`` field is the
equivalent of the PKID in SQL systems. Since it's an actual honest-to-god UUID,
it should end up being globally unique even across a multitude of different
databases.

Also note that you are allowed to skip the quotes in your commands, just like it
was actual JavaScript code (so it's ``{firstname: "Anne"}`` and not
``{"firstname": "Anne"}``, but the output has all of the extra quotation mark
noise associated with JSON.


High-Level Overview
===============================


Structure
---------------

To a first approximation, you can think of Mongo *collections* as being
equivalent to SQL *tables*. Just as one SQL server can manage multiple databases
which each have their own distinct set of tables, one Mongo server can manage
multiple databases which each have their own distinct set of collections.

And to a first approximation, you can think of Mongo *documents* as being
equivalent to SQL *rows*. Just as one SQL table can have a (nearly) infinite set
of rows, one Mongo collection can have a (nearly) infinite set of documents. 

But that's really where the similarity ends. Every single SQL row is rigidly
conformant to the schema defined by the table, whereas Mongo completely eschews
the concept of schemas. So each Mongo document is allowed to be a special
snowflake, where each SQL row must have perfect symmetry with all of the
other rows in the table. 

Put another way, Mongo documents are completely *denormalized*. I have, on
occasion, used denormalized fields inside SQL databases, because sometimes you
have a tiny bit of one-off data that has some structure, but isn't worth
creating an entirely separate table for. In those cases, a single denormalized
JSONfield can act as a safety valve, solving the issue with a minimum amount of
schema shenanigans. But a "minimum amount" of schema shenanigans is still a
non-zero amount: everything still must be rigidly defined in advance in the
overall table schema! 

Mongo takes the idea of using a JSONfield as a safety valve to its logical
extreme: every part of every document (schema row) is a gigantic denormalized
JSONfield! With that in mind, every single thing about Mongo is concerned with
dealing with such documents *quickly* and *efficiently*. The Mongo API is full
of functions that query and update *inside* gigantic JSON documents far faster
than you ever could by reading out the whole thing and massaging it yourself
with manually-written JavaScript code. This is where the value-added magic of
Mongo lies.

Obviously this approach brings drawbacks as well as benefits (SQL proponents
would say that it's mostly drawbacks with no real benefits at all!). It's harder
(slower, more memory-intensive) to detect patterns in a bunch of denormalized
documents than it is in a bunch of normalized rows. This is really the crux of
the entire SQL-vs-document debate; the value and cost of normalized rows (and
their associated rigid schemas) vs the value and cost of denormalized documents.


Syntax
-----------

As should be obvious from the discussion above, everything about MongoDB is 100%
JavaScript-centric: it is clearly a product of *JavaScript-Everywhere* era, for
good or ill. All interaction with the database happen in JavaScript; either
commands that you type in directly into a REPL-like environment (as we just saw
above) or via separate JavaScript files that get loaded and executed on
commands. The documents themselves are stored as JSON (technically as BSON, a
binary variant of JSON, but that's an implementation detail that you won't need
to owrry about).

Of course this means everything is mutable when you interact with Mongo
directly; you will probably want to get to the safety and security of a Clojure
as soon as you can, and run the equivalent of these commands via Monger inside a
Clojure REPL. But we will finish up this document with a whirlwind tour of the
most basic operations in pure JavaScript. See the appendix for links to
*much-more* extensive documentation, and see also the (non-virtual paperback)
``MongoDB: The Definitive Guide, 2nd edition``, by Kristina Chodorow.


Databases
==================

Your local server is likely to house multiple different databases, which will
all put their data into the ``data/db`` directory that we discussed above. Each
database needs a unique name, which will certainly just be the same as the name
of each local dev project locally. On Heroku, you're likely to instead have just
one database per server, dedicated to that project. 

In either case, the database names ``admin``, ``local``, and ``config`` are
reserved, and you can't use them for your own databases.

Once connected via the ``mongo`` client, you can use the following operations at
the database level:

.. code-block:: bash

   > show dbs
   #... lists all available databases

   > use foodb
   #... makes foodb the active database; it is now aliased to 'db'

   >db
   foodb    #... outputs the currently-aliased db name


Collections
===================

Even though every single Mongo document is free to be a unique
snowflake, there are still some very good reasons to create separate
collections. Some reasons are technical:

#. Queries in a hugely-mixed collection have the potential to return spurious
   matches! When each collection has a well-defined set of contents, you avoid
   this issue completely.
#. Queries are faster in smaller collections, so you can speed everything up if
   you do some high-level sorting on your own, via collections. 


So there are good technical reasons to have separate collections. But other
reasons are just common sense. Why do you use use folders and directories on
your computer rather than just dumping everything into one folder and writing a
script that monges a unique prefix onto the title of each file? You use folders
and directories *because they are very helpful to the human brain*: deciding on
them, naming them, and creating them is an essential part of the process that
leads to a well-organized system. The computer can be relied on to handle all of
the low-level optimization for you, but this highest-level of optimization can
still only be done by human brains recognizing patterns that the computer cannot
yet see.

Once connected to a specific database via the ``mongo`` client, you can use the
following operations to review collections:

.. code-block:: bash

   > db
   foodb

   > show collections
   system.indexes   #... premade!
   mystuff          #... my table

   


Remember that ``db`` is aliased to the database name (in the example above,
``foodb``), but that all commands must target a specific *collection* (in the
example above, ``mystuff``). 

.. code-block:: bash

   >db.find()
   #... TypeError: property 'find' of object foodb is not a function

   >db.mystuff.find()
    { "_id" : ObjectId("54498f6ac2badcb76930ec2d"), "first" : "Ann", "last" : "Nonymus"}


Also remember that you create a new collection just by referring to it, though
if you don't actually write to it, it's still hypothetical: Mongo doesn't write
new collection names to disk just because you refer to them; it only does so
when you actually insert data into them.

.. code-block:: bash

   >db.otherstuff
   mystuff.otherstuff  #... mystuff.otherstuff is a legal reference

   > show collections
   system.indexes
   mystuff           #... mystuff.otherstuff is still Schroedinger's cat-like




Naming Restrictions
------------------------

Collection names should not start with the prefix ``system``: that's a reserved
word for the Mongo server. They also shouldn't have the character ``$``,
because that's another magic reserved symbol.

You are free to use dots when naming your collections, as though you were
creating a true namespaced system. So you might have ``foo`` collection, and a
``foo.extras`` collection. It's important to note that the Mongo server will
still treat those as two completely separate collections! It looks like
``foo.extras`` is a *sub-collection* to you, but Mongo doesn't treat it so. So
use those dots to help your own collections appear well-organized to your human
brain, but remember that each collection is always an independent entity: Mongo
never treats one collection as a subset of another.

The full namespace for a collection consists of the database name plus ``.``
plus the collection name. So if you had a database named ``volta``, and a
collection named ``foo.extras``, the full namespace for that collection would be
``volta.foo.extras``.




CRUD Operations
====================

All Mongo CRUD operations follow a similar pattern, wherein commands are issued
as methods *on* a specific collection of a specific database. Because the
currently-active database is always aliased to the magic word ``db``, the
commands typically end up having the form ``db.collectionname.query()`` or
``db.collectionname.delete()``, and so on.

When methods take arguments, those arguments invariably come in the form of maps
with positional significance; the first map often defines how to target one
document in the collection, while a second map might define how to alter that
document, and a third map might contain options for formatting the output (and
so on). 

Each argument map can of course be nested to an arbitrary depth of complexity:
if you have a very complex query to run, then you'll end up using a very complex
query map as that first positional argument. 

In practice, because the positional map arguments can nest internally to
arbitrary complexity levels, it's rare to see more than three of them for one
method. Learning the Mongo API is largely a matter of getting familiar with the
domain that each map in each position is concerned with, and with what detailed
substructures it is allowed to contain.


Creating
-------------

As we saw above, creation is done via the ``insert()`` method, which always takes at
least one argument: the JavaScript object to be inserted.


.. code-block:: bash

   db> db.mystuff.insert({pi: 3.14159})
   WriteResult({"nInserted" : 1})

   db> db.mystuff.find()
   { "_id" : ObjectId("54498f6ac2badcb76930ec2d"), "first" : "Ann", "last" : "Nonymus"}
   { "_id" : ObjectId("544a9494a32c3d1aecddc776"), "pi" : 3.14159 }




Reading
----------------

We've seen the use of the ``find()`` command a few times already, because you
can't really demonstrate the use of ``insert()`` without pairing it with
``find()``! There's also a ``findOne()`` command which just returns one
document, which is useful when you know there is only one valid match, and you
don't want to deal with pulling item 0 out of the results array. 


Map #1: the query document
.................................

If you provide an object as the first argument to ``find()`` or ``findOne()``,
it acts as the ``query document``. Providing this argument causes the returned
results to be limited to only those documents which perfectly match the criteria
defined in the query document.

.. code-block:: bash

   db> db.mystuff.find({first: "Anne"})
   {"_id" : ObjectId("54498f6ac2badcb76930ec2d"), "first" : "Ann", "last" : "Nonymus"}
 
If there are multiple properties inside the query document, they must all be
matched: *by default, multiple properties define AND searches*. By default, all
matches must be perfect matches of primitive values.

Any time you want to search for some kind of *relative* match (as opposed to a
perfect primitive match) you use query document values that are nested maps,
which in turn contains special magic operator keys. So for example, to search
for all objects with a ``pi`` key larger than 3, you would use this query:

.. code-block:: bash

    db> db.mystuff.find({pi: {"$gt": 3}})
    { "_id" : ObjectId("544a9494a32c3d1aecddc776"), "pi" : 3.14159 }

    db> db.mystuff.find({pi: {"$gt": 4}})
    #... no results found... Mongo unhelpfully just prints no feedback at all

Any time you see a map key that starts with ``$`` in a query document, you can
be certain that it's triggering some kind of complex search logic. There are
special operators that enable *OR* searches (i.e. the ``$or`` and ``$in``
special search operators), and regular expression searches, and so on. All of
them get used in the same way as the example above: as keys inside sub-maps of
the main query document.

It should be evident that all non-trivial Mongo queries rapidly degenerate
into punctuation noise. Fortunately you will be writing most of your queries in
Clojure via ``Monger``, which should make everything clearer most of the time.

It should also be clear that (punctuation noise notwithstanding) this query
document system allows you to run queries of arbitrary complexity, with a level
of power and precision comparable to what you would get in a SQL database. The
topic of query documents is obviously huge and we won't even try to cover it in
depth here. The Chodorow book gives it a huge long chapter unto itself, and the
official documentation site has numerous articles on the topic.


Map #2: the output document
................................

The second positional map to ``find()`` lets you specify only a subset of keys
to be returned. In the second map, any key with a value of 1 is returned. Keys
that are not mentioned are omitted. The ``_id`` key is still returned by default.

.. code-block:: bash
  
   db> db.mystuff.find({first: "Anne"}, {first: 1})
   {"_id" : ObjectId("54498f6ac2badcb76930ec2d"), "first" : "Ann"}

Using a ``1`` as a boolean is typical JavaScript, arghhh. Get used to it, baby. 

Also note that you can explicitly turn some output off by specifying a boolean
false (i.e. a numeric ``0``) as the value for that key. So you could force the
output to omit that ``_id`` key if you really wanted to:

.. code-block:: bash
   
   db> db.mystuff.find({first: "Ann"}, {_id: 0})
   {"first": "Ann", "last": "Nonymous"}



Updating
----------------

Updating is done via the ``update()`` method, which always takes at least two
positional maps as parameters:

#. A query map, which works exactly like the ones used for read operations.
#. The update map, which contains the new information. 

Note that by default, the update map does a *complete replacement* of the
matched documents, rather than a partial update of only some of the fields.

.. code-block:: bash

   >db.mystuff.update({first: "Ann"}, {first: "Amy"})
   WriteResult({"nMatched": 1, "nUpserted": 0, "nModified": 1}

   >db.mystuff.find({first: "Amy"}, {_id: 0})
   {"first": "Amy"}  # we lost the last name field entirely, doh!

To do an update-in-place of only certain fields, you use the magic keyword
``$set`` and provide a sub-map. The keys and values in the sub-map will be
altered or added as required, while other keys will be left unaltered. This is
probably want you'll want most of the time!

.. code-block:: bash

   db.mystuff.update({first: "Amy"}, {$set: {last: "Perkins"}})
   WriteResult({"nMatched": 1, "nUpserted": 0, "nModified": 1}

   >db.mystuff.find({first: "Amy"}, {_id: 0})
   {"first": "Amy", "last": "Perkins"}

Just as with queries, you can come up with insert maps that do very
sophisticated changes using a wide variety of magic keyword operators. See the
official documentation for more details. 
   


Deleting
------------------------

By default, ``db.collectionname.delete()`` deletes *every single document in the
collection*. WTF dude. If you provide a query document as the first map (yes,
using all of the same magic keywords from all of the earlier operations), you
can target specific documents for deletion. Doesn't that seem more reasonable?




Appendix I: Additional Documentation
============================================

The online `documentation`_ for MongoDB is extensive. Some of the most important
tutorials when getting started will be those covering `inserting`_, `querying`_, 
`modifying`_, and `removing`_ documents. And as soon as you move past the REPL
and towards web applications, you'll need to think about `security`_ as well. 

.. _`documentation`: http://docs.mongodb.org/manual/

.. _`inserting`: http://docs.mongodb.org/manual/tutorial/insert-documents/

.. _`querying`: http://docs.mongodb.org/manual/tutorial/query-documents/

.. _`modifying`: http://docs.mongodb.org/manual/tutorial/modify-documents/

.. _`removing`: http://docs.mongodb.org/manual/tutorial/remove-documents/

.. _`security`: http://docs.mongodb.org/manual/administration/security-checklist/



