**********************
Ring Down And Dirty
**********************

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


The Simplest Server
=================================

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


Running The Server
-----------------------


This is the first place where the TIMTOWDI issues start to crop up: there are *so
many different ways* to control the launching of your Ring server, and there is
absolutely no widely-accepted preference for one over the others.

For this super-simple handler, we will use a super-simple launch method. Just
start a REPL, load up a Ring adapter plus your handler, and start the server
with a single function call:

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

This example obviously has way too many limits to be of much use, not the least
of which is that it takes over your entire REPL so you can't interact with it
any more. Not only that, if you ``CTRL-X CTRL-C`` to stop the server, you
also stop the REPL. DOH! This is why we will quickly move on to more-complicated
but more-useful approaches to starting and stopping the server.


A Fancier Server
=================================

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


A Smarter Way To Run
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




    





