goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____40437 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40436){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__40435_SHARP_){
var nods__2582__auto____40439 = enfocus.core.nodes__GT_coll.call(null,p1__40435_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40438){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40438,cljs.core.Vector.fromArray([".slide"])));
return pnod40438;
}),nods__2582__auto____40439));
return p1__40435_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod40436,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod40436;
}),nods__2582__auto____40437));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____40441 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40440){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40440,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod40440;
}),nods__2582__auto____40441));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__40442 = goog.dom.getViewportSize.call(null);
var width__40443 = (size__40442.width - 40);
var height__40444 = (size__40442.height - 80);

return prezo.core.resize_pane.call(null,width__40443,height__40444);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__40445 = goog.dom.getViewportSize.call(null);
var width__40446 = (size__40445.width - 40);
var height__40447 = (size__40445.height - 80);

prezo.core.setup_pane.call(null,width__40446,height__40447);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2582__auto____40450 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40449){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod40449,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod40449;
}),nods__2582__auto____40450));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__40448_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__40448_SHARP_.keyCode);
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
var vec__40453__40454 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym40451__40455 = cljs.core.nth.call(null,vec__40453__40454,0,null);
var pnod40452__40456 = cljs.core.nth.call(null,vec__40453__40454,1,null);
var pnod40452__40457 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40452__40456):pnod40452__40456);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40451__40455,pnod40452__40457);
return enfocus.core.remove_node_return_child.call(null,pnod40452__40457);
} else
{return pnod40452__40457;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__40460__40461 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym40458__40462 = cljs.core.nth.call(null,vec__40460__40461,0,null);
var pnod40459__40463 = cljs.core.nth.call(null,vec__40460__40461,1,null);
var pnod40459__40464 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40459__40463):pnod40459__40463);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40458__40462,pnod40459__40464);
return enfocus.core.remove_node_return_child.call(null,pnod40459__40464);
} else
{return pnod40459__40464;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__40467__40468 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym40465__40469 = cljs.core.nth.call(null,vec__40467__40468,0,null);
var pnod40466__40470 = cljs.core.nth.call(null,vec__40467__40468,1,null);
var pnod40466__40471 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40466__40470):pnod40466__40470);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40465__40469,pnod40466__40471);
return enfocus.core.remove_node_return_child.call(null,pnod40466__40471);
} else
{return pnod40466__40471;
}
});
enfocus.core.load_remote_dom.call(null,"slides/rainbows.html");
prezo.core.slide4 = (function slide4(){
var vec__40474__40475 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/rainbows.html");
})]));
var id_sym40472__40476 = cljs.core.nth.call(null,vec__40474__40475,0,null);
var pnod40473__40477 = cljs.core.nth.call(null,vec__40474__40475,1,null);
var pnod40473__40478 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40473__40477):pnod40473__40477);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40472__40476,pnod40473__40478);
return enfocus.core.remove_node_return_child.call(null,pnod40473__40478);
} else
{return pnod40473__40478;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__40481__40482 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym40479__40483 = cljs.core.nth.call(null,vec__40481__40482,0,null);
var pnod40480__40484 = cljs.core.nth.call(null,vec__40481__40482,1,null);
var pnod40480__40485 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40480__40484):pnod40480__40484);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40479__40483,pnod40480__40485);
return enfocus.core.remove_node_return_child.call(null,pnod40480__40485);
} else
{return pnod40480__40485;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__40488__40489 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym40486__40490 = cljs.core.nth.call(null,vec__40488__40489,0,null);
var pnod40487__40491 = cljs.core.nth.call(null,vec__40488__40489,1,null);
var pnod40487__40492 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40487__40491):pnod40487__40491);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40486__40490,pnod40487__40492);
return enfocus.core.remove_node_return_child.call(null,pnod40487__40492);
} else
{return pnod40487__40492;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__40495__40496 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym40493__40497 = cljs.core.nth.call(null,vec__40495__40496,0,null);
var pnod40494__40498 = cljs.core.nth.call(null,vec__40495__40496,1,null);
var pnod40494__40499 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40494__40498):pnod40494__40498);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40493__40497,pnod40494__40499);
return enfocus.core.remove_node_return_child.call(null,pnod40494__40499);
} else
{return pnod40494__40499;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__40502__40503 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym40500__40504 = cljs.core.nth.call(null,vec__40502__40503,0,null);
var pnod40501__40505 = cljs.core.nth.call(null,vec__40502__40503,1,null);
var pnod40501__40506 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40501__40505):pnod40501__40505);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40500__40504,pnod40501__40506);
return enfocus.core.remove_node_return_child.call(null,pnod40501__40506);
} else
{return pnod40501__40506;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__40509__40510 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym40507__40511 = cljs.core.nth.call(null,vec__40509__40510,0,null);
var pnod40508__40512 = cljs.core.nth.call(null,vec__40509__40510,1,null);
var pnod40508__40513 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40508__40512):pnod40508__40512);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40507__40511,pnod40508__40513);
return enfocus.core.remove_node_return_child.call(null,pnod40508__40513);
} else
{return pnod40508__40513;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__40516__40517 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym40514__40518 = cljs.core.nth.call(null,vec__40516__40517,0,null);
var pnod40515__40519 = cljs.core.nth.call(null,vec__40516__40517,1,null);
var pnod40515__40520 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40515__40519):pnod40515__40519);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40514__40518,pnod40515__40520);
return enfocus.core.remove_node_return_child.call(null,pnod40515__40520);
} else
{return pnod40515__40520;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__40523__40524 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym40521__40525 = cljs.core.nth.call(null,vec__40523__40524,0,null);
var pnod40522__40526 = cljs.core.nth.call(null,vec__40523__40524,1,null);
var pnod40522__40527 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40522__40526):pnod40522__40526);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40521__40525,pnod40522__40527);
return enfocus.core.remove_node_return_child.call(null,pnod40522__40527);
} else
{return pnod40522__40527;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__40530__40531 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym40528__40532 = cljs.core.nth.call(null,vec__40530__40531,0,null);
var pnod40529__40533 = cljs.core.nth.call(null,vec__40530__40531,1,null);
var pnod40529__40534 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40529__40533):pnod40529__40533);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40528__40532,pnod40529__40534);
return enfocus.core.remove_node_return_child.call(null,pnod40529__40534);
} else
{return pnod40529__40534;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__40537__40538 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym40535__40539 = cljs.core.nth.call(null,vec__40537__40538,0,null);
var pnod40536__40540 = cljs.core.nth.call(null,vec__40537__40538,1,null);
var pnod40536__40541 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40536__40540):pnod40536__40540);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40535__40539,pnod40536__40541);
return enfocus.core.remove_node_return_child.call(null,pnod40536__40541);
} else
{return pnod40536__40541;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__40544__40545 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym40542__40546 = cljs.core.nth.call(null,vec__40544__40545,0,null);
var pnod40543__40547 = cljs.core.nth.call(null,vec__40544__40545,1,null);
var pnod40543__40548 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40543__40547):pnod40543__40547);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40542__40546,pnod40543__40548);
return enfocus.core.remove_node_return_child.call(null,pnod40543__40548);
} else
{return pnod40543__40548;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__40551__40552 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym40549__40553 = cljs.core.nth.call(null,vec__40551__40552,0,null);
var pnod40550__40554 = cljs.core.nth.call(null,vec__40551__40552,1,null);
var pnod40550__40555 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40550__40554):pnod40550__40554);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40549__40553,pnod40550__40555);
return enfocus.core.remove_node_return_child.call(null,pnod40550__40555);
} else
{return pnod40550__40555;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__40558__40559 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym40556__40560 = cljs.core.nth.call(null,vec__40558__40559,0,null);
var pnod40557__40561 = cljs.core.nth.call(null,vec__40558__40559,1,null);
var pnod40557__40562 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40557__40561):pnod40557__40561);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40556__40560,pnod40557__40562);
return enfocus.core.remove_node_return_child.call(null,pnod40557__40562);
} else
{return pnod40557__40562;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom1.html");
prezo.core.slide17 = (function slide17(){
var vec__40565__40566 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})]));
var id_sym40563__40567 = cljs.core.nth.call(null,vec__40565__40566,0,null);
var pnod40564__40568 = cljs.core.nth.call(null,vec__40565__40566,1,null);
var pnod40564__40569 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40564__40568):pnod40564__40568);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40563__40567,pnod40564__40569);
return enfocus.core.remove_node_return_child.call(null,pnod40564__40569);
} else
{return pnod40564__40569;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom2.html");
prezo.core.slide18 = (function slide18(){
var vec__40572__40573 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})]));
var id_sym40570__40574 = cljs.core.nth.call(null,vec__40572__40573,0,null);
var pnod40571__40575 = cljs.core.nth.call(null,vec__40572__40573,1,null);
var pnod40571__40576 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40571__40575):pnod40571__40575);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40570__40574,pnod40571__40576);
return enfocus.core.remove_node_return_child.call(null,pnod40571__40576);
} else
{return pnod40571__40576;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide19 = (function slide19(){
var vec__40579__40580 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym40577__40581 = cljs.core.nth.call(null,vec__40579__40580,0,null);
var pnod40578__40582 = cljs.core.nth.call(null,vec__40579__40580,1,null);
var pnod40578__40583 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40578__40582):pnod40578__40582);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40577__40581,pnod40578__40583);
return enfocus.core.remove_node_return_child.call(null,pnod40578__40583);
} else
{return pnod40578__40583;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide20 = (function slide20(){
var vec__40586__40587 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym40584__40588 = cljs.core.nth.call(null,vec__40586__40587,0,null);
var pnod40585__40589 = cljs.core.nth.call(null,vec__40586__40587,1,null);
var pnod40585__40590 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40585__40589):pnod40585__40589);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40584__40588,pnod40585__40590);
return enfocus.core.remove_node_return_child.call(null,pnod40585__40590);
} else
{return pnod40585__40590;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide21 = (function slide21(){
var vec__40593__40594 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym40591__40595 = cljs.core.nth.call(null,vec__40593__40594,0,null);
var pnod40592__40596 = cljs.core.nth.call(null,vec__40593__40594,1,null);
var pnod40592__40597 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40592__40596):pnod40592__40596);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40591__40595,pnod40592__40597);
return enfocus.core.remove_node_return_child.call(null,pnod40592__40597);
} else
{return pnod40592__40597;
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
var nods__2582__auto____40599 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40598){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod40598,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod40598,cljs.core.Vector.fromArray(["input"])));
return pnod40598;
}),nods__2582__auto____40599));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide20);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide21);
})]);
prezo.core.back_key_codes = cljs.core.set([66,37,38,8,80]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode)))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__40600_SHARP_){
return ((p1__40600_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__40601_SHARP_){
return ((p1__40601_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__40602 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__40602.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____40604 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40603){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40603,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod40603,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40603,cljs.core.Vector.fromArray([".slide"])));
return pnod40603;
}),nods__2582__auto____40604));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____40606 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40605){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod40605,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod40605,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=0)").call(null,enfocus.core.css_select.call(null,"",pnod40605,cljs.core.Vector.fromArray([".slide"])));
return pnod40605;
}),nods__2582__auto____40606));
return document;
});
