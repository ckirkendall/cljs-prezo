goog.provide('cinjs_prezo.core');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.dom');
cinjs_prezo.core.FormException = {};
cinjs_prezo.core.get_field_error = (function get_field_error(this$,ky){
if(cljs.core.truth_((function (){var and__3546__auto____12398 = this$;

if(cljs.core.truth_(and__3546__auto____12398))
{return this$.cinjs_prezo$core$FormException$get_field_error;
} else
{return and__3546__auto____12398;
}
})()))
{return this$.cinjs_prezo$core$FormException$get_field_error(this$,ky);
} else
{return (function (){var or__3548__auto____12399 = (cinjs_prezo.core.get_field_error[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____12399))
{return or__3548__auto____12399;
} else
{var or__3548__auto____12400 = (cinjs_prezo.core.get_field_error["_"]);

if(cljs.core.truth_(or__3548__auto____12400))
{return or__3548__auto____12400;
} else
{throw cljs.core.missing_protocol.call(null,"FormException.get-field-error",this$);
}
}
})().call(null,this$,ky);
}
});

/**
* @constructor
*/
cinjs_prezo.core.FormError = (function (errors){
this.errors = errors;
})
cinjs_prezo.core.FormError.prototype.cinjs_prezo$core$FormException$ = true;
cinjs_prezo.core.FormError.prototype.cinjs_prezo$core$FormException$get_field_error = (function (this$,field_key){
var this__12401 = this;
return this__12401.errors.call(null,field_key);
});
cinjs_prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____12404 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12403){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,cinjs_prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__12402_SHARP_){
var nods__2582__auto____12406 = enfocus.core.nodes__GT_coll.call(null,p1__12402_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12405){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod12405,cljs.core.Vector.fromArray([".slide"])));
return pnod12405;
}),nods__2582__auto____12406));
return p1__12402_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod12403,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod12403;
}),nods__2582__auto____12404));
return document;
});
cinjs_prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____12408 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12407){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod12407,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod12407;
}),nods__2582__auto____12408));
return document;
});
cinjs_prezo.core.resize_content_pane = (function resize_content_pane(){
var size__12409 = goog.dom.getViewportSize.call(null);
var width__12410 = (size__12409.width - 40);
var height__12411 = (size__12409.height - 80);

return cinjs_prezo.core.resize_pane.call(null,width__12410,height__12411);
});
cinjs_prezo.core.init_content_pane = (function init_content_pane(){
var size__12412 = goog.dom.getViewportSize.call(null);
var width__12413 = (size__12412.width - 40);
var height__12414 = (size__12412.height - 80);

cinjs_prezo.core.setup_pane.call(null,width__12413,height__12414);
enfocus.core.en_listen.call(null,"﷐'resize",cinjs_prezo.core.resize_content_pane).call(null,window);
return window;
});
cinjs_prezo.core.start = (function start(){
var nods__2582__auto____12417 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12416){
enfocus.core.en_listen.call(null,"﷐'click",cinjs_prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod12416,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod12416;
}),nods__2582__auto____12417));
return document;
});
window.onload = (function (){
enfocus.core.en_listen.call(null,"﷐'keypress",(function (p1__12415_SHARP_){
return cinjs_prezo.core.exec_action_BANG_.call(null,p1__12415_SHARP_.keyCode);
})).call(null,document);
document;
return cinjs_prezo.core.start.call(null);
});
cinjs_prezo.core.bold_claims = (function bold_claims(){
var nods__2582__auto____12419 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12418){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='bclaims1' style='display: none; position: fixed'><div>","<div id='bclaims2' style='display: none; position: fixed'>Bold Claims<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod12418,cljs.core.Vector.fromArray(["#content-pane"])));
(function (pnod__2757__auto__){
return enfocus.core.en_move.call(null,40,370,0,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'border","3px solid #ff0000").call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return enfocus.core.en_resize.call(null,300,100,500,null,null).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod12418,cljs.core.Vector.fromArray(["#bclaims1"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2735__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2582__auto____12421 = enfocus.core.nodes__GT_coll.call(null,(function (pnod__2757__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_move.call(null,40,480,0,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__2756__auto__);
}));
}));
}));
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12420){
return pnod12420;
}),nods__2582__auto____12421));
return (function (pnod__2757__auto__){
return enfocus.core.en_fade_out.call(null,1,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_move.call(null,40,480,0,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_set_style.call(null,"﷐'display","inline").call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return enfocus.core.en_fade_in.call(null,1000,null,null).call(null,pnod__2756__auto__);
}));
}));
}));
});
})().call(null,pnod__2735__auto__);
}),600);
})).call(null,enfocus.core.css_select.call(null,"",pnod12418,cljs.core.Vector.fromArray(["#bclaims2"])));
return pnod12418;
}),nods__2582__auto____12419));
return document;
});
cinjs_prezo.core.scary_parens = (function scary_parens(){
var G__12422__12423 = cljs.core.seq.call(null,cljs.core.range.call(null,1,200));

if(cljs.core.truth_(G__12422__12423))
{var i__12424 = cljs.core.first.call(null,G__12422__12423);
var G__12422__12425 = G__12422__12423;

while(true){
var win_size__12426 = goog.dom.getViewportSize.call(null);
var colors__12427 = cljs.core.Vector.fromArray(["aqua","black","blue","fuchsia","gray","grey","green","lime","maroon","navy","olive","purple","red","silver","teal","white","yellow"]);
var paren_id__12428 = cljs.core.str.call(null,"paren",i__12424);
var color__12429 = cljs.core.nth.call(null,colors__12427,cljs.core.rand_int.call(null,17));
var fsize__12430 = cljs.core.str.call(null,cljs.core.rand.call(null,14),"em");
var width__12431 = cljs.core.rand_int.call(null,win_size__12426.width);
var height__12432 = cljs.core.rand_int.call(null,win_size__12426.height);
var dly__12433 = cljs.core.rand_int.call(null,3000);

enfocus.core.log_debug.call(null,cljs.core.str.call(null,width__12431,":",height__12432,":",dly__12433));
var nods__2582__auto____12435 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__12424,G__12422__12425){
return (function (pnod12434){
enfocus.core.en_append.call(null,goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<div id='",paren_id__12428,"' style='display: none; position: fixed'>()<div>"))).call(null,enfocus.core.css_select.call(null,"",pnod12434,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,width__12431,height__12432,0,null,null),enfocus.core.en_set_style.call(null,"﷐'font-size",fsize__12430),enfocus.core.en_set_style.call(null,"﷐'color",color__12429),enfocus.core.chainable_standard.call(null,((function (i__12424,G__12422__12425){
return (function (pnod__2735__auto__){
return enfocus.core.setTimeout.call(null,((function (i__12424,G__12422__12425){
return (function (){
return (function (){var nods__2582__auto____12437 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__12424,G__12422__12425){
return (function (pnod12436){
return pnod12436;
});})(i__12424,G__12422__12425))
,nods__2582__auto____12437));
return enfocus.core.en_set_style.call(null,"﷐'display","inline");
})().call(null,pnod__2735__auto__);
});})(i__12424,G__12422__12425))
,dly__12433);
});})(i__12424,G__12422__12425))
)).call(null,enfocus.core.css_select.call(null,"",pnod12434,cljs.core.Vector.fromArray([cljs.core.str.call(null,"#",paren_id__12428)])));
return pnod12434;
});})(i__12424,G__12422__12425))
,nods__2582__auto____12435));
document;
var temp__3698__auto____12438 = cljs.core.next.call(null,G__12422__12425);

if(cljs.core.truth_(temp__3698__auto____12438))
{var G__12422__12439 = temp__3698__auto____12438;

{
var G__12440 = cljs.core.first.call(null,G__12422__12439);
var G__12441 = G__12422__12439;
i__12424 = G__12440;
G__12422__12425 = G__12441;
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
enfocus.core.load_remote_dom.call(null,"slides/why-clojure.html");
cinjs_prezo.core.slide1 = (function slide1(){
var vec__12444__12445 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym12442__12446 = cljs.core.nth.call(null,vec__12444__12445,0,null);
var pnod12443__12447 = cljs.core.nth.call(null,vec__12444__12445,1,null);
var pnod12443__12448 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12443__12447):pnod12443__12447);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12442__12446,pnod12443__12448);
return enfocus.core.remove_node_return_child.call(null,pnod12443__12448);
} else
{return pnod12443__12448;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
cinjs_prezo.core.slide2 = (function slide2(){
var vec__12451__12452 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym12449__12453 = cljs.core.nth.call(null,vec__12451__12452,0,null);
var pnod12450__12454 = cljs.core.nth.call(null,vec__12451__12452,1,null);
var pnod12450__12455 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12450__12454):pnod12450__12454);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12449__12453,pnod12450__12455);
return enfocus.core.remove_node_return_child.call(null,pnod12450__12455);
} else
{return pnod12450__12455;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
cinjs_prezo.core.slide3 = (function slide3(){
var vec__12458__12459 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym12456__12460 = cljs.core.nth.call(null,vec__12458__12459,0,null);
var pnod12457__12461 = cljs.core.nth.call(null,vec__12458__12459,1,null);
var pnod12457__12462 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12457__12461):pnod12457__12461);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12456__12460,pnod12457__12462);
return enfocus.core.remove_node_return_child.call(null,pnod12457__12462);
} else
{return pnod12457__12462;
}
});
enfocus.core.load_remote_dom.call(null,"slides/rainbows.html");
cinjs_prezo.core.slide4 = (function slide4(){
var vec__12465__12466 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})]));
var id_sym12463__12467 = cljs.core.nth.call(null,vec__12465__12466,0,null);
var pnod12464__12468 = cljs.core.nth.call(null,vec__12465__12466,1,null);
var pnod12464__12469 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12464__12468):pnod12464__12468);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12463__12467,pnod12464__12469);
return enfocus.core.remove_node_return_child.call(null,pnod12464__12469);
} else
{return pnod12464__12469;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
cinjs_prezo.core.slide5 = (function slide5(){
var vec__12472__12473 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym12470__12474 = cljs.core.nth.call(null,vec__12472__12473,0,null);
var pnod12471__12475 = cljs.core.nth.call(null,vec__12472__12473,1,null);
var pnod12471__12476 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12471__12475):pnod12471__12475);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12470__12474,pnod12471__12476);
return enfocus.core.remove_node_return_child.call(null,pnod12471__12476);
} else
{return pnod12471__12476;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
cinjs_prezo.core.slide6 = (function slide6(){
var vec__12479__12480 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym12477__12481 = cljs.core.nth.call(null,vec__12479__12480,0,null);
var pnod12478__12482 = cljs.core.nth.call(null,vec__12479__12480,1,null);
var pnod12478__12483 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12478__12482):pnod12478__12482);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12477__12481,pnod12478__12483);
return enfocus.core.remove_node_return_child.call(null,pnod12478__12483);
} else
{return pnod12478__12483;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
cinjs_prezo.core.slide7 = (function slide7(){
var vec__12486__12487 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym12484__12488 = cljs.core.nth.call(null,vec__12486__12487,0,null);
var pnod12485__12489 = cljs.core.nth.call(null,vec__12486__12487,1,null);
var pnod12485__12490 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12485__12489):pnod12485__12489);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12484__12488,pnod12485__12490);
return enfocus.core.remove_node_return_child.call(null,pnod12485__12490);
} else
{return pnod12485__12490;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
cinjs_prezo.core.slide8 = (function slide8(){
var vec__12493__12494 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym12491__12495 = cljs.core.nth.call(null,vec__12493__12494,0,null);
var pnod12492__12496 = cljs.core.nth.call(null,vec__12493__12494,1,null);
var pnod12492__12497 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12492__12496):pnod12492__12496);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12491__12495,pnod12492__12497);
return enfocus.core.remove_node_return_child.call(null,pnod12492__12497);
} else
{return pnod12492__12497;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
cinjs_prezo.core.slide9 = (function slide9(){
var vec__12500__12501 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym12498__12502 = cljs.core.nth.call(null,vec__12500__12501,0,null);
var pnod12499__12503 = cljs.core.nth.call(null,vec__12500__12501,1,null);
var pnod12499__12504 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12499__12503):pnod12499__12503);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12498__12502,pnod12499__12504);
return enfocus.core.remove_node_return_child.call(null,pnod12499__12504);
} else
{return pnod12499__12504;
}
});
enfocus.core.load_remote_dom.call(null,"slides/macros.html");
cinjs_prezo.core.slide10 = (function slide10(){
var vec__12507__12508 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
})]));
var id_sym12505__12509 = cljs.core.nth.call(null,vec__12507__12508,0,null);
var pnod12506__12510 = cljs.core.nth.call(null,vec__12507__12508,1,null);
var pnod12506__12511 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12506__12510):pnod12506__12510);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12505__12509,pnod12506__12511);
return enfocus.core.remove_node_return_child.call(null,pnod12506__12511);
} else
{return pnod12506__12511;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom.html");
cinjs_prezo.core.slide11 = (function slide11(){
var vec__12514__12515 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom.html");
})]));
var id_sym12512__12516 = cljs.core.nth.call(null,vec__12514__12515,0,null);
var pnod12513__12517 = cljs.core.nth.call(null,vec__12514__12515,1,null);
var pnod12513__12518 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod12513__12517):pnod12513__12517);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym12512__12516,pnod12513__12518);
return enfocus.core.remove_node_return_child.call(null,pnod12513__12518);
} else
{return pnod12513__12518;
}
});
cinjs_prezo.core.action_index = cljs.core.atom.call(null,0);
cinjs_prezo.core.actions = cljs.core.Vector.fromArray([(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide1);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide2);
}),(function actions(){
cinjs_prezo.core.reset_slide.call(null,cinjs_prezo.core.slide2);
return cinjs_prezo.core.bold_claims.call(null);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide3);
}),(function actions(){
cinjs_prezo.core.reset_slide.call(null,cinjs_prezo.core.slide3);
return cinjs_prezo.core.scary_parens.call(null);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide4);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide5);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide6);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide7);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide8);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide9);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide10);
}),(function actions(){
return cinjs_prezo.core.transition_slide.call(null,cinjs_prezo.core.slide11);
})]);
cinjs_prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_(cljs.core._EQ_.call(null,keycode,98)))
{cljs.core.swap_BANG_.call(null,cinjs_prezo.core.action_index,(function (p1__12519_SHARP_){
return ((p1__12519_SHARP_ - 1) % cljs.core.count.call(null,cinjs_prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,keycode,115)))
{cljs.core.reset_BANG_.call(null,cinjs_prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,cinjs_prezo.core.action_index,(function (p1__12520_SHARP_){
return ((p1__12520_SHARP_ + 1) % cljs.core.count.call(null,cinjs_prezo.core.actions));
}));
} else
{}
}
}
var func__12521 = cljs.core.nth.call(null,cinjs_prezo.core.actions,cljs.core.deref.call(null,cinjs_prezo.core.action_index));

return func__12521.call(null);
});
cinjs_prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____12523 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12522){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod12522,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod12522,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod12522,cljs.core.Vector.fromArray([".slide"])));
return pnod12522;
}),nods__2582__auto____12523));
return document;
});
cinjs_prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____12525 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod12524){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod12524,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod12524,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=0)").call(null,enfocus.core.css_select.call(null,"",pnod12524,cljs.core.Vector.fromArray([".slide"])));
return pnod12524;
}),nods__2582__auto____12525));
return document;
});
