goog.provide('prezo.atom');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
prezo.atom.FormException = {};
prezo.atom.get_errors = (function get_errors(this$){
if(cljs.core.truth_((function (){var and__3546__auto____3115 = this$;

if(cljs.core.truth_(and__3546__auto____3115))
{return this$.prezo$atom$FormException$get_errors;
} else
{return and__3546__auto____3115;
}
})()))
{return this$.prezo$atom$FormException$get_errors(this$);
} else
{return (function (){var or__3548__auto____3116 = (prezo.atom.get_errors[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3116))
{return or__3548__auto____3116;
} else
{var or__3548__auto____3117 = (prezo.atom.get_errors["_"]);

if(cljs.core.truth_(or__3548__auto____3117))
{return or__3548__auto____3117;
} else
{throw cljs.core.missing_protocol.call(null,"FormException.get-errors",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
prezo.atom.FormError = (function (errors){
this.errors = errors;
})
prezo.atom.FormError.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"prezo.atom.FormError");
});
prezo.atom.FormError.prototype.prezo$atom$FormException$ = true;
prezo.atom.FormError.prototype.prezo$atom$FormException$get_errors = (function (this$){
var this__3118 = this;
return this__3118.errors;
});
prezo.atom.FormError;


/**
* @constructor
* @param {*} name
* @param {*} email
* @param {*} twitter
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
prezo.atom.UserModel = (function (name,email,twitter,__meta,__extmap){
this.name = name;
this.email = email;
this.twitter = twitter;
this.__meta = __meta;
this.__extmap = __extmap;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
prezo.atom.UserModel.prototype.cljs$core$IHash$ = true;
prezo.atom.UserModel.prototype.cljs$core$IHash$_hash = (function (this__285__auto__){
var this__3121 = this;
return cljs.core.hash_coll.call(null,this__285__auto__);
});
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3140 = null;
var G__3140__3141 = (function (this__290__auto__,k__291__auto__){
var this__3122 = this;
return cljs.core._lookup.call(null,this__290__auto__,k__291__auto__,null);
});
var G__3140__3142 = (function (this__292__auto__,k__293__auto__,else__294__auto__){
var this__3123 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'name",this__3123.name,"﷐'email",this__3123.email,"﷐'twitter",this__3123.twitter),this__3123.__extmap),k__293__auto__,else__294__auto__);
});
G__3140 = function(this__292__auto__,k__293__auto__,else__294__auto__){
switch(arguments.length){
case  2 :
return G__3140__3141.call(this,this__292__auto__,k__293__auto__);
case  3 :
return G__3140__3142.call(this,this__292__auto__,k__293__auto__,else__294__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3140;
})()
;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = (function (this__298__auto__,k__299__auto__,G__3119){
var this__3124 = this;
var pred__3125__3128 = cljs.core.identical_QMARK_;
var expr__3126__3129 = k__299__auto__;

if(cljs.core.truth_(pred__3125__3128.call(null,"﷐'name",expr__3126__3129)))
{return (new prezo.atom.UserModel(G__3119,this__3124.email,this__3124.twitter,this__3124.__meta,this__3124.__extmap));
} else
{if(cljs.core.truth_(pred__3125__3128.call(null,"﷐'email",expr__3126__3129)))
{return (new prezo.atom.UserModel(this__3124.name,G__3119,this__3124.twitter,this__3124.__meta,this__3124.__extmap));
} else
{if(cljs.core.truth_(pred__3125__3128.call(null,"﷐'twitter",expr__3126__3129)))
{return (new prezo.atom.UserModel(this__3124.name,this__3124.email,G__3119,this__3124.__meta,this__3124.__extmap));
} else
{return (new prezo.atom.UserModel(this__3124.name,this__3124.email,this__3124.twitter,this__3124.__meta,cljs.core.assoc.call(null,this__3124.__extmap,k__299__auto__,G__3119)));
}
}
}
});
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = (function (this__296__auto__,entry__297__auto__){
var this__3130 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__297__auto__)))
{return cljs.core._assoc.call(null,this__296__auto__,cljs.core._nth.call(null,entry__297__auto__,0),cljs.core._nth.call(null,entry__297__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__296__auto__,entry__297__auto__);
}
});
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = (function (this__303__auto__){
var this__3131 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__3131.name),cljs.core.vector.call(null,"﷐'email",this__3131.email),cljs.core.vector.call(null,"﷐'twitter",this__3131.twitter)]),this__3131.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = (function (this__305__auto__,opts__306__auto__){
var this__3132 = this;
var pr_pair__307__auto____3133 = (function (keyval__308__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__306__auto__,keyval__308__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__307__auto____3133,cljs.core.str.call(null,"#","prezo.atom.UserModel","{"),", ","}",opts__306__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__3132.name),cljs.core.vector.call(null,"﷐'email",this__3132.email),cljs.core.vector.call(null,"﷐'twitter",this__3132.twitter)]),this__3132.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = (function (this__295__auto__){
var this__3134 = this;
return (3 + cljs.core.count.call(null,this__3134.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = (function (this__286__auto__,other__287__auto__){
var this__3135 = this;
var and__3546__auto____3136 = (this__286__auto__.constructor === other__287__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____3136))
{return cljs.core.equiv_map.call(null,this__286__auto__,other__287__auto__);
} else
{return and__3546__auto____3136;
}
});
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = (function (this__289__auto__,G__3119){
var this__3137 = this;
return (new prezo.atom.UserModel(this__3137.name,this__3137.email,this__3137.twitter,G__3119,this__3137.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = (function (this__288__auto__){
var this__3138 = this;
return this__3138.__meta;
});
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = (function (this__300__auto__,k__301__auto__){
var this__3139 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'name","﷐'email","﷐'twitter"]),k__301__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__300__auto__),this__3139.__meta),k__301__auto__);
} else
{return (new prezo.atom.UserModel(this__3139.name,this__3139.email,this__3139.twitter,this__3139.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__3139.__extmap,k__301__auto__))));
}
});
prezo.atom.UserModel.cljs$core$IPrintable$_pr_seq = (function (this__332__auto__){
return cljs.core.list.call(null,"prezo.atom.UserModel");
});
prezo.atom.__GT_UserModel = (function __GT_UserModel(name,email,twitter){
return (new prezo.atom.UserModel(name,email,twitter));
});
prezo.atom.map__GT_UserModel = (function map__GT_UserModel(G__3120){
return (new prezo.atom.UserModel("﷐'name".call(null,G__3120),"﷐'email".call(null,G__3120),"﷐'twitter".call(null,G__3120),null,cljs.core.dissoc.call(null,G__3120,"﷐'name","﷐'email","﷐'twitter")));
});
prezo.atom.UserModel;
prezo.atom.my_user = cljs.core.atom.call(null,(new prezo.atom.UserModel("Creighton Kirkendall","ckirkendall@gmail.com","@crkirkendall")));
prezo.atom.user_validator = (function user_validator(new_val){
var check_map__3144 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'email","﷐'twitter"],{"﷐'name":cljs.core.not.call(null,(cljs.core.re_matches.call(null,/\S+.*/,"﷐'name".call(null,new_val)) === null)),"﷐'email":cljs.core.not.call(null,(cljs.core.re_matches.call(null,/.+@.+\..+/,"﷐'email".call(null,new_val)) === null)),"﷐'twitter":cljs.core.not.call(null,(cljs.core.re_matches.call(null,/@\S+/,"﷐'twitter".call(null,new_val)) === null))});

if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,check_map__3144))))
{throw (new prezo.atom.FormError(check_map__3144));
} else
{return new_val;
}
});
cljs.core.set_validator_BANG_.call(null,prezo.atom.my_user,prezo.atom.user_validator);
cljs.core.add_watch.call(null,prezo.atom.my_user,"﷐'user-view",(function (key,ref,old_val,new_val){
return prezo.atom.user_view.call(null,new_val);
}));
prezo.atom.user_view = (function user_view(user_val){
var nods__2702__auto____3147 = enfocus.core.nodes__GT_coll.call(null,prezo.util.by_id.call(null,"user-div"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3146){
enfocus.core.en_content.call(null,"﷐'name".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod3146,cljs.core.Vector.fromArray([".name"])));
enfocus.core.en_content.call(null,"﷐'email".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod3146,cljs.core.Vector.fromArray([".email"])));
enfocus.core.en_content.call(null,"﷐'twitter".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod3146,cljs.core.Vector.fromArray([".twitter"])));
return pnod3146;
}),nods__2702__auto____3147));
return prezo.util.by_id.call(null,"user-div");
});
prezo.atom.persist_user_form = (function persist_user_form(){
try{cljs.core.swap_BANG_.call(null,prezo.atom.my_user,cljs.core.merge,(function (){var nods__2713__auto____3154 = enfocus.core.nodes__GT_coll.call(null,document);
var map3153__3155 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__2714__auto____3156 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3152){
cljs.core.swap_BANG_.call(null,map3153__3155,cljs.core.assoc,"﷐'name",enfocus.core.extr_multi_node.call(null,(function (pnod__2893__auto__){
return pnod__2893__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod3152,cljs.core.Vector.fromArray(["#user-name"]))));
cljs.core.swap_BANG_.call(null,map3153__3155,cljs.core.assoc,"﷐'email",enfocus.core.extr_multi_node.call(null,(function (pnod__2893__auto__){
return pnod__2893__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod3152,cljs.core.Vector.fromArray(["#user-email"]))));
cljs.core.swap_BANG_.call(null,map3153__3155,cljs.core.assoc,"﷐'twitter",enfocus.core.extr_multi_node.call(null,(function (pnod__2893__auto__){
return pnod__2893__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod3152,cljs.core.Vector.fromArray(["#user-twitter"]))));
return pnod3152;
}),nods__2713__auto____3154));

return cljs.core.deref.call(null,map3153__3155);
})());
enfocus.core.en_content.call(null,"").call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
}catch (e3148){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,prezo.atom.FormError,e3148)))
{var e__3149 = e3148;

var errors__3150 = prezo.atom.get_errors.call(null,e__3149);
var inv_flds__3151 = cljs.core.filter.call(null,(function (p1__3145_SHARP_){
return cljs.core.not.call(null,p1__3145_SHARP_.call(null,errors__3150));
}),cljs.core.keys.call(null,errors__3150));

enfocus.core.en_content.call(null,cljs.core.str.call(null,"The following fields where invalid:",cljs.core.pr_str.call(null,inv_flds__3151))).call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3148;
} else
{return null;
}
}
}});
