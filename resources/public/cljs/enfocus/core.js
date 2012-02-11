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
if(cljs.core.truth_((function (){var and__3546__auto____4820 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____4820))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____4820;
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
if(cljs.core.truth_((nl === null)))
{return cljs.core.Vector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((window === nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4822 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____4822))
{return or__3548__auto____4822;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__418__auto____4827 = (function iter__4823(s__4824){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4824__4825 = s__4824;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4824__4825)))
{var x__4826 = cljs.core.first.call(null,s__4824__4825);

return cljs.core.cons.call(null,(nl[x__4826]),iter__4823.call(null,cljs.core.rest.call(null,s__4824__4825)));
} else
{return null;
}
break;
}
})));
});

return iter__418__auto____4827.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__4821_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__4821_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__4821_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__4821_SHARP_);
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
var G__4828__4829 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__4828__4829))
{var G__4831__4833 = cljs.core.first.call(null,G__4828__4829);
var vec__4832__4834 = G__4831__4833;
var attr__4835 = cljs.core.nth.call(null,vec__4832__4834,0,null);
var value__4836 = cljs.core.nth.call(null,vec__4832__4834,1,null);
var G__4828__4837 = G__4828__4829;

var G__4831__4838 = G__4831__4833;
var G__4828__4839 = G__4828__4837;

while(true){
var vec__4840__4841 = G__4831__4838;
var attr__4842 = cljs.core.nth.call(null,vec__4840__4841,0,null);
var value__4843 = cljs.core.nth.call(null,vec__4840__4841,1,null);
var G__4828__4844 = G__4828__4839;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__4842),value__4843);
var temp__3698__auto____4845 = cljs.core.next.call(null,G__4828__4844);

if(cljs.core.truth_(temp__3698__auto____4845))
{var G__4828__4846 = temp__3698__auto____4845;

{
var G__4847 = cljs.core.first.call(null,G__4828__4846);
var G__4848 = G__4828__4846;
G__4831__4838 = G__4847;
G__4828__4839 = G__4848;
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
var G__4849__4850 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__4849__4850))
{var attr__4851 = cljs.core.first.call(null,G__4849__4850);
var G__4849__4852 = G__4849__4850;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__4851),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__4851));
}
var temp__3698__auto____4853 = cljs.core.next.call(null,G__4849__4852);

if(cljs.core.truth_(temp__3698__auto____4853))
{var G__4849__4854 = temp__3698__auto____4853;

{
var G__4855 = cljs.core.first.call(null,G__4849__4854);
var G__4856 = G__4849__4854;
attr__4851 = G__4855;
G__4849__4852 = G__4856;
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
var G__4857 = parent;
var G__4858 = child.parentNode;
parent = G__4857;
child = G__4858;
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
var re__4859 = e.relatedTarget;
var this$__4860 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____4861 = cljs.core.not.call(null,(re__4859 === this$__4860));

if(cljs.core.truth_(and__3546__auto____4861))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__4860,re__4859));
} else
{return and__3546__auto____4861;
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
var add_map_attrs__4881 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__4862__4863 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__4862__4863))
{var G__4865__4867 = cljs.core.first.call(null,G__4862__4863);
var vec__4866__4868 = G__4865__4867;
var k__4869 = cljs.core.nth.call(null,vec__4866__4868,0,null);
var v__4870 = cljs.core.nth.call(null,vec__4866__4868,1,null);
var G__4862__4871 = G__4862__4863;

var G__4865__4872 = G__4865__4867;
var G__4862__4873 = G__4862__4871;

while(true){
var vec__4874__4875 = G__4865__4872;
var k__4876 = cljs.core.nth.call(null,vec__4874__4875,0,null);
var v__4877 = cljs.core.nth.call(null,vec__4874__4875,1,null);
var G__4862__4878 = G__4862__4873;

add_map_attrs.call(null,elem,k__4876,v__4877);
var temp__3698__auto____4879 = cljs.core.next.call(null,G__4862__4878);

if(cljs.core.truth_(temp__3698__auto____4879))
{var G__4862__4880 = temp__3698__auto____4879;

{
var G__4884 = cljs.core.first.call(null,G__4862__4880);
var G__4885 = G__4862__4880;
G__4865__4872 = G__4884;
G__4862__4873 = G__4885;
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
var add_map_attrs__4882 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__4881.call(this,elem,k);
case  3 :
return add_map_attrs__4882.call(this,elem,k,v);
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
var div__4886 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__4886.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__4886);
return div__4886;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__4887 = div.childNodes;
var frag__4888 = document.createDocumentFragment();

goog.dom.append.call(null,frag__4888,child__4887);
goog.dom.removeNode.call(null,div);
return frag__4888;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__4890 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__4891 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__4891),text.replace(re__4890,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__4891,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__4892 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__4893 = enfocus.core.nodes__GT_coll.call(null,id_nodes__4892);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4889_SHARP_){
var id__4894 = p1__4889_SHARP_.getAttribute("id");
var rid__4895 = id__4894.replace(sym,"");

return p1__4889_SHARP_.setAttribute("id",rid__4895);
}),nod_col__4893));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri) === null)))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__4896 = (new goog.net.XhrIo());
var callback__4906 = (function (req){
var text__4898 = req.getResponseText();
var vec__4897__4899 = enfocus.core.replace_ids.call(null,text__4898);
var sym__4900 = cljs.core.nth.call(null,vec__4897__4899,0,null);
var txt__4901 = cljs.core.nth.call(null,vec__4897__4899,1,null);
var data__4902 = goog.dom.htmlToDocumentFragment.call(null,txt__4901);
var body__4903 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__4902,"body")));

if(cljs.core.truth_(body__4903))
{var frag__4904 = document.createDocumentFragment();
var childs__4905 = frag__4904.childNodes;

goog.dom.append.call(null,frag__4904,childs__4905);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__4900,frag__4904]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__4900,data__4902]));
}
});

goog.events.listen.call(null,req__4896,goog.net.EventType.COMPLETE,(function (){
callback__4906.call(null,req__4896);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__4896.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__4907 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__4907))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__4907),cljs.core.second.call(null,nod__4907).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__4908 = enfocus.core.create_sel_str.call(null,sel);
var cache__4909 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__4908)));

if(cljs.core.truth_(cache__4909))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__4909),cljs.core.second.call(null,cache__4909).cloneNode(true)]);
} else
{var vec__4910__4911 = enfocus.core.get_cached_dom.call(null,uri);
var sym__4912 = cljs.core.nth.call(null,vec__4910__4911,0,null);
var tdom__4913 = cljs.core.nth.call(null,vec__4910__4911,1,null);
var dom__4914 = enfocus.core.create_hidden_dom.call(null,tdom__4913);
var tsnip__4915 = enfocus.core.css_select.call(null,dom__4914,sel_str__4908);
var snip__4916 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__4915))?cljs.core.first.call(null,tsnip__4915):tsnip__4915);

enfocus.core.remove_node_return_child.call(null,dom__4914);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__4908),cljs.core.Vector.fromArray([sym__4912,snip__4916]));
return cljs.core.Vector.fromArray([sym__4912,snip__4916]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__4917 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__4918 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__4917));

if(cljs.core.truth_((cljs.core.count.call(null,result__4918) <= 1)))
{return cljs.core.first.call(null,result__4918);
} else
{return result__4918;
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
var trans__4921 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__4922 = (function (pnodes,chain){
var pnod_col__4920 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__4920));
if(cljs.core.truth_(cljs.core.not.call(null,(chain === null))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__4921.call(this,pnodes);
case  2 :
return trans__4922.call(this,pnodes,chain);
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
var trans__4928 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__4929 = (function (pnodes,chain){
var pnod_col__4925 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__4926 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__4925));
var partial_cback__4927 = (function (){
cljs.core.swap_BANG_.call(null,cnt__4926,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__4926))))
{if(cljs.core.truth_(cljs.core.not.call(null,(callback === null))))
{callback.call(null,pnodes);
} else
{}
if(cljs.core.truth_(cljs.core.not.call(null,(chain === null))))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4919_SHARP_){
return func.call(null,p1__4919_SHARP_,partial_cback__4927);
}),pnod_col__4925));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__4928.call(this,pnodes);
case  2 :
return trans__4929.call(this,pnodes,chain);
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
var fnodes__4931 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__4932 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4924_SHARP_){
return goog.dom.appendChild.call(null,frag__4932,p1__4924_SHARP_.cloneNode(true));
}),fnodes__4931));
return func.call(null,pnod,frag__4932);
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
en_content.cljs$lang$applyTo = (function (arglist__4933){
var values = cljs.core.seq( arglist__4933 );;
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
var frag__4934 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__4934);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__4936 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__4937){
var vec__4938__4939 = p__4937;
var a__4940 = cljs.core.nth.call(null,vec__4938__4939,0,null);
var v__4941 = cljs.core.nth.call(null,vec__4938__4939,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__4940),v__4941);
}),at_lst__4936));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__4942){
var values = cljs.core.seq( arglist__4942 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4935_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__4935_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__4943){
var values = cljs.core.seq( arglist__4943 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4944_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__4944_SHARP_);
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
en_add_class.cljs$lang$applyTo = (function (arglist__4946){
var values = cljs.core.seq( arglist__4946 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4945_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__4945_SHARP_);
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
en_remove_class.cljs$lang$applyTo = (function (arglist__4948){
var values = cljs.core.seq( arglist__4948 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4947_SHARP_){
return p1__4947_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__4949){
var forms = cljs.core.seq( arglist__4949 );;
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
en_append.cljs$lang$applyTo = (function (arglist__4950){
var values = cljs.core.seq( arglist__4950 );;
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
var nod__4951 = pnod.firstChild;

return pnod.insertBefore(frag,nod__4951);
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
en_prepend.cljs$lang$applyTo = (function (arglist__4952){
var values = cljs.core.seq( arglist__4952 );;
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
en_before.cljs$lang$applyTo = (function (arglist__4953){
var values = cljs.core.seq( arglist__4953 );;
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
en_after.cljs$lang$applyTo = (function (arglist__4954){
var values = cljs.core.seq( arglist__4954 );;
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
en_substitute.cljs$lang$applyTo = (function (arglist__4955){
var values = cljs.core.seq( arglist__4955 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__4956){
var values = cljs.core.seq( arglist__4956 );;
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
var elem__4957 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__4957,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__4957);
elem__4957;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__4957),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__4958 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__4958);
frag__4958;
return goog.dom.replaceNode.call(null,frag__4958,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__4959){
var values = cljs.core.seq( arglist__4959 );;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__4960){
var values = cljs.core.seq( arglist__4960 );;
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
var obj__4961 = (new Object());

obj__4961.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__4962 = enfocus.core.mouse_enter_leave.call(null,func);

callback__4962.listen = func;
callback__4962.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__4962);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__4962);
}
});
obj__4961.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__4963 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__4964 = obj.listener;

if(cljs.core.truth_((function (){var and__3546__auto____4966 = (function (){var or__3548__auto____4965 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____4965))
{return or__3548__auto____4965;
} else
{return cljs.core._EQ_.call(null,listener__4964.listen,func);
}
})();

if(cljs.core.truth_(and__3546__auto____4966))
{var or__3548__auto____4967 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____4967))
{return or__3548__auto____4967;
} else
{return cljs.core._EQ_.call(null,listener__4964.scope,opt_scope);
}
} else
{return and__3546__auto____4966;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__4964);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__4964);
}
} else
{return null;
}
}),listeners__4963));
});
return obj__4961;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["﷐'mouseenter","﷐'mouseleave"],{"﷐'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseover"),"﷐'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__4968 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____4969 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____4969))
{return (window === pnod);
} else
{return and__3546__auto____4969;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if(cljs.core.truth_((wrapper__4968 === null)))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__4968,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__4972 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((wrapper__4972 === null)))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__4972,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__4973 = (function (p1__4970_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__4970_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__4970_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__4970_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4971_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__4973.call(null,p1__4971_SHARP_));
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
en_remove_listeners.cljs$lang$applyTo = (function (arglist__4974){
var event_list = cljs.core.seq( arglist__4974 );;
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
var anim__4975 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,(pcallback === null))))
{goog.events.listen.call(null,anim__4975,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__4975.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__4976 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,(pcallback === null))))
{goog.events.listen.call(null,anim__4976,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__4976.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__4977 = goog.style.getSize.call(null,pnod);
var start__4978 = cljs.core.array.call(null,csize__4977.width,csize__4977.height);
var wth__4979 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__4977.width:wth);
var hgt__4980 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__4977.height:hgt);
var end__4981 = cljs.core.array.call(null,wth__4979,hgt__4980);
var anim__4982 = (new goog.fx.dom.Resize(pnod,start__4978,end__4981,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,(pcallback === null))))
{goog.events.listen.call(null,anim__4982,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__4982.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__4983 = goog.style.getPosition.call(null,pnod);
var start__4984 = cljs.core.array.call(null,cpos__4983.x,cpos__4983.y);
var xpos__4985 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__4983.x:xpos);
var ypos__4986 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__4983.y:ypos);
var end__4987 = cljs.core.array.call(null,xpos__4985,ypos__4986);
var anim__4988 = (new goog.fx.dom.Slide(pnod,start__4984,end__4987,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,(pcallback === null))))
{goog.events.listen.call(null,anim__4988,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__4988.play();
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
var filt__4992 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__4993 = (function (pnodes,chain){
var pnod_col__4989 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__4990 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__4991 = cljs.core.filter.call(null,ttest__4990,pnod_col__4989);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__4991));
if(cljs.core.truth_((chain === null)))
{return trans.call(null,res__4991);
} else
{return trans.call(null,res__4991,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__4992.call(this,pnodes);
case  2 :
return filt__4993.call(this,pnodes,chain);
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
var create_sel_str__4996 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__4997 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__4995_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__4995_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__4995_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__4995_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__4995_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__4995_SHARP_)))
{return create_sel_str.call(null,p1__4995_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__4995_SHARP_)))
{return p1__4995_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
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
return create_sel_str__4996.call(this,id_mask_sym);
case  2 :
return create_sel_str__4997.call(this,id_mask_sym,css_sel);
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
var css_select__5001 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__5002 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__5003 = (function (id_mask_sym,dom_node,css_sel){
var sel__4999 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__5000 = goog.dom.query.call(null,sel__4999,dom_node);

return ret__5000;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__5001.call(this,id_mask_sym);
case  2 :
return css_select__5002.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__5003.call(this,id_mask_sym,dom_node,css_sel);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__5005_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__5005_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__5006){
var kys = cljs.core.seq( arglist__5006 );;
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
var attr_EQ___5007 = (function (){
return "";
});
var attr_EQ___5008 = (function() { 
var G__5010__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__5010 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5010__delegate.call(this, ky, txt, forms);
};
G__5010.cljs$lang$maxFixedArity = 2;
G__5010.cljs$lang$applyTo = (function (arglist__5011){
var ky = cljs.core.first(arglist__5011);
var txt = cljs.core.first(cljs.core.next(arglist__5011));
var forms = cljs.core.rest(cljs.core.next(arglist__5011));
return G__5010__delegate.call(this, ky, txt, forms);
});
return G__5010;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___5007.call(this);
default:
return attr_EQ___5008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___5008.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__5012 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__5013 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__5012.call(this,x);
case  2 :
return nth_child__5013.call(this,x,y);
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
var nth_of_type__5015 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__5016 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__5015.call(this,x);
case  2 :
return nth_of_type__5016.call(this,x,y);
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
var nth_last_child__5018 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__5019 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__5018.call(this,x);
case  2 :
return nth_last_child__5019.call(this,x,y);
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
var nth_last_of_type__5021 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__5022 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__5021.call(this,x);
case  2 :
return nth_last_of_type__5022.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
