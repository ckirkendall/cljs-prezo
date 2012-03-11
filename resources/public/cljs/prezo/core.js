goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__3015__auto____93190 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93189){
(function (pnod__3190__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__3190__auto__,(function (pnod__3190__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__3190__auto__,(function (pnod__3189__auto__){
return (function (p1__93188_SHARP_){
var nods__3015__auto____93192 = enfocus.core.nodes__GT_coll.call(null,p1__93188_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93191){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod93191,cljs.core.Vector.fromArray([".slide"])));
return pnod93191;
}),nods__3015__auto____93192));
return p1__93188_SHARP_;
}).call(null,pnod__3189__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod93189,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod93189;
}),nods__3015__auto____93190));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__3015__auto____93194 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93193){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod93193,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod93193;
}),nods__3015__auto____93194));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__93195 = goog.dom.getViewportSize.call(null);
var width__93196 = (size__93195.width - 40);
var height__93197 = (size__93195.height - 80);

return prezo.core.resize_pane.call(null,width__93196,height__93197);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__93198 = goog.dom.getViewportSize.call(null);
var width__93199 = (size__93198.width - 40);
var height__93200 = (size__93198.height - 80);

prezo.core.setup_pane.call(null,width__93199,height__93200);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__3015__auto____93203 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93202){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod93202,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod93202;
}),nods__3015__auto____93203));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__93201_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__93201_SHARP_.keyCode);
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
var vec__93206__93207 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym93204__93208 = cljs.core.nth.call(null,vec__93206__93207,0,null);
var pnod93205__93209 = cljs.core.nth.call(null,vec__93206__93207,1,null);
var pnod93205__93210 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93205__93209):pnod93205__93209);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93204__93208,pnod93205__93210);
return enfocus.core.remove_node_return_child.call(null,pnod93205__93210);
} else
{return pnod93205__93210;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__93213__93214 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym93211__93215 = cljs.core.nth.call(null,vec__93213__93214,0,null);
var pnod93212__93216 = cljs.core.nth.call(null,vec__93213__93214,1,null);
var pnod93212__93217 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93212__93216):pnod93212__93216);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93211__93215,pnod93212__93217);
return enfocus.core.remove_node_return_child.call(null,pnod93212__93217);
} else
{return pnod93212__93217;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-to-do.html");
prezo.core.slide2_5 = (function slide2_5(){
var vec__93220__93221 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-to-do.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-to-do.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-to-do.html");
})]));
var id_sym93218__93222 = cljs.core.nth.call(null,vec__93220__93221,0,null);
var pnod93219__93223 = cljs.core.nth.call(null,vec__93220__93221,1,null);
var pnod93219__93224 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93219__93223):pnod93219__93223);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93218__93222,pnod93219__93224);
return enfocus.core.remove_node_return_child.call(null,pnod93219__93224);
} else
{return pnod93219__93224;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-clojurescript.html");
prezo.core.slide3 = (function slide3(){
var vec__93227__93228 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojurescript.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojurescript.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojurescript.html");
})]));
var id_sym93225__93229 = cljs.core.nth.call(null,vec__93227__93228,0,null);
var pnod93226__93230 = cljs.core.nth.call(null,vec__93227__93228,1,null);
var pnod93226__93231 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93226__93230):pnod93226__93230);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93225__93229,pnod93226__93231);
return enfocus.core.remove_node_return_child.call(null,pnod93226__93231);
} else
{return pnod93226__93231;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojurescript.html");
prezo.core.slide4 = (function slide4(){
var vec__93234__93235 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojurescript.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojurescript.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojurescript.html");
})]));
var id_sym93232__93236 = cljs.core.nth.call(null,vec__93234__93235,0,null);
var pnod93233__93237 = cljs.core.nth.call(null,vec__93234__93235,1,null);
var pnod93233__93238 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93233__93237):pnod93233__93237);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93232__93236,pnod93233__93238);
return enfocus.core.remove_node_return_child.call(null,pnod93233__93238);
} else
{return pnod93233__93238;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__93241__93242 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym93239__93243 = cljs.core.nth.call(null,vec__93241__93242,0,null);
var pnod93240__93244 = cljs.core.nth.call(null,vec__93241__93242,1,null);
var pnod93240__93245 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93240__93244):pnod93240__93244);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93239__93243,pnod93240__93245);
return enfocus.core.remove_node_return_child.call(null,pnod93240__93245);
} else
{return pnod93240__93245;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__93248__93249 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym93246__93250 = cljs.core.nth.call(null,vec__93248__93249,0,null);
var pnod93247__93251 = cljs.core.nth.call(null,vec__93248__93249,1,null);
var pnod93247__93252 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93247__93251):pnod93247__93251);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93246__93250,pnod93247__93252);
return enfocus.core.remove_node_return_child.call(null,pnod93247__93252);
} else
{return pnod93247__93252;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__93255__93256 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym93253__93257 = cljs.core.nth.call(null,vec__93255__93256,0,null);
var pnod93254__93258 = cljs.core.nth.call(null,vec__93255__93256,1,null);
var pnod93254__93259 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93254__93258):pnod93254__93258);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93253__93257,pnod93254__93259);
return enfocus.core.remove_node_return_child.call(null,pnod93254__93259);
} else
{return pnod93254__93259;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__93262__93263 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym93260__93264 = cljs.core.nth.call(null,vec__93262__93263,0,null);
var pnod93261__93265 = cljs.core.nth.call(null,vec__93262__93263,1,null);
var pnod93261__93266 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93261__93265):pnod93261__93265);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93260__93264,pnod93261__93266);
return enfocus.core.remove_node_return_child.call(null,pnod93261__93266);
} else
{return pnod93261__93266;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__93269__93270 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym93267__93271 = cljs.core.nth.call(null,vec__93269__93270,0,null);
var pnod93268__93272 = cljs.core.nth.call(null,vec__93269__93270,1,null);
var pnod93268__93273 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93268__93272):pnod93268__93272);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93267__93271,pnod93268__93273);
return enfocus.core.remove_node_return_child.call(null,pnod93268__93273);
} else
{return pnod93268__93273;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__93276__93277 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym93274__93278 = cljs.core.nth.call(null,vec__93276__93277,0,null);
var pnod93275__93279 = cljs.core.nth.call(null,vec__93276__93277,1,null);
var pnod93275__93280 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93275__93279):pnod93275__93279);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93274__93278,pnod93275__93280);
return enfocus.core.remove_node_return_child.call(null,pnod93275__93280);
} else
{return pnod93275__93280;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__93283__93284 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym93281__93285 = cljs.core.nth.call(null,vec__93283__93284,0,null);
var pnod93282__93286 = cljs.core.nth.call(null,vec__93283__93284,1,null);
var pnod93282__93287 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93282__93286):pnod93282__93286);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93281__93285,pnod93282__93287);
return enfocus.core.remove_node_return_child.call(null,pnod93282__93287);
} else
{return pnod93282__93287;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__93290__93291 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym93288__93292 = cljs.core.nth.call(null,vec__93290__93291,0,null);
var pnod93289__93293 = cljs.core.nth.call(null,vec__93290__93291,1,null);
var pnod93289__93294 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93289__93293):pnod93289__93293);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93288__93292,pnod93289__93294);
return enfocus.core.remove_node_return_child.call(null,pnod93289__93294);
} else
{return pnod93289__93294;
}
});
enfocus.core.load_remote_dom.call(null,"slides/macros.html");
prezo.core.slide13 = (function slide13(){
var vec__93297__93298 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/macros.html");
})]));
var id_sym93295__93299 = cljs.core.nth.call(null,vec__93297__93298,0,null);
var pnod93296__93300 = cljs.core.nth.call(null,vec__93297__93298,1,null);
var pnod93296__93301 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93296__93300):pnod93296__93300);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93295__93299,pnod93296__93301);
return enfocus.core.remove_node_return_child.call(null,pnod93296__93301);
} else
{return pnod93296__93301;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-are-we-missing.html");
prezo.core.slide14 = (function slide14(){
var vec__93304__93305 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-are-we-missing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-are-we-missing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-are-we-missing.html");
})]));
var id_sym93302__93306 = cljs.core.nth.call(null,vec__93304__93305,0,null);
var pnod93303__93307 = cljs.core.nth.call(null,vec__93304__93305,1,null);
var pnod93303__93308 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93303__93307):pnod93303__93307);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93302__93306,pnod93303__93308);
return enfocus.core.remove_node_return_child.call(null,pnod93303__93308);
} else
{return pnod93303__93308;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-should-I-build.html");
prezo.core.slide14_5 = (function slide14_5(){
var vec__93311__93312 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-should-I-build.html");
})]));
var id_sym93309__93313 = cljs.core.nth.call(null,vec__93311__93312,0,null);
var pnod93310__93314 = cljs.core.nth.call(null,vec__93311__93312,1,null);
var pnod93310__93315 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93310__93314):pnod93310__93314);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93309__93313,pnod93310__93315);
return enfocus.core.remove_node_return_child.call(null,pnod93310__93315);
} else
{return pnod93310__93315;
}
});
enfocus.core.load_remote_dom.call(null,"slides/choosing-your-materials.html");
prezo.core.slide15 = (function slide15(){
var vec__93318__93319 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/choosing-your-materials.html");
})]));
var id_sym93316__93320 = cljs.core.nth.call(null,vec__93318__93319,0,null);
var pnod93317__93321 = cljs.core.nth.call(null,vec__93318__93319,1,null);
var pnod93317__93322 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93317__93321):pnod93317__93321);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93316__93320,pnod93317__93322);
return enfocus.core.remove_node_return_child.call(null,pnod93317__93322);
} else
{return pnod93317__93322;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-not-closure-lib.html");
prezo.core.slide16 = (function slide16(){
var vec__93325__93326 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-not-closure-lib.html");
})]));
var id_sym93323__93327 = cljs.core.nth.call(null,vec__93325__93326,0,null);
var pnod93324__93328 = cljs.core.nth.call(null,vec__93325__93326,1,null);
var pnod93324__93329 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93324__93328):pnod93324__93328);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93323__93327,pnod93324__93329);
return enfocus.core.remove_node_return_child.call(null,pnod93324__93329);
} else
{return pnod93324__93329;
}
});
enfocus.core.load_remote_dom.call(null,"slides/why-closure-lib.html");
prezo.core.slide17 = (function slide17(){
var vec__93332__93333 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-closure-lib.html");
})]));
var id_sym93330__93334 = cljs.core.nth.call(null,vec__93332__93333,0,null);
var pnod93331__93335 = cljs.core.nth.call(null,vec__93332__93333,1,null);
var pnod93331__93336 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93331__93335):pnod93331__93335);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93330__93334,pnod93331__93336);
return enfocus.core.remove_node_return_child.call(null,pnod93331__93336);
} else
{return pnod93331__93336;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-naming.html");
prezo.core.slide18 = (function slide18(){
var vec__93339__93340 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-naming.html");
})]));
var id_sym93337__93341 = cljs.core.nth.call(null,vec__93339__93340,0,null);
var pnod93338__93342 = cljs.core.nth.call(null,vec__93339__93340,1,null);
var pnod93338__93343 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93338__93342):pnod93338__93342);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93337__93341,pnod93338__93343);
return enfocus.core.remove_node_return_child.call(null,pnod93338__93343);
} else
{return pnod93338__93343;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-1.html");
prezo.core.slide19 = (function slide19(){
var vec__93346__93347 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-1.html");
})]));
var id_sym93344__93348 = cljs.core.nth.call(null,vec__93346__93347,0,null);
var pnod93345__93349 = cljs.core.nth.call(null,vec__93346__93347,1,null);
var pnod93345__93350 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93345__93349):pnod93345__93349);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93344__93348,pnod93345__93350);
return enfocus.core.remove_node_return_child.call(null,pnod93345__93350);
} else
{return pnod93345__93350;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-2.html");
prezo.core.slide20 = (function slide20(){
var vec__93353__93354 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-2.html");
})]));
var id_sym93351__93355 = cljs.core.nth.call(null,vec__93353__93354,0,null);
var pnod93352__93356 = cljs.core.nth.call(null,vec__93353__93354,1,null);
var pnod93352__93357 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93352__93356):pnod93352__93356);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93351__93355,pnod93352__93357);
return enfocus.core.remove_node_return_child.call(null,pnod93352__93357);
} else
{return pnod93352__93357;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-lib-info-3.html");
prezo.core.slide21 = (function slide21(){
var vec__93360__93361 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-lib-info-3.html");
})]));
var id_sym93358__93362 = cljs.core.nth.call(null,vec__93360__93361,0,null);
var pnod93359__93363 = cljs.core.nth.call(null,vec__93360__93361,1,null);
var pnod93359__93364 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93359__93363):pnod93359__93363);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93358__93362,pnod93359__93364);
return enfocus.core.remove_node_return_child.call(null,pnod93359__93364);
} else
{return pnod93359__93364;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-third-party-tools.html");
prezo.core.slide22 = (function slide22(){
var vec__93367__93368 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-third-party-tools.html");
})]));
var id_sym93365__93369 = cljs.core.nth.call(null,vec__93367__93368,0,null);
var pnod93366__93370 = cljs.core.nth.call(null,vec__93367__93368,1,null);
var pnod93366__93371 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93366__93370):pnod93366__93370);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93365__93369,pnod93366__93371);
return enfocus.core.remove_node_return_child.call(null,pnod93366__93371);
} else
{return pnod93366__93371;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-externs-foreign-libs.html");
prezo.core.slide23 = (function slide23(){
var vec__93374__93375 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-externs-foreign-libs.html");
})]));
var id_sym93372__93376 = cljs.core.nth.call(null,vec__93374__93375,0,null);
var pnod93373__93377 = cljs.core.nth.call(null,vec__93374__93375,1,null);
var pnod93373__93378 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93373__93377):pnod93373__93377);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93372__93376,pnod93373__93378);
return enfocus.core.remove_node_return_child.call(null,pnod93373__93378);
} else
{return pnod93373__93378;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide24 = (function slide24(){
var vec__93381__93382 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym93379__93383 = cljs.core.nth.call(null,vec__93381__93382,0,null);
var pnod93380__93384 = cljs.core.nth.call(null,vec__93381__93382,1,null);
var pnod93380__93385 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93380__93384):pnod93380__93384);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93379__93383,pnod93380__93385);
return enfocus.core.remove_node_return_child.call(null,pnod93380__93385);
} else
{return pnod93380__93385;
}
});
enfocus.core.load_remote_dom.call(null,"slides/closure-extern-cost.html");
prezo.core.slide25 = (function slide25(){
var vec__93388__93389 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/closure-extern-cost.html");
})]));
var id_sym93386__93390 = cljs.core.nth.call(null,vec__93388__93389,0,null);
var pnod93387__93391 = cljs.core.nth.call(null,vec__93388__93389,1,null);
var pnod93387__93392 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93387__93391):pnod93387__93391);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93386__93390,pnod93387__93392);
return enfocus.core.remove_node_return_child.call(null,pnod93387__93392);
} else
{return pnod93387__93392;
}
});
enfocus.core.load_remote_dom.call(null,"slides/managing-upstream-deps.html");
prezo.core.slide26 = (function slide26(){
var vec__93395__93396 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/managing-upstream-deps.html");
})]));
var id_sym93393__93397 = cljs.core.nth.call(null,vec__93395__93396,0,null);
var pnod93394__93398 = cljs.core.nth.call(null,vec__93395__93396,1,null);
var pnod93394__93399 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93394__93398):pnod93394__93398);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93393__93397,pnod93394__93399);
return enfocus.core.remove_node_return_child.call(null,pnod93394__93399);
} else
{return pnod93394__93399;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-1.html");
prezo.core.slide27 = (function slide27(){
var vec__93402__93403 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-1.html");
})]));
var id_sym93400__93404 = cljs.core.nth.call(null,vec__93402__93403,0,null);
var pnod93401__93405 = cljs.core.nth.call(null,vec__93402__93403,1,null);
var pnod93401__93406 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93401__93405):pnod93401__93405);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93400__93404,pnod93401__93406);
return enfocus.core.remove_node_return_child.call(null,pnod93401__93406);
} else
{return pnod93401__93406;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-2.html");
prezo.core.slide28 = (function slide28(){
var vec__93409__93410 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-2.html");
})]));
var id_sym93407__93411 = cljs.core.nth.call(null,vec__93409__93410,0,null);
var pnod93408__93412 = cljs.core.nth.call(null,vec__93409__93410,1,null);
var pnod93408__93413 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93408__93412):pnod93408__93412);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93407__93411,pnod93408__93413);
return enfocus.core.remove_node_return_child.call(null,pnod93408__93413);
} else
{return pnod93408__93413;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-3.html");
prezo.core.slide29 = (function slide29(){
var vec__93416__93417 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-3.html");
})]));
var id_sym93414__93418 = cljs.core.nth.call(null,vec__93416__93417,0,null);
var pnod93415__93419 = cljs.core.nth.call(null,vec__93416__93417,1,null);
var pnod93415__93420 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93415__93419):pnod93415__93419);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93414__93418,pnod93415__93420);
return enfocus.core.remove_node_return_child.call(null,pnod93415__93420);
} else
{return pnod93415__93420;
}
});
enfocus.core.load_remote_dom.call(null,"slides/challenges-4.html");
prezo.core.slide30 = (function slide30(){
var vec__93423__93424 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/challenges-4.html");
})]));
var id_sym93421__93425 = cljs.core.nth.call(null,vec__93423__93424,0,null);
var pnod93422__93426 = cljs.core.nth.call(null,vec__93423__93424,1,null);
var pnod93422__93427 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93422__93426):pnod93422__93426);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93421__93425,pnod93422__93427);
return enfocus.core.remove_node_return_child.call(null,pnod93422__93427);
} else
{return pnod93422__93427;
}
});
enfocus.core.load_remote_dom.call(null,"slides/parting-advice.html");
prezo.core.slide31 = (function slide31(){
var vec__93430__93431 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/parting-advice.html");
})]));
var id_sym93428__93432 = cljs.core.nth.call(null,vec__93430__93431,0,null);
var pnod93429__93433 = cljs.core.nth.call(null,vec__93430__93431,1,null);
var pnod93429__93434 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93429__93433):pnod93429__93433);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93428__93432,pnod93429__93434);
return enfocus.core.remove_node_return_child.call(null,pnod93429__93434);
} else
{return pnod93429__93434;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide32 = (function slide32(){
var vec__93437__93438 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym93435__93439 = cljs.core.nth.call(null,vec__93437__93438,0,null);
var pnod93436__93440 = cljs.core.nth.call(null,vec__93437__93438,1,null);
var pnod93436__93441 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93436__93440):pnod93436__93440);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93435__93439,pnod93436__93441);
return enfocus.core.remove_node_return_child.call(null,pnod93436__93441);
} else
{return pnod93436__93441;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide33 = (function slide33(){
var vec__93444__93445 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym93442__93446 = cljs.core.nth.call(null,vec__93444__93445,0,null);
var pnod93443__93447 = cljs.core.nth.call(null,vec__93444__93445,1,null);
var pnod93443__93448 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod93443__93447):pnod93443__93447);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym93442__93446,pnod93443__93448);
return enfocus.core.remove_node_return_child.call(null,pnod93443__93448);
} else
{return pnod93443__93448;
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
var nods__3015__auto____93450 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93449){
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,enfocus.core.css_select.call(null,"",pnod93449,cljs.core.Vector.fromArray(["#port-text"])));
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,enfocus.core.css_select.call(null,"",pnod93449,cljs.core.Vector.fromArray(["#huh-text"])));
return pnod93449;
}),nods__3015__auto____93450));
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
return prezo.core.transition_slide.call(null,prezo.core.slide14_5);
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14_5);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"java-code"));
return prezo.util.by_id.call(null,"java-code");
}),(function actions(){
prezo.core.reset_slide.call(null,prezo.core.slide14_5);
enfocus.core.en_set_style.call(null,"﷐'display","").call(null,prezo.util.by_id.call(null,"clojure-code"));
return prezo.util.by_id.call(null,"clojure-code");
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
var nods__3015__auto____93452 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93451){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod93451,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod93451,cljs.core.Vector.fromArray(["input"])));
return pnod93451;
}),nods__3015__auto____93452));
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
var size__93453 = goog.dom.getViewportSize.call(null);

enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,-300,(size__93453.height + 300),0,null,null),enfocus.core.en_set_style.call(null,"﷐'display",""),enfocus.core.chainable_standard.call(null,(function (pnod__3168__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__3015__auto____93455 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_move.call(null,(size__93453.width + 200),-300,1000,null,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93454){
return pnod93454;
}),nods__3015__auto____93455));
return enfocus.core.en_move.call(null,(size__93453.width + 200),-300,1000,null,null);
})().call(null,pnod__3168__auto__);
}),1000);
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
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__93456_SHARP_){
return ((p1__93456_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__93457_SHARP_){
return ((p1__93457_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__93458 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__93458.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__3015__auto____93460 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93459){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod93459,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod93459,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod93459,cljs.core.Vector.fromArray([".slide"])));
return pnod93459;
}),nods__3015__auto____93460));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__3015__auto____93462 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod93461){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod93461,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod93461,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=100)").call(null,enfocus.core.css_select.call(null,"",pnod93461,cljs.core.Vector.fromArray([".slide"])));
return pnod93461;
}),nods__3015__auto____93462));
return document;
});
