goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____40272 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40271){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__40270_SHARP_){
var nods__2582__auto____40274 = enfocus.core.nodes__GT_coll.call(null,p1__40270_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40273){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40273,cljs.core.Vector.fromArray([".slide"])));
return pnod40273;
}),nods__2582__auto____40274));
return p1__40270_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod40271,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod40271;
}),nods__2582__auto____40272));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____40276 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40275){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40275,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod40275;
}),nods__2582__auto____40276));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__40277 = goog.dom.getViewportSize.call(null);
var width__40278 = (size__40277.width - 40);
var height__40279 = (size__40277.height - 80);

return prezo.core.resize_pane.call(null,width__40278,height__40279);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__40280 = goog.dom.getViewportSize.call(null);
var width__40281 = (size__40280.width - 40);
var height__40282 = (size__40280.height - 80);

prezo.core.setup_pane.call(null,width__40281,height__40282);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2582__auto____40285 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40284){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod40284,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod40284;
}),nods__2582__auto____40285));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__40283_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__40283_SHARP_.keyCode);
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
var vec__40288__40289 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym40286__40290 = cljs.core.nth.call(null,vec__40288__40289,0,null);
var pnod40287__40291 = cljs.core.nth.call(null,vec__40288__40289,1,null);
var pnod40287__40292 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40287__40291):pnod40287__40291);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40286__40290,pnod40287__40292);
return enfocus.core.remove_node_return_child.call(null,pnod40287__40292);
} else
{return pnod40287__40292;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__40295__40296 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym40293__40297 = cljs.core.nth.call(null,vec__40295__40296,0,null);
var pnod40294__40298 = cljs.core.nth.call(null,vec__40295__40296,1,null);
var pnod40294__40299 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40294__40298):pnod40294__40298);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40293__40297,pnod40294__40299);
return enfocus.core.remove_node_return_child.call(null,pnod40294__40299);
} else
{return pnod40294__40299;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__40302__40303 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym40300__40304 = cljs.core.nth.call(null,vec__40302__40303,0,null);
var pnod40301__40305 = cljs.core.nth.call(null,vec__40302__40303,1,null);
var pnod40301__40306 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40301__40305):pnod40301__40305);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40300__40304,pnod40301__40306);
return enfocus.core.remove_node_return_child.call(null,pnod40301__40306);
} else
{return pnod40301__40306;
}
});
enfocus.core.load_remote_dom.call(null,"slides/rainbows.html");
prezo.core.slide4 = (function slide4(){
var vec__40309__40310 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})]));
var id_sym40307__40311 = cljs.core.nth.call(null,vec__40309__40310,0,null);
var pnod40308__40312 = cljs.core.nth.call(null,vec__40309__40310,1,null);
var pnod40308__40313 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40308__40312):pnod40308__40312);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40307__40311,pnod40308__40313);
return enfocus.core.remove_node_return_child.call(null,pnod40308__40313);
} else
{return pnod40308__40313;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__40316__40317 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym40314__40318 = cljs.core.nth.call(null,vec__40316__40317,0,null);
var pnod40315__40319 = cljs.core.nth.call(null,vec__40316__40317,1,null);
var pnod40315__40320 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40315__40319):pnod40315__40319);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40314__40318,pnod40315__40320);
return enfocus.core.remove_node_return_child.call(null,pnod40315__40320);
} else
{return pnod40315__40320;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__40323__40324 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym40321__40325 = cljs.core.nth.call(null,vec__40323__40324,0,null);
var pnod40322__40326 = cljs.core.nth.call(null,vec__40323__40324,1,null);
var pnod40322__40327 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40322__40326):pnod40322__40326);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40321__40325,pnod40322__40327);
return enfocus.core.remove_node_return_child.call(null,pnod40322__40327);
} else
{return pnod40322__40327;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__40330__40331 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym40328__40332 = cljs.core.nth.call(null,vec__40330__40331,0,null);
var pnod40329__40333 = cljs.core.nth.call(null,vec__40330__40331,1,null);
var pnod40329__40334 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40329__40333):pnod40329__40333);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40328__40332,pnod40329__40334);
return enfocus.core.remove_node_return_child.call(null,pnod40329__40334);
} else
{return pnod40329__40334;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__40337__40338 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym40335__40339 = cljs.core.nth.call(null,vec__40337__40338,0,null);
var pnod40336__40340 = cljs.core.nth.call(null,vec__40337__40338,1,null);
var pnod40336__40341 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40336__40340):pnod40336__40340);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40335__40339,pnod40336__40341);
return enfocus.core.remove_node_return_child.call(null,pnod40336__40341);
} else
{return pnod40336__40341;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__40344__40345 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym40342__40346 = cljs.core.nth.call(null,vec__40344__40345,0,null);
var pnod40343__40347 = cljs.core.nth.call(null,vec__40344__40345,1,null);
var pnod40343__40348 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40343__40347):pnod40343__40347);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40342__40346,pnod40343__40348);
return enfocus.core.remove_node_return_child.call(null,pnod40343__40348);
} else
{return pnod40343__40348;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__40351__40352 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym40349__40353 = cljs.core.nth.call(null,vec__40351__40352,0,null);
var pnod40350__40354 = cljs.core.nth.call(null,vec__40351__40352,1,null);
var pnod40350__40355 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40350__40354):pnod40350__40354);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40349__40353,pnod40350__40355);
return enfocus.core.remove_node_return_child.call(null,pnod40350__40355);
} else
{return pnod40350__40355;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__40358__40359 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym40356__40360 = cljs.core.nth.call(null,vec__40358__40359,0,null);
var pnod40357__40361 = cljs.core.nth.call(null,vec__40358__40359,1,null);
var pnod40357__40362 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40357__40361):pnod40357__40361);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40356__40360,pnod40357__40362);
return enfocus.core.remove_node_return_child.call(null,pnod40357__40362);
} else
{return pnod40357__40362;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__40365__40366 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym40363__40367 = cljs.core.nth.call(null,vec__40365__40366,0,null);
var pnod40364__40368 = cljs.core.nth.call(null,vec__40365__40366,1,null);
var pnod40364__40369 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40364__40368):pnod40364__40368);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40363__40367,pnod40364__40369);
return enfocus.core.remove_node_return_child.call(null,pnod40364__40369);
} else
{return pnod40364__40369;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__40372__40373 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym40370__40374 = cljs.core.nth.call(null,vec__40372__40373,0,null);
var pnod40371__40375 = cljs.core.nth.call(null,vec__40372__40373,1,null);
var pnod40371__40376 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40371__40375):pnod40371__40375);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40370__40374,pnod40371__40376);
return enfocus.core.remove_node_return_child.call(null,pnod40371__40376);
} else
{return pnod40371__40376;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__40379__40380 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym40377__40381 = cljs.core.nth.call(null,vec__40379__40380,0,null);
var pnod40378__40382 = cljs.core.nth.call(null,vec__40379__40380,1,null);
var pnod40378__40383 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40378__40382):pnod40378__40382);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40377__40381,pnod40378__40383);
return enfocus.core.remove_node_return_child.call(null,pnod40378__40383);
} else
{return pnod40378__40383;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__40386__40387 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym40384__40388 = cljs.core.nth.call(null,vec__40386__40387,0,null);
var pnod40385__40389 = cljs.core.nth.call(null,vec__40386__40387,1,null);
var pnod40385__40390 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40385__40389):pnod40385__40389);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40384__40388,pnod40385__40390);
return enfocus.core.remove_node_return_child.call(null,pnod40385__40390);
} else
{return pnod40385__40390;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__40393__40394 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym40391__40395 = cljs.core.nth.call(null,vec__40393__40394,0,null);
var pnod40392__40396 = cljs.core.nth.call(null,vec__40393__40394,1,null);
var pnod40392__40397 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40392__40396):pnod40392__40396);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40391__40395,pnod40392__40397);
return enfocus.core.remove_node_return_child.call(null,pnod40392__40397);
} else
{return pnod40392__40397;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom1.html");
prezo.core.slide17 = (function slide17(){
var vec__40400__40401 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})]));
var id_sym40398__40402 = cljs.core.nth.call(null,vec__40400__40401,0,null);
var pnod40399__40403 = cljs.core.nth.call(null,vec__40400__40401,1,null);
var pnod40399__40404 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40399__40403):pnod40399__40403);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40398__40402,pnod40399__40404);
return enfocus.core.remove_node_return_child.call(null,pnod40399__40404);
} else
{return pnod40399__40404;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom2.html");
prezo.core.slide18 = (function slide18(){
var vec__40407__40408 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})]));
var id_sym40405__40409 = cljs.core.nth.call(null,vec__40407__40408,0,null);
var pnod40406__40410 = cljs.core.nth.call(null,vec__40407__40408,1,null);
var pnod40406__40411 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40406__40410):pnod40406__40410);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40405__40409,pnod40406__40411);
return enfocus.core.remove_node_return_child.call(null,pnod40406__40411);
} else
{return pnod40406__40411;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide19 = (function slide19(){
var vec__40414__40415 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym40412__40416 = cljs.core.nth.call(null,vec__40414__40415,0,null);
var pnod40413__40417 = cljs.core.nth.call(null,vec__40414__40415,1,null);
var pnod40413__40418 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40413__40417):pnod40413__40417);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40412__40416,pnod40413__40418);
return enfocus.core.remove_node_return_child.call(null,pnod40413__40418);
} else
{return pnod40413__40418;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide20 = (function slide20(){
var vec__40421__40422 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym40419__40423 = cljs.core.nth.call(null,vec__40421__40422,0,null);
var pnod40420__40424 = cljs.core.nth.call(null,vec__40421__40422,1,null);
var pnod40420__40425 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40420__40424):pnod40420__40424);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40419__40423,pnod40420__40425);
return enfocus.core.remove_node_return_child.call(null,pnod40420__40425);
} else
{return pnod40420__40425;
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
prezo.core.reset_slide.call(null,prezo.core.slide17);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"def-atom"),prezo.content.def_atom_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([5,5]),"﷐'size":cljs.core.Vector.fromArray([350,30]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide17);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"val-atom"),prezo.content.val_atom_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([5,5]),"﷐'size":cljs.core.Vector.fromArray([600,30]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide17);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"watch-atom"),prezo.content.watch_atom_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([5,5]),"﷐'size":cljs.core.Vector.fromArray([650,30]),"﷐'font-offset":cljs.core.Vector.fromArray([5,-120]),"﷐'font-size":"1em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide18);
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide19);
prezo.atom.user_view.call(null,cljs.core.deref.call(null,prezo.atom.my_user));
var nods__2582__auto____40427 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40426){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod40426,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod40426,cljs.core.Vector.fromArray(["input"])));
return pnod40426;
}),nods__2582__auto____40427));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide20);
})]);
prezo.core.back_key_codes = cljs.core.set([66,37,38,8,80]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode)))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__40428_SHARP_){
return ((p1__40428_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__40429_SHARP_){
return ((p1__40429_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__40430 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__40430.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____40432 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40431){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40431,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod40431,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40431,cljs.core.Vector.fromArray([".slide"])));
return pnod40431;
}),nods__2582__auto____40432));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____40434 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40433){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod40433,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod40433,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=0)").call(null,enfocus.core.css_select.call(null,"",pnod40433,cljs.core.Vector.fromArray([".slide"])));
return pnod40433;
}),nods__2582__auto____40434));
return document;
});
