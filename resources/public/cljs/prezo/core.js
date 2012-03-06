goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__3015__auto____81954 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81953){
(function (pnod__3190__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return (function (p1__81952_SHARP_){
var nods__3015__auto____81956 = enfocus.core.nodes__GT_coll.call(null,p1__81952_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81955){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod81955,cljs.core.Vector.fromArray([".slide"])));
return pnod81955;
}),nods__3015__auto____81956));
return p1__81952_SHARP_;
}).call(null,pnod__3189__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod81953,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod81953;
}),nods__3015__auto____81954));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__3015__auto____81958 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81957){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod81957,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod81957;
}),nods__3015__auto____81958));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__81959 = goog.dom.getViewportSize.call(null);
var width__81960 = (size__81959.width - 40);
var height__81961 = (size__81959.height - 80);

return prezo.core.resize_pane.call(null,width__81960,height__81961);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__81962 = goog.dom.getViewportSize.call(null);
var width__81963 = (size__81962.width - 40);
var height__81964 = (size__81962.height - 80);

prezo.core.setup_pane.call(null,width__81963,height__81964);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__3015__auto____81967 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod81966){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod81966,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod81966;
}),nods__3015__auto____81967));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__81965_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__81965_SHARP_.keyCode);
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
var vec__81970__81971 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym81968__81972 = cljs.core.nth.call(null,vec__81970__81971,0,null);
var pnod81969__81973 = cljs.core.nth.call(null,vec__81970__81971,1,null);
var pnod81969__81974 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod81969__81973):pnod81969__81973);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym81968__81972,pnod81969__81974);
return enfocus.core.remove_node_return_child.call(null,pnod81969__81974);
} else
{return pnod81969__81974;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__81977__81978 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym81975__81979 = cljs.core.nth.call(null,vec__81977__81978,0,null);
var pnod81976__81980 = cljs.core.nth.call(null,vec__81977__81978,1,null);
var pnod81976__81981 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod81976__81980):pnod81976__81980);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym81975__81979,pnod81976__81981);
return enfocus.core.remove_node_return_child.call(null,pnod81976__81981);
} else
{return pnod81976__81981;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-to-do.html");
prezo.core.slide2_5 = (function slide2_5(){
var vec__81984__81985 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-to-do.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-to-do.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-to-do.html");
})]));
var id_sym81982__81986 = cljs.core.nth.call(null,vec__81984__81985,0,null);
var pnod81983__81987 = cljs.core.nth.call(null,vec__81984__81985,1,null);
var pnod81983__81988 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod81983__81987):pnod81983__81987);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym81982__81986,pnod81983__81988);
return enfocus.core.remove_node_return_child.call(null,pnod81983__81988);
} else
{return pnod81983__81988;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-clojurescript.html");
prezo.core.slide3 = (function slide3(){
var vec__81991__81992 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojurescript.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojurescript.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojurescript.html");
})]));
var id_sym81989__81993 = cljs.core.nth.call(null,vec__81991__81992,0,null);
var pnod81990__81994 = cljs.core.nth.call(null,vec__81991__81992,1,null);
var pnod81990__81995 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod81990__81994):pnod81990__81994);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym81989__81993,pnod81990__81995);
return enfocus.core.remove_node_return_child.call(null,pnod81990__81995);
} else
{return pnod81990__81995;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojurescript.html");
prezo.core.slide4 = (function slide4(){
var vec__81998__81999 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojurescript.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojurescript.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojurescript.html");
})]));
var id_sym81996__82000 = cljs.core.nth.call(null,vec__81998__81999,0,null);
var pnod81997__82001 = cljs.core.nth.call(null,vec__81998__81999,1,null);
var pnod81997__82002 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod81997__82001):pnod81997__82001);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym81996__82000,pnod81997__82002);
return enfocus.core.remove_node_return_child.call(null,pnod81997__82002);
} else
{return pnod81997__82002;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__82005__82006 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym82003__82007 = cljs.core.nth.call(null,vec__82005__82006,0,null);
var pnod82004__82008 = cljs.core.nth.call(null,vec__82005__82006,1,null);
var pnod82004__82009 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82004__82008):pnod82004__82008);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82003__82007,pnod82004__82009);
return enfocus.core.remove_node_return_child.call(null,pnod82004__82009);
} else
{return pnod82004__82009;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__82012__82013 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym82010__82014 = cljs.core.nth.call(null,vec__82012__82013,0,null);
var pnod82011__82015 = cljs.core.nth.call(null,vec__82012__82013,1,null);
var pnod82011__82016 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82011__82015):pnod82011__82015);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82010__82014,pnod82011__82016);
return enfocus.core.remove_node_return_child.call(null,pnod82011__82016);
} else
{return pnod82011__82016;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__82019__82020 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym82017__82021 = cljs.core.nth.call(null,vec__82019__82020,0,null);
var pnod82018__82022 = cljs.core.nth.call(null,vec__82019__82020,1,null);
var pnod82018__82023 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82018__82022):pnod82018__82022);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82017__82021,pnod82018__82023);
return enfocus.core.remove_node_return_child.call(null,pnod82018__82023);
} else
{return pnod82018__82023;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__82026__82027 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym82024__82028 = cljs.core.nth.call(null,vec__82026__82027,0,null);
var pnod82025__82029 = cljs.core.nth.call(null,vec__82026__82027,1,null);
var pnod82025__82030 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82025__82029):pnod82025__82029);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82024__82028,pnod82025__82030);
return enfocus.core.remove_node_return_child.call(null,pnod82025__82030);
} else
{return pnod82025__82030;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__82033__82034 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym82031__82035 = cljs.core.nth.call(null,vec__82033__82034,0,null);
var pnod82032__82036 = cljs.core.nth.call(null,vec__82033__82034,1,null);
var pnod82032__82037 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82032__82036):pnod82032__82036);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82031__82035,pnod82032__82037);
return enfocus.core.remove_node_return_child.call(null,pnod82032__82037);
} else
{return pnod82032__82037;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__82040__82041 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym82038__82042 = cljs.core.nth.call(null,vec__82040__82041,0,null);
var pnod82039__82043 = cljs.core.nth.call(null,vec__82040__82041,1,null);
var pnod82039__82044 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82039__82043):pnod82039__82043);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82038__82042,pnod82039__82044);
return enfocus.core.remove_node_return_child.call(null,pnod82039__82044);
} else
{return pnod82039__82044;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__82047__82048 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym82045__82049 = cljs.core.nth.call(null,vec__82047__82048,0,null);
var pnod82046__82050 = cljs.core.nth.call(null,vec__82047__82048,1,null);
var pnod82046__82051 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82046__82050):pnod82046__82050);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82045__82049,pnod82046__82051);
return enfocus.core.remove_node_return_child.call(null,pnod82046__82051);
} else
{return pnod82046__82051;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__82054__82055 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym82052__82056 = cljs.core.nth.call(null,vec__82054__82055,0,null);
var pnod82053__82057 = cljs.core.nth.call(null,vec__82054__82055,1,null);
var pnod82053__82058 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82053__82057):pnod82053__82057);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82052__82056,pnod82053__82058);
return enfocus.core.remove_node_return_child.call(null,pnod82053__82058);
} else
{return pnod82053__82058;
}
});
enfocus.core.load_remote_dom.call(null,"slides/macros.html");
prezo.core.slide13 = (function slide13(){
var vec__82061__82062 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
})]));
var id_sym82059__82063 = cljs.core.nth.call(null,vec__82061__82062,0,null);
var pnod82060__82064 = cljs.core.nth.call(null,vec__82061__82062,1,null);
var pnod82060__82065 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82060__82064):pnod82060__82064);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82059__82063,pnod82060__82065);
return enfocus.core.remove_node_return_child.call(null,pnod82060__82065);
} else
{return pnod82060__82065;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-are-we-missing.html");
prezo.core.slide14 = (function slide14(){
var vec__82068__82069 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-are-we-missing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-are-we-missing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-are-we-missing.html");
})]));
var id_sym82066__82070 = cljs.core.nth.call(null,vec__82068__82069,0,null);
var pnod82067__82071 = cljs.core.nth.call(null,vec__82068__82069,1,null);
var pnod82067__82072 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82067__82071):pnod82067__82071);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82066__82070,pnod82067__82072);
return enfocus.core.remove_node_return_child.call(null,pnod82067__82072);
} else
{return pnod82067__82072;
}
});
enfocus.core.load_remote_dom.call(null,"slides/choosing-your-materials.html");
prezo.core.slide15 = (function slide15(){
var vec__82075__82076 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})]));
var id_sym82073__82077 = cljs.core.nth.call(null,vec__82075__82076,0,null);
var pnod82074__82078 = cljs.core.nth.call(null,vec__82075__82076,1,null);
var pnod82074__82079 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82074__82078):pnod82074__82078);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82073__82077,pnod82074__82079);
return enfocus.core.remove_node_return_child.call(null,pnod82074__82079);
} else
{return pnod82074__82079;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-not-closure-lib.html");
prezo.core.slide16 = (function slide16(){
var vec__82082__82083 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})]));
var id_sym82080__82084 = cljs.core.nth.call(null,vec__82082__82083,0,null);
var pnod82081__82085 = cljs.core.nth.call(null,vec__82082__82083,1,null);
var pnod82081__82086 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82081__82085):pnod82081__82085);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82080__82084,pnod82081__82086);
return enfocus.core.remove_node_return_child.call(null,pnod82081__82086);
} else
{return pnod82081__82086;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-closure-lib.html");
prezo.core.slide17 = (function slide17(){
var vec__82089__82090 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})]));
var id_sym82087__82091 = cljs.core.nth.call(null,vec__82089__82090,0,null);
var pnod82088__82092 = cljs.core.nth.call(null,vec__82089__82090,1,null);
var pnod82088__82093 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82088__82092):pnod82088__82092);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82087__82091,pnod82088__82093);
return enfocus.core.remove_node_return_child.call(null,pnod82088__82093);
} else
{return pnod82088__82093;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-naming.html");
prezo.core.slide18 = (function slide18(){
var vec__82096__82097 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})]));
var id_sym82094__82098 = cljs.core.nth.call(null,vec__82096__82097,0,null);
var pnod82095__82099 = cljs.core.nth.call(null,vec__82096__82097,1,null);
var pnod82095__82100 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82095__82099):pnod82095__82099);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82094__82098,pnod82095__82100);
return enfocus.core.remove_node_return_child.call(null,pnod82095__82100);
} else
{return pnod82095__82100;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-1.html");
prezo.core.slide19 = (function slide19(){
var vec__82103__82104 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})]));
var id_sym82101__82105 = cljs.core.nth.call(null,vec__82103__82104,0,null);
var pnod82102__82106 = cljs.core.nth.call(null,vec__82103__82104,1,null);
var pnod82102__82107 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82102__82106):pnod82102__82106);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82101__82105,pnod82102__82107);
return enfocus.core.remove_node_return_child.call(null,pnod82102__82107);
} else
{return pnod82102__82107;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-2.html");
prezo.core.slide20 = (function slide20(){
var vec__82110__82111 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})]));
var id_sym82108__82112 = cljs.core.nth.call(null,vec__82110__82111,0,null);
var pnod82109__82113 = cljs.core.nth.call(null,vec__82110__82111,1,null);
var pnod82109__82114 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82109__82113):pnod82109__82113);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82108__82112,pnod82109__82114);
return enfocus.core.remove_node_return_child.call(null,pnod82109__82114);
} else
{return pnod82109__82114;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-3.html");
prezo.core.slide21 = (function slide21(){
var vec__82117__82118 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})]));
var id_sym82115__82119 = cljs.core.nth.call(null,vec__82117__82118,0,null);
var pnod82116__82120 = cljs.core.nth.call(null,vec__82117__82118,1,null);
var pnod82116__82121 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82116__82120):pnod82116__82120);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82115__82119,pnod82116__82121);
return enfocus.core.remove_node_return_child.call(null,pnod82116__82121);
} else
{return pnod82116__82121;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-third-party-tools.html");
prezo.core.slide22 = (function slide22(){
var vec__82124__82125 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})]));
var id_sym82122__82126 = cljs.core.nth.call(null,vec__82124__82125,0,null);
var pnod82123__82127 = cljs.core.nth.call(null,vec__82124__82125,1,null);
var pnod82123__82128 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82123__82127):pnod82123__82127);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82122__82126,pnod82123__82128);
return enfocus.core.remove_node_return_child.call(null,pnod82123__82128);
} else
{return pnod82123__82128;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-externs-foreign-libs.html");
prezo.core.slide23 = (function slide23(){
var vec__82131__82132 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})]));
var id_sym82129__82133 = cljs.core.nth.call(null,vec__82131__82132,0,null);
var pnod82130__82134 = cljs.core.nth.call(null,vec__82131__82132,1,null);
var pnod82130__82135 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82130__82134):pnod82130__82134);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82129__82133,pnod82130__82135);
return enfocus.core.remove_node_return_child.call(null,pnod82130__82135);
} else
{return pnod82130__82135;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide24 = (function slide24(){
var vec__82138__82139 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym82136__82140 = cljs.core.nth.call(null,vec__82138__82139,0,null);
var pnod82137__82141 = cljs.core.nth.call(null,vec__82138__82139,1,null);
var pnod82137__82142 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82137__82141):pnod82137__82141);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82136__82140,pnod82137__82142);
return enfocus.core.remove_node_return_child.call(null,pnod82137__82142);
} else
{return pnod82137__82142;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-extern-cost.html");
prezo.core.slide25 = (function slide25(){
var vec__82145__82146 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})]));
var id_sym82143__82147 = cljs.core.nth.call(null,vec__82145__82146,0,null);
var pnod82144__82148 = cljs.core.nth.call(null,vec__82145__82146,1,null);
var pnod82144__82149 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82144__82148):pnod82144__82148);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82143__82147,pnod82144__82149);
return enfocus.core.remove_node_return_child.call(null,pnod82144__82149);
} else
{return pnod82144__82149;
}
});
enfocus.core.load_remote_dom.call(null,"slides/managing-upstream-deps.html");
prezo.core.slide26 = (function slide26(){
var vec__82152__82153 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})]));
var id_sym82150__82154 = cljs.core.nth.call(null,vec__82152__82153,0,null);
var pnod82151__82155 = cljs.core.nth.call(null,vec__82152__82153,1,null);
var pnod82151__82156 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82151__82155):pnod82151__82155);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82150__82154,pnod82151__82156);
return enfocus.core.remove_node_return_child.call(null,pnod82151__82156);
} else
{return pnod82151__82156;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-1.html");
prezo.core.slide27 = (function slide27(){
var vec__82159__82160 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})]));
var id_sym82157__82161 = cljs.core.nth.call(null,vec__82159__82160,0,null);
var pnod82158__82162 = cljs.core.nth.call(null,vec__82159__82160,1,null);
var pnod82158__82163 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82158__82162):pnod82158__82162);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82157__82161,pnod82158__82163);
return enfocus.core.remove_node_return_child.call(null,pnod82158__82163);
} else
{return pnod82158__82163;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-2.html");
prezo.core.slide28 = (function slide28(){
var vec__82166__82167 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})]));
var id_sym82164__82168 = cljs.core.nth.call(null,vec__82166__82167,0,null);
var pnod82165__82169 = cljs.core.nth.call(null,vec__82166__82167,1,null);
var pnod82165__82170 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82165__82169):pnod82165__82169);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82164__82168,pnod82165__82170);
return enfocus.core.remove_node_return_child.call(null,pnod82165__82170);
} else
{return pnod82165__82170;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-3.html");
prezo.core.slide29 = (function slide29(){
var vec__82173__82174 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})]));
var id_sym82171__82175 = cljs.core.nth.call(null,vec__82173__82174,0,null);
var pnod82172__82176 = cljs.core.nth.call(null,vec__82173__82174,1,null);
var pnod82172__82177 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82172__82176):pnod82172__82176);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82171__82175,pnod82172__82177);
return enfocus.core.remove_node_return_child.call(null,pnod82172__82177);
} else
{return pnod82172__82177;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-4.html");
prezo.core.slide30 = (function slide30(){
var vec__82180__82181 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})]));
var id_sym82178__82182 = cljs.core.nth.call(null,vec__82180__82181,0,null);
var pnod82179__82183 = cljs.core.nth.call(null,vec__82180__82181,1,null);
var pnod82179__82184 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82179__82183):pnod82179__82183);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82178__82182,pnod82179__82184);
return enfocus.core.remove_node_return_child.call(null,pnod82179__82184);
} else
{return pnod82179__82184;
}
});
enfocus.core.load_remote_dom.call(null,"slides/parting-advice.html");
prezo.core.slide31 = (function slide31(){
var vec__82187__82188 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})]));
var id_sym82185__82189 = cljs.core.nth.call(null,vec__82187__82188,0,null);
var pnod82186__82190 = cljs.core.nth.call(null,vec__82187__82188,1,null);
var pnod82186__82191 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82186__82190):pnod82186__82190);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82185__82189,pnod82186__82191);
return enfocus.core.remove_node_return_child.call(null,pnod82186__82191);
} else
{return pnod82186__82191;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide32 = (function slide32(){
var vec__82194__82195 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym82192__82196 = cljs.core.nth.call(null,vec__82194__82195,0,null);
var pnod82193__82197 = cljs.core.nth.call(null,vec__82194__82195,1,null);
var pnod82193__82198 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82193__82197):pnod82193__82197);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82192__82196,pnod82193__82198);
return enfocus.core.remove_node_return_child.call(null,pnod82193__82198);
} else
{return pnod82193__82198;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide33 = (function slide33(){
var vec__82201__82202 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym82199__82203 = cljs.core.nth.call(null,vec__82201__82202,0,null);
var pnod82200__82204 = cljs.core.nth.call(null,vec__82201__82202,1,null);
var pnod82200__82205 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod82200__82204):pnod82200__82204);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym82199__82203,pnod82200__82205);
return enfocus.core.remove_node_return_child.call(null,pnod82200__82205);
} else
{return pnod82200__82205;
}
});
prezo.core.action_index = cljs.core.atom.call(null,0);
prezo.core.actions = cljs.core.Vector.fromArray([(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide1);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide2);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide2);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"clj-is"),prezo.content.concurrency,cljs.core.ObjMap.fromObject(["﷐'font-size","﷐'loc","﷐'size","﷐'font-offset"],{"﷐'font-size":"1em","﷐'loc":cljs.core.Vector.fromArray([-10,183]),"﷐'size":cljs.core.Vector.fromArray([180,30]),"﷐'font-offset":cljs.core.Vector.fromArray([5,80])}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide2_5);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide2_5);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"port-text"));
return prezo.util.by_id.call(null,"port-text");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide2_5);
var nods__3015__auto____82207 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod82206){
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,enfocus.core.css_select.call(null,"",pnod82206,cljs.core.Vector.fromArray(["#port-text"])));
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,enfocus.core.css_select.call(null,"",pnod82206,cljs.core.Vector.fromArray(["#huh-text"])));
return pnod82206;
}),nods__3015__auto____82207));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide3);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide4);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide4);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"clj-is"),"Bold Claims!",cljs.core.ObjMap.fromObject(["﷐'font-size","﷐'loc","﷐'size"],{"﷐'font-size":"3em","﷐'loc":cljs.core.Vector.fromArray([-10,220]),"﷐'size":cljs.core.Vector.fromArray([300,100])}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide5);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide5);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"syntax-el"),prezo.content.syntax_text,cljs.core.ObjMap.fromObject(["﷐'font-size","﷐'loc","﷐'size","﷐'font-offset"],{"﷐'font-size":"1em","﷐'loc":cljs.core.Vector.fromArray([-5,-5]),"﷐'size":cljs.core.Vector.fromArray([360,190]),"﷐'font-offset":cljs.core.Vector.fromArray([5,-400])}));
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
prezo.core.reset_slide.call(null,prezo.core.slide13);
return prezo.animation.call_out.call(null,prezo.util.by_id.call(null,"macro-text"),prezo.content.macro_text,cljs.core.ObjMap.fromObject(["﷐'loc","﷐'size","﷐'font-offset","﷐'font-size"],{"﷐'loc":cljs.core.Vector.fromArray([-4,-2]),"﷐'size":cljs.core.Vector.fromArray([110,30]),"﷐'font-offset":cljs.core.Vector.fromArray([5,5]),"﷐'font-size":"1em"}));
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide14);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide15);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide16);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide17);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide18);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide19);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide20);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide21);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide22);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide23);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide23);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide24);
prezo.atom.user_view.call(null,cljs.core.deref.call(null,prezo.atom.my_user));
var nods__3015__auto____82209 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod82208){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod82208,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod82208,cljs.core.Vector.fromArray(["input"])));
return pnod82208;
}),nods__3015__auto____82209));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide25);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide26);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide26);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide26);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"clj-is"));
return prezo.util.by_id.call(null,"clj-is");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide27);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide27);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"google-img"));
return prezo.util.by_id.call(null,"google-img");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide27);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"google-img"));
prezo.util.by_id.call(null,"google-img");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide28);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide28);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"rtfm-img"));
return prezo.util.by_id.call(null,"rtfm-img");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide28);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"rtfm-x-img"));
prezo.util.by_id.call(null,"rtfm-x-img");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text"));
return prezo.util.by_id.call(null,"missing-text");
}),(function actions(){
prezo.core.transition_slide.call(null,prezo.core.slide29);
var size__82210 = goog.dom.getViewportSize.call(null);

enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,-300,(size__82210.height + 300),0,null,null),enfocus.core.en_set_style.call(null,"﷐'display",""),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____82212 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_move.call(null,(size__82210.width + 200),-300,3000,null,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod82211){
return pnod82211;
}),nods__3015__auto____82212));
return enfocus.core.en_move.call(null,(size__82210.width + 200),-300,3000,null,null);
})().call(null,pnod__3168__auto__);
}),2000);
}))).call(null,prezo.util.by_id.call(null,"cockroach-bug"));
return prezo.util.by_id.call(null,"cockroach-bug");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide30);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide31);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
return prezo.util.by_id.call(null,"missing-text1");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
return prezo.util.by_id.call(null,"missing-text2");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
prezo.util.by_id.call(null,"missing-text2");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text3"));
return prezo.util.by_id.call(null,"missing-text3");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
prezo.util.by_id.call(null,"missing-text2");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text3"));
prezo.util.by_id.call(null,"missing-text3");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text4"));
return prezo.util.by_id.call(null,"missing-text4");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide31);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text1"));
prezo.util.by_id.call(null,"missing-text1");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text2"));
prezo.util.by_id.call(null,"missing-text2");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text3"));
prezo.util.by_id.call(null,"missing-text3");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text4"));
prezo.util.by_id.call(null,"missing-text4");
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"missing-text5"));
return prezo.util.by_id.call(null,"missing-text5");
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide32);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide33);
})]);
prezo.core.back_key_codes = cljs.core.set([66,37,38,8,80]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode)))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__82213_SHARP_){
return ((p1__82213_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__82214_SHARP_){
return ((p1__82214_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__82215 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__82215.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__3015__auto____82217 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod82216){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod82216,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod82216,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod82216,cljs.core.Vector.fromArray([".slide"])));
return pnod82216;
}),nods__3015__auto____82217));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__3015__auto____82219 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod82218){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod82218,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod82218,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=100)").call(null,enfocus.core.css_select.call(null,"",pnod82218,cljs.core.Vector.fromArray([".slide"])));
return pnod82218;
}),nods__3015__auto____82219));
return document;
});
