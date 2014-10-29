*************************
Introduction To Ring
*************************

This is not intended to be a comprehensive review of `Ring`_, the de facto
standard for implementing HTTP servers in Clojure. The online documentation for
Ring is decent, and there are a multiple of tutorials that go over the basics of
using it. The best introduction to it I've encountered is not online at all:
it's chapter 16 of *Clojure Programming*, by Emerick et al.

.. _`Ring`: https://github.com/ring-clojure/ring

The thing about Ring and its associated technologies (`compojure`_ is nearly as
much a standard as Ring itself is) is that it suffers a bit from TIMTOWTDI
syndrome, whereas I am much more of a TSBOOWTDI kind of guy. The fundamental
principles of Ring are very simple (see below), but the devil is in the details.


.. _`compojure`: https://github.com/weavejester/compojure

For one thing, there are a wide variety of ways to structure the app at the top
level (provide a map of Ring settings inside ``project.clj``? Define and run a
top-level function call to a Jetty adapter? Use a ``-main`` function that
executes a function that takes a var that holds a reference to a handler
function? And so on). For another thing, sessions and cookies and other standard
HTTP tools are available as standard Ring middleware, but there are also
wrappers for those libraries (for example, the popular `lib-noir`_ project).

.. _`lib-noir`: https://github.com/noir-clojure/lib-noir

Unfortunately, you'll find different tutorials taking very different approaches
and rarely discussing why they did what they did rather than taking one of the
other possible approaches. Why would you use one of these approaches over the
others? Most tutorials don't say; they just plunge ahead with the authors'
preferred choice. This has encouraged me to just copy and paste the top-level
code so that I can get on with the business of defining my own Compojure routes,
but I'd like to have a better understanding of what's really going on under the
hood. This document is my attempt to synthesize a lot of different tutorials and
documents into something in my own words that I can use as a quick guide to
setting up new projects.


Fundamentals
=================

What is the single most important thing to know about Ring?

    *Ring turns HTTP requests into plain old Clojure maps on the way in, and then
    turns plain old Clojure maps into HTTP Responses on the way out.*


That's really it. Everything else is just details. 


End To End Request Handling
--------------------------------

That's not the *whole* story of an HTTP request of course... it just describes
the value that Ring brings to the process. The whole path for an incoming
request goes like this:

#. An HTTP request comes in over the wire in a universal, completely
   platform-agnostic format, composed of raw bits and bytes. 
#. A **ring adapter** handles technical details of accepting this request. The
   adapter passes the results on to Ring in the form of Java artifacts like
   strings and InputStreams.
#. Ring itself converts those Java artifacts into a plain old Clojure map. 
#. Ring hands that map to one (and only one!) Clojure handler function.

At that point, the *middleware* cascade starts. A handler is just a plain old
Clojure function, but middleware functions take handler functions and return
**modified** handler functions. The modified versions still take an input map,
but they modify just a tiny piece of it, and then hand the modified map off to
the handler that they wrap internally -- which may in turn be yet another
middleware-modified handler!

Middleware can wrap middleware as deeply as you want, like Russian dolls. That
means that this part of the process is all about composing functions in a very
clean and simple way. Django middleware works exactly the same way, and I have
enough experience with this concept that it makes perfect sense to me.

In the end, after *N* different middlewares (plus one core handler as the
teeniest tiniest Russian doll at the center) are done inspecting and massaging
the response, then the output map from the final middleware is (by definition!)
the final response map. At that point, the process is reversed:

#. The outermost middleware returns the final Clojure map to Ring. 
#. Ring converts that Clojure map into Java artifacts.
#. The ring adapter handles the technical details of generating a
   platform-agnostic HTTP response from those Java artifacts.
#. A raw HTTP response goes out over the wire back to the client. 


Adapters
=============

This shows where Ring **adapters** fit in: they sit very close to the raw HTTP
requests and responses, closer than Ring itself does. Ring shields from you
dealing with adapters directly: you will need to specify one in your main
namespace that starts the server, but after that, you don't interact with it 
directly. Instead, your Clojure code will deal direct with Ring, and only with
Ring. 

A Ring adapter is not a server unto itself; it's a Clojure interface to some
kind of Java-based server. This is an area where Clojure's strategic decision to
run atop Java pays big dividends; Ring can run on top of any of the classic Java
servlet containers (i.e. ``Tomcat`` or ``Jetty``) as well as on Clojure-specific
servers like ``HttpKit``. In every case, you are free from needing to
micromanage the activities of either the adapter or the server. You should know
what an adapter is, and which server your adapter uses, and you might
want to read up on advanced configuration options for your specific adapter, but
for the most part, as a Clojure programmer, you specify your adapter up front
and then leave it alone after that.


Handlers
===============

**Handler** functions take an HTTP request map and return an HTTP response map.
The simplest *hello world* demonstrations use trivially simple handlers to
create the entire response all by themselves. However, real-world applications
are invariably built using a combination of simple handlers plus *middleware*
(see below).


Middleware
===============

**Middleware** functions are higher-order functions that take a *handler* and
add functionality to it. It's easy to get confused here, so let's repeat that:
handler functions take *request maps* and return *response maps*. Middleware
functions take *handler functions* and return *modified handler
functions*.

#. ``Handler``: *request map* => *response map*
#. ``Middleware``: *handler function* => *modified handler function* 

This means that middleware functions are a way to compose logic in a reusable,
modularized way. You can write middleware that does a tiny bit of
well-encapsulated logic, and just modifies a handler to add that logic
seamlessly, either before or after the handler itself. 

So rather than adding the logic that sets a cookie or adds session info
separately to each handler (repetitive! error-prone! brittle!), you would write
*one* piece of middleware for cookies, and *one* piece of middleware for
sessions, and then wrap *all* of your response handlers with those pieces of
middleware. This lets you build your server-side logic out of many small,
re-usable pieces, while making sure that the logic for any particular topic
always appears in one and only one location. This is, of course, A Very Good Way
To Design Things.


Routing
==============

One crucial detail in the end-to-end path described above is that Ring is
designed to hand off the request map to one (1) and only one (1) handler
function. For toy apps and *hello world* demos, this is not a big deal. But any
real web server obviously needs to handle multiple different routes. A request
for a URI of ``/about-us`` should probably be handled by a completely different
function than a request for a (say) a URI of ``/delete/item/3``. So the process
of building a web server becomes a process of building up a collection of
different handler functions, each of which is intended to handle one and only
one specific type of request.

The obvious next question is: *how do you match each incoming request with the
correct handler?* To answer that, you only need to inspect two pieces of
information: the original URI, plus the HTTP method (i.e. ``GET`` or ``POST`` or
``PUT``, etc). Fortunately, a Ring request map always includes both of those
bits of information nicely separated out for you under the ``:uri`` and
``:request-method`` keys.

So given any request map, you could plunge ahead and analyze the values
associated with those two keys, manually parsing strings and lining up ``cond``
functions as necessary, before deciding which helper handler to delegate the
request to. Based on what you find in the request map, you would presumably end
up choosing from one of a number of handler functions inside some kind of
gigantic conditional statement. The one main handler that you give to Ring would
presumably contain that gigantic ``cond`` statement, and it would always
delegate to the correct helper handler.


Compojure
-----------------

But doing all of that is quite obviously a painful prospect, which is why people
use ``compojure`` instead. This routing library contains macros that automate
the process described above: you define routes in terms of a few key values (a
glob-like URI string, a method name, and a handler function), and ``compojure``
builds up the gigantic ``cond`` statement via macroexpansion, so you never have
to do it yourself.


It's Macros All The Way Down
-------------------------------

Even better, all calls to ``compojure`` routing macros are macroexpanded into
ordinary handler functions, but each such macro call in your code can be freely
used as an argument to yet another ``compojure`` routing macro! None of them are
expanded until macroexpansion time, at which point all of them are expanded into
one final uber-``cond`` handler.

This fundamental fact, along with other helpful ``compojure`` macros such as
``context``, allows you to compose your routes in splendid isolation, never
wasting any time on any repetitive boilerplate. In the end, you still end up with one
uber-handler which can then be specified as the anointed single handler
for Ring. There is in fact a giganormous uber-``cond`` sitting there under the
hood after macroexpansion, but you will never need to assemble it, maintain
it, or even look at it. *Whew*.


The Uber-Handler Is Still Just A Handler
----------------------------------------------

Finally, keep in mind that the uber-handler returned by ``compojure`` will then
be wrapped by all of the middleware that you've chosen to use. So ``compojure``
is a way to get your teeniest tiniest Russian doll handler function (perhaps not
so teeny tiny, depending on how many ``compojure`` routes it contains), upon which
you will then apply as many layers of middleware as you see fit. The middleware
ends up being applied to all of the sub-handlers inside the uber-handler, which
is of course the whole point of composing functions together in the first place.






