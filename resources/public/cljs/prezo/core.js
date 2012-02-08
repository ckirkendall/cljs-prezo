goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____41806 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41805){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__41804_SHARP_){
var nods__2582__auto____41808 = enfocus.core.nodes__GT_coll.call(null,p1__41804_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41807){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod41807,cljs.core.Vector.fromArray([".slide"])));
return pnod41807;
}),nods__2582__auto____41808));
return p1__41804_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod41805,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod41805;
}),nods__2582__auto____41806));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____41810 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41809){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod41809,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod41809;
}),nods__2582__auto____41810));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__41811 = goog.dom.getViewportSize.call(null);
var width__41812 = (size__41811.width - 40);
var height__41813 = (size__41811.height - 80);

return prezo.core.resize_pane.call(null,width__41812,height__41813);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__41814 = goog.dom.getViewportSize.call(null);
var width__41815 = (size__41814.width - 40);
var height__41816 = (size__41814.height - 80);

prezo.core.setup_pane.call(null,width__41815,height__41816);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2582__auto____41819 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41818){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod41818,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod41818;
}),nods__2582__auto____41819));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__41817_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__41817_SHARP_.keyCode);
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
var vec__41822__41823 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym41820__41824 = cljs.core.nth.call(null,vec__41822__41823,0,null);
var pnod41821__41825 = cljs.core.nth.call(null,vec__41822__41823,1,null);
var pnod41821__41826 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41821__41825):pnod41821__41825);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41820__41824,pnod41821__41826);
return enfocus.core.remove_node_return_child.call(null,pnod41821__41826);
} else
{return pnod41821__41826;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__41829__41830 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym41827__41831 = cljs.core.nth.call(null,vec__41829__41830,0,null);
var pnod41828__41832 = cljs.core.nth.call(null,vec__41829__41830,1,null);
var pnod41828__41833 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41828__41832):pnod41828__41832);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41827__41831,pnod41828__41833);
return enfocus.core.remove_node_return_child.call(null,pnod41828__41833);
} else
{return pnod41828__41833;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__41836__41837 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym41834__41838 = cljs.core.nth.call(null,vec__41836__41837,0,null);
var pnod41835__41839 = cljs.core.nth.call(null,vec__41836__41837,1,null);
var pnod41835__41840 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41835__41839):pnod41835__41839);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41834__41838,pnod41835__41840);
return enfocus.core.remove_node_return_child.call(null,pnod41835__41840);
} else
{return pnod41835__41840;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__41843__41844 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym41841__41845 = cljs.core.nth.call(null,vec__41843__41844,0,null);
var pnod41842__41846 = cljs.core.nth.call(null,vec__41843__41844,1,null);
var pnod41842__41847 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41842__41846):pnod41842__41846);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41841__41845,pnod41842__41847);
return enfocus.core.remove_node_return_child.call(null,pnod41842__41847);
} else
{return pnod41842__41847;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__41850__41851 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym41848__41852 = cljs.core.nth.call(null,vec__41850__41851,0,null);
var pnod41849__41853 = cljs.core.nth.call(null,vec__41850__41851,1,null);
var pnod41849__41854 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41849__41853):pnod41849__41853);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41848__41852,pnod41849__41854);
return enfocus.core.remove_node_return_child.call(null,pnod41849__41854);
} else
{return pnod41849__41854;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__41857__41858 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym41855__41859 = cljs.core.nth.call(null,vec__41857__41858,0,null);
var pnod41856__41860 = cljs.core.nth.call(null,vec__41857__41858,1,null);
var pnod41856__41861 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41856__41860):pnod41856__41860);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41855__41859,pnod41856__41861);
return enfocus.core.remove_node_return_child.call(null,pnod41856__41861);
} else
{return pnod41856__41861;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__41864__41865 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym41862__41866 = cljs.core.nth.call(null,vec__41864__41865,0,null);
var pnod41863__41867 = cljs.core.nth.call(null,vec__41864__41865,1,null);
var pnod41863__41868 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41863__41867):pnod41863__41867);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41862__41866,pnod41863__41868);
return enfocus.core.remove_node_return_child.call(null,pnod41863__41868);
} else
{return pnod41863__41868;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__41871__41872 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym41869__41873 = cljs.core.nth.call(null,vec__41871__41872,0,null);
var pnod41870__41874 = cljs.core.nth.call(null,vec__41871__41872,1,null);
var pnod41870__41875 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41870__41874):pnod41870__41874);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41869__41873,pnod41870__41875);
return enfocus.core.remove_node_return_child.call(null,pnod41870__41875);
} else
{return pnod41870__41875;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__41878__41879 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym41876__41880 = cljs.core.nth.call(null,vec__41878__41879,0,null);
var pnod41877__41881 = cljs.core.nth.call(null,vec__41878__41879,1,null);
var pnod41877__41882 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41877__41881):pnod41877__41881);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41876__41880,pnod41877__41882);
return enfocus.core.remove_node_return_child.call(null,pnod41877__41882);
} else
{return pnod41877__41882;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__41885__41886 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym41883__41887 = cljs.core.nth.call(null,vec__41885__41886,0,null);
var pnod41884__41888 = cljs.core.nth.call(null,vec__41885__41886,1,null);
var pnod41884__41889 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41884__41888):pnod41884__41888);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41883__41887,pnod41884__41889);
return enfocus.core.remove_node_return_child.call(null,pnod41884__41889);
} else
{return pnod41884__41889;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__41892__41893 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym41890__41894 = cljs.core.nth.call(null,vec__41892__41893,0,null);
var pnod41891__41895 = cljs.core.nth.call(null,vec__41892__41893,1,null);
var pnod41891__41896 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41891__41895):pnod41891__41895);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41890__41894,pnod41891__41896);
return enfocus.core.remove_node_return_child.call(null,pnod41891__41896);
} else
{return pnod41891__41896;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__41899__41900 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym41897__41901 = cljs.core.nth.call(null,vec__41899__41900,0,null);
var pnod41898__41902 = cljs.core.nth.call(null,vec__41899__41900,1,null);
var pnod41898__41903 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41898__41902):pnod41898__41902);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41897__41901,pnod41898__41903);
return enfocus.core.remove_node_return_child.call(null,pnod41898__41903);
} else
{return pnod41898__41903;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__41906__41907 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym41904__41908 = cljs.core.nth.call(null,vec__41906__41907,0,null);
var pnod41905__41909 = cljs.core.nth.call(null,vec__41906__41907,1,null);
var pnod41905__41910 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41905__41909):pnod41905__41909);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41904__41908,pnod41905__41910);
return enfocus.core.remove_node_return_child.call(null,pnod41905__41910);
} else
{return pnod41905__41910;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__41913__41914 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym41911__41915 = cljs.core.nth.call(null,vec__41913__41914,0,null);
var pnod41912__41916 = cljs.core.nth.call(null,vec__41913__41914,1,null);
var pnod41912__41917 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41912__41916):pnod41912__41916);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41911__41915,pnod41912__41917);
return enfocus.core.remove_node_return_child.call(null,pnod41912__41917);
} else
{return pnod41912__41917;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__41920__41921 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym41918__41922 = cljs.core.nth.call(null,vec__41920__41921,0,null);
var pnod41919__41923 = cljs.core.nth.call(null,vec__41920__41921,1,null);
var pnod41919__41924 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41919__41923):pnod41919__41923);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41918__41922,pnod41919__41924);
return enfocus.core.remove_node_return_child.call(null,pnod41919__41924);
} else
{return pnod41919__41924;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom1.html");
prezo.core.slide17 = (function slide17(){
var vec__41927__41928 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})]));
var id_sym41925__41929 = cljs.core.nth.call(null,vec__41927__41928,0,null);
var pnod41926__41930 = cljs.core.nth.call(null,vec__41927__41928,1,null);
var pnod41926__41931 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41926__41930):pnod41926__41930);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41925__41929,pnod41926__41931);
return enfocus.core.remove_node_return_child.call(null,pnod41926__41931);
} else
{return pnod41926__41931;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom2.html");
prezo.core.slide18 = (function slide18(){
var vec__41934__41935 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})]));
var id_sym41932__41936 = cljs.core.nth.call(null,vec__41934__41935,0,null);
var pnod41933__41937 = cljs.core.nth.call(null,vec__41934__41935,1,null);
var pnod41933__41938 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41933__41937):pnod41933__41937);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41932__41936,pnod41933__41938);
return enfocus.core.remove_node_return_child.call(null,pnod41933__41938);
} else
{return pnod41933__41938;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide19 = (function slide19(){
var vec__41941__41942 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym41939__41943 = cljs.core.nth.call(null,vec__41941__41942,0,null);
var pnod41940__41944 = cljs.core.nth.call(null,vec__41941__41942,1,null);
var pnod41940__41945 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41940__41944):pnod41940__41944);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41939__41943,pnod41940__41945);
return enfocus.core.remove_node_return_child.call(null,pnod41940__41945);
} else
{return pnod41940__41945;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cool-things-not-covered.html");
prezo.core.slide20 = (function slide20(){
var vec__41948__41949 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
})]));
var id_sym41946__41950 = cljs.core.nth.call(null,vec__41948__41949,0,null);
var pnod41947__41951 = cljs.core.nth.call(null,vec__41948__41949,1,null);
var pnod41947__41952 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41947__41951):pnod41947__41951);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41946__41950,pnod41947__41952);
return enfocus.core.remove_node_return_child.call(null,pnod41947__41952);
} else
{return pnod41947__41952;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide21 = (function slide21(){
var vec__41955__41956 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym41953__41957 = cljs.core.nth.call(null,vec__41955__41956,0,null);
var pnod41954__41958 = cljs.core.nth.call(null,vec__41955__41956,1,null);
var pnod41954__41959 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41954__41958):pnod41954__41958);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41953__41957,pnod41954__41959);
return enfocus.core.remove_node_return_child.call(null,pnod41954__41959);
} else
{return pnod41954__41959;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide22 = (function slide22(){
var vec__41962__41963 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym41960__41964 = cljs.core.nth.call(null,vec__41962__41963,0,null);
var pnod41961__41965 = cljs.core.nth.call(null,vec__41962__41963,1,null);
var pnod41961__41966 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod41961__41965):pnod41961__41965);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym41960__41964,pnod41961__41966);
return enfocus.core.remove_node_return_child.call(null,pnod41961__41966);
} else
{return pnod41961__41966;
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
var nods__2582__auto____41968 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41967){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod41967,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod41967,cljs.core.Vector.fromArray(["input"])));
return pnod41967;
}),nods__2582__auto____41968));
return document;
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide20);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide21);
}),(function actions(){
return prezo.core.transition_slide.call(null,prezo.core.slide22);
})]);
prezo.core.back_key_codes = cljs.core.set([66,37,38,8,80]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = (function exec_action_BANG_(keycode){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.back_key_codes,keycode)))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__41969_SHARP_){
return ((p1__41969_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__41970_SHARP_){
return ((p1__41970_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__41971 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__41971.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____41973 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41972){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod41972,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod41972,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod41972,cljs.core.Vector.fromArray([".slide"])));
return pnod41972;
}),nods__2582__auto____41973));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____41975 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod41974){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod41974,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod41974,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=0)").call(null,enfocus.core.css_select.call(null,"",pnod41974,cljs.core.Vector.fromArray([".slide"])));
return pnod41974;
}),nods__2582__auto____41975));
return document;
});
