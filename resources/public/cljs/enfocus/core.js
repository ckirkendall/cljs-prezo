goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.fx');
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____83876 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____83876))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____83876;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce.call(null,func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((window === nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3548__auto____83878 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____83878))
{return or__3548__auto____83878;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__509__auto____83883 = (function iter__83879(s__83880){
return (new cljs.core.LazySeq(null,false,(function (){
var s__83880__83881 = s__83880;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__83880__83881)))
{var x__83882 = cljs.core.first.call(null,s__83880__83881);

return cljs.core.cons.call(null,(nl[x__83882]),iter__83879.call(null,cljs.core.rest.call(null,s__83880__83881)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____83883.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__83877_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__83877_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__83877_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__83877_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__83884__83885 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__83884__83885))
{var G__83887__83889 = cljs.core.first.call(null,G__83884__83885);
var vec__83888__83890 = G__83887__83889;
var attr__83891 = cljs.core.nth.call(null,vec__83888__83890,0,null);
var value__83892 = cljs.core.nth.call(null,vec__83888__83890,1,null);
var G__83884__83893 = G__83884__83885;

var G__83887__83894 = G__83887__83889;
var G__83884__83895 = G__83884__83893;

while(true){
var vec__83896__83897 = G__83887__83894;
var attr__83898 = cljs.core.nth.call(null,vec__83896__83897,0,null);
var value__83899 = cljs.core.nth.call(null,vec__83896__83897,1,null);
var G__83884__83900 = G__83884__83895;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__83898),value__83899);
var temp__3698__auto____83901 = cljs.core.next.call(null,G__83884__83900);

if(cljs.core.truth_(temp__3698__auto____83901))
{var G__83884__83902 = temp__3698__auto____83901;

{
var G__83903 = cljs.core.first.call(null,G__83884__83902);
var G__83904 = G__83884__83902;
G__83887__83894 = G__83903;
G__83884__83895 = G__83904;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__83905__83906 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__83905__83906))
{var attr__83907 = cljs.core.first.call(null,G__83905__83906);
var G__83905__83908 = G__83905__83906;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__83907),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__83907));
}
var temp__3698__auto____83909 = cljs.core.next.call(null,G__83905__83908);

if(cljs.core.truth_(temp__3698__auto____83909))
{var G__83905__83910 = temp__3698__auto____83909;

{
var G__83911 = cljs.core.first.call(null,G__83905__83910);
var G__83912 = G__83905__83910;
attr__83907 = G__83911;
G__83905__83908 = G__83912;
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
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return cljs.core.str.call(null,"__ef_effect_",etype);
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__83913 = parent;
var G__83914 = child.parentNode;
parent = G__83913;
child = G__83914;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__83915 = e.relatedTarget;
var this$__83916 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____83917 = cljs.core.not.call(null,(re__83915 === this$__83916));

if(cljs.core.truth_(and__3546__auto____83917))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__83916,re__83915));
} else
{return and__3546__auto____83917;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if(cljs.core.truth_((step < 0)))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__83937 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__83918__83919 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__83918__83919))
{var G__83921__83923 = cljs.core.first.call(null,G__83918__83919);
var vec__83922__83924 = G__83921__83923;
var k__83925 = cljs.core.nth.call(null,vec__83922__83924,0,null);
var v__83926 = cljs.core.nth.call(null,vec__83922__83924,1,null);
var G__83918__83927 = G__83918__83919;

var G__83921__83928 = G__83921__83923;
var G__83918__83929 = G__83918__83927;

while(true){
var vec__83930__83931 = G__83921__83928;
var k__83932 = cljs.core.nth.call(null,vec__83930__83931,0,null);
var v__83933 = cljs.core.nth.call(null,vec__83930__83931,1,null);
var G__83918__83934 = G__83918__83929;

add_map_attrs.call(null,elem,k__83932,v__83933);
var temp__3698__auto____83935 = cljs.core.next.call(null,G__83918__83934);

if(cljs.core.truth_(temp__3698__auto____83935))
{var G__83918__83936 = temp__3698__auto____83935;

{
var G__83940 = cljs.core.first.call(null,G__83918__83936);
var G__83941 = G__83918__83936;
G__83921__83928 = G__83940;
G__83918__83929 = G__83941;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__83938 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__83937.call(this,elem,k);
case  3 :
return add_map_attrs__83938.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__83942 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__83942.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__83942);
return div__83942;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__83943 = div.childNodes;
var frag__83944 = document.createDocumentFragment();

goog.dom.append.call(null,frag__83944,child__83943);
goog.dom.removeNode.call(null,div);
return frag__83944;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__83946 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__83947 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__83947),text.replace(re__83946,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__83947,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__83948 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__83949 = enfocus.core.nodes__GT_coll.call(null,id_nodes__83948);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__83945_SHARP_){
var id__83950 = p1__83945_SHARP_.getAttribute("id");
var rid__83951 = id__83950.replace(sym,"");

return p1__83945_SHARP_.setAttribute("id",rid__83951);
}),nod_col__83949));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__83952 = (new goog.net.XhrIo());
var callback__83962 = (function (req){
var text__83954 = req.getResponseText();
var vec__83953__83955 = enfocus.core.replace_ids.call(null,text__83954);
var sym__83956 = cljs.core.nth.call(null,vec__83953__83955,0,null);
var txt__83957 = cljs.core.nth.call(null,vec__83953__83955,1,null);
var data__83958 = goog.dom.htmlToDocumentFragment.call(null,txt__83957);
var body__83959 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__83958,"body")));

if(cljs.core.truth_(body__83959))
{var frag__83960 = document.createDocumentFragment();
var childs__83961 = frag__83960.childNodes;

goog.dom.append.call(null,frag__83960,childs__83961);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__83956,frag__83960]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__83956,data__83958]));
}
});

goog.events.listen.call(null,req__83952,goog.net.EventType.COMPLETE,(function (){
callback__83962.call(null,req__83952);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__83952.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__83963 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__83963))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__83963),cljs.core.second.call(null,nod__83963).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__83964 = enfocus.core.create_sel_str.call(null,sel);
var cache__83965 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__83964)));

if(cljs.core.truth_(cache__83965))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__83965),cljs.core.second.call(null,cache__83965).cloneNode(true)]);
} else
{var vec__83966__83967 = enfocus.core.get_cached_dom.call(null,uri);
var sym__83968 = cljs.core.nth.call(null,vec__83966__83967,0,null);
var tdom__83969 = cljs.core.nth.call(null,vec__83966__83967,1,null);
var dom__83970 = enfocus.core.create_hidden_dom.call(null,tdom__83969);
var tsnip__83971 = enfocus.core.css_select.call(null,dom__83970,sel_str__83964);
var snip__83972 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__83971))?cljs.core.first.call(null,tsnip__83971):tsnip__83971);

enfocus.core.remove_node_return_child.call(null,dom__83970);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__83964),cljs.core.Vector.fromArray([sym__83968,snip__83972]));
return cljs.core.Vector.fromArray([sym__83968,snip__83972]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__83973 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__83974 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__83973));

if(cljs.core.truth_((cljs.core.count.call(null,result__83974) <= 1)))
{return cljs.core.first.call(null,result__83974);
} else
{return result__83974;
}
});
});
/**
* wrapper function for transforms, maps the transform to all nodes returned
* by the selector and provides the ability to chain transforms with the chain command.
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__83977 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__83978 = (function (pnodes,chain){
var pnod_col__83976 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__83976));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__83977.call(this,pnodes);
case  2 :
return trans__83978.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__83984 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__83985 = (function (pnodes,chain){
var pnod_col__83981 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__83982 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__83981));
var partial_cback__83983 = (function (){
cljs.core.swap_BANG_.call(null,cnt__83982,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__83982))))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,callback))))
{callback.call(null,pnodes);
} else
{}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__83975_SHARP_){
return func.call(null,p1__83975_SHARP_,partial_cback__83983);
}),pnod_col__83981));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__83984.call(this,pnodes);
case  2 :
return trans__83985.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* HOF to remove the duplicate code in transformation that handle creating a
* fragment and applying it in some way to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__83987 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__83988 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__83980_SHARP_){
return goog.dom.appendChild.call(null,frag__83988,p1__83980_SHARP_.cloneNode(true));
}),fnodes__83987));
return func.call(null,pnod,frag__83988);
}));
});
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__83989){
var values = cljs.core.seq( arglist__83989 );;
return en_content__delegate.call(this, values);
});
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__83990 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__83990);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__83992 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__83993){
var vec__83994__83995 = p__83993;
var a__83996 = cljs.core.nth.call(null,vec__83994__83995,0,null);
var v__83997 = cljs.core.nth.call(null,vec__83994__83995,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__83996),v__83997);
}),at_lst__83992));
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__83998){
var values = cljs.core.seq( arglist__83998 );;
return en_set_attr__delegate.call(this, values);
});
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__83991_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__83991_SHARP_));
}),values));
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__83999){
var values = cljs.core.seq( arglist__83999 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass.call(null,el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__84000_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__84000_SHARP_);
}),values));
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__84002){
var values = cljs.core.seq( arglist__84002 );;
return en_add_class__delegate.call(this, values);
});
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__84001_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__84001_SHARP_);
}),values));
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__84004){
var values = cljs.core.seq( arglist__84004 );;
return en_remove_class__delegate.call(this, values);
});
return en_remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__84003_SHARP_){
return p1__84003_SHARP_.call(null,pnod);
}),forms));
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__84005){
var forms = cljs.core.seq( arglist__84005 );;
return en_do__GT___delegate.call(this, forms);
});
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__84006){
var values = cljs.core.seq( arglist__84006 );;
return en_append__delegate.call(this, values);
});
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
var nod__84007 = pnod.firstChild;

return pnod.insertBefore(frag,nod__84007);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__84008){
var values = cljs.core.seq( arglist__84008 );;
return en_prepend__delegate.call(this, values);
});
return en_prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingBefore.call(null,frag,pnod);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__84009){
var values = cljs.core.seq( arglist__84009 );;
return en_before__delegate.call(this, values);
});
return en_before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingAfter.call(null,frag,pnod);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__84010){
var values = cljs.core.seq( arglist__84010 );;
return en_after__delegate.call(this, values);
});
return en_after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.replaceNode.call(null,frag,pnod);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__84011){
var values = cljs.core.seq( arglist__84011 );;
return en_substitute__delegate.call(this, values);
});
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
* @param {...*} var_args
*/
enfocus.core.en_remove_node = (function() { 
var en_remove_node__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return goog.dom.removeNode.call(null,pnod);
}));
};
var en_remove_node = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_node__delegate.call(this, values);
};
en_remove_node.cljs$lang$maxFixedArity = 0;
en_remove_node.cljs$lang$applyTo = (function (arglist__84012){
var values = cljs.core.seq( arglist__84012 );;
return en_remove_node__delegate.call(this, values);
});
return en_remove_node;
})()
;
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__84013 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__84013,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__84013);
elem__84013;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__84013),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__84014 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__84014);
frag__84014;
return goog.dom.replaceNode.call(null,frag__84014,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_set.call(null,pnod,values);
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__84015){
var values = cljs.core.seq( arglist__84015 );;
return en_set_style__delegate.call(this, values);
});
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__84016){
var values = cljs.core.seq( arglist__84016 );;
return en_remove_style__delegate.call(this, values);
});
return en_remove_style;
})()
;
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
enfocus.core.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj__84017 = (new Object());

obj__84017.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__84018 = enfocus.core.mouse_enter_leave.call(null,func);

callback__84018.listen = func;
callback__84018.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__84018);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__84018);
}
});
obj__84017.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__84019 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__84020 = obj.listener;

if(cljs.core.truth_((function (){var and__3546__auto____84022 = (function (){var or__3548__auto____84021 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____84021))
{return or__3548__auto____84021;
} else
{return cljs.core._EQ_.call(null,listener__84020.listen,func);
}
})();

if(cljs.core.truth_(and__3546__auto____84022))
{var or__3548__auto____84023 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____84023))
{return or__3548__auto____84023;
} else
{return cljs.core._EQ_.call(null,listener__84020.scope,opt_scope);
}
} else
{return and__3546__auto____84022;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__84020);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__84020);
}
} else
{return null;
}
}),listeners__84019));
});
return obj__84017;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["﷐'mouseenter","﷐'mouseleave"],{"﷐'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseover"),"﷐'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__84024 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____84025 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____84025))
{return (window === pnod);
} else
{return and__3546__auto____84025;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__84024)))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__84024,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__84028 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__84028)))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__84028,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__84029 = (function (p1__84026_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__84026_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__84026_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__84026_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__84027_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__84029.call(null,p1__84027_SHARP_));
}),event_list));
}));
};
var en_remove_listeners = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listeners__delegate.call(this, event_list);
};
en_remove_listeners.cljs$lang$maxFixedArity = 0;
en_remove_listeners.cljs$lang$applyTo = (function (arglist__84030){
var event_list = cljs.core.seq( arglist__84030 );;
return en_remove_listeners__delegate.call(this, event_list);
});
return en_remove_listeners;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__84031 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__84031,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__84031.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__84032 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__84032,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__84032.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__84033 = goog.style.getSize.call(null,pnod);
var start__84034 = cljs.core.array.call(null,csize__84033.width,csize__84033.height);
var wth__84035 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__84033.width:wth);
var hgt__84036 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__84033.height:hgt);
var end__84037 = cljs.core.array.call(null,wth__84035,hgt__84036);
var anim__84038 = (new goog.fx.dom.Resize(pnod,start__84034,end__84037,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__84038,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__84038.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__84039 = goog.style.getPosition.call(null,pnod);
var start__84040 = cljs.core.array.call(null,cpos__84039.x,cpos__84039.y);
var xpos__84041 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__84039.x:xpos);
var ypos__84042 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__84039.y:ypos);
var end__84043 = cljs.core.array.call(null,xpos__84041,ypos__84042);
var anim__84044 = (new goog.fx.dom.Slide(pnod,start__84040,end__84043,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__84044,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__84044.play();
}),callback);
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_attr = (function en_get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.en_get_text = (function en_get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent.call(null,pnod);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.en_filter = (function en_filter(tst,trans){
return (function() {
var filt = null;
var filt__84048 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__84049 = (function (pnodes,chain){
var pnod_col__84045 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__84046 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__84047 = cljs.core.filter.call(null,ttest__84046,pnod_col__84045);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__84047));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__84047);
} else
{return trans.call(null,res__84047,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__84048.call(this,pnodes);
case  2 :
return filt__84049.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return filt;
})()
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,"﷐'selected",enfocus.core.selected_options);
enfocus.core.register_filter.call(null,"﷐'checked",enfocus.core.checked_radio_checkbox);
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__84052 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__84053 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__84051_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__84051_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__84051_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__84051_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__84051_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__84051_SHARP_)))
{return create_sel_str.call(null,p1__84051_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__84051_SHARP_)))
{return p1__84051_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__84052.call(this,id_mask_sym);
case  2 :
return create_sel_str__84053.call(this,id_mask_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__84057 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__84058 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__84059 = (function (id_mask_sym,dom_node,css_sel){
var sel__84055 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__84056 = goog.dom.query.call(null,sel__84055,dom_node);

return ret__84056;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__84057.call(this,id_mask_sym);
case  2 :
return css_select__84058.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__84059.call(this,id_mask_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute: css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__84061_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__84061_SHARP_),"]");
}),kys));
};
var attr_QMARK_ = function (var_args){
var kys = null;
if (goog.isDef(var_args)) {
  kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, kys);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__84062){
var kys = cljs.core.seq( arglist__84062 );;
return attr_QMARK___delegate.call(this, kys);
});
return attr_QMARK_;
})()
;
/**
* Matches any E element whose att attribute value equals 'val':
* css -> E[att=val][att2=val2]...
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___84063 = (function (){
return "";
});
var attr_EQ___84064 = (function() { 
var G__84066__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__84066 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__84066__delegate.call(this, ky, txt, forms);
};
G__84066.cljs$lang$maxFixedArity = 2;
G__84066.cljs$lang$applyTo = (function (arglist__84067){
var ky = cljs.core.first(arglist__84067);
var txt = cljs.core.first(cljs.core.next(arglist__84067));
var forms = cljs.core.rest(cljs.core.next(arglist__84067));
return G__84066__delegate.call(this, ky, txt, forms);
});
return G__84066;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___84063.call(this);
default:
return attr_EQ___84064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___84064.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__84068 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__84069 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__84068.call(this,x);
case  2 :
return nth_child__84069.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type:
* css -> E:nth-of-type(x) or E:nth-of-type(xn+y)
*/
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__84071 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__84072 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__84071.call(this,x);
case  2 :
return nth_of_type__84072.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent, counting from the last child
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__84074 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__84075 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__84074.call(this,x);
case  2 :
return nth_last_child__84075.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__84077 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__84078 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__84077.call(this,x);
case  2 :
return nth_last_of_type__84078.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
