.. _monger:

************************
Monger
************************

The `Monger library`_ gives you idiomatic Clojure access to MongoDB databases.
No more punctuation noise hell, yippee! There is an extremely helpful
`documentation`_ site accompanying the main github repository.

.. _`Monger library`: https://github.com/michaelklishin/monger

.. _`documentation`: http://clojuremongodb.info/


Installation
=================

Just add ``[com.novemberain/monger "2.0.0"]`` to ``project.clj``. Now you can
load all of the Monger classes either in an interactive REPL or inside your own
Clojure code.



Basic Usage
===============

You'll need to have the mongo server running in the background:

.. code-block:: bash

   $: ulimit -n 1024 && mongod
   #... output elided
   #... blah blah
   [initandlisten] waiting for connections on port 27017

   # then start a REPL
   $: lein repl


From there on out, you can interact entirely via Clojure (yay!). The top level
operations are all inside the ``monger.core`` namespace:

.. code-block:: clojure

   (require '[monger.core :as m])  ; top-level server operations
   ;nil

   (def conn (m/connect))
   ;'volta.core/conn

   (m/get-db-names conn)
   ;#{"volta" "admin" "local"}  

   (def db (m/get-db conn "volta"))
   ;'volta.core/db

At that point, you are connected to the "volta" database. Just as in the
JavaScript console, you still need to pick a specific *collection* to run
operations on. The ``monger.db`` namespace helps you review and select specific
collections. 

.. code-block:: clojure

   (require '[monger.db :as md])  ; database-level operations
   ;nil

   (md/get-collection-names db)
   ;#{"system.indexes" "testData"}  


And finally, most of the bread-and-butter CRUD operations are found inside the
``monger.collection`` namespace:

.. code-block:: clojure

   (require '[monger.collection :as mc]) ; collection operations
   ;nil

   (def coll "testData")

   (mc/find db coll)
   ;#<DBCursor Cursor...       ; returns DBCursor objects by default

   (mc/find-maps db coll)
   ;({:_id #<ObjectID...  :first "Ann"  :last "Nonymus"})  ; Clojure maps = better!


   (mc/find-maps db coll {:pi {"$gt" 3}} {:_id false)
   ;({:pi 3.14159 :radius 10.0})

   ;Note that by default the mongo search operators must be in string form. 
   ;Use monger.operators to switch to Clojure symbols (not keywords!)
   (require '[monger.operators :refer :all])
   ;nil

   ;; Now the earlier query can be made more Clojuriffic. 
   (mc/find-maps db coll {:pi {$gt 3}} {:_id false})
   ;({:pi 3.14159 :radius 10.0})


That's the whirlwind tour. The documentation site linked above is very very good
and worth taking the time to study.



Inserting
==============

For the most part, Monger commands are exactly what you would expect: prefix
notation versions of the JavaScript originals, but using Clojure maps and
keywords rather than JS Objects and strings. That's already a big win, IMHO.

One of the few differences is that you should explicitly generate your own
``ObjectIds`` rather than letting the server do it for you manually. You'll use
the pure-Java ``org.bson.types.ObjectId`` class to do this. 

.. code-block:: clojure

   (import org.bson.types.ObjectId)
   ;org.bson.types.ObjectId

   (def foo (ObjectId.))
   ;#'volta.core/foo

   (foo)
   ;#<ObjectId 544bdedc3004399eca200e5e>

   (mc/insert db coll {:_id (ObjectId.) :first "John" :last "Lennon"})
   ;#<WriteResult { "serverUsed" : "127.0.0.1:27017" , "ok" : 1 , "n" : 0}>

Note that we get a ``WriteResult`` back as the result; this is another core
Mongo JavaScript object, like a ``DBCursor``. You can use functions from the
``monger.result`` namespace to interact with WriteResult objects (i.e to check
if it is OK, etcetera).

.. code-block:: clojure

   (require '[monger.result :as r])
   ;nil

   (def paul (mc/insert db coll {:_id (ObjectId.) :first "Paul" :last "McCartney"}))
   ;#'volta.core/paul

   (r/ok? paul)
   ;true

Alternatively, you can specify that you want a Clojure map returned via the
``insert-and-return`` function:

.. code-block:: clojure

    (def ringo (mc/insert-and-return d cname {:_id (ObjectId.) :first "Ringo" :last "Starr"}))
    ;#'volta.core/ringo

    ringo
    ;{:last "Starr", :first "Ringo", :_id #<ObjectId 544be1293004399eca200e61>}


More About ObjectIds
------------------------

You can reconstitute ObjectIDs from simple strings; this will obviously be
essential once you start to get data coming back from clients over HTTP!

.. code-block:: clojure
  
   (ObjectId. "4fea999c0364d8e880c05157") 
   ;#<ObjectId 4fea999c0364d8e880c05157>


More Documentation
-----------------------

This is *not* intended to be comprehensive coverage of the topic of insertion.
Again, the official documentation is very good: see the `full coverage of
insertion`_ for more details.

.. _`full coverage of insertion`: http://clojuremongodb.info/articles/inserting.html



Querying
==============

We've already seen some basic examples of this above. Again, just like with
insertions, the pattern is to use prefix-notation versions of the original Mongo 
functions, but with Clojure maps, symbols and keywords in place of JSON and
JavaScript. Again, there are some convenient variations on those basic functions
that have different return types, and so on.

Just like in the original Mongo syntax, you can supply up to three object maps
as arguments after the database and collection names:

#. A ``query object``, containing constraints for what to select.
#. An ``output object``, containing constraints for which fields to include
#. An ``options object``, with miscellaneous extra parameters

So assuming we've loaded everything from up above (including the ``operators``
namespace!), we could find the Beatles via:

.. code-block:: clojure

    (mc/find-maps db coll {:first {$in ["John" "Paul" "George" "Ringo"]}} {:_id false})
    ; ({:first "John", :last "Lennon"} {:first "Paul", :last "McCartney"} {:last "Starr", :first "Ringo"} {:last "Harrison", :first "George"})

That shows several features at once: we've supplied a query object, and we're
using ``$in`` as a plain old symbol (along with a vector of allowed matches),
and we've turned off the ``:_id`` field in our output object. 
   
Also note that while the above syntax mirrors the official Mongo format
perfectly, ``Monger`` provides terser helper form wherein you supply your
desired fields in a vector of strings *instead of* the output object. Behind the
scenes, Monger creates the proper output object for you:


Advanced Queries
-------------------

For complex queries -- especially those which require sorting and pagination and
so on -- ``Monger`` provides a complete search-and-sort DSL inside the
``monger.query`` namespace. This allows you to write queries that look and feel
much more like idiomatic Clojure code. 

More Documentation
----------------------

See the `complete documentation on queries`_ on the main documentation site.

.. _`complete documentation on queries`: http://clojuremongodb.info/articles/querying.html



Updating
=============

Again, the simplest cases just look like inversions of the original Mongo
JavaScript, cleaned up for use with Clojure. You always include a ``query
object`` to specify *what* you want to update, and a second object containing
the information about *how* to update. Always remember that by default the
second object will just **replace** the original! You need to use the correct
special Mongo operators to just update in place. 

So for example, the following example shows the use of the ``$set`` special
operator to add a brand new key to all people in a collection without resetting
the entire document. Also note the use of the third map (the ``options object``)
to update all matched documents: if you don't specify ``{:multi true}`` in the
options object, only the first matched document would be updated. Strange but
true.

.. code-block:: clojure

    (require '[monger.operators :refer :all)  ; might already be done from above
    ;nil

    (mc/update db coll                 ; previously bound up above
                    {}                 ; the query object
                    {$set {:fame 1}}   ; the change object
                    {:multi true})     ; the options object
    ;#WriteResult ...

    
And if (for example) you wanted to increase some peoples' fame without overwriting
the entire object, you could do this:

.. code-block:: clojure

    (mc/update db coll
                  {:first {$in ["John" "Paul" "George" "Ringo"]}}
                  {$inc {:fame 10}}    ; increase from 1 to 11!
                  {:multi true})
   ;#WriteResult...

And now the lads from Liverpool should have their proper fame levels. 


More Documentation
--------------------------

See the `complete documentation on updates`_ on the main documentation site.
There are a wide variety of very useful special operators for updates:
``$push``, ``$pushAll``, ``$addToSet``, ``$pull``, and many more! Unless each
document is very very simple, you will usually want to use those operators for
updates in place rather than simple overwrites.


.. _`complete documentation on updates`: http://clojuremongodb.info/articles/updating.html




Deleting 
============

It's easy -- perhaps *too* easy -- to delete every single item in a collection
by using the ``monger.collection/remove`` function:

.. code-block:: clojure
   
    (mc/remove db coll) 
    ;the ENTIRE collection is wiped clean... whoah.

It seems far more likely that you'll only want to delete *some* documents, in
which case the usual strategy of supplying a query object works as expected:

.. code-block:: clojure

    (mc/remove db coll {:band "U2"})  ; remove all items with that key && value 

And there's a convenience method to explicitly remove by ObjectID:

.. code-block:: clojure

    (def oid (ObjectId.))

    (mc/insert db coll {:title "My temp document" :_id oid})
    ;#<WriteResult...

    (mc/remove-by-id db coll oid)
    ;#<WriteResult...


More Documentation
---------------------

As always, there is more-complete `documentation on deleting`_, though in this
case, there's not much more to say than what we've already covered. 

.. _`documentation on deleting`: http://clojuremongodb.info/articles/deleting.html



Conclusion
======================

This concludes our whirlwind tour of using Monger. If it isn't clear enough
already, the official documentation site is very good and worth reviewing. We'll
see more examples of plugging Monger into your server setup when we cover Ring's
build-in support for *sessions*, and then again when we cover using the *Friend*
library for *authentication*. 





   
 



   
