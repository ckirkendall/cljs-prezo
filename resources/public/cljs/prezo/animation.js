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
var coord__81908 = (new goog.math.Coordinate(relx,rely));

return enfocus.core.chainable_standard.call(null,(function (node){
return goog.positioning.positionAtAnchor.call(null,anchor,0,node,0,coord__81908);
}));
});
prezo.animation.call_out = (function call_out(node,txt,p__81909){
var map__81910__81914 = p__81909;
var map__81910__81915 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__81910__81914))?cljs.core.apply.call(null,cljs.core.hash_map,map__81910__81914):map__81910__81914);
var fsize__81916 = cljs.core.get.call(null,map__81910__81915,"﷐'font-size","4.4em");
var vec__81911__81917 = cljs.core.get.call(null,map__81910__81915,"﷐'loc");
var x__81918 = cljs.core.nth.call(null,vec__81911__81917,0,null);
var y__81919 = cljs.core.nth.call(null,vec__81911__81917,1,null);
var vec__81912__81920 = cljs.core.get.call(null,map__81910__81915,"﷐'size");
var w__81921 = cljs.core.nth.call(null,vec__81912__81920,0,null);
var h__81922 = cljs.core.nth.call(null,vec__81912__81920,1,null);
var vec__81913__81923 = cljs.core.get.call(null,map__81910__81915,"﷐'font-offset",cljs.core.Vector.fromArray([5,10]));
var fx__81924 = cljs.core.nth.call(null,vec__81913__81923,0,null);
var fy__81925 = cljs.core.nth.call(null,vec__81913__81923,1,null);

var div1__81926 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));
var div2__81927 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));

var nods__3015__auto____81929 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81928){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div class='call-block' id='",div1__81926,"' style='display: none; position: fixed;'></div>","<div class='call-text' id='",div2__81927,"' style='display: none; position: fixed;'>",txt,"</div>"))).call(null,enfocus.core.css_select.call(null,"",pnod81928,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__3190__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,x__81918,y__81919).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return enfocus.core.en_resize.call(null,w__81921,h__81922,500,null,null).call(null,pnod__3189__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod81928,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div1__81926)])));
(function (pnod__3190__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,(x__81918 + fx__81924),((y__81919 + h__81922) + fy__81925)).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__81916).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____81931 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81930){
return pnod81930;
}),nods__3015__auto____81931));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3168__auto__);
}),600);
})).call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__3189__auto__);
}));
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod81928,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div2__81927)])));
return pnod81928;
}),nods__3015__auto____81929));
return document;
});
prezo.animation.scary_parens = (function scary_parens(){
var G__81932__81933 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__81932__81933))
{var i__81934 = cljs.core.first.call(null,G__81932__81933);
var G__81932__81935 = G__81932__81933;

while(true){
var win_size__81936 = goog.dom.getViewportSize.call(null);
var colors__81937 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__81938 = cljs.core.str.call(null,"paren",i__81934);
var color__81939 = cljs.core.nth.call(null,colors__81937,cljs.core.rand_int.call(null,17));
var fsize__81940 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__81941 = cljs.core.rand_int.call(null,win_size__81936.width);
var height__81942 = cljs.core.rand_int.call(null,win_size__81936.height);
var dly__81943 = cljs.core.rand_int.call(null,3000);

var nods__3015__auto____81945 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__81934,G__81932__81935){
return (function (pnod81944){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__81938,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod81944,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__81941,height__81942,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__81940),enfocus.core.en_set_style.call(null,"﷐'color",color__81939),enfocus.core.chainable_standard.call(null,((function (i__81934,G__81932__81935){
return (function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,((function (i__81934,G__81932__81935){
return (function (){
return (function (){var nods__3015__auto____81947 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__81934,G__81932__81935){
return (function (pnod81946){
return pnod81946;
});})(i__81934,G__81932__81935))
,nods__3015__auto____81947));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__3168__auto__);
});})(i__81934,G__81932__81935))
,dly__81943);
});})(i__81934,G__81932__81935))
)).call(null,enfocus.core.css_select.call(null,"",pnod81944,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__81938)])));
return pnod81944;
});})(i__81934,G__81932__81935))
,nods__3015__auto____81945));
document;
var temp__3698__auto____81948 = cljs.core.next.call(null,G__81932__81935);

if(cljs.core.truth_(temp__3698__auto____81948))
{var G__81932__81949 = temp__3698__auto____81948;

{
var G__81950 = cljs.core.first.call(null,G__81932__81949);
var G__81951 = G__81932__81949;
i__81934 = G__81950;
G__81932__81935 = G__81951;
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
