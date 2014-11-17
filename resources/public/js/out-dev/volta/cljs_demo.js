// Compiled by ClojureScript 0.0-2371
goog.provide('volta.cljs_demo');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.dom');
goog.require('goog.dom');
volta.cljs_demo.$output = goog.dom.getElement("cljsOutput");
/**
* A timestamped greeting
*/
volta.cljs_demo.timed_string = (function timed_string(){return ("ClojureScript up and running as of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date())));
});
volta.cljs_demo.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"greetings","greetings",2107426774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"English",new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hello World!"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"French",new cljs.core.Keyword(null,"greeting","greeting",462222107),"Bonjour Monde!"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"Spanish",new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hola Mundo!"], null)], null),new cljs.core.Keyword(null,"extra","extra",1612569067),"spam",new cljs.core.Keyword(null,"other","other",995793544),(42)], null));
volta.cljs_demo.APP_ROOT = document.getElementById("omTarget");
volta.cljs_demo.greeting = (function greeting(cursor,owner,opts){if(typeof volta.cljs_demo.t19094 !== 'undefined')
{} else
{
/**
* @constructor
*/
volta.cljs_demo.t19094 = (function (opts,owner,cursor,greeting,meta19095){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.greeting = greeting;
this.meta19095 = meta19095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
volta.cljs_demo.t19094.cljs$lang$type = true;
volta.cljs_demo.t19094.cljs$lang$ctorStr = "volta.cljs-demo/t19094";
volta.cljs_demo.t19094.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"volta.cljs-demo/t19094");
});
volta.cljs_demo.t19094.prototype.om$core$IRender$ = true;
volta.cljs_demo.t19094.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.li({"className": "oneGreeting"},React.DOM.strong({},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(self__.cursor))+": ")),React.DOM.em({},new cljs.core.Keyword(null,"greeting","greeting",462222107).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
volta.cljs_demo.t19094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19096){var self__ = this;
var _19096__$1 = this;return self__.meta19095;
});
volta.cljs_demo.t19094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19096,meta19095__$1){var self__ = this;
var _19096__$1 = this;return (new volta.cljs_demo.t19094(self__.opts,self__.owner,self__.cursor,self__.greeting,meta19095__$1));
});
volta.cljs_demo.__GT_t19094 = (function __GT_t19094(opts__$1,owner__$1,cursor__$1,greeting__$1,meta19095){return (new volta.cljs_demo.t19094(opts__$1,owner__$1,cursor__$1,greeting__$1,meta19095));
});
}
return (new volta.cljs_demo.t19094(opts,owner,cursor,greeting,null));
});
volta.cljs_demo.all_greetings = (function all_greetings(cursor,owner,opts){if(typeof volta.cljs_demo.t19100 !== 'undefined')
{} else
{
/**
* @constructor
*/
volta.cljs_demo.t19100 = (function (opts,owner,cursor,all_greetings,meta19101){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.all_greetings = all_greetings;
this.meta19101 = meta19101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
volta.cljs_demo.t19100.cljs$lang$type = true;
volta.cljs_demo.t19100.cljs$lang$ctorStr = "volta.cljs-demo/t19100";
volta.cljs_demo.t19100.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"volta.cljs-demo/t19100");
});
volta.cljs_demo.t19100.prototype.om$core$IRender$ = true;
volta.cljs_demo.t19100.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "allGreetings"},om.core.build_all.call(null,volta.cljs_demo.greeting,new cljs.core.Keyword(null,"greetings","greetings",2107426774).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});
volta.cljs_demo.t19100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19102){var self__ = this;
var _19102__$1 = this;return self__.meta19101;
});
volta.cljs_demo.t19100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19102,meta19101__$1){var self__ = this;
var _19102__$1 = this;return (new volta.cljs_demo.t19100(self__.opts,self__.owner,self__.cursor,self__.all_greetings,meta19101__$1));
});
volta.cljs_demo.__GT_t19100 = (function __GT_t19100(opts__$1,owner__$1,cursor__$1,all_greetings__$1,meta19101){return (new volta.cljs_demo.t19100(opts__$1,owner__$1,cursor__$1,all_greetings__$1,meta19101));
});
}
return (new volta.cljs_demo.t19100(opts,owner,cursor,all_greetings,null));
});
volta.cljs_demo.top_level_widget = (function top_level_widget(app,owner,opts){if(typeof volta.cljs_demo.t19106 !== 'undefined')
{} else
{
/**
* @constructor
*/
volta.cljs_demo.t19106 = (function (opts,owner,app,top_level_widget,meta19107){
this.opts = opts;
this.owner = owner;
this.app = app;
this.top_level_widget = top_level_widget;
this.meta19107 = meta19107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
volta.cljs_demo.t19106.cljs$lang$type = true;
volta.cljs_demo.t19106.cljs$lang$ctorStr = "volta.cljs-demo/t19106";
volta.cljs_demo.t19106.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"volta.cljs-demo/t19106");
});
volta.cljs_demo.t19106.prototype.om$core$IRender$ = true;
volta.cljs_demo.t19106.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "outerBox"},om.core.build.call(null,volta.cljs_demo.all_greetings,self__.app));
});
volta.cljs_demo.t19106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19108){var self__ = this;
var _19108__$1 = this;return self__.meta19107;
});
volta.cljs_demo.t19106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19108,meta19107__$1){var self__ = this;
var _19108__$1 = this;return (new volta.cljs_demo.t19106(self__.opts,self__.owner,self__.app,self__.top_level_widget,meta19107__$1));
});
volta.cljs_demo.__GT_t19106 = (function __GT_t19106(opts__$1,owner__$1,app__$1,top_level_widget__$1,meta19107){return (new volta.cljs_demo.t19106(opts__$1,owner__$1,app__$1,top_level_widget__$1,meta19107));
});
}
return (new volta.cljs_demo.t19106(opts,owner,app,top_level_widget,null));
});
/**
* Initialize the main cljs-demo page
*/
volta.cljs_demo.init = (function init(){console.log("(init) called on cljs-demo page...");
goog.dom.setTextContent(volta.cljs_demo.$output,volta.cljs_demo.timed_string.call(null));
return om.core.root.call(null,volta.cljs_demo.top_level_widget,volta.cljs_demo.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),volta.cljs_demo.APP_ROOT], null));
});
goog.exportSymbol('volta.cljs_demo.init', volta.cljs_demo.init);
