goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____93463 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____93463))
{return or__3548__auto____93463;
} else
{var or__3548__auto____93464 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____93464))
{return or__3548__auto____93464;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__93528 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____93465 = this$;

if(cljs.core.truth_(and__3546__auto____93465))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93465;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____93466 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93466))
{return or__3548__auto____93466;
} else
{var or__3548__auto____93467 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93467))
{return or__3548__auto____93467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__93529 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____93468 = this$;

if(cljs.core.truth_(and__3546__auto____93468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____93469 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93469))
{return or__3548__auto____93469;
} else
{var or__3548__auto____93470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93470))
{return or__3548__auto____93470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__93530 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____93471 = this$;

if(cljs.core.truth_(and__3546__auto____93471))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93471;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____93472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93472))
{return or__3548__auto____93472;
} else
{var or__3548__auto____93473 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93473))
{return or__3548__auto____93473;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__93531 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____93474 = this$;

if(cljs.core.truth_(and__3546__auto____93474))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93474;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____93475 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93475))
{return or__3548__auto____93475;
} else
{var or__3548__auto____93476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93476))
{return or__3548__auto____93476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__93532 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____93477 = this$;

if(cljs.core.truth_(and__3546__auto____93477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____93478 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93478))
{return or__3548__auto____93478;
} else
{var or__3548__auto____93479 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93479))
{return or__3548__auto____93479;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__93533 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____93480 = this$;

if(cljs.core.truth_(and__3546__auto____93480))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93480;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____93481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93481))
{return or__3548__auto____93481;
} else
{var or__3548__auto____93482 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93482))
{return or__3548__auto____93482;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__93534 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____93483 = this$;

if(cljs.core.truth_(and__3546__auto____93483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____93484 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93484))
{return or__3548__auto____93484;
} else
{var or__3548__auto____93485 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93485))
{return or__3548__auto____93485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__93535 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____93486 = this$;

if(cljs.core.truth_(and__3546__auto____93486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____93487 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93487))
{return or__3548__auto____93487;
} else
{var or__3548__auto____93488 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93488))
{return or__3548__auto____93488;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__93536 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____93489 = this$;

if(cljs.core.truth_(and__3546__auto____93489))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93489;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____93490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93490))
{return or__3548__auto____93490;
} else
{var or__3548__auto____93491 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93491))
{return or__3548__auto____93491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__93537 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____93492 = this$;

if(cljs.core.truth_(and__3546__auto____93492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____93493 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93493))
{return or__3548__auto____93493;
} else
{var or__3548__auto____93494 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93494))
{return or__3548__auto____93494;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__93538 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____93495 = this$;

if(cljs.core.truth_(and__3546__auto____93495))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93495;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____93496 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93496))
{return or__3548__auto____93496;
} else
{var or__3548__auto____93497 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93497))
{return or__3548__auto____93497;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__93539 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____93498 = this$;

if(cljs.core.truth_(and__3546__auto____93498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____93499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93499))
{return or__3548__auto____93499;
} else
{var or__3548__auto____93500 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93500))
{return or__3548__auto____93500;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__93540 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____93501 = this$;

if(cljs.core.truth_(and__3546__auto____93501))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93501;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____93502 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93502))
{return or__3548__auto____93502;
} else
{var or__3548__auto____93503 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93503))
{return or__3548__auto____93503;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__93541 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____93504 = this$;

if(cljs.core.truth_(and__3546__auto____93504))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93504;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____93505 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93505))
{return or__3548__auto____93505;
} else
{var or__3548__auto____93506 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93506))
{return or__3548__auto____93506;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__93542 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____93507 = this$;

if(cljs.core.truth_(and__3546__auto____93507))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93507;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____93508 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93508))
{return or__3548__auto____93508;
} else
{var or__3548__auto____93509 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93509))
{return or__3548__auto____93509;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__93543 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____93510 = this$;

if(cljs.core.truth_(and__3546__auto____93510))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93510;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____93511 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93511))
{return or__3548__auto____93511;
} else
{var or__3548__auto____93512 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93512))
{return or__3548__auto____93512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__93544 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____93513 = this$;

if(cljs.core.truth_(and__3546__auto____93513))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93513;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____93514 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93514))
{return or__3548__auto____93514;
} else
{var or__3548__auto____93515 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93515))
{return or__3548__auto____93515;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__93545 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____93516 = this$;

if(cljs.core.truth_(and__3546__auto____93516))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93516;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____93517 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93517))
{return or__3548__auto____93517;
} else
{var or__3548__auto____93518 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93518))
{return or__3548__auto____93518;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__93546 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____93519 = this$;

if(cljs.core.truth_(and__3546__auto____93519))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93519;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____93520 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93520))
{return or__3548__auto____93520;
} else
{var or__3548__auto____93521 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93521))
{return or__3548__auto____93521;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__93547 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____93522 = this$;

if(cljs.core.truth_(and__3546__auto____93522))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93522;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____93523 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93523))
{return or__3548__auto____93523;
} else
{var or__3548__auto____93524 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93524))
{return or__3548__auto____93524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__93548 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____93525 = this$;

if(cljs.core.truth_(and__3546__auto____93525))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____93525;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____93526 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93526))
{return or__3548__auto____93526;
} else
{var or__3548__auto____93527 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____93527))
{return or__3548__auto____93527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__93528.call(this,this$);
case  2 :
return _invoke__93529.call(this,this$,a);
case  3 :
return _invoke__93530.call(this,this$,a,b);
case  4 :
return _invoke__93531.call(this,this$,a,b,c);
case  5 :
return _invoke__93532.call(this,this$,a,b,c,d);
case  6 :
return _invoke__93533.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__93534.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__93535.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__93536.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__93537.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__93538.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__93539.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__93540.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__93541.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__93542.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__93543.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__93544.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__93545.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__93546.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__93547.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__93548.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____93550 = coll;

if(cljs.core.truth_(and__3546__auto____93550))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____93550;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____93551 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93551))
{return or__3548__auto____93551;
} else
{var or__3548__auto____93552 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____93552))
{return or__3548__auto____93552;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____93553 = coll;

if(cljs.core.truth_(and__3546__auto____93553))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____93553;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____93554 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93554))
{return or__3548__auto____93554;
} else
{var or__3548__auto____93555 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____93555))
{return or__3548__auto____93555;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____93556 = coll;

if(cljs.core.truth_(and__3546__auto____93556))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____93556;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____93557 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93557))
{return or__3548__auto____93557;
} else
{var or__3548__auto____93558 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____93558))
{return or__3548__auto____93558;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__93565 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____93559 = coll;

if(cljs.core.truth_(and__3546__auto____93559))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____93559;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____93560 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93560))
{return or__3548__auto____93560;
} else
{var or__3548__auto____93561 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____93561))
{return or__3548__auto____93561;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__93566 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____93562 = coll;

if(cljs.core.truth_(and__3546__auto____93562))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____93562;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____93563 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93563))
{return or__3548__auto____93563;
} else
{var or__3548__auto____93564 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____93564))
{return or__3548__auto____93564;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__93565.call(this,coll,n);
case  3 :
return _nth__93566.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____93568 = coll;

if(cljs.core.truth_(and__3546__auto____93568))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____93568;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____93569 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93569))
{return or__3548__auto____93569;
} else
{var or__3548__auto____93570 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____93570))
{return or__3548__auto____93570;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____93571 = coll;

if(cljs.core.truth_(and__3546__auto____93571))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____93571;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____93572 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93572))
{return or__3548__auto____93572;
} else
{var or__3548__auto____93573 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____93573))
{return or__3548__auto____93573;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__93580 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____93574 = o;

if(cljs.core.truth_(and__3546__auto____93574))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____93574;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____93575 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93575))
{return or__3548__auto____93575;
} else
{var or__3548__auto____93576 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____93576))
{return or__3548__auto____93576;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__93581 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____93577 = o;

if(cljs.core.truth_(and__3546__auto____93577))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____93577;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____93578 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93578))
{return or__3548__auto____93578;
} else
{var or__3548__auto____93579 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____93579))
{return or__3548__auto____93579;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__93580.call(this,o,k);
case  3 :
return _lookup__93581.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____93583 = coll;

if(cljs.core.truth_(and__3546__auto____93583))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____93583;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____93584 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93584))
{return or__3548__auto____93584;
} else
{var or__3548__auto____93585 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____93585))
{return or__3548__auto____93585;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____93586 = coll;

if(cljs.core.truth_(and__3546__auto____93586))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____93586;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____93587 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93587))
{return or__3548__auto____93587;
} else
{var or__3548__auto____93588 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____93588))
{return or__3548__auto____93588;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____93589 = coll;

if(cljs.core.truth_(and__3546__auto____93589))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____93589;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____93590 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93590))
{return or__3548__auto____93590;
} else
{var or__3548__auto____93591 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____93591))
{return or__3548__auto____93591;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____93592 = coll;

if(cljs.core.truth_(and__3546__auto____93592))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____93592;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____93593 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93593))
{return or__3548__auto____93593;
} else
{var or__3548__auto____93594 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____93594))
{return or__3548__auto____93594;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____93595 = coll;

if(cljs.core.truth_(and__3546__auto____93595))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____93595;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____93596 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93596))
{return or__3548__auto____93596;
} else
{var or__3548__auto____93597 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____93597))
{return or__3548__auto____93597;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____93598 = coll;

if(cljs.core.truth_(and__3546__auto____93598))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____93598;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____93599 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93599))
{return or__3548__auto____93599;
} else
{var or__3548__auto____93600 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____93600))
{return or__3548__auto____93600;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____93601 = coll;

if(cljs.core.truth_(and__3546__auto____93601))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____93601;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____93602 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93602))
{return or__3548__auto____93602;
} else
{var or__3548__auto____93603 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____93603))
{return or__3548__auto____93603;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____93604 = o;

if(cljs.core.truth_(and__3546__auto____93604))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____93604;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____93605 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93605))
{return or__3548__auto____93605;
} else
{var or__3548__auto____93606 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____93606))
{return or__3548__auto____93606;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____93607 = o;

if(cljs.core.truth_(and__3546__auto____93607))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____93607;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____93608 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93608))
{return or__3548__auto____93608;
} else
{var or__3548__auto____93609 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____93609))
{return or__3548__auto____93609;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____93610 = o;

if(cljs.core.truth_(and__3546__auto____93610))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____93610;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____93611 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93611))
{return or__3548__auto____93611;
} else
{var or__3548__auto____93612 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____93612))
{return or__3548__auto____93612;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____93613 = o;

if(cljs.core.truth_(and__3546__auto____93613))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____93613;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____93614 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93614))
{return or__3548__auto____93614;
} else
{var or__3548__auto____93615 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____93615))
{return or__3548__auto____93615;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__93622 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____93616 = coll;

if(cljs.core.truth_(and__3546__auto____93616))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____93616;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____93617 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93617))
{return or__3548__auto____93617;
} else
{var or__3548__auto____93618 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____93618))
{return or__3548__auto____93618;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__93623 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____93619 = coll;

if(cljs.core.truth_(and__3546__auto____93619))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____93619;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____93620 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____93620))
{return or__3548__auto____93620;
} else
{var or__3548__auto____93621 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____93621))
{return or__3548__auto____93621;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__93622.call(this,coll,f);
case  3 :
return _reduce__93623.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____93625 = o;

if(cljs.core.truth_(and__3546__auto____93625))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____93625;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____93626 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93626))
{return or__3548__auto____93626;
} else
{var or__3548__auto____93627 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____93627))
{return or__3548__auto____93627;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____93628 = o;

if(cljs.core.truth_(and__3546__auto____93628))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____93628;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____93629 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93629))
{return or__3548__auto____93629;
} else
{var or__3548__auto____93630 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____93630))
{return or__3548__auto____93630;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____93631 = o;

if(cljs.core.truth_(and__3546__auto____93631))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____93631;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____93632 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93632))
{return or__3548__auto____93632;
} else
{var or__3548__auto____93633 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____93633))
{return or__3548__auto____93633;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____93634 = o;

if(cljs.core.truth_(and__3546__auto____93634))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____93634;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____93635 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____93635))
{return or__3548__auto____93635;
} else
{var or__3548__auto____93636 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____93636))
{return or__3548__auto____93636;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____93637 = d;

if(cljs.core.truth_(and__3546__auto____93637))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____93637;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____93638 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____93638))
{return or__3548__auto____93638;
} else
{var or__3548__auto____93639 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____93639))
{return or__3548__auto____93639;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____93640 = this$;

if(cljs.core.truth_(and__3546__auto____93640))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____93640;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____93641 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93641))
{return or__3548__auto____93641;
} else
{var or__3548__auto____93642 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____93642))
{return or__3548__auto____93642;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____93643 = this$;

if(cljs.core.truth_(and__3546__auto____93643))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____93643;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____93644 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93644))
{return or__3548__auto____93644;
} else
{var or__3548__auto____93645 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____93645))
{return or__3548__auto____93645;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____93646 = this$;

if(cljs.core.truth_(and__3546__auto____93646))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____93646;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____93647 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93647))
{return or__3548__auto____93647;
} else
{var or__3548__auto____93648 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____93648))
{return or__3548__auto____93648;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__93649 = null;
var G__93649__93650 = (function (o,k){
return null;
});
var G__93649__93651 = (function (o,k,not_found){
return not_found;
});
G__93649 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__93649__93650.call(this,o,k);
case  3 :
return G__93649__93651.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93649;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__93653 = null;
var G__93653__93654 = (function (_,f){
return f.call(null);
});
var G__93653__93655 = (function (_,f,start){
return start;
});
G__93653 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__93653__93654.call(this,_,f);
case  3 :
return G__93653__93655.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93653;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__93657 = null;
var G__93657__93658 = (function (_,n){
return null;
});
var G__93657__93659 = (function (_,n,not_found){
return not_found;
});
G__93657 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__93657__93658.call(this,_,n);
case  3 :
return G__93657__93659.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93657;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__93667 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__93661 = cljs.core._nth.call(null,cicoll,0);
var n__93662 = 1;

while(true){
if(cljs.core.truth_((n__93662 < cljs.core._count.call(null,cicoll))))
{{
var G__93671 = f.call(null,val__93661,cljs.core._nth.call(null,cicoll,n__93662));
var G__93672 = (n__93662 + 1);
val__93661 = G__93671;
n__93662 = G__93672;
continue;
}
} else
{return val__93661;
}
break;
}
}
});
var ci_reduce__93668 = (function (cicoll,f,val){
var val__93663 = val;
var n__93664 = 0;

while(true){
if(cljs.core.truth_((n__93664 < cljs.core._count.call(null,cicoll))))
{{
var G__93673 = f.call(null,val__93663,cljs.core._nth.call(null,cicoll,n__93664));
var G__93674 = (n__93664 + 1);
val__93663 = G__93673;
n__93664 = G__93674;
continue;
}
} else
{return val__93663;
}
break;
}
});
var ci_reduce__93669 = (function (cicoll,f,val,idx){
var val__93665 = val;
var n__93666 = idx;

while(true){
if(cljs.core.truth_((n__93666 < cljs.core._count.call(null,cicoll))))
{{
var G__93675 = f.call(null,val__93665,cljs.core._nth.call(null,cicoll,n__93666));
var G__93676 = (n__93666 + 1);
val__93665 = G__93675;
n__93666 = G__93676;
continue;
}
} else
{return val__93665;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__93667.call(this,cicoll,f);
case  3 :
return ci_reduce__93668.call(this,cicoll,f,val);
case  4 :
return ci_reduce__93669.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__93677 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__93690 = null;
var G__93690__93691 = (function (_,f){
var this__93678 = this;
return cljs.core.ci_reduce.call(null,this__93678.a,f,(this__93678.a[this__93678.i]),(this__93678.i + 1));
});
var G__93690__93692 = (function (_,f,start){
var this__93679 = this;
return cljs.core.ci_reduce.call(null,this__93679.a,f,start,this__93679.i);
});
G__93690 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__93690__93691.call(this,_,f);
case  3 :
return G__93690__93692.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93690;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__93680 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__93681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__93694 = null;
var G__93694__93695 = (function (coll,n){
var this__93682 = this;
var i__93683 = (n + this__93682.i);

if(cljs.core.truth_((i__93683 < this__93682.a.length)))
{return (this__93682.a[i__93683]);
} else
{return null;
}
});
var G__93694__93696 = (function (coll,n,not_found){
var this__93684 = this;
var i__93685 = (n + this__93684.i);

if(cljs.core.truth_((i__93685 < this__93684.a.length)))
{return (this__93684.a[i__93685]);
} else
{return not_found;
}
});
G__93694 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__93694__93695.call(this,coll,n);
case  3 :
return G__93694__93696.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93694;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__93686 = this;
return (this__93686.a.length - this__93686.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__93687 = this;
return (this__93687.a[this__93687.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__93688 = this;
if(cljs.core.truth_(((this__93688.i + 1) < this__93688.a.length)))
{return (new cljs.core.IndexedSeq(this__93688.a,(this__93688.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__93689 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__93698 = null;
var G__93698__93699 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__93698__93700 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__93698 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__93698__93699.call(this,array,f);
case  3 :
return G__93698__93700.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93698;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__93702 = null;
var G__93702__93703 = (function (array,k){
return (array[k]);
});
var G__93702__93704 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__93702 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__93702__93703.call(this,array,k);
case  3 :
return G__93702__93704.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93702;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__93706 = null;
var G__93706__93707 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__93706__93708 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__93706 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__93706__93707.call(this,array,n);
case  3 :
return G__93706__93708.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93706;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____93710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____93710))
{var s__93711 = temp__3698__auto____93710;

return cljs.core._first.call(null,s__93711);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__93712 = cljs.core.next.call(null,s);
s = G__93712;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__93713 = cljs.core.seq.call(null,x);
var n__93714 = 0;

while(true){
if(cljs.core.truth_(s__93713))
{{
var G__93715 = cljs.core.next.call(null,s__93713);
var G__93716 = (n__93714 + 1);
s__93713 = G__93715;
n__93714 = G__93716;
continue;
}
} else
{return n__93714;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__93717 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__93718 = (function() { 
var G__93720__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__93721 = conj.call(null,coll,x);
var G__93722 = cljs.core.first.call(null,xs);
var G__93723 = cljs.core.next.call(null,xs);
coll = G__93721;
x = G__93722;
xs = G__93723;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__93720 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93720__delegate.call(this, coll, x, xs);
};
G__93720.cljs$lang$maxFixedArity = 2;
G__93720.cljs$lang$applyTo = (function (arglist__93724){
var coll = cljs.core.first(arglist__93724);
var x = cljs.core.first(cljs.core.next(arglist__93724));
var xs = cljs.core.rest(cljs.core.next(arglist__93724));
return G__93720__delegate.call(this, coll, x, xs);
});
return G__93720;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__93717.call(this,coll,x);
default:
return conj__93718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__93718.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__93725 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__93726 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__93725.call(this,coll,n);
case  3 :
return nth__93726.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__93728 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__93729 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__93728.call(this,o,k);
case  3 :
return get__93729.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
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
var assoc__93732 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__93733 = (function() { 
var G__93735__delegate = function (coll,k,v,kvs){
while(true){
var ret__93731 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__93736 = ret__93731;
var G__93737 = cljs.core.first.call(null,kvs);
var G__93738 = cljs.core.second.call(null,kvs);
var G__93739 = cljs.core.nnext.call(null,kvs);
coll = G__93736;
k = G__93737;
v = G__93738;
kvs = G__93739;
continue;
}
} else
{return ret__93731;
}
break;
}
};
var G__93735 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__93735__delegate.call(this, coll, k, v, kvs);
};
G__93735.cljs$lang$maxFixedArity = 3;
G__93735.cljs$lang$applyTo = (function (arglist__93740){
var coll = cljs.core.first(arglist__93740);
var k = cljs.core.first(cljs.core.next(arglist__93740));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__93740)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__93740)));
return G__93735__delegate.call(this, coll, k, v, kvs);
});
return G__93735;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__93732.call(this,coll,k,v);
default:
return assoc__93733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__93733.cljs$lang$applyTo;
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
var dissoc__93742 = (function (coll){
return coll;
});
var dissoc__93743 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__93744 = (function() { 
var G__93746__delegate = function (coll,k,ks){
while(true){
var ret__93741 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__93747 = ret__93741;
var G__93748 = cljs.core.first.call(null,ks);
var G__93749 = cljs.core.next.call(null,ks);
coll = G__93747;
k = G__93748;
ks = G__93749;
continue;
}
} else
{return ret__93741;
}
break;
}
};
var G__93746 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93746__delegate.call(this, coll, k, ks);
};
G__93746.cljs$lang$maxFixedArity = 2;
G__93746.cljs$lang$applyTo = (function (arglist__93750){
var coll = cljs.core.first(arglist__93750);
var k = cljs.core.first(cljs.core.next(arglist__93750));
var ks = cljs.core.rest(cljs.core.next(arglist__93750));
return G__93746__delegate.call(this, coll, k, ks);
});
return G__93746;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__93742.call(this,coll);
case  2 :
return dissoc__93743.call(this,coll,k);
default:
return dissoc__93744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__93744.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____93751 = o;

if(cljs.core.truth_((function (){var and__3546__auto____93752 = x__445__auto____93751;

if(cljs.core.truth_(and__3546__auto____93752))
{var and__3546__auto____93753 = x__445__auto____93751.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____93753))
{return cljs.core.not.call(null,x__445__auto____93751.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____93753;
}
} else
{return and__3546__auto____93752;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____93751);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__93755 = (function (coll){
return coll;
});
var disj__93756 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__93757 = (function() { 
var G__93759__delegate = function (coll,k,ks){
while(true){
var ret__93754 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__93760 = ret__93754;
var G__93761 = cljs.core.first.call(null,ks);
var G__93762 = cljs.core.next.call(null,ks);
coll = G__93760;
k = G__93761;
ks = G__93762;
continue;
}
} else
{return ret__93754;
}
break;
}
};
var G__93759 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93759__delegate.call(this, coll, k, ks);
};
G__93759.cljs$lang$maxFixedArity = 2;
G__93759.cljs$lang$applyTo = (function (arglist__93763){
var coll = cljs.core.first(arglist__93763);
var k = cljs.core.first(cljs.core.next(arglist__93763));
var ks = cljs.core.rest(cljs.core.next(arglist__93763));
return G__93759__delegate.call(this, coll, k, ks);
});
return G__93759;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__93755.call(this,coll);
case  2 :
return disj__93756.call(this,coll,k);
default:
return disj__93757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__93757.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____93764 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93765 = x__445__auto____93764;

if(cljs.core.truth_(and__3546__auto____93765))
{var and__3546__auto____93766 = x__445__auto____93764.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____93766))
{return cljs.core.not.call(null,x__445__auto____93764.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____93766;
}
} else
{return and__3546__auto____93765;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____93764);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____93767 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93768 = x__445__auto____93767;

if(cljs.core.truth_(and__3546__auto____93768))
{var and__3546__auto____93769 = x__445__auto____93767.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____93769))
{return cljs.core.not.call(null,x__445__auto____93767.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____93769;
}
} else
{return and__3546__auto____93768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____93767);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____93770 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93771 = x__445__auto____93770;

if(cljs.core.truth_(and__3546__auto____93771))
{var and__3546__auto____93772 = x__445__auto____93770.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____93772))
{return cljs.core.not.call(null,x__445__auto____93770.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____93772;
}
} else
{return and__3546__auto____93771;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____93770);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____93773 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93774 = x__445__auto____93773;

if(cljs.core.truth_(and__3546__auto____93774))
{var and__3546__auto____93775 = x__445__auto____93773.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____93775))
{return cljs.core.not.call(null,x__445__auto____93773.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____93775;
}
} else
{return and__3546__auto____93774;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____93773);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____93776 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93777 = x__445__auto____93776;

if(cljs.core.truth_(and__3546__auto____93777))
{var and__3546__auto____93778 = x__445__auto____93776.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____93778))
{return cljs.core.not.call(null,x__445__auto____93776.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____93778;
}
} else
{return and__3546__auto____93777;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____93776);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____93779 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93780 = x__445__auto____93779;

if(cljs.core.truth_(and__3546__auto____93780))
{var and__3546__auto____93781 = x__445__auto____93779.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____93781))
{return cljs.core.not.call(null,x__445__auto____93779.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____93781;
}
} else
{return and__3546__auto____93780;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____93779);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____93782 = x;

if(cljs.core.truth_((function (){var and__3546__auto____93783 = x__445__auto____93782;

if(cljs.core.truth_(and__3546__auto____93783))
{var and__3546__auto____93784 = x__445__auto____93782.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____93784))
{return cljs.core.not.call(null,x__445__auto____93782.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____93784;
}
} else
{return and__3546__auto____93783;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____93782);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__93785 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__93785.push(key);
}));
return keys__93785;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____93786 = s;

if(cljs.core.truth_((function (){var and__3546__auto____93787 = x__445__auto____93786;

if(cljs.core.truth_(and__3546__auto____93787))
{var and__3546__auto____93788 = x__445__auto____93786.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____93788))
{return cljs.core.not.call(null,x__445__auto____93786.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____93788;
}
} else
{return and__3546__auto____93787;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____93786);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____93789 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____93789))
{return cljs.core.not.call(null,(function (){var or__3548__auto____93790 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____93790))
{return or__3548__auto____93790;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____93789;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____93791 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____93791))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____93791;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____93792 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____93792))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____93792;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____93793 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____93793))
{return (n == n.toFixed());
} else
{return and__3546__auto____93793;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____93794 = coll;

if(cljs.core.truth_(and__3546__auto____93794))
{var and__3546__auto____93795 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____93795))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____93795;
}
} else
{return and__3546__auto____93794;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___93800 = (function (x){
return true;
});
var distinct_QMARK___93801 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___93802 = (function() { 
var G__93804__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__93796 = cljs.core.set([y,x]);
var xs__93797 = more;

while(true){
var x__93798 = cljs.core.first.call(null,xs__93797);
var etc__93799 = cljs.core.next.call(null,xs__93797);

if(cljs.core.truth_(xs__93797))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__93796,x__93798)))
{return false;
} else
{{
var G__93805 = cljs.core.conj.call(null,s__93796,x__93798);
var G__93806 = etc__93799;
s__93796 = G__93805;
xs__93797 = G__93806;
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
var G__93804 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93804__delegate.call(this, x, y, more);
};
G__93804.cljs$lang$maxFixedArity = 2;
G__93804.cljs$lang$applyTo = (function (arglist__93807){
var x = cljs.core.first(arglist__93807);
var y = cljs.core.first(cljs.core.next(arglist__93807));
var more = cljs.core.rest(cljs.core.next(arglist__93807));
return G__93804__delegate.call(this, x, y, more);
});
return G__93804;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___93800.call(this,x);
case  2 :
return distinct_QMARK___93801.call(this,x,y);
default:
return distinct_QMARK___93802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___93802.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__93808 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__93808)))
{return r__93808;
} else
{if(cljs.core.truth_(r__93808))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
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
var sort__93810 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__93811 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__93809 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__93809,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__93809);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__93810.call(this,comp);
case  2 :
return sort__93811.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var sort_by__93813 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__93814 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__93813.call(this,keyfn,comp);
case  3 :
return sort_by__93814.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
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
var reduce__93816 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__93817 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__93816.call(this,f,val);
case  3 :
return reduce__93817.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__93823 = (function (f,coll){
var temp__3695__auto____93819 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____93819))
{var s__93820 = temp__3695__auto____93819;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__93820),cljs.core.next.call(null,s__93820));
} else
{return f.call(null);
}
});
var seq_reduce__93824 = (function (f,val,coll){
var val__93821 = val;
var coll__93822 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__93822))
{{
var G__93826 = f.call(null,val__93821,cljs.core.first.call(null,coll__93822));
var G__93827 = cljs.core.next.call(null,coll__93822);
val__93821 = G__93826;
coll__93822 = G__93827;
continue;
}
} else
{return val__93821;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__93823.call(this,f,val);
case  3 :
return seq_reduce__93824.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__93828 = null;
var G__93828__93829 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__93828__93830 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__93828 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__93828__93829.call(this,coll,f);
case  3 :
return G__93828__93830.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93828;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___93832 = (function (){
return 0;
});
var _PLUS___93833 = (function (x){
return x;
});
var _PLUS___93834 = (function (x,y){
return (x + y);
});
var _PLUS___93835 = (function() { 
var G__93837__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__93837 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93837__delegate.call(this, x, y, more);
};
G__93837.cljs$lang$maxFixedArity = 2;
G__93837.cljs$lang$applyTo = (function (arglist__93838){
var x = cljs.core.first(arglist__93838);
var y = cljs.core.first(cljs.core.next(arglist__93838));
var more = cljs.core.rest(cljs.core.next(arglist__93838));
return G__93837__delegate.call(this, x, y, more);
});
return G__93837;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___93832.call(this);
case  1 :
return _PLUS___93833.call(this,x);
case  2 :
return _PLUS___93834.call(this,x,y);
default:
return _PLUS___93835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___93835.cljs$lang$applyTo;
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
var ___93839 = (function (x){
return (- x);
});
var ___93840 = (function (x,y){
return (x - y);
});
var ___93841 = (function() { 
var G__93843__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__93843 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93843__delegate.call(this, x, y, more);
};
G__93843.cljs$lang$maxFixedArity = 2;
G__93843.cljs$lang$applyTo = (function (arglist__93844){
var x = cljs.core.first(arglist__93844);
var y = cljs.core.first(cljs.core.next(arglist__93844));
var more = cljs.core.rest(cljs.core.next(arglist__93844));
return G__93843__delegate.call(this, x, y, more);
});
return G__93843;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___93839.call(this,x);
case  2 :
return ___93840.call(this,x,y);
default:
return ___93841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___93841.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___93845 = (function (){
return 1;
});
var _STAR___93846 = (function (x){
return x;
});
var _STAR___93847 = (function (x,y){
return (x * y);
});
var _STAR___93848 = (function() { 
var G__93850__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__93850 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93850__delegate.call(this, x, y, more);
};
G__93850.cljs$lang$maxFixedArity = 2;
G__93850.cljs$lang$applyTo = (function (arglist__93851){
var x = cljs.core.first(arglist__93851);
var y = cljs.core.first(cljs.core.next(arglist__93851));
var more = cljs.core.rest(cljs.core.next(arglist__93851));
return G__93850__delegate.call(this, x, y, more);
});
return G__93850;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___93845.call(this);
case  1 :
return _STAR___93846.call(this,x);
case  2 :
return _STAR___93847.call(this,x,y);
default:
return _STAR___93848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___93848.cljs$lang$applyTo;
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
var _SLASH___93852 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___93853 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___93854 = (function() { 
var G__93856__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__93856 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93856__delegate.call(this, x, y, more);
};
G__93856.cljs$lang$maxFixedArity = 2;
G__93856.cljs$lang$applyTo = (function (arglist__93857){
var x = cljs.core.first(arglist__93857);
var y = cljs.core.first(cljs.core.next(arglist__93857));
var more = cljs.core.rest(cljs.core.next(arglist__93857));
return G__93856__delegate.call(this, x, y, more);
});
return G__93856;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___93852.call(this,x);
case  2 :
return _SLASH___93853.call(this,x,y);
default:
return _SLASH___93854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___93854.cljs$lang$applyTo;
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
var _LT___93858 = (function (x){
return true;
});
var _LT___93859 = (function (x,y){
return (x < y);
});
var _LT___93860 = (function() { 
var G__93862__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__93863 = y;
var G__93864 = cljs.core.first.call(null,more);
var G__93865 = cljs.core.next.call(null,more);
x = G__93863;
y = G__93864;
more = G__93865;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__93862 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93862__delegate.call(this, x, y, more);
};
G__93862.cljs$lang$maxFixedArity = 2;
G__93862.cljs$lang$applyTo = (function (arglist__93866){
var x = cljs.core.first(arglist__93866);
var y = cljs.core.first(cljs.core.next(arglist__93866));
var more = cljs.core.rest(cljs.core.next(arglist__93866));
return G__93862__delegate.call(this, x, y, more);
});
return G__93862;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___93858.call(this,x);
case  2 :
return _LT___93859.call(this,x,y);
default:
return _LT___93860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___93860.cljs$lang$applyTo;
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
var _LT__EQ___93867 = (function (x){
return true;
});
var _LT__EQ___93868 = (function (x,y){
return (x <= y);
});
var _LT__EQ___93869 = (function() { 
var G__93871__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__93872 = y;
var G__93873 = cljs.core.first.call(null,more);
var G__93874 = cljs.core.next.call(null,more);
x = G__93872;
y = G__93873;
more = G__93874;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__93871 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93871__delegate.call(this, x, y, more);
};
G__93871.cljs$lang$maxFixedArity = 2;
G__93871.cljs$lang$applyTo = (function (arglist__93875){
var x = cljs.core.first(arglist__93875);
var y = cljs.core.first(cljs.core.next(arglist__93875));
var more = cljs.core.rest(cljs.core.next(arglist__93875));
return G__93871__delegate.call(this, x, y, more);
});
return G__93871;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___93867.call(this,x);
case  2 :
return _LT__EQ___93868.call(this,x,y);
default:
return _LT__EQ___93869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___93869.cljs$lang$applyTo;
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
var _GT___93876 = (function (x){
return true;
});
var _GT___93877 = (function (x,y){
return (x > y);
});
var _GT___93878 = (function() { 
var G__93880__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__93881 = y;
var G__93882 = cljs.core.first.call(null,more);
var G__93883 = cljs.core.next.call(null,more);
x = G__93881;
y = G__93882;
more = G__93883;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__93880 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93880__delegate.call(this, x, y, more);
};
G__93880.cljs$lang$maxFixedArity = 2;
G__93880.cljs$lang$applyTo = (function (arglist__93884){
var x = cljs.core.first(arglist__93884);
var y = cljs.core.first(cljs.core.next(arglist__93884));
var more = cljs.core.rest(cljs.core.next(arglist__93884));
return G__93880__delegate.call(this, x, y, more);
});
return G__93880;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___93876.call(this,x);
case  2 :
return _GT___93877.call(this,x,y);
default:
return _GT___93878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___93878.cljs$lang$applyTo;
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
var _GT__EQ___93885 = (function (x){
return true;
});
var _GT__EQ___93886 = (function (x,y){
return (x >= y);
});
var _GT__EQ___93887 = (function() { 
var G__93889__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__93890 = y;
var G__93891 = cljs.core.first.call(null,more);
var G__93892 = cljs.core.next.call(null,more);
x = G__93890;
y = G__93891;
more = G__93892;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__93889 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93889__delegate.call(this, x, y, more);
};
G__93889.cljs$lang$maxFixedArity = 2;
G__93889.cljs$lang$applyTo = (function (arglist__93893){
var x = cljs.core.first(arglist__93893);
var y = cljs.core.first(cljs.core.next(arglist__93893));
var more = cljs.core.rest(cljs.core.next(arglist__93893));
return G__93889__delegate.call(this, x, y, more);
});
return G__93889;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___93885.call(this,x);
case  2 :
return _GT__EQ___93886.call(this,x,y);
default:
return _GT__EQ___93887.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___93887.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__93894 = (function (x){
return x;
});
var max__93895 = (function (x,y){
return ((x > y) ? x : y);
});
var max__93896 = (function() { 
var G__93898__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__93898 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93898__delegate.call(this, x, y, more);
};
G__93898.cljs$lang$maxFixedArity = 2;
G__93898.cljs$lang$applyTo = (function (arglist__93899){
var x = cljs.core.first(arglist__93899);
var y = cljs.core.first(cljs.core.next(arglist__93899));
var more = cljs.core.rest(cljs.core.next(arglist__93899));
return G__93898__delegate.call(this, x, y, more);
});
return G__93898;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__93894.call(this,x);
case  2 :
return max__93895.call(this,x,y);
default:
return max__93896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__93896.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__93900 = (function (x){
return x;
});
var min__93901 = (function (x,y){
return ((x < y) ? x : y);
});
var min__93902 = (function() { 
var G__93904__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__93904 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93904__delegate.call(this, x, y, more);
};
G__93904.cljs$lang$maxFixedArity = 2;
G__93904.cljs$lang$applyTo = (function (arglist__93905){
var x = cljs.core.first(arglist__93905);
var y = cljs.core.first(cljs.core.next(arglist__93905));
var more = cljs.core.rest(cljs.core.next(arglist__93905));
return G__93904__delegate.call(this, x, y, more);
});
return G__93904;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__93900.call(this,x);
case  2 :
return min__93901.call(this,x,y);
default:
return min__93902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__93902.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__93906 = (n % d);

return cljs.core.fix.call(null,((n - rem__93906) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__93907 = cljs.core.quot.call(null,n,d);

return (n - (d * q__93907));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__93908 = (function (){
return Math.random.call(null);
});
var rand__93909 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__93908.call(this);
case  1 :
return rand__93909.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___93911 = (function (x){
return true;
});
var _EQ__EQ___93912 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___93913 = (function() { 
var G__93915__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__93916 = y;
var G__93917 = cljs.core.first.call(null,more);
var G__93918 = cljs.core.next.call(null,more);
x = G__93916;
y = G__93917;
more = G__93918;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__93915 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__93915__delegate.call(this, x, y, more);
};
G__93915.cljs$lang$maxFixedArity = 2;
G__93915.cljs$lang$applyTo = (function (arglist__93919){
var x = cljs.core.first(arglist__93919);
var y = cljs.core.first(cljs.core.next(arglist__93919));
var more = cljs.core.rest(cljs.core.next(arglist__93919));
return G__93915__delegate.call(this, x, y, more);
});
return G__93915;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___93911.call(this,x);
case  2 :
return _EQ__EQ___93912.call(this,x,y);
default:
return _EQ__EQ___93913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___93913.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__93920 = n;
var xs__93921 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____93922 = xs__93921;

if(cljs.core.truth_(and__3546__auto____93922))
{return (n__93920 > 0);
} else
{return and__3546__auto____93922;
}
})()))
{{
var G__93923 = (n__93920 - 1);
var G__93924 = cljs.core.next.call(null,xs__93921);
n__93920 = G__93923;
xs__93921 = G__93924;
continue;
}
} else
{return xs__93921;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__93929 = null;
var G__93929__93930 = (function (coll,n){
var temp__3695__auto____93925 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____93925))
{var xs__93926 = temp__3695__auto____93925;

return cljs.core.first.call(null,xs__93926);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__93929__93931 = (function (coll,n,not_found){
var temp__3695__auto____93927 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____93927))
{var xs__93928 = temp__3695__auto____93927;

return cljs.core.first.call(null,xs__93928);
} else
{return not_found;
}
});
G__93929 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__93929__93930.call(this,coll,n);
case  3 :
return G__93929__93931.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93929;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___93933 = (function (){
return "";
});
var str_STAR___93934 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___93935 = (function() { 
var G__93937__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__93938 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__93939 = cljs.core.next.call(null,more);
sb = G__93938;
more = G__93939;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__93937 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__93937__delegate.call(this, x, ys);
};
G__93937.cljs$lang$maxFixedArity = 1;
G__93937.cljs$lang$applyTo = (function (arglist__93940){
var x = cljs.core.first(arglist__93940);
var ys = cljs.core.rest(arglist__93940);
return G__93937__delegate.call(this, x, ys);
});
return G__93937;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___93933.call(this);
case  1 :
return str_STAR___93934.call(this,x);
default:
return str_STAR___93935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___93935.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__93941 = (function (){
return "";
});
var str__93942 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__93943 = (function() { 
var G__93945__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__93945 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__93945__delegate.call(this, x, ys);
};
G__93945.cljs$lang$maxFixedArity = 1;
G__93945.cljs$lang$applyTo = (function (arglist__93946){
var x = cljs.core.first(arglist__93946);
var ys = cljs.core.rest(arglist__93946);
return G__93945__delegate.call(this, x, ys);
});
return G__93945;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__93941.call(this);
case  1 :
return str__93942.call(this,x);
default:
return str__93943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__93943.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__93947 = (function (s,start){
return s.substring(start);
});
var subs__93948 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__93947.call(this,s,start);
case  3 :
return subs__93948.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__93950 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__93951 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__93950.call(this,ns);
case  2 :
return symbol__93951.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__93953 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__93954 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__93953.call(this,ns);
case  2 :
return keyword__93954.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__93956 = cljs.core.seq.call(null,x);
var ys__93957 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__93956)))
{return cljs.core.nil_QMARK_.call(null,ys__93957);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__93957)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__93956),cljs.core.first.call(null,ys__93957))))
{{
var G__93958 = cljs.core.next.call(null,xs__93956);
var G__93959 = cljs.core.next.call(null,ys__93957);
xs__93956 = G__93958;
ys__93957 = G__93959;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__93960_SHARP_,p2__93961_SHARP_){
return cljs.core.hash_combine.call(null,p1__93960_SHARP_,cljs.core.hash.call(null,p2__93961_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__93962__93963 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__93962__93963))
{var G__93965__93967 = cljs.core.first.call(null,G__93962__93963);
var vec__93966__93968 = G__93965__93967;
var key_name__93969 = cljs.core.nth.call(null,vec__93966__93968,0,null);
var f__93970 = cljs.core.nth.call(null,vec__93966__93968,1,null);
var G__93962__93971 = G__93962__93963;

var G__93965__93972 = G__93965__93967;
var G__93962__93973 = G__93962__93971;

while(true){
var vec__93974__93975 = G__93965__93972;
var key_name__93976 = cljs.core.nth.call(null,vec__93974__93975,0,null);
var f__93977 = cljs.core.nth.call(null,vec__93974__93975,1,null);
var G__93962__93978 = G__93962__93973;

var str_name__93979 = cljs.core.name.call(null,key_name__93976);

obj[str_name__93979] = f__93977;
var temp__3698__auto____93980 = cljs.core.next.call(null,G__93962__93978);

if(cljs.core.truth_(temp__3698__auto____93980))
{var G__93962__93981 = temp__3698__auto____93980;

{
var G__93982 = cljs.core.first.call(null,G__93962__93981);
var G__93983 = G__93962__93981;
G__93965__93972 = G__93982;
G__93962__93973 = G__93983;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__93984 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__93985 = this;
return (new cljs.core.List(this__93985.meta,o,coll,(this__93985.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__93986 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__93987 = this;
return this__93987.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__93988 = this;
return this__93988.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__93989 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__93990 = this;
return this__93990.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__93991 = this;
return this__93991.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__93992 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__93993 = this;
return (new cljs.core.List(meta,this__93993.first,this__93993.rest,this__93993.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__93994 = this;
return this__93994.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__93995 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__93996 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__93997 = this;
return (new cljs.core.List(this__93997.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__93998 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__93999 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__94000 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__94001 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__94002 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__94003 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94004 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94005 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94006 = this;
return this__94006.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94007 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__94008){
var items = cljs.core.seq( arglist__94008 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94009 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94010 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94011 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94012 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__94012.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94013 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__94014 = this;
return this__94014.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__94015 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__94015.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__94015.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94016 = this;
return this__94016.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94017 = this;
return (new cljs.core.Cons(meta,this__94017.first,this__94017.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__94018 = null;
var G__94018__94019 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__94018__94020 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__94018 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__94018__94019.call(this,string,f);
case  3 :
return G__94018__94020.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94018;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__94022 = null;
var G__94022__94023 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__94022__94024 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__94022 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__94022__94023.call(this,string,k);
case  3 :
return G__94022__94024.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94022;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__94026 = null;
var G__94026__94027 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__94026__94028 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__94026 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__94026__94027.call(this,string,n);
case  3 :
return G__94026__94028.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94026;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__94030 = null;
var G__94030__94031 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__94030__94032 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__94030 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__94030__94031.call(this,this$,coll);
case  3 :
return G__94030__94032.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94030;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__94034 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__94034;
} else
{lazy_seq.x = x__94034.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94035 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94036 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94037 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94038 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__94038.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94039 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__94040 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__94041 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94042 = this;
return this__94042.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94043 = this;
return (new cljs.core.LazySeq(meta,this__94043.realized,this__94043.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__94044 = cljs.core.array.call(null);

var s__94045 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__94045)))
{ary__94044.push(cljs.core.first.call(null,s__94045));
{
var G__94046 = cljs.core.next.call(null,s__94045);
s__94045 = G__94046;
continue;
}
} else
{return ary__94044;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__94047 = s;
var i__94048 = n;
var sum__94049 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____94050 = (i__94048 > 0);

if(cljs.core.truth_(and__3546__auto____94050))
{return cljs.core.seq.call(null,s__94047);
} else
{return and__3546__auto____94050;
}
})()))
{{
var G__94051 = cljs.core.next.call(null,s__94047);
var G__94052 = (i__94048 - 1);
var G__94053 = (sum__94049 + 1);
s__94047 = G__94051;
i__94048 = G__94052;
sum__94049 = G__94053;
continue;
}
} else
{return sum__94049;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__94057 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__94058 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__94059 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__94054 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__94054))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__94054),concat.call(null,cljs.core.rest.call(null,s__94054),y));
} else
{return y;
}
})));
});
var concat__94060 = (function() { 
var G__94062__delegate = function (x,y,zs){
var cat__94056 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__94055 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__94055))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__94055),cat.call(null,cljs.core.rest.call(null,xys__94055),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__94056.call(null,concat.call(null,x,y),zs);
};
var G__94062 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__94062__delegate.call(this, x, y, zs);
};
G__94062.cljs$lang$maxFixedArity = 2;
G__94062.cljs$lang$applyTo = (function (arglist__94063){
var x = cljs.core.first(arglist__94063);
var y = cljs.core.first(cljs.core.next(arglist__94063));
var zs = cljs.core.rest(cljs.core.next(arglist__94063));
return G__94062__delegate.call(this, x, y, zs);
});
return G__94062;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__94057.call(this);
case  1 :
return concat__94058.call(this,x);
case  2 :
return concat__94059.call(this,x,y);
default:
return concat__94060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__94060.cljs$lang$applyTo;
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
var list_STAR___94064 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___94065 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___94066 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___94067 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___94068 = (function() { 
var G__94070__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__94070 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__94070__delegate.call(this, a, b, c, d, more);
};
G__94070.cljs$lang$maxFixedArity = 4;
G__94070.cljs$lang$applyTo = (function (arglist__94071){
var a = cljs.core.first(arglist__94071);
var b = cljs.core.first(cljs.core.next(arglist__94071));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94071)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94071))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94071))));
return G__94070__delegate.call(this, a, b, c, d, more);
});
return G__94070;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___94064.call(this,a);
case  2 :
return list_STAR___94065.call(this,a,b);
case  3 :
return list_STAR___94066.call(this,a,b,c);
case  4 :
return list_STAR___94067.call(this,a,b,c,d);
default:
return list_STAR___94068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___94068.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__94081 = (function (f,args){
var fixed_arity__94072 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__94072 + 1)) <= fixed_arity__94072)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__94082 = (function (f,x,args){
var arglist__94073 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__94074 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__94073,fixed_arity__94074) <= fixed_arity__94074)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__94073));
} else
{return f.cljs$lang$applyTo(arglist__94073);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__94073));
}
});
var apply__94083 = (function (f,x,y,args){
var arglist__94075 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__94076 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__94075,fixed_arity__94076) <= fixed_arity__94076)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__94075));
} else
{return f.cljs$lang$applyTo(arglist__94075);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__94075));
}
});
var apply__94084 = (function (f,x,y,z,args){
var arglist__94077 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__94078 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__94077,fixed_arity__94078) <= fixed_arity__94078)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__94077));
} else
{return f.cljs$lang$applyTo(arglist__94077);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__94077));
}
});
var apply__94085 = (function() { 
var G__94087__delegate = function (f,a,b,c,d,args){
var arglist__94079 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__94080 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__94079,fixed_arity__94080) <= fixed_arity__94080)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__94079));
} else
{return f.cljs$lang$applyTo(arglist__94079);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__94079));
}
};
var G__94087 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__94087__delegate.call(this, f, a, b, c, d, args);
};
G__94087.cljs$lang$maxFixedArity = 5;
G__94087.cljs$lang$applyTo = (function (arglist__94088){
var f = cljs.core.first(arglist__94088);
var a = cljs.core.first(cljs.core.next(arglist__94088));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94088)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94088))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94088)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94088)))));
return G__94087__delegate.call(this, f, a, b, c, d, args);
});
return G__94087;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__94081.call(this,f,a);
case  3 :
return apply__94082.call(this,f,a,b);
case  4 :
return apply__94083.call(this,f,a,b,c);
case  5 :
return apply__94084.call(this,f,a,b,c,d);
default:
return apply__94085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__94085.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__94089){
var obj = cljs.core.first(arglist__94089);
var f = cljs.core.first(cljs.core.next(arglist__94089));
var args = cljs.core.rest(cljs.core.next(arglist__94089));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___94090 = (function (x){
return false;
});
var not_EQ___94091 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___94092 = (function() { 
var G__94094__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__94094 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__94094__delegate.call(this, x, y, more);
};
G__94094.cljs$lang$maxFixedArity = 2;
G__94094.cljs$lang$applyTo = (function (arglist__94095){
var x = cljs.core.first(arglist__94095);
var y = cljs.core.first(cljs.core.next(arglist__94095));
var more = cljs.core.rest(cljs.core.next(arglist__94095));
return G__94094__delegate.call(this, x, y, more);
});
return G__94094;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___94090.call(this,x);
case  2 :
return not_EQ___94091.call(this,x,y);
default:
return not_EQ___94092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___94092.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__94096 = pred;
var G__94097 = cljs.core.next.call(null,coll);
pred = G__94096;
coll = G__94097;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____94098 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____94098))
{return or__3548__auto____94098;
} else
{{
var G__94099 = pred;
var G__94100 = cljs.core.next.call(null,coll);
pred = G__94099;
coll = G__94100;
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
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__94101 = null;
var G__94101__94102 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__94101__94103 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__94101__94104 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__94101__94105 = (function() { 
var G__94107__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__94107 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__94107__delegate.call(this, x, y, zs);
};
G__94107.cljs$lang$maxFixedArity = 2;
G__94107.cljs$lang$applyTo = (function (arglist__94108){
var x = cljs.core.first(arglist__94108);
var y = cljs.core.first(cljs.core.next(arglist__94108));
var zs = cljs.core.rest(cljs.core.next(arglist__94108));
return G__94107__delegate.call(this, x, y, zs);
});
return G__94107;
})()
;
G__94101 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__94101__94102.call(this);
case  1 :
return G__94101__94103.call(this,x);
case  2 :
return G__94101__94104.call(this,x,y);
default:
return G__94101__94105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94101.cljs$lang$maxFixedArity = 2;
G__94101.cljs$lang$applyTo = G__94101__94105.cljs$lang$applyTo;
return G__94101;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__94109__delegate = function (args){
return x;
};
var G__94109 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__94109__delegate.call(this, args);
};
G__94109.cljs$lang$maxFixedArity = 0;
G__94109.cljs$lang$applyTo = (function (arglist__94110){
var args = cljs.core.seq( arglist__94110 );;
return G__94109__delegate.call(this, args);
});
return G__94109;
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
var comp__94114 = (function (){
return cljs.core.identity;
});
var comp__94115 = (function (f){
return f;
});
var comp__94116 = (function (f,g){
return (function() {
var G__94120 = null;
var G__94120__94121 = (function (){
return f.call(null,g.call(null));
});
var G__94120__94122 = (function (x){
return f.call(null,g.call(null,x));
});
var G__94120__94123 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__94120__94124 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__94120__94125 = (function() { 
var G__94127__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__94127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94127__delegate.call(this, x, y, z, args);
};
G__94127.cljs$lang$maxFixedArity = 3;
G__94127.cljs$lang$applyTo = (function (arglist__94128){
var x = cljs.core.first(arglist__94128);
var y = cljs.core.first(cljs.core.next(arglist__94128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94128)));
return G__94127__delegate.call(this, x, y, z, args);
});
return G__94127;
})()
;
G__94120 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__94120__94121.call(this);
case  1 :
return G__94120__94122.call(this,x);
case  2 :
return G__94120__94123.call(this,x,y);
case  3 :
return G__94120__94124.call(this,x,y,z);
default:
return G__94120__94125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94120.cljs$lang$maxFixedArity = 3;
G__94120.cljs$lang$applyTo = G__94120__94125.cljs$lang$applyTo;
return G__94120;
})()
});
var comp__94117 = (function (f,g,h){
return (function() {
var G__94129 = null;
var G__94129__94130 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__94129__94131 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__94129__94132 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__94129__94133 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__94129__94134 = (function() { 
var G__94136__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__94136 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94136__delegate.call(this, x, y, z, args);
};
G__94136.cljs$lang$maxFixedArity = 3;
G__94136.cljs$lang$applyTo = (function (arglist__94137){
var x = cljs.core.first(arglist__94137);
var y = cljs.core.first(cljs.core.next(arglist__94137));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94137)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94137)));
return G__94136__delegate.call(this, x, y, z, args);
});
return G__94136;
})()
;
G__94129 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__94129__94130.call(this);
case  1 :
return G__94129__94131.call(this,x);
case  2 :
return G__94129__94132.call(this,x,y);
case  3 :
return G__94129__94133.call(this,x,y,z);
default:
return G__94129__94134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94129.cljs$lang$maxFixedArity = 3;
G__94129.cljs$lang$applyTo = G__94129__94134.cljs$lang$applyTo;
return G__94129;
})()
});
var comp__94118 = (function() { 
var G__94138__delegate = function (f1,f2,f3,fs){
var fs__94111 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__94139__delegate = function (args){
var ret__94112 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__94111),args);
var fs__94113 = cljs.core.next.call(null,fs__94111);

while(true){
if(cljs.core.truth_(fs__94113))
{{
var G__94140 = cljs.core.first.call(null,fs__94113).call(null,ret__94112);
var G__94141 = cljs.core.next.call(null,fs__94113);
ret__94112 = G__94140;
fs__94113 = G__94141;
continue;
}
} else
{return ret__94112;
}
break;
}
};
var G__94139 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__94139__delegate.call(this, args);
};
G__94139.cljs$lang$maxFixedArity = 0;
G__94139.cljs$lang$applyTo = (function (arglist__94142){
var args = cljs.core.seq( arglist__94142 );;
return G__94139__delegate.call(this, args);
});
return G__94139;
})()
;
};
var G__94138 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94138__delegate.call(this, f1, f2, f3, fs);
};
G__94138.cljs$lang$maxFixedArity = 3;
G__94138.cljs$lang$applyTo = (function (arglist__94143){
var f1 = cljs.core.first(arglist__94143);
var f2 = cljs.core.first(cljs.core.next(arglist__94143));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94143)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94143)));
return G__94138__delegate.call(this, f1, f2, f3, fs);
});
return G__94138;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__94114.call(this);
case  1 :
return comp__94115.call(this,f1);
case  2 :
return comp__94116.call(this,f1,f2);
case  3 :
return comp__94117.call(this,f1,f2,f3);
default:
return comp__94118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__94118.cljs$lang$applyTo;
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
var partial__94144 = (function (f,arg1){
return (function() { 
var G__94149__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__94149 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__94149__delegate.call(this, args);
};
G__94149.cljs$lang$maxFixedArity = 0;
G__94149.cljs$lang$applyTo = (function (arglist__94150){
var args = cljs.core.seq( arglist__94150 );;
return G__94149__delegate.call(this, args);
});
return G__94149;
})()
;
});
var partial__94145 = (function (f,arg1,arg2){
return (function() { 
var G__94151__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__94151 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__94151__delegate.call(this, args);
};
G__94151.cljs$lang$maxFixedArity = 0;
G__94151.cljs$lang$applyTo = (function (arglist__94152){
var args = cljs.core.seq( arglist__94152 );;
return G__94151__delegate.call(this, args);
});
return G__94151;
})()
;
});
var partial__94146 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__94153__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__94153 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__94153__delegate.call(this, args);
};
G__94153.cljs$lang$maxFixedArity = 0;
G__94153.cljs$lang$applyTo = (function (arglist__94154){
var args = cljs.core.seq( arglist__94154 );;
return G__94153__delegate.call(this, args);
});
return G__94153;
})()
;
});
var partial__94147 = (function() { 
var G__94155__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__94156__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__94156 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__94156__delegate.call(this, args);
};
G__94156.cljs$lang$maxFixedArity = 0;
G__94156.cljs$lang$applyTo = (function (arglist__94157){
var args = cljs.core.seq( arglist__94157 );;
return G__94156__delegate.call(this, args);
});
return G__94156;
})()
;
};
var G__94155 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__94155__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__94155.cljs$lang$maxFixedArity = 4;
G__94155.cljs$lang$applyTo = (function (arglist__94158){
var f = cljs.core.first(arglist__94158);
var arg1 = cljs.core.first(cljs.core.next(arglist__94158));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94158)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94158))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94158))));
return G__94155__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__94155;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__94144.call(this,f,arg1);
case  3 :
return partial__94145.call(this,f,arg1,arg2);
case  4 :
return partial__94146.call(this,f,arg1,arg2,arg3);
default:
return partial__94147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__94147.cljs$lang$applyTo;
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
var fnil__94159 = (function (f,x){
return (function() {
var G__94163 = null;
var G__94163__94164 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__94163__94165 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__94163__94166 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__94163__94167 = (function() { 
var G__94169__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__94169 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94169__delegate.call(this, a, b, c, ds);
};
G__94169.cljs$lang$maxFixedArity = 3;
G__94169.cljs$lang$applyTo = (function (arglist__94170){
var a = cljs.core.first(arglist__94170);
var b = cljs.core.first(cljs.core.next(arglist__94170));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94170)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94170)));
return G__94169__delegate.call(this, a, b, c, ds);
});
return G__94169;
})()
;
G__94163 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__94163__94164.call(this,a);
case  2 :
return G__94163__94165.call(this,a,b);
case  3 :
return G__94163__94166.call(this,a,b,c);
default:
return G__94163__94167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94163.cljs$lang$maxFixedArity = 3;
G__94163.cljs$lang$applyTo = G__94163__94167.cljs$lang$applyTo;
return G__94163;
})()
});
var fnil__94160 = (function (f,x,y){
return (function() {
var G__94171 = null;
var G__94171__94172 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__94171__94173 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__94171__94174 = (function() { 
var G__94176__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__94176 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94176__delegate.call(this, a, b, c, ds);
};
G__94176.cljs$lang$maxFixedArity = 3;
G__94176.cljs$lang$applyTo = (function (arglist__94177){
var a = cljs.core.first(arglist__94177);
var b = cljs.core.first(cljs.core.next(arglist__94177));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94177)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94177)));
return G__94176__delegate.call(this, a, b, c, ds);
});
return G__94176;
})()
;
G__94171 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__94171__94172.call(this,a,b);
case  3 :
return G__94171__94173.call(this,a,b,c);
default:
return G__94171__94174.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94171.cljs$lang$maxFixedArity = 3;
G__94171.cljs$lang$applyTo = G__94171__94174.cljs$lang$applyTo;
return G__94171;
})()
});
var fnil__94161 = (function (f,x,y,z){
return (function() {
var G__94178 = null;
var G__94178__94179 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__94178__94180 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__94178__94181 = (function() { 
var G__94183__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__94183 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94183__delegate.call(this, a, b, c, ds);
};
G__94183.cljs$lang$maxFixedArity = 3;
G__94183.cljs$lang$applyTo = (function (arglist__94184){
var a = cljs.core.first(arglist__94184);
var b = cljs.core.first(cljs.core.next(arglist__94184));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94184)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94184)));
return G__94183__delegate.call(this, a, b, c, ds);
});
return G__94183;
})()
;
G__94178 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__94178__94179.call(this,a,b);
case  3 :
return G__94178__94180.call(this,a,b,c);
default:
return G__94178__94181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94178.cljs$lang$maxFixedArity = 3;
G__94178.cljs$lang$applyTo = G__94178__94181.cljs$lang$applyTo;
return G__94178;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__94159.call(this,f,x);
case  3 :
return fnil__94160.call(this,f,x,y);
case  4 :
return fnil__94161.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__94187 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94185 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94185))
{var s__94186 = temp__3698__auto____94185;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__94186)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__94186)));
} else
{return null;
}
})));
});

return mapi__94187.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94188))
{var s__94189 = temp__3698__auto____94188;

var x__94190 = f.call(null,cljs.core.first.call(null,s__94189));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__94190)))
{return keep.call(null,f,cljs.core.rest.call(null,s__94189));
} else
{return cljs.core.cons.call(null,x__94190,keep.call(null,f,cljs.core.rest.call(null,s__94189)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__94200 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94197))
{var s__94198 = temp__3698__auto____94197;

var x__94199 = f.call(null,idx,cljs.core.first.call(null,s__94198));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__94199)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__94198));
} else
{return cljs.core.cons.call(null,x__94199,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__94198)));
}
} else
{return null;
}
})));
});

return keepi__94200.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__94245 = (function (p){
return (function() {
var ep1 = null;
var ep1__94250 = (function (){
return true;
});
var ep1__94251 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__94252 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94207 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____94207))
{return p.call(null,y);
} else
{return and__3546__auto____94207;
}
})());
});
var ep1__94253 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94208 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____94208))
{var and__3546__auto____94209 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____94209))
{return p.call(null,z);
} else
{return and__3546__auto____94209;
}
} else
{return and__3546__auto____94208;
}
})());
});
var ep1__94254 = (function() { 
var G__94256__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94210 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____94210))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____94210;
}
})());
};
var G__94256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94256__delegate.call(this, x, y, z, args);
};
G__94256.cljs$lang$maxFixedArity = 3;
G__94256.cljs$lang$applyTo = (function (arglist__94257){
var x = cljs.core.first(arglist__94257);
var y = cljs.core.first(cljs.core.next(arglist__94257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94257)));
return G__94256__delegate.call(this, x, y, z, args);
});
return G__94256;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__94250.call(this);
case  1 :
return ep1__94251.call(this,x);
case  2 :
return ep1__94252.call(this,x,y);
case  3 :
return ep1__94253.call(this,x,y,z);
default:
return ep1__94254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__94254.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__94246 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__94258 = (function (){
return true;
});
var ep2__94259 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94211 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____94211))
{return p2.call(null,x);
} else
{return and__3546__auto____94211;
}
})());
});
var ep2__94260 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94212 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____94212))
{var and__3546__auto____94213 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____94213))
{var and__3546__auto____94214 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____94214))
{return p2.call(null,y);
} else
{return and__3546__auto____94214;
}
} else
{return and__3546__auto____94213;
}
} else
{return and__3546__auto____94212;
}
})());
});
var ep2__94261 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94215 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____94215))
{var and__3546__auto____94216 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____94216))
{var and__3546__auto____94217 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____94217))
{var and__3546__auto____94218 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____94218))
{var and__3546__auto____94219 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____94219))
{return p2.call(null,z);
} else
{return and__3546__auto____94219;
}
} else
{return and__3546__auto____94218;
}
} else
{return and__3546__auto____94217;
}
} else
{return and__3546__auto____94216;
}
} else
{return and__3546__auto____94215;
}
})());
});
var ep2__94262 = (function() { 
var G__94264__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94220 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____94220))
{return cljs.core.every_QMARK_.call(null,(function (p1__94191_SHARP_){
var and__3546__auto____94221 = p1.call(null,p1__94191_SHARP_);

if(cljs.core.truth_(and__3546__auto____94221))
{return p2.call(null,p1__94191_SHARP_);
} else
{return and__3546__auto____94221;
}
}),args);
} else
{return and__3546__auto____94220;
}
})());
};
var G__94264 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94264__delegate.call(this, x, y, z, args);
};
G__94264.cljs$lang$maxFixedArity = 3;
G__94264.cljs$lang$applyTo = (function (arglist__94265){
var x = cljs.core.first(arglist__94265);
var y = cljs.core.first(cljs.core.next(arglist__94265));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94265)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94265)));
return G__94264__delegate.call(this, x, y, z, args);
});
return G__94264;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__94258.call(this);
case  1 :
return ep2__94259.call(this,x);
case  2 :
return ep2__94260.call(this,x,y);
case  3 :
return ep2__94261.call(this,x,y,z);
default:
return ep2__94262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__94262.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__94247 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__94266 = (function (){
return true;
});
var ep3__94267 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94222 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____94222))
{var and__3546__auto____94223 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____94223))
{return p3.call(null,x);
} else
{return and__3546__auto____94223;
}
} else
{return and__3546__auto____94222;
}
})());
});
var ep3__94268 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94224 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____94224))
{var and__3546__auto____94225 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____94225))
{var and__3546__auto____94226 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____94226))
{var and__3546__auto____94227 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____94227))
{var and__3546__auto____94228 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____94228))
{return p3.call(null,y);
} else
{return and__3546__auto____94228;
}
} else
{return and__3546__auto____94227;
}
} else
{return and__3546__auto____94226;
}
} else
{return and__3546__auto____94225;
}
} else
{return and__3546__auto____94224;
}
})());
});
var ep3__94269 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94229 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____94229))
{var and__3546__auto____94230 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____94230))
{var and__3546__auto____94231 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____94231))
{var and__3546__auto____94232 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____94232))
{var and__3546__auto____94233 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____94233))
{var and__3546__auto____94234 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____94234))
{var and__3546__auto____94235 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____94235))
{var and__3546__auto____94236 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____94236))
{return p3.call(null,z);
} else
{return and__3546__auto____94236;
}
} else
{return and__3546__auto____94235;
}
} else
{return and__3546__auto____94234;
}
} else
{return and__3546__auto____94233;
}
} else
{return and__3546__auto____94232;
}
} else
{return and__3546__auto____94231;
}
} else
{return and__3546__auto____94230;
}
} else
{return and__3546__auto____94229;
}
})());
});
var ep3__94270 = (function() { 
var G__94272__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94237 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____94237))
{return cljs.core.every_QMARK_.call(null,(function (p1__94192_SHARP_){
var and__3546__auto____94238 = p1.call(null,p1__94192_SHARP_);

if(cljs.core.truth_(and__3546__auto____94238))
{var and__3546__auto____94239 = p2.call(null,p1__94192_SHARP_);

if(cljs.core.truth_(and__3546__auto____94239))
{return p3.call(null,p1__94192_SHARP_);
} else
{return and__3546__auto____94239;
}
} else
{return and__3546__auto____94238;
}
}),args);
} else
{return and__3546__auto____94237;
}
})());
};
var G__94272 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94272__delegate.call(this, x, y, z, args);
};
G__94272.cljs$lang$maxFixedArity = 3;
G__94272.cljs$lang$applyTo = (function (arglist__94273){
var x = cljs.core.first(arglist__94273);
var y = cljs.core.first(cljs.core.next(arglist__94273));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94273)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94273)));
return G__94272__delegate.call(this, x, y, z, args);
});
return G__94272;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__94266.call(this);
case  1 :
return ep3__94267.call(this,x);
case  2 :
return ep3__94268.call(this,x,y);
case  3 :
return ep3__94269.call(this,x,y,z);
default:
return ep3__94270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__94270.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__94248 = (function() { 
var G__94274__delegate = function (p1,p2,p3,ps){
var ps__94240 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__94275 = (function (){
return true;
});
var epn__94276 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__94193_SHARP_){
return p1__94193_SHARP_.call(null,x);
}),ps__94240);
});
var epn__94277 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__94194_SHARP_){
var and__3546__auto____94241 = p1__94194_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____94241))
{return p1__94194_SHARP_.call(null,y);
} else
{return and__3546__auto____94241;
}
}),ps__94240);
});
var epn__94278 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__94195_SHARP_){
var and__3546__auto____94242 = p1__94195_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____94242))
{var and__3546__auto____94243 = p1__94195_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____94243))
{return p1__94195_SHARP_.call(null,z);
} else
{return and__3546__auto____94243;
}
} else
{return and__3546__auto____94242;
}
}),ps__94240);
});
var epn__94279 = (function() { 
var G__94281__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____94244 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____94244))
{return cljs.core.every_QMARK_.call(null,(function (p1__94196_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__94196_SHARP_,args);
}),ps__94240);
} else
{return and__3546__auto____94244;
}
})());
};
var G__94281 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94281__delegate.call(this, x, y, z, args);
};
G__94281.cljs$lang$maxFixedArity = 3;
G__94281.cljs$lang$applyTo = (function (arglist__94282){
var x = cljs.core.first(arglist__94282);
var y = cljs.core.first(cljs.core.next(arglist__94282));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94282)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94282)));
return G__94281__delegate.call(this, x, y, z, args);
});
return G__94281;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__94275.call(this);
case  1 :
return epn__94276.call(this,x);
case  2 :
return epn__94277.call(this,x,y);
case  3 :
return epn__94278.call(this,x,y,z);
default:
return epn__94279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__94279.cljs$lang$applyTo;
return epn;
})()
};
var G__94274 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94274__delegate.call(this, p1, p2, p3, ps);
};
G__94274.cljs$lang$maxFixedArity = 3;
G__94274.cljs$lang$applyTo = (function (arglist__94283){
var p1 = cljs.core.first(arglist__94283);
var p2 = cljs.core.first(cljs.core.next(arglist__94283));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94283)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94283)));
return G__94274__delegate.call(this, p1, p2, p3, ps);
});
return G__94274;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__94245.call(this,p1);
case  2 :
return every_pred__94246.call(this,p1,p2);
case  3 :
return every_pred__94247.call(this,p1,p2,p3);
default:
return every_pred__94248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__94248.cljs$lang$applyTo;
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
var some_fn__94323 = (function (p){
return (function() {
var sp1 = null;
var sp1__94328 = (function (){
return null;
});
var sp1__94329 = (function (x){
return p.call(null,x);
});
var sp1__94330 = (function (x,y){
var or__3548__auto____94285 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____94285))
{return or__3548__auto____94285;
} else
{return p.call(null,y);
}
});
var sp1__94331 = (function (x,y,z){
var or__3548__auto____94286 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____94286))
{return or__3548__auto____94286;
} else
{var or__3548__auto____94287 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____94287))
{return or__3548__auto____94287;
} else
{return p.call(null,z);
}
}
});
var sp1__94332 = (function() { 
var G__94334__delegate = function (x,y,z,args){
var or__3548__auto____94288 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____94288))
{return or__3548__auto____94288;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__94334 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94334__delegate.call(this, x, y, z, args);
};
G__94334.cljs$lang$maxFixedArity = 3;
G__94334.cljs$lang$applyTo = (function (arglist__94335){
var x = cljs.core.first(arglist__94335);
var y = cljs.core.first(cljs.core.next(arglist__94335));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94335)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94335)));
return G__94334__delegate.call(this, x, y, z, args);
});
return G__94334;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__94328.call(this);
case  1 :
return sp1__94329.call(this,x);
case  2 :
return sp1__94330.call(this,x,y);
case  3 :
return sp1__94331.call(this,x,y,z);
default:
return sp1__94332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__94332.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__94324 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__94336 = (function (){
return null;
});
var sp2__94337 = (function (x){
var or__3548__auto____94289 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____94289))
{return or__3548__auto____94289;
} else
{return p2.call(null,x);
}
});
var sp2__94338 = (function (x,y){
var or__3548__auto____94290 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____94290))
{return or__3548__auto____94290;
} else
{var or__3548__auto____94291 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____94291))
{return or__3548__auto____94291;
} else
{var or__3548__auto____94292 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____94292))
{return or__3548__auto____94292;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__94339 = (function (x,y,z){
var or__3548__auto____94293 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____94293))
{return or__3548__auto____94293;
} else
{var or__3548__auto____94294 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____94294))
{return or__3548__auto____94294;
} else
{var or__3548__auto____94295 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____94295))
{return or__3548__auto____94295;
} else
{var or__3548__auto____94296 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____94296))
{return or__3548__auto____94296;
} else
{var or__3548__auto____94297 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____94297))
{return or__3548__auto____94297;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__94340 = (function() { 
var G__94342__delegate = function (x,y,z,args){
var or__3548__auto____94298 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____94298))
{return or__3548__auto____94298;
} else
{return cljs.core.some.call(null,(function (p1__94201_SHARP_){
var or__3548__auto____94299 = p1.call(null,p1__94201_SHARP_);

if(cljs.core.truth_(or__3548__auto____94299))
{return or__3548__auto____94299;
} else
{return p2.call(null,p1__94201_SHARP_);
}
}),args);
}
};
var G__94342 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94342__delegate.call(this, x, y, z, args);
};
G__94342.cljs$lang$maxFixedArity = 3;
G__94342.cljs$lang$applyTo = (function (arglist__94343){
var x = cljs.core.first(arglist__94343);
var y = cljs.core.first(cljs.core.next(arglist__94343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94343)));
return G__94342__delegate.call(this, x, y, z, args);
});
return G__94342;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__94336.call(this);
case  1 :
return sp2__94337.call(this,x);
case  2 :
return sp2__94338.call(this,x,y);
case  3 :
return sp2__94339.call(this,x,y,z);
default:
return sp2__94340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__94340.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__94325 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__94344 = (function (){
return null;
});
var sp3__94345 = (function (x){
var or__3548__auto____94300 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____94300))
{return or__3548__auto____94300;
} else
{var or__3548__auto____94301 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____94301))
{return or__3548__auto____94301;
} else
{return p3.call(null,x);
}
}
});
var sp3__94346 = (function (x,y){
var or__3548__auto____94302 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____94302))
{return or__3548__auto____94302;
} else
{var or__3548__auto____94303 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____94303))
{return or__3548__auto____94303;
} else
{var or__3548__auto____94304 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____94304))
{return or__3548__auto____94304;
} else
{var or__3548__auto____94305 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____94305))
{return or__3548__auto____94305;
} else
{var or__3548__auto____94306 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____94306))
{return or__3548__auto____94306;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__94347 = (function (x,y,z){
var or__3548__auto____94307 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____94307))
{return or__3548__auto____94307;
} else
{var or__3548__auto____94308 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____94308))
{return or__3548__auto____94308;
} else
{var or__3548__auto____94309 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____94309))
{return or__3548__auto____94309;
} else
{var or__3548__auto____94310 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____94310))
{return or__3548__auto____94310;
} else
{var or__3548__auto____94311 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____94311))
{return or__3548__auto____94311;
} else
{var or__3548__auto____94312 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____94312))
{return or__3548__auto____94312;
} else
{var or__3548__auto____94313 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____94313))
{return or__3548__auto____94313;
} else
{var or__3548__auto____94314 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____94314))
{return or__3548__auto____94314;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__94348 = (function() { 
var G__94350__delegate = function (x,y,z,args){
var or__3548__auto____94315 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____94315))
{return or__3548__auto____94315;
} else
{return cljs.core.some.call(null,(function (p1__94202_SHARP_){
var or__3548__auto____94316 = p1.call(null,p1__94202_SHARP_);

if(cljs.core.truth_(or__3548__auto____94316))
{return or__3548__auto____94316;
} else
{var or__3548__auto____94317 = p2.call(null,p1__94202_SHARP_);

if(cljs.core.truth_(or__3548__auto____94317))
{return or__3548__auto____94317;
} else
{return p3.call(null,p1__94202_SHARP_);
}
}
}),args);
}
};
var G__94350 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94350__delegate.call(this, x, y, z, args);
};
G__94350.cljs$lang$maxFixedArity = 3;
G__94350.cljs$lang$applyTo = (function (arglist__94351){
var x = cljs.core.first(arglist__94351);
var y = cljs.core.first(cljs.core.next(arglist__94351));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94351)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94351)));
return G__94350__delegate.call(this, x, y, z, args);
});
return G__94350;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__94344.call(this);
case  1 :
return sp3__94345.call(this,x);
case  2 :
return sp3__94346.call(this,x,y);
case  3 :
return sp3__94347.call(this,x,y,z);
default:
return sp3__94348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__94348.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__94326 = (function() { 
var G__94352__delegate = function (p1,p2,p3,ps){
var ps__94318 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__94353 = (function (){
return null;
});
var spn__94354 = (function (x){
return cljs.core.some.call(null,(function (p1__94203_SHARP_){
return p1__94203_SHARP_.call(null,x);
}),ps__94318);
});
var spn__94355 = (function (x,y){
return cljs.core.some.call(null,(function (p1__94204_SHARP_){
var or__3548__auto____94319 = p1__94204_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____94319))
{return or__3548__auto____94319;
} else
{return p1__94204_SHARP_.call(null,y);
}
}),ps__94318);
});
var spn__94356 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__94205_SHARP_){
var or__3548__auto____94320 = p1__94205_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____94320))
{return or__3548__auto____94320;
} else
{var or__3548__auto____94321 = p1__94205_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____94321))
{return or__3548__auto____94321;
} else
{return p1__94205_SHARP_.call(null,z);
}
}
}),ps__94318);
});
var spn__94357 = (function() { 
var G__94359__delegate = function (x,y,z,args){
var or__3548__auto____94322 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____94322))
{return or__3548__auto____94322;
} else
{return cljs.core.some.call(null,(function (p1__94206_SHARP_){
return cljs.core.some.call(null,p1__94206_SHARP_,args);
}),ps__94318);
}
};
var G__94359 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94359__delegate.call(this, x, y, z, args);
};
G__94359.cljs$lang$maxFixedArity = 3;
G__94359.cljs$lang$applyTo = (function (arglist__94360){
var x = cljs.core.first(arglist__94360);
var y = cljs.core.first(cljs.core.next(arglist__94360));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94360)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94360)));
return G__94359__delegate.call(this, x, y, z, args);
});
return G__94359;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__94353.call(this);
case  1 :
return spn__94354.call(this,x);
case  2 :
return spn__94355.call(this,x,y);
case  3 :
return spn__94356.call(this,x,y,z);
default:
return spn__94357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__94357.cljs$lang$applyTo;
return spn;
})()
};
var G__94352 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94352__delegate.call(this, p1, p2, p3, ps);
};
G__94352.cljs$lang$maxFixedArity = 3;
G__94352.cljs$lang$applyTo = (function (arglist__94361){
var p1 = cljs.core.first(arglist__94361);
var p2 = cljs.core.first(cljs.core.next(arglist__94361));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94361)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94361)));
return G__94352__delegate.call(this, p1, p2, p3, ps);
});
return G__94352;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__94323.call(this,p1);
case  2 :
return some_fn__94324.call(this,p1,p2);
case  3 :
return some_fn__94325.call(this,p1,p2,p3);
default:
return some_fn__94326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__94326.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__94374 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94362 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94362))
{var s__94363 = temp__3698__auto____94362;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__94363)),map.call(null,f,cljs.core.rest.call(null,s__94363)));
} else
{return null;
}
})));
});
var map__94375 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__94364 = cljs.core.seq.call(null,c1);
var s2__94365 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____94366 = s1__94364;

if(cljs.core.truth_(and__3546__auto____94366))
{return s2__94365;
} else
{return and__3546__auto____94366;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__94364),cljs.core.first.call(null,s2__94365)),map.call(null,f,cljs.core.rest.call(null,s1__94364),cljs.core.rest.call(null,s2__94365)));
} else
{return null;
}
})));
});
var map__94376 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__94367 = cljs.core.seq.call(null,c1);
var s2__94368 = cljs.core.seq.call(null,c2);
var s3__94369 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____94370 = s1__94367;

if(cljs.core.truth_(and__3546__auto____94370))
{var and__3546__auto____94371 = s2__94368;

if(cljs.core.truth_(and__3546__auto____94371))
{return s3__94369;
} else
{return and__3546__auto____94371;
}
} else
{return and__3546__auto____94370;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__94367),cljs.core.first.call(null,s2__94368),cljs.core.first.call(null,s3__94369)),map.call(null,f,cljs.core.rest.call(null,s1__94367),cljs.core.rest.call(null,s2__94368),cljs.core.rest.call(null,s3__94369)));
} else
{return null;
}
})));
});
var map__94377 = (function() { 
var G__94379__delegate = function (f,c1,c2,c3,colls){
var step__94373 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__94372 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__94372)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__94372),step.call(null,map.call(null,cljs.core.rest,ss__94372)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__94284_SHARP_){
return cljs.core.apply.call(null,f,p1__94284_SHARP_);
}),step__94373.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__94379 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__94379__delegate.call(this, f, c1, c2, c3, colls);
};
G__94379.cljs$lang$maxFixedArity = 4;
G__94379.cljs$lang$applyTo = (function (arglist__94380){
var f = cljs.core.first(arglist__94380);
var c1 = cljs.core.first(cljs.core.next(arglist__94380));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94380)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94380))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94380))));
return G__94379__delegate.call(this, f, c1, c2, c3, colls);
});
return G__94379;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__94374.call(this,f,c1);
case  3 :
return map__94375.call(this,f,c1,c2);
case  4 :
return map__94376.call(this,f,c1,c2,c3);
default:
return map__94377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__94377.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____94381 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94381))
{var s__94382 = temp__3698__auto____94381;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__94382),take.call(null,(n - 1),cljs.core.rest.call(null,s__94382)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__94385 = (function (n,coll){
while(true){
var s__94383 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____94384 = (n > 0);

if(cljs.core.truth_(and__3546__auto____94384))
{return s__94383;
} else
{return and__3546__auto____94384;
}
})()))
{{
var G__94386 = (n - 1);
var G__94387 = cljs.core.rest.call(null,s__94383);
n = G__94386;
coll = G__94387;
continue;
}
} else
{return s__94383;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__94385.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__94388 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__94389 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__94388.call(this,n);
case  2 :
return drop_last__94389.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__94391 = cljs.core.seq.call(null,coll);
var lead__94392 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__94392))
{{
var G__94393 = cljs.core.next.call(null,s__94391);
var G__94394 = cljs.core.next.call(null,lead__94392);
s__94391 = G__94393;
lead__94392 = G__94394;
continue;
}
} else
{return s__94391;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__94397 = (function (pred,coll){
while(true){
var s__94395 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____94396 = s__94395;

if(cljs.core.truth_(and__3546__auto____94396))
{return pred.call(null,cljs.core.first.call(null,s__94395));
} else
{return and__3546__auto____94396;
}
})()))
{{
var G__94398 = pred;
var G__94399 = cljs.core.rest.call(null,s__94395);
pred = G__94398;
coll = G__94399;
continue;
}
} else
{return s__94395;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__94397.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94400 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94400))
{var s__94401 = temp__3698__auto____94400;

return cljs.core.concat.call(null,s__94401,cycle.call(null,s__94401));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__94402 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__94403 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__94402.call(this,n);
case  2 :
return repeat__94403.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__94405 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__94406 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__94405.call(this,n);
case  2 :
return repeatedly__94406.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__94412 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__94408 = cljs.core.seq.call(null,c1);
var s2__94409 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____94410 = s1__94408;

if(cljs.core.truth_(and__3546__auto____94410))
{return s2__94409;
} else
{return and__3546__auto____94410;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__94408),cljs.core.cons.call(null,cljs.core.first.call(null,s2__94409),interleave.call(null,cljs.core.rest.call(null,s1__94408),cljs.core.rest.call(null,s2__94409))));
} else
{return null;
}
})));
});
var interleave__94413 = (function() { 
var G__94415__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__94411 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__94411)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__94411),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__94411)));
} else
{return null;
}
})));
};
var G__94415 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__94415__delegate.call(this, c1, c2, colls);
};
G__94415.cljs$lang$maxFixedArity = 2;
G__94415.cljs$lang$applyTo = (function (arglist__94416){
var c1 = cljs.core.first(arglist__94416);
var c2 = cljs.core.first(cljs.core.next(arglist__94416));
var colls = cljs.core.rest(cljs.core.next(arglist__94416));
return G__94415__delegate.call(this, c1, c2, colls);
});
return G__94415;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__94412.call(this,c1,c2);
default:
return interleave__94413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__94413.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__94419 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____94417 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____94417))
{var coll__94418 = temp__3695__auto____94417;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__94418),cat.call(null,cljs.core.rest.call(null,coll__94418),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__94419.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__94420 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__94421 = (function() { 
var G__94423__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__94423 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__94423__delegate.call(this, f, coll, colls);
};
G__94423.cljs$lang$maxFixedArity = 2;
G__94423.cljs$lang$applyTo = (function (arglist__94424){
var f = cljs.core.first(arglist__94424);
var coll = cljs.core.first(cljs.core.next(arglist__94424));
var colls = cljs.core.rest(cljs.core.next(arglist__94424));
return G__94423__delegate.call(this, f, coll, colls);
});
return G__94423;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__94420.call(this,f,coll);
default:
return mapcat__94421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__94421.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94425 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94425))
{var s__94426 = temp__3698__auto____94425;

var f__94427 = cljs.core.first.call(null,s__94426);
var r__94428 = cljs.core.rest.call(null,s__94426);

if(cljs.core.truth_(pred.call(null,f__94427)))
{return cljs.core.cons.call(null,f__94427,filter.call(null,pred,r__94428));
} else
{return filter.call(null,pred,r__94428);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__94430 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__94430.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__94429_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__94429_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
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
var partition__94437 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__94438 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94431 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94431))
{var s__94432 = temp__3698__auto____94431;

var p__94433 = cljs.core.take.call(null,n,s__94432);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__94433))))
{return cljs.core.cons.call(null,p__94433,partition.call(null,n,step,cljs.core.drop.call(null,step,s__94432)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__94439 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94434 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94434))
{var s__94435 = temp__3698__auto____94434;

var p__94436 = cljs.core.take.call(null,n,s__94435);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__94436))))
{return cljs.core.cons.call(null,p__94436,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__94435)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__94436,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__94437.call(this,n,step);
case  3 :
return partition__94438.call(this,n,step,pad);
case  4 :
return partition__94439.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__94445 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__94446 = (function (m,ks,not_found){
var sentinel__94441 = cljs.core.lookup_sentinel;
var m__94442 = m;
var ks__94443 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__94443))
{var m__94444 = cljs.core.get.call(null,m__94442,cljs.core.first.call(null,ks__94443),sentinel__94441);

if(cljs.core.truth_((sentinel__94441 === m__94444)))
{return not_found;
} else
{{
var G__94448 = sentinel__94441;
var G__94449 = m__94444;
var G__94450 = cljs.core.next.call(null,ks__94443);
sentinel__94441 = G__94448;
m__94442 = G__94449;
ks__94443 = G__94450;
continue;
}
}
} else
{return m__94442;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__94445.call(this,m,ks);
case  3 :
return get_in__94446.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__94451,v){
var vec__94452__94453 = p__94451;
var k__94454 = cljs.core.nth.call(null,vec__94452__94453,0,null);
var ks__94455 = cljs.core.nthnext.call(null,vec__94452__94453,1);

if(cljs.core.truth_(ks__94455))
{return cljs.core.assoc.call(null,m,k__94454,assoc_in.call(null,cljs.core.get.call(null,m,k__94454),ks__94455,v));
} else
{return cljs.core.assoc.call(null,m,k__94454,v);
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
var update_in__delegate = function (m,p__94456,f,args){
var vec__94457__94458 = p__94456;
var k__94459 = cljs.core.nth.call(null,vec__94457__94458,0,null);
var ks__94460 = cljs.core.nthnext.call(null,vec__94457__94458,1);

if(cljs.core.truth_(ks__94460))
{return cljs.core.assoc.call(null,m,k__94459,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__94459),ks__94460,f,args));
} else
{return cljs.core.assoc.call(null,m,k__94459,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__94459),args));
}
};
var update_in = function (m,p__94456,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__94456, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__94461){
var m = cljs.core.first(arglist__94461);
var p__94456 = cljs.core.first(cljs.core.next(arglist__94461));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94461)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94461)));
return update_in__delegate.call(this, m, p__94456, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94462 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__94489 = null;
var G__94489__94490 = (function (coll,k){
var this__94463 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__94489__94491 = (function (coll,k,not_found){
var this__94464 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__94489 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94489__94490.call(this,coll,k);
case  3 :
return G__94489__94491.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94489;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__94465 = this;
var new_array__94466 = cljs.core.aclone.call(null,this__94465.array);

(new_array__94466[k] = v);
return (new cljs.core.Vector(this__94465.meta,new_array__94466));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__94493 = null;
var G__94493__94494 = (function (coll,k){
var this__94467 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__94493__94495 = (function (coll,k,not_found){
var this__94468 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__94493 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94493__94494.call(this,coll,k);
case  3 :
return G__94493__94495.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94493;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94469 = this;
var new_array__94470 = cljs.core.aclone.call(null,this__94469.array);

new_array__94470.push(o);
return (new cljs.core.Vector(this__94469.meta,new_array__94470));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__94497 = null;
var G__94497__94498 = (function (v,f){
var this__94471 = this;
return cljs.core.ci_reduce.call(null,this__94471.array,f);
});
var G__94497__94499 = (function (v,f,start){
var this__94472 = this;
return cljs.core.ci_reduce.call(null,this__94472.array,f,start);
});
G__94497 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__94497__94498.call(this,v,f);
case  3 :
return G__94497__94499.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94497;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94473 = this;
if(cljs.core.truth_((this__94473.array.length > 0)))
{var vector_seq__94474 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__94473.array.length)))
{return cljs.core.cons.call(null,(this__94473.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__94474.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__94475 = this;
return this__94475.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__94476 = this;
var count__94477 = this__94476.array.length;

if(cljs.core.truth_((count__94477 > 0)))
{return (this__94476.array[(count__94477 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__94478 = this;
if(cljs.core.truth_((this__94478.array.length > 0)))
{var new_array__94479 = cljs.core.aclone.call(null,this__94478.array);

new_array__94479.pop();
return (new cljs.core.Vector(this__94478.meta,new_array__94479));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__94480 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94481 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94482 = this;
return (new cljs.core.Vector(meta,this__94482.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94483 = this;
return this__94483.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__94501 = null;
var G__94501__94502 = (function (coll,n){
var this__94484 = this;
if(cljs.core.truth_((function (){var and__3546__auto____94485 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____94485))
{return (n < this__94484.array.length);
} else
{return and__3546__auto____94485;
}
})()))
{return (this__94484.array[n]);
} else
{return null;
}
});
var G__94501__94503 = (function (coll,n,not_found){
var this__94486 = this;
if(cljs.core.truth_((function (){var and__3546__auto____94487 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____94487))
{return (n < this__94486.array.length);
} else
{return and__3546__auto____94487;
}
})()))
{return (this__94486.array[n]);
} else
{return not_found;
}
});
G__94501 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__94501__94502.call(this,coll,n);
case  3 :
return G__94501__94503.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94501;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94488 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__94488.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__94505){
var args = cljs.core.seq( arglist__94505 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94506 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__94528 = null;
var G__94528__94529 = (function (coll,k){
var this__94507 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__94528__94530 = (function (coll,k,not_found){
var this__94508 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__94528 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94528__94529.call(this,coll,k);
case  3 :
return G__94528__94530.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94528;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__94509 = this;
var v_pos__94510 = (this__94509.start + key);

return (new cljs.core.Subvec(this__94509.meta,cljs.core._assoc.call(null,this__94509.v,v_pos__94510,val),this__94509.start,((this__94509.end > (v_pos__94510 + 1)) ? this__94509.end : (v_pos__94510 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__94532 = null;
var G__94532__94533 = (function (coll,k){
var this__94511 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__94532__94534 = (function (coll,k,not_found){
var this__94512 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__94532 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94532__94533.call(this,coll,k);
case  3 :
return G__94532__94534.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94532;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94513 = this;
return (new cljs.core.Subvec(this__94513.meta,cljs.core._assoc_n.call(null,this__94513.v,this__94513.end,o),this__94513.start,(this__94513.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__94536 = null;
var G__94536__94537 = (function (coll,f){
var this__94514 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__94536__94538 = (function (coll,f,start){
var this__94515 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__94536 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__94536__94537.call(this,coll,f);
case  3 :
return G__94536__94538.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94536;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94516 = this;
var subvec_seq__94517 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__94516.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__94516.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__94517.call(null,this__94516.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__94518 = this;
return (this__94518.end - this__94518.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__94519 = this;
return cljs.core._nth.call(null,this__94519.v,(this__94519.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__94520 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__94520.start,this__94520.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__94520.meta,this__94520.v,this__94520.start,(this__94520.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__94521 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94522 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94523 = this;
return (new cljs.core.Subvec(meta,this__94523.v,this__94523.start,this__94523.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94524 = this;
return this__94524.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__94540 = null;
var G__94540__94541 = (function (coll,n){
var this__94525 = this;
return cljs.core._nth.call(null,this__94525.v,(this__94525.start + n));
});
var G__94540__94542 = (function (coll,n,not_found){
var this__94526 = this;
return cljs.core._nth.call(null,this__94526.v,(this__94526.start + n),not_found);
});
G__94540 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__94540__94541.call(this,coll,n);
case  3 :
return G__94540__94542.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94540;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94527 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__94527.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__94544 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__94545 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__94544.call(this,v,start);
case  3 :
return subvec__94545.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94547 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94548 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94549 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94550 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__94550.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94551 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__94552 = this;
return cljs.core._first.call(null,this__94552.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__94553 = this;
var temp__3695__auto____94554 = cljs.core.next.call(null,this__94553.front);

if(cljs.core.truth_(temp__3695__auto____94554))
{var f1__94555 = temp__3695__auto____94554;

return (new cljs.core.PersistentQueueSeq(this__94553.meta,f1__94555,this__94553.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__94553.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__94553.meta,this__94553.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94556 = this;
return this__94556.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94557 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__94557.front,this__94557.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94558 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94559 = this;
if(cljs.core.truth_(this__94559.front))
{return (new cljs.core.PersistentQueue(this__94559.meta,(this__94559.count + 1),this__94559.front,cljs.core.conj.call(null,(function (){var or__3548__auto____94560 = this__94559.rear;

if(cljs.core.truth_(or__3548__auto____94560))
{return or__3548__auto____94560;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__94559.meta,(this__94559.count + 1),cljs.core.conj.call(null,this__94559.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94561 = this;
var rear__94562 = cljs.core.seq.call(null,this__94561.rear);

if(cljs.core.truth_((function (){var or__3548__auto____94563 = this__94561.front;

if(cljs.core.truth_(or__3548__auto____94563))
{return or__3548__auto____94563;
} else
{return rear__94562;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__94561.front,cljs.core.seq.call(null,rear__94562)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__94564 = this;
return this__94564.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__94565 = this;
return cljs.core._first.call(null,this__94565.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__94566 = this;
if(cljs.core.truth_(this__94566.front))
{var temp__3695__auto____94567 = cljs.core.next.call(null,this__94566.front);

if(cljs.core.truth_(temp__3695__auto____94567))
{var f1__94568 = temp__3695__auto____94567;

return (new cljs.core.PersistentQueue(this__94566.meta,(this__94566.count - 1),f1__94568,this__94566.rear));
} else
{return (new cljs.core.PersistentQueue(this__94566.meta,(this__94566.count - 1),cljs.core.seq.call(null,this__94566.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__94569 = this;
return cljs.core.first.call(null,this__94569.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__94570 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94571 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94572 = this;
return (new cljs.core.PersistentQueue(meta,this__94572.count,this__94572.front,this__94572.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94573 = this;
return this__94573.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94574 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__94575 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__94576 = array.length;

var i__94577 = 0;

while(true){
if(cljs.core.truth_((i__94577 < len__94576)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__94577]))))
{return i__94577;
} else
{{
var G__94578 = (i__94577 + incr);
i__94577 = G__94578;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___94580 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___94581 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____94579 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____94579))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____94579;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___94580.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___94581.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94584 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__94605 = null;
var G__94605__94606 = (function (coll,k){
var this__94585 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__94605__94607 = (function (coll,k,not_found){
var this__94586 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__94586.strobj,(this__94586.strobj[k]),not_found);
});
G__94605 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94605__94606.call(this,coll,k);
case  3 :
return G__94605__94607.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94605;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__94587 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__94588 = goog.object.clone.call(null,this__94587.strobj);
var overwrite_QMARK___94589 = new_strobj__94588.hasOwnProperty(k);

(new_strobj__94588[k] = v);
if(cljs.core.truth_(overwrite_QMARK___94589))
{return (new cljs.core.ObjMap(this__94587.meta,this__94587.keys,new_strobj__94588));
} else
{var new_keys__94590 = cljs.core.aclone.call(null,this__94587.keys);

new_keys__94590.push(k);
return (new cljs.core.ObjMap(this__94587.meta,new_keys__94590,new_strobj__94588));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__94587.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__94591 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__94591.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__94609 = null;
var G__94609__94610 = (function (coll,k){
var this__94592 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__94609__94611 = (function (coll,k,not_found){
var this__94593 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__94609 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94609__94610.call(this,coll,k);
case  3 :
return G__94609__94611.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94609;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__94594 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94595 = this;
if(cljs.core.truth_((this__94595.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__94583_SHARP_){
return cljs.core.vector.call(null,p1__94583_SHARP_,(this__94595.strobj[p1__94583_SHARP_]));
}),this__94595.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__94596 = this;
return this__94596.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94597 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94598 = this;
return (new cljs.core.ObjMap(meta,this__94598.keys,this__94598.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94599 = this;
return this__94599.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94600 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__94600.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__94601 = this;
if(cljs.core.truth_((function (){var and__3546__auto____94602 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____94602))
{return this__94601.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____94602;
}
})()))
{var new_keys__94603 = cljs.core.aclone.call(null,this__94601.keys);
var new_strobj__94604 = goog.object.clone.call(null,this__94601.strobj);

new_keys__94603.splice(cljs.core.scan_array.call(null,1,k,new_keys__94603),1);
cljs.core.js_delete.call(null,new_strobj__94604,k);
return (new cljs.core.ObjMap(this__94601.meta,new_keys__94603,new_strobj__94604));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94614 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__94646 = null;
var G__94646__94647 = (function (coll,k){
var this__94615 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__94646__94648 = (function (coll,k,not_found){
var this__94616 = this;
var bucket__94617 = (this__94616.hashobj[cljs.core.hash.call(null,k)]);
var i__94618 = (cljs.core.truth_(bucket__94617)?cljs.core.scan_array.call(null,2,k,bucket__94617):null);

if(cljs.core.truth_(i__94618))
{return (bucket__94617[(i__94618 + 1)]);
} else
{return not_found;
}
});
G__94646 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94646__94647.call(this,coll,k);
case  3 :
return G__94646__94648.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94646;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__94619 = this;
var h__94620 = cljs.core.hash.call(null,k);
var bucket__94621 = (this__94619.hashobj[h__94620]);

if(cljs.core.truth_(bucket__94621))
{var new_bucket__94622 = cljs.core.aclone.call(null,bucket__94621);
var new_hashobj__94623 = goog.object.clone.call(null,this__94619.hashobj);

(new_hashobj__94623[h__94620] = new_bucket__94622);
var temp__3695__auto____94624 = cljs.core.scan_array.call(null,2,k,new_bucket__94622);

if(cljs.core.truth_(temp__3695__auto____94624))
{var i__94625 = temp__3695__auto____94624;

(new_bucket__94622[(i__94625 + 1)] = v);
return (new cljs.core.HashMap(this__94619.meta,this__94619.count,new_hashobj__94623));
} else
{new_bucket__94622.push(k,v);
return (new cljs.core.HashMap(this__94619.meta,(this__94619.count + 1),new_hashobj__94623));
}
} else
{var new_hashobj__94626 = goog.object.clone.call(null,this__94619.hashobj);

(new_hashobj__94626[h__94620] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__94619.meta,(this__94619.count + 1),new_hashobj__94626));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__94627 = this;
var bucket__94628 = (this__94627.hashobj[cljs.core.hash.call(null,k)]);
var i__94629 = (cljs.core.truth_(bucket__94628)?cljs.core.scan_array.call(null,2,k,bucket__94628):null);

if(cljs.core.truth_(i__94629))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__94650 = null;
var G__94650__94651 = (function (coll,k){
var this__94630 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__94650__94652 = (function (coll,k,not_found){
var this__94631 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__94650 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94650__94651.call(this,coll,k);
case  3 :
return G__94650__94652.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94650;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__94632 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94633 = this;
if(cljs.core.truth_((this__94633.count > 0)))
{var hashes__94634 = cljs.core.js_keys.call(null,this__94633.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__94613_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__94633.hashobj[p1__94613_SHARP_])));
}),hashes__94634);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__94635 = this;
return this__94635.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94636 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94637 = this;
return (new cljs.core.HashMap(meta,this__94637.count,this__94637.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94638 = this;
return this__94638.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94639 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__94639.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__94640 = this;
var h__94641 = cljs.core.hash.call(null,k);
var bucket__94642 = (this__94640.hashobj[h__94641]);
var i__94643 = (cljs.core.truth_(bucket__94642)?cljs.core.scan_array.call(null,2,k,bucket__94642):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__94643)))
{return coll;
} else
{var new_hashobj__94644 = goog.object.clone.call(null,this__94640.hashobj);

if(cljs.core.truth_((3 > bucket__94642.length)))
{cljs.core.js_delete.call(null,new_hashobj__94644,h__94641);
} else
{var new_bucket__94645 = cljs.core.aclone.call(null,bucket__94642);

new_bucket__94645.splice(i__94643,2);
(new_hashobj__94644[h__94641] = new_bucket__94645);
}
return (new cljs.core.HashMap(this__94640.meta,(this__94640.count - 1),new_hashobj__94644));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__94654 = ks.length;

var i__94655 = 0;
var out__94656 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__94655 < len__94654)))
{{
var G__94657 = (i__94655 + 1);
var G__94658 = cljs.core.assoc.call(null,out__94656,(ks[i__94655]),(vs[i__94655]));
i__94655 = G__94657;
out__94656 = G__94658;
continue;
}
} else
{return out__94656;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__94659 = cljs.core.seq.call(null,keyvals);
var out__94660 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__94659))
{{
var G__94661 = cljs.core.nnext.call(null,in$__94659);
var G__94662 = cljs.core.assoc.call(null,out__94660,cljs.core.first.call(null,in$__94659),cljs.core.second.call(null,in$__94659));
in$__94659 = G__94661;
out__94660 = G__94662;
continue;
}
} else
{return out__94660;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__94663){
var keyvals = cljs.core.seq( arglist__94663 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__94664_SHARP_,p2__94665_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____94666 = p1__94664_SHARP_;

if(cljs.core.truth_(or__3548__auto____94666))
{return or__3548__auto____94666;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__94665_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__94667){
var maps = cljs.core.seq( arglist__94667 );;
return merge__delegate.call(this, maps);
});
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
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__94670 = (function (m,e){
var k__94668 = cljs.core.first.call(null,e);
var v__94669 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__94668)))
{return cljs.core.assoc.call(null,m,k__94668,f.call(null,cljs.core.get.call(null,m,k__94668),v__94669));
} else
{return cljs.core.assoc.call(null,m,k__94668,v__94669);
}
});
var merge2__94672 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__94670,(function (){var or__3548__auto____94671 = m1;

if(cljs.core.truth_(or__3548__auto____94671))
{return or__3548__auto____94671;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__94672,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__94673){
var f = cljs.core.first(arglist__94673);
var maps = cljs.core.rest(arglist__94673);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__94675 = cljs.core.ObjMap.fromObject([],{});
var keys__94676 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__94676))
{var key__94677 = cljs.core.first.call(null,keys__94676);
var entry__94678 = cljs.core.get.call(null,map,key__94677,"﷐'user/not-found");

{
var G__94679 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__94678,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__94675,key__94677,entry__94678):ret__94675);
var G__94680 = cljs.core.next.call(null,keys__94676);
ret__94675 = G__94679;
keys__94676 = G__94680;
continue;
}
} else
{return ret__94675;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__94681 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__94696 = null;
var G__94696__94697 = (function (coll,v){
var this__94682 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__94696__94698 = (function (coll,v,not_found){
var this__94683 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__94683.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__94696 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__94696__94697.call(this,coll,v);
case  3 :
return G__94696__94698.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94696;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__94700 = null;
var G__94700__94701 = (function (coll,k){
var this__94684 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__94700__94702 = (function (coll,k,not_found){
var this__94685 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__94700 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__94700__94701.call(this,coll,k);
case  3 :
return G__94700__94702.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94700;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__94686 = this;
return (new cljs.core.Set(this__94686.meta,cljs.core.assoc.call(null,this__94686.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__94687 = this;
return cljs.core.keys.call(null,this__94687.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__94688 = this;
return (new cljs.core.Set(this__94688.meta,cljs.core.dissoc.call(null,this__94688.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__94689 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__94690 = this;
var and__3546__auto____94691 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____94691))
{var and__3546__auto____94692 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____94692))
{return cljs.core.every_QMARK_.call(null,(function (p1__94674_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__94674_SHARP_);
}),other);
} else
{return and__3546__auto____94692;
}
} else
{return and__3546__auto____94691;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__94693 = this;
return (new cljs.core.Set(meta,this__94693.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__94694 = this;
return this__94694.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__94695 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__94695.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__94705 = cljs.core.seq.call(null,coll);
var out__94706 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__94705))))
{{
var G__94707 = cljs.core.rest.call(null,in$__94705);
var G__94708 = cljs.core.conj.call(null,out__94706,cljs.core.first.call(null,in$__94705));
in$__94705 = G__94707;
out__94706 = G__94708;
continue;
}
} else
{return out__94706;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__94709 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____94710 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____94710))
{var e__94711 = temp__3695__auto____94710;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__94711));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__94709,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__94704_SHARP_){
var temp__3695__auto____94712 = cljs.core.find.call(null,smap,p1__94704_SHARP_);

if(cljs.core.truth_(temp__3695__auto____94712))
{var e__94713 = temp__3695__auto____94712;

return cljs.core.second.call(null,e__94713);
} else
{return p1__94704_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__94721 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__94714,seen){
while(true){
var vec__94715__94716 = p__94714;
var f__94717 = cljs.core.nth.call(null,vec__94715__94716,0,null);
var xs__94718 = vec__94715__94716;

var temp__3698__auto____94719 = cljs.core.seq.call(null,xs__94718);

if(cljs.core.truth_(temp__3698__auto____94719))
{var s__94720 = temp__3698__auto____94719;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__94717)))
{{
var G__94722 = cljs.core.rest.call(null,s__94720);
var G__94723 = seen;
p__94714 = G__94722;
seen = G__94723;
continue;
}
} else
{return cljs.core.cons.call(null,f__94717,step.call(null,cljs.core.rest.call(null,s__94720),cljs.core.conj.call(null,seen,f__94717)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__94721.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__94724 = cljs.core.Vector.fromArray([]);
var s__94725 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__94725)))
{{
var G__94726 = cljs.core.conj.call(null,ret__94724,cljs.core.first.call(null,s__94725));
var G__94727 = cljs.core.next.call(null,s__94725);
ret__94724 = G__94726;
s__94725 = G__94727;
continue;
}
} else
{return cljs.core.seq.call(null,ret__94724);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____94728 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____94728))
{return or__3548__auto____94728;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__94729 = x.lastIndexOf("/");

if(cljs.core.truth_((i__94729 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__94729 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____94730 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____94730))
{return or__3548__auto____94730;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__94731 = x.lastIndexOf("/");

if(cljs.core.truth_((i__94731 > -1)))
{return cljs.core.subs.call(null,x,2,i__94731);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__94734 = cljs.core.ObjMap.fromObject([],{});
var ks__94735 = cljs.core.seq.call(null,keys);
var vs__94736 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____94737 = ks__94735;

if(cljs.core.truth_(and__3546__auto____94737))
{return vs__94736;
} else
{return and__3546__auto____94737;
}
})()))
{{
var G__94738 = cljs.core.assoc.call(null,map__94734,cljs.core.first.call(null,ks__94735),cljs.core.first.call(null,vs__94736));
var G__94739 = cljs.core.next.call(null,ks__94735);
var G__94740 = cljs.core.next.call(null,vs__94736);
map__94734 = G__94738;
ks__94735 = G__94739;
vs__94736 = G__94740;
continue;
}
} else
{return map__94734;
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
var max_key__94743 = (function (k,x){
return x;
});
var max_key__94744 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__94745 = (function() { 
var G__94747__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__94732_SHARP_,p2__94733_SHARP_){
return max_key.call(null,k,p1__94732_SHARP_,p2__94733_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__94747 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94747__delegate.call(this, k, x, y, more);
};
G__94747.cljs$lang$maxFixedArity = 3;
G__94747.cljs$lang$applyTo = (function (arglist__94748){
var k = cljs.core.first(arglist__94748);
var x = cljs.core.first(cljs.core.next(arglist__94748));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94748)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94748)));
return G__94747__delegate.call(this, k, x, y, more);
});
return G__94747;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__94743.call(this,k,x);
case  3 :
return max_key__94744.call(this,k,x,y);
default:
return max_key__94745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__94745.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__94749 = (function (k,x){
return x;
});
var min_key__94750 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__94751 = (function() { 
var G__94753__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__94741_SHARP_,p2__94742_SHARP_){
return min_key.call(null,k,p1__94741_SHARP_,p2__94742_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__94753 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94753__delegate.call(this, k, x, y, more);
};
G__94753.cljs$lang$maxFixedArity = 3;
G__94753.cljs$lang$applyTo = (function (arglist__94754){
var k = cljs.core.first(arglist__94754);
var x = cljs.core.first(cljs.core.next(arglist__94754));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94754)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94754)));
return G__94753__delegate.call(this, k, x, y, more);
});
return G__94753;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__94749.call(this,k,x);
case  3 :
return min_key__94750.call(this,k,x,y);
default:
return min_key__94751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__94751.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__94757 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__94758 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94755 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94755))
{var s__94756 = temp__3698__auto____94755;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__94756),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__94756)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__94757.call(this,n,step);
case  3 :
return partition_all__94758.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94760))
{var s__94761 = temp__3698__auto____94760;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__94761))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__94761),take_while.call(null,pred,cljs.core.rest.call(null,s__94761)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__94762 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__94763 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__94779 = null;
var G__94779__94780 = (function (rng,f){
var this__94764 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__94779__94781 = (function (rng,f,s){
var this__94765 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__94779 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__94779__94780.call(this,rng,f);
case  3 :
return G__94779__94781.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94779;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__94766 = this;
var comp__94767 = (cljs.core.truth_((this__94766.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__94767.call(null,this__94766.start,this__94766.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__94768 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__94768.end - this__94768.start) / this__94768.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__94769 = this;
return this__94769.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__94770 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__94770.meta,(this__94770.start + this__94770.step),this__94770.end,this__94770.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__94771 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__94772 = this;
return (new cljs.core.Range(meta,this__94772.start,this__94772.end,this__94772.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__94773 = this;
return this__94773.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__94783 = null;
var G__94783__94784 = (function (rng,n){
var this__94774 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__94774.start + (n * this__94774.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____94775 = (this__94774.start > this__94774.end);

if(cljs.core.truth_(and__3546__auto____94775))
{return cljs.core._EQ_.call(null,this__94774.step,0);
} else
{return and__3546__auto____94775;
}
})()))
{return this__94774.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__94783__94785 = (function (rng,n,not_found){
var this__94776 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__94776.start + (n * this__94776.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____94777 = (this__94776.start > this__94776.end);

if(cljs.core.truth_(and__3546__auto____94777))
{return cljs.core._EQ_.call(null,this__94776.step,0);
} else
{return and__3546__auto____94777;
}
})()))
{return this__94776.start;
} else
{return not_found;
}
}
});
G__94783 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__94783__94784.call(this,rng,n);
case  3 :
return G__94783__94785.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__94783;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__94778 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__94778.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__94787 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__94788 = (function (end){
return range.call(null,0,end,1);
});
var range__94789 = (function (start,end){
return range.call(null,start,end,1);
});
var range__94790 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__94787.call(this);
case  1 :
return range__94788.call(this,start);
case  2 :
return range__94789.call(this,start,end);
case  3 :
return range__94790.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94792 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94792))
{var s__94793 = temp__3698__auto____94792;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__94793),take_nth.call(null,n,cljs.core.drop.call(null,n,s__94793)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94795 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94795))
{var s__94796 = temp__3698__auto____94795;

var fst__94797 = cljs.core.first.call(null,s__94796);
var fv__94798 = f.call(null,fst__94797);
var run__94799 = cljs.core.cons.call(null,fst__94797,cljs.core.take_while.call(null,(function (p1__94794_SHARP_){
return cljs.core._EQ_.call(null,fv__94798,f.call(null,p1__94794_SHARP_));
}),cljs.core.next.call(null,s__94796)));

return cljs.core.cons.call(null,run__94799,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__94799),s__94796))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__94814 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____94810 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____94810))
{var s__94811 = temp__3695__auto____94810;

return reductions.call(null,f,cljs.core.first.call(null,s__94811),cljs.core.rest.call(null,s__94811));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__94815 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____94812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____94812))
{var s__94813 = temp__3698__auto____94812;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__94813)),cljs.core.rest.call(null,s__94813));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__94814.call(this,f,init);
case  3 :
return reductions__94815.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var juxt__94818 = (function (f){
return (function() {
var G__94823 = null;
var G__94823__94824 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__94823__94825 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__94823__94826 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__94823__94827 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__94823__94828 = (function() { 
var G__94830__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__94830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94830__delegate.call(this, x, y, z, args);
};
G__94830.cljs$lang$maxFixedArity = 3;
G__94830.cljs$lang$applyTo = (function (arglist__94831){
var x = cljs.core.first(arglist__94831);
var y = cljs.core.first(cljs.core.next(arglist__94831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94831)));
return G__94830__delegate.call(this, x, y, z, args);
});
return G__94830;
})()
;
G__94823 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__94823__94824.call(this);
case  1 :
return G__94823__94825.call(this,x);
case  2 :
return G__94823__94826.call(this,x,y);
case  3 :
return G__94823__94827.call(this,x,y,z);
default:
return G__94823__94828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94823.cljs$lang$maxFixedArity = 3;
G__94823.cljs$lang$applyTo = G__94823__94828.cljs$lang$applyTo;
return G__94823;
})()
});
var juxt__94819 = (function (f,g){
return (function() {
var G__94832 = null;
var G__94832__94833 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__94832__94834 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__94832__94835 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__94832__94836 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__94832__94837 = (function() { 
var G__94839__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__94839 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94839__delegate.call(this, x, y, z, args);
};
G__94839.cljs$lang$maxFixedArity = 3;
G__94839.cljs$lang$applyTo = (function (arglist__94840){
var x = cljs.core.first(arglist__94840);
var y = cljs.core.first(cljs.core.next(arglist__94840));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94840)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94840)));
return G__94839__delegate.call(this, x, y, z, args);
});
return G__94839;
})()
;
G__94832 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__94832__94833.call(this);
case  1 :
return G__94832__94834.call(this,x);
case  2 :
return G__94832__94835.call(this,x,y);
case  3 :
return G__94832__94836.call(this,x,y,z);
default:
return G__94832__94837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94832.cljs$lang$maxFixedArity = 3;
G__94832.cljs$lang$applyTo = G__94832__94837.cljs$lang$applyTo;
return G__94832;
})()
});
var juxt__94820 = (function (f,g,h){
return (function() {
var G__94841 = null;
var G__94841__94842 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__94841__94843 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__94841__94844 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__94841__94845 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__94841__94846 = (function() { 
var G__94848__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__94848 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94848__delegate.call(this, x, y, z, args);
};
G__94848.cljs$lang$maxFixedArity = 3;
G__94848.cljs$lang$applyTo = (function (arglist__94849){
var x = cljs.core.first(arglist__94849);
var y = cljs.core.first(cljs.core.next(arglist__94849));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94849)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94849)));
return G__94848__delegate.call(this, x, y, z, args);
});
return G__94848;
})()
;
G__94841 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__94841__94842.call(this);
case  1 :
return G__94841__94843.call(this,x);
case  2 :
return G__94841__94844.call(this,x,y);
case  3 :
return G__94841__94845.call(this,x,y,z);
default:
return G__94841__94846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94841.cljs$lang$maxFixedArity = 3;
G__94841.cljs$lang$applyTo = G__94841__94846.cljs$lang$applyTo;
return G__94841;
})()
});
var juxt__94821 = (function() { 
var G__94850__delegate = function (f,g,h,fs){
var fs__94817 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__94851 = null;
var G__94851__94852 = (function (){
return cljs.core.reduce.call(null,(function (p1__94800_SHARP_,p2__94801_SHARP_){
return cljs.core.conj.call(null,p1__94800_SHARP_,p2__94801_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__94817);
});
var G__94851__94853 = (function (x){
return cljs.core.reduce.call(null,(function (p1__94802_SHARP_,p2__94803_SHARP_){
return cljs.core.conj.call(null,p1__94802_SHARP_,p2__94803_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__94817);
});
var G__94851__94854 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__94804_SHARP_,p2__94805_SHARP_){
return cljs.core.conj.call(null,p1__94804_SHARP_,p2__94805_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__94817);
});
var G__94851__94855 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__94806_SHARP_,p2__94807_SHARP_){
return cljs.core.conj.call(null,p1__94806_SHARP_,p2__94807_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__94817);
});
var G__94851__94856 = (function() { 
var G__94858__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__94808_SHARP_,p2__94809_SHARP_){
return cljs.core.conj.call(null,p1__94808_SHARP_,cljs.core.apply.call(null,p2__94809_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__94817);
};
var G__94858 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94858__delegate.call(this, x, y, z, args);
};
G__94858.cljs$lang$maxFixedArity = 3;
G__94858.cljs$lang$applyTo = (function (arglist__94859){
var x = cljs.core.first(arglist__94859);
var y = cljs.core.first(cljs.core.next(arglist__94859));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94859)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94859)));
return G__94858__delegate.call(this, x, y, z, args);
});
return G__94858;
})()
;
G__94851 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__94851__94852.call(this);
case  1 :
return G__94851__94853.call(this,x);
case  2 :
return G__94851__94854.call(this,x,y);
case  3 :
return G__94851__94855.call(this,x,y,z);
default:
return G__94851__94856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__94851.cljs$lang$maxFixedArity = 3;
G__94851.cljs$lang$applyTo = G__94851__94856.cljs$lang$applyTo;
return G__94851;
})()
};
var G__94850 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__94850__delegate.call(this, f, g, h, fs);
};
G__94850.cljs$lang$maxFixedArity = 3;
G__94850.cljs$lang$applyTo = (function (arglist__94860){
var f = cljs.core.first(arglist__94860);
var g = cljs.core.first(cljs.core.next(arglist__94860));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94860)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__94860)));
return G__94850__delegate.call(this, f, g, h, fs);
});
return G__94850;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__94818.call(this,f);
case  2 :
return juxt__94819.call(this,f,g);
case  3 :
return juxt__94820.call(this,f,g,h);
default:
return juxt__94821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__94821.cljs$lang$applyTo;
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
var dorun__94862 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__94865 = cljs.core.next.call(null,coll);
coll = G__94865;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__94863 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____94861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____94861))
{return (n > 0);
} else
{return and__3546__auto____94861;
}
})()))
{{
var G__94866 = (n - 1);
var G__94867 = cljs.core.next.call(null,coll);
n = G__94866;
coll = G__94867;
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
case  1 :
return dorun__94862.call(this,n);
case  2 :
return dorun__94863.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var doall__94868 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__94869 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__94868.call(this,n);
case  2 :
return doall__94869.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__94871 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__94871),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__94871),1)))
{return cljs.core.first.call(null,matches__94871);
} else
{return cljs.core.vec.call(null,matches__94871);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__94872 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__94872)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__94872),1)))
{return cljs.core.first.call(null,matches__94872);
} else
{return cljs.core.vec.call(null,matches__94872);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__94873 = cljs.core.re_find.call(null,re,s);
var match_idx__94874 = s.search(re);
var match_str__94875 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__94873))?cljs.core.first.call(null,match_data__94873):match_data__94873);
var post_match__94876 = cljs.core.subs.call(null,s,(match_idx__94874 + cljs.core.count.call(null,match_str__94875)));

if(cljs.core.truth_(match_data__94873))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__94873,re_seq.call(null,re,post_match__94876));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__94877_SHARP_){
return print_one.call(null,p1__94877_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____94878 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____94878))
{var and__3546__auto____94882 = (function (){var x__445__auto____94879 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____94880 = x__445__auto____94879;

if(cljs.core.truth_(and__3546__auto____94880))
{var and__3546__auto____94881 = x__445__auto____94879.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____94881))
{return cljs.core.not.call(null,x__445__auto____94879.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____94881;
}
} else
{return and__3546__auto____94880;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____94879);
}
})();

if(cljs.core.truth_(and__3546__auto____94882))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____94882;
}
} else
{return and__3546__auto____94878;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____94883 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____94884 = x__445__auto____94883;

if(cljs.core.truth_(and__3546__auto____94884))
{var and__3546__auto____94885 = x__445__auto____94883.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____94885))
{return cljs.core.not.call(null,x__445__auto____94883.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____94885;
}
} else
{return and__3546__auto____94884;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____94883);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__94886 = cljs.core.first.call(null,objs);
var sb__94887 = (new goog.string.StringBuffer());

var G__94888__94889 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__94888__94889))
{var obj__94890 = cljs.core.first.call(null,G__94888__94889);
var G__94888__94891 = G__94888__94889;

while(true){
if(cljs.core.truth_((obj__94890 === first_obj__94886)))
{} else
{sb__94887.append(" ");
}
var G__94892__94893 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__94890,opts));

if(cljs.core.truth_(G__94892__94893))
{var string__94894 = cljs.core.first.call(null,G__94892__94893);
var G__94892__94895 = G__94892__94893;

while(true){
sb__94887.append(string__94894);
var temp__3698__auto____94896 = cljs.core.next.call(null,G__94892__94895);

if(cljs.core.truth_(temp__3698__auto____94896))
{var G__94892__94897 = temp__3698__auto____94896;

{
var G__94900 = cljs.core.first.call(null,G__94892__94897);
var G__94901 = G__94892__94897;
string__94894 = G__94900;
G__94892__94895 = G__94901;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____94898 = cljs.core.next.call(null,G__94888__94891);

if(cljs.core.truth_(temp__3698__auto____94898))
{var G__94888__94899 = temp__3698__auto____94898;

{
var G__94902 = cljs.core.first.call(null,G__94888__94899);
var G__94903 = G__94888__94899;
obj__94890 = G__94902;
G__94888__94891 = G__94903;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__94887);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__94904 = cljs.core.first.call(null,objs);

var G__94905__94906 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__94905__94906))
{var obj__94907 = cljs.core.first.call(null,G__94905__94906);
var G__94905__94908 = G__94905__94906;

while(true){
if(cljs.core.truth_((obj__94907 === first_obj__94904)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__94909__94910 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__94907,opts));

if(cljs.core.truth_(G__94909__94910))
{var string__94911 = cljs.core.first.call(null,G__94909__94910);
var G__94909__94912 = G__94909__94910;

while(true){
cljs.core.string_print.call(null,string__94911);
var temp__3698__auto____94913 = cljs.core.next.call(null,G__94909__94912);

if(cljs.core.truth_(temp__3698__auto____94913))
{var G__94909__94914 = temp__3698__auto____94913;

{
var G__94917 = cljs.core.first.call(null,G__94909__94914);
var G__94918 = G__94909__94914;
string__94911 = G__94917;
G__94909__94912 = G__94918;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____94915 = cljs.core.next.call(null,G__94905__94908);

if(cljs.core.truth_(temp__3698__auto____94915))
{var G__94905__94916 = temp__3698__auto____94915;

{
var G__94919 = cljs.core.first.call(null,G__94905__94916);
var G__94920 = G__94905__94916;
obj__94907 = G__94919;
G__94905__94908 = G__94920;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__94921){
var objs = cljs.core.seq( arglist__94921 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
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
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__94922){
var objs = cljs.core.seq( arglist__94922 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__94923){
var objs = cljs.core.seq( arglist__94923 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__94924){
var objs = cljs.core.seq( arglist__94924 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__94925){
var objs = cljs.core.seq( arglist__94925 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__94926 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__94926,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____94927 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____94927))
{var nspc__94928 = temp__3698__auto____94927;

return cljs.core.str.call(null,nspc__94928,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____94929 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____94929))
{var nspc__94930 = temp__3698__auto____94929;

return cljs.core.str.call(null,nspc__94930,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__94931 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__94931,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__94932 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__94933 = this;
var G__94934__94935 = cljs.core.seq.call(null,this__94933.watches);

if(cljs.core.truth_(G__94934__94935))
{var G__94937__94939 = cljs.core.first.call(null,G__94934__94935);
var vec__94938__94940 = G__94937__94939;
var key__94941 = cljs.core.nth.call(null,vec__94938__94940,0,null);
var f__94942 = cljs.core.nth.call(null,vec__94938__94940,1,null);
var G__94934__94943 = G__94934__94935;

var G__94937__94944 = G__94937__94939;
var G__94934__94945 = G__94934__94943;

while(true){
var vec__94946__94947 = G__94937__94944;
var key__94948 = cljs.core.nth.call(null,vec__94946__94947,0,null);
var f__94949 = cljs.core.nth.call(null,vec__94946__94947,1,null);
var G__94934__94950 = G__94934__94945;

f__94949.call(null,key__94948,this$,oldval,newval);
var temp__3698__auto____94951 = cljs.core.next.call(null,G__94934__94950);

if(cljs.core.truth_(temp__3698__auto____94951))
{var G__94934__94952 = temp__3698__auto____94951;

{
var G__94959 = cljs.core.first.call(null,G__94934__94952);
var G__94960 = G__94934__94952;
G__94937__94944 = G__94959;
G__94934__94945 = G__94960;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__94953 = this;
return this$.watches = cljs.core.assoc.call(null,this__94953.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__94954 = this;
return this$.watches = cljs.core.dissoc.call(null,this__94954.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__94955 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__94955.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__94956 = this;
return this__94956.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__94957 = this;
return this__94957.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__94958 = this;
return (o === other);
});
cljs.core.Atom;
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
var atom__94967 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__94968 = (function() { 
var G__94970__delegate = function (x,p__94961){
var map__94962__94963 = p__94961;
var map__94962__94964 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__94962__94963))?cljs.core.apply.call(null,cljs.core.hash_map,map__94962__94963):map__94962__94963);
var validator__94965 = cljs.core.get.call(null,map__94962__94964,"﷐'validator");
var meta__94966 = cljs.core.get.call(null,map__94962__94964,"﷐'meta");

return (new cljs.core.Atom(x,meta__94966,validator__94965,null));
};
var G__94970 = function (x,var_args){
var p__94961 = null;
if (goog.isDef(var_args)) {
  p__94961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__94970__delegate.call(this, x, p__94961);
};
G__94970.cljs$lang$maxFixedArity = 1;
G__94970.cljs$lang$applyTo = (function (arglist__94971){
var x = cljs.core.first(arglist__94971);
var p__94961 = cljs.core.rest(arglist__94971);
return G__94970__delegate.call(this, x, p__94961);
});
return G__94970;
})()
;
atom = function(x,var_args){
var p__94961 = var_args;
switch(arguments.length){
case  1 :
return atom__94967.call(this,x);
default:
return atom__94968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__94968.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____94972 = a.validator;

if(cljs.core.truth_(temp__3698__auto____94972))
{var validate__94973 = temp__3698__auto____94972;

if(cljs.core.truth_(validate__94973.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__94974 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__94974,new_value);
return new_value;
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
var swap_BANG___94975 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___94976 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___94977 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___94978 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___94979 = (function() { 
var G__94981__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__94981 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__94981__delegate.call(this, a, f, x, y, z, more);
};
G__94981.cljs$lang$maxFixedArity = 5;
G__94981.cljs$lang$applyTo = (function (arglist__94982){
var a = cljs.core.first(arglist__94982);
var f = cljs.core.first(cljs.core.next(arglist__94982));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__94982)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94982))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94982)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__94982)))));
return G__94981__delegate.call(this, a, f, x, y, z, more);
});
return G__94981;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___94975.call(this,a,f);
case  3 :
return swap_BANG___94976.call(this,a,f,x);
case  4 :
return swap_BANG___94977.call(this,a,f,x,y);
case  5 :
return swap_BANG___94978.call(this,a,f,x,y,z);
default:
return swap_BANG___94979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___94979.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
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
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__94983){
var iref = cljs.core.first(arglist__94983);
var f = cljs.core.first(cljs.core.next(arglist__94983));
var args = cljs.core.rest(cljs.core.next(arglist__94983));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
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
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__94984 = (function (){
return gensym.call(null,"G__");
});
var gensym__94985 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__94984.call(this);
case  1 :
return gensym__94985.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__94987 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__94987.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__94988 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__94988.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__94988.state,this__94988.f);
}
return cljs.core.deref.call(null,this__94988.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__94989){
var body = cljs.core.seq( arglist__94989 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__94990__94991 = options;
var map__94990__94992 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__94990__94991))?cljs.core.apply.call(null,cljs.core.hash_map,map__94990__94991):map__94990__94991);
var keywordize_keys__94993 = cljs.core.get.call(null,map__94990__94992,"﷐'keywordize-keys");
var keyfn__94994 = (cljs.core.truth_(keywordize_keys__94993)?cljs.core.keyword:cljs.core.str);
var f__95000 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____94999 = (function iter__94995(s__94996){
return (new cljs.core.LazySeq(null,false,(function (){
var s__94996__94997 = s__94996;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__94996__94997)))
{var k__94998 = cljs.core.first.call(null,s__94996__94997);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__94994.call(null,k__94998),thisfn.call(null,(x[k__94998]))]),iter__94995.call(null,cljs.core.rest.call(null,s__94996__94997)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____94999.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__95000.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__95001){
var x = cljs.core.first(arglist__95001);
var options = cljs.core.rest(arglist__95001);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__95002 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__95006__delegate = function (args){
var temp__3695__auto____95003 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__95002),args);

if(cljs.core.truth_(temp__3695__auto____95003))
{var v__95004 = temp__3695__auto____95003;

return v__95004;
} else
{var ret__95005 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__95002,cljs.core.assoc,args,ret__95005);
return ret__95005;
}
};
var G__95006 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__95006__delegate.call(this, args);
};
G__95006.cljs$lang$maxFixedArity = 0;
G__95006.cljs$lang$applyTo = (function (arglist__95007){
var args = cljs.core.seq( arglist__95007 );;
return G__95006__delegate.call(this, args);
});
return G__95006;
})()
;
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
var trampoline__95009 = (function (f){
while(true){
var ret__95008 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__95008)))
{{
var G__95012 = ret__95008;
f = G__95012;
continue;
}
} else
{return ret__95008;
}
break;
}
});
var trampoline__95010 = (function() { 
var G__95013__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__95013 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__95013__delegate.call(this, f, args);
};
G__95013.cljs$lang$maxFixedArity = 1;
G__95013.cljs$lang$applyTo = (function (arglist__95014){
var f = cljs.core.first(arglist__95014);
var args = cljs.core.rest(arglist__95014);
return G__95013__delegate.call(this, f, args);
});
return G__95013;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__95009.call(this,f);
default:
return trampoline__95010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__95010.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__95015 = (function (){
return rand.call(null,1);
});
var rand__95016 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__95015.call(this);
case  1 :
return rand__95016.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__95018 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__95018,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__95018,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___95027 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___95028 = (function (h,child,parent){
var or__3548__auto____95019 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____95019))
{return or__3548__auto____95019;
} else
{var or__3548__auto____95020 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____95020))
{return or__3548__auto____95020;
} else
{var and__3546__auto____95021 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____95021))
{var and__3546__auto____95022 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____95022))
{var and__3546__auto____95023 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____95023))
{var ret__95024 = true;
var i__95025 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____95026 = cljs.core.not.call(null,ret__95024);

if(cljs.core.truth_(or__3548__auto____95026))
{return or__3548__auto____95026;
} else
{return cljs.core._EQ_.call(null,i__95025,cljs.core.count.call(null,parent));
}
})()))
{return ret__95024;
} else
{{
var G__95030 = isa_QMARK_.call(null,h,child.call(null,i__95025),parent.call(null,i__95025));
var G__95031 = (i__95025 + 1);
ret__95024 = G__95030;
i__95025 = G__95031;
continue;
}
}
break;
}
} else
{return and__3546__auto____95023;
}
} else
{return and__3546__auto____95022;
}
} else
{return and__3546__auto____95021;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___95027.call(this,h,child);
case  3 :
return isa_QMARK___95028.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__95032 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__95033 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__95032.call(this,h);
case  2 :
return parents__95033.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__95035 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__95036 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__95035.call(this,h);
case  2 :
return ancestors__95036.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__95038 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__95039 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__95038.call(this,h);
case  2 :
return descendants__95039.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
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
var derive__95049 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__95050 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__95044 = "﷐'parents".call(null,h);
var td__95045 = "﷐'descendants".call(null,h);
var ta__95046 = "﷐'ancestors".call(null,h);
var tf__95047 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____95048 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__95044.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__95046.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__95046.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__95044,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__95047.call(null,"﷐'ancestors".call(null,h),tag,td__95045,parent,ta__95046),"﷐'descendants":tf__95047.call(null,"﷐'descendants".call(null,h),parent,ta__95046,tag,td__95045)});
})());

if(cljs.core.truth_(or__3548__auto____95048))
{return or__3548__auto____95048;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__95049.call(this,h,tag);
case  3 :
return derive__95050.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
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
var underive__95056 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__95057 = (function (h,tag,parent){
var parentMap__95052 = "﷐'parents".call(null,h);
var childsParents__95053 = (cljs.core.truth_(parentMap__95052.call(null,tag))?cljs.core.disj.call(null,parentMap__95052.call(null,tag),parent):cljs.core.set([]));
var newParents__95054 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__95053))?cljs.core.assoc.call(null,parentMap__95052,tag,childsParents__95053):cljs.core.dissoc.call(null,parentMap__95052,tag));
var deriv_seq__95055 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__95041_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__95041_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__95041_SHARP_),cljs.core.second.call(null,p1__95041_SHARP_)));
}),cljs.core.seq.call(null,newParents__95054)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__95052.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__95042_SHARP_,p2__95043_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__95042_SHARP_,p2__95043_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__95055));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__95056.call(this,h,tag);
case  3 :
return underive__95057.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__95059 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____95061 = (cljs.core.truth_((function (){var and__3546__auto____95060 = xprefs__95059;

if(cljs.core.truth_(and__3546__auto____95060))
{return xprefs__95059.call(null,y);
} else
{return and__3546__auto____95060;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____95061))
{return or__3548__auto____95061;
} else
{var or__3548__auto____95063 = (function (){var ps__95062 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__95062) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__95062),prefer_table)))
{} else
{}
{
var G__95066 = cljs.core.rest.call(null,ps__95062);
ps__95062 = G__95066;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____95063))
{return or__3548__auto____95063;
} else
{var or__3548__auto____95065 = (function (){var ps__95064 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__95064) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__95064),y,prefer_table)))
{} else
{}
{
var G__95067 = cljs.core.rest.call(null,ps__95064);
ps__95064 = G__95067;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____95065))
{return or__3548__auto____95065;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____95068 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____95068))
{return or__3548__auto____95068;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__95077 = cljs.core.reduce.call(null,(function (be,p__95069){
var vec__95070__95071 = p__95069;
var k__95072 = cljs.core.nth.call(null,vec__95070__95071,0,null);
var ___95073 = cljs.core.nth.call(null,vec__95070__95071,1,null);
var e__95074 = vec__95070__95071;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__95072)))
{var be2__95076 = (cljs.core.truth_((function (){var or__3548__auto____95075 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____95075))
{return or__3548__auto____95075;
} else
{return cljs.core.dominates.call(null,k__95072,cljs.core.first.call(null,be),prefer_table);
}
})())?e__95074:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__95076),k__95072,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__95072," and ",cljs.core.first.call(null,be2__95076),", and neither is preferred")));
}
return be2__95076;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__95077))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__95077));
return cljs.core.second.call(null,best_entry__95077);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____95078 = mf;

if(cljs.core.truth_(and__3546__auto____95078))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____95078;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____95079 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95079))
{return or__3548__auto____95079;
} else
{var or__3548__auto____95080 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____95080))
{return or__3548__auto____95080;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____95081 = mf;

if(cljs.core.truth_(and__3546__auto____95081))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____95081;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____95082 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95082))
{return or__3548__auto____95082;
} else
{var or__3548__auto____95083 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____95083))
{return or__3548__auto____95083;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____95084 = mf;

if(cljs.core.truth_(and__3546__auto____95084))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____95084;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____95085 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95085))
{return or__3548__auto____95085;
} else
{var or__3548__auto____95086 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____95086))
{return or__3548__auto____95086;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____95087 = mf;

if(cljs.core.truth_(and__3546__auto____95087))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____95087;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____95088 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95088))
{return or__3548__auto____95088;
} else
{var or__3548__auto____95089 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____95089))
{return or__3548__auto____95089;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____95090 = mf;

if(cljs.core.truth_(and__3546__auto____95090))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____95090;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____95091 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95091))
{return or__3548__auto____95091;
} else
{var or__3548__auto____95092 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____95092))
{return or__3548__auto____95092;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____95093 = mf;

if(cljs.core.truth_(and__3546__auto____95093))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____95093;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____95094 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95094))
{return or__3548__auto____95094;
} else
{var or__3548__auto____95095 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____95095))
{return or__3548__auto____95095;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____95096 = mf;

if(cljs.core.truth_(and__3546__auto____95096))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____95096;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____95097 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95097))
{return or__3548__auto____95097;
} else
{var or__3548__auto____95098 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____95098))
{return or__3548__auto____95098;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____95099 = mf;

if(cljs.core.truth_(and__3546__auto____95099))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____95099;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____95100 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____95100))
{return or__3548__auto____95100;
} else
{var or__3548__auto____95101 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____95101))
{return or__3548__auto____95101;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__95102 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__95103 = cljs.core._get_method.call(null,mf,dispatch_val__95102);

if(cljs.core.truth_(target_fn__95103))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__95102)));
}
return cljs.core.apply.call(null,target_fn__95103,args);
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
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__95104 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__95105 = this;
cljs.core.swap_BANG_.call(null,this__95105.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__95105.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__95105.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__95105.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__95106 = this;
cljs.core.swap_BANG_.call(null,this__95106.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__95106.method_cache,this__95106.method_table,this__95106.cached_hierarchy,this__95106.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__95107 = this;
cljs.core.swap_BANG_.call(null,this__95107.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__95107.method_cache,this__95107.method_table,this__95107.cached_hierarchy,this__95107.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__95108 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__95108.cached_hierarchy),cljs.core.deref.call(null,this__95108.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__95108.method_cache,this__95108.method_table,this__95108.cached_hierarchy,this__95108.hierarchy);
}
var temp__3695__auto____95109 = cljs.core.deref.call(null,this__95108.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____95109))
{var target_fn__95110 = temp__3695__auto____95109;

return target_fn__95110;
} else
{var temp__3695__auto____95111 = cljs.core.find_and_cache_best_method.call(null,this__95108.name,dispatch_val,this__95108.hierarchy,this__95108.method_table,this__95108.prefer_table,this__95108.method_cache,this__95108.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____95111))
{var target_fn__95112 = temp__3695__auto____95111;

return target_fn__95112;
} else
{return cljs.core.deref.call(null,this__95108.method_table).call(null,this__95108.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__95113 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__95113.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__95113.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__95113.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__95113.method_cache,this__95113.method_table,this__95113.cached_hierarchy,this__95113.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__95114 = this;
return cljs.core.deref.call(null,this__95114.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__95115 = this;
return cljs.core.deref.call(null,this__95115.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__95116 = this;
return cljs.core.do_dispatch.call(null,mf,this__95116.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__95117__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__95117 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__95117__delegate.call(this, _, args);
};
G__95117.cljs$lang$maxFixedArity = 1;
G__95117.cljs$lang$applyTo = (function (arglist__95118){
var _ = cljs.core.first(arglist__95118);
var args = cljs.core.rest(arglist__95118);
return G__95117__delegate.call(this, _, args);
});
return G__95117;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
