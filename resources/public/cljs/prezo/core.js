goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____38250 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38249){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__38248_SHARP_){
var nods__2582__auto____38252 = enfocus.core.nodes__GT_coll.call(null,p1__38248_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38251){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod38251,cljs.core.Vector.fromArray([".slide"])));
return pnod38251;
}),nods__2582__auto____38252));
return p1__38248_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod38249,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod38249;
}),nods__2582__auto____38250));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____38254 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38253){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod38253,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod38253;
}),nods__2582__auto____38254));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__38255 = goog.dom.getViewportSize.call(null);
var width__38256 = (size__38255.width - 40);
var height__38257 = (size__38255.height - 80);

return prezo.core.resize_pane.call(null,width__38256,height__38257);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__38258 = goog.dom.getViewportSize.call(null);
var width__38259 = (size__38258.width - 40);
var height__38260 = (size__38258.height - 80);

prezo.core.setup_pane.call(null,width__38259,height__38260);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2582__auto____38263 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38262){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod38262,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod38262;
}),nods__2582__auto____38263));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__38261_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__38261_SHARP_.keyCode);
})).call(null,document);
return document;
});
prezo.core.disable_nav_keys = (function disable_nav_keys(){
enfocus.core.en_remove_listeners.call(null,"﷐'keydown").call(null,document);
return document;
});
window.onload = (function (){
prezo.core.enable_nav_keys.call(null);
return prezo.core.start.call(null);
});
enfocus.core.load_remote_dom.call(null,"slides/why-clojure.html");
prezo.core.slide1 = (function slide1(){
var vec__38266__38267 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym38264__38268 = cljs.core.nth.call(null,vec__38266__38267,0,null);
var pnod38265__38269 = cljs.core.nth.call(null,vec__38266__38267,1,null);
var pnod38265__38270 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38265__38269):pnod38265__38269);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38264__38268,pnod38265__38270);
return enfocus.core.remove_node_return_child.call(null,pnod38265__38270);
} else
{return pnod38265__38270;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__38273__38274 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym38271__38275 = cljs.core.nth.call(null,vec__38273__38274,0,null);
var pnod38272__38276 = cljs.core.nth.call(null,vec__38273__38274,1,null);
var pnod38272__38277 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38272__38276):pnod38272__38276);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38271__38275,pnod38272__38277);
return enfocus.core.remove_node_return_child.call(null,pnod38272__38277);
} else
{return pnod38272__38277;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__38280__38281 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym38278__38282 = cljs.core.nth.call(null,vec__38280__38281,0,null);
var pnod38279__38283 = cljs.core.nth.call(null,vec__38280__38281,1,null);
var pnod38279__38284 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38279__38283):pnod38279__38283);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38278__38282,pnod38279__38284);
return enfocus.core.remove_node_return_child.call(null,pnod38279__38284);
} else
{return pnod38279__38284;
}
});
enfocus.core.load_remote_dom.call(null,"slides/rainbows.html");
prezo.core.slide4 = (function slide4(){
var vec__38287__38288 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})]));
var id_sym38285__38289 = cljs.core.nth.call(null,vec__38287__38288,0,null);
var pnod38286__38290 = cljs.core.nth.call(null,vec__38287__38288,1,null);
var pnod38286__38291 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38286__38290):pnod38286__38290);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38285__38289,pnod38286__38291);
return enfocus.core.remove_node_return_child.call(null,pnod38286__38291);
} else
{return pnod38286__38291;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__38294__38295 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym38292__38296 = cljs.core.nth.call(null,vec__38294__38295,0,null);
var pnod38293__38297 = cljs.core.nth.call(null,vec__38294__38295,1,null);
var pnod38293__38298 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38293__38297):pnod38293__38297);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38292__38296,pnod38293__38298);
return enfocus.core.remove_node_return_child.call(null,pnod38293__38298);
} else
{return pnod38293__38298;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__38301__38302 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym38299__38303 = cljs.core.nth.call(null,vec__38301__38302,0,null);
var pnod38300__38304 = cljs.core.nth.call(null,vec__38301__38302,1,null);
var pnod38300__38305 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38300__38304):pnod38300__38304);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38299__38303,pnod38300__38305);
return enfocus.core.remove_node_return_child.call(null,pnod38300__38305);
} else
{return pnod38300__38305;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__38308__38309 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym38306__38310 = cljs.core.nth.call(null,vec__38308__38309,0,null);
var pnod38307__38311 = cljs.core.nth.call(null,vec__38308__38309,1,null);
var pnod38307__38312 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38307__38311):pnod38307__38311);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38306__38310,pnod38307__38312);
return enfocus.core.remove_node_return_child.call(null,pnod38307__38312);
} else
{return pnod38307__38312;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__38315__38316 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym38313__38317 = cljs.core.nth.call(null,vec__38315__38316,0,null);
var pnod38314__38318 = cljs.core.nth.call(null,vec__38315__38316,1,null);
var pnod38314__38319 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38314__38318):pnod38314__38318);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38313__38317,pnod38314__38319);
return enfocus.core.remove_node_return_child.call(null,pnod38314__38319);
} else
{return pnod38314__38319;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__38322__38323 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym38320__38324 = cljs.core.nth.call(null,vec__38322__38323,0,null);
var pnod38321__38325 = cljs.core.nth.call(null,vec__38322__38323,1,null);
var pnod38321__38326 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38321__38325):pnod38321__38325);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38320__38324,pnod38321__38326);
return enfocus.core.remove_node_return_child.call(null,pnod38321__38326);
} else
{return pnod38321__38326;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__38329__38330 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym38327__38331 = cljs.core.nth.call(null,vec__38329__38330,0,null);
var pnod38328__38332 = cljs.core.nth.call(null,vec__38329__38330,1,null);
var pnod38328__38333 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38328__38332):pnod38328__38332);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38327__38331,pnod38328__38333);
return enfocus.core.remove_node_return_child.call(null,pnod38328__38333);
} else
{return pnod38328__38333;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__38336__38337 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym38334__38338 = cljs.core.nth.call(null,vec__38336__38337,0,null);
var pnod38335__38339 = cljs.core.nth.call(null,vec__38336__38337,1,null);
var pnod38335__38340 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38335__38339):pnod38335__38339);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38334__38338,pnod38335__38340);
return enfocus.core.remove_node_return_child.call(null,pnod38335__38340);
} else
{return pnod38335__38340;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__38343__38344 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym38341__38345 = cljs.core.nth.call(null,vec__38343__38344,0,null);
var pnod38342__38346 = cljs.core.nth.call(null,vec__38343__38344,1,null);
var pnod38342__38347 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38342__38346):pnod38342__38346);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38341__38345,pnod38342__38347);
return enfocus.core.remove_node_return_child.call(null,pnod38342__38347);
} else
{return pnod38342__38347;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__38350__38351 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym38348__38352 = cljs.core.nth.call(null,vec__38350__38351,0,null);
var pnod38349__38353 = cljs.core.nth.call(null,vec__38350__38351,1,null);
var pnod38349__38354 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38349__38353):pnod38349__38353);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38348__38352,pnod38349__38354);
return enfocus.core.remove_node_return_child.call(null,pnod38349__38354);
} else
{return pnod38349__38354;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__38357__38358 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym38355__38359 = cljs.core.nth.call(null,vec__38357__38358,0,null);
var pnod38356__38360 = cljs.core.nth.call(null,vec__38357__38358,1,null);
var pnod38356__38361 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38356__38360):pnod38356__38360);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38355__38359,pnod38356__38361);
return enfocus.core.remove_node_return_child.call(null,pnod38356__38361);
} else
{return pnod38356__38361;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__38364__38365 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym38362__38366 = cljs.core.nth.call(null,vec__38364__38365,0,null);
var pnod38363__38367 = cljs.core.nth.call(null,vec__38364__38365,1,null);
var pnod38363__38368 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38363__38367):pnod38363__38367);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38362__38366,pnod38363__38368);
return enfocus.core.remove_node_return_child.call(null,pnod38363__38368);
} else
{return pnod38363__38368;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__38371__38372 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym38369__38373 = cljs.core.nth.call(null,vec__38371__38372,0,null);
var pnod38370__38374 = cljs.core.nth.call(null,vec__38371__38372,1,null);
var pnod38370__38375 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38370__38374):pnod38370__38374);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38369__38373,pnod38370__38375);
return enfocus.core.remove_node_return_child.call(null,pnod38370__38375);
} else
{return pnod38370__38375;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom.html");
prezo.core.slide17 = (function slide17(){
var vec__38378__38379 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom.html");
})]));
var id_sym38376__38380 = cljs.core.nth.call(null,vec__38378__38379,0,null);
var pnod38377__38381 = cljs.core.nth.call(null,vec__38378__38379,1,null);
var pnod38377__38382 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38377__38381):pnod38377__38381);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38376__38380,pnod38377__38382);
return enfocus.core.remove_node_return_child.call(null,pnod38377__38382);
} else
{return pnod38377__38382;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide18 = (function slide18(){
var vec__38385__38386 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym38383__38387 = cljs.core.nth.call(null,vec__38385__38386,0,null);
var pnod38384__38388 = cljs.core.nth.call(null,vec__38385__38386,1,null);
var pnod38384__38389 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod38384__38388):pnod38384__38388);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym38383__38387,pnod38384__38389);
return enfocus.core.remove_node_return_child.call(null,pnod38384__38389);
} else
{return pnod38384__38389;
}
});
prezo.core.action_index = cljs.core.atom.call(null,0);
prezo.core.actions = cljs.core.Vector.fromArray([(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide1);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide2);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide2);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"clj-is"),"Bold Claims!",cljs.core.ObjMap.fromObject(["﷐'font-size","﷐'loc","﷐'size"],{"﷐'font-size":"3em","﷐'loc":cljs.core.Vector.fromArray([-10,220]),"﷐'size":cljs.core.Vector.fromArray([300,100])}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide3);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide3);
return prezo.animation.scary_parens.call(null);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide5);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide6);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide6);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"inline-func"),"You will see this a lot.",cljs.core.ObjMap.fromObject(["﷐'font-size","﷐'loc","﷐'size"],{"﷐'font-size":"2em","﷐'loc":cljs.core.Vector.fromArray([0,87]),"﷐'size":cljs.core.Vector.fromArray([180,30])}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide7);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide8);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide8);
enfocus.core.en_content.call(null,prezo.content.decon_with_defualt_js).call(null,prezo.util.by_id.call(null,"js-decon"));
prezo.util.by_id.call(null,"js-decon");
prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"js-decon"),"",cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size"],{"﷐'loc":cljs.core.Vector.fromArray([0,5]),"﷐'size":cljs.core.Vector.fromArray([370,200])}));
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"decon"),"",cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size"],{"﷐'loc":cljs.core.Vector.fromArray([0,287]),"﷐'size":cljs.core.Vector.fromArray([450,93])}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide9);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide9);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"global-var"),"No one does this on purpose, right?",cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([0,5]),"﷐'size":cljs.core.Vector.fromArray([200,30]),"﷐'font-offset":cljs.core.Vector.fromArray([150,-60]),"﷐'font-size":"1.5em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide10);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide11);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide12);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide12);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"ns-def"),prezo.content.ns_use_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([60,22]),"﷐'size":cljs.core.Vector.fromArray([365,56]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide12);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"ns-def"),prezo.content.ns_require_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([60,75]),"﷐'size":cljs.core.Vector.fromArray([280,20]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide12);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"ns-body"),prezo.content.ns_proto_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([5,75]),"﷐'size":cljs.core.Vector.fromArray([310,90]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide13);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide14);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"js-plugin-def"),prezo.content.ex1_js_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([30,20]),"﷐'size":cljs.core.Vector.fromArray([310,90]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide15);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide15);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"cljs-plugin-def"),prezo.content.ex1_cljs_func_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([10,38]),"﷐'size":cljs.core.Vector.fromArray([420,50]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide15);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"cljs-plugin-def"),prezo.content.ex1_cljs_def_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([120,38]),"﷐'size":cljs.core.Vector.fromArray([320,20]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide15);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"cljs-plugin-call"),prezo.content.ex1_cljs_macro_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([7,7]),"﷐'size":cljs.core.Vector.fromArray([275,60]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide16);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide16);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"cljs-proto-def"),prezo.content.ex2_proto_def_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([7,7]),"﷐'size":cljs.core.Vector.fromArray([580,50]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide16);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"cljs-proto-call"),prezo.content.ex2_proto_ep_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([7,7]),"﷐'size":cljs.core.Vector.fromArray([440,190]),"﷐'font-offset":cljs.core.Vector.fromArray([455,-190]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide16);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"cljs-proto-call"),prezo.content.ex2_proto_et_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([7,200]),"﷐'size":cljs.core.Vector.fromArray([400,50]),"﷐'font-offset":cljs.core.Vector.fromArray([415,-200]),"﷐'font-size":"1em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide17);
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide18);
prezo.atom.user_view.call(null,cljs.core.deref.call(null,prezo.atom.my_user));
var nods__2582__auto____38391 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38390){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod38390,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod38390,cljs.core.Vector.fromArray(["input"])));
return pnod38390;
}),nods__2582__auto____38391));
return document;
})]);
prezo.core.back_key_codes = cljs.core.set([66,37,38,8,80]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode)))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__38392_SHARP_){
return ((p1__38392_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__38393_SHARP_){
return ((p1__38393_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__38394 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__38394.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____38396 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38395){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod38395,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod38395,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod38395,cljs.core.Vector.fromArray([".slide"])));
return pnod38395;
}),nods__2582__auto____38396));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____38398 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod38397){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod38397,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod38397,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=0)").call(null,enfocus.core.css_select.call(null,"",pnod38397,cljs.core.Vector.fromArray([".slide"])));
return pnod38397;
}),nods__2582__auto____38398));
return document;
});
