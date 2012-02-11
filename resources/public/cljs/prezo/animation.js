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
var coord__3071 = (new goog.math.Coordinate(relx,rely));

return enfocus.core.chainable_standard.call(null,(function (node){
return goog.positioning.positionAtAnchor.call(null,anchor,0,node,0,coord__3071);
}));
});
prezo.animation.call_out = (function call_out(node,txt,p__3072){
var map__3073__3077 = p__3072;
var map__3073__3078 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3073__3077))?cljs.core.apply.call(null,cljs.core.hash_map,map__3073__3077):map__3073__3077);
var fsize__3079 = cljs.core.get.call(null,map__3073__3078,"﷐'font-size","4.4em");
var vec__3074__3080 = cljs.core.get.call(null,map__3073__3078,"﷐'loc");
var x__3081 = cljs.core.nth.call(null,vec__3074__3080,0,null);
var y__3082 = cljs.core.nth.call(null,vec__3074__3080,1,null);
var vec__3075__3083 = cljs.core.get.call(null,map__3073__3078,"﷐'size");
var w__3084 = cljs.core.nth.call(null,vec__3075__3083,0,null);
var h__3085 = cljs.core.nth.call(null,vec__3075__3083,1,null);
var vec__3076__3086 = cljs.core.get.call(null,map__3073__3078,"﷐'font-offset",cljs.core.Vector.fromArray([5,10]));
var fx__3087 = cljs.core.nth.call(null,vec__3076__3086,0,null);
var fy__3088 = cljs.core.nth.call(null,vec__3076__3086,1,null);

var div1__3089 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));
var div2__3090 = cljs.core.name.call(null,cljs.core.gensym.call(null,"div"));

var nods__2702__auto____3092 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3091){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div class='call-block' id='",div1__3089,"' style='display: none; position: fixed;'></div>","<div class='call-text' id='",div2__3090,"' style='display: none; position: fixed;'>",txt,"</div>"))).call(null,enfocus.core.css_select.call(null,"",pnod3091,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__2877__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,x__3081,y__3082).call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__2877__auto__,(function (pnod__2876__auto__){
return enfocus.core.en_resize.call(null,w__3084,h__3085,500,null,null).call(null,pnod__2876__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod3091,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div1__3089)])));
(function (pnod__2877__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return prezo.animation.pos_rel_anchor.call(null,node,(x__3081 + fx__3087),((y__3082 + h__3085) + fy__3088)).call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__3079).call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return enfocus.core.chainable_standard.call(null,(function (pnod__2855__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2702__auto____3094 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3093){
return pnod3093;
}),nods__2702__auto____3094));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__2855__auto__);
}),600);
})).call(null,pnod__2877__auto__,(function (pnod__2876__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__2876__auto__);
}));
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod3091,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",div2__3090)])));
return pnod3091;
}),nods__2702__auto____3092));
return document;
});
prezo.animation.scary_parens = (function scary_parens(){
var G__3095__3096 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__3095__3096))
{var i__3097 = cljs.core.first.call(null,G__3095__3096);
var G__3095__3098 = G__3095__3096;

while(true){
var win_size__3099 = goog.dom.getViewportSize.call(null);
var colors__3100 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__3101 = cljs.core.str.call(null,"paren",i__3097);
var color__3102 = cljs.core.nth.call(null,colors__3100,cljs.core.rand_int.call(null,17));
var fsize__3103 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__3104 = cljs.core.rand_int.call(null,win_size__3099.width);
var height__3105 = cljs.core.rand_int.call(null,win_size__3099.height);
var dly__3106 = cljs.core.rand_int.call(null,3000);

var nods__2702__auto____3108 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__3097,G__3095__3098){
return (function (pnod3107){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__3101,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod3107,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__3104,height__3105,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__3103),enfocus.core.en_set_style.call(null,"﷐'color",color__3102),enfocus.core.chainable_standard.call(null,((function (i__3097,G__3095__3098){
return (function (pnod__2855__auto__){
return enfocus.core.setTimeout.call(null,((function (i__3097,G__3095__3098){
return (function (){
return (function (){var nods__2702__auto____3110 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__3097,G__3095__3098){
return (function (pnod3109){
return pnod3109;
});})(i__3097,G__3095__3098))
,nods__2702__auto____3110));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__2855__auto__);
});})(i__3097,G__3095__3098))
,dly__3106);
});})(i__3097,G__3095__3098))
)).call(null,enfocus.core.css_select.call(null,"",pnod3107,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__3101)])));
return pnod3107;
});})(i__3097,G__3095__3098))
,nods__2702__auto____3108));
document;
var temp__3698__auto____3111 = cljs.core.next.call(null,G__3095__3098);

if(cljs.core.truth_(temp__3698__auto____3111))
{var G__3095__3112 = temp__3698__auto____3111;

{
var G__3113 = cljs.core.first.call(null,G__3095__3112);
var G__3114 = G__3095__3112;
i__3097 = G__3113;
G__3095__3098 = G__3114;
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
