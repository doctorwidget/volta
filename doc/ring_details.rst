.. _ring_details:

**********************
Ring Down And Dirty
**********************

The prior document (:ref:`ring_intro`) discussed Ring in a very general and
theoretical way. This one will provide specific code examples. 

Installation
==================

Including Ring is easy, thanks to ``Leiningen``. Just add ``[ring "1.3.1"]`` to
your ``:dependencies`` array inside ``project.clj``. You could include a smaller
subset of the ring library, but this way we'll have access to everything,
including commonly-needed middleware and the embedded Jetty adapter.

.. code-block:: clojure

   ;; inside the main (defproject) 

   :dependencies [[org.clojure/clojure "1.6.0"]
                  ; etc etc
                  [ring "1.3.1"]]


Runtime Issues
=================================


A Simple Server
-----------------------

Let's write the very simplest possible handler function, which just returns
*Hello Volta!* every time, regardless of the request. 

.. code-block:: clojure

    ;; complete contents of ``src/volta/handlers.clj``
    (ns volta.handlers)

    (defn handler-alpha [request]
                {:status 200
                :headers {"Content-Type" "text/html"}
                :body "Hello Volta!"})

Note that we are very explicitly avoiding all use of middleware and routing that
we just discussed above. This is just pure Ring and nothing but Ring. As a
result, it takes a request map as the only argument, and returns a map with the
three minimally-required keys: ``:status``, ``:headers``, and ``:body``. 


Launch Method #1
----------------------------

This is the first place where the TIMTOWDI issues start to crop up: there are *so
many different ways* to control the launching of your Ring server, and there is
absolutely no widely-accepted preference for one over the others.

For this super-simple handler, we will use a super-simple launch method. Just

#. start a REPL
#. ``(require)`` your Ring adapter and handler namespaces
#. invoke the adapter as a function with the handler as the first argument

.. code-block:: clojure

   ;; inside a REPL

   (require '[ring.adapter.jetty :as j])
   ;nil

   (require '[volta.handlers :as h])
   ;nil

   (j/run-jetty h/handler-alpha {:port 3000})
   ;2014-10-28 16:27:08.468:INFO:oejs.Server:jetty-7.6.13.v20130916
   ;2014-10-28 16:27:08.497:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000

Now if you point a browser to ``localhost:3000``, you will see our very simple
web page. 

This example obviously has way too many limits to be of much use, such as the
fact that it takes over your entire REPL, blocking it so you can't interact with
it any more. Not only that, if you ``CTRL-X CTRL-C`` to stop the server, you
also stop the REPL. DOH! This is why we will quickly move on to more-complicated
but more-useful approaches to starting and stopping the server.


A Fancier Server
---------------------------------

Let's create a fancier handler and show a different way to launch it. This
handler function will echo back all of the original request headers. We'll
manually specify a big blobby final return string, which isn't something we'll
want to make a habit of. Baby steps!

.. code-block:: clojure

    (ns volta.handlers
      (:require [ring.util.response :as rr]))
    
    ; skipping handler-alpha

    (defn handler-beta
       "Another REPL example."
       [request]
       (rr/response
            (str "<HTML><BODY><UL>"
                 (apply str (for [[k v] request]
                            (str "<li>" k " : " v "</li>")))
                 "</UL></BODY></HTML>")))
  
    
Note the use of the ``(response)`` helper function, which takes just the
value for the ``:body`` key, and adds it to a response map along with ``:status
200`` and ``:headers {}``. If you need custom headers or a different response
code, this helper is not for you!


Launch Method #3
-------------------------

Next, instead of having the server take over the REPL, we'll have the server run
in the background, and keep a reference to it. We will then be able to call the
Java interop methods ``(.start)`` and ``(.stop)`` on it, to start and stop it
without breaking our REPL. Better yet, we will specify the handler as being the
*symbol* ``app*``, rather than supplying a direct reference to the function. 

.. code-block:: clojure

    ; inside a REPL

    (require '[ring.adapter.jetty :as j])
    ;nil

    (require '[volta.handlers :as h])
    ;nil

    (def app* h/handler-beta) 

    ; start the server *without* blocking the REPL and on a port of our choosing
    (def server (j/run-jetty #'app* {:port 8080 :join? false}))
    ; blah blah server started
    ; 'volta.core/server

Now you can visit ``localhost:8080`` and see the contents of the request map
echoed back to you, as defined inside our ``(handler-beta)`` function.

At this point we can continue to use the REPL, unlike last time. Better yet,
bring down the server by calling ``(.stop server)`` at any time, *without*
killing the REPL. That syntax should make it clear that our ``server`` symbol
references a running *instance* of a mutable Java object: the Jetty server
instance.

But because we were tricksy and defined our handler as a *symbol* (``#'app*``)
instead of a direct reference to a handler function, we can now change the
handler for the server without bringing the server up and down!

.. code-block:: clojure

   ; rebind the app* symbol inside the running REPL
   (def app* h/handler-alpha)

Now if you revisit localhost:8080, you'll see we're back to the original
handler, without any need to manually bring the server down! You are free to
rebind the ``app*`` symbol as often as you like, and the ``server`` instance
will keep on chugging along, dynamically updating without ever needing to go
down, even for a microsecond.

This trick is, perhaps, too clever by half. But it's exactly the sort of thing
you'll see in discussions of Ring out in the wild. Until you understand the
fundamental pieces that are moving around (the Jetty server, the primary
handler, the context everything is running in, etcetera), these examples can be
quite bewildering. 


Other Adapters
---------------------------------

The examples above all use the `Jetty`_ adapter, because it's part of the core Ring
package. The earliest versions of Ring also shipped with an adapter for
`HttpCore`_, but it is no longer part of the Ring core, and it hasn't been
updated since 2010. There are other adapters that have received frequent updates
and are relatively popular, such as `Aleph`_ and `HttpKit`_.

.. _`Jetty`: http://www.eclipse.org/jetty/

.. _`HttpCore`:  https://github.com/mmcgrana/ring-httpcore-adapter

.. _`Aleph`: https://github.com/ztellman/aleph

.. _`HttpKit`: https://github.com/http-kit/http-kit

In every case, the same pattern that we saw above still holds, except that
rather than launch the server with a call to
``(ring.adapter.jetty/run-server)``, you make a call to an analagous function
from the new adapter namespace.

So for Aleph, you would include ``[aleph "0.4.0"]`` inside ``project.clj``, and
then:

.. code-block:: clojure

   (require '[aleph.http :as http])
   ;nil

   (http/start-server #'handler-alpha {:port 8080})
   ; server starts up


And for HttpKit, you would include ``[http-kit "2.1.18"]`` inside
``project.clj``, and then:

.. code-block:: clojure

    (require '[org.httpkit.server :as h])
    ;nil

    (h/run-server #'handler-beta {:port 3000})


And so on. Each adapter has its own set of allowed values in the options map,
but they are all launched in this very similar way. 


Summary
----------

In all of the examples above, the actual launch of the server involves invoking
an adapter class, which combines a standard Java server *with* all of the needed
Ring functions. All of these examples have been shown in a REPL, but it's easy
to imagine repackaging them into a ``(-main)`` function. At that point, you
could invoke it as a one-liner (skipping all of the ``require`` calls and
intermediate symbols), or even by specifying your ``(-main)`` as the value for
the ``:main`` key in your ``project.clj``. This is a very clear case of
TIMTOWDI.

But IMHO, the best way to launch your server is *not* to issue the launch
command to an adapter yourself: it's to use **lein-ring**. *TSBOOWTDI!*


Lein-Ring
=================================

`lein-ring`_ is a plugin for Leiningen that lets you specify a few settings
inside ``project.clj``, and then start and stop the server via command-line
commands. It uses the Jetty adapter by default, along with other sensible
default options. This is obviously going to be your best bet in production, but
since you can't use this method inside a REPL, it's still useful to know how to
launch directly via an adapter, as shown in the earlier methods.

.. _`lein-ring`: https://github.com/weavejester/lein-ring


Installing and Configuration
--------------------------------

First you add it as a *plugin* (not a dependency!):

.. code-block:: clojure
 
   ; inside project.clj

   :plugins [[lein-cljsbuild "1.0.3"]
             ;etc
             [lein-ring "0.8.11"]]
              

Then you just add a ``:ring`` key to the top-level ``project.clj`` map. The
value for this key is a map with all of the ``lein-ring`` configuration options.
At a minimum, you need a ``:handler`` key that holds your top-level handler as
its' value.

.. code-block:: clojure
   
    ; inside project.clj

    :ring {:handler volta.handlers/handler-beta}

And now you can run the server via a ``lein`` command:

.. code-block:: bash

    $ lein ring server
    ;; blah blah
    ;; Started server on port 3000


A Flexible Wrapper
---------------------

The example above provides a specific handler to ring (our ``(handler-beta)``
handler function), but it's often better to provide some kind of wrapper symbol.
When we discussed this option earlier (using an extra symbol ``app*`` instead of
calling one of the two handlers by name) we ended by concluding that this
approach might be too clever by half.

But that's not always true: once you start collecting a large number of handlers
into one uber-handler (e.g. with ``compojure``), and then following that up by
wrapping the uber-handler in *N* layers of middleware, it can be a good idea to
encapsulate the intermediate stages, keeping references to them around while
passing only the final reference to the adapter.

To show this in action, we will create a new ``volta.routes`` namespace to
have vars named ``main`` and ``all-routes``, where the intent is to do intermediate
manipulation (composition, middleware, etc) to ``all-routes``, but always end up
pointing ``lein-ring`` at the ``main`` symbol. That means we can make all of our
changes in just one place (``volta.routes``) and never change ``project.clj``
after we set it up the first time. Having only one location to change is, as
always, the gold standard for good design.

.. code-block:: clojure

    (ns volta.routes
        (:require [volta.handlers :as h]))

   (def all-routes h/handler-beta)

   (def main #'all-routes)


Note that ``all-routes`` is a concrete reference to a specific handler function,
but ``main`` is a reference to a *var* (i.e. ``#'all-routes`` is synonymous with
``(var all-routes)``). Later on, as we proceed with these notes, we'll bind
``all-routes`` to richer, more-complicated things (like an uberhandler built
with ``compojure``, and then that same uberhandler wrapped with middleware!).
But plain old ``main`` can be set just once inside ``project.clj``:

.. code-block:: clojure

   ;; inside project.clj
   :ring {:handler volta.routes/main}

So we have not one but **two** layers of indirection going on in the form of
both ``main`` and ``all-routes``. That would be a horribly over-complicated way to
introduce the topic of handlers and adapters, but we didn't start there now did
we? This way we have maximum flexibility to make whatever changes we like while
isolating the changes to just one file. To be fair, we might be able to get by
with just one layer of indirection: either ``main`` or ``all-routes`` but not both.
However, you can find examples like this out in the wild, and since we started
with the very simplest scenario, it's only fitting to end with the most
complicated one.


Other Uses
--------------

In addition to using lein-ring for your development environment, ``lein-ring``
includes useful options for creating uberjars and uberwars, and so on. See the
main ``lein-ring`` site for more details. 


