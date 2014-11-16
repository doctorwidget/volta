// Compiled by ClojureScript 0.0-2371
goog.provide('volta.cljs_demo');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
volta.cljs_demo.$output = goog.dom.getElement("cljsOutput");
/**
* A timestamped greeting
*/
volta.cljs_demo.timed_string = (function timed_string(){return ("ClojureScript up and running as of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date())));
});
/**
* Initialize the main cljs-demo page
*/
volta.cljs_demo.init = (function init(){console.log("initializing cljs-demo page...");
return goog.dom.setTextContent(volta.cljs_demo.$output,volta.cljs_demo.timed_string.call(null));
});
goog.exportSymbol('volta.cljs_demo.init', volta.cljs_demo.init);
