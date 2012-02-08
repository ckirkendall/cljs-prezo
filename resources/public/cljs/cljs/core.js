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
var or__3548__auto____2795 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2795))
{return or__3548__auto____2795;
} else
{var or__3548__auto____2796 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2796))
{return or__3548__auto____2796;
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
return array[i];
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
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2797 = coll;

if(cljs.core.truth_(and__3546__auto____2797))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2797;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2798 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2798))
{return or__3548__auto____2798;
} else
{var or__3548__auto____2799 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2799))
{return or__3548__auto____2799;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2800 = coll;

if(cljs.core.truth_(and__3546__auto____2800))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2800;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2801 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2801))
{return or__3548__auto____2801;
} else
{var or__3548__auto____2802 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2802))
{return or__3548__auto____2802;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2803 = coll;

if(cljs.core.truth_(and__3546__auto____2803))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2803;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2804 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2804))
{return or__3548__auto____2804;
} else
{var or__3548__auto____2805 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2805))
{return or__3548__auto____2805;
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
var _nth__2812 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2806 = coll;

if(cljs.core.truth_(and__3546__auto____2806))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2806;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2807 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2807))
{return or__3548__auto____2807;
} else
{var or__3548__auto____2808 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2808))
{return or__3548__auto____2808;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2813 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2809 = coll;

if(cljs.core.truth_(and__3546__auto____2809))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2809;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2810 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2810))
{return or__3548__auto____2810;
} else
{var or__3548__auto____2811 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2811))
{return or__3548__auto____2811;
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
return _nth__2812.call(this,coll,n);
case  3 :
return _nth__2813.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2815 = coll;

if(cljs.core.truth_(and__3546__auto____2815))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2815;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2816 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2816))
{return or__3548__auto____2816;
} else
{var or__3548__auto____2817 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2817))
{return or__3548__auto____2817;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2818 = coll;

if(cljs.core.truth_(and__3546__auto____2818))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2818;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2819 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2819))
{return or__3548__auto____2819;
} else
{var or__3548__auto____2820 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2820))
{return or__3548__auto____2820;
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
var _lookup__2827 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2821 = o;

if(cljs.core.truth_(and__3546__auto____2821))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2821;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2822 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2822))
{return or__3548__auto____2822;
} else
{var or__3548__auto____2823 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2823))
{return or__3548__auto____2823;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2828 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2824 = o;

if(cljs.core.truth_(and__3546__auto____2824))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2824;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2825 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2825))
{return or__3548__auto____2825;
} else
{var or__3548__auto____2826 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2826))
{return or__3548__auto____2826;
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
return _lookup__2827.call(this,o,k);
case  3 :
return _lookup__2828.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2830 = coll;

if(cljs.core.truth_(and__3546__auto____2830))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2830;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2831 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2831))
{return or__3548__auto____2831;
} else
{var or__3548__auto____2832 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2832))
{return or__3548__auto____2832;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2833 = coll;

if(cljs.core.truth_(and__3546__auto____2833))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2833;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2834 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2834))
{return or__3548__auto____2834;
} else
{var or__3548__auto____2835 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2835))
{return or__3548__auto____2835;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2836 = coll;

if(cljs.core.truth_(and__3546__auto____2836))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2836;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2837 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2837))
{return or__3548__auto____2837;
} else
{var or__3548__auto____2838 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2838))
{return or__3548__auto____2838;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2839 = coll;

if(cljs.core.truth_(and__3546__auto____2839))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2839;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2840 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2840))
{return or__3548__auto____2840;
} else
{var or__3548__auto____2841 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2841))
{return or__3548__auto____2841;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2842 = coll;

if(cljs.core.truth_(and__3546__auto____2842))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2842;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2843 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2843))
{return or__3548__auto____2843;
} else
{var or__3548__auto____2844 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2844))
{return or__3548__auto____2844;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2845 = coll;

if(cljs.core.truth_(and__3546__auto____2845))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2845;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2846 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2846))
{return or__3548__auto____2846;
} else
{var or__3548__auto____2847 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2847))
{return or__3548__auto____2847;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2848 = coll;

if(cljs.core.truth_(and__3546__auto____2848))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2848;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2849 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2849))
{return or__3548__auto____2849;
} else
{var or__3548__auto____2850 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2850))
{return or__3548__auto____2850;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2851 = o;

if(cljs.core.truth_(and__3546__auto____2851))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2851;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2852 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2852))
{return or__3548__auto____2852;
} else
{var or__3548__auto____2853 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2853))
{return or__3548__auto____2853;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2854 = o;

if(cljs.core.truth_(and__3546__auto____2854))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2854;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2855 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2855))
{return or__3548__auto____2855;
} else
{var or__3548__auto____2856 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2856))
{return or__3548__auto____2856;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2857 = o;

if(cljs.core.truth_(and__3546__auto____2857))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2857;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2858 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2858))
{return or__3548__auto____2858;
} else
{var or__3548__auto____2859 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2859))
{return or__3548__auto____2859;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2860 = o;

if(cljs.core.truth_(and__3546__auto____2860))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2860;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2861 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2861))
{return or__3548__auto____2861;
} else
{var or__3548__auto____2862 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2862))
{return or__3548__auto____2862;
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
var _reduce__2869 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2863 = coll;

if(cljs.core.truth_(and__3546__auto____2863))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2863;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2864 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2864))
{return or__3548__auto____2864;
} else
{var or__3548__auto____2865 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2865))
{return or__3548__auto____2865;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2870 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2866 = coll;

if(cljs.core.truth_(and__3546__auto____2866))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2866;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2867 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2867))
{return or__3548__auto____2867;
} else
{var or__3548__auto____2868 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2868))
{return or__3548__auto____2868;
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
return _reduce__2869.call(this,coll,f);
case  3 :
return _reduce__2870.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2872 = o;

if(cljs.core.truth_(and__3546__auto____2872))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2872;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2873 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2873))
{return or__3548__auto____2873;
} else
{var or__3548__auto____2874 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2874))
{return or__3548__auto____2874;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2875 = o;

if(cljs.core.truth_(and__3546__auto____2875))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2875;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2876 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2876))
{return or__3548__auto____2876;
} else
{var or__3548__auto____2877 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2877))
{return or__3548__auto____2877;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2878 = o;

if(cljs.core.truth_(and__3546__auto____2878))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2878;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2879 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2879))
{return or__3548__auto____2879;
} else
{var or__3548__auto____2880 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2880))
{return or__3548__auto____2880;
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
if(cljs.core.truth_((function (){var and__3546__auto____2881 = o;

if(cljs.core.truth_(and__3546__auto____2881))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2881;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2882 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2882))
{return or__3548__auto____2882;
} else
{var or__3548__auto____2883 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2883))
{return or__3548__auto____2883;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2884 = d;

if(cljs.core.truth_(and__3546__auto____2884))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2884;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2885 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2885))
{return or__3548__auto____2885;
} else
{var or__3548__auto____2886 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2886))
{return or__3548__auto____2886;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2887 = this$;

if(cljs.core.truth_(and__3546__auto____2887))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2887;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2888 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2888))
{return or__3548__auto____2888;
} else
{var or__3548__auto____2889 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2889))
{return or__3548__auto____2889;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2890 = this$;

if(cljs.core.truth_(and__3546__auto____2890))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2890;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2891 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2891))
{return or__3548__auto____2891;
} else
{var or__3548__auto____2892 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2892))
{return or__3548__auto____2892;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2893 = this$;

if(cljs.core.truth_(and__3546__auto____2893))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2893;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2894 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2894))
{return or__3548__auto____2894;
} else
{var or__3548__auto____2895 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2895))
{return or__3548__auto____2895;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2896 = null;
var G__2896__2897 = (function (o,k){
return null;
});
var G__2896__2898 = (function (o,k,not_found){
return not_found;
});
G__2896 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2896__2897.call(this,o,k);
case  3 :
return G__2896__2898.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2896;
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
var G__2900 = null;
var G__2900__2901 = (function (_,f){
return f.call(null);
});
var G__2900__2902 = (function (_,f,start){
return start;
});
G__2900 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2900__2901.call(this,_,f);
case  3 :
return G__2900__2902.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2900;
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
var G__2904 = null;
var G__2904__2905 = (function (_,n){
return null;
});
var G__2904__2906 = (function (_,n,not_found){
return not_found;
});
G__2904 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2904__2905.call(this,_,n);
case  3 :
return G__2904__2906.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2904;
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
var ci_reduce__2914 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2908 = cljs.core._nth.call(null,cicoll,0);
var n__2909 = 1;

while(true){
if(cljs.core.truth_((n__2909 < cljs.core._count.call(null,cicoll))))
{{
var G__2918 = f.call(null,val__2908,cljs.core._nth.call(null,cicoll,n__2909));
var G__2919 = (n__2909 + 1);
val__2908 = G__2918;
n__2909 = G__2919;
continue;
}
} else
{return val__2908;
}
break;
}
}
});
var ci_reduce__2915 = (function (cicoll,f,val){
var val__2910 = val;
var n__2911 = 0;

while(true){
if(cljs.core.truth_((n__2911 < cljs.core._count.call(null,cicoll))))
{{
var G__2920 = f.call(null,val__2910,cljs.core._nth.call(null,cicoll,n__2911));
var G__2921 = (n__2911 + 1);
val__2910 = G__2920;
n__2911 = G__2921;
continue;
}
} else
{return val__2910;
}
break;
}
});
var ci_reduce__2916 = (function (cicoll,f,val,idx){
var val__2912 = val;
var n__2913 = idx;

while(true){
if(cljs.core.truth_((n__2913 < cljs.core._count.call(null,cicoll))))
{{
var G__2922 = f.call(null,val__2912,cljs.core._nth.call(null,cicoll,n__2913));
var G__2923 = (n__2913 + 1);
val__2912 = G__2922;
n__2913 = G__2923;
continue;
}
} else
{return val__2912;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2914.call(this,cicoll,f);
case  3 :
return ci_reduce__2915.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2916.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2924 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2937 = null;
var G__2937__2938 = (function (coll,f){
var this__2925 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2925.a[this__2925.i]),(this__2925.i + 1));
});
var G__2937__2939 = (function (coll,f,start){
var this__2926 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2926.i);
});
G__2937 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2937__2938.call(this,coll,f);
case  3 :
return G__2937__2939.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2937;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2927 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2928 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2941 = null;
var G__2941__2942 = (function (coll,n){
var this__2929 = this;
var i__2930 = (n + this__2929.i);

if(cljs.core.truth_((i__2930 < this__2929.a.length)))
{return (this__2929.a[i__2930]);
} else
{return null;
}
});
var G__2941__2943 = (function (coll,n,not_found){
var this__2931 = this;
var i__2932 = (n + this__2931.i);

if(cljs.core.truth_((i__2932 < this__2931.a.length)))
{return (this__2931.a[i__2932]);
} else
{return not_found;
}
});
G__2941 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2941__2942.call(this,coll,n);
case  3 :
return G__2941__2943.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2941;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2933 = this;
return (this__2933.a.length - this__2933.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2934 = this;
return (this__2934.a[this__2934.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2935 = this;
if(cljs.core.truth_(((this__2935.i + 1) < this__2935.a.length)))
{return (new cljs.core.IndexedSeq(this__2935.a,(this__2935.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2936 = this;
return this$;
});
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
var G__2945 = null;
var G__2945__2946 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2945__2947 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2945 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2945__2946.call(this,array,f);
case  3 :
return G__2945__2947.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2945;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2949 = null;
var G__2949__2950 = (function (array,k){
return (array[k]);
});
var G__2949__2951 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2949 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2949__2950.call(this,array,k);
case  3 :
return G__2949__2951.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2949;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2953 = null;
var G__2953__2954 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2953__2955 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2953 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2953__2954.call(this,array,n);
case  3 :
return G__2953__2955.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2953;
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
var temp__3698__auto____2957 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2957))
{var s__2958 = temp__3698__auto____2957;

return cljs.core._first.call(null,s__2958);
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
var G__2959 = cljs.core.next.call(null,s);
s = G__2959;
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
var s__2960 = cljs.core.seq.call(null,x);
var n__2961 = 0;

while(true){
if(cljs.core.truth_(s__2960))
{{
var G__2962 = cljs.core.next.call(null,s__2960);
var G__2963 = (n__2961 + 1);
s__2960 = G__2962;
n__2961 = G__2963;
continue;
}
} else
{return n__2961;
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
var conj__2964 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2965 = (function() { 
var G__2967__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2968 = conj.call(null,coll,x);
var G__2969 = cljs.core.first.call(null,xs);
var G__2970 = cljs.core.next.call(null,xs);
coll = G__2968;
x = G__2969;
xs = G__2970;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2967 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2967__delegate.call(this, coll, x, xs);
};
G__2967.cljs$lang$maxFixedArity = 2;
G__2967.cljs$lang$applyTo = (function (arglist__2971){
var coll = cljs.core.first(arglist__2971);
var x = cljs.core.first(cljs.core.next(arglist__2971));
var xs = cljs.core.rest(cljs.core.next(arglist__2971));
return G__2967__delegate.call(this, coll, x, xs);
});
return G__2967;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2964.call(this,coll,x);
default:
return conj__2965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2965.cljs$lang$applyTo;
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
var nth__2972 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2973 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2972.call(this,coll,n);
case  3 :
return nth__2973.call(this,coll,n,not_found);
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
var get__2975 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2976 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2975.call(this,o,k);
case  3 :
return get__2976.call(this,o,k,not_found);
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
var assoc__2979 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2980 = (function() { 
var G__2982__delegate = function (coll,k,v,kvs){
while(true){
var ret__2978 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2983 = ret__2978;
var G__2984 = cljs.core.first.call(null,kvs);
var G__2985 = cljs.core.second.call(null,kvs);
var G__2986 = cljs.core.nnext.call(null,kvs);
coll = G__2983;
k = G__2984;
v = G__2985;
kvs = G__2986;
continue;
}
} else
{return ret__2978;
}
break;
}
};
var G__2982 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2982__delegate.call(this, coll, k, v, kvs);
};
G__2982.cljs$lang$maxFixedArity = 3;
G__2982.cljs$lang$applyTo = (function (arglist__2987){
var coll = cljs.core.first(arglist__2987);
var k = cljs.core.first(cljs.core.next(arglist__2987));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2987)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2987)));
return G__2982__delegate.call(this, coll, k, v, kvs);
});
return G__2982;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2979.call(this,coll,k,v);
default:
return assoc__2980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2980.cljs$lang$applyTo;
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
var dissoc__2989 = (function (coll){
return coll;
});
var dissoc__2990 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2991 = (function() { 
var G__2993__delegate = function (coll,k,ks){
while(true){
var ret__2988 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2994 = ret__2988;
var G__2995 = cljs.core.first.call(null,ks);
var G__2996 = cljs.core.next.call(null,ks);
coll = G__2994;
k = G__2995;
ks = G__2996;
continue;
}
} else
{return ret__2988;
}
break;
}
};
var G__2993 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2993__delegate.call(this, coll, k, ks);
};
G__2993.cljs$lang$maxFixedArity = 2;
G__2993.cljs$lang$applyTo = (function (arglist__2997){
var coll = cljs.core.first(arglist__2997);
var k = cljs.core.first(cljs.core.next(arglist__2997));
var ks = cljs.core.rest(cljs.core.next(arglist__2997));
return G__2993__delegate.call(this, coll, k, ks);
});
return G__2993;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2989.call(this,coll);
case  2 :
return dissoc__2990.call(this,coll,k);
default:
return dissoc__2991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2991.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__321__auto____2998 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2999 = x__321__auto____2998;

if(cljs.core.truth_(and__3546__auto____2999))
{var and__3546__auto____3000 = x__321__auto____2998.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3000))
{return cljs.core.not.call(null,x__321__auto____2998.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3000;
}
} else
{return and__3546__auto____2999;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____2998);
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
var disj__3002 = (function (coll){
return coll;
});
var disj__3003 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3004 = (function() { 
var G__3006__delegate = function (coll,k,ks){
while(true){
var ret__3001 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3007 = ret__3001;
var G__3008 = cljs.core.first.call(null,ks);
var G__3009 = cljs.core.next.call(null,ks);
coll = G__3007;
k = G__3008;
ks = G__3009;
continue;
}
} else
{return ret__3001;
}
break;
}
};
var G__3006 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3006__delegate.call(this, coll, k, ks);
};
G__3006.cljs$lang$maxFixedArity = 2;
G__3006.cljs$lang$applyTo = (function (arglist__3010){
var coll = cljs.core.first(arglist__3010);
var k = cljs.core.first(cljs.core.next(arglist__3010));
var ks = cljs.core.rest(cljs.core.next(arglist__3010));
return G__3006__delegate.call(this, coll, k, ks);
});
return G__3006;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3002.call(this,coll);
case  2 :
return disj__3003.call(this,coll,k);
default:
return disj__3004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3004.cljs$lang$applyTo;
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
{var x__321__auto____3011 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3012 = x__321__auto____3011;

if(cljs.core.truth_(and__3546__auto____3012))
{var and__3546__auto____3013 = x__321__auto____3011.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3013))
{return cljs.core.not.call(null,x__321__auto____3011.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3013;
}
} else
{return and__3546__auto____3012;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__321__auto____3011);
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
{var x__321__auto____3014 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3015 = x__321__auto____3014;

if(cljs.core.truth_(and__3546__auto____3015))
{var and__3546__auto____3016 = x__321__auto____3014.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3016))
{return cljs.core.not.call(null,x__321__auto____3014.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3016;
}
} else
{return and__3546__auto____3015;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__321__auto____3014);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__321__auto____3017 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3018 = x__321__auto____3017;

if(cljs.core.truth_(and__3546__auto____3018))
{var and__3546__auto____3019 = x__321__auto____3017.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3019))
{return cljs.core.not.call(null,x__321__auto____3017.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3019;
}
} else
{return and__3546__auto____3018;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__321__auto____3017);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__321__auto____3020 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3021 = x__321__auto____3020;

if(cljs.core.truth_(and__3546__auto____3021))
{var and__3546__auto____3022 = x__321__auto____3020.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3022))
{return cljs.core.not.call(null,x__321__auto____3020.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3022;
}
} else
{return and__3546__auto____3021;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__321__auto____3020);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__321__auto____3023 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3024 = x__321__auto____3023;

if(cljs.core.truth_(and__3546__auto____3024))
{var and__3546__auto____3025 = x__321__auto____3023.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3025))
{return cljs.core.not.call(null,x__321__auto____3023.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3025;
}
} else
{return and__3546__auto____3024;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__321__auto____3023);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____3026 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3027 = x__321__auto____3026;

if(cljs.core.truth_(and__3546__auto____3027))
{var and__3546__auto____3028 = x__321__auto____3026.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3028))
{return cljs.core.not.call(null,x__321__auto____3026.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3028;
}
} else
{return and__3546__auto____3027;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__321__auto____3026);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__321__auto____3029 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3030 = x__321__auto____3029;

if(cljs.core.truth_(and__3546__auto____3030))
{var and__3546__auto____3031 = x__321__auto____3029.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3031))
{return cljs.core.not.call(null,x__321__auto____3029.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3031;
}
} else
{return and__3546__auto____3030;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__321__auto____3029);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3032 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3032.push(key);
}));
return keys__3032;
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
{var x__321__auto____3033 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3034 = x__321__auto____3033;

if(cljs.core.truth_(and__3546__auto____3034))
{var and__3546__auto____3035 = x__321__auto____3033.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3035))
{return cljs.core.not.call(null,x__321__auto____3033.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3035;
}
} else
{return and__3546__auto____3034;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__321__auto____3033);
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
var and__3546__auto____3036 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3036))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3037 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3037))
{return or__3548__auto____3037;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3036;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3038 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3038))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3038;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3039 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3039))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3039;
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
var and__3546__auto____3040 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3040))
{return (n == n.toFixed());
} else
{return and__3546__auto____3040;
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
if(cljs.core.truth_((function (){var and__3546__auto____3041 = coll;

if(cljs.core.truth_(and__3546__auto____3041))
{var and__3546__auto____3042 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3042))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3042;
}
} else
{return and__3546__auto____3041;
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
var distinct_QMARK___3047 = (function (x){
return true;
});
var distinct_QMARK___3048 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3049 = (function() { 
var G__3051__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3043 = cljs.core.set([y,x]);
var xs__3044 = more;

while(true){
var x__3045 = cljs.core.first.call(null,xs__3044);
var etc__3046 = cljs.core.next.call(null,xs__3044);

if(cljs.core.truth_(xs__3044))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3043,x__3045)))
{return false;
} else
{{
var G__3052 = cljs.core.conj.call(null,s__3043,x__3045);
var G__3053 = etc__3046;
s__3043 = G__3052;
xs__3044 = G__3053;
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
var G__3051 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3051__delegate.call(this, x, y, more);
};
G__3051.cljs$lang$maxFixedArity = 2;
G__3051.cljs$lang$applyTo = (function (arglist__3054){
var x = cljs.core.first(arglist__3054);
var y = cljs.core.first(cljs.core.next(arglist__3054));
var more = cljs.core.rest(cljs.core.next(arglist__3054));
return G__3051__delegate.call(this, x, y, more);
});
return G__3051;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3047.call(this,x);
case  2 :
return distinct_QMARK___3048.call(this,x,y);
default:
return distinct_QMARK___3049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3049.cljs$lang$applyTo;
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
var r__3055 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3055)))
{return r__3055;
} else
{if(cljs.core.truth_(r__3055))
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
var sort__3057 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3058 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3056 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3056,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3056);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3057.call(this,comp);
case  2 :
return sort__3058.call(this,comp,coll);
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
var sort_by__3060 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3061 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3060.call(this,keyfn,comp);
case  3 :
return sort_by__3061.call(this,keyfn,comp,coll);
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
var reduce__3063 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3064 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3063.call(this,f,val);
case  3 :
return reduce__3064.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3070 = (function (f,coll){
var temp__3695__auto____3066 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3066))
{var s__3067 = temp__3695__auto____3066;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3067),cljs.core.next.call(null,s__3067));
} else
{return f.call(null);
}
});
var seq_reduce__3071 = (function (f,val,coll){
var val__3068 = val;
var coll__3069 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3069))
{{
var G__3073 = f.call(null,val__3068,cljs.core.first.call(null,coll__3069));
var G__3074 = cljs.core.next.call(null,coll__3069);
val__3068 = G__3073;
coll__3069 = G__3074;
continue;
}
} else
{return val__3068;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3070.call(this,f,val);
case  3 :
return seq_reduce__3071.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3075 = null;
var G__3075__3076 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3075__3077 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3075 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3075__3076.call(this,coll,f);
case  3 :
return G__3075__3077.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3075;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3079 = (function (){
return 0;
});
var _PLUS___3080 = (function (x){
return x;
});
var _PLUS___3081 = (function (x,y){
return (x + y);
});
var _PLUS___3082 = (function() { 
var G__3084__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__3084 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3084__delegate.call(this, x, y, more);
};
G__3084.cljs$lang$maxFixedArity = 2;
G__3084.cljs$lang$applyTo = (function (arglist__3085){
var x = cljs.core.first(arglist__3085);
var y = cljs.core.first(cljs.core.next(arglist__3085));
var more = cljs.core.rest(cljs.core.next(arglist__3085));
return G__3084__delegate.call(this, x, y, more);
});
return G__3084;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3079.call(this);
case  1 :
return _PLUS___3080.call(this,x);
case  2 :
return _PLUS___3081.call(this,x,y);
default:
return _PLUS___3082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3082.cljs$lang$applyTo;
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
var ___3086 = (function (x){
return (- x);
});
var ___3087 = (function (x,y){
return (x - y);
});
var ___3088 = (function() { 
var G__3090__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__3090 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3090__delegate.call(this, x, y, more);
};
G__3090.cljs$lang$maxFixedArity = 2;
G__3090.cljs$lang$applyTo = (function (arglist__3091){
var x = cljs.core.first(arglist__3091);
var y = cljs.core.first(cljs.core.next(arglist__3091));
var more = cljs.core.rest(cljs.core.next(arglist__3091));
return G__3090__delegate.call(this, x, y, more);
});
return G__3090;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3086.call(this,x);
case  2 :
return ___3087.call(this,x,y);
default:
return ___3088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3088.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3092 = (function (){
return 1;
});
var _STAR___3093 = (function (x){
return x;
});
var _STAR___3094 = (function (x,y){
return (x * y);
});
var _STAR___3095 = (function() { 
var G__3097__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__3097 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3097__delegate.call(this, x, y, more);
};
G__3097.cljs$lang$maxFixedArity = 2;
G__3097.cljs$lang$applyTo = (function (arglist__3098){
var x = cljs.core.first(arglist__3098);
var y = cljs.core.first(cljs.core.next(arglist__3098));
var more = cljs.core.rest(cljs.core.next(arglist__3098));
return G__3097__delegate.call(this, x, y, more);
});
return G__3097;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3092.call(this);
case  1 :
return _STAR___3093.call(this,x);
case  2 :
return _STAR___3094.call(this,x,y);
default:
return _STAR___3095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3095.cljs$lang$applyTo;
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
var _SLASH___3099 = (function (x){
return (1 / x);
});
var _SLASH___3100 = (function (x,y){
return (x / y);
});
var _SLASH___3101 = (function() { 
var G__3103__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3103 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3103__delegate.call(this, x, y, more);
};
G__3103.cljs$lang$maxFixedArity = 2;
G__3103.cljs$lang$applyTo = (function (arglist__3104){
var x = cljs.core.first(arglist__3104);
var y = cljs.core.first(cljs.core.next(arglist__3104));
var more = cljs.core.rest(cljs.core.next(arglist__3104));
return G__3103__delegate.call(this, x, y, more);
});
return G__3103;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3099.call(this,x);
case  2 :
return _SLASH___3100.call(this,x,y);
default:
return _SLASH___3101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3101.cljs$lang$applyTo;
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
var _LT___3105 = (function (x){
return true;
});
var _LT___3106 = (function (x,y){
return (x < y);
});
var _LT___3107 = (function() { 
var G__3109__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3110 = y;
var G__3111 = cljs.core.first.call(null,more);
var G__3112 = cljs.core.next.call(null,more);
x = G__3110;
y = G__3111;
more = G__3112;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3109 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3109__delegate.call(this, x, y, more);
};
G__3109.cljs$lang$maxFixedArity = 2;
G__3109.cljs$lang$applyTo = (function (arglist__3113){
var x = cljs.core.first(arglist__3113);
var y = cljs.core.first(cljs.core.next(arglist__3113));
var more = cljs.core.rest(cljs.core.next(arglist__3113));
return G__3109__delegate.call(this, x, y, more);
});
return G__3109;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3105.call(this,x);
case  2 :
return _LT___3106.call(this,x,y);
default:
return _LT___3107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3107.cljs$lang$applyTo;
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
var _LT__EQ___3114 = (function (x){
return true;
});
var _LT__EQ___3115 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3116 = (function() { 
var G__3118__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3119 = y;
var G__3120 = cljs.core.first.call(null,more);
var G__3121 = cljs.core.next.call(null,more);
x = G__3119;
y = G__3120;
more = G__3121;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3118 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3118__delegate.call(this, x, y, more);
};
G__3118.cljs$lang$maxFixedArity = 2;
G__3118.cljs$lang$applyTo = (function (arglist__3122){
var x = cljs.core.first(arglist__3122);
var y = cljs.core.first(cljs.core.next(arglist__3122));
var more = cljs.core.rest(cljs.core.next(arglist__3122));
return G__3118__delegate.call(this, x, y, more);
});
return G__3118;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3114.call(this,x);
case  2 :
return _LT__EQ___3115.call(this,x,y);
default:
return _LT__EQ___3116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3116.cljs$lang$applyTo;
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
var _GT___3123 = (function (x){
return true;
});
var _GT___3124 = (function (x,y){
return (x > y);
});
var _GT___3125 = (function() { 
var G__3127__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3128 = y;
var G__3129 = cljs.core.first.call(null,more);
var G__3130 = cljs.core.next.call(null,more);
x = G__3128;
y = G__3129;
more = G__3130;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3127 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3127__delegate.call(this, x, y, more);
};
G__3127.cljs$lang$maxFixedArity = 2;
G__3127.cljs$lang$applyTo = (function (arglist__3131){
var x = cljs.core.first(arglist__3131);
var y = cljs.core.first(cljs.core.next(arglist__3131));
var more = cljs.core.rest(cljs.core.next(arglist__3131));
return G__3127__delegate.call(this, x, y, more);
});
return G__3127;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3123.call(this,x);
case  2 :
return _GT___3124.call(this,x,y);
default:
return _GT___3125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3125.cljs$lang$applyTo;
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
var _GT__EQ___3132 = (function (x){
return true;
});
var _GT__EQ___3133 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3134 = (function() { 
var G__3136__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3137 = y;
var G__3138 = cljs.core.first.call(null,more);
var G__3139 = cljs.core.next.call(null,more);
x = G__3137;
y = G__3138;
more = G__3139;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3136__delegate.call(this, x, y, more);
};
G__3136.cljs$lang$maxFixedArity = 2;
G__3136.cljs$lang$applyTo = (function (arglist__3140){
var x = cljs.core.first(arglist__3140);
var y = cljs.core.first(cljs.core.next(arglist__3140));
var more = cljs.core.rest(cljs.core.next(arglist__3140));
return G__3136__delegate.call(this, x, y, more);
});
return G__3136;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3132.call(this,x);
case  2 :
return _GT__EQ___3133.call(this,x,y);
default:
return _GT__EQ___3134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3134.cljs$lang$applyTo;
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
var max__3141 = (function (x){
return x;
});
var max__3142 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3143 = (function() { 
var G__3145__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__3145 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3145__delegate.call(this, x, y, more);
};
G__3145.cljs$lang$maxFixedArity = 2;
G__3145.cljs$lang$applyTo = (function (arglist__3146){
var x = cljs.core.first(arglist__3146);
var y = cljs.core.first(cljs.core.next(arglist__3146));
var more = cljs.core.rest(cljs.core.next(arglist__3146));
return G__3145__delegate.call(this, x, y, more);
});
return G__3145;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3141.call(this,x);
case  2 :
return max__3142.call(this,x,y);
default:
return max__3143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3143.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3147 = (function (x){
return x;
});
var min__3148 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3149 = (function() { 
var G__3151__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__3151 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3151__delegate.call(this, x, y, more);
};
G__3151.cljs$lang$maxFixedArity = 2;
G__3151.cljs$lang$applyTo = (function (arglist__3152){
var x = cljs.core.first(arglist__3152);
var y = cljs.core.first(cljs.core.next(arglist__3152));
var more = cljs.core.rest(cljs.core.next(arglist__3152));
return G__3151__delegate.call(this, x, y, more);
});
return G__3151;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3147.call(this,x);
case  2 :
return min__3148.call(this,x,y);
default:
return min__3149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3149.cljs$lang$applyTo;
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
var rem__3153 = (n % d);

return cljs.core.fix.call(null,((n - rem__3153) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3154 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3154));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3155 = (function (){
return Math.random.call(null);
});
var rand__3156 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3155.call(this);
case  1 :
return rand__3156.call(this,n);
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
return (~x);
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
var _EQ__EQ___3158 = (function (x){
return true;
});
var _EQ__EQ___3159 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3160 = (function() { 
var G__3162__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3163 = y;
var G__3164 = cljs.core.first.call(null,more);
var G__3165 = cljs.core.next.call(null,more);
x = G__3163;
y = G__3164;
more = G__3165;
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
var G__3162 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3162__delegate.call(this, x, y, more);
};
G__3162.cljs$lang$maxFixedArity = 2;
G__3162.cljs$lang$applyTo = (function (arglist__3166){
var x = cljs.core.first(arglist__3166);
var y = cljs.core.first(cljs.core.next(arglist__3166));
var more = cljs.core.rest(cljs.core.next(arglist__3166));
return G__3162__delegate.call(this, x, y, more);
});
return G__3162;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3158.call(this,x);
case  2 :
return _EQ__EQ___3159.call(this,x,y);
default:
return _EQ__EQ___3160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3160.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
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
var n__3167 = n;
var xs__3168 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3169 = xs__3168;

if(cljs.core.truth_(and__3546__auto____3169))
{return (n__3167 > 0);
} else
{return and__3546__auto____3169;
}
})()))
{{
var G__3170 = (n__3167 - 1);
var G__3171 = cljs.core.next.call(null,xs__3168);
n__3167 = G__3170;
xs__3168 = G__3171;
continue;
}
} else
{return xs__3168;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3176 = null;
var G__3176__3177 = (function (coll,n){
var temp__3695__auto____3172 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3172))
{var xs__3173 = temp__3695__auto____3172;

return cljs.core.first.call(null,xs__3173);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3176__3178 = (function (coll,n,not_found){
var temp__3695__auto____3174 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3174))
{var xs__3175 = temp__3695__auto____3174;

return cljs.core.first.call(null,xs__3175);
} else
{return not_found;
}
});
G__3176 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3176__3177.call(this,coll,n);
case  3 :
return G__3176__3178.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3176;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3180 = (function (){
return "";
});
var str_STAR___3181 = (function (x){
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
var str_STAR___3182 = (function() { 
var G__3184__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3185 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3186 = cljs.core.next.call(null,more);
sb = G__3185;
more = G__3186;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3184 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3184__delegate.call(this, x, ys);
};
G__3184.cljs$lang$maxFixedArity = 1;
G__3184.cljs$lang$applyTo = (function (arglist__3187){
var x = cljs.core.first(arglist__3187);
var ys = cljs.core.rest(arglist__3187);
return G__3184__delegate.call(this, x, ys);
});
return G__3184;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3180.call(this);
case  1 :
return str_STAR___3181.call(this,x);
default:
return str_STAR___3182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3182.cljs$lang$applyTo;
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
var str__3188 = (function (){
return "";
});
var str__3189 = (function (x){
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
var str__3190 = (function() { 
var G__3192__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3192 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3192__delegate.call(this, x, ys);
};
G__3192.cljs$lang$maxFixedArity = 1;
G__3192.cljs$lang$applyTo = (function (arglist__3193){
var x = cljs.core.first(arglist__3193);
var ys = cljs.core.rest(arglist__3193);
return G__3192__delegate.call(this, x, ys);
});
return G__3192;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3188.call(this);
case  1 :
return str__3189.call(this,x);
default:
return str__3190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3190.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3194 = (function (s,start){
return s.substring(start);
});
var subs__3195 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3194.call(this,s,start);
case  3 :
return subs__3195.call(this,s,start,end);
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
var symbol__3197 = (function (name){
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
var symbol__3198 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3197.call(this,ns);
case  2 :
return symbol__3198.call(this,ns,name);
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
var keyword__3200 = (function (name){
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
var keyword__3201 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3200.call(this,ns);
case  2 :
return keyword__3201.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3203 = cljs.core.seq.call(null,x);
var ys__3204 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3203)))
{return cljs.core.nil_QMARK_.call(null,ys__3204);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3204)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3203),cljs.core.first.call(null,ys__3204))))
{{
var G__3205 = cljs.core.next.call(null,xs__3203);
var G__3206 = cljs.core.next.call(null,ys__3204);
xs__3203 = G__3205;
ys__3204 = G__3206;
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
return cljs.core.reduce.call(null,(function (p1__3207_SHARP_,p2__3208_SHARP_){
return cljs.core.hash_combine.call(null,p1__3207_SHARP_,cljs.core.hash.call(null,p2__3208_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3209__3210 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3209__3210))
{var G__3212__3214 = cljs.core.first.call(null,G__3209__3210);
var vec__3213__3215 = G__3212__3214;
var key_name__3216 = cljs.core.nth.call(null,vec__3213__3215,0,null);
var f__3217 = cljs.core.nth.call(null,vec__3213__3215,1,null);
var G__3209__3218 = G__3209__3210;

var G__3212__3219 = G__3212__3214;
var G__3209__3220 = G__3209__3218;

while(true){
var vec__3221__3222 = G__3212__3219;
var key_name__3223 = cljs.core.nth.call(null,vec__3221__3222,0,null);
var f__3224 = cljs.core.nth.call(null,vec__3221__3222,1,null);
var G__3209__3225 = G__3209__3220;

var str_name__3226 = cljs.core.name.call(null,key_name__3223);

obj[str_name__3226] = f__3224;
var temp__3698__auto____3227 = cljs.core.next.call(null,G__3209__3225);

if(cljs.core.truth_(temp__3698__auto____3227))
{var G__3209__3228 = temp__3698__auto____3227;

{
var G__3229 = cljs.core.first.call(null,G__3209__3228);
var G__3230 = G__3209__3228;
G__3212__3219 = G__3229;
G__3209__3220 = G__3230;
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
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3231 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3232 = this;
return (new cljs.core.List(this__3232.meta,o,coll,(this__3232.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3233 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3234 = this;
return this__3234.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3235 = this;
return this__3235.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3236 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3237 = this;
return this__3237.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3238 = this;
return this__3238.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3239 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3240 = this;
return (new cljs.core.List(meta,this__3240.first,this__3240.rest,this__3240.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3241 = this;
return this__3241.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3242 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3243 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3244 = this;
return (new cljs.core.List(this__3244.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3245 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3246 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3247 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3248 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3249 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3250 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3251 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3252 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3253 = this;
return this__3253.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3254 = this;
return coll;
});
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
list.cljs$lang$applyTo = (function (arglist__3255){
var items = cljs.core.seq( arglist__3255 );;
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
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3256 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3257 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3258 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3259 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3259.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3260 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3261 = this;
return this__3261.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3262 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3262.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3262.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3263 = this;
return this__3263.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3264 = this;
return (new cljs.core.Cons(meta,this__3264.first,this__3264.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3265 = null;
var G__3265__3266 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3265__3267 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3265 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3265__3266.call(this,string,f);
case  3 :
return G__3265__3267.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3265;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3269 = null;
var G__3269__3270 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3269__3271 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3269 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3269__3270.call(this,string,k);
case  3 :
return G__3269__3271.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3269;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3273 = null;
var G__3273__3274 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3273__3275 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3273 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3273__3274.call(this,string,n);
case  3 :
return G__3273__3275.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3273;
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
String['prototype']['call'] = (function() {
var G__3277 = null;
var G__3277__3278 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3277__3279 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3277 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3277__3278.call(this,_,coll);
case  3 :
return G__3277__3279.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3277;
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
var x__3281 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3281;
} else
{lazy_seq.x = x__3281.call(null);
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
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3282 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3283 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3284 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3285 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3285.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3286 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3287 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3288 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3289 = this;
return this__3289.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3290 = this;
return (new cljs.core.LazySeq(meta,this__3290.realized,this__3290.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3291 = cljs.core.array.call(null);

var s__3292 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3292)))
{ary__3291.push(cljs.core.first.call(null,s__3292));
{
var G__3293 = cljs.core.next.call(null,s__3292);
s__3292 = G__3293;
continue;
}
} else
{return ary__3291;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3294 = s;
var i__3295 = n;
var sum__3296 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3297 = (i__3295 > 0);

if(cljs.core.truth_(and__3546__auto____3297))
{return cljs.core.seq.call(null,s__3294);
} else
{return and__3546__auto____3297;
}
})()))
{{
var G__3298 = cljs.core.next.call(null,s__3294);
var G__3299 = (i__3295 - 1);
var G__3300 = (sum__3296 + 1);
s__3294 = G__3298;
i__3295 = G__3299;
sum__3296 = G__3300;
continue;
}
} else
{return sum__3296;
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
var concat__3304 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3305 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3306 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3301 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3301))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3301),concat.call(null,cljs.core.rest.call(null,s__3301),y));
} else
{return y;
}
})));
});
var concat__3307 = (function() { 
var G__3309__delegate = function (x,y,zs){
var cat__3303 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3302 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3302))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3302),cat.call(null,cljs.core.rest.call(null,xys__3302),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3303.call(null,concat.call(null,x,y),zs);
};
var G__3309 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3309__delegate.call(this, x, y, zs);
};
G__3309.cljs$lang$maxFixedArity = 2;
G__3309.cljs$lang$applyTo = (function (arglist__3310){
var x = cljs.core.first(arglist__3310);
var y = cljs.core.first(cljs.core.next(arglist__3310));
var zs = cljs.core.rest(cljs.core.next(arglist__3310));
return G__3309__delegate.call(this, x, y, zs);
});
return G__3309;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3304.call(this);
case  1 :
return concat__3305.call(this,x);
case  2 :
return concat__3306.call(this,x,y);
default:
return concat__3307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3307.cljs$lang$applyTo;
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
var list_STAR___3311 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3312 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3313 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3314 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3315 = (function() { 
var G__3317__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3317 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3317__delegate.call(this, a, b, c, d, more);
};
G__3317.cljs$lang$maxFixedArity = 4;
G__3317.cljs$lang$applyTo = (function (arglist__3318){
var a = cljs.core.first(arglist__3318);
var b = cljs.core.first(cljs.core.next(arglist__3318));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3318)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3318))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3318))));
return G__3317__delegate.call(this, a, b, c, d, more);
});
return G__3317;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3311.call(this,a);
case  2 :
return list_STAR___3312.call(this,a,b);
case  3 :
return list_STAR___3313.call(this,a,b,c);
case  4 :
return list_STAR___3314.call(this,a,b,c,d);
default:
return list_STAR___3315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3315.cljs$lang$applyTo;
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
var apply__3328 = (function (f,args){
var fixed_arity__3319 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3319 + 1)) <= fixed_arity__3319)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3329 = (function (f,x,args){
var arglist__3320 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3321 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3320,fixed_arity__3321) <= fixed_arity__3321)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3320));
} else
{return f.cljs$lang$applyTo(arglist__3320);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3320));
}
});
var apply__3330 = (function (f,x,y,args){
var arglist__3322 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3323 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3322,fixed_arity__3323) <= fixed_arity__3323)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3322));
} else
{return f.cljs$lang$applyTo(arglist__3322);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3322));
}
});
var apply__3331 = (function (f,x,y,z,args){
var arglist__3324 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3325 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3324,fixed_arity__3325) <= fixed_arity__3325)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3324));
} else
{return f.cljs$lang$applyTo(arglist__3324);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3324));
}
});
var apply__3332 = (function() { 
var G__3334__delegate = function (f,a,b,c,d,args){
var arglist__3326 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3327 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3326,fixed_arity__3327) <= fixed_arity__3327)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3326));
} else
{return f.cljs$lang$applyTo(arglist__3326);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3326));
}
};
var G__3334 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3334__delegate.call(this, f, a, b, c, d, args);
};
G__3334.cljs$lang$maxFixedArity = 5;
G__3334.cljs$lang$applyTo = (function (arglist__3335){
var f = cljs.core.first(arglist__3335);
var a = cljs.core.first(cljs.core.next(arglist__3335));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3335)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3335))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3335)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3335)))));
return G__3334__delegate.call(this, f, a, b, c, d, args);
});
return G__3334;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3328.call(this,f,a);
case  3 :
return apply__3329.call(this,f,a,b);
case  4 :
return apply__3330.call(this,f,a,b,c);
case  5 :
return apply__3331.call(this,f,a,b,c,d);
default:
return apply__3332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3332.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3336){
var obj = cljs.core.first(arglist__3336);
var f = cljs.core.first(cljs.core.next(arglist__3336));
var args = cljs.core.rest(cljs.core.next(arglist__3336));
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
var not_EQ___3337 = (function (x){
return false;
});
var not_EQ___3338 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3339 = (function() { 
var G__3341__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3341 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3341__delegate.call(this, x, y, more);
};
G__3341.cljs$lang$maxFixedArity = 2;
G__3341.cljs$lang$applyTo = (function (arglist__3342){
var x = cljs.core.first(arglist__3342);
var y = cljs.core.first(cljs.core.next(arglist__3342));
var more = cljs.core.rest(cljs.core.next(arglist__3342));
return G__3341__delegate.call(this, x, y, more);
});
return G__3341;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3337.call(this,x);
case  2 :
return not_EQ___3338.call(this,x,y);
default:
return not_EQ___3339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3339.cljs$lang$applyTo;
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
var G__3343 = pred;
var G__3344 = cljs.core.next.call(null,coll);
pred = G__3343;
coll = G__3344;
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
{var or__3548__auto____3345 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3345))
{return or__3548__auto____3345;
} else
{{
var G__3346 = pred;
var G__3347 = cljs.core.next.call(null,coll);
pred = G__3346;
coll = G__3347;
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
var G__3348 = null;
var G__3348__3349 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3348__3350 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3348__3351 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3348__3352 = (function() { 
var G__3354__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3354 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3354__delegate.call(this, x, y, zs);
};
G__3354.cljs$lang$maxFixedArity = 2;
G__3354.cljs$lang$applyTo = (function (arglist__3355){
var x = cljs.core.first(arglist__3355);
var y = cljs.core.first(cljs.core.next(arglist__3355));
var zs = cljs.core.rest(cljs.core.next(arglist__3355));
return G__3354__delegate.call(this, x, y, zs);
});
return G__3354;
})()
;
G__3348 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3348__3349.call(this);
case  1 :
return G__3348__3350.call(this,x);
case  2 :
return G__3348__3351.call(this,x,y);
default:
return G__3348__3352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3348.cljs$lang$maxFixedArity = 2;
G__3348.cljs$lang$applyTo = G__3348__3352.cljs$lang$applyTo;
return G__3348;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3356__delegate = function (args){
return x;
};
var G__3356 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3356__delegate.call(this, args);
};
G__3356.cljs$lang$maxFixedArity = 0;
G__3356.cljs$lang$applyTo = (function (arglist__3357){
var args = cljs.core.seq( arglist__3357 );;
return G__3356__delegate.call(this, args);
});
return G__3356;
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
var comp__3361 = (function (){
return cljs.core.identity;
});
var comp__3362 = (function (f){
return f;
});
var comp__3363 = (function (f,g){
return (function() {
var G__3367 = null;
var G__3367__3368 = (function (){
return f.call(null,g.call(null));
});
var G__3367__3369 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3367__3370 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3367__3371 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3367__3372 = (function() { 
var G__3374__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3374 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3374__delegate.call(this, x, y, z, args);
};
G__3374.cljs$lang$maxFixedArity = 3;
G__3374.cljs$lang$applyTo = (function (arglist__3375){
var x = cljs.core.first(arglist__3375);
var y = cljs.core.first(cljs.core.next(arglist__3375));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3375)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3375)));
return G__3374__delegate.call(this, x, y, z, args);
});
return G__3374;
})()
;
G__3367 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3367__3368.call(this);
case  1 :
return G__3367__3369.call(this,x);
case  2 :
return G__3367__3370.call(this,x,y);
case  3 :
return G__3367__3371.call(this,x,y,z);
default:
return G__3367__3372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3367.cljs$lang$maxFixedArity = 3;
G__3367.cljs$lang$applyTo = G__3367__3372.cljs$lang$applyTo;
return G__3367;
})()
});
var comp__3364 = (function (f,g,h){
return (function() {
var G__3376 = null;
var G__3376__3377 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3376__3378 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3376__3379 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3376__3380 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3376__3381 = (function() { 
var G__3383__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3383 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3383__delegate.call(this, x, y, z, args);
};
G__3383.cljs$lang$maxFixedArity = 3;
G__3383.cljs$lang$applyTo = (function (arglist__3384){
var x = cljs.core.first(arglist__3384);
var y = cljs.core.first(cljs.core.next(arglist__3384));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3384)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3384)));
return G__3383__delegate.call(this, x, y, z, args);
});
return G__3383;
})()
;
G__3376 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3376__3377.call(this);
case  1 :
return G__3376__3378.call(this,x);
case  2 :
return G__3376__3379.call(this,x,y);
case  3 :
return G__3376__3380.call(this,x,y,z);
default:
return G__3376__3381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3376.cljs$lang$maxFixedArity = 3;
G__3376.cljs$lang$applyTo = G__3376__3381.cljs$lang$applyTo;
return G__3376;
})()
});
var comp__3365 = (function() { 
var G__3385__delegate = function (f1,f2,f3,fs){
var fs__3358 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3386__delegate = function (args){
var ret__3359 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3358),args);
var fs__3360 = cljs.core.next.call(null,fs__3358);

while(true){
if(cljs.core.truth_(fs__3360))
{{
var G__3387 = cljs.core.first.call(null,fs__3360).call(null,ret__3359);
var G__3388 = cljs.core.next.call(null,fs__3360);
ret__3359 = G__3387;
fs__3360 = G__3388;
continue;
}
} else
{return ret__3359;
}
break;
}
};
var G__3386 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3386__delegate.call(this, args);
};
G__3386.cljs$lang$maxFixedArity = 0;
G__3386.cljs$lang$applyTo = (function (arglist__3389){
var args = cljs.core.seq( arglist__3389 );;
return G__3386__delegate.call(this, args);
});
return G__3386;
})()
;
};
var G__3385 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3385__delegate.call(this, f1, f2, f3, fs);
};
G__3385.cljs$lang$maxFixedArity = 3;
G__3385.cljs$lang$applyTo = (function (arglist__3390){
var f1 = cljs.core.first(arglist__3390);
var f2 = cljs.core.first(cljs.core.next(arglist__3390));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3390)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3390)));
return G__3385__delegate.call(this, f1, f2, f3, fs);
});
return G__3385;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3361.call(this);
case  1 :
return comp__3362.call(this,f1);
case  2 :
return comp__3363.call(this,f1,f2);
case  3 :
return comp__3364.call(this,f1,f2,f3);
default:
return comp__3365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3365.cljs$lang$applyTo;
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
var partial__3391 = (function (f,arg1){
return (function() { 
var G__3396__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3396 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3396__delegate.call(this, args);
};
G__3396.cljs$lang$maxFixedArity = 0;
G__3396.cljs$lang$applyTo = (function (arglist__3397){
var args = cljs.core.seq( arglist__3397 );;
return G__3396__delegate.call(this, args);
});
return G__3396;
})()
;
});
var partial__3392 = (function (f,arg1,arg2){
return (function() { 
var G__3398__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3398 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3398__delegate.call(this, args);
};
G__3398.cljs$lang$maxFixedArity = 0;
G__3398.cljs$lang$applyTo = (function (arglist__3399){
var args = cljs.core.seq( arglist__3399 );;
return G__3398__delegate.call(this, args);
});
return G__3398;
})()
;
});
var partial__3393 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3400__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3400 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3400__delegate.call(this, args);
};
G__3400.cljs$lang$maxFixedArity = 0;
G__3400.cljs$lang$applyTo = (function (arglist__3401){
var args = cljs.core.seq( arglist__3401 );;
return G__3400__delegate.call(this, args);
});
return G__3400;
})()
;
});
var partial__3394 = (function() { 
var G__3402__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3403__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3403 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3403__delegate.call(this, args);
};
G__3403.cljs$lang$maxFixedArity = 0;
G__3403.cljs$lang$applyTo = (function (arglist__3404){
var args = cljs.core.seq( arglist__3404 );;
return G__3403__delegate.call(this, args);
});
return G__3403;
})()
;
};
var G__3402 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3402__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3402.cljs$lang$maxFixedArity = 4;
G__3402.cljs$lang$applyTo = (function (arglist__3405){
var f = cljs.core.first(arglist__3405);
var arg1 = cljs.core.first(cljs.core.next(arglist__3405));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3405)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3405))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3405))));
return G__3402__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3402;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3391.call(this,f,arg1);
case  3 :
return partial__3392.call(this,f,arg1,arg2);
case  4 :
return partial__3393.call(this,f,arg1,arg2,arg3);
default:
return partial__3394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3394.cljs$lang$applyTo;
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
var fnil__3406 = (function (f,x){
return (function() {
var G__3410 = null;
var G__3410__3411 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3410__3412 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3410__3413 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3410__3414 = (function() { 
var G__3416__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3416 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3416__delegate.call(this, a, b, c, ds);
};
G__3416.cljs$lang$maxFixedArity = 3;
G__3416.cljs$lang$applyTo = (function (arglist__3417){
var a = cljs.core.first(arglist__3417);
var b = cljs.core.first(cljs.core.next(arglist__3417));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3417)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3417)));
return G__3416__delegate.call(this, a, b, c, ds);
});
return G__3416;
})()
;
G__3410 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3410__3411.call(this,a);
case  2 :
return G__3410__3412.call(this,a,b);
case  3 :
return G__3410__3413.call(this,a,b,c);
default:
return G__3410__3414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3410.cljs$lang$maxFixedArity = 3;
G__3410.cljs$lang$applyTo = G__3410__3414.cljs$lang$applyTo;
return G__3410;
})()
});
var fnil__3407 = (function (f,x,y){
return (function() {
var G__3418 = null;
var G__3418__3419 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3418__3420 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3418__3421 = (function() { 
var G__3423__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3423 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3423__delegate.call(this, a, b, c, ds);
};
G__3423.cljs$lang$maxFixedArity = 3;
G__3423.cljs$lang$applyTo = (function (arglist__3424){
var a = cljs.core.first(arglist__3424);
var b = cljs.core.first(cljs.core.next(arglist__3424));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3424)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3424)));
return G__3423__delegate.call(this, a, b, c, ds);
});
return G__3423;
})()
;
G__3418 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3418__3419.call(this,a,b);
case  3 :
return G__3418__3420.call(this,a,b,c);
default:
return G__3418__3421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3418.cljs$lang$maxFixedArity = 3;
G__3418.cljs$lang$applyTo = G__3418__3421.cljs$lang$applyTo;
return G__3418;
})()
});
var fnil__3408 = (function (f,x,y,z){
return (function() {
var G__3425 = null;
var G__3425__3426 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3425__3427 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3425__3428 = (function() { 
var G__3430__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3430 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3430__delegate.call(this, a, b, c, ds);
};
G__3430.cljs$lang$maxFixedArity = 3;
G__3430.cljs$lang$applyTo = (function (arglist__3431){
var a = cljs.core.first(arglist__3431);
var b = cljs.core.first(cljs.core.next(arglist__3431));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3431)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3431)));
return G__3430__delegate.call(this, a, b, c, ds);
});
return G__3430;
})()
;
G__3425 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3425__3426.call(this,a,b);
case  3 :
return G__3425__3427.call(this,a,b,c);
default:
return G__3425__3428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3425.cljs$lang$maxFixedArity = 3;
G__3425.cljs$lang$applyTo = G__3425__3428.cljs$lang$applyTo;
return G__3425;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3406.call(this,f,x);
case  3 :
return fnil__3407.call(this,f,x,y);
case  4 :
return fnil__3408.call(this,f,x,y,z);
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
var mapi__3434 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3432 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3432))
{var s__3433 = temp__3698__auto____3432;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3433)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3433)));
} else
{return null;
}
})));
});

return mapi__3434.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3435))
{var s__3436 = temp__3698__auto____3435;

var x__3437 = f.call(null,cljs.core.first.call(null,s__3436));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3437)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3436));
} else
{return cljs.core.cons.call(null,x__3437,keep.call(null,f,cljs.core.rest.call(null,s__3436)));
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
var keepi__3447 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3444 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3444))
{var s__3445 = temp__3698__auto____3444;

var x__3446 = f.call(null,idx,cljs.core.first.call(null,s__3445));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3446)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3445));
} else
{return cljs.core.cons.call(null,x__3446,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3445)));
}
} else
{return null;
}
})));
});

return keepi__3447.call(null,0,coll);
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
var every_pred__3492 = (function (p){
return (function() {
var ep1 = null;
var ep1__3497 = (function (){
return true;
});
var ep1__3498 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3499 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3454 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3454))
{return p.call(null,y);
} else
{return and__3546__auto____3454;
}
})());
});
var ep1__3500 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3455 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3455))
{var and__3546__auto____3456 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3456))
{return p.call(null,z);
} else
{return and__3546__auto____3456;
}
} else
{return and__3546__auto____3455;
}
})());
});
var ep1__3501 = (function() { 
var G__3503__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3457 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3457))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3457;
}
})());
};
var G__3503 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3503__delegate.call(this, x, y, z, args);
};
G__3503.cljs$lang$maxFixedArity = 3;
G__3503.cljs$lang$applyTo = (function (arglist__3504){
var x = cljs.core.first(arglist__3504);
var y = cljs.core.first(cljs.core.next(arglist__3504));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3504)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3504)));
return G__3503__delegate.call(this, x, y, z, args);
});
return G__3503;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3497.call(this);
case  1 :
return ep1__3498.call(this,x);
case  2 :
return ep1__3499.call(this,x,y);
case  3 :
return ep1__3500.call(this,x,y,z);
default:
return ep1__3501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3501.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3493 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3505 = (function (){
return true;
});
var ep2__3506 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3458 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3458))
{return p2.call(null,x);
} else
{return and__3546__auto____3458;
}
})());
});
var ep2__3507 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3459 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3459))
{var and__3546__auto____3460 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3460))
{var and__3546__auto____3461 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3461))
{return p2.call(null,y);
} else
{return and__3546__auto____3461;
}
} else
{return and__3546__auto____3460;
}
} else
{return and__3546__auto____3459;
}
})());
});
var ep2__3508 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3462 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3462))
{var and__3546__auto____3463 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3463))
{var and__3546__auto____3464 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3464))
{var and__3546__auto____3465 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3465))
{var and__3546__auto____3466 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3466))
{return p2.call(null,z);
} else
{return and__3546__auto____3466;
}
} else
{return and__3546__auto____3465;
}
} else
{return and__3546__auto____3464;
}
} else
{return and__3546__auto____3463;
}
} else
{return and__3546__auto____3462;
}
})());
});
var ep2__3509 = (function() { 
var G__3511__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3467 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3467))
{return cljs.core.every_QMARK_.call(null,(function (p1__3438_SHARP_){
var and__3546__auto____3468 = p1.call(null,p1__3438_SHARP_);

if(cljs.core.truth_(and__3546__auto____3468))
{return p2.call(null,p1__3438_SHARP_);
} else
{return and__3546__auto____3468;
}
}),args);
} else
{return and__3546__auto____3467;
}
})());
};
var G__3511 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3511__delegate.call(this, x, y, z, args);
};
G__3511.cljs$lang$maxFixedArity = 3;
G__3511.cljs$lang$applyTo = (function (arglist__3512){
var x = cljs.core.first(arglist__3512);
var y = cljs.core.first(cljs.core.next(arglist__3512));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3512)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3512)));
return G__3511__delegate.call(this, x, y, z, args);
});
return G__3511;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3505.call(this);
case  1 :
return ep2__3506.call(this,x);
case  2 :
return ep2__3507.call(this,x,y);
case  3 :
return ep2__3508.call(this,x,y,z);
default:
return ep2__3509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3509.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3494 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3513 = (function (){
return true;
});
var ep3__3514 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3469 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3469))
{var and__3546__auto____3470 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3470))
{return p3.call(null,x);
} else
{return and__3546__auto____3470;
}
} else
{return and__3546__auto____3469;
}
})());
});
var ep3__3515 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3471 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3471))
{var and__3546__auto____3472 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3472))
{var and__3546__auto____3473 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3473))
{var and__3546__auto____3474 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3474))
{var and__3546__auto____3475 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3475))
{return p3.call(null,y);
} else
{return and__3546__auto____3475;
}
} else
{return and__3546__auto____3474;
}
} else
{return and__3546__auto____3473;
}
} else
{return and__3546__auto____3472;
}
} else
{return and__3546__auto____3471;
}
})());
});
var ep3__3516 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3476 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3476))
{var and__3546__auto____3477 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3477))
{var and__3546__auto____3478 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3478))
{var and__3546__auto____3479 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3479))
{var and__3546__auto____3480 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3480))
{var and__3546__auto____3481 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3481))
{var and__3546__auto____3482 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3482))
{var and__3546__auto____3483 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3483))
{return p3.call(null,z);
} else
{return and__3546__auto____3483;
}
} else
{return and__3546__auto____3482;
}
} else
{return and__3546__auto____3481;
}
} else
{return and__3546__auto____3480;
}
} else
{return and__3546__auto____3479;
}
} else
{return and__3546__auto____3478;
}
} else
{return and__3546__auto____3477;
}
} else
{return and__3546__auto____3476;
}
})());
});
var ep3__3517 = (function() { 
var G__3519__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3484 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3484))
{return cljs.core.every_QMARK_.call(null,(function (p1__3439_SHARP_){
var and__3546__auto____3485 = p1.call(null,p1__3439_SHARP_);

if(cljs.core.truth_(and__3546__auto____3485))
{var and__3546__auto____3486 = p2.call(null,p1__3439_SHARP_);

if(cljs.core.truth_(and__3546__auto____3486))
{return p3.call(null,p1__3439_SHARP_);
} else
{return and__3546__auto____3486;
}
} else
{return and__3546__auto____3485;
}
}),args);
} else
{return and__3546__auto____3484;
}
})());
};
var G__3519 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3519__delegate.call(this, x, y, z, args);
};
G__3519.cljs$lang$maxFixedArity = 3;
G__3519.cljs$lang$applyTo = (function (arglist__3520){
var x = cljs.core.first(arglist__3520);
var y = cljs.core.first(cljs.core.next(arglist__3520));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3520)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3520)));
return G__3519__delegate.call(this, x, y, z, args);
});
return G__3519;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3513.call(this);
case  1 :
return ep3__3514.call(this,x);
case  2 :
return ep3__3515.call(this,x,y);
case  3 :
return ep3__3516.call(this,x,y,z);
default:
return ep3__3517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3517.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3495 = (function() { 
var G__3521__delegate = function (p1,p2,p3,ps){
var ps__3487 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3522 = (function (){
return true;
});
var epn__3523 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3440_SHARP_){
return p1__3440_SHARP_.call(null,x);
}),ps__3487);
});
var epn__3524 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3441_SHARP_){
var and__3546__auto____3488 = p1__3441_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3488))
{return p1__3441_SHARP_.call(null,y);
} else
{return and__3546__auto____3488;
}
}),ps__3487);
});
var epn__3525 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3442_SHARP_){
var and__3546__auto____3489 = p1__3442_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3489))
{var and__3546__auto____3490 = p1__3442_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3490))
{return p1__3442_SHARP_.call(null,z);
} else
{return and__3546__auto____3490;
}
} else
{return and__3546__auto____3489;
}
}),ps__3487);
});
var epn__3526 = (function() { 
var G__3528__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3491 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3491))
{return cljs.core.every_QMARK_.call(null,(function (p1__3443_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3443_SHARP_,args);
}),ps__3487);
} else
{return and__3546__auto____3491;
}
})());
};
var G__3528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3528__delegate.call(this, x, y, z, args);
};
G__3528.cljs$lang$maxFixedArity = 3;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var x = cljs.core.first(arglist__3529);
var y = cljs.core.first(cljs.core.next(arglist__3529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3529)));
return G__3528__delegate.call(this, x, y, z, args);
});
return G__3528;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3522.call(this);
case  1 :
return epn__3523.call(this,x);
case  2 :
return epn__3524.call(this,x,y);
case  3 :
return epn__3525.call(this,x,y,z);
default:
return epn__3526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3526.cljs$lang$applyTo;
return epn;
})()
};
var G__3521 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3521__delegate.call(this, p1, p2, p3, ps);
};
G__3521.cljs$lang$maxFixedArity = 3;
G__3521.cljs$lang$applyTo = (function (arglist__3530){
var p1 = cljs.core.first(arglist__3530);
var p2 = cljs.core.first(cljs.core.next(arglist__3530));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3530)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3530)));
return G__3521__delegate.call(this, p1, p2, p3, ps);
});
return G__3521;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3492.call(this,p1);
case  2 :
return every_pred__3493.call(this,p1,p2);
case  3 :
return every_pred__3494.call(this,p1,p2,p3);
default:
return every_pred__3495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3495.cljs$lang$applyTo;
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
var some_fn__3570 = (function (p){
return (function() {
var sp1 = null;
var sp1__3575 = (function (){
return null;
});
var sp1__3576 = (function (x){
return p.call(null,x);
});
var sp1__3577 = (function (x,y){
var or__3548__auto____3532 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3532))
{return or__3548__auto____3532;
} else
{return p.call(null,y);
}
});
var sp1__3578 = (function (x,y,z){
var or__3548__auto____3533 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3533))
{return or__3548__auto____3533;
} else
{var or__3548__auto____3534 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3534))
{return or__3548__auto____3534;
} else
{return p.call(null,z);
}
}
});
var sp1__3579 = (function() { 
var G__3581__delegate = function (x,y,z,args){
var or__3548__auto____3535 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3535))
{return or__3548__auto____3535;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3581 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3581__delegate.call(this, x, y, z, args);
};
G__3581.cljs$lang$maxFixedArity = 3;
G__3581.cljs$lang$applyTo = (function (arglist__3582){
var x = cljs.core.first(arglist__3582);
var y = cljs.core.first(cljs.core.next(arglist__3582));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3582)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3582)));
return G__3581__delegate.call(this, x, y, z, args);
});
return G__3581;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3575.call(this);
case  1 :
return sp1__3576.call(this,x);
case  2 :
return sp1__3577.call(this,x,y);
case  3 :
return sp1__3578.call(this,x,y,z);
default:
return sp1__3579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3579.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3571 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3583 = (function (){
return null;
});
var sp2__3584 = (function (x){
var or__3548__auto____3536 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3536))
{return or__3548__auto____3536;
} else
{return p2.call(null,x);
}
});
var sp2__3585 = (function (x,y){
var or__3548__auto____3537 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3537))
{return or__3548__auto____3537;
} else
{var or__3548__auto____3538 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3538))
{return or__3548__auto____3538;
} else
{var or__3548__auto____3539 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3539))
{return or__3548__auto____3539;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3586 = (function (x,y,z){
var or__3548__auto____3540 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3540))
{return or__3548__auto____3540;
} else
{var or__3548__auto____3541 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3541))
{return or__3548__auto____3541;
} else
{var or__3548__auto____3542 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3542))
{return or__3548__auto____3542;
} else
{var or__3548__auto____3543 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3543))
{return or__3548__auto____3543;
} else
{var or__3548__auto____3544 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3544))
{return or__3548__auto____3544;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3587 = (function() { 
var G__3589__delegate = function (x,y,z,args){
var or__3548__auto____3545 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3545))
{return or__3548__auto____3545;
} else
{return cljs.core.some.call(null,(function (p1__3448_SHARP_){
var or__3548__auto____3546 = p1.call(null,p1__3448_SHARP_);

if(cljs.core.truth_(or__3548__auto____3546))
{return or__3548__auto____3546;
} else
{return p2.call(null,p1__3448_SHARP_);
}
}),args);
}
};
var G__3589 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3589__delegate.call(this, x, y, z, args);
};
G__3589.cljs$lang$maxFixedArity = 3;
G__3589.cljs$lang$applyTo = (function (arglist__3590){
var x = cljs.core.first(arglist__3590);
var y = cljs.core.first(cljs.core.next(arglist__3590));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3590)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3590)));
return G__3589__delegate.call(this, x, y, z, args);
});
return G__3589;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3583.call(this);
case  1 :
return sp2__3584.call(this,x);
case  2 :
return sp2__3585.call(this,x,y);
case  3 :
return sp2__3586.call(this,x,y,z);
default:
return sp2__3587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3587.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3572 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3591 = (function (){
return null;
});
var sp3__3592 = (function (x){
var or__3548__auto____3547 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3547))
{return or__3548__auto____3547;
} else
{var or__3548__auto____3548 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3548))
{return or__3548__auto____3548;
} else
{return p3.call(null,x);
}
}
});
var sp3__3593 = (function (x,y){
var or__3548__auto____3549 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3549))
{return or__3548__auto____3549;
} else
{var or__3548__auto____3550 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3550))
{return or__3548__auto____3550;
} else
{var or__3548__auto____3551 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3551))
{return or__3548__auto____3551;
} else
{var or__3548__auto____3552 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3552))
{return or__3548__auto____3552;
} else
{var or__3548__auto____3553 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3553))
{return or__3548__auto____3553;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3594 = (function (x,y,z){
var or__3548__auto____3554 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3554))
{return or__3548__auto____3554;
} else
{var or__3548__auto____3555 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3555))
{return or__3548__auto____3555;
} else
{var or__3548__auto____3556 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3556))
{return or__3548__auto____3556;
} else
{var or__3548__auto____3557 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3557))
{return or__3548__auto____3557;
} else
{var or__3548__auto____3558 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3558))
{return or__3548__auto____3558;
} else
{var or__3548__auto____3559 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3559))
{return or__3548__auto____3559;
} else
{var or__3548__auto____3560 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3560))
{return or__3548__auto____3560;
} else
{var or__3548__auto____3561 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3561))
{return or__3548__auto____3561;
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
var sp3__3595 = (function() { 
var G__3597__delegate = function (x,y,z,args){
var or__3548__auto____3562 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3562))
{return or__3548__auto____3562;
} else
{return cljs.core.some.call(null,(function (p1__3449_SHARP_){
var or__3548__auto____3563 = p1.call(null,p1__3449_SHARP_);

if(cljs.core.truth_(or__3548__auto____3563))
{return or__3548__auto____3563;
} else
{var or__3548__auto____3564 = p2.call(null,p1__3449_SHARP_);

if(cljs.core.truth_(or__3548__auto____3564))
{return or__3548__auto____3564;
} else
{return p3.call(null,p1__3449_SHARP_);
}
}
}),args);
}
};
var G__3597 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3597__delegate.call(this, x, y, z, args);
};
G__3597.cljs$lang$maxFixedArity = 3;
G__3597.cljs$lang$applyTo = (function (arglist__3598){
var x = cljs.core.first(arglist__3598);
var y = cljs.core.first(cljs.core.next(arglist__3598));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3598)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3598)));
return G__3597__delegate.call(this, x, y, z, args);
});
return G__3597;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3591.call(this);
case  1 :
return sp3__3592.call(this,x);
case  2 :
return sp3__3593.call(this,x,y);
case  3 :
return sp3__3594.call(this,x,y,z);
default:
return sp3__3595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3595.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3573 = (function() { 
var G__3599__delegate = function (p1,p2,p3,ps){
var ps__3565 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3600 = (function (){
return null;
});
var spn__3601 = (function (x){
return cljs.core.some.call(null,(function (p1__3450_SHARP_){
return p1__3450_SHARP_.call(null,x);
}),ps__3565);
});
var spn__3602 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3451_SHARP_){
var or__3548__auto____3566 = p1__3451_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3566))
{return or__3548__auto____3566;
} else
{return p1__3451_SHARP_.call(null,y);
}
}),ps__3565);
});
var spn__3603 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3452_SHARP_){
var or__3548__auto____3567 = p1__3452_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3567))
{return or__3548__auto____3567;
} else
{var or__3548__auto____3568 = p1__3452_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3568))
{return or__3548__auto____3568;
} else
{return p1__3452_SHARP_.call(null,z);
}
}
}),ps__3565);
});
var spn__3604 = (function() { 
var G__3606__delegate = function (x,y,z,args){
var or__3548__auto____3569 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3569))
{return or__3548__auto____3569;
} else
{return cljs.core.some.call(null,(function (p1__3453_SHARP_){
return cljs.core.some.call(null,p1__3453_SHARP_,args);
}),ps__3565);
}
};
var G__3606 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3606__delegate.call(this, x, y, z, args);
};
G__3606.cljs$lang$maxFixedArity = 3;
G__3606.cljs$lang$applyTo = (function (arglist__3607){
var x = cljs.core.first(arglist__3607);
var y = cljs.core.first(cljs.core.next(arglist__3607));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3607)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3607)));
return G__3606__delegate.call(this, x, y, z, args);
});
return G__3606;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3600.call(this);
case  1 :
return spn__3601.call(this,x);
case  2 :
return spn__3602.call(this,x,y);
case  3 :
return spn__3603.call(this,x,y,z);
default:
return spn__3604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3604.cljs$lang$applyTo;
return spn;
})()
};
var G__3599 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3599__delegate.call(this, p1, p2, p3, ps);
};
G__3599.cljs$lang$maxFixedArity = 3;
G__3599.cljs$lang$applyTo = (function (arglist__3608){
var p1 = cljs.core.first(arglist__3608);
var p2 = cljs.core.first(cljs.core.next(arglist__3608));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3608)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3608)));
return G__3599__delegate.call(this, p1, p2, p3, ps);
});
return G__3599;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3570.call(this,p1);
case  2 :
return some_fn__3571.call(this,p1,p2);
case  3 :
return some_fn__3572.call(this,p1,p2,p3);
default:
return some_fn__3573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3573.cljs$lang$applyTo;
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
var map__3621 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3609 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3609))
{var s__3610 = temp__3698__auto____3609;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3610)),map.call(null,f,cljs.core.rest.call(null,s__3610)));
} else
{return null;
}
})));
});
var map__3622 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3611 = cljs.core.seq.call(null,c1);
var s2__3612 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3613 = s1__3611;

if(cljs.core.truth_(and__3546__auto____3613))
{return s2__3612;
} else
{return and__3546__auto____3613;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3611),cljs.core.first.call(null,s2__3612)),map.call(null,f,cljs.core.rest.call(null,s1__3611),cljs.core.rest.call(null,s2__3612)));
} else
{return null;
}
})));
});
var map__3623 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3614 = cljs.core.seq.call(null,c1);
var s2__3615 = cljs.core.seq.call(null,c2);
var s3__3616 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3617 = s1__3614;

if(cljs.core.truth_(and__3546__auto____3617))
{var and__3546__auto____3618 = s2__3615;

if(cljs.core.truth_(and__3546__auto____3618))
{return s3__3616;
} else
{return and__3546__auto____3618;
}
} else
{return and__3546__auto____3617;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3614),cljs.core.first.call(null,s2__3615),cljs.core.first.call(null,s3__3616)),map.call(null,f,cljs.core.rest.call(null,s1__3614),cljs.core.rest.call(null,s2__3615),cljs.core.rest.call(null,s3__3616)));
} else
{return null;
}
})));
});
var map__3624 = (function() { 
var G__3626__delegate = function (f,c1,c2,c3,colls){
var step__3620 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3619 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3619)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3619),step.call(null,map.call(null,cljs.core.rest,ss__3619)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3531_SHARP_){
return cljs.core.apply.call(null,f,p1__3531_SHARP_);
}),step__3620.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3626 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3626__delegate.call(this, f, c1, c2, c3, colls);
};
G__3626.cljs$lang$maxFixedArity = 4;
G__3626.cljs$lang$applyTo = (function (arglist__3627){
var f = cljs.core.first(arglist__3627);
var c1 = cljs.core.first(cljs.core.next(arglist__3627));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3627)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3627))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3627))));
return G__3626__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3626;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3621.call(this,f,c1);
case  3 :
return map__3622.call(this,f,c1,c2);
case  4 :
return map__3623.call(this,f,c1,c2,c3);
default:
return map__3624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3624.cljs$lang$applyTo;
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
{var temp__3698__auto____3628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3628))
{var s__3629 = temp__3698__auto____3628;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3629),take.call(null,(n - 1),cljs.core.rest.call(null,s__3629)));
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
var step__3632 = (function (n,coll){
while(true){
var s__3630 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3631 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3631))
{return s__3630;
} else
{return and__3546__auto____3631;
}
})()))
{{
var G__3633 = (n - 1);
var G__3634 = cljs.core.rest.call(null,s__3630);
n = G__3633;
coll = G__3634;
continue;
}
} else
{return s__3630;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3632.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3635 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3636 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3635.call(this,n);
case  2 :
return drop_last__3636.call(this,n,s);
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
var s__3638 = cljs.core.seq.call(null,coll);
var lead__3639 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3639))
{{
var G__3640 = cljs.core.next.call(null,s__3638);
var G__3641 = cljs.core.next.call(null,lead__3639);
s__3638 = G__3640;
lead__3639 = G__3641;
continue;
}
} else
{return s__3638;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3644 = (function (pred,coll){
while(true){
var s__3642 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3643 = s__3642;

if(cljs.core.truth_(and__3546__auto____3643))
{return pred.call(null,cljs.core.first.call(null,s__3642));
} else
{return and__3546__auto____3643;
}
})()))
{{
var G__3645 = pred;
var G__3646 = cljs.core.rest.call(null,s__3642);
pred = G__3645;
coll = G__3646;
continue;
}
} else
{return s__3642;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3644.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3647 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3647))
{var s__3648 = temp__3698__auto____3647;

return cljs.core.concat.call(null,s__3648,cycle.call(null,s__3648));
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
var repeat__3649 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3650 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3649.call(this,n);
case  2 :
return repeat__3650.call(this,n,x);
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
var repeatedly__3652 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3653 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3652.call(this,n);
case  2 :
return repeatedly__3653.call(this,n,f);
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
var interleave__3659 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3655 = cljs.core.seq.call(null,c1);
var s2__3656 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3657 = s1__3655;

if(cljs.core.truth_(and__3546__auto____3657))
{return s2__3656;
} else
{return and__3546__auto____3657;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3655),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3656),interleave.call(null,cljs.core.rest.call(null,s1__3655),cljs.core.rest.call(null,s2__3656))));
} else
{return null;
}
})));
});
var interleave__3660 = (function() { 
var G__3662__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3658 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3658)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3658),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3658)));
} else
{return null;
}
})));
};
var G__3662 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3662__delegate.call(this, c1, c2, colls);
};
G__3662.cljs$lang$maxFixedArity = 2;
G__3662.cljs$lang$applyTo = (function (arglist__3663){
var c1 = cljs.core.first(arglist__3663);
var c2 = cljs.core.first(cljs.core.next(arglist__3663));
var colls = cljs.core.rest(cljs.core.next(arglist__3663));
return G__3662__delegate.call(this, c1, c2, colls);
});
return G__3662;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3659.call(this,c1,c2);
default:
return interleave__3660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3660.cljs$lang$applyTo;
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
var cat__3666 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3664 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3664))
{var coll__3665 = temp__3695__auto____3664;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3665),cat.call(null,cljs.core.rest.call(null,coll__3665),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3666.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3667 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3668 = (function() { 
var G__3670__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3670 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3670__delegate.call(this, f, coll, colls);
};
G__3670.cljs$lang$maxFixedArity = 2;
G__3670.cljs$lang$applyTo = (function (arglist__3671){
var f = cljs.core.first(arglist__3671);
var coll = cljs.core.first(cljs.core.next(arglist__3671));
var colls = cljs.core.rest(cljs.core.next(arglist__3671));
return G__3670__delegate.call(this, f, coll, colls);
});
return G__3670;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3667.call(this,f,coll);
default:
return mapcat__3668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3668.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3672))
{var s__3673 = temp__3698__auto____3672;

var f__3674 = cljs.core.first.call(null,s__3673);
var r__3675 = cljs.core.rest.call(null,s__3673);

if(cljs.core.truth_(pred.call(null,f__3674)))
{return cljs.core.cons.call(null,f__3674,filter.call(null,pred,r__3675));
} else
{return filter.call(null,pred,r__3675);
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
var walk__3677 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3677.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3676_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3676_SHARP_));
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
var partition__3684 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3685 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3678 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3678))
{var s__3679 = temp__3698__auto____3678;

var p__3680 = cljs.core.take.call(null,n,s__3679);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3680))))
{return cljs.core.cons.call(null,p__3680,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3679)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3686 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3681))
{var s__3682 = temp__3698__auto____3681;

var p__3683 = cljs.core.take.call(null,n,s__3682);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3683))))
{return cljs.core.cons.call(null,p__3683,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3682)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3683,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3684.call(this,n,step);
case  3 :
return partition__3685.call(this,n,step,pad);
case  4 :
return partition__3686.call(this,n,step,pad,coll);
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
var get_in__3692 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3693 = (function (m,ks,not_found){
var sentinel__3688 = cljs.core.lookup_sentinel;
var m__3689 = m;
var ks__3690 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3690))
{var m__3691 = cljs.core.get.call(null,m__3689,cljs.core.first.call(null,ks__3690),sentinel__3688);

if(cljs.core.truth_((sentinel__3688 === m__3691)))
{return not_found;
} else
{{
var G__3695 = sentinel__3688;
var G__3696 = m__3691;
var G__3697 = cljs.core.next.call(null,ks__3690);
sentinel__3688 = G__3695;
m__3689 = G__3696;
ks__3690 = G__3697;
continue;
}
}
} else
{return m__3689;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3692.call(this,m,ks);
case  3 :
return get_in__3693.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3698,v){
var vec__3699__3700 = p__3698;
var k__3701 = cljs.core.nth.call(null,vec__3699__3700,0,null);
var ks__3702 = cljs.core.nthnext.call(null,vec__3699__3700,1);

if(cljs.core.truth_(ks__3702))
{return cljs.core.assoc.call(null,m,k__3701,assoc_in.call(null,cljs.core.get.call(null,m,k__3701),ks__3702,v));
} else
{return cljs.core.assoc.call(null,m,k__3701,v);
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
var update_in__delegate = function (m,p__3703,f,args){
var vec__3704__3705 = p__3703;
var k__3706 = cljs.core.nth.call(null,vec__3704__3705,0,null);
var ks__3707 = cljs.core.nthnext.call(null,vec__3704__3705,1);

if(cljs.core.truth_(ks__3707))
{return cljs.core.assoc.call(null,m,k__3706,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3706),ks__3707,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3706,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3706),args));
}
};
var update_in = function (m,p__3703,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3703, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3708){
var m = cljs.core.first(arglist__3708);
var p__3703 = cljs.core.first(cljs.core.next(arglist__3708));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3708)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3708)));
return update_in__delegate.call(this, m, p__3703, f, args);
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
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3709 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3734 = null;
var G__3734__3735 = (function (coll,k){
var this__3710 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3734__3736 = (function (coll,k,not_found){
var this__3711 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3734 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3734__3735.call(this,coll,k);
case  3 :
return G__3734__3736.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3734;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3712 = this;
var new_array__3713 = cljs.core.aclone.call(null,this__3712.array);

(new_array__3713[k] = v);
return (new cljs.core.Vector(this__3712.meta,new_array__3713));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3714 = this;
var new_array__3715 = cljs.core.aclone.call(null,this__3714.array);

new_array__3715.push(o);
return (new cljs.core.Vector(this__3714.meta,new_array__3715));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3738 = null;
var G__3738__3739 = (function (v,f){
var this__3716 = this;
return cljs.core.ci_reduce.call(null,this__3716.array,f);
});
var G__3738__3740 = (function (v,f,start){
var this__3717 = this;
return cljs.core.ci_reduce.call(null,this__3717.array,f,start);
});
G__3738 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3738__3739.call(this,v,f);
case  3 :
return G__3738__3740.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3738;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3718 = this;
if(cljs.core.truth_((this__3718.array.length > 0)))
{var vector_seq__3719 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3718.array.length)))
{return cljs.core.cons.call(null,(this__3718.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3719.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3720 = this;
return this__3720.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3721 = this;
var count__3722 = this__3721.array.length;

if(cljs.core.truth_((count__3722 > 0)))
{return (this__3721.array[(count__3722 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3723 = this;
if(cljs.core.truth_((this__3723.array.length > 0)))
{var new_array__3724 = cljs.core.aclone.call(null,this__3723.array);

new_array__3724.pop();
return (new cljs.core.Vector(this__3723.meta,new_array__3724));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3725 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3726 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3727 = this;
return (new cljs.core.Vector(meta,this__3727.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3728 = this;
return this__3728.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3742 = null;
var G__3742__3743 = (function (coll,n){
var this__3729 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3730 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3730))
{return (n < this__3729.array.length);
} else
{return and__3546__auto____3730;
}
})()))
{return (this__3729.array[n]);
} else
{return null;
}
});
var G__3742__3744 = (function (coll,n,not_found){
var this__3731 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3732 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3732))
{return (n < this__3731.array.length);
} else
{return and__3546__auto____3732;
}
})()))
{return (this__3731.array[n]);
} else
{return not_found;
}
});
G__3742 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3742__3743.call(this,coll,n);
case  3 :
return G__3742__3744.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3742;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3733 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3733.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3746 = null;
var G__3746__3747 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3746__3748 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3746 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3746__3747.call(this,_,k);
case  3 :
return G__3746__3748.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3746;
})()
;
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
vector.cljs$lang$applyTo = (function (arglist__3750){
var args = cljs.core.seq( arglist__3750 );;
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
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3751 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3771 = null;
var G__3771__3772 = (function (coll,k){
var this__3752 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3771__3773 = (function (coll,k,not_found){
var this__3753 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3771 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3771__3772.call(this,coll,k);
case  3 :
return G__3771__3773.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3771;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3754 = this;
var v_pos__3755 = (this__3754.start + key);

return (new cljs.core.Subvec(this__3754.meta,cljs.core._assoc.call(null,this__3754.v,v_pos__3755,val),this__3754.start,((this__3754.end > (v_pos__3755 + 1)) ? this__3754.end : (v_pos__3755 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3756 = this;
return (new cljs.core.Subvec(this__3756.meta,cljs.core._assoc_n.call(null,this__3756.v,this__3756.end,o),this__3756.start,(this__3756.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3775 = null;
var G__3775__3776 = (function (coll,f){
var this__3757 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3775__3777 = (function (coll,f,start){
var this__3758 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3775 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3775__3776.call(this,coll,f);
case  3 :
return G__3775__3777.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3775;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3759 = this;
var subvec_seq__3760 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3759.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3759.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3760.call(null,this__3759.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3761 = this;
return (this__3761.end - this__3761.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3762 = this;
return cljs.core._nth.call(null,this__3762.v,(this__3762.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3763 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3763.start,this__3763.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3763.meta,this__3763.v,this__3763.start,(this__3763.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3764 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3765 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3766 = this;
return (new cljs.core.Subvec(meta,this__3766.v,this__3766.start,this__3766.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3767 = this;
return this__3767.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3779 = null;
var G__3779__3780 = (function (coll,n){
var this__3768 = this;
return cljs.core._nth.call(null,this__3768.v,(this__3768.start + n));
});
var G__3779__3781 = (function (coll,n,not_found){
var this__3769 = this;
return cljs.core._nth.call(null,this__3769.v,(this__3769.start + n),not_found);
});
G__3779 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3779__3780.call(this,coll,n);
case  3 :
return G__3779__3781.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3779;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3770 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3770.meta);
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
var subvec__3783 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3784 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3783.call(this,v,start);
case  3 :
return subvec__3784.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3786 = null;
var G__3786__3787 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3786__3788 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3786 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3786__3787.call(this,_,k);
case  3 :
return G__3786__3788.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3786;
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
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3790 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3791 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3793 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3793.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3794 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3795 = this;
return cljs.core._first.call(null,this__3795.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3796 = this;
var temp__3695__auto____3797 = cljs.core.next.call(null,this__3796.front);

if(cljs.core.truth_(temp__3695__auto____3797))
{var f1__3798 = temp__3695__auto____3797;

return (new cljs.core.PersistentQueueSeq(this__3796.meta,f1__3798,this__3796.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3796.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__3796.meta,this__3796.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3799 = this;
return this__3799.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3800 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__3800.front,this__3800.rear));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3801 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3802 = this;
if(cljs.core.truth_(this__3802.front))
{return (new cljs.core.PersistentQueue(this__3802.meta,(this__3802.count + 1),this__3802.front,cljs.core.conj.call(null,(function (){var or__3548__auto____3803 = this__3802.rear;

if(cljs.core.truth_(or__3548__auto____3803))
{return or__3548__auto____3803;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__3802.meta,(this__3802.count + 1),cljs.core.conj.call(null,this__3802.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3804 = this;
var rear__3805 = cljs.core.seq.call(null,this__3804.rear);

if(cljs.core.truth_((function (){var or__3548__auto____3806 = this__3804.front;

if(cljs.core.truth_(or__3548__auto____3806))
{return or__3548__auto____3806;
} else
{return rear__3805;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__3804.front,cljs.core.seq.call(null,rear__3805)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3807 = this;
return this__3807.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3808 = this;
return cljs.core._first.call(null,this__3808.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3809 = this;
if(cljs.core.truth_(this__3809.front))
{var temp__3695__auto____3810 = cljs.core.next.call(null,this__3809.front);

if(cljs.core.truth_(temp__3695__auto____3810))
{var f1__3811 = temp__3695__auto____3810;

return (new cljs.core.PersistentQueue(this__3809.meta,(this__3809.count - 1),f1__3811,this__3809.rear));
} else
{return (new cljs.core.PersistentQueue(this__3809.meta,(this__3809.count - 1),cljs.core.seq.call(null,this__3809.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3812 = this;
return cljs.core.first.call(null,this__3812.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3813 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3814 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3815 = this;
return (new cljs.core.PersistentQueue(meta,this__3815.count,this__3815.front,this__3815.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3816 = this;
return this__3816.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3817 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3818 = this;
return false;
});
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
var len__3819 = array.length;

var i__3820 = 0;

while(true){
if(cljs.core.truth_((i__3820 < len__3819)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3820]))))
{return i__3820;
} else
{{
var G__3821 = (i__3820 + incr);
i__3820 = G__3821;
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
var obj_map_contains_key_QMARK___3823 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3824 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3822 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3822))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3822;
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
return obj_map_contains_key_QMARK___3823.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3824.call(this,k,strobj,true_val,false_val);
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
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3827 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3846 = null;
var G__3846__3847 = (function (coll,k){
var this__3828 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3846__3848 = (function (coll,k,not_found){
var this__3829 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3829.strobj,(this__3829.strobj[k]),not_found);
});
G__3846 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3846__3847.call(this,coll,k);
case  3 :
return G__3846__3848.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3846;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3830 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3831 = goog.object.clone.call(null,this__3830.strobj);
var overwrite_QMARK___3832 = new_strobj__3831.hasOwnProperty(k);

(new_strobj__3831[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3832))
{return (new cljs.core.ObjMap(this__3830.meta,this__3830.keys,new_strobj__3831));
} else
{var new_keys__3833 = cljs.core.aclone.call(null,this__3830.keys);

new_keys__3833.push(k);
return (new cljs.core.ObjMap(this__3830.meta,new_keys__3833,new_strobj__3831));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3830.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3834 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3834.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3835 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3836 = this;
if(cljs.core.truth_((this__3836.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3826_SHARP_){
return cljs.core.vector.call(null,p1__3826_SHARP_,(this__3836.strobj[p1__3826_SHARP_]));
}),this__3836.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3837 = this;
return this__3837.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3838 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3839 = this;
return (new cljs.core.ObjMap(meta,this__3839.keys,this__3839.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3840 = this;
return this__3840.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3841 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3841.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3842 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3843 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3843))
{return this__3842.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3843;
}
})()))
{var new_keys__3844 = cljs.core.aclone.call(null,this__3842.keys);
var new_strobj__3845 = goog.object.clone.call(null,this__3842.strobj);

new_keys__3844.splice(cljs.core.scan_array.call(null,1,k,new_keys__3844),1);
cljs.core.js_delete.call(null,new_strobj__3845,k);
return (new cljs.core.ObjMap(this__3842.meta,new_keys__3844,new_strobj__3845));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3851 = null;
var G__3851__3852 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3851__3853 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3851 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3851__3852.call(this,_,k);
case  3 :
return G__3851__3853.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3851;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3855 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3885 = null;
var G__3885__3886 = (function (coll,k){
var this__3856 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3885__3887 = (function (coll,k,not_found){
var this__3857 = this;
var bucket__3858 = (this__3857.hashobj[cljs.core.hash.call(null,k)]);
var i__3859 = (cljs.core.truth_(bucket__3858)?cljs.core.scan_array.call(null,2,k,bucket__3858):null);

if(cljs.core.truth_(i__3859))
{return (bucket__3858[(i__3859 + 1)]);
} else
{return not_found;
}
});
G__3885 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3885__3886.call(this,coll,k);
case  3 :
return G__3885__3887.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3885;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3860 = this;
var h__3861 = cljs.core.hash.call(null,k);
var bucket__3862 = (this__3860.hashobj[h__3861]);

if(cljs.core.truth_(bucket__3862))
{var new_bucket__3863 = cljs.core.aclone.call(null,bucket__3862);
var new_hashobj__3864 = goog.object.clone.call(null,this__3860.hashobj);

(new_hashobj__3864[h__3861] = new_bucket__3863);
var temp__3695__auto____3865 = cljs.core.scan_array.call(null,2,k,new_bucket__3863);

if(cljs.core.truth_(temp__3695__auto____3865))
{var i__3866 = temp__3695__auto____3865;

(new_bucket__3863[(i__3866 + 1)] = v);
return (new cljs.core.HashMap(this__3860.meta,this__3860.count,new_hashobj__3864));
} else
{new_bucket__3863.push(k,v);
return (new cljs.core.HashMap(this__3860.meta,(this__3860.count + 1),new_hashobj__3864));
}
} else
{var new_hashobj__3867 = goog.object.clone.call(null,this__3860.hashobj);

(new_hashobj__3867[h__3861] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3860.meta,(this__3860.count + 1),new_hashobj__3867));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3868 = this;
var bucket__3869 = (this__3868.hashobj[cljs.core.hash.call(null,k)]);
var i__3870 = (cljs.core.truth_(bucket__3869)?cljs.core.scan_array.call(null,2,k,bucket__3869):null);

if(cljs.core.truth_(i__3870))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3871 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3872 = this;
if(cljs.core.truth_((this__3872.count > 0)))
{var hashes__3873 = cljs.core.js_keys.call(null,this__3872.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3850_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3872.hashobj[p1__3850_SHARP_])));
}),hashes__3873);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3874 = this;
return this__3874.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3875 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3876 = this;
return (new cljs.core.HashMap(meta,this__3876.count,this__3876.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3877 = this;
return this__3877.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3878 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3878.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3879 = this;
var h__3880 = cljs.core.hash.call(null,k);
var bucket__3881 = (this__3879.hashobj[h__3880]);
var i__3882 = (cljs.core.truth_(bucket__3881)?cljs.core.scan_array.call(null,2,k,bucket__3881):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3882)))
{return coll;
} else
{var new_hashobj__3883 = goog.object.clone.call(null,this__3879.hashobj);

if(cljs.core.truth_((3 > bucket__3881.length)))
{cljs.core.js_delete.call(null,new_hashobj__3883,h__3880);
} else
{var new_bucket__3884 = cljs.core.aclone.call(null,bucket__3881);

new_bucket__3884.splice(i__3882,2);
(new_hashobj__3883[h__3880] = new_bucket__3884);
}
return (new cljs.core.HashMap(this__3879.meta,(this__3879.count - 1),new_hashobj__3883));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3889 = ks.length;

var i__3890 = 0;
var out__3891 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3890 < len__3889)))
{{
var G__3892 = (i__3890 + 1);
var G__3893 = cljs.core.assoc.call(null,out__3891,(ks[i__3890]),(vs[i__3890]));
i__3890 = G__3892;
out__3891 = G__3893;
continue;
}
} else
{return out__3891;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3894 = null;
var G__3894__3895 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3894__3896 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3894 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3894__3895.call(this,_,k);
case  3 :
return G__3894__3896.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3894;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3898 = cljs.core.seq.call(null,keyvals);
var out__3899 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3898))
{{
var G__3900 = cljs.core.nnext.call(null,in$__3898);
var G__3901 = cljs.core.assoc.call(null,out__3899,cljs.core.first.call(null,in$__3898),cljs.core.second.call(null,in$__3898));
in$__3898 = G__3900;
out__3899 = G__3901;
continue;
}
} else
{return out__3899;
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
hash_map.cljs$lang$applyTo = (function (arglist__3902){
var keyvals = cljs.core.seq( arglist__3902 );;
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
{return cljs.core.reduce.call(null,(function (p1__3903_SHARP_,p2__3904_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3905 = p1__3903_SHARP_;

if(cljs.core.truth_(or__3548__auto____3905))
{return or__3548__auto____3905;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3904_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3906){
var maps = cljs.core.seq( arglist__3906 );;
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
{var merge_entry__3909 = (function (m,e){
var k__3907 = cljs.core.first.call(null,e);
var v__3908 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3907)))
{return cljs.core.assoc.call(null,m,k__3907,f.call(null,cljs.core.get.call(null,m,k__3907),v__3908));
} else
{return cljs.core.assoc.call(null,m,k__3907,v__3908);
}
});
var merge2__3911 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3909,(function (){var or__3548__auto____3910 = m1;

if(cljs.core.truth_(or__3548__auto____3910))
{return or__3548__auto____3910;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3911,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3912){
var f = cljs.core.first(arglist__3912);
var maps = cljs.core.rest(arglist__3912);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3914 = cljs.core.ObjMap.fromObject([],{});
var keys__3915 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3915))
{var key__3916 = cljs.core.first.call(null,keys__3915);
var entry__3917 = cljs.core.get.call(null,map,key__3916,"﷐'user/not-found");

{
var G__3918 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3917,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3914,key__3916,entry__3917):ret__3914);
var G__3919 = cljs.core.next.call(null,keys__3915);
ret__3914 = G__3918;
keys__3915 = G__3919;
continue;
}
} else
{return ret__3914;
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
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3933 = null;
var G__3933__3934 = (function (coll,v){
var this__3921 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3933__3935 = (function (coll,v,not_found){
var this__3922 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3922.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3933 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3933__3934.call(this,coll,v);
case  3 :
return G__3933__3935.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3933;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3923 = this;
return (new cljs.core.Set(this__3923.meta,cljs.core.assoc.call(null,this__3923.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3924 = this;
return cljs.core.keys.call(null,this__3924.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3925 = this;
return (new cljs.core.Set(this__3925.meta,cljs.core.dissoc.call(null,this__3925.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3926 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3927 = this;
var and__3546__auto____3928 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3928))
{var and__3546__auto____3929 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3929))
{return cljs.core.every_QMARK_.call(null,(function (p1__3913_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3913_SHARP_);
}),other);
} else
{return and__3546__auto____3929;
}
} else
{return and__3546__auto____3928;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3930 = this;
return (new cljs.core.Set(meta,this__3930.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3931 = this;
return this__3931.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3932 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3932.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3937 = null;
var G__3937__3938 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3937__3939 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3937 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3937__3938.call(this,_,k);
case  3 :
return G__3937__3939.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3937;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3942 = cljs.core.seq.call(null,coll);
var out__3943 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3942))))
{{
var G__3944 = cljs.core.rest.call(null,in$__3942);
var G__3945 = cljs.core.conj.call(null,out__3943,cljs.core.first.call(null,in$__3942));
in$__3942 = G__3944;
out__3943 = G__3945;
continue;
}
} else
{return out__3943;
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
{var n__3946 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3947 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3947))
{var e__3948 = temp__3695__auto____3947;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3948));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3946,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3941_SHARP_){
var temp__3695__auto____3949 = cljs.core.find.call(null,smap,p1__3941_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3949))
{var e__3950 = temp__3695__auto____3949;

return cljs.core.second.call(null,e__3950);
} else
{return p1__3941_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3958 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3951,seen){
while(true){
var vec__3952__3953 = p__3951;
var f__3954 = cljs.core.nth.call(null,vec__3952__3953,0,null);
var xs__3955 = vec__3952__3953;

var temp__3698__auto____3956 = cljs.core.seq.call(null,xs__3955);

if(cljs.core.truth_(temp__3698__auto____3956))
{var s__3957 = temp__3698__auto____3956;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3954)))
{{
var G__3959 = cljs.core.rest.call(null,s__3957);
var G__3960 = seen;
p__3951 = G__3959;
seen = G__3960;
continue;
}
} else
{return cljs.core.cons.call(null,f__3954,step.call(null,cljs.core.rest.call(null,s__3957),cljs.core.conj.call(null,seen,f__3954)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3958.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3961 = cljs.core.Vector.fromArray([]);
var s__3962 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3962)))
{{
var G__3963 = cljs.core.conj.call(null,ret__3961,cljs.core.first.call(null,s__3962));
var G__3964 = cljs.core.next.call(null,s__3962);
ret__3961 = G__3963;
s__3962 = G__3964;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3961);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3965 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3966 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3966 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3966 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3967 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3967))
{return or__3548__auto____3967;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3968 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3968 > -1)))
{return cljs.core.subs.call(null,x,2,i__3968);
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
var map__3971 = cljs.core.ObjMap.fromObject([],{});
var ks__3972 = cljs.core.seq.call(null,keys);
var vs__3973 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3974 = ks__3972;

if(cljs.core.truth_(and__3546__auto____3974))
{return vs__3973;
} else
{return and__3546__auto____3974;
}
})()))
{{
var G__3975 = cljs.core.assoc.call(null,map__3971,cljs.core.first.call(null,ks__3972),cljs.core.first.call(null,vs__3973));
var G__3976 = cljs.core.next.call(null,ks__3972);
var G__3977 = cljs.core.next.call(null,vs__3973);
map__3971 = G__3975;
ks__3972 = G__3976;
vs__3973 = G__3977;
continue;
}
} else
{return map__3971;
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
var max_key__3980 = (function (k,x){
return x;
});
var max_key__3981 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3982 = (function() { 
var G__3984__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3969_SHARP_,p2__3970_SHARP_){
return max_key.call(null,k,p1__3969_SHARP_,p2__3970_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3984 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3984__delegate.call(this, k, x, y, more);
};
G__3984.cljs$lang$maxFixedArity = 3;
G__3984.cljs$lang$applyTo = (function (arglist__3985){
var k = cljs.core.first(arglist__3985);
var x = cljs.core.first(cljs.core.next(arglist__3985));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3985)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3985)));
return G__3984__delegate.call(this, k, x, y, more);
});
return G__3984;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3980.call(this,k,x);
case  3 :
return max_key__3981.call(this,k,x,y);
default:
return max_key__3982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3982.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3986 = (function (k,x){
return x;
});
var min_key__3987 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3988 = (function() { 
var G__3990__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3978_SHARP_,p2__3979_SHARP_){
return min_key.call(null,k,p1__3978_SHARP_,p2__3979_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3990 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3990__delegate.call(this, k, x, y, more);
};
G__3990.cljs$lang$maxFixedArity = 3;
G__3990.cljs$lang$applyTo = (function (arglist__3991){
var k = cljs.core.first(arglist__3991);
var x = cljs.core.first(cljs.core.next(arglist__3991));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3991)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3991)));
return G__3990__delegate.call(this, k, x, y, more);
});
return G__3990;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3986.call(this,k,x);
case  3 :
return min_key__3987.call(this,k,x,y);
default:
return min_key__3988.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3988.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3994 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3995 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3992))
{var s__3993 = temp__3698__auto____3992;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3993),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3993)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3994.call(this,n,step);
case  3 :
return partition_all__3995.call(this,n,step,coll);
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
var temp__3698__auto____3997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3997))
{var s__3998 = temp__3698__auto____3997;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3998))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3998),take_while.call(null,pred,cljs.core.rest.call(null,s__3998)));
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
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3999 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4000 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4016 = null;
var G__4016__4017 = (function (rng,f){
var this__4001 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4016__4018 = (function (rng,f,s){
var this__4002 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4016 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4016__4017.call(this,rng,f);
case  3 :
return G__4016__4018.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4016;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4003 = this;
var comp__4004 = (cljs.core.truth_((this__4003.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4004.call(null,this__4003.start,this__4003.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4005 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4005.end - this__4005.start) / this__4005.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4006 = this;
return this__4006.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4007 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4007.meta,(this__4007.start + this__4007.step),this__4007.end,this__4007.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4008 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4009 = this;
return (new cljs.core.Range(meta,this__4009.start,this__4009.end,this__4009.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4010 = this;
return this__4010.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4020 = null;
var G__4020__4021 = (function (rng,n){
var this__4011 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4011.start + (n * this__4011.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4012 = (this__4011.start > this__4011.end);

if(cljs.core.truth_(and__3546__auto____4012))
{return cljs.core._EQ_.call(null,this__4011.step,0);
} else
{return and__3546__auto____4012;
}
})()))
{return this__4011.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4020__4022 = (function (rng,n,not_found){
var this__4013 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4013.start + (n * this__4013.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4014 = (this__4013.start > this__4013.end);

if(cljs.core.truth_(and__3546__auto____4014))
{return cljs.core._EQ_.call(null,this__4013.step,0);
} else
{return and__3546__auto____4014;
}
})()))
{return this__4013.start;
} else
{return not_found;
}
}
});
G__4020 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4020__4021.call(this,rng,n);
case  3 :
return G__4020__4022.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4020;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4015 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4015.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4024 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4025 = (function (end){
return range.call(null,0,end,1);
});
var range__4026 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4027 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4024.call(this);
case  1 :
return range__4025.call(this,start);
case  2 :
return range__4026.call(this,start,end);
case  3 :
return range__4027.call(this,start,end,step);
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
var temp__3698__auto____4029 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4029))
{var s__4030 = temp__3698__auto____4029;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4030),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4030)));
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
var temp__3698__auto____4032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4032))
{var s__4033 = temp__3698__auto____4032;

var fst__4034 = cljs.core.first.call(null,s__4033);
var fv__4035 = f.call(null,fst__4034);
var run__4036 = cljs.core.cons.call(null,fst__4034,cljs.core.take_while.call(null,(function (p1__4031_SHARP_){
return cljs.core._EQ_.call(null,fv__4035,f.call(null,p1__4031_SHARP_));
}),cljs.core.next.call(null,s__4033)));

return cljs.core.cons.call(null,run__4036,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4036),s__4033))));
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
var reductions__4051 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4047))
{var s__4048 = temp__3695__auto____4047;

return reductions.call(null,f,cljs.core.first.call(null,s__4048),cljs.core.rest.call(null,s__4048));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4052 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4049))
{var s__4050 = temp__3698__auto____4049;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4050)),cljs.core.rest.call(null,s__4050));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4051.call(this,f,init);
case  3 :
return reductions__4052.call(this,f,init,coll);
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
var juxt__4055 = (function (f){
return (function() {
var G__4060 = null;
var G__4060__4061 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4060__4062 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4060__4063 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4060__4064 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4060__4065 = (function() { 
var G__4067__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4067 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4067__delegate.call(this, x, y, z, args);
};
G__4067.cljs$lang$maxFixedArity = 3;
G__4067.cljs$lang$applyTo = (function (arglist__4068){
var x = cljs.core.first(arglist__4068);
var y = cljs.core.first(cljs.core.next(arglist__4068));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4068)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4068)));
return G__4067__delegate.call(this, x, y, z, args);
});
return G__4067;
})()
;
G__4060 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4060__4061.call(this);
case  1 :
return G__4060__4062.call(this,x);
case  2 :
return G__4060__4063.call(this,x,y);
case  3 :
return G__4060__4064.call(this,x,y,z);
default:
return G__4060__4065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4060.cljs$lang$maxFixedArity = 3;
G__4060.cljs$lang$applyTo = G__4060__4065.cljs$lang$applyTo;
return G__4060;
})()
});
var juxt__4056 = (function (f,g){
return (function() {
var G__4069 = null;
var G__4069__4070 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4069__4071 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4069__4072 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4069__4073 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4069__4074 = (function() { 
var G__4076__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4076 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4076__delegate.call(this, x, y, z, args);
};
G__4076.cljs$lang$maxFixedArity = 3;
G__4076.cljs$lang$applyTo = (function (arglist__4077){
var x = cljs.core.first(arglist__4077);
var y = cljs.core.first(cljs.core.next(arglist__4077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4077)));
return G__4076__delegate.call(this, x, y, z, args);
});
return G__4076;
})()
;
G__4069 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4069__4070.call(this);
case  1 :
return G__4069__4071.call(this,x);
case  2 :
return G__4069__4072.call(this,x,y);
case  3 :
return G__4069__4073.call(this,x,y,z);
default:
return G__4069__4074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4069.cljs$lang$maxFixedArity = 3;
G__4069.cljs$lang$applyTo = G__4069__4074.cljs$lang$applyTo;
return G__4069;
})()
});
var juxt__4057 = (function (f,g,h){
return (function() {
var G__4078 = null;
var G__4078__4079 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4078__4080 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4078__4081 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4078__4082 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4078__4083 = (function() { 
var G__4085__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4085 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4085__delegate.call(this, x, y, z, args);
};
G__4085.cljs$lang$maxFixedArity = 3;
G__4085.cljs$lang$applyTo = (function (arglist__4086){
var x = cljs.core.first(arglist__4086);
var y = cljs.core.first(cljs.core.next(arglist__4086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4086)));
return G__4085__delegate.call(this, x, y, z, args);
});
return G__4085;
})()
;
G__4078 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4078__4079.call(this);
case  1 :
return G__4078__4080.call(this,x);
case  2 :
return G__4078__4081.call(this,x,y);
case  3 :
return G__4078__4082.call(this,x,y,z);
default:
return G__4078__4083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4078.cljs$lang$maxFixedArity = 3;
G__4078.cljs$lang$applyTo = G__4078__4083.cljs$lang$applyTo;
return G__4078;
})()
});
var juxt__4058 = (function() { 
var G__4087__delegate = function (f,g,h,fs){
var fs__4054 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4088 = null;
var G__4088__4089 = (function (){
return cljs.core.reduce.call(null,(function (p1__4037_SHARP_,p2__4038_SHARP_){
return cljs.core.conj.call(null,p1__4037_SHARP_,p2__4038_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4054);
});
var G__4088__4090 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4039_SHARP_,p2__4040_SHARP_){
return cljs.core.conj.call(null,p1__4039_SHARP_,p2__4040_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4054);
});
var G__4088__4091 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4041_SHARP_,p2__4042_SHARP_){
return cljs.core.conj.call(null,p1__4041_SHARP_,p2__4042_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4054);
});
var G__4088__4092 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4043_SHARP_,p2__4044_SHARP_){
return cljs.core.conj.call(null,p1__4043_SHARP_,p2__4044_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4054);
});
var G__4088__4093 = (function() { 
var G__4095__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4045_SHARP_,p2__4046_SHARP_){
return cljs.core.conj.call(null,p1__4045_SHARP_,cljs.core.apply.call(null,p2__4046_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4054);
};
var G__4095 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4095__delegate.call(this, x, y, z, args);
};
G__4095.cljs$lang$maxFixedArity = 3;
G__4095.cljs$lang$applyTo = (function (arglist__4096){
var x = cljs.core.first(arglist__4096);
var y = cljs.core.first(cljs.core.next(arglist__4096));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4096)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4096)));
return G__4095__delegate.call(this, x, y, z, args);
});
return G__4095;
})()
;
G__4088 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4088__4089.call(this);
case  1 :
return G__4088__4090.call(this,x);
case  2 :
return G__4088__4091.call(this,x,y);
case  3 :
return G__4088__4092.call(this,x,y,z);
default:
return G__4088__4093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4088.cljs$lang$maxFixedArity = 3;
G__4088.cljs$lang$applyTo = G__4088__4093.cljs$lang$applyTo;
return G__4088;
})()
};
var G__4087 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4087__delegate.call(this, f, g, h, fs);
};
G__4087.cljs$lang$maxFixedArity = 3;
G__4087.cljs$lang$applyTo = (function (arglist__4097){
var f = cljs.core.first(arglist__4097);
var g = cljs.core.first(cljs.core.next(arglist__4097));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4097)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4097)));
return G__4087__delegate.call(this, f, g, h, fs);
});
return G__4087;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4055.call(this,f);
case  2 :
return juxt__4056.call(this,f,g);
case  3 :
return juxt__4057.call(this,f,g,h);
default:
return juxt__4058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4058.cljs$lang$applyTo;
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
var dorun__4099 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4102 = cljs.core.next.call(null,coll);
coll = G__4102;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4100 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4098 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4098))
{return (n > 0);
} else
{return and__3546__auto____4098;
}
})()))
{{
var G__4103 = (n - 1);
var G__4104 = cljs.core.next.call(null,coll);
n = G__4103;
coll = G__4104;
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
return dorun__4099.call(this,n);
case  2 :
return dorun__4100.call(this,n,coll);
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
var doall__4105 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4106 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4105.call(this,n);
case  2 :
return doall__4106.call(this,n,coll);
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
var matches__4108 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4108),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4108),1)))
{return cljs.core.first.call(null,matches__4108);
} else
{return cljs.core.vec.call(null,matches__4108);
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
var matches__4109 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4109)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4109),1)))
{return cljs.core.first.call(null,matches__4109);
} else
{return cljs.core.vec.call(null,matches__4109);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4110 = cljs.core.re_find.call(null,re,s);
var match_idx__4111 = s.search(re);
var match_str__4112 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4110))?cljs.core.first.call(null,match_data__4110):match_data__4110);
var post_match__4113 = cljs.core.subs.call(null,s,(match_idx__4111 + cljs.core.count.call(null,match_str__4112)));

if(cljs.core.truth_(match_data__4110))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4110,re_seq.call(null,re,post_match__4113));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4114_SHARP_){
return print_one.call(null,p1__4114_SHARP_,opts);
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
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4115 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4115))
{var and__3546__auto____4119 = (function (){var x__321__auto____4116 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4117 = x__321__auto____4116;

if(cljs.core.truth_(and__3546__auto____4117))
{var and__3546__auto____4118 = x__321__auto____4116.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4118))
{return cljs.core.not.call(null,x__321__auto____4116.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4118;
}
} else
{return and__3546__auto____4117;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____4116);
}
})();

if(cljs.core.truth_(and__3546__auto____4119))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4119;
}
} else
{return and__3546__auto____4115;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__321__auto____4120 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4121 = x__321__auto____4120;

if(cljs.core.truth_(and__3546__auto____4121))
{var and__3546__auto____4122 = x__321__auto____4120.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4122))
{return cljs.core.not.call(null,x__321__auto____4120.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4122;
}
} else
{return and__3546__auto____4121;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__321__auto____4120);
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
var first_obj__4123 = cljs.core.first.call(null,objs);
var sb__4124 = (new goog.string.StringBuffer());

var G__4125__4126 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4125__4126))
{var obj__4127 = cljs.core.first.call(null,G__4125__4126);
var G__4125__4128 = G__4125__4126;

while(true){
if(cljs.core.truth_((obj__4127 === first_obj__4123)))
{} else
{sb__4124.append(" ");
}
var G__4129__4130 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4127,opts));

if(cljs.core.truth_(G__4129__4130))
{var string__4131 = cljs.core.first.call(null,G__4129__4130);
var G__4129__4132 = G__4129__4130;

while(true){
sb__4124.append(string__4131);
var temp__3698__auto____4133 = cljs.core.next.call(null,G__4129__4132);

if(cljs.core.truth_(temp__3698__auto____4133))
{var G__4129__4134 = temp__3698__auto____4133;

{
var G__4137 = cljs.core.first.call(null,G__4129__4134);
var G__4138 = G__4129__4134;
string__4131 = G__4137;
G__4129__4132 = G__4138;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4135 = cljs.core.next.call(null,G__4125__4128);

if(cljs.core.truth_(temp__3698__auto____4135))
{var G__4125__4136 = temp__3698__auto____4135;

{
var G__4139 = cljs.core.first.call(null,G__4125__4136);
var G__4140 = G__4125__4136;
obj__4127 = G__4139;
G__4125__4128 = G__4140;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4124);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4141 = cljs.core.first.call(null,objs);

var G__4142__4143 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4142__4143))
{var obj__4144 = cljs.core.first.call(null,G__4142__4143);
var G__4142__4145 = G__4142__4143;

while(true){
if(cljs.core.truth_((obj__4144 === first_obj__4141)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4146__4147 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4144,opts));

if(cljs.core.truth_(G__4146__4147))
{var string__4148 = cljs.core.first.call(null,G__4146__4147);
var G__4146__4149 = G__4146__4147;

while(true){
cljs.core.string_print.call(null,string__4148);
var temp__3698__auto____4150 = cljs.core.next.call(null,G__4146__4149);

if(cljs.core.truth_(temp__3698__auto____4150))
{var G__4146__4151 = temp__3698__auto____4150;

{
var G__4154 = cljs.core.first.call(null,G__4146__4151);
var G__4155 = G__4146__4151;
string__4148 = G__4154;
G__4146__4149 = G__4155;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4152 = cljs.core.next.call(null,G__4142__4145);

if(cljs.core.truth_(temp__3698__auto____4152))
{var G__4142__4153 = temp__3698__auto____4152;

{
var G__4156 = cljs.core.first.call(null,G__4142__4153);
var G__4157 = G__4142__4153;
obj__4144 = G__4156;
G__4142__4145 = G__4157;
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
pr_str.cljs$lang$applyTo = (function (arglist__4158){
var objs = cljs.core.seq( arglist__4158 );;
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
pr.cljs$lang$applyTo = (function (arglist__4159){
var objs = cljs.core.seq( arglist__4159 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4160){
var objs = cljs.core.seq( arglist__4160 );;
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
println.cljs$lang$applyTo = (function (arglist__4161){
var objs = cljs.core.seq( arglist__4161 );;
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
prn.cljs$lang$applyTo = (function (arglist__4162){
var objs = cljs.core.seq( arglist__4162 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4163 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4163,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4164 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4164))
{var nspc__4165 = temp__3698__auto____4164;

return cljs.core.str.call(null,nspc__4165,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4166 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4166))
{var nspc__4167 = temp__3698__auto____4166;

return cljs.core.str.call(null,nspc__4167,"/");
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
var pr_pair__4168 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4168,"{",", ","}",opts,coll);
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
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4169 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4170 = this;
var G__4171__4172 = cljs.core.seq.call(null,this__4170.watches);

if(cljs.core.truth_(G__4171__4172))
{var G__4174__4176 = cljs.core.first.call(null,G__4171__4172);
var vec__4175__4177 = G__4174__4176;
var key__4178 = cljs.core.nth.call(null,vec__4175__4177,0,null);
var f__4179 = cljs.core.nth.call(null,vec__4175__4177,1,null);
var G__4171__4180 = G__4171__4172;

var G__4174__4181 = G__4174__4176;
var G__4171__4182 = G__4171__4180;

while(true){
var vec__4183__4184 = G__4174__4181;
var key__4185 = cljs.core.nth.call(null,vec__4183__4184,0,null);
var f__4186 = cljs.core.nth.call(null,vec__4183__4184,1,null);
var G__4171__4187 = G__4171__4182;

f__4186.call(null,key__4185,this$,oldval,newval);
var temp__3698__auto____4188 = cljs.core.next.call(null,G__4171__4187);

if(cljs.core.truth_(temp__3698__auto____4188))
{var G__4171__4189 = temp__3698__auto____4188;

{
var G__4196 = cljs.core.first.call(null,G__4171__4189);
var G__4197 = G__4171__4189;
G__4174__4181 = G__4196;
G__4171__4182 = G__4197;
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
var this__4190 = this;
return this$.watches = cljs.core.assoc.call(null,this__4190.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4191 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4191.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4192 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4192.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4193 = this;
return this__4193.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4194 = this;
return this__4194.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4195 = this;
return (o === other);
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
var atom__4204 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4205 = (function() { 
var G__4207__delegate = function (x,p__4198){
var map__4199__4200 = p__4198;
var map__4199__4201 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4199__4200))?cljs.core.apply.call(null,cljs.core.hash_map,map__4199__4200):map__4199__4200);
var validator__4202 = cljs.core.get.call(null,map__4199__4201,"﷐'validator");
var meta__4203 = cljs.core.get.call(null,map__4199__4201,"﷐'meta");

return (new cljs.core.Atom(x,meta__4203,validator__4202,null));
};
var G__4207 = function (x,var_args){
var p__4198 = null;
if (goog.isDef(var_args)) {
  p__4198 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4207__delegate.call(this, x, p__4198);
};
G__4207.cljs$lang$maxFixedArity = 1;
G__4207.cljs$lang$applyTo = (function (arglist__4208){
var x = cljs.core.first(arglist__4208);
var p__4198 = cljs.core.rest(arglist__4208);
return G__4207__delegate.call(this, x, p__4198);
});
return G__4207;
})()
;
atom = function(x,var_args){
var p__4198 = var_args;
switch(arguments.length){
case  1 :
return atom__4204.call(this,x);
default:
return atom__4205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4205.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4209 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4209))
{var validate__4210 = temp__3698__auto____4209;

if(cljs.core.truth_(validate__4210.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3016))))));
}
} else
{}
var old_value__4211 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4211,new_value);
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
var swap_BANG___4212 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4213 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4214 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4215 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4216 = (function() { 
var G__4218__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4218 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4218__delegate.call(this, a, f, x, y, z, more);
};
G__4218.cljs$lang$maxFixedArity = 5;
G__4218.cljs$lang$applyTo = (function (arglist__4219){
var a = cljs.core.first(arglist__4219);
var f = cljs.core.first(cljs.core.next(arglist__4219));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4219)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4219))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4219)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4219)))));
return G__4218__delegate.call(this, a, f, x, y, z, more);
});
return G__4218;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4212.call(this,a,f);
case  3 :
return swap_BANG___4213.call(this,a,f,x);
case  4 :
return swap_BANG___4214.call(this,a,f,x,y);
case  5 :
return swap_BANG___4215.call(this,a,f,x,y,z);
default:
return swap_BANG___4216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4216.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4220){
var iref = cljs.core.first(arglist__4220);
var f = cljs.core.first(cljs.core.next(arglist__4220));
var args = cljs.core.rest(cljs.core.next(arglist__4220));
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
var gensym__4221 = (function (){
return gensym.call(null,"G__");
});
var gensym__4222 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4221.call(this);
case  1 :
return gensym__4222.call(this,prefix_string);
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
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4224 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4224.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4225 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4225.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4225.state,this__4225.f);
}
return cljs.core.deref.call(null,this__4225.state);
});
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
delay.cljs$lang$applyTo = (function (arglist__4226){
var body = cljs.core.seq( arglist__4226 );;
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
var map__4227__4228 = options;
var map__4227__4229 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4227__4228))?cljs.core.apply.call(null,cljs.core.hash_map,map__4227__4228):map__4227__4228);
var keywordize_keys__4230 = cljs.core.get.call(null,map__4227__4229,"﷐'keywordize-keys");
var keyfn__4231 = (cljs.core.truth_(keywordize_keys__4230)?cljs.core.keyword:cljs.core.str);
var f__4237 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__385__auto____4236 = (function iter__4232(s__4233){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4233__4234 = s__4233;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4233__4234)))
{var k__4235 = cljs.core.first.call(null,s__4233__4234);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4231.call(null,k__4235),thisfn.call(null,(x[k__4235]))]),iter__4232.call(null,cljs.core.rest.call(null,s__4233__4234)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____4236.call(null,cljs.core.js_keys.call(null,x));
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

return f__4237.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4238){
var x = cljs.core.first(arglist__4238);
var options = cljs.core.rest(arglist__4238);
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
var mem__4239 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4243__delegate = function (args){
var temp__3695__auto____4240 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4239),args);

if(cljs.core.truth_(temp__3695__auto____4240))
{var v__4241 = temp__3695__auto____4240;

return v__4241;
} else
{var ret__4242 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4239,cljs.core.assoc,args,ret__4242);
return ret__4242;
}
};
var G__4243 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4243__delegate.call(this, args);
};
G__4243.cljs$lang$maxFixedArity = 0;
G__4243.cljs$lang$applyTo = (function (arglist__4244){
var args = cljs.core.seq( arglist__4244 );;
return G__4243__delegate.call(this, args);
});
return G__4243;
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
var trampoline__4246 = (function (f){
while(true){
var ret__4245 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4245)))
{{
var G__4249 = ret__4245;
f = G__4249;
continue;
}
} else
{return ret__4245;
}
break;
}
});
var trampoline__4247 = (function() { 
var G__4250__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4250 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4250__delegate.call(this, f, args);
};
G__4250.cljs$lang$maxFixedArity = 1;
G__4250.cljs$lang$applyTo = (function (arglist__4251){
var f = cljs.core.first(arglist__4251);
var args = cljs.core.rest(arglist__4251);
return G__4250__delegate.call(this, f, args);
});
return G__4250;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4246.call(this,f);
default:
return trampoline__4247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4247.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4252 = (function (){
return rand.call(null,1);
});
var rand__4253 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4252.call(this);
case  1 :
return rand__4253.call(this,n);
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
var k__4255 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4255,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4255,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4264 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4265 = (function (h,child,parent){
var or__3548__auto____4256 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4256))
{return or__3548__auto____4256;
} else
{var or__3548__auto____4257 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4257))
{return or__3548__auto____4257;
} else
{var and__3546__auto____4258 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4258))
{var and__3546__auto____4259 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4259))
{var and__3546__auto____4260 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4260))
{var ret__4261 = true;
var i__4262 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4263 = cljs.core.not.call(null,ret__4261);

if(cljs.core.truth_(or__3548__auto____4263))
{return or__3548__auto____4263;
} else
{return cljs.core._EQ_.call(null,i__4262,cljs.core.count.call(null,parent));
}
})()))
{return ret__4261;
} else
{{
var G__4267 = isa_QMARK_.call(null,h,child.call(null,i__4262),parent.call(null,i__4262));
var G__4268 = (i__4262 + 1);
ret__4261 = G__4267;
i__4262 = G__4268;
continue;
}
}
break;
}
} else
{return and__3546__auto____4260;
}
} else
{return and__3546__auto____4259;
}
} else
{return and__3546__auto____4258;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4264.call(this,h,child);
case  3 :
return isa_QMARK___4265.call(this,h,child,parent);
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
var parents__4269 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4270 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4269.call(this,h);
case  2 :
return parents__4270.call(this,h,tag);
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
var ancestors__4272 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4273 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4272.call(this,h);
case  2 :
return ancestors__4273.call(this,h,tag);
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
var descendants__4275 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4276 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4275.call(this,h);
case  2 :
return descendants__4276.call(this,h,tag);
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
var derive__4286 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3308))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4287 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3312))))));
}
var tp__4281 = "﷐'parents".call(null,h);
var td__4282 = "﷐'descendants".call(null,h);
var ta__4283 = "﷐'ancestors".call(null,h);
var tf__4284 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4285 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4281.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4283.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4283.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4281,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4284.call(null,"﷐'ancestors".call(null,h),tag,td__4282,parent,ta__4283),"﷐'descendants":tf__4284.call(null,"﷐'descendants".call(null,h),parent,ta__4283,tag,td__4282)});
})());

if(cljs.core.truth_(or__3548__auto____4285))
{return or__3548__auto____4285;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4286.call(this,h,tag);
case  3 :
return derive__4287.call(this,h,tag,parent);
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
var underive__4293 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4294 = (function (h,tag,parent){
var parentMap__4289 = "﷐'parents".call(null,h);
var childsParents__4290 = (cljs.core.truth_(parentMap__4289.call(null,tag))?cljs.core.disj.call(null,parentMap__4289.call(null,tag),parent):cljs.core.set([]));
var newParents__4291 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4290))?cljs.core.assoc.call(null,parentMap__4289,tag,childsParents__4290):cljs.core.dissoc.call(null,parentMap__4289,tag));
var deriv_seq__4292 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4278_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4278_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4278_SHARP_),cljs.core.second.call(null,p1__4278_SHARP_)));
}),cljs.core.seq.call(null,newParents__4291)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4289.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4279_SHARP_,p2__4280_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4279_SHARP_,p2__4280_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4292));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4293.call(this,h,tag);
case  3 :
return underive__4294.call(this,h,tag,parent);
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
var xprefs__4296 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4298 = (cljs.core.truth_((function (){var and__3546__auto____4297 = xprefs__4296;

if(cljs.core.truth_(and__3546__auto____4297))
{return xprefs__4296.call(null,y);
} else
{return and__3546__auto____4297;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4298))
{return or__3548__auto____4298;
} else
{var or__3548__auto____4300 = (function (){var ps__4299 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4299) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4299),prefer_table)))
{} else
{}
{
var G__4303 = cljs.core.rest.call(null,ps__4299);
ps__4299 = G__4303;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4300))
{return or__3548__auto____4300;
} else
{var or__3548__auto____4302 = (function (){var ps__4301 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4301) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4301),y,prefer_table)))
{} else
{}
{
var G__4304 = cljs.core.rest.call(null,ps__4301);
ps__4301 = G__4304;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4302))
{return or__3548__auto____4302;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4305 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4305))
{return or__3548__auto____4305;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4314 = cljs.core.reduce.call(null,(function (be,p__4306){
var vec__4307__4308 = p__4306;
var k__4309 = cljs.core.nth.call(null,vec__4307__4308,0,null);
var ___4310 = cljs.core.nth.call(null,vec__4307__4308,1,null);
var e__4311 = vec__4307__4308;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4309)))
{var be2__4313 = (cljs.core.truth_((function (){var or__3548__auto____4312 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4312))
{return or__3548__auto____4312;
} else
{return cljs.core.dominates.call(null,k__4309,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4311:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4313),k__4309,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4309," and ",cljs.core.first.call(null,be2__4313),", and neither is preferred")));
}
return be2__4313;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4314))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4314));
return cljs.core.second.call(null,best_entry__4314);
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
if(cljs.core.truth_((function (){var and__3546__auto____4315 = mf;

if(cljs.core.truth_(and__3546__auto____4315))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4315;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4316 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4316))
{return or__3548__auto____4316;
} else
{var or__3548__auto____4317 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4317))
{return or__3548__auto____4317;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4318 = mf;

if(cljs.core.truth_(and__3546__auto____4318))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4318;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4319 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4319))
{return or__3548__auto____4319;
} else
{var or__3548__auto____4320 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4320))
{return or__3548__auto____4320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4321 = mf;

if(cljs.core.truth_(and__3546__auto____4321))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4321;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4322 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4322))
{return or__3548__auto____4322;
} else
{var or__3548__auto____4323 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4323))
{return or__3548__auto____4323;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4324 = mf;

if(cljs.core.truth_(and__3546__auto____4324))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4324;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4325 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4325))
{return or__3548__auto____4325;
} else
{var or__3548__auto____4326 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4326))
{return or__3548__auto____4326;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4327 = mf;

if(cljs.core.truth_(and__3546__auto____4327))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4327;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4328 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4328))
{return or__3548__auto____4328;
} else
{var or__3548__auto____4329 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4329))
{return or__3548__auto____4329;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4330 = mf;

if(cljs.core.truth_(and__3546__auto____4330))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4330;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4331 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4331))
{return or__3548__auto____4331;
} else
{var or__3548__auto____4332 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4332))
{return or__3548__auto____4332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4333 = mf;

if(cljs.core.truth_(and__3546__auto____4333))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4333;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4334 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4334))
{return or__3548__auto____4334;
} else
{var or__3548__auto____4335 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4335))
{return or__3548__auto____4335;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4336 = mf;

if(cljs.core.truth_(and__3546__auto____4336))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4336;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4337 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4337))
{return or__3548__auto____4337;
} else
{var or__3548__auto____4338 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4338))
{return or__3548__auto____4338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4339 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4340 = cljs.core._get_method.call(null,mf,dispatch_val__4339);

if(cljs.core.truth_(target_fn__4340))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4339)));
}
return cljs.core.apply.call(null,target_fn__4340,args);
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
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4341 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4342 = this;
cljs.core.swap_BANG_.call(null,this__4342.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4342.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4342.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4342.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4343 = this;
cljs.core.swap_BANG_.call(null,this__4343.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4343.method_cache,this__4343.method_table,this__4343.cached_hierarchy,this__4343.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4344 = this;
cljs.core.swap_BANG_.call(null,this__4344.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4344.method_cache,this__4344.method_table,this__4344.cached_hierarchy,this__4344.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4345 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4345.cached_hierarchy),cljs.core.deref.call(null,this__4345.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4345.method_cache,this__4345.method_table,this__4345.cached_hierarchy,this__4345.hierarchy);
}
var temp__3695__auto____4346 = cljs.core.deref.call(null,this__4345.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4346))
{var target_fn__4347 = temp__3695__auto____4346;

return target_fn__4347;
} else
{var temp__3695__auto____4348 = cljs.core.find_and_cache_best_method.call(null,this__4345.name,dispatch_val,this__4345.hierarchy,this__4345.method_table,this__4345.prefer_table,this__4345.method_cache,this__4345.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4348))
{var target_fn__4349 = temp__3695__auto____4348;

return target_fn__4349;
} else
{return cljs.core.deref.call(null,this__4345.method_table).call(null,this__4345.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4350 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4350.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4350.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4350.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4350.method_cache,this__4350.method_table,this__4350.cached_hierarchy,this__4350.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4351 = this;
return cljs.core.deref.call(null,this__4351.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4352 = this;
return cljs.core.deref.call(null,this__4352.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4353 = this;
return cljs.core.do_invoke.call(null,mf,this__4353.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4354__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4354 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4354__delegate.call(this, _, args);
};
G__4354.cljs$lang$maxFixedArity = 1;
G__4354.cljs$lang$applyTo = (function (arglist__4355){
var _ = cljs.core.first(arglist__4355);
var args = cljs.core.rest(arglist__4355);
return G__4354__delegate.call(this, _, args);
});
return G__4354;
})()
;
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
