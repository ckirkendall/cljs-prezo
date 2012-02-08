goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____40609 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40608){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__40607_SHARP_){
var nods__2582__auto____40611 = enfocus.core.nodes__GT_coll.call(null,p1__40607_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40610){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40610,cljs.core.Vector.fromArray([".slide"])));
return pnod40610;
}),nods__2582__auto____40611));
return p1__40607_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod40608,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod40608;
}),nods__2582__auto____40609));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____40613 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40612){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40612,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod40612;
}),nods__2582__auto____40613));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__40614 = goog.dom.getViewportSize.call(null);
var width__40615 = (size__40614.width - 40);
var height__40616 = (size__40614.height - 80);

return prezo.core.resize_pane.call(null,width__40615,height__40616);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__40617 = goog.dom.getViewportSize.call(null);
var width__40618 = (size__40617.width - 40);
var height__40619 = (size__40617.height - 80);

prezo.core.setup_pane.call(null,width__40618,height__40619);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2582__auto____40622 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40621){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod40621,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod40621;
}),nods__2582__auto____40622));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__40620_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__40620_SHARP_.keyCode);
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
var vec__40625__40626 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym40623__40627 = cljs.core.nth.call(null,vec__40625__40626,0,null);
var pnod40624__40628 = cljs.core.nth.call(null,vec__40625__40626,1,null);
var pnod40624__40629 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40624__40628):pnod40624__40628);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40623__40627,pnod40624__40629);
return enfocus.core.remove_node_return_child.call(null,pnod40624__40629);
} else
{return pnod40624__40629;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__40632__40633 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym40630__40634 = cljs.core.nth.call(null,vec__40632__40633,0,null);
var pnod40631__40635 = cljs.core.nth.call(null,vec__40632__40633,1,null);
var pnod40631__40636 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40631__40635):pnod40631__40635);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40630__40634,pnod40631__40636);
return enfocus.core.remove_node_return_child.call(null,pnod40631__40636);
} else
{return pnod40631__40636;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__40639__40640 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym40637__40641 = cljs.core.nth.call(null,vec__40639__40640,0,null);
var pnod40638__40642 = cljs.core.nth.call(null,vec__40639__40640,1,null);
var pnod40638__40643 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40638__40642):pnod40638__40642);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40637__40641,pnod40638__40643);
return enfocus.core.remove_node_return_child.call(null,pnod40638__40643);
} else
{return pnod40638__40643;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__40646__40647 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym40644__40648 = cljs.core.nth.call(null,vec__40646__40647,0,null);
var pnod40645__40649 = cljs.core.nth.call(null,vec__40646__40647,1,null);
var pnod40645__40650 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40645__40649):pnod40645__40649);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40644__40648,pnod40645__40650);
return enfocus.core.remove_node_return_child.call(null,pnod40645__40650);
} else
{return pnod40645__40650;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__40653__40654 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym40651__40655 = cljs.core.nth.call(null,vec__40653__40654,0,null);
var pnod40652__40656 = cljs.core.nth.call(null,vec__40653__40654,1,null);
var pnod40652__40657 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40652__40656):pnod40652__40656);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40651__40655,pnod40652__40657);
return enfocus.core.remove_node_return_child.call(null,pnod40652__40657);
} else
{return pnod40652__40657;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__40660__40661 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym40658__40662 = cljs.core.nth.call(null,vec__40660__40661,0,null);
var pnod40659__40663 = cljs.core.nth.call(null,vec__40660__40661,1,null);
var pnod40659__40664 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40659__40663):pnod40659__40663);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40658__40662,pnod40659__40664);
return enfocus.core.remove_node_return_child.call(null,pnod40659__40664);
} else
{return pnod40659__40664;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__40667__40668 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym40665__40669 = cljs.core.nth.call(null,vec__40667__40668,0,null);
var pnod40666__40670 = cljs.core.nth.call(null,vec__40667__40668,1,null);
var pnod40666__40671 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40666__40670):pnod40666__40670);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40665__40669,pnod40666__40671);
return enfocus.core.remove_node_return_child.call(null,pnod40666__40671);
} else
{return pnod40666__40671;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__40674__40675 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym40672__40676 = cljs.core.nth.call(null,vec__40674__40675,0,null);
var pnod40673__40677 = cljs.core.nth.call(null,vec__40674__40675,1,null);
var pnod40673__40678 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40673__40677):pnod40673__40677);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40672__40676,pnod40673__40678);
return enfocus.core.remove_node_return_child.call(null,pnod40673__40678);
} else
{return pnod40673__40678;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__40681__40682 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym40679__40683 = cljs.core.nth.call(null,vec__40681__40682,0,null);
var pnod40680__40684 = cljs.core.nth.call(null,vec__40681__40682,1,null);
var pnod40680__40685 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40680__40684):pnod40680__40684);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40679__40683,pnod40680__40685);
return enfocus.core.remove_node_return_child.call(null,pnod40680__40685);
} else
{return pnod40680__40685;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__40688__40689 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym40686__40690 = cljs.core.nth.call(null,vec__40688__40689,0,null);
var pnod40687__40691 = cljs.core.nth.call(null,vec__40688__40689,1,null);
var pnod40687__40692 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40687__40691):pnod40687__40691);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40686__40690,pnod40687__40692);
return enfocus.core.remove_node_return_child.call(null,pnod40687__40692);
} else
{return pnod40687__40692;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__40695__40696 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym40693__40697 = cljs.core.nth.call(null,vec__40695__40696,0,null);
var pnod40694__40698 = cljs.core.nth.call(null,vec__40695__40696,1,null);
var pnod40694__40699 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40694__40698):pnod40694__40698);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40693__40697,pnod40694__40699);
return enfocus.core.remove_node_return_child.call(null,pnod40694__40699);
} else
{return pnod40694__40699;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__40702__40703 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym40700__40704 = cljs.core.nth.call(null,vec__40702__40703,0,null);
var pnod40701__40705 = cljs.core.nth.call(null,vec__40702__40703,1,null);
var pnod40701__40706 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40701__40705):pnod40701__40705);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40700__40704,pnod40701__40706);
return enfocus.core.remove_node_return_child.call(null,pnod40701__40706);
} else
{return pnod40701__40706;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__40709__40710 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym40707__40711 = cljs.core.nth.call(null,vec__40709__40710,0,null);
var pnod40708__40712 = cljs.core.nth.call(null,vec__40709__40710,1,null);
var pnod40708__40713 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40708__40712):pnod40708__40712);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40707__40711,pnod40708__40713);
return enfocus.core.remove_node_return_child.call(null,pnod40708__40713);
} else
{return pnod40708__40713;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__40716__40717 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym40714__40718 = cljs.core.nth.call(null,vec__40716__40717,0,null);
var pnod40715__40719 = cljs.core.nth.call(null,vec__40716__40717,1,null);
var pnod40715__40720 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40715__40719):pnod40715__40719);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40714__40718,pnod40715__40720);
return enfocus.core.remove_node_return_child.call(null,pnod40715__40720);
} else
{return pnod40715__40720;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__40723__40724 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym40721__40725 = cljs.core.nth.call(null,vec__40723__40724,0,null);
var pnod40722__40726 = cljs.core.nth.call(null,vec__40723__40724,1,null);
var pnod40722__40727 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40722__40726):pnod40722__40726);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40721__40725,pnod40722__40727);
return enfocus.core.remove_node_return_child.call(null,pnod40722__40727);
} else
{return pnod40722__40727;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom1.html");
prezo.core.slide17 = (function slide17(){
var vec__40730__40731 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})]));
var id_sym40728__40732 = cljs.core.nth.call(null,vec__40730__40731,0,null);
var pnod40729__40733 = cljs.core.nth.call(null,vec__40730__40731,1,null);
var pnod40729__40734 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40729__40733):pnod40729__40733);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40728__40732,pnod40729__40734);
return enfocus.core.remove_node_return_child.call(null,pnod40729__40734);
} else
{return pnod40729__40734;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom2.html");
prezo.core.slide18 = (function slide18(){
var vec__40737__40738 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})]));
var id_sym40735__40739 = cljs.core.nth.call(null,vec__40737__40738,0,null);
var pnod40736__40740 = cljs.core.nth.call(null,vec__40737__40738,1,null);
var pnod40736__40741 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40736__40740):pnod40736__40740);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40735__40739,pnod40736__40741);
return enfocus.core.remove_node_return_child.call(null,pnod40736__40741);
} else
{return pnod40736__40741;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide19 = (function slide19(){
var vec__40744__40745 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym40742__40746 = cljs.core.nth.call(null,vec__40744__40745,0,null);
var pnod40743__40747 = cljs.core.nth.call(null,vec__40744__40745,1,null);
var pnod40743__40748 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40743__40747):pnod40743__40747);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40742__40746,pnod40743__40748);
return enfocus.core.remove_node_return_child.call(null,pnod40743__40748);
} else
{return pnod40743__40748;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide20 = (function slide20(){
var vec__40751__40752 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym40749__40753 = cljs.core.nth.call(null,vec__40751__40752,0,null);
var pnod40750__40754 = cljs.core.nth.call(null,vec__40751__40752,1,null);
var pnod40750__40755 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40750__40754):pnod40750__40754);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40749__40753,pnod40750__40755);
return enfocus.core.remove_node_return_child.call(null,pnod40750__40755);
} else
{return pnod40750__40755;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide21 = (function slide21(){
var vec__40758__40759 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym40756__40760 = cljs.core.nth.call(null,vec__40758__40759,0,null);
var pnod40757__40761 = cljs.core.nth.call(null,vec__40758__40759,1,null);
var pnod40757__40762 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod40757__40761):pnod40757__40761);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym40756__40760,pnod40757__40762);
return enfocus.core.remove_node_return_child.call(null,pnod40757__40762);
} else
{return pnod40757__40762;
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
var nods__2582__auto____40764 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40763){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod40763,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod40763,cljs.core.Vector.fromArray(["input"])));
return pnod40763;
}),nods__2582__auto____40764));
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
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__40765_SHARP_){
return ((p1__40765_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__40766_SHARP_){
return ((p1__40766_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__40767 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__40767.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____40769 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40768){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40768,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod40768,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod40768,cljs.core.Vector.fromArray([".slide"])));
return pnod40768;
}),nods__2582__auto____40769));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____40771 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod40770){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod40770,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod40770,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=0)").call(null,enfocus.core.css_select.call(null,"",pnod40770,cljs.core.Vector.fromArray([".slide"])));
return pnod40770;
}),nods__2582__auto____40771));
return document;
});
