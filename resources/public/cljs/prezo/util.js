goog.provide('prezo.util');
goog.require('cljs.core');
prezo.util.by_id = (function by_id(id){
return document.getElementById(id);
});
