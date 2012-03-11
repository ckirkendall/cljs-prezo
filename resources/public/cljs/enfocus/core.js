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
if(cljs.core.truth_((function (){var and__3546__auto____95119 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____95119))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____95119;
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
{if(cljs.core.truth_((function (){var or__3548__auto____95121 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____95121))
{return or__3548__auto____95121;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__509__auto____95126 = (function iter__95122(s__95123){
return (new cljs.core.LazySeq(null,false,(function (){
var s__95123__95124 = s__95123;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__95123__95124)))
{var x__95125 = cljs.core.first.call(null,s__95123__95124);

return cljs.core.cons.call(null,(nl[x__95125]),iter__95122.call(null,cljs.core.rest.call(null,s__95123__95124)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____95126.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__95120_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__95120_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__95120_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__95120_SHARP_);
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
var G__95127__95128 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__95127__95128))
{var G__95130__95132 = cljs.core.first.call(null,G__95127__95128);
var vec__95131__95133 = G__95130__95132;
var attr__95134 = cljs.core.nth.call(null,vec__95131__95133,0,null);
var value__95135 = cljs.core.nth.call(null,vec__95131__95133,1,null);
var G__95127__95136 = G__95127__95128;

var G__95130__95137 = G__95130__95132;
var G__95127__95138 = G__95127__95136;

while(true){
var vec__95139__95140 = G__95130__95137;
var attr__95141 = cljs.core.nth.call(null,vec__95139__95140,0,null);
var value__95142 = cljs.core.nth.call(null,vec__95139__95140,1,null);
var G__95127__95143 = G__95127__95138;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__95141),value__95142);
var temp__3698__auto____95144 = cljs.core.next.call(null,G__95127__95143);

if(cljs.core.truth_(temp__3698__auto____95144))
{var G__95127__95145 = temp__3698__auto____95144;

{
var G__95146 = cljs.core.first.call(null,G__95127__95145);
var G__95147 = G__95127__95145;
G__95130__95137 = G__95146;
G__95127__95138 = G__95147;
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
var G__95148__95149 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__95148__95149))
{var attr__95150 = cljs.core.first.call(null,G__95148__95149);
var G__95148__95151 = G__95148__95149;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__95150),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__95150));
}
var temp__3698__auto____95152 = cljs.core.next.call(null,G__95148__95151);

if(cljs.core.truth_(temp__3698__auto____95152))
{var G__95148__95153 = temp__3698__auto____95152;

{
var G__95154 = cljs.core.first.call(null,G__95148__95153);
var G__95155 = G__95148__95153;
attr__95150 = G__95154;
G__95148__95151 = G__95155;
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
var G__95156 = parent;
var G__95157 = child.parentNode;
parent = G__95156;
child = G__95157;
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
var re__95158 = e.relatedTarget;
var this$__95159 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____95160 = cljs.core.not.call(null,(re__95158 === this$__95159));

if(cljs.core.truth_(and__3546__auto____95160))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__95159,re__95158));
} else
{return and__3546__auto____95160;
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
var add_map_attrs__95180 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__95161__95162 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__95161__95162))
{var G__95164__95166 = cljs.core.first.call(null,G__95161__95162);
var vec__95165__95167 = G__95164__95166;
var k__95168 = cljs.core.nth.call(null,vec__95165__95167,0,null);
var v__95169 = cljs.core.nth.call(null,vec__95165__95167,1,null);
var G__95161__95170 = G__95161__95162;

var G__95164__95171 = G__95164__95166;
var G__95161__95172 = G__95161__95170;

while(true){
var vec__95173__95174 = G__95164__95171;
var k__95175 = cljs.core.nth.call(null,vec__95173__95174,0,null);
var v__95176 = cljs.core.nth.call(null,vec__95173__95174,1,null);
var G__95161__95177 = G__95161__95172;

add_map_attrs.call(null,elem,k__95175,v__95176);
var temp__3698__auto____95178 = cljs.core.next.call(null,G__95161__95177);

if(cljs.core.truth_(temp__3698__auto____95178))
{var G__95161__95179 = temp__3698__auto____95178;

{
var G__95183 = cljs.core.first.call(null,G__95161__95179);
var G__95184 = G__95161__95179;
G__95164__95171 = G__95183;
G__95161__95172 = G__95184;
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
var add_map_attrs__95181 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__95180.call(this,elem,k);
case  3 :
return add_map_attrs__95181.call(this,elem,k,v);
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
var div__95185 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__95185.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__95185);
return div__95185;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__95186 = div.childNodes;
var frag__95187 = document.createDocumentFragment();

goog.dom.append.call(null,frag__95187,child__95186);
goog.dom.removeNode.call(null,div);
return frag__95187;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__95189 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__95190 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__95190),text.replace(re__95189,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__95190,c,d);
}))]);
});
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__95191 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__95192 = enfocus.core.nodes__GT_coll.call(null,id_nodes__95191);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95188_SHARP_){
var id__95193 = p1__95188_SHARP_.getAttribute("id");
var rid__95194 = id__95193.replace(sym,"");

return p1__95188_SHARP_.setAttribute("id",rid__95194);
}),nod_col__95192));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__95195 = (new goog.net.XhrIo());
var callback__95205 = (function (req){
var text__95197 = req.getResponseText();
var vec__95196__95198 = enfocus.core.replace_ids.call(null,text__95197);
var sym__95199 = cljs.core.nth.call(null,vec__95196__95198,0,null);
var txt__95200 = cljs.core.nth.call(null,vec__95196__95198,1,null);
var data__95201 = goog.dom.htmlToDocumentFragment.call(null,txt__95200);
var body__95202 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__95201,"body")));

if(cljs.core.truth_(body__95202))
{var frag__95203 = document.createDocumentFragment();
var childs__95204 = frag__95203.childNodes;

goog.dom.append.call(null,frag__95203,childs__95204);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__95199,frag__95203]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__95199,data__95201]));
}
});

goog.events.listen.call(null,req__95195,goog.net.EventType.COMPLETE,(function (){
callback__95205.call(null,req__95195);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__95195.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__95206 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__95206))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__95206),cljs.core.second.call(null,nod__95206).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__95207 = enfocus.core.create_sel_str.call(null,sel);
var cache__95208 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__95207)));

if(cljs.core.truth_(cache__95208))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__95208),cljs.core.second.call(null,cache__95208).cloneNode(true)]);
} else
{var vec__95209__95210 = enfocus.core.get_cached_dom.call(null,uri);
var sym__95211 = cljs.core.nth.call(null,vec__95209__95210,0,null);
var tdom__95212 = cljs.core.nth.call(null,vec__95209__95210,1,null);
var dom__95213 = enfocus.core.create_hidden_dom.call(null,tdom__95212);
var tsnip__95214 = enfocus.core.css_select.call(null,dom__95213,sel_str__95207);
var snip__95215 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__95214))?cljs.core.first.call(null,tsnip__95214):tsnip__95214);

enfocus.core.remove_node_return_child.call(null,dom__95213);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__95207),cljs.core.Vector.fromArray([sym__95211,snip__95215]));
return cljs.core.Vector.fromArray([sym__95211,snip__95215]);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){
return (function trans(pnodes){
var pnod_col__95216 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result__95217 = cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__95216));

if(cljs.core.truth_((cljs.core.count.call(null,result__95217) <= 1)))
{return cljs.core.first.call(null,result__95217);
} else
{return result__95217;
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
var trans__95220 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__95221 = (function (pnodes,chain){
var pnod_col__95219 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__95219));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__95220.call(this,pnodes);
case  2 :
return trans__95221.call(this,pnodes,chain);
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
var trans__95227 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__95228 = (function (pnodes,chain){
var pnod_col__95224 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__95225 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__95224));
var partial_cback__95226 = (function (){
cljs.core.swap_BANG_.call(null,cnt__95225,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__95225))))
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

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95218_SHARP_){
return func.call(null,p1__95218_SHARP_,partial_cback__95226);
}),pnod_col__95224));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__95227.call(this,pnodes);
case  2 :
return trans__95228.call(this,pnodes,chain);
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
var fnodes__95230 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__95231 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95223_SHARP_){
return goog.dom.appendChild.call(null,frag__95231,p1__95223_SHARP_.cloneNode(true));
}),fnodes__95230));
return func.call(null,pnod,frag__95231);
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
en_content.cljs$lang$applyTo = (function (arglist__95232){
var values = cljs.core.seq( arglist__95232 );;
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
var frag__95233 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__95233);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__95235 = cljs.core.partition.call(null,2,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__95236){
var vec__95237__95238 = p__95236;
var a__95239 = cljs.core.nth.call(null,vec__95237__95238,0,null);
var v__95240 = cljs.core.nth.call(null,vec__95237__95238,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__95239),v__95240);
}),at_lst__95235));
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
en_set_attr.cljs$lang$applyTo = (function (arglist__95241){
var values = cljs.core.seq( arglist__95241 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95234_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__95234_SHARP_));
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
en_remove_attr.cljs$lang$applyTo = (function (arglist__95242){
var values = cljs.core.seq( arglist__95242 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95243_SHARP_){
return goog.dom.classes.add.call(null,pnod,p1__95243_SHARP_);
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
en_add_class.cljs$lang$applyTo = (function (arglist__95245){
var values = cljs.core.seq( arglist__95245 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95244_SHARP_){
return goog.dom.classes.remove.call(null,pnod,p1__95244_SHARP_);
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
en_remove_class.cljs$lang$applyTo = (function (arglist__95247){
var values = cljs.core.seq( arglist__95247 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95246_SHARP_){
return p1__95246_SHARP_.call(null,pnod);
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
en_do__GT_.cljs$lang$applyTo = (function (arglist__95248){
var forms = cljs.core.seq( arglist__95248 );;
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
en_append.cljs$lang$applyTo = (function (arglist__95249){
var values = cljs.core.seq( arglist__95249 );;
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
var nod__95250 = pnod.firstChild;

return pnod.insertBefore(frag,nod__95250);
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
en_prepend.cljs$lang$applyTo = (function (arglist__95251){
var values = cljs.core.seq( arglist__95251 );;
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
en_before.cljs$lang$applyTo = (function (arglist__95252){
var values = cljs.core.seq( arglist__95252 );;
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
en_after.cljs$lang$applyTo = (function (arglist__95253){
var values = cljs.core.seq( arglist__95253 );;
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
en_substitute.cljs$lang$applyTo = (function (arglist__95254){
var values = cljs.core.seq( arglist__95254 );;
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
en_remove_node.cljs$lang$applyTo = (function (arglist__95255){
var values = cljs.core.seq( arglist__95255 );;
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
var elem__95256 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__95256,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__95256);
elem__95256;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__95256),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__95257 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__95257);
frag__95257;
return goog.dom.replaceNode.call(null,frag__95257,pnod);
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
en_set_style.cljs$lang$applyTo = (function (arglist__95258){
var values = cljs.core.seq( arglist__95258 );;
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
en_remove_style.cljs$lang$applyTo = (function (arglist__95259){
var values = cljs.core.seq( arglist__95259 );;
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
var obj__95260 = (new Object());

obj__95260.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback__95261 = enfocus.core.mouse_enter_leave.call(null,func);

callback__95261.listen = func;
callback__95261.scope = opt_scope;
if(cljs.core.truth_(enfocus.core.op_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback__95261);
} else
{return goog.events.listen.call(null,elm,cljs.core.name.call(null,event),callback__95261);
}
});
obj__95260.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners__95262 = goog.events.getListeners.call(null,elm,cljs.core.name.call(null,event),false);

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__95263 = obj.listener;

if(cljs.core.truth_((function (){var and__3546__auto____95265 = (function (){var or__3548__auto____95264 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____95264))
{return or__3548__auto____95264;
} else
{return cljs.core._EQ_.call(null,listener__95263.listen,func);
}
})();

if(cljs.core.truth_(and__3546__auto____95265))
{var or__3548__auto____95266 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____95266))
{return or__3548__auto____95266;
} else
{return cljs.core._EQ_.call(null,listener__95263.scope,opt_scope);
}
} else
{return and__3546__auto____95265;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener__95263);
} else
{return goog.events.unlisten.call(null,elm,cljs.core.name.call(null,event),listener__95263);
}
} else
{return null;
}
}),listeners__95262));
});
return obj__95260;
});
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["﷐'mouseenter","﷐'mouseleave"],{"﷐'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseover"),"﷐'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null,"﷐'mouseout")});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
var wrapper__95267 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____95268 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____95268))
{return (window === pnod);
} else
{return and__3546__auto____95268;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__95267)))
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper.call(null,pnod,wrapper__95267,func);
}
}
}));
});
/**
* removing a specific event from the selected nodes
*/
enfocus.core.en_unlisten = (function en_unlisten(event,func){
var wrapper__95271 = enfocus.core.wrapper_register.call(null,event);

return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__95271)))
{return goog.events.unlisten.call(null,pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper.call(null,pnod,wrapper__95271,func);
}
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listeners = (function() { 
var en_remove_listeners__delegate = function (event_list){
var get_name__95272 = (function (p1__95269_SHARP_){
return cljs.core.name.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,p1__95269_SHARP_,"﷐'mouseenter"))?"﷐'mouseover":(cljs.core.truth_(cljs.core._EQ_.call(null,p1__95269_SHARP_,"﷐'mouseleave"))?"﷐'mouseout":(cljs.core.truth_("﷐'else")?p1__95269_SHARP_:null))));
});

return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__95270_SHARP_){
return goog.events.removeAll.call(null,pnod,get_name__95272.call(null,p1__95270_SHARP_));
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
en_remove_listeners.cljs$lang$applyTo = (function (arglist__95273){
var event_list = cljs.core.seq( arglist__95273 );;
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
var anim__95274 = (new goog.fx.dom.FadeOut(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__95274,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__95274.play();
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var anim__95275 = (new goog.fx.dom.FadeIn(pnod,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__95275,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__95275.play();
}),callback);
});
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var csize__95276 = goog.style.getSize.call(null,pnod);
var start__95277 = cljs.core.array.call(null,csize__95276.width,csize__95276.height);
var wth__95278 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?csize__95276.width:wth);
var hgt__95279 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?csize__95276.height:hgt);
var end__95280 = cljs.core.array.call(null,wth__95278,hgt__95279);
var anim__95281 = (new goog.fx.dom.Resize(pnod,start__95277,end__95280,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__95281,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__95281.play();
}),callback);
});
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,callback,accel){
return enfocus.core.chainable_effect.call(null,(function (pnod,pcallback){
var cpos__95282 = goog.style.getPosition.call(null,pnod);
var start__95283 = cljs.core.array.call(null,cpos__95282.x,cpos__95282.y);
var xpos__95284 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx"))?cpos__95282.x:xpos);
var ypos__95285 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury"))?cpos__95282.y:ypos);
var end__95286 = cljs.core.array.call(null,xpos__95284,ypos__95285);
var anim__95287 = (new goog.fx.dom.Slide(pnod,start__95283,end__95286,ttime,accel));

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,pcallback))))
{goog.events.listen.call(null,anim__95287,goog.fx.Animation.EventType.END,pcallback);
} else
{}
return anim__95287.play();
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
var filt__95291 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__95292 = (function (pnodes,chain){
var pnod_col__95288 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest__95289 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,tst))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res__95290 = cljs.core.filter.call(null,ttest__95289,pnod_col__95288);

enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,res__95290));
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,chain)))
{return trans.call(null,res__95290);
} else
{return trans.call(null,res__95290,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case  1 :
return filt__95291.call(this,pnodes);
case  2 :
return filt__95292.call(this,pnodes,chain);
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
var create_sel_str__95295 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__95296 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__95294_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__95294_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__95294_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__95294_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__95294_SHARP_).replace("#",cljs.core.str.call(null,"#",id_mask_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__95294_SHARP_)))
{return create_sel_str.call(null,p1__95294_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__95294_SHARP_)))
{return p1__95294_SHARP_.replace("#",cljs.core.str.call(null,"#",id_mask_sym));
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
return create_sel_str__95295.call(this,id_mask_sym);
case  2 :
return create_sel_str__95296.call(this,id_mask_sym,css_sel);
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
var css_select__95300 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__95301 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__95302 = (function (id_mask_sym,dom_node,css_sel){
var sel__95298 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)," :",":"));
var ret__95299 = goog.dom.query.call(null,sel__95298,dom_node);

return ret__95299;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case  1 :
return css_select__95300.call(this,id_mask_sym);
case  2 :
return css_select__95301.call(this,id_mask_sym,dom_node);
case  3 :
return css_select__95302.call(this,id_mask_sym,dom_node,css_sel);
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__95304_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__95304_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__95305){
var kys = cljs.core.seq( arglist__95305 );;
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
var attr_EQ___95306 = (function (){
return "";
});
var attr_EQ___95307 = (function() { 
var G__95309__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__95309 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__95309__delegate.call(this, ky, txt, forms);
};
G__95309.cljs$lang$maxFixedArity = 2;
G__95309.cljs$lang$applyTo = (function (arglist__95310){
var ky = cljs.core.first(arglist__95310);
var txt = cljs.core.first(cljs.core.next(arglist__95310));
var forms = cljs.core.rest(cljs.core.next(arglist__95310));
return G__95309__delegate.call(this, ky, txt, forms);
});
return G__95309;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___95306.call(this);
default:
return attr_EQ___95307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___95307.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__95311 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__95312 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__95311.call(this,x);
case  2 :
return nth_child__95312.call(this,x,y);
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
var nth_of_type__95314 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__95315 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__95314.call(this,x);
case  2 :
return nth_of_type__95315.call(this,x,y);
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
var nth_last_child__95317 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__95318 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__95317.call(this,x);
case  2 :
return nth_last_child__95318.call(this,x,y);
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
var nth_last_of_type__95320 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__95321 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__95320.call(this,x);
case  2 :
return nth_last_of_type__95321.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
