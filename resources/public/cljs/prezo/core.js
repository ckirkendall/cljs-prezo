goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2582__auto____2781 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2780){
(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2757__auto__,(function (pnod__2757__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2757__auto__,(function (pnod__2756__auto__){
return (function (p1__2779_SHARP_){
var nods__2582__auto____2783 = enfocus.core.nodes__GT_coll.call(null,p1__2779_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2782){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2782,cljs.core.Vector.fromArray([".slide"])));
return pnod2782;
}),nods__2582__auto____2783));
return p1__2779_SHARP_;
}).call(null,pnod__2756__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2780,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2780;
}),nods__2582__auto____2781));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2582__auto____2785 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2784){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2784,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2784;
}),nods__2582__auto____2785));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__2786 = goog.dom.getViewportSize.call(null);
var width__2787 = (size__2786.width - 40);
var height__2788 = (size__2786.height - 80);

return prezo.core.resize_pane.call(null,width__2787,height__2788);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__2789 = goog.dom.getViewportSize.call(null);
var width__2790 = (size__2789.width - 40);
var height__2791 = (size__2789.height - 80);

prezo.core.setup_pane.call(null,width__2790,height__2791);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2582__auto____2794 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2793){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2793,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod2793;
}),nods__2582__auto____2794));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__2792_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__2792_SHARP_.keyCode);
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
var vec__2797__2798 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym2795__2799 = cljs.core.nth.call(null,vec__2797__2798,0,null);
var pnod2796__2800 = cljs.core.nth.call(null,vec__2797__2798,1,null);
var pnod2796__2801 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2796__2800):pnod2796__2800);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2795__2799,pnod2796__2801);
return enfocus.core.remove_node_return_child.call(null,pnod2796__2801);
} else
{return pnod2796__2801;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__2804__2805 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym2802__2806 = cljs.core.nth.call(null,vec__2804__2805,0,null);
var pnod2803__2807 = cljs.core.nth.call(null,vec__2804__2805,1,null);
var pnod2803__2808 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2803__2807):pnod2803__2807);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2802__2806,pnod2803__2808);
return enfocus.core.remove_node_return_child.call(null,pnod2803__2808);
} else
{return pnod2803__2808;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__2811__2812 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym2809__2813 = cljs.core.nth.call(null,vec__2811__2812,0,null);
var pnod2810__2814 = cljs.core.nth.call(null,vec__2811__2812,1,null);
var pnod2810__2815 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2810__2814):pnod2810__2814);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2809__2813,pnod2810__2815);
return enfocus.core.remove_node_return_child.call(null,pnod2810__2815);
} else
{return pnod2810__2815;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__2818__2819 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym2816__2820 = cljs.core.nth.call(null,vec__2818__2819,0,null);
var pnod2817__2821 = cljs.core.nth.call(null,vec__2818__2819,1,null);
var pnod2817__2822 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2817__2821):pnod2817__2821);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2816__2820,pnod2817__2822);
return enfocus.core.remove_node_return_child.call(null,pnod2817__2822);
} else
{return pnod2817__2822;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__2825__2826 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym2823__2827 = cljs.core.nth.call(null,vec__2825__2826,0,null);
var pnod2824__2828 = cljs.core.nth.call(null,vec__2825__2826,1,null);
var pnod2824__2829 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2824__2828):pnod2824__2828);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2823__2827,pnod2824__2829);
return enfocus.core.remove_node_return_child.call(null,pnod2824__2829);
} else
{return pnod2824__2829;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__2832__2833 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym2830__2834 = cljs.core.nth.call(null,vec__2832__2833,0,null);
var pnod2831__2835 = cljs.core.nth.call(null,vec__2832__2833,1,null);
var pnod2831__2836 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2831__2835):pnod2831__2835);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2830__2834,pnod2831__2836);
return enfocus.core.remove_node_return_child.call(null,pnod2831__2836);
} else
{return pnod2831__2836;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__2839__2840 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym2837__2841 = cljs.core.nth.call(null,vec__2839__2840,0,null);
var pnod2838__2842 = cljs.core.nth.call(null,vec__2839__2840,1,null);
var pnod2838__2843 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2838__2842):pnod2838__2842);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2837__2841,pnod2838__2843);
return enfocus.core.remove_node_return_child.call(null,pnod2838__2843);
} else
{return pnod2838__2843;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__2846__2847 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym2844__2848 = cljs.core.nth.call(null,vec__2846__2847,0,null);
var pnod2845__2849 = cljs.core.nth.call(null,vec__2846__2847,1,null);
var pnod2845__2850 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2845__2849):pnod2845__2849);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2844__2848,pnod2845__2850);
return enfocus.core.remove_node_return_child.call(null,pnod2845__2850);
} else
{return pnod2845__2850;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__2853__2854 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym2851__2855 = cljs.core.nth.call(null,vec__2853__2854,0,null);
var pnod2852__2856 = cljs.core.nth.call(null,vec__2853__2854,1,null);
var pnod2852__2857 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2852__2856):pnod2852__2856);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2851__2855,pnod2852__2857);
return enfocus.core.remove_node_return_child.call(null,pnod2852__2857);
} else
{return pnod2852__2857;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__2860__2861 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym2858__2862 = cljs.core.nth.call(null,vec__2860__2861,0,null);
var pnod2859__2863 = cljs.core.nth.call(null,vec__2860__2861,1,null);
var pnod2859__2864 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2859__2863):pnod2859__2863);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2858__2862,pnod2859__2864);
return enfocus.core.remove_node_return_child.call(null,pnod2859__2864);
} else
{return pnod2859__2864;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__2867__2868 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym2865__2869 = cljs.core.nth.call(null,vec__2867__2868,0,null);
var pnod2866__2870 = cljs.core.nth.call(null,vec__2867__2868,1,null);
var pnod2866__2871 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2866__2870):pnod2866__2870);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2865__2869,pnod2866__2871);
return enfocus.core.remove_node_return_child.call(null,pnod2866__2871);
} else
{return pnod2866__2871;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__2874__2875 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym2872__2876 = cljs.core.nth.call(null,vec__2874__2875,0,null);
var pnod2873__2877 = cljs.core.nth.call(null,vec__2874__2875,1,null);
var pnod2873__2878 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2873__2877):pnod2873__2877);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2872__2876,pnod2873__2878);
return enfocus.core.remove_node_return_child.call(null,pnod2873__2878);
} else
{return pnod2873__2878;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__2881__2882 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym2879__2883 = cljs.core.nth.call(null,vec__2881__2882,0,null);
var pnod2880__2884 = cljs.core.nth.call(null,vec__2881__2882,1,null);
var pnod2880__2885 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2880__2884):pnod2880__2884);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2879__2883,pnod2880__2885);
return enfocus.core.remove_node_return_child.call(null,pnod2880__2885);
} else
{return pnod2880__2885;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__2888__2889 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym2886__2890 = cljs.core.nth.call(null,vec__2888__2889,0,null);
var pnod2887__2891 = cljs.core.nth.call(null,vec__2888__2889,1,null);
var pnod2887__2892 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2887__2891):pnod2887__2891);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2886__2890,pnod2887__2892);
return enfocus.core.remove_node_return_child.call(null,pnod2887__2892);
} else
{return pnod2887__2892;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__2895__2896 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym2893__2897 = cljs.core.nth.call(null,vec__2895__2896,0,null);
var pnod2894__2898 = cljs.core.nth.call(null,vec__2895__2896,1,null);
var pnod2894__2899 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2894__2898):pnod2894__2898);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2893__2897,pnod2894__2899);
return enfocus.core.remove_node_return_child.call(null,pnod2894__2899);
} else
{return pnod2894__2899;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom1.html");
prezo.core.slide17 = (function slide17(){
var vec__2902__2903 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})]));
var id_sym2900__2904 = cljs.core.nth.call(null,vec__2902__2903,0,null);
var pnod2901__2905 = cljs.core.nth.call(null,vec__2902__2903,1,null);
var pnod2901__2906 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2901__2905):pnod2901__2905);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2900__2904,pnod2901__2906);
return enfocus.core.remove_node_return_child.call(null,pnod2901__2906);
} else
{return pnod2901__2906;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom2.html");
prezo.core.slide18 = (function slide18(){
var vec__2909__2910 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})]));
var id_sym2907__2911 = cljs.core.nth.call(null,vec__2909__2910,0,null);
var pnod2908__2912 = cljs.core.nth.call(null,vec__2909__2910,1,null);
var pnod2908__2913 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2908__2912):pnod2908__2912);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2907__2911,pnod2908__2913);
return enfocus.core.remove_node_return_child.call(null,pnod2908__2913);
} else
{return pnod2908__2913;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide19 = (function slide19(){
var vec__2916__2917 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym2914__2918 = cljs.core.nth.call(null,vec__2916__2917,0,null);
var pnod2915__2919 = cljs.core.nth.call(null,vec__2916__2917,1,null);
var pnod2915__2920 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2915__2919):pnod2915__2919);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2914__2918,pnod2915__2920);
return enfocus.core.remove_node_return_child.call(null,pnod2915__2920);
} else
{return pnod2915__2920;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cool-things-not-covered.html");
prezo.core.slide20 = (function slide20(){
var vec__2923__2924 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
})]));
var id_sym2921__2925 = cljs.core.nth.call(null,vec__2923__2924,0,null);
var pnod2922__2926 = cljs.core.nth.call(null,vec__2923__2924,1,null);
var pnod2922__2927 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2922__2926):pnod2922__2926);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2921__2925,pnod2922__2927);
return enfocus.core.remove_node_return_child.call(null,pnod2922__2927);
} else
{return pnod2922__2927;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide21 = (function slide21(){
var vec__2930__2931 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym2928__2932 = cljs.core.nth.call(null,vec__2930__2931,0,null);
var pnod2929__2933 = cljs.core.nth.call(null,vec__2930__2931,1,null);
var pnod2929__2934 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2929__2933):pnod2929__2933);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2928__2932,pnod2929__2934);
return enfocus.core.remove_node_return_child.call(null,pnod2929__2934);
} else
{return pnod2929__2934;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide22 = (function slide22(){
var vec__2937__2938 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym2935__2939 = cljs.core.nth.call(null,vec__2937__2938,0,null);
var pnod2936__2940 = cljs.core.nth.call(null,vec__2937__2938,1,null);
var pnod2936__2941 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2936__2940):pnod2936__2940);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2935__2939,pnod2936__2941);
return enfocus.core.remove_node_return_child.call(null,pnod2936__2941);
} else
{return pnod2936__2941;
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
var nods__2582__auto____2943 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2942){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod2942,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod2942,cljs.core.Vector.fromArray(["input"])));
return pnod2942;
}),nods__2582__auto____2943));
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
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__2944_SHARP_){
return ((p1__2944_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__2945_SHARP_){
return ((p1__2945_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__2946 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__2946.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2582__auto____2948 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2947){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2947,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2947,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2947,cljs.core.Vector.fromArray([".slide"])));
return pnod2947;
}),nods__2582__auto____2948));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2582__auto____2950 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2949){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2949,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod2949,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=100)").call(null,enfocus.core.css_select.call(null,"",pnod2949,cljs.core.Vector.fromArray([".slide"])));
return pnod2949;
}),nods__2582__auto____2950));
return document;
});
