goog.provide('prezo.atom');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
prezo.atom.FormException = {};
prezo.atom.get_errors = (function get_errors(this$){
if(cljs.core.truth_((function (){var and__3546__auto____93102 = this$;

if(cljs.core.truth_(and__3546__auto____93102))
{return this$.prezo$atom$FormException$get_errors;
} else
{return and__3546__auto____93102;
}
})()))
{return this$.prezo$atom$FormException$get_errors(this$);
} else
{return (function (){var or__3548__auto____93103 = (prezo.atom.get_errors[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____93103))
{return or__3548__auto____93103;
} else
{var or__3548__auto____93104 = (prezo.atom.get_errors["_"]);

if(cljs.core.truth_(or__3548__auto____93104))
{return or__3548__auto____93104;
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
prezo.atom.FormError.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"prezo.atom.FormError");
});
prezo.atom.FormError.prototype.prezo$atom$FormException$ = true;
prezo.atom.FormError.prototype.prezo$atom$FormException$get_errors = (function (this$){
var this__93105 = this;
return this__93105.errors;
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
prezo.atom.UserModel.prototype.cljs$core$IHash$_hash = (function (this__376__auto__){
var this__93108 = this;
return cljs.core.hash_coll.call(null,this__376__auto__);
});
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = (function() {
var G__93127 = null;
var G__93127__93128 = (function (this__381__auto__,k__382__auto__){
var this__93109 = this;
return cljs.core._lookup.call(null,this__381__auto__,k__382__auto__,null);
});
var G__93127__93129 = (function (this__383__auto__,k__384__auto__,else__385__auto__){
var this__93110 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'name",this__93110.name,"﷐'email",this__93110.email,"﷐'twitter",this__93110.twitter),this__93110.__extmap),k__384__auto__,else__385__auto__);
});
G__93127 = function(this__383__auto__,k__384__auto__,else__385__auto__){
switch(arguments.length){
case  2 :
return G__93127__93128.call(this,this__383__auto__,k__384__auto__);
case  3 :
return G__93127__93129.call(this,this__383__auto__,k__384__auto__,else__385__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__93127;
})()
;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = (function (this__389__auto__,k__390__auto__,G__93106){
var this__93111 = this;
var pred__93112__93115 = cljs.core.identical_QMARK_;
var expr__93113__93116 = k__390__auto__;

if(cljs.core.truth_(pred__93112__93115.call(null,"﷐'name",expr__93113__93116)))
{return (new prezo.atom.UserModel(G__93106,this__93111.email,this__93111.twitter,this__93111.__meta,this__93111.__extmap));
} else
{if(cljs.core.truth_(pred__93112__93115.call(null,"﷐'email",expr__93113__93116)))
{return (new prezo.atom.UserModel(this__93111.name,G__93106,this__93111.twitter,this__93111.__meta,this__93111.__extmap));
} else
{if(cljs.core.truth_(pred__93112__93115.call(null,"﷐'twitter",expr__93113__93116)))
{return (new prezo.atom.UserModel(this__93111.name,this__93111.email,G__93106,this__93111.__meta,this__93111.__extmap));
} else
{return (new prezo.atom.UserModel(this__93111.name,this__93111.email,this__93111.twitter,this__93111.__meta,cljs.core.assoc.call(null,this__93111.__extmap,k__390__auto__,G__93106)));
}
}
}
});
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = (function (this__387__auto__,entry__388__auto__){
var this__93117 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__388__auto__)))
{return cljs.core._assoc.call(null,this__387__auto__,cljs.core._nth.call(null,entry__388__auto__,0),cljs.core._nth.call(null,entry__388__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__387__auto__,entry__388__auto__);
}
});
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = (function (this__394__auto__){
var this__93118 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__93118.name),cljs.core.vector.call(null,"﷐'email",this__93118.email),cljs.core.vector.call(null,"﷐'twitter",this__93118.twitter)]),this__93118.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = (function (this__396__auto__,opts__397__auto__){
var this__93119 = this;
var pr_pair__398__auto____93120 = (function (keyval__399__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__397__auto__,keyval__399__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__398__auto____93120,cljs.core.str.call(null,"#","prezo.atom.UserModel","{"),", ","}",opts__397__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__93119.name),cljs.core.vector.call(null,"﷐'email",this__93119.email),cljs.core.vector.call(null,"﷐'twitter",this__93119.twitter)]),this__93119.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = (function (this__386__auto__){
var this__93121 = this;
return (3 + cljs.core.count.call(null,this__93121.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = (function (this__377__auto__,other__378__auto__){
var this__93122 = this;
var and__3546__auto____93123 = (this__377__auto__.constructor === other__378__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____93123))
{return cljs.core.equiv_map.call(null,this__377__auto__,other__378__auto__);
} else
{return and__3546__auto____93123;
}
});
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = (function (this__380__auto__,G__93106){
var this__93124 = this;
return (new prezo.atom.UserModel(this__93124.name,this__93124.email,this__93124.twitter,G__93106,this__93124.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = (function (this__379__auto__){
var this__93125 = this;
return this__93125.__meta;
});
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = (function (this__391__auto__,k__392__auto__){
var this__93126 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'name","﷐'email","﷐'twitter"]),k__392__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__391__auto__),this__93126.__meta),k__392__auto__);
} else
{return (new prezo.atom.UserModel(this__93126.name,this__93126.email,this__93126.twitter,this__93126.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__93126.__extmap,k__392__auto__))));
}
});
prezo.atom.UserModel.cljs$core$IPrintable$_pr_seq = (function (this__423__auto__){
return cljs.core.list.call(null,"prezo.atom.UserModel");
});
prezo.atom.__GT_UserModel = (function __GT_UserModel(name,email,twitter){
return (new prezo.atom.UserModel(name,email,twitter));
});
prezo.atom.map__GT_UserModel = (function map__GT_UserModel(G__93107){
return (new prezo.atom.UserModel("﷐'name".call(null,G__93107),"﷐'email".call(null,G__93107),"﷐'twitter".call(null,G__93107),null,cljs.core.dissoc.call(null,G__93107,"﷐'name","﷐'email","﷐'twitter")));
});
prezo.atom.UserModel;
prezo.atom.my_user = cljs.core.atom.call(null,(new prezo.atom.UserModel("Creighton Kirkendall","ckirkendall@gmail.com","@crkirkendall")));
prezo.atom.user_validator = (function user_validator(new_val){
var check_map__93131 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'email","﷐'twitter"],{"﷐'name":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/\S+.*/,"﷐'name".call(null,new_val)))),"﷐'email":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/.+@.+\..+/,"﷐'email".call(null,new_val)))),"﷐'twitter":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/@\S+/,"﷐'twitter".call(null,new_val))))});

if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,check_map__93131))))
{throw (new prezo.atom.FormError(check_map__93131));
} else
{return new_val;
}
});
cljs.core.set_validator_BANG_.call(null,prezo.atom.my_user,prezo.atom.user_validator);
cljs.core.add_watch.call(null,prezo.atom.my_user,"﷐'user-view",(function (key,ref,old_val,new_val){
return prezo.atom.user_view.call(null,new_val);
}));
prezo.atom.user_view = (function user_view(user_val){
var nods__3015__auto____93134 = enfocus.core.nodes__GT_coll.call(null,prezo.util.by_id.call(null,"user-div"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93133){
enfocus.core.en_content.call(null,"﷐'name".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod93133,cljs.core.Vector.fromArray([".name"])));
enfocus.core.en_content.call(null,"﷐'email".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod93133,cljs.core.Vector.fromArray([".email"])));
enfocus.core.en_content.call(null,"﷐'twitter".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod93133,cljs.core.Vector.fromArray([".twitter"])));
return pnod93133;
}),nods__3015__auto____93134));
return prezo.util.by_id.call(null,"user-div");
});
prezo.atom.persist_user_form = (function persist_user_form(){
try{cljs.core.swap_BANG_.call(null,prezo.atom.my_user,cljs.core.merge,(function (){var nods__3026__auto____93141 = enfocus.core.nodes__GT_coll.call(null,document);
var map93140__93142 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__3027__auto____93143 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93139){
cljs.core.swap_BANG_.call(null,map93140__93142,cljs.core.assoc,"﷐'name",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod93139,cljs.core.Vector.fromArray(["#user-name"]))));
cljs.core.swap_BANG_.call(null,map93140__93142,cljs.core.assoc,"﷐'email",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod93139,cljs.core.Vector.fromArray(["#user-email"]))));
cljs.core.swap_BANG_.call(null,map93140__93142,cljs.core.assoc,"﷐'twitter",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod93139,cljs.core.Vector.fromArray(["#user-twitter"]))));
return pnod93139;
}),nods__3026__auto____93141));

return cljs.core.deref.call(null,map93140__93142);
})());
enfocus.core.en_content.call(null,"").call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
}catch (e93135){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,prezo.atom.FormError,e93135)))
{var e__93136 = e93135;

var errors__93137 = prezo.atom.get_errors.call(null,e__93136);
var inv_flds__93138 = cljs.core.filter.call(null,(function (p1__93132_SHARP_){
return cljs.core.not.call(null,p1__93132_SHARP_.call(null,errors__93137));
}),cljs.core.keys.call(null,errors__93137));

enfocus.core.en_content.call(null,cljs.core.str.call(null,"The following fields where invalid:",cljs.core.pr_str.call(null,inv_flds__93138))).call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e93135;
} else
{return null;
}
}
}});
