goog.provide('prezo.atom');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
prezo.atom.FormException = {};
prezo.atom.get_errors = (function get_errors(this$){
if(cljs.core.truth_((function (){var and__3546__auto____38483 = this$;

if(cljs.core.truth_(and__3546__auto____38483))
{return this$.prezo$atom$FormException$get_errors;
} else
{return and__3546__auto____38483;
}
})()))
{return this$.prezo$atom$FormException$get_errors(this$);
} else
{return (function (){var or__3548__auto____38484 = (prezo.atom.get_errors[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____38484))
{return or__3548__auto____38484;
} else
{var or__3548__auto____38485 = (prezo.atom.get_errors["_"]);

if(cljs.core.truth_(or__3548__auto____38485))
{return or__3548__auto____38485;
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
prezo.atom.FormError.prototype.prezo$atom$FormException$ = true;
prezo.atom.FormError.prototype.prezo$atom$FormException$get_errors = (function (this$){
var this__38486 = this;
return this__38486.errors;
});


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
prezo.atom.UserModel.prototype.cljs$core$IHash$_hash = (function (this__253__auto__){
var this__38489 = this;
return cljs.core.hash_coll.call(null,this__253__auto__);
});
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = (function() {
var G__38508 = null;
var G__38508__38509 = (function (this__258__auto__,k__259__auto__){
var this__38490 = this;
return cljs.core._lookup.call(null,this__258__auto__,k__259__auto__,null);
});
var G__38508__38510 = (function (this__260__auto__,k__261__auto__,else__262__auto__){
var this__38491 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'name",this__38491.name,"﷐'email",this__38491.email,"﷐'twitter",this__38491.twitter),this__38491.__extmap),k__261__auto__,else__262__auto__);
});
G__38508 = function(this__260__auto__,k__261__auto__,else__262__auto__){
switch(arguments.length){
case  2 :
return G__38508__38509.call(this,this__260__auto__,k__261__auto__);
case  3 :
return G__38508__38510.call(this,this__260__auto__,k__261__auto__,else__262__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38508;
})()
;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = (function (this__266__auto__,k__267__auto__,G__38487){
var this__38492 = this;
var pred__38493__38496 = cljs.core.identical_QMARK_;
var expr__38494__38497 = k__267__auto__;

if(cljs.core.truth_(pred__38493__38496.call(null,"﷐'name",expr__38494__38497)))
{return (new prezo.atom.UserModel(G__38487,this__38492.email,this__38492.twitter,this__38492.__meta,this__38492.__extmap));
} else
{if(cljs.core.truth_(pred__38493__38496.call(null,"﷐'email",expr__38494__38497)))
{return (new prezo.atom.UserModel(this__38492.name,G__38487,this__38492.twitter,this__38492.__meta,this__38492.__extmap));
} else
{if(cljs.core.truth_(pred__38493__38496.call(null,"﷐'twitter",expr__38494__38497)))
{return (new prezo.atom.UserModel(this__38492.name,this__38492.email,G__38487,this__38492.__meta,this__38492.__extmap));
} else
{return (new prezo.atom.UserModel(this__38492.name,this__38492.email,this__38492.twitter,this__38492.__meta,cljs.core.assoc.call(null,this__38492.__extmap,k__267__auto__,G__38487)));
}
}
}
});
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = (function (this__264__auto__,entry__265__auto__){
var this__38498 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__265__auto__)))
{return cljs.core._assoc.call(null,this__264__auto__,cljs.core._nth.call(null,entry__265__auto__,0),cljs.core._nth.call(null,entry__265__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__264__auto__,entry__265__auto__);
}
});
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = (function (this__271__auto__){
var this__38499 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__38499.name),cljs.core.vector.call(null,"﷐'email",this__38499.email),cljs.core.vector.call(null,"﷐'twitter",this__38499.twitter)]),this__38499.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = (function (this__273__auto__,opts__274__auto__){
var this__38500 = this;
var pr_pair__275__auto____38501 = (function (keyval__276__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__274__auto__,keyval__276__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__275__auto____38501,cljs.core.str.call(null,"#","prezo.atom.UserModel","{"),", ","}",opts__274__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__38500.name),cljs.core.vector.call(null,"﷐'email",this__38500.email),cljs.core.vector.call(null,"﷐'twitter",this__38500.twitter)]),this__38500.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = (function (this__263__auto__){
var this__38502 = this;
return (3 + cljs.core.count.call(null,this__38502.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = (function (this__254__auto__,other__255__auto__){
var this__38503 = this;
var and__3546__auto____38504 = (this__254__auto__.constructor === other__255__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____38504))
{return cljs.core.equiv_map.call(null,this__254__auto__,other__255__auto__);
} else
{return and__3546__auto____38504;
}
});
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = (function (this__257__auto__,G__38487){
var this__38505 = this;
return (new prezo.atom.UserModel(this__38505.name,this__38505.email,this__38505.twitter,G__38487,this__38505.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = (function (this__256__auto__){
var this__38506 = this;
return this__38506.__meta;
});
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = (function (this__268__auto__,k__269__auto__){
var this__38507 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'name","﷐'email","﷐'twitter"]),k__269__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__268__auto__),this__38507.__meta),k__269__auto__);
} else
{return (new prezo.atom.UserModel(this__38507.name,this__38507.email,this__38507.twitter,this__38507.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__38507.__extmap,k__269__auto__))));
}
});
prezo.atom.__GT_UserModel = (function __GT_UserModel(name,email,twitter){
return (new prezo.atom.UserModel(name,email,twitter));
});
prezo.atom.map__GT_UserModel = (function map__GT_UserModel(G__38488){
return (new prezo.atom.UserModel("﷐'name".call(null,G__38488),"﷐'email".call(null,G__38488),"﷐'twitter".call(null,G__38488),null,cljs.core.dissoc.call(null,G__38488,"﷐'name","﷐'email","﷐'twitter")));
});
prezo.atom.my_user = cljs.core.atom.call(null,(new prezo.atom.UserModel("Creighton Kirkendall","ckirkendall@gmail.com","@crkirkendall")));
prezo.atom.user_validator = (function user_validator(new_val){
var check_map__38512 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'email","﷐'twitter"],{"﷐'name":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/\S+.*/,"﷐'name".call(null,new_val)))),"﷐'email":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/.+@.+\..+/,"﷐'email".call(null,new_val)))),"﷐'twitter":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/@\S+/,"﷐'twitter".call(null,new_val))))});

if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,check_map__38512))))
{throw (new prezo.atom.FormError(check_map__38512));
} else
{return new_val;
}
});
cljs.core.set_validator_BANG_.call(null,prezo.atom.my_user,prezo.atom.user_validator);
cljs.core.add_watch.call(null,prezo.atom.my_user,"﷐'user-view",(function (key,ref,old_val,new_val){
return prezo.atom.user_view.call(null,new_val);
}));
prezo.atom.user_view = (function user_view(user_val){
var nods__2582__auto____38515 = enfocus.core.nodes__GT_coll.call(null,prezo.util.by_id.call(null,"user-div"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38514){
enfocus.core.en_content.call(null,"﷐'name".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod38514,cljs.core.Vector.fromArray([".name"])));
enfocus.core.en_content.call(null,"﷐'email".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod38514,cljs.core.Vector.fromArray([".email"])));
enfocus.core.en_content.call(null,"﷐'twitter".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod38514,cljs.core.Vector.fromArray([".twitter"])));
return pnod38514;
}),nods__2582__auto____38515));
return prezo.util.by_id.call(null,"user-div");
});
prezo.atom.persist_user_form = (function persist_user_form(){
try{cljs.core.swap_BANG_.call(null,prezo.atom.my_user,cljs.core.merge,(function (){var nods__2593__auto____38522 = enfocus.core.nodes__GT_coll.call(null,document);
var map38521__38523 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__2594__auto____38524 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38520){
cljs.core.swap_BANG_.call(null,map38521__38523,cljs.core.assoc,"﷐'name",enfocus.core.extr_multi_node.call(null,(function (pnod__2773__auto__){
return pnod__2773__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod38520,cljs.core.Vector.fromArray(["#user-name"]))));
cljs.core.swap_BANG_.call(null,map38521__38523,cljs.core.assoc,"﷐'email",enfocus.core.extr_multi_node.call(null,(function (pnod__2773__auto__){
return pnod__2773__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod38520,cljs.core.Vector.fromArray(["#user-email"]))));
cljs.core.swap_BANG_.call(null,map38521__38523,cljs.core.assoc,"﷐'twitter",enfocus.core.extr_multi_node.call(null,(function (pnod__2773__auto__){
return pnod__2773__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod38520,cljs.core.Vector.fromArray(["#user-twitter"]))));
return pnod38520;
}),nods__2593__auto____38522));

return cljs.core.deref.call(null,map38521__38523);
})());
enfocus.core.en_content.call(null,"").call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
}catch (e38516){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,prezo.atom.FormError,e38516)))
{var e__38517 = e38516;

var errors__38518 = prezo.atom.get_errors.call(null,e__38517);
var inv_flds__38519 = cljs.core.filter.call(null,(function (p1__38513_SHARP_){
return cljs.core.not.call(null,p1__38513_SHARP_.call(null,errors__38518));
}),cljs.core.keys.call(null,errors__38518));

enfocus.core.en_content.call(null,cljs.core.str.call(null,"The following fields where invalid:",cljs.core.pr_str.call(null,inv_flds__38519))).call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e38516;
} else
{return null;
}
}
}});
