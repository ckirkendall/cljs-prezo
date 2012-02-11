goog.provide('prezo.core');
goog.require('cljs.core');
goog.require('prezo.util');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('prezo.animation');
goog.require('prezo.content');
goog.require('prezo.atom');
prezo.core.setup_pane = (function setup_pane(width,height){
var nods__2702__auto____2901 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2900){
(function (pnod__2877__auto__){
return enfocus.core.en_resize.call(null,5,height,500,null,null).call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,null,null).call(null,pnod__2877__auto__,(function (pnod__2877__auto__){
return enfocus.core.en_content.call(null,prezo.core.slide1.call(null)).call(null,pnod__2877__auto__,(function (pnod__2876__auto__){
return (function (p1__2899_SHARP_){
var nods__2702__auto____2903 = enfocus.core.nodes__GT_coll.call(null,p1__2899_SHARP_);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2902){
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2902,cljs.core.Vector.fromArray([".slide"])));
return pnod2902;
}),nods__2702__auto____2903));
return p1__2899_SHARP_;
}).call(null,pnod__2876__auto__);
}));
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod2900,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2900;
}),nods__2702__auto____2901));
return document;
});
prezo.core.resize_pane = (function resize_pane(width,height){
var nods__2702__auto____2905 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2904){
enfocus.core.en_resize.call(null,width,height,200,null,null).call(null,enfocus.core.css_select.call(null,"",pnod2904,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod2904;
}),nods__2702__auto____2905));
return document;
});
prezo.core.resize_content_pane = (function resize_content_pane(){
var size__2906 = goog.dom.getViewportSize.call(null);
var width__2907 = (size__2906.width - 40);
var height__2908 = (size__2906.height - 80);

return prezo.core.resize_pane.call(null,width__2907,height__2908);
});
prezo.core.init_content_pane = (function init_content_pane(){
var size__2909 = goog.dom.getViewportSize.call(null);
var width__2910 = (size__2909.width - 40);
var height__2911 = (size__2909.height - 80);

prezo.core.setup_pane.call(null,width__2910,height__2911);
enfocus.core.en_listen.call(null,"﷐'resize",prezo.core.resize_content_pane).call(null,window);
return window;
});
prezo.core.start = (function start(){
var nods__2702__auto____2914 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2913){
enfocus.core.en_listen.call(null,"﷐'click",prezo.core.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod2913,cljs.core.Vector.fromArray(["#inner-circle"])));
return pnod2913;
}),nods__2702__auto____2914));
return document;
});
prezo.core.enable_nav_keys = (function enable_nav_keys(){
enfocus.core.en_listen.call(null,"﷐'keydown",(function (p1__2912_SHARP_){
return prezo.core.exec_action_BANG_.call(null,p1__2912_SHARP_.keyCode);
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
var vec__2917__2918 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/why-clojure.html");
})]));
var id_sym2915__2919 = cljs.core.nth.call(null,vec__2917__2918,0,null);
var pnod2916__2920 = cljs.core.nth.call(null,vec__2917__2918,1,null);
var pnod2916__2921 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2916__2920):pnod2916__2920);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2915__2919,pnod2916__2921);
return enfocus.core.remove_node_return_child.call(null,pnod2916__2921);
} else
{return pnod2916__2921;
}
});
enfocus.core.load_remote_dom.call(null,"slides/what-clojure.html");
prezo.core.slide2 = (function slide2(){
var vec__2924__2925 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/what-clojure.html");
})]));
var id_sym2922__2926 = cljs.core.nth.call(null,vec__2924__2925,0,null);
var pnod2923__2927 = cljs.core.nth.call(null,vec__2924__2925,1,null);
var pnod2923__2928 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2923__2927):pnod2923__2927);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2922__2926,pnod2923__2928);
return enfocus.core.remove_node_return_child.call(null,pnod2923__2928);
} else
{return pnod2923__2928;
}
});
enfocus.core.load_remote_dom.call(null,"slides/fear.html");
prezo.core.slide3 = (function slide3(){
var vec__2931__2932 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/fear.html");
})]));
var id_sym2929__2933 = cljs.core.nth.call(null,vec__2931__2932,0,null);
var pnod2930__2934 = cljs.core.nth.call(null,vec__2931__2932,1,null);
var pnod2930__2935 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2930__2934):pnod2930__2934);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2929__2933,pnod2930__2935);
return enfocus.core.remove_node_return_child.call(null,pnod2930__2935);
} else
{return pnod2930__2935;
}
});
enfocus.core.load_remote_dom.call(null,"slides/clojure-syntax.html");
prezo.core.slide5 = (function slide5(){
var vec__2938__2939 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/clojure-syntax.html");
})]));
var id_sym2936__2940 = cljs.core.nth.call(null,vec__2938__2939,0,null);
var pnod2937__2941 = cljs.core.nth.call(null,vec__2938__2939,1,null);
var pnod2937__2942 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2937__2941):pnod2937__2941);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2936__2940,pnod2937__2942);
return enfocus.core.remove_node_return_child.call(null,pnod2937__2942);
} else
{return pnod2937__2942;
}
});
enfocus.core.load_remote_dom.call(null,"slides/defining-functions.html");
prezo.core.slide6 = (function slide6(){
var vec__2945__2946 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/defining-functions.html");
})]));
var id_sym2943__2947 = cljs.core.nth.call(null,vec__2945__2946,0,null);
var pnod2944__2948 = cljs.core.nth.call(null,vec__2945__2946,1,null);
var pnod2944__2949 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2944__2948):pnod2944__2948);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2943__2947,pnod2944__2949);
return enfocus.core.remove_node_return_child.call(null,pnod2944__2949);
} else
{return pnod2944__2949;
}
});
enfocus.core.load_remote_dom.call(null,"slides/overloading.html");
prezo.core.slide7 = (function slide7(){
var vec__2952__2953 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/overloading.html");
})]));
var id_sym2950__2954 = cljs.core.nth.call(null,vec__2952__2953,0,null);
var pnod2951__2955 = cljs.core.nth.call(null,vec__2952__2953,1,null);
var pnod2951__2956 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2951__2955):pnod2951__2955);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2950__2954,pnod2951__2956);
return enfocus.core.remove_node_return_child.call(null,pnod2951__2956);
} else
{return pnod2951__2956;
}
});
enfocus.core.load_remote_dom.call(null,"slides/deconstruction.html");
prezo.core.slide8 = (function slide8(){
var vec__2959__2960 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/deconstruction.html");
})]));
var id_sym2957__2961 = cljs.core.nth.call(null,vec__2959__2960,0,null);
var pnod2958__2962 = cljs.core.nth.call(null,vec__2959__2960,1,null);
var pnod2958__2963 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2958__2962):pnod2958__2962);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2957__2961,pnod2958__2963);
return enfocus.core.remove_node_return_child.call(null,pnod2958__2963);
} else
{return pnod2958__2963;
}
});
enfocus.core.load_remote_dom.call(null,"slides/assigning-vars.html");
prezo.core.slide9 = (function slide9(){
var vec__2966__2967 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/assigning-vars.html");
})]));
var id_sym2964__2968 = cljs.core.nth.call(null,vec__2966__2967,0,null);
var pnod2965__2969 = cljs.core.nth.call(null,vec__2966__2967,1,null);
var pnod2965__2970 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2965__2969):pnod2965__2969);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2964__2968,pnod2965__2970);
return enfocus.core.remove_node_return_child.call(null,pnod2965__2970);
} else
{return pnod2965__2970;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-interop.html");
prezo.core.slide10 = (function slide10(){
var vec__2973__2974 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-interop.html");
})]));
var id_sym2971__2975 = cljs.core.nth.call(null,vec__2973__2974,0,null);
var pnod2972__2976 = cljs.core.nth.call(null,vec__2973__2974,1,null);
var pnod2972__2977 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2972__2976):pnod2972__2976);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2971__2975,pnod2972__2977);
return enfocus.core.remove_node_return_child.call(null,pnod2972__2977);
} else
{return pnod2972__2977;
}
});
enfocus.core.load_remote_dom.call(null,"slides/js-namespaces.html");
prezo.core.slide11 = (function slide11(){
var vec__2980__2981 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/js-namespaces.html");
})]));
var id_sym2978__2982 = cljs.core.nth.call(null,vec__2980__2981,0,null);
var pnod2979__2983 = cljs.core.nth.call(null,vec__2980__2981,1,null);
var pnod2979__2984 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2979__2983):pnod2979__2983);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2978__2982,pnod2979__2984);
return enfocus.core.remove_node_return_child.call(null,pnod2979__2984);
} else
{return pnod2979__2984;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cljs-namespaces.html");
prezo.core.slide12 = (function slide12(){
var vec__2987__2988 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cljs-namespaces.html");
})]));
var id_sym2985__2989 = cljs.core.nth.call(null,vec__2987__2988,0,null);
var pnod2986__2990 = cljs.core.nth.call(null,vec__2987__2988,1,null);
var pnod2986__2991 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2986__2990):pnod2986__2990);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2985__2989,pnod2986__2991);
return enfocus.core.remove_node_return_child.call(null,pnod2986__2991);
} else
{return pnod2986__2991;
}
});
enfocus.core.load_remote_dom.call(null,"slides/thats-nice.html");
prezo.core.slide13 = (function slide13(){
var vec__2994__2995 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/thats-nice.html");
})]));
var id_sym2992__2996 = cljs.core.nth.call(null,vec__2994__2995,0,null);
var pnod2993__2997 = cljs.core.nth.call(null,vec__2994__2995,1,null);
var pnod2993__2998 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2993__2997):pnod2993__2997);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2992__2996,pnod2993__2998);
return enfocus.core.remove_node_return_child.call(null,pnod2993__2998);
} else
{return pnod2993__2998;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-js.html");
prezo.core.slide14 = (function slide14(){
var vec__3001__3002 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-js.html");
})]));
var id_sym2999__3003 = cljs.core.nth.call(null,vec__3001__3002,0,null);
var pnod3000__3004 = cljs.core.nth.call(null,vec__3001__3002,1,null);
var pnod3000__3005 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3000__3004):pnod3000__3004);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2999__3003,pnod3000__3005);
return enfocus.core.remove_node_return_child.call(null,pnod3000__3005);
} else
{return pnod3000__3005;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example1-jquery-cljs.html");
prezo.core.slide15 = (function slide15(){
var vec__3008__3009 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example1-jquery-cljs.html");
})]));
var id_sym3006__3010 = cljs.core.nth.call(null,vec__3008__3009,0,null);
var pnod3007__3011 = cljs.core.nth.call(null,vec__3008__3009,1,null);
var pnod3007__3012 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3007__3011):pnod3007__3011);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3006__3010,pnod3007__3012);
return enfocus.core.remove_node_return_child.call(null,pnod3007__3012);
} else
{return pnod3007__3012;
}
});
enfocus.core.load_remote_dom.call(null,"slides/example2-protocols.html");
prezo.core.slide16 = (function slide16(){
var vec__3015__3016 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/example2-protocols.html");
})]));
var id_sym3013__3017 = cljs.core.nth.call(null,vec__3015__3016,0,null);
var pnod3014__3018 = cljs.core.nth.call(null,vec__3015__3016,1,null);
var pnod3014__3019 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3014__3018):pnod3014__3018);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3013__3017,pnod3014__3019);
return enfocus.core.remove_node_return_child.call(null,pnod3014__3019);
} else
{return pnod3014__3019;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom1.html");
prezo.core.slide17 = (function slide17(){
var vec__3022__3023 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom1.html");
})]));
var id_sym3020__3024 = cljs.core.nth.call(null,vec__3022__3023,0,null);
var pnod3021__3025 = cljs.core.nth.call(null,vec__3022__3023,1,null);
var pnod3021__3026 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3021__3025):pnod3021__3025);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3020__3024,pnod3021__3026);
return enfocus.core.remove_node_return_child.call(null,pnod3021__3026);
} else
{return pnod3021__3026;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom2.html");
prezo.core.slide18 = (function slide18(){
var vec__3029__3030 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom2.html");
})]));
var id_sym3027__3031 = cljs.core.nth.call(null,vec__3029__3030,0,null);
var pnod3028__3032 = cljs.core.nth.call(null,vec__3029__3030,1,null);
var pnod3028__3033 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3028__3032):pnod3028__3032);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3027__3031,pnod3028__3033);
return enfocus.core.remove_node_return_child.call(null,pnod3028__3033);
} else
{return pnod3028__3033;
}
});
enfocus.core.load_remote_dom.call(null,"slides/atom-demo.html");
prezo.core.slide19 = (function slide19(){
var vec__3036__3037 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/atom-demo.html");
})]));
var id_sym3034__3038 = cljs.core.nth.call(null,vec__3036__3037,0,null);
var pnod3035__3039 = cljs.core.nth.call(null,vec__3036__3037,1,null);
var pnod3035__3040 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3035__3039):pnod3035__3039);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3034__3038,pnod3035__3040);
return enfocus.core.remove_node_return_child.call(null,pnod3035__3040);
} else
{return pnod3035__3040;
}
});
enfocus.core.load_remote_dom.call(null,"slides/cool-things-not-covered.html");
prezo.core.slide20 = (function slide20(){
var vec__3043__3044 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/cool-things-not-covered.html");
})]));
var id_sym3041__3045 = cljs.core.nth.call(null,vec__3043__3044,0,null);
var pnod3042__3046 = cljs.core.nth.call(null,vec__3043__3044,1,null);
var pnod3042__3047 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3042__3046):pnod3042__3046);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3041__3045,pnod3042__3047);
return enfocus.core.remove_node_return_child.call(null,pnod3042__3047);
} else
{return pnod3042__3047;
}
});
enfocus.core.load_remote_dom.call(null,"slides/about-prezo.html");
prezo.core.slide21 = (function slide21(){
var vec__3050__3051 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/about-prezo.html");
})]));
var id_sym3048__3052 = cljs.core.nth.call(null,vec__3050__3051,0,null);
var pnod3049__3053 = cljs.core.nth.call(null,vec__3050__3051,1,null);
var pnod3049__3054 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3049__3053):pnod3049__3053);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3048__3052,pnod3049__3054);
return enfocus.core.remove_node_return_child.call(null,pnod3049__3054);
} else
{return pnod3049__3054;
}
});
enfocus.core.load_remote_dom.call(null,"slides/question.html");
prezo.core.slide22 = (function slide22(){
var vec__3057__3058 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"slides/question.html");
})]));
var id_sym3055__3059 = cljs.core.nth.call(null,vec__3057__3058,0,null);
var pnod3056__3060 = cljs.core.nth.call(null,vec__3057__3058,1,null);
var pnod3056__3061 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3056__3060):pnod3056__3060);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym3055__3059,pnod3056__3061);
return enfocus.core.remove_node_return_child.call(null,pnod3056__3061);
} else
{return pnod3056__3061;
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
var nods__2702__auto____3063 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3062){
enfocus.core.en_listen.call(null,"﷐'click",prezo.atom.persist_user_form).call(null,enfocus.core.css_select.call(null,"",pnod3062,cljs.core.Vector.fromArray(["#user-submit"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'focus",prezo.core.disable_nav_keys),enfocus.core.en_listen.call(null,"﷐'blur",prezo.core.enable_nav_keys)).call(null,enfocus.core.css_select.call(null,"",pnod3062,cljs.core.Vector.fromArray(["input"])));
return pnod3062;
}),nods__2702__auto____3063));
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
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__3064_SHARP_){
return ((p1__3064_SHARP_ - 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,prezo.core.start_key_codes,keycode)))
{cljs.core.reset_BANG_.call(null,prezo.core.action_index,0);
} else
{if(cljs.core.truth_("﷐'else"))
{cljs.core.swap_BANG_.call(null,prezo.core.action_index,(function (p1__3065_SHARP_){
return ((p1__3065_SHARP_ + 1) % cljs.core.count.call(null,prezo.core.actions));
}));
} else
{}
}
}
var func__3066 = cljs.core.nth.call(null,prezo.core.actions,cljs.core.deref.call(null,prezo.core.action_index));

return func__3066.call(null);
});
prezo.core.transition_slide = (function transition_slide(init_func){
var nods__2702__auto____3068 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3067){
enfocus.core.en_fade_out.call(null,2000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod3067,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod3067,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_fade_in.call(null,1000,null,null).call(null,enfocus.core.css_select.call(null,"",pnod3067,cljs.core.Vector.fromArray([".slide"])));
return pnod3067;
}),nods__2702__auto____3068));
return document;
});
prezo.core.reset_slide = (function reset_slide(init_func){
var nods__2702__auto____3070 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod3069){
enfocus.core.en_content.call(null,init_func.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod3069,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_set_style.call(null,"﷐'opacity","1.0").call(null,enfocus.core.css_select.call(null,"",pnod3069,cljs.core.Vector.fromArray([".slide"])));
enfocus.core.en_set_style.call(null,"﷐'filter","alpha(opacity=100)").call(null,enfocus.core.css_select.call(null,"",pnod3069,cljs.core.Vector.fromArray([".slide"])));
return pnod3069;
}),nods__2702__auto____3070));
return document;
});
