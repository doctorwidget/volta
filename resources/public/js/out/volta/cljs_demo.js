// Compiled by ClojureScript 0.0-2371
goog.provide('volta.cljs_demo');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.dom');
goog.require('goog.dom');
volta.cljs_demo.$output = (function (){var G__19109 = "cljsOutput";return goog.dom.getElement(G__19109);
})();
/**
* A timestamped greeting
*/
volta.cljs_demo.timed_string = (function timed_string(){return ("ClojureScript up and running as of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date())));
});
volta.cljs_demo.app_state = (function (){var G__19110 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$96,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$99,"English",cljs.core.constant$keyword$100,"Hello World!"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$99,"French",cljs.core.constant$keyword$100,"Bonjour Monde!"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$99,"Spanish",cljs.core.constant$keyword$100,"Hola Mundo!"], null)], null),cljs.core.constant$keyword$97,"spam",cljs.core.constant$keyword$98,(42)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19110) : cljs.core.atom.call(null,G__19110));
})();
volta.cljs_demo.APP_ROOT = document.getElementById("omTarget");
volta.cljs_demo.greeting = (function greeting(cursor,owner,opts){if(typeof volta.cljs_demo.t19121 !== 'undefined')
{} else
{
/**
* @constructor
*/
volta.cljs_demo.t19121 = (function (opts,owner,cursor,greeting,meta19122){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.greeting = greeting;
this.meta19122 = meta19122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
volta.cljs_demo.t19121.cljs$lang$type = true;
volta.cljs_demo.t19121.cljs$lang$ctorStr = "volta.cljs-demo/t19121";
volta.cljs_demo.t19121.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"volta.cljs-demo/t19121");
});
volta.cljs_demo.t19121.prototype.om$core$IRender$ = true;
volta.cljs_demo.t19121.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__19124 = {"className": "oneGreeting"};var G__19125 = (function (){var G__19127 = {};var G__19128 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(self__.cursor))+": ");return React.DOM.strong(G__19127,G__19128);
})();var G__19126 = (function (){var G__19129 = {};var G__19130 = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(self__.cursor);return React.DOM.em(G__19129,G__19130);
})();return React.DOM.li(G__19124,G__19125,G__19126);
});
volta.cljs_demo.t19121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19123){var self__ = this;
var _19123__$1 = this;return self__.meta19122;
});
volta.cljs_demo.t19121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19123,meta19122__$1){var self__ = this;
var _19123__$1 = this;return (new volta.cljs_demo.t19121(self__.opts,self__.owner,self__.cursor,self__.greeting,meta19122__$1));
});
volta.cljs_demo.__GT_t19121 = (function __GT_t19121(opts__$1,owner__$1,cursor__$1,greeting__$1,meta19122){return (new volta.cljs_demo.t19121(opts__$1,owner__$1,cursor__$1,greeting__$1,meta19122));
});
}
return (new volta.cljs_demo.t19121(opts,owner,cursor,greeting,null));
});
volta.cljs_demo.all_greetings = (function all_greetings(cursor,owner,opts){if(typeof volta.cljs_demo.t19134 !== 'undefined')
{} else
{
/**
* @constructor
*/
volta.cljs_demo.t19134 = (function (opts,owner,cursor,all_greetings,meta19135){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.all_greetings = all_greetings;
this.meta19135 = meta19135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
volta.cljs_demo.t19134.cljs$lang$type = true;
volta.cljs_demo.t19134.cljs$lang$ctorStr = "volta.cljs-demo/t19134";
volta.cljs_demo.t19134.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"volta.cljs-demo/t19134");
});
volta.cljs_demo.t19134.prototype.om$core$IRender$ = true;
volta.cljs_demo.t19134.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"className": "allGreetings"},om.core.build_all.cljs$core$IFn$_invoke$arity$2(volta.cljs_demo.greeting,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
volta.cljs_demo.t19134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19136){var self__ = this;
var _19136__$1 = this;return self__.meta19135;
});
volta.cljs_demo.t19134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19136,meta19135__$1){var self__ = this;
var _19136__$1 = this;return (new volta.cljs_demo.t19134(self__.opts,self__.owner,self__.cursor,self__.all_greetings,meta19135__$1));
});
volta.cljs_demo.__GT_t19134 = (function __GT_t19134(opts__$1,owner__$1,cursor__$1,all_greetings__$1,meta19135){return (new volta.cljs_demo.t19134(opts__$1,owner__$1,cursor__$1,all_greetings__$1,meta19135));
});
}
return (new volta.cljs_demo.t19134(opts,owner,cursor,all_greetings,null));
});
volta.cljs_demo.top_level_widget = (function top_level_widget(app,owner,opts){if(typeof volta.cljs_demo.t19142 !== 'undefined')
{} else
{
/**
* @constructor
*/
volta.cljs_demo.t19142 = (function (opts,owner,app,top_level_widget,meta19143){
this.opts = opts;
this.owner = owner;
this.app = app;
this.top_level_widget = top_level_widget;
this.meta19143 = meta19143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
volta.cljs_demo.t19142.cljs$lang$type = true;
volta.cljs_demo.t19142.cljs$lang$ctorStr = "volta.cljs-demo/t19142";
volta.cljs_demo.t19142.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"volta.cljs-demo/t19142");
});
volta.cljs_demo.t19142.prototype.om$core$IRender$ = true;
volta.cljs_demo.t19142.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__19145 = {"className": "outerBox"};var G__19146 = om.core.build.cljs$core$IFn$_invoke$arity$2(volta.cljs_demo.all_greetings,self__.app);return React.DOM.div(G__19145,G__19146);
});
volta.cljs_demo.t19142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19144){var self__ = this;
var _19144__$1 = this;return self__.meta19143;
});
volta.cljs_demo.t19142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19144,meta19143__$1){var self__ = this;
var _19144__$1 = this;return (new volta.cljs_demo.t19142(self__.opts,self__.owner,self__.app,self__.top_level_widget,meta19143__$1));
});
volta.cljs_demo.__GT_t19142 = (function __GT_t19142(opts__$1,owner__$1,app__$1,top_level_widget__$1,meta19143){return (new volta.cljs_demo.t19142(opts__$1,owner__$1,app__$1,top_level_widget__$1,meta19143));
});
}
return (new volta.cljs_demo.t19142(opts,owner,app,top_level_widget,null));
});
/**
* Initialize the main cljs-demo page
*/
volta.cljs_demo.init = (function init(){console.log("(init) called on cljs-demo page...");
var G__19149_19151 = volta.cljs_demo.$output;var G__19150_19152 = volta.cljs_demo.timed_string();goog.dom.setTextContent(G__19149_19151,G__19150_19152);
return om.core.root(volta.cljs_demo.top_level_widget,volta.cljs_demo.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$95,volta.cljs_demo.APP_ROOT], null));
});
goog.exportSymbol('volta.cljs_demo.init', volta.cljs_demo.init);
