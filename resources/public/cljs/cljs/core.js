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
var or__3548__auto____3157 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{var or__3548__auto____3158 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
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
var _invoke__3222 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3159 = this$;

if(cljs.core.truth_(and__3546__auto____3159))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3159;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{var or__3548__auto____3161 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3161))
{return or__3548__auto____3161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3223 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3162 = this$;

if(cljs.core.truth_(and__3546__auto____3162))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3162;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{var or__3548__auto____3164 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3164))
{return or__3548__auto____3164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3224 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3165 = this$;

if(cljs.core.truth_(and__3546__auto____3165))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3165;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{var or__3548__auto____3167 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3225 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3168 = this$;

if(cljs.core.truth_(and__3546__auto____3168))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3168;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{var or__3548__auto____3170 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3226 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3171 = this$;

if(cljs.core.truth_(and__3546__auto____3171))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3171;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3172 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{var or__3548__auto____3173 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3227 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3174 = this$;

if(cljs.core.truth_(and__3546__auto____3174))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3174;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3175 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{var or__3548__auto____3176 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3228 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3177 = this$;

if(cljs.core.truth_(and__3546__auto____3177))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3177;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3178 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3229 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3180 = this$;

if(cljs.core.truth_(and__3546__auto____3180))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3180;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3181 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{var or__3548__auto____3182 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3230 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3183 = this$;

if(cljs.core.truth_(and__3546__auto____3183))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3183;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3184 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{var or__3548__auto____3185 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3231 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3186 = this$;

if(cljs.core.truth_(and__3546__auto____3186))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3186;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3187 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{var or__3548__auto____3188 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3232 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3189 = this$;

if(cljs.core.truth_(and__3546__auto____3189))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3189;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3190 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{var or__3548__auto____3191 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3233 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3192 = this$;

if(cljs.core.truth_(and__3546__auto____3192))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3192;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3193 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{var or__3548__auto____3194 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3234 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3195 = this$;

if(cljs.core.truth_(and__3546__auto____3195))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3195;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3196 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{var or__3548__auto____3197 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3235 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3198 = this$;

if(cljs.core.truth_(and__3546__auto____3198))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3198;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3199 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{var or__3548__auto____3200 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3236 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3201 = this$;

if(cljs.core.truth_(and__3546__auto____3201))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3201;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3202 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3203 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3237 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3204 = this$;

if(cljs.core.truth_(and__3546__auto____3204))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3204;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3205 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{var or__3548__auto____3206 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3238 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3207 = this$;

if(cljs.core.truth_(and__3546__auto____3207))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3207;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3208 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{var or__3548__auto____3209 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3239 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3210 = this$;

if(cljs.core.truth_(and__3546__auto____3210))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3210;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3211 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{var or__3548__auto____3212 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3240 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3213 = this$;

if(cljs.core.truth_(and__3546__auto____3213))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3213;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3214 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{var or__3548__auto____3215 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3241 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3216 = this$;

if(cljs.core.truth_(and__3546__auto____3216))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3216;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3217 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{var or__3548__auto____3218 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3242 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3219 = this$;

if(cljs.core.truth_(and__3546__auto____3219))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3219;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3220 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{var or__3548__auto____3221 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3221))
{return or__3548__auto____3221;
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
return _invoke__3222.call(this,this$);
case  2 :
return _invoke__3223.call(this,this$,a);
case  3 :
return _invoke__3224.call(this,this$,a,b);
case  4 :
return _invoke__3225.call(this,this$,a,b,c);
case  5 :
return _invoke__3226.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3227.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3228.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3229.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3230.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3231.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3232.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3233.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3234.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3235.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3236.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3237.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3238.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3239.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3240.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3241.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3242.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3244 = coll;

if(cljs.core.truth_(and__3546__auto____3244))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3244;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3245 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3245))
{return or__3548__auto____3245;
} else
{var or__3548__auto____3246 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3246))
{return or__3548__auto____3246;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3247 = coll;

if(cljs.core.truth_(and__3546__auto____3247))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3247;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3248 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3248))
{return or__3548__auto____3248;
} else
{var or__3548__auto____3249 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3249))
{return or__3548__auto____3249;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3250 = coll;

if(cljs.core.truth_(and__3546__auto____3250))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3250;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3251 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{var or__3548__auto____3252 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3252))
{return or__3548__auto____3252;
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
var _nth__3259 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3253 = coll;

if(cljs.core.truth_(and__3546__auto____3253))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3253;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3254 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{var or__3548__auto____3255 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3255))
{return or__3548__auto____3255;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3260 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3256 = coll;

if(cljs.core.truth_(and__3546__auto____3256))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3256;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3257 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
} else
{var or__3548__auto____3258 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3258))
{return or__3548__auto____3258;
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
return _nth__3259.call(this,coll,n);
case  3 :
return _nth__3260.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3262 = coll;

if(cljs.core.truth_(and__3546__auto____3262))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3262;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3263 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
} else
{var or__3548__auto____3264 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3264))
{return or__3548__auto____3264;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3265 = coll;

if(cljs.core.truth_(and__3546__auto____3265))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3265;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3266 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{var or__3548__auto____3267 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3267))
{return or__3548__auto____3267;
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
var _lookup__3274 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3268 = o;

if(cljs.core.truth_(and__3546__auto____3268))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3268;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3269 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{var or__3548__auto____3270 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3270))
{return or__3548__auto____3270;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3275 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3271 = o;

if(cljs.core.truth_(and__3546__auto____3271))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3271;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3272 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3272))
{return or__3548__auto____3272;
} else
{var or__3548__auto____3273 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3273))
{return or__3548__auto____3273;
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
return _lookup__3274.call(this,o,k);
case  3 :
return _lookup__3275.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3277 = coll;

if(cljs.core.truth_(and__3546__auto____3277))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3277;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3278 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3278))
{return or__3548__auto____3278;
} else
{var or__3548__auto____3279 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3279))
{return or__3548__auto____3279;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3280 = coll;

if(cljs.core.truth_(and__3546__auto____3280))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3280;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3281 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3281))
{return or__3548__auto____3281;
} else
{var or__3548__auto____3282 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3282))
{return or__3548__auto____3282;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3283 = coll;

if(cljs.core.truth_(and__3546__auto____3283))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3283;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3284 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{var or__3548__auto____3285 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3285))
{return or__3548__auto____3285;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3286 = coll;

if(cljs.core.truth_(and__3546__auto____3286))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3286;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3287 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
} else
{var or__3548__auto____3288 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3288))
{return or__3548__auto____3288;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3289 = coll;

if(cljs.core.truth_(and__3546__auto____3289))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3289;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3290 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3290))
{return or__3548__auto____3290;
} else
{var or__3548__auto____3291 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3291))
{return or__3548__auto____3291;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3292 = coll;

if(cljs.core.truth_(and__3546__auto____3292))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3292;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3293 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{var or__3548__auto____3294 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3294))
{return or__3548__auto____3294;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3295 = coll;

if(cljs.core.truth_(and__3546__auto____3295))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3295;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3296 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
} else
{var or__3548__auto____3297 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3297))
{return or__3548__auto____3297;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3298 = o;

if(cljs.core.truth_(and__3546__auto____3298))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3298;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3299 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{var or__3548__auto____3300 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3300))
{return or__3548__auto____3300;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3301 = o;

if(cljs.core.truth_(and__3546__auto____3301))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3301;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3302 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3302))
{return or__3548__auto____3302;
} else
{var or__3548__auto____3303 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3303))
{return or__3548__auto____3303;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3304 = o;

if(cljs.core.truth_(and__3546__auto____3304))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3304;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3305 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3305))
{return or__3548__auto____3305;
} else
{var or__3548__auto____3306 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3306))
{return or__3548__auto____3306;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3307 = o;

if(cljs.core.truth_(and__3546__auto____3307))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3307;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3308 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3308))
{return or__3548__auto____3308;
} else
{var or__3548__auto____3309 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3309))
{return or__3548__auto____3309;
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
var _reduce__3316 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3310 = coll;

if(cljs.core.truth_(and__3546__auto____3310))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3310;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3311 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3311))
{return or__3548__auto____3311;
} else
{var or__3548__auto____3312 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3312))
{return or__3548__auto____3312;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3317 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3313 = coll;

if(cljs.core.truth_(and__3546__auto____3313))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3313;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3314 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3314))
{return or__3548__auto____3314;
} else
{var or__3548__auto____3315 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3315))
{return or__3548__auto____3315;
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
return _reduce__3316.call(this,coll,f);
case  3 :
return _reduce__3317.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3319 = o;

if(cljs.core.truth_(and__3546__auto____3319))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3319;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3320 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3320))
{return or__3548__auto____3320;
} else
{var or__3548__auto____3321 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3321))
{return or__3548__auto____3321;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3322 = o;

if(cljs.core.truth_(and__3546__auto____3322))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3322;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3323 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3323))
{return or__3548__auto____3323;
} else
{var or__3548__auto____3324 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3324))
{return or__3548__auto____3324;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3325 = o;

if(cljs.core.truth_(and__3546__auto____3325))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3325;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3326 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3326))
{return or__3548__auto____3326;
} else
{var or__3548__auto____3327 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3327))
{return or__3548__auto____3327;
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
if(cljs.core.truth_((function (){var and__3546__auto____3328 = o;

if(cljs.core.truth_(and__3546__auto____3328))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3328;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3329 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3329))
{return or__3548__auto____3329;
} else
{var or__3548__auto____3330 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3330))
{return or__3548__auto____3330;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3331 = d;

if(cljs.core.truth_(and__3546__auto____3331))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3331;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3332 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3332))
{return or__3548__auto____3332;
} else
{var or__3548__auto____3333 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3333))
{return or__3548__auto____3333;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3334 = this$;

if(cljs.core.truth_(and__3546__auto____3334))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3334;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3335 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3335))
{return or__3548__auto____3335;
} else
{var or__3548__auto____3336 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3336))
{return or__3548__auto____3336;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3337 = this$;

if(cljs.core.truth_(and__3546__auto____3337))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3337;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3338 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3338))
{return or__3548__auto____3338;
} else
{var or__3548__auto____3339 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3339))
{return or__3548__auto____3339;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3340 = this$;

if(cljs.core.truth_(and__3546__auto____3340))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3340;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3341 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3341))
{return or__3548__auto____3341;
} else
{var or__3548__auto____3342 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3342))
{return or__3548__auto____3342;
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
var G__3343 = null;
var G__3343__3344 = (function (o,k){
return null;
});
var G__3343__3345 = (function (o,k,not_found){
return not_found;
});
G__3343 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3343__3344.call(this,o,k);
case  3 :
return G__3343__3345.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3343;
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
var G__3347 = null;
var G__3347__3348 = (function (_,f){
return f.call(null);
});
var G__3347__3349 = (function (_,f,start){
return start;
});
G__3347 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3347__3348.call(this,_,f);
case  3 :
return G__3347__3349.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3347;
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
return (o === null);
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
var G__3351 = null;
var G__3351__3352 = (function (_,n){
return null;
});
var G__3351__3353 = (function (_,n,not_found){
return not_found;
});
G__3351 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3351__3352.call(this,_,n);
case  3 :
return G__3351__3353.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3351;
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
var ci_reduce__3361 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3355 = cljs.core._nth.call(null,cicoll,0);
var n__3356 = 1;

while(true){
if(cljs.core.truth_((n__3356 < cljs.core._count.call(null,cicoll))))
{{
var G__3365 = f.call(null,val__3355,cljs.core._nth.call(null,cicoll,n__3356));
var G__3366 = (n__3356 + 1);
val__3355 = G__3365;
n__3356 = G__3366;
continue;
}
} else
{return val__3355;
}
break;
}
}
});
var ci_reduce__3362 = (function (cicoll,f,val){
var val__3357 = val;
var n__3358 = 0;

while(true){
if(cljs.core.truth_((n__3358 < cljs.core._count.call(null,cicoll))))
{{
var G__3367 = f.call(null,val__3357,cljs.core._nth.call(null,cicoll,n__3358));
var G__3368 = (n__3358 + 1);
val__3357 = G__3367;
n__3358 = G__3368;
continue;
}
} else
{return val__3357;
}
break;
}
});
var ci_reduce__3363 = (function (cicoll,f,val,idx){
var val__3359 = val;
var n__3360 = idx;

while(true){
if(cljs.core.truth_((n__3360 < cljs.core._count.call(null,cicoll))))
{{
var G__3369 = f.call(null,val__3359,cljs.core._nth.call(null,cicoll,n__3360));
var G__3370 = (n__3360 + 1);
val__3359 = G__3369;
n__3360 = G__3370;
continue;
}
} else
{return val__3359;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3361.call(this,cicoll,f);
case  3 :
return ci_reduce__3362.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3363.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3384 = null;
var G__3384__3385 = (function (_,f){
var this__3372 = this;
return cljs.core.ci_reduce.call(null,this__3372.a,f,(this__3372.a[this__3372.i]),(this__3372.i + 1));
});
var G__3384__3386 = (function (_,f,start){
var this__3373 = this;
return cljs.core.ci_reduce.call(null,this__3373.a,f,start,this__3373.i);
});
G__3384 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3384__3385.call(this,_,f);
case  3 :
return G__3384__3386.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3384;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3374 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3375 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3388 = null;
var G__3388__3389 = (function (coll,n){
var this__3376 = this;
var i__3377 = (n + this__3376.i);

if(cljs.core.truth_((i__3377 < this__3376.a.length)))
{return (this__3376.a[i__3377]);
} else
{return null;
}
});
var G__3388__3390 = (function (coll,n,not_found){
var this__3378 = this;
var i__3379 = (n + this__3378.i);

if(cljs.core.truth_((i__3379 < this__3378.a.length)))
{return (this__3378.a[i__3379]);
} else
{return not_found;
}
});
G__3388 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3388__3389.call(this,coll,n);
case  3 :
return G__3388__3390.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3388;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3380 = this;
return (this__3380.a.length - this__3380.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3381 = this;
return (this__3381.a[this__3381.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3382 = this;
if(cljs.core.truth_(((this__3382.i + 1) < this__3382.a.length)))
{return (new cljs.core.IndexedSeq(this__3382.a,(this__3382.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3383 = this;
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
var G__3392 = null;
var G__3392__3393 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3392__3394 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3392 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3392__3393.call(this,array,f);
case  3 :
return G__3392__3394.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3392;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3396 = null;
var G__3396__3397 = (function (array,k){
return (array[k]);
});
var G__3396__3398 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3396 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3396__3397.call(this,array,k);
case  3 :
return G__3396__3398.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3396;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3400 = null;
var G__3400__3401 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3400__3402 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3400 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3400__3401.call(this,array,n);
case  3 :
return G__3400__3402.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3400;
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
var temp__3698__auto____3404 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3404))
{var s__3405 = temp__3698__auto____3404;

return cljs.core._first.call(null,s__3405);
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
var G__3406 = cljs.core.next.call(null,s);
s = G__3406;
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
var s__3407 = cljs.core.seq.call(null,x);
var n__3408 = 0;

while(true){
if(cljs.core.truth_(s__3407))
{{
var G__3409 = cljs.core.next.call(null,s__3407);
var G__3410 = (n__3408 + 1);
s__3407 = G__3409;
n__3408 = G__3410;
continue;
}
} else
{return n__3408;
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
var conj__3411 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3412 = (function() { 
var G__3414__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3415 = conj.call(null,coll,x);
var G__3416 = cljs.core.first.call(null,xs);
var G__3417 = cljs.core.next.call(null,xs);
coll = G__3415;
x = G__3416;
xs = G__3417;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3414 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3414__delegate.call(this, coll, x, xs);
};
G__3414.cljs$lang$maxFixedArity = 2;
G__3414.cljs$lang$applyTo = (function (arglist__3418){
var coll = cljs.core.first(arglist__3418);
var x = cljs.core.first(cljs.core.next(arglist__3418));
var xs = cljs.core.rest(cljs.core.next(arglist__3418));
return G__3414__delegate.call(this, coll, x, xs);
});
return G__3414;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3411.call(this,coll,x);
default:
return conj__3412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3412.cljs$lang$applyTo;
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
var nth__3419 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3420 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3419.call(this,coll,n);
case  3 :
return nth__3420.call(this,coll,n,not_found);
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
var get__3422 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3423 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3422.call(this,o,k);
case  3 :
return get__3423.call(this,o,k,not_found);
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
var assoc__3426 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3427 = (function() { 
var G__3429__delegate = function (coll,k,v,kvs){
while(true){
var ret__3425 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3430 = ret__3425;
var G__3431 = cljs.core.first.call(null,kvs);
var G__3432 = cljs.core.second.call(null,kvs);
var G__3433 = cljs.core.nnext.call(null,kvs);
coll = G__3430;
k = G__3431;
v = G__3432;
kvs = G__3433;
continue;
}
} else
{return ret__3425;
}
break;
}
};
var G__3429 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3429__delegate.call(this, coll, k, v, kvs);
};
G__3429.cljs$lang$maxFixedArity = 3;
G__3429.cljs$lang$applyTo = (function (arglist__3434){
var coll = cljs.core.first(arglist__3434);
var k = cljs.core.first(cljs.core.next(arglist__3434));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3434)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3434)));
return G__3429__delegate.call(this, coll, k, v, kvs);
});
return G__3429;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3426.call(this,coll,k,v);
default:
return assoc__3427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3427.cljs$lang$applyTo;
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
var dissoc__3436 = (function (coll){
return coll;
});
var dissoc__3437 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3438 = (function() { 
var G__3440__delegate = function (coll,k,ks){
while(true){
var ret__3435 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3441 = ret__3435;
var G__3442 = cljs.core.first.call(null,ks);
var G__3443 = cljs.core.next.call(null,ks);
coll = G__3441;
k = G__3442;
ks = G__3443;
continue;
}
} else
{return ret__3435;
}
break;
}
};
var G__3440 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3440__delegate.call(this, coll, k, ks);
};
G__3440.cljs$lang$maxFixedArity = 2;
G__3440.cljs$lang$applyTo = (function (arglist__3444){
var coll = cljs.core.first(arglist__3444);
var k = cljs.core.first(cljs.core.next(arglist__3444));
var ks = cljs.core.rest(cljs.core.next(arglist__3444));
return G__3440__delegate.call(this, coll, k, ks);
});
return G__3440;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3436.call(this,coll);
case  2 :
return dissoc__3437.call(this,coll,k);
default:
return dissoc__3438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3438.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__354__auto____3445 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3446 = x__354__auto____3445;

if(cljs.core.truth_(and__3546__auto____3446))
{var and__3546__auto____3447 = x__354__auto____3445.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3447))
{return cljs.core.not.call(null,x__354__auto____3445.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3447;
}
} else
{return and__3546__auto____3446;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__354__auto____3445);
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
var disj__3449 = (function (coll){
return coll;
});
var disj__3450 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3451 = (function() { 
var G__3453__delegate = function (coll,k,ks){
while(true){
var ret__3448 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3454 = ret__3448;
var G__3455 = cljs.core.first.call(null,ks);
var G__3456 = cljs.core.next.call(null,ks);
coll = G__3454;
k = G__3455;
ks = G__3456;
continue;
}
} else
{return ret__3448;
}
break;
}
};
var G__3453 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3453__delegate.call(this, coll, k, ks);
};
G__3453.cljs$lang$maxFixedArity = 2;
G__3453.cljs$lang$applyTo = (function (arglist__3457){
var coll = cljs.core.first(arglist__3457);
var k = cljs.core.first(cljs.core.next(arglist__3457));
var ks = cljs.core.rest(cljs.core.next(arglist__3457));
return G__3453__delegate.call(this, coll, k, ks);
});
return G__3453;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3449.call(this,coll);
case  2 :
return disj__3450.call(this,coll,k);
default:
return disj__3451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3451.cljs$lang$applyTo;
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
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__354__auto____3458 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3459 = x__354__auto____3458;

if(cljs.core.truth_(and__3546__auto____3459))
{var and__3546__auto____3460 = x__354__auto____3458.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3460))
{return cljs.core.not.call(null,x__354__auto____3458.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3460;
}
} else
{return and__3546__auto____3459;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__354__auto____3458);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__354__auto____3461 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3462 = x__354__auto____3461;

if(cljs.core.truth_(and__3546__auto____3462))
{var and__3546__auto____3463 = x__354__auto____3461.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3463))
{return cljs.core.not.call(null,x__354__auto____3461.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3463;
}
} else
{return and__3546__auto____3462;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__354__auto____3461);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__354__auto____3464 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3465 = x__354__auto____3464;

if(cljs.core.truth_(and__3546__auto____3465))
{var and__3546__auto____3466 = x__354__auto____3464.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3466))
{return cljs.core.not.call(null,x__354__auto____3464.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3466;
}
} else
{return and__3546__auto____3465;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__354__auto____3464);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__354__auto____3467 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3468 = x__354__auto____3467;

if(cljs.core.truth_(and__3546__auto____3468))
{var and__3546__auto____3469 = x__354__auto____3467.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3469))
{return cljs.core.not.call(null,x__354__auto____3467.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3469;
}
} else
{return and__3546__auto____3468;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__354__auto____3467);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__354__auto____3470 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3471 = x__354__auto____3470;

if(cljs.core.truth_(and__3546__auto____3471))
{var and__3546__auto____3472 = x__354__auto____3470.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3472))
{return cljs.core.not.call(null,x__354__auto____3470.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3472;
}
} else
{return and__3546__auto____3471;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__354__auto____3470);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__354__auto____3473 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3474 = x__354__auto____3473;

if(cljs.core.truth_(and__3546__auto____3474))
{var and__3546__auto____3475 = x__354__auto____3473.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3475))
{return cljs.core.not.call(null,x__354__auto____3473.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3475;
}
} else
{return and__3546__auto____3474;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__354__auto____3473);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__354__auto____3476 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3477 = x__354__auto____3476;

if(cljs.core.truth_(and__3546__auto____3477))
{var and__3546__auto____3478 = x__354__auto____3476.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3478))
{return cljs.core.not.call(null,x__354__auto____3476.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3478;
}
} else
{return and__3546__auto____3477;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__354__auto____3476);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3479 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3479.push(key);
}));
return keys__3479;
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
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__354__auto____3480 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3481 = x__354__auto____3480;

if(cljs.core.truth_(and__3546__auto____3481))
{var and__3546__auto____3482 = x__354__auto____3480.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3482))
{return cljs.core.not.call(null,x__354__auto____3480.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3482;
}
} else
{return and__3546__auto____3481;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__354__auto____3480);
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
var and__3546__auto____3483 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3483))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3484 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3484))
{return or__3548__auto____3484;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3483;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3485 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3485))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3485;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3486 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3486))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3486;
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
var and__3546__auto____3487 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3487))
{return (n == n.toFixed());
} else
{return and__3546__auto____3487;
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
if(cljs.core.truth_((function (){var and__3546__auto____3488 = coll;

if(cljs.core.truth_(and__3546__auto____3488))
{var and__3546__auto____3489 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3489))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3489;
}
} else
{return and__3546__auto____3488;
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
var distinct_QMARK___3494 = (function (x){
return true;
});
var distinct_QMARK___3495 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3496 = (function() { 
var G__3498__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3490 = cljs.core.set([y,x]);
var xs__3491 = more;

while(true){
var x__3492 = cljs.core.first.call(null,xs__3491);
var etc__3493 = cljs.core.next.call(null,xs__3491);

if(cljs.core.truth_(xs__3491))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3490,x__3492)))
{return false;
} else
{{
var G__3499 = cljs.core.conj.call(null,s__3490,x__3492);
var G__3500 = etc__3493;
s__3490 = G__3499;
xs__3491 = G__3500;
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
var G__3498 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3498__delegate.call(this, x, y, more);
};
G__3498.cljs$lang$maxFixedArity = 2;
G__3498.cljs$lang$applyTo = (function (arglist__3501){
var x = cljs.core.first(arglist__3501);
var y = cljs.core.first(cljs.core.next(arglist__3501));
var more = cljs.core.rest(cljs.core.next(arglist__3501));
return G__3498__delegate.call(this, x, y, more);
});
return G__3498;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3494.call(this,x);
case  2 :
return distinct_QMARK___3495.call(this,x,y);
default:
return distinct_QMARK___3496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3496.cljs$lang$applyTo;
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
var r__3502 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3502)))
{return r__3502;
} else
{if(cljs.core.truth_(r__3502))
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
var sort__3504 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3505 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3503 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3503,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3503);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3504.call(this,comp);
case  2 :
return sort__3505.call(this,comp,coll);
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
var sort_by__3507 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3508 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3507.call(this,keyfn,comp);
case  3 :
return sort_by__3508.call(this,keyfn,comp,coll);
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
var reduce__3510 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3511 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3510.call(this,f,val);
case  3 :
return reduce__3511.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3517 = (function (f,coll){
var temp__3695__auto____3513 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3513))
{var s__3514 = temp__3695__auto____3513;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3514),cljs.core.next.call(null,s__3514));
} else
{return f.call(null);
}
});
var seq_reduce__3518 = (function (f,val,coll){
var val__3515 = val;
var coll__3516 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3516))
{{
var G__3520 = f.call(null,val__3515,cljs.core.first.call(null,coll__3516));
var G__3521 = cljs.core.next.call(null,coll__3516);
val__3515 = G__3520;
coll__3516 = G__3521;
continue;
}
} else
{return val__3515;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3517.call(this,f,val);
case  3 :
return seq_reduce__3518.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3522 = null;
var G__3522__3523 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3522__3524 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3522 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3522__3523.call(this,coll,f);
case  3 :
return G__3522__3524.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3522;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3526 = (function (){
return 0;
});
var _PLUS___3527 = (function (x){
return x;
});
var _PLUS___3528 = (function (x,y){
return (x + y);
});
var _PLUS___3529 = (function() { 
var G__3531__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3531 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3531__delegate.call(this, x, y, more);
};
G__3531.cljs$lang$maxFixedArity = 2;
G__3531.cljs$lang$applyTo = (function (arglist__3532){
var x = cljs.core.first(arglist__3532);
var y = cljs.core.first(cljs.core.next(arglist__3532));
var more = cljs.core.rest(cljs.core.next(arglist__3532));
return G__3531__delegate.call(this, x, y, more);
});
return G__3531;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3526.call(this);
case  1 :
return _PLUS___3527.call(this,x);
case  2 :
return _PLUS___3528.call(this,x,y);
default:
return _PLUS___3529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3529.cljs$lang$applyTo;
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
var ___3533 = (function (x){
return (- x);
});
var ___3534 = (function (x,y){
return (x - y);
});
var ___3535 = (function() { 
var G__3537__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3537 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3537__delegate.call(this, x, y, more);
};
G__3537.cljs$lang$maxFixedArity = 2;
G__3537.cljs$lang$applyTo = (function (arglist__3538){
var x = cljs.core.first(arglist__3538);
var y = cljs.core.first(cljs.core.next(arglist__3538));
var more = cljs.core.rest(cljs.core.next(arglist__3538));
return G__3537__delegate.call(this, x, y, more);
});
return G__3537;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3533.call(this,x);
case  2 :
return ___3534.call(this,x,y);
default:
return ___3535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3535.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3539 = (function (){
return 1;
});
var _STAR___3540 = (function (x){
return x;
});
var _STAR___3541 = (function (x,y){
return (x * y);
});
var _STAR___3542 = (function() { 
var G__3544__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3544 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3544__delegate.call(this, x, y, more);
};
G__3544.cljs$lang$maxFixedArity = 2;
G__3544.cljs$lang$applyTo = (function (arglist__3545){
var x = cljs.core.first(arglist__3545);
var y = cljs.core.first(cljs.core.next(arglist__3545));
var more = cljs.core.rest(cljs.core.next(arglist__3545));
return G__3544__delegate.call(this, x, y, more);
});
return G__3544;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3539.call(this);
case  1 :
return _STAR___3540.call(this,x);
case  2 :
return _STAR___3541.call(this,x,y);
default:
return _STAR___3542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3542.cljs$lang$applyTo;
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
var _SLASH___3546 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3547 = (function (x,y){
return (x / y);
});
var _SLASH___3548 = (function() { 
var G__3550__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3550 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3550__delegate.call(this, x, y, more);
};
G__3550.cljs$lang$maxFixedArity = 2;
G__3550.cljs$lang$applyTo = (function (arglist__3551){
var x = cljs.core.first(arglist__3551);
var y = cljs.core.first(cljs.core.next(arglist__3551));
var more = cljs.core.rest(cljs.core.next(arglist__3551));
return G__3550__delegate.call(this, x, y, more);
});
return G__3550;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3546.call(this,x);
case  2 :
return _SLASH___3547.call(this,x,y);
default:
return _SLASH___3548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3548.cljs$lang$applyTo;
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
var _LT___3552 = (function (x){
return true;
});
var _LT___3553 = (function (x,y){
return (x < y);
});
var _LT___3554 = (function() { 
var G__3556__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3557 = y;
var G__3558 = cljs.core.first.call(null,more);
var G__3559 = cljs.core.next.call(null,more);
x = G__3557;
y = G__3558;
more = G__3559;
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
var G__3556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3556__delegate.call(this, x, y, more);
};
G__3556.cljs$lang$maxFixedArity = 2;
G__3556.cljs$lang$applyTo = (function (arglist__3560){
var x = cljs.core.first(arglist__3560);
var y = cljs.core.first(cljs.core.next(arglist__3560));
var more = cljs.core.rest(cljs.core.next(arglist__3560));
return G__3556__delegate.call(this, x, y, more);
});
return G__3556;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3552.call(this,x);
case  2 :
return _LT___3553.call(this,x,y);
default:
return _LT___3554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3554.cljs$lang$applyTo;
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
var _LT__EQ___3561 = (function (x){
return true;
});
var _LT__EQ___3562 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3563 = (function() { 
var G__3565__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3566 = y;
var G__3567 = cljs.core.first.call(null,more);
var G__3568 = cljs.core.next.call(null,more);
x = G__3566;
y = G__3567;
more = G__3568;
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
var G__3565 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3565__delegate.call(this, x, y, more);
};
G__3565.cljs$lang$maxFixedArity = 2;
G__3565.cljs$lang$applyTo = (function (arglist__3569){
var x = cljs.core.first(arglist__3569);
var y = cljs.core.first(cljs.core.next(arglist__3569));
var more = cljs.core.rest(cljs.core.next(arglist__3569));
return G__3565__delegate.call(this, x, y, more);
});
return G__3565;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3561.call(this,x);
case  2 :
return _LT__EQ___3562.call(this,x,y);
default:
return _LT__EQ___3563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3563.cljs$lang$applyTo;
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
var _GT___3570 = (function (x){
return true;
});
var _GT___3571 = (function (x,y){
return (x > y);
});
var _GT___3572 = (function() { 
var G__3574__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3575 = y;
var G__3576 = cljs.core.first.call(null,more);
var G__3577 = cljs.core.next.call(null,more);
x = G__3575;
y = G__3576;
more = G__3577;
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
var G__3574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3574__delegate.call(this, x, y, more);
};
G__3574.cljs$lang$maxFixedArity = 2;
G__3574.cljs$lang$applyTo = (function (arglist__3578){
var x = cljs.core.first(arglist__3578);
var y = cljs.core.first(cljs.core.next(arglist__3578));
var more = cljs.core.rest(cljs.core.next(arglist__3578));
return G__3574__delegate.call(this, x, y, more);
});
return G__3574;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3570.call(this,x);
case  2 :
return _GT___3571.call(this,x,y);
default:
return _GT___3572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3572.cljs$lang$applyTo;
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
var _GT__EQ___3579 = (function (x){
return true;
});
var _GT__EQ___3580 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3581 = (function() { 
var G__3583__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3584 = y;
var G__3585 = cljs.core.first.call(null,more);
var G__3586 = cljs.core.next.call(null,more);
x = G__3584;
y = G__3585;
more = G__3586;
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
var G__3583 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3583__delegate.call(this, x, y, more);
};
G__3583.cljs$lang$maxFixedArity = 2;
G__3583.cljs$lang$applyTo = (function (arglist__3587){
var x = cljs.core.first(arglist__3587);
var y = cljs.core.first(cljs.core.next(arglist__3587));
var more = cljs.core.rest(cljs.core.next(arglist__3587));
return G__3583__delegate.call(this, x, y, more);
});
return G__3583;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3579.call(this,x);
case  2 :
return _GT__EQ___3580.call(this,x,y);
default:
return _GT__EQ___3581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3581.cljs$lang$applyTo;
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
var max__3588 = (function (x){
return x;
});
var max__3589 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3590 = (function() { 
var G__3592__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3592__delegate.call(this, x, y, more);
};
G__3592.cljs$lang$maxFixedArity = 2;
G__3592.cljs$lang$applyTo = (function (arglist__3593){
var x = cljs.core.first(arglist__3593);
var y = cljs.core.first(cljs.core.next(arglist__3593));
var more = cljs.core.rest(cljs.core.next(arglist__3593));
return G__3592__delegate.call(this, x, y, more);
});
return G__3592;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3588.call(this,x);
case  2 :
return max__3589.call(this,x,y);
default:
return max__3590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3590.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3594 = (function (x){
return x;
});
var min__3595 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3596 = (function() { 
var G__3598__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3598 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3598__delegate.call(this, x, y, more);
};
G__3598.cljs$lang$maxFixedArity = 2;
G__3598.cljs$lang$applyTo = (function (arglist__3599){
var x = cljs.core.first(arglist__3599);
var y = cljs.core.first(cljs.core.next(arglist__3599));
var more = cljs.core.rest(cljs.core.next(arglist__3599));
return G__3598__delegate.call(this, x, y, more);
});
return G__3598;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3594.call(this,x);
case  2 :
return min__3595.call(this,x,y);
default:
return min__3596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3596.cljs$lang$applyTo;
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
var rem__3600 = (n % d);

return cljs.core.fix.call(null,((n - rem__3600) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3601 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3601));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3602 = (function (){
return Math.random.call(null);
});
var rand__3603 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3602.call(this);
case  1 :
return rand__3603.call(this,n);
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
var _EQ__EQ___3605 = (function (x){
return true;
});
var _EQ__EQ___3606 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3607 = (function() { 
var G__3609__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3610 = y;
var G__3611 = cljs.core.first.call(null,more);
var G__3612 = cljs.core.next.call(null,more);
x = G__3610;
y = G__3611;
more = G__3612;
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
var G__3609 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3609__delegate.call(this, x, y, more);
};
G__3609.cljs$lang$maxFixedArity = 2;
G__3609.cljs$lang$applyTo = (function (arglist__3613){
var x = cljs.core.first(arglist__3613);
var y = cljs.core.first(cljs.core.next(arglist__3613));
var more = cljs.core.rest(cljs.core.next(arglist__3613));
return G__3609__delegate.call(this, x, y, more);
});
return G__3609;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3605.call(this,x);
case  2 :
return _EQ__EQ___3606.call(this,x,y);
default:
return _EQ__EQ___3607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3607.cljs$lang$applyTo;
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
var n__3614 = n;
var xs__3615 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3616 = xs__3615;

if(cljs.core.truth_(and__3546__auto____3616))
{return (n__3614 > 0);
} else
{return and__3546__auto____3616;
}
})()))
{{
var G__3617 = (n__3614 - 1);
var G__3618 = cljs.core.next.call(null,xs__3615);
n__3614 = G__3617;
xs__3615 = G__3618;
continue;
}
} else
{return xs__3615;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3623 = null;
var G__3623__3624 = (function (coll,n){
var temp__3695__auto____3619 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3619))
{var xs__3620 = temp__3695__auto____3619;

return cljs.core.first.call(null,xs__3620);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3623__3625 = (function (coll,n,not_found){
var temp__3695__auto____3621 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3621))
{var xs__3622 = temp__3695__auto____3621;

return cljs.core.first.call(null,xs__3622);
} else
{return not_found;
}
});
G__3623 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3623__3624.call(this,coll,n);
case  3 :
return G__3623__3625.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3623;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3627 = (function (){
return "";
});
var str_STAR___3628 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3629 = (function() { 
var G__3631__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3632 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3633 = cljs.core.next.call(null,more);
sb = G__3632;
more = G__3633;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3631 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3631__delegate.call(this, x, ys);
};
G__3631.cljs$lang$maxFixedArity = 1;
G__3631.cljs$lang$applyTo = (function (arglist__3634){
var x = cljs.core.first(arglist__3634);
var ys = cljs.core.rest(arglist__3634);
return G__3631__delegate.call(this, x, ys);
});
return G__3631;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3627.call(this);
case  1 :
return str_STAR___3628.call(this,x);
default:
return str_STAR___3629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3629.cljs$lang$applyTo;
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
var str__3635 = (function (){
return "";
});
var str__3636 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
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
var str__3637 = (function() { 
var G__3639__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3639 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3639__delegate.call(this, x, ys);
};
G__3639.cljs$lang$maxFixedArity = 1;
G__3639.cljs$lang$applyTo = (function (arglist__3640){
var x = cljs.core.first(arglist__3640);
var ys = cljs.core.rest(arglist__3640);
return G__3639__delegate.call(this, x, ys);
});
return G__3639;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3635.call(this);
case  1 :
return str__3636.call(this,x);
default:
return str__3637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3637.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3641 = (function (s,start){
return s.substring(start);
});
var subs__3642 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3641.call(this,s,start);
case  3 :
return subs__3642.call(this,s,start,end);
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
var symbol__3644 = (function (name){
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
var symbol__3645 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3644.call(this,ns);
case  2 :
return symbol__3645.call(this,ns,name);
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
var keyword__3647 = (function (name){
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
var keyword__3648 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3647.call(this,ns);
case  2 :
return keyword__3648.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3650 = cljs.core.seq.call(null,x);
var ys__3651 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3650 === null)))
{return (ys__3651 === null);
} else
{if(cljs.core.truth_((ys__3651 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3650),cljs.core.first.call(null,ys__3651))))
{{
var G__3652 = cljs.core.next.call(null,xs__3650);
var G__3653 = cljs.core.next.call(null,ys__3651);
xs__3650 = G__3652;
ys__3651 = G__3653;
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
return cljs.core.reduce.call(null,(function (p1__3654_SHARP_,p2__3655_SHARP_){
return cljs.core.hash_combine.call(null,p1__3654_SHARP_,cljs.core.hash.call(null,p2__3655_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3656__3657 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3656__3657))
{var G__3659__3661 = cljs.core.first.call(null,G__3656__3657);
var vec__3660__3662 = G__3659__3661;
var key_name__3663 = cljs.core.nth.call(null,vec__3660__3662,0,null);
var f__3664 = cljs.core.nth.call(null,vec__3660__3662,1,null);
var G__3656__3665 = G__3656__3657;

var G__3659__3666 = G__3659__3661;
var G__3656__3667 = G__3656__3665;

while(true){
var vec__3668__3669 = G__3659__3666;
var key_name__3670 = cljs.core.nth.call(null,vec__3668__3669,0,null);
var f__3671 = cljs.core.nth.call(null,vec__3668__3669,1,null);
var G__3656__3672 = G__3656__3667;

var str_name__3673 = cljs.core.name.call(null,key_name__3670);

obj[str_name__3673] = f__3671;
var temp__3698__auto____3674 = cljs.core.next.call(null,G__3656__3672);

if(cljs.core.truth_(temp__3698__auto____3674))
{var G__3656__3675 = temp__3698__auto____3674;

{
var G__3676 = cljs.core.first.call(null,G__3656__3675);
var G__3677 = G__3656__3675;
G__3659__3666 = G__3676;
G__3656__3667 = G__3677;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3678 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3679 = this;
return (new cljs.core.List(this__3679.meta,o,coll,(this__3679.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3680 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3681 = this;
return this__3681.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3682 = this;
return this__3682.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3683 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3684 = this;
return this__3684.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3685 = this;
return this__3685.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3687 = this;
return (new cljs.core.List(meta,this__3687.first,this__3687.rest,this__3687.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3688 = this;
return this__3688.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3689 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3690 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3691 = this;
return (new cljs.core.List(this__3691.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3692 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3693 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3694 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3695 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3696 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3697 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3698 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3699 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3700 = this;
return this__3700.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3701 = this;
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
list.cljs$lang$applyTo = (function (arglist__3702){
var items = cljs.core.seq( arglist__3702 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3703 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3704 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3705 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3706 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3706.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3707 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3708 = this;
return this__3708.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3709 = this;
if(cljs.core.truth_((this__3709.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3709.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3710 = this;
return this__3710.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3711 = this;
return (new cljs.core.Cons(meta,this__3711.first,this__3711.rest));
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
var G__3712 = null;
var G__3712__3713 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3712__3714 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3712 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3712__3713.call(this,string,f);
case  3 :
return G__3712__3714.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3712;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3716 = null;
var G__3716__3717 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3716__3718 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3716 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3716__3717.call(this,string,k);
case  3 :
return G__3716__3718.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3716;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3720 = null;
var G__3720__3721 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3720__3722 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3720 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3720__3721.call(this,string,n);
case  3 :
return G__3720__3722.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3720;
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
var G__3724 = null;
var G__3724__3725 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__3724__3726 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__3724 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__3724__3725.call(this,this$,coll);
case  3 :
return G__3724__3726.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3724;
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
var x__3728 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3728;
} else
{lazy_seq.x = x__3728.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3729 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3730 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3731 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3732 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3732.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3733 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3734 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3735 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3736 = this;
return this__3736.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3737 = this;
return (new cljs.core.LazySeq(meta,this__3737.realized,this__3737.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3738 = cljs.core.array.call(null);

var s__3739 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3739)))
{ary__3738.push(cljs.core.first.call(null,s__3739));
{
var G__3740 = cljs.core.next.call(null,s__3739);
s__3739 = G__3740;
continue;
}
} else
{return ary__3738;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3741 = s;
var i__3742 = n;
var sum__3743 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3744 = (i__3742 > 0);

if(cljs.core.truth_(and__3546__auto____3744))
{return cljs.core.seq.call(null,s__3741);
} else
{return and__3546__auto____3744;
}
})()))
{{
var G__3745 = cljs.core.next.call(null,s__3741);
var G__3746 = (i__3742 - 1);
var G__3747 = (sum__3743 + 1);
s__3741 = G__3745;
i__3742 = G__3746;
sum__3743 = G__3747;
continue;
}
} else
{return sum__3743;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
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
var concat__3751 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3752 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3753 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3748 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3748))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3748),concat.call(null,cljs.core.rest.call(null,s__3748),y));
} else
{return y;
}
})));
});
var concat__3754 = (function() { 
var G__3756__delegate = function (x,y,zs){
var cat__3750 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3749 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3749))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3749),cat.call(null,cljs.core.rest.call(null,xys__3749),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3750.call(null,concat.call(null,x,y),zs);
};
var G__3756 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3756__delegate.call(this, x, y, zs);
};
G__3756.cljs$lang$maxFixedArity = 2;
G__3756.cljs$lang$applyTo = (function (arglist__3757){
var x = cljs.core.first(arglist__3757);
var y = cljs.core.first(cljs.core.next(arglist__3757));
var zs = cljs.core.rest(cljs.core.next(arglist__3757));
return G__3756__delegate.call(this, x, y, zs);
});
return G__3756;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3751.call(this);
case  1 :
return concat__3752.call(this,x);
case  2 :
return concat__3753.call(this,x,y);
default:
return concat__3754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3754.cljs$lang$applyTo;
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
var list_STAR___3758 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3759 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3760 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3761 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3762 = (function() { 
var G__3764__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3764 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3764__delegate.call(this, a, b, c, d, more);
};
G__3764.cljs$lang$maxFixedArity = 4;
G__3764.cljs$lang$applyTo = (function (arglist__3765){
var a = cljs.core.first(arglist__3765);
var b = cljs.core.first(cljs.core.next(arglist__3765));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3765)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3765))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3765))));
return G__3764__delegate.call(this, a, b, c, d, more);
});
return G__3764;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3758.call(this,a);
case  2 :
return list_STAR___3759.call(this,a,b);
case  3 :
return list_STAR___3760.call(this,a,b,c);
case  4 :
return list_STAR___3761.call(this,a,b,c,d);
default:
return list_STAR___3762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3762.cljs$lang$applyTo;
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
var apply__3775 = (function (f,args){
var fixed_arity__3766 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3766 + 1)) <= fixed_arity__3766)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3776 = (function (f,x,args){
var arglist__3767 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3768 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3767,fixed_arity__3768) <= fixed_arity__3768)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3767));
} else
{return f.cljs$lang$applyTo(arglist__3767);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3767));
}
});
var apply__3777 = (function (f,x,y,args){
var arglist__3769 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3770 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3769,fixed_arity__3770) <= fixed_arity__3770)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3769));
} else
{return f.cljs$lang$applyTo(arglist__3769);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3769));
}
});
var apply__3778 = (function (f,x,y,z,args){
var arglist__3771 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3772 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3771,fixed_arity__3772) <= fixed_arity__3772)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3771));
} else
{return f.cljs$lang$applyTo(arglist__3771);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3771));
}
});
var apply__3779 = (function() { 
var G__3781__delegate = function (f,a,b,c,d,args){
var arglist__3773 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3774 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3773,fixed_arity__3774) <= fixed_arity__3774)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3773));
} else
{return f.cljs$lang$applyTo(arglist__3773);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3773));
}
};
var G__3781 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3781__delegate.call(this, f, a, b, c, d, args);
};
G__3781.cljs$lang$maxFixedArity = 5;
G__3781.cljs$lang$applyTo = (function (arglist__3782){
var f = cljs.core.first(arglist__3782);
var a = cljs.core.first(cljs.core.next(arglist__3782));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3782)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3782))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3782)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3782)))));
return G__3781__delegate.call(this, f, a, b, c, d, args);
});
return G__3781;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3775.call(this,f,a);
case  3 :
return apply__3776.call(this,f,a,b);
case  4 :
return apply__3777.call(this,f,a,b,c);
case  5 :
return apply__3778.call(this,f,a,b,c,d);
default:
return apply__3779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3779.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3783){
var obj = cljs.core.first(arglist__3783);
var f = cljs.core.first(cljs.core.next(arglist__3783));
var args = cljs.core.rest(cljs.core.next(arglist__3783));
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
var not_EQ___3784 = (function (x){
return false;
});
var not_EQ___3785 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3786 = (function() { 
var G__3788__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3788 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3788__delegate.call(this, x, y, more);
};
G__3788.cljs$lang$maxFixedArity = 2;
G__3788.cljs$lang$applyTo = (function (arglist__3789){
var x = cljs.core.first(arglist__3789);
var y = cljs.core.first(cljs.core.next(arglist__3789));
var more = cljs.core.rest(cljs.core.next(arglist__3789));
return G__3788__delegate.call(this, x, y, more);
});
return G__3788;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3784.call(this,x);
case  2 :
return not_EQ___3785.call(this,x,y);
default:
return not_EQ___3786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3786.cljs$lang$applyTo;
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
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3790 = pred;
var G__3791 = cljs.core.next.call(null,coll);
pred = G__3790;
coll = G__3791;
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
{var or__3548__auto____3792 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3792))
{return or__3548__auto____3792;
} else
{{
var G__3793 = pred;
var G__3794 = cljs.core.next.call(null,coll);
pred = G__3793;
coll = G__3794;
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
var G__3795 = null;
var G__3795__3796 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3795__3797 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3795__3798 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3795__3799 = (function() { 
var G__3801__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3801 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3801__delegate.call(this, x, y, zs);
};
G__3801.cljs$lang$maxFixedArity = 2;
G__3801.cljs$lang$applyTo = (function (arglist__3802){
var x = cljs.core.first(arglist__3802);
var y = cljs.core.first(cljs.core.next(arglist__3802));
var zs = cljs.core.rest(cljs.core.next(arglist__3802));
return G__3801__delegate.call(this, x, y, zs);
});
return G__3801;
})()
;
G__3795 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3795__3796.call(this);
case  1 :
return G__3795__3797.call(this,x);
case  2 :
return G__3795__3798.call(this,x,y);
default:
return G__3795__3799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3795.cljs$lang$maxFixedArity = 2;
G__3795.cljs$lang$applyTo = G__3795__3799.cljs$lang$applyTo;
return G__3795;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3803__delegate = function (args){
return x;
};
var G__3803 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3803__delegate.call(this, args);
};
G__3803.cljs$lang$maxFixedArity = 0;
G__3803.cljs$lang$applyTo = (function (arglist__3804){
var args = cljs.core.seq( arglist__3804 );;
return G__3803__delegate.call(this, args);
});
return G__3803;
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
var comp__3808 = (function (){
return cljs.core.identity;
});
var comp__3809 = (function (f){
return f;
});
var comp__3810 = (function (f,g){
return (function() {
var G__3814 = null;
var G__3814__3815 = (function (){
return f.call(null,g.call(null));
});
var G__3814__3816 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3814__3817 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3814__3818 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3814__3819 = (function() { 
var G__3821__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3821 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3821__delegate.call(this, x, y, z, args);
};
G__3821.cljs$lang$maxFixedArity = 3;
G__3821.cljs$lang$applyTo = (function (arglist__3822){
var x = cljs.core.first(arglist__3822);
var y = cljs.core.first(cljs.core.next(arglist__3822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3822)));
return G__3821__delegate.call(this, x, y, z, args);
});
return G__3821;
})()
;
G__3814 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3814__3815.call(this);
case  1 :
return G__3814__3816.call(this,x);
case  2 :
return G__3814__3817.call(this,x,y);
case  3 :
return G__3814__3818.call(this,x,y,z);
default:
return G__3814__3819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3814.cljs$lang$maxFixedArity = 3;
G__3814.cljs$lang$applyTo = G__3814__3819.cljs$lang$applyTo;
return G__3814;
})()
});
var comp__3811 = (function (f,g,h){
return (function() {
var G__3823 = null;
var G__3823__3824 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3823__3825 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3823__3826 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3823__3827 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3823__3828 = (function() { 
var G__3830__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3830__delegate.call(this, x, y, z, args);
};
G__3830.cljs$lang$maxFixedArity = 3;
G__3830.cljs$lang$applyTo = (function (arglist__3831){
var x = cljs.core.first(arglist__3831);
var y = cljs.core.first(cljs.core.next(arglist__3831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3831)));
return G__3830__delegate.call(this, x, y, z, args);
});
return G__3830;
})()
;
G__3823 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3823__3824.call(this);
case  1 :
return G__3823__3825.call(this,x);
case  2 :
return G__3823__3826.call(this,x,y);
case  3 :
return G__3823__3827.call(this,x,y,z);
default:
return G__3823__3828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3823.cljs$lang$maxFixedArity = 3;
G__3823.cljs$lang$applyTo = G__3823__3828.cljs$lang$applyTo;
return G__3823;
})()
});
var comp__3812 = (function() { 
var G__3832__delegate = function (f1,f2,f3,fs){
var fs__3805 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3833__delegate = function (args){
var ret__3806 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3805),args);
var fs__3807 = cljs.core.next.call(null,fs__3805);

while(true){
if(cljs.core.truth_(fs__3807))
{{
var G__3834 = cljs.core.first.call(null,fs__3807).call(null,ret__3806);
var G__3835 = cljs.core.next.call(null,fs__3807);
ret__3806 = G__3834;
fs__3807 = G__3835;
continue;
}
} else
{return ret__3806;
}
break;
}
};
var G__3833 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3833__delegate.call(this, args);
};
G__3833.cljs$lang$maxFixedArity = 0;
G__3833.cljs$lang$applyTo = (function (arglist__3836){
var args = cljs.core.seq( arglist__3836 );;
return G__3833__delegate.call(this, args);
});
return G__3833;
})()
;
};
var G__3832 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3832__delegate.call(this, f1, f2, f3, fs);
};
G__3832.cljs$lang$maxFixedArity = 3;
G__3832.cljs$lang$applyTo = (function (arglist__3837){
var f1 = cljs.core.first(arglist__3837);
var f2 = cljs.core.first(cljs.core.next(arglist__3837));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3837)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3837)));
return G__3832__delegate.call(this, f1, f2, f3, fs);
});
return G__3832;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3808.call(this);
case  1 :
return comp__3809.call(this,f1);
case  2 :
return comp__3810.call(this,f1,f2);
case  3 :
return comp__3811.call(this,f1,f2,f3);
default:
return comp__3812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3812.cljs$lang$applyTo;
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
var partial__3838 = (function (f,arg1){
return (function() { 
var G__3843__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3843 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3843__delegate.call(this, args);
};
G__3843.cljs$lang$maxFixedArity = 0;
G__3843.cljs$lang$applyTo = (function (arglist__3844){
var args = cljs.core.seq( arglist__3844 );;
return G__3843__delegate.call(this, args);
});
return G__3843;
})()
;
});
var partial__3839 = (function (f,arg1,arg2){
return (function() { 
var G__3845__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3845 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3845__delegate.call(this, args);
};
G__3845.cljs$lang$maxFixedArity = 0;
G__3845.cljs$lang$applyTo = (function (arglist__3846){
var args = cljs.core.seq( arglist__3846 );;
return G__3845__delegate.call(this, args);
});
return G__3845;
})()
;
});
var partial__3840 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3847__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3847 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3847__delegate.call(this, args);
};
G__3847.cljs$lang$maxFixedArity = 0;
G__3847.cljs$lang$applyTo = (function (arglist__3848){
var args = cljs.core.seq( arglist__3848 );;
return G__3847__delegate.call(this, args);
});
return G__3847;
})()
;
});
var partial__3841 = (function() { 
var G__3849__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3850__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3850 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3850__delegate.call(this, args);
};
G__3850.cljs$lang$maxFixedArity = 0;
G__3850.cljs$lang$applyTo = (function (arglist__3851){
var args = cljs.core.seq( arglist__3851 );;
return G__3850__delegate.call(this, args);
});
return G__3850;
})()
;
};
var G__3849 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3849__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3849.cljs$lang$maxFixedArity = 4;
G__3849.cljs$lang$applyTo = (function (arglist__3852){
var f = cljs.core.first(arglist__3852);
var arg1 = cljs.core.first(cljs.core.next(arglist__3852));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3852)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3852))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3852))));
return G__3849__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3849;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3838.call(this,f,arg1);
case  3 :
return partial__3839.call(this,f,arg1,arg2);
case  4 :
return partial__3840.call(this,f,arg1,arg2,arg3);
default:
return partial__3841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3841.cljs$lang$applyTo;
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
var fnil__3853 = (function (f,x){
return (function() {
var G__3857 = null;
var G__3857__3858 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3857__3859 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3857__3860 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3857__3861 = (function() { 
var G__3863__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3863 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3863__delegate.call(this, a, b, c, ds);
};
G__3863.cljs$lang$maxFixedArity = 3;
G__3863.cljs$lang$applyTo = (function (arglist__3864){
var a = cljs.core.first(arglist__3864);
var b = cljs.core.first(cljs.core.next(arglist__3864));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3864)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3864)));
return G__3863__delegate.call(this, a, b, c, ds);
});
return G__3863;
})()
;
G__3857 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3857__3858.call(this,a);
case  2 :
return G__3857__3859.call(this,a,b);
case  3 :
return G__3857__3860.call(this,a,b,c);
default:
return G__3857__3861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3857.cljs$lang$maxFixedArity = 3;
G__3857.cljs$lang$applyTo = G__3857__3861.cljs$lang$applyTo;
return G__3857;
})()
});
var fnil__3854 = (function (f,x,y){
return (function() {
var G__3865 = null;
var G__3865__3866 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3865__3867 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3865__3868 = (function() { 
var G__3870__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3870 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3870__delegate.call(this, a, b, c, ds);
};
G__3870.cljs$lang$maxFixedArity = 3;
G__3870.cljs$lang$applyTo = (function (arglist__3871){
var a = cljs.core.first(arglist__3871);
var b = cljs.core.first(cljs.core.next(arglist__3871));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3871)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3871)));
return G__3870__delegate.call(this, a, b, c, ds);
});
return G__3870;
})()
;
G__3865 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3865__3866.call(this,a,b);
case  3 :
return G__3865__3867.call(this,a,b,c);
default:
return G__3865__3868.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3865.cljs$lang$maxFixedArity = 3;
G__3865.cljs$lang$applyTo = G__3865__3868.cljs$lang$applyTo;
return G__3865;
})()
});
var fnil__3855 = (function (f,x,y,z){
return (function() {
var G__3872 = null;
var G__3872__3873 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3872__3874 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3872__3875 = (function() { 
var G__3877__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3877 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3877__delegate.call(this, a, b, c, ds);
};
G__3877.cljs$lang$maxFixedArity = 3;
G__3877.cljs$lang$applyTo = (function (arglist__3878){
var a = cljs.core.first(arglist__3878);
var b = cljs.core.first(cljs.core.next(arglist__3878));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3878)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3878)));
return G__3877__delegate.call(this, a, b, c, ds);
});
return G__3877;
})()
;
G__3872 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3872__3873.call(this,a,b);
case  3 :
return G__3872__3874.call(this,a,b,c);
default:
return G__3872__3875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3872.cljs$lang$maxFixedArity = 3;
G__3872.cljs$lang$applyTo = G__3872__3875.cljs$lang$applyTo;
return G__3872;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3853.call(this,f,x);
case  3 :
return fnil__3854.call(this,f,x,y);
case  4 :
return fnil__3855.call(this,f,x,y,z);
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
var mapi__3881 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3879))
{var s__3880 = temp__3698__auto____3879;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3880)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3880)));
} else
{return null;
}
})));
});

return mapi__3881.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3882))
{var s__3883 = temp__3698__auto____3882;

var x__3884 = f.call(null,cljs.core.first.call(null,s__3883));

if(cljs.core.truth_((x__3884 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3883));
} else
{return cljs.core.cons.call(null,x__3884,keep.call(null,f,cljs.core.rest.call(null,s__3883)));
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
var keepi__3894 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3891 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3891))
{var s__3892 = temp__3698__auto____3891;

var x__3893 = f.call(null,idx,cljs.core.first.call(null,s__3892));

if(cljs.core.truth_((x__3893 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3892));
} else
{return cljs.core.cons.call(null,x__3893,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3892)));
}
} else
{return null;
}
})));
});

return keepi__3894.call(null,0,coll);
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
var every_pred__3939 = (function (p){
return (function() {
var ep1 = null;
var ep1__3944 = (function (){
return true;
});
var ep1__3945 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3946 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3901 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3901))
{return p.call(null,y);
} else
{return and__3546__auto____3901;
}
})());
});
var ep1__3947 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3902 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3902))
{var and__3546__auto____3903 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3903))
{return p.call(null,z);
} else
{return and__3546__auto____3903;
}
} else
{return and__3546__auto____3902;
}
})());
});
var ep1__3948 = (function() { 
var G__3950__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3904 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3904))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3904;
}
})());
};
var G__3950 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3950__delegate.call(this, x, y, z, args);
};
G__3950.cljs$lang$maxFixedArity = 3;
G__3950.cljs$lang$applyTo = (function (arglist__3951){
var x = cljs.core.first(arglist__3951);
var y = cljs.core.first(cljs.core.next(arglist__3951));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3951)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3951)));
return G__3950__delegate.call(this, x, y, z, args);
});
return G__3950;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3944.call(this);
case  1 :
return ep1__3945.call(this,x);
case  2 :
return ep1__3946.call(this,x,y);
case  3 :
return ep1__3947.call(this,x,y,z);
default:
return ep1__3948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3948.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3940 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3952 = (function (){
return true;
});
var ep2__3953 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3905 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3905))
{return p2.call(null,x);
} else
{return and__3546__auto____3905;
}
})());
});
var ep2__3954 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3906 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3906))
{var and__3546__auto____3907 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3907))
{var and__3546__auto____3908 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3908))
{return p2.call(null,y);
} else
{return and__3546__auto____3908;
}
} else
{return and__3546__auto____3907;
}
} else
{return and__3546__auto____3906;
}
})());
});
var ep2__3955 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3909 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3909))
{var and__3546__auto____3910 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3910))
{var and__3546__auto____3911 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3911))
{var and__3546__auto____3912 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3912))
{var and__3546__auto____3913 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3913))
{return p2.call(null,z);
} else
{return and__3546__auto____3913;
}
} else
{return and__3546__auto____3912;
}
} else
{return and__3546__auto____3911;
}
} else
{return and__3546__auto____3910;
}
} else
{return and__3546__auto____3909;
}
})());
});
var ep2__3956 = (function() { 
var G__3958__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3914 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3914))
{return cljs.core.every_QMARK_.call(null,(function (p1__3885_SHARP_){
var and__3546__auto____3915 = p1.call(null,p1__3885_SHARP_);

if(cljs.core.truth_(and__3546__auto____3915))
{return p2.call(null,p1__3885_SHARP_);
} else
{return and__3546__auto____3915;
}
}),args);
} else
{return and__3546__auto____3914;
}
})());
};
var G__3958 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3958__delegate.call(this, x, y, z, args);
};
G__3958.cljs$lang$maxFixedArity = 3;
G__3958.cljs$lang$applyTo = (function (arglist__3959){
var x = cljs.core.first(arglist__3959);
var y = cljs.core.first(cljs.core.next(arglist__3959));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3959)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3959)));
return G__3958__delegate.call(this, x, y, z, args);
});
return G__3958;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3952.call(this);
case  1 :
return ep2__3953.call(this,x);
case  2 :
return ep2__3954.call(this,x,y);
case  3 :
return ep2__3955.call(this,x,y,z);
default:
return ep2__3956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3956.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3941 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3960 = (function (){
return true;
});
var ep3__3961 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3916 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3916))
{var and__3546__auto____3917 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3917))
{return p3.call(null,x);
} else
{return and__3546__auto____3917;
}
} else
{return and__3546__auto____3916;
}
})());
});
var ep3__3962 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3918 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3918))
{var and__3546__auto____3919 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3919))
{var and__3546__auto____3920 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3920))
{var and__3546__auto____3921 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3921))
{var and__3546__auto____3922 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3922))
{return p3.call(null,y);
} else
{return and__3546__auto____3922;
}
} else
{return and__3546__auto____3921;
}
} else
{return and__3546__auto____3920;
}
} else
{return and__3546__auto____3919;
}
} else
{return and__3546__auto____3918;
}
})());
});
var ep3__3963 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3923 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3923))
{var and__3546__auto____3924 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3924))
{var and__3546__auto____3925 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3925))
{var and__3546__auto____3926 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3926))
{var and__3546__auto____3927 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3927))
{var and__3546__auto____3928 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3928))
{var and__3546__auto____3929 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3929))
{var and__3546__auto____3930 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3930))
{return p3.call(null,z);
} else
{return and__3546__auto____3930;
}
} else
{return and__3546__auto____3929;
}
} else
{return and__3546__auto____3928;
}
} else
{return and__3546__auto____3927;
}
} else
{return and__3546__auto____3926;
}
} else
{return and__3546__auto____3925;
}
} else
{return and__3546__auto____3924;
}
} else
{return and__3546__auto____3923;
}
})());
});
var ep3__3964 = (function() { 
var G__3966__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3931 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3931))
{return cljs.core.every_QMARK_.call(null,(function (p1__3886_SHARP_){
var and__3546__auto____3932 = p1.call(null,p1__3886_SHARP_);

if(cljs.core.truth_(and__3546__auto____3932))
{var and__3546__auto____3933 = p2.call(null,p1__3886_SHARP_);

if(cljs.core.truth_(and__3546__auto____3933))
{return p3.call(null,p1__3886_SHARP_);
} else
{return and__3546__auto____3933;
}
} else
{return and__3546__auto____3932;
}
}),args);
} else
{return and__3546__auto____3931;
}
})());
};
var G__3966 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3966__delegate.call(this, x, y, z, args);
};
G__3966.cljs$lang$maxFixedArity = 3;
G__3966.cljs$lang$applyTo = (function (arglist__3967){
var x = cljs.core.first(arglist__3967);
var y = cljs.core.first(cljs.core.next(arglist__3967));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3967)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3967)));
return G__3966__delegate.call(this, x, y, z, args);
});
return G__3966;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3960.call(this);
case  1 :
return ep3__3961.call(this,x);
case  2 :
return ep3__3962.call(this,x,y);
case  3 :
return ep3__3963.call(this,x,y,z);
default:
return ep3__3964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3964.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3942 = (function() { 
var G__3968__delegate = function (p1,p2,p3,ps){
var ps__3934 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3969 = (function (){
return true;
});
var epn__3970 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3887_SHARP_){
return p1__3887_SHARP_.call(null,x);
}),ps__3934);
});
var epn__3971 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3888_SHARP_){
var and__3546__auto____3935 = p1__3888_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3935))
{return p1__3888_SHARP_.call(null,y);
} else
{return and__3546__auto____3935;
}
}),ps__3934);
});
var epn__3972 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3889_SHARP_){
var and__3546__auto____3936 = p1__3889_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3936))
{var and__3546__auto____3937 = p1__3889_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3937))
{return p1__3889_SHARP_.call(null,z);
} else
{return and__3546__auto____3937;
}
} else
{return and__3546__auto____3936;
}
}),ps__3934);
});
var epn__3973 = (function() { 
var G__3975__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3938 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3938))
{return cljs.core.every_QMARK_.call(null,(function (p1__3890_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3890_SHARP_,args);
}),ps__3934);
} else
{return and__3546__auto____3938;
}
})());
};
var G__3975 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3975__delegate.call(this, x, y, z, args);
};
G__3975.cljs$lang$maxFixedArity = 3;
G__3975.cljs$lang$applyTo = (function (arglist__3976){
var x = cljs.core.first(arglist__3976);
var y = cljs.core.first(cljs.core.next(arglist__3976));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3976)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3976)));
return G__3975__delegate.call(this, x, y, z, args);
});
return G__3975;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3969.call(this);
case  1 :
return epn__3970.call(this,x);
case  2 :
return epn__3971.call(this,x,y);
case  3 :
return epn__3972.call(this,x,y,z);
default:
return epn__3973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3973.cljs$lang$applyTo;
return epn;
})()
};
var G__3968 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3968__delegate.call(this, p1, p2, p3, ps);
};
G__3968.cljs$lang$maxFixedArity = 3;
G__3968.cljs$lang$applyTo = (function (arglist__3977){
var p1 = cljs.core.first(arglist__3977);
var p2 = cljs.core.first(cljs.core.next(arglist__3977));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3977)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3977)));
return G__3968__delegate.call(this, p1, p2, p3, ps);
});
return G__3968;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3939.call(this,p1);
case  2 :
return every_pred__3940.call(this,p1,p2);
case  3 :
return every_pred__3941.call(this,p1,p2,p3);
default:
return every_pred__3942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3942.cljs$lang$applyTo;
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
var some_fn__4017 = (function (p){
return (function() {
var sp1 = null;
var sp1__4022 = (function (){
return null;
});
var sp1__4023 = (function (x){
return p.call(null,x);
});
var sp1__4024 = (function (x,y){
var or__3548__auto____3979 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3979))
{return or__3548__auto____3979;
} else
{return p.call(null,y);
}
});
var sp1__4025 = (function (x,y,z){
var or__3548__auto____3980 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3980))
{return or__3548__auto____3980;
} else
{var or__3548__auto____3981 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3981))
{return or__3548__auto____3981;
} else
{return p.call(null,z);
}
}
});
var sp1__4026 = (function() { 
var G__4028__delegate = function (x,y,z,args){
var or__3548__auto____3982 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3982))
{return or__3548__auto____3982;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4028 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4028__delegate.call(this, x, y, z, args);
};
G__4028.cljs$lang$maxFixedArity = 3;
G__4028.cljs$lang$applyTo = (function (arglist__4029){
var x = cljs.core.first(arglist__4029);
var y = cljs.core.first(cljs.core.next(arglist__4029));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4029)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4029)));
return G__4028__delegate.call(this, x, y, z, args);
});
return G__4028;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4022.call(this);
case  1 :
return sp1__4023.call(this,x);
case  2 :
return sp1__4024.call(this,x,y);
case  3 :
return sp1__4025.call(this,x,y,z);
default:
return sp1__4026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4026.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4018 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4030 = (function (){
return null;
});
var sp2__4031 = (function (x){
var or__3548__auto____3983 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3983))
{return or__3548__auto____3983;
} else
{return p2.call(null,x);
}
});
var sp2__4032 = (function (x,y){
var or__3548__auto____3984 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3984))
{return or__3548__auto____3984;
} else
{var or__3548__auto____3985 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3985))
{return or__3548__auto____3985;
} else
{var or__3548__auto____3986 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3986))
{return or__3548__auto____3986;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4033 = (function (x,y,z){
var or__3548__auto____3987 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3987))
{return or__3548__auto____3987;
} else
{var or__3548__auto____3988 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3988))
{return or__3548__auto____3988;
} else
{var or__3548__auto____3989 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3989))
{return or__3548__auto____3989;
} else
{var or__3548__auto____3990 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3990))
{return or__3548__auto____3990;
} else
{var or__3548__auto____3991 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3991))
{return or__3548__auto____3991;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4034 = (function() { 
var G__4036__delegate = function (x,y,z,args){
var or__3548__auto____3992 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3992))
{return or__3548__auto____3992;
} else
{return cljs.core.some.call(null,(function (p1__3895_SHARP_){
var or__3548__auto____3993 = p1.call(null,p1__3895_SHARP_);

if(cljs.core.truth_(or__3548__auto____3993))
{return or__3548__auto____3993;
} else
{return p2.call(null,p1__3895_SHARP_);
}
}),args);
}
};
var G__4036 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4036__delegate.call(this, x, y, z, args);
};
G__4036.cljs$lang$maxFixedArity = 3;
G__4036.cljs$lang$applyTo = (function (arglist__4037){
var x = cljs.core.first(arglist__4037);
var y = cljs.core.first(cljs.core.next(arglist__4037));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4037)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4037)));
return G__4036__delegate.call(this, x, y, z, args);
});
return G__4036;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4030.call(this);
case  1 :
return sp2__4031.call(this,x);
case  2 :
return sp2__4032.call(this,x,y);
case  3 :
return sp2__4033.call(this,x,y,z);
default:
return sp2__4034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4034.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4019 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4038 = (function (){
return null;
});
var sp3__4039 = (function (x){
var or__3548__auto____3994 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3994))
{return or__3548__auto____3994;
} else
{var or__3548__auto____3995 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3995))
{return or__3548__auto____3995;
} else
{return p3.call(null,x);
}
}
});
var sp3__4040 = (function (x,y){
var or__3548__auto____3996 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3996))
{return or__3548__auto____3996;
} else
{var or__3548__auto____3997 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3997))
{return or__3548__auto____3997;
} else
{var or__3548__auto____3998 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3998))
{return or__3548__auto____3998;
} else
{var or__3548__auto____3999 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3999))
{return or__3548__auto____3999;
} else
{var or__3548__auto____4000 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4000))
{return or__3548__auto____4000;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4041 = (function (x,y,z){
var or__3548__auto____4001 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4001))
{return or__3548__auto____4001;
} else
{var or__3548__auto____4002 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4002))
{return or__3548__auto____4002;
} else
{var or__3548__auto____4003 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4003))
{return or__3548__auto____4003;
} else
{var or__3548__auto____4004 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4004))
{return or__3548__auto____4004;
} else
{var or__3548__auto____4005 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4005))
{return or__3548__auto____4005;
} else
{var or__3548__auto____4006 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____4006))
{return or__3548__auto____4006;
} else
{var or__3548__auto____4007 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4007))
{return or__3548__auto____4007;
} else
{var or__3548__auto____4008 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____4008))
{return or__3548__auto____4008;
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
var sp3__4042 = (function() { 
var G__4044__delegate = function (x,y,z,args){
var or__3548__auto____4009 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4009))
{return or__3548__auto____4009;
} else
{return cljs.core.some.call(null,(function (p1__3896_SHARP_){
var or__3548__auto____4010 = p1.call(null,p1__3896_SHARP_);

if(cljs.core.truth_(or__3548__auto____4010))
{return or__3548__auto____4010;
} else
{var or__3548__auto____4011 = p2.call(null,p1__3896_SHARP_);

if(cljs.core.truth_(or__3548__auto____4011))
{return or__3548__auto____4011;
} else
{return p3.call(null,p1__3896_SHARP_);
}
}
}),args);
}
};
var G__4044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4044__delegate.call(this, x, y, z, args);
};
G__4044.cljs$lang$maxFixedArity = 3;
G__4044.cljs$lang$applyTo = (function (arglist__4045){
var x = cljs.core.first(arglist__4045);
var y = cljs.core.first(cljs.core.next(arglist__4045));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4045)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4045)));
return G__4044__delegate.call(this, x, y, z, args);
});
return G__4044;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4038.call(this);
case  1 :
return sp3__4039.call(this,x);
case  2 :
return sp3__4040.call(this,x,y);
case  3 :
return sp3__4041.call(this,x,y,z);
default:
return sp3__4042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4042.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4020 = (function() { 
var G__4046__delegate = function (p1,p2,p3,ps){
var ps__4012 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4047 = (function (){
return null;
});
var spn__4048 = (function (x){
return cljs.core.some.call(null,(function (p1__3897_SHARP_){
return p1__3897_SHARP_.call(null,x);
}),ps__4012);
});
var spn__4049 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3898_SHARP_){
var or__3548__auto____4013 = p1__3898_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4013))
{return or__3548__auto____4013;
} else
{return p1__3898_SHARP_.call(null,y);
}
}),ps__4012);
});
var spn__4050 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3899_SHARP_){
var or__3548__auto____4014 = p1__3899_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4014))
{return or__3548__auto____4014;
} else
{var or__3548__auto____4015 = p1__3899_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4015))
{return or__3548__auto____4015;
} else
{return p1__3899_SHARP_.call(null,z);
}
}
}),ps__4012);
});
var spn__4051 = (function() { 
var G__4053__delegate = function (x,y,z,args){
var or__3548__auto____4016 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4016))
{return or__3548__auto____4016;
} else
{return cljs.core.some.call(null,(function (p1__3900_SHARP_){
return cljs.core.some.call(null,p1__3900_SHARP_,args);
}),ps__4012);
}
};
var G__4053 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4053__delegate.call(this, x, y, z, args);
};
G__4053.cljs$lang$maxFixedArity = 3;
G__4053.cljs$lang$applyTo = (function (arglist__4054){
var x = cljs.core.first(arglist__4054);
var y = cljs.core.first(cljs.core.next(arglist__4054));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4054)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4054)));
return G__4053__delegate.call(this, x, y, z, args);
});
return G__4053;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4047.call(this);
case  1 :
return spn__4048.call(this,x);
case  2 :
return spn__4049.call(this,x,y);
case  3 :
return spn__4050.call(this,x,y,z);
default:
return spn__4051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4051.cljs$lang$applyTo;
return spn;
})()
};
var G__4046 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4046__delegate.call(this, p1, p2, p3, ps);
};
G__4046.cljs$lang$maxFixedArity = 3;
G__4046.cljs$lang$applyTo = (function (arglist__4055){
var p1 = cljs.core.first(arglist__4055);
var p2 = cljs.core.first(cljs.core.next(arglist__4055));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4055)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4055)));
return G__4046__delegate.call(this, p1, p2, p3, ps);
});
return G__4046;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4017.call(this,p1);
case  2 :
return some_fn__4018.call(this,p1,p2);
case  3 :
return some_fn__4019.call(this,p1,p2,p3);
default:
return some_fn__4020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4020.cljs$lang$applyTo;
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
var map__4068 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4056))
{var s__4057 = temp__3698__auto____4056;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4057)),map.call(null,f,cljs.core.rest.call(null,s__4057)));
} else
{return null;
}
})));
});
var map__4069 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4058 = cljs.core.seq.call(null,c1);
var s2__4059 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4060 = s1__4058;

if(cljs.core.truth_(and__3546__auto____4060))
{return s2__4059;
} else
{return and__3546__auto____4060;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4058),cljs.core.first.call(null,s2__4059)),map.call(null,f,cljs.core.rest.call(null,s1__4058),cljs.core.rest.call(null,s2__4059)));
} else
{return null;
}
})));
});
var map__4070 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4061 = cljs.core.seq.call(null,c1);
var s2__4062 = cljs.core.seq.call(null,c2);
var s3__4063 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4064 = s1__4061;

if(cljs.core.truth_(and__3546__auto____4064))
{var and__3546__auto____4065 = s2__4062;

if(cljs.core.truth_(and__3546__auto____4065))
{return s3__4063;
} else
{return and__3546__auto____4065;
}
} else
{return and__3546__auto____4064;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4061),cljs.core.first.call(null,s2__4062),cljs.core.first.call(null,s3__4063)),map.call(null,f,cljs.core.rest.call(null,s1__4061),cljs.core.rest.call(null,s2__4062),cljs.core.rest.call(null,s3__4063)));
} else
{return null;
}
})));
});
var map__4071 = (function() { 
var G__4073__delegate = function (f,c1,c2,c3,colls){
var step__4067 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4066 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4066)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4066),step.call(null,map.call(null,cljs.core.rest,ss__4066)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3978_SHARP_){
return cljs.core.apply.call(null,f,p1__3978_SHARP_);
}),step__4067.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4073 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4073__delegate.call(this, f, c1, c2, c3, colls);
};
G__4073.cljs$lang$maxFixedArity = 4;
G__4073.cljs$lang$applyTo = (function (arglist__4074){
var f = cljs.core.first(arglist__4074);
var c1 = cljs.core.first(cljs.core.next(arglist__4074));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4074)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4074))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4074))));
return G__4073__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4073;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4068.call(this,f,c1);
case  3 :
return map__4069.call(this,f,c1,c2);
case  4 :
return map__4070.call(this,f,c1,c2,c3);
default:
return map__4071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4071.cljs$lang$applyTo;
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
{var temp__3698__auto____4075 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4075))
{var s__4076 = temp__3698__auto____4075;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4076),take.call(null,(n - 1),cljs.core.rest.call(null,s__4076)));
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
var step__4079 = (function (n,coll){
while(true){
var s__4077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4078 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4078))
{return s__4077;
} else
{return and__3546__auto____4078;
}
})()))
{{
var G__4080 = (n - 1);
var G__4081 = cljs.core.rest.call(null,s__4077);
n = G__4080;
coll = G__4081;
continue;
}
} else
{return s__4077;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4079.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4082 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4083 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4082.call(this,n);
case  2 :
return drop_last__4083.call(this,n,s);
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
var s__4085 = cljs.core.seq.call(null,coll);
var lead__4086 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4086))
{{
var G__4087 = cljs.core.next.call(null,s__4085);
var G__4088 = cljs.core.next.call(null,lead__4086);
s__4085 = G__4087;
lead__4086 = G__4088;
continue;
}
} else
{return s__4085;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4091 = (function (pred,coll){
while(true){
var s__4089 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4090 = s__4089;

if(cljs.core.truth_(and__3546__auto____4090))
{return pred.call(null,cljs.core.first.call(null,s__4089));
} else
{return and__3546__auto____4090;
}
})()))
{{
var G__4092 = pred;
var G__4093 = cljs.core.rest.call(null,s__4089);
pred = G__4092;
coll = G__4093;
continue;
}
} else
{return s__4089;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4091.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4094))
{var s__4095 = temp__3698__auto____4094;

return cljs.core.concat.call(null,s__4095,cycle.call(null,s__4095));
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
var repeat__4096 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4097 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4096.call(this,n);
case  2 :
return repeat__4097.call(this,n,x);
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
var repeatedly__4099 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4100 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4099.call(this,n);
case  2 :
return repeatedly__4100.call(this,n,f);
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
var interleave__4106 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4102 = cljs.core.seq.call(null,c1);
var s2__4103 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4104 = s1__4102;

if(cljs.core.truth_(and__3546__auto____4104))
{return s2__4103;
} else
{return and__3546__auto____4104;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4102),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4103),interleave.call(null,cljs.core.rest.call(null,s1__4102),cljs.core.rest.call(null,s2__4103))));
} else
{return null;
}
})));
});
var interleave__4107 = (function() { 
var G__4109__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4105 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4105)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4105),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4105)));
} else
{return null;
}
})));
};
var G__4109 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4109__delegate.call(this, c1, c2, colls);
};
G__4109.cljs$lang$maxFixedArity = 2;
G__4109.cljs$lang$applyTo = (function (arglist__4110){
var c1 = cljs.core.first(arglist__4110);
var c2 = cljs.core.first(cljs.core.next(arglist__4110));
var colls = cljs.core.rest(cljs.core.next(arglist__4110));
return G__4109__delegate.call(this, c1, c2, colls);
});
return G__4109;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4106.call(this,c1,c2);
default:
return interleave__4107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4107.cljs$lang$applyTo;
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
var cat__4113 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4111 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4111))
{var coll__4112 = temp__3695__auto____4111;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4112),cat.call(null,cljs.core.rest.call(null,coll__4112),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4113.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4114 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4115 = (function() { 
var G__4117__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4117 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4117__delegate.call(this, f, coll, colls);
};
G__4117.cljs$lang$maxFixedArity = 2;
G__4117.cljs$lang$applyTo = (function (arglist__4118){
var f = cljs.core.first(arglist__4118);
var coll = cljs.core.first(cljs.core.next(arglist__4118));
var colls = cljs.core.rest(cljs.core.next(arglist__4118));
return G__4117__delegate.call(this, f, coll, colls);
});
return G__4117;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4114.call(this,f,coll);
default:
return mapcat__4115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4115.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4119))
{var s__4120 = temp__3698__auto____4119;

var f__4121 = cljs.core.first.call(null,s__4120);
var r__4122 = cljs.core.rest.call(null,s__4120);

if(cljs.core.truth_(pred.call(null,f__4121)))
{return cljs.core.cons.call(null,f__4121,filter.call(null,pred,r__4122));
} else
{return filter.call(null,pred,r__4122);
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
var walk__4124 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4124.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4123_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4123_SHARP_));
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
var partition__4131 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4132 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4125))
{var s__4126 = temp__3698__auto____4125;

var p__4127 = cljs.core.take.call(null,n,s__4126);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4127))))
{return cljs.core.cons.call(null,p__4127,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4126)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4133 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4128))
{var s__4129 = temp__3698__auto____4128;

var p__4130 = cljs.core.take.call(null,n,s__4129);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4130))))
{return cljs.core.cons.call(null,p__4130,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4129)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4130,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4131.call(this,n,step);
case  3 :
return partition__4132.call(this,n,step,pad);
case  4 :
return partition__4133.call(this,n,step,pad,coll);
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
var get_in__4139 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4140 = (function (m,ks,not_found){
var sentinel__4135 = cljs.core.lookup_sentinel;
var m__4136 = m;
var ks__4137 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4137))
{var m__4138 = cljs.core.get.call(null,m__4136,cljs.core.first.call(null,ks__4137),sentinel__4135);

if(cljs.core.truth_((sentinel__4135 === m__4138)))
{return not_found;
} else
{{
var G__4142 = sentinel__4135;
var G__4143 = m__4138;
var G__4144 = cljs.core.next.call(null,ks__4137);
sentinel__4135 = G__4142;
m__4136 = G__4143;
ks__4137 = G__4144;
continue;
}
}
} else
{return m__4136;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4139.call(this,m,ks);
case  3 :
return get_in__4140.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4145,v){
var vec__4146__4147 = p__4145;
var k__4148 = cljs.core.nth.call(null,vec__4146__4147,0,null);
var ks__4149 = cljs.core.nthnext.call(null,vec__4146__4147,1);

if(cljs.core.truth_(ks__4149))
{return cljs.core.assoc.call(null,m,k__4148,assoc_in.call(null,cljs.core.get.call(null,m,k__4148),ks__4149,v));
} else
{return cljs.core.assoc.call(null,m,k__4148,v);
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
var update_in__delegate = function (m,p__4150,f,args){
var vec__4151__4152 = p__4150;
var k__4153 = cljs.core.nth.call(null,vec__4151__4152,0,null);
var ks__4154 = cljs.core.nthnext.call(null,vec__4151__4152,1);

if(cljs.core.truth_(ks__4154))
{return cljs.core.assoc.call(null,m,k__4153,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4153),ks__4154,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4153,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4153),args));
}
};
var update_in = function (m,p__4150,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4150, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4155){
var m = cljs.core.first(arglist__4155);
var p__4150 = cljs.core.first(cljs.core.next(arglist__4155));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4155)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4155)));
return update_in__delegate.call(this, m, p__4150, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4156 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4183 = null;
var G__4183__4184 = (function (coll,k){
var this__4157 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4183__4185 = (function (coll,k,not_found){
var this__4158 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4183 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4183__4184.call(this,coll,k);
case  3 :
return G__4183__4185.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4183;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4159 = this;
var new_array__4160 = cljs.core.aclone.call(null,this__4159.array);

(new_array__4160[k] = v);
return (new cljs.core.Vector(this__4159.meta,new_array__4160));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4187 = null;
var G__4187__4188 = (function (coll,k){
var this__4161 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4187__4189 = (function (coll,k,not_found){
var this__4162 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4187 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4187__4188.call(this,coll,k);
case  3 :
return G__4187__4189.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4187;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4163 = this;
var new_array__4164 = cljs.core.aclone.call(null,this__4163.array);

new_array__4164.push(o);
return (new cljs.core.Vector(this__4163.meta,new_array__4164));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4191 = null;
var G__4191__4192 = (function (v,f){
var this__4165 = this;
return cljs.core.ci_reduce.call(null,this__4165.array,f);
});
var G__4191__4193 = (function (v,f,start){
var this__4166 = this;
return cljs.core.ci_reduce.call(null,this__4166.array,f,start);
});
G__4191 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4191__4192.call(this,v,f);
case  3 :
return G__4191__4193.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4191;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4167 = this;
if(cljs.core.truth_((this__4167.array.length > 0)))
{var vector_seq__4168 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4167.array.length)))
{return cljs.core.cons.call(null,(this__4167.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4168.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4169 = this;
return this__4169.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4170 = this;
var count__4171 = this__4170.array.length;

if(cljs.core.truth_((count__4171 > 0)))
{return (this__4170.array[(count__4171 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4172 = this;
if(cljs.core.truth_((this__4172.array.length > 0)))
{var new_array__4173 = cljs.core.aclone.call(null,this__4172.array);

new_array__4173.pop();
return (new cljs.core.Vector(this__4172.meta,new_array__4173));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4174 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4175 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4176 = this;
return (new cljs.core.Vector(meta,this__4176.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4177 = this;
return this__4177.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4195 = null;
var G__4195__4196 = (function (coll,n){
var this__4178 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4179 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4179))
{return (n < this__4178.array.length);
} else
{return and__3546__auto____4179;
}
})()))
{return (this__4178.array[n]);
} else
{return null;
}
});
var G__4195__4197 = (function (coll,n,not_found){
var this__4180 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4181 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4181))
{return (n < this__4180.array.length);
} else
{return and__3546__auto____4181;
}
})()))
{return (this__4180.array[n]);
} else
{return not_found;
}
});
G__4195 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4195__4196.call(this,coll,n);
case  3 :
return G__4195__4197.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4195;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4182 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4182.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4199){
var args = cljs.core.seq( arglist__4199 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4200 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4222 = null;
var G__4222__4223 = (function (coll,k){
var this__4201 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4222__4224 = (function (coll,k,not_found){
var this__4202 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4222 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4222__4223.call(this,coll,k);
case  3 :
return G__4222__4224.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4222;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4203 = this;
var v_pos__4204 = (this__4203.start + key);

return (new cljs.core.Subvec(this__4203.meta,cljs.core._assoc.call(null,this__4203.v,v_pos__4204,val),this__4203.start,((this__4203.end > (v_pos__4204 + 1)) ? this__4203.end : (v_pos__4204 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4226 = null;
var G__4226__4227 = (function (coll,k){
var this__4205 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4226__4228 = (function (coll,k,not_found){
var this__4206 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4226 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4226__4227.call(this,coll,k);
case  3 :
return G__4226__4228.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4226;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4207 = this;
return (new cljs.core.Subvec(this__4207.meta,cljs.core._assoc_n.call(null,this__4207.v,this__4207.end,o),this__4207.start,(this__4207.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4230 = null;
var G__4230__4231 = (function (coll,f){
var this__4208 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4230__4232 = (function (coll,f,start){
var this__4209 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4230 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4230__4231.call(this,coll,f);
case  3 :
return G__4230__4232.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4230;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4210 = this;
var subvec_seq__4211 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4210.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4210.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4211.call(null,this__4210.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4212 = this;
return (this__4212.end - this__4212.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4213 = this;
return cljs.core._nth.call(null,this__4213.v,(this__4213.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4214 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4214.start,this__4214.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4214.meta,this__4214.v,this__4214.start,(this__4214.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4215 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4216 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4217 = this;
return (new cljs.core.Subvec(meta,this__4217.v,this__4217.start,this__4217.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4218 = this;
return this__4218.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4234 = null;
var G__4234__4235 = (function (coll,n){
var this__4219 = this;
return cljs.core._nth.call(null,this__4219.v,(this__4219.start + n));
});
var G__4234__4236 = (function (coll,n,not_found){
var this__4220 = this;
return cljs.core._nth.call(null,this__4220.v,(this__4220.start + n),not_found);
});
G__4234 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4234__4235.call(this,coll,n);
case  3 :
return G__4234__4236.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4234;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4221 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4221.meta);
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
var subvec__4238 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4239 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4238.call(this,v,start);
case  3 :
return subvec__4239.call(this,v,start,end);
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4241 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4242 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4243 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4244 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4244.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4245 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4246 = this;
return cljs.core._first.call(null,this__4246.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4247 = this;
var temp__3695__auto____4248 = cljs.core.next.call(null,this__4247.front);

if(cljs.core.truth_(temp__3695__auto____4248))
{var f1__4249 = temp__3695__auto____4248;

return (new cljs.core.PersistentQueueSeq(this__4247.meta,f1__4249,this__4247.rear));
} else
{if(cljs.core.truth_((this__4247.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4247.meta,this__4247.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4250 = this;
return this__4250.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4251 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4251.front,this__4251.rear));
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4252 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4253 = this;
if(cljs.core.truth_(this__4253.front))
{return (new cljs.core.PersistentQueue(this__4253.meta,(this__4253.count + 1),this__4253.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4254 = this__4253.rear;

if(cljs.core.truth_(or__3548__auto____4254))
{return or__3548__auto____4254;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4253.meta,(this__4253.count + 1),cljs.core.conj.call(null,this__4253.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4255 = this;
var rear__4256 = cljs.core.seq.call(null,this__4255.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4257 = this__4255.front;

if(cljs.core.truth_(or__3548__auto____4257))
{return or__3548__auto____4257;
} else
{return rear__4256;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4255.front,cljs.core.seq.call(null,rear__4256)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4258 = this;
return this__4258.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4259 = this;
return cljs.core._first.call(null,this__4259.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4260 = this;
if(cljs.core.truth_(this__4260.front))
{var temp__3695__auto____4261 = cljs.core.next.call(null,this__4260.front);

if(cljs.core.truth_(temp__3695__auto____4261))
{var f1__4262 = temp__3695__auto____4261;

return (new cljs.core.PersistentQueue(this__4260.meta,(this__4260.count - 1),f1__4262,this__4260.rear));
} else
{return (new cljs.core.PersistentQueue(this__4260.meta,(this__4260.count - 1),cljs.core.seq.call(null,this__4260.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4263 = this;
return cljs.core.first.call(null,this__4263.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4264 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4266 = this;
return (new cljs.core.PersistentQueue(meta,this__4266.count,this__4266.front,this__4266.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4267 = this;
return this__4267.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4268 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4269 = this;
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
var len__4270 = array.length;

var i__4271 = 0;

while(true){
if(cljs.core.truth_((i__4271 < len__4270)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4271]))))
{return i__4271;
} else
{{
var G__4272 = (i__4271 + incr);
i__4271 = G__4272;
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
var obj_map_contains_key_QMARK___4274 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4275 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4273 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4273))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4273;
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
return obj_map_contains_key_QMARK___4274.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4275.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4277 = cljs.core.hash.call(null,a);
var b__4278 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4277 < b__4278)))
{return -1;
} else
{if(cljs.core.truth_((a__4277 > b__4278)))
{return 1;
} else
{if(cljs.core.truth_("﷐'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4280 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4301 = null;
var G__4301__4302 = (function (coll,k){
var this__4281 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4301__4303 = (function (coll,k,not_found){
var this__4282 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4282.strobj,(this__4282.strobj[k]),not_found);
});
G__4301 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4301__4302.call(this,coll,k);
case  3 :
return G__4301__4303.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4301;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4283 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4284 = goog.object.clone.call(null,this__4283.strobj);
var overwrite_QMARK___4285 = new_strobj__4284.hasOwnProperty(k);

(new_strobj__4284[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4285))
{return (new cljs.core.ObjMap(this__4283.meta,this__4283.keys,new_strobj__4284));
} else
{var new_keys__4286 = cljs.core.aclone.call(null,this__4283.keys);

new_keys__4286.push(k);
return (new cljs.core.ObjMap(this__4283.meta,new_keys__4286,new_strobj__4284));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4283.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4287 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4287.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4305 = null;
var G__4305__4306 = (function (coll,k){
var this__4288 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4305__4307 = (function (coll,k,not_found){
var this__4289 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4305 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4305__4306.call(this,coll,k);
case  3 :
return G__4305__4307.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4305;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4290 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4291 = this;
if(cljs.core.truth_((this__4291.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4279_SHARP_){
return cljs.core.vector.call(null,p1__4279_SHARP_,(this__4291.strobj[p1__4279_SHARP_]));
}),this__4291.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4292 = this;
return this__4292.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4293 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4294 = this;
return (new cljs.core.ObjMap(meta,this__4294.keys,this__4294.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4295 = this;
return this__4295.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4296 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4296.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4297 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4298 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4298))
{return this__4297.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4298;
}
})()))
{var new_keys__4299 = cljs.core.aclone.call(null,this__4297.keys);
var new_strobj__4300 = goog.object.clone.call(null,this__4297.strobj);

new_keys__4299.splice(cljs.core.scan_array.call(null,1,k,new_keys__4299),1);
cljs.core.js_delete.call(null,new_strobj__4300,k);
return (new cljs.core.ObjMap(this__4297.meta,new_keys__4299,new_strobj__4300));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4310 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4342 = null;
var G__4342__4343 = (function (coll,k){
var this__4311 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4342__4344 = (function (coll,k,not_found){
var this__4312 = this;
var bucket__4313 = (this__4312.hashobj[cljs.core.hash.call(null,k)]);
var i__4314 = (cljs.core.truth_(bucket__4313)?cljs.core.scan_array.call(null,2,k,bucket__4313):null);

if(cljs.core.truth_(i__4314))
{return (bucket__4313[(i__4314 + 1)]);
} else
{return not_found;
}
});
G__4342 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4342__4343.call(this,coll,k);
case  3 :
return G__4342__4344.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4342;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4315 = this;
var h__4316 = cljs.core.hash.call(null,k);
var bucket__4317 = (this__4315.hashobj[h__4316]);

if(cljs.core.truth_(bucket__4317))
{var new_bucket__4318 = cljs.core.aclone.call(null,bucket__4317);
var new_hashobj__4319 = goog.object.clone.call(null,this__4315.hashobj);

(new_hashobj__4319[h__4316] = new_bucket__4318);
var temp__3695__auto____4320 = cljs.core.scan_array.call(null,2,k,new_bucket__4318);

if(cljs.core.truth_(temp__3695__auto____4320))
{var i__4321 = temp__3695__auto____4320;

(new_bucket__4318[(i__4321 + 1)] = v);
return (new cljs.core.HashMap(this__4315.meta,this__4315.count,new_hashobj__4319));
} else
{new_bucket__4318.push(k,v);
return (new cljs.core.HashMap(this__4315.meta,(this__4315.count + 1),new_hashobj__4319));
}
} else
{var new_hashobj__4322 = goog.object.clone.call(null,this__4315.hashobj);

(new_hashobj__4322[h__4316] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4315.meta,(this__4315.count + 1),new_hashobj__4322));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4323 = this;
var bucket__4324 = (this__4323.hashobj[cljs.core.hash.call(null,k)]);
var i__4325 = (cljs.core.truth_(bucket__4324)?cljs.core.scan_array.call(null,2,k,bucket__4324):null);

if(cljs.core.truth_(i__4325))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4346 = null;
var G__4346__4347 = (function (coll,k){
var this__4326 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4346__4348 = (function (coll,k,not_found){
var this__4327 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4346 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4346__4347.call(this,coll,k);
case  3 :
return G__4346__4348.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4346;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4328 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4329 = this;
if(cljs.core.truth_((this__4329.count > 0)))
{var hashes__4330 = cljs.core.js_keys.call(null,this__4329.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4309_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4329.hashobj[p1__4309_SHARP_])));
}),hashes__4330);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4331 = this;
return this__4331.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4332 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4333 = this;
return (new cljs.core.HashMap(meta,this__4333.count,this__4333.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4334 = this;
return this__4334.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4335 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4335.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4336 = this;
var h__4337 = cljs.core.hash.call(null,k);
var bucket__4338 = (this__4336.hashobj[h__4337]);
var i__4339 = (cljs.core.truth_(bucket__4338)?cljs.core.scan_array.call(null,2,k,bucket__4338):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4339)))
{return coll;
} else
{var new_hashobj__4340 = goog.object.clone.call(null,this__4336.hashobj);

if(cljs.core.truth_((3 > bucket__4338.length)))
{cljs.core.js_delete.call(null,new_hashobj__4340,h__4337);
} else
{var new_bucket__4341 = cljs.core.aclone.call(null,bucket__4338);

new_bucket__4341.splice(i__4339,2);
(new_hashobj__4340[h__4337] = new_bucket__4341);
}
return (new cljs.core.HashMap(this__4336.meta,(this__4336.count - 1),new_hashobj__4340));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4350 = ks.length;

var i__4351 = 0;
var out__4352 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4351 < len__4350)))
{{
var G__4353 = (i__4351 + 1);
var G__4354 = cljs.core.assoc.call(null,out__4352,(ks[i__4351]),(vs[i__4351]));
i__4351 = G__4353;
out__4352 = G__4354;
continue;
}
} else
{return out__4352;
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
var in$__4355 = cljs.core.seq.call(null,keyvals);
var out__4356 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4355))
{{
var G__4357 = cljs.core.nnext.call(null,in$__4355);
var G__4358 = cljs.core.assoc.call(null,out__4356,cljs.core.first.call(null,in$__4355),cljs.core.second.call(null,in$__4355));
in$__4355 = G__4357;
out__4356 = G__4358;
continue;
}
} else
{return out__4356;
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
hash_map.cljs$lang$applyTo = (function (arglist__4359){
var keyvals = cljs.core.seq( arglist__4359 );;
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
{return cljs.core.reduce.call(null,(function (p1__4360_SHARP_,p2__4361_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4362 = p1__4360_SHARP_;

if(cljs.core.truth_(or__3548__auto____4362))
{return or__3548__auto____4362;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4361_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4363){
var maps = cljs.core.seq( arglist__4363 );;
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
{var merge_entry__4366 = (function (m,e){
var k__4364 = cljs.core.first.call(null,e);
var v__4365 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4364)))
{return cljs.core.assoc.call(null,m,k__4364,f.call(null,cljs.core.get.call(null,m,k__4364),v__4365));
} else
{return cljs.core.assoc.call(null,m,k__4364,v__4365);
}
});
var merge2__4368 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4366,(function (){var or__3548__auto____4367 = m1;

if(cljs.core.truth_(or__3548__auto____4367))
{return or__3548__auto____4367;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4368,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4369){
var f = cljs.core.first(arglist__4369);
var maps = cljs.core.rest(arglist__4369);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4371 = cljs.core.ObjMap.fromObject([],{});
var keys__4372 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4372))
{var key__4373 = cljs.core.first.call(null,keys__4372);
var entry__4374 = cljs.core.get.call(null,map,key__4373,"﷐'user/not-found");

{
var G__4375 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4374,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4371,key__4373,entry__4374):ret__4371);
var G__4376 = cljs.core.next.call(null,keys__4372);
ret__4371 = G__4375;
keys__4372 = G__4376;
continue;
}
} else
{return ret__4371;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4377 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4392 = null;
var G__4392__4393 = (function (coll,v){
var this__4378 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4392__4394 = (function (coll,v,not_found){
var this__4379 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4379.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4392 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4392__4393.call(this,coll,v);
case  3 :
return G__4392__4394.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4392;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4396 = null;
var G__4396__4397 = (function (coll,k){
var this__4380 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4396__4398 = (function (coll,k,not_found){
var this__4381 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4396 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4396__4397.call(this,coll,k);
case  3 :
return G__4396__4398.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4396;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4382 = this;
return (new cljs.core.Set(this__4382.meta,cljs.core.assoc.call(null,this__4382.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4383 = this;
return cljs.core.keys.call(null,this__4383.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4384 = this;
return (new cljs.core.Set(this__4384.meta,cljs.core.dissoc.call(null,this__4384.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4385 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4386 = this;
var and__3546__auto____4387 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4387))
{var and__3546__auto____4388 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4388))
{return cljs.core.every_QMARK_.call(null,(function (p1__4370_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4370_SHARP_);
}),other);
} else
{return and__3546__auto____4388;
}
} else
{return and__3546__auto____4387;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4389 = this;
return (new cljs.core.Set(meta,this__4389.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4390 = this;
return this__4390.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4391 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4391.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4401 = cljs.core.seq.call(null,coll);
var out__4402 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4401))))
{{
var G__4403 = cljs.core.rest.call(null,in$__4401);
var G__4404 = cljs.core.conj.call(null,out__4402,cljs.core.first.call(null,in$__4401));
in$__4401 = G__4403;
out__4402 = G__4404;
continue;
}
} else
{return out__4402;
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
{var n__4405 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4406 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4406))
{var e__4407 = temp__3695__auto____4406;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4407));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4405,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4400_SHARP_){
var temp__3695__auto____4408 = cljs.core.find.call(null,smap,p1__4400_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4408))
{var e__4409 = temp__3695__auto____4408;

return cljs.core.second.call(null,e__4409);
} else
{return p1__4400_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4417 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4410,seen){
while(true){
var vec__4411__4412 = p__4410;
var f__4413 = cljs.core.nth.call(null,vec__4411__4412,0,null);
var xs__4414 = vec__4411__4412;

var temp__3698__auto____4415 = cljs.core.seq.call(null,xs__4414);

if(cljs.core.truth_(temp__3698__auto____4415))
{var s__4416 = temp__3698__auto____4415;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4413)))
{{
var G__4418 = cljs.core.rest.call(null,s__4416);
var G__4419 = seen;
p__4410 = G__4418;
seen = G__4419;
continue;
}
} else
{return cljs.core.cons.call(null,f__4413,step.call(null,cljs.core.rest.call(null,s__4416),cljs.core.conj.call(null,seen,f__4413)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4417.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4420 = cljs.core.Vector.fromArray([]);
var s__4421 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4421)))
{{
var G__4422 = cljs.core.conj.call(null,ret__4420,cljs.core.first.call(null,s__4421));
var G__4423 = cljs.core.next.call(null,s__4421);
ret__4420 = G__4422;
s__4421 = G__4423;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4420);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4424 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4424))
{return or__3548__auto____4424;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4425 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4425 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4425 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4426 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4426))
{return or__3548__auto____4426;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4427 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4427 > -1)))
{return cljs.core.subs.call(null,x,2,i__4427);
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
var map__4430 = cljs.core.ObjMap.fromObject([],{});
var ks__4431 = cljs.core.seq.call(null,keys);
var vs__4432 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4433 = ks__4431;

if(cljs.core.truth_(and__3546__auto____4433))
{return vs__4432;
} else
{return and__3546__auto____4433;
}
})()))
{{
var G__4434 = cljs.core.assoc.call(null,map__4430,cljs.core.first.call(null,ks__4431),cljs.core.first.call(null,vs__4432));
var G__4435 = cljs.core.next.call(null,ks__4431);
var G__4436 = cljs.core.next.call(null,vs__4432);
map__4430 = G__4434;
ks__4431 = G__4435;
vs__4432 = G__4436;
continue;
}
} else
{return map__4430;
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
var max_key__4439 = (function (k,x){
return x;
});
var max_key__4440 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4441 = (function() { 
var G__4443__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4428_SHARP_,p2__4429_SHARP_){
return max_key.call(null,k,p1__4428_SHARP_,p2__4429_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4443 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4443__delegate.call(this, k, x, y, more);
};
G__4443.cljs$lang$maxFixedArity = 3;
G__4443.cljs$lang$applyTo = (function (arglist__4444){
var k = cljs.core.first(arglist__4444);
var x = cljs.core.first(cljs.core.next(arglist__4444));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4444)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4444)));
return G__4443__delegate.call(this, k, x, y, more);
});
return G__4443;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4439.call(this,k,x);
case  3 :
return max_key__4440.call(this,k,x,y);
default:
return max_key__4441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4441.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4445 = (function (k,x){
return x;
});
var min_key__4446 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4447 = (function() { 
var G__4449__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4437_SHARP_,p2__4438_SHARP_){
return min_key.call(null,k,p1__4437_SHARP_,p2__4438_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4449 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4449__delegate.call(this, k, x, y, more);
};
G__4449.cljs$lang$maxFixedArity = 3;
G__4449.cljs$lang$applyTo = (function (arglist__4450){
var k = cljs.core.first(arglist__4450);
var x = cljs.core.first(cljs.core.next(arglist__4450));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4450)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4450)));
return G__4449__delegate.call(this, k, x, y, more);
});
return G__4449;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4445.call(this,k,x);
case  3 :
return min_key__4446.call(this,k,x,y);
default:
return min_key__4447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4447.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4453 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4454 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4451 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4451))
{var s__4452 = temp__3698__auto____4451;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4452),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4452)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4453.call(this,n,step);
case  3 :
return partition_all__4454.call(this,n,step,coll);
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
var temp__3698__auto____4456 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4456))
{var s__4457 = temp__3698__auto____4456;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4457))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4457),take_while.call(null,pred,cljs.core.rest.call(null,s__4457)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4458 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4459 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4475 = null;
var G__4475__4476 = (function (rng,f){
var this__4460 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4475__4477 = (function (rng,f,s){
var this__4461 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4475 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4475__4476.call(this,rng,f);
case  3 :
return G__4475__4477.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4475;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4462 = this;
var comp__4463 = (cljs.core.truth_((this__4462.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4463.call(null,this__4462.start,this__4462.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4464 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4464.end - this__4464.start) / this__4464.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4465 = this;
return this__4465.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4466 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4466.meta,(this__4466.start + this__4466.step),this__4466.end,this__4466.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4467 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4468 = this;
return (new cljs.core.Range(meta,this__4468.start,this__4468.end,this__4468.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4469 = this;
return this__4469.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4479 = null;
var G__4479__4480 = (function (rng,n){
var this__4470 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4470.start + (n * this__4470.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4471 = (this__4470.start > this__4470.end);

if(cljs.core.truth_(and__3546__auto____4471))
{return cljs.core._EQ_.call(null,this__4470.step,0);
} else
{return and__3546__auto____4471;
}
})()))
{return this__4470.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4479__4481 = (function (rng,n,not_found){
var this__4472 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4472.start + (n * this__4472.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4473 = (this__4472.start > this__4472.end);

if(cljs.core.truth_(and__3546__auto____4473))
{return cljs.core._EQ_.call(null,this__4472.step,0);
} else
{return and__3546__auto____4473;
}
})()))
{return this__4472.start;
} else
{return not_found;
}
}
});
G__4479 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4479__4480.call(this,rng,n);
case  3 :
return G__4479__4481.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4479;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4474 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4474.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4483 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4484 = (function (end){
return range.call(null,0,end,1);
});
var range__4485 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4486 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4483.call(this);
case  1 :
return range__4484.call(this,start);
case  2 :
return range__4485.call(this,start,end);
case  3 :
return range__4486.call(this,start,end,step);
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
var temp__3698__auto____4488 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4488))
{var s__4489 = temp__3698__auto____4488;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4489),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4489)));
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
var temp__3698__auto____4491 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4491))
{var s__4492 = temp__3698__auto____4491;

var fst__4493 = cljs.core.first.call(null,s__4492);
var fv__4494 = f.call(null,fst__4493);
var run__4495 = cljs.core.cons.call(null,fst__4493,cljs.core.take_while.call(null,(function (p1__4490_SHARP_){
return cljs.core._EQ_.call(null,fv__4494,f.call(null,p1__4490_SHARP_));
}),cljs.core.next.call(null,s__4492)));

return cljs.core.cons.call(null,run__4495,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4495),s__4492))));
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
var reductions__4510 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4506))
{var s__4507 = temp__3695__auto____4506;

return reductions.call(null,f,cljs.core.first.call(null,s__4507),cljs.core.rest.call(null,s__4507));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4511 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4508 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4508))
{var s__4509 = temp__3698__auto____4508;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4509)),cljs.core.rest.call(null,s__4509));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4510.call(this,f,init);
case  3 :
return reductions__4511.call(this,f,init,coll);
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
var juxt__4514 = (function (f){
return (function() {
var G__4519 = null;
var G__4519__4520 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4519__4521 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4519__4522 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4519__4523 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4519__4524 = (function() { 
var G__4526__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4526 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4526__delegate.call(this, x, y, z, args);
};
G__4526.cljs$lang$maxFixedArity = 3;
G__4526.cljs$lang$applyTo = (function (arglist__4527){
var x = cljs.core.first(arglist__4527);
var y = cljs.core.first(cljs.core.next(arglist__4527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4527)));
return G__4526__delegate.call(this, x, y, z, args);
});
return G__4526;
})()
;
G__4519 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4519__4520.call(this);
case  1 :
return G__4519__4521.call(this,x);
case  2 :
return G__4519__4522.call(this,x,y);
case  3 :
return G__4519__4523.call(this,x,y,z);
default:
return G__4519__4524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4519.cljs$lang$maxFixedArity = 3;
G__4519.cljs$lang$applyTo = G__4519__4524.cljs$lang$applyTo;
return G__4519;
})()
});
var juxt__4515 = (function (f,g){
return (function() {
var G__4528 = null;
var G__4528__4529 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4528__4530 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4528__4531 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4528__4532 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4528__4533 = (function() { 
var G__4535__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4535 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4535__delegate.call(this, x, y, z, args);
};
G__4535.cljs$lang$maxFixedArity = 3;
G__4535.cljs$lang$applyTo = (function (arglist__4536){
var x = cljs.core.first(arglist__4536);
var y = cljs.core.first(cljs.core.next(arglist__4536));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4536)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4536)));
return G__4535__delegate.call(this, x, y, z, args);
});
return G__4535;
})()
;
G__4528 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4528__4529.call(this);
case  1 :
return G__4528__4530.call(this,x);
case  2 :
return G__4528__4531.call(this,x,y);
case  3 :
return G__4528__4532.call(this,x,y,z);
default:
return G__4528__4533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4528.cljs$lang$maxFixedArity = 3;
G__4528.cljs$lang$applyTo = G__4528__4533.cljs$lang$applyTo;
return G__4528;
})()
});
var juxt__4516 = (function (f,g,h){
return (function() {
var G__4537 = null;
var G__4537__4538 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4537__4539 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4537__4540 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4537__4541 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4537__4542 = (function() { 
var G__4544__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4544 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4544__delegate.call(this, x, y, z, args);
};
G__4544.cljs$lang$maxFixedArity = 3;
G__4544.cljs$lang$applyTo = (function (arglist__4545){
var x = cljs.core.first(arglist__4545);
var y = cljs.core.first(cljs.core.next(arglist__4545));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4545)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4545)));
return G__4544__delegate.call(this, x, y, z, args);
});
return G__4544;
})()
;
G__4537 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4537__4538.call(this);
case  1 :
return G__4537__4539.call(this,x);
case  2 :
return G__4537__4540.call(this,x,y);
case  3 :
return G__4537__4541.call(this,x,y,z);
default:
return G__4537__4542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4537.cljs$lang$maxFixedArity = 3;
G__4537.cljs$lang$applyTo = G__4537__4542.cljs$lang$applyTo;
return G__4537;
})()
});
var juxt__4517 = (function() { 
var G__4546__delegate = function (f,g,h,fs){
var fs__4513 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4547 = null;
var G__4547__4548 = (function (){
return cljs.core.reduce.call(null,(function (p1__4496_SHARP_,p2__4497_SHARP_){
return cljs.core.conj.call(null,p1__4496_SHARP_,p2__4497_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4513);
});
var G__4547__4549 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4498_SHARP_,p2__4499_SHARP_){
return cljs.core.conj.call(null,p1__4498_SHARP_,p2__4499_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4513);
});
var G__4547__4550 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4500_SHARP_,p2__4501_SHARP_){
return cljs.core.conj.call(null,p1__4500_SHARP_,p2__4501_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4513);
});
var G__4547__4551 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4502_SHARP_,p2__4503_SHARP_){
return cljs.core.conj.call(null,p1__4502_SHARP_,p2__4503_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4513);
});
var G__4547__4552 = (function() { 
var G__4554__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4504_SHARP_,p2__4505_SHARP_){
return cljs.core.conj.call(null,p1__4504_SHARP_,cljs.core.apply.call(null,p2__4505_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4513);
};
var G__4554 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4554__delegate.call(this, x, y, z, args);
};
G__4554.cljs$lang$maxFixedArity = 3;
G__4554.cljs$lang$applyTo = (function (arglist__4555){
var x = cljs.core.first(arglist__4555);
var y = cljs.core.first(cljs.core.next(arglist__4555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4555)));
return G__4554__delegate.call(this, x, y, z, args);
});
return G__4554;
})()
;
G__4547 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4547__4548.call(this);
case  1 :
return G__4547__4549.call(this,x);
case  2 :
return G__4547__4550.call(this,x,y);
case  3 :
return G__4547__4551.call(this,x,y,z);
default:
return G__4547__4552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4547.cljs$lang$maxFixedArity = 3;
G__4547.cljs$lang$applyTo = G__4547__4552.cljs$lang$applyTo;
return G__4547;
})()
};
var G__4546 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4546__delegate.call(this, f, g, h, fs);
};
G__4546.cljs$lang$maxFixedArity = 3;
G__4546.cljs$lang$applyTo = (function (arglist__4556){
var f = cljs.core.first(arglist__4556);
var g = cljs.core.first(cljs.core.next(arglist__4556));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4556)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4556)));
return G__4546__delegate.call(this, f, g, h, fs);
});
return G__4546;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4514.call(this,f);
case  2 :
return juxt__4515.call(this,f,g);
case  3 :
return juxt__4516.call(this,f,g,h);
default:
return juxt__4517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4517.cljs$lang$applyTo;
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
var dorun__4558 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4561 = cljs.core.next.call(null,coll);
coll = G__4561;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4559 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4557))
{return (n > 0);
} else
{return and__3546__auto____4557;
}
})()))
{{
var G__4562 = (n - 1);
var G__4563 = cljs.core.next.call(null,coll);
n = G__4562;
coll = G__4563;
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
return dorun__4558.call(this,n);
case  2 :
return dorun__4559.call(this,n,coll);
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
var doall__4564 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4565 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4564.call(this,n);
case  2 :
return doall__4565.call(this,n,coll);
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
var matches__4567 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4567),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4567),1)))
{return cljs.core.first.call(null,matches__4567);
} else
{return cljs.core.vec.call(null,matches__4567);
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
var matches__4568 = re.exec(s);

if(cljs.core.truth_((matches__4568 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4568),1)))
{return cljs.core.first.call(null,matches__4568);
} else
{return cljs.core.vec.call(null,matches__4568);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4569 = cljs.core.re_find.call(null,re,s);
var match_idx__4570 = s.search(re);
var match_str__4571 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4569))?cljs.core.first.call(null,match_data__4569):match_data__4569);
var post_match__4572 = cljs.core.subs.call(null,s,(match_idx__4570 + cljs.core.count.call(null,match_str__4571)));

if(cljs.core.truth_(match_data__4569))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4569,re_seq.call(null,re,post_match__4572));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4574__4575 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4576 = cljs.core.nth.call(null,vec__4574__4575,0,null);
var flags__4577 = cljs.core.nth.call(null,vec__4574__4575,1,null);
var pattern__4578 = cljs.core.nth.call(null,vec__4574__4575,2,null);

return (new RegExp(pattern__4578,flags__4577));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4573_SHARP_){
return print_one.call(null,p1__4573_SHARP_,opts);
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
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4579 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4579))
{var and__3546__auto____4583 = (function (){var x__354__auto____4580 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4581 = x__354__auto____4580;

if(cljs.core.truth_(and__3546__auto____4581))
{var and__3546__auto____4582 = x__354__auto____4580.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4582))
{return cljs.core.not.call(null,x__354__auto____4580.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4582;
}
} else
{return and__3546__auto____4581;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__354__auto____4580);
}
})();

if(cljs.core.truth_(and__3546__auto____4583))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4583;
}
} else
{return and__3546__auto____4579;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__354__auto____4584 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4585 = x__354__auto____4584;

if(cljs.core.truth_(and__3546__auto____4585))
{var and__3546__auto____4586 = x__354__auto____4584.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4586))
{return cljs.core.not.call(null,x__354__auto____4584.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4586;
}
} else
{return and__3546__auto____4585;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__354__auto____4584);
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
var first_obj__4587 = cljs.core.first.call(null,objs);
var sb__4588 = (new goog.string.StringBuffer());

var G__4589__4590 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4589__4590))
{var obj__4591 = cljs.core.first.call(null,G__4589__4590);
var G__4589__4592 = G__4589__4590;

while(true){
if(cljs.core.truth_((obj__4591 === first_obj__4587)))
{} else
{sb__4588.append(" ");
}
var G__4593__4594 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4591,opts));

if(cljs.core.truth_(G__4593__4594))
{var string__4595 = cljs.core.first.call(null,G__4593__4594);
var G__4593__4596 = G__4593__4594;

while(true){
sb__4588.append(string__4595);
var temp__3698__auto____4597 = cljs.core.next.call(null,G__4593__4596);

if(cljs.core.truth_(temp__3698__auto____4597))
{var G__4593__4598 = temp__3698__auto____4597;

{
var G__4601 = cljs.core.first.call(null,G__4593__4598);
var G__4602 = G__4593__4598;
string__4595 = G__4601;
G__4593__4596 = G__4602;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4599 = cljs.core.next.call(null,G__4589__4592);

if(cljs.core.truth_(temp__3698__auto____4599))
{var G__4589__4600 = temp__3698__auto____4599;

{
var G__4603 = cljs.core.first.call(null,G__4589__4600);
var G__4604 = G__4589__4600;
obj__4591 = G__4603;
G__4589__4592 = G__4604;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4588);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4605 = cljs.core.first.call(null,objs);

var G__4606__4607 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4606__4607))
{var obj__4608 = cljs.core.first.call(null,G__4606__4607);
var G__4606__4609 = G__4606__4607;

while(true){
if(cljs.core.truth_((obj__4608 === first_obj__4605)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4610__4611 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4608,opts));

if(cljs.core.truth_(G__4610__4611))
{var string__4612 = cljs.core.first.call(null,G__4610__4611);
var G__4610__4613 = G__4610__4611;

while(true){
cljs.core.string_print.call(null,string__4612);
var temp__3698__auto____4614 = cljs.core.next.call(null,G__4610__4613);

if(cljs.core.truth_(temp__3698__auto____4614))
{var G__4610__4615 = temp__3698__auto____4614;

{
var G__4618 = cljs.core.first.call(null,G__4610__4615);
var G__4619 = G__4610__4615;
string__4612 = G__4618;
G__4610__4613 = G__4619;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4616 = cljs.core.next.call(null,G__4606__4609);

if(cljs.core.truth_(temp__3698__auto____4616))
{var G__4606__4617 = temp__3698__auto____4616;

{
var G__4620 = cljs.core.first.call(null,G__4606__4617);
var G__4621 = G__4606__4617;
obj__4608 = G__4620;
G__4606__4609 = G__4621;
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
pr_str.cljs$lang$applyTo = (function (arglist__4622){
var objs = cljs.core.seq( arglist__4622 );;
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
pr.cljs$lang$applyTo = (function (arglist__4623){
var objs = cljs.core.seq( arglist__4623 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4624){
var objs = cljs.core.seq( arglist__4624 );;
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
println.cljs$lang$applyTo = (function (arglist__4625){
var objs = cljs.core.seq( arglist__4625 );;
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
prn.cljs$lang$applyTo = (function (arglist__4626){
var objs = cljs.core.seq( arglist__4626 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4627 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4627,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4628 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4628))
{var nspc__4629 = temp__3698__auto____4628;

return cljs.core.str.call(null,nspc__4629,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4630 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4630))
{var nspc__4631 = temp__3698__auto____4630;

return cljs.core.str.call(null,nspc__4631,"/");
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
var pr_pair__4632 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4632,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4633 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4634 = this;
var G__4635__4636 = cljs.core.seq.call(null,this__4634.watches);

if(cljs.core.truth_(G__4635__4636))
{var G__4638__4640 = cljs.core.first.call(null,G__4635__4636);
var vec__4639__4641 = G__4638__4640;
var key__4642 = cljs.core.nth.call(null,vec__4639__4641,0,null);
var f__4643 = cljs.core.nth.call(null,vec__4639__4641,1,null);
var G__4635__4644 = G__4635__4636;

var G__4638__4645 = G__4638__4640;
var G__4635__4646 = G__4635__4644;

while(true){
var vec__4647__4648 = G__4638__4645;
var key__4649 = cljs.core.nth.call(null,vec__4647__4648,0,null);
var f__4650 = cljs.core.nth.call(null,vec__4647__4648,1,null);
var G__4635__4651 = G__4635__4646;

f__4650.call(null,key__4649,this$,oldval,newval);
var temp__3698__auto____4652 = cljs.core.next.call(null,G__4635__4651);

if(cljs.core.truth_(temp__3698__auto____4652))
{var G__4635__4653 = temp__3698__auto____4652;

{
var G__4660 = cljs.core.first.call(null,G__4635__4653);
var G__4661 = G__4635__4653;
G__4638__4645 = G__4660;
G__4635__4646 = G__4661;
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
var this__4654 = this;
return this$.watches = cljs.core.assoc.call(null,this__4654.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4655 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4655.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4656 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4656.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4657 = this;
return this__4657.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4658 = this;
return this__4658.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4659 = this;
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
var atom__4668 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4669 = (function() { 
var G__4671__delegate = function (x,p__4662){
var map__4663__4664 = p__4662;
var map__4663__4665 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4663__4664))?cljs.core.apply.call(null,cljs.core.hash_map,map__4663__4664):map__4663__4664);
var validator__4666 = cljs.core.get.call(null,map__4663__4665,"﷐'validator");
var meta__4667 = cljs.core.get.call(null,map__4663__4665,"﷐'meta");

return (new cljs.core.Atom(x,meta__4667,validator__4666,null));
};
var G__4671 = function (x,var_args){
var p__4662 = null;
if (goog.isDef(var_args)) {
  p__4662 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4671__delegate.call(this, x, p__4662);
};
G__4671.cljs$lang$maxFixedArity = 1;
G__4671.cljs$lang$applyTo = (function (arglist__4672){
var x = cljs.core.first(arglist__4672);
var p__4662 = cljs.core.rest(arglist__4672);
return G__4671__delegate.call(this, x, p__4662);
});
return G__4671;
})()
;
atom = function(x,var_args){
var p__4662 = var_args;
switch(arguments.length){
case  1 :
return atom__4668.call(this,x);
default:
return atom__4669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4669.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4673 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4673))
{var validate__4674 = temp__3698__auto____4673;

if(cljs.core.truth_(validate__4674.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3071))))));
}
} else
{}
var old_value__4675 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4675,new_value);
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
var swap_BANG___4676 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4677 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4678 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4679 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4680 = (function() { 
var G__4682__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4682 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4682__delegate.call(this, a, f, x, y, z, more);
};
G__4682.cljs$lang$maxFixedArity = 5;
G__4682.cljs$lang$applyTo = (function (arglist__4683){
var a = cljs.core.first(arglist__4683);
var f = cljs.core.first(cljs.core.next(arglist__4683));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4683)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4683))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4683)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4683)))));
return G__4682__delegate.call(this, a, f, x, y, z, more);
});
return G__4682;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4676.call(this,a,f);
case  3 :
return swap_BANG___4677.call(this,a,f,x);
case  4 :
return swap_BANG___4678.call(this,a,f,x,y);
case  5 :
return swap_BANG___4679.call(this,a,f,x,y,z);
default:
return swap_BANG___4680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4680.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4684){
var iref = cljs.core.first(arglist__4684);
var f = cljs.core.first(cljs.core.next(arglist__4684));
var args = cljs.core.rest(cljs.core.next(arglist__4684));
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
var gensym__4685 = (function (){
return gensym.call(null,"G__");
});
var gensym__4686 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4685.call(this);
case  1 :
return gensym__4686.call(this,prefix_string);
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
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4688 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__4688.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4689 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4689.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4689.state,this__4689.f);
}
return cljs.core.deref.call(null,this__4689.state);
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
delay.cljs$lang$applyTo = (function (arglist__4690){
var body = cljs.core.seq( arglist__4690 );;
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
var map__4691__4692 = options;
var map__4691__4693 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4691__4692))?cljs.core.apply.call(null,cljs.core.hash_map,map__4691__4692):map__4691__4692);
var keywordize_keys__4694 = cljs.core.get.call(null,map__4691__4693,"﷐'keywordize-keys");
var keyfn__4695 = (cljs.core.truth_(keywordize_keys__4694)?cljs.core.keyword:cljs.core.str);
var f__4701 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__418__auto____4700 = (function iter__4696(s__4697){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4697__4698 = s__4697;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4697__4698)))
{var k__4699 = cljs.core.first.call(null,s__4697__4698);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4695.call(null,k__4699),thisfn.call(null,(x[k__4699]))]),iter__4696.call(null,cljs.core.rest.call(null,s__4697__4698)));
} else
{return null;
}
break;
}
})));
});

return iter__418__auto____4700.call(null,cljs.core.js_keys.call(null,x));
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

return f__4701.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4702){
var x = cljs.core.first(arglist__4702);
var options = cljs.core.rest(arglist__4702);
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
var mem__4703 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4707__delegate = function (args){
var temp__3695__auto____4704 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4703),args);

if(cljs.core.truth_(temp__3695__auto____4704))
{var v__4705 = temp__3695__auto____4704;

return v__4705;
} else
{var ret__4706 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4703,cljs.core.assoc,args,ret__4706);
return ret__4706;
}
};
var G__4707 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4707__delegate.call(this, args);
};
G__4707.cljs$lang$maxFixedArity = 0;
G__4707.cljs$lang$applyTo = (function (arglist__4708){
var args = cljs.core.seq( arglist__4708 );;
return G__4707__delegate.call(this, args);
});
return G__4707;
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
var trampoline__4710 = (function (f){
while(true){
var ret__4709 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4709)))
{{
var G__4713 = ret__4709;
f = G__4713;
continue;
}
} else
{return ret__4709;
}
break;
}
});
var trampoline__4711 = (function() { 
var G__4714__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4714 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4714__delegate.call(this, f, args);
};
G__4714.cljs$lang$maxFixedArity = 1;
G__4714.cljs$lang$applyTo = (function (arglist__4715){
var f = cljs.core.first(arglist__4715);
var args = cljs.core.rest(arglist__4715);
return G__4714__delegate.call(this, f, args);
});
return G__4714;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4710.call(this,f);
default:
return trampoline__4711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4711.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4716 = (function (){
return rand.call(null,1);
});
var rand__4717 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4716.call(this);
case  1 :
return rand__4717.call(this,n);
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
var k__4719 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4719,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4719,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4728 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4729 = (function (h,child,parent){
var or__3548__auto____4720 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4720))
{return or__3548__auto____4720;
} else
{var or__3548__auto____4721 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4721))
{return or__3548__auto____4721;
} else
{var and__3546__auto____4722 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4722))
{var and__3546__auto____4723 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4723))
{var and__3546__auto____4724 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4724))
{var ret__4725 = true;
var i__4726 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4727 = cljs.core.not.call(null,ret__4725);

if(cljs.core.truth_(or__3548__auto____4727))
{return or__3548__auto____4727;
} else
{return cljs.core._EQ_.call(null,i__4726,cljs.core.count.call(null,parent));
}
})()))
{return ret__4725;
} else
{{
var G__4731 = isa_QMARK_.call(null,h,child.call(null,i__4726),parent.call(null,i__4726));
var G__4732 = (i__4726 + 1);
ret__4725 = G__4731;
i__4726 = G__4732;
continue;
}
}
break;
}
} else
{return and__3546__auto____4724;
}
} else
{return and__3546__auto____4723;
}
} else
{return and__3546__auto____4722;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4728.call(this,h,child);
case  3 :
return isa_QMARK___4729.call(this,h,child,parent);
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
var parents__4733 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4734 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4733.call(this,h);
case  2 :
return parents__4734.call(this,h,tag);
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
var ancestors__4736 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4737 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4736.call(this,h);
case  2 :
return ancestors__4737.call(this,h,tag);
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
var descendants__4739 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4740 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4739.call(this,h);
case  2 :
return descendants__4740.call(this,h,tag);
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
var derive__4750 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3363))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4751 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3367))))));
}
var tp__4745 = "﷐'parents".call(null,h);
var td__4746 = "﷐'descendants".call(null,h);
var ta__4747 = "﷐'ancestors".call(null,h);
var tf__4748 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4749 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4745.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4747.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4747.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4745,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4748.call(null,"﷐'ancestors".call(null,h),tag,td__4746,parent,ta__4747),"﷐'descendants":tf__4748.call(null,"﷐'descendants".call(null,h),parent,ta__4747,tag,td__4746)});
})());

if(cljs.core.truth_(or__3548__auto____4749))
{return or__3548__auto____4749;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4750.call(this,h,tag);
case  3 :
return derive__4751.call(this,h,tag,parent);
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
var underive__4757 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4758 = (function (h,tag,parent){
var parentMap__4753 = "﷐'parents".call(null,h);
var childsParents__4754 = (cljs.core.truth_(parentMap__4753.call(null,tag))?cljs.core.disj.call(null,parentMap__4753.call(null,tag),parent):cljs.core.set([]));
var newParents__4755 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4754))?cljs.core.assoc.call(null,parentMap__4753,tag,childsParents__4754):cljs.core.dissoc.call(null,parentMap__4753,tag));
var deriv_seq__4756 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4742_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4742_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4742_SHARP_),cljs.core.second.call(null,p1__4742_SHARP_)));
}),cljs.core.seq.call(null,newParents__4755)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4753.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4743_SHARP_,p2__4744_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4743_SHARP_,p2__4744_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4756));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4757.call(this,h,tag);
case  3 :
return underive__4758.call(this,h,tag,parent);
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
var xprefs__4760 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4762 = (cljs.core.truth_((function (){var and__3546__auto____4761 = xprefs__4760;

if(cljs.core.truth_(and__3546__auto____4761))
{return xprefs__4760.call(null,y);
} else
{return and__3546__auto____4761;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4762))
{return or__3548__auto____4762;
} else
{var or__3548__auto____4764 = (function (){var ps__4763 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4763) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4763),prefer_table)))
{} else
{}
{
var G__4767 = cljs.core.rest.call(null,ps__4763);
ps__4763 = G__4767;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4764))
{return or__3548__auto____4764;
} else
{var or__3548__auto____4766 = (function (){var ps__4765 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4765) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4765),y,prefer_table)))
{} else
{}
{
var G__4768 = cljs.core.rest.call(null,ps__4765);
ps__4765 = G__4768;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4766))
{return or__3548__auto____4766;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4769 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4769))
{return or__3548__auto____4769;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4778 = cljs.core.reduce.call(null,(function (be,p__4770){
var vec__4771__4772 = p__4770;
var k__4773 = cljs.core.nth.call(null,vec__4771__4772,0,null);
var ___4774 = cljs.core.nth.call(null,vec__4771__4772,1,null);
var e__4775 = vec__4771__4772;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4773)))
{var be2__4777 = (cljs.core.truth_((function (){var or__3548__auto____4776 = (be === null);

if(cljs.core.truth_(or__3548__auto____4776))
{return or__3548__auto____4776;
} else
{return cljs.core.dominates.call(null,k__4773,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4775:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4777),k__4773,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4773," and ",cljs.core.first.call(null,be2__4777),", and neither is preferred")));
}
return be2__4777;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4778))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4778));
return cljs.core.second.call(null,best_entry__4778);
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
if(cljs.core.truth_((function (){var and__3546__auto____4779 = mf;

if(cljs.core.truth_(and__3546__auto____4779))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4779;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4780 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4780))
{return or__3548__auto____4780;
} else
{var or__3548__auto____4781 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4781))
{return or__3548__auto____4781;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4782 = mf;

if(cljs.core.truth_(and__3546__auto____4782))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4782;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4783 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4783))
{return or__3548__auto____4783;
} else
{var or__3548__auto____4784 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4784))
{return or__3548__auto____4784;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4785 = mf;

if(cljs.core.truth_(and__3546__auto____4785))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4785;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4786 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4786))
{return or__3548__auto____4786;
} else
{var or__3548__auto____4787 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4787))
{return or__3548__auto____4787;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4788 = mf;

if(cljs.core.truth_(and__3546__auto____4788))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4788;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4789 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4789))
{return or__3548__auto____4789;
} else
{var or__3548__auto____4790 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4790))
{return or__3548__auto____4790;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4791 = mf;

if(cljs.core.truth_(and__3546__auto____4791))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4791;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4792 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4792))
{return or__3548__auto____4792;
} else
{var or__3548__auto____4793 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4793))
{return or__3548__auto____4793;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4794 = mf;

if(cljs.core.truth_(and__3546__auto____4794))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4794;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4795 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4795))
{return or__3548__auto____4795;
} else
{var or__3548__auto____4796 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4796))
{return or__3548__auto____4796;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4797 = mf;

if(cljs.core.truth_(and__3546__auto____4797))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4797;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4798 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4798))
{return or__3548__auto____4798;
} else
{var or__3548__auto____4799 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4799))
{return or__3548__auto____4799;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4800 = mf;

if(cljs.core.truth_(and__3546__auto____4800))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4800;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4801 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4801))
{return or__3548__auto____4801;
} else
{var or__3548__auto____4802 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4802))
{return or__3548__auto____4802;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4803 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4804 = cljs.core._get_method.call(null,mf,dispatch_val__4803);

if(cljs.core.truth_(target_fn__4804))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4803)));
}
return cljs.core.apply.call(null,target_fn__4804,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4805 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4806 = this;
cljs.core.swap_BANG_.call(null,this__4806.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4806.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4806.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4806.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4807 = this;
cljs.core.swap_BANG_.call(null,this__4807.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4807.method_cache,this__4807.method_table,this__4807.cached_hierarchy,this__4807.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4808 = this;
cljs.core.swap_BANG_.call(null,this__4808.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4808.method_cache,this__4808.method_table,this__4808.cached_hierarchy,this__4808.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4809 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4809.cached_hierarchy),cljs.core.deref.call(null,this__4809.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4809.method_cache,this__4809.method_table,this__4809.cached_hierarchy,this__4809.hierarchy);
}
var temp__3695__auto____4810 = cljs.core.deref.call(null,this__4809.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4810))
{var target_fn__4811 = temp__3695__auto____4810;

return target_fn__4811;
} else
{var temp__3695__auto____4812 = cljs.core.find_and_cache_best_method.call(null,this__4809.name,dispatch_val,this__4809.hierarchy,this__4809.method_table,this__4809.prefer_table,this__4809.method_cache,this__4809.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4812))
{var target_fn__4813 = temp__3695__auto____4812;

return target_fn__4813;
} else
{return cljs.core.deref.call(null,this__4809.method_table).call(null,this__4809.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4814 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4814.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4814.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4814.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4814.method_cache,this__4814.method_table,this__4814.cached_hierarchy,this__4814.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4815 = this;
return cljs.core.deref.call(null,this__4815.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4816 = this;
return cljs.core.deref.call(null,this__4816.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4817 = this;
return cljs.core.do_dispatch.call(null,mf,this__4817.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4818__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4818 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4818__delegate.call(this, _, args);
};
G__4818.cljs$lang$maxFixedArity = 1;
G__4818.cljs$lang$applyTo = (function (arglist__4819){
var _ = cljs.core.first(arglist__4819);
var args = cljs.core.rest(arglist__4819);
return G__4818__delegate.call(this, _, args);
});
return G__4818;
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
