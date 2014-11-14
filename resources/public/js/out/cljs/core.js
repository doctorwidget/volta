// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2371";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$15,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$16,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$17,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$18,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$19,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11155__delegate = function (args){return console.log.apply(console,(function (){var G__11154 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__11154) : cljs.core.into_array.call(null,G__11154));
})());
};
var G__11155 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11155__delegate.call(this,args);};
G__11155.cljs$lang$maxFixedArity = 0;
G__11155.cljs$lang$applyTo = (function (arglist__11156){
var args = cljs.core.seq(arglist__11156);
return G__11155__delegate(args);
});
G__11155.cljs$core$IFn$_invoke$arity$variadic = G__11155__delegate;
return G__11155;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__11158 = x;return goog.isString(G__11158);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__11160 = x__$1;return goog.typeOf(G__11160);
})()]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__3628__auto__ = ty;if(cljs.core.truth_(and__3628__auto__))
{return ty.cljs$lang$type;
} else
{return and__3628__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__11162 = obj;return goog.typeOf(G__11162);
})());return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4124__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4124__auto__))
{var s = temp__4124__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4510__auto___11164 = len;var i_11165 = (0);while(true){
if((i_11165 < n__4510__auto___11164))
{(new_arr[i_11165] = (arr[i_11165]));
{
var G__11166 = (i_11165 + (1));
i_11165 = G__11166;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__11175__delegate = function (array,i,idxs){var G__11172 = aget;var G__11173 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__11174 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__11172,G__11173,G__11174) : cljs.core.apply.call(null,G__11172,G__11173,G__11174));
};
var G__11175 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11175__delegate.call(this,array,i,idxs);};
G__11175.cljs$lang$maxFixedArity = 2;
G__11175.cljs$lang$applyTo = (function (arglist__11176){
var array = cljs.core.first(arglist__11176);
arglist__11176 = cljs.core.next(arglist__11176);
var i = cljs.core.first(arglist__11176);
var idxs = cljs.core.rest(arglist__11176);
return G__11175__delegate(array,i,idxs);
});
G__11175.cljs$core$IFn$_invoke$arity$variadic = G__11175__delegate;
return G__11175;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__11185__delegate = function (array,idx,idx2,idxv){var G__11181 = aset;var G__11182 = (array[idx]);var G__11183 = idx2;var G__11184 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__11181,G__11182,G__11183,G__11184) : cljs.core.apply.call(null,G__11181,G__11182,G__11183,G__11184));
};
var G__11185 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__11185__delegate.call(this,array,idx,idx2,idxv);};
G__11185.cljs$lang$maxFixedArity = 3;
G__11185.cljs$lang$applyTo = (function (arglist__11186){
var array = cljs.core.first(arglist__11186);
arglist__11186 = cljs.core.next(arglist__11186);
var idx = cljs.core.first(arglist__11186);
arglist__11186 = cljs.core.next(arglist__11186);
var idx2 = cljs.core.first(arglist__11186);
var idxv = cljs.core.rest(arglist__11186);
return G__11185__delegate(array,idx,idx2,idxv);
});
G__11185.cljs$core$IFn$_invoke$arity$variadic = G__11185__delegate;
return G__11185;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){var G__11192 = (function (a,x){a.push(x);
return a;
});var G__11193 = [];var G__11194 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__11192,G__11193,G__11194) : cljs.core.reduce.call(null,G__11192,G__11193,G__11194));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj11196 = {};return obj11196;
})();
cljs.core.IFn = (function (){var obj11198 = {};return obj11198;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11244 = x__4277__auto__;return goog.typeOf(G__11244);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11246 = x__4277__auto__;return goog.typeOf(G__11246);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11248 = x__4277__auto__;return goog.typeOf(G__11248);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11250 = x__4277__auto__;return goog.typeOf(G__11250);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11252 = x__4277__auto__;return goog.typeOf(G__11252);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11254 = x__4277__auto__;return goog.typeOf(G__11254);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11256 = x__4277__auto__;return goog.typeOf(G__11256);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11258 = x__4277__auto__;return goog.typeOf(G__11258);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11260 = x__4277__auto__;return goog.typeOf(G__11260);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11262 = x__4277__auto__;return goog.typeOf(G__11262);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11264 = x__4277__auto__;return goog.typeOf(G__11264);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11266 = x__4277__auto__;return goog.typeOf(G__11266);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11268 = x__4277__auto__;return goog.typeOf(G__11268);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11270 = x__4277__auto__;return goog.typeOf(G__11270);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11272 = x__4277__auto__;return goog.typeOf(G__11272);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11274 = x__4277__auto__;return goog.typeOf(G__11274);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11276 = x__4277__auto__;return goog.typeOf(G__11276);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11278 = x__4277__auto__;return goog.typeOf(G__11278);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11280 = x__4277__auto__;return goog.typeOf(G__11280);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11282 = x__4277__auto__;return goog.typeOf(G__11282);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11284 = x__4277__auto__;return goog.typeOf(G__11284);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._invoke[(function (){var G__11286 = x__4277__auto__;return goog.typeOf(G__11286);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._invoke["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj11288 = {};return obj11288;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__3628__auto__ = value;if(and__3628__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__3628__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4277__auto__ = (((value == null))?null:value);return (function (){var or__3640__auto__ = (cljs.core._clone[(function (){var G__11292 = x__4277__auto__;return goog.typeOf(G__11292);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._clone["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj11294 = {};return obj11294;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._count[(function (){var G__11298 = x__4277__auto__;return goog.typeOf(G__11298);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._count["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj11300 = {};return obj11300;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._empty[(function (){var G__11304 = x__4277__auto__;return goog.typeOf(G__11304);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._empty["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj11306 = {};return obj11306;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._conj[(function (){var G__11310 = x__4277__auto__;return goog.typeOf(G__11310);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._conj["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj11312 = {};return obj11312;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._nth[(function (){var G__11318 = x__4277__auto__;return goog.typeOf(G__11318);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._nth["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._nth[(function (){var G__11320 = x__4277__auto__;return goog.typeOf(G__11320);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._nth["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj11322 = {};return obj11322;
})();
cljs.core.ISeq = (function (){var obj11324 = {};return obj11324;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._first[(function (){var G__11328 = x__4277__auto__;return goog.typeOf(G__11328);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._first["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._rest[(function (){var G__11332 = x__4277__auto__;return goog.typeOf(G__11332);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._rest["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj11334 = {};return obj11334;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._next[(function (){var G__11338 = x__4277__auto__;return goog.typeOf(G__11338);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._next["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj11340 = {};return obj11340;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._lookup[(function (){var G__11346 = x__4277__auto__;return goog.typeOf(G__11346);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._lookup["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._lookup[(function (){var G__11348 = x__4277__auto__;return goog.typeOf(G__11348);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._lookup["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj11350 = {};return obj11350;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__11354 = x__4277__auto__;return goog.typeOf(G__11354);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._assoc[(function (){var G__11358 = x__4277__auto__;return goog.typeOf(G__11358);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._assoc["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj11360 = {};return obj11360;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._dissoc[(function (){var G__11364 = x__4277__auto__;return goog.typeOf(G__11364);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._dissoc["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj11366 = {};return obj11366;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._key[(function (){var G__11370 = x__4277__auto__;return goog.typeOf(G__11370);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._key["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._val[(function (){var G__11374 = x__4277__auto__;return goog.typeOf(G__11374);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._val["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj11376 = {};return obj11376;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._disjoin[(function (){var G__11380 = x__4277__auto__;return goog.typeOf(G__11380);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._disjoin["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj11382 = {};return obj11382;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._peek[(function (){var G__11386 = x__4277__auto__;return goog.typeOf(G__11386);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._peek["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._pop[(function (){var G__11390 = x__4277__auto__;return goog.typeOf(G__11390);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._pop["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj11392 = {};return obj11392;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._assoc_n[(function (){var G__11396 = x__4277__auto__;return goog.typeOf(G__11396);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj11398 = {};return obj11398;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._deref[(function (){var G__11402 = x__4277__auto__;return goog.typeOf(G__11402);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._deref["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj11404 = {};return obj11404;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._deref_with_timeout[(function (){var G__11408 = x__4277__auto__;return goog.typeOf(G__11408);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj11410 = {};return obj11410;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._meta[(function (){var G__11414 = x__4277__auto__;return goog.typeOf(G__11414);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._meta["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj11416 = {};return obj11416;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._with_meta[(function (){var G__11420 = x__4277__auto__;return goog.typeOf(G__11420);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._with_meta["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj11422 = {};return obj11422;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._reduce[(function (){var G__11428 = x__4277__auto__;return goog.typeOf(G__11428);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._reduce["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._reduce[(function (){var G__11430 = x__4277__auto__;return goog.typeOf(G__11430);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._reduce["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj11432 = {};return obj11432;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._kv_reduce[(function (){var G__11436 = x__4277__auto__;return goog.typeOf(G__11436);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj11438 = {};return obj11438;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._equiv[(function (){var G__11442 = x__4277__auto__;return goog.typeOf(G__11442);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._equiv["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj11444 = {};return obj11444;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._hash[(function (){var G__11448 = x__4277__auto__;return goog.typeOf(G__11448);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._hash["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj11450 = {};return obj11450;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._seq[(function (){var G__11454 = x__4277__auto__;return goog.typeOf(G__11454);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._seq["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj11456 = {};return obj11456;
})();
cljs.core.IList = (function (){var obj11458 = {};return obj11458;
})();
cljs.core.IRecord = (function (){var obj11460 = {};return obj11460;
})();
cljs.core.IReversible = (function (){var obj11462 = {};return obj11462;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._rseq[(function (){var G__11466 = x__4277__auto__;return goog.typeOf(G__11466);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._rseq["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj11468 = {};return obj11468;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._sorted_seq[(function (){var G__11472 = x__4277__auto__;return goog.typeOf(G__11472);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._sorted_seq_from[(function (){var G__11476 = x__4277__auto__;return goog.typeOf(G__11476);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._entry_key[(function (){var G__11480 = x__4277__auto__;return goog.typeOf(G__11480);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._entry_key["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._comparator[(function (){var G__11484 = x__4277__auto__;return goog.typeOf(G__11484);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._comparator["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj11486 = {};return obj11486;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3628__auto__ = writer;if(and__3628__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3628__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4277__auto__ = (((writer == null))?null:writer);return (function (){var or__3640__auto__ = (cljs.core._write[(function (){var G__11490 = x__4277__auto__;return goog.typeOf(G__11490);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._write["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3628__auto__ = writer;if(and__3628__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3628__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4277__auto__ = (((writer == null))?null:writer);return (function (){var or__3640__auto__ = (cljs.core._flush[(function (){var G__11494 = x__4277__auto__;return goog.typeOf(G__11494);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._flush["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj11496 = {};return obj11496;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._pr_writer[(function (){var G__11500 = x__4277__auto__;return goog.typeOf(G__11500);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj11502 = {};return obj11502;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3628__auto__ = d;if(and__3628__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4277__auto__ = (((d == null))?null:d);return (function (){var or__3640__auto__ = (cljs.core._realized_QMARK_[(function (){var G__11506 = x__4277__auto__;return goog.typeOf(G__11506);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj11508 = {};return obj11508;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._notify_watches[(function (){var G__11512 = x__4277__auto__;return goog.typeOf(G__11512);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._add_watch[(function (){var G__11516 = x__4277__auto__;return goog.typeOf(G__11516);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._add_watch["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (cljs.core._remove_watch[(function (){var G__11520 = x__4277__auto__;return goog.typeOf(G__11520);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj11522 = {};return obj11522;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._as_transient[(function (){var G__11526 = x__4277__auto__;return goog.typeOf(G__11526);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._as_transient["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj11528 = {};return obj11528;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._conj_BANG_[(function (){var G__11532 = x__4277__auto__;return goog.typeOf(G__11532);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._persistent_BANG_[(function (){var G__11536 = x__4277__auto__;return goog.typeOf(G__11536);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj11538 = {};return obj11538;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._assoc_BANG_[(function (){var G__11542 = x__4277__auto__;return goog.typeOf(G__11542);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj11544 = {};return obj11544;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__11548 = x__4277__auto__;return goog.typeOf(G__11548);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj11550 = {};return obj11550;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__11554 = x__4277__auto__;return goog.typeOf(G__11554);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._pop_BANG_[(function (){var G__11558 = x__4277__auto__;return goog.typeOf(G__11558);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj11560 = {};return obj11560;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3628__auto__ = tcoll;if(and__3628__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4277__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3640__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__11564 = x__4277__auto__;return goog.typeOf(G__11564);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj11566 = {};return obj11566;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3628__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (cljs.core._compare[(function (){var G__11570 = x__4277__auto__;return goog.typeOf(G__11570);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._compare["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj11572 = {};return obj11572;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._drop_first[(function (){var G__11576 = x__4277__auto__;return goog.typeOf(G__11576);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._drop_first["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj11578 = {};return obj11578;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._chunked_first[(function (){var G__11582 = x__4277__auto__;return goog.typeOf(G__11582);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._chunked_rest[(function (){var G__11586 = x__4277__auto__;return goog.typeOf(G__11586);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj11588 = {};return obj11588;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._chunked_next[(function (){var G__11592 = x__4277__auto__;return goog.typeOf(G__11592);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj11594 = {};return obj11594;
})();
cljs.core._name = (function _name(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (cljs.core._name[(function (){var G__11598 = x__4277__auto__;return goog.typeOf(G__11598);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._name["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (cljs.core._namespace[(function (){var G__11602 = x__4277__auto__;return goog.typeOf(G__11602);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._namespace["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj11604 = {};return obj11604;
})();
cljs.core.IReset = (function (){var obj11606 = {};return obj11606;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._reset_BANG_[(function (){var G__11610 = x__4277__auto__;return goog.typeOf(G__11610);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj11612 = {};return obj11612;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._swap_BANG_[(function (){var G__11622 = x__4277__auto__;return goog.typeOf(G__11622);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._swap_BANG_[(function (){var G__11624 = x__4277__auto__;return goog.typeOf(G__11624);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._swap_BANG_[(function (){var G__11626 = x__4277__auto__;return goog.typeOf(G__11626);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__3628__auto__ = o;if(and__3628__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__3628__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__4277__auto__ = (((o == null))?null:o);return (function (){var or__3640__auto__ = (cljs.core._swap_BANG_[(function (){var G__11628 = x__4277__auto__;return goog.typeOf(G__11628);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;
cljs.core.IIterable = (function (){var obj11630 = {};return obj11630;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__3628__auto__ = coll;if(and__3628__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__3628__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__4277__auto__ = (((coll == null))?null:coll);return (function (){var or__3640__auto__ = (cljs.core._iterator[(function (){var G__11634 = x__4277__auto__;return goog.typeOf(G__11634);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._iterator["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());
writer.cljs$core$IWriter$_flush$arity$1(null);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__11637 = (4294967295);var G__11638 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__11637,G__11638) : Math.imul.call(null,G__11637,G__11638));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__11641 = a;var G__11642 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__11641,G__11642) : Math.imul.call(null,G__11641,G__11642));
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul(h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul(h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1(in$);var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__11643 = (i + (2));
var G__11644 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__11643;
h1 = G__11644;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj11646 = {};return obj11646;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__11647 = (i + (1));
var G__11648 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__11647;
hash = G__11648;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj11652 = {};return obj11652;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__11655 = o;if(G__11655)
{var bit__4297__auto__ = (G__11655.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__4297__auto__) || (G__11655.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(null);
} else
{if(typeof o === 'number')
{return ((function (){var G__11656 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__11656) : Math.floor.call(null,G__11656));
})() % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else
{if((o == null))
{return (0);
} else
{return cljs.core._hash(o);

}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__11665 = a;var G__11666 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__11665,G__11666) : cljs.core._EQ_.call(null,G__11665,G__11666));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not(a.ns);if(and__3628__auto__)
{return b.ns;
} else
{return and__3628__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__11667 = a.ns;var G__11668 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__11667,G__11668) : cljs.core.compare.call(null,G__11667,G__11668));
})();if((nsc === (0)))
{var G__11669 = a.name;var G__11670 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__11669,G__11670) : cljs.core.compare.call(null,G__11669,G__11670));
} else
{return nsc;
}
}
} else
{var G__11671 = a.name;var G__11672 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__11671,G__11672) : cljs.core.compare.call(null,G__11671,G__11672));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__4051__auto__ = self__._hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__11674 = null;
var G__11674__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__11674__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__11674 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__11674__2.call(this,self__,coll);
case 3:
return G__11674__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11674.cljs$core$IFn$_invoke$arity$2 = G__11674__2;
G__11674.cljs$core$IFn$_invoke$arity$3 = G__11674__3;
return G__11674;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args11673){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11673)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.Symbol.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__11678 = x;if(G__11678)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__11678.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__11678.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__11678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__11678);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__11680 = value;if(G__11680)
{var bit__4304__auto__ = (G__11680.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4304__auto__) || (G__11680.cljs$core$ICloneable$))
{return true;
} else
{if((!G__11680.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11680);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__11682 = coll;if(G__11682)
{var bit__4297__auto__ = (G__11682.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4297__auto__) || (G__11682.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll))
{return cljs.core._seq(coll);
} else
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__11684 = coll;if(G__11684)
{var bit__4297__auto__ = (G__11684.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4297__auto__) || (G__11684.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(null);
} else
{var s = cljs.core.seq(coll);if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__11686 = coll;if(G__11686)
{var bit__4297__auto__ = (G__11686.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4297__auto__) || (G__11686.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(null);
} else
{var s = cljs.core.seq(coll);if(s)
{return cljs.core._rest(s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__11688 = coll;if(G__11688)
{var bit__4297__auto__ = (G__11688.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4297__auto__) || (G__11688.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$INext$_next$arity$1(null);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__11693__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__11694 = y;
var G__11695 = cljs.core.first(more);
var G__11696 = cljs.core.next(more);
x = G__11694;
y = G__11695;
more = G__11696;
continue;
}
} else
{return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__11693 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11693__delegate.call(this,x,y,more);};
G__11693.cljs$lang$maxFixedArity = 2;
G__11693.cljs$lang$applyTo = (function (arglist__11697){
var x = cljs.core.first(arglist__11697);
arglist__11697 = cljs.core.next(arglist__11697);
var y = cljs.core.first(arglist__11697);
var more = cljs.core.rest(arglist__11697);
return G__11693__delegate(x,y,more);
});
G__11693.cljs$core$IFn$_invoke$arity$variadic = G__11693__delegate;
return G__11693;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1(hash_basis);var h1__$1 = cljs.core.m3_mix_H1(h1,k1);return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__11698 = (n + (1));
var G__11699 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__11700 = cljs.core.next(coll__$1);
n = G__11698;
hash_code = G__11699;
coll__$1 = G__11700;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__11701 = (n + (1));
var G__11702 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__11703 = cljs.core.next(coll__$1);
n = G__11701;
hash_code = G__11702;
coll__$1 = G__11703;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){var G__11704 = o;return goog.getUid(G__11704);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
cljs.core.deref = (function deref(o){return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count(cicoll);if((cnt === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__11711 = val;var G__11712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11711,G__11712) : f.call(null,G__11711,G__11712));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__11717 = nval;
var G__11718 = (n + (1));
val = G__11717;
n = G__11718;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__11713 = val__$1;var G__11714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11713,G__11714) : f.call(null,G__11713,G__11714));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__11719 = nval;
var G__11720 = (n + (1));
val__$1 = G__11719;
n = G__11720;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__11715 = val__$1;var G__11716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11715,G__11716) : f.call(null,G__11715,G__11716));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__11721 = nval;
var G__11722 = (n + (1));
val__$1 = G__11721;
n = G__11722;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__11729 = val;var G__11730 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11729,G__11730) : f.call(null,G__11729,G__11730));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__11735 = nval;
var G__11736 = (n + (1));
val = G__11735;
n = G__11736;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__11731 = val__$1;var G__11732 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11731,G__11732) : f.call(null,G__11731,G__11732));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__11737 = nval;
var G__11738 = (n + (1));
val__$1 = G__11737;
n = G__11738;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__11733 = val__$1;var G__11734 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11733,G__11734) : f.call(null,G__11733,G__11734));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__11739 = nval;
var G__11740 = (n + (1));
val__$1 = G__11739;
n = G__11740;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__11742 = x;if(G__11742)
{var bit__4304__auto__ = (G__11742.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4304__auto__) || (G__11742.cljs$core$ICounted$))
{return true;
} else
{if((!G__11742.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__11742);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__11742);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__11744 = x;if(G__11744)
{var bit__4304__auto__ = (G__11744.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4304__auto__) || (G__11744.cljs$core$IIndexed$))
{return true;
} else
{if((!G__11744.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__11744);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__11744);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.cljs$lang$type = true;
cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/IndexedSeqIterator");
});
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.IndexedSeqIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){return (new cljs.core.IndexedSeqIterator(arr,i));
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.IndexedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count(coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__11745 = coll__$1;var G__11746 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__11745,G__11746) : cljs.core.equiv_sequential.call(null,G__11745,G__11746));
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__11747 = o;var G__11748 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11747,G__11748) : cljs.core.cons.call(null,G__11747,G__11748));
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.RSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__11751 = coll__$1;var G__11752 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__11751,G__11752) : cljs.core.equiv_sequential.call(null,G__11751,G__11752));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__11753 = cljs.core.List.EMPTY;var G__11754 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__11753,G__11754) : cljs.core.with_meta.call(null,G__11753,G__11754));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__11755 = f;var G__11756 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__11755,G__11756) : cljs.core.seq_reduce.call(null,G__11755,G__11756));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__11757 = f;var G__11758 = start;var G__11759 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__11757,G__11758,G__11759) : cljs.core.seq_reduce.call(null,G__11757,G__11758,G__11759));
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__11760 = o;var G__11761 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__11760,G__11761) : cljs.core.cons.call(null,G__11760,G__11761));
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next(s);if(!((sn == null)))
{{
var G__11762 = sn;
s = G__11762;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){return coll;
});
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj(coll,x);
} else
{return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__11767__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__11768 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__11769 = cljs.core.first(xs);
var G__11770 = cljs.core.next(xs);
coll = G__11768;
x = G__11769;
xs = G__11770;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__11767 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11767__delegate.call(this,coll,x,xs);};
G__11767.cljs$lang$maxFixedArity = 2;
G__11767.cljs$lang$applyTo = (function (arglist__11771){
var coll = cljs.core.first(arglist__11771);
arglist__11771 = cljs.core.next(arglist__11771);
var x = cljs.core.first(arglist__11771);
var xs = cljs.core.rest(arglist__11771);
return G__11767__delegate(coll,x,xs);
});
G__11767.cljs$core$IFn$_invoke$arity$variadic = G__11767__delegate;
return G__11767;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq(coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__11772 = cljs.core.next(s);
var G__11773 = (acc + (1));
s = G__11772;
acc = G__11773;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__11775 = coll;if(G__11775)
{var bit__4297__auto__ = (G__11775.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4297__auto__) || (G__11775.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(null);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__11776 = cljs.core.next(coll);
var G__11777 = (n - (1));
coll = G__11776;
n = G__11777;
continue;
}
} else
{throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__11778 = cljs.core.next(coll);
var G__11779 = (n - (1));
var G__11780 = not_found;
coll = G__11778;
n = G__11779;
not_found = G__11780;
continue;
}
} else
{return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__11785 = coll;if(G__11785)
{var bit__4297__auto__ = (G__11785.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4297__auto__) || (G__11785.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__11786 = coll;if(G__11786)
{var bit__4304__auto__ = (G__11786.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4304__auto__) || (G__11786.cljs$core$ISeq$))
{return true;
} else
{if((!G__11786.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11786);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11786);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__11787 = coll;if(G__11787)
{var bit__4297__auto__ = (G__11787.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4297__auto__) || (G__11787.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__11788 = coll;if(G__11788)
{var bit__4304__auto__ = (G__11788.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4304__auto__) || (G__11788.cljs$core$ISeq$))
{return true;
} else
{if((!G__11788.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11788);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__11788);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__11791 = o;if(G__11791)
{var bit__4297__auto__ = (G__11791.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4297__auto__) || (G__11791.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else
{return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__11792 = o;if(G__11792)
{var bit__4297__auto__ = (G__11792.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4297__auto__) || (G__11792.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else
{return not_found;

}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc(coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__11796__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__11797 = ret;
var G__11798 = cljs.core.first(kvs);
var G__11799 = cljs.core.second(kvs);
var G__11800 = cljs.core.nnext(kvs);
coll = G__11797;
k = G__11798;
v = G__11799;
kvs = G__11800;
continue;
}
} else
{return ret;
}
break;
}
};
var G__11796 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__11796__delegate.call(this,coll,k,v,kvs);};
G__11796.cljs$lang$maxFixedArity = 3;
G__11796.cljs$lang$applyTo = (function (arglist__11801){
var coll = cljs.core.first(arglist__11801);
arglist__11801 = cljs.core.next(arglist__11801);
var k = cljs.core.first(arglist__11801);
arglist__11801 = cljs.core.next(arglist__11801);
var v = cljs.core.first(arglist__11801);
var kvs = cljs.core.rest(arglist__11801);
return G__11796__delegate(coll,k,v,kvs);
});
G__11796.cljs$core$IFn$_invoke$arity$variadic = G__11796__delegate;
return G__11796;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__11804__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__11805 = ret;
var G__11806 = cljs.core.first(ks);
var G__11807 = cljs.core.next(ks);
coll = G__11805;
k = G__11806;
ks = G__11807;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__11804 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11804__delegate.call(this,coll,k,ks);};
G__11804.cljs$lang$maxFixedArity = 2;
G__11804.cljs$lang$applyTo = (function (arglist__11808){
var coll = cljs.core.first(arglist__11808);
arglist__11808 = cljs.core.next(arglist__11808);
var k = cljs.core.first(arglist__11808);
var ks = cljs.core.rest(arglist__11808);
return G__11804__delegate(coll,k,ks);
});
G__11804.cljs$core$IFn$_invoke$arity$variadic = G__11804__delegate;
return G__11804;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3640__auto__ = (function (){var G__11813 = f;return goog.isFunction(G__11813);
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var G__11814 = f;if(G__11814)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto____$1 = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{return G__11814.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__11814.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11814);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__11814);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__12280 = null;
var G__12280__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__12280__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11816 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__11816) : self__.afn.call(null,G__11816));
});
var G__12280__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11817 = a;var G__11818 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__11817,G__11818) : self__.afn.call(null,G__11817,G__11818));
});
var G__12280__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11819 = a;var G__11820 = b;var G__11821 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__11819,G__11820,G__11821) : self__.afn.call(null,G__11819,G__11820,G__11821));
});
var G__12280__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11822 = a;var G__11823 = b;var G__11824 = c;var G__11825 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__11822,G__11823,G__11824,G__11825) : self__.afn.call(null,G__11822,G__11823,G__11824,G__11825));
});
var G__12280__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11826 = a;var G__11827 = b;var G__11828 = c;var G__11829 = d;var G__11830 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__11826,G__11827,G__11828,G__11829,G__11830) : self__.afn.call(null,G__11826,G__11827,G__11828,G__11829,G__11830));
});
var G__12280__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11831 = a;var G__11832 = b;var G__11833 = c;var G__11834 = d;var G__11835 = e;var G__11836 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__11831,G__11832,G__11833,G__11834,G__11835,G__11836) : self__.afn.call(null,G__11831,G__11832,G__11833,G__11834,G__11835,G__11836));
});
var G__12280__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11837 = a;var G__11838 = b;var G__11839 = c;var G__11840 = d;var G__11841 = e;var G__11842 = f;var G__11843 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__11837,G__11838,G__11839,G__11840,G__11841,G__11842,G__11843) : self__.afn.call(null,G__11837,G__11838,G__11839,G__11840,G__11841,G__11842,G__11843));
});
var G__12280__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11844 = a;var G__11845 = b;var G__11846 = c;var G__11847 = d;var G__11848 = e;var G__11849 = f;var G__11850 = g;var G__11851 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__11844,G__11845,G__11846,G__11847,G__11848,G__11849,G__11850,G__11851) : self__.afn.call(null,G__11844,G__11845,G__11846,G__11847,G__11848,G__11849,G__11850,G__11851));
});
var G__12280__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11852 = a;var G__11853 = b;var G__11854 = c;var G__11855 = d;var G__11856 = e;var G__11857 = f;var G__11858 = g;var G__11859 = h;var G__11860 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__11852,G__11853,G__11854,G__11855,G__11856,G__11857,G__11858,G__11859,G__11860) : self__.afn.call(null,G__11852,G__11853,G__11854,G__11855,G__11856,G__11857,G__11858,G__11859,G__11860));
});
var G__12280__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11861 = a;var G__11862 = b;var G__11863 = c;var G__11864 = d;var G__11865 = e;var G__11866 = f;var G__11867 = g;var G__11868 = h;var G__11869 = i;var G__11870 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__11861,G__11862,G__11863,G__11864,G__11865,G__11866,G__11867,G__11868,G__11869,G__11870) : self__.afn.call(null,G__11861,G__11862,G__11863,G__11864,G__11865,G__11866,G__11867,G__11868,G__11869,G__11870));
});
var G__12280__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11871 = a;var G__11872 = b;var G__11873 = c;var G__11874 = d;var G__11875 = e;var G__11876 = f;var G__11877 = g;var G__11878 = h;var G__11879 = i;var G__11880 = j;var G__11881 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__11871,G__11872,G__11873,G__11874,G__11875,G__11876,G__11877,G__11878,G__11879,G__11880,G__11881) : self__.afn.call(null,G__11871,G__11872,G__11873,G__11874,G__11875,G__11876,G__11877,G__11878,G__11879,G__11880,G__11881));
});
var G__12280__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11882 = a;var G__11883 = b;var G__11884 = c;var G__11885 = d;var G__11886 = e;var G__11887 = f;var G__11888 = g;var G__11889 = h;var G__11890 = i;var G__11891 = j;var G__11892 = k;var G__11893 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__11882,G__11883,G__11884,G__11885,G__11886,G__11887,G__11888,G__11889,G__11890,G__11891,G__11892,G__11893) : self__.afn.call(null,G__11882,G__11883,G__11884,G__11885,G__11886,G__11887,G__11888,G__11889,G__11890,G__11891,G__11892,G__11893));
});
var G__12280__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11894 = a;var G__11895 = b;var G__11896 = c;var G__11897 = d;var G__11898 = e;var G__11899 = f;var G__11900 = g;var G__11901 = h;var G__11902 = i;var G__11903 = j;var G__11904 = k;var G__11905 = l;var G__11906 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__11894,G__11895,G__11896,G__11897,G__11898,G__11899,G__11900,G__11901,G__11902,G__11903,G__11904,G__11905,G__11906) : self__.afn.call(null,G__11894,G__11895,G__11896,G__11897,G__11898,G__11899,G__11900,G__11901,G__11902,G__11903,G__11904,G__11905,G__11906));
});
var G__12280__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11907 = a;var G__11908 = b;var G__11909 = c;var G__11910 = d;var G__11911 = e;var G__11912 = f;var G__11913 = g;var G__11914 = h;var G__11915 = i;var G__11916 = j;var G__11917 = k;var G__11918 = l;var G__11919 = m;var G__11920 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__11907,G__11908,G__11909,G__11910,G__11911,G__11912,G__11913,G__11914,G__11915,G__11916,G__11917,G__11918,G__11919,G__11920) : self__.afn.call(null,G__11907,G__11908,G__11909,G__11910,G__11911,G__11912,G__11913,G__11914,G__11915,G__11916,G__11917,G__11918,G__11919,G__11920));
});
var G__12280__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11921 = a;var G__11922 = b;var G__11923 = c;var G__11924 = d;var G__11925 = e;var G__11926 = f;var G__11927 = g;var G__11928 = h;var G__11929 = i;var G__11930 = j;var G__11931 = k;var G__11932 = l;var G__11933 = m;var G__11934 = n;var G__11935 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__11921,G__11922,G__11923,G__11924,G__11925,G__11926,G__11927,G__11928,G__11929,G__11930,G__11931,G__11932,G__11933,G__11934,G__11935) : self__.afn.call(null,G__11921,G__11922,G__11923,G__11924,G__11925,G__11926,G__11927,G__11928,G__11929,G__11930,G__11931,G__11932,G__11933,G__11934,G__11935));
});
var G__12280__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11936 = a;var G__11937 = b;var G__11938 = c;var G__11939 = d;var G__11940 = e;var G__11941 = f;var G__11942 = g;var G__11943 = h;var G__11944 = i;var G__11945 = j;var G__11946 = k;var G__11947 = l;var G__11948 = m;var G__11949 = n;var G__11950 = o;var G__11951 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__11936,G__11937,G__11938,G__11939,G__11940,G__11941,G__11942,G__11943,G__11944,G__11945,G__11946,G__11947,G__11948,G__11949,G__11950,G__11951) : self__.afn.call(null,G__11936,G__11937,G__11938,G__11939,G__11940,G__11941,G__11942,G__11943,G__11944,G__11945,G__11946,G__11947,G__11948,G__11949,G__11950,G__11951));
});
var G__12280__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11952 = a;var G__11953 = b;var G__11954 = c;var G__11955 = d;var G__11956 = e;var G__11957 = f;var G__11958 = g;var G__11959 = h;var G__11960 = i;var G__11961 = j;var G__11962 = k;var G__11963 = l;var G__11964 = m;var G__11965 = n;var G__11966 = o;var G__11967 = p;var G__11968 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__11952,G__11953,G__11954,G__11955,G__11956,G__11957,G__11958,G__11959,G__11960,G__11961,G__11962,G__11963,G__11964,G__11965,G__11966,G__11967,G__11968) : self__.afn.call(null,G__11952,G__11953,G__11954,G__11955,G__11956,G__11957,G__11958,G__11959,G__11960,G__11961,G__11962,G__11963,G__11964,G__11965,G__11966,G__11967,G__11968));
});
var G__12280__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11969 = a;var G__11970 = b;var G__11971 = c;var G__11972 = d;var G__11973 = e;var G__11974 = f;var G__11975 = g;var G__11976 = h;var G__11977 = i;var G__11978 = j;var G__11979 = k;var G__11980 = l;var G__11981 = m;var G__11982 = n;var G__11983 = o;var G__11984 = p;var G__11985 = q;var G__11986 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__11969,G__11970,G__11971,G__11972,G__11973,G__11974,G__11975,G__11976,G__11977,G__11978,G__11979,G__11980,G__11981,G__11982,G__11983,G__11984,G__11985,G__11986) : self__.afn.call(null,G__11969,G__11970,G__11971,G__11972,G__11973,G__11974,G__11975,G__11976,G__11977,G__11978,G__11979,G__11980,G__11981,G__11982,G__11983,G__11984,G__11985,G__11986));
});
var G__12280__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__11987 = a;var G__11988 = b;var G__11989 = c;var G__11990 = d;var G__11991 = e;var G__11992 = f;var G__11993 = g;var G__11994 = h;var G__11995 = i;var G__11996 = j;var G__11997 = k;var G__11998 = l;var G__11999 = m;var G__12000 = n;var G__12001 = o;var G__12002 = p;var G__12003 = q;var G__12004 = r;var G__12005 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__11987,G__11988,G__11989,G__11990,G__11991,G__11992,G__11993,G__11994,G__11995,G__11996,G__11997,G__11998,G__11999,G__12000,G__12001,G__12002,G__12003,G__12004,G__12005) : self__.afn.call(null,G__11987,G__11988,G__11989,G__11990,G__11991,G__11992,G__11993,G__11994,G__11995,G__11996,G__11997,G__11998,G__11999,G__12000,G__12001,G__12002,G__12003,G__12004,G__12005));
});
var G__12280__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12006 = a;var G__12007 = b;var G__12008 = c;var G__12009 = d;var G__12010 = e;var G__12011 = f;var G__12012 = g;var G__12013 = h;var G__12014 = i;var G__12015 = j;var G__12016 = k;var G__12017 = l;var G__12018 = m;var G__12019 = n;var G__12020 = o;var G__12021 = p;var G__12022 = q;var G__12023 = r;var G__12024 = s;var G__12025 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__12006,G__12007,G__12008,G__12009,G__12010,G__12011,G__12012,G__12013,G__12014,G__12015,G__12016,G__12017,G__12018,G__12019,G__12020,G__12021,G__12022,G__12023,G__12024,G__12025) : self__.afn.call(null,G__12006,G__12007,G__12008,G__12009,G__12010,G__12011,G__12012,G__12013,G__12014,G__12015,G__12016,G__12017,G__12018,G__12019,G__12020,G__12021,G__12022,G__12023,G__12024,G__12025));
});
var G__12280__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__12026 = self__.afn;var G__12027 = a;var G__12028 = b;var G__12029 = c;var G__12030 = d;var G__12031 = e;var G__12032 = f;var G__12033 = g;var G__12034 = h;var G__12035 = i;var G__12036 = j;var G__12037 = k;var G__12038 = l;var G__12039 = m;var G__12040 = n;var G__12041 = o;var G__12042 = p;var G__12043 = q;var G__12044 = r;var G__12045 = s;var G__12046 = t;var G__12047 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__12026,G__12027,G__12028,G__12029,G__12030,G__12031,G__12032,G__12033,G__12034,G__12035,G__12036,G__12037,G__12038,G__12039,G__12040,G__12041,G__12042,G__12043,G__12044,G__12045,G__12046,G__12047) : cljs.core.apply.call(null,G__12026,G__12027,G__12028,G__12029,G__12030,G__12031,G__12032,G__12033,G__12034,G__12035,G__12036,G__12037,G__12038,G__12039,G__12040,G__12041,G__12042,G__12043,G__12044,G__12045,G__12046,G__12047));
});
G__12280 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__12280__1.call(this,self__);
case 2:
return G__12280__2.call(this,self__,a);
case 3:
return G__12280__3.call(this,self__,a,b);
case 4:
return G__12280__4.call(this,self__,a,b,c);
case 5:
return G__12280__5.call(this,self__,a,b,c,d);
case 6:
return G__12280__6.call(this,self__,a,b,c,d,e);
case 7:
return G__12280__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__12280__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__12280__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__12280__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__12280__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__12280__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__12280__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__12280__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__12280__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__12280__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__12280__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__12280__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__12280__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__12280__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__12280__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__12280__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12280.cljs$core$IFn$_invoke$arity$1 = G__12280__1;
G__12280.cljs$core$IFn$_invoke$arity$2 = G__12280__2;
G__12280.cljs$core$IFn$_invoke$arity$3 = G__12280__3;
G__12280.cljs$core$IFn$_invoke$arity$4 = G__12280__4;
G__12280.cljs$core$IFn$_invoke$arity$5 = G__12280__5;
G__12280.cljs$core$IFn$_invoke$arity$6 = G__12280__6;
G__12280.cljs$core$IFn$_invoke$arity$7 = G__12280__7;
G__12280.cljs$core$IFn$_invoke$arity$8 = G__12280__8;
G__12280.cljs$core$IFn$_invoke$arity$9 = G__12280__9;
G__12280.cljs$core$IFn$_invoke$arity$10 = G__12280__10;
G__12280.cljs$core$IFn$_invoke$arity$11 = G__12280__11;
G__12280.cljs$core$IFn$_invoke$arity$12 = G__12280__12;
G__12280.cljs$core$IFn$_invoke$arity$13 = G__12280__13;
G__12280.cljs$core$IFn$_invoke$arity$14 = G__12280__14;
G__12280.cljs$core$IFn$_invoke$arity$15 = G__12280__15;
G__12280.cljs$core$IFn$_invoke$arity$16 = G__12280__16;
G__12280.cljs$core$IFn$_invoke$arity$17 = G__12280__17;
G__12280.cljs$core$IFn$_invoke$arity$18 = G__12280__18;
G__12280.cljs$core$IFn$_invoke$arity$19 = G__12280__19;
G__12280.cljs$core$IFn$_invoke$arity$20 = G__12280__20;
G__12280.cljs$core$IFn$_invoke$arity$21 = G__12280__21;
G__12280.cljs$core$IFn$_invoke$arity$22 = G__12280__22;
return G__12280;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args11815){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11815)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__12048 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__12048) : self__.afn.call(null,G__12048));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__12049 = a;var G__12050 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__12049,G__12050) : self__.afn.call(null,G__12049,G__12050));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__12051 = a;var G__12052 = b;var G__12053 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__12051,G__12052,G__12053) : self__.afn.call(null,G__12051,G__12052,G__12053));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__12054 = a;var G__12055 = b;var G__12056 = c;var G__12057 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__12054,G__12055,G__12056,G__12057) : self__.afn.call(null,G__12054,G__12055,G__12056,G__12057));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__12058 = a;var G__12059 = b;var G__12060 = c;var G__12061 = d;var G__12062 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__12058,G__12059,G__12060,G__12061,G__12062) : self__.afn.call(null,G__12058,G__12059,G__12060,G__12061,G__12062));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__12063 = a;var G__12064 = b;var G__12065 = c;var G__12066 = d;var G__12067 = e;var G__12068 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__12063,G__12064,G__12065,G__12066,G__12067,G__12068) : self__.afn.call(null,G__12063,G__12064,G__12065,G__12066,G__12067,G__12068));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__12069 = a;var G__12070 = b;var G__12071 = c;var G__12072 = d;var G__12073 = e;var G__12074 = f;var G__12075 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__12069,G__12070,G__12071,G__12072,G__12073,G__12074,G__12075) : self__.afn.call(null,G__12069,G__12070,G__12071,G__12072,G__12073,G__12074,G__12075));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__12076 = a;var G__12077 = b;var G__12078 = c;var G__12079 = d;var G__12080 = e;var G__12081 = f;var G__12082 = g;var G__12083 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__12076,G__12077,G__12078,G__12079,G__12080,G__12081,G__12082,G__12083) : self__.afn.call(null,G__12076,G__12077,G__12078,G__12079,G__12080,G__12081,G__12082,G__12083));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__12084 = a;var G__12085 = b;var G__12086 = c;var G__12087 = d;var G__12088 = e;var G__12089 = f;var G__12090 = g;var G__12091 = h;var G__12092 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__12084,G__12085,G__12086,G__12087,G__12088,G__12089,G__12090,G__12091,G__12092) : self__.afn.call(null,G__12084,G__12085,G__12086,G__12087,G__12088,G__12089,G__12090,G__12091,G__12092));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__12093 = a;var G__12094 = b;var G__12095 = c;var G__12096 = d;var G__12097 = e;var G__12098 = f;var G__12099 = g;var G__12100 = h;var G__12101 = i;var G__12102 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__12093,G__12094,G__12095,G__12096,G__12097,G__12098,G__12099,G__12100,G__12101,G__12102) : self__.afn.call(null,G__12093,G__12094,G__12095,G__12096,G__12097,G__12098,G__12099,G__12100,G__12101,G__12102));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__12103 = a;var G__12104 = b;var G__12105 = c;var G__12106 = d;var G__12107 = e;var G__12108 = f;var G__12109 = g;var G__12110 = h;var G__12111 = i;var G__12112 = j;var G__12113 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__12103,G__12104,G__12105,G__12106,G__12107,G__12108,G__12109,G__12110,G__12111,G__12112,G__12113) : self__.afn.call(null,G__12103,G__12104,G__12105,G__12106,G__12107,G__12108,G__12109,G__12110,G__12111,G__12112,G__12113));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__12114 = a;var G__12115 = b;var G__12116 = c;var G__12117 = d;var G__12118 = e;var G__12119 = f;var G__12120 = g;var G__12121 = h;var G__12122 = i;var G__12123 = j;var G__12124 = k;var G__12125 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__12114,G__12115,G__12116,G__12117,G__12118,G__12119,G__12120,G__12121,G__12122,G__12123,G__12124,G__12125) : self__.afn.call(null,G__12114,G__12115,G__12116,G__12117,G__12118,G__12119,G__12120,G__12121,G__12122,G__12123,G__12124,G__12125));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__12126 = a;var G__12127 = b;var G__12128 = c;var G__12129 = d;var G__12130 = e;var G__12131 = f;var G__12132 = g;var G__12133 = h;var G__12134 = i;var G__12135 = j;var G__12136 = k;var G__12137 = l;var G__12138 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__12126,G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134,G__12135,G__12136,G__12137,G__12138) : self__.afn.call(null,G__12126,G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134,G__12135,G__12136,G__12137,G__12138));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__12139 = a;var G__12140 = b;var G__12141 = c;var G__12142 = d;var G__12143 = e;var G__12144 = f;var G__12145 = g;var G__12146 = h;var G__12147 = i;var G__12148 = j;var G__12149 = k;var G__12150 = l;var G__12151 = m;var G__12152 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__12139,G__12140,G__12141,G__12142,G__12143,G__12144,G__12145,G__12146,G__12147,G__12148,G__12149,G__12150,G__12151,G__12152) : self__.afn.call(null,G__12139,G__12140,G__12141,G__12142,G__12143,G__12144,G__12145,G__12146,G__12147,G__12148,G__12149,G__12150,G__12151,G__12152));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__12153 = a;var G__12154 = b;var G__12155 = c;var G__12156 = d;var G__12157 = e;var G__12158 = f;var G__12159 = g;var G__12160 = h;var G__12161 = i;var G__12162 = j;var G__12163 = k;var G__12164 = l;var G__12165 = m;var G__12166 = n;var G__12167 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__12153,G__12154,G__12155,G__12156,G__12157,G__12158,G__12159,G__12160,G__12161,G__12162,G__12163,G__12164,G__12165,G__12166,G__12167) : self__.afn.call(null,G__12153,G__12154,G__12155,G__12156,G__12157,G__12158,G__12159,G__12160,G__12161,G__12162,G__12163,G__12164,G__12165,G__12166,G__12167));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__12168 = a;var G__12169 = b;var G__12170 = c;var G__12171 = d;var G__12172 = e;var G__12173 = f;var G__12174 = g;var G__12175 = h;var G__12176 = i;var G__12177 = j;var G__12178 = k;var G__12179 = l;var G__12180 = m;var G__12181 = n;var G__12182 = o;var G__12183 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__12168,G__12169,G__12170,G__12171,G__12172,G__12173,G__12174,G__12175,G__12176,G__12177,G__12178,G__12179,G__12180,G__12181,G__12182,G__12183) : self__.afn.call(null,G__12168,G__12169,G__12170,G__12171,G__12172,G__12173,G__12174,G__12175,G__12176,G__12177,G__12178,G__12179,G__12180,G__12181,G__12182,G__12183));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__12184 = a;var G__12185 = b;var G__12186 = c;var G__12187 = d;var G__12188 = e;var G__12189 = f;var G__12190 = g;var G__12191 = h;var G__12192 = i;var G__12193 = j;var G__12194 = k;var G__12195 = l;var G__12196 = m;var G__12197 = n;var G__12198 = o;var G__12199 = p;var G__12200 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__12184,G__12185,G__12186,G__12187,G__12188,G__12189,G__12190,G__12191,G__12192,G__12193,G__12194,G__12195,G__12196,G__12197,G__12198,G__12199,G__12200) : self__.afn.call(null,G__12184,G__12185,G__12186,G__12187,G__12188,G__12189,G__12190,G__12191,G__12192,G__12193,G__12194,G__12195,G__12196,G__12197,G__12198,G__12199,G__12200));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__12201 = a;var G__12202 = b;var G__12203 = c;var G__12204 = d;var G__12205 = e;var G__12206 = f;var G__12207 = g;var G__12208 = h;var G__12209 = i;var G__12210 = j;var G__12211 = k;var G__12212 = l;var G__12213 = m;var G__12214 = n;var G__12215 = o;var G__12216 = p;var G__12217 = q;var G__12218 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208,G__12209,G__12210,G__12211,G__12212,G__12213,G__12214,G__12215,G__12216,G__12217,G__12218) : self__.afn.call(null,G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208,G__12209,G__12210,G__12211,G__12212,G__12213,G__12214,G__12215,G__12216,G__12217,G__12218));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__12219 = a;var G__12220 = b;var G__12221 = c;var G__12222 = d;var G__12223 = e;var G__12224 = f;var G__12225 = g;var G__12226 = h;var G__12227 = i;var G__12228 = j;var G__12229 = k;var G__12230 = l;var G__12231 = m;var G__12232 = n;var G__12233 = o;var G__12234 = p;var G__12235 = q;var G__12236 = r;var G__12237 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__12219,G__12220,G__12221,G__12222,G__12223,G__12224,G__12225,G__12226,G__12227,G__12228,G__12229,G__12230,G__12231,G__12232,G__12233,G__12234,G__12235,G__12236,G__12237) : self__.afn.call(null,G__12219,G__12220,G__12221,G__12222,G__12223,G__12224,G__12225,G__12226,G__12227,G__12228,G__12229,G__12230,G__12231,G__12232,G__12233,G__12234,G__12235,G__12236,G__12237));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__12238 = a;var G__12239 = b;var G__12240 = c;var G__12241 = d;var G__12242 = e;var G__12243 = f;var G__12244 = g;var G__12245 = h;var G__12246 = i;var G__12247 = j;var G__12248 = k;var G__12249 = l;var G__12250 = m;var G__12251 = n;var G__12252 = o;var G__12253 = p;var G__12254 = q;var G__12255 = r;var G__12256 = s;var G__12257 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__12238,G__12239,G__12240,G__12241,G__12242,G__12243,G__12244,G__12245,G__12246,G__12247,G__12248,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255,G__12256,G__12257) : self__.afn.call(null,G__12238,G__12239,G__12240,G__12241,G__12242,G__12243,G__12244,G__12245,G__12246,G__12247,G__12248,G__12249,G__12250,G__12251,G__12252,G__12253,G__12254,G__12255,G__12256,G__12257));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__12258 = self__.afn;var G__12259 = a;var G__12260 = b;var G__12261 = c;var G__12262 = d;var G__12263 = e;var G__12264 = f;var G__12265 = g;var G__12266 = h;var G__12267 = i;var G__12268 = j;var G__12269 = k;var G__12270 = l;var G__12271 = m;var G__12272 = n;var G__12273 = o;var G__12274 = p;var G__12275 = q;var G__12276 = r;var G__12277 = s;var G__12278 = t;var G__12279 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__12258,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273,G__12274,G__12275,G__12276,G__12277,G__12278,G__12279) : cljs.core.apply.call(null,G__12258,G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273,G__12274,G__12275,G__12276,G__12277,G__12278,G__12279));
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__12284 = o;if(G__12284)
{var bit__4304__auto__ = (G__12284.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4304__auto__) || (G__12284.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__12284.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__12284);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__3628__auto__ = !((o == null));if(and__3628__auto__)
{var G__12288 = o;if(G__12288)
{var bit__4304__auto__ = (G__12288.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4304__auto__) || (G__12288.cljs$core$IMeta$))
{return true;
} else
{if((!G__12288.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__12288);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__12288);
}
} else
{return and__3628__auto__;
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__12291__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__12292 = ret;
var G__12293 = cljs.core.first(ks);
var G__12294 = cljs.core.next(ks);
coll = G__12292;
k = G__12293;
ks = G__12294;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__12291 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12291__delegate.call(this,coll,k,ks);};
G__12291.cljs$lang$maxFixedArity = 2;
G__12291.cljs$lang$applyTo = (function (arglist__12295){
var coll = cljs.core.first(arglist__12295);
arglist__12295 = cljs.core.next(arglist__12295);
var k = cljs.core.first(arglist__12295);
var ks = cljs.core.rest(arglist__12295);
return G__12291__delegate(coll,k,ks);
});
G__12291.cljs$core$IFn$_invoke$arity$variadic = G__12291__delegate;
return G__12291;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__12297 = x;if(G__12297)
{var bit__4304__auto__ = (G__12297.cljs$lang$protocol_mask$partition0$ & (8));if((bit__4304__auto__) || (G__12297.cljs$core$ICollection$))
{return true;
} else
{if((!G__12297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__12297);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__12297);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__12299 = x;if(G__12299)
{var bit__4304__auto__ = (G__12299.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__4304__auto__) || (G__12299.cljs$core$ISet$))
{return true;
} else
{if((!G__12299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__12299);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__12299);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__12301 = x;if(G__12301)
{var bit__4304__auto__ = (G__12301.cljs$lang$protocol_mask$partition0$ & (512));if((bit__4304__auto__) || (G__12301.cljs$core$IAssociative$))
{return true;
} else
{if((!G__12301.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__12301);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__12301);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__12303 = x;if(G__12303)
{var bit__4304__auto__ = (G__12303.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__4304__auto__) || (G__12303.cljs$core$ISequential$))
{return true;
} else
{if((!G__12303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__12303);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__12303);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__12305 = x;if(G__12305)
{var bit__4304__auto__ = (G__12305.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__4304__auto__) || (G__12305.cljs$core$ISorted$))
{return true;
} else
{if((!G__12305.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__12305);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__12305);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__12307 = x;if(G__12307)
{var bit__4304__auto__ = (G__12307.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4304__auto__) || (G__12307.cljs$core$IReduce$))
{return true;
} else
{if((!G__12307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__12307);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__12307);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__12309 = x;if(G__12309)
{var bit__4304__auto__ = (G__12309.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4304__auto__) || (G__12309.cljs$core$IMap$))
{return true;
} else
{if((!G__12309.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__12309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__12309);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__12311 = x;if(G__12311)
{var bit__4304__auto__ = (G__12311.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__4304__auto__) || (G__12311.cljs$core$IVector$))
{return true;
} else
{if((!G__12311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__12311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__12311);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__12313 = x;if(G__12313)
{var bit__4297__auto__ = (G__12313.cljs$lang$protocol_mask$partition1$ & (512));if((bit__4297__auto__) || (G__12313.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj12319 = {};return obj12319;
});
var js_obj__1 = (function() { 
var G__12322__delegate = function (keyvals){var G__12320 = goog.object.create;var G__12321 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__12320,G__12321) : cljs.core.apply.call(null,G__12320,G__12321));
};
var G__12322 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12322__delegate.call(this,keyvals);};
G__12322.cljs$lang$maxFixedArity = 0;
G__12322.cljs$lang$applyTo = (function (arglist__12323){
var keyvals = cljs.core.seq(arglist__12323);
return G__12322__delegate(keyvals);
});
G__12322.cljs$core$IFn$_invoke$arity$variadic = G__12322__delegate;
return G__12322;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__12326_12328 = obj;var G__12327_12329 = ((function (G__12326_12328,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__12326_12328,keys))
;goog.object.forEach(G__12326_12328,G__12327_12329);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__12330 = (i__$1 + (1));
var G__12331 = (j__$1 + (1));
var G__12332 = (len__$1 - (1));
i__$1 = G__12330;
j__$1 = G__12331;
len__$1 = G__12332;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__12333 = (i__$1 - (1));
var G__12334 = (j__$1 - (1));
var G__12335 = (len__$1 - (1));
i__$1 = G__12333;
j__$1 = G__12334;
len__$1 = G__12335;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj12337 = {};return obj12337;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__12339 = s;if(G__12339)
{var bit__4304__auto__ = (G__12339.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4304__auto__) || (G__12339.cljs$core$ISeq$))
{return true;
} else
{if((!G__12339.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12339);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__12339);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__12341 = s;if(G__12341)
{var bit__4304__auto__ = (G__12341.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__12341.cljs$core$ISeqable$))
{return true;
} else
{if((!G__12341.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__12341);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__12341);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3640__auto__ = cljs.core.fn_QMARK_(f);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var G__12345 = f;if(G__12345)
{var bit__4304__auto__ = (G__12345.cljs$lang$protocol_mask$partition0$ & (1));if((bit__4304__auto__) || (G__12345.cljs$core$IFn$))
{return true;
} else
{if((!G__12345.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__12345);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__12345);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__12358 = n;return isNaN(G__12358);
})())) && (!((n === Infinity))) && (((function (){var G__12359 = n;return parseFloat(G__12359);
})() === (function (){var G__12360 = n;var G__12361 = (10);return parseInt(G__12360,G__12361);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__12362__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__12363 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__12364 = etc;
s = G__12363;
xs = G__12364;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__12362 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12362__delegate.call(this,x,y,more);};
G__12362.cljs$lang$maxFixedArity = 2;
G__12362.cljs$lang$applyTo = (function (arglist__12365){
var x = cljs.core.first(arglist__12365);
arglist__12365 = cljs.core.next(arglist__12365);
var y = cljs.core.first(arglist__12365);
var more = cljs.core.rest(arglist__12365);
return G__12362__delegate(x,y,more);
});
G__12362.cljs$core$IFn$_invoke$arity$variadic = G__12362__delegate;
return G__12362;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3640__auto__ = cljs.core.seq(coll);if(or__3640__auto__)
{return or__3640__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__12369 = x;if(G__12369)
{var bit__4297__auto__ = (G__12369.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__4297__auto__) || (G__12369.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else
{var G__12370 = x;var G__12371 = y;return goog.array.defaultCompare(G__12370,G__12371);
}
} else
{throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count(xs);var yl = cljs.core.count(ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__12376 = xs;
var G__12377 = ys;
var G__12378 = len;
var G__12379 = (n + (1));
xs = G__12376;
ys = G__12377;
len = G__12378;
n = G__12379;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = (function (){var G__12384 = x;var G__12385 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12384,G__12385) : f.call(null,G__12384,G__12385));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__12386 = y;var G__12387 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12386,G__12387) : f.call(null,G__12386,G__12387));
})()))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq(coll))
{var a = (function (){var G__12393 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__12393) : cljs.core.to_array.call(null,G__12393));
})();var G__12394_12396 = a;var G__12395_12397 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__12394_12396,G__12395_12397);
return cljs.core.seq(a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__12403 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__12403) : keyfn.call(null,G__12403));
})(),(function (){var G__12404 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__12404) : keyfn.call(null,G__12404));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;var G__12410 = f;var G__12411 = cljs.core.first(s);var G__12412 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__12410,G__12411,G__12412) : cljs.core.reduce.call(null,G__12410,G__12411,G__12412));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__12413 = val__$1;var G__12414 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12413,G__12414) : f.call(null,G__12413,G__12414));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__12415 = nval;
var G__12416 = cljs.core.next(coll__$1);
val__$1 = G__12415;
coll__$1 = G__12416;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__12420 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__12420) : cljs.core.to_array.call(null,G__12420));
})();var G__12421_12423 = a;goog.array.shuffle(G__12421_12423);
var G__12422 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__12422) : cljs.core.vec.call(null,G__12422));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__12426 = coll;if(G__12426)
{var bit__4297__auto__ = (G__12426.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4297__auto__) || (G__12426.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__12427 = coll;if(G__12427)
{var bit__4297__auto__ = (G__12427.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4297__auto__) || (G__12427.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce(coll,f,init);
} else
{return init;
}
});
cljs.core.identity = (function identity(x){return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){return (function() {
var G__12436 = null;
var G__12436__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__12436__1 = (function (x){var G__12433 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__12433) : cf.call(null,G__12433));
});
var G__12436__2 = (function (x,y){var G__12434 = x;var G__12435 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12434,G__12435) : f.call(null,G__12434,G__12435));
});
G__12436 = function(x,y){
switch(arguments.length){
case 0:
return G__12436__0.call(this);
case 1:
return G__12436__1.call(this,x);
case 2:
return G__12436__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12436.cljs$core$IFn$_invoke$arity$0 = G__12436__0;
G__12436.cljs$core$IFn$_invoke$arity$1 = G__12436__1;
G__12436.cljs$core$IFn$_invoke$arity$2 = G__12436__2;
return G__12436;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__12443 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__12443) : xform.call(null,G__12443));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__12444 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12444) : f__$1.call(null,G__12444));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__12445__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__12445 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12445__delegate.call(this,x,y,more);};
G__12445.cljs$lang$maxFixedArity = 2;
G__12445.cljs$lang$applyTo = (function (arglist__12446){
var x = cljs.core.first(arglist__12446);
arglist__12446 = cljs.core.next(arglist__12446);
var y = cljs.core.first(arglist__12446);
var more = cljs.core.rest(arglist__12446);
return G__12445__delegate(x,y,more);
});
G__12445.cljs$core$IFn$_invoke$arity$variadic = G__12445__delegate;
return G__12445;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__12447__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__12447 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12447__delegate.call(this,x,y,more);};
G__12447.cljs$lang$maxFixedArity = 2;
G__12447.cljs$lang$applyTo = (function (arglist__12448){
var x = cljs.core.first(arglist__12448);
arglist__12448 = cljs.core.next(arglist__12448);
var y = cljs.core.first(arglist__12448);
var more = cljs.core.rest(arglist__12448);
return G__12447__delegate(x,y,more);
});
G__12447.cljs$core$IFn$_invoke$arity$variadic = G__12447__delegate;
return G__12447;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__12449__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__12449 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12449__delegate.call(this,x,y,more);};
G__12449.cljs$lang$maxFixedArity = 2;
G__12449.cljs$lang$applyTo = (function (arglist__12450){
var x = cljs.core.first(arglist__12450);
arglist__12450 = cljs.core.next(arglist__12450);
var y = cljs.core.first(arglist__12450);
var more = cljs.core.rest(arglist__12450);
return G__12449__delegate(x,y,more);
});
G__12449.cljs$core$IFn$_invoke$arity$variadic = G__12449__delegate;
return G__12449;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__12455__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__12455 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12455__delegate.call(this,x,y,more);};
G__12455.cljs$lang$maxFixedArity = 2;
G__12455.cljs$lang$applyTo = (function (arglist__12456){
var x = cljs.core.first(arglist__12456);
arglist__12456 = cljs.core.next(arglist__12456);
var y = cljs.core.first(arglist__12456);
var more = cljs.core.rest(arglist__12456);
return G__12455__delegate(x,y,more);
});
G__12455.cljs$core$IFn$_invoke$arity$variadic = G__12455__delegate;
return G__12455;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__12457__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__12458 = y;
var G__12459 = cljs.core.first(more);
var G__12460 = cljs.core.next(more);
x = G__12458;
y = G__12459;
more = G__12460;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12457 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12457__delegate.call(this,x,y,more);};
G__12457.cljs$lang$maxFixedArity = 2;
G__12457.cljs$lang$applyTo = (function (arglist__12461){
var x = cljs.core.first(arglist__12461);
arglist__12461 = cljs.core.next(arglist__12461);
var y = cljs.core.first(arglist__12461);
var more = cljs.core.rest(arglist__12461);
return G__12457__delegate(x,y,more);
});
G__12457.cljs$core$IFn$_invoke$arity$variadic = G__12457__delegate;
return G__12457;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__12462__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__12463 = y;
var G__12464 = cljs.core.first(more);
var G__12465 = cljs.core.next(more);
x = G__12463;
y = G__12464;
more = G__12465;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12462 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12462__delegate.call(this,x,y,more);};
G__12462.cljs$lang$maxFixedArity = 2;
G__12462.cljs$lang$applyTo = (function (arglist__12466){
var x = cljs.core.first(arglist__12466);
arglist__12466 = cljs.core.next(arglist__12466);
var y = cljs.core.first(arglist__12466);
var more = cljs.core.rest(arglist__12466);
return G__12462__delegate(x,y,more);
});
G__12462.cljs$core$IFn$_invoke$arity$variadic = G__12462__delegate;
return G__12462;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__12467__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__12468 = y;
var G__12469 = cljs.core.first(more);
var G__12470 = cljs.core.next(more);
x = G__12468;
y = G__12469;
more = G__12470;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12467 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12467__delegate.call(this,x,y,more);};
G__12467.cljs$lang$maxFixedArity = 2;
G__12467.cljs$lang$applyTo = (function (arglist__12471){
var x = cljs.core.first(arglist__12471);
arglist__12471 = cljs.core.next(arglist__12471);
var y = cljs.core.first(arglist__12471);
var more = cljs.core.rest(arglist__12471);
return G__12467__delegate(x,y,more);
});
G__12467.cljs$core$IFn$_invoke$arity$variadic = G__12467__delegate;
return G__12467;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__12472__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__12473 = y;
var G__12474 = cljs.core.first(more);
var G__12475 = cljs.core.next(more);
x = G__12473;
y = G__12474;
more = G__12475;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12472 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12472__delegate.call(this,x,y,more);};
G__12472.cljs$lang$maxFixedArity = 2;
G__12472.cljs$lang$applyTo = (function (arglist__12476){
var x = cljs.core.first(arglist__12476);
arglist__12476 = cljs.core.next(arglist__12476);
var y = cljs.core.first(arglist__12476);
var more = cljs.core.rest(arglist__12476);
return G__12472__delegate(x,y,more);
});
G__12472.cljs$core$IFn$_invoke$arity$variadic = G__12472__delegate;
return G__12472;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__3947__auto__ = x;var y__3948__auto__ = y;return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
});
var max__3 = (function() { 
var G__12477__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3947__auto__ = x;var y__3948__auto__ = y;return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),more);
};
var G__12477 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12477__delegate.call(this,x,y,more);};
G__12477.cljs$lang$maxFixedArity = 2;
G__12477.cljs$lang$applyTo = (function (arglist__12478){
var x = cljs.core.first(arglist__12478);
arglist__12478 = cljs.core.next(arglist__12478);
var y = cljs.core.first(arglist__12478);
var more = cljs.core.rest(arglist__12478);
return G__12477__delegate(x,y,more);
});
G__12477.cljs$core$IFn$_invoke$arity$variadic = G__12477__delegate;
return G__12477;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__3954__auto__ = x;var y__3955__auto__ = y;return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
});
var min__3 = (function() { 
var G__12479__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3954__auto__ = x;var y__3955__auto__ = y;return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})(),more);
};
var G__12479 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12479__delegate.call(this,x,y,more);};
G__12479.cljs$lang$maxFixedArity = 2;
G__12479.cljs$lang$applyTo = (function (arglist__12480){
var x = cljs.core.first(arglist__12480);
arglist__12480 = cljs.core.next(arglist__12480);
var y = cljs.core.first(arglist__12480);
var more = cljs.core.rest(arglist__12480);
return G__12479__delegate(x,y,more);
});
G__12479.cljs$core$IFn$_invoke$arity$variadic = G__12479__delegate;
return G__12479;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__12481__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__12481 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12481__delegate.call(this,x,y,more);};
G__12481.cljs$lang$maxFixedArity = 2;
G__12481.cljs$lang$applyTo = (function (arglist__12482){
var x = cljs.core.first(arglist__12482);
arglist__12482 = cljs.core.next(arglist__12482);
var y = cljs.core.first(arglist__12482);
var more = cljs.core.rest(arglist__12482);
return G__12481__delegate(x,y,more);
});
G__12481.cljs$core$IFn$_invoke$arity$variadic = G__12481__delegate;
return G__12481;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__12483__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__12483 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12483__delegate.call(this,x,y,more);};
G__12483.cljs$lang$maxFixedArity = 2;
G__12483.cljs$lang$applyTo = (function (arglist__12484){
var x = cljs.core.first(arglist__12484);
arglist__12484 = cljs.core.next(arglist__12484);
var y = cljs.core.first(arglist__12484);
var more = cljs.core.rest(arglist__12484);
return G__12483__delegate(x,y,more);
});
G__12483.cljs$core$IFn$_invoke$arity$variadic = G__12483__delegate;
return G__12483;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__12489__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__12489 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12489__delegate.call(this,x,y,more);};
G__12489.cljs$lang$maxFixedArity = 2;
G__12489.cljs$lang$applyTo = (function (arglist__12490){
var x = cljs.core.first(arglist__12490);
arglist__12490 = cljs.core.next(arglist__12490);
var y = cljs.core.first(arglist__12490);
var more = cljs.core.rest(arglist__12490);
return G__12489__delegate(x,y,more);
});
G__12489.cljs$core$IFn$_invoke$arity$variadic = G__12489__delegate;
return G__12489;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__12491__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__12491 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12491__delegate.call(this,x,y,more);};
G__12491.cljs$lang$maxFixedArity = 2;
G__12491.cljs$lang$applyTo = (function (arglist__12492){
var x = cljs.core.first(arglist__12492);
arglist__12492 = cljs.core.next(arglist__12492);
var y = cljs.core.first(arglist__12492);
var more = cljs.core.rest(arglist__12492);
return G__12491__delegate(x,y,more);
});
G__12491.cljs$core$IFn$_invoke$arity$variadic = G__12491__delegate;
return G__12491;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__12493__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__12493 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12493__delegate.call(this,x,y,more);};
G__12493.cljs$lang$maxFixedArity = 2;
G__12493.cljs$lang$applyTo = (function (arglist__12494){
var x = cljs.core.first(arglist__12494);
arglist__12494 = cljs.core.next(arglist__12494);
var y = cljs.core.first(arglist__12494);
var more = cljs.core.rest(arglist__12494);
return G__12493__delegate(x,y,more);
});
G__12493.cljs$core$IFn$_invoke$arity$variadic = G__12493__delegate;
return G__12493;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__12497 = x;var G__12498 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__12497,G__12498) : cljs.core.mod.call(null,G__12497,G__12498));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){return (- x);
});
var unchecked_subtract__2 = (function (x,y){return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__12499__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__12499 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12499__delegate.call(this,x,y,more);};
G__12499.cljs$lang$maxFixedArity = 2;
G__12499.cljs$lang$applyTo = (function (arglist__12500){
var x = cljs.core.first(arglist__12500);
arglist__12500 = cljs.core.next(arglist__12500);
var y = cljs.core.first(arglist__12500);
var more = cljs.core.rest(arglist__12500);
return G__12499__delegate(x,y,more);
});
G__12499.cljs$core$IFn$_invoke$arity$variadic = G__12499__delegate;
return G__12499;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__12501__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__12501 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12501__delegate.call(this,x,y,more);};
G__12501.cljs$lang$maxFixedArity = 2;
G__12501.cljs$lang$applyTo = (function (arglist__12502){
var x = cljs.core.first(arglist__12502);
arglist__12502 = cljs.core.next(arglist__12502);
var y = cljs.core.first(arglist__12502);
var more = cljs.core.rest(arglist__12502);
return G__12501__delegate(x,y,more);
});
G__12501.cljs$core$IFn$_invoke$arity$variadic = G__12501__delegate;
return G__12501;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{var G__12505 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__12505) : Math.floor.call(null,G__12505));
} else
{var G__12506 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__12506) : Math.ceil.call(null,G__12506));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot(n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__12511__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__12512 = y;
var G__12513 = cljs.core.first(more);
var G__12514 = cljs.core.next(more);
x = G__12512;
y = G__12513;
more = G__12514;
continue;
}
} else
{return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12511 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12511__delegate.call(this,x,y,more);};
G__12511.cljs$lang$maxFixedArity = 2;
G__12511.cljs$lang$applyTo = (function (arglist__12515){
var x = cljs.core.first(arglist__12515);
arglist__12515 = cljs.core.next(arglist__12515);
var y = cljs.core.first(arglist__12515);
var more = cljs.core.rest(arglist__12515);
return G__12511__delegate(x,y,more);
});
G__12511.cljs$core$IFn$_invoke$arity$variadic = G__12511__delegate;
return G__12511;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq(coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__12516 = (n__$1 - (1));
var G__12517 = cljs.core.next(xs);
n__$1 = G__12516;
xs = G__12517;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return ''+x;
}
});
var str__2 = (function() { 
var G__12520__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__12521 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__12522 = cljs.core.next(more);
sb = G__12521;
more = G__12522;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__12520 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__12520__delegate.call(this,x,ys);};
G__12520.cljs$lang$maxFixedArity = 1;
G__12520.cljs$lang$applyTo = (function (arglist__12523){
var x = cljs.core.first(arglist__12523);
var ys = cljs.core.rest(arglist__12523);
return G__12520__delegate(x,ys);
});
G__12520.cljs$core$IFn$_invoke$arity$variadic = G__12520__delegate;
return G__12520;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__12524 = cljs.core.next(xs);
var G__12525 = cljs.core.next(ys);
xs = G__12524;
ys = G__12525;
continue;
}
} else
{return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq(coll))
{var res = cljs.core.hash(cljs.core.first(coll));var s = cljs.core.next(coll);while(true){
if((s == null))
{return res;
} else
{{
var G__12526 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__12527 = cljs.core.next(s);
res = G__12526;
s = G__12527;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq(m);while(true){
if(s)
{var e = cljs.core.first(s);{
var G__12532 = ((h + (cljs.core.hash((function (){var G__12530 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__12530) : cljs.core.key.call(null,G__12530));
})()) ^ cljs.core.hash((function (){var G__12531 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__12531) : cljs.core.val.call(null,G__12531));
})()))) % (4503599627370496));
var G__12533 = cljs.core.next(s);
h = G__12532;
s = G__12533;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq(s);while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);{
var G__12534 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__12535 = cljs.core.next(s__$1);
h = G__12534;
s__$1 = G__12535;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__12546_12556 = cljs.core.seq(fn_map);var chunk__12547_12557 = null;var count__12548_12558 = (0);var i__12549_12559 = (0);while(true){
if((i__12549_12559 < count__12548_12558))
{var vec__12550_12560 = chunk__12547_12557.cljs$core$IIndexed$_nth$arity$2(null,i__12549_12559);var key_name_12561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550_12560,(0),null);var f_12562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550_12560,(1),null);var str_name_12563 = (function (){var G__12551 = key_name_12561;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__12551) : cljs.core.name.call(null,G__12551));
})();(obj[str_name_12563] = f_12562);
{
var G__12564 = seq__12546_12556;
var G__12565 = chunk__12547_12557;
var G__12566 = count__12548_12558;
var G__12567 = (i__12549_12559 + (1));
seq__12546_12556 = G__12564;
chunk__12547_12557 = G__12565;
count__12548_12558 = G__12566;
i__12549_12559 = G__12567;
continue;
}
} else
{var temp__4126__auto___12568 = cljs.core.seq(seq__12546_12556);if(temp__4126__auto___12568)
{var seq__12546_12569__$1 = temp__4126__auto___12568;if(cljs.core.chunked_seq_QMARK_(seq__12546_12569__$1))
{var c__4410__auto___12570 = (function (){var G__12552 = seq__12546_12569__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__12552) : cljs.core.chunk_first.call(null,G__12552));
})();{
var G__12571 = (function (){var G__12553 = seq__12546_12569__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__12553) : cljs.core.chunk_rest.call(null,G__12553));
})();
var G__12572 = c__4410__auto___12570;
var G__12573 = cljs.core.count(c__4410__auto___12570);
var G__12574 = (0);
seq__12546_12556 = G__12571;
chunk__12547_12557 = G__12572;
count__12548_12558 = G__12573;
i__12549_12559 = G__12574;
continue;
}
} else
{var vec__12554_12575 = cljs.core.first(seq__12546_12569__$1);var key_name_12576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12554_12575,(0),null);var f_12577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12554_12575,(1),null);var str_name_12578 = (function (){var G__12555 = key_name_12576;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__12555) : cljs.core.name.call(null,G__12555));
})();(obj[str_name_12578] = f_12577);
{
var G__12579 = cljs.core.next(seq__12546_12569__$1);
var G__12580 = null;
var G__12581 = (0);
var G__12582 = (0);
seq__12546_12556 = G__12579;
chunk__12547_12557 = G__12580;
count__12548_12558 = G__12581;
i__12549_12559 = G__12582;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.List.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest(coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.EmptyList.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__12584 = coll;if(G__12584)
{var bit__4304__auto__ = (G__12584.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__4304__auto__) || (G__12584.cljs$core$IReversible$))
{return true;
} else
{if((!G__12584.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__12584);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__12584);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));
{
var G__12585 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__12585;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__12586 = (i - (1));
var G__12587 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__12586;
r = G__12587;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__12588){
var xs = cljs.core.seq(arglist__12588);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Cons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3640__auto__ = (coll == null);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var G__12592 = coll;if(G__12592)
{var bit__4297__auto__ = (G__12592.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4297__auto__) || (G__12592.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__12594 = x;if(G__12594)
{var bit__4304__auto__ = (G__12594.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__4304__auto__) || (G__12594.cljs$core$IList$))
{return true;
} else
{if((!G__12594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__12594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__12594);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__4051__auto__ = self__._hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__12596 = null;
var G__12596__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__12596__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__12596 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__12596__2.call(this,self__,coll);
case 3:
return G__12596__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12596.cljs$core$IFn$_invoke$arity$2 = G__12596__2;
G__12596.cljs$core$IFn$_invoke$arity$3 = G__12596__3;
return G__12596;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args12595){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12595)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.Keyword.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__12598 = x;if(G__12598)
{var bit__4297__auto__ = (G__12598.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4297__auto__) || (G__12598.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(null);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__12600 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__12600) : cljs.core.name.call(null,G__12600));
})(),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.LazySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest(self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__12601 = ls.sval();
ls = G__12601;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq(self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedCons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq(self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count(chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__12603 = s;if(G__12603)
{var bit__4297__auto__ = (G__12603.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__4297__auto__) || (G__12603.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__12604 = cljs.core.next(s__$1);
s__$1 = G__12604;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_12605 = (0);var xs_12606 = cljs.core.seq(coll);while(true){
if(xs_12606)
{(ret[i_12605] = cljs.core.to_array(cljs.core.first(xs_12606)));
{
var G__12607 = (i_12605 + (1));
var G__12608 = cljs.core.next(xs_12606);
i_12605 = G__12607;
xs_12606 = G__12608;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__12611 = (i + (1));
var G__12612 = cljs.core.next(s__$1);
i = G__12611;
s__$1 = G__12612;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4510__auto___12613 = size;var i_12614 = (0);while(true){
if((i_12614 < n__4510__auto___12613))
{(a[i_12614] = init_val_or_seq);
{
var G__12615 = (i_12614 + (1));
i_12614 = G__12615;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__12618 = (i + (1));
var G__12619 = cljs.core.next(s__$1);
i = G__12618;
s__$1 = G__12619;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4510__auto___12620 = size;var i_12621 = (0);while(true){
if((i_12621 < n__4510__auto___12620))
{(a[i_12621] = init_val_or_seq);
{
var G__12622 = (i_12621 + (1));
i_12621 = G__12622;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__12625 = (i + (1));
var G__12626 = cljs.core.next(s__$1);
i = G__12625;
s__$1 = G__12626;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4510__auto___12627 = size;var i_12628 = (0);while(true){
if((i_12628 < n__4510__auto___12627))
{(a[i_12628] = init_val_or_seq);
{
var G__12629 = (i_12628 + (1));
i_12628 = G__12629;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__12632 = (i + (1));
var G__12633 = cljs.core.next(s__$1);
i = G__12632;
s__$1 = G__12633;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4510__auto___12634 = size;var i_12635 = (0);while(true){
if((i_12635 < n__4510__auto___12634))
{(a[i_12635] = init_val_or_seq);
{
var G__12636 = (i_12635 + (1));
i_12635 = G__12636;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq(s__$1)))
{{
var G__12637 = cljs.core.next(s__$1);
var G__12638 = (i - (1));
var G__12639 = (sum + (1));
s__$1 = G__12637;
i = G__12638;
sum = G__12639;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq(x);if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__12659__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__12659 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12659__delegate.call(this,x,y,zs);};
G__12659.cljs$lang$maxFixedArity = 2;
G__12659.cljs$lang$applyTo = (function (arglist__12660){
var x = cljs.core.first(arglist__12660);
arglist__12660 = cljs.core.next(arglist__12660);
var y = cljs.core.first(arglist__12660);
var zs = cljs.core.rest(arglist__12660);
return G__12659__delegate(x,y,zs);
});
G__12659.cljs$core$IFn$_invoke$arity$variadic = G__12659__delegate;
return G__12659;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__12661__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__12661 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__12661__delegate.call(this,a,b,c,d,more);};
G__12661.cljs$lang$maxFixedArity = 4;
G__12661.cljs$lang$applyTo = (function (arglist__12662){
var a = cljs.core.first(arglist__12662);
arglist__12662 = cljs.core.next(arglist__12662);
var b = cljs.core.first(arglist__12662);
arglist__12662 = cljs.core.next(arglist__12662);
var c = cljs.core.first(arglist__12662);
arglist__12662 = cljs.core.next(arglist__12662);
var d = cljs.core.first(arglist__12662);
var more = cljs.core.rest(arglist__12662);
return G__12661__delegate(a,b,c,d,more);
});
G__12661.cljs$core$IFn$_invoke$arity$variadic = G__12661__delegate;
return G__12661;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){return coll;
});
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__12663__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__12664 = ntcoll;
var G__12665 = cljs.core.first(vals);
var G__12666 = cljs.core.next(vals);
tcoll = G__12664;
val = G__12665;
vals = G__12666;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__12663 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12663__delegate.call(this,tcoll,val,vals);};
G__12663.cljs$lang$maxFixedArity = 2;
G__12663.cljs$lang$applyTo = (function (arglist__12667){
var tcoll = cljs.core.first(arglist__12667);
arglist__12667 = cljs.core.next(arglist__12667);
var val = cljs.core.first(arglist__12667);
var vals = cljs.core.rest(arglist__12667);
return G__12663__delegate(tcoll,val,vals);
});
G__12663.cljs$core$IFn$_invoke$arity$variadic = G__12663__delegate;
return G__12663;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__12668__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__12669 = ntcoll;
var G__12670 = cljs.core.first(kvs);
var G__12671 = cljs.core.second(kvs);
var G__12672 = cljs.core.nnext(kvs);
tcoll = G__12669;
key = G__12670;
val = G__12671;
kvs = G__12672;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__12668 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12668__delegate.call(this,tcoll,key,val,kvs);};
G__12668.cljs$lang$maxFixedArity = 3;
G__12668.cljs$lang$applyTo = (function (arglist__12673){
var tcoll = cljs.core.first(arglist__12673);
arglist__12673 = cljs.core.next(arglist__12673);
var key = cljs.core.first(arglist__12673);
arglist__12673 = cljs.core.next(arglist__12673);
var val = cljs.core.first(arglist__12673);
var kvs = cljs.core.rest(arglist__12673);
return G__12668__delegate(tcoll,key,val,kvs);
});
G__12668.cljs$core$IFn$_invoke$arity$variadic = G__12668__delegate;
return G__12668;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__12674__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__12675 = ntcoll;
var G__12676 = cljs.core.first(ks);
var G__12677 = cljs.core.next(ks);
tcoll = G__12675;
key = G__12676;
ks = G__12677;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__12674 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12674__delegate.call(this,tcoll,key,ks);};
G__12674.cljs$lang$maxFixedArity = 2;
G__12674.cljs$lang$applyTo = (function (arglist__12678){
var tcoll = cljs.core.first(arglist__12678);
arglist__12678 = cljs.core.next(arglist__12678);
var key = cljs.core.first(arglist__12678);
var ks = cljs.core.rest(arglist__12678);
return G__12674__delegate(tcoll,key,ks);
});
G__12674.cljs$core$IFn$_invoke$arity$variadic = G__12674__delegate;
return G__12674;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__12679__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__12680 = ntcoll;
var G__12681 = cljs.core.first(vals);
var G__12682 = cljs.core.next(vals);
tcoll = G__12680;
val = G__12681;
vals = G__12682;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__12679 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12679__delegate.call(this,tcoll,val,vals);};
G__12679.cljs$lang$maxFixedArity = 2;
G__12679.cljs$lang$applyTo = (function (arglist__12683){
var tcoll = cljs.core.first(arglist__12683);
arglist__12683 = cljs.core.next(arglist__12683);
var val = cljs.core.first(arglist__12683);
var vals = cljs.core.rest(arglist__12683);
return G__12679__delegate(tcoll,val,vals);
});
G__12679.cljs$core$IFn$_invoke$arity$variadic = G__12679__delegate;
return G__12679;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq(args);if((argc === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var a4554 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a4554);
} else
{var G__12894 = a4554;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12894) : f.call(null,G__12894));
}
} else
{var b4555 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a4554,b4555);
} else
{var G__12895 = a4554;var G__12896 = b4555;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12895,G__12896) : f.call(null,G__12895,G__12896));
}
} else
{var c4556 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a4554,b4555,c4556);
} else
{var G__12897 = a4554;var G__12898 = b4555;var G__12899 = c4556;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12897,G__12898,G__12899) : f.call(null,G__12897,G__12898,G__12899));
}
} else
{var d4557 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a4554,b4555,c4556,d4557);
} else
{var G__12900 = a4554;var G__12901 = b4555;var G__12902 = c4556;var G__12903 = d4557;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12900,G__12901,G__12902,G__12903) : f.call(null,G__12900,G__12901,G__12902,G__12903));
}
} else
{var e4558 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a4554,b4555,c4556,d4557,e4558);
} else
{var G__12904 = a4554;var G__12905 = b4555;var G__12906 = c4556;var G__12907 = d4557;var G__12908 = e4558;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12904,G__12905,G__12906,G__12907,G__12908) : f.call(null,G__12904,G__12905,G__12906,G__12907,G__12908));
}
} else
{var f4559 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a4554,b4555,c4556,d4557,e4558,f4559);
} else
{var G__12909 = a4554;var G__12910 = b4555;var G__12911 = c4556;var G__12912 = d4557;var G__12913 = e4558;var G__12914 = f4559;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__12909,G__12910,G__12911,G__12912,G__12913,G__12914) : f.call(null,G__12909,G__12910,G__12911,G__12912,G__12913,G__12914));
}
} else
{var g4560 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a4554,b4555,c4556,d4557,e4558,f4559,g4560);
} else
{var G__12915 = a4554;var G__12916 = b4555;var G__12917 = c4556;var G__12918 = d4557;var G__12919 = e4558;var G__12920 = f4559;var G__12921 = g4560;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__12915,G__12916,G__12917,G__12918,G__12919,G__12920,G__12921) : f.call(null,G__12915,G__12916,G__12917,G__12918,G__12919,G__12920,G__12921));
}
} else
{var h4561 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561);
} else
{var G__12922 = a4554;var G__12923 = b4555;var G__12924 = c4556;var G__12925 = d4557;var G__12926 = e4558;var G__12927 = f4559;var G__12928 = g4560;var G__12929 = h4561;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__12922,G__12923,G__12924,G__12925,G__12926,G__12927,G__12928,G__12929) : f.call(null,G__12922,G__12923,G__12924,G__12925,G__12926,G__12927,G__12928,G__12929));
}
} else
{var i4562 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562);
} else
{var G__12930 = a4554;var G__12931 = b4555;var G__12932 = c4556;var G__12933 = d4557;var G__12934 = e4558;var G__12935 = f4559;var G__12936 = g4560;var G__12937 = h4561;var G__12938 = i4562;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__12930,G__12931,G__12932,G__12933,G__12934,G__12935,G__12936,G__12937,G__12938) : f.call(null,G__12930,G__12931,G__12932,G__12933,G__12934,G__12935,G__12936,G__12937,G__12938));
}
} else
{var j4563 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563);
} else
{var G__12939 = a4554;var G__12940 = b4555;var G__12941 = c4556;var G__12942 = d4557;var G__12943 = e4558;var G__12944 = f4559;var G__12945 = g4560;var G__12946 = h4561;var G__12947 = i4562;var G__12948 = j4563;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__12939,G__12940,G__12941,G__12942,G__12943,G__12944,G__12945,G__12946,G__12947,G__12948) : f.call(null,G__12939,G__12940,G__12941,G__12942,G__12943,G__12944,G__12945,G__12946,G__12947,G__12948));
}
} else
{var k4564 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564);
} else
{var G__12949 = a4554;var G__12950 = b4555;var G__12951 = c4556;var G__12952 = d4557;var G__12953 = e4558;var G__12954 = f4559;var G__12955 = g4560;var G__12956 = h4561;var G__12957 = i4562;var G__12958 = j4563;var G__12959 = k4564;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__12949,G__12950,G__12951,G__12952,G__12953,G__12954,G__12955,G__12956,G__12957,G__12958,G__12959) : f.call(null,G__12949,G__12950,G__12951,G__12952,G__12953,G__12954,G__12955,G__12956,G__12957,G__12958,G__12959));
}
} else
{var l4565 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565);
} else
{var G__12960 = a4554;var G__12961 = b4555;var G__12962 = c4556;var G__12963 = d4557;var G__12964 = e4558;var G__12965 = f4559;var G__12966 = g4560;var G__12967 = h4561;var G__12968 = i4562;var G__12969 = j4563;var G__12970 = k4564;var G__12971 = l4565;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__12960,G__12961,G__12962,G__12963,G__12964,G__12965,G__12966,G__12967,G__12968,G__12969,G__12970,G__12971) : f.call(null,G__12960,G__12961,G__12962,G__12963,G__12964,G__12965,G__12966,G__12967,G__12968,G__12969,G__12970,G__12971));
}
} else
{var m4566 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566);
} else
{var G__12972 = a4554;var G__12973 = b4555;var G__12974 = c4556;var G__12975 = d4557;var G__12976 = e4558;var G__12977 = f4559;var G__12978 = g4560;var G__12979 = h4561;var G__12980 = i4562;var G__12981 = j4563;var G__12982 = k4564;var G__12983 = l4565;var G__12984 = m4566;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__12972,G__12973,G__12974,G__12975,G__12976,G__12977,G__12978,G__12979,G__12980,G__12981,G__12982,G__12983,G__12984) : f.call(null,G__12972,G__12973,G__12974,G__12975,G__12976,G__12977,G__12978,G__12979,G__12980,G__12981,G__12982,G__12983,G__12984));
}
} else
{var n4567 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567);
} else
{var G__12985 = a4554;var G__12986 = b4555;var G__12987 = c4556;var G__12988 = d4557;var G__12989 = e4558;var G__12990 = f4559;var G__12991 = g4560;var G__12992 = h4561;var G__12993 = i4562;var G__12994 = j4563;var G__12995 = k4564;var G__12996 = l4565;var G__12997 = m4566;var G__12998 = n4567;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__12985,G__12986,G__12987,G__12988,G__12989,G__12990,G__12991,G__12992,G__12993,G__12994,G__12995,G__12996,G__12997,G__12998) : f.call(null,G__12985,G__12986,G__12987,G__12988,G__12989,G__12990,G__12991,G__12992,G__12993,G__12994,G__12995,G__12996,G__12997,G__12998));
}
} else
{var o4568 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567,o4568);
} else
{var G__12999 = a4554;var G__13000 = b4555;var G__13001 = c4556;var G__13002 = d4557;var G__13003 = e4558;var G__13004 = f4559;var G__13005 = g4560;var G__13006 = h4561;var G__13007 = i4562;var G__13008 = j4563;var G__13009 = k4564;var G__13010 = l4565;var G__13011 = m4566;var G__13012 = n4567;var G__13013 = o4568;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__12999,G__13000,G__13001,G__13002,G__13003,G__13004,G__13005,G__13006,G__13007,G__13008,G__13009,G__13010,G__13011,G__13012,G__13013) : f.call(null,G__12999,G__13000,G__13001,G__13002,G__13003,G__13004,G__13005,G__13006,G__13007,G__13008,G__13009,G__13010,G__13011,G__13012,G__13013));
}
} else
{var p4569 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567,o4568,p4569);
} else
{var G__13014 = a4554;var G__13015 = b4555;var G__13016 = c4556;var G__13017 = d4557;var G__13018 = e4558;var G__13019 = f4559;var G__13020 = g4560;var G__13021 = h4561;var G__13022 = i4562;var G__13023 = j4563;var G__13024 = k4564;var G__13025 = l4565;var G__13026 = m4566;var G__13027 = n4567;var G__13028 = o4568;var G__13029 = p4569;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__13014,G__13015,G__13016,G__13017,G__13018,G__13019,G__13020,G__13021,G__13022,G__13023,G__13024,G__13025,G__13026,G__13027,G__13028,G__13029) : f.call(null,G__13014,G__13015,G__13016,G__13017,G__13018,G__13019,G__13020,G__13021,G__13022,G__13023,G__13024,G__13025,G__13026,G__13027,G__13028,G__13029));
}
} else
{var q4570 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567,o4568,p4569,q4570);
} else
{var G__13030 = a4554;var G__13031 = b4555;var G__13032 = c4556;var G__13033 = d4557;var G__13034 = e4558;var G__13035 = f4559;var G__13036 = g4560;var G__13037 = h4561;var G__13038 = i4562;var G__13039 = j4563;var G__13040 = k4564;var G__13041 = l4565;var G__13042 = m4566;var G__13043 = n4567;var G__13044 = o4568;var G__13045 = p4569;var G__13046 = q4570;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__13030,G__13031,G__13032,G__13033,G__13034,G__13035,G__13036,G__13037,G__13038,G__13039,G__13040,G__13041,G__13042,G__13043,G__13044,G__13045,G__13046) : f.call(null,G__13030,G__13031,G__13032,G__13033,G__13034,G__13035,G__13036,G__13037,G__13038,G__13039,G__13040,G__13041,G__13042,G__13043,G__13044,G__13045,G__13046));
}
} else
{var r4571 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567,o4568,p4569,q4570,r4571);
} else
{var G__13047 = a4554;var G__13048 = b4555;var G__13049 = c4556;var G__13050 = d4557;var G__13051 = e4558;var G__13052 = f4559;var G__13053 = g4560;var G__13054 = h4561;var G__13055 = i4562;var G__13056 = j4563;var G__13057 = k4564;var G__13058 = l4565;var G__13059 = m4566;var G__13060 = n4567;var G__13061 = o4568;var G__13062 = p4569;var G__13063 = q4570;var G__13064 = r4571;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__13047,G__13048,G__13049,G__13050,G__13051,G__13052,G__13053,G__13054,G__13055,G__13056,G__13057,G__13058,G__13059,G__13060,G__13061,G__13062,G__13063,G__13064) : f.call(null,G__13047,G__13048,G__13049,G__13050,G__13051,G__13052,G__13053,G__13054,G__13055,G__13056,G__13057,G__13058,G__13059,G__13060,G__13061,G__13062,G__13063,G__13064));
}
} else
{var s4572 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567,o4568,p4569,q4570,r4571,s4572);
} else
{var G__13065 = a4554;var G__13066 = b4555;var G__13067 = c4556;var G__13068 = d4557;var G__13069 = e4558;var G__13070 = f4559;var G__13071 = g4560;var G__13072 = h4561;var G__13073 = i4562;var G__13074 = j4563;var G__13075 = k4564;var G__13076 = l4565;var G__13077 = m4566;var G__13078 = n4567;var G__13079 = o4568;var G__13080 = p4569;var G__13081 = q4570;var G__13082 = r4571;var G__13083 = s4572;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__13065,G__13066,G__13067,G__13068,G__13069,G__13070,G__13071,G__13072,G__13073,G__13074,G__13075,G__13076,G__13077,G__13078,G__13079,G__13080,G__13081,G__13082,G__13083) : f.call(null,G__13065,G__13066,G__13067,G__13068,G__13069,G__13070,G__13071,G__13072,G__13073,G__13074,G__13075,G__13076,G__13077,G__13078,G__13079,G__13080,G__13081,G__13082,G__13083));
}
} else
{var t4573 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a4554,b4555,c4556,d4557,e4558,f4559,g4560,h4561,i4562,j4563,k4564,l4565,m4566,n4567,o4568,p4569,q4570,r4571,s4572,t4573);
} else
{var G__13084 = a4554;var G__13085 = b4555;var G__13086 = c4556;var G__13087 = d4557;var G__13088 = e4558;var G__13089 = f4559;var G__13090 = g4560;var G__13091 = h4561;var G__13092 = i4562;var G__13093 = j4563;var G__13094 = k4564;var G__13095 = l4565;var G__13096 = m4566;var G__13097 = n4567;var G__13098 = o4568;var G__13099 = p4569;var G__13100 = q4570;var G__13101 = r4571;var G__13102 = s4572;var G__13103 = t4573;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__13084,G__13085,G__13086,G__13087,G__13088,G__13089,G__13090,G__13091,G__13092,G__13093,G__13094,G__13095,G__13096,G__13097,G__13098,G__13099,G__13100,G__13101,G__13102,G__13103) : f.call(null,G__13084,G__13085,G__13086,G__13087,G__13088,G__13089,G__13090,G__13091,G__13092,G__13093,G__13094,G__13095,G__13096,G__13097,G__13098,G__13099,G__13100,G__13101,G__13102,G__13103));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__13104__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__13104 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__13104__delegate.call(this,f,a,b,c,d,args);};
G__13104.cljs$lang$maxFixedArity = 5;
G__13104.cljs$lang$applyTo = (function (arglist__13105){
var f = cljs.core.first(arglist__13105);
arglist__13105 = cljs.core.next(arglist__13105);
var a = cljs.core.first(arglist__13105);
arglist__13105 = cljs.core.next(arglist__13105);
var b = cljs.core.first(arglist__13105);
arglist__13105 = cljs.core.next(arglist__13105);
var c = cljs.core.first(arglist__13105);
arglist__13105 = cljs.core.next(arglist__13105);
var d = cljs.core.first(arglist__13105);
var args = cljs.core.rest(arglist__13105);
return G__13104__delegate(f,a,b,c,d,args);
});
G__13104.cljs$core$IFn$_invoke$arity$variadic = G__13104__delegate;
return G__13104;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__13121 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13121) : f.call(null,G__13121));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__13122 = cljs.core.meta(obj);var G__13123 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13122,G__13123) : f.call(null,G__13122,G__13123));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__13124 = cljs.core.meta(obj);var G__13125 = a;var G__13126 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13124,G__13125,G__13126) : f.call(null,G__13124,G__13125,G__13126));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__13127 = cljs.core.meta(obj);var G__13128 = a;var G__13129 = b;var G__13130 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13127,G__13128,G__13129,G__13130) : f.call(null,G__13127,G__13128,G__13129,G__13130));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__13131 = cljs.core.meta(obj);var G__13132 = a;var G__13133 = b;var G__13134 = c;var G__13135 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__13131,G__13132,G__13133,G__13134,G__13135) : f.call(null,G__13131,G__13132,G__13133,G__13134,G__13135));
})());
});
var vary_meta__7 = (function() { 
var G__13136__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__13136 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__13136__delegate.call(this,obj,f,a,b,c,d,args);};
G__13136.cljs$lang$maxFixedArity = 6;
G__13136.cljs$lang$applyTo = (function (arglist__13137){
var obj = cljs.core.first(arglist__13137);
arglist__13137 = cljs.core.next(arglist__13137);
var f = cljs.core.first(arglist__13137);
arglist__13137 = cljs.core.next(arglist__13137);
var a = cljs.core.first(arglist__13137);
arglist__13137 = cljs.core.next(arglist__13137);
var b = cljs.core.first(arglist__13137);
arglist__13137 = cljs.core.next(arglist__13137);
var c = cljs.core.first(arglist__13137);
arglist__13137 = cljs.core.next(arglist__13137);
var d = cljs.core.first(arglist__13137);
var args = cljs.core.rest(arglist__13137);
return G__13136__delegate(obj,f,a,b,c,d,args);
});
G__13136.cljs$core$IFn$_invoke$arity$variadic = G__13136__delegate;
return G__13136;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__13138__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__13138 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13138__delegate.call(this,x,y,more);};
G__13138.cljs$lang$maxFixedArity = 2;
G__13138.cljs$lang$applyTo = (function (arglist__13139){
var x = cljs.core.first(arglist__13139);
arglist__13139 = cljs.core.next(arglist__13139);
var y = cljs.core.first(arglist__13139);
var more = cljs.core.rest(arglist__13139);
return G__13138__delegate(x,y,more);
});
G__13138.cljs$core$IFn$_invoke$arity$variadic = G__13138__delegate;
return G__13138;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t13143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t13143 = (function (nil_iter,meta13144){
this.nil_iter = nil_iter;
this.meta13144 = meta13144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t13143.cljs$lang$type = true;
cljs.core.t13143.cljs$lang$ctorStr = "cljs.core/t13143";
cljs.core.t13143.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/t13143");
});
cljs.core.t13143.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t13143.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t13143.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t13143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13145){var self__ = this;
var _13145__$1 = this;return self__.meta13144;
});
cljs.core.t13143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13145,meta13144__$1){var self__ = this;
var _13145__$1 = this;return (new cljs.core.t13143(self__.nil_iter,meta13144__$1));
});
cljs.core.__GT_t13143 = (function __GT_t13143(nil_iter__$1,meta13144){return (new cljs.core.t13143(nil_iter__$1,meta13144));
});
}
return (new cljs.core.t13143(nil_iter,null));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.cljs$lang$type = true;
cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/StringIter");
});
cljs.core.StringIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.s.length);
});
cljs.core.StringIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.s.charAt(self__.i);self__.i = (self__.i + (1));
return ret;
});
cljs.core.StringIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){return (new cljs.core.StringIter(s,i));
});
cljs.core.string_iter = (function string_iter(x){return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.cljs$lang$type = true;
cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayIter");
});
cljs.core.ArrayIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.ArrayIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.ArrayIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){return (new cljs.core.ArrayIter(arr,i));
});
cljs.core.array_iter = (function array_iter(x){return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.cljs$lang$type = true;
cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/SeqIter");
});
cljs.core.SeqIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__._seq === cljs.core.INIT))
{self__._seq = cljs.core.START;
self__._next = cljs.core.seq(self__._next);
} else
{if((self__._seq === self__._next))
{self__._next = cljs.core.next(self__._seq);
} else
{}
}
return !((self__._next == null));
});
cljs.core.SeqIter.prototype.next = (function (){var self__ = this;
var this$ = this;if(cljs.core.not(this$.hasNext()))
{throw (new Error("No such element"));
} else
{self__._seq = self__._next;
return cljs.core.first(self__._next);
}
});
cljs.core.SeqIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){return (new cljs.core.SeqIter(_seq,_next));
});
cljs.core.seq_iter = (function seq_iter(coll){return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){if((coll == null))
{return cljs.core.nil_iter();
} else
{if(typeof coll === 'string')
{return cljs.core.string_iter(coll);
} else
{if(coll instanceof Array)
{return cljs.core.array_iter(coll);
} else
{if(cljs.core.iterable_QMARK_(coll))
{return cljs.core._iterator(coll);
} else
{if(cljs.core.seqable_QMARK_(coll))
{return cljs.core.seq_iter(coll);
} else
{throw (new Error(("Cannot create iterator from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll))));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.cljs$lang$type = true;
cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__3628__auto__ = !((lt.stepper == null));if(and__3628__auto__)
{return self__.iter.hasNext();
} else
{return and__3628__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__13146 = lt;var G__13147 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__13146,G__13147) : self__.xform.call(null,G__13146,G__13147));
})()))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__13148 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__13148) : self__.xform.call(null,G__13148));
}
});
cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){return (new cljs.core.Stepper(xform,iter));
});
cljs.core.stepper = (function stepper(xform,iter){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return result;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__13150 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__13150) : xform.call(null,G__13150));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.cljs$lang$type = true;
cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__13152 = cljs.core.next(iters__$1);
iters__$1 = G__13152;
continue;
}
}
} else
{return true;
}
break;
}
});
cljs.core.MultiStepper.prototype.next = (function (){var self__ = this;
var _ = this;var n__4510__auto___13153 = self__.iters.length;var i_13154 = (0);while(true){
if((i_13154 < n__4510__auto___13153))
{(self__.nexts[i_13154] = (self__.iters[i_13154]).next());
{
var G__13155 = (i_13154 + (1));
i_13154 = G__13155;
continue;
}
} else
{}
break;
}
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});
cljs.core.MultiStepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__3628__auto__ = !((lt.stepper == null));if(and__3628__auto__)
{return this$.hasNext();
} else
{return and__3628__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next()))))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__13151 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__13151) : self__.xform.call(null,G__13151));
}
});
cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){return (new cljs.core.MultiStepper(xform,iters,nexts));
});
cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return lt;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__13160 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__13160) : xform.call(null,G__13160));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.cljs$lang$type = true;
cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/LazyTransformer");
});
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq(self__.rest);
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return self__.first;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{self__.stepper.step(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return this$__$1;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash_ordered_coll(this$__$1);
});
cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;var s = cljs.core._seq(this$__$1);if(!((s == null)))
{return cljs.core.equiv_sequential(this$__$1,other);
} else
{return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,cljs.core._seq(this$__$1));
});
cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});
cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});
cljs.core.LazyTransformer.create = (function (xform,coll){return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__13161_13165 = cljs.core.seq(colls);var chunk__13162_13166 = null;var count__13163_13167 = (0);var i__13164_13168 = (0);while(true){
if((i__13164_13168 < count__13163_13167))
{var coll_13169 = chunk__13162_13166.cljs$core$IIndexed$_nth$arity$2(null,i__13164_13168);iters.push(cljs.core.iter(coll_13169));
{
var G__13170 = seq__13161_13165;
var G__13171 = chunk__13162_13166;
var G__13172 = count__13163_13167;
var G__13173 = (i__13164_13168 + (1));
seq__13161_13165 = G__13170;
chunk__13162_13166 = G__13171;
count__13163_13167 = G__13172;
i__13164_13168 = G__13173;
continue;
}
} else
{var temp__4126__auto___13174 = cljs.core.seq(seq__13161_13165);if(temp__4126__auto___13174)
{var seq__13161_13175__$1 = temp__4126__auto___13174;if(cljs.core.chunked_seq_QMARK_(seq__13161_13175__$1))
{var c__4410__auto___13176 = cljs.core.chunk_first(seq__13161_13175__$1);{
var G__13177 = cljs.core.chunk_rest(seq__13161_13175__$1);
var G__13178 = c__4410__auto___13176;
var G__13179 = cljs.core.count(c__4410__auto___13176);
var G__13180 = (0);
seq__13161_13165 = G__13177;
chunk__13162_13166 = G__13178;
count__13163_13167 = G__13179;
i__13164_13168 = G__13180;
continue;
}
} else
{var coll_13181 = cljs.core.first(seq__13161_13175__$1);iters.push(cljs.core.iter(coll_13181));
{
var G__13182 = cljs.core.next(seq__13161_13175__$1);
var G__13183 = null;
var G__13184 = (0);
var G__13185 = (0);
seq__13161_13165 = G__13182;
chunk__13162_13166 = G__13183;
count__13163_13167 = G__13184;
i__13164_13168 = G__13185;
continue;
}
}
} else
{}
}
break;
}
return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3640__auto__ = cljs.core.seq(coll);if(or__3640__auto__)
{return or__3640__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__13186__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__13186 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13186__delegate.call(this,xform,coll,colls);};
G__13186.cljs$lang$maxFixedArity = 2;
G__13186.cljs$lang$applyTo = (function (arglist__13187){
var xform = cljs.core.first(arglist__13187);
arglist__13187 = cljs.core.next(arglist__13187);
var coll = cljs.core.first(arglist__13187);
var colls = cljs.core.rest(arglist__13187);
return G__13186__delegate(xform,coll,colls);
});
G__13186.cljs$core$IFn$_invoke$arity$variadic = G__13186__delegate;
return G__13186;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((function (){var G__13189 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13189) : pred.call(null,G__13189));
})()))
{{
var G__13190 = pred;
var G__13191 = cljs.core.next(coll);
pred = G__13190;
coll = G__13191;
continue;
}
} else
{return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq(coll))
{var or__3640__auto__ = (function (){var G__13195 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13195) : pred.call(null,G__13195));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{{
var G__13196 = pred;
var G__13197 = cljs.core.next(coll);
pred = G__13196;
coll = G__13197;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_(n))
{return ((n & (1)) === (0));
} else
{throw (new Error(("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__13204 = null;
var G__13204__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__13204__1 = (function (x){return cljs.core.not((function (){var G__13201 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13201) : f.call(null,G__13201));
})());
});
var G__13204__2 = (function (x,y){return cljs.core.not((function (){var G__13202 = x;var G__13203 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13202,G__13203) : f.call(null,G__13202,G__13203));
})());
});
var G__13204__3 = (function() { 
var G__13205__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__13205 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13205__delegate.call(this,x,y,zs);};
G__13205.cljs$lang$maxFixedArity = 2;
G__13205.cljs$lang$applyTo = (function (arglist__13206){
var x = cljs.core.first(arglist__13206);
arglist__13206 = cljs.core.next(arglist__13206);
var y = cljs.core.first(arglist__13206);
var zs = cljs.core.rest(arglist__13206);
return G__13205__delegate(x,y,zs);
});
G__13205.cljs$core$IFn$_invoke$arity$variadic = G__13205__delegate;
return G__13205;
})()
;
G__13204 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__13204__0.call(this);
case 1:
return G__13204__1.call(this,x);
case 2:
return G__13204__2.call(this,x,y);
default:
return G__13204__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13204.cljs$lang$maxFixedArity = 2;
G__13204.cljs$lang$applyTo = G__13204__3.cljs$lang$applyTo;
G__13204.cljs$core$IFn$_invoke$arity$0 = G__13204__0;
G__13204.cljs$core$IFn$_invoke$arity$1 = G__13204__1;
G__13204.cljs$core$IFn$_invoke$arity$2 = G__13204__2;
G__13204.cljs$core$IFn$_invoke$arity$variadic = G__13204__3.cljs$core$IFn$_invoke$arity$variadic;
return G__13204;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__13207__delegate = function (args){return x;
};
var G__13207 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13207__delegate.call(this,args);};
G__13207.cljs$lang$maxFixedArity = 0;
G__13207.cljs$lang$applyTo = (function (arglist__13208){
var args = cljs.core.seq(arglist__13208);
return G__13207__delegate(args);
});
G__13207.cljs$core$IFn$_invoke$arity$variadic = G__13207__delegate;
return G__13207;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__13263 = null;
var G__13263__0 = (function (){var G__13236 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13236) : f.call(null,G__13236));
});
var G__13263__1 = (function (x){var G__13237 = (function (){var G__13238 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13238) : g.call(null,G__13238));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13237) : f.call(null,G__13237));
});
var G__13263__2 = (function (x,y){var G__13239 = (function (){var G__13240 = x;var G__13241 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__13240,G__13241) : g.call(null,G__13240,G__13241));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13239) : f.call(null,G__13239));
});
var G__13263__3 = (function (x,y,z){var G__13242 = (function (){var G__13243 = x;var G__13244 = y;var G__13245 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__13243,G__13244,G__13245) : g.call(null,G__13243,G__13244,G__13245));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13242) : f.call(null,G__13242));
});
var G__13263__4 = (function() { 
var G__13264__delegate = function (x,y,z,args){var G__13246 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13246) : f.call(null,G__13246));
};
var G__13264 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13264__delegate.call(this,x,y,z,args);};
G__13264.cljs$lang$maxFixedArity = 3;
G__13264.cljs$lang$applyTo = (function (arglist__13265){
var x = cljs.core.first(arglist__13265);
arglist__13265 = cljs.core.next(arglist__13265);
var y = cljs.core.first(arglist__13265);
arglist__13265 = cljs.core.next(arglist__13265);
var z = cljs.core.first(arglist__13265);
var args = cljs.core.rest(arglist__13265);
return G__13264__delegate(x,y,z,args);
});
G__13264.cljs$core$IFn$_invoke$arity$variadic = G__13264__delegate;
return G__13264;
})()
;
G__13263 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13263__0.call(this);
case 1:
return G__13263__1.call(this,x);
case 2:
return G__13263__2.call(this,x,y);
case 3:
return G__13263__3.call(this,x,y,z);
default:
return G__13263__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13263.cljs$lang$maxFixedArity = 3;
G__13263.cljs$lang$applyTo = G__13263__4.cljs$lang$applyTo;
G__13263.cljs$core$IFn$_invoke$arity$0 = G__13263__0;
G__13263.cljs$core$IFn$_invoke$arity$1 = G__13263__1;
G__13263.cljs$core$IFn$_invoke$arity$2 = G__13263__2;
G__13263.cljs$core$IFn$_invoke$arity$3 = G__13263__3;
G__13263.cljs$core$IFn$_invoke$arity$variadic = G__13263__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13263;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__13266 = null;
var G__13266__0 = (function (){var G__13247 = (function (){var G__13248 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13248) : g.call(null,G__13248));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13247) : f.call(null,G__13247));
});
var G__13266__1 = (function (x){var G__13249 = (function (){var G__13250 = (function (){var G__13251 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__13251) : h.call(null,G__13251));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13250) : g.call(null,G__13250));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13249) : f.call(null,G__13249));
});
var G__13266__2 = (function (x,y){var G__13252 = (function (){var G__13253 = (function (){var G__13254 = x;var G__13255 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__13254,G__13255) : h.call(null,G__13254,G__13255));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13253) : g.call(null,G__13253));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13252) : f.call(null,G__13252));
});
var G__13266__3 = (function (x,y,z){var G__13256 = (function (){var G__13257 = (function (){var G__13258 = x;var G__13259 = y;var G__13260 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__13258,G__13259,G__13260) : h.call(null,G__13258,G__13259,G__13260));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13257) : g.call(null,G__13257));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13256) : f.call(null,G__13256));
});
var G__13266__4 = (function() { 
var G__13267__delegate = function (x,y,z,args){var G__13261 = (function (){var G__13262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__13262) : g.call(null,G__13262));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13261) : f.call(null,G__13261));
};
var G__13267 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13267__delegate.call(this,x,y,z,args);};
G__13267.cljs$lang$maxFixedArity = 3;
G__13267.cljs$lang$applyTo = (function (arglist__13268){
var x = cljs.core.first(arglist__13268);
arglist__13268 = cljs.core.next(arglist__13268);
var y = cljs.core.first(arglist__13268);
arglist__13268 = cljs.core.next(arglist__13268);
var z = cljs.core.first(arglist__13268);
var args = cljs.core.rest(arglist__13268);
return G__13267__delegate(x,y,z,args);
});
G__13267.cljs$core$IFn$_invoke$arity$variadic = G__13267__delegate;
return G__13267;
})()
;
G__13266 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13266__0.call(this);
case 1:
return G__13266__1.call(this,x);
case 2:
return G__13266__2.call(this,x,y);
case 3:
return G__13266__3.call(this,x,y,z);
default:
return G__13266__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13266.cljs$lang$maxFixedArity = 3;
G__13266.cljs$lang$applyTo = G__13266__4.cljs$lang$applyTo;
G__13266.cljs$core$IFn$_invoke$arity$0 = G__13266__0;
G__13266.cljs$core$IFn$_invoke$arity$1 = G__13266__1;
G__13266.cljs$core$IFn$_invoke$arity$2 = G__13266__2;
G__13266.cljs$core$IFn$_invoke$arity$3 = G__13266__3;
G__13266.cljs$core$IFn$_invoke$arity$variadic = G__13266__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13266;
})()
});
var comp__4 = (function() { 
var G__13269__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__13270__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__13271 = cljs.core.first(fs__$2).call(null,ret);
var G__13272 = cljs.core.next(fs__$2);
ret = G__13271;
fs__$2 = G__13272;
continue;
}
} else
{return ret;
}
break;
}
};
var G__13270 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13270__delegate.call(this,args);};
G__13270.cljs$lang$maxFixedArity = 0;
G__13270.cljs$lang$applyTo = (function (arglist__13273){
var args = cljs.core.seq(arglist__13273);
return G__13270__delegate(args);
});
G__13270.cljs$core$IFn$_invoke$arity$variadic = G__13270__delegate;
return G__13270;
})()
;
;})(fs__$1))
};
var G__13269 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13269__delegate.call(this,f1,f2,f3,fs);};
G__13269.cljs$lang$maxFixedArity = 3;
G__13269.cljs$lang$applyTo = (function (arglist__13274){
var f1 = cljs.core.first(arglist__13274);
arglist__13274 = cljs.core.next(arglist__13274);
var f2 = cljs.core.first(arglist__13274);
arglist__13274 = cljs.core.next(arglist__13274);
var f3 = cljs.core.first(arglist__13274);
var fs = cljs.core.rest(arglist__13274);
return G__13269__delegate(f1,f2,f3,fs);
});
G__13269.cljs$core$IFn$_invoke$arity$variadic = G__13269__delegate;
return G__13269;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__13275__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__13275 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13275__delegate.call(this,args);};
G__13275.cljs$lang$maxFixedArity = 0;
G__13275.cljs$lang$applyTo = (function (arglist__13276){
var args = cljs.core.seq(arglist__13276);
return G__13275__delegate(args);
});
G__13275.cljs$core$IFn$_invoke$arity$variadic = G__13275__delegate;
return G__13275;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__13277__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__13277 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13277__delegate.call(this,args);};
G__13277.cljs$lang$maxFixedArity = 0;
G__13277.cljs$lang$applyTo = (function (arglist__13278){
var args = cljs.core.seq(arglist__13278);
return G__13277__delegate(args);
});
G__13277.cljs$core$IFn$_invoke$arity$variadic = G__13277__delegate;
return G__13277;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__13279__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__13279 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13279__delegate.call(this,args);};
G__13279.cljs$lang$maxFixedArity = 0;
G__13279.cljs$lang$applyTo = (function (arglist__13280){
var args = cljs.core.seq(arglist__13280);
return G__13279__delegate(args);
});
G__13279.cljs$core$IFn$_invoke$arity$variadic = G__13279__delegate;
return G__13279;
})()
;
});
var partial__5 = (function() { 
var G__13281__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__13282__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__13282 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__13282__delegate.call(this,args);};
G__13282.cljs$lang$maxFixedArity = 0;
G__13282.cljs$lang$applyTo = (function (arglist__13283){
var args = cljs.core.seq(arglist__13283);
return G__13282__delegate(args);
});
G__13282.cljs$core$IFn$_invoke$arity$variadic = G__13282__delegate;
return G__13282;
})()
;
};
var G__13281 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__13281__delegate.call(this,f,arg1,arg2,arg3,more);};
G__13281.cljs$lang$maxFixedArity = 4;
G__13281.cljs$lang$applyTo = (function (arglist__13284){
var f = cljs.core.first(arglist__13284);
arglist__13284 = cljs.core.next(arglist__13284);
var arg1 = cljs.core.first(arglist__13284);
arglist__13284 = cljs.core.next(arglist__13284);
var arg2 = cljs.core.first(arglist__13284);
arglist__13284 = cljs.core.next(arglist__13284);
var arg3 = cljs.core.first(arglist__13284);
var more = cljs.core.rest(arglist__13284);
return G__13281__delegate(f,arg1,arg2,arg3,more);
});
G__13281.cljs$core$IFn$_invoke$arity$variadic = G__13281__delegate;
return G__13281;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__13317 = null;
var G__13317__1 = (function (a){var G__13301 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13301) : f.call(null,G__13301));
});
var G__13317__2 = (function (a,b){var G__13302 = (((a == null))?x:a);var G__13303 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13302,G__13303) : f.call(null,G__13302,G__13303));
});
var G__13317__3 = (function (a,b,c){var G__13304 = (((a == null))?x:a);var G__13305 = b;var G__13306 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13304,G__13305,G__13306) : f.call(null,G__13304,G__13305,G__13306));
});
var G__13317__4 = (function() { 
var G__13318__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__13318 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13318__delegate.call(this,a,b,c,ds);};
G__13318.cljs$lang$maxFixedArity = 3;
G__13318.cljs$lang$applyTo = (function (arglist__13319){
var a = cljs.core.first(arglist__13319);
arglist__13319 = cljs.core.next(arglist__13319);
var b = cljs.core.first(arglist__13319);
arglist__13319 = cljs.core.next(arglist__13319);
var c = cljs.core.first(arglist__13319);
var ds = cljs.core.rest(arglist__13319);
return G__13318__delegate(a,b,c,ds);
});
G__13318.cljs$core$IFn$_invoke$arity$variadic = G__13318__delegate;
return G__13318;
})()
;
G__13317 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__13317__1.call(this,a);
case 2:
return G__13317__2.call(this,a,b);
case 3:
return G__13317__3.call(this,a,b,c);
default:
return G__13317__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13317.cljs$lang$maxFixedArity = 3;
G__13317.cljs$lang$applyTo = G__13317__4.cljs$lang$applyTo;
G__13317.cljs$core$IFn$_invoke$arity$1 = G__13317__1;
G__13317.cljs$core$IFn$_invoke$arity$2 = G__13317__2;
G__13317.cljs$core$IFn$_invoke$arity$3 = G__13317__3;
G__13317.cljs$core$IFn$_invoke$arity$variadic = G__13317__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13317;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__13320 = null;
var G__13320__2 = (function (a,b){var G__13307 = (((a == null))?x:a);var G__13308 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13307,G__13308) : f.call(null,G__13307,G__13308));
});
var G__13320__3 = (function (a,b,c){var G__13309 = (((a == null))?x:a);var G__13310 = (((b == null))?y:b);var G__13311 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13309,G__13310,G__13311) : f.call(null,G__13309,G__13310,G__13311));
});
var G__13320__4 = (function() { 
var G__13321__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__13321 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13321__delegate.call(this,a,b,c,ds);};
G__13321.cljs$lang$maxFixedArity = 3;
G__13321.cljs$lang$applyTo = (function (arglist__13322){
var a = cljs.core.first(arglist__13322);
arglist__13322 = cljs.core.next(arglist__13322);
var b = cljs.core.first(arglist__13322);
arglist__13322 = cljs.core.next(arglist__13322);
var c = cljs.core.first(arglist__13322);
var ds = cljs.core.rest(arglist__13322);
return G__13321__delegate(a,b,c,ds);
});
G__13321.cljs$core$IFn$_invoke$arity$variadic = G__13321__delegate;
return G__13321;
})()
;
G__13320 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13320__2.call(this,a,b);
case 3:
return G__13320__3.call(this,a,b,c);
default:
return G__13320__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13320.cljs$lang$maxFixedArity = 3;
G__13320.cljs$lang$applyTo = G__13320__4.cljs$lang$applyTo;
G__13320.cljs$core$IFn$_invoke$arity$2 = G__13320__2;
G__13320.cljs$core$IFn$_invoke$arity$3 = G__13320__3;
G__13320.cljs$core$IFn$_invoke$arity$variadic = G__13320__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13320;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__13323 = null;
var G__13323__2 = (function (a,b){var G__13312 = (((a == null))?x:a);var G__13313 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13312,G__13313) : f.call(null,G__13312,G__13313));
});
var G__13323__3 = (function (a,b,c){var G__13314 = (((a == null))?x:a);var G__13315 = (((b == null))?y:b);var G__13316 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13314,G__13315,G__13316) : f.call(null,G__13314,G__13315,G__13316));
});
var G__13323__4 = (function() { 
var G__13324__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__13324 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13324__delegate.call(this,a,b,c,ds);};
G__13324.cljs$lang$maxFixedArity = 3;
G__13324.cljs$lang$applyTo = (function (arglist__13325){
var a = cljs.core.first(arglist__13325);
arglist__13325 = cljs.core.next(arglist__13325);
var b = cljs.core.first(arglist__13325);
arglist__13325 = cljs.core.next(arglist__13325);
var c = cljs.core.first(arglist__13325);
var ds = cljs.core.rest(arglist__13325);
return G__13324__delegate(a,b,c,ds);
});
G__13324.cljs$core$IFn$_invoke$arity$variadic = G__13324__delegate;
return G__13324;
})()
;
G__13323 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__13323__2.call(this,a,b);
case 3:
return G__13323__3.call(this,a,b,c);
default:
return G__13323__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13323.cljs$lang$maxFixedArity = 3;
G__13323.cljs$lang$applyTo = G__13323__4.cljs$lang$applyTo;
G__13323.cljs$core$IFn$_invoke$arity$2 = G__13323__2;
G__13323.cljs$core$IFn$_invoke$arity$3 = G__13323__3;
G__13323.cljs$core$IFn$_invoke$arity$variadic = G__13323__4.cljs$core$IFn$_invoke$arity$variadic;
return G__13323;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4510__auto___13374 = size;var i_13375 = (0);while(true){
if((i_13375 < n__4510__auto___13374))
{cljs.core.chunk_append(b,(function (){var G__13370 = (idx + i_13375);var G__13371 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13375);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13370,G__13371) : f.call(null,G__13370,G__13371));
})());
{
var G__13376 = (i_13375 + (1));
i_13375 = G__13376;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__13372 = idx;var G__13373 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13372,G__13373) : f.call(null,G__13372,G__13373));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){return (function (rf){return (function() {
var G__13395 = null;
var G__13395__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13395__1 = (function (result){var G__13389 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13389) : rf.call(null,G__13389));
});
var G__13395__2 = (function (result,input){var v = (function (){var G__13390 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13390) : f.call(null,G__13390));
})();if((v == null))
{return result;
} else
{var G__13391 = result;var G__13392 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13391,G__13392) : rf.call(null,G__13391,G__13392));
}
});
G__13395 = function(result,input){
switch(arguments.length){
case 0:
return G__13395__0.call(this);
case 1:
return G__13395__1.call(this,result);
case 2:
return G__13395__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13395.cljs$core$IFn$_invoke$arity$0 = G__13395__0;
G__13395.cljs$core$IFn$_invoke$arity$1 = G__13395__1;
G__13395.cljs$core$IFn$_invoke$arity$2 = G__13395__2;
return G__13395;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4510__auto___13396 = size;var i_13397 = (0);while(true){
if((i_13397 < n__4510__auto___13396))
{var x_13398 = (function (){var G__13393 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13397);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13393) : f.call(null,G__13393));
})();if((x_13398 == null))
{} else
{cljs.core.chunk_append(b,x_13398);
}
{
var G__13399 = (i_13397 + (1));
i_13397 = G__13399;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__13394 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13394) : f.call(null,G__13394));
})();if((x == null))
{return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__13400 = this$__$1;return goog.getUid(G__13400);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__13401 = cljs.core.seq(self__.watches);var chunk__13402 = null;var count__13403 = (0);var i__13404 = (0);while(true){
if((i__13404 < count__13403))
{var vec__13405 = chunk__13402.cljs$core$IIndexed$_nth$arity$2(null,i__13404);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13405,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13405,(1),null);var G__13406_13415 = key;var G__13407_13416 = this$__$1;var G__13408_13417 = oldval;var G__13409_13418 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13406_13415,G__13407_13416,G__13408_13417,G__13409_13418) : f.call(null,G__13406_13415,G__13407_13416,G__13408_13417,G__13409_13418));
{
var G__13419 = seq__13401;
var G__13420 = chunk__13402;
var G__13421 = count__13403;
var G__13422 = (i__13404 + (1));
seq__13401 = G__13419;
chunk__13402 = G__13420;
count__13403 = G__13421;
i__13404 = G__13422;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__13401);if(temp__4126__auto__)
{var seq__13401__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13401__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__13401__$1);{
var G__13423 = cljs.core.chunk_rest(seq__13401__$1);
var G__13424 = c__4410__auto__;
var G__13425 = cljs.core.count(c__4410__auto__);
var G__13426 = (0);
seq__13401 = G__13423;
chunk__13402 = G__13424;
count__13403 = G__13425;
i__13404 = G__13426;
continue;
}
} else
{var vec__13410 = cljs.core.first(seq__13401__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13410,(1),null);var G__13411_13427 = key;var G__13412_13428 = this$__$1;var G__13413_13429 = oldval;var G__13414_13430 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__13411_13427,G__13412_13428,G__13413_13429,G__13414_13430) : f.call(null,G__13411_13427,G__13412_13428,G__13413_13429,G__13414_13430));
{
var G__13431 = cljs.core.next(seq__13401__$1);
var G__13432 = null;
var G__13433 = (0);
var G__13434 = (0);
seq__13401 = G__13431;
chunk__13402 = G__13432;
count__13403 = G__13433;
i__13404 = G__13434;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
return this$__$1;
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.Atom.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13438__delegate = function (x,p__13435){var map__13437 = p__13435;var map__13437__$1 = ((cljs.core.seq_QMARK_(map__13437))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13437):map__13437);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13437__$1,cljs.core.constant$keyword$22);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13437__$1,cljs.core.constant$keyword$17);return (new cljs.core.Atom(x,meta,validator,null));
};
var G__13438 = function (x,var_args){
var p__13435 = null;if (arguments.length > 1) {
  p__13435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13438__delegate.call(this,x,p__13435);};
G__13438.cljs$lang$maxFixedArity = 1;
G__13438.cljs$lang$applyTo = (function (arglist__13439){
var x = cljs.core.first(arglist__13439);
var p__13435 = cljs.core.rest(arglist__13439);
return G__13438__delegate(x,p__13435);
});
G__13438.cljs$core$IFn$_invoke$arity$variadic = G__13438__delegate;
return G__13438;
})()
;
atom = function(x,var_args){
var p__13435 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){if((a instanceof cljs.core.Atom))
{var validate = a.validator;if((validate == null))
{} else
{if(cljs.core.truth_((function (){var G__13442 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__13442) : validate.call(null,G__13442));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13443 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__13443) : cljs.core.pr_str.call(null,G__13443));
})()))));
}
}
var old_value = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches(a,old_value,new_value);
}
return new_value;
} else
{return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__13450 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13450) : f.call(null,G__13450));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__13451 = a.state;var G__13452 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13451,G__13452) : f.call(null,G__13451,G__13452));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__13453 = a.state;var G__13454 = x;var G__13455 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13453,G__13454,G__13455) : f.call(null,G__13453,G__13454,G__13455));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__13456__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__13456 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__13456__delegate.call(this,a,f,x,y,more);};
G__13456.cljs$lang$maxFixedArity = 4;
G__13456.cljs$lang$applyTo = (function (arglist__13457){
var a = cljs.core.first(arglist__13457);
arglist__13457 = cljs.core.next(arglist__13457);
var f = cljs.core.first(arglist__13457);
arglist__13457 = cljs.core.next(arglist__13457);
var x = cljs.core.first(arglist__13457);
arglist__13457 = cljs.core.next(arglist__13457);
var y = cljs.core.first(arglist__13457);
var more = cljs.core.rest(arglist__13457);
return G__13456__delegate(a,f,x,y,more);
});
G__13456.cljs$core$IFn$_invoke$arity$variadic = G__13456__delegate;
return G__13456;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){return (function (rf){var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));return ((function (ia){
return (function() {
var G__13524 = null;
var G__13524__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__13524__1 = (function (result){var G__13491 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__13491) : rf.call(null,G__13491));
});
var G__13524__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__13492 = i;var G__13493 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13492,G__13493) : f.call(null,G__13492,G__13493));
})();if((v == null))
{return result;
} else
{var G__13494 = result;var G__13495 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__13494,G__13495) : rf.call(null,G__13494,G__13495));
}
});
G__13524 = function(result,input){
switch(arguments.length){
case 0:
return G__13524__0.call(this);
case 1:
return G__13524__1.call(this,result);
case 2:
return G__13524__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13524.cljs$core$IFn$_invoke$arity$0 = G__13524__0;
G__13524.cljs$core$IFn$_invoke$arity$1 = G__13524__1;
G__13524.cljs$core$IFn$_invoke$arity$2 = G__13524__2;
return G__13524;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4510__auto___13525 = size;var i_13526 = (0);while(true){
if((i_13526 < n__4510__auto___13525))
{var x_13527 = (function (){var G__13520 = (idx + i_13526);var G__13521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_13526);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13520,G__13521) : f.call(null,G__13520,G__13521));
})();if((x_13527 == null))
{} else
{cljs.core.chunk_append(b,x_13527);
}
{
var G__13528 = (i_13526 + (1));
i_13526 = G__13528;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__13522 = idx;var G__13523 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13522,G__13523) : f.call(null,G__13522,G__13523));
})();if((x == null))
{return keepi((idx + (1)),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__13742 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13742) : p.call(null,G__13742));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13744 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13744) : p.call(null,G__13744));
})();if(cljs.core.truth_(and__3628__auto__))
{var G__13745 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13745) : p.call(null,G__13745));
} else
{return and__3628__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13747 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13747) : p.call(null,G__13747));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13749 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13749) : p.call(null,G__13749));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var G__13750 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__13750) : p.call(null,G__13750));
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__13919__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__13919 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13919__delegate.call(this,x,y,z,args);};
G__13919.cljs$lang$maxFixedArity = 3;
G__13919.cljs$lang$applyTo = (function (arglist__13920){
var x = cljs.core.first(arglist__13920);
arglist__13920 = cljs.core.next(arglist__13920);
var y = cljs.core.first(arglist__13920);
arglist__13920 = cljs.core.next(arglist__13920);
var z = cljs.core.first(arglist__13920);
var args = cljs.core.rest(arglist__13920);
return G__13919__delegate(x,y,z,args);
});
G__13919.cljs$core$IFn$_invoke$arity$variadic = G__13919__delegate;
return G__13919;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13782 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13782) : p1.call(null,G__13782));
})();if(cljs.core.truth_(and__3628__auto__))
{var G__13783 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13783) : p2.call(null,G__13783));
} else
{return and__3628__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13785 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13785) : p1.call(null,G__13785));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13787 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13787) : p1.call(null,G__13787));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = (function (){var G__13789 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13789) : p2.call(null,G__13789));
})();if(cljs.core.truth_(and__3628__auto____$2))
{var G__13790 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13790) : p2.call(null,G__13790));
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13792 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13792) : p1.call(null,G__13792));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13794 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13794) : p1.call(null,G__13794));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = (function (){var G__13796 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13796) : p1.call(null,G__13796));
})();if(cljs.core.truth_(and__3628__auto____$2))
{var and__3628__auto____$3 = (function (){var G__13798 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13798) : p2.call(null,G__13798));
})();if(cljs.core.truth_(and__3628__auto____$3))
{var and__3628__auto____$4 = (function (){var G__13800 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13800) : p2.call(null,G__13800));
})();if(cljs.core.truth_(and__3628__auto____$4))
{var G__13801 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13801) : p2.call(null,G__13801));
} else
{return and__3628__auto____$4;
}
} else
{return and__3628__auto____$3;
}
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__13921__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__13529_SHARP_){var and__3628__auto__ = (function (){var G__13806 = p1__13529_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13806) : p1.call(null,G__13806));
})();if(cljs.core.truth_(and__3628__auto__))
{var G__13807 = p1__13529_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13807) : p2.call(null,G__13807));
} else
{return and__3628__auto__;
}
}),args)));
};
var G__13921 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13921__delegate.call(this,x,y,z,args);};
G__13921.cljs$lang$maxFixedArity = 3;
G__13921.cljs$lang$applyTo = (function (arglist__13922){
var x = cljs.core.first(arglist__13922);
arglist__13922 = cljs.core.next(arglist__13922);
var y = cljs.core.first(arglist__13922);
arglist__13922 = cljs.core.next(arglist__13922);
var z = cljs.core.first(arglist__13922);
var args = cljs.core.rest(arglist__13922);
return G__13921__delegate(x,y,z,args);
});
G__13921.cljs$core$IFn$_invoke$arity$variadic = G__13921__delegate;
return G__13921;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13853 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13853) : p1.call(null,G__13853));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13855 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13855) : p2.call(null,G__13855));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var G__13856 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13856) : p3.call(null,G__13856));
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13858 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13858) : p1.call(null,G__13858));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13860 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13860) : p2.call(null,G__13860));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = (function (){var G__13862 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13862) : p3.call(null,G__13862));
})();if(cljs.core.truth_(and__3628__auto____$2))
{var and__3628__auto____$3 = (function (){var G__13864 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13864) : p1.call(null,G__13864));
})();if(cljs.core.truth_(and__3628__auto____$3))
{var and__3628__auto____$4 = (function (){var G__13866 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13866) : p2.call(null,G__13866));
})();if(cljs.core.truth_(and__3628__auto____$4))
{var G__13867 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13867) : p3.call(null,G__13867));
} else
{return and__3628__auto____$4;
}
} else
{return and__3628__auto____$3;
}
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3628__auto__ = (function (){var G__13869 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13869) : p1.call(null,G__13869));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13871 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13871) : p2.call(null,G__13871));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = (function (){var G__13873 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13873) : p3.call(null,G__13873));
})();if(cljs.core.truth_(and__3628__auto____$2))
{var and__3628__auto____$3 = (function (){var G__13875 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13875) : p1.call(null,G__13875));
})();if(cljs.core.truth_(and__3628__auto____$3))
{var and__3628__auto____$4 = (function (){var G__13877 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13877) : p2.call(null,G__13877));
})();if(cljs.core.truth_(and__3628__auto____$4))
{var and__3628__auto____$5 = (function (){var G__13879 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13879) : p3.call(null,G__13879));
})();if(cljs.core.truth_(and__3628__auto____$5))
{var and__3628__auto____$6 = (function (){var G__13881 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13881) : p1.call(null,G__13881));
})();if(cljs.core.truth_(and__3628__auto____$6))
{var and__3628__auto____$7 = (function (){var G__13883 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13883) : p2.call(null,G__13883));
})();if(cljs.core.truth_(and__3628__auto____$7))
{var G__13884 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13884) : p3.call(null,G__13884));
} else
{return and__3628__auto____$7;
}
} else
{return and__3628__auto____$6;
}
} else
{return and__3628__auto____$5;
}
} else
{return and__3628__auto____$4;
}
} else
{return and__3628__auto____$3;
}
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__13923__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__13530_SHARP_){var and__3628__auto__ = (function (){var G__13891 = p1__13530_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__13891) : p1.call(null,G__13891));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13893 = p1__13530_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__13893) : p2.call(null,G__13893));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var G__13894 = p1__13530_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__13894) : p3.call(null,G__13894));
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
}),args)));
};
var G__13923 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13923__delegate.call(this,x,y,z,args);};
G__13923.cljs$lang$maxFixedArity = 3;
G__13923.cljs$lang$applyTo = (function (arglist__13924){
var x = cljs.core.first(arglist__13924);
arglist__13924 = cljs.core.next(arglist__13924);
var y = cljs.core.first(arglist__13924);
arglist__13924 = cljs.core.next(arglist__13924);
var z = cljs.core.first(arglist__13924);
var args = cljs.core.rest(arglist__13924);
return G__13923__delegate(x,y,z,args);
});
G__13923.cljs$core$IFn$_invoke$arity$variadic = G__13923__delegate;
return G__13923;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__13925__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13531_SHARP_){var G__13910 = x;return (p1__13531_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13531_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13910) : p1__13531_SHARP_.call(null,G__13910));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13532_SHARP_){var and__3628__auto__ = (function (){var G__13912 = x;return (p1__13532_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13532_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13912) : p1__13532_SHARP_.call(null,G__13912));
})();if(cljs.core.truth_(and__3628__auto__))
{var G__13913 = y;return (p1__13532_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13532_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13913) : p1__13532_SHARP_.call(null,G__13913));
} else
{return and__3628__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13533_SHARP_){var and__3628__auto__ = (function (){var G__13915 = x;return (p1__13533_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13533_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13915) : p1__13533_SHARP_.call(null,G__13915));
})();if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__13917 = y;return (p1__13533_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13533_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13917) : p1__13533_SHARP_.call(null,G__13917));
})();if(cljs.core.truth_(and__3628__auto____$1))
{var G__13918 = z;return (p1__13533_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13533_SHARP_.cljs$core$IFn$_invoke$arity$1(G__13918) : p1__13533_SHARP_.call(null,G__13918));
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__13926__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__13534_SHARP_){return cljs.core.every_QMARK_(p1__13534_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__13926 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13926__delegate.call(this,x,y,z,args);};
G__13926.cljs$lang$maxFixedArity = 3;
G__13926.cljs$lang$applyTo = (function (arglist__13927){
var x = cljs.core.first(arglist__13927);
arglist__13927 = cljs.core.next(arglist__13927);
var y = cljs.core.first(arglist__13927);
arglist__13927 = cljs.core.next(arglist__13927);
var z = cljs.core.first(arglist__13927);
var args = cljs.core.rest(arglist__13927);
return G__13926__delegate(x,y,z,args);
});
G__13926.cljs$core$IFn$_invoke$arity$variadic = G__13926__delegate;
return G__13926;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__13925 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13925__delegate.call(this,p1,p2,p3,ps);};
G__13925.cljs$lang$maxFixedArity = 3;
G__13925.cljs$lang$applyTo = (function (arglist__13928){
var p1 = cljs.core.first(arglist__13928);
arglist__13928 = cljs.core.next(arglist__13928);
var p2 = cljs.core.first(arglist__13928);
arglist__13928 = cljs.core.next(arglist__13928);
var p3 = cljs.core.first(arglist__13928);
var ps = cljs.core.rest(arglist__13928);
return G__13925__delegate(p1,p2,p3,ps);
});
G__13925.cljs$core$IFn$_invoke$arity$variadic = G__13925__delegate;
return G__13925;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){var G__14134 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14134) : p.call(null,G__14134));
});
var sp1__2 = (function (x,y){var or__3640__auto__ = (function (){var G__14136 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14136) : p.call(null,G__14136));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var G__14137 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14137) : p.call(null,G__14137));
}
});
var sp1__3 = (function (x,y,z){var or__3640__auto__ = (function (){var G__14139 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14139) : p.call(null,G__14139));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14141 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14141) : p.call(null,G__14141));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var G__14142 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__14142) : p.call(null,G__14142));
}
}
});
var sp1__4 = (function() { 
var G__14303__delegate = function (x,y,z,args){var or__3640__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__14303 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14303__delegate.call(this,x,y,z,args);};
G__14303.cljs$lang$maxFixedArity = 3;
G__14303.cljs$lang$applyTo = (function (arglist__14304){
var x = cljs.core.first(arglist__14304);
arglist__14304 = cljs.core.next(arglist__14304);
var y = cljs.core.first(arglist__14304);
arglist__14304 = cljs.core.next(arglist__14304);
var z = cljs.core.first(arglist__14304);
var args = cljs.core.rest(arglist__14304);
return G__14303__delegate(x,y,z,args);
});
G__14303.cljs$core$IFn$_invoke$arity$variadic = G__14303__delegate;
return G__14303;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__3640__auto__ = (function (){var G__14174 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14174) : p1.call(null,G__14174));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var G__14175 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14175) : p2.call(null,G__14175));
}
});
var sp2__2 = (function (x,y){var or__3640__auto__ = (function (){var G__14177 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14177) : p1.call(null,G__14177));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14179 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14179) : p1.call(null,G__14179));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (function (){var G__14181 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14181) : p2.call(null,G__14181));
})();if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var G__14182 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14182) : p2.call(null,G__14182));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__3640__auto__ = (function (){var G__14184 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14184) : p1.call(null,G__14184));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14186 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14186) : p1.call(null,G__14186));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (function (){var G__14188 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14188) : p1.call(null,G__14188));
})();if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var or__3640__auto____$3 = (function (){var G__14190 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14190) : p2.call(null,G__14190));
})();if(cljs.core.truth_(or__3640__auto____$3))
{return or__3640__auto____$3;
} else
{var or__3640__auto____$4 = (function (){var G__14192 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14192) : p2.call(null,G__14192));
})();if(cljs.core.truth_(or__3640__auto____$4))
{return or__3640__auto____$4;
} else
{var G__14193 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14193) : p2.call(null,G__14193));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__14305__delegate = function (x,y,z,args){var or__3640__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.some(((function (or__3640__auto__){
return (function (p1__13929_SHARP_){var or__3640__auto____$1 = (function (){var G__14195 = p1__13929_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14195) : p1.call(null,G__14195));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var G__14196 = p1__13929_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14196) : p2.call(null,G__14196));
}
});})(or__3640__auto__))
,args);
}
};
var G__14305 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14305__delegate.call(this,x,y,z,args);};
G__14305.cljs$lang$maxFixedArity = 3;
G__14305.cljs$lang$applyTo = (function (arglist__14306){
var x = cljs.core.first(arglist__14306);
arglist__14306 = cljs.core.next(arglist__14306);
var y = cljs.core.first(arglist__14306);
arglist__14306 = cljs.core.next(arglist__14306);
var z = cljs.core.first(arglist__14306);
var args = cljs.core.rest(arglist__14306);
return G__14305__delegate(x,y,z,args);
});
G__14305.cljs$core$IFn$_invoke$arity$variadic = G__14305__delegate;
return G__14305;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__3640__auto__ = (function (){var G__14242 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14242) : p1.call(null,G__14242));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14244 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14244) : p2.call(null,G__14244));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var G__14245 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14245) : p3.call(null,G__14245));
}
}
});
var sp3__2 = (function (x,y){var or__3640__auto__ = (function (){var G__14247 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14247) : p1.call(null,G__14247));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14249 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14249) : p2.call(null,G__14249));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (function (){var G__14251 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14251) : p3.call(null,G__14251));
})();if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var or__3640__auto____$3 = (function (){var G__14253 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14253) : p1.call(null,G__14253));
})();if(cljs.core.truth_(or__3640__auto____$3))
{return or__3640__auto____$3;
} else
{var or__3640__auto____$4 = (function (){var G__14255 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14255) : p2.call(null,G__14255));
})();if(cljs.core.truth_(or__3640__auto____$4))
{return or__3640__auto____$4;
} else
{var G__14256 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14256) : p3.call(null,G__14256));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__3640__auto__ = (function (){var G__14258 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14258) : p1.call(null,G__14258));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14260 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14260) : p2.call(null,G__14260));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (function (){var G__14262 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14262) : p3.call(null,G__14262));
})();if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var or__3640__auto____$3 = (function (){var G__14264 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14264) : p1.call(null,G__14264));
})();if(cljs.core.truth_(or__3640__auto____$3))
{return or__3640__auto____$3;
} else
{var or__3640__auto____$4 = (function (){var G__14266 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14266) : p2.call(null,G__14266));
})();if(cljs.core.truth_(or__3640__auto____$4))
{return or__3640__auto____$4;
} else
{var or__3640__auto____$5 = (function (){var G__14268 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14268) : p3.call(null,G__14268));
})();if(cljs.core.truth_(or__3640__auto____$5))
{return or__3640__auto____$5;
} else
{var or__3640__auto____$6 = (function (){var G__14270 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14270) : p1.call(null,G__14270));
})();if(cljs.core.truth_(or__3640__auto____$6))
{return or__3640__auto____$6;
} else
{var or__3640__auto____$7 = (function (){var G__14272 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14272) : p2.call(null,G__14272));
})();if(cljs.core.truth_(or__3640__auto____$7))
{return or__3640__auto____$7;
} else
{var G__14273 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14273) : p3.call(null,G__14273));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__14307__delegate = function (x,y,z,args){var or__3640__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.some(((function (or__3640__auto__){
return (function (p1__13930_SHARP_){var or__3640__auto____$1 = (function (){var G__14275 = p1__13930_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__14275) : p1.call(null,G__14275));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (function (){var G__14277 = p1__13930_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__14277) : p2.call(null,G__14277));
})();if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{var G__14278 = p1__13930_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__14278) : p3.call(null,G__14278));
}
}
});})(or__3640__auto__))
,args);
}
};
var G__14307 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14307__delegate.call(this,x,y,z,args);};
G__14307.cljs$lang$maxFixedArity = 3;
G__14307.cljs$lang$applyTo = (function (arglist__14308){
var x = cljs.core.first(arglist__14308);
arglist__14308 = cljs.core.next(arglist__14308);
var y = cljs.core.first(arglist__14308);
arglist__14308 = cljs.core.next(arglist__14308);
var z = cljs.core.first(arglist__14308);
var args = cljs.core.rest(arglist__14308);
return G__14307__delegate(x,y,z,args);
});
G__14307.cljs$core$IFn$_invoke$arity$variadic = G__14307__delegate;
return G__14307;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__14309__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__13931_SHARP_){var G__14294 = x;return (p1__13931_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13931_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14294) : p1__13931_SHARP_.call(null,G__14294));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__13932_SHARP_){var or__3640__auto__ = (function (){var G__14296 = x;return (p1__13932_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13932_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14296) : p1__13932_SHARP_.call(null,G__14296));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var G__14297 = y;return (p1__13932_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13932_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14297) : p1__13932_SHARP_.call(null,G__14297));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__13933_SHARP_){var or__3640__auto__ = (function (){var G__14299 = x;return (p1__13933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13933_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14299) : p1__13933_SHARP_.call(null,G__14299));
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var G__14301 = y;return (p1__13933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13933_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14301) : p1__13933_SHARP_.call(null,G__14301));
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var G__14302 = z;return (p1__13933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13933_SHARP_.cljs$core$IFn$_invoke$arity$1(G__14302) : p1__13933_SHARP_.call(null,G__14302));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__14310__delegate = function (x,y,z,args){var or__3640__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.some(((function (or__3640__auto__,ps__$1){
return (function (p1__13934_SHARP_){return cljs.core.some(p1__13934_SHARP_,args);
});})(or__3640__auto__,ps__$1))
,ps__$1);
}
};
var G__14310 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14310__delegate.call(this,x,y,z,args);};
G__14310.cljs$lang$maxFixedArity = 3;
G__14310.cljs$lang$applyTo = (function (arglist__14311){
var x = cljs.core.first(arglist__14311);
arglist__14311 = cljs.core.next(arglist__14311);
var y = cljs.core.first(arglist__14311);
arglist__14311 = cljs.core.next(arglist__14311);
var z = cljs.core.first(arglist__14311);
var args = cljs.core.rest(arglist__14311);
return G__14310__delegate(x,y,z,args);
});
G__14310.cljs$core$IFn$_invoke$arity$variadic = G__14310__delegate;
return G__14310;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__14309 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14309__delegate.call(this,p1,p2,p3,ps);};
G__14309.cljs$lang$maxFixedArity = 3;
G__14309.cljs$lang$applyTo = (function (arglist__14312){
var p1 = cljs.core.first(arglist__14312);
arglist__14312 = cljs.core.next(arglist__14312);
var p2 = cljs.core.first(arglist__14312);
arglist__14312 = cljs.core.next(arglist__14312);
var p3 = cljs.core.first(arglist__14312);
var ps = cljs.core.rest(arglist__14312);
return G__14309__delegate(p1,p2,p3,ps);
});
G__14309.cljs$core$IFn$_invoke$arity$variadic = G__14309__delegate;
return G__14309;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){return (function (rf){return (function() {
var G__14367 = null;
var G__14367__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14367__1 = (function (result){var G__14353 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14353) : rf.call(null,G__14353));
});
var G__14367__2 = (function (result,input){var G__14354 = result;var G__14355 = (function (){var G__14356 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14356) : f.call(null,G__14356));
})();return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14354,G__14355) : rf.call(null,G__14354,G__14355));
});
var G__14367__3 = (function() { 
var G__14368__delegate = function (result,input,inputs){var G__14357 = result;var G__14358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14357,G__14358) : rf.call(null,G__14357,G__14358));
};
var G__14368 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14368__delegate.call(this,result,input,inputs);};
G__14368.cljs$lang$maxFixedArity = 2;
G__14368.cljs$lang$applyTo = (function (arglist__14369){
var result = cljs.core.first(arglist__14369);
arglist__14369 = cljs.core.next(arglist__14369);
var input = cljs.core.first(arglist__14369);
var inputs = cljs.core.rest(arglist__14369);
return G__14368__delegate(result,input,inputs);
});
G__14368.cljs$core$IFn$_invoke$arity$variadic = G__14368__delegate;
return G__14368;
})()
;
G__14367 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__14367__0.call(this);
case 1:
return G__14367__1.call(this,result);
case 2:
return G__14367__2.call(this,result,input);
default:
return G__14367__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14367.cljs$lang$maxFixedArity = 2;
G__14367.cljs$lang$applyTo = G__14367__3.cljs$lang$applyTo;
G__14367.cljs$core$IFn$_invoke$arity$0 = G__14367__0;
G__14367.cljs$core$IFn$_invoke$arity$1 = G__14367__1;
G__14367.cljs$core$IFn$_invoke$arity$2 = G__14367__2;
G__14367.cljs$core$IFn$_invoke$arity$variadic = G__14367__3.cljs$core$IFn$_invoke$arity$variadic;
return G__14367;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4510__auto___14370 = size;var i_14371 = (0);while(true){
if((i_14371 < n__4510__auto___14370))
{cljs.core.chunk_append(b,(function (){var G__14359 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14371);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14359) : f.call(null,G__14359));
})());
{
var G__14372 = (i_14371 + (1));
i_14371 = G__14372;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__14360 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14360) : f.call(null,G__14360));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__14361 = cljs.core.first(s1);var G__14362 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14361,G__14362) : f.call(null,G__14361,G__14362));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__14363 = cljs.core.first(s1);var G__14364 = cljs.core.first(s2);var G__14365 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14363,G__14364,G__14365) : f.call(null,G__14363,G__14364,G__14365));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__14373__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__14313_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__14313_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__14373 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__14373__delegate.call(this,f,c1,c2,c3,colls);};
G__14373.cljs$lang$maxFixedArity = 4;
G__14373.cljs$lang$applyTo = (function (arglist__14374){
var f = cljs.core.first(arglist__14374);
arglist__14374 = cljs.core.next(arglist__14374);
var c1 = cljs.core.first(arglist__14374);
arglist__14374 = cljs.core.next(arglist__14374);
var c2 = cljs.core.first(arglist__14374);
arglist__14374 = cljs.core.next(arglist__14374);
var c3 = cljs.core.first(arglist__14374);
var colls = cljs.core.rest(arglist__14374);
return G__14373__delegate(f,c1,c2,c3,colls);
});
G__14373.cljs$core$IFn$_invoke$arity$variadic = G__14373__delegate;
return G__14373;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__14383 = null;
var G__14383__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14383__1 = (function (result){var G__14380 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14380) : rf.call(null,G__14380));
});
var G__14383__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__14381 = result;var G__14382 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14381,G__14382) : rf.call(null,G__14381,G__14382));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__14383 = function(result,input){
switch(arguments.length){
case 0:
return G__14383__0.call(this);
case 1:
return G__14383__1.call(this,result);
case 2:
return G__14383__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14383.cljs$core$IFn$_invoke$arity$0 = G__14383__0;
G__14383.cljs$core$IFn$_invoke$arity$1 = G__14383__1;
G__14383.cljs$core$IFn$_invoke$arity$2 = G__14383__2;
return G__14383;
})()
;})(na))
});
});
var take__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > (0)))
{var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__14390 = null;
var G__14390__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14390__1 = (function (result){var G__14387 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14387) : rf.call(null,G__14387));
});
var G__14390__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__14388 = result;var G__14389 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14388,G__14389) : rf.call(null,G__14388,G__14389));
}
});
G__14390 = function(result,input){
switch(arguments.length){
case 0:
return G__14390__0.call(this);
case 1:
return G__14390__1.call(this,result);
case 2:
return G__14390__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14390.cljs$core$IFn$_invoke$arity$0 = G__14390__0;
G__14390.cljs$core$IFn$_invoke$arity$1 = G__14390__1;
G__14390.cljs$core$IFn$_invoke$arity$2 = G__14390__2;
return G__14390;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__14391 = (n__$1 - (1));
var G__14392 = cljs.core.rest(s);
n__$1 = G__14391;
coll__$1 = G__14392;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq(coll);var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));while(true){
if(lead)
{{
var G__14395 = cljs.core.next(s);
var G__14396 = cljs.core.next(lead);
s = G__14395;
lead = G__14396;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){return (function (rf){var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);return ((function (da){
return (function() {
var G__14409 = null;
var G__14409__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14409__1 = (function (result){var G__14403 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14403) : rf.call(null,G__14403));
});
var G__14409__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__3628__auto__ = drop_QMARK_;if(cljs.core.truth_(and__3628__auto__))
{var G__14404 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14404) : pred.call(null,G__14404));
} else
{return and__3628__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__14405 = result;var G__14406 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14405,G__14406) : rf.call(null,G__14405,G__14406));
}
});
G__14409 = function(result,input){
switch(arguments.length){
case 0:
return G__14409__0.call(this);
case 1:
return G__14409__1.call(this,result);
case 2:
return G__14409__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14409.cljs$core$IFn$_invoke$arity$0 = G__14409__0;
G__14409.cljs$core$IFn$_invoke$arity$1 = G__14409__1;
G__14409.cljs$core$IFn$_invoke$arity$2 = G__14409__2;
return G__14409;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__3628__auto__ = s;if(and__3628__auto__)
{var G__14408 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__14408) : pred__$1.call(null,G__14408));
} else
{return and__3628__auto__;
}
})()))
{{
var G__14410 = pred__$1;
var G__14411 = cljs.core.rest(s);
pred__$1 = G__14410;
coll__$1 = G__14411;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__14420 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14420) : f.call(null,G__14420));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__14423__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__14423 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14423__delegate.call(this,c1,c2,colls);};
G__14423.cljs$lang$maxFixedArity = 2;
G__14423.cljs$lang$applyTo = (function (arglist__14424){
var c1 = cljs.core.first(arglist__14424);
arglist__14424 = cljs.core.next(arglist__14424);
var c2 = cljs.core.first(arglist__14424);
var colls = cljs.core.rest(arglist__14424);
return G__14423__delegate(c1,c2,colls);
});
G__14423.cljs$core$IFn$_invoke$arity$variadic = G__14423__delegate;
return G__14423;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var coll__$1 = temp__4124__auto__;return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__14433__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__14433 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__14433__delegate.call(this,f,colls);};
G__14433.cljs$lang$maxFixedArity = 1;
G__14433.cljs$lang$applyTo = (function (arglist__14434){
var f = cljs.core.first(arglist__14434);
var colls = cljs.core.rest(arglist__14434);
return G__14433__delegate(f,colls);
});
G__14433.cljs$core$IFn$_invoke$arity$variadic = G__14433__delegate;
return G__14433;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (rf){return (function() {
var G__14453 = null;
var G__14453__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__14453__1 = (function (result){var G__14447 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__14447) : rf.call(null,G__14447));
});
var G__14453__2 = (function (result,input){if(cljs.core.truth_((function (){var G__14448 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14448) : pred.call(null,G__14448));
})()))
{var G__14449 = result;var G__14450 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__14449,G__14450) : rf.call(null,G__14449,G__14450));
} else
{return result;
}
});
G__14453 = function(result,input){
switch(arguments.length){
case 0:
return G__14453__0.call(this);
case 1:
return G__14453__1.call(this,result);
case 2:
return G__14453__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14453.cljs$core$IFn$_invoke$arity$0 = G__14453__0;
G__14453.cljs$core$IFn$_invoke$arity$1 = G__14453__1;
G__14453.cljs$core$IFn$_invoke$arity$2 = G__14453__2;
return G__14453;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4510__auto___14454 = size;var i_14455 = (0);while(true){
if((i_14455 < n__4510__auto___14454))
{if(cljs.core.truth_((function (){var G__14451 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14455);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14451) : pred.call(null,G__14451));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_14455));
} else
{}
{
var G__14456 = (i_14455 + (1));
i_14455 = G__14456;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__14452 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14452) : pred.call(null,G__14452));
})()))
{return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else
{return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else
{return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__14463 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14463) : branch_QMARK_.call(null,G__14463));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__14464 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__14464) : children.call(null,G__14464));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14465_SHARP_){return !(cljs.core.sequential_QMARK_(p1__14465_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__14468 = to;if(G__14468)
{var bit__4297__auto__ = (G__14468.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4297__auto__) || (G__14468.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){if((function (){var G__14469 = to;if(G__14469)
{var bit__4297__auto__ = (G__14469.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4297__auto__) || (G__14469.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__14471 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14471) : f.call(null,G__14471));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__14472__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__14472 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__14472__delegate.call(this,f,c1,c2,c3,colls);};
G__14472.cljs$lang$maxFixedArity = 4;
G__14472.cljs$lang$applyTo = (function (arglist__14473){
var f = cljs.core.first(arglist__14473);
arglist__14473 = cljs.core.next(arglist__14473);
var c1 = cljs.core.first(arglist__14473);
arglist__14473 = cljs.core.next(arglist__14473);
var c2 = cljs.core.first(arglist__14473);
arglist__14473 = cljs.core.next(arglist__14473);
var c3 = cljs.core.first(arglist__14473);
var colls = cljs.core.rest(arglist__14473);
return G__14472__delegate(f,c1,c2,c3,colls);
});
G__14472.cljs$core$IFn$_invoke$arity$variadic = G__14472__delegate;
return G__14472;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__14475 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__14475) : pred.call(null,G__14475));
})()))
{return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq(ks);while(true){
if(ks__$1)
{if(!((function (){var G__14490 = m__$1;if(G__14490)
{var bit__4304__auto__ = (G__14490.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4304__auto__) || (G__14490.cljs$core$ILookup$))
{return true;
} else
{if((!G__14490.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__14490);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__14490);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__14491 = sentinel;
var G__14492 = m__$2;
var G__14493 = cljs.core.next(ks__$1);
sentinel = G__14491;
m__$1 = G__14492;
ks__$1 = G__14493;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__14494,v){var vec__14499 = p__14494;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(0),null);var ks = cljs.core.nthnext(vec__14499,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__14500,f){var vec__14538 = p__14500;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538,(0),null);var ks = cljs.core.nthnext(vec__14538,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14539) : f.call(null,G__14539));
})());
}
});
var update_in__4 = (function (m,p__14501,f,a){var vec__14540 = p__14501;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14540,(0),null);var ks = cljs.core.nthnext(vec__14540,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__14542 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14541,G__14542) : f.call(null,G__14541,G__14542));
})());
}
});
var update_in__5 = (function (m,p__14502,f,a,b){var vec__14543 = p__14502;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543,(0),null);var ks = cljs.core.nthnext(vec__14543,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__14545 = a;var G__14546 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14544,G__14545,G__14546) : f.call(null,G__14544,G__14545,G__14546));
})());
}
});
var update_in__6 = (function (m,p__14503,f,a,b,c){var vec__14547 = p__14503;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(0),null);var ks = cljs.core.nthnext(vec__14547,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__14548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__14549 = a;var G__14550 = b;var G__14551 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14548,G__14549,G__14550,G__14551) : f.call(null,G__14548,G__14549,G__14550,G__14551));
})());
}
});
var update_in__7 = (function() { 
var G__14553__delegate = function (m,p__14504,f,a,b,c,args){var vec__14552 = p__14504;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14552,(0),null);var ks = cljs.core.nthnext(vec__14552,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__14553 = function (m,p__14504,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__14553__delegate.call(this,m,p__14504,f,a,b,c,args);};
G__14553.cljs$lang$maxFixedArity = 6;
G__14553.cljs$lang$applyTo = (function (arglist__14554){
var m = cljs.core.first(arglist__14554);
arglist__14554 = cljs.core.next(arglist__14554);
var p__14504 = cljs.core.first(arglist__14554);
arglist__14554 = cljs.core.next(arglist__14554);
var f = cljs.core.first(arglist__14554);
arglist__14554 = cljs.core.next(arglist__14554);
var a = cljs.core.first(arglist__14554);
arglist__14554 = cljs.core.next(arglist__14554);
var b = cljs.core.first(arglist__14554);
arglist__14554 = cljs.core.next(arglist__14554);
var c = cljs.core.first(arglist__14554);
var args = cljs.core.rest(arglist__14554);
return G__14553__delegate(m,p__14504,f,a,b,c,args);
});
G__14553.cljs$core$IFn$_invoke$arity$variadic = G__14553__delegate;
return G__14553;
})()
;
update_in = function(m,p__14504,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__14504,f);
case 4:
return update_in__4.call(this,m,p__14504,f,a);
case 5:
return update_in__5.call(this,m,p__14504,f,a,b);
case 6:
return update_in__6.call(this,m,p__14504,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__14504,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){return cljs.core._write(writer__4221__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < (32)))
{return (0);
} else
{return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === (0)))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node(edit);var _ = cljs.core.pv_aset(r,(0),embed);{
var G__14555 = (ll - (5));
var G__14556 = r;
ll = G__14555;
ret = G__14556;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node(parent);var subidx = (((pv.cnt - (1)) >>> level) & (31));if(((5) === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error(("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt))));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__14561 = cljs.core.pv_aget(node,(0));
var G__14562 = (level - (5));
node = G__14561;
level = G__14562;
continue;
}
} else
{return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__14563 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__14564 = (level - (5));
node = G__14563;
level = G__14564;
continue;
}
} else
{return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){if((((0) <= i)) && ((i < pv.cnt)))
{return cljs.core.unchecked_array_for(pv,i);
} else
{return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node(node);if((level === (0)))
{cljs.core.pv_aset(ret,(i & (31)),val);
return ret;
} else
{var subidx = ((i >>> level) & (31));cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === (0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,null);
return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.cljs$lang$type = true;
cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";
cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/RangedIterator");
});
cljs.core.RangedIterator.prototype.hasNext = (function (){var self__ = this;
var this$ = this;return (self__.i < self__.end);
});
cljs.core.RangedIterator.prototype.next = (function (){var self__ = this;
var this$ = this;if(((self__.i - self__.base) === (32)))
{self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);
self__.base = (self__.base + (32));
} else
{}
var ret = (self__.arr[(self__.i & (31))]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});
cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){var i = start;return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentVector.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__14574 = init__$2;var G__14575 = (j + i);var G__14576 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14574,G__14575,G__14576) : f.call(null,G__14574,G__14575,G__14576));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__14587 = (j + (1));
var G__14588 = init__$3;
j = G__14587;
init__$2 = G__14588;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__14577 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14577) : cljs.core.deref.call(null,G__14577));
} else
{{
var G__14589 = (i + len);
var G__14590 = init__$2;
i = G__14589;
init__$1 = G__14590;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(coll__$1) <= n))
{var new_tail = cljs.core.aclone(self__.tail);(new_tail[(n & (31))] = val);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else
{if((n === self__.cnt))
{return cljs.core._conj(coll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt)+"]")));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else
{var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - (1));if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((other instanceof cljs.core.PersistentVector))
{if((self__.cnt === cljs.core.count(other)))
{var me_iter = cljs.core._iterator(coll__$1);var you_iter = cljs.core._iterator(other);while(true){
if(cljs.core.truth_(me_iter.hasNext()))
{var x = me_iter.next();var y = you_iter.next();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{{
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_sequential(coll__$1,other);
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__14578 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__14578) : cljs.core.tv_editable_root.call(null,G__14578));
})(),(function (){var G__14579 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__14579) : cljs.core.tv_editable_tail.call(null,G__14579));
})()));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__14580 = init__$2;var G__14581 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14580,G__14581) : f.call(null,G__14580,G__14581));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__14591 = (j + (1));
var G__14592 = init__$3;
j = G__14591;
init__$2 = G__14592;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__14582 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14582) : cljs.core.deref.call(null,G__14582));
} else
{{
var G__14593 = (i + len);
var G__14594 = init__$2;
i = G__14593;
init__$1 = G__14594;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._assoc_n(coll__$1,k,v);
} else
{throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{return null;
} else
{if((self__.cnt <= (32)))
{return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else
{var G__14583 = coll__$1;var G__14584 = cljs.core.first_array_for_longvec(coll__$1);var G__14585 = (0);var G__14586 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14583,G__14584,G__14585,G__14586) : cljs.core.chunked_seq.call(null,G__14583,G__14584,G__14585,G__14586));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__4510__auto___14595 = len;var i_14596 = (0);while(true){
if((i_14596 < n__4510__auto___14595))
{(new_tail[i_14596] = (self__.tail[i_14596]));
{
var G__14597 = (i_14596 + (1));
i_14596 = G__14597;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);cljs.core.pv_aset(n_r,(0),self__.root);
cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__14598 = null;
var G__14598__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14598__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14598 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14598__2.call(this,self__,k);
case 3:
return G__14598__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14598.cljs$core$IFn$_invoke$arity$2 = G__14598__2;
G__14598.cljs$core$IFn$_invoke$arity$3 = G__14598__3;
return G__14598;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args14573){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14573)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));if((l < (32)))
{return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice((0),(32));var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = (32);var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);while(true){
if((i < l))
{{
var G__14599 = (i + (1));
var G__14600 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__14599;
out = G__14600;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0))))
{return cljs.core.PersistentVector.fromArray(args.arr,true);
} else
{return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__14601){
var args = cljs.core.seq(arglist__14601);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__14602 = self__.vec;var G__14603 = self__.node;var G__14604 = self__.i;var G__14605 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14602,G__14603,G__14604,G__14605) : cljs.core.chunked_seq.call(null,G__14602,G__14603,G__14604,G__14605));
})();if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__14606 = self__.vec;var G__14607 = (self__.i + self__.off);var G__14608 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__14606,G__14607,G__14608) : cljs.core.subvec.call(null,G__14606,G__14607,G__14608));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__14609 = self__.vec;var G__14610 = (self__.i + self__.off);var G__14611 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__14609,G__14610,G__14611) : cljs.core.subvec.call(null,G__14609,G__14610,G__14611));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__14612 = self__.vec;var G__14613 = self__.node;var G__14614 = self__.i;var G__14615 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14612,G__14613,G__14614,G__14615) : cljs.core.chunked_seq.call(null,G__14612,G__14613,G__14614,G__14615));
})();if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__14616 = self__.vec;var G__14617 = cljs.core.unchecked_array_for(self__.vec,end);var G__14618 = end;var G__14619 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14616,G__14617,G__14618,G__14619) : cljs.core.chunked_seq.call(null,G__14616,G__14617,G__14618,G__14619));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__14620 = self__.vec;var G__14621 = self__.node;var G__14622 = self__.i;var G__14623 = self__.off;var G__14624 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__14620,G__14621,G__14622,G__14623,G__14624) : cljs.core.chunked_seq.call(null,G__14620,G__14621,G__14622,G__14623,G__14624));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__14625 = self__.vec;var G__14626 = cljs.core.unchecked_array_for(self__.vec,end);var G__14627 = end;var G__14628 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__14625,G__14626,G__14627,G__14628) : cljs.core.chunked_seq.call(null,G__14625,G__14626,G__14627,G__14628));
} else
{return null;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Subvec.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + n);var G__14630 = self__.meta;var G__14631 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__14632 = self__.start;var G__14633 = (function (){var x__3947__auto__ = self__.end;var y__3948__auto__ = (v_pos + (1));return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})();var G__14634 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14630,G__14631,G__14632,G__14633,G__14634) : cljs.core.build_subvec.call(null,G__14630,G__14631,G__14632,G__14633,G__14634));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{var G__14635 = self__.meta;var G__14636 = self__.v;var G__14637 = self__.start;var G__14638 = (self__.end - (1));var G__14639 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14635,G__14636,G__14637,G__14638,G__14639) : cljs.core.build_subvec.call(null,G__14635,G__14636,G__14637,G__14638,G__14639));
}
});
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(!((self__.start === self__.end)))
{return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else
{return null;
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n(coll__$1,key,val);
} else
{throw (new Error("Subvec's key for assoc must be a number."));
}
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;var G__14641 = meta__$1;var G__14642 = self__.v;var G__14643 = self__.start;var G__14644 = self__.end;var G__14645 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14641,G__14642,G__14643,G__14644,G__14645) : cljs.core.build_subvec.call(null,G__14641,G__14642,G__14643,G__14644,G__14645));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__14646 = self__.meta;var G__14647 = cljs.core._assoc_n(self__.v,self__.end,o);var G__14648 = self__.start;var G__14649 = (self__.end + (1));var G__14650 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__14646,G__14647,G__14648,G__14649,G__14650) : cljs.core.build_subvec.call(null,G__14646,G__14647,G__14648,G__14649,G__14650));
});
cljs.core.Subvec.prototype.call = (function() {
var G__14651 = null;
var G__14651__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__14651__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__14651 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14651__2.call(this,self__,k);
case 3:
return G__14651__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14651.cljs$core$IFn$_invoke$arity$2 = G__14651__2;
G__14651.cljs$core$IFn$_invoke$arity$3 = G__14651__3;
return G__14651;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args14629){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14629)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__14652 = meta;
var G__14653 = v.v;
var G__14654 = (v.start + start);
var G__14655 = (v.start + end);
var G__14656 = __hash;
meta = G__14652;
v = G__14653;
start = G__14654;
end = G__14655;
__hash = G__14656;
continue;
}
} else
{var c = cljs.core.count(v);if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj14663 = {};return obj14663;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy(tl,(0),ret,(0),tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);var subidx = (((tv.cnt - (1)) >>> level) & (31));cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);if(!((child == null)))
{return tv_push_tail(tv,(level - (5)),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);var subidx = (((tv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === (0)))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > (0)))
{{
var G__14671 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__14672 = (level - (5));
node = G__14671;
level = G__14672;
continue;
}
} else
{return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__14676 = null;
var G__14676__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14676__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14676 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14676__2.call(this,self__,k);
case 3:
return G__14676__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14676.cljs$core$IFn$_invoke$arity$2 = G__14676__2;
G__14676.cljs$core$IFn$_invoke$arity$3 = G__14676__3;
return G__14676;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args14673){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14673)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(tcoll__$1) <= n))
{(self__.tail[(n & (31))] = val);
return tcoll__$1;
} else
{var new_root = ((function (tcoll__$1){
return (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);if((level === (0)))
{cljs.core.pv_aset(node__$1,(n & (31)),val);
return node__$1;
} else
{var subidx = ((n >>> level) & (31));cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_(tcoll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt))));

}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{self__.cnt = (0);
return tcoll__$1;
} else
{if((((self__.cnt - (1)) & (31)) > (0)))
{self__.cnt = (self__.cnt - (1));
return tcoll__$1;
} else
{var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));self__.root = new_root__$1;
self__.shift = (self__.shift - (5));
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
}

}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else
{throw (new Error("TransientVector's key for assoc! must be a number."));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32)))
{(self__.tail[(self__.cnt & (31))] = o);
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[(0)] = o);
self__.tail = new_tail;
if(((self__.cnt >>> (5)) > ((1) << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + (5));(new_root_array[(0)] = self__.root);
(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty(coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueue.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest(cljs.core.seq(coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__3640__auto__ = self__.front;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3640__auto__ = self__.rear;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.NeverEquiv.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = (0);while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__14677 = (i + incr);
i = G__14677;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash(a);var b__$1 = cljs.core.hash(b);if((a__$1 < b__$1))
{return (-1);
} else
{if((a__$1 > b__$1))
{return (1);
} else
{return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta(m);var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__14678 = (i + (1));
var G__14679 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__14678;
out = G__14679;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj14683 = {};return obj14683;
})();var l = ks.length;var i_14684 = (0);while(true){
if((i_14684 < l))
{var k_14685 = (ks[i_14684]);(new_obj[k_14685] = (obj[k_14685]));
{
var G__14686 = (i_14684 + (1));
i_14684 = G__14686;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ObjMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = (function (){var G__14690 = k;return goog.isString(G__14690);
})();if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3628__auto__;
}
})()))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__14691 = init__$1;var G__14692 = k;var G__14693 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14691,G__14692,G__14693) : f.call(null,G__14691,G__14692,G__14693));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__14694 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14694) : cljs.core.deref.call(null,G__14694));
} else
{{
var G__14700 = cljs.core.rest(keys__$1);
var G__14701 = init__$2;
keys__$1 = G__14700;
init__$1 = G__14701;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = (function (){var G__14696 = k;return goog.isString(G__14696);
})();if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3628__auto__;
}
})()))
{var new_keys = cljs.core.aclone(self__.keys);var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else
{return coll__$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var G__14697 = k;return goog.isString(G__14697);
})()))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else
{if(!((cljs.core.scan_array((1),k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);var new_keys = cljs.core.aclone(self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = (function (){var G__14699 = k;return goog.isString(G__14699);
})();if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__14687_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__14687_SHARP_,(self__.strobj[p1__14687_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__14702 = null;
var G__14702__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14702__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14702 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14702__2.call(this,self__,k);
case 3:
return G__14702__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14702.cljs$core$IFn$_invoke$arity$2 = G__14702__2;
G__14702.cljs$core$IFn$_invoke$arity$3 = G__14702__3;
return G__14702;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args14688){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14688)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj14704 = {};return obj14704;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.cljs$lang$type = true;
cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";
cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ES6Iterator");
});
cljs.core.ES6Iterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": x};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){return (new cljs.core.ES6Iterator(s));
});
cljs.core.es6_iterator = (function es6_iterator(coll){return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.cljs$lang$type = true;
cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";
cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ES6EntriesIterator");
});
cljs.core.ES6EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__14705 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14705,(1),null);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [k,v]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){return (new cljs.core.ES6EntriesIterator(s));
});
cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ES6SetEntriesIterator");
});
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [x,x]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){return (new cljs.core.ES6SetEntriesIterator(s));
});
cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{{
var G__14706 = (i + (2));
i = G__14706;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{{
var G__14707 = (i + (2));
i = G__14707;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{{
var G__14708 = (i + (2));
i = G__14708;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((k === (arr[i])))
{return i;
} else
{{
var G__14709 = (i + (2));
i = G__14709;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i])))
{return i;
} else
{{
var G__14710 = (i + (2));
i = G__14710;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else
{if(cljs.core.truth_((function (){var or__3640__auto__ = (function (){var G__14714 = k;return goog.isString(G__14714);
})();if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return typeof k === 'number';
}
})()))
{return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else
{return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_14715 = (0);while(true){
if((i_14715 < l))
{(narr[i_14715] = (arr[i_14715]));
{
var G__14716 = (i_14715 + (1));
i_14715 = G__14716;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + (1))] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / (2));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentArrayMapIterator");
});
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.cnt);
});
cljs.core.PersistentArrayMapIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);self__.i = (self__.i + (2));
return ret;
});
cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__14718 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14718) : cljs.core.keys.call(null,G__14718));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__14719 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14719) : cljs.core.vals.call(null,G__14719));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__14720 = cljs.core.seq(coll);var chunk__14721 = null;var count__14722 = (0);var i__14723 = (0);while(true){
if((i__14723 < count__14722))
{var vec__14724 = chunk__14721.cljs$core$IIndexed$_nth$arity$2(null,i__14723);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(1),null);var G__14725_14738 = v;var G__14726_14739 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14725_14738,G__14726_14739) : f.call(null,G__14725_14738,G__14726_14739));
{
var G__14740 = seq__14720;
var G__14741 = chunk__14721;
var G__14742 = count__14722;
var G__14743 = (i__14723 + (1));
seq__14720 = G__14740;
chunk__14721 = G__14741;
count__14722 = G__14742;
i__14723 = G__14743;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__14720);if(temp__4126__auto__)
{var seq__14720__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14720__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__14720__$1);{
var G__14744 = cljs.core.chunk_rest(seq__14720__$1);
var G__14745 = c__4410__auto__;
var G__14746 = cljs.core.count(c__4410__auto__);
var G__14747 = (0);
seq__14720 = G__14744;
chunk__14721 = G__14745;
count__14722 = G__14746;
i__14723 = G__14747;
continue;
}
} else
{var vec__14727 = cljs.core.first(seq__14720__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14727,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14727,(1),null);var G__14728_14748 = v;var G__14729_14749 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14728_14748,G__14729_14749) : f.call(null,G__14728_14748,G__14729_14749));
{
var G__14750 = cljs.core.next(seq__14720__$1);
var G__14751 = null;
var G__14752 = (0);
var G__14753 = (0);
seq__14720 = G__14750;
chunk__14721 = G__14751;
count__14722 = G__14752;
i__14723 = G__14753;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var G__14730 = init__$1;var G__14731 = (self__.arr[i]);var G__14732 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14730,G__14731,G__14732) : f.call(null,G__14730,G__14731,G__14732));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__14733 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14733) : cljs.core.deref.call(null,G__14733));
} else
{{
var G__14754 = (i + (2));
var G__14755 = init__$2;
i = G__14754;
init__$1 = G__14755;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((function (){var G__14734 = other;if(G__14734)
{var bit__4297__auto__ = (G__14734.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4297__auto__) || (G__14734.cljs$core$IMap$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var alen = self__.arr.length;var other__$1 = other;if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null)))
{var i = (0);while(true){
if((i < alen))
{var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);if(!((v === cljs.core.lookup_sentinel)))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v))
{{
var G__14756 = (i + (2));
i = G__14756;
continue;
}
} else
{return false;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_map(coll__$1,other);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj14736 = {};return obj14736;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx >= (0)))
{var len = self__.arr.length;var new_len = (len - (2));if((new_len === (0)))
{return cljs.core._empty(coll__$1);
} else
{var new_arr = (new Array(new_len));var s = (0);var d = (0);while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s])))
{{
var G__14757 = (s + (2));
var G__14758 = d;
s = G__14757;
d = G__14758;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__14759 = (s + (2));
var G__14760 = (d + (2));
s = G__14759;
d = G__14760;
continue;
}

}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else
{return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + (1))])))
{return coll__$1;
} else
{var arr__$1 = (function (){var G__14737 = cljs.core.aclone(self__.arr);(G__14737[(idx + (1))] = v);
return G__14737;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__14761 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14762 = cljs.core.next(es);
ret = G__14761;
es = G__14762;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__14763 = null;
var G__14763__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14763__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14763 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14763__2.call(this,self__,k);
case 3:
return G__14763__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14763.cljs$core$IFn$_invoke$arity$2 = G__14763__2;
G__14763.cljs$core$IFn$_invoke$arity$3 = G__14763__3;
return G__14763;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args14717){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14717)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));if(no_check)
{var cnt = (arr__$1.length / (2));return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__14764 = (i + (2));
var G__14765 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__14764;
ret = G__14765;
continue;
}
} else
{return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__14766_14774 = self__.arr;G__14766_14774.pop();
G__14766_14774.pop();
self__.len = (self__.len - (2));
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx === (-1)))
{if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + (2));
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__14767 = self__.len;var G__14768 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__14767,G__14768) : cljs.core.array__GT_transient_hash_map.call(null,G__14767,G__14768));
})(),key,val);
}
} else
{if((val === (self__.arr[(idx + (1))])))
{return tcoll__$1;
} else
{(self__.arr[(idx + (1))] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__14769 = o;if(G__14769)
{var bit__4304__auto__ = (G__14769.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4304__auto__) || (G__14769.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__14769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14769);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__14770 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14770) : cljs.core.key.call(null,G__14770));
})(),(function (){var G__14771 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14771) : cljs.core.val.call(null,G__14771));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__14775 = cljs.core.next(es);
var G__14776 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__14772 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14772) : cljs.core.key.call(null,G__14772));
})(),(function (){var G__14773 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14773) : cljs.core.val.call(null,G__14773));
})());
es = G__14775;
tcoll__$2 = G__14776;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot(self__.len,(2));
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);var i = (0);while(true){
if((i < len))
{{
var G__14777 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__14778 = (i + (2));
out = G__14777;
i = G__14778;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){return cljs.core._write(writer__4221__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_(key,other))
{return true;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__14781 = cljs.core.aclone(arr);(G__14781[i] = a);
return G__14781;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__14782 = cljs.core.aclone(arr);(G__14782[i] = a);
(G__14782[j] = b);
return G__14782;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - (2))));cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));
cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{var G__14787 = init__$1;var G__14788 = k;var G__14789 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14787,G__14788,G__14789) : f.call(null,G__14787,G__14788,G__14789));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__14790 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14790) : cljs.core.deref.call(null,G__14790));
} else
{{
var G__14791 = (i + (2));
var G__14792 = init__$2;
i = G__14791;
init__$1 = G__14792;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count(self__.bitmap);var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[(0)] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return inode;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));
(earr[(len - (2))] = null);
(earr[(len - (1))] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__14793 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__14793) : cljs.core.create_inode_seq.call(null,G__14793));
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((((2) * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));
(earr[((2) * idx)] = key);
(earr[(((2) * idx) + (1))] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_14807 = (0);var j_14808 = (0);while(true){
if((i_14807 < (32)))
{if((((self__.bitmap >>> i_14807) & (1)) === (0)))
{{
var G__14809 = (i_14807 + (1));
var G__14810 = j_14808;
i_14807 = G__14809;
j_14808 = G__14810;
continue;
}
} else
{(nodes[i_14807] = ((!(((self__.arr[j_14808]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_14808])),(self__.arr[j_14808]),(self__.arr[(j_14808 + (1))]),added_leaf_QMARK_):(self__.arr[(j_14808 + (1))])));
{
var G__14811 = (i_14807 + (1));
var G__14812 = (j_14808 + (2));
i_14807 = G__14811;
j_14808 = G__14812;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (4)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;

}
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__14794 = edit__$1;var G__14795 = (shift + (5));var G__14796 = key_or_nil;var G__14797 = val_or_node;var G__14798 = hash;var G__14799 = key;var G__14800 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__14794,G__14795,G__14796,G__14797,G__14798,G__14799,G__14800) : cljs.core.create_node.call(null,G__14794,G__14795,G__14796,G__14797,G__14798,G__14799,G__14800));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_14813 = (0);var j_14814 = (0);while(true){
if((i_14813 < (32)))
{if((((self__.bitmap >>> i_14813) & (1)) === (0)))
{{
var G__14815 = (i_14813 + (1));
var G__14816 = j_14814;
i_14813 = G__14815;
j_14814 = G__14816;
continue;
}
} else
{(nodes[i_14813] = ((!(((self__.arr[j_14814]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_14814])),(self__.arr[j_14814]),(self__.arr[(j_14814 + (1))]),added_leaf_QMARK_):(self__.arr[(j_14814 + (1))])));
{
var G__14817 = (i_14813 + (1));
var G__14818 = (j_14814 + (2));
i_14813 = G__14817;
j_14814 = G__14818;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__14801 = (shift + (5));var G__14802 = key_or_nil;var G__14803 = val_or_node;var G__14804 = hash;var G__14805 = key;var G__14806 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__14801,G__14802,G__14803,G__14804,G__14805,G__14806) : cljs.core.create_node.call(null,G__14801,G__14802,G__14803,G__14804,G__14805,G__14806));
})())));

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + (5)),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return inode;

}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = arr.length;var new_arr = (new Array(((2) * (array_node.cnt - (1)))));var i = (0);var j = (1);var bitmap = (0);while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__14819 = (i + (1));
var G__14820 = (j + (2));
var G__14821 = (bitmap | ((1) << i));
i = G__14819;
j = G__14820;
bitmap = G__14821;
continue;
}
} else
{{
var G__14822 = (i + (1));
var G__14823 = j;
var G__14824 = bitmap;
i = G__14822;
j = G__14823;
bitmap = G__14824;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);editable.cnt = (editable.cnt - (1));
return editable;
}
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__14825 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__14825) : cljs.core.create_array_node_seq.call(null,G__14825));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__14826 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14826) : cljs.core.deref.call(null,G__14826));
} else
{{
var G__14827 = (i + (1));
var G__14828 = init__$2;
i = G__14827;
init__$1 = G__14828;
continue;
}
}
} else
{{
var G__14829 = (i + (1));
var G__14830 = init__$1;
i = G__14829;
init__$1 = G__14830;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + (1));
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + (5)),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else
{return inode;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = ((2) * cnt);var i = (0);while(true){
if((i < lim))
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__14831 = (i + (2));
i = G__14831;
continue;
}
}
} else
{return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array(((2) * (self__.cnt + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{(removed_leaf_QMARK_[(0)] = true);
if((self__.cnt === (1)))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));
(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));
(earr[(((2) * self__.cnt) - (1))] = null);
(earr[(((2) * self__.cnt) - (2))] = null);
editable.cnt = (editable.cnt - (1));
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__14832 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__14832) : cljs.core.create_inode_seq.call(null,G__14832));
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + (1))]);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{if((self__.arr.length > ((2) * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + (1));
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else
{if(((self__.arr[(idx + (1))]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{var len = ((2) * self__.cnt);var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{if((self__.cnt === (1)))
{return null;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.NodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{var G__14833 = self__.nodes;var G__14834 = (self__.i + (2));var G__14835 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__14833,G__14834,G__14835) : cljs.core.create_inode_seq.call(null,G__14833,G__14834,G__14835));
} else
{var G__14836 = self__.nodes;var G__14837 = self__.i;var G__14838 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__14836,G__14837,G__14838) : cljs.core.create_inode_seq.call(null,G__14836,G__14837,G__14838));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4124__auto__ = (nodes[(j + (1))]);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;var temp__4124__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var node_seq = temp__4124__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else
{{
var G__14842 = (j + (2));
j = G__14842;
continue;
}
}
} else
{{
var G__14843 = (j + (2));
j = G__14843;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__14844 = null;var G__14845 = self__.nodes;var G__14846 = self__.i;var G__14847 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__14844,G__14845,G__14846,G__14847) : cljs.core.create_array_node_seq.call(null,G__14844,G__14845,G__14846,G__14847));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4124__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4124__auto__))
{var nj = temp__4124__auto__;var temp__4124__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var ns = temp__4124__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else
{{
var G__14852 = (j + (1));
j = G__14852;
continue;
}
}
} else
{{
var G__14853 = (j + (1));
j = G__14853;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__14855 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14855) : cljs.core.keys.call(null,G__14855));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__14856 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14856) : cljs.core.vals.call(null,G__14856));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__14857 = cljs.core.seq(coll);var chunk__14858 = null;var count__14859 = (0);var i__14860 = (0);while(true){
if((i__14860 < count__14859))
{var vec__14861 = chunk__14858.cljs$core$IIndexed$_nth$arity$2(null,i__14860);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(1),null);var G__14862_14873 = v;var G__14863_14874 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14862_14873,G__14863_14874) : f.call(null,G__14862_14873,G__14863_14874));
{
var G__14875 = seq__14857;
var G__14876 = chunk__14858;
var G__14877 = count__14859;
var G__14878 = (i__14860 + (1));
seq__14857 = G__14875;
chunk__14858 = G__14876;
count__14859 = G__14877;
i__14860 = G__14878;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__14857);if(temp__4126__auto__)
{var seq__14857__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14857__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__14857__$1);{
var G__14879 = cljs.core.chunk_rest(seq__14857__$1);
var G__14880 = c__4410__auto__;
var G__14881 = cljs.core.count(c__4410__auto__);
var G__14882 = (0);
seq__14857 = G__14879;
chunk__14858 = G__14880;
count__14859 = G__14881;
i__14860 = G__14882;
continue;
}
} else
{var vec__14864 = cljs.core.first(seq__14857__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14864,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14864,(1),null);var G__14865_14883 = v;var G__14866_14884 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14865_14883,G__14866_14884) : f.call(null,G__14865_14883,G__14866_14884));
{
var G__14885 = cljs.core.next(seq__14857__$1);
var G__14886 = null;
var G__14887 = (0);
var G__14888 = (0);
seq__14857 = G__14885;
chunk__14858 = G__14886;
count__14859 = G__14887;
i__14860 = G__14888;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__14867 = init;var G__14868 = null;var G__14869 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14867,G__14868,G__14869) : f.call(null,G__14867,G__14868,G__14869));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__14870 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14870) : cljs.core.deref.call(null,G__14870));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{return init__$1;

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj14872 = {};return obj14872;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__14889 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__14890 = cljs.core.next(es);
ret = G__14889;
es = G__14890;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__14891 = null;
var G__14891__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14891__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14891 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14891__2.call(this,self__,k);
case 3:
return G__14891__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14891.cljs$core$IFn$_invoke$arity$2 = G__14891__2;
G__14891.cljs$core$IFn$_invoke$arity$3 = G__14891__3;
return G__14891;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args14854){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14854)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__14892 = (i + (1));
var G__14893 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__14892;
out = G__14893;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__14894 = o;if(G__14894)
{var bit__4304__auto__ = (G__14894.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4304__auto__) || (G__14894.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__14894.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14894);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__14894);
}
})())
{return tcoll.assoc_BANG_((function (){var G__14895 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14895) : cljs.core.key.call(null,G__14895));
})(),(function (){var G__14896 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14896) : cljs.core.val.call(null,G__14896));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__14899 = cljs.core.next(es);
var G__14900 = tcoll__$1.assoc_BANG_((function (){var G__14897 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14897) : cljs.core.key.call(null,G__14897));
})(),(function (){var G__14898 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__14898) : cljs.core.val.call(null,G__14898));
})());
es = G__14899;
tcoll__$1 = G__14900;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + (1));
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + (1));
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - (1));
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[(0)])))
{self__.count = (self__.count - (1));
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__14901 = ((ascending_QMARK_)?t.left:t.right);
var G__14902 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__14901;
stack__$1 = G__14902;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < (0)))
{return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first(self__.stack);var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__14915 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14915) : cljs.core.deref.call(null,G__14915));
} else
{var init__$2 = (function (){var G__14916 = init__$1;var G__14917 = node.key;var G__14918 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14916,G__14917,G__14918) : f.call(null,G__14916,G__14917,G__14918));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__14919 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14919) : cljs.core.deref.call(null,G__14919));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__14920 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14920) : cljs.core.deref.call(null,G__14920));
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__14922 = null;
var G__14922__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14922__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14922 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14922__2.call(this,self__,k);
case 3:
return G__14922__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14922.cljs$core$IFn$_invoke$arity$2 = G__14922__2;
G__14922.cljs$core$IFn$_invoke$arity$3 = G__14922__3;
return G__14922;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args14921){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14921)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.call = (function() {
var G__14924 = null;
var G__14924__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__14924__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__14924 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__14924__2.call(this,self__,k);
case 3:
return G__14924__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14924.cljs$core$IFn$_invoke$arity$2 = G__14924__2;
G__14924.cljs$core$IFn$_invoke$arity$3 = G__14924__3;
return G__14924;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args14923){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14923)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = (function (){var G__14937 = k;var G__14938 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14937,G__14938) : comp.call(null,G__14937,G__14938));
})();if((c === (0)))
{(found[(0)] = tree);
return null;
} else
{if((c < (0)))
{var ins = tree_map_add(comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{var ins = tree_map_add(comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = (function (){var G__14957 = k;var G__14958 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14957,G__14958) : comp.call(null,G__14957,G__14958));
})();if((c === (0)))
{(found[(0)] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < (0)))
{var del = tree_map_remove(comp,tree.left,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{var del = tree_map_remove(comp,tree.right,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}

}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__14969 = k;var G__14970 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__14969,G__14970) : comp.call(null,G__14969,G__14970));
})();if((c === (0)))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < (0)))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__14972 = cljs.core.seq(coll);var chunk__14973 = null;var count__14974 = (0);var i__14975 = (0);while(true){
if((i__14975 < count__14974))
{var vec__14976 = chunk__14973.cljs$core$IIndexed$_nth$arity$2(null,i__14975);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(1),null);var G__14977_14989 = v;var G__14978_14990 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14977_14989,G__14978_14990) : f.call(null,G__14977_14989,G__14978_14990));
{
var G__14991 = seq__14972;
var G__14992 = chunk__14973;
var G__14993 = count__14974;
var G__14994 = (i__14975 + (1));
seq__14972 = G__14991;
chunk__14973 = G__14992;
count__14974 = G__14993;
i__14975 = G__14994;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__14972);if(temp__4126__auto__)
{var seq__14972__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14972__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__14972__$1);{
var G__14995 = cljs.core.chunk_rest(seq__14972__$1);
var G__14996 = c__4410__auto__;
var G__14997 = cljs.core.count(c__4410__auto__);
var G__14998 = (0);
seq__14972 = G__14995;
chunk__14973 = G__14996;
count__14974 = G__14997;
i__14975 = G__14998;
continue;
}
} else
{var vec__14979 = cljs.core.first(seq__14972__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979,(1),null);var G__14980_14999 = v;var G__14981_15000 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14980_14999,G__14981_15000) : f.call(null,G__14980_14999,G__14981_15000));
{
var G__15001 = cljs.core.next(seq__14972__$1);
var G__15002 = null;
var G__15003 = (0);
var G__15004 = (0);
seq__14972 = G__15001;
chunk__14973 = G__15002;
count__14974 = G__15003;
i__14975 = G__15004;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__14982 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__14982) : cljs.core.keys.call(null,G__14982));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__14983 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__14983) : cljs.core.vals.call(null,G__14983));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__14984 = k;var G__14985 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__14984,G__14985) : self__.comp.call(null,G__14984,G__14985));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__15005 = t.left;
t = G__15005;
continue;
}
} else
{{
var G__15006 = t.right;
t = G__15006;
continue;
}

}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__15007 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__15008 = cljs.core.next(es);
ret = G__15007;
es = G__15008;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__15009 = null;
var G__15009__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15009__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15009 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15009__2.call(this,self__,k);
case 3:
return G__15009__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15009.cljs$core$IFn$_invoke$arity$2 = G__15009__2;
G__15009.cljs$core$IFn$_invoke$arity$3 = G__15009__3;
return G__15009;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args14971){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14971)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__14986 = k;var G__14987 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__14986,G__14987) : self__.comp.call(null,G__14986,G__14987));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__15010 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__15011 = t.left;
stack = G__15010;
t = G__15011;
continue;
}
} else
{{
var G__15012 = stack;
var G__15013 = t.right;
stack = G__15012;
t = G__15013;
continue;
}
}
} else
{if((c > (0)))
{{
var G__15014 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__15015 = t.right;
stack = G__15014;
t = G__15015;
continue;
}
} else
{{
var G__15016 = stack;
var G__15017 = t.left;
stack = G__15016;
t = G__15017;
continue;
}
}

}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;var G__14988 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__14988) : cljs.core.key.call(null,G__14988));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__15018 = cljs.core.nnext(in$);
var G__15019 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15018;
out = G__15019;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__15020){
var keyvals = cljs.core.seq(arglist__15020);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),(2)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__15021){
var keyvals = cljs.core.seq(arglist__15021);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj15025 = {};return obj15025;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__15026 = cljs.core.nnext(kvs);
kvs = G__15026;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__15027){
var keyvals = cljs.core.seq(arglist__15027);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__15028 = cljs.core.nnext(in$);
var G__15029 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15028;
out = G__15029;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__15030){
var keyvals = cljs.core.seq(arglist__15030);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));while(true){
if(in$)
{{
var G__15031 = cljs.core.nnext(in$);
var G__15032 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__15031;
out = G__15032;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__15033){
var comparator = cljs.core.first(arglist__15033);
var keyvals = cljs.core.rest(arglist__15033);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.KeySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15034 = self__.mseq;if(G__15034)
{var bit__4304__auto__ = (G__15034.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4304__auto__) || (G__15034.cljs$core$INext$))
{return true;
} else
{if((!G__15034.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15034);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15034);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_key$arity$1(null);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15035 = self__.mseq;if(G__15035)
{var bit__4304__auto__ = (G__15035.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4304__auto__) || (G__15035.cljs$core$INext$))
{return true;
} else
{if((!G__15035.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15035);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15035);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ValSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15036 = self__.mseq;if(G__15036)
{var bit__4304__auto__ = (G__15036.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4304__auto__) || (G__15036.cljs$core$INext$))
{return true;
} else
{if((!G__15036.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15036);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15036);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_val$arity$1(null);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15037 = self__.mseq;if(G__15037)
{var bit__4304__auto__ = (G__15037.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4304__auto__) || (G__15037.cljs$core$INext$))
{return true;
} else
{if((!G__15037.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15037);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__15037);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__15038_SHARP_,p2__15039_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3640__auto__ = p1__15038_SHARP_;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__15039_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__15040){
var maps = cljs.core.seq(arglist__15040);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first(e);var v = cljs.core.second(e);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__15044 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15043,G__15044) : f.call(null,G__15043,G__15044));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3640__auto__ = m1;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__15045){
var f = cljs.core.first(arglist__15045);
var maps = cljs.core.rest(arglist__15045);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq(keyseq);while(true){
if(keys)
{var key = cljs.core.first(keys);var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$23);{
var G__15046 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$23))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__15047 = cljs.core.next(keys);
ret = G__15046;
keys = G__15047;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15050 = cljs.core.seq(coll);var chunk__15051 = null;var count__15052 = (0);var i__15053 = (0);while(true){
if((i__15053 < count__15052))
{var vec__15054 = chunk__15051.cljs$core$IIndexed$_nth$arity$2(null,i__15053);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15054,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15054,(1),null);var G__15055_15060 = v;var G__15056_15061 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15055_15060,G__15056_15061) : f.call(null,G__15055_15060,G__15056_15061));
{
var G__15062 = seq__15050;
var G__15063 = chunk__15051;
var G__15064 = count__15052;
var G__15065 = (i__15053 + (1));
seq__15050 = G__15062;
chunk__15051 = G__15063;
count__15052 = G__15064;
i__15053 = G__15065;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15050);if(temp__4126__auto__)
{var seq__15050__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15050__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__15050__$1);{
var G__15066 = cljs.core.chunk_rest(seq__15050__$1);
var G__15067 = c__4410__auto__;
var G__15068 = cljs.core.count(c__4410__auto__);
var G__15069 = (0);
seq__15050 = G__15066;
chunk__15051 = G__15067;
count__15052 = G__15068;
i__15053 = G__15069;
continue;
}
} else
{var vec__15057 = cljs.core.first(seq__15050__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(1),null);var G__15058_15070 = v;var G__15059_15071 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15058_15070,G__15059_15071) : f.call(null,G__15058_15070,G__15059_15071));
{
var G__15072 = cljs.core.next(seq__15050__$1);
var G__15073 = null;
var G__15074 = (0);
var G__15075 = (0);
seq__15050 = G__15072;
chunk__15051 = G__15073;
count__15052 = G__15074;
i__15053 = G__15075;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_(self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__15048_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__15048_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__15076 = null;
var G__15076__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15076__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15076 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15076__2.call(this,self__,k);
case 3:
return G__15076__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15076.cljs$core$IFn$_invoke$arity$2 = G__15076__2;
G__15076.cljs$core$IFn$_invoke$arity$3 = G__15076__3;
return G__15076;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args15049){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15049)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone(items));var i = (0);var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__15077 = (i + (1));
var G__15078 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__15077;
out = G__15078;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else
{var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__15079 = (i + (1));
var G__15080 = cljs.core._conj_BANG_(out,(items[i]));
i = G__15079;
out = G__15080;
continue;
}
} else
{return cljs.core._persistent_BANG_(out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__15082 = null;
var G__15082__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__15082__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__15082 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15082__2.call(this,self__,k);
case 3:
return G__15082__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15082.cljs$core$IFn$_invoke$arity$2 = G__15082__2;
G__15082.cljs$core$IFn$_invoke$arity$3 = G__15082__3;
return G__15082;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args15081){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15081)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__15085 = cljs.core.seq(coll);var chunk__15086 = null;var count__15087 = (0);var i__15088 = (0);while(true){
if((i__15088 < count__15087))
{var vec__15089 = chunk__15086.cljs$core$IIndexed$_nth$arity$2(null,i__15088);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15089,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15089,(1),null);var G__15090_15095 = v;var G__15091_15096 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15090_15095,G__15091_15096) : f.call(null,G__15090_15095,G__15091_15096));
{
var G__15097 = seq__15085;
var G__15098 = chunk__15086;
var G__15099 = count__15087;
var G__15100 = (i__15088 + (1));
seq__15085 = G__15097;
chunk__15086 = G__15098;
count__15087 = G__15099;
i__15088 = G__15100;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15085);if(temp__4126__auto__)
{var seq__15085__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15085__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__15085__$1);{
var G__15101 = cljs.core.chunk_rest(seq__15085__$1);
var G__15102 = c__4410__auto__;
var G__15103 = cljs.core.count(c__4410__auto__);
var G__15104 = (0);
seq__15085 = G__15101;
chunk__15086 = G__15102;
count__15087 = G__15103;
i__15088 = G__15104;
continue;
}
} else
{var vec__15092 = cljs.core.first(seq__15085__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15092,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15092,(1),null);var G__15093_15105 = v;var G__15094_15106 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15093_15105,G__15094_15106) : f.call(null,G__15093_15105,G__15094_15106));
{
var G__15107 = cljs.core.next(seq__15085__$1);
var G__15108 = null;
var G__15109 = (0);
var G__15110 = (0);
seq__15085 = G__15107;
chunk__15086 = G__15108;
count__15087 = G__15109;
i__15088 = G__15110;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count(self__.tree_map) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__15083_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__15083_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__15111 = null;
var G__15111__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15111__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15111 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15111__2.call(this,self__,k);
case 3:
return G__15111__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15111.cljs$core$IFn$_invoke$arity$2 = G__15111__2;
G__15111.cljs$core$IFn$_invoke$arity$3 = G__15111__3;
return G__15111;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args15084){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15084)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator(self__.tree_map);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__4504__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__4504__auto__.length))
{{
var G__15112 = (i + (1));
var G__15113 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__15112;
res = G__15113;
continue;
}
} else
{return res;
}
break;
}
})();return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq(coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0))))
{return cljs.core.set_from_indexed_seq(in$);
} else
{var in$__$1 = in$;var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__15114 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__15115 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__15114;
out = G__15115;
continue;
}
} else
{return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__15116__delegate = function (keys){return cljs.core.set(keys);
};
var G__15116 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15116__delegate.call(this,keys);};
G__15116.cljs$lang$maxFixedArity = 0;
G__15116.cljs$lang$applyTo = (function (arglist__15117){
var keys = cljs.core.seq(arglist__15117);
return G__15116__delegate(keys);
});
G__15116.cljs$core$IFn$_invoke$arity$variadic = G__15116__delegate;
return G__15116;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__15118){
var keys = cljs.core.seq(arglist__15118);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__15119){
var comparator = cljs.core.first(arglist__15119);
var keys = cljs.core.rest(arglist__15119);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15120_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__15120_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.val(e);
} else
{return p1__15120_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15121_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__15121_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second(e);
} else
{return p1__15121_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__15132,seen__$1){while(true){
var vec__15133 = p__15132;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15133,(0),null);var xs__$1 = vec__15133;var temp__4126__auto__ = cljs.core.seq(xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__15134 = cljs.core.rest(s);
var G__15135 = seen__$1;
p__15132 = G__15134;
seen__$1 = G__15135;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next(s__$1))
{{
var G__15136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__15137 = cljs.core.next(s__$1);
ret = G__15136;
s__$1 = G__15137;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__15139 = x;if(G__15139)
{var bit__4297__auto__ = (G__15139.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4297__auto__) || (G__15139.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_name$arity$1(null);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error(("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq(keys);var vs = cljs.core.seq(vals);while(true){
if((ks) && (vs))
{{
var G__15140 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__15141 = cljs.core.next(ks);
var G__15142 = cljs.core.next(vs);
map = G__15140;
ks = G__15141;
vs = G__15142;
continue;
}
} else
{return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if(((function (){var G__15153 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15153) : k.call(null,G__15153));
})() > (function (){var G__15154 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15154) : k.call(null,G__15154));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__15155__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15143_SHARP_,p2__15144_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__15143_SHARP_,p2__15144_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__15155 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15155__delegate.call(this,k,x,y,more);};
G__15155.cljs$lang$maxFixedArity = 3;
G__15155.cljs$lang$applyTo = (function (arglist__15156){
var k = cljs.core.first(arglist__15156);
arglist__15156 = cljs.core.next(arglist__15156);
var x = cljs.core.first(arglist__15156);
arglist__15156 = cljs.core.next(arglist__15156);
var y = cljs.core.first(arglist__15156);
var more = cljs.core.rest(arglist__15156);
return G__15155__delegate(k,x,y,more);
});
G__15155.cljs$core$IFn$_invoke$arity$variadic = G__15155__delegate;
return G__15155;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if(((function (){var G__15167 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15167) : k.call(null,G__15167));
})() < (function (){var G__15168 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__15168) : k.call(null,G__15168));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__15169__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15157_SHARP_,p2__15158_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__15157_SHARP_,p2__15158_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__15169 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15169__delegate.call(this,k,x,y,more);};
G__15169.cljs$lang$maxFixedArity = 3;
G__15169.cljs$lang$applyTo = (function (arglist__15170){
var k = cljs.core.first(arglist__15170);
arglist__15170 = cljs.core.next(arglist__15170);
var x = cljs.core.first(arglist__15170);
arglist__15170 = cljs.core.next(arglist__15170);
var y = cljs.core.first(arglist__15170);
var more = cljs.core.rest(arglist__15170);
return G__15169__delegate(k,x,y,more);
});
G__15169.cljs$core$IFn$_invoke$arity$variadic = G__15169__delegate;
return G__15169;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.cljs$lang$type = true;
cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/ArrayList");
});
cljs.core.ArrayList.prototype.add = (function (x){var self__ = this;
var _ = this;return self__.arr.push(x);
});
cljs.core.ArrayList.prototype.size = (function (){var self__ = this;
var _ = this;return self__.arr.length;
});
cljs.core.ArrayList.prototype.clear = (function (){var self__ = this;
var _ = this;return self__.arr = [];
});
cljs.core.ArrayList.prototype.isEmpty = (function (){var self__ = this;
var _ = this;return (self__.arr.length === (0));
});
cljs.core.ArrayList.prototype.toArray = (function (){var self__ = this;
var _ = this;return self__.arr;
});
cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){return (new cljs.core.ArrayList(arr));
});
cljs.core.array_list = (function array_list(){return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){return (function (rf){var a = cljs.core.array_list();return ((function (a){
return (function() {
var G__15187 = null;
var G__15187__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15187__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__15182 = result;var G__15183 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15182,G__15183) : rf.call(null,G__15182,G__15183));
})());var G__15184 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15184) : rf.call(null,G__15184));
});
var G__15187__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__15185 = result;var G__15186 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15185,G__15186) : rf.call(null,G__15185,G__15186));
} else
{return result;
}
});
G__15187 = function(result,input){
switch(arguments.length){
case 0:
return G__15187__0.call(this);
case 1:
return G__15187__1.call(this,result);
case 2:
return G__15187__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15187.cljs$core$IFn$_invoke$arity$0 = G__15187__0;
G__15187.cljs$core$IFn$_invoke$arity$1 = G__15187__1;
G__15187.cljs$core$IFn$_invoke$arity$2 = G__15187__2;
return G__15187;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (rf){return (function() {
var G__15200 = null;
var G__15200__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15200__1 = (function (result){var G__15195 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15195) : rf.call(null,G__15195));
});
var G__15200__2 = (function (result,input){if(cljs.core.truth_((function (){var G__15196 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__15196) : pred.call(null,G__15196));
})()))
{var G__15197 = result;var G__15198 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15197,G__15198) : rf.call(null,G__15197,G__15198));
} else
{return cljs.core.reduced(result);
}
});
G__15200 = function(result,input){
switch(arguments.length){
case 0:
return G__15200__0.call(this);
case 1:
return G__15200__1.call(this,result);
case 2:
return G__15200__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15200.cljs$core$IFn$_invoke$arity$0 = G__15200__0;
G__15200.cljs$core$IFn$_invoke$arity$1 = G__15200__1;
G__15200.cljs$core$IFn$_invoke$arity$2 = G__15200__2;
return G__15200;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_((function (){var G__15199 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__15199) : pred.call(null,G__15199));
})()))
{return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__15205 = (function (){var G__15207 = cljs.core._entry_key(sc,e);var G__15208 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__15207,G__15208) : comp.call(null,G__15207,G__15208));
})();var G__15206 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__15205,G__15206) : test.call(null,G__15205,G__15206));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15212 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15212,(0),null);var s = vec__15212;if(cljs.core.truth_((function (){var G__15213 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__15213) : include.call(null,G__15213));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15214 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214,(0),null);var s = vec__15214;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15218 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15218,(0),null);var s = vec__15218;if(cljs.core.truth_((function (){var G__15219 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__15219) : include.call(null,G__15219));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__15220 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15220,(0),null);var s = vec__15220;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.cljs$lang$type = true;
cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";
cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/RangeIterator");
});
cljs.core.RangeIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__.step > (0)))
{return (self__.i < self__.end);
} else
{return (self__.i > self__.end);
}
});
cljs.core.RangeIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.i;self__.i = (self__.i + self__.step);
return ret;
});
cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){return (new cljs.core.RangeIterator(i,end,step));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Range.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IIterable$ = true;
cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not(cljs.core._seq(rng__$1)))
{return (0);
} else
{var G__15221 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__15221) : Math.ceil.call(null,G__15221));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential(rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){var self__ = this;
var rng__$1 = this;var i = self__.start;var ret = init;while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end)))
{var ret__$1 = (function (){var G__15222 = ret;var G__15223 = i;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15222,G__15223) : f.call(null,G__15222,G__15223));
})();if(cljs.core.reduced_QMARK_(ret__$1))
{var G__15224 = ret__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15224) : cljs.core.deref.call(null,G__15224));
} else
{{
var G__15225 = (i + self__.step);
var G__15226 = ret__$1;
i = G__15225;
ret = G__15226;
continue;
}
}
} else
{return ret;
}
break;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq(rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq(rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons(o,rng__$1);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){return (function (rf){var ia = (function (){var G__15242 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15242) : cljs.core.atom.call(null,G__15242));
})();return ((function (ia){
return (function() {
var G__15246 = null;
var G__15246__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15246__1 = (function (result){var G__15243 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15243) : rf.call(null,G__15243));
});
var G__15246__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__15244 = result;var G__15245 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15244,G__15245) : rf.call(null,G__15244,G__15245));
} else
{return result;
}
});
G__15246 = function(result,input){
switch(arguments.length){
case 0:
return G__15246__0.call(this);
case 1:
return G__15246__1.call(this,result);
case 2:
return G__15246__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15246.cljs$core$IFn$_invoke$arity$0 = G__15246__0;
G__15246.cljs$core$IFn$_invoke$arity$1 = G__15246__1;
G__15246.cljs$core$IFn$_invoke$arity$2 = G__15246__2;
return G__15246;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else
{return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){return (function (rf){var a = cljs.core.array_list();var pa = (function (){var G__15262 = cljs.core.constant$keyword$24;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15262) : cljs.core.atom.call(null,G__15262));
})();return ((function (a,pa){
return (function() {
var G__15274 = null;
var G__15274__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15274__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__15263 = result;var G__15264 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15263,G__15264) : rf.call(null,G__15263,G__15264));
})());var G__15265 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15265) : rf.call(null,G__15265));
});
var G__15274__2 = (function (result,input){var pval = (function (){var G__15266 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15266) : cljs.core.deref.call(null,G__15266));
})();var val = (function (){var G__15267 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15267) : f.call(null,G__15267));
})();var G__15268_15275 = pa;var G__15269_15276 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15268_15275,G__15269_15276) : cljs.core.reset_BANG_.call(null,G__15268_15275,G__15269_15276));
if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$24)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__15270 = result;var G__15271 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15270,G__15271) : rf.call(null,G__15270,G__15271));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__15274 = function(result,input){
switch(arguments.length){
case 0:
return G__15274__0.call(this);
case 1:
return G__15274__1.call(this,result);
case 2:
return G__15274__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15274.cljs$core$IFn$_invoke$arity$0 = G__15274__0;
G__15274.cljs$core$IFn$_invoke$arity$1 = G__15274__1;
G__15274.cljs$core$IFn$_invoke$arity$2 = G__15274__2;
return G__15274;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__15272 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15272) : f.call(null,G__15272));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__15247_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__15273 = p1__15247_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15273) : f.call(null,G__15273));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else
{return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__15285 = init;var G__15286 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15285,G__15286) : f.call(null,G__15285,G__15286));
})(),cljs.core.rest(s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__15381 = null;
var G__15381__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__15381__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15339 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15339) : f.call(null,G__15339));
})()],null));
});
var G__15381__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15340 = x;var G__15341 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15340,G__15341) : f.call(null,G__15340,G__15341));
})()],null));
});
var G__15381__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15342 = x;var G__15343 = y;var G__15344 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15342,G__15343,G__15344) : f.call(null,G__15342,G__15343,G__15344));
})()],null));
});
var G__15381__4 = (function() { 
var G__15382__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__15382 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15382__delegate.call(this,x,y,z,args);};
G__15382.cljs$lang$maxFixedArity = 3;
G__15382.cljs$lang$applyTo = (function (arglist__15383){
var x = cljs.core.first(arglist__15383);
arglist__15383 = cljs.core.next(arglist__15383);
var y = cljs.core.first(arglist__15383);
arglist__15383 = cljs.core.next(arglist__15383);
var z = cljs.core.first(arglist__15383);
var args = cljs.core.rest(arglist__15383);
return G__15382__delegate(x,y,z,args);
});
G__15382.cljs$core$IFn$_invoke$arity$variadic = G__15382__delegate;
return G__15382;
})()
;
G__15381 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15381__0.call(this);
case 1:
return G__15381__1.call(this,x);
case 2:
return G__15381__2.call(this,x,y);
case 3:
return G__15381__3.call(this,x,y,z);
default:
return G__15381__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15381.cljs$lang$maxFixedArity = 3;
G__15381.cljs$lang$applyTo = G__15381__4.cljs$lang$applyTo;
G__15381.cljs$core$IFn$_invoke$arity$0 = G__15381__0;
G__15381.cljs$core$IFn$_invoke$arity$1 = G__15381__1;
G__15381.cljs$core$IFn$_invoke$arity$2 = G__15381__2;
G__15381.cljs$core$IFn$_invoke$arity$3 = G__15381__3;
G__15381.cljs$core$IFn$_invoke$arity$variadic = G__15381__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15381;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__15384 = null;
var G__15384__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__15384__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15345 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15345) : f.call(null,G__15345));
})(),(function (){var G__15346 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__15346) : g.call(null,G__15346));
})()],null));
});
var G__15384__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15347 = x;var G__15348 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15347,G__15348) : f.call(null,G__15347,G__15348));
})(),(function (){var G__15349 = x;var G__15350 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__15349,G__15350) : g.call(null,G__15349,G__15350));
})()],null));
});
var G__15384__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15351 = x;var G__15352 = y;var G__15353 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15351,G__15352,G__15353) : f.call(null,G__15351,G__15352,G__15353));
})(),(function (){var G__15354 = x;var G__15355 = y;var G__15356 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__15354,G__15355,G__15356) : g.call(null,G__15354,G__15355,G__15356));
})()],null));
});
var G__15384__4 = (function() { 
var G__15385__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__15385 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15385__delegate.call(this,x,y,z,args);};
G__15385.cljs$lang$maxFixedArity = 3;
G__15385.cljs$lang$applyTo = (function (arglist__15386){
var x = cljs.core.first(arglist__15386);
arglist__15386 = cljs.core.next(arglist__15386);
var y = cljs.core.first(arglist__15386);
arglist__15386 = cljs.core.next(arglist__15386);
var z = cljs.core.first(arglist__15386);
var args = cljs.core.rest(arglist__15386);
return G__15385__delegate(x,y,z,args);
});
G__15385.cljs$core$IFn$_invoke$arity$variadic = G__15385__delegate;
return G__15385;
})()
;
G__15384 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15384__0.call(this);
case 1:
return G__15384__1.call(this,x);
case 2:
return G__15384__2.call(this,x,y);
case 3:
return G__15384__3.call(this,x,y,z);
default:
return G__15384__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15384.cljs$lang$maxFixedArity = 3;
G__15384.cljs$lang$applyTo = G__15384__4.cljs$lang$applyTo;
G__15384.cljs$core$IFn$_invoke$arity$0 = G__15384__0;
G__15384.cljs$core$IFn$_invoke$arity$1 = G__15384__1;
G__15384.cljs$core$IFn$_invoke$arity$2 = G__15384__2;
G__15384.cljs$core$IFn$_invoke$arity$3 = G__15384__3;
G__15384.cljs$core$IFn$_invoke$arity$variadic = G__15384__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15384;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__15387 = null;
var G__15387__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__15387__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15357 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15357) : f.call(null,G__15357));
})(),(function (){var G__15358 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__15358) : g.call(null,G__15358));
})(),(function (){var G__15359 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__15359) : h.call(null,G__15359));
})()],null));
});
var G__15387__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15360 = x;var G__15361 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15360,G__15361) : f.call(null,G__15360,G__15361));
})(),(function (){var G__15362 = x;var G__15363 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__15362,G__15363) : g.call(null,G__15362,G__15363));
})(),(function (){var G__15364 = x;var G__15365 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__15364,G__15365) : h.call(null,G__15364,G__15365));
})()],null));
});
var G__15387__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__15366 = x;var G__15367 = y;var G__15368 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15366,G__15367,G__15368) : f.call(null,G__15366,G__15367,G__15368));
})(),(function (){var G__15369 = x;var G__15370 = y;var G__15371 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__15369,G__15370,G__15371) : g.call(null,G__15369,G__15370,G__15371));
})(),(function (){var G__15372 = x;var G__15373 = y;var G__15374 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__15372,G__15373,G__15374) : h.call(null,G__15372,G__15373,G__15374));
})()],null));
});
var G__15387__4 = (function() { 
var G__15388__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__15388 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15388__delegate.call(this,x,y,z,args);};
G__15388.cljs$lang$maxFixedArity = 3;
G__15388.cljs$lang$applyTo = (function (arglist__15389){
var x = cljs.core.first(arglist__15389);
arglist__15389 = cljs.core.next(arglist__15389);
var y = cljs.core.first(arglist__15389);
arglist__15389 = cljs.core.next(arglist__15389);
var z = cljs.core.first(arglist__15389);
var args = cljs.core.rest(arglist__15389);
return G__15388__delegate(x,y,z,args);
});
G__15388.cljs$core$IFn$_invoke$arity$variadic = G__15388__delegate;
return G__15388;
})()
;
G__15387 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15387__0.call(this);
case 1:
return G__15387__1.call(this,x);
case 2:
return G__15387__2.call(this,x,y);
case 3:
return G__15387__3.call(this,x,y,z);
default:
return G__15387__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15387.cljs$lang$maxFixedArity = 3;
G__15387.cljs$lang$applyTo = G__15387__4.cljs$lang$applyTo;
G__15387.cljs$core$IFn$_invoke$arity$0 = G__15387__0;
G__15387.cljs$core$IFn$_invoke$arity$1 = G__15387__1;
G__15387.cljs$core$IFn$_invoke$arity$2 = G__15387__2;
G__15387.cljs$core$IFn$_invoke$arity$3 = G__15387__3;
G__15387.cljs$core$IFn$_invoke$arity$variadic = G__15387__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15387;
})()
});
var juxt__4 = (function() { 
var G__15390__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__15391 = null;
var G__15391__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15287_SHARP_,p2__15288_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15287_SHARP_,(function (){return (p2__15288_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__15288_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__15288_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15391__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15289_SHARP_,p2__15290_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15289_SHARP_,(function (){var G__15375 = x;return (p2__15290_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__15290_SHARP_.cljs$core$IFn$_invoke$arity$1(G__15375) : p2__15290_SHARP_.call(null,G__15375));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15391__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15291_SHARP_,p2__15292_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15291_SHARP_,(function (){var G__15376 = x;var G__15377 = y;return (p2__15292_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__15292_SHARP_.cljs$core$IFn$_invoke$arity$2(G__15376,G__15377) : p2__15292_SHARP_.call(null,G__15376,G__15377));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15391__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15293_SHARP_,p2__15294_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15293_SHARP_,(function (){var G__15378 = x;var G__15379 = y;var G__15380 = z;return (p2__15294_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__15294_SHARP_.cljs$core$IFn$_invoke$arity$3(G__15378,G__15379,G__15380) : p2__15294_SHARP_.call(null,G__15378,G__15379,G__15380));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15391__4 = (function() { 
var G__15392__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__15295_SHARP_,p2__15296_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15295_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__15296_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__15392 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15392__delegate.call(this,x,y,z,args);};
G__15392.cljs$lang$maxFixedArity = 3;
G__15392.cljs$lang$applyTo = (function (arglist__15393){
var x = cljs.core.first(arglist__15393);
arglist__15393 = cljs.core.next(arglist__15393);
var y = cljs.core.first(arglist__15393);
arglist__15393 = cljs.core.next(arglist__15393);
var z = cljs.core.first(arglist__15393);
var args = cljs.core.rest(arglist__15393);
return G__15392__delegate(x,y,z,args);
});
G__15392.cljs$core$IFn$_invoke$arity$variadic = G__15392__delegate;
return G__15392;
})()
;
G__15391 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15391__0.call(this);
case 1:
return G__15391__1.call(this,x);
case 2:
return G__15391__2.call(this,x,y);
case 3:
return G__15391__3.call(this,x,y,z);
default:
return G__15391__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15391.cljs$lang$maxFixedArity = 3;
G__15391.cljs$lang$applyTo = G__15391__4.cljs$lang$applyTo;
G__15391.cljs$core$IFn$_invoke$arity$0 = G__15391__0;
G__15391.cljs$core$IFn$_invoke$arity$1 = G__15391__1;
G__15391.cljs$core$IFn$_invoke$arity$2 = G__15391__2;
G__15391.cljs$core$IFn$_invoke$arity$3 = G__15391__3;
G__15391.cljs$core$IFn$_invoke$arity$variadic = G__15391__4.cljs$core$IFn$_invoke$arity$variadic;
return G__15391;
})()
;})(fs__$1))
};
var G__15390 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15390__delegate.call(this,f,g,h,fs);};
G__15390.cljs$lang$maxFixedArity = 3;
G__15390.cljs$lang$applyTo = (function (arglist__15394){
var f = cljs.core.first(arglist__15394);
arglist__15394 = cljs.core.next(arglist__15394);
var g = cljs.core.first(arglist__15394);
arglist__15394 = cljs.core.next(arglist__15394);
var h = cljs.core.first(arglist__15394);
var fs = cljs.core.rest(arglist__15394);
return G__15390__delegate(f,g,h,fs);
});
G__15390.cljs$core$IFn$_invoke$arity$variadic = G__15390__delegate;
return G__15390;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq(coll))
{{
var G__15395 = cljs.core.next(coll);
coll = G__15395;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq(coll)) && ((n > (0))))
{{
var G__15396 = (n - (1));
var G__15397 = cljs.core.next(coll);
n = G__15396;
coll = G__15397;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
} else
{return null;
}
} else
{throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
} else
{throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find(re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){if((s instanceof RegExp))
{return s;
} else
{var vec__15401 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(2),null);return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_15409 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__15410_15416 = cljs.core.first(coll);var G__15411_15417 = writer;var G__15412_15418 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15410_15416,G__15411_15417,G__15412_15418) : print_one.call(null,G__15410_15416,G__15411_15417,G__15412_15418));
} else
{}
var coll_15419__$1 = cljs.core.next(coll);var n_15420 = (cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_15419__$1) && (((n_15420 == null)) || (!((n_15420 === (0))))))
{cljs.core._write(writer,sep);
var G__15413_15421 = cljs.core.first(coll_15419__$1);var G__15414_15422 = writer;var G__15415_15423 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15413_15421,G__15414_15422,G__15415_15423) : print_one.call(null,G__15413_15421,G__15414_15422,G__15415_15423));
{
var G__15424 = cljs.core.next(coll_15419__$1);
var G__15425 = (n_15420 - (1));
coll_15419__$1 = G__15424;
n_15420 = G__15425;
continue;
}
} else
{if((cljs.core.seq(coll_15419__$1)) && ((n_15420 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15409;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__15430 = cljs.core.seq(ss);var chunk__15431 = null;var count__15432 = (0);var i__15433 = (0);while(true){
if((i__15433 < count__15432))
{var s = chunk__15431.cljs$core$IIndexed$_nth$arity$2(null,i__15433);cljs.core._write(writer,s);
{
var G__15434 = seq__15430;
var G__15435 = chunk__15431;
var G__15436 = count__15432;
var G__15437 = (i__15433 + (1));
seq__15430 = G__15434;
chunk__15431 = G__15435;
count__15432 = G__15436;
i__15433 = G__15437;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15430);if(temp__4126__auto__)
{var seq__15430__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15430__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__15430__$1);{
var G__15438 = cljs.core.chunk_rest(seq__15430__$1);
var G__15439 = c__4410__auto__;
var G__15440 = cljs.core.count(c__4410__auto__);
var G__15441 = (0);
seq__15430 = G__15438;
chunk__15431 = G__15439;
count__15432 = G__15440;
i__15433 = G__15441;
continue;
}
} else
{var s = cljs.core.first(seq__15430__$1);cljs.core._write(writer,s);
{
var G__15442 = cljs.core.next(seq__15430__$1);
var G__15443 = null;
var G__15444 = (0);
var G__15445 = (0);
seq__15430 = G__15442;
chunk__15431 = G__15443;
count__15432 = G__15444;
i__15433 = G__15445;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__15446){
var writer = cljs.core.first(arglist__15446);
var ss = cljs.core.rest(arglist__15446);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj15448 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj15448;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__15451 = "[\\\\\"\b\f\n\r\t]";var G__15452 = "g";return RegExp(G__15451,G__15452);
})(),(function (match){return (cljs.core.char_escapes[match]);
})))+"\"");
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17);if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = (function (){var G__15466 = obj;if(G__15466)
{var bit__4304__auto__ = (G__15466.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4304__auto__) || (G__15466.cljs$core$IMeta$))
{return true;
} else
{if((!G__15466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__15466);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__15466);
}
})();if(and__3628__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__15467 = obj;if(G__15467)
{var bit__4297__auto__ = (G__15467.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4297__auto__) || (G__15467.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else
{if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write(writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)));
} else
{if(cljs.core.object_QMARK_(obj))
{cljs.core._write(writer,"#js ");
var G__15468 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__15469 = pr_writer;var G__15470 = writer;var G__15471 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__15468,G__15469,G__15470,G__15471) : cljs.core.print_map.call(null,G__15468,G__15469,G__15470,G__15471));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__15472 = obj;return goog.isString(G__15472);
})()))
{if(cljs.core.truth_(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{if(cljs.core.fn_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));while(true){
if((cljs.core.count(ns) < len))
{{
var G__15474 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__15474;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj.getUTCFullYear())),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else
{if(cljs.core.regexp_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if((function (){var G__15473 = obj;if(G__15473)
{var bit__4304__auto__ = (G__15473.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4304__auto__) || (G__15473.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__15473.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__15473);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__15473);
}
})())
{return cljs.core._pr_writer(obj,writer,opts);
} else
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var seq__15479 = cljs.core.seq(cljs.core.next(objs));var chunk__15480 = null;var count__15481 = (0);var i__15482 = (0);while(true){
if((i__15482 < count__15481))
{var obj = chunk__15480.cljs$core$IIndexed$_nth$arity$2(null,i__15482);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__15483 = seq__15479;
var G__15484 = chunk__15480;
var G__15485 = count__15481;
var G__15486 = (i__15482 + (1));
seq__15479 = G__15483;
chunk__15480 = G__15484;
count__15481 = G__15485;
i__15482 = G__15486;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15479);if(temp__4126__auto__)
{var seq__15479__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15479__$1))
{var c__4410__auto__ = cljs.core.chunk_first(seq__15479__$1);{
var G__15487 = cljs.core.chunk_rest(seq__15479__$1);
var G__15488 = c__4410__auto__;
var G__15489 = cljs.core.count(c__4410__auto__);
var G__15490 = (0);
seq__15479 = G__15487;
chunk__15480 = G__15488;
count__15481 = G__15489;
i__15482 = G__15490;
continue;
}
} else
{var obj = cljs.core.first(seq__15479__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__15491 = cljs.core.next(seq__15479__$1);
var G__15492 = null;
var G__15493 = (0);
var G__15494 = (0);
seq__15479 = G__15491;
chunk__15480 = G__15492;
count__15481 = G__15493;
i__15482 = G__15494;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer(objs,writer,opts);
writer.cljs$core$IWriter$_flush$arity$1(null);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts(objs,opts)));
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);sb.append("\n");
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$15)))
{return cljs.core.flush();
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__15495){
var objs = cljs.core.seq(arglist__15495);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__15496){
var objs = cljs.core.seq(arglist__15496);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__15497){
var objs = cljs.core.seq(arglist__15497);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$16,false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__15498){
var objs = cljs.core.seq(arglist__15498);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$16,false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__15499){
var objs = cljs.core.seq(arglist__15499);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$16,false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__15500){
var objs = cljs.core.seq(arglist__15500);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$16,false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__15501){
var objs = cljs.core.seq(arglist__15501);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__15502){
var objs = cljs.core.seq(arglist__15502);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__15509_15515 = cljs.core.key(e);var G__15510_15516 = w;var G__15511_15517 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15509_15515,G__15510_15516,G__15511_15517) : print_one.call(null,G__15509_15515,G__15510_15516,G__15511_15517));
cljs.core._write(w," ");
var G__15512 = cljs.core.val(e);var G__15513 = w;var G__15514 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__15512,G__15513,G__15514) : print_one.call(null,G__15512,G__15513,G__15514));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(a__$1.state,writer,opts);
return cljs.core._write(writer,">");
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write(writer,"()");
});
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15518){
var iref = cljs.core.first(arglist__15518);
arglist__15518 = cljs.core.next(arglist__15518);
var f = cljs.core.first(arglist__15518);
var args = cljs.core.rest(arglist__15518);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = (function (){var G__15521 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15521) : cljs.core.atom.call(null,G__15521));
})();
} else
{}
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.not(self__.f);
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.f))
{self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
self__.f = null;
} else
{}
return self__.value;
});
cljs.core.__GT_Delay = (function __GT_Delay(f,value){return (new cljs.core.Delay(f,value));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_(x))
{var G__15523 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15523) : cljs.core.deref.call(null,G__15523));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){return (function (p1__15524_SHARP_,p2__15525_SHARP_){var ret = (function (){var G__15528 = p1__15524_SHARP_;var G__15529 = p2__15525_SHARP_;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15528,G__15529) : rf.call(null,G__15528,G__15529));
})();if(cljs.core.reduced_QMARK_(ret))
{return cljs.core.reduced(ret);
} else
{return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(rf){var rf1 = cljs.core.preserving_reduced(rf);return ((function (rf1){
return (function() {
var G__15532 = null;
var G__15532__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15532__1 = (function (result){var G__15531 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15531) : rf.call(null,G__15531));
});
var G__15532__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__15532 = function(result,input){
switch(arguments.length){
case 0:
return G__15532__0.call(this);
case 1:
return G__15532__1.call(this,result);
case 2:
return G__15532__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15532.cljs$core$IFn$_invoke$arity$0 = G__15532__0;
G__15532.cljs$core$IFn$_invoke$arity$1 = G__15532__1;
G__15532.cljs$core$IFn$_invoke$arity$2 = G__15532__2;
return G__15532;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (rf){var pa = (function (){var G__15540 = cljs.core.constant$keyword$24;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15540) : cljs.core.atom.call(null,G__15540));
})();return ((function (pa){
return (function() {
var G__15547 = null;
var G__15547__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__15547__1 = (function (result){var G__15541 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__15541) : rf.call(null,G__15541));
});
var G__15547__2 = (function (result,input){var prior = (function (){var G__15542 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15542) : cljs.core.deref.call(null,G__15542));
})();var G__15543_15548 = pa;var G__15544_15549 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15543_15548,G__15544_15549) : cljs.core.reset_BANG_.call(null,G__15543_15548,G__15544_15549));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__15545 = result;var G__15546 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__15545,G__15546) : rf.call(null,G__15545,G__15546));
}
});
G__15547 = function(result,input){
switch(arguments.length){
case 0:
return G__15547__0.call(this);
case 1:
return G__15547__1.call(this,result);
case 2:
return G__15547__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15547.cljs$core$IFn$_invoke$arity$0 = G__15547__0;
G__15547.cljs$core$IFn$_invoke$arity$1 = G__15547__1;
G__15547.cljs$core$IFn$_invoke$arity$2 = G__15547__2;
return G__15547;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.cljs$lang$type = true;
cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";
cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/Eduction");
});
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){var self__ = this;
var coll__$2 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});
cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});
cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});
cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15551_SHARP_,p2__15550_SHARP_){var G__15553 = p2__15550_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__15553) : proc.call(null,G__15553));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj15555 = {};return obj15555;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (cljs.core._clj__GT_js[(function (){var G__15559 = x__4277__auto__;return goog.typeOf(G__15559);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__3628__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (cljs.core._key__GT_js[(function (){var G__15563 = x__4277__auto__;return goog.typeOf(G__15563);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__15566 = k;if(G__15566)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__15566.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__15566.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15566);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15566);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__15567 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__15567) : cljs.core.clj__GT_js.call(null,G__15567));
} else
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__15583 = x;if(G__15583)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__15583.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__15583.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__15583);
}
})())
{return cljs.core._clj__GT_js(x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if((x instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.map_QMARK_(x))
{var m = (function (){var obj15585 = {};return obj15585;
})();var seq__15586_15596 = cljs.core.seq(x);var chunk__15587_15597 = null;var count__15588_15598 = (0);var i__15589_15599 = (0);while(true){
if((i__15589_15599 < count__15588_15598))
{var vec__15590_15600 = chunk__15587_15597.cljs$core$IIndexed$_nth$arity$2(null,i__15589_15599);var k_15601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590_15600,(0),null);var v_15602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590_15600,(1),null);(m[cljs.core.key__GT_js(k_15601)] = clj__GT_js(v_15602));
{
var G__15603 = seq__15586_15596;
var G__15604 = chunk__15587_15597;
var G__15605 = count__15588_15598;
var G__15606 = (i__15589_15599 + (1));
seq__15586_15596 = G__15603;
chunk__15587_15597 = G__15604;
count__15588_15598 = G__15605;
i__15589_15599 = G__15606;
continue;
}
} else
{var temp__4126__auto___15607 = cljs.core.seq(seq__15586_15596);if(temp__4126__auto___15607)
{var seq__15586_15608__$1 = temp__4126__auto___15607;if(cljs.core.chunked_seq_QMARK_(seq__15586_15608__$1))
{var c__4410__auto___15609 = cljs.core.chunk_first(seq__15586_15608__$1);{
var G__15610 = cljs.core.chunk_rest(seq__15586_15608__$1);
var G__15611 = c__4410__auto___15609;
var G__15612 = cljs.core.count(c__4410__auto___15609);
var G__15613 = (0);
seq__15586_15596 = G__15610;
chunk__15587_15597 = G__15611;
count__15588_15598 = G__15612;
i__15589_15599 = G__15613;
continue;
}
} else
{var vec__15591_15614 = cljs.core.first(seq__15586_15608__$1);var k_15615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15591_15614,(0),null);var v_15616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15591_15614,(1),null);(m[cljs.core.key__GT_js(k_15615)] = clj__GT_js(v_15616));
{
var G__15617 = cljs.core.next(seq__15586_15608__$1);
var G__15618 = null;
var G__15619 = (0);
var G__15620 = (0);
seq__15586_15596 = G__15617;
chunk__15587_15597 = G__15618;
count__15588_15598 = G__15619;
i__15589_15599 = G__15620;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_(x))
{var arr = [];var seq__15592_15621 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__15593_15622 = null;var count__15594_15623 = (0);var i__15595_15624 = (0);while(true){
if((i__15595_15624 < count__15594_15623))
{var x_15625__$1 = chunk__15593_15622.cljs$core$IIndexed$_nth$arity$2(null,i__15595_15624);arr.push(x_15625__$1);
{
var G__15626 = seq__15592_15621;
var G__15627 = chunk__15593_15622;
var G__15628 = count__15594_15623;
var G__15629 = (i__15595_15624 + (1));
seq__15592_15621 = G__15626;
chunk__15593_15622 = G__15627;
count__15594_15623 = G__15628;
i__15595_15624 = G__15629;
continue;
}
} else
{var temp__4126__auto___15630 = cljs.core.seq(seq__15592_15621);if(temp__4126__auto___15630)
{var seq__15592_15631__$1 = temp__4126__auto___15630;if(cljs.core.chunked_seq_QMARK_(seq__15592_15631__$1))
{var c__4410__auto___15632 = cljs.core.chunk_first(seq__15592_15631__$1);{
var G__15633 = cljs.core.chunk_rest(seq__15592_15631__$1);
var G__15634 = c__4410__auto___15632;
var G__15635 = cljs.core.count(c__4410__auto___15632);
var G__15636 = (0);
seq__15592_15621 = G__15633;
chunk__15593_15622 = G__15634;
count__15594_15623 = G__15635;
i__15595_15624 = G__15636;
continue;
}
} else
{var x_15637__$1 = cljs.core.first(seq__15592_15631__$1);arr.push(x_15637__$1);
{
var G__15638 = cljs.core.next(seq__15592_15631__$1);
var G__15639 = null;
var G__15640 = (0);
var G__15641 = (0);
seq__15592_15621 = G__15638;
chunk__15593_15622 = G__15639;
count__15594_15623 = G__15640;
i__15595_15624 = G__15641;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{return x;

}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj15643 = {};return obj15643;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__3628__auto__ = x;if(and__3628__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__3628__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__4277__auto__ = (((x == null))?null:x);return (function (){var or__3640__auto__ = (cljs.core._js__GT_clj[(function (){var G__15647 = x__4277__auto__;return goog.typeOf(G__15647);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__15702__delegate = function (x,opts){if((function (){var G__15676 = x;if(G__15676)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__15676.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__15676.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__15676);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__15677 = opts;var map__15677__$1 = ((cljs.core.seq_QMARK_(map__15677))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15677):map__15677);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15677__$1,cljs.core.constant$keyword$25);var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__15677,map__15677__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4379__auto__ = ((function (map__15677,map__15677__$1,keywordize_keys,keyfn){
return (function iter__15692(s__15693){return (new cljs.core.LazySeq(null,((function (map__15677,map__15677__$1,keywordize_keys,keyfn){
return (function (){var s__15693__$1 = s__15693;while(true){
var temp__4126__auto__ = cljs.core.seq(s__15693__$1);if(temp__4126__auto__)
{var s__15693__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__15693__$2))
{var c__4377__auto__ = cljs.core.chunk_first(s__15693__$2);var size__4378__auto__ = cljs.core.count(c__4377__auto__);var b__15695 = cljs.core.chunk_buffer(size__4378__auto__);if((function (){var i__15694 = (0);while(true){
if((i__15694 < size__4378__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4377__auto__,i__15694);cljs.core.chunk_append(b__15695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15700 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15700) : keyfn.call(null,G__15700));
})(),thisfn((x__$1[k]))], null));
{
var G__15703 = (i__15694 + (1));
i__15694 = G__15703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__15695),iter__15692(cljs.core.chunk_rest(s__15693__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__15695),null);
}
} else
{var k = cljs.core.first(s__15693__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15701 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__15701) : keyfn.call(null,G__15701));
})(),thisfn((x__$1[k]))], null),iter__15692(cljs.core.rest(s__15693__$2)));
}
} else
{return null;
}
break;
}
});})(map__15677,map__15677__$1,keywordize_keys,keyfn))
,null,null));
});})(map__15677,map__15677__$1,keywordize_keys,keyfn))
;return iter__4379__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__15677,map__15677__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__15702 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15702__delegate.call(this,x,opts);};
G__15702.cljs$lang$maxFixedArity = 1;
G__15702.cljs$lang$applyTo = (function (arglist__15704){
var x = cljs.core.first(arglist__15704);
var opts = cljs.core.rest(arglist__15704);
return G__15702__delegate(x,opts);
});
G__15702.cljs$core$IFn$_invoke$arity$variadic = G__15702__delegate;
return G__15702;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__15707 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15707) : cljs.core.atom.call(null,G__15707));
})();return ((function (mem){
return (function() { 
var G__15709__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__15708 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15708) : cljs.core.deref.call(null,G__15708));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__15709 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15709__delegate.call(this,args);};
G__15709.cljs$lang$maxFixedArity = 0;
G__15709.cljs$lang$applyTo = (function (arglist__15710){
var args = cljs.core.seq(arglist__15710);
return G__15709__delegate(args);
});
G__15709.cljs$core$IFn$_invoke$arity$variadic = G__15709__delegate;
return G__15709;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();if(cljs.core.fn_QMARK_(ret))
{{
var G__15712 = ret;
f = G__15712;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__15713__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__15713 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15713__delegate.call(this,f,args);};
G__15713.cljs$lang$maxFixedArity = 1;
G__15713.cljs$lang$applyTo = (function (arglist__15714){
var f = cljs.core.first(arglist__15714);
var args = cljs.core.rest(arglist__15714);
return G__15713__delegate(f,args);
});
G__15713.cljs$core$IFn$_invoke$arity$variadic = G__15713__delegate;
return G__15713;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){var G__15717 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__15717) : Math.floor.call(null,G__15717));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__15719 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15719) : f.call(null,G__15719));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$26,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$27,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$28,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = (function (){var G__15721 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15721) : cljs.core.atom.call(null,G__15721));
})();
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__15722){
var f = cljs.core.first(arglist__15722);
var args = cljs.core.rest(arglist__15722);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__15787 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15787) : cljs.core.deref.call(null,G__15787));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__3640__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{var and__3628__auto__ = cljs.core.vector_QMARK_(parent);if(and__3628__auto__)
{var and__3628__auto____$1 = cljs.core.vector_QMARK_(child);if(and__3628__auto____$1)
{var and__3628__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__3628__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__15812 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__15810 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__15810) : child.call(null,G__15810));
})(),(function (){var G__15811 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__15811) : parent.call(null,G__15811));
})());
var G__15813 = (i + (1));
ret = G__15812;
i = G__15813;
continue;
}
}
break;
}
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__15817 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15817) : cljs.core.deref.call(null,G__15817));
})(),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__15821 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15821) : cljs.core.deref.call(null,G__15821));
})(),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__15825 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15825) : cljs.core.deref.call(null,G__15825));
})(),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
var tp = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(h);var td = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(h);var ta = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__15834 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__15834) : targets.call(null,G__15834));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__15835 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__15835) : sources.call(null,G__15835));
})()));
});})(tp,td,ta))
;var or__3640__auto__ = ((cljs.core.contains_QMARK_((function (){var G__15839 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__15839) : tp.call(null,G__15839));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__15840 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__15840) : ta.call(null,G__15840));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__15841 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__15841) : ta.call(null,G__15841));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$26,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$28,tf(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$27,tf(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__15848 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15848) : parentMap.call(null,G__15848));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__15849 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15849) : parentMap.call(null,G__15849));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__15842_SHARP_){return cljs.core.cons(cljs.core.first(p1__15842_SHARP_),cljs.core.interpose(cljs.core.first(p1__15842_SHARP_),cljs.core.second(p1__15842_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__15850 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__15850) : parentMap.call(null,G__15850));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__15843_SHARP_,p2__15844_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__15843_SHARP_,p2__15844_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__15853 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15853) : cljs.core.deref.call(null,G__15853));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__15854 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15854) : cljs.core.deref.call(null,G__15854));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__15870 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15870) : cljs.core.deref.call(null,G__15870));
})().call(null,x);var or__3640__auto__ = (cljs.core.truth_((function (){var and__3628__auto__ = xprefs;if(cljs.core.truth_(and__3628__auto__))
{var G__15872 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__15872) : xprefs.call(null,G__15872));
} else
{return and__3628__auto__;
}
})())?true:null);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__15873 = cljs.core.rest(ps);
ps = G__15873;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3640__auto____$1))
{return or__3640__auto____$1;
} else
{var or__3640__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__15874 = cljs.core.rest(ps);
ps = G__15874;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3640__auto____$2))
{return or__3640__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__3640__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__15888){var vec__15889 = p__15888;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15889,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15889,(1),null);var e = vec__15889;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__15890 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15890) : cljs.core.deref.call(null,G__15890));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3640__auto__ = (be == null);if(or__3640__auto__)
{return or__3640__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error(("Multiple methods in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(be2))+", and neither is preferred")));
}
return be2;
} else
{return be;
}
}),null,(function (){var G__15891 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15891) : cljs.core.deref.call(null,G__15891));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15892 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15892) : cljs.core.deref.call(null,G__15892));
})(),(function (){var G__15893 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15893) : cljs.core.deref.call(null,G__15893));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj15895 = {};return obj15895;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._reset[(function (){var G__15899 = x__4277__auto__;return goog.typeOf(G__15899);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._reset["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._add_method[(function (){var G__15903 = x__4277__auto__;return goog.typeOf(G__15903);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._add_method["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._remove_method[(function (){var G__15907 = x__4277__auto__;return goog.typeOf(G__15907);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._remove_method["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._prefer_method[(function (){var G__15911 = x__4277__auto__;return goog.typeOf(G__15911);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._prefer_method["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._get_method[(function (){var G__15915 = x__4277__auto__;return goog.typeOf(G__15915);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._get_method["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._methods[(function (){var G__15919 = x__4277__auto__;return goog.typeOf(G__15919);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._methods["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__3628__auto__ = mf;if(and__3628__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3628__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__4277__auto__ = (((mf == null))?null:mf);return (function (){var or__3640__auto__ = (cljs.core._prefers[(function (){var G__15923 = x__4277__auto__;return goog.typeOf(G__15923);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core._prefers["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){throw (new Error(("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val))));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15925 = this$__$1;return goog.getUid(G__15925);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){return null;
});})(mf__$1))
);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15926 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15926) : cljs.core.deref.call(null,G__15926));
})(),(function (){var G__15927 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15927) : cljs.core.deref.call(null,G__15927));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = (function (){var G__15928 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15928) : cljs.core.deref.call(null,G__15928));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return (function (){var G__15929 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15929) : cljs.core.deref.call(null,G__15929));
})().call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error(("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_y)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_x))));
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__15930 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15930) : cljs.core.deref.call(null,G__15930));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__15931 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15931) : cljs.core.deref.call(null,G__15931));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__16772 = null;
var G__16772__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15932 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__15932) : self__.dispatch_fn.call(null,G__15932));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15933 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__15933) : target_fn.call(null,G__15933));
});
var G__16772__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15934 = a;var G__15935 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__15934,G__15935) : self__.dispatch_fn.call(null,G__15934,G__15935));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15936 = a;var G__15937 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__15936,G__15937) : target_fn.call(null,G__15936,G__15937));
});
var G__16772__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15938 = a;var G__15939 = b;var G__15940 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__15938,G__15939,G__15940) : self__.dispatch_fn.call(null,G__15938,G__15939,G__15940));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15941 = a;var G__15942 = b;var G__15943 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__15941,G__15942,G__15943) : target_fn.call(null,G__15941,G__15942,G__15943));
});
var G__16772__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15944 = a;var G__15945 = b;var G__15946 = c;var G__15947 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__15944,G__15945,G__15946,G__15947) : self__.dispatch_fn.call(null,G__15944,G__15945,G__15946,G__15947));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15948 = a;var G__15949 = b;var G__15950 = c;var G__15951 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__15948,G__15949,G__15950,G__15951) : target_fn.call(null,G__15948,G__15949,G__15950,G__15951));
});
var G__16772__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15952 = a;var G__15953 = b;var G__15954 = c;var G__15955 = d;var G__15956 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__15952,G__15953,G__15954,G__15955,G__15956) : self__.dispatch_fn.call(null,G__15952,G__15953,G__15954,G__15955,G__15956));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15957 = a;var G__15958 = b;var G__15959 = c;var G__15960 = d;var G__15961 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__15957,G__15958,G__15959,G__15960,G__15961) : target_fn.call(null,G__15957,G__15958,G__15959,G__15960,G__15961));
});
var G__16772__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15962 = a;var G__15963 = b;var G__15964 = c;var G__15965 = d;var G__15966 = e;var G__15967 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__15962,G__15963,G__15964,G__15965,G__15966,G__15967) : self__.dispatch_fn.call(null,G__15962,G__15963,G__15964,G__15965,G__15966,G__15967));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15968 = a;var G__15969 = b;var G__15970 = c;var G__15971 = d;var G__15972 = e;var G__15973 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__15968,G__15969,G__15970,G__15971,G__15972,G__15973) : target_fn.call(null,G__15968,G__15969,G__15970,G__15971,G__15972,G__15973));
});
var G__16772__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15974 = a;var G__15975 = b;var G__15976 = c;var G__15977 = d;var G__15978 = e;var G__15979 = f;var G__15980 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__15974,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980) : self__.dispatch_fn.call(null,G__15974,G__15975,G__15976,G__15977,G__15978,G__15979,G__15980));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15981 = a;var G__15982 = b;var G__15983 = c;var G__15984 = d;var G__15985 = e;var G__15986 = f;var G__15987 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987) : target_fn.call(null,G__15981,G__15982,G__15983,G__15984,G__15985,G__15986,G__15987));
});
var G__16772__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__15988 = a;var G__15989 = b;var G__15990 = c;var G__15991 = d;var G__15992 = e;var G__15993 = f;var G__15994 = g;var G__15995 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__15988,G__15989,G__15990,G__15991,G__15992,G__15993,G__15994,G__15995) : self__.dispatch_fn.call(null,G__15988,G__15989,G__15990,G__15991,G__15992,G__15993,G__15994,G__15995));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__15996 = a;var G__15997 = b;var G__15998 = c;var G__15999 = d;var G__16000 = e;var G__16001 = f;var G__16002 = g;var G__16003 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003) : target_fn.call(null,G__15996,G__15997,G__15998,G__15999,G__16000,G__16001,G__16002,G__16003));
});
var G__16772__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16004 = a;var G__16005 = b;var G__16006 = c;var G__16007 = d;var G__16008 = e;var G__16009 = f;var G__16010 = g;var G__16011 = h;var G__16012 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__16004,G__16005,G__16006,G__16007,G__16008,G__16009,G__16010,G__16011,G__16012) : self__.dispatch_fn.call(null,G__16004,G__16005,G__16006,G__16007,G__16008,G__16009,G__16010,G__16011,G__16012));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16013 = a;var G__16014 = b;var G__16015 = c;var G__16016 = d;var G__16017 = e;var G__16018 = f;var G__16019 = g;var G__16020 = h;var G__16021 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__16013,G__16014,G__16015,G__16016,G__16017,G__16018,G__16019,G__16020,G__16021) : target_fn.call(null,G__16013,G__16014,G__16015,G__16016,G__16017,G__16018,G__16019,G__16020,G__16021));
});
var G__16772__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16022 = a;var G__16023 = b;var G__16024 = c;var G__16025 = d;var G__16026 = e;var G__16027 = f;var G__16028 = g;var G__16029 = h;var G__16030 = i;var G__16031 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__16022,G__16023,G__16024,G__16025,G__16026,G__16027,G__16028,G__16029,G__16030,G__16031) : self__.dispatch_fn.call(null,G__16022,G__16023,G__16024,G__16025,G__16026,G__16027,G__16028,G__16029,G__16030,G__16031));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16032 = a;var G__16033 = b;var G__16034 = c;var G__16035 = d;var G__16036 = e;var G__16037 = f;var G__16038 = g;var G__16039 = h;var G__16040 = i;var G__16041 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__16032,G__16033,G__16034,G__16035,G__16036,G__16037,G__16038,G__16039,G__16040,G__16041) : target_fn.call(null,G__16032,G__16033,G__16034,G__16035,G__16036,G__16037,G__16038,G__16039,G__16040,G__16041));
});
var G__16772__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16042 = a;var G__16043 = b;var G__16044 = c;var G__16045 = d;var G__16046 = e;var G__16047 = f;var G__16048 = g;var G__16049 = h;var G__16050 = i;var G__16051 = j;var G__16052 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__16042,G__16043,G__16044,G__16045,G__16046,G__16047,G__16048,G__16049,G__16050,G__16051,G__16052) : self__.dispatch_fn.call(null,G__16042,G__16043,G__16044,G__16045,G__16046,G__16047,G__16048,G__16049,G__16050,G__16051,G__16052));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16053 = a;var G__16054 = b;var G__16055 = c;var G__16056 = d;var G__16057 = e;var G__16058 = f;var G__16059 = g;var G__16060 = h;var G__16061 = i;var G__16062 = j;var G__16063 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__16053,G__16054,G__16055,G__16056,G__16057,G__16058,G__16059,G__16060,G__16061,G__16062,G__16063) : target_fn.call(null,G__16053,G__16054,G__16055,G__16056,G__16057,G__16058,G__16059,G__16060,G__16061,G__16062,G__16063));
});
var G__16772__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16064 = a;var G__16065 = b;var G__16066 = c;var G__16067 = d;var G__16068 = e;var G__16069 = f;var G__16070 = g;var G__16071 = h;var G__16072 = i;var G__16073 = j;var G__16074 = k;var G__16075 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__16064,G__16065,G__16066,G__16067,G__16068,G__16069,G__16070,G__16071,G__16072,G__16073,G__16074,G__16075) : self__.dispatch_fn.call(null,G__16064,G__16065,G__16066,G__16067,G__16068,G__16069,G__16070,G__16071,G__16072,G__16073,G__16074,G__16075));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16076 = a;var G__16077 = b;var G__16078 = c;var G__16079 = d;var G__16080 = e;var G__16081 = f;var G__16082 = g;var G__16083 = h;var G__16084 = i;var G__16085 = j;var G__16086 = k;var G__16087 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__16076,G__16077,G__16078,G__16079,G__16080,G__16081,G__16082,G__16083,G__16084,G__16085,G__16086,G__16087) : target_fn.call(null,G__16076,G__16077,G__16078,G__16079,G__16080,G__16081,G__16082,G__16083,G__16084,G__16085,G__16086,G__16087));
});
var G__16772__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16088 = a;var G__16089 = b;var G__16090 = c;var G__16091 = d;var G__16092 = e;var G__16093 = f;var G__16094 = g;var G__16095 = h;var G__16096 = i;var G__16097 = j;var G__16098 = k;var G__16099 = l;var G__16100 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__16088,G__16089,G__16090,G__16091,G__16092,G__16093,G__16094,G__16095,G__16096,G__16097,G__16098,G__16099,G__16100) : self__.dispatch_fn.call(null,G__16088,G__16089,G__16090,G__16091,G__16092,G__16093,G__16094,G__16095,G__16096,G__16097,G__16098,G__16099,G__16100));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16101 = a;var G__16102 = b;var G__16103 = c;var G__16104 = d;var G__16105 = e;var G__16106 = f;var G__16107 = g;var G__16108 = h;var G__16109 = i;var G__16110 = j;var G__16111 = k;var G__16112 = l;var G__16113 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__16101,G__16102,G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113) : target_fn.call(null,G__16101,G__16102,G__16103,G__16104,G__16105,G__16106,G__16107,G__16108,G__16109,G__16110,G__16111,G__16112,G__16113));
});
var G__16772__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16114 = a;var G__16115 = b;var G__16116 = c;var G__16117 = d;var G__16118 = e;var G__16119 = f;var G__16120 = g;var G__16121 = h;var G__16122 = i;var G__16123 = j;var G__16124 = k;var G__16125 = l;var G__16126 = m;var G__16127 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__16114,G__16115,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121,G__16122,G__16123,G__16124,G__16125,G__16126,G__16127) : self__.dispatch_fn.call(null,G__16114,G__16115,G__16116,G__16117,G__16118,G__16119,G__16120,G__16121,G__16122,G__16123,G__16124,G__16125,G__16126,G__16127));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16128 = a;var G__16129 = b;var G__16130 = c;var G__16131 = d;var G__16132 = e;var G__16133 = f;var G__16134 = g;var G__16135 = h;var G__16136 = i;var G__16137 = j;var G__16138 = k;var G__16139 = l;var G__16140 = m;var G__16141 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__16128,G__16129,G__16130,G__16131,G__16132,G__16133,G__16134,G__16135,G__16136,G__16137,G__16138,G__16139,G__16140,G__16141) : target_fn.call(null,G__16128,G__16129,G__16130,G__16131,G__16132,G__16133,G__16134,G__16135,G__16136,G__16137,G__16138,G__16139,G__16140,G__16141));
});
var G__16772__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16142 = a;var G__16143 = b;var G__16144 = c;var G__16145 = d;var G__16146 = e;var G__16147 = f;var G__16148 = g;var G__16149 = h;var G__16150 = i;var G__16151 = j;var G__16152 = k;var G__16153 = l;var G__16154 = m;var G__16155 = n;var G__16156 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__16142,G__16143,G__16144,G__16145,G__16146,G__16147,G__16148,G__16149,G__16150,G__16151,G__16152,G__16153,G__16154,G__16155,G__16156) : self__.dispatch_fn.call(null,G__16142,G__16143,G__16144,G__16145,G__16146,G__16147,G__16148,G__16149,G__16150,G__16151,G__16152,G__16153,G__16154,G__16155,G__16156));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16157 = a;var G__16158 = b;var G__16159 = c;var G__16160 = d;var G__16161 = e;var G__16162 = f;var G__16163 = g;var G__16164 = h;var G__16165 = i;var G__16166 = j;var G__16167 = k;var G__16168 = l;var G__16169 = m;var G__16170 = n;var G__16171 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__16157,G__16158,G__16159,G__16160,G__16161,G__16162,G__16163,G__16164,G__16165,G__16166,G__16167,G__16168,G__16169,G__16170,G__16171) : target_fn.call(null,G__16157,G__16158,G__16159,G__16160,G__16161,G__16162,G__16163,G__16164,G__16165,G__16166,G__16167,G__16168,G__16169,G__16170,G__16171));
});
var G__16772__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16172 = a;var G__16173 = b;var G__16174 = c;var G__16175 = d;var G__16176 = e;var G__16177 = f;var G__16178 = g;var G__16179 = h;var G__16180 = i;var G__16181 = j;var G__16182 = k;var G__16183 = l;var G__16184 = m;var G__16185 = n;var G__16186 = o;var G__16187 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__16172,G__16173,G__16174,G__16175,G__16176,G__16177,G__16178,G__16179,G__16180,G__16181,G__16182,G__16183,G__16184,G__16185,G__16186,G__16187) : self__.dispatch_fn.call(null,G__16172,G__16173,G__16174,G__16175,G__16176,G__16177,G__16178,G__16179,G__16180,G__16181,G__16182,G__16183,G__16184,G__16185,G__16186,G__16187));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16188 = a;var G__16189 = b;var G__16190 = c;var G__16191 = d;var G__16192 = e;var G__16193 = f;var G__16194 = g;var G__16195 = h;var G__16196 = i;var G__16197 = j;var G__16198 = k;var G__16199 = l;var G__16200 = m;var G__16201 = n;var G__16202 = o;var G__16203 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__16188,G__16189,G__16190,G__16191,G__16192,G__16193,G__16194,G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16202,G__16203) : target_fn.call(null,G__16188,G__16189,G__16190,G__16191,G__16192,G__16193,G__16194,G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16202,G__16203));
});
var G__16772__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16204 = a;var G__16205 = b;var G__16206 = c;var G__16207 = d;var G__16208 = e;var G__16209 = f;var G__16210 = g;var G__16211 = h;var G__16212 = i;var G__16213 = j;var G__16214 = k;var G__16215 = l;var G__16216 = m;var G__16217 = n;var G__16218 = o;var G__16219 = p;var G__16220 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__16204,G__16205,G__16206,G__16207,G__16208,G__16209,G__16210,G__16211,G__16212,G__16213,G__16214,G__16215,G__16216,G__16217,G__16218,G__16219,G__16220) : self__.dispatch_fn.call(null,G__16204,G__16205,G__16206,G__16207,G__16208,G__16209,G__16210,G__16211,G__16212,G__16213,G__16214,G__16215,G__16216,G__16217,G__16218,G__16219,G__16220));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16221 = a;var G__16222 = b;var G__16223 = c;var G__16224 = d;var G__16225 = e;var G__16226 = f;var G__16227 = g;var G__16228 = h;var G__16229 = i;var G__16230 = j;var G__16231 = k;var G__16232 = l;var G__16233 = m;var G__16234 = n;var G__16235 = o;var G__16236 = p;var G__16237 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__16221,G__16222,G__16223,G__16224,G__16225,G__16226,G__16227,G__16228,G__16229,G__16230,G__16231,G__16232,G__16233,G__16234,G__16235,G__16236,G__16237) : target_fn.call(null,G__16221,G__16222,G__16223,G__16224,G__16225,G__16226,G__16227,G__16228,G__16229,G__16230,G__16231,G__16232,G__16233,G__16234,G__16235,G__16236,G__16237));
});
var G__16772__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16238 = a;var G__16239 = b;var G__16240 = c;var G__16241 = d;var G__16242 = e;var G__16243 = f;var G__16244 = g;var G__16245 = h;var G__16246 = i;var G__16247 = j;var G__16248 = k;var G__16249 = l;var G__16250 = m;var G__16251 = n;var G__16252 = o;var G__16253 = p;var G__16254 = q;var G__16255 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16238,G__16239,G__16240,G__16241,G__16242,G__16243,G__16244,G__16245,G__16246,G__16247,G__16248,G__16249,G__16250,G__16251,G__16252,G__16253,G__16254,G__16255) : self__.dispatch_fn.call(null,G__16238,G__16239,G__16240,G__16241,G__16242,G__16243,G__16244,G__16245,G__16246,G__16247,G__16248,G__16249,G__16250,G__16251,G__16252,G__16253,G__16254,G__16255));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16256 = a;var G__16257 = b;var G__16258 = c;var G__16259 = d;var G__16260 = e;var G__16261 = f;var G__16262 = g;var G__16263 = h;var G__16264 = i;var G__16265 = j;var G__16266 = k;var G__16267 = l;var G__16268 = m;var G__16269 = n;var G__16270 = o;var G__16271 = p;var G__16272 = q;var G__16273 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16256,G__16257,G__16258,G__16259,G__16260,G__16261,G__16262,G__16263,G__16264,G__16265,G__16266,G__16267,G__16268,G__16269,G__16270,G__16271,G__16272,G__16273) : target_fn.call(null,G__16256,G__16257,G__16258,G__16259,G__16260,G__16261,G__16262,G__16263,G__16264,G__16265,G__16266,G__16267,G__16268,G__16269,G__16270,G__16271,G__16272,G__16273));
});
var G__16772__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16274 = a;var G__16275 = b;var G__16276 = c;var G__16277 = d;var G__16278 = e;var G__16279 = f;var G__16280 = g;var G__16281 = h;var G__16282 = i;var G__16283 = j;var G__16284 = k;var G__16285 = l;var G__16286 = m;var G__16287 = n;var G__16288 = o;var G__16289 = p;var G__16290 = q;var G__16291 = r;var G__16292 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16274,G__16275,G__16276,G__16277,G__16278,G__16279,G__16280,G__16281,G__16282,G__16283,G__16284,G__16285,G__16286,G__16287,G__16288,G__16289,G__16290,G__16291,G__16292) : self__.dispatch_fn.call(null,G__16274,G__16275,G__16276,G__16277,G__16278,G__16279,G__16280,G__16281,G__16282,G__16283,G__16284,G__16285,G__16286,G__16287,G__16288,G__16289,G__16290,G__16291,G__16292));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16293 = a;var G__16294 = b;var G__16295 = c;var G__16296 = d;var G__16297 = e;var G__16298 = f;var G__16299 = g;var G__16300 = h;var G__16301 = i;var G__16302 = j;var G__16303 = k;var G__16304 = l;var G__16305 = m;var G__16306 = n;var G__16307 = o;var G__16308 = p;var G__16309 = q;var G__16310 = r;var G__16311 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16293,G__16294,G__16295,G__16296,G__16297,G__16298,G__16299,G__16300,G__16301,G__16302,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308,G__16309,G__16310,G__16311) : target_fn.call(null,G__16293,G__16294,G__16295,G__16296,G__16297,G__16298,G__16299,G__16300,G__16301,G__16302,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308,G__16309,G__16310,G__16311));
});
var G__16772__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__16312 = a;var G__16313 = b;var G__16314 = c;var G__16315 = d;var G__16316 = e;var G__16317 = f;var G__16318 = g;var G__16319 = h;var G__16320 = i;var G__16321 = j;var G__16322 = k;var G__16323 = l;var G__16324 = m;var G__16325 = n;var G__16326 = o;var G__16327 = p;var G__16328 = q;var G__16329 = r;var G__16330 = s;var G__16331 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__16312,G__16313,G__16314,G__16315,G__16316,G__16317,G__16318,G__16319,G__16320,G__16321,G__16322,G__16323,G__16324,G__16325,G__16326,G__16327,G__16328,G__16329,G__16330,G__16331) : self__.dispatch_fn.call(null,G__16312,G__16313,G__16314,G__16315,G__16316,G__16317,G__16318,G__16319,G__16320,G__16321,G__16322,G__16323,G__16324,G__16325,G__16326,G__16327,G__16328,G__16329,G__16330,G__16331));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16332 = a;var G__16333 = b;var G__16334 = c;var G__16335 = d;var G__16336 = e;var G__16337 = f;var G__16338 = g;var G__16339 = h;var G__16340 = i;var G__16341 = j;var G__16342 = k;var G__16343 = l;var G__16344 = m;var G__16345 = n;var G__16346 = o;var G__16347 = p;var G__16348 = q;var G__16349 = r;var G__16350 = s;var G__16351 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__16332,G__16333,G__16334,G__16335,G__16336,G__16337,G__16338,G__16339,G__16340,G__16341,G__16342,G__16343,G__16344,G__16345,G__16346,G__16347,G__16348,G__16349,G__16350,G__16351) : target_fn.call(null,G__16332,G__16333,G__16334,G__16335,G__16336,G__16337,G__16338,G__16339,G__16340,G__16341,G__16342,G__16343,G__16344,G__16345,G__16346,G__16347,G__16348,G__16349,G__16350,G__16351));
});
var G__16772__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__16772 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__16772__2.call(this,self__,a);
case 3:
return G__16772__3.call(this,self__,a,b);
case 4:
return G__16772__4.call(this,self__,a,b,c);
case 5:
return G__16772__5.call(this,self__,a,b,c,d);
case 6:
return G__16772__6.call(this,self__,a,b,c,d,e);
case 7:
return G__16772__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__16772__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__16772__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__16772__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__16772__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__16772__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__16772__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__16772__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__16772__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__16772__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__16772__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__16772__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__16772__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__16772__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__16772__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__16772__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16772.cljs$core$IFn$_invoke$arity$2 = G__16772__2;
G__16772.cljs$core$IFn$_invoke$arity$3 = G__16772__3;
G__16772.cljs$core$IFn$_invoke$arity$4 = G__16772__4;
G__16772.cljs$core$IFn$_invoke$arity$5 = G__16772__5;
G__16772.cljs$core$IFn$_invoke$arity$6 = G__16772__6;
G__16772.cljs$core$IFn$_invoke$arity$7 = G__16772__7;
G__16772.cljs$core$IFn$_invoke$arity$8 = G__16772__8;
G__16772.cljs$core$IFn$_invoke$arity$9 = G__16772__9;
G__16772.cljs$core$IFn$_invoke$arity$10 = G__16772__10;
G__16772.cljs$core$IFn$_invoke$arity$11 = G__16772__11;
G__16772.cljs$core$IFn$_invoke$arity$12 = G__16772__12;
G__16772.cljs$core$IFn$_invoke$arity$13 = G__16772__13;
G__16772.cljs$core$IFn$_invoke$arity$14 = G__16772__14;
G__16772.cljs$core$IFn$_invoke$arity$15 = G__16772__15;
G__16772.cljs$core$IFn$_invoke$arity$16 = G__16772__16;
G__16772.cljs$core$IFn$_invoke$arity$17 = G__16772__17;
G__16772.cljs$core$IFn$_invoke$arity$18 = G__16772__18;
G__16772.cljs$core$IFn$_invoke$arity$19 = G__16772__19;
G__16772.cljs$core$IFn$_invoke$arity$20 = G__16772__20;
G__16772.cljs$core$IFn$_invoke$arity$21 = G__16772__21;
G__16772.cljs$core$IFn$_invoke$arity$22 = G__16772__22;
return G__16772;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args15924){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15924)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16352 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__16352) : self__.dispatch_fn.call(null,G__16352));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16353 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__16353) : target_fn.call(null,G__16353));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16354 = a;var G__16355 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__16354,G__16355) : self__.dispatch_fn.call(null,G__16354,G__16355));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16356 = a;var G__16357 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__16356,G__16357) : target_fn.call(null,G__16356,G__16357));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16358 = a;var G__16359 = b;var G__16360 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__16358,G__16359,G__16360) : self__.dispatch_fn.call(null,G__16358,G__16359,G__16360));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16361 = a;var G__16362 = b;var G__16363 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__16361,G__16362,G__16363) : target_fn.call(null,G__16361,G__16362,G__16363));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16364 = a;var G__16365 = b;var G__16366 = c;var G__16367 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__16364,G__16365,G__16366,G__16367) : self__.dispatch_fn.call(null,G__16364,G__16365,G__16366,G__16367));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16368 = a;var G__16369 = b;var G__16370 = c;var G__16371 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__16368,G__16369,G__16370,G__16371) : target_fn.call(null,G__16368,G__16369,G__16370,G__16371));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16372 = a;var G__16373 = b;var G__16374 = c;var G__16375 = d;var G__16376 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__16372,G__16373,G__16374,G__16375,G__16376) : self__.dispatch_fn.call(null,G__16372,G__16373,G__16374,G__16375,G__16376));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16377 = a;var G__16378 = b;var G__16379 = c;var G__16380 = d;var G__16381 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__16377,G__16378,G__16379,G__16380,G__16381) : target_fn.call(null,G__16377,G__16378,G__16379,G__16380,G__16381));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16382 = a;var G__16383 = b;var G__16384 = c;var G__16385 = d;var G__16386 = e;var G__16387 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__16382,G__16383,G__16384,G__16385,G__16386,G__16387) : self__.dispatch_fn.call(null,G__16382,G__16383,G__16384,G__16385,G__16386,G__16387));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16388 = a;var G__16389 = b;var G__16390 = c;var G__16391 = d;var G__16392 = e;var G__16393 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__16388,G__16389,G__16390,G__16391,G__16392,G__16393) : target_fn.call(null,G__16388,G__16389,G__16390,G__16391,G__16392,G__16393));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16394 = a;var G__16395 = b;var G__16396 = c;var G__16397 = d;var G__16398 = e;var G__16399 = f;var G__16400 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__16394,G__16395,G__16396,G__16397,G__16398,G__16399,G__16400) : self__.dispatch_fn.call(null,G__16394,G__16395,G__16396,G__16397,G__16398,G__16399,G__16400));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16401 = a;var G__16402 = b;var G__16403 = c;var G__16404 = d;var G__16405 = e;var G__16406 = f;var G__16407 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__16401,G__16402,G__16403,G__16404,G__16405,G__16406,G__16407) : target_fn.call(null,G__16401,G__16402,G__16403,G__16404,G__16405,G__16406,G__16407));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16408 = a;var G__16409 = b;var G__16410 = c;var G__16411 = d;var G__16412 = e;var G__16413 = f;var G__16414 = g;var G__16415 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__16408,G__16409,G__16410,G__16411,G__16412,G__16413,G__16414,G__16415) : self__.dispatch_fn.call(null,G__16408,G__16409,G__16410,G__16411,G__16412,G__16413,G__16414,G__16415));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16416 = a;var G__16417 = b;var G__16418 = c;var G__16419 = d;var G__16420 = e;var G__16421 = f;var G__16422 = g;var G__16423 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__16416,G__16417,G__16418,G__16419,G__16420,G__16421,G__16422,G__16423) : target_fn.call(null,G__16416,G__16417,G__16418,G__16419,G__16420,G__16421,G__16422,G__16423));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16424 = a;var G__16425 = b;var G__16426 = c;var G__16427 = d;var G__16428 = e;var G__16429 = f;var G__16430 = g;var G__16431 = h;var G__16432 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432) : self__.dispatch_fn.call(null,G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16433 = a;var G__16434 = b;var G__16435 = c;var G__16436 = d;var G__16437 = e;var G__16438 = f;var G__16439 = g;var G__16440 = h;var G__16441 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__16433,G__16434,G__16435,G__16436,G__16437,G__16438,G__16439,G__16440,G__16441) : target_fn.call(null,G__16433,G__16434,G__16435,G__16436,G__16437,G__16438,G__16439,G__16440,G__16441));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16442 = a;var G__16443 = b;var G__16444 = c;var G__16445 = d;var G__16446 = e;var G__16447 = f;var G__16448 = g;var G__16449 = h;var G__16450 = i;var G__16451 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__16442,G__16443,G__16444,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450,G__16451) : self__.dispatch_fn.call(null,G__16442,G__16443,G__16444,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450,G__16451));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16452 = a;var G__16453 = b;var G__16454 = c;var G__16455 = d;var G__16456 = e;var G__16457 = f;var G__16458 = g;var G__16459 = h;var G__16460 = i;var G__16461 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__16452,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458,G__16459,G__16460,G__16461) : target_fn.call(null,G__16452,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458,G__16459,G__16460,G__16461));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16462 = a;var G__16463 = b;var G__16464 = c;var G__16465 = d;var G__16466 = e;var G__16467 = f;var G__16468 = g;var G__16469 = h;var G__16470 = i;var G__16471 = j;var G__16472 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__16462,G__16463,G__16464,G__16465,G__16466,G__16467,G__16468,G__16469,G__16470,G__16471,G__16472) : self__.dispatch_fn.call(null,G__16462,G__16463,G__16464,G__16465,G__16466,G__16467,G__16468,G__16469,G__16470,G__16471,G__16472));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16473 = a;var G__16474 = b;var G__16475 = c;var G__16476 = d;var G__16477 = e;var G__16478 = f;var G__16479 = g;var G__16480 = h;var G__16481 = i;var G__16482 = j;var G__16483 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__16473,G__16474,G__16475,G__16476,G__16477,G__16478,G__16479,G__16480,G__16481,G__16482,G__16483) : target_fn.call(null,G__16473,G__16474,G__16475,G__16476,G__16477,G__16478,G__16479,G__16480,G__16481,G__16482,G__16483));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16484 = a;var G__16485 = b;var G__16486 = c;var G__16487 = d;var G__16488 = e;var G__16489 = f;var G__16490 = g;var G__16491 = h;var G__16492 = i;var G__16493 = j;var G__16494 = k;var G__16495 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495) : self__.dispatch_fn.call(null,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16496 = a;var G__16497 = b;var G__16498 = c;var G__16499 = d;var G__16500 = e;var G__16501 = f;var G__16502 = g;var G__16503 = h;var G__16504 = i;var G__16505 = j;var G__16506 = k;var G__16507 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__16496,G__16497,G__16498,G__16499,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507) : target_fn.call(null,G__16496,G__16497,G__16498,G__16499,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16508 = a;var G__16509 = b;var G__16510 = c;var G__16511 = d;var G__16512 = e;var G__16513 = f;var G__16514 = g;var G__16515 = h;var G__16516 = i;var G__16517 = j;var G__16518 = k;var G__16519 = l;var G__16520 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__16508,G__16509,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516,G__16517,G__16518,G__16519,G__16520) : self__.dispatch_fn.call(null,G__16508,G__16509,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516,G__16517,G__16518,G__16519,G__16520));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16521 = a;var G__16522 = b;var G__16523 = c;var G__16524 = d;var G__16525 = e;var G__16526 = f;var G__16527 = g;var G__16528 = h;var G__16529 = i;var G__16530 = j;var G__16531 = k;var G__16532 = l;var G__16533 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__16521,G__16522,G__16523,G__16524,G__16525,G__16526,G__16527,G__16528,G__16529,G__16530,G__16531,G__16532,G__16533) : target_fn.call(null,G__16521,G__16522,G__16523,G__16524,G__16525,G__16526,G__16527,G__16528,G__16529,G__16530,G__16531,G__16532,G__16533));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16534 = a;var G__16535 = b;var G__16536 = c;var G__16537 = d;var G__16538 = e;var G__16539 = f;var G__16540 = g;var G__16541 = h;var G__16542 = i;var G__16543 = j;var G__16544 = k;var G__16545 = l;var G__16546 = m;var G__16547 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__16534,G__16535,G__16536,G__16537,G__16538,G__16539,G__16540,G__16541,G__16542,G__16543,G__16544,G__16545,G__16546,G__16547) : self__.dispatch_fn.call(null,G__16534,G__16535,G__16536,G__16537,G__16538,G__16539,G__16540,G__16541,G__16542,G__16543,G__16544,G__16545,G__16546,G__16547));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16548 = a;var G__16549 = b;var G__16550 = c;var G__16551 = d;var G__16552 = e;var G__16553 = f;var G__16554 = g;var G__16555 = h;var G__16556 = i;var G__16557 = j;var G__16558 = k;var G__16559 = l;var G__16560 = m;var G__16561 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561) : target_fn.call(null,G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16562 = a;var G__16563 = b;var G__16564 = c;var G__16565 = d;var G__16566 = e;var G__16567 = f;var G__16568 = g;var G__16569 = h;var G__16570 = i;var G__16571 = j;var G__16572 = k;var G__16573 = l;var G__16574 = m;var G__16575 = n;var G__16576 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__16562,G__16563,G__16564,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570,G__16571,G__16572,G__16573,G__16574,G__16575,G__16576) : self__.dispatch_fn.call(null,G__16562,G__16563,G__16564,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570,G__16571,G__16572,G__16573,G__16574,G__16575,G__16576));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16577 = a;var G__16578 = b;var G__16579 = c;var G__16580 = d;var G__16581 = e;var G__16582 = f;var G__16583 = g;var G__16584 = h;var G__16585 = i;var G__16586 = j;var G__16587 = k;var G__16588 = l;var G__16589 = m;var G__16590 = n;var G__16591 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591) : target_fn.call(null,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16592 = a;var G__16593 = b;var G__16594 = c;var G__16595 = d;var G__16596 = e;var G__16597 = f;var G__16598 = g;var G__16599 = h;var G__16600 = i;var G__16601 = j;var G__16602 = k;var G__16603 = l;var G__16604 = m;var G__16605 = n;var G__16606 = o;var G__16607 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__16592,G__16593,G__16594,G__16595,G__16596,G__16597,G__16598,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607) : self__.dispatch_fn.call(null,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597,G__16598,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16608 = a;var G__16609 = b;var G__16610 = c;var G__16611 = d;var G__16612 = e;var G__16613 = f;var G__16614 = g;var G__16615 = h;var G__16616 = i;var G__16617 = j;var G__16618 = k;var G__16619 = l;var G__16620 = m;var G__16621 = n;var G__16622 = o;var G__16623 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__16608,G__16609,G__16610,G__16611,G__16612,G__16613,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623) : target_fn.call(null,G__16608,G__16609,G__16610,G__16611,G__16612,G__16613,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16624 = a;var G__16625 = b;var G__16626 = c;var G__16627 = d;var G__16628 = e;var G__16629 = f;var G__16630 = g;var G__16631 = h;var G__16632 = i;var G__16633 = j;var G__16634 = k;var G__16635 = l;var G__16636 = m;var G__16637 = n;var G__16638 = o;var G__16639 = p;var G__16640 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__16624,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634,G__16635,G__16636,G__16637,G__16638,G__16639,G__16640) : self__.dispatch_fn.call(null,G__16624,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634,G__16635,G__16636,G__16637,G__16638,G__16639,G__16640));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16641 = a;var G__16642 = b;var G__16643 = c;var G__16644 = d;var G__16645 = e;var G__16646 = f;var G__16647 = g;var G__16648 = h;var G__16649 = i;var G__16650 = j;var G__16651 = k;var G__16652 = l;var G__16653 = m;var G__16654 = n;var G__16655 = o;var G__16656 = p;var G__16657 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__16641,G__16642,G__16643,G__16644,G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652,G__16653,G__16654,G__16655,G__16656,G__16657) : target_fn.call(null,G__16641,G__16642,G__16643,G__16644,G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652,G__16653,G__16654,G__16655,G__16656,G__16657));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16658 = a;var G__16659 = b;var G__16660 = c;var G__16661 = d;var G__16662 = e;var G__16663 = f;var G__16664 = g;var G__16665 = h;var G__16666 = i;var G__16667 = j;var G__16668 = k;var G__16669 = l;var G__16670 = m;var G__16671 = n;var G__16672 = o;var G__16673 = p;var G__16674 = q;var G__16675 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__16658,G__16659,G__16660,G__16661,G__16662,G__16663,G__16664,G__16665,G__16666,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672,G__16673,G__16674,G__16675) : self__.dispatch_fn.call(null,G__16658,G__16659,G__16660,G__16661,G__16662,G__16663,G__16664,G__16665,G__16666,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672,G__16673,G__16674,G__16675));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16676 = a;var G__16677 = b;var G__16678 = c;var G__16679 = d;var G__16680 = e;var G__16681 = f;var G__16682 = g;var G__16683 = h;var G__16684 = i;var G__16685 = j;var G__16686 = k;var G__16687 = l;var G__16688 = m;var G__16689 = n;var G__16690 = o;var G__16691 = p;var G__16692 = q;var G__16693 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__16676,G__16677,G__16678,G__16679,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686,G__16687,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693) : target_fn.call(null,G__16676,G__16677,G__16678,G__16679,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686,G__16687,G__16688,G__16689,G__16690,G__16691,G__16692,G__16693));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16694 = a;var G__16695 = b;var G__16696 = c;var G__16697 = d;var G__16698 = e;var G__16699 = f;var G__16700 = g;var G__16701 = h;var G__16702 = i;var G__16703 = j;var G__16704 = k;var G__16705 = l;var G__16706 = m;var G__16707 = n;var G__16708 = o;var G__16709 = p;var G__16710 = q;var G__16711 = r;var G__16712 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709,G__16710,G__16711,G__16712) : self__.dispatch_fn.call(null,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709,G__16710,G__16711,G__16712));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16713 = a;var G__16714 = b;var G__16715 = c;var G__16716 = d;var G__16717 = e;var G__16718 = f;var G__16719 = g;var G__16720 = h;var G__16721 = i;var G__16722 = j;var G__16723 = k;var G__16724 = l;var G__16725 = m;var G__16726 = n;var G__16727 = o;var G__16728 = p;var G__16729 = q;var G__16730 = r;var G__16731 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729,G__16730,G__16731) : target_fn.call(null,G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729,G__16730,G__16731));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__16732 = a;var G__16733 = b;var G__16734 = c;var G__16735 = d;var G__16736 = e;var G__16737 = f;var G__16738 = g;var G__16739 = h;var G__16740 = i;var G__16741 = j;var G__16742 = k;var G__16743 = l;var G__16744 = m;var G__16745 = n;var G__16746 = o;var G__16747 = p;var G__16748 = q;var G__16749 = r;var G__16750 = s;var G__16751 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749,G__16750,G__16751) : self__.dispatch_fn.call(null,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749,G__16750,G__16751));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__16752 = a;var G__16753 = b;var G__16754 = c;var G__16755 = d;var G__16756 = e;var G__16757 = f;var G__16758 = g;var G__16759 = h;var G__16760 = i;var G__16761 = j;var G__16762 = k;var G__16763 = l;var G__16764 = m;var G__16765 = n;var G__16766 = o;var G__16767 = p;var G__16768 = q;var G__16769 = r;var G__16770 = s;var G__16771 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__16752,G__16753,G__16754,G__16755,G__16756,G__16757,G__16758,G__16759,G__16760,G__16761,G__16762,G__16763,G__16764,G__16765,G__16766,G__16767,G__16768,G__16769,G__16770,G__16771) : target_fn.call(null,G__16752,G__16753,G__16754,G__16755,G__16756,G__16757,G__16758,G__16759,G__16760,G__16761,G__16762,G__16763,G__16764,G__16765,G__16766,G__16767,G__16768,G__16769,G__16770,G__16771));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var mf = this;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__16773 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__16773);
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write(writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.uuid)+"\""));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.uuid;
});
cljs.core.UUID.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4220__auto__,writer__4221__auto__,opts__4222__auto__){return cljs.core._write(writer__4221__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__16778 = x;var G__16779 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__16778,G__16779) : pred.call(null,G__16778,G__16779));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__16780 = y;var G__16781 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__16780,G__16781) : pred.call(null,G__16780,G__16781));
})()))
{return (1);
} else
{return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
