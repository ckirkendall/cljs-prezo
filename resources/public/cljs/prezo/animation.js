goog.provide('prezo.animation');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.positioning');
goog.require('goog.math');
/**
* this is an example of a custom transform for enfocus
*/
prezo.animation.pos_rel_anchor = (function pos_rel_anchor(anchor,relx,rely){
var coord__93144 = (new goog.math.Coordinate(relx,rely));

return enfocus.core.chainable_standard.call(null,(function (node){
return goog.positioning.positionAtAnchor.call(null,anchor,0,node,0,coord__93144);
}));
});
prezo.animation.call_out = (function call_out(node,txt,p__93145){
var map__93146__93150 = p__93145;
var map__93146__93151 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__93146__93150))?cljs.core.apply.call(null,cljs.core.hash_map,map__93146__93150):map__93146__93150);
var fsize__93152 = cljs.core.get.call(null,map__93146__93151,"﷐'font-size","4.4em");
var vec__93147__93153 = cljs.core.get.call(null,map__93146__93151,"﷐'loc");
var x__93154 = cljs.core.nth.call(null,vec__93147__93153,0,null);
var y__93155 = cljs.core.nth.call(null,vec__93147__93153,1,null);
var vec__93148__93156 = cljs.core.get.call(null,map__93146__93151,"﷐'size");
var w__93157 = cljs.core.nth.call(null,vec__93148__93156,0,null);
var h__93158 = cljs.core.nth.call(null,vec__93148__93156,1,null);
var vec__93149__93159 = cljs.core.get.call(null,map__93146__93151,"﷐'font-offset",cljs.core.Vector.fromArray([5,10]));
var fx__93160 = cljs.core.nth.call(null,vec__93149__93159,0,null);
var fy__93161 = cljs.core.nth.call(null,vec__93149__93159,1,null);

var div1__93162 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));
var div2__93163 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));

var nods__3015__auto____93165 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93164){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div class='call-block' id='",div1__93162,"' style='display: none; position: fixed;'></div>","<div class='call-text' id='",div2__93163,"' style='display: none; position: fixed;'>",txt,"</div>"))).call(null,enfocus.core.css_select.call(null,"",pnod93164,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__3190__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,x__93154,y__93155).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return enfocus.core.en_resize.call(null,w__93157,h__93158,500,null,null).call(null,pnod__3189__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod93164,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div1__93162)])));
(function (pnod__3190__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,(x__93154 + fx__93160),((y__93155 + h__93158) + fy__93161)).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__93152).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____93167 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93166){
return pnod93166;
}),nods__3015__auto____93167));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3168__auto__);
}),600);
})).call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__3189__auto__);
}));
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod93164,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div2__93163)])));
return pnod93164;
}),nods__3015__auto____93165));
return document;
});
prezo.animation.scary_parens = (function scary_parens(){
var G__93168__93169 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__93168__93169))
{var i__93170 = cljs.core.first.call(null,G__93168__93169);
var G__93168__93171 = G__93168__93169;

while(true){
var win_size__93172 = goog.dom.getViewportSize.call(null);
var colors__93173 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__93174 = cljs.core.str.call(null,"paren",i__93170);
var color__93175 = cljs.core.nth.call(null,colors__93173,cljs.core.rand_int.call(null,17));
var fsize__93176 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__93177 = cljs.core.rand_int.call(null,win_size__93172.width);
var height__93178 = cljs.core.rand_int.call(null,win_size__93172.height);
var dly__93179 = cljs.core.rand_int.call(null,3000);

var nods__3015__auto____93181 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__93170,G__93168__93171){
return (function (pnod93180){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__93174,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod93180,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__93177,height__93178,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__93176),enfocus.core.en_set_style.call(null,"﷐'color",color__93175),enfocus.core.chainable_standard.call(null,((function (i__93170,G__93168__93171){
return (function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,((function (i__93170,G__93168__93171){
return (function (){
return (function (){var nods__3015__auto____93183 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__93170,G__93168__93171){
return (function (pnod93182){
return pnod93182;
});})(i__93170,G__93168__93171))
,nods__3015__auto____93183));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3168__auto__);
});})(i__93170,G__93168__93171))
,dly__93179);
});})(i__93170,G__93168__93171))
)).call(null,enfocus.core.css_select.call(null,"",pnod93180,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__93174)])));
return pnod93180;
});})(i__93170,G__93168__93171))
,nods__3015__auto____93181));
document;
var temp__3698__auto____93184 = cljs.core.next.call(null,G__93168__93171);

if(cljs.core.truth_(temp__3698__auto____93184))
{var G__93168__93185 = temp__3698__auto____93184;

{
var G__93186 = cljs.core.first.call(null,G__93168__93185);
var G__93187 = G__93168__93185;
i__93170 = G__93186;
G__93168__93171 = G__93187;
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
