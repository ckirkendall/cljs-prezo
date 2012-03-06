goog.provide('prezo.atom');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
prezo.atom.FormException = {};
prezo.atom.get_errors = (function get_errors(this$){
if(cljs.core.truth_((function (){var and__3546__auto____81866 = this$;

if(cljs.core.truth_(and__3546__auto____81866))
{return this$.prezo$atom$FormException$get_errors;
} else
{return and__3546__auto____81866;
}
})()))
{return this$.prezo$atom$FormException$get_errors(this$);
} else
{return (function (){var or__3548__auto____81867 = (prezo.atom.get_errors[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____81867))
{return or__3548__auto____81867;
} else
{var or__3548__auto____81868 = (prezo.atom.get_errors["_"]);

if(cljs.core.truth_(or__3548__auto____81868))
{return or__3548__auto____81868;
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
var this__81869 = this;
return this__81869.errors;
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
var this__81872 = this;
return cljs.core.hash_coll.call(null,this__376__auto__);
});
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = (function() {
var G__81891 = null;
var G__81891__81892 = (function (this__381__auto__,k__382__auto__){
var this__81873 = this;
return cljs.core._lookup.call(null,this__381__auto__,k__382__auto__,null);
});
var G__81891__81893 = (function (this__383__auto__,k__384__auto__,else__385__auto__){
var this__81874 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'name",this__81874.name,"﷐'email",this__81874.email,"﷐'twitter",this__81874.twitter),this__81874.__extmap),k__384__auto__,else__385__auto__);
});
G__81891 = function(this__383__auto__,k__384__auto__,else__385__auto__){
switch(arguments.length){
case  2 :
return G__81891__81892.call(this,this__383__auto__,k__384__auto__);
case  3 :
return G__81891__81893.call(this,this__383__auto__,k__384__auto__,else__385__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__81891;
})()
;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = (function (this__389__auto__,k__390__auto__,G__81870){
var this__81875 = this;
var pred__81876__81879 = cljs.core.identical_QMARK_;
var expr__81877__81880 = k__390__auto__;

if(cljs.core.truth_(pred__81876__81879.call(null,"﷐'name",expr__81877__81880)))
{return (new prezo.atom.UserModel(G__81870,this__81875.email,this__81875.twitter,this__81875.__meta,this__81875.__extmap));
} else
{if(cljs.core.truth_(pred__81876__81879.call(null,"﷐'email",expr__81877__81880)))
{return (new prezo.atom.UserModel(this__81875.name,G__81870,this__81875.twitter,this__81875.__meta,this__81875.__extmap));
} else
{if(cljs.core.truth_(pred__81876__81879.call(null,"﷐'twitter",expr__81877__81880)))
{return (new prezo.atom.UserModel(this__81875.name,this__81875.email,G__81870,this__81875.__meta,this__81875.__extmap));
} else
{return (new prezo.atom.UserModel(this__81875.name,this__81875.email,this__81875.twitter,this__81875.__meta,cljs.core.assoc.call(null,this__81875.__extmap,k__390__auto__,G__81870)));
}
}
}
});
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = (function (this__387__auto__,entry__388__auto__){
var this__81881 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__388__auto__)))
{return cljs.core._assoc.call(null,this__387__auto__,cljs.core._nth.call(null,entry__388__auto__,0),cljs.core._nth.call(null,entry__388__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__387__auto__,entry__388__auto__);
}
});
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = (function (this__394__auto__){
var this__81882 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__81882.name),cljs.core.vector.call(null,"﷐'email",this__81882.email),cljs.core.vector.call(null,"﷐'twitter",this__81882.twitter)]),this__81882.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = (function (this__396__auto__,opts__397__auto__){
var this__81883 = this;
var pr_pair__398__auto____81884 = (function (keyval__399__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__397__auto__,keyval__399__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__398__auto____81884,cljs.core.str.call(null,"#","prezo.atom.UserModel","{"),", ","}",opts__397__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'name",this__81883.name),cljs.core.vector.call(null,"﷐'email",this__81883.email),cljs.core.vector.call(null,"﷐'twitter",this__81883.twitter)]),this__81883.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = (function (this__386__auto__){
var this__81885 = this;
return (3 + cljs.core.count.call(null,this__81885.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = (function (this__377__auto__,other__378__auto__){
var this__81886 = this;
var and__3546__auto____81887 = (this__377__auto__.constructor === other__378__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____81887))
{return cljs.core.equiv_map.call(null,this__377__auto__,other__378__auto__);
} else
{return and__3546__auto____81887;
}
});
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = (function (this__380__auto__,G__81870){
var this__81888 = this;
return (new prezo.atom.UserModel(this__81888.name,this__81888.email,this__81888.twitter,G__81870,this__81888.__extmap));
});
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = (function (this__379__auto__){
var this__81889 = this;
return this__81889.__meta;
});
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = (function (this__391__auto__,k__392__auto__){
var this__81890 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'name","﷐'email","﷐'twitter"]),k__392__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__391__auto__),this__81890.__meta),k__392__auto__);
} else
{return (new prezo.atom.UserModel(this__81890.name,this__81890.email,this__81890.twitter,this__81890.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__81890.__extmap,k__392__auto__))));
}
});
prezo.atom.UserModel.cljs$core$IPrintable$_pr_seq = (function (this__423__auto__){
return cljs.core.list.call(null,"prezo.atom.UserModel");
});
prezo.atom.__GT_UserModel = (function __GT_UserModel(name,email,twitter){
return (new prezo.atom.UserModel(name,email,twitter));
});
prezo.atom.map__GT_UserModel = (function map__GT_UserModel(G__81871){
return (new prezo.atom.UserModel("﷐'name".call(null,G__81871),"﷐'email".call(null,G__81871),"﷐'twitter".call(null,G__81871),null,cljs.core.dissoc.call(null,G__81871,"﷐'name","﷐'email","﷐'twitter")));
});
prezo.atom.UserModel;
prezo.atom.my_user = cljs.core.atom.call(null,(new prezo.atom.UserModel("Creighton Kirkendall","ckirkendall@gmail.com","@crkirkendall")));
prezo.atom.user_validator = (function user_validator(new_val){
var check_map__81895 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'email","﷐'twitter"],{"﷐'name":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/\S+.*/,"﷐'name".call(null,new_val)))),"﷐'email":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/.+@.+\..+/,"﷐'email".call(null,new_val)))),"﷐'twitter":cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.re_matches.call(null,/@\S+/,"﷐'twitter".call(null,new_val))))});

if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,check_map__81895))))
{throw (new prezo.atom.FormError(check_map__81895));
} else
{return new_val;
}
});
cljs.core.set_validator_BANG_.call(null,prezo.atom.my_user,prezo.atom.user_validator);
cljs.core.add_watch.call(null,prezo.atom.my_user,"﷐'user-view",(function (key,ref,old_val,new_val){
return prezo.atom.user_view.call(null,new_val);
}));
prezo.atom.user_view = (function user_view(user_val){
var nods__3015__auto____81898 = enfocus.core.nodes__GT_coll.call(null,prezo.util.by_id.call(null,"user-div"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81897){
enfocus.core.en_content.call(null,"﷐'name".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod81897,cljs.core.Vector.fromArray([".name"])));
enfocus.core.en_content.call(null,"﷐'email".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod81897,cljs.core.Vector.fromArray([".email"])));
enfocus.core.en_content.call(null,"﷐'twitter".call(null,user_val)).call(null,enfocus.core.css_select.call(null,"",pnod81897,cljs.core.Vector.fromArray([".twitter"])));
return pnod81897;
}),nods__3015__auto____81898));
return prezo.util.by_id.call(null,"user-div");
});
prezo.atom.persist_user_form = (function persist_user_form(){
try{cljs.core.swap_BANG_.call(null,prezo.atom.my_user,cljs.core.merge,(function (){var nods__3026__auto____81905 = enfocus.core.nodes__GT_coll.call(null,document);
var map81904__81906 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var map_list__3027__auto____81907 = cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81903){
cljs.core.swap_BANG_.call(null,map81904__81906,cljs.core.assoc,"﷐'name",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod81903,cljs.core.Vector.fromArray(["#user-name"]))));
cljs.core.swap_BANG_.call(null,map81904__81906,cljs.core.assoc,"﷐'email",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod81903,cljs.core.Vector.fromArray(["#user-email"]))));
cljs.core.swap_BANG_.call(null,map81904__81906,cljs.core.assoc,"﷐'twitter",enfocus.core.extr_multi_node.call(null,(function (pnod__3206__auto__){
return pnod__3206__auto__.value;
})).call(null,enfocus.core.css_select.call(null,"",pnod81903,cljs.core.Vector.fromArray(["#user-twitter"]))));
return pnod81903;
}),nods__3026__auto____81905));

return cljs.core.deref.call(null,map81904__81906);
})());
enfocus.core.en_content.call(null,"").call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
}catch (e81899){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,prezo.atom.FormError,e81899)))
{var e__81900 = e81899;

var errors__81901 = prezo.atom.get_errors.call(null,e__81900);
var inv_flds__81902 = cljs.core.filter.call(null,(function (p1__81896_SHARP_){
return cljs.core.not.call(null,p1__81896_SHARP_.call(null,errors__81901));
}),cljs.core.keys.call(null,errors__81901));

enfocus.core.en_content.call(null,cljs.core.str.call(null,"The following fields where invalid:",cljs.core.pr_str.call(null,inv_flds__81902))).call(null,prezo.util.by_id.call(null,"user-form-errors"));
return prezo.util.by_id.call(null,"user-form-errors");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e81899;
} else
{return null;
}
}
}});
