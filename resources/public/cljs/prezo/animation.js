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
var coord__36340 = (new goog.math.Coordinate(relx,rely));

return enfocus.core.chainable_standard.call(null,(function (node){
return goog.positioning.positionAtAnchor.call(null,anchor,0,node,0,coord__36340);
}));
});
prezo.animation.call_out = (function call_out(node,txt,p__36341){
var map__36342__36346 = p__36341;
var map__36342__36347 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__36342__36346))?cljs.core.apply.call(null,cljs.core.hash_map,map__36342__36346):map__36342__36346);
var fsize__36348 = cljs.core.get.call(null,map__36342__36347,"﷐'font-size","4.4em");
var vec__36343__36349 = cljs.core.get.call(null,map__36342__36347,"﷐'loc");
var x__36350 = cljs.core.nth.call(null,vec__36343__36349,0,null);
var y__36351 = cljs.core.nth.call(null,vec__36343__36349,1,null);
var vec__36344__36352 = cljs.core.get.call(null,map__36342__36347,"﷐'size");
var w__36353 = cljs.core.nth.call(null,vec__36344__36352,0,null);
var h__36354 = cljs.core.nth.call(null,vec__36344__36352,1,null);
var vec__36345__36355 = cljs.core.get.call(null,map__36342__36347,"﷐'font-offset",cljs.core.Vector.fromArray([5,10]));
var fx__36356 = cljs.core.nth.call(null,vec__36345__36355,0,null);
var fy__36357 = cljs.core.nth.call(null,vec__36345__36355,1,null);

var div1__36358 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));
var div2__36359 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));

var nods__2582__auto____36361 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod36360){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div class='call-block' id='",div1__36358,"' style='display: none; position: fixed;'></div>","<div class='call-text' id='",div2__36359,"' style='display: none; position: fixed;'>",txt,"</div>"))).call(null,enfocus.core.css_select.call(null,"",pnod36360,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__2757__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,x__36350,y__36351).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return enfocus.core.en_resize.call(null,w__36353,h__36354,500,null,null).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod36360,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div1__36358)])));
(function (pnod__2757__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,(x__36350 + fx__36356),((y__36351 + h__36354) + fy__36357)).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__36348).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.chainable_standard.call(null,(function (pnod__2735__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2582__auto____36363 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod36362){
return pnod36362;
}),nods__2582__auto____36363));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__2735__auto__);
}),600);
})).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__2756__auto__);
}));
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod36360,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div2__36359)])));
return pnod36360;
}),nods__2582__auto____36361));
return document;
});
prezo.animation.scary_parens = (function scary_parens(){
var G__36364__36365 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__36364__36365))
{var i__36366 = cljs.core.first.call(null,G__36364__36365);
var G__36364__36367 = G__36364__36365;

while(true){
var win_size__36368 = goog.dom.getViewportSize.call(null);
var colors__36369 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__36370 = cljs.core.str.call(null,"paren",i__36366);
var color__36371 = cljs.core.nth.call(null,colors__36369,cljs.core.rand_int.call(null,17));
var fsize__36372 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__36373 = cljs.core.rand_int.call(null,win_size__36368.width);
var height__36374 = cljs.core.rand_int.call(null,win_size__36368.height);
var dly__36375 = cljs.core.rand_int.call(null,3000);

var nods__2582__auto____36377 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__36366,G__36364__36367){
return (function (pnod36376){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__36370,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod36376,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__36373,height__36374,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__36372),enfocus.core.en_set_style.call(null,"﷐'color",color__36371),enfocus.core.chainable_standard.call(null,((function (i__36366,G__36364__36367){
return (function (pnod__2735__auto__){
return enfocus.core.setTimeout.call(null,((function (i__36366,G__36364__36367){
return (function (){
return (function (){var nods__2582__auto____36379 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__36366,G__36364__36367){
return (function (pnod36378){
return pnod36378;
});})(i__36366,G__36364__36367))
,nods__2582__auto____36379));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__2735__auto__);
});})(i__36366,G__36364__36367))
,dly__36375);
});})(i__36366,G__36364__36367))
)).call(null,enfocus.core.css_select.call(null,"",pnod36376,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__36370)])));
return pnod36376;
});})(i__36366,G__36364__36367))
,nods__2582__auto____36377));
document;
var temp__3698__auto____36380 = cljs.core.next.call(null,G__36364__36367);

if(cljs.core.truth_(temp__3698__auto____36380))
{var G__36364__36381 = temp__3698__auto____36380;

{
var G__36382 = cljs.core.first.call(null,G__36364__36381);
var G__36383 = G__36364__36381;
i__36366 = G__36382;
G__36364__36367 = G__36383;
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
