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
var or__3548__auto____82220 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____82220))
{return or__3548__auto____82220;
} else
{var or__3548__auto____82221 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____82221))
{return or__3548__auto____82221;
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
var _invoke__82285 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____82222 = this$;

if(cljs.core.truth_(and__3546__auto____82222))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82222;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____82223 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82223))
{return or__3548__auto____82223;
} else
{var or__3548__auto____82224 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82224))
{return or__3548__auto____82224;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__82286 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____82225 = this$;

if(cljs.core.truth_(and__3546__auto____82225))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82225;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____82226 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82226))
{return or__3548__auto____82226;
} else
{var or__3548__auto____82227 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82227))
{return or__3548__auto____82227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__82287 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____82228 = this$;

if(cljs.core.truth_(and__3546__auto____82228))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82228;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____82229 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82229))
{return or__3548__auto____82229;
} else
{var or__3548__auto____82230 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82230))
{return or__3548__auto____82230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__82288 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____82231 = this$;

if(cljs.core.truth_(and__3546__auto____82231))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82231;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____82232 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82232))
{return or__3548__auto____82232;
} else
{var or__3548__auto____82233 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82233))
{return or__3548__auto____82233;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__82289 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____82234 = this$;

if(cljs.core.truth_(and__3546__auto____82234))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82234;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____82235 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82235))
{return or__3548__auto____82235;
} else
{var or__3548__auto____82236 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82236))
{return or__3548__auto____82236;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__82290 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____82237 = this$;

if(cljs.core.truth_(and__3546__auto____82237))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82237;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____82238 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82238))
{return or__3548__auto____82238;
} else
{var or__3548__auto____82239 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82239))
{return or__3548__auto____82239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__82291 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____82240 = this$;

if(cljs.core.truth_(and__3546__auto____82240))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82240;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____82241 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82241))
{return or__3548__auto____82241;
} else
{var or__3548__auto____82242 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82242))
{return or__3548__auto____82242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__82292 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____82243 = this$;

if(cljs.core.truth_(and__3546__auto____82243))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82243;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____82244 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82244))
{return or__3548__auto____82244;
} else
{var or__3548__auto____82245 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82245))
{return or__3548__auto____82245;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__82293 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____82246 = this$;

if(cljs.core.truth_(and__3546__auto____82246))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82246;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____82247 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82247))
{return or__3548__auto____82247;
} else
{var or__3548__auto____82248 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82248))
{return or__3548__auto____82248;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__82294 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____82249 = this$;

if(cljs.core.truth_(and__3546__auto____82249))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82249;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____82250 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82250))
{return or__3548__auto____82250;
} else
{var or__3548__auto____82251 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82251))
{return or__3548__auto____82251;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__82295 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____82252 = this$;

if(cljs.core.truth_(and__3546__auto____82252))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82252;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____82253 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82253))
{return or__3548__auto____82253;
} else
{var or__3548__auto____82254 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82254))
{return or__3548__auto____82254;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__82296 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____82255 = this$;

if(cljs.core.truth_(and__3546__auto____82255))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82255;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____82256 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82256))
{return or__3548__auto____82256;
} else
{var or__3548__auto____82257 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82257))
{return or__3548__auto____82257;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__82297 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____82258 = this$;

if(cljs.core.truth_(and__3546__auto____82258))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82258;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____82259 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82259))
{return or__3548__auto____82259;
} else
{var or__3548__auto____82260 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82260))
{return or__3548__auto____82260;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__82298 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____82261 = this$;

if(cljs.core.truth_(and__3546__auto____82261))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82261;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____82262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82262))
{return or__3548__auto____82262;
} else
{var or__3548__auto____82263 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82263))
{return or__3548__auto____82263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__82299 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____82264 = this$;

if(cljs.core.truth_(and__3546__auto____82264))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82264;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____82265 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82265))
{return or__3548__auto____82265;
} else
{var or__3548__auto____82266 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82266))
{return or__3548__auto____82266;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__82300 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____82267 = this$;

if(cljs.core.truth_(and__3546__auto____82267))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82267;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____82268 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82268))
{return or__3548__auto____82268;
} else
{var or__3548__auto____82269 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82269))
{return or__3548__auto____82269;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__82301 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____82270 = this$;

if(cljs.core.truth_(and__3546__auto____82270))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82270;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____82271 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82271))
{return or__3548__auto____82271;
} else
{var or__3548__auto____82272 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82272))
{return or__3548__auto____82272;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__82302 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____82273 = this$;

if(cljs.core.truth_(and__3546__auto____82273))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82273;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____82274 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82274))
{return or__3548__auto____82274;
} else
{var or__3548__auto____82275 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82275))
{return or__3548__auto____82275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__82303 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____82276 = this$;

if(cljs.core.truth_(and__3546__auto____82276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____82277 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82277))
{return or__3548__auto____82277;
} else
{var or__3548__auto____82278 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82278))
{return or__3548__auto____82278;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__82304 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____82279 = this$;

if(cljs.core.truth_(and__3546__auto____82279))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82279;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____82280 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82280))
{return or__3548__auto____82280;
} else
{var or__3548__auto____82281 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82281))
{return or__3548__auto____82281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__82305 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____82282 = this$;

if(cljs.core.truth_(and__3546__auto____82282))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____82282;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____82283 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82283))
{return or__3548__auto____82283;
} else
{var or__3548__auto____82284 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____82284))
{return or__3548__auto____82284;
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
return _invoke__82285.call(this,this$);
case  2 :
return _invoke__82286.call(this,this$,a);
case  3 :
return _invoke__82287.call(this,this$,a,b);
case  4 :
return _invoke__82288.call(this,this$,a,b,c);
case  5 :
return _invoke__82289.call(this,this$,a,b,c,d);
case  6 :
return _invoke__82290.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__82291.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__82292.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__82293.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__82294.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__82295.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__82296.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__82297.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__82298.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__82299.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__82300.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__82301.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__82302.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__82303.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__82304.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__82305.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____82307 = coll;

if(cljs.core.truth_(and__3546__auto____82307))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____82307;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____82308 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82308))
{return or__3548__auto____82308;
} else
{var or__3548__auto____82309 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____82309))
{return or__3548__auto____82309;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____82310 = coll;

if(cljs.core.truth_(and__3546__auto____82310))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____82310;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____82311 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82311))
{return or__3548__auto____82311;
} else
{var or__3548__auto____82312 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____82312))
{return or__3548__auto____82312;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____82313 = coll;

if(cljs.core.truth_(and__3546__auto____82313))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____82313;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____82314 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82314))
{return or__3548__auto____82314;
} else
{var or__3548__auto____82315 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____82315))
{return or__3548__auto____82315;
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
var _nth__82322 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____82316 = coll;

if(cljs.core.truth_(and__3546__auto____82316))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____82316;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____82317 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82317))
{return or__3548__auto____82317;
} else
{var or__3548__auto____82318 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____82318))
{return or__3548__auto____82318;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__82323 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____82319 = coll;

if(cljs.core.truth_(and__3546__auto____82319))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____82319;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____82320 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82320))
{return or__3548__auto____82320;
} else
{var or__3548__auto____82321 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____82321))
{return or__3548__auto____82321;
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
return _nth__82322.call(this,coll,n);
case  3 :
return _nth__82323.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____82325 = coll;

if(cljs.core.truth_(and__3546__auto____82325))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____82325;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____82326 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82326))
{return or__3548__auto____82326;
} else
{var or__3548__auto____82327 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____82327))
{return or__3548__auto____82327;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____82328 = coll;

if(cljs.core.truth_(and__3546__auto____82328))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____82328;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____82329 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82329))
{return or__3548__auto____82329;
} else
{var or__3548__auto____82330 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____82330))
{return or__3548__auto____82330;
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
var _lookup__82337 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____82331 = o;

if(cljs.core.truth_(and__3546__auto____82331))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____82331;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____82332 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82332))
{return or__3548__auto____82332;
} else
{var or__3548__auto____82333 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____82333))
{return or__3548__auto____82333;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__82338 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____82334 = o;

if(cljs.core.truth_(and__3546__auto____82334))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____82334;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____82335 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82335))
{return or__3548__auto____82335;
} else
{var or__3548__auto____82336 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____82336))
{return or__3548__auto____82336;
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
return _lookup__82337.call(this,o,k);
case  3 :
return _lookup__82338.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____82340 = coll;

if(cljs.core.truth_(and__3546__auto____82340))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____82340;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____82341 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82341))
{return or__3548__auto____82341;
} else
{var or__3548__auto____82342 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____82342))
{return or__3548__auto____82342;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____82343 = coll;

if(cljs.core.truth_(and__3546__auto____82343))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____82343;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____82344 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82344))
{return or__3548__auto____82344;
} else
{var or__3548__auto____82345 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____82345))
{return or__3548__auto____82345;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____82346 = coll;

if(cljs.core.truth_(and__3546__auto____82346))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____82346;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____82347 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82347))
{return or__3548__auto____82347;
} else
{var or__3548__auto____82348 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____82348))
{return or__3548__auto____82348;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____82349 = coll;

if(cljs.core.truth_(and__3546__auto____82349))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____82349;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____82350 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82350))
{return or__3548__auto____82350;
} else
{var or__3548__auto____82351 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____82351))
{return or__3548__auto____82351;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____82352 = coll;

if(cljs.core.truth_(and__3546__auto____82352))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____82352;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____82353 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82353))
{return or__3548__auto____82353;
} else
{var or__3548__auto____82354 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____82354))
{return or__3548__auto____82354;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____82355 = coll;

if(cljs.core.truth_(and__3546__auto____82355))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____82355;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____82356 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82356))
{return or__3548__auto____82356;
} else
{var or__3548__auto____82357 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____82357))
{return or__3548__auto____82357;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____82358 = coll;

if(cljs.core.truth_(and__3546__auto____82358))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____82358;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____82359 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82359))
{return or__3548__auto____82359;
} else
{var or__3548__auto____82360 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____82360))
{return or__3548__auto____82360;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____82361 = o;

if(cljs.core.truth_(and__3546__auto____82361))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____82361;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____82362 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82362))
{return or__3548__auto____82362;
} else
{var or__3548__auto____82363 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____82363))
{return or__3548__auto____82363;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____82364 = o;

if(cljs.core.truth_(and__3546__auto____82364))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____82364;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____82365 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82365))
{return or__3548__auto____82365;
} else
{var or__3548__auto____82366 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____82366))
{return or__3548__auto____82366;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____82367 = o;

if(cljs.core.truth_(and__3546__auto____82367))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____82367;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____82368 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82368))
{return or__3548__auto____82368;
} else
{var or__3548__auto____82369 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____82369))
{return or__3548__auto____82369;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____82370 = o;

if(cljs.core.truth_(and__3546__auto____82370))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____82370;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____82371 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82371))
{return or__3548__auto____82371;
} else
{var or__3548__auto____82372 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____82372))
{return or__3548__auto____82372;
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
var _reduce__82379 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____82373 = coll;

if(cljs.core.truth_(and__3546__auto____82373))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____82373;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____82374 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82374))
{return or__3548__auto____82374;
} else
{var or__3548__auto____82375 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____82375))
{return or__3548__auto____82375;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__82380 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____82376 = coll;

if(cljs.core.truth_(and__3546__auto____82376))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____82376;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____82377 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____82377))
{return or__3548__auto____82377;
} else
{var or__3548__auto____82378 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____82378))
{return or__3548__auto____82378;
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
return _reduce__82379.call(this,coll,f);
case  3 :
return _reduce__82380.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____82382 = o;

if(cljs.core.truth_(and__3546__auto____82382))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____82382;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____82383 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82383))
{return or__3548__auto____82383;
} else
{var or__3548__auto____82384 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____82384))
{return or__3548__auto____82384;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____82385 = o;

if(cljs.core.truth_(and__3546__auto____82385))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____82385;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____82386 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82386))
{return or__3548__auto____82386;
} else
{var or__3548__auto____82387 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____82387))
{return or__3548__auto____82387;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____82388 = o;

if(cljs.core.truth_(and__3546__auto____82388))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____82388;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____82389 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82389))
{return or__3548__auto____82389;
} else
{var or__3548__auto____82390 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____82390))
{return or__3548__auto____82390;
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
if(cljs.core.truth_((function (){var and__3546__auto____82391 = o;

if(cljs.core.truth_(and__3546__auto____82391))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____82391;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____82392 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____82392))
{return or__3548__auto____82392;
} else
{var or__3548__auto____82393 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____82393))
{return or__3548__auto____82393;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____82394 = d;

if(cljs.core.truth_(and__3546__auto____82394))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____82394;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____82395 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____82395))
{return or__3548__auto____82395;
} else
{var or__3548__auto____82396 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____82396))
{return or__3548__auto____82396;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____82397 = this$;

if(cljs.core.truth_(and__3546__auto____82397))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____82397;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____82398 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82398))
{return or__3548__auto____82398;
} else
{var or__3548__auto____82399 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____82399))
{return or__3548__auto____82399;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____82400 = this$;

if(cljs.core.truth_(and__3546__auto____82400))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____82400;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____82401 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82401))
{return or__3548__auto____82401;
} else
{var or__3548__auto____82402 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____82402))
{return or__3548__auto____82402;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____82403 = this$;

if(cljs.core.truth_(and__3546__auto____82403))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____82403;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____82404 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____82404))
{return or__3548__auto____82404;
} else
{var or__3548__auto____82405 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____82405))
{return or__3548__auto____82405;
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
var G__82406 = null;
var G__82406__82407 = (function (o,k){
return null;
});
var G__82406__82408 = (function (o,k,not_found){
return not_found;
});
G__82406 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__82406__82407.call(this,o,k);
case  3 :
return G__82406__82408.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82406;
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
var G__82410 = null;
var G__82410__82411 = (function (_,f){
return f.call(null);
});
var G__82410__82412 = (function (_,f,start){
return start;
});
G__82410 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__82410__82411.call(this,_,f);
case  3 :
return G__82410__82412.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82410;
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
var G__82414 = null;
var G__82414__82415 = (function (_,n){
return null;
});
var G__82414__82416 = (function (_,n,not_found){
return not_found;
});
G__82414 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__82414__82415.call(this,_,n);
case  3 :
return G__82414__82416.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82414;
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
var ci_reduce__82424 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__82418 = cljs.core._nth.call(null,cicoll,0);
var n__82419 = 1;

while(true){
if(cljs.core.truth_((n__82419 < cljs.core._count.call(null,cicoll))))
{{
var G__82428 = f.call(null,val__82418,cljs.core._nth.call(null,cicoll,n__82419));
var G__82429 = (n__82419 + 1);
val__82418 = G__82428;
n__82419 = G__82429;
continue;
}
} else
{return val__82418;
}
break;
}
}
});
var ci_reduce__82425 = (function (cicoll,f,val){
var val__82420 = val;
var n__82421 = 0;

while(true){
if(cljs.core.truth_((n__82421 < cljs.core._count.call(null,cicoll))))
{{
var G__82430 = f.call(null,val__82420,cljs.core._nth.call(null,cicoll,n__82421));
var G__82431 = (n__82421 + 1);
val__82420 = G__82430;
n__82421 = G__82431;
continue;
}
} else
{return val__82420;
}
break;
}
});
var ci_reduce__82426 = (function (cicoll,f,val,idx){
var val__82422 = val;
var n__82423 = idx;

while(true){
if(cljs.core.truth_((n__82423 < cljs.core._count.call(null,cicoll))))
{{
var G__82432 = f.call(null,val__82422,cljs.core._nth.call(null,cicoll,n__82423));
var G__82433 = (n__82423 + 1);
val__82422 = G__82432;
n__82423 = G__82433;
continue;
}
} else
{return val__82422;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__82424.call(this,cicoll,f);
case  3 :
return ci_reduce__82425.call(this,cicoll,f,val);
case  4 :
return ci_reduce__82426.call(this,cicoll,f,val,idx);
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
var this__82434 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__82447 = null;
var G__82447__82448 = (function (_,f){
var this__82435 = this;
return cljs.core.ci_reduce.call(null,this__82435.a,f,(this__82435.a[this__82435.i]),(this__82435.i + 1));
});
var G__82447__82449 = (function (_,f,start){
var this__82436 = this;
return cljs.core.ci_reduce.call(null,this__82436.a,f,start,this__82436.i);
});
G__82447 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__82447__82448.call(this,_,f);
case  3 :
return G__82447__82449.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82447;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__82437 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__82438 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__82451 = null;
var G__82451__82452 = (function (coll,n){
var this__82439 = this;
var i__82440 = (n + this__82439.i);

if(cljs.core.truth_((i__82440 < this__82439.a.length)))
{return (this__82439.a[i__82440]);
} else
{return null;
}
});
var G__82451__82453 = (function (coll,n,not_found){
var this__82441 = this;
var i__82442 = (n + this__82441.i);

if(cljs.core.truth_((i__82442 < this__82441.a.length)))
{return (this__82441.a[i__82442]);
} else
{return not_found;
}
});
G__82451 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__82451__82452.call(this,coll,n);
case  3 :
return G__82451__82453.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82451;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__82443 = this;
return (this__82443.a.length - this__82443.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__82444 = this;
return (this__82444.a[this__82444.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__82445 = this;
if(cljs.core.truth_(((this__82445.i + 1) < this__82445.a.length)))
{return (new cljs.core.IndexedSeq(this__82445.a,(this__82445.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__82446 = this;
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
var G__82455 = null;
var G__82455__82456 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__82455__82457 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__82455 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__82455__82456.call(this,array,f);
case  3 :
return G__82455__82457.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82455;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__82459 = null;
var G__82459__82460 = (function (array,k){
return (array[k]);
});
var G__82459__82461 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__82459 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__82459__82460.call(this,array,k);
case  3 :
return G__82459__82461.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82459;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__82463 = null;
var G__82463__82464 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__82463__82465 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__82463 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__82463__82464.call(this,array,n);
case  3 :
return G__82463__82465.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82463;
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
var temp__3698__auto____82467 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____82467))
{var s__82468 = temp__3698__auto____82467;

return cljs.core._first.call(null,s__82468);
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
var G__82469 = cljs.core.next.call(null,s);
s = G__82469;
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
var s__82470 = cljs.core.seq.call(null,x);
var n__82471 = 0;

while(true){
if(cljs.core.truth_(s__82470))
{{
var G__82472 = cljs.core.next.call(null,s__82470);
var G__82473 = (n__82471 + 1);
s__82470 = G__82472;
n__82471 = G__82473;
continue;
}
} else
{return n__82471;
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
var conj__82474 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__82475 = (function() { 
var G__82477__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__82478 = conj.call(null,coll,x);
var G__82479 = cljs.core.first.call(null,xs);
var G__82480 = cljs.core.next.call(null,xs);
coll = G__82478;
x = G__82479;
xs = G__82480;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__82477 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82477__delegate.call(this, coll, x, xs);
};
G__82477.cljs$lang$maxFixedArity = 2;
G__82477.cljs$lang$applyTo = (function (arglist__82481){
var coll = cljs.core.first(arglist__82481);
var x = cljs.core.first(cljs.core.next(arglist__82481));
var xs = cljs.core.rest(cljs.core.next(arglist__82481));
return G__82477__delegate.call(this, coll, x, xs);
});
return G__82477;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__82474.call(this,coll,x);
default:
return conj__82475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__82475.cljs$lang$applyTo;
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
var nth__82482 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__82483 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__82482.call(this,coll,n);
case  3 :
return nth__82483.call(this,coll,n,not_found);
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
var get__82485 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__82486 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__82485.call(this,o,k);
case  3 :
return get__82486.call(this,o,k,not_found);
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
var assoc__82489 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__82490 = (function() { 
var G__82492__delegate = function (coll,k,v,kvs){
while(true){
var ret__82488 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__82493 = ret__82488;
var G__82494 = cljs.core.first.call(null,kvs);
var G__82495 = cljs.core.second.call(null,kvs);
var G__82496 = cljs.core.nnext.call(null,kvs);
coll = G__82493;
k = G__82494;
v = G__82495;
kvs = G__82496;
continue;
}
} else
{return ret__82488;
}
break;
}
};
var G__82492 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82492__delegate.call(this, coll, k, v, kvs);
};
G__82492.cljs$lang$maxFixedArity = 3;
G__82492.cljs$lang$applyTo = (function (arglist__82497){
var coll = cljs.core.first(arglist__82497);
var k = cljs.core.first(cljs.core.next(arglist__82497));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82497)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82497)));
return G__82492__delegate.call(this, coll, k, v, kvs);
});
return G__82492;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__82489.call(this,coll,k,v);
default:
return assoc__82490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__82490.cljs$lang$applyTo;
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
var dissoc__82499 = (function (coll){
return coll;
});
var dissoc__82500 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__82501 = (function() { 
var G__82503__delegate = function (coll,k,ks){
while(true){
var ret__82498 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__82504 = ret__82498;
var G__82505 = cljs.core.first.call(null,ks);
var G__82506 = cljs.core.next.call(null,ks);
coll = G__82504;
k = G__82505;
ks = G__82506;
continue;
}
} else
{return ret__82498;
}
break;
}
};
var G__82503 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82503__delegate.call(this, coll, k, ks);
};
G__82503.cljs$lang$maxFixedArity = 2;
G__82503.cljs$lang$applyTo = (function (arglist__82507){
var coll = cljs.core.first(arglist__82507);
var k = cljs.core.first(cljs.core.next(arglist__82507));
var ks = cljs.core.rest(cljs.core.next(arglist__82507));
return G__82503__delegate.call(this, coll, k, ks);
});
return G__82503;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__82499.call(this,coll);
case  2 :
return dissoc__82500.call(this,coll,k);
default:
return dissoc__82501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__82501.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____82508 = o;

if(cljs.core.truth_((function (){var and__3546__auto____82509 = x__445__auto____82508;

if(cljs.core.truth_(and__3546__auto____82509))
{var and__3546__auto____82510 = x__445__auto____82508.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____82510))
{return cljs.core.not.call(null,x__445__auto____82508.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____82510;
}
} else
{return and__3546__auto____82509;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____82508);
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
var disj__82512 = (function (coll){
return coll;
});
var disj__82513 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__82514 = (function() { 
var G__82516__delegate = function (coll,k,ks){
while(true){
var ret__82511 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__82517 = ret__82511;
var G__82518 = cljs.core.first.call(null,ks);
var G__82519 = cljs.core.next.call(null,ks);
coll = G__82517;
k = G__82518;
ks = G__82519;
continue;
}
} else
{return ret__82511;
}
break;
}
};
var G__82516 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82516__delegate.call(this, coll, k, ks);
};
G__82516.cljs$lang$maxFixedArity = 2;
G__82516.cljs$lang$applyTo = (function (arglist__82520){
var coll = cljs.core.first(arglist__82520);
var k = cljs.core.first(cljs.core.next(arglist__82520));
var ks = cljs.core.rest(cljs.core.next(arglist__82520));
return G__82516__delegate.call(this, coll, k, ks);
});
return G__82516;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__82512.call(this,coll);
case  2 :
return disj__82513.call(this,coll,k);
default:
return disj__82514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__82514.cljs$lang$applyTo;
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
{var x__445__auto____82521 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82522 = x__445__auto____82521;

if(cljs.core.truth_(and__3546__auto____82522))
{var and__3546__auto____82523 = x__445__auto____82521.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____82523))
{return cljs.core.not.call(null,x__445__auto____82521.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____82523;
}
} else
{return and__3546__auto____82522;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____82521);
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
{var x__445__auto____82524 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82525 = x__445__auto____82524;

if(cljs.core.truth_(and__3546__auto____82525))
{var and__3546__auto____82526 = x__445__auto____82524.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____82526))
{return cljs.core.not.call(null,x__445__auto____82524.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____82526;
}
} else
{return and__3546__auto____82525;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____82524);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____82527 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82528 = x__445__auto____82527;

if(cljs.core.truth_(and__3546__auto____82528))
{var and__3546__auto____82529 = x__445__auto____82527.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____82529))
{return cljs.core.not.call(null,x__445__auto____82527.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____82529;
}
} else
{return and__3546__auto____82528;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____82527);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____82530 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82531 = x__445__auto____82530;

if(cljs.core.truth_(and__3546__auto____82531))
{var and__3546__auto____82532 = x__445__auto____82530.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____82532))
{return cljs.core.not.call(null,x__445__auto____82530.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____82532;
}
} else
{return and__3546__auto____82531;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____82530);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____82533 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82534 = x__445__auto____82533;

if(cljs.core.truth_(and__3546__auto____82534))
{var and__3546__auto____82535 = x__445__auto____82533.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____82535))
{return cljs.core.not.call(null,x__445__auto____82533.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____82535;
}
} else
{return and__3546__auto____82534;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____82533);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____82536 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82537 = x__445__auto____82536;

if(cljs.core.truth_(and__3546__auto____82537))
{var and__3546__auto____82538 = x__445__auto____82536.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____82538))
{return cljs.core.not.call(null,x__445__auto____82536.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____82538;
}
} else
{return and__3546__auto____82537;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____82536);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____82539 = x;

if(cljs.core.truth_((function (){var and__3546__auto____82540 = x__445__auto____82539;

if(cljs.core.truth_(and__3546__auto____82540))
{var and__3546__auto____82541 = x__445__auto____82539.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____82541))
{return cljs.core.not.call(null,x__445__auto____82539.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____82541;
}
} else
{return and__3546__auto____82540;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____82539);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__82542 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__82542.push(key);
}));
return keys__82542;
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
{var x__445__auto____82543 = s;

if(cljs.core.truth_((function (){var and__3546__auto____82544 = x__445__auto____82543;

if(cljs.core.truth_(and__3546__auto____82544))
{var and__3546__auto____82545 = x__445__auto____82543.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____82545))
{return cljs.core.not.call(null,x__445__auto____82543.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____82545;
}
} else
{return and__3546__auto____82544;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____82543);
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
var and__3546__auto____82546 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____82546))
{return cljs.core.not.call(null,(function (){var or__3548__auto____82547 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____82547))
{return or__3548__auto____82547;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____82546;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____82548 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____82548))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____82548;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____82549 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____82549))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____82549;
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
var and__3546__auto____82550 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____82550))
{return (n == n.toFixed());
} else
{return and__3546__auto____82550;
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
if(cljs.core.truth_((function (){var and__3546__auto____82551 = coll;

if(cljs.core.truth_(and__3546__auto____82551))
{var and__3546__auto____82552 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____82552))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____82552;
}
} else
{return and__3546__auto____82551;
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
var distinct_QMARK___82557 = (function (x){
return true;
});
var distinct_QMARK___82558 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___82559 = (function() { 
var G__82561__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__82553 = cljs.core.set([y,x]);
var xs__82554 = more;

while(true){
var x__82555 = cljs.core.first.call(null,xs__82554);
var etc__82556 = cljs.core.next.call(null,xs__82554);

if(cljs.core.truth_(xs__82554))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__82553,x__82555)))
{return false;
} else
{{
var G__82562 = cljs.core.conj.call(null,s__82553,x__82555);
var G__82563 = etc__82556;
s__82553 = G__82562;
xs__82554 = G__82563;
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
var G__82561 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82561__delegate.call(this, x, y, more);
};
G__82561.cljs$lang$maxFixedArity = 2;
G__82561.cljs$lang$applyTo = (function (arglist__82564){
var x = cljs.core.first(arglist__82564);
var y = cljs.core.first(cljs.core.next(arglist__82564));
var more = cljs.core.rest(cljs.core.next(arglist__82564));
return G__82561__delegate.call(this, x, y, more);
});
return G__82561;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___82557.call(this,x);
case  2 :
return distinct_QMARK___82558.call(this,x,y);
default:
return distinct_QMARK___82559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___82559.cljs$lang$applyTo;
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
var r__82565 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__82565)))
{return r__82565;
} else
{if(cljs.core.truth_(r__82565))
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
var sort__82567 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__82568 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__82566 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__82566,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__82566);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__82567.call(this,comp);
case  2 :
return sort__82568.call(this,comp,coll);
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
var sort_by__82570 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__82571 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__82570.call(this,keyfn,comp);
case  3 :
return sort_by__82571.call(this,keyfn,comp,coll);
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
var reduce__82573 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__82574 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__82573.call(this,f,val);
case  3 :
return reduce__82574.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__82580 = (function (f,coll){
var temp__3695__auto____82576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____82576))
{var s__82577 = temp__3695__auto____82576;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__82577),cljs.core.next.call(null,s__82577));
} else
{return f.call(null);
}
});
var seq_reduce__82581 = (function (f,val,coll){
var val__82578 = val;
var coll__82579 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__82579))
{{
var G__82583 = f.call(null,val__82578,cljs.core.first.call(null,coll__82579));
var G__82584 = cljs.core.next.call(null,coll__82579);
val__82578 = G__82583;
coll__82579 = G__82584;
continue;
}
} else
{return val__82578;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__82580.call(this,f,val);
case  3 :
return seq_reduce__82581.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__82585 = null;
var G__82585__82586 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__82585__82587 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__82585 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__82585__82586.call(this,coll,f);
case  3 :
return G__82585__82587.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82585;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___82589 = (function (){
return 0;
});
var _PLUS___82590 = (function (x){
return x;
});
var _PLUS___82591 = (function (x,y){
return (x + y);
});
var _PLUS___82592 = (function() { 
var G__82594__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__82594 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82594__delegate.call(this, x, y, more);
};
G__82594.cljs$lang$maxFixedArity = 2;
G__82594.cljs$lang$applyTo = (function (arglist__82595){
var x = cljs.core.first(arglist__82595);
var y = cljs.core.first(cljs.core.next(arglist__82595));
var more = cljs.core.rest(cljs.core.next(arglist__82595));
return G__82594__delegate.call(this, x, y, more);
});
return G__82594;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___82589.call(this);
case  1 :
return _PLUS___82590.call(this,x);
case  2 :
return _PLUS___82591.call(this,x,y);
default:
return _PLUS___82592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___82592.cljs$lang$applyTo;
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
var ___82596 = (function (x){
return (- x);
});
var ___82597 = (function (x,y){
return (x - y);
});
var ___82598 = (function() { 
var G__82600__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__82600 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82600__delegate.call(this, x, y, more);
};
G__82600.cljs$lang$maxFixedArity = 2;
G__82600.cljs$lang$applyTo = (function (arglist__82601){
var x = cljs.core.first(arglist__82601);
var y = cljs.core.first(cljs.core.next(arglist__82601));
var more = cljs.core.rest(cljs.core.next(arglist__82601));
return G__82600__delegate.call(this, x, y, more);
});
return G__82600;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___82596.call(this,x);
case  2 :
return ___82597.call(this,x,y);
default:
return ___82598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___82598.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___82602 = (function (){
return 1;
});
var _STAR___82603 = (function (x){
return x;
});
var _STAR___82604 = (function (x,y){
return (x * y);
});
var _STAR___82605 = (function() { 
var G__82607__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__82607 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82607__delegate.call(this, x, y, more);
};
G__82607.cljs$lang$maxFixedArity = 2;
G__82607.cljs$lang$applyTo = (function (arglist__82608){
var x = cljs.core.first(arglist__82608);
var y = cljs.core.first(cljs.core.next(arglist__82608));
var more = cljs.core.rest(cljs.core.next(arglist__82608));
return G__82607__delegate.call(this, x, y, more);
});
return G__82607;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___82602.call(this);
case  1 :
return _STAR___82603.call(this,x);
case  2 :
return _STAR___82604.call(this,x,y);
default:
return _STAR___82605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___82605.cljs$lang$applyTo;
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
var _SLASH___82609 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___82610 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___82611 = (function() { 
var G__82613__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__82613 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82613__delegate.call(this, x, y, more);
};
G__82613.cljs$lang$maxFixedArity = 2;
G__82613.cljs$lang$applyTo = (function (arglist__82614){
var x = cljs.core.first(arglist__82614);
var y = cljs.core.first(cljs.core.next(arglist__82614));
var more = cljs.core.rest(cljs.core.next(arglist__82614));
return G__82613__delegate.call(this, x, y, more);
});
return G__82613;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___82609.call(this,x);
case  2 :
return _SLASH___82610.call(this,x,y);
default:
return _SLASH___82611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___82611.cljs$lang$applyTo;
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
var _LT___82615 = (function (x){
return true;
});
var _LT___82616 = (function (x,y){
return (x < y);
});
var _LT___82617 = (function() { 
var G__82619__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__82620 = y;
var G__82621 = cljs.core.first.call(null,more);
var G__82622 = cljs.core.next.call(null,more);
x = G__82620;
y = G__82621;
more = G__82622;
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
var G__82619 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82619__delegate.call(this, x, y, more);
};
G__82619.cljs$lang$maxFixedArity = 2;
G__82619.cljs$lang$applyTo = (function (arglist__82623){
var x = cljs.core.first(arglist__82623);
var y = cljs.core.first(cljs.core.next(arglist__82623));
var more = cljs.core.rest(cljs.core.next(arglist__82623));
return G__82619__delegate.call(this, x, y, more);
});
return G__82619;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___82615.call(this,x);
case  2 :
return _LT___82616.call(this,x,y);
default:
return _LT___82617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___82617.cljs$lang$applyTo;
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
var _LT__EQ___82624 = (function (x){
return true;
});
var _LT__EQ___82625 = (function (x,y){
return (x <= y);
});
var _LT__EQ___82626 = (function() { 
var G__82628__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__82629 = y;
var G__82630 = cljs.core.first.call(null,more);
var G__82631 = cljs.core.next.call(null,more);
x = G__82629;
y = G__82630;
more = G__82631;
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
var G__82628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82628__delegate.call(this, x, y, more);
};
G__82628.cljs$lang$maxFixedArity = 2;
G__82628.cljs$lang$applyTo = (function (arglist__82632){
var x = cljs.core.first(arglist__82632);
var y = cljs.core.first(cljs.core.next(arglist__82632));
var more = cljs.core.rest(cljs.core.next(arglist__82632));
return G__82628__delegate.call(this, x, y, more);
});
return G__82628;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___82624.call(this,x);
case  2 :
return _LT__EQ___82625.call(this,x,y);
default:
return _LT__EQ___82626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___82626.cljs$lang$applyTo;
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
var _GT___82633 = (function (x){
return true;
});
var _GT___82634 = (function (x,y){
return (x > y);
});
var _GT___82635 = (function() { 
var G__82637__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__82638 = y;
var G__82639 = cljs.core.first.call(null,more);
var G__82640 = cljs.core.next.call(null,more);
x = G__82638;
y = G__82639;
more = G__82640;
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
var G__82637 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82637__delegate.call(this, x, y, more);
};
G__82637.cljs$lang$maxFixedArity = 2;
G__82637.cljs$lang$applyTo = (function (arglist__82641){
var x = cljs.core.first(arglist__82641);
var y = cljs.core.first(cljs.core.next(arglist__82641));
var more = cljs.core.rest(cljs.core.next(arglist__82641));
return G__82637__delegate.call(this, x, y, more);
});
return G__82637;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___82633.call(this,x);
case  2 :
return _GT___82634.call(this,x,y);
default:
return _GT___82635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___82635.cljs$lang$applyTo;
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
var _GT__EQ___82642 = (function (x){
return true;
});
var _GT__EQ___82643 = (function (x,y){
return (x >= y);
});
var _GT__EQ___82644 = (function() { 
var G__82646__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__82647 = y;
var G__82648 = cljs.core.first.call(null,more);
var G__82649 = cljs.core.next.call(null,more);
x = G__82647;
y = G__82648;
more = G__82649;
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
var G__82646 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82646__delegate.call(this, x, y, more);
};
G__82646.cljs$lang$maxFixedArity = 2;
G__82646.cljs$lang$applyTo = (function (arglist__82650){
var x = cljs.core.first(arglist__82650);
var y = cljs.core.first(cljs.core.next(arglist__82650));
var more = cljs.core.rest(cljs.core.next(arglist__82650));
return G__82646__delegate.call(this, x, y, more);
});
return G__82646;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___82642.call(this,x);
case  2 :
return _GT__EQ___82643.call(this,x,y);
default:
return _GT__EQ___82644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___82644.cljs$lang$applyTo;
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
var max__82651 = (function (x){
return x;
});
var max__82652 = (function (x,y){
return ((x > y) ? x : y);
});
var max__82653 = (function() { 
var G__82655__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__82655 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82655__delegate.call(this, x, y, more);
};
G__82655.cljs$lang$maxFixedArity = 2;
G__82655.cljs$lang$applyTo = (function (arglist__82656){
var x = cljs.core.first(arglist__82656);
var y = cljs.core.first(cljs.core.next(arglist__82656));
var more = cljs.core.rest(cljs.core.next(arglist__82656));
return G__82655__delegate.call(this, x, y, more);
});
return G__82655;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__82651.call(this,x);
case  2 :
return max__82652.call(this,x,y);
default:
return max__82653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__82653.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__82657 = (function (x){
return x;
});
var min__82658 = (function (x,y){
return ((x < y) ? x : y);
});
var min__82659 = (function() { 
var G__82661__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__82661 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82661__delegate.call(this, x, y, more);
};
G__82661.cljs$lang$maxFixedArity = 2;
G__82661.cljs$lang$applyTo = (function (arglist__82662){
var x = cljs.core.first(arglist__82662);
var y = cljs.core.first(cljs.core.next(arglist__82662));
var more = cljs.core.rest(cljs.core.next(arglist__82662));
return G__82661__delegate.call(this, x, y, more);
});
return G__82661;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__82657.call(this,x);
case  2 :
return min__82658.call(this,x,y);
default:
return min__82659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__82659.cljs$lang$applyTo;
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
var rem__82663 = (n % d);

return cljs.core.fix.call(null,((n - rem__82663) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__82664 = cljs.core.quot.call(null,n,d);

return (n - (d * q__82664));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__82665 = (function (){
return Math.random.call(null);
});
var rand__82666 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__82665.call(this);
case  1 :
return rand__82666.call(this,n);
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
var _EQ__EQ___82668 = (function (x){
return true;
});
var _EQ__EQ___82669 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___82670 = (function() { 
var G__82672__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__82673 = y;
var G__82674 = cljs.core.first.call(null,more);
var G__82675 = cljs.core.next.call(null,more);
x = G__82673;
y = G__82674;
more = G__82675;
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
var G__82672 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82672__delegate.call(this, x, y, more);
};
G__82672.cljs$lang$maxFixedArity = 2;
G__82672.cljs$lang$applyTo = (function (arglist__82676){
var x = cljs.core.first(arglist__82676);
var y = cljs.core.first(cljs.core.next(arglist__82676));
var more = cljs.core.rest(cljs.core.next(arglist__82676));
return G__82672__delegate.call(this, x, y, more);
});
return G__82672;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___82668.call(this,x);
case  2 :
return _EQ__EQ___82669.call(this,x,y);
default:
return _EQ__EQ___82670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___82670.cljs$lang$applyTo;
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
var n__82677 = n;
var xs__82678 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____82679 = xs__82678;

if(cljs.core.truth_(and__3546__auto____82679))
{return (n__82677 > 0);
} else
{return and__3546__auto____82679;
}
})()))
{{
var G__82680 = (n__82677 - 1);
var G__82681 = cljs.core.next.call(null,xs__82678);
n__82677 = G__82680;
xs__82678 = G__82681;
continue;
}
} else
{return xs__82678;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__82686 = null;
var G__82686__82687 = (function (coll,n){
var temp__3695__auto____82682 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____82682))
{var xs__82683 = temp__3695__auto____82682;

return cljs.core.first.call(null,xs__82683);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__82686__82688 = (function (coll,n,not_found){
var temp__3695__auto____82684 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____82684))
{var xs__82685 = temp__3695__auto____82684;

return cljs.core.first.call(null,xs__82685);
} else
{return not_found;
}
});
G__82686 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__82686__82687.call(this,coll,n);
case  3 :
return G__82686__82688.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82686;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___82690 = (function (){
return "";
});
var str_STAR___82691 = (function (x){
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
var str_STAR___82692 = (function() { 
var G__82694__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__82695 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__82696 = cljs.core.next.call(null,more);
sb = G__82695;
more = G__82696;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__82694 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__82694__delegate.call(this, x, ys);
};
G__82694.cljs$lang$maxFixedArity = 1;
G__82694.cljs$lang$applyTo = (function (arglist__82697){
var x = cljs.core.first(arglist__82697);
var ys = cljs.core.rest(arglist__82697);
return G__82694__delegate.call(this, x, ys);
});
return G__82694;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___82690.call(this);
case  1 :
return str_STAR___82691.call(this,x);
default:
return str_STAR___82692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___82692.cljs$lang$applyTo;
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
var str__82698 = (function (){
return "";
});
var str__82699 = (function (x){
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
var str__82700 = (function() { 
var G__82702__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__82702 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__82702__delegate.call(this, x, ys);
};
G__82702.cljs$lang$maxFixedArity = 1;
G__82702.cljs$lang$applyTo = (function (arglist__82703){
var x = cljs.core.first(arglist__82703);
var ys = cljs.core.rest(arglist__82703);
return G__82702__delegate.call(this, x, ys);
});
return G__82702;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__82698.call(this);
case  1 :
return str__82699.call(this,x);
default:
return str__82700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__82700.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__82704 = (function (s,start){
return s.substring(start);
});
var subs__82705 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__82704.call(this,s,start);
case  3 :
return subs__82705.call(this,s,start,end);
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
var symbol__82707 = (function (name){
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
var symbol__82708 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__82707.call(this,ns);
case  2 :
return symbol__82708.call(this,ns,name);
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
var keyword__82710 = (function (name){
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
var keyword__82711 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__82710.call(this,ns);
case  2 :
return keyword__82711.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__82713 = cljs.core.seq.call(null,x);
var ys__82714 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__82713)))
{return cljs.core.nil_QMARK_.call(null,ys__82714);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__82714)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__82713),cljs.core.first.call(null,ys__82714))))
{{
var G__82715 = cljs.core.next.call(null,xs__82713);
var G__82716 = cljs.core.next.call(null,ys__82714);
xs__82713 = G__82715;
ys__82714 = G__82716;
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
return cljs.core.reduce.call(null,(function (p1__82717_SHARP_,p2__82718_SHARP_){
return cljs.core.hash_combine.call(null,p1__82717_SHARP_,cljs.core.hash.call(null,p2__82718_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__82719__82720 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__82719__82720))
{var G__82722__82724 = cljs.core.first.call(null,G__82719__82720);
var vec__82723__82725 = G__82722__82724;
var key_name__82726 = cljs.core.nth.call(null,vec__82723__82725,0,null);
var f__82727 = cljs.core.nth.call(null,vec__82723__82725,1,null);
var G__82719__82728 = G__82719__82720;

var G__82722__82729 = G__82722__82724;
var G__82719__82730 = G__82719__82728;

while(true){
var vec__82731__82732 = G__82722__82729;
var key_name__82733 = cljs.core.nth.call(null,vec__82731__82732,0,null);
var f__82734 = cljs.core.nth.call(null,vec__82731__82732,1,null);
var G__82719__82735 = G__82719__82730;

var str_name__82736 = cljs.core.name.call(null,key_name__82733);

obj[str_name__82736] = f__82734;
var temp__3698__auto____82737 = cljs.core.next.call(null,G__82719__82735);

if(cljs.core.truth_(temp__3698__auto____82737))
{var G__82719__82738 = temp__3698__auto____82737;

{
var G__82739 = cljs.core.first.call(null,G__82719__82738);
var G__82740 = G__82719__82738;
G__82722__82729 = G__82739;
G__82719__82730 = G__82740;
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
var this__82741 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__82742 = this;
return (new cljs.core.List(this__82742.meta,o,coll,(this__82742.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__82743 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__82744 = this;
return this__82744.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__82745 = this;
return this__82745.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__82746 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__82747 = this;
return this__82747.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__82748 = this;
return this__82748.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__82749 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__82750 = this;
return (new cljs.core.List(meta,this__82750.first,this__82750.rest,this__82750.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__82751 = this;
return this__82751.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__82752 = this;
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
var this__82753 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__82754 = this;
return (new cljs.core.List(this__82754.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__82755 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__82756 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__82757 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__82758 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__82759 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__82760 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__82761 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__82762 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__82763 = this;
return this__82763.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__82764 = this;
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
list.cljs$lang$applyTo = (function (arglist__82765){
var items = cljs.core.seq( arglist__82765 );;
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
var this__82766 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__82767 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__82768 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__82769 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__82769.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__82770 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__82771 = this;
return this__82771.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__82772 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__82772.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__82772.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__82773 = this;
return this__82773.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__82774 = this;
return (new cljs.core.Cons(meta,this__82774.first,this__82774.rest));
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
var G__82775 = null;
var G__82775__82776 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__82775__82777 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__82775 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__82775__82776.call(this,string,f);
case  3 :
return G__82775__82777.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82775;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__82779 = null;
var G__82779__82780 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__82779__82781 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__82779 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__82779__82780.call(this,string,k);
case  3 :
return G__82779__82781.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82779;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__82783 = null;
var G__82783__82784 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__82783__82785 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__82783 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__82783__82784.call(this,string,n);
case  3 :
return G__82783__82785.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82783;
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
var G__82787 = null;
var G__82787__82788 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__82787__82789 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__82787 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__82787__82788.call(this,this$,coll);
case  3 :
return G__82787__82789.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__82787;
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
var x__82791 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__82791;
} else
{lazy_seq.x = x__82791.call(null);
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
var this__82792 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__82793 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__82794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__82795 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__82795.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__82796 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__82797 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__82798 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__82799 = this;
return this__82799.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__82800 = this;
return (new cljs.core.LazySeq(meta,this__82800.realized,this__82800.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__82801 = cljs.core.array.call(null);

var s__82802 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__82802)))
{ary__82801.push(cljs.core.first.call(null,s__82802));
{
var G__82803 = cljs.core.next.call(null,s__82802);
s__82802 = G__82803;
continue;
}
} else
{return ary__82801;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__82804 = s;
var i__82805 = n;
var sum__82806 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____82807 = (i__82805 > 0);

if(cljs.core.truth_(and__3546__auto____82807))
{return cljs.core.seq.call(null,s__82804);
} else
{return and__3546__auto____82807;
}
})()))
{{
var G__82808 = cljs.core.next.call(null,s__82804);
var G__82809 = (i__82805 - 1);
var G__82810 = (sum__82806 + 1);
s__82804 = G__82808;
i__82805 = G__82809;
sum__82806 = G__82810;
continue;
}
} else
{return sum__82806;
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
var concat__82814 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__82815 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__82816 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__82811 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__82811))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__82811),concat.call(null,cljs.core.rest.call(null,s__82811),y));
} else
{return y;
}
})));
});
var concat__82817 = (function() { 
var G__82819__delegate = function (x,y,zs){
var cat__82813 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__82812 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__82812))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__82812),cat.call(null,cljs.core.rest.call(null,xys__82812),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__82813.call(null,concat.call(null,x,y),zs);
};
var G__82819 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82819__delegate.call(this, x, y, zs);
};
G__82819.cljs$lang$maxFixedArity = 2;
G__82819.cljs$lang$applyTo = (function (arglist__82820){
var x = cljs.core.first(arglist__82820);
var y = cljs.core.first(cljs.core.next(arglist__82820));
var zs = cljs.core.rest(cljs.core.next(arglist__82820));
return G__82819__delegate.call(this, x, y, zs);
});
return G__82819;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__82814.call(this);
case  1 :
return concat__82815.call(this,x);
case  2 :
return concat__82816.call(this,x,y);
default:
return concat__82817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__82817.cljs$lang$applyTo;
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
var list_STAR___82821 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___82822 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___82823 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___82824 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___82825 = (function() { 
var G__82827__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__82827 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__82827__delegate.call(this, a, b, c, d, more);
};
G__82827.cljs$lang$maxFixedArity = 4;
G__82827.cljs$lang$applyTo = (function (arglist__82828){
var a = cljs.core.first(arglist__82828);
var b = cljs.core.first(cljs.core.next(arglist__82828));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82828)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82828))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82828))));
return G__82827__delegate.call(this, a, b, c, d, more);
});
return G__82827;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___82821.call(this,a);
case  2 :
return list_STAR___82822.call(this,a,b);
case  3 :
return list_STAR___82823.call(this,a,b,c);
case  4 :
return list_STAR___82824.call(this,a,b,c,d);
default:
return list_STAR___82825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___82825.cljs$lang$applyTo;
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
var apply__82838 = (function (f,args){
var fixed_arity__82829 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__82829 + 1)) <= fixed_arity__82829)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__82839 = (function (f,x,args){
var arglist__82830 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__82831 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__82830,fixed_arity__82831) <= fixed_arity__82831)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__82830));
} else
{return f.cljs$lang$applyTo(arglist__82830);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__82830));
}
});
var apply__82840 = (function (f,x,y,args){
var arglist__82832 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__82833 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__82832,fixed_arity__82833) <= fixed_arity__82833)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__82832));
} else
{return f.cljs$lang$applyTo(arglist__82832);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__82832));
}
});
var apply__82841 = (function (f,x,y,z,args){
var arglist__82834 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__82835 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__82834,fixed_arity__82835) <= fixed_arity__82835)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__82834));
} else
{return f.cljs$lang$applyTo(arglist__82834);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__82834));
}
});
var apply__82842 = (function() { 
var G__82844__delegate = function (f,a,b,c,d,args){
var arglist__82836 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__82837 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__82836,fixed_arity__82837) <= fixed_arity__82837)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__82836));
} else
{return f.cljs$lang$applyTo(arglist__82836);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__82836));
}
};
var G__82844 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__82844__delegate.call(this, f, a, b, c, d, args);
};
G__82844.cljs$lang$maxFixedArity = 5;
G__82844.cljs$lang$applyTo = (function (arglist__82845){
var f = cljs.core.first(arglist__82845);
var a = cljs.core.first(cljs.core.next(arglist__82845));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82845)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82845))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82845)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82845)))));
return G__82844__delegate.call(this, f, a, b, c, d, args);
});
return G__82844;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__82838.call(this,f,a);
case  3 :
return apply__82839.call(this,f,a,b);
case  4 :
return apply__82840.call(this,f,a,b,c);
case  5 :
return apply__82841.call(this,f,a,b,c,d);
default:
return apply__82842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__82842.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__82846){
var obj = cljs.core.first(arglist__82846);
var f = cljs.core.first(cljs.core.next(arglist__82846));
var args = cljs.core.rest(cljs.core.next(arglist__82846));
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
var not_EQ___82847 = (function (x){
return false;
});
var not_EQ___82848 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___82849 = (function() { 
var G__82851__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__82851 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82851__delegate.call(this, x, y, more);
};
G__82851.cljs$lang$maxFixedArity = 2;
G__82851.cljs$lang$applyTo = (function (arglist__82852){
var x = cljs.core.first(arglist__82852);
var y = cljs.core.first(cljs.core.next(arglist__82852));
var more = cljs.core.rest(cljs.core.next(arglist__82852));
return G__82851__delegate.call(this, x, y, more);
});
return G__82851;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___82847.call(this,x);
case  2 :
return not_EQ___82848.call(this,x,y);
default:
return not_EQ___82849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___82849.cljs$lang$applyTo;
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
var G__82853 = pred;
var G__82854 = cljs.core.next.call(null,coll);
pred = G__82853;
coll = G__82854;
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
{var or__3548__auto____82855 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____82855))
{return or__3548__auto____82855;
} else
{{
var G__82856 = pred;
var G__82857 = cljs.core.next.call(null,coll);
pred = G__82856;
coll = G__82857;
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
var G__82858 = null;
var G__82858__82859 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__82858__82860 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__82858__82861 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__82858__82862 = (function() { 
var G__82864__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__82864 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__82864__delegate.call(this, x, y, zs);
};
G__82864.cljs$lang$maxFixedArity = 2;
G__82864.cljs$lang$applyTo = (function (arglist__82865){
var x = cljs.core.first(arglist__82865);
var y = cljs.core.first(cljs.core.next(arglist__82865));
var zs = cljs.core.rest(cljs.core.next(arglist__82865));
return G__82864__delegate.call(this, x, y, zs);
});
return G__82864;
})()
;
G__82858 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__82858__82859.call(this);
case  1 :
return G__82858__82860.call(this,x);
case  2 :
return G__82858__82861.call(this,x,y);
default:
return G__82858__82862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__82858.cljs$lang$maxFixedArity = 2;
G__82858.cljs$lang$applyTo = G__82858__82862.cljs$lang$applyTo;
return G__82858;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__82866__delegate = function (args){
return x;
};
var G__82866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__82866__delegate.call(this, args);
};
G__82866.cljs$lang$maxFixedArity = 0;
G__82866.cljs$lang$applyTo = (function (arglist__82867){
var args = cljs.core.seq( arglist__82867 );;
return G__82866__delegate.call(this, args);
});
return G__82866;
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
var comp__82871 = (function (){
return cljs.core.identity;
});
var comp__82872 = (function (f){
return f;
});
var comp__82873 = (function (f,g){
return (function() {
var G__82877 = null;
var G__82877__82878 = (function (){
return f.call(null,g.call(null));
});
var G__82877__82879 = (function (x){
return f.call(null,g.call(null,x));
});
var G__82877__82880 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__82877__82881 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__82877__82882 = (function() { 
var G__82884__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__82884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82884__delegate.call(this, x, y, z, args);
};
G__82884.cljs$lang$maxFixedArity = 3;
G__82884.cljs$lang$applyTo = (function (arglist__82885){
var x = cljs.core.first(arglist__82885);
var y = cljs.core.first(cljs.core.next(arglist__82885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82885)));
return G__82884__delegate.call(this, x, y, z, args);
});
return G__82884;
})()
;
G__82877 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__82877__82878.call(this);
case  1 :
return G__82877__82879.call(this,x);
case  2 :
return G__82877__82880.call(this,x,y);
case  3 :
return G__82877__82881.call(this,x,y,z);
default:
return G__82877__82882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__82877.cljs$lang$maxFixedArity = 3;
G__82877.cljs$lang$applyTo = G__82877__82882.cljs$lang$applyTo;
return G__82877;
})()
});
var comp__82874 = (function (f,g,h){
return (function() {
var G__82886 = null;
var G__82886__82887 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__82886__82888 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__82886__82889 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__82886__82890 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__82886__82891 = (function() { 
var G__82893__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__82893 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82893__delegate.call(this, x, y, z, args);
};
G__82893.cljs$lang$maxFixedArity = 3;
G__82893.cljs$lang$applyTo = (function (arglist__82894){
var x = cljs.core.first(arglist__82894);
var y = cljs.core.first(cljs.core.next(arglist__82894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82894)));
return G__82893__delegate.call(this, x, y, z, args);
});
return G__82893;
})()
;
G__82886 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__82886__82887.call(this);
case  1 :
return G__82886__82888.call(this,x);
case  2 :
return G__82886__82889.call(this,x,y);
case  3 :
return G__82886__82890.call(this,x,y,z);
default:
return G__82886__82891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__82886.cljs$lang$maxFixedArity = 3;
G__82886.cljs$lang$applyTo = G__82886__82891.cljs$lang$applyTo;
return G__82886;
})()
});
var comp__82875 = (function() { 
var G__82895__delegate = function (f1,f2,f3,fs){
var fs__82868 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__82896__delegate = function (args){
var ret__82869 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__82868),args);
var fs__82870 = cljs.core.next.call(null,fs__82868);

while(true){
if(cljs.core.truth_(fs__82870))
{{
var G__82897 = cljs.core.first.call(null,fs__82870).call(null,ret__82869);
var G__82898 = cljs.core.next.call(null,fs__82870);
ret__82869 = G__82897;
fs__82870 = G__82898;
continue;
}
} else
{return ret__82869;
}
break;
}
};
var G__82896 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__82896__delegate.call(this, args);
};
G__82896.cljs$lang$maxFixedArity = 0;
G__82896.cljs$lang$applyTo = (function (arglist__82899){
var args = cljs.core.seq( arglist__82899 );;
return G__82896__delegate.call(this, args);
});
return G__82896;
})()
;
};
var G__82895 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82895__delegate.call(this, f1, f2, f3, fs);
};
G__82895.cljs$lang$maxFixedArity = 3;
G__82895.cljs$lang$applyTo = (function (arglist__82900){
var f1 = cljs.core.first(arglist__82900);
var f2 = cljs.core.first(cljs.core.next(arglist__82900));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82900)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82900)));
return G__82895__delegate.call(this, f1, f2, f3, fs);
});
return G__82895;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__82871.call(this);
case  1 :
return comp__82872.call(this,f1);
case  2 :
return comp__82873.call(this,f1,f2);
case  3 :
return comp__82874.call(this,f1,f2,f3);
default:
return comp__82875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__82875.cljs$lang$applyTo;
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
var partial__82901 = (function (f,arg1){
return (function() { 
var G__82906__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__82906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__82906__delegate.call(this, args);
};
G__82906.cljs$lang$maxFixedArity = 0;
G__82906.cljs$lang$applyTo = (function (arglist__82907){
var args = cljs.core.seq( arglist__82907 );;
return G__82906__delegate.call(this, args);
});
return G__82906;
})()
;
});
var partial__82902 = (function (f,arg1,arg2){
return (function() { 
var G__82908__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__82908 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__82908__delegate.call(this, args);
};
G__82908.cljs$lang$maxFixedArity = 0;
G__82908.cljs$lang$applyTo = (function (arglist__82909){
var args = cljs.core.seq( arglist__82909 );;
return G__82908__delegate.call(this, args);
});
return G__82908;
})()
;
});
var partial__82903 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__82910__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__82910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__82910__delegate.call(this, args);
};
G__82910.cljs$lang$maxFixedArity = 0;
G__82910.cljs$lang$applyTo = (function (arglist__82911){
var args = cljs.core.seq( arglist__82911 );;
return G__82910__delegate.call(this, args);
});
return G__82910;
})()
;
});
var partial__82904 = (function() { 
var G__82912__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__82913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__82913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__82913__delegate.call(this, args);
};
G__82913.cljs$lang$maxFixedArity = 0;
G__82913.cljs$lang$applyTo = (function (arglist__82914){
var args = cljs.core.seq( arglist__82914 );;
return G__82913__delegate.call(this, args);
});
return G__82913;
})()
;
};
var G__82912 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__82912__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__82912.cljs$lang$maxFixedArity = 4;
G__82912.cljs$lang$applyTo = (function (arglist__82915){
var f = cljs.core.first(arglist__82915);
var arg1 = cljs.core.first(cljs.core.next(arglist__82915));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82915)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82915))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82915))));
return G__82912__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__82912;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__82901.call(this,f,arg1);
case  3 :
return partial__82902.call(this,f,arg1,arg2);
case  4 :
return partial__82903.call(this,f,arg1,arg2,arg3);
default:
return partial__82904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__82904.cljs$lang$applyTo;
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
var fnil__82916 = (function (f,x){
return (function() {
var G__82920 = null;
var G__82920__82921 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__82920__82922 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__82920__82923 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__82920__82924 = (function() { 
var G__82926__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__82926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82926__delegate.call(this, a, b, c, ds);
};
G__82926.cljs$lang$maxFixedArity = 3;
G__82926.cljs$lang$applyTo = (function (arglist__82927){
var a = cljs.core.first(arglist__82927);
var b = cljs.core.first(cljs.core.next(arglist__82927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82927)));
return G__82926__delegate.call(this, a, b, c, ds);
});
return G__82926;
})()
;
G__82920 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__82920__82921.call(this,a);
case  2 :
return G__82920__82922.call(this,a,b);
case  3 :
return G__82920__82923.call(this,a,b,c);
default:
return G__82920__82924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__82920.cljs$lang$maxFixedArity = 3;
G__82920.cljs$lang$applyTo = G__82920__82924.cljs$lang$applyTo;
return G__82920;
})()
});
var fnil__82917 = (function (f,x,y){
return (function() {
var G__82928 = null;
var G__82928__82929 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__82928__82930 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__82928__82931 = (function() { 
var G__82933__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__82933 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82933__delegate.call(this, a, b, c, ds);
};
G__82933.cljs$lang$maxFixedArity = 3;
G__82933.cljs$lang$applyTo = (function (arglist__82934){
var a = cljs.core.first(arglist__82934);
var b = cljs.core.first(cljs.core.next(arglist__82934));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82934)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82934)));
return G__82933__delegate.call(this, a, b, c, ds);
});
return G__82933;
})()
;
G__82928 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__82928__82929.call(this,a,b);
case  3 :
return G__82928__82930.call(this,a,b,c);
default:
return G__82928__82931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__82928.cljs$lang$maxFixedArity = 3;
G__82928.cljs$lang$applyTo = G__82928__82931.cljs$lang$applyTo;
return G__82928;
})()
});
var fnil__82918 = (function (f,x,y,z){
return (function() {
var G__82935 = null;
var G__82935__82936 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__82935__82937 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__82935__82938 = (function() { 
var G__82940__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__82940 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__82940__delegate.call(this, a, b, c, ds);
};
G__82940.cljs$lang$maxFixedArity = 3;
G__82940.cljs$lang$applyTo = (function (arglist__82941){
var a = cljs.core.first(arglist__82941);
var b = cljs.core.first(cljs.core.next(arglist__82941));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82941)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82941)));
return G__82940__delegate.call(this, a, b, c, ds);
});
return G__82940;
})()
;
G__82935 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__82935__82936.call(this,a,b);
case  3 :
return G__82935__82937.call(this,a,b,c);
default:
return G__82935__82938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__82935.cljs$lang$maxFixedArity = 3;
G__82935.cljs$lang$applyTo = G__82935__82938.cljs$lang$applyTo;
return G__82935;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__82916.call(this,f,x);
case  3 :
return fnil__82917.call(this,f,x,y);
case  4 :
return fnil__82918.call(this,f,x,y,z);
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
var mapi__82944 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____82942 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____82942))
{var s__82943 = temp__3698__auto____82942;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__82943)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__82943)));
} else
{return null;
}
})));
});

return mapi__82944.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____82945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____82945))
{var s__82946 = temp__3698__auto____82945;

var x__82947 = f.call(null,cljs.core.first.call(null,s__82946));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__82947)))
{return keep.call(null,f,cljs.core.rest.call(null,s__82946));
} else
{return cljs.core.cons.call(null,x__82947,keep.call(null,f,cljs.core.rest.call(null,s__82946)));
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
var keepi__82957 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____82954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____82954))
{var s__82955 = temp__3698__auto____82954;

var x__82956 = f.call(null,idx,cljs.core.first.call(null,s__82955));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__82956)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__82955));
} else
{return cljs.core.cons.call(null,x__82956,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__82955)));
}
} else
{return null;
}
})));
});

return keepi__82957.call(null,0,coll);
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
var every_pred__83002 = (function (p){
return (function() {
var ep1 = null;
var ep1__83007 = (function (){
return true;
});
var ep1__83008 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__83009 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82964 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____82964))
{return p.call(null,y);
} else
{return and__3546__auto____82964;
}
})());
});
var ep1__83010 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82965 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____82965))
{var and__3546__auto____82966 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____82966))
{return p.call(null,z);
} else
{return and__3546__auto____82966;
}
} else
{return and__3546__auto____82965;
}
})());
});
var ep1__83011 = (function() { 
var G__83013__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82967 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____82967))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____82967;
}
})());
};
var G__83013 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83013__delegate.call(this, x, y, z, args);
};
G__83013.cljs$lang$maxFixedArity = 3;
G__83013.cljs$lang$applyTo = (function (arglist__83014){
var x = cljs.core.first(arglist__83014);
var y = cljs.core.first(cljs.core.next(arglist__83014));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83014)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83014)));
return G__83013__delegate.call(this, x, y, z, args);
});
return G__83013;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__83007.call(this);
case  1 :
return ep1__83008.call(this,x);
case  2 :
return ep1__83009.call(this,x,y);
case  3 :
return ep1__83010.call(this,x,y,z);
default:
return ep1__83011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__83011.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__83003 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__83015 = (function (){
return true;
});
var ep2__83016 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82968 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____82968))
{return p2.call(null,x);
} else
{return and__3546__auto____82968;
}
})());
});
var ep2__83017 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82969 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____82969))
{var and__3546__auto____82970 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____82970))
{var and__3546__auto____82971 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____82971))
{return p2.call(null,y);
} else
{return and__3546__auto____82971;
}
} else
{return and__3546__auto____82970;
}
} else
{return and__3546__auto____82969;
}
})());
});
var ep2__83018 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82972 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____82972))
{var and__3546__auto____82973 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____82973))
{var and__3546__auto____82974 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____82974))
{var and__3546__auto____82975 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____82975))
{var and__3546__auto____82976 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____82976))
{return p2.call(null,z);
} else
{return and__3546__auto____82976;
}
} else
{return and__3546__auto____82975;
}
} else
{return and__3546__auto____82974;
}
} else
{return and__3546__auto____82973;
}
} else
{return and__3546__auto____82972;
}
})());
});
var ep2__83019 = (function() { 
var G__83021__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82977 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____82977))
{return cljs.core.every_QMARK_.call(null,(function (p1__82948_SHARP_){
var and__3546__auto____82978 = p1.call(null,p1__82948_SHARP_);

if(cljs.core.truth_(and__3546__auto____82978))
{return p2.call(null,p1__82948_SHARP_);
} else
{return and__3546__auto____82978;
}
}),args);
} else
{return and__3546__auto____82977;
}
})());
};
var G__83021 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83021__delegate.call(this, x, y, z, args);
};
G__83021.cljs$lang$maxFixedArity = 3;
G__83021.cljs$lang$applyTo = (function (arglist__83022){
var x = cljs.core.first(arglist__83022);
var y = cljs.core.first(cljs.core.next(arglist__83022));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83022)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83022)));
return G__83021__delegate.call(this, x, y, z, args);
});
return G__83021;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__83015.call(this);
case  1 :
return ep2__83016.call(this,x);
case  2 :
return ep2__83017.call(this,x,y);
case  3 :
return ep2__83018.call(this,x,y,z);
default:
return ep2__83019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__83019.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__83004 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__83023 = (function (){
return true;
});
var ep3__83024 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82979 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____82979))
{var and__3546__auto____82980 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____82980))
{return p3.call(null,x);
} else
{return and__3546__auto____82980;
}
} else
{return and__3546__auto____82979;
}
})());
});
var ep3__83025 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82981 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____82981))
{var and__3546__auto____82982 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____82982))
{var and__3546__auto____82983 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____82983))
{var and__3546__auto____82984 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____82984))
{var and__3546__auto____82985 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____82985))
{return p3.call(null,y);
} else
{return and__3546__auto____82985;
}
} else
{return and__3546__auto____82984;
}
} else
{return and__3546__auto____82983;
}
} else
{return and__3546__auto____82982;
}
} else
{return and__3546__auto____82981;
}
})());
});
var ep3__83026 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82986 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____82986))
{var and__3546__auto____82987 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____82987))
{var and__3546__auto____82988 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____82988))
{var and__3546__auto____82989 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____82989))
{var and__3546__auto____82990 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____82990))
{var and__3546__auto____82991 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____82991))
{var and__3546__auto____82992 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____82992))
{var and__3546__auto____82993 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____82993))
{return p3.call(null,z);
} else
{return and__3546__auto____82993;
}
} else
{return and__3546__auto____82992;
}
} else
{return and__3546__auto____82991;
}
} else
{return and__3546__auto____82990;
}
} else
{return and__3546__auto____82989;
}
} else
{return and__3546__auto____82988;
}
} else
{return and__3546__auto____82987;
}
} else
{return and__3546__auto____82986;
}
})());
});
var ep3__83027 = (function() { 
var G__83029__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____82994 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____82994))
{return cljs.core.every_QMARK_.call(null,(function (p1__82949_SHARP_){
var and__3546__auto____82995 = p1.call(null,p1__82949_SHARP_);

if(cljs.core.truth_(and__3546__auto____82995))
{var and__3546__auto____82996 = p2.call(null,p1__82949_SHARP_);

if(cljs.core.truth_(and__3546__auto____82996))
{return p3.call(null,p1__82949_SHARP_);
} else
{return and__3546__auto____82996;
}
} else
{return and__3546__auto____82995;
}
}),args);
} else
{return and__3546__auto____82994;
}
})());
};
var G__83029 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83029__delegate.call(this, x, y, z, args);
};
G__83029.cljs$lang$maxFixedArity = 3;
G__83029.cljs$lang$applyTo = (function (arglist__83030){
var x = cljs.core.first(arglist__83030);
var y = cljs.core.first(cljs.core.next(arglist__83030));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83030)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83030)));
return G__83029__delegate.call(this, x, y, z, args);
});
return G__83029;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__83023.call(this);
case  1 :
return ep3__83024.call(this,x);
case  2 :
return ep3__83025.call(this,x,y);
case  3 :
return ep3__83026.call(this,x,y,z);
default:
return ep3__83027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__83027.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__83005 = (function() { 
var G__83031__delegate = function (p1,p2,p3,ps){
var ps__82997 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__83032 = (function (){
return true;
});
var epn__83033 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__82950_SHARP_){
return p1__82950_SHARP_.call(null,x);
}),ps__82997);
});
var epn__83034 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__82951_SHARP_){
var and__3546__auto____82998 = p1__82951_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____82998))
{return p1__82951_SHARP_.call(null,y);
} else
{return and__3546__auto____82998;
}
}),ps__82997);
});
var epn__83035 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__82952_SHARP_){
var and__3546__auto____82999 = p1__82952_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____82999))
{var and__3546__auto____83000 = p1__82952_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____83000))
{return p1__82952_SHARP_.call(null,z);
} else
{return and__3546__auto____83000;
}
} else
{return and__3546__auto____82999;
}
}),ps__82997);
});
var epn__83036 = (function() { 
var G__83038__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____83001 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____83001))
{return cljs.core.every_QMARK_.call(null,(function (p1__82953_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__82953_SHARP_,args);
}),ps__82997);
} else
{return and__3546__auto____83001;
}
})());
};
var G__83038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83038__delegate.call(this, x, y, z, args);
};
G__83038.cljs$lang$maxFixedArity = 3;
G__83038.cljs$lang$applyTo = (function (arglist__83039){
var x = cljs.core.first(arglist__83039);
var y = cljs.core.first(cljs.core.next(arglist__83039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83039)));
return G__83038__delegate.call(this, x, y, z, args);
});
return G__83038;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__83032.call(this);
case  1 :
return epn__83033.call(this,x);
case  2 :
return epn__83034.call(this,x,y);
case  3 :
return epn__83035.call(this,x,y,z);
default:
return epn__83036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__83036.cljs$lang$applyTo;
return epn;
})()
};
var G__83031 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83031__delegate.call(this, p1, p2, p3, ps);
};
G__83031.cljs$lang$maxFixedArity = 3;
G__83031.cljs$lang$applyTo = (function (arglist__83040){
var p1 = cljs.core.first(arglist__83040);
var p2 = cljs.core.first(cljs.core.next(arglist__83040));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83040)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83040)));
return G__83031__delegate.call(this, p1, p2, p3, ps);
});
return G__83031;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__83002.call(this,p1);
case  2 :
return every_pred__83003.call(this,p1,p2);
case  3 :
return every_pred__83004.call(this,p1,p2,p3);
default:
return every_pred__83005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__83005.cljs$lang$applyTo;
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
var some_fn__83080 = (function (p){
return (function() {
var sp1 = null;
var sp1__83085 = (function (){
return null;
});
var sp1__83086 = (function (x){
return p.call(null,x);
});
var sp1__83087 = (function (x,y){
var or__3548__auto____83042 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____83042))
{return or__3548__auto____83042;
} else
{return p.call(null,y);
}
});
var sp1__83088 = (function (x,y,z){
var or__3548__auto____83043 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____83043))
{return or__3548__auto____83043;
} else
{var or__3548__auto____83044 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____83044))
{return or__3548__auto____83044;
} else
{return p.call(null,z);
}
}
});
var sp1__83089 = (function() { 
var G__83091__delegate = function (x,y,z,args){
var or__3548__auto____83045 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____83045))
{return or__3548__auto____83045;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__83091 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83091__delegate.call(this, x, y, z, args);
};
G__83091.cljs$lang$maxFixedArity = 3;
G__83091.cljs$lang$applyTo = (function (arglist__83092){
var x = cljs.core.first(arglist__83092);
var y = cljs.core.first(cljs.core.next(arglist__83092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83092)));
return G__83091__delegate.call(this, x, y, z, args);
});
return G__83091;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__83085.call(this);
case  1 :
return sp1__83086.call(this,x);
case  2 :
return sp1__83087.call(this,x,y);
case  3 :
return sp1__83088.call(this,x,y,z);
default:
return sp1__83089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__83089.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__83081 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__83093 = (function (){
return null;
});
var sp2__83094 = (function (x){
var or__3548__auto____83046 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____83046))
{return or__3548__auto____83046;
} else
{return p2.call(null,x);
}
});
var sp2__83095 = (function (x,y){
var or__3548__auto____83047 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____83047))
{return or__3548__auto____83047;
} else
{var or__3548__auto____83048 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____83048))
{return or__3548__auto____83048;
} else
{var or__3548__auto____83049 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____83049))
{return or__3548__auto____83049;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__83096 = (function (x,y,z){
var or__3548__auto____83050 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____83050))
{return or__3548__auto____83050;
} else
{var or__3548__auto____83051 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____83051))
{return or__3548__auto____83051;
} else
{var or__3548__auto____83052 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____83052))
{return or__3548__auto____83052;
} else
{var or__3548__auto____83053 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____83053))
{return or__3548__auto____83053;
} else
{var or__3548__auto____83054 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____83054))
{return or__3548__auto____83054;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__83097 = (function() { 
var G__83099__delegate = function (x,y,z,args){
var or__3548__auto____83055 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____83055))
{return or__3548__auto____83055;
} else
{return cljs.core.some.call(null,(function (p1__82958_SHARP_){
var or__3548__auto____83056 = p1.call(null,p1__82958_SHARP_);

if(cljs.core.truth_(or__3548__auto____83056))
{return or__3548__auto____83056;
} else
{return p2.call(null,p1__82958_SHARP_);
}
}),args);
}
};
var G__83099 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83099__delegate.call(this, x, y, z, args);
};
G__83099.cljs$lang$maxFixedArity = 3;
G__83099.cljs$lang$applyTo = (function (arglist__83100){
var x = cljs.core.first(arglist__83100);
var y = cljs.core.first(cljs.core.next(arglist__83100));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83100)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83100)));
return G__83099__delegate.call(this, x, y, z, args);
});
return G__83099;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__83093.call(this);
case  1 :
return sp2__83094.call(this,x);
case  2 :
return sp2__83095.call(this,x,y);
case  3 :
return sp2__83096.call(this,x,y,z);
default:
return sp2__83097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__83097.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__83082 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__83101 = (function (){
return null;
});
var sp3__83102 = (function (x){
var or__3548__auto____83057 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____83057))
{return or__3548__auto____83057;
} else
{var or__3548__auto____83058 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____83058))
{return or__3548__auto____83058;
} else
{return p3.call(null,x);
}
}
});
var sp3__83103 = (function (x,y){
var or__3548__auto____83059 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____83059))
{return or__3548__auto____83059;
} else
{var or__3548__auto____83060 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____83060))
{return or__3548__auto____83060;
} else
{var or__3548__auto____83061 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____83061))
{return or__3548__auto____83061;
} else
{var or__3548__auto____83062 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____83062))
{return or__3548__auto____83062;
} else
{var or__3548__auto____83063 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____83063))
{return or__3548__auto____83063;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__83104 = (function (x,y,z){
var or__3548__auto____83064 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____83064))
{return or__3548__auto____83064;
} else
{var or__3548__auto____83065 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____83065))
{return or__3548__auto____83065;
} else
{var or__3548__auto____83066 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____83066))
{return or__3548__auto____83066;
} else
{var or__3548__auto____83067 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____83067))
{return or__3548__auto____83067;
} else
{var or__3548__auto____83068 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____83068))
{return or__3548__auto____83068;
} else
{var or__3548__auto____83069 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____83069))
{return or__3548__auto____83069;
} else
{var or__3548__auto____83070 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____83070))
{return or__3548__auto____83070;
} else
{var or__3548__auto____83071 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____83071))
{return or__3548__auto____83071;
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
var sp3__83105 = (function() { 
var G__83107__delegate = function (x,y,z,args){
var or__3548__auto____83072 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____83072))
{return or__3548__auto____83072;
} else
{return cljs.core.some.call(null,(function (p1__82959_SHARP_){
var or__3548__auto____83073 = p1.call(null,p1__82959_SHARP_);

if(cljs.core.truth_(or__3548__auto____83073))
{return or__3548__auto____83073;
} else
{var or__3548__auto____83074 = p2.call(null,p1__82959_SHARP_);

if(cljs.core.truth_(or__3548__auto____83074))
{return or__3548__auto____83074;
} else
{return p3.call(null,p1__82959_SHARP_);
}
}
}),args);
}
};
var G__83107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83107__delegate.call(this, x, y, z, args);
};
G__83107.cljs$lang$maxFixedArity = 3;
G__83107.cljs$lang$applyTo = (function (arglist__83108){
var x = cljs.core.first(arglist__83108);
var y = cljs.core.first(cljs.core.next(arglist__83108));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83108)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83108)));
return G__83107__delegate.call(this, x, y, z, args);
});
return G__83107;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__83101.call(this);
case  1 :
return sp3__83102.call(this,x);
case  2 :
return sp3__83103.call(this,x,y);
case  3 :
return sp3__83104.call(this,x,y,z);
default:
return sp3__83105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__83105.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__83083 = (function() { 
var G__83109__delegate = function (p1,p2,p3,ps){
var ps__83075 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__83110 = (function (){
return null;
});
var spn__83111 = (function (x){
return cljs.core.some.call(null,(function (p1__82960_SHARP_){
return p1__82960_SHARP_.call(null,x);
}),ps__83075);
});
var spn__83112 = (function (x,y){
return cljs.core.some.call(null,(function (p1__82961_SHARP_){
var or__3548__auto____83076 = p1__82961_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____83076))
{return or__3548__auto____83076;
} else
{return p1__82961_SHARP_.call(null,y);
}
}),ps__83075);
});
var spn__83113 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__82962_SHARP_){
var or__3548__auto____83077 = p1__82962_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____83077))
{return or__3548__auto____83077;
} else
{var or__3548__auto____83078 = p1__82962_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____83078))
{return or__3548__auto____83078;
} else
{return p1__82962_SHARP_.call(null,z);
}
}
}),ps__83075);
});
var spn__83114 = (function() { 
var G__83116__delegate = function (x,y,z,args){
var or__3548__auto____83079 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____83079))
{return or__3548__auto____83079;
} else
{return cljs.core.some.call(null,(function (p1__82963_SHARP_){
return cljs.core.some.call(null,p1__82963_SHARP_,args);
}),ps__83075);
}
};
var G__83116 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83116__delegate.call(this, x, y, z, args);
};
G__83116.cljs$lang$maxFixedArity = 3;
G__83116.cljs$lang$applyTo = (function (arglist__83117){
var x = cljs.core.first(arglist__83117);
var y = cljs.core.first(cljs.core.next(arglist__83117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83117)));
return G__83116__delegate.call(this, x, y, z, args);
});
return G__83116;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__83110.call(this);
case  1 :
return spn__83111.call(this,x);
case  2 :
return spn__83112.call(this,x,y);
case  3 :
return spn__83113.call(this,x,y,z);
default:
return spn__83114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__83114.cljs$lang$applyTo;
return spn;
})()
};
var G__83109 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83109__delegate.call(this, p1, p2, p3, ps);
};
G__83109.cljs$lang$maxFixedArity = 3;
G__83109.cljs$lang$applyTo = (function (arglist__83118){
var p1 = cljs.core.first(arglist__83118);
var p2 = cljs.core.first(cljs.core.next(arglist__83118));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83118)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83118)));
return G__83109__delegate.call(this, p1, p2, p3, ps);
});
return G__83109;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__83080.call(this,p1);
case  2 :
return some_fn__83081.call(this,p1,p2);
case  3 :
return some_fn__83082.call(this,p1,p2,p3);
default:
return some_fn__83083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__83083.cljs$lang$applyTo;
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
var map__83131 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83119))
{var s__83120 = temp__3698__auto____83119;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__83120)),map.call(null,f,cljs.core.rest.call(null,s__83120)));
} else
{return null;
}
})));
});
var map__83132 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__83121 = cljs.core.seq.call(null,c1);
var s2__83122 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____83123 = s1__83121;

if(cljs.core.truth_(and__3546__auto____83123))
{return s2__83122;
} else
{return and__3546__auto____83123;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__83121),cljs.core.first.call(null,s2__83122)),map.call(null,f,cljs.core.rest.call(null,s1__83121),cljs.core.rest.call(null,s2__83122)));
} else
{return null;
}
})));
});
var map__83133 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__83124 = cljs.core.seq.call(null,c1);
var s2__83125 = cljs.core.seq.call(null,c2);
var s3__83126 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____83127 = s1__83124;

if(cljs.core.truth_(and__3546__auto____83127))
{var and__3546__auto____83128 = s2__83125;

if(cljs.core.truth_(and__3546__auto____83128))
{return s3__83126;
} else
{return and__3546__auto____83128;
}
} else
{return and__3546__auto____83127;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__83124),cljs.core.first.call(null,s2__83125),cljs.core.first.call(null,s3__83126)),map.call(null,f,cljs.core.rest.call(null,s1__83124),cljs.core.rest.call(null,s2__83125),cljs.core.rest.call(null,s3__83126)));
} else
{return null;
}
})));
});
var map__83134 = (function() { 
var G__83136__delegate = function (f,c1,c2,c3,colls){
var step__83130 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__83129 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__83129)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__83129),step.call(null,map.call(null,cljs.core.rest,ss__83129)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__83041_SHARP_){
return cljs.core.apply.call(null,f,p1__83041_SHARP_);
}),step__83130.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__83136 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__83136__delegate.call(this, f, c1, c2, c3, colls);
};
G__83136.cljs$lang$maxFixedArity = 4;
G__83136.cljs$lang$applyTo = (function (arglist__83137){
var f = cljs.core.first(arglist__83137);
var c1 = cljs.core.first(cljs.core.next(arglist__83137));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83137)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83137))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83137))));
return G__83136__delegate.call(this, f, c1, c2, c3, colls);
});
return G__83136;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__83131.call(this,f,c1);
case  3 :
return map__83132.call(this,f,c1,c2);
case  4 :
return map__83133.call(this,f,c1,c2,c3);
default:
return map__83134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__83134.cljs$lang$applyTo;
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
{var temp__3698__auto____83138 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83138))
{var s__83139 = temp__3698__auto____83138;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__83139),take.call(null,(n - 1),cljs.core.rest.call(null,s__83139)));
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
var step__83142 = (function (n,coll){
while(true){
var s__83140 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____83141 = (n > 0);

if(cljs.core.truth_(and__3546__auto____83141))
{return s__83140;
} else
{return and__3546__auto____83141;
}
})()))
{{
var G__83143 = (n - 1);
var G__83144 = cljs.core.rest.call(null,s__83140);
n = G__83143;
coll = G__83144;
continue;
}
} else
{return s__83140;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__83142.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__83145 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__83146 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__83145.call(this,n);
case  2 :
return drop_last__83146.call(this,n,s);
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
var s__83148 = cljs.core.seq.call(null,coll);
var lead__83149 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__83149))
{{
var G__83150 = cljs.core.next.call(null,s__83148);
var G__83151 = cljs.core.next.call(null,lead__83149);
s__83148 = G__83150;
lead__83149 = G__83151;
continue;
}
} else
{return s__83148;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__83154 = (function (pred,coll){
while(true){
var s__83152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____83153 = s__83152;

if(cljs.core.truth_(and__3546__auto____83153))
{return pred.call(null,cljs.core.first.call(null,s__83152));
} else
{return and__3546__auto____83153;
}
})()))
{{
var G__83155 = pred;
var G__83156 = cljs.core.rest.call(null,s__83152);
pred = G__83155;
coll = G__83156;
continue;
}
} else
{return s__83152;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__83154.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83157 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83157))
{var s__83158 = temp__3698__auto____83157;

return cljs.core.concat.call(null,s__83158,cycle.call(null,s__83158));
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
var repeat__83159 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__83160 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__83159.call(this,n);
case  2 :
return repeat__83160.call(this,n,x);
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
var repeatedly__83162 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__83163 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__83162.call(this,n);
case  2 :
return repeatedly__83163.call(this,n,f);
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
var interleave__83169 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__83165 = cljs.core.seq.call(null,c1);
var s2__83166 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____83167 = s1__83165;

if(cljs.core.truth_(and__3546__auto____83167))
{return s2__83166;
} else
{return and__3546__auto____83167;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__83165),cljs.core.cons.call(null,cljs.core.first.call(null,s2__83166),interleave.call(null,cljs.core.rest.call(null,s1__83165),cljs.core.rest.call(null,s2__83166))));
} else
{return null;
}
})));
});
var interleave__83170 = (function() { 
var G__83172__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__83168 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__83168)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__83168),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__83168)));
} else
{return null;
}
})));
};
var G__83172 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83172__delegate.call(this, c1, c2, colls);
};
G__83172.cljs$lang$maxFixedArity = 2;
G__83172.cljs$lang$applyTo = (function (arglist__83173){
var c1 = cljs.core.first(arglist__83173);
var c2 = cljs.core.first(cljs.core.next(arglist__83173));
var colls = cljs.core.rest(cljs.core.next(arglist__83173));
return G__83172__delegate.call(this, c1, c2, colls);
});
return G__83172;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__83169.call(this,c1,c2);
default:
return interleave__83170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__83170.cljs$lang$applyTo;
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
var cat__83176 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____83174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____83174))
{var coll__83175 = temp__3695__auto____83174;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__83175),cat.call(null,cljs.core.rest.call(null,coll__83175),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__83176.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__83177 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__83178 = (function() { 
var G__83180__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__83180 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__83180__delegate.call(this, f, coll, colls);
};
G__83180.cljs$lang$maxFixedArity = 2;
G__83180.cljs$lang$applyTo = (function (arglist__83181){
var f = cljs.core.first(arglist__83181);
var coll = cljs.core.first(cljs.core.next(arglist__83181));
var colls = cljs.core.rest(cljs.core.next(arglist__83181));
return G__83180__delegate.call(this, f, coll, colls);
});
return G__83180;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__83177.call(this,f,coll);
default:
return mapcat__83178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__83178.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83182 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83182))
{var s__83183 = temp__3698__auto____83182;

var f__83184 = cljs.core.first.call(null,s__83183);
var r__83185 = cljs.core.rest.call(null,s__83183);

if(cljs.core.truth_(pred.call(null,f__83184)))
{return cljs.core.cons.call(null,f__83184,filter.call(null,pred,r__83185));
} else
{return filter.call(null,pred,r__83185);
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
var walk__83187 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__83187.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__83186_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__83186_SHARP_));
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
var partition__83194 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__83195 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83188))
{var s__83189 = temp__3698__auto____83188;

var p__83190 = cljs.core.take.call(null,n,s__83189);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__83190))))
{return cljs.core.cons.call(null,p__83190,partition.call(null,n,step,cljs.core.drop.call(null,step,s__83189)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__83196 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83191))
{var s__83192 = temp__3698__auto____83191;

var p__83193 = cljs.core.take.call(null,n,s__83192);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__83193))))
{return cljs.core.cons.call(null,p__83193,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__83192)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__83193,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__83194.call(this,n,step);
case  3 :
return partition__83195.call(this,n,step,pad);
case  4 :
return partition__83196.call(this,n,step,pad,coll);
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
var get_in__83202 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__83203 = (function (m,ks,not_found){
var sentinel__83198 = cljs.core.lookup_sentinel;
var m__83199 = m;
var ks__83200 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__83200))
{var m__83201 = cljs.core.get.call(null,m__83199,cljs.core.first.call(null,ks__83200),sentinel__83198);

if(cljs.core.truth_((sentinel__83198 === m__83201)))
{return not_found;
} else
{{
var G__83205 = sentinel__83198;
var G__83206 = m__83201;
var G__83207 = cljs.core.next.call(null,ks__83200);
sentinel__83198 = G__83205;
m__83199 = G__83206;
ks__83200 = G__83207;
continue;
}
}
} else
{return m__83199;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__83202.call(this,m,ks);
case  3 :
return get_in__83203.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__83208,v){
var vec__83209__83210 = p__83208;
var k__83211 = cljs.core.nth.call(null,vec__83209__83210,0,null);
var ks__83212 = cljs.core.nthnext.call(null,vec__83209__83210,1);

if(cljs.core.truth_(ks__83212))
{return cljs.core.assoc.call(null,m,k__83211,assoc_in.call(null,cljs.core.get.call(null,m,k__83211),ks__83212,v));
} else
{return cljs.core.assoc.call(null,m,k__83211,v);
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
var update_in__delegate = function (m,p__83213,f,args){
var vec__83214__83215 = p__83213;
var k__83216 = cljs.core.nth.call(null,vec__83214__83215,0,null);
var ks__83217 = cljs.core.nthnext.call(null,vec__83214__83215,1);

if(cljs.core.truth_(ks__83217))
{return cljs.core.assoc.call(null,m,k__83216,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__83216),ks__83217,f,args));
} else
{return cljs.core.assoc.call(null,m,k__83216,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__83216),args));
}
};
var update_in = function (m,p__83213,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__83213, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__83218){
var m = cljs.core.first(arglist__83218);
var p__83213 = cljs.core.first(cljs.core.next(arglist__83218));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83218)));
return update_in__delegate.call(this, m, p__83213, f, args);
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
var this__83219 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__83246 = null;
var G__83246__83247 = (function (coll,k){
var this__83220 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__83246__83248 = (function (coll,k,not_found){
var this__83221 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__83246 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83246__83247.call(this,coll,k);
case  3 :
return G__83246__83248.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83246;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__83222 = this;
var new_array__83223 = cljs.core.aclone.call(null,this__83222.array);

(new_array__83223[k] = v);
return (new cljs.core.Vector(this__83222.meta,new_array__83223));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__83250 = null;
var G__83250__83251 = (function (coll,k){
var this__83224 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__83250__83252 = (function (coll,k,not_found){
var this__83225 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__83250 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83250__83251.call(this,coll,k);
case  3 :
return G__83250__83252.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83250;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__83226 = this;
var new_array__83227 = cljs.core.aclone.call(null,this__83226.array);

new_array__83227.push(o);
return (new cljs.core.Vector(this__83226.meta,new_array__83227));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__83254 = null;
var G__83254__83255 = (function (v,f){
var this__83228 = this;
return cljs.core.ci_reduce.call(null,this__83228.array,f);
});
var G__83254__83256 = (function (v,f,start){
var this__83229 = this;
return cljs.core.ci_reduce.call(null,this__83229.array,f,start);
});
G__83254 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__83254__83255.call(this,v,f);
case  3 :
return G__83254__83256.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83254;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__83230 = this;
if(cljs.core.truth_((this__83230.array.length > 0)))
{var vector_seq__83231 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__83230.array.length)))
{return cljs.core.cons.call(null,(this__83230.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__83231.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__83232 = this;
return this__83232.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__83233 = this;
var count__83234 = this__83233.array.length;

if(cljs.core.truth_((count__83234 > 0)))
{return (this__83233.array[(count__83234 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__83235 = this;
if(cljs.core.truth_((this__83235.array.length > 0)))
{var new_array__83236 = cljs.core.aclone.call(null,this__83235.array);

new_array__83236.pop();
return (new cljs.core.Vector(this__83235.meta,new_array__83236));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__83237 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83239 = this;
return (new cljs.core.Vector(meta,this__83239.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83240 = this;
return this__83240.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__83258 = null;
var G__83258__83259 = (function (coll,n){
var this__83241 = this;
if(cljs.core.truth_((function (){var and__3546__auto____83242 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____83242))
{return (n < this__83241.array.length);
} else
{return and__3546__auto____83242;
}
})()))
{return (this__83241.array[n]);
} else
{return null;
}
});
var G__83258__83260 = (function (coll,n,not_found){
var this__83243 = this;
if(cljs.core.truth_((function (){var and__3546__auto____83244 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____83244))
{return (n < this__83243.array.length);
} else
{return and__3546__auto____83244;
}
})()))
{return (this__83243.array[n]);
} else
{return not_found;
}
});
G__83258 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__83258__83259.call(this,coll,n);
case  3 :
return G__83258__83260.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83258;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83245 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__83245.meta);
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
vector.cljs$lang$applyTo = (function (arglist__83262){
var args = cljs.core.seq( arglist__83262 );;
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
var this__83263 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__83285 = null;
var G__83285__83286 = (function (coll,k){
var this__83264 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__83285__83287 = (function (coll,k,not_found){
var this__83265 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__83285 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83285__83286.call(this,coll,k);
case  3 :
return G__83285__83287.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83285;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__83266 = this;
var v_pos__83267 = (this__83266.start + key);

return (new cljs.core.Subvec(this__83266.meta,cljs.core._assoc.call(null,this__83266.v,v_pos__83267,val),this__83266.start,((this__83266.end > (v_pos__83267 + 1)) ? this__83266.end : (v_pos__83267 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__83289 = null;
var G__83289__83290 = (function (coll,k){
var this__83268 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__83289__83291 = (function (coll,k,not_found){
var this__83269 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__83289 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83289__83290.call(this,coll,k);
case  3 :
return G__83289__83291.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83289;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__83270 = this;
return (new cljs.core.Subvec(this__83270.meta,cljs.core._assoc_n.call(null,this__83270.v,this__83270.end,o),this__83270.start,(this__83270.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__83293 = null;
var G__83293__83294 = (function (coll,f){
var this__83271 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__83293__83295 = (function (coll,f,start){
var this__83272 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__83293 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__83293__83294.call(this,coll,f);
case  3 :
return G__83293__83295.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83293;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__83273 = this;
var subvec_seq__83274 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__83273.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__83273.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__83274.call(null,this__83273.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__83275 = this;
return (this__83275.end - this__83275.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__83276 = this;
return cljs.core._nth.call(null,this__83276.v,(this__83276.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__83277 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__83277.start,this__83277.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__83277.meta,this__83277.v,this__83277.start,(this__83277.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__83278 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83279 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83280 = this;
return (new cljs.core.Subvec(meta,this__83280.v,this__83280.start,this__83280.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83281 = this;
return this__83281.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__83297 = null;
var G__83297__83298 = (function (coll,n){
var this__83282 = this;
return cljs.core._nth.call(null,this__83282.v,(this__83282.start + n));
});
var G__83297__83299 = (function (coll,n,not_found){
var this__83283 = this;
return cljs.core._nth.call(null,this__83283.v,(this__83283.start + n),not_found);
});
G__83297 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__83297__83298.call(this,coll,n);
case  3 :
return G__83297__83299.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83297;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83284 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__83284.meta);
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
var subvec__83301 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__83302 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__83301.call(this,v,start);
case  3 :
return subvec__83302.call(this,v,start,end);
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
var this__83304 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__83305 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83306 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83307 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__83307.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__83308 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__83309 = this;
return cljs.core._first.call(null,this__83309.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__83310 = this;
var temp__3695__auto____83311 = cljs.core.next.call(null,this__83310.front);

if(cljs.core.truth_(temp__3695__auto____83311))
{var f1__83312 = temp__3695__auto____83311;

return (new cljs.core.PersistentQueueSeq(this__83310.meta,f1__83312,this__83310.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__83310.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__83310.meta,this__83310.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83313 = this;
return this__83313.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83314 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__83314.front,this__83314.rear));
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
var this__83315 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__83316 = this;
if(cljs.core.truth_(this__83316.front))
{return (new cljs.core.PersistentQueue(this__83316.meta,(this__83316.count + 1),this__83316.front,cljs.core.conj.call(null,(function (){var or__3548__auto____83317 = this__83316.rear;

if(cljs.core.truth_(or__3548__auto____83317))
{return or__3548__auto____83317;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__83316.meta,(this__83316.count + 1),cljs.core.conj.call(null,this__83316.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__83318 = this;
var rear__83319 = cljs.core.seq.call(null,this__83318.rear);

if(cljs.core.truth_((function (){var or__3548__auto____83320 = this__83318.front;

if(cljs.core.truth_(or__3548__auto____83320))
{return or__3548__auto____83320;
} else
{return rear__83319;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__83318.front,cljs.core.seq.call(null,rear__83319)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__83321 = this;
return this__83321.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__83322 = this;
return cljs.core._first.call(null,this__83322.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__83323 = this;
if(cljs.core.truth_(this__83323.front))
{var temp__3695__auto____83324 = cljs.core.next.call(null,this__83323.front);

if(cljs.core.truth_(temp__3695__auto____83324))
{var f1__83325 = temp__3695__auto____83324;

return (new cljs.core.PersistentQueue(this__83323.meta,(this__83323.count - 1),f1__83325,this__83323.rear));
} else
{return (new cljs.core.PersistentQueue(this__83323.meta,(this__83323.count - 1),cljs.core.seq.call(null,this__83323.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__83326 = this;
return cljs.core.first.call(null,this__83326.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__83327 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83328 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83329 = this;
return (new cljs.core.PersistentQueue(meta,this__83329.count,this__83329.front,this__83329.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83330 = this;
return this__83330.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83331 = this;
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
var this__83332 = this;
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
var len__83333 = array.length;

var i__83334 = 0;

while(true){
if(cljs.core.truth_((i__83334 < len__83333)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__83334]))))
{return i__83334;
} else
{{
var G__83335 = (i__83334 + incr);
i__83334 = G__83335;
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
var obj_map_contains_key_QMARK___83337 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___83338 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____83336 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____83336))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____83336;
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
return obj_map_contains_key_QMARK___83337.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___83338.call(this,k,strobj,true_val,false_val);
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
var this__83341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__83362 = null;
var G__83362__83363 = (function (coll,k){
var this__83342 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__83362__83364 = (function (coll,k,not_found){
var this__83343 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__83343.strobj,(this__83343.strobj[k]),not_found);
});
G__83362 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83362__83363.call(this,coll,k);
case  3 :
return G__83362__83364.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83362;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__83344 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__83345 = goog.object.clone.call(null,this__83344.strobj);
var overwrite_QMARK___83346 = new_strobj__83345.hasOwnProperty(k);

(new_strobj__83345[k] = v);
if(cljs.core.truth_(overwrite_QMARK___83346))
{return (new cljs.core.ObjMap(this__83344.meta,this__83344.keys,new_strobj__83345));
} else
{var new_keys__83347 = cljs.core.aclone.call(null,this__83344.keys);

new_keys__83347.push(k);
return (new cljs.core.ObjMap(this__83344.meta,new_keys__83347,new_strobj__83345));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__83344.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__83348 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__83348.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__83366 = null;
var G__83366__83367 = (function (coll,k){
var this__83349 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__83366__83368 = (function (coll,k,not_found){
var this__83350 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__83366 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83366__83367.call(this,coll,k);
case  3 :
return G__83366__83368.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83366;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__83351 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__83352 = this;
if(cljs.core.truth_((this__83352.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__83340_SHARP_){
return cljs.core.vector.call(null,p1__83340_SHARP_,(this__83352.strobj[p1__83340_SHARP_]));
}),this__83352.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__83353 = this;
return this__83353.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83354 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83355 = this;
return (new cljs.core.ObjMap(meta,this__83355.keys,this__83355.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83356 = this;
return this__83356.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83357 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__83357.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__83358 = this;
if(cljs.core.truth_((function (){var and__3546__auto____83359 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____83359))
{return this__83358.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____83359;
}
})()))
{var new_keys__83360 = cljs.core.aclone.call(null,this__83358.keys);
var new_strobj__83361 = goog.object.clone.call(null,this__83358.strobj);

new_keys__83360.splice(cljs.core.scan_array.call(null,1,k,new_keys__83360),1);
cljs.core.js_delete.call(null,new_strobj__83361,k);
return (new cljs.core.ObjMap(this__83358.meta,new_keys__83360,new_strobj__83361));
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
var this__83371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__83403 = null;
var G__83403__83404 = (function (coll,k){
var this__83372 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__83403__83405 = (function (coll,k,not_found){
var this__83373 = this;
var bucket__83374 = (this__83373.hashobj[cljs.core.hash.call(null,k)]);
var i__83375 = (cljs.core.truth_(bucket__83374)?cljs.core.scan_array.call(null,2,k,bucket__83374):null);

if(cljs.core.truth_(i__83375))
{return (bucket__83374[(i__83375 + 1)]);
} else
{return not_found;
}
});
G__83403 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83403__83404.call(this,coll,k);
case  3 :
return G__83403__83405.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83403;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__83376 = this;
var h__83377 = cljs.core.hash.call(null,k);
var bucket__83378 = (this__83376.hashobj[h__83377]);

if(cljs.core.truth_(bucket__83378))
{var new_bucket__83379 = cljs.core.aclone.call(null,bucket__83378);
var new_hashobj__83380 = goog.object.clone.call(null,this__83376.hashobj);

(new_hashobj__83380[h__83377] = new_bucket__83379);
var temp__3695__auto____83381 = cljs.core.scan_array.call(null,2,k,new_bucket__83379);

if(cljs.core.truth_(temp__3695__auto____83381))
{var i__83382 = temp__3695__auto____83381;

(new_bucket__83379[(i__83382 + 1)] = v);
return (new cljs.core.HashMap(this__83376.meta,this__83376.count,new_hashobj__83380));
} else
{new_bucket__83379.push(k,v);
return (new cljs.core.HashMap(this__83376.meta,(this__83376.count + 1),new_hashobj__83380));
}
} else
{var new_hashobj__83383 = goog.object.clone.call(null,this__83376.hashobj);

(new_hashobj__83383[h__83377] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__83376.meta,(this__83376.count + 1),new_hashobj__83383));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__83384 = this;
var bucket__83385 = (this__83384.hashobj[cljs.core.hash.call(null,k)]);
var i__83386 = (cljs.core.truth_(bucket__83385)?cljs.core.scan_array.call(null,2,k,bucket__83385):null);

if(cljs.core.truth_(i__83386))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__83407 = null;
var G__83407__83408 = (function (coll,k){
var this__83387 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__83407__83409 = (function (coll,k,not_found){
var this__83388 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__83407 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83407__83408.call(this,coll,k);
case  3 :
return G__83407__83409.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83407;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__83389 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__83390 = this;
if(cljs.core.truth_((this__83390.count > 0)))
{var hashes__83391 = cljs.core.js_keys.call(null,this__83390.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__83370_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__83390.hashobj[p1__83370_SHARP_])));
}),hashes__83391);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__83392 = this;
return this__83392.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83393 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83394 = this;
return (new cljs.core.HashMap(meta,this__83394.count,this__83394.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83395 = this;
return this__83395.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83396 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__83396.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__83397 = this;
var h__83398 = cljs.core.hash.call(null,k);
var bucket__83399 = (this__83397.hashobj[h__83398]);
var i__83400 = (cljs.core.truth_(bucket__83399)?cljs.core.scan_array.call(null,2,k,bucket__83399):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__83400)))
{return coll;
} else
{var new_hashobj__83401 = goog.object.clone.call(null,this__83397.hashobj);

if(cljs.core.truth_((3 > bucket__83399.length)))
{cljs.core.js_delete.call(null,new_hashobj__83401,h__83398);
} else
{var new_bucket__83402 = cljs.core.aclone.call(null,bucket__83399);

new_bucket__83402.splice(i__83400,2);
(new_hashobj__83401[h__83398] = new_bucket__83402);
}
return (new cljs.core.HashMap(this__83397.meta,(this__83397.count - 1),new_hashobj__83401));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__83411 = ks.length;

var i__83412 = 0;
var out__83413 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__83412 < len__83411)))
{{
var G__83414 = (i__83412 + 1);
var G__83415 = cljs.core.assoc.call(null,out__83413,(ks[i__83412]),(vs[i__83412]));
i__83412 = G__83414;
out__83413 = G__83415;
continue;
}
} else
{return out__83413;
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
var in$__83416 = cljs.core.seq.call(null,keyvals);
var out__83417 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__83416))
{{
var G__83418 = cljs.core.nnext.call(null,in$__83416);
var G__83419 = cljs.core.assoc.call(null,out__83417,cljs.core.first.call(null,in$__83416),cljs.core.second.call(null,in$__83416));
in$__83416 = G__83418;
out__83417 = G__83419;
continue;
}
} else
{return out__83417;
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
hash_map.cljs$lang$applyTo = (function (arglist__83420){
var keyvals = cljs.core.seq( arglist__83420 );;
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
{return cljs.core.reduce.call(null,(function (p1__83421_SHARP_,p2__83422_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____83423 = p1__83421_SHARP_;

if(cljs.core.truth_(or__3548__auto____83423))
{return or__3548__auto____83423;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__83422_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__83424){
var maps = cljs.core.seq( arglist__83424 );;
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
{var merge_entry__83427 = (function (m,e){
var k__83425 = cljs.core.first.call(null,e);
var v__83426 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__83425)))
{return cljs.core.assoc.call(null,m,k__83425,f.call(null,cljs.core.get.call(null,m,k__83425),v__83426));
} else
{return cljs.core.assoc.call(null,m,k__83425,v__83426);
}
});
var merge2__83429 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__83427,(function (){var or__3548__auto____83428 = m1;

if(cljs.core.truth_(or__3548__auto____83428))
{return or__3548__auto____83428;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__83429,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__83430){
var f = cljs.core.first(arglist__83430);
var maps = cljs.core.rest(arglist__83430);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__83432 = cljs.core.ObjMap.fromObject([],{});
var keys__83433 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__83433))
{var key__83434 = cljs.core.first.call(null,keys__83433);
var entry__83435 = cljs.core.get.call(null,map,key__83434,"﷐'user/not-found");

{
var G__83436 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__83435,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__83432,key__83434,entry__83435):ret__83432);
var G__83437 = cljs.core.next.call(null,keys__83433);
ret__83432 = G__83436;
keys__83433 = G__83437;
continue;
}
} else
{return ret__83432;
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
var this__83438 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__83453 = null;
var G__83453__83454 = (function (coll,v){
var this__83439 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__83453__83455 = (function (coll,v,not_found){
var this__83440 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__83440.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__83453 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__83453__83454.call(this,coll,v);
case  3 :
return G__83453__83455.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83453;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__83457 = null;
var G__83457__83458 = (function (coll,k){
var this__83441 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__83457__83459 = (function (coll,k,not_found){
var this__83442 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__83457 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__83457__83458.call(this,coll,k);
case  3 :
return G__83457__83459.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83457;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__83443 = this;
return (new cljs.core.Set(this__83443.meta,cljs.core.assoc.call(null,this__83443.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__83444 = this;
return cljs.core.keys.call(null,this__83444.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__83445 = this;
return (new cljs.core.Set(this__83445.meta,cljs.core.dissoc.call(null,this__83445.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__83446 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__83447 = this;
var and__3546__auto____83448 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____83448))
{var and__3546__auto____83449 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____83449))
{return cljs.core.every_QMARK_.call(null,(function (p1__83431_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__83431_SHARP_);
}),other);
} else
{return and__3546__auto____83449;
}
} else
{return and__3546__auto____83448;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__83450 = this;
return (new cljs.core.Set(meta,this__83450.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__83451 = this;
return this__83451.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__83452 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__83452.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__83462 = cljs.core.seq.call(null,coll);
var out__83463 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__83462))))
{{
var G__83464 = cljs.core.rest.call(null,in$__83462);
var G__83465 = cljs.core.conj.call(null,out__83463,cljs.core.first.call(null,in$__83462));
in$__83462 = G__83464;
out__83463 = G__83465;
continue;
}
} else
{return out__83463;
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
{var n__83466 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____83467 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____83467))
{var e__83468 = temp__3695__auto____83467;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__83468));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__83466,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__83461_SHARP_){
var temp__3695__auto____83469 = cljs.core.find.call(null,smap,p1__83461_SHARP_);

if(cljs.core.truth_(temp__3695__auto____83469))
{var e__83470 = temp__3695__auto____83469;

return cljs.core.second.call(null,e__83470);
} else
{return p1__83461_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__83478 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__83471,seen){
while(true){
var vec__83472__83473 = p__83471;
var f__83474 = cljs.core.nth.call(null,vec__83472__83473,0,null);
var xs__83475 = vec__83472__83473;

var temp__3698__auto____83476 = cljs.core.seq.call(null,xs__83475);

if(cljs.core.truth_(temp__3698__auto____83476))
{var s__83477 = temp__3698__auto____83476;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__83474)))
{{
var G__83479 = cljs.core.rest.call(null,s__83477);
var G__83480 = seen;
p__83471 = G__83479;
seen = G__83480;
continue;
}
} else
{return cljs.core.cons.call(null,f__83474,step.call(null,cljs.core.rest.call(null,s__83477),cljs.core.conj.call(null,seen,f__83474)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__83478.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__83481 = cljs.core.Vector.fromArray([]);
var s__83482 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__83482)))
{{
var G__83483 = cljs.core.conj.call(null,ret__83481,cljs.core.first.call(null,s__83482));
var G__83484 = cljs.core.next.call(null,s__83482);
ret__83481 = G__83483;
s__83482 = G__83484;
continue;
}
} else
{return cljs.core.seq.call(null,ret__83481);
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
{if(cljs.core.truth_((function (){var or__3548__auto____83485 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____83485))
{return or__3548__auto____83485;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__83486 = x.lastIndexOf("/");

if(cljs.core.truth_((i__83486 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__83486 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____83487 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____83487))
{return or__3548__auto____83487;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__83488 = x.lastIndexOf("/");

if(cljs.core.truth_((i__83488 > -1)))
{return cljs.core.subs.call(null,x,2,i__83488);
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
var map__83491 = cljs.core.ObjMap.fromObject([],{});
var ks__83492 = cljs.core.seq.call(null,keys);
var vs__83493 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____83494 = ks__83492;

if(cljs.core.truth_(and__3546__auto____83494))
{return vs__83493;
} else
{return and__3546__auto____83494;
}
})()))
{{
var G__83495 = cljs.core.assoc.call(null,map__83491,cljs.core.first.call(null,ks__83492),cljs.core.first.call(null,vs__83493));
var G__83496 = cljs.core.next.call(null,ks__83492);
var G__83497 = cljs.core.next.call(null,vs__83493);
map__83491 = G__83495;
ks__83492 = G__83496;
vs__83493 = G__83497;
continue;
}
} else
{return map__83491;
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
var max_key__83500 = (function (k,x){
return x;
});
var max_key__83501 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__83502 = (function() { 
var G__83504__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__83489_SHARP_,p2__83490_SHARP_){
return max_key.call(null,k,p1__83489_SHARP_,p2__83490_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__83504 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83504__delegate.call(this, k, x, y, more);
};
G__83504.cljs$lang$maxFixedArity = 3;
G__83504.cljs$lang$applyTo = (function (arglist__83505){
var k = cljs.core.first(arglist__83505);
var x = cljs.core.first(cljs.core.next(arglist__83505));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83505)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83505)));
return G__83504__delegate.call(this, k, x, y, more);
});
return G__83504;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__83500.call(this,k,x);
case  3 :
return max_key__83501.call(this,k,x,y);
default:
return max_key__83502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__83502.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__83506 = (function (k,x){
return x;
});
var min_key__83507 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__83508 = (function() { 
var G__83510__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__83498_SHARP_,p2__83499_SHARP_){
return min_key.call(null,k,p1__83498_SHARP_,p2__83499_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__83510 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83510__delegate.call(this, k, x, y, more);
};
G__83510.cljs$lang$maxFixedArity = 3;
G__83510.cljs$lang$applyTo = (function (arglist__83511){
var k = cljs.core.first(arglist__83511);
var x = cljs.core.first(cljs.core.next(arglist__83511));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83511)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83511)));
return G__83510__delegate.call(this, k, x, y, more);
});
return G__83510;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__83506.call(this,k,x);
case  3 :
return min_key__83507.call(this,k,x,y);
default:
return min_key__83508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__83508.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__83514 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__83515 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83512 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83512))
{var s__83513 = temp__3698__auto____83512;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__83513),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__83513)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__83514.call(this,n,step);
case  3 :
return partition_all__83515.call(this,n,step,coll);
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
var temp__3698__auto____83517 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83517))
{var s__83518 = temp__3698__auto____83517;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__83518))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__83518),take_while.call(null,pred,cljs.core.rest.call(null,s__83518)));
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
var this__83519 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__83520 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__83536 = null;
var G__83536__83537 = (function (rng,f){
var this__83521 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__83536__83538 = (function (rng,f,s){
var this__83522 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__83536 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__83536__83537.call(this,rng,f);
case  3 :
return G__83536__83538.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83536;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__83523 = this;
var comp__83524 = (cljs.core.truth_((this__83523.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__83524.call(null,this__83523.start,this__83523.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__83525 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__83525.end - this__83525.start) / this__83525.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__83526 = this;
return this__83526.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__83527 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__83527.meta,(this__83527.start + this__83527.step),this__83527.end,this__83527.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__83528 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__83529 = this;
return (new cljs.core.Range(meta,this__83529.start,this__83529.end,this__83529.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__83530 = this;
return this__83530.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__83540 = null;
var G__83540__83541 = (function (rng,n){
var this__83531 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__83531.start + (n * this__83531.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____83532 = (this__83531.start > this__83531.end);

if(cljs.core.truth_(and__3546__auto____83532))
{return cljs.core._EQ_.call(null,this__83531.step,0);
} else
{return and__3546__auto____83532;
}
})()))
{return this__83531.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__83540__83542 = (function (rng,n,not_found){
var this__83533 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__83533.start + (n * this__83533.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____83534 = (this__83533.start > this__83533.end);

if(cljs.core.truth_(and__3546__auto____83534))
{return cljs.core._EQ_.call(null,this__83533.step,0);
} else
{return and__3546__auto____83534;
}
})()))
{return this__83533.start;
} else
{return not_found;
}
}
});
G__83540 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__83540__83541.call(this,rng,n);
case  3 :
return G__83540__83542.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__83540;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__83535 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__83535.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__83544 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__83545 = (function (end){
return range.call(null,0,end,1);
});
var range__83546 = (function (start,end){
return range.call(null,start,end,1);
});
var range__83547 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__83544.call(this);
case  1 :
return range__83545.call(this,start);
case  2 :
return range__83546.call(this,start,end);
case  3 :
return range__83547.call(this,start,end,step);
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
var temp__3698__auto____83549 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83549))
{var s__83550 = temp__3698__auto____83549;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__83550),take_nth.call(null,n,cljs.core.drop.call(null,n,s__83550)));
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
var temp__3698__auto____83552 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83552))
{var s__83553 = temp__3698__auto____83552;

var fst__83554 = cljs.core.first.call(null,s__83553);
var fv__83555 = f.call(null,fst__83554);
var run__83556 = cljs.core.cons.call(null,fst__83554,cljs.core.take_while.call(null,(function (p1__83551_SHARP_){
return cljs.core._EQ_.call(null,fv__83555,f.call(null,p1__83551_SHARP_));
}),cljs.core.next.call(null,s__83553)));

return cljs.core.cons.call(null,run__83556,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__83556),s__83553))));
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
var reductions__83571 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____83567 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____83567))
{var s__83568 = temp__3695__auto____83567;

return reductions.call(null,f,cljs.core.first.call(null,s__83568),cljs.core.rest.call(null,s__83568));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__83572 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____83569 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____83569))
{var s__83570 = temp__3698__auto____83569;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__83570)),cljs.core.rest.call(null,s__83570));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__83571.call(this,f,init);
case  3 :
return reductions__83572.call(this,f,init,coll);
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
var juxt__83575 = (function (f){
return (function() {
var G__83580 = null;
var G__83580__83581 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__83580__83582 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__83580__83583 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__83580__83584 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__83580__83585 = (function() { 
var G__83587__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__83587 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83587__delegate.call(this, x, y, z, args);
};
G__83587.cljs$lang$maxFixedArity = 3;
G__83587.cljs$lang$applyTo = (function (arglist__83588){
var x = cljs.core.first(arglist__83588);
var y = cljs.core.first(cljs.core.next(arglist__83588));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83588)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83588)));
return G__83587__delegate.call(this, x, y, z, args);
});
return G__83587;
})()
;
G__83580 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__83580__83581.call(this);
case  1 :
return G__83580__83582.call(this,x);
case  2 :
return G__83580__83583.call(this,x,y);
case  3 :
return G__83580__83584.call(this,x,y,z);
default:
return G__83580__83585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__83580.cljs$lang$maxFixedArity = 3;
G__83580.cljs$lang$applyTo = G__83580__83585.cljs$lang$applyTo;
return G__83580;
})()
});
var juxt__83576 = (function (f,g){
return (function() {
var G__83589 = null;
var G__83589__83590 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__83589__83591 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__83589__83592 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__83589__83593 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__83589__83594 = (function() { 
var G__83596__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__83596 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83596__delegate.call(this, x, y, z, args);
};
G__83596.cljs$lang$maxFixedArity = 3;
G__83596.cljs$lang$applyTo = (function (arglist__83597){
var x = cljs.core.first(arglist__83597);
var y = cljs.core.first(cljs.core.next(arglist__83597));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83597)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83597)));
return G__83596__delegate.call(this, x, y, z, args);
});
return G__83596;
})()
;
G__83589 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__83589__83590.call(this);
case  1 :
return G__83589__83591.call(this,x);
case  2 :
return G__83589__83592.call(this,x,y);
case  3 :
return G__83589__83593.call(this,x,y,z);
default:
return G__83589__83594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__83589.cljs$lang$maxFixedArity = 3;
G__83589.cljs$lang$applyTo = G__83589__83594.cljs$lang$applyTo;
return G__83589;
})()
});
var juxt__83577 = (function (f,g,h){
return (function() {
var G__83598 = null;
var G__83598__83599 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__83598__83600 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__83598__83601 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__83598__83602 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__83598__83603 = (function() { 
var G__83605__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__83605 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83605__delegate.call(this, x, y, z, args);
};
G__83605.cljs$lang$maxFixedArity = 3;
G__83605.cljs$lang$applyTo = (function (arglist__83606){
var x = cljs.core.first(arglist__83606);
var y = cljs.core.first(cljs.core.next(arglist__83606));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83606)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83606)));
return G__83605__delegate.call(this, x, y, z, args);
});
return G__83605;
})()
;
G__83598 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__83598__83599.call(this);
case  1 :
return G__83598__83600.call(this,x);
case  2 :
return G__83598__83601.call(this,x,y);
case  3 :
return G__83598__83602.call(this,x,y,z);
default:
return G__83598__83603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__83598.cljs$lang$maxFixedArity = 3;
G__83598.cljs$lang$applyTo = G__83598__83603.cljs$lang$applyTo;
return G__83598;
})()
});
var juxt__83578 = (function() { 
var G__83607__delegate = function (f,g,h,fs){
var fs__83574 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__83608 = null;
var G__83608__83609 = (function (){
return cljs.core.reduce.call(null,(function (p1__83557_SHARP_,p2__83558_SHARP_){
return cljs.core.conj.call(null,p1__83557_SHARP_,p2__83558_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__83574);
});
var G__83608__83610 = (function (x){
return cljs.core.reduce.call(null,(function (p1__83559_SHARP_,p2__83560_SHARP_){
return cljs.core.conj.call(null,p1__83559_SHARP_,p2__83560_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__83574);
});
var G__83608__83611 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__83561_SHARP_,p2__83562_SHARP_){
return cljs.core.conj.call(null,p1__83561_SHARP_,p2__83562_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__83574);
});
var G__83608__83612 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__83563_SHARP_,p2__83564_SHARP_){
return cljs.core.conj.call(null,p1__83563_SHARP_,p2__83564_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__83574);
});
var G__83608__83613 = (function() { 
var G__83615__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__83565_SHARP_,p2__83566_SHARP_){
return cljs.core.conj.call(null,p1__83565_SHARP_,cljs.core.apply.call(null,p2__83566_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__83574);
};
var G__83615 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83615__delegate.call(this, x, y, z, args);
};
G__83615.cljs$lang$maxFixedArity = 3;
G__83615.cljs$lang$applyTo = (function (arglist__83616){
var x = cljs.core.first(arglist__83616);
var y = cljs.core.first(cljs.core.next(arglist__83616));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83616)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83616)));
return G__83615__delegate.call(this, x, y, z, args);
});
return G__83615;
})()
;
G__83608 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__83608__83609.call(this);
case  1 :
return G__83608__83610.call(this,x);
case  2 :
return G__83608__83611.call(this,x,y);
case  3 :
return G__83608__83612.call(this,x,y,z);
default:
return G__83608__83613.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__83608.cljs$lang$maxFixedArity = 3;
G__83608.cljs$lang$applyTo = G__83608__83613.cljs$lang$applyTo;
return G__83608;
})()
};
var G__83607 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__83607__delegate.call(this, f, g, h, fs);
};
G__83607.cljs$lang$maxFixedArity = 3;
G__83607.cljs$lang$applyTo = (function (arglist__83617){
var f = cljs.core.first(arglist__83617);
var g = cljs.core.first(cljs.core.next(arglist__83617));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83617)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83617)));
return G__83607__delegate.call(this, f, g, h, fs);
});
return G__83607;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__83575.call(this,f);
case  2 :
return juxt__83576.call(this,f,g);
case  3 :
return juxt__83577.call(this,f,g,h);
default:
return juxt__83578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__83578.cljs$lang$applyTo;
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
var dorun__83619 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__83622 = cljs.core.next.call(null,coll);
coll = G__83622;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__83620 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____83618 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____83618))
{return (n > 0);
} else
{return and__3546__auto____83618;
}
})()))
{{
var G__83623 = (n - 1);
var G__83624 = cljs.core.next.call(null,coll);
n = G__83623;
coll = G__83624;
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
return dorun__83619.call(this,n);
case  2 :
return dorun__83620.call(this,n,coll);
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
var doall__83625 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__83626 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__83625.call(this,n);
case  2 :
return doall__83626.call(this,n,coll);
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
var matches__83628 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__83628),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__83628),1)))
{return cljs.core.first.call(null,matches__83628);
} else
{return cljs.core.vec.call(null,matches__83628);
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
var matches__83629 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__83629)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__83629),1)))
{return cljs.core.first.call(null,matches__83629);
} else
{return cljs.core.vec.call(null,matches__83629);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__83630 = cljs.core.re_find.call(null,re,s);
var match_idx__83631 = s.search(re);
var match_str__83632 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__83630))?cljs.core.first.call(null,match_data__83630):match_data__83630);
var post_match__83633 = cljs.core.subs.call(null,s,(match_idx__83631 + cljs.core.count.call(null,match_str__83632)));

if(cljs.core.truth_(match_data__83630))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__83630,re_seq.call(null,re,post_match__83633));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__83634_SHARP_){
return print_one.call(null,p1__83634_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____83635 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____83635))
{var and__3546__auto____83639 = (function (){var x__445__auto____83636 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____83637 = x__445__auto____83636;

if(cljs.core.truth_(and__3546__auto____83637))
{var and__3546__auto____83638 = x__445__auto____83636.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____83638))
{return cljs.core.not.call(null,x__445__auto____83636.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____83638;
}
} else
{return and__3546__auto____83637;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____83636);
}
})();

if(cljs.core.truth_(and__3546__auto____83639))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____83639;
}
} else
{return and__3546__auto____83635;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____83640 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____83641 = x__445__auto____83640;

if(cljs.core.truth_(and__3546__auto____83641))
{var and__3546__auto____83642 = x__445__auto____83640.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____83642))
{return cljs.core.not.call(null,x__445__auto____83640.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____83642;
}
} else
{return and__3546__auto____83641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____83640);
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
var first_obj__83643 = cljs.core.first.call(null,objs);
var sb__83644 = (new goog.string.StringBuffer());

var G__83645__83646 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__83645__83646))
{var obj__83647 = cljs.core.first.call(null,G__83645__83646);
var G__83645__83648 = G__83645__83646;

while(true){
if(cljs.core.truth_((obj__83647 === first_obj__83643)))
{} else
{sb__83644.append(" ");
}
var G__83649__83650 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__83647,opts));

if(cljs.core.truth_(G__83649__83650))
{var string__83651 = cljs.core.first.call(null,G__83649__83650);
var G__83649__83652 = G__83649__83650;

while(true){
sb__83644.append(string__83651);
var temp__3698__auto____83653 = cljs.core.next.call(null,G__83649__83652);

if(cljs.core.truth_(temp__3698__auto____83653))
{var G__83649__83654 = temp__3698__auto____83653;

{
var G__83657 = cljs.core.first.call(null,G__83649__83654);
var G__83658 = G__83649__83654;
string__83651 = G__83657;
G__83649__83652 = G__83658;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____83655 = cljs.core.next.call(null,G__83645__83648);

if(cljs.core.truth_(temp__3698__auto____83655))
{var G__83645__83656 = temp__3698__auto____83655;

{
var G__83659 = cljs.core.first.call(null,G__83645__83656);
var G__83660 = G__83645__83656;
obj__83647 = G__83659;
G__83645__83648 = G__83660;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__83644);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__83661 = cljs.core.first.call(null,objs);

var G__83662__83663 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__83662__83663))
{var obj__83664 = cljs.core.first.call(null,G__83662__83663);
var G__83662__83665 = G__83662__83663;

while(true){
if(cljs.core.truth_((obj__83664 === first_obj__83661)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__83666__83667 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__83664,opts));

if(cljs.core.truth_(G__83666__83667))
{var string__83668 = cljs.core.first.call(null,G__83666__83667);
var G__83666__83669 = G__83666__83667;

while(true){
cljs.core.string_print.call(null,string__83668);
var temp__3698__auto____83670 = cljs.core.next.call(null,G__83666__83669);

if(cljs.core.truth_(temp__3698__auto____83670))
{var G__83666__83671 = temp__3698__auto____83670;

{
var G__83674 = cljs.core.first.call(null,G__83666__83671);
var G__83675 = G__83666__83671;
string__83668 = G__83674;
G__83666__83669 = G__83675;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____83672 = cljs.core.next.call(null,G__83662__83665);

if(cljs.core.truth_(temp__3698__auto____83672))
{var G__83662__83673 = temp__3698__auto____83672;

{
var G__83676 = cljs.core.first.call(null,G__83662__83673);
var G__83677 = G__83662__83673;
obj__83664 = G__83676;
G__83662__83665 = G__83677;
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
pr_str.cljs$lang$applyTo = (function (arglist__83678){
var objs = cljs.core.seq( arglist__83678 );;
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
pr.cljs$lang$applyTo = (function (arglist__83679){
var objs = cljs.core.seq( arglist__83679 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__83680){
var objs = cljs.core.seq( arglist__83680 );;
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
println.cljs$lang$applyTo = (function (arglist__83681){
var objs = cljs.core.seq( arglist__83681 );;
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
prn.cljs$lang$applyTo = (function (arglist__83682){
var objs = cljs.core.seq( arglist__83682 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__83683 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__83683,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____83684 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____83684))
{var nspc__83685 = temp__3698__auto____83684;

return cljs.core.str.call(null,nspc__83685,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____83686 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____83686))
{var nspc__83687 = temp__3698__auto____83686;

return cljs.core.str.call(null,nspc__83687,"/");
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
var pr_pair__83688 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__83688,"{",", ","}",opts,coll);
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
var this__83689 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__83690 = this;
var G__83691__83692 = cljs.core.seq.call(null,this__83690.watches);

if(cljs.core.truth_(G__83691__83692))
{var G__83694__83696 = cljs.core.first.call(null,G__83691__83692);
var vec__83695__83697 = G__83694__83696;
var key__83698 = cljs.core.nth.call(null,vec__83695__83697,0,null);
var f__83699 = cljs.core.nth.call(null,vec__83695__83697,1,null);
var G__83691__83700 = G__83691__83692;

var G__83694__83701 = G__83694__83696;
var G__83691__83702 = G__83691__83700;

while(true){
var vec__83703__83704 = G__83694__83701;
var key__83705 = cljs.core.nth.call(null,vec__83703__83704,0,null);
var f__83706 = cljs.core.nth.call(null,vec__83703__83704,1,null);
var G__83691__83707 = G__83691__83702;

f__83706.call(null,key__83705,this$,oldval,newval);
var temp__3698__auto____83708 = cljs.core.next.call(null,G__83691__83707);

if(cljs.core.truth_(temp__3698__auto____83708))
{var G__83691__83709 = temp__3698__auto____83708;

{
var G__83716 = cljs.core.first.call(null,G__83691__83709);
var G__83717 = G__83691__83709;
G__83694__83701 = G__83716;
G__83691__83702 = G__83717;
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
var this__83710 = this;
return this$.watches = cljs.core.assoc.call(null,this__83710.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__83711 = this;
return this$.watches = cljs.core.dissoc.call(null,this__83711.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__83712 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__83712.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__83713 = this;
return this__83713.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__83714 = this;
return this__83714.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__83715 = this;
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
var atom__83724 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__83725 = (function() { 
var G__83727__delegate = function (x,p__83718){
var map__83719__83720 = p__83718;
var map__83719__83721 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__83719__83720))?cljs.core.apply.call(null,cljs.core.hash_map,map__83719__83720):map__83719__83720);
var validator__83722 = cljs.core.get.call(null,map__83719__83721,"﷐'validator");
var meta__83723 = cljs.core.get.call(null,map__83719__83721,"﷐'meta");

return (new cljs.core.Atom(x,meta__83723,validator__83722,null));
};
var G__83727 = function (x,var_args){
var p__83718 = null;
if (goog.isDef(var_args)) {
  p__83718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__83727__delegate.call(this, x, p__83718);
};
G__83727.cljs$lang$maxFixedArity = 1;
G__83727.cljs$lang$applyTo = (function (arglist__83728){
var x = cljs.core.first(arglist__83728);
var p__83718 = cljs.core.rest(arglist__83728);
return G__83727__delegate.call(this, x, p__83718);
});
return G__83727;
})()
;
atom = function(x,var_args){
var p__83718 = var_args;
switch(arguments.length){
case  1 :
return atom__83724.call(this,x);
default:
return atom__83725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__83725.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____83729 = a.validator;

if(cljs.core.truth_(temp__3698__auto____83729))
{var validate__83730 = temp__3698__auto____83729;

if(cljs.core.truth_(validate__83730.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__83731 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__83731,new_value);
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
var swap_BANG___83732 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___83733 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___83734 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___83735 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___83736 = (function() { 
var G__83738__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__83738 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__83738__delegate.call(this, a, f, x, y, z, more);
};
G__83738.cljs$lang$maxFixedArity = 5;
G__83738.cljs$lang$applyTo = (function (arglist__83739){
var a = cljs.core.first(arglist__83739);
var f = cljs.core.first(cljs.core.next(arglist__83739));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83739)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83739))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83739)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83739)))));
return G__83738__delegate.call(this, a, f, x, y, z, more);
});
return G__83738;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___83732.call(this,a,f);
case  3 :
return swap_BANG___83733.call(this,a,f,x);
case  4 :
return swap_BANG___83734.call(this,a,f,x,y);
case  5 :
return swap_BANG___83735.call(this,a,f,x,y,z);
default:
return swap_BANG___83736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___83736.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__83740){
var iref = cljs.core.first(arglist__83740);
var f = cljs.core.first(cljs.core.next(arglist__83740));
var args = cljs.core.rest(cljs.core.next(arglist__83740));
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
var gensym__83741 = (function (){
return gensym.call(null,"G__");
});
var gensym__83742 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__83741.call(this);
case  1 :
return gensym__83742.call(this,prefix_string);
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
var this__83744 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__83744.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__83745 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__83745.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__83745.state,this__83745.f);
}
return cljs.core.deref.call(null,this__83745.state);
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
delay.cljs$lang$applyTo = (function (arglist__83746){
var body = cljs.core.seq( arglist__83746 );;
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
var map__83747__83748 = options;
var map__83747__83749 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__83747__83748))?cljs.core.apply.call(null,cljs.core.hash_map,map__83747__83748):map__83747__83748);
var keywordize_keys__83750 = cljs.core.get.call(null,map__83747__83749,"﷐'keywordize-keys");
var keyfn__83751 = (cljs.core.truth_(keywordize_keys__83750)?cljs.core.keyword:cljs.core.str);
var f__83757 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____83756 = (function iter__83752(s__83753){
return (new cljs.core.LazySeq(null,false,(function (){
var s__83753__83754 = s__83753;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__83753__83754)))
{var k__83755 = cljs.core.first.call(null,s__83753__83754);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__83751.call(null,k__83755),thisfn.call(null,(x[k__83755]))]),iter__83752.call(null,cljs.core.rest.call(null,s__83753__83754)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____83756.call(null,cljs.core.js_keys.call(null,x));
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

return f__83757.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__83758){
var x = cljs.core.first(arglist__83758);
var options = cljs.core.rest(arglist__83758);
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
var mem__83759 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__83763__delegate = function (args){
var temp__3695__auto____83760 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__83759),args);

if(cljs.core.truth_(temp__3695__auto____83760))
{var v__83761 = temp__3695__auto____83760;

return v__83761;
} else
{var ret__83762 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__83759,cljs.core.assoc,args,ret__83762);
return ret__83762;
}
};
var G__83763 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__83763__delegate.call(this, args);
};
G__83763.cljs$lang$maxFixedArity = 0;
G__83763.cljs$lang$applyTo = (function (arglist__83764){
var args = cljs.core.seq( arglist__83764 );;
return G__83763__delegate.call(this, args);
});
return G__83763;
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
var trampoline__83766 = (function (f){
while(true){
var ret__83765 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__83765)))
{{
var G__83769 = ret__83765;
f = G__83769;
continue;
}
} else
{return ret__83765;
}
break;
}
});
var trampoline__83767 = (function() { 
var G__83770__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__83770 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__83770__delegate.call(this, f, args);
};
G__83770.cljs$lang$maxFixedArity = 1;
G__83770.cljs$lang$applyTo = (function (arglist__83771){
var f = cljs.core.first(arglist__83771);
var args = cljs.core.rest(arglist__83771);
return G__83770__delegate.call(this, f, args);
});
return G__83770;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__83766.call(this,f);
default:
return trampoline__83767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__83767.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__83772 = (function (){
return rand.call(null,1);
});
var rand__83773 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__83772.call(this);
case  1 :
return rand__83773.call(this,n);
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
var k__83775 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__83775,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__83775,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___83784 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___83785 = (function (h,child,parent){
var or__3548__auto____83776 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____83776))
{return or__3548__auto____83776;
} else
{var or__3548__auto____83777 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____83777))
{return or__3548__auto____83777;
} else
{var and__3546__auto____83778 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____83778))
{var and__3546__auto____83779 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____83779))
{var and__3546__auto____83780 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____83780))
{var ret__83781 = true;
var i__83782 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____83783 = cljs.core.not.call(null,ret__83781);

if(cljs.core.truth_(or__3548__auto____83783))
{return or__3548__auto____83783;
} else
{return cljs.core._EQ_.call(null,i__83782,cljs.core.count.call(null,parent));
}
})()))
{return ret__83781;
} else
{{
var G__83787 = isa_QMARK_.call(null,h,child.call(null,i__83782),parent.call(null,i__83782));
var G__83788 = (i__83782 + 1);
ret__83781 = G__83787;
i__83782 = G__83788;
continue;
}
}
break;
}
} else
{return and__3546__auto____83780;
}
} else
{return and__3546__auto____83779;
}
} else
{return and__3546__auto____83778;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___83784.call(this,h,child);
case  3 :
return isa_QMARK___83785.call(this,h,child,parent);
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
var parents__83789 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__83790 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__83789.call(this,h);
case  2 :
return parents__83790.call(this,h,tag);
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
var ancestors__83792 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__83793 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__83792.call(this,h);
case  2 :
return ancestors__83793.call(this,h,tag);
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
var descendants__83795 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__83796 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__83795.call(this,h);
case  2 :
return descendants__83796.call(this,h,tag);
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
var derive__83806 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__83807 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__83801 = "﷐'parents".call(null,h);
var td__83802 = "﷐'descendants".call(null,h);
var ta__83803 = "﷐'ancestors".call(null,h);
var tf__83804 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____83805 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__83801.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__83803.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__83803.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__83801,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__83804.call(null,"﷐'ancestors".call(null,h),tag,td__83802,parent,ta__83803),"﷐'descendants":tf__83804.call(null,"﷐'descendants".call(null,h),parent,ta__83803,tag,td__83802)});
})());

if(cljs.core.truth_(or__3548__auto____83805))
{return or__3548__auto____83805;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__83806.call(this,h,tag);
case  3 :
return derive__83807.call(this,h,tag,parent);
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
var underive__83813 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__83814 = (function (h,tag,parent){
var parentMap__83809 = "﷐'parents".call(null,h);
var childsParents__83810 = (cljs.core.truth_(parentMap__83809.call(null,tag))?cljs.core.disj.call(null,parentMap__83809.call(null,tag),parent):cljs.core.set([]));
var newParents__83811 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__83810))?cljs.core.assoc.call(null,parentMap__83809,tag,childsParents__83810):cljs.core.dissoc.call(null,parentMap__83809,tag));
var deriv_seq__83812 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__83798_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__83798_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__83798_SHARP_),cljs.core.second.call(null,p1__83798_SHARP_)));
}),cljs.core.seq.call(null,newParents__83811)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__83809.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__83799_SHARP_,p2__83800_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__83799_SHARP_,p2__83800_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__83812));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__83813.call(this,h,tag);
case  3 :
return underive__83814.call(this,h,tag,parent);
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
var xprefs__83816 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____83818 = (cljs.core.truth_((function (){var and__3546__auto____83817 = xprefs__83816;

if(cljs.core.truth_(and__3546__auto____83817))
{return xprefs__83816.call(null,y);
} else
{return and__3546__auto____83817;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____83818))
{return or__3548__auto____83818;
} else
{var or__3548__auto____83820 = (function (){var ps__83819 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__83819) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__83819),prefer_table)))
{} else
{}
{
var G__83823 = cljs.core.rest.call(null,ps__83819);
ps__83819 = G__83823;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____83820))
{return or__3548__auto____83820;
} else
{var or__3548__auto____83822 = (function (){var ps__83821 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__83821) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__83821),y,prefer_table)))
{} else
{}
{
var G__83824 = cljs.core.rest.call(null,ps__83821);
ps__83821 = G__83824;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____83822))
{return or__3548__auto____83822;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____83825 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____83825))
{return or__3548__auto____83825;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__83834 = cljs.core.reduce.call(null,(function (be,p__83826){
var vec__83827__83828 = p__83826;
var k__83829 = cljs.core.nth.call(null,vec__83827__83828,0,null);
var ___83830 = cljs.core.nth.call(null,vec__83827__83828,1,null);
var e__83831 = vec__83827__83828;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__83829)))
{var be2__83833 = (cljs.core.truth_((function (){var or__3548__auto____83832 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____83832))
{return or__3548__auto____83832;
} else
{return cljs.core.dominates.call(null,k__83829,cljs.core.first.call(null,be),prefer_table);
}
})())?e__83831:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__83833),k__83829,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__83829," and ",cljs.core.first.call(null,be2__83833),", and neither is preferred")));
}
return be2__83833;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__83834))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__83834));
return cljs.core.second.call(null,best_entry__83834);
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
if(cljs.core.truth_((function (){var and__3546__auto____83835 = mf;

if(cljs.core.truth_(and__3546__auto____83835))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____83835;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____83836 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83836))
{return or__3548__auto____83836;
} else
{var or__3548__auto____83837 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____83837))
{return or__3548__auto____83837;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____83838 = mf;

if(cljs.core.truth_(and__3546__auto____83838))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____83838;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____83839 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83839))
{return or__3548__auto____83839;
} else
{var or__3548__auto____83840 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____83840))
{return or__3548__auto____83840;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____83841 = mf;

if(cljs.core.truth_(and__3546__auto____83841))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____83841;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____83842 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83842))
{return or__3548__auto____83842;
} else
{var or__3548__auto____83843 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____83843))
{return or__3548__auto____83843;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____83844 = mf;

if(cljs.core.truth_(and__3546__auto____83844))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____83844;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____83845 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83845))
{return or__3548__auto____83845;
} else
{var or__3548__auto____83846 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____83846))
{return or__3548__auto____83846;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____83847 = mf;

if(cljs.core.truth_(and__3546__auto____83847))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____83847;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____83848 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83848))
{return or__3548__auto____83848;
} else
{var or__3548__auto____83849 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____83849))
{return or__3548__auto____83849;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____83850 = mf;

if(cljs.core.truth_(and__3546__auto____83850))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____83850;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____83851 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83851))
{return or__3548__auto____83851;
} else
{var or__3548__auto____83852 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____83852))
{return or__3548__auto____83852;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____83853 = mf;

if(cljs.core.truth_(and__3546__auto____83853))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____83853;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____83854 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83854))
{return or__3548__auto____83854;
} else
{var or__3548__auto____83855 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____83855))
{return or__3548__auto____83855;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____83856 = mf;

if(cljs.core.truth_(and__3546__auto____83856))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____83856;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____83857 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____83857))
{return or__3548__auto____83857;
} else
{var or__3548__auto____83858 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____83858))
{return or__3548__auto____83858;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__83859 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__83860 = cljs.core._get_method.call(null,mf,dispatch_val__83859);

if(cljs.core.truth_(target_fn__83860))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__83859)));
}
return cljs.core.apply.call(null,target_fn__83860,args);
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
var this__83861 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__83862 = this;
cljs.core.swap_BANG_.call(null,this__83862.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__83862.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__83862.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__83862.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__83863 = this;
cljs.core.swap_BANG_.call(null,this__83863.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__83863.method_cache,this__83863.method_table,this__83863.cached_hierarchy,this__83863.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__83864 = this;
cljs.core.swap_BANG_.call(null,this__83864.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__83864.method_cache,this__83864.method_table,this__83864.cached_hierarchy,this__83864.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__83865 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__83865.cached_hierarchy),cljs.core.deref.call(null,this__83865.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__83865.method_cache,this__83865.method_table,this__83865.cached_hierarchy,this__83865.hierarchy);
}
var temp__3695__auto____83866 = cljs.core.deref.call(null,this__83865.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____83866))
{var target_fn__83867 = temp__3695__auto____83866;

return target_fn__83867;
} else
{var temp__3695__auto____83868 = cljs.core.find_and_cache_best_method.call(null,this__83865.name,dispatch_val,this__83865.hierarchy,this__83865.method_table,this__83865.prefer_table,this__83865.method_cache,this__83865.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____83868))
{var target_fn__83869 = temp__3695__auto____83868;

return target_fn__83869;
} else
{return cljs.core.deref.call(null,this__83865.method_table).call(null,this__83865.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__83870 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__83870.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__83870.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__83870.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__83870.method_cache,this__83870.method_table,this__83870.cached_hierarchy,this__83870.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__83871 = this;
return cljs.core.deref.call(null,this__83871.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__83872 = this;
return cljs.core.deref.call(null,this__83872.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__83873 = this;
return cljs.core.do_dispatch.call(null,mf,this__83873.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__83874__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__83874 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__83874__delegate.call(this, _, args);
};
G__83874.cljs$lang$maxFixedArity = 1;
G__83874.cljs$lang$applyTo = (function (arglist__83875){
var _ = cljs.core.first(arglist__83875);
var args = cljs.core.rest(arglist__83875);
return G__83874__delegate.call(this, _, args);
});
return G__83874;
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
