// Compiled by ClojureScript 0.0-2371
goog.provide('volta.cljs_demo');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
volta.cljs_demo.$output = (function (){var G__11148 = "cljsOutput";return goog.dom.getElement(G__11148);
})();
/**
* A timestamped greeting
*/
volta.cljs_demo.timed_string = (function timed_string(){return ("This greeting dynamically created on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date())));
});
/**
* Initialize the main cljs-demo page
*/
volta.cljs_demo.init = (function init(){console.log("initializing cljs-demo page...");
var G__11151 = volta.cljs_demo.$output;var G__11152 = volta.cljs_demo.timed_string();return goog.dom.setTextContent(G__11151,G__11152);
});
goog.exportSymbol('volta.cljs_demo.init', volta.cljs_demo.init);
