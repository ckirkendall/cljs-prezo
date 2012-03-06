var COMPILED = false;
var goog = goog || {};
goog.global = this;
goog.DEBUG = true;
goog.LOCALE = "en";
goog.evalWorksForGlobals_ = null;
goog.provide = function(name) {
  if(!COMPILED) {
    if(goog.getObjectByName(name) && !goog.implicitNamespaces_[name]) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    var namespace = name;
    while(namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      goog.implicitNamespaces_[namespace] = true
    }
  }
  goog.exportPath_(name)
};
goog.setTestOnly = function(opt_message) {
  if(COMPILED && !goog.DEBUG) {
    opt_message = opt_message || "";
    throw Error("Importing test-only code into non-debug environment" + opt_message ? ": " + opt_message : ".");
  }
};
if(!COMPILED) {
  goog.implicitNamespaces_ = {}
}
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if(!(parts[0] in cur) && cur.execScript) {
    cur.execScript("var " + parts[0])
  }
  for(var part;parts.length && (part = parts.shift());) {
    if(!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object
    }else {
      if(cur[part]) {
        cur = cur[part]
      }else {
        cur = cur[part] = {}
      }
    }
  }
};
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for(var part;part = parts.shift();) {
    if(goog.isDefAndNotNull(cur[part])) {
      cur = cur[part]
    }else {
      return null
    }
  }
  return cur
};
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for(var x in obj) {
    global[x] = obj[x]
  }
};
goog.addDependency = function(relPath, provides, requires) {
  if(!COMPILED) {
    var provide, require;
    var path = relPath.replace(/\\/g, "/");
    var deps = goog.dependencies_;
    for(var i = 0;provide = provides[i];i++) {
      deps.nameToPath[provide] = path;
      if(!(path in deps.pathToNames)) {
        deps.pathToNames[path] = {}
      }
      deps.pathToNames[path][provide] = true
    }
    for(var j = 0;require = requires[j];j++) {
      if(!(path in deps.requires)) {
        deps.requires[path] = {}
      }
      deps.requires[path][require] = true
    }
  }
};
goog.require = function(rule) {
  if(!COMPILED) {
    if(goog.getObjectByName(rule)) {
      return
    }
    var path = goog.getPathFromDeps_(rule);
    if(path) {
      goog.included_[path] = true;
      goog.writeScripts_()
    }else {
      var errorMessage = "goog.require could not find: " + rule;
      if(goog.global.console) {
        goog.global.console["error"](errorMessage)
      }
      throw Error(errorMessage);
    }
  }
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.identityFunction = function(var_args) {
  return arguments[0]
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    return ctor.instance_ || (ctor.instance_ = new ctor)
  }
};
if(!COMPILED) {
  goog.included_ = {};
  goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != "undefined" && "write" in doc
  };
  goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return
    }else {
      if(!goog.inHtmlDocument_()) {
        return
      }
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName("script");
    for(var i = scripts.length - 1;i >= 0;--i) {
      var src = scripts[i].src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if(src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return
      }
    }
  };
  goog.importScript_ = function(src) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    if(!goog.dependencies_.written[src] && importScript(src)) {
      goog.dependencies_.written[src] = true
    }
  };
  goog.writeScriptTag_ = function(src) {
    if(goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      doc.write('<script type="text/javascript" src="' + src + '"></' + "script>");
      return true
    }else {
      return false
    }
  };
  goog.writeScripts_ = function() {
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;
    function visitNode(path) {
      if(path in deps.written) {
        return
      }
      if(path in deps.visited) {
        if(!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path)
        }
        return
      }
      deps.visited[path] = true;
      if(path in deps.requires) {
        for(var requireName in deps.requires[path]) {
          if(requireName in deps.nameToPath) {
            visitNode(deps.nameToPath[requireName])
          }else {
            if(!goog.getObjectByName(requireName)) {
              throw Error("Undefined nameToPath for " + requireName);
            }
          }
        }
      }
      if(!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path)
      }
    }
    for(var path in goog.included_) {
      if(!deps.written[path]) {
        visitNode(path)
      }
    }
    for(var i = 0;i < scripts.length;i++) {
      if(scripts[i]) {
        goog.importScript_(goog.basePath + scripts[i])
      }else {
        throw Error("Undefined script input");
      }
    }
  };
  goog.getPathFromDeps_ = function(rule) {
    if(rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule]
    }else {
      return null
    }
  };
  goog.findBasePath_();
  if(!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + "deps.js")
  }
}
goog.typeOf = function(value) {
  var s = typeof value;
  if(s == "object") {
    if(value) {
      if(value instanceof Array) {
        return"array"
      }else {
        if(value instanceof Object) {
          return s
        }
      }
      var className = Object.prototype.toString.call(value);
      if(className == "[object Window]") {
        return"object"
      }
      if(className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(s == "function" && typeof value.call == "undefined") {
      return"object"
    }
  }
  return s
};
goog.propertyIsEnumerableCustom_ = function(object, propName) {
  if(propName in object) {
    for(var key in object) {
      if(key == propName && Object.prototype.hasOwnProperty.call(object, propName)) {
        return true
      }
    }
  }
  return false
};
goog.propertyIsEnumerable_ = function(object, propName) {
  if(object instanceof Object) {
    return Object.prototype.propertyIsEnumerable.call(object, propName)
  }else {
    return goog.propertyIsEnumerableCustom_(object, propName)
  }
};
goog.isDef = function(val) {
  return val !== undefined
};
goog.isNull = function(val) {
  return val === null
};
goog.isDefAndNotNull = function(val) {
  return val != null
};
goog.isArray = function(val) {
  return goog.typeOf(val) == "array"
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number"
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function"
};
goog.isString = function(val) {
  return typeof val == "string"
};
goog.isBoolean = function(val) {
  return typeof val == "boolean"
};
goog.isNumber = function(val) {
  return typeof val == "number"
};
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function"
};
goog.isObject = function(val) {
  var type = goog.typeOf(val);
  return type == "object" || type == "array" || type == "function"
};
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(obj) {
  if("removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_)
  }
  try {
    delete obj[goog.UID_PROPERTY_]
  }catch(ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.cloneObject(obj[key])
    }
    return clone
  }
  return obj
};
Object.prototype.clone;
goog.bindNative_ = function(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments)
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  var context = selfObj || goog.global;
  if(arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(context, newArgs)
    }
  }else {
    return function() {
      return fn.apply(context, arguments)
    }
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if(Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_
  }else {
    goog.bind = goog.bindJs_
  }
  return goog.bind.apply(null, arguments)
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments);
    newArgs.unshift.apply(newArgs, args);
    return fn.apply(this, newArgs)
  }
};
goog.mixin = function(target, source) {
  for(var x in source) {
    target[x] = source[x]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(script) {
  if(goog.global.execScript) {
    goog.global.execScript(script, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;");
        if(typeof goog.global["_et_"] != "undefined") {
          delete goog.global["_et_"];
          goog.evalWorksForGlobals_ = true
        }else {
          goog.evalWorksForGlobals_ = false
        }
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(script)
      }else {
        var doc = goog.global.document;
        var scriptElt = doc.createElement("script");
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for(var i = 0;i < parts.length;i++) {
      mapped.push(getMapping(parts[i]))
    }
    return mapped.join("-")
  };
  var rename;
  if(goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts
  }else {
    rename = function(a) {
      return a
    }
  }
  if(opt_modifier) {
    return className + "-" + rename(opt_modifier)
  }else {
    return rename(className)
  }
};
goog.setCssNameMapping = function(mapping, style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = style
};
goog.getMsg = function(str, opt_values) {
  var values = opt_values || {};
  for(var key in values) {
    var value = ("" + values[key]).replace(/\$/g, "$$$$");
    str = str.replace(new RegExp("\\{\\$" + key + "\\}", "gi"), value)
  }
  return str
};
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo)
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  childCtor.prototype.constructor = childCtor
};
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if(caller.superClass_) {
    return caller.superClass_.constructor.apply(me, Array.prototype.slice.call(arguments, 1))
  }
  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for(var ctor = me.constructor;ctor;ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if(ctor.prototype[opt_methodName] === caller) {
      foundCaller = true
    }else {
      if(foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args)
      }
    }
  }
  if(me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args)
  }else {
    throw Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
goog.scope = function(fn) {
  fn.call(goog.global)
};
goog.provide("goog.disposable.IDisposable");
goog.disposable.IDisposable = function() {
};
goog.disposable.IDisposable.prototype.dispose;
goog.disposable.IDisposable.prototype.isDisposed;
goog.provide("goog.Disposable");
goog.provide("goog.dispose");
goog.require("goog.disposable.IDisposable");
goog.Disposable = function() {
  if(goog.Disposable.ENABLE_MONITORING) {
    goog.Disposable.instances_[goog.getUid(this)] = this
  }
};
goog.Disposable.ENABLE_MONITORING = false;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var ret = [];
  for(var id in goog.Disposable.instances_) {
    if(goog.Disposable.instances_.hasOwnProperty(id)) {
      ret.push(goog.Disposable.instances_[Number(id)])
    }
  }
  return ret
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = false;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
    if(goog.Disposable.ENABLE_MONITORING) {
      var uid = goog.getUid(this);
      if(!goog.Disposable.instances_.hasOwnProperty(uid)) {
        throw Error(this + " did not call the goog.Disposable base " + "constructor or was disposed of after a clearUndisposedObjects " + "call");
      }
      delete goog.Disposable.instances_[uid]
    }
  }
};
goog.Disposable.prototype.disposeInternal = function() {
};
goog.dispose = function(obj) {
  if(obj && typeof obj.dispose == "function") {
    obj.dispose()
  }
};
goog.provide("goog.debug.Error");
goog.debug.Error = function(opt_msg) {
  this.stack = (new Error).stack || "";
  if(opt_msg) {
    this.message = String(opt_msg)
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0
};
goog.string.endsWith = function(str, suffix) {
  var l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l
};
goog.string.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0
};
goog.string.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0
};
goog.string.subs = function(str, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var replacement = String(arguments[i]).replace(/\$/g, "$$$$");
    str = str.replace(/\%s/, replacement)
  }
  return str
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(str) {
  return/^[\s\xa0]*$/.test(str)
};
goog.string.isEmptySafe = function(str) {
  return goog.string.isEmpty(goog.string.makeSafe(str))
};
goog.string.isBreakingWhitespace = function(str) {
  return!/[^\t\n\r ]/.test(str)
};
goog.string.isAlpha = function(str) {
  return!/[^a-zA-Z]/.test(str)
};
goog.string.isNumeric = function(str) {
  return!/[^0-9]/.test(str)
};
goog.string.isAlphaNumeric = function(str) {
  return!/[^a-zA-Z0-9]/.test(str)
};
goog.string.isSpace = function(ch) {
  return ch == " "
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "\u0080" && ch <= "\ufffd"
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.trim = function(str) {
  return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(str1, str2) {
  var test1 = String(str1).toLowerCase();
  var test2 = String(str2).toLowerCase();
  if(test1 < test2) {
    return-1
  }else {
    if(test1 == test2) {
      return 0
    }else {
      return 1
    }
  }
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(str1, str2) {
  if(str1 == str2) {
    return 0
  }
  if(!str1) {
    return-1
  }
  if(!str2) {
    return 1
  }
  var tokens1 = str1.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var tokens2 = str2.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var count = Math.min(tokens1.length, tokens2.length);
  for(var i = 0;i < count;i++) {
    var a = tokens1[i];
    var b = tokens2[i];
    if(a != b) {
      var num1 = parseInt(a, 10);
      if(!isNaN(num1)) {
        var num2 = parseInt(b, 10);
        if(!isNaN(num2) && num1 - num2) {
          return num1 - num2
        }
      }
      return a < b ? -1 : 1
    }
  }
  if(tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length
  }
  return str1 < str2 ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(str) {
  str = String(str);
  if(!goog.string.encodeUriRegExp_.test(str)) {
    return encodeURIComponent(str)
  }
  return str
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if(opt_isLikelyToContainHtmlChars) {
    return str.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }else {
    if(!goog.string.allRe_.test(str)) {
      return str
    }
    if(str.indexOf("&") != -1) {
      str = str.replace(goog.string.amperRe_, "&amp;")
    }
    if(str.indexOf("<") != -1) {
      str = str.replace(goog.string.ltRe_, "&lt;")
    }
    if(str.indexOf(">") != -1) {
      str = str.replace(goog.string.gtRe_, "&gt;")
    }
    if(str.indexOf('"') != -1) {
      str = str.replace(goog.string.quotRe_, "&quot;")
    }
    return str
  }
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(str) {
  if(goog.string.contains(str, "&")) {
    if("document" in goog.global && !goog.string.contains(str, "<")) {
      return goog.string.unescapeEntitiesUsingDom_(str)
    }else {
      return goog.string.unescapePureXmlEntities_(str)
    }
  }
  return str
};
goog.string.unescapeEntitiesUsingDom_ = function(str) {
  var el = goog.global["document"]["createElement"]("div");
  el["innerHTML"] = "<pre>x" + str + "</pre>";
  if(el["firstChild"][goog.string.NORMALIZE_FN_]) {
    el["firstChild"][goog.string.NORMALIZE_FN_]()
  }
  str = el["firstChild"]["firstChild"]["nodeValue"].slice(1);
  el["innerHTML"] = "";
  return goog.string.canonicalizeNewlines(str)
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if(entity.charAt(0) == "#") {
          var n = Number("0" + entity.substr(1));
          if(!isNaN(n)) {
            return String.fromCharCode(n)
          }
        }
        return s
    }
  })
};
goog.string.NORMALIZE_FN_ = "normalize";
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " &#160;"), opt_xml)
};
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for(var i = 0;i < length;i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if(str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1)
    }
  }
  return str
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(str.length > chars) {
    str = str.substring(0, chars - 3) + "..."
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(opt_trailingChars) {
    if(opt_trailingChars > chars) {
      opt_trailingChars = chars
    }
    var endPoint = str.length - opt_trailingChars;
    var startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint)
  }else {
    if(str.length > chars) {
      var half = Math.floor(chars / 2);
      var endPos = str.length - half;
      half += chars % 2;
      str = str.substring(0, half) + "..." + str.substring(endPos)
    }
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  if(s.quote) {
    return s.quote()
  }else {
    var sb = ['"'];
    for(var i = 0;i < s.length;i++) {
      var ch = s.charAt(i);
      var cc = ch.charCodeAt(0);
      sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch))
    }
    sb.push('"');
    return sb.join("")
  }
};
goog.string.escapeString = function(str) {
  var sb = [];
  for(var i = 0;i < str.length;i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i))
  }
  return sb.join("")
};
goog.string.escapeChar = function(c) {
  if(c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c]
  }
  if(c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c]
  }
  var rv = c;
  var cc = c.charCodeAt(0);
  if(cc > 31 && cc < 127) {
    rv = c
  }else {
    if(cc < 256) {
      rv = "\\x";
      if(cc < 16 || cc > 256) {
        rv += "0"
      }
    }else {
      rv = "\\u";
      if(cc < 4096) {
        rv += "0"
      }
    }
    rv += cc.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[c] = rv
};
goog.string.toMap = function(s) {
  var rv = {};
  for(var i = 0;i < s.length;i++) {
    rv[s.charAt(i)] = true
  }
  return rv
};
goog.string.contains = function(s, ss) {
  return s.indexOf(ss) != -1
};
goog.string.removeAt = function(s, index, stringLength) {
  var resultStr = s;
  if(index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength)
  }
  return resultStr
};
goog.string.remove = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "");
  return s.replace(re, "")
};
goog.string.removeAll = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "")
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(string, length) {
  return(new Array(length + 1)).join(string)
};
goog.string.padNumber = function(num, length, opt_precision) {
  var s = goog.isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
  var index = s.indexOf(".");
  if(index == -1) {
    index = s.length
  }
  return goog.string.repeat("0", Math.max(0, length - index)) + s
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj)
};
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(version1, version2) {
  var order = 0;
  var v1Subs = goog.string.trim(String(version1)).split(".");
  var v2Subs = goog.string.trim(String(version2)).split(".");
  var subCount = Math.max(v1Subs.length, v2Subs.length);
  for(var subIdx = 0;order == 0 && subIdx < subCount;subIdx++) {
    var v1Sub = v1Subs[subIdx] || "";
    var v2Sub = v2Subs[subIdx] || "";
    var v1CompParser = new RegExp("(\\d*)(\\D*)", "g");
    var v2CompParser = new RegExp("(\\d*)(\\D*)", "g");
    do {
      var v1Comp = v1CompParser.exec(v1Sub) || ["", "", ""];
      var v2Comp = v2CompParser.exec(v2Sub) || ["", "", ""];
      if(v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break
      }
      var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.compareElements_(v1CompNum, v2CompNum) || goog.string.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.compareElements_(v1Comp[2], v2Comp[2])
    }while(order == 0)
  }
  return order
};
goog.string.compareElements_ = function(left, right) {
  if(left < right) {
    return-1
  }else {
    if(left > right) {
      return 1
    }
  }
  return 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(str) {
  var result = 0;
  for(var i = 0;i < str.length;++i) {
    result = 31 * result + str.charCodeAt(i);
    result %= goog.string.HASHCODE_MAX_
  }
  return result
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(str) {
  var num = Number(str);
  if(num == 0 && goog.string.isEmpty(str)) {
    return NaN
  }
  return num
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(str) {
  return goog.string.toCamelCaseCache_[str] || (goog.string.toCamelCaseCache_[str] = String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(str) {
  return goog.string.toSelectorCaseCache_[str] || (goog.string.toSelectorCaseCache_[str] = String(str).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.provide("goog.asserts");
goog.provide("goog.asserts.AssertionError");
goog.require("goog.debug.Error");
goog.require("goog.string");
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
  messageArgs.shift();
  this.messagePattern = messagePattern
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = "Assertion failed";
  if(givenMessage) {
    message += ": " + givenMessage;
    var args = givenArgs
  }else {
    if(defaultMessage) {
      message += ": " + defaultMessage;
      args = defaultArgs
    }
  }
  throw new goog.asserts.AssertionError("" + message, args || []);
};
goog.asserts.assert = function(condition, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return condition
};
goog.asserts.fail = function(opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
    goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertString = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
    goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
    goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
    goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
    goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_("instanceof check failed.", null, opt_message, Array.prototype.slice.call(arguments, 3))
  }
};
goog.provide("goog.array");
goog.provide("goog.array.ArrayLike");
goog.require("goog.asserts");
goog.NATIVE_ARRAY_PROTOTYPES = true;
goog.array.ArrayLike;
goog.array.peek = function(array) {
  return array[array.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(arr, obj, opt_fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.indexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i < arr.length;i++) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(arr, obj, fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  if(fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex)
  }
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.lastIndexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i >= 0;i--) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.forEachRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;--i) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = [];
  var resLength = 0;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      var val = arr2[i];
      if(f.call(opt_obj, val, i, arr)) {
        res[resLength++] = val
      }
    }
  }
  return res
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.map.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = new Array(l);
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      res[i] = f.call(opt_obj, arr2[i], i, arr)
    }
  }
  return res
};
goog.array.reduce = function(arr, f, val, opt_obj) {
  if(arr.reduce) {
    if(opt_obj) {
      return arr.reduce(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduce(f, val)
    }
  }
  var rval = val;
  goog.array.forEach(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.reduceRight = function(arr, f, val, opt_obj) {
  if(arr.reduceRight) {
    if(opt_obj) {
      return arr.reduceRight(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduceRight(f, val)
    }
  }
  var rval = val;
  goog.array.forEachRight(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.some.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return true
    }
  }
  return false
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.every.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
      return false
    }
  }
  return true
};
goog.array.find = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndex = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.findRight = function(arr, f, opt_obj) {
  var i = goog.array.findIndexRight(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndexRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;i--) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.contains = function(arr, obj) {
  return goog.array.indexOf(arr, obj) >= 0
};
goog.array.isEmpty = function(arr) {
  return arr.length == 0
};
goog.array.clear = function(arr) {
  if(!goog.isArray(arr)) {
    for(var i = arr.length - 1;i >= 0;i--) {
      delete arr[i]
    }
  }
  arr.length = 0
};
goog.array.insert = function(arr, obj) {
  if(!goog.array.contains(arr, obj)) {
    arr.push(obj)
  }
};
goog.array.insertAt = function(arr, obj, opt_i) {
  goog.array.splice(arr, opt_i, 0, obj)
};
goog.array.insertArrayAt = function(arr, elementsToAdd, opt_i) {
  goog.partial(goog.array.splice, arr, opt_i, 0).apply(null, elementsToAdd)
};
goog.array.insertBefore = function(arr, obj, opt_obj2) {
  var i;
  if(arguments.length == 2 || (i = goog.array.indexOf(arr, opt_obj2)) < 0) {
    arr.push(obj)
  }else {
    goog.array.insertAt(arr, obj, i)
  }
};
goog.array.remove = function(arr, obj) {
  var i = goog.array.indexOf(arr, obj);
  var rv;
  if(rv = i >= 0) {
    goog.array.removeAt(arr, i)
  }
  return rv
};
goog.array.removeAt = function(arr, i) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.call(arr, i, 1).length == 1
};
goog.array.removeIf = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  if(i >= 0) {
    goog.array.removeAt(arr, i);
    return true
  }
  return false
};
goog.array.concat = function(var_args) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(arr) {
  if(goog.isArray(arr)) {
    return goog.array.concat(arr)
  }else {
    var rv = [];
    for(var i = 0, len = arr.length;i < len;i++) {
      rv[i] = arr[i]
    }
    return rv
  }
};
goog.array.toArray = function(object) {
  if(goog.isArray(object)) {
    return goog.array.concat(object)
  }
  return goog.array.clone(object)
};
goog.array.extend = function(arr1, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var arr2 = arguments[i];
    var isArrayLike;
    if(goog.isArray(arr2) || (isArrayLike = goog.isArrayLike(arr2)) && arr2.hasOwnProperty("callee")) {
      arr1.push.apply(arr1, arr2)
    }else {
      if(isArrayLike) {
        var len1 = arr1.length;
        var len2 = arr2.length;
        for(var j = 0;j < len2;j++) {
          arr1[len1 + j] = arr2[j]
        }
      }else {
        arr1.push(arr2)
      }
    }
  }
};
goog.array.splice = function(arr, index, howMany, var_args) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(arr, goog.array.slice(arguments, 1))
};
goog.array.slice = function(arr, start, opt_end) {
  goog.asserts.assert(arr.length != null);
  if(arguments.length <= 2) {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start)
  }else {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start, opt_end)
  }
};
goog.array.removeDuplicates = function(arr, opt_rv) {
  var returnArray = opt_rv || arr;
  var seen = {}, cursorInsert = 0, cursorRead = 0;
  while(cursorRead < arr.length) {
    var current = arr[cursorRead++];
    var key = goog.isObject(current) ? "o" + goog.getUid(current) : (typeof current).charAt(0) + current;
    if(!Object.prototype.hasOwnProperty.call(seen, key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current
    }
  }
  returnArray.length = cursorInsert
};
goog.array.binarySearch = function(arr, target, opt_compareFn) {
  return goog.array.binarySearch_(arr, opt_compareFn || goog.array.defaultCompare, false, target)
};
goog.array.binarySelect = function(arr, evaluator, opt_obj) {
  return goog.array.binarySearch_(arr, evaluator, true, undefined, opt_obj)
};
goog.array.binarySearch_ = function(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
  var left = 0;
  var right = arr.length;
  var found;
  while(left < right) {
    var middle = left + right >> 1;
    var compareResult;
    if(isEvaluator) {
      compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr)
    }else {
      compareResult = compareFn(opt_target, arr[middle])
    }
    if(compareResult > 0) {
      left = middle + 1
    }else {
      right = middle;
      found = !compareResult
    }
  }
  return found ? left : ~left
};
goog.array.sort = function(arr, opt_compareFn) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.sort.call(arr, opt_compareFn || goog.array.defaultCompare)
};
goog.array.stableSort = function(arr, opt_compareFn) {
  for(var i = 0;i < arr.length;i++) {
    arr[i] = {index:i, value:arr[i]}
  }
  var valueCompareFn = opt_compareFn || goog.array.defaultCompare;
  function stableCompareFn(obj1, obj2) {
    return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index
  }
  goog.array.sort(arr, stableCompareFn);
  for(var i = 0;i < arr.length;i++) {
    arr[i] = arr[i].value
  }
};
goog.array.sortObjectsByKey = function(arr, key, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  goog.array.sort(arr, function(a, b) {
    return compare(a[key], b[key])
  })
};
goog.array.isSorted = function(arr, opt_compareFn, opt_strict) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  for(var i = 1;i < arr.length;i++) {
    var compareResult = compare(arr[i - 1], arr[i]);
    if(compareResult > 0 || compareResult == 0 && opt_strict) {
      return false
    }
  }
  return true
};
goog.array.equals = function(arr1, arr2, opt_equalsFn) {
  if(!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
    return false
  }
  var l = arr1.length;
  var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  for(var i = 0;i < l;i++) {
    if(!equalsFn(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
};
goog.array.compare = function(arr1, arr2, opt_equalsFn) {
  return goog.array.equals(arr1, arr2, opt_equalsFn)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  if(index < 0) {
    goog.array.insertAt(array, value, -(index + 1));
    return true
  }
  return false
};
goog.array.binaryRemove = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  return index >= 0 ? goog.array.removeAt(array, index) : false
};
goog.array.bucket = function(array, sorter) {
  var buckets = {};
  for(var i = 0;i < array.length;i++) {
    var value = array[i];
    var key = sorter(value, i, array);
    if(goog.isDef(key)) {
      var bucket = buckets[key] || (buckets[key] = []);
      bucket.push(value)
    }
  }
  return buckets
};
goog.array.repeat = function(value, n) {
  var array = [];
  for(var i = 0;i < n;i++) {
    array[i] = value
  }
  return array
};
goog.array.flatten = function(var_args) {
  var result = [];
  for(var i = 0;i < arguments.length;i++) {
    var element = arguments[i];
    if(goog.isArray(element)) {
      result.push.apply(result, goog.array.flatten.apply(null, element))
    }else {
      result.push(element)
    }
  }
  return result
};
goog.array.rotate = function(array, n) {
  goog.asserts.assert(array.length != null);
  if(array.length) {
    n %= array.length;
    if(n > 0) {
      goog.array.ARRAY_PROTOTYPE_.unshift.apply(array, array.splice(-n, n))
    }else {
      if(n < 0) {
        goog.array.ARRAY_PROTOTYPE_.push.apply(array, array.splice(0, -n))
      }
    }
  }
  return array
};
goog.array.zip = function(var_args) {
  if(!arguments.length) {
    return[]
  }
  var result = [];
  for(var i = 0;true;i++) {
    var value = [];
    for(var j = 0;j < arguments.length;j++) {
      var arr = arguments[j];
      if(i >= arr.length) {
        return result
      }
      value.push(arr[i])
    }
    result.push(value)
  }
};
goog.array.shuffle = function(arr, opt_randFn) {
  var randFn = opt_randFn || Math.random;
  for(var i = arr.length - 1;i > 0;i--) {
    var j = Math.floor(randFn() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp
  }
};
goog.provide("goog.debug.EntryPointMonitor");
goog.provide("goog.debug.entryPointRegistry");
goog.debug.EntryPointMonitor = function() {
};
goog.debug.EntryPointMonitor.prototype.wrap;
goog.debug.EntryPointMonitor.prototype.unwrap;
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.register = function(callback) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback
};
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  var transformer = goog.bind(monitor.wrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var transformer = goog.bind(monitor.unwrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
};
goog.provide("goog.debug.errorHandlerWeakDep");
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(fn, opt_tracers) {
  return fn
}};
goog.provide("goog.userAgent");
goog.require("goog.string");
goog.userAgent.ASSUME_IE = false;
goog.userAgent.ASSUME_GECKO = false;
goog.userAgent.ASSUME_WEBKIT = false;
goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
goog.userAgent.ASSUME_OPERA = false;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global["navigator"] ? goog.global["navigator"].userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global["navigator"]
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = false;
  goog.userAgent.detectedIe_ = false;
  goog.userAgent.detectedWebkit_ = false;
  goog.userAgent.detectedMobile_ = false;
  goog.userAgent.detectedGecko_ = false;
  var ua;
  if(!goog.userAgent.BROWSER_KNOWN_ && (ua = goog.userAgent.getUserAgentString())) {
    var navigator = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = ua.indexOf("Opera") == 0;
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && ua.indexOf("MSIE") != -1;
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && ua.indexOf("WebKit") != -1;
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && ua.indexOf("Mobile") != -1;
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && navigator.product == "Gecko"
  }
};
if(!goog.userAgent.BROWSER_KNOWN_) {
  goog.userAgent.init_()
}
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigator();
  return navigator && navigator.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = false;
goog.userAgent.ASSUME_WINDOWS = false;
goog.userAgent.ASSUME_LINUX = false;
goog.userAgent.ASSUME_X11 = false;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator()["appVersion"] || "", "X11")
};
if(!goog.userAgent.PLATFORM_KNOWN_) {
  goog.userAgent.initPlatform_()
}
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var version = "", re;
  if(goog.userAgent.OPERA && goog.global["opera"]) {
    var operaVersion = goog.global["opera"].version;
    version = typeof operaVersion == "function" ? operaVersion() : operaVersion
  }else {
    if(goog.userAgent.GECKO) {
      re = /rv\:([^\);]+)(\)|;)/
    }else {
      if(goog.userAgent.IE) {
        re = /MSIE\s+([^\);]+)(\)|;)/
      }else {
        if(goog.userAgent.WEBKIT) {
          re = /WebKit\/(\S+)/
        }
      }
    }
    if(re) {
      var arr = re.exec(goog.userAgent.getUserAgentString());
      version = arr ? arr[1] : ""
    }
  }
  if(goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if(docMode > parseFloat(version)) {
      return String(docMode)
    }
  }
  return version
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(version) {
  return goog.userAgent.isVersionCache_[version] || (goog.userAgent.isVersionCache_[version] = goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0)
};
goog.provide("goog.events.BrowserFeature");
goog.require("goog.userAgent");
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isVersion("9"), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.provide("goog.events.Event");
goog.require("goog.Disposable");
goog.events.Event = function(type, opt_target) {
  goog.Disposable.call(this);
  this.type = type;
  this.target = opt_target;
  this.currentTarget = this.target
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = false;
goog.events.Event.prototype.returnValue_ = true;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = true
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = false
};
goog.events.Event.stopPropagation = function(e) {
  e.stopPropagation()
};
goog.events.Event.preventDefault = function(e) {
  e.preventDefault()
};
goog.provide("goog.events.EventType");
goog.require("goog.userAgent");
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
MESSAGE:"message", CONNECT:"connect"};
goog.provide("goog.reflect");
goog.reflect.object = function(type, object) {
  return object
};
goog.reflect.sinkValue = new Function("a", "return a");
goog.provide("goog.events.BrowserEvent");
goog.provide("goog.events.BrowserEvent.MouseButton");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Event");
goog.require("goog.events.EventType");
goog.require("goog.reflect");
goog.require("goog.userAgent");
goog.events.BrowserEvent = function(opt_e, opt_currentTarget) {
  if(opt_e) {
    this.init(opt_e, opt_currentTarget)
  }
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.currentTarget;
goog.events.BrowserEvent.prototype.relatedTarget = null;
goog.events.BrowserEvent.prototype.offsetX = 0;
goog.events.BrowserEvent.prototype.offsetY = 0;
goog.events.BrowserEvent.prototype.clientX = 0;
goog.events.BrowserEvent.prototype.clientY = 0;
goog.events.BrowserEvent.prototype.screenX = 0;
goog.events.BrowserEvent.prototype.screenY = 0;
goog.events.BrowserEvent.prototype.button = 0;
goog.events.BrowserEvent.prototype.keyCode = 0;
goog.events.BrowserEvent.prototype.charCode = 0;
goog.events.BrowserEvent.prototype.ctrlKey = false;
goog.events.BrowserEvent.prototype.altKey = false;
goog.events.BrowserEvent.prototype.shiftKey = false;
goog.events.BrowserEvent.prototype.metaKey = false;
goog.events.BrowserEvent.prototype.state;
goog.events.BrowserEvent.prototype.platformModifierKey = false;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(e, opt_currentTarget) {
  var type = this.type = e.type;
  goog.events.Event.call(this, type);
  this.target = e.target || e.srcElement;
  this.currentTarget = opt_currentTarget;
  var relatedTarget = e.relatedTarget;
  if(relatedTarget) {
    if(goog.userAgent.GECKO) {
      try {
        goog.reflect.sinkValue(relatedTarget.nodeName)
      }catch(err) {
        relatedTarget = null
      }
    }
  }else {
    if(type == goog.events.EventType.MOUSEOVER) {
      relatedTarget = e.fromElement
    }else {
      if(type == goog.events.EventType.MOUSEOUT) {
        relatedTarget = e.toElement
      }
    }
  }
  this.relatedTarget = relatedTarget;
  this.offsetX = e.offsetX !== undefined ? e.offsetX : e.layerX;
  this.offsetY = e.offsetY !== undefined ? e.offsetY : e.layerY;
  this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
  this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
  this.screenX = e.screenX || 0;
  this.screenY = e.screenY || 0;
  this.button = e.button;
  this.keyCode = e.keyCode || 0;
  this.charCode = e.charCode || (type == "keypress" ? e.keyCode : 0);
  this.ctrlKey = e.ctrlKey;
  this.altKey = e.altKey;
  this.shiftKey = e.shiftKey;
  this.metaKey = e.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
  this.state = e.state;
  this.event_ = e;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(button) {
  if(!goog.events.BrowserFeature.HAS_W3C_BUTTON) {
    if(this.type == "click") {
      return button == goog.events.BrowserEvent.MouseButton.LEFT
    }else {
      return!!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[button])
    }
  }else {
    return this.event_.button == button
  }
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  if(this.event_.stopPropagation) {
    this.event_.stopPropagation()
  }else {
    this.event_.cancelBubble = true
  }
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var be = this.event_;
  if(!be.preventDefault) {
    be.returnValue = false;
    if(goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        var VK_F1 = 112;
        var VK_F12 = 123;
        if(be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) {
          be.keyCode = -1
        }
      }catch(ex) {
      }
    }
  }else {
    be.preventDefault()
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.event_ = null;
  this.target = null;
  this.currentTarget = null;
  this.relatedTarget = null
};
goog.provide("goog.events.EventWrapper");
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.events.EventWrapper.prototype.unlisten = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.provide("goog.events.Listener");
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.isFunctionListener_;
goog.events.Listener.prototype.listener;
goog.events.Listener.prototype.proxy;
goog.events.Listener.prototype.src;
goog.events.Listener.prototype.type;
goog.events.Listener.prototype.capture;
goog.events.Listener.prototype.handler;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = false;
goog.events.Listener.prototype.callOnce = false;
goog.events.Listener.prototype.init = function(listener, proxy, src, type, capture, opt_handler) {
  if(goog.isFunction(listener)) {
    this.isFunctionListener_ = true
  }else {
    if(listener && listener.handleEvent && goog.isFunction(listener.handleEvent)) {
      this.isFunctionListener_ = false
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = listener;
  this.proxy = proxy;
  this.src = src;
  this.type = type;
  this.capture = !!capture;
  this.handler = opt_handler;
  this.callOnce = false;
  this.key = ++goog.events.Listener.counter_;
  this.removed = false
};
goog.events.Listener.prototype.handleEvent = function(eventObject) {
  if(this.isFunctionListener_) {
    return this.listener.call(this.handler || this.src, eventObject)
  }
  return this.listener.handleEvent.call(this.listener, eventObject)
};
goog.provide("goog.structs.SimplePool");
goog.require("goog.Disposable");
goog.structs.SimplePool = function(initialCount, maxCount) {
  goog.Disposable.call(this);
  this.maxCount_ = maxCount;
  this.freeQueue_ = [];
  this.createInitial_(initialCount)
};
goog.inherits(goog.structs.SimplePool, goog.Disposable);
goog.structs.SimplePool.prototype.createObjectFn_ = null;
goog.structs.SimplePool.prototype.disposeObjectFn_ = null;
goog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {
  this.createObjectFn_ = createObjectFn
};
goog.structs.SimplePool.prototype.setDisposeObjectFn = function(disposeObjectFn) {
  this.disposeObjectFn_ = disposeObjectFn
};
goog.structs.SimplePool.prototype.getObject = function() {
  if(this.freeQueue_.length) {
    return this.freeQueue_.pop()
  }
  return this.createObject()
};
goog.structs.SimplePool.prototype.releaseObject = function(obj) {
  if(this.freeQueue_.length < this.maxCount_) {
    this.freeQueue_.push(obj)
  }else {
    this.disposeObject(obj)
  }
};
goog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {
  if(initialCount > this.maxCount_) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var i = 0;i < initialCount;i++) {
    this.freeQueue_.push(this.createObject())
  }
};
goog.structs.SimplePool.prototype.createObject = function() {
  if(this.createObjectFn_) {
    return this.createObjectFn_()
  }else {
    return{}
  }
};
goog.structs.SimplePool.prototype.disposeObject = function(obj) {
  if(this.disposeObjectFn_) {
    this.disposeObjectFn_(obj)
  }else {
    if(goog.isObject(obj)) {
      if(goog.isFunction(obj.dispose)) {
        obj.dispose()
      }else {
        for(var i in obj) {
          delete obj[i]
        }
      }
    }
  }
};
goog.structs.SimplePool.prototype.disposeInternal = function() {
  goog.structs.SimplePool.superClass_.disposeInternal.call(this);
  var freeQueue = this.freeQueue_;
  while(freeQueue.length) {
    this.disposeObject(freeQueue.pop())
  }
  delete this.freeQueue_
};
goog.provide("goog.userAgent.jscript");
goog.require("goog.string");
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = false;
goog.userAgent.jscript.init_ = function() {
  var hasScriptEngine = "ScriptEngine" in goog.global;
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = hasScriptEngine && goog.global["ScriptEngine"]() == "JScript";
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global["ScriptEngineMajorVersion"]() + "." + goog.global["ScriptEngineMinorVersion"]() + "." + goog.global["ScriptEngineBuildVersion"]() : "0"
};
if(!goog.userAgent.jscript.ASSUME_NO_JSCRIPT) {
  goog.userAgent.jscript.init_()
}
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? false : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(version) {
  return goog.string.compareVersions(goog.userAgent.jscript.VERSION, version) >= 0
};
goog.provide("goog.events.pools");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Listener");
goog.require("goog.structs.SimplePool");
goog.require("goog.userAgent.jscript");
goog.events.ASSUME_GOOD_GC = false;
goog.events.pools.getObject;
goog.events.pools.releaseObject;
goog.events.pools.getArray;
goog.events.pools.releaseArray;
goog.events.pools.getProxy;
goog.events.pools.setProxyCallbackFunction;
goog.events.pools.releaseProxy;
goog.events.pools.getListener;
goog.events.pools.releaseListener;
goog.events.pools.getEvent;
goog.events.pools.releaseEvent;
(function() {
  var BAD_GC = !goog.events.ASSUME_GOOD_GC && goog.userAgent.jscript.HAS_JSCRIPT && !goog.userAgent.jscript.isVersion("5.7");
  function getObject() {
    return{count_:0, remaining_:0}
  }
  function getArray() {
    return[]
  }
  var proxyCallbackFunction;
  goog.events.pools.setProxyCallbackFunction = function(cb) {
    proxyCallbackFunction = cb
  };
  function getProxy() {
    var f = function(eventObject) {
      return proxyCallbackFunction.call(f.src, f.key, eventObject)
    };
    return f
  }
  function getListener() {
    return new goog.events.Listener
  }
  function getEvent() {
    return new goog.events.BrowserEvent
  }
  if(!BAD_GC) {
    goog.events.pools.getObject = getObject;
    goog.events.pools.releaseObject = goog.nullFunction;
    goog.events.pools.getArray = getArray;
    goog.events.pools.releaseArray = goog.nullFunction;
    goog.events.pools.getProxy = getProxy;
    goog.events.pools.releaseProxy = goog.nullFunction;
    goog.events.pools.getListener = getListener;
    goog.events.pools.releaseListener = goog.nullFunction;
    goog.events.pools.getEvent = getEvent;
    goog.events.pools.releaseEvent = goog.nullFunction
  }else {
    goog.events.pools.getObject = function() {
      return objectPool.getObject()
    };
    goog.events.pools.releaseObject = function(obj) {
      objectPool.releaseObject(obj)
    };
    goog.events.pools.getArray = function() {
      return arrayPool.getObject()
    };
    goog.events.pools.releaseArray = function(obj) {
      arrayPool.releaseObject(obj)
    };
    goog.events.pools.getProxy = function() {
      return proxyPool.getObject()
    };
    goog.events.pools.releaseProxy = function(obj) {
      proxyPool.releaseObject(getProxy())
    };
    goog.events.pools.getListener = function() {
      return listenerPool.getObject()
    };
    goog.events.pools.releaseListener = function(obj) {
      listenerPool.releaseObject(obj)
    };
    goog.events.pools.getEvent = function() {
      return eventPool.getObject()
    };
    goog.events.pools.releaseEvent = function(obj) {
      eventPool.releaseObject(obj)
    };
    var OBJECT_POOL_INITIAL_COUNT = 0;
    var OBJECT_POOL_MAX_COUNT = 600;
    var objectPool = new goog.structs.SimplePool(OBJECT_POOL_INITIAL_COUNT, OBJECT_POOL_MAX_COUNT);
    objectPool.setCreateObjectFn(getObject);
    var ARRAY_POOL_INITIAL_COUNT = 0;
    var ARRAY_POOL_MAX_COUNT = 600;
    var arrayPool = new goog.structs.SimplePool(ARRAY_POOL_INITIAL_COUNT, ARRAY_POOL_MAX_COUNT);
    arrayPool.setCreateObjectFn(getArray);
    var HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT = 0;
    var HANDLE_EVENT_PROXY_POOL_MAX_COUNT = 600;
    var proxyPool = new goog.structs.SimplePool(HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT, HANDLE_EVENT_PROXY_POOL_MAX_COUNT);
    proxyPool.setCreateObjectFn(getProxy);
    var LISTENER_POOL_INITIAL_COUNT = 0;
    var LISTENER_POOL_MAX_COUNT = 600;
    var listenerPool = new goog.structs.SimplePool(LISTENER_POOL_INITIAL_COUNT, LISTENER_POOL_MAX_COUNT);
    listenerPool.setCreateObjectFn(getListener);
    var EVENT_POOL_INITIAL_COUNT = 0;
    var EVENT_POOL_MAX_COUNT = 600;
    var eventPool = new goog.structs.SimplePool(EVENT_POOL_INITIAL_COUNT, EVENT_POOL_MAX_COUNT);
    eventPool.setCreateObjectFn(getEvent)
  }
})();
goog.provide("goog.object");
goog.object.forEach = function(obj, f, opt_obj) {
  for(var key in obj) {
    f.call(opt_obj, obj[key], key, obj)
  }
};
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key]
    }
  }
  return res
};
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj)
  }
  return res
};
goog.object.some = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      return true
    }
  }
  return false
};
goog.object.every = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(!f.call(opt_obj, obj[key], key, obj)) {
      return false
    }
  }
  return true
};
goog.object.getCount = function(obj) {
  var rv = 0;
  for(var key in obj) {
    rv++
  }
  return rv
};
goog.object.getAnyKey = function(obj) {
  for(var key in obj) {
    return key
  }
};
goog.object.getAnyValue = function(obj) {
  for(var key in obj) {
    return obj[key]
  }
};
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val)
};
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = obj[key]
  }
  return res
};
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = key
  }
  return res
};
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;
  for(var i = isArrayLike ? 0 : 1;i < keys.length;i++) {
    obj = obj[keys[i]];
    if(!goog.isDef(obj)) {
      break
    }
  }
  return obj
};
goog.object.containsKey = function(obj, key) {
  return key in obj
};
goog.object.containsValue = function(obj, val) {
  for(var key in obj) {
    if(obj[key] == val) {
      return true
    }
  }
  return false
};
goog.object.findKey = function(obj, f, opt_this) {
  for(var key in obj) {
    if(f.call(opt_this, obj[key], key, obj)) {
      return key
    }
  }
  return undefined
};
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key]
};
goog.object.isEmpty = function(obj) {
  for(var key in obj) {
    return false
  }
  return true
};
goog.object.clear = function(obj) {
  for(var i in obj) {
    delete obj[i]
  }
};
goog.object.remove = function(obj, key) {
  var rv;
  if(rv = key in obj) {
    delete obj[key]
  }
  return rv
};
goog.object.add = function(obj, key, val) {
  if(key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val)
};
goog.object.get = function(obj, key, opt_val) {
  if(key in obj) {
    return obj[key]
  }
  return opt_val
};
goog.object.set = function(obj, key, value) {
  obj[key] = value
};
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : obj[key] = value
};
goog.object.clone = function(obj) {
  var res = {};
  for(var key in obj) {
    res[key] = obj[key]
  }
  return res
};
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key])
    }
    return clone
  }
  return obj
};
goog.object.transpose = function(obj) {
  var transposed = {};
  for(var key in obj) {
    transposed[obj[key]] = key
  }
  return transposed
};
goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.object.extend = function(target, var_args) {
  var key, source;
  for(var i = 1;i < arguments.length;i++) {
    source = arguments[i];
    for(key in source) {
      target[key] = source[key]
    }
    for(var j = 0;j < goog.object.PROTOTYPE_FIELDS_.length;j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if(Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
};
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(argLength % 2) {
    throw Error("Uneven number of arguments");
  }
  var rv = {};
  for(var i = 0;i < argLength;i += 2) {
    rv[arguments[i]] = arguments[i + 1]
  }
  return rv
};
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  var rv = {};
  for(var i = 0;i < argLength;i++) {
    rv[arguments[i]] = true
  }
  return rv
};
goog.provide("goog.events");
goog.require("goog.array");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.debug.errorHandlerWeakDep");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Event");
goog.require("goog.events.EventWrapper");
goog.require("goog.events.pools");
goog.require("goog.object");
goog.require("goog.userAgent");
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.requiresSyntheticEventPropagation_;
goog.events.listen = function(src, type, listener, opt_capt, opt_handler) {
  if(!type) {
    throw Error("Invalid event type");
  }else {
    if(goog.isArray(type)) {
      for(var i = 0;i < type.length;i++) {
        goog.events.listen(src, type[i], listener, opt_capt, opt_handler)
      }
      return null
    }else {
      var capture = !!opt_capt;
      var map = goog.events.listenerTree_;
      if(!(type in map)) {
        map[type] = goog.events.pools.getObject()
      }
      map = map[type];
      if(!(capture in map)) {
        map[capture] = goog.events.pools.getObject();
        map.count_++
      }
      map = map[capture];
      var srcUid = goog.getUid(src);
      var listenerArray, listenerObj;
      map.remaining_++;
      if(!map[srcUid]) {
        listenerArray = map[srcUid] = goog.events.pools.getArray();
        map.count_++
      }else {
        listenerArray = map[srcUid];
        for(var i = 0;i < listenerArray.length;i++) {
          listenerObj = listenerArray[i];
          if(listenerObj.listener == listener && listenerObj.handler == opt_handler) {
            if(listenerObj.removed) {
              break
            }
            return listenerArray[i].key
          }
        }
      }
      var proxy = goog.events.pools.getProxy();
      proxy.src = src;
      listenerObj = goog.events.pools.getListener();
      listenerObj.init(listener, proxy, src, type, capture, opt_handler);
      var key = listenerObj.key;
      proxy.key = key;
      listenerArray.push(listenerObj);
      goog.events.listeners_[key] = listenerObj;
      if(!goog.events.sources_[srcUid]) {
        goog.events.sources_[srcUid] = goog.events.pools.getArray()
      }
      goog.events.sources_[srcUid].push(listenerObj);
      if(src.addEventListener) {
        if(src == goog.global || !src.customEvent_) {
          src.addEventListener(type, proxy, capture)
        }
      }else {
        src.attachEvent(goog.events.getOnString_(type), proxy)
      }
      return key
    }
  }
};
goog.events.listenOnce = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.listenOnce(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var key = goog.events.listen(src, type, listener, opt_capt, opt_handler);
  var listenerObj = goog.events.listeners_[key];
  listenerObj.callOnce = true;
  return key
};
goog.events.listenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.listen(src, listener, opt_capt, opt_handler)
};
goog.events.unlisten = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.unlisten(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(!listenerArray) {
    return false
  }
  for(var i = 0;i < listenerArray.length;i++) {
    if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
      return goog.events.unlistenByKey(listenerArray[i].key)
    }
  }
  return false
};
goog.events.unlistenByKey = function(key) {
  if(!goog.events.listeners_[key]) {
    return false
  }
  var listener = goog.events.listeners_[key];
  if(listener.removed) {
    return false
  }
  var src = listener.src;
  var type = listener.type;
  var proxy = listener.proxy;
  var capture = listener.capture;
  if(src.removeEventListener) {
    if(src == goog.global || !src.customEvent_) {
      src.removeEventListener(type, proxy, capture)
    }
  }else {
    if(src.detachEvent) {
      src.detachEvent(goog.events.getOnString_(type), proxy)
    }
  }
  var srcUid = goog.getUid(src);
  var listenerArray = goog.events.listenerTree_[type][capture][srcUid];
  if(goog.events.sources_[srcUid]) {
    var sourcesArray = goog.events.sources_[srcUid];
    goog.array.remove(sourcesArray, listener);
    if(sourcesArray.length == 0) {
      delete goog.events.sources_[srcUid]
    }
  }
  listener.removed = true;
  listenerArray.needsCleanup_ = true;
  goog.events.cleanUp_(type, capture, srcUid, listenerArray);
  delete goog.events.listeners_[key];
  return true
};
goog.events.unlistenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.unlisten(src, listener, opt_capt, opt_handler)
};
goog.events.cleanUp_ = function(type, capture, srcUid, listenerArray) {
  if(!listenerArray.locked_) {
    if(listenerArray.needsCleanup_) {
      for(var oldIndex = 0, newIndex = 0;oldIndex < listenerArray.length;oldIndex++) {
        if(listenerArray[oldIndex].removed) {
          var proxy = listenerArray[oldIndex].proxy;
          proxy.src = null;
          goog.events.pools.releaseProxy(proxy);
          goog.events.pools.releaseListener(listenerArray[oldIndex]);
          continue
        }
        if(oldIndex != newIndex) {
          listenerArray[newIndex] = listenerArray[oldIndex]
        }
        newIndex++
      }
      listenerArray.length = newIndex;
      listenerArray.needsCleanup_ = false;
      if(newIndex == 0) {
        goog.events.pools.releaseArray(listenerArray);
        delete goog.events.listenerTree_[type][capture][srcUid];
        goog.events.listenerTree_[type][capture].count_--;
        if(goog.events.listenerTree_[type][capture].count_ == 0) {
          goog.events.pools.releaseObject(goog.events.listenerTree_[type][capture]);
          delete goog.events.listenerTree_[type][capture];
          goog.events.listenerTree_[type].count_--
        }
        if(goog.events.listenerTree_[type].count_ == 0) {
          goog.events.pools.releaseObject(goog.events.listenerTree_[type]);
          delete goog.events.listenerTree_[type]
        }
      }
    }
  }
};
goog.events.removeAll = function(opt_obj, opt_type, opt_capt) {
  var count = 0;
  var noObj = opt_obj == null;
  var noType = opt_type == null;
  var noCapt = opt_capt == null;
  opt_capt = !!opt_capt;
  if(!noObj) {
    var srcUid = goog.getUid(opt_obj);
    if(goog.events.sources_[srcUid]) {
      var sourcesArray = goog.events.sources_[srcUid];
      for(var i = sourcesArray.length - 1;i >= 0;i--) {
        var listener = sourcesArray[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    }
  }else {
    goog.object.forEach(goog.events.sources_, function(listeners) {
      for(var i = listeners.length - 1;i >= 0;i--) {
        var listener = listeners[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    })
  }
  return count
};
goog.events.getListeners = function(obj, type, capture) {
  return goog.events.getListeners_(obj, type, capture) || []
};
goog.events.getListeners_ = function(obj, type, capture) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      map = map[capture];
      var objUid = goog.getUid(obj);
      if(map[objUid]) {
        return map[objUid]
      }
    }
  }
  return null
};
goog.events.getListener = function(src, type, listener, opt_capt, opt_handler) {
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(listenerArray) {
    for(var i = 0;i < listenerArray.length;i++) {
      if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
        return listenerArray[i]
      }
    }
  }
  return null
};
goog.events.hasListener = function(obj, opt_type, opt_capture) {
  var objUid = goog.getUid(obj);
  var listeners = goog.events.sources_[objUid];
  if(listeners) {
    var hasType = goog.isDef(opt_type);
    var hasCapture = goog.isDef(opt_capture);
    if(hasType && hasCapture) {
      var map = goog.events.listenerTree_[opt_type];
      return!!map && !!map[opt_capture] && objUid in map[opt_capture]
    }else {
      if(!(hasType || hasCapture)) {
        return true
      }else {
        return goog.array.some(listeners, function(listener) {
          return hasType && listener.type == opt_type || hasCapture && listener.capture == opt_capture
        })
      }
    }
  }
  return false
};
goog.events.expose = function(e) {
  var str = [];
  for(var key in e) {
    if(e[key] && e[key].id) {
      str.push(key + " = " + e[key] + " (" + e[key].id + ")")
    }else {
      str.push(key + " = " + e[key])
    }
  }
  return str.join("\n")
};
goog.events.getOnString_ = function(type) {
  if(type in goog.events.onStringMap_) {
    return goog.events.onStringMap_[type]
  }
  return goog.events.onStringMap_[type] = goog.events.onString_ + type
};
goog.events.fireListeners = function(obj, type, capture, eventObject) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      return goog.events.fireListeners_(map[capture], obj, type, capture, eventObject)
    }
  }
  return true
};
goog.events.fireListeners_ = function(map, obj, type, capture, eventObject) {
  var retval = 1;
  var objUid = goog.getUid(obj);
  if(map[objUid]) {
    map.remaining_--;
    var listenerArray = map[objUid];
    if(!listenerArray.locked_) {
      listenerArray.locked_ = 1
    }else {
      listenerArray.locked_++
    }
    try {
      var length = listenerArray.length;
      for(var i = 0;i < length;i++) {
        var listener = listenerArray[i];
        if(listener && !listener.removed) {
          retval &= goog.events.fireListener(listener, eventObject) !== false
        }
      }
    }finally {
      listenerArray.locked_--;
      goog.events.cleanUp_(type, capture, objUid, listenerArray)
    }
  }
  return Boolean(retval)
};
goog.events.fireListener = function(listener, eventObject) {
  var rv = listener.handleEvent(eventObject);
  if(listener.callOnce) {
    goog.events.unlistenByKey(listener.key)
  }
  return rv
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(src, e) {
  var type = e.type || e;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  if(goog.isString(e)) {
    e = new goog.events.Event(e, src)
  }else {
    if(!(e instanceof goog.events.Event)) {
      var oldEvent = e;
      e = new goog.events.Event(type, src);
      goog.object.extend(e, oldEvent)
    }else {
      e.target = e.target || src
    }
  }
  var rv = 1, ancestors;
  map = map[type];
  var hasCapture = true in map;
  var targetsMap;
  if(hasCapture) {
    ancestors = [];
    for(var parent = src;parent;parent = parent.getParentEventTarget()) {
      ancestors.push(parent)
    }
    targetsMap = map[true];
    targetsMap.remaining_ = targetsMap.count_;
    for(var i = ancestors.length - 1;!e.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
      e.currentTarget = ancestors[i];
      rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, true, e) && e.returnValue_ != false
    }
  }
  var hasBubble = false in map;
  if(hasBubble) {
    targetsMap = map[false];
    targetsMap.remaining_ = targetsMap.count_;
    if(hasCapture) {
      for(var i = 0;!e.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
        e.currentTarget = ancestors[i];
        rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, false, e) && e.returnValue_ != false
      }
    }else {
      for(var current = src;!e.propagationStopped_ && current && targetsMap.remaining_;current = current.getParentEventTarget()) {
        e.currentTarget = current;
        rv &= goog.events.fireListeners_(targetsMap, current, e.type, false, e) && e.returnValue_ != false
      }
    }
  }
  return Boolean(rv)
};
goog.events.protectBrowserEventEntryPoint = function(errorHandler) {
  goog.events.handleBrowserEvent_ = errorHandler.protectEntryPoint(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(key, opt_evt) {
  if(!goog.events.listeners_[key]) {
    return true
  }
  var listener = goog.events.listeners_[key];
  var type = listener.type;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  map = map[type];
  var retval, targetsMap;
  if(goog.events.synthesizeEventPropagation_()) {
    var ieEvent = opt_evt || goog.getObjectByName("window.event");
    var hasCapture = true in map;
    var hasBubble = false in map;
    if(hasCapture) {
      if(goog.events.isMarkedIeEvent_(ieEvent)) {
        return true
      }
      goog.events.markIeEvent_(ieEvent)
    }
    var evt = goog.events.pools.getEvent();
    evt.init(ieEvent, this);
    retval = true;
    try {
      if(hasCapture) {
        var ancestors = goog.events.pools.getArray();
        for(var parent = evt.currentTarget;parent;parent = parent.parentNode) {
          ancestors.push(parent)
        }
        targetsMap = map[true];
        targetsMap.remaining_ = targetsMap.count_;
        for(var i = ancestors.length - 1;!evt.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
          evt.currentTarget = ancestors[i];
          retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, true, evt)
        }
        if(hasBubble) {
          targetsMap = map[false];
          targetsMap.remaining_ = targetsMap.count_;
          for(var i = 0;!evt.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
            evt.currentTarget = ancestors[i];
            retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, false, evt)
          }
        }
      }else {
        retval = goog.events.fireListener(listener, evt)
      }
    }finally {
      if(ancestors) {
        ancestors.length = 0;
        goog.events.pools.releaseArray(ancestors)
      }
      evt.dispose();
      goog.events.pools.releaseEvent(evt)
    }
    return retval
  }
  var be = new goog.events.BrowserEvent(opt_evt, this);
  try {
    retval = goog.events.fireListener(listener, be)
  }finally {
    be.dispose()
  }
  return retval
};
goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_);
goog.events.markIeEvent_ = function(e) {
  var useReturnValue = false;
  if(e.keyCode == 0) {
    try {
      e.keyCode = -1;
      return
    }catch(ex) {
      useReturnValue = true
    }
  }
  if(useReturnValue || e.returnValue == undefined) {
    e.returnValue = true
  }
};
goog.events.isMarkedIeEvent_ = function(e) {
  return e.keyCode < 0 || e.returnValue != undefined
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(identifier) {
  return identifier + "_" + goog.events.uniqueIdCounter_++
};
goog.events.synthesizeEventPropagation_ = function() {
  if(goog.events.requiresSyntheticEventPropagation_ === undefined) {
    goog.events.requiresSyntheticEventPropagation_ = goog.userAgent.IE && !goog.global["addEventListener"]
  }
  return goog.events.requiresSyntheticEventPropagation_
};
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.events.handleBrowserEvent_ = transformer(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
});
goog.provide("goog.events.EventTarget");
goog.require("goog.Disposable");
goog.require("goog.events");
goog.events.EventTarget = function() {
  goog.Disposable.call(this)
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.EventTarget.prototype.customEvent_ = true;
goog.events.EventTarget.prototype.parentEventTarget_ = null;
goog.events.EventTarget.prototype.getParentEventTarget = function() {
  return this.parentEventTarget_
};
goog.events.EventTarget.prototype.setParentEventTarget = function(parent) {
  this.parentEventTarget_ = parent
};
goog.events.EventTarget.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog.events.listen(this, type, handler, opt_capture, opt_handlerScope)
};
goog.events.EventTarget.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog.events.unlisten(this, type, handler, opt_capture, opt_handlerScope)
};
goog.events.EventTarget.prototype.dispatchEvent = function(e) {
  return goog.events.dispatchEvent(this, e)
};
goog.events.EventTarget.prototype.disposeInternal = function() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  goog.events.removeAll(this);
  this.parentEventTarget_ = null
};
goog.provide("goog.Timer");
goog.require("goog.events.EventTarget");
goog.Timer = function(opt_interval, opt_timerObject) {
  goog.events.EventTarget.call(this);
  this.interval_ = opt_interval || 1;
  this.timerObject_ = opt_timerObject || goog.Timer.defaultTimerObject;
  this.boundTick_ = goog.bind(this.tick_, this);
  this.last_ = goog.now()
};
goog.inherits(goog.Timer, goog.events.EventTarget);
goog.Timer.MAX_TIMEOUT_ = 2147483647;
goog.Timer.prototype.enabled = false;
goog.Timer.defaultTimerObject = goog.global["window"];
goog.Timer.intervalScale = 0.8;
goog.Timer.prototype.timer_ = null;
goog.Timer.prototype.getInterval = function() {
  return this.interval_
};
goog.Timer.prototype.setInterval = function(interval) {
  this.interval_ = interval;
  if(this.timer_ && this.enabled) {
    this.stop();
    this.start()
  }else {
    if(this.timer_) {
      this.stop()
    }
  }
};
goog.Timer.prototype.tick_ = function() {
  if(this.enabled) {
    var elapsed = goog.now() - this.last_;
    if(elapsed > 0 && elapsed < this.interval_ * goog.Timer.intervalScale) {
      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - elapsed);
      return
    }
    this.dispatchTick();
    if(this.enabled) {
      this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
      this.last_ = goog.now()
    }
  }
};
goog.Timer.prototype.dispatchTick = function() {
  this.dispatchEvent(goog.Timer.TICK)
};
goog.Timer.prototype.start = function() {
  this.enabled = true;
  if(!this.timer_) {
    this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_);
    this.last_ = goog.now()
  }
};
goog.Timer.prototype.stop = function() {
  this.enabled = false;
  if(this.timer_) {
    this.timerObject_.clearTimeout(this.timer_);
    this.timer_ = null
  }
};
goog.Timer.prototype.disposeInternal = function() {
  goog.Timer.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.timerObject_
};
goog.Timer.TICK = "tick";
goog.Timer.callOnce = function(listener, opt_delay, opt_handler) {
  if(goog.isFunction(listener)) {
    if(opt_handler) {
      listener = goog.bind(listener, opt_handler)
    }
  }else {
    if(listener && typeof listener.handleEvent == "function") {
      listener = goog.bind(listener.handleEvent, listener)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  if(opt_delay > goog.Timer.MAX_TIMEOUT_) {
    return-1
  }else {
    return goog.Timer.defaultTimerObject.setTimeout(listener, opt_delay || 0)
  }
};
goog.Timer.clear = function(timerId) {
  goog.Timer.defaultTimerObject.clearTimeout(timerId)
};
goog.provide("goog.structs");
goog.require("goog.array");
goog.require("goog.object");
goog.structs.getCount = function(col) {
  if(typeof col.getCount == "function") {
    return col.getCount()
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return col.length
  }
  return goog.object.getCount(col)
};
goog.structs.getValues = function(col) {
  if(typeof col.getValues == "function") {
    return col.getValues()
  }
  if(goog.isString(col)) {
    return col.split("")
  }
  if(goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for(var i = 0;i < l;i++) {
      rv.push(col[i])
    }
    return rv
  }
  return goog.object.getValues(col)
};
goog.structs.getKeys = function(col) {
  if(typeof col.getKeys == "function") {
    return col.getKeys()
  }
  if(typeof col.getValues == "function") {
    return undefined
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    var rv = [];
    var l = col.length;
    for(var i = 0;i < l;i++) {
      rv.push(i)
    }
    return rv
  }
  return goog.object.getKeys(col)
};
goog.structs.contains = function(col, val) {
  if(typeof col.contains == "function") {
    return col.contains(val)
  }
  if(typeof col.containsValue == "function") {
    return col.containsValue(val)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.contains(col, val)
  }
  return goog.object.containsValue(col, val)
};
goog.structs.isEmpty = function(col) {
  if(typeof col.isEmpty == "function") {
    return col.isEmpty()
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.isEmpty(col)
  }
  return goog.object.isEmpty(col)
};
goog.structs.clear = function(col) {
  if(typeof col.clear == "function") {
    col.clear()
  }else {
    if(goog.isArrayLike(col)) {
      goog.array.clear(col)
    }else {
      goog.object.clear(col)
    }
  }
};
goog.structs.forEach = function(col, f, opt_obj) {
  if(typeof col.forEach == "function") {
    col.forEach(f, opt_obj)
  }else {
    if(goog.isArrayLike(col) || goog.isString(col)) {
      goog.array.forEach(col, f, opt_obj)
    }else {
      var keys = goog.structs.getKeys(col);
      var values = goog.structs.getValues(col);
      var l = values.length;
      for(var i = 0;i < l;i++) {
        f.call(opt_obj, values[i], keys && keys[i], col)
      }
    }
  }
};
goog.structs.filter = function(col, f, opt_obj) {
  if(typeof col.filter == "function") {
    return col.filter(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.filter(col, f, opt_obj)
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if(keys) {
    rv = {};
    for(var i = 0;i < l;i++) {
      if(f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i]
      }
    }
  }else {
    rv = [];
    for(var i = 0;i < l;i++) {
      if(f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i])
      }
    }
  }
  return rv
};
goog.structs.map = function(col, f, opt_obj) {
  if(typeof col.map == "function") {
    return col.map(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.map(col, f, opt_obj)
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if(keys) {
    rv = {};
    for(var i = 0;i < l;i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col)
    }
  }else {
    rv = [];
    for(var i = 0;i < l;i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col)
    }
  }
  return rv
};
goog.structs.some = function(col, f, opt_obj) {
  if(typeof col.some == "function") {
    return col.some(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.some(col, f, opt_obj)
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    if(f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true
    }
  }
  return false
};
goog.structs.every = function(col, f, opt_obj) {
  if(typeof col.every == "function") {
    return col.every(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.every(col, f, opt_obj)
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    if(!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false
    }
  }
  return true
};
goog.provide("goog.iter");
goog.provide("goog.iter.Iterator");
goog.provide("goog.iter.StopIteration");
goog.require("goog.array");
goog.require("goog.asserts");
goog.iter.Iterable;
if("StopIteration" in goog.global) {
  goog.iter.StopIteration = goog.global["StopIteration"]
}else {
  goog.iter.StopIteration = Error("StopIteration")
}
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function(opt_keys) {
  return this
};
goog.iter.toIterator = function(iterable) {
  if(iterable instanceof goog.iter.Iterator) {
    return iterable
  }
  if(typeof iterable.__iterator__ == "function") {
    return iterable.__iterator__(false)
  }
  if(goog.isArrayLike(iterable)) {
    var i = 0;
    var newIter = new goog.iter.Iterator;
    newIter.next = function() {
      while(true) {
        if(i >= iterable.length) {
          throw goog.iter.StopIteration;
        }
        if(!(i in iterable)) {
          i++;
          continue
        }
        return iterable[i++]
      }
    };
    return newIter
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(iterable, f, opt_obj) {
  if(goog.isArrayLike(iterable)) {
    try {
      goog.array.forEach(iterable, f, opt_obj)
    }catch(ex) {
      if(ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }else {
    iterable = goog.iter.toIterator(iterable);
    try {
      while(true) {
        f.call(opt_obj, iterable.next(), undefined, iterable)
      }
    }catch(ex) {
      if(ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }
};
goog.iter.filter = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      if(f.call(opt_obj, val, undefined, iterable)) {
        return val
      }
    }
  };
  return newIter
};
goog.iter.range = function(startOrStop, opt_stop, opt_step) {
  var start = 0;
  var stop = startOrStop;
  var step = opt_step || 1;
  if(arguments.length > 1) {
    start = startOrStop;
    stop = opt_stop
  }
  if(step == 0) {
    throw Error("Range step argument must not be zero");
  }
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    if(step > 0 && start >= stop || step < 0 && start <= stop) {
      throw goog.iter.StopIteration;
    }
    var rv = start;
    start += step;
    return rv
  };
  return newIter
};
goog.iter.join = function(iterable, deliminator) {
  return goog.iter.toArray(iterable).join(deliminator)
};
goog.iter.map = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      return f.call(opt_obj, val, undefined, iterable)
    }
  };
  return newIter
};
goog.iter.reduce = function(iterable, f, val, opt_obj) {
  var rval = val;
  goog.iter.forEach(iterable, function(val) {
    rval = f.call(opt_obj, rval, val)
  });
  return rval
};
goog.iter.some = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  try {
    while(true) {
      if(f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return true
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return false
};
goog.iter.every = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  try {
    while(true) {
      if(!f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return false
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return true
};
goog.iter.chain = function(var_args) {
  var args = arguments;
  var length = args.length;
  var i = 0;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    try {
      if(i >= length) {
        throw goog.iter.StopIteration;
      }
      var current = goog.iter.toIterator(args[i]);
      return current.next()
    }catch(ex) {
      if(ex !== goog.iter.StopIteration || i >= length) {
        throw ex;
      }else {
        i++;
        return this.next()
      }
    }
  };
  return newIter
};
goog.iter.dropWhile = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var dropping = true;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      if(dropping && f.call(opt_obj, val, undefined, iterable)) {
        continue
      }else {
        dropping = false
      }
      return val
    }
  };
  return newIter
};
goog.iter.takeWhile = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var taking = true;
  newIter.next = function() {
    while(true) {
      if(taking) {
        var val = iterable.next();
        if(f.call(opt_obj, val, undefined, iterable)) {
          return val
        }else {
          taking = false
        }
      }else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return newIter
};
goog.iter.toArray = function(iterable) {
  if(goog.isArrayLike(iterable)) {
    return goog.array.toArray(iterable)
  }
  iterable = goog.iter.toIterator(iterable);
  var array = [];
  goog.iter.forEach(iterable, function(val) {
    array.push(val)
  });
  return array
};
goog.iter.equals = function(iterable1, iterable2) {
  iterable1 = goog.iter.toIterator(iterable1);
  iterable2 = goog.iter.toIterator(iterable2);
  var b1, b2;
  try {
    while(true) {
      b1 = b2 = false;
      var val1 = iterable1.next();
      b1 = true;
      var val2 = iterable2.next();
      b2 = true;
      if(val1 != val2) {
        return false
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }else {
      if(b1 && !b2) {
        return false
      }
      if(!b2) {
        try {
          val2 = iterable2.next();
          return false
        }catch(ex1) {
          if(ex1 !== goog.iter.StopIteration) {
            throw ex1;
          }
          return true
        }
      }
    }
  }
  return false
};
goog.iter.nextOrValue = function(iterable, defaultValue) {
  try {
    return goog.iter.toIterator(iterable).next()
  }catch(e) {
    if(e != goog.iter.StopIteration) {
      throw e;
    }
    return defaultValue
  }
};
goog.iter.product = function(var_args) {
  var someArrayEmpty = goog.array.some(arguments, function(arr) {
    return!arr.length
  });
  if(someArrayEmpty || !arguments.length) {
    return new goog.iter.Iterator
  }
  var iter = new goog.iter.Iterator;
  var arrays = arguments;
  var indicies = goog.array.repeat(0, arrays.length);
  iter.next = function() {
    if(indicies) {
      var retVal = goog.array.map(indicies, function(valueIndex, arrayIndex) {
        return arrays[arrayIndex][valueIndex]
      });
      for(var i = indicies.length - 1;i >= 0;i--) {
        goog.asserts.assert(indicies);
        if(indicies[i] < arrays[i].length - 1) {
          indicies[i]++;
          break
        }
        if(i == 0) {
          indicies = null;
          break
        }
        indicies[i] = 0
      }
      return retVal
    }
    throw goog.iter.StopIteration;
  };
  return iter
};
goog.provide("goog.structs.Map");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.StopIteration");
goog.require("goog.object");
goog.require("goog.structs");
goog.structs.Map = function(opt_map, var_args) {
  this.map_ = {};
  this.keys_ = [];
  var argLength = arguments.length;
  if(argLength > 1) {
    if(argLength % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var i = 0;i < argLength;i += 2) {
      this.set(arguments[i], arguments[i + 1])
    }
  }else {
    if(opt_map) {
      this.addAll(opt_map)
    }
  }
};
goog.structs.Map.prototype.count_ = 0;
goog.structs.Map.prototype.version_ = 0;
goog.structs.Map.prototype.getCount = function() {
  return this.count_
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  var rv = [];
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    rv.push(this.map_[key])
  }
  return rv
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat()
};
goog.structs.Map.prototype.containsKey = function(key) {
  return goog.structs.Map.hasKey_(this.map_, key)
};
goog.structs.Map.prototype.containsValue = function(val) {
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    if(goog.structs.Map.hasKey_(this.map_, key) && this.map_[key] == val) {
      return true
    }
  }
  return false
};
goog.structs.Map.prototype.equals = function(otherMap, opt_equalityFn) {
  if(this === otherMap) {
    return true
  }
  if(this.count_ != otherMap.getCount()) {
    return false
  }
  var equalityFn = opt_equalityFn || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for(var key, i = 0;key = this.keys_[i];i++) {
    if(!equalityFn(this.get(key), otherMap.get(key))) {
      return false
    }
  }
  return true
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b
};
goog.structs.Map.prototype.isEmpty = function() {
  return this.count_ == 0
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.keys_.length = 0;
  this.count_ = 0;
  this.version_ = 0
};
goog.structs.Map.prototype.remove = function(key) {
  if(goog.structs.Map.hasKey_(this.map_, key)) {
    delete this.map_[key];
    this.count_--;
    this.version_++;
    if(this.keys_.length > 2 * this.count_) {
      this.cleanupKeysArray_()
    }
    return true
  }
  return false
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if(this.count_ != this.keys_.length) {
    var srcIndex = 0;
    var destIndex = 0;
    while(srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if(goog.structs.Map.hasKey_(this.map_, key)) {
        this.keys_[destIndex++] = key
      }
      srcIndex++
    }
    this.keys_.length = destIndex
  }
  if(this.count_ != this.keys_.length) {
    var seen = {};
    var srcIndex = 0;
    var destIndex = 0;
    while(srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if(!goog.structs.Map.hasKey_(seen, key)) {
        this.keys_[destIndex++] = key;
        seen[key] = 1
      }
      srcIndex++
    }
    this.keys_.length = destIndex
  }
};
goog.structs.Map.prototype.get = function(key, opt_val) {
  if(goog.structs.Map.hasKey_(this.map_, key)) {
    return this.map_[key]
  }
  return opt_val
};
goog.structs.Map.prototype.set = function(key, value) {
  if(!goog.structs.Map.hasKey_(this.map_, key)) {
    this.count_++;
    this.keys_.push(key);
    this.version_++
  }
  this.map_[key] = value
};
goog.structs.Map.prototype.addAll = function(map) {
  var keys, values;
  if(map instanceof goog.structs.Map) {
    keys = map.getKeys();
    values = map.getValues()
  }else {
    keys = goog.object.getKeys(map);
    values = goog.object.getValues(map)
  }
  for(var i = 0;i < keys.length;i++) {
    this.set(keys[i], values[i])
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this)
};
goog.structs.Map.prototype.transpose = function() {
  var transposed = new goog.structs.Map;
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    var value = this.map_[key];
    transposed.set(value, key)
  }
  return transposed
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  var obj = {};
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    obj[key] = this.map_[key]
  }
  return obj
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(true)
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(false)
};
goog.structs.Map.prototype.__iterator__ = function(opt_keys) {
  this.cleanupKeysArray_();
  var i = 0;
  var keys = this.keys_;
  var map = this.map_;
  var version = this.version_;
  var selfObj = this;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      if(version != selfObj.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(i >= keys.length) {
        throw goog.iter.StopIteration;
      }
      var key = keys[i++];
      return opt_keys ? key : map[key]
    }
  };
  return newIter
};
goog.structs.Map.hasKey_ = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
};
goog.provide("goog.structs.Set");
goog.require("goog.structs");
goog.require("goog.structs.Map");
goog.structs.Set = function(opt_values) {
  this.map_ = new goog.structs.Map;
  if(opt_values) {
    this.addAll(opt_values)
  }
};
goog.structs.Set.getKey_ = function(val) {
  var type = typeof val;
  if(type == "object" && val || type == "function") {
    return"o" + goog.getUid(val)
  }else {
    return type.substr(0, 1) + val
  }
};
goog.structs.Set.prototype.getCount = function() {
  return this.map_.getCount()
};
goog.structs.Set.prototype.add = function(element) {
  this.map_.set(goog.structs.Set.getKey_(element), element)
};
goog.structs.Set.prototype.addAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    this.add(values[i])
  }
};
goog.structs.Set.prototype.removeAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    this.remove(values[i])
  }
};
goog.structs.Set.prototype.remove = function(element) {
  return this.map_.remove(goog.structs.Set.getKey_(element))
};
goog.structs.Set.prototype.clear = function() {
  this.map_.clear()
};
goog.structs.Set.prototype.isEmpty = function() {
  return this.map_.isEmpty()
};
goog.structs.Set.prototype.contains = function(element) {
  return this.map_.containsKey(goog.structs.Set.getKey_(element))
};
goog.structs.Set.prototype.containsAll = function(col) {
  return goog.structs.every(col, this.contains, this)
};
goog.structs.Set.prototype.intersection = function(col) {
  var result = new goog.structs.Set;
  var values = goog.structs.getValues(col);
  for(var i = 0;i < values.length;i++) {
    var value = values[i];
    if(this.contains(value)) {
      result.add(value)
    }
  }
  return result
};
goog.structs.Set.prototype.getValues = function() {
  return this.map_.getValues()
};
goog.structs.Set.prototype.clone = function() {
  return new goog.structs.Set(this)
};
goog.structs.Set.prototype.equals = function(col) {
  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col)
};
goog.structs.Set.prototype.isSubsetOf = function(col) {
  var colCount = goog.structs.getCount(col);
  if(this.getCount() > colCount) {
    return false
  }
  if(!(col instanceof goog.structs.Set) && colCount > 5) {
    col = new goog.structs.Set(col)
  }
  return goog.structs.every(this, function(value) {
    return goog.structs.contains(col, value)
  })
};
goog.structs.Set.prototype.__iterator__ = function(opt_keys) {
  return this.map_.__iterator__(false)
};
goog.provide("goog.debug");
goog.require("goog.array");
goog.require("goog.string");
goog.require("goog.structs.Set");
goog.debug.catchErrors = function(logFunc, opt_cancel, opt_target) {
  var target = opt_target || goog.global;
  var oldErrorHandler = target.onerror;
  target.onerror = function(message, url, line) {
    if(oldErrorHandler) {
      oldErrorHandler(message, url, line)
    }
    logFunc({message:message, fileName:url, line:line});
    return Boolean(opt_cancel)
  }
};
goog.debug.expose = function(obj, opt_showFn) {
  if(typeof obj == "undefined") {
    return"undefined"
  }
  if(obj == null) {
    return"NULL"
  }
  var str = [];
  for(var x in obj) {
    if(!opt_showFn && goog.isFunction(obj[x])) {
      continue
    }
    var s = x + " = ";
    try {
      s += obj[x]
    }catch(e) {
      s += "*** " + e + " ***"
    }
    str.push(s)
  }
  return str.join("\n")
};
goog.debug.deepExpose = function(obj, opt_showFn) {
  var previous = new goog.structs.Set;
  var str = [];
  var helper = function(obj, space) {
    var nestspace = space + "  ";
    var indentMultiline = function(str) {
      return str.replace(/\n/g, "\n" + space)
    };
    try {
      if(!goog.isDef(obj)) {
        str.push("undefined")
      }else {
        if(goog.isNull(obj)) {
          str.push("NULL")
        }else {
          if(goog.isString(obj)) {
            str.push('"' + indentMultiline(obj) + '"')
          }else {
            if(goog.isFunction(obj)) {
              str.push(indentMultiline(String(obj)))
            }else {
              if(goog.isObject(obj)) {
                if(previous.contains(obj)) {
                  str.push("*** reference loop detected ***")
                }else {
                  previous.add(obj);
                  str.push("{");
                  for(var x in obj) {
                    if(!opt_showFn && goog.isFunction(obj[x])) {
                      continue
                    }
                    str.push("\n");
                    str.push(nestspace);
                    str.push(x + " = ");
                    helper(obj[x], nestspace)
                  }
                  str.push("\n" + space + "}")
                }
              }else {
                str.push(obj)
              }
            }
          }
        }
      }
    }catch(e) {
      str.push("*** " + e + " ***")
    }
  };
  helper(obj, "");
  return str.join("")
};
goog.debug.exposeArray = function(arr) {
  var str = [];
  for(var i = 0;i < arr.length;i++) {
    if(goog.isArray(arr[i])) {
      str.push(goog.debug.exposeArray(arr[i]))
    }else {
      str.push(arr[i])
    }
  }
  return"[ " + str.join(", ") + " ]"
};
goog.debug.exposeException = function(err, opt_fn) {
  try {
    var e = goog.debug.normalizeErrorObject(err);
    var error = "Message: " + goog.string.htmlEscape(e.message) + '\nUrl: <a href="view-source:' + e.fileName + '" target="_new">' + e.fileName + "</a>\nLine: " + e.lineNumber + "\n\nBrowser stack:\n" + goog.string.htmlEscape(e.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + goog.string.htmlEscape(goog.debug.getStacktrace(opt_fn) + "-> ");
    return error
  }catch(e2) {
    return"Exception trying to expose exception! You win, we lose. " + e2
  }
};
goog.debug.normalizeErrorObject = function(err) {
  var href = goog.getObjectByName("window.location.href");
  if(goog.isString(err)) {
    return{"message":err, "name":"Unknown error", "lineNumber":"Not available", "fileName":href, "stack":"Not available"}
  }
  var lineNumber, fileName;
  var threwError = false;
  try {
    lineNumber = err.lineNumber || err.line || "Not available"
  }catch(e) {
    lineNumber = "Not available";
    threwError = true
  }
  try {
    fileName = err.fileName || err.filename || err.sourceURL || href
  }catch(e) {
    fileName = "Not available";
    threwError = true
  }
  if(threwError || !err.lineNumber || !err.fileName || !err.stack) {
    return{"message":err.message, "name":err.name, "lineNumber":lineNumber, "fileName":fileName, "stack":err.stack || "Not available"}
  }
  return err
};
goog.debug.enhanceError = function(err, opt_message) {
  var error = typeof err == "string" ? Error(err) : err;
  if(!error.stack) {
    error.stack = goog.debug.getStacktrace(arguments.callee.caller)
  }
  if(opt_message) {
    var x = 0;
    while(error["message" + x]) {
      ++x
    }
    error["message" + x] = String(opt_message)
  }
  return error
};
goog.debug.getStacktraceSimple = function(opt_depth) {
  var sb = [];
  var fn = arguments.callee.caller;
  var depth = 0;
  while(fn && (!opt_depth || depth < opt_depth)) {
    sb.push(goog.debug.getFunctionName(fn));
    sb.push("()\n");
    try {
      fn = fn.caller
    }catch(e) {
      sb.push("[exception trying to get caller]\n");
      break
    }
    depth++;
    if(depth >= goog.debug.MAX_STACK_DEPTH) {
      sb.push("[...long stack...]");
      break
    }
  }
  if(opt_depth && depth >= opt_depth) {
    sb.push("[...reached max depth limit...]")
  }else {
    sb.push("[end]")
  }
  return sb.join("")
};
goog.debug.MAX_STACK_DEPTH = 50;
goog.debug.getStacktrace = function(opt_fn) {
  return goog.debug.getStacktraceHelper_(opt_fn || arguments.callee.caller, [])
};
goog.debug.getStacktraceHelper_ = function(fn, visited) {
  var sb = [];
  if(goog.array.contains(visited, fn)) {
    sb.push("[...circular reference...]")
  }else {
    if(fn && visited.length < goog.debug.MAX_STACK_DEPTH) {
      sb.push(goog.debug.getFunctionName(fn) + "(");
      var args = fn.arguments;
      for(var i = 0;i < args.length;i++) {
        if(i > 0) {
          sb.push(", ")
        }
        var argDesc;
        var arg = args[i];
        switch(typeof arg) {
          case "object":
            argDesc = arg ? "object" : "null";
            break;
          case "string":
            argDesc = arg;
            break;
          case "number":
            argDesc = String(arg);
            break;
          case "boolean":
            argDesc = arg ? "true" : "false";
            break;
          case "function":
            argDesc = goog.debug.getFunctionName(arg);
            argDesc = argDesc ? argDesc : "[fn]";
            break;
          case "undefined":
          ;
          default:
            argDesc = typeof arg;
            break
        }
        if(argDesc.length > 40) {
          argDesc = argDesc.substr(0, 40) + "..."
        }
        sb.push(argDesc)
      }
      visited.push(fn);
      sb.push(")\n");
      try {
        sb.push(goog.debug.getStacktraceHelper_(fn.caller, visited))
      }catch(e) {
        sb.push("[exception trying to get caller]\n")
      }
    }else {
      if(fn) {
        sb.push("[...long stack...]")
      }else {
        sb.push("[end]")
      }
    }
  }
  return sb.join("")
};
goog.debug.getFunctionName = function(fn) {
  var functionSource = String(fn);
  if(!goog.debug.fnNameCache_[functionSource]) {
    var matches = /function ([^\(]+)/.exec(functionSource);
    if(matches) {
      var method = matches[1];
      goog.debug.fnNameCache_[functionSource] = method
    }else {
      goog.debug.fnNameCache_[functionSource] = "[Anonymous]"
    }
  }
  return goog.debug.fnNameCache_[functionSource]
};
goog.debug.makeWhitespaceVisible = function(string) {
  return string.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
};
goog.debug.fnNameCache_ = {};
goog.provide("goog.debug.LogRecord");
goog.debug.LogRecord = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {
  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber)
};
goog.debug.LogRecord.prototype.time_;
goog.debug.LogRecord.prototype.level_;
goog.debug.LogRecord.prototype.msg_;
goog.debug.LogRecord.prototype.loggerName_;
goog.debug.LogRecord.prototype.sequenceNumber_ = 0;
goog.debug.LogRecord.prototype.exception_ = null;
goog.debug.LogRecord.prototype.exceptionText_ = null;
goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = true;
goog.debug.LogRecord.nextSequenceNumber_ = 0;
goog.debug.LogRecord.prototype.reset = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {
  if(goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {
    this.sequenceNumber_ = typeof opt_sequenceNumber == "number" ? opt_sequenceNumber : goog.debug.LogRecord.nextSequenceNumber_++
  }
  this.time_ = opt_time || goog.now();
  this.level_ = level;
  this.msg_ = msg;
  this.loggerName_ = loggerName;
  delete this.exception_;
  delete this.exceptionText_
};
goog.debug.LogRecord.prototype.getLoggerName = function() {
  return this.loggerName_
};
goog.debug.LogRecord.prototype.getException = function() {
  return this.exception_
};
goog.debug.LogRecord.prototype.setException = function(exception) {
  this.exception_ = exception
};
goog.debug.LogRecord.prototype.getExceptionText = function() {
  return this.exceptionText_
};
goog.debug.LogRecord.prototype.setExceptionText = function(text) {
  this.exceptionText_ = text
};
goog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {
  this.loggerName_ = loggerName
};
goog.debug.LogRecord.prototype.getLevel = function() {
  return this.level_
};
goog.debug.LogRecord.prototype.setLevel = function(level) {
  this.level_ = level
};
goog.debug.LogRecord.prototype.getMessage = function() {
  return this.msg_
};
goog.debug.LogRecord.prototype.setMessage = function(msg) {
  this.msg_ = msg
};
goog.debug.LogRecord.prototype.getMillis = function() {
  return this.time_
};
goog.debug.LogRecord.prototype.setMillis = function(time) {
  this.time_ = time
};
goog.debug.LogRecord.prototype.getSequenceNumber = function() {
  return this.sequenceNumber_
};
goog.provide("goog.debug.LogBuffer");
goog.require("goog.asserts");
goog.require("goog.debug.LogRecord");
goog.debug.LogBuffer = function() {
  goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining " + "goog.debug.LogBuffer.CAPACITY.");
  this.clear()
};
goog.debug.LogBuffer.getInstance = function() {
  if(!goog.debug.LogBuffer.instance_) {
    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer
  }
  return goog.debug.LogBuffer.instance_
};
goog.debug.LogBuffer.CAPACITY = 0;
goog.debug.LogBuffer.prototype.buffer_;
goog.debug.LogBuffer.prototype.curIndex_;
goog.debug.LogBuffer.prototype.isFull_;
goog.debug.LogBuffer.prototype.addRecord = function(level, msg, loggerName) {
  var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
  this.curIndex_ = curIndex;
  if(this.isFull_) {
    var ret = this.buffer_[curIndex];
    ret.reset(level, msg, loggerName);
    return ret
  }
  this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;
  return this.buffer_[curIndex] = new goog.debug.LogRecord(level, msg, loggerName)
};
goog.debug.LogBuffer.isBufferingEnabled = function() {
  return goog.debug.LogBuffer.CAPACITY > 0
};
goog.debug.LogBuffer.prototype.clear = function() {
  this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);
  this.curIndex_ = -1;
  this.isFull_ = false
};
goog.debug.LogBuffer.prototype.forEachRecord = function(func) {
  var buffer = this.buffer_;
  if(!buffer[0]) {
    return
  }
  var curIndex = this.curIndex_;
  var i = this.isFull_ ? curIndex : -1;
  do {
    i = (i + 1) % goog.debug.LogBuffer.CAPACITY;
    func(buffer[i])
  }while(i != curIndex)
};
goog.provide("goog.debug.LogManager");
goog.provide("goog.debug.Logger");
goog.provide("goog.debug.Logger.Level");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug");
goog.require("goog.debug.LogBuffer");
goog.require("goog.debug.LogRecord");
goog.debug.Logger = function(name) {
  this.name_ = name
};
goog.debug.Logger.prototype.parent_ = null;
goog.debug.Logger.prototype.level_ = null;
goog.debug.Logger.prototype.children_ = null;
goog.debug.Logger.prototype.handlers_ = null;
goog.debug.Logger.ENABLE_HIERARCHY = true;
if(!goog.debug.Logger.ENABLE_HIERARCHY) {
  goog.debug.Logger.rootHandlers_ = [];
  goog.debug.Logger.rootLevel_
}
goog.debug.Logger.Level = function(name, value) {
  this.name = name;
  this.value = value
};
goog.debug.Logger.Level.prototype.toString = function() {
  return this.name
};
goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", Infinity);
goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200);
goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1E3);
goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900);
goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800);
goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700);
goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500);
goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400);
goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300);
goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0);
goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL];
goog.debug.Logger.Level.predefinedLevelsCache_ = null;
goog.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
  goog.debug.Logger.Level.predefinedLevelsCache_ = {};
  for(var i = 0, level;level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i];i++) {
    goog.debug.Logger.Level.predefinedLevelsCache_[level.value] = level;
    goog.debug.Logger.Level.predefinedLevelsCache_[level.name] = level
  }
};
goog.debug.Logger.Level.getPredefinedLevel = function(name) {
  if(!goog.debug.Logger.Level.predefinedLevelsCache_) {
    goog.debug.Logger.Level.createPredefinedLevelsCache_()
  }
  return goog.debug.Logger.Level.predefinedLevelsCache_[name] || null
};
goog.debug.Logger.Level.getPredefinedLevelByValue = function(value) {
  if(!goog.debug.Logger.Level.predefinedLevelsCache_) {
    goog.debug.Logger.Level.createPredefinedLevelsCache_()
  }
  if(value in goog.debug.Logger.Level.predefinedLevelsCache_) {
    return goog.debug.Logger.Level.predefinedLevelsCache_[value]
  }
  for(var i = 0;i < goog.debug.Logger.Level.PREDEFINED_LEVELS.length;++i) {
    var level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i];
    if(level.value <= value) {
      return level
    }
  }
  return null
};
goog.debug.Logger.getLogger = function(name) {
  return goog.debug.LogManager.getLogger(name)
};
goog.debug.Logger.prototype.getName = function() {
  return this.name_
};
goog.debug.Logger.prototype.addHandler = function(handler) {
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    if(!this.handlers_) {
      this.handlers_ = []
    }
    this.handlers_.push(handler)
  }else {
    goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when " + "goog.debug.Logger.ENABLE_HIERARCHY is false.");
    goog.debug.Logger.rootHandlers_.push(handler)
  }
};
goog.debug.Logger.prototype.removeHandler = function(handler) {
  var handlers = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
  return!!handlers && goog.array.remove(handlers, handler)
};
goog.debug.Logger.prototype.getParent = function() {
  return this.parent_
};
goog.debug.Logger.prototype.getChildren = function() {
  if(!this.children_) {
    this.children_ = {}
  }
  return this.children_
};
goog.debug.Logger.prototype.setLevel = function(level) {
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    this.level_ = level
  }else {
    goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when " + "goog.debug.Logger.ENABLE_HIERARCHY is false.");
    goog.debug.Logger.rootLevel_ = level
  }
};
goog.debug.Logger.prototype.getLevel = function() {
  return this.level_
};
goog.debug.Logger.prototype.getEffectiveLevel = function() {
  if(!goog.debug.Logger.ENABLE_HIERARCHY) {
    return goog.debug.Logger.rootLevel_
  }
  if(this.level_) {
    return this.level_
  }
  if(this.parent_) {
    return this.parent_.getEffectiveLevel()
  }
  goog.asserts.fail("Root logger has no level set.");
  return null
};
goog.debug.Logger.prototype.isLoggable = function(level) {
  return level.value >= this.getEffectiveLevel().value
};
goog.debug.Logger.prototype.log = function(level, msg, opt_exception) {
  if(this.isLoggable(level)) {
    this.doLogRecord_(this.getLogRecord(level, msg, opt_exception))
  }
};
goog.debug.Logger.prototype.getLogRecord = function(level, msg, opt_exception) {
  if(goog.debug.LogBuffer.isBufferingEnabled()) {
    var logRecord = goog.debug.LogBuffer.getInstance().addRecord(level, msg, this.name_)
  }else {
    logRecord = new goog.debug.LogRecord(level, String(msg), this.name_)
  }
  if(opt_exception) {
    logRecord.setException(opt_exception);
    logRecord.setExceptionText(goog.debug.exposeException(opt_exception, arguments.callee.caller))
  }
  return logRecord
};
goog.debug.Logger.prototype.shout = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.SHOUT, msg, opt_exception)
};
goog.debug.Logger.prototype.severe = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.SEVERE, msg, opt_exception)
};
goog.debug.Logger.prototype.warning = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.WARNING, msg, opt_exception)
};
goog.debug.Logger.prototype.info = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.INFO, msg, opt_exception)
};
goog.debug.Logger.prototype.config = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.CONFIG, msg, opt_exception)
};
goog.debug.Logger.prototype.fine = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.FINE, msg, opt_exception)
};
goog.debug.Logger.prototype.finer = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.FINER, msg, opt_exception)
};
goog.debug.Logger.prototype.finest = function(msg, opt_exception) {
  this.log(goog.debug.Logger.Level.FINEST, msg, opt_exception)
};
goog.debug.Logger.prototype.logRecord = function(logRecord) {
  if(this.isLoggable(logRecord.getLevel())) {
    this.doLogRecord_(logRecord)
  }
};
goog.debug.Logger.prototype.logToSpeedTracer_ = function(msg) {
  if(goog.global["console"] && goog.global["console"]["markTimeline"]) {
    goog.global["console"]["markTimeline"](msg)
  }
};
goog.debug.Logger.prototype.doLogRecord_ = function(logRecord) {
  this.logToSpeedTracer_("log:" + logRecord.getMessage());
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    var target = this;
    while(target) {
      target.callPublish_(logRecord);
      target = target.getParent()
    }
  }else {
    for(var i = 0, handler;handler = goog.debug.Logger.rootHandlers_[i++];) {
      handler(logRecord)
    }
  }
};
goog.debug.Logger.prototype.callPublish_ = function(logRecord) {
  if(this.handlers_) {
    for(var i = 0, handler;handler = this.handlers_[i];i++) {
      handler(logRecord)
    }
  }
};
goog.debug.Logger.prototype.setParent_ = function(parent) {
  this.parent_ = parent
};
goog.debug.Logger.prototype.addChild_ = function(name, logger) {
  this.getChildren()[name] = logger
};
goog.debug.LogManager = {};
goog.debug.LogManager.loggers_ = {};
goog.debug.LogManager.rootLogger_ = null;
goog.debug.LogManager.initialize = function() {
  if(!goog.debug.LogManager.rootLogger_) {
    goog.debug.LogManager.rootLogger_ = new goog.debug.Logger("");
    goog.debug.LogManager.loggers_[""] = goog.debug.LogManager.rootLogger_;
    goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG)
  }
};
goog.debug.LogManager.getLoggers = function() {
  return goog.debug.LogManager.loggers_
};
goog.debug.LogManager.getRoot = function() {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.rootLogger_
};
goog.debug.LogManager.getLogger = function(name) {
  goog.debug.LogManager.initialize();
  var ret = goog.debug.LogManager.loggers_[name];
  return ret || goog.debug.LogManager.createLogger_(name)
};
goog.debug.LogManager.createFunctionForCatchErrors = function(opt_logger) {
  return function(info) {
    var logger = opt_logger || goog.debug.LogManager.getRoot();
    logger.severe("Error: " + info.message + " (" + info.fileName + " @ Line: " + info.line + ")")
  }
};
goog.debug.LogManager.createLogger_ = function(name) {
  var logger = new goog.debug.Logger(name);
  if(goog.debug.Logger.ENABLE_HIERARCHY) {
    var lastDotIndex = name.lastIndexOf(".");
    var parentName = name.substr(0, lastDotIndex);
    var leafName = name.substr(lastDotIndex + 1);
    var parentLogger = goog.debug.LogManager.getLogger(parentName);
    parentLogger.addChild_(leafName, logger);
    logger.setParent_(parentLogger)
  }
  goog.debug.LogManager.loggers_[name] = logger;
  return logger
};
goog.provide("goog.json");
goog.provide("goog.json.Serializer");
goog.json.isValid_ = function(s) {
  if(/^\s*$/.test(s)) {
    return false
  }
  var backslashesRe = /\\["\\\/bfnrtu]/g;
  var simpleValuesRe = /"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var openBracketsRe = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
  var remainderRe = /^[\],:{}\s\u2028\u2029]*$/;
  return remainderRe.test(s.replace(backslashesRe, "@").replace(simpleValuesRe, "]").replace(openBracketsRe, ""))
};
goog.json.parse = function(s) {
  var o = String(s);
  if(goog.json.isValid_(o)) {
    try {
      return eval("(" + o + ")")
    }catch(ex) {
    }
  }
  throw Error("Invalid JSON string: " + o);
};
goog.json.unsafeParse = function(s) {
  return eval("(" + s + ")")
};
goog.json.serialize = function(object) {
  return(new goog.json.Serializer).serialize(object)
};
goog.json.Serializer = function() {
};
goog.json.Serializer.prototype.serialize = function(object) {
  var sb = [];
  this.serialize_(object, sb);
  return sb.join("")
};
goog.json.Serializer.prototype.serialize_ = function(object, sb) {
  switch(typeof object) {
    case "string":
      this.serializeString_(object, sb);
      break;
    case "number":
      this.serializeNumber_(object, sb);
      break;
    case "boolean":
      sb.push(object);
      break;
    case "undefined":
      sb.push("null");
      break;
    case "object":
      if(object == null) {
        sb.push("null");
        break
      }
      if(goog.isArray(object)) {
        this.serializeArray_(object, sb);
        break
      }
      this.serializeObject_(object, sb);
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof object);
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function(s, sb) {
  sb.push('"', s.replace(goog.json.Serializer.charsToReplace_, function(c) {
    if(c in goog.json.Serializer.charToJsonCharCache_) {
      return goog.json.Serializer.charToJsonCharCache_[c]
    }
    var cc = c.charCodeAt(0);
    var rv = "\\u";
    if(cc < 16) {
      rv += "000"
    }else {
      if(cc < 256) {
        rv += "00"
      }else {
        if(cc < 4096) {
          rv += "0"
        }
      }
    }
    return goog.json.Serializer.charToJsonCharCache_[c] = rv + cc.toString(16)
  }), '"')
};
goog.json.Serializer.prototype.serializeNumber_ = function(n, sb) {
  sb.push(isFinite(n) && !isNaN(n) ? n : "null")
};
goog.json.Serializer.prototype.serializeArray_ = function(arr, sb) {
  var l = arr.length;
  sb.push("[");
  var sep = "";
  for(var i = 0;i < l;i++) {
    sb.push(sep);
    this.serialize_(arr[i], sb);
    sep = ","
  }
  sb.push("]")
};
goog.json.Serializer.prototype.serializeObject_ = function(obj, sb) {
  sb.push("{");
  var sep = "";
  for(var key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {
      var value = obj[key];
      if(typeof value != "function") {
        sb.push(sep);
        this.serializeString_(key, sb);
        sb.push(":");
        this.serialize_(value, sb);
        sep = ","
      }
    }
  }
  sb.push("}")
};
goog.provide("goog.net.ErrorCode");
goog.net.ErrorCode = {NO_ERROR:0, ACCESS_DENIED:1, FILE_NOT_FOUND:2, FF_SILENT_ERROR:3, CUSTOM_ERROR:4, EXCEPTION:5, HTTP_ERROR:6, ABORT:7, TIMEOUT:8, OFFLINE:9};
goog.net.ErrorCode.getDebugMessage = function(errorCode) {
  switch(errorCode) {
    case goog.net.ErrorCode.NO_ERROR:
      return"No Error";
    case goog.net.ErrorCode.ACCESS_DENIED:
      return"Access denied to content document";
    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return"File not found";
    case goog.net.ErrorCode.FF_SILENT_ERROR:
      return"Firefox silently errored";
    case goog.net.ErrorCode.CUSTOM_ERROR:
      return"Application custom error";
    case goog.net.ErrorCode.EXCEPTION:
      return"An exception occurred";
    case goog.net.ErrorCode.HTTP_ERROR:
      return"Http response at 400 or 500 level";
    case goog.net.ErrorCode.ABORT:
      return"Request was aborted";
    case goog.net.ErrorCode.TIMEOUT:
      return"Request timed out";
    case goog.net.ErrorCode.OFFLINE:
      return"The resource is not available offline";
    default:
      return"Unrecognized error code"
  }
};
goog.provide("goog.net.EventType");
goog.net.EventType = {COMPLETE:"complete", SUCCESS:"success", ERROR:"error", ABORT:"abort", READY:"ready", READY_STATE_CHANGE:"readystatechange", TIMEOUT:"timeout", INCREMENTAL_DATA:"incrementaldata", PROGRESS:"progress"};
goog.provide("goog.net.HttpStatus");
goog.net.HttpStatus = {CONTINUE:100, SWITCHING_PROTOCOLS:101, OK:200, CREATED:201, ACCEPTED:202, NON_AUTHORITATIVE_INFORMATION:203, NO_CONTENT:204, RESET_CONTENT:205, PARTIAL_CONTENT:206, MULTIPLE_CHOICES:300, MOVED_PERMANENTLY:301, FOUND:302, SEE_OTHER:303, NOT_MODIFIED:304, USE_PROXY:305, TEMPORARY_REDIRECT:307, BAD_REQUEST:400, UNAUTHORIZED:401, PAYMENT_REQUIRED:402, FORBIDDEN:403, NOT_FOUND:404, METHOD_NOT_ALLOWED:405, NOT_ACCEPTABLE:406, PROXY_AUTHENTICATION_REQUIRED:407, REQUEST_TIMEOUT:408, 
CONFLICT:409, GONE:410, LENGTH_REQUIRED:411, PRECONDITION_FAILED:412, REQUEST_ENTITY_TOO_LARGE:413, REQUEST_URI_TOO_LONG:414, UNSUPPORTED_MEDIA_TYPE:415, REQUEST_RANGE_NOT_SATISFIABLE:416, EXPECTATION_FAILED:417, INTERNAL_SERVER_ERROR:500, NOT_IMPLEMENTED:501, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503, GATEWAY_TIMEOUT:504, HTTP_VERSION_NOT_SUPPORTED:505};
goog.provide("goog.net.XmlHttpFactory");
goog.net.XmlHttpFactory = function() {
};
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
};
goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;
goog.provide("goog.net.WrapperXmlHttpFactory");
goog.require("goog.net.XmlHttpFactory");
goog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {
  goog.net.XmlHttpFactory.call(this);
  this.xhrFactory_ = xhrFactory;
  this.optionsFactory_ = optionsFactory
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_()
};
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_()
};
goog.provide("goog.net.DefaultXmlHttpFactory");
goog.provide("goog.net.XmlHttp");
goog.provide("goog.net.XmlHttp.OptionType");
goog.provide("goog.net.XmlHttp.ReadyState");
goog.require("goog.net.WrapperXmlHttpFactory");
goog.require("goog.net.XmlHttpFactory");
goog.net.XmlHttp = function() {
  return goog.net.XmlHttp.factory_.createInstance()
};
goog.net.XmlHttp.getOptions = function() {
  return goog.net.XmlHttp.factory_.getOptions()
};
goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
goog.net.XmlHttp.factory_;
goog.net.XmlHttp.setFactory = function(factory, optionsFactory) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(factory, optionsFactory))
};
goog.net.XmlHttp.setGlobalFactory = function(factory) {
  goog.net.XmlHttp.factory_ = factory
};
goog.net.DefaultXmlHttpFactory = function() {
  goog.net.XmlHttpFactory.call(this)
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {
  var progId = this.getProgId_();
  if(progId) {
    return new ActiveXObject(progId)
  }else {
    return new XMLHttpRequest
  }
};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {
  var progId = this.getProgId_();
  var options = {};
  if(progId) {
    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;
    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true
  }
  return options
};
goog.net.DefaultXmlHttpFactory.prototype.ieProgId_ = null;
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {
  if(!this.ieProgId_ && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    var ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    for(var i = 0;i < ACTIVE_X_IDENTS.length;i++) {
      var candidate = ACTIVE_X_IDENTS[i];
      try {
        new ActiveXObject(candidate);
        this.ieProgId_ = candidate;
        return candidate
      }catch(e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled," + " or MSXML might not be installed");
  }
  return this.ieProgId_
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
goog.provide("goog.net.xhrMonitor");
goog.require("goog.array");
goog.require("goog.debug.Logger");
goog.require("goog.userAgent");
goog.net.XhrMonitor_ = function() {
  if(!goog.userAgent.GECKO) {
    return
  }
  this.contextsToXhr_ = {};
  this.xhrToContexts_ = {};
  this.stack_ = []
};
goog.net.XhrMonitor_.getKey = function(obj) {
  return goog.isString(obj) ? obj : goog.isObject(obj) ? goog.getUid(obj) : ""
};
goog.net.XhrMonitor_.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.xhrMonitor");
goog.net.XhrMonitor_.prototype.enabled_ = goog.userAgent.GECKO;
goog.net.XhrMonitor_.prototype.setEnabled = function(val) {
  this.enabled_ = goog.userAgent.GECKO && val
};
goog.net.XhrMonitor_.prototype.pushContext = function(context) {
  if(!this.enabled_) {
    return
  }
  var key = goog.net.XhrMonitor_.getKey(context);
  this.logger_.finest("Pushing context: " + context + " (" + key + ")");
  this.stack_.push(key)
};
goog.net.XhrMonitor_.prototype.popContext = function() {
  if(!this.enabled_) {
    return
  }
  var context = this.stack_.pop();
  this.logger_.finest("Popping context: " + context);
  this.updateDependentContexts_(context)
};
goog.net.XhrMonitor_.prototype.isContextSafe = function(context) {
  if(!this.enabled_) {
    return true
  }
  var deps = this.contextsToXhr_[goog.net.XhrMonitor_.getKey(context)];
  this.logger_.fine("Context is safe : " + context + " - " + deps);
  return!deps
};
goog.net.XhrMonitor_.prototype.markXhrOpen = function(xhr) {
  if(!this.enabled_) {
    return
  }
  var uid = goog.getUid(xhr);
  this.logger_.fine("Opening XHR : " + uid);
  for(var i = 0;i < this.stack_.length;i++) {
    var context = this.stack_[i];
    this.addToMap_(this.contextsToXhr_, context, uid);
    this.addToMap_(this.xhrToContexts_, uid, context)
  }
};
goog.net.XhrMonitor_.prototype.markXhrClosed = function(xhr) {
  if(!this.enabled_) {
    return
  }
  var uid = goog.getUid(xhr);
  this.logger_.fine("Closing XHR : " + uid);
  delete this.xhrToContexts_[uid];
  for(var context in this.contextsToXhr_) {
    goog.array.remove(this.contextsToXhr_[context], uid);
    if(this.contextsToXhr_[context].length == 0) {
      delete this.contextsToXhr_[context]
    }
  }
};
goog.net.XhrMonitor_.prototype.updateDependentContexts_ = function(xhrUid) {
  var contexts = this.xhrToContexts_[xhrUid];
  var xhrs = this.contextsToXhr_[xhrUid];
  if(contexts && xhrs) {
    this.logger_.finest("Updating dependent contexts");
    goog.array.forEach(contexts, function(context) {
      goog.array.forEach(xhrs, function(xhr) {
        this.addToMap_(this.contextsToXhr_, context, xhr);
        this.addToMap_(this.xhrToContexts_, xhr, context)
      }, this)
    }, this)
  }
};
goog.net.XhrMonitor_.prototype.addToMap_ = function(map, key, value) {
  if(!map[key]) {
    map[key] = []
  }
  if(!goog.array.contains(map[key], value)) {
    map[key].push(value)
  }
};
goog.net.xhrMonitor = new goog.net.XhrMonitor_;
goog.provide("goog.uri.utils");
goog.provide("goog.uri.utils.ComponentIndex");
goog.require("goog.asserts");
goog.require("goog.string");
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
  var out = [];
  if(opt_scheme) {
    out.push(opt_scheme, ":")
  }
  if(opt_domain) {
    out.push("//");
    if(opt_userInfo) {
      out.push(opt_userInfo, "@")
    }
    out.push(opt_domain);
    if(opt_port) {
      out.push(":", opt_port)
    }
  }
  if(opt_path) {
    out.push(opt_path)
  }
  if(opt_queryData) {
    out.push("?", opt_queryData)
  }
  if(opt_fragment) {
    out.push("#", opt_fragment)
  }
  return out.join("")
};
goog.uri.utils.splitRe_ = new RegExp("^" + "(?:" + "([^:/?#.]+)" + ":)?" + "(?://" + "(?:([^/?#]*)@)?" + "([\\w\\d\\-\\u0100-\\uffff.%]*)" + "(?::([0-9]+))?" + ")?" + "([^?#]+)?" + "(?:\\?([^#]*))?" + "(?:#(.*))?" + "$");
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.split = function(uri) {
  return uri.match(goog.uri.utils.splitRe_)
};
goog.uri.utils.decodeIfPossible_ = function(uri) {
  return uri && decodeURIComponent(uri)
};
goog.uri.utils.getComponentByIndex_ = function(componentIndex, uri) {
  return goog.uri.utils.split(uri)[componentIndex] || null
};
goog.uri.utils.getScheme = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, uri)
};
goog.uri.utils.getUserInfoEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, uri)
};
goog.uri.utils.getUserInfo = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(uri))
};
goog.uri.utils.getDomainEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, uri)
};
goog.uri.utils.getDomain = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(uri))
};
goog.uri.utils.getPort = function(uri) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, uri)) || null
};
goog.uri.utils.getPathEncoded = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, uri)
};
goog.uri.utils.getPath = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(uri))
};
goog.uri.utils.getQueryData = function(uri) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, uri)
};
goog.uri.utils.getFragmentEncoded = function(uri) {
  var hashIndex = uri.indexOf("#");
  return hashIndex < 0 ? null : uri.substr(hashIndex + 1)
};
goog.uri.utils.setFragmentEncoded = function(uri, fragment) {
  return goog.uri.utils.removeFragment(uri) + (fragment ? "#" + fragment : "")
};
goog.uri.utils.getFragment = function(uri) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(uri))
};
goog.uri.utils.getHost = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(pieces[goog.uri.utils.ComponentIndex.SCHEME], pieces[goog.uri.utils.ComponentIndex.USER_INFO], pieces[goog.uri.utils.ComponentIndex.DOMAIN], pieces[goog.uri.utils.ComponentIndex.PORT])
};
goog.uri.utils.getPathAndAfter = function(uri) {
  var pieces = goog.uri.utils.split(uri);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, pieces[goog.uri.utils.ComponentIndex.PATH], pieces[goog.uri.utils.ComponentIndex.QUERY_DATA], pieces[goog.uri.utils.ComponentIndex.FRAGMENT])
};
goog.uri.utils.removeFragment = function(uri) {
  var hashIndex = uri.indexOf("#");
  return hashIndex < 0 ? uri : uri.substr(0, hashIndex)
};
goog.uri.utils.haveSameDomain = function(uri1, uri2) {
  var pieces1 = goog.uri.utils.split(uri1);
  var pieces2 = goog.uri.utils.split(uri2);
  return pieces1[goog.uri.utils.ComponentIndex.DOMAIN] == pieces2[goog.uri.utils.ComponentIndex.DOMAIN] && pieces1[goog.uri.utils.ComponentIndex.SCHEME] == pieces2[goog.uri.utils.ComponentIndex.SCHEME] && pieces1[goog.uri.utils.ComponentIndex.PORT] == pieces2[goog.uri.utils.ComponentIndex.PORT]
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function(uri) {
  if(goog.DEBUG && (uri.indexOf("#") >= 0 || uri.indexOf("?") >= 0)) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not " + "supported: [" + uri + "]");
  }
};
goog.uri.utils.QueryValue;
goog.uri.utils.QueryArray;
goog.uri.utils.appendQueryData_ = function(buffer) {
  if(buffer[1]) {
    var baseUri = buffer[0];
    var hashIndex = baseUri.indexOf("#");
    if(hashIndex >= 0) {
      buffer.push(baseUri.substr(hashIndex));
      buffer[0] = baseUri = baseUri.substr(0, hashIndex)
    }
    var questionIndex = baseUri.indexOf("?");
    if(questionIndex < 0) {
      buffer[1] = "?"
    }else {
      if(questionIndex == baseUri.length - 1) {
        buffer[1] = undefined
      }
    }
  }
  return buffer.join("")
};
goog.uri.utils.appendKeyValuePairs_ = function(key, value, pairs) {
  if(goog.isArray(value)) {
    value = value;
    for(var j = 0;j < value.length;j++) {
      pairs.push("&", key);
      if(value[j] !== "") {
        pairs.push("=", goog.string.urlEncode(value[j]))
      }
    }
  }else {
    if(value != null) {
      pairs.push("&", key);
      if(value !== "") {
        pairs.push("=", goog.string.urlEncode(value))
      }
    }
  }
};
goog.uri.utils.buildQueryDataBuffer_ = function(buffer, keysAndValues, opt_startIndex) {
  goog.asserts.assert(Math.max(keysAndValues.length - (opt_startIndex || 0), 0) % 2 == 0, "goog.uri.utils: Key/value lists must be even in length.");
  for(var i = opt_startIndex || 0;i < keysAndValues.length;i += 2) {
    goog.uri.utils.appendKeyValuePairs_(keysAndValues[i], keysAndValues[i + 1], buffer)
  }
  return buffer
};
goog.uri.utils.buildQueryData = function(keysAndValues, opt_startIndex) {
  var buffer = goog.uri.utils.buildQueryDataBuffer_([], keysAndValues, opt_startIndex);
  buffer[0] = "";
  return buffer.join("")
};
goog.uri.utils.buildQueryDataBufferFromMap_ = function(buffer, map) {
  for(var key in map) {
    goog.uri.utils.appendKeyValuePairs_(key, map[key], buffer)
  }
  return buffer
};
goog.uri.utils.buildQueryDataFromMap = function(map) {
  var buffer = goog.uri.utils.buildQueryDataBufferFromMap_([], map);
  buffer[0] = "";
  return buffer.join("")
};
goog.uri.utils.appendParams = function(uri, var_args) {
  return goog.uri.utils.appendQueryData_(arguments.length == 2 ? goog.uri.utils.buildQueryDataBuffer_([uri], arguments[1], 0) : goog.uri.utils.buildQueryDataBuffer_([uri], arguments, 1))
};
goog.uri.utils.appendParamsFromMap = function(uri, map) {
  return goog.uri.utils.appendQueryData_(goog.uri.utils.buildQueryDataBufferFromMap_([uri], map))
};
goog.uri.utils.appendParam = function(uri, key, value) {
  return goog.uri.utils.appendQueryData_([uri, "&", key, "=", goog.string.urlEncode(value)])
};
goog.uri.utils.findParam_ = function(uri, startIndex, keyEncoded, hashOrEndIndex) {
  var index = startIndex;
  var keyLength = keyEncoded.length;
  while((index = uri.indexOf(keyEncoded, index)) >= 0 && index < hashOrEndIndex) {
    var precedingChar = uri.charCodeAt(index - 1);
    if(precedingChar == goog.uri.utils.CharCode_.AMPERSAND || precedingChar == goog.uri.utils.CharCode_.QUESTION) {
      var followingChar = uri.charCodeAt(index + keyLength);
      if(!followingChar || followingChar == goog.uri.utils.CharCode_.EQUAL || followingChar == goog.uri.utils.CharCode_.AMPERSAND || followingChar == goog.uri.utils.CharCode_.HASH) {
        return index
      }
    }
    index += keyLength + 1
  }
  return-1
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function(uri, keyEncoded) {
  return goog.uri.utils.findParam_(uri, 0, keyEncoded, uri.search(goog.uri.utils.hashOrEndRe_)) >= 0
};
goog.uri.utils.getParamValue = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var foundIndex = goog.uri.utils.findParam_(uri, 0, keyEncoded, hashOrEndIndex);
  if(foundIndex < 0) {
    return null
  }else {
    var endPosition = uri.indexOf("&", foundIndex);
    if(endPosition < 0 || endPosition > hashOrEndIndex) {
      endPosition = hashOrEndIndex
    }
    foundIndex += keyEncoded.length + 1;
    return goog.string.urlDecode(uri.substr(foundIndex, endPosition - foundIndex))
  }
};
goog.uri.utils.getParamValues = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var position = 0;
  var foundIndex;
  var result = [];
  while((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
    position = uri.indexOf("&", foundIndex);
    if(position < 0 || position > hashOrEndIndex) {
      position = hashOrEndIndex
    }
    foundIndex += keyEncoded.length + 1;
    result.push(goog.string.urlDecode(uri.substr(foundIndex, position - foundIndex)))
  }
  return result
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function(uri, keyEncoded) {
  var hashOrEndIndex = uri.search(goog.uri.utils.hashOrEndRe_);
  var position = 0;
  var foundIndex;
  var buffer = [];
  while((foundIndex = goog.uri.utils.findParam_(uri, position, keyEncoded, hashOrEndIndex)) >= 0) {
    buffer.push(uri.substring(position, foundIndex));
    position = Math.min(uri.indexOf("&", foundIndex) + 1 || hashOrEndIndex, hashOrEndIndex)
  }
  buffer.push(uri.substr(position));
  return buffer.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1")
};
goog.uri.utils.setParam = function(uri, keyEncoded, value) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(uri, keyEncoded), keyEncoded, value)
};
goog.uri.utils.appendPath = function(baseUri, path) {
  goog.uri.utils.assertNoFragmentsOrQueries_(baseUri);
  if(goog.string.endsWith(baseUri, "/")) {
    baseUri = baseUri.substr(0, baseUri.length - 1)
  }
  if(goog.string.startsWith(path, "/")) {
    path = path.substr(1)
  }
  return goog.string.buildString(baseUri, "/", path)
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function(uri) {
  return goog.uri.utils.setParam(uri, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString())
};
goog.provide("goog.net.XhrIo");
goog.provide("goog.net.XhrIo.ResponseType");
goog.require("goog.Timer");
goog.require("goog.debug.Logger");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.debug.errorHandlerWeakDep");
goog.require("goog.events.EventTarget");
goog.require("goog.json");
goog.require("goog.net.ErrorCode");
goog.require("goog.net.EventType");
goog.require("goog.net.HttpStatus");
goog.require("goog.net.XmlHttp");
goog.require("goog.net.xhrMonitor");
goog.require("goog.object");
goog.require("goog.structs");
goog.require("goog.structs.Map");
goog.require("goog.uri.utils");
goog.net.XhrIo = function(opt_xmlHttpFactory) {
  goog.events.EventTarget.call(this);
  this.headers = new goog.structs.Map;
  this.xmlHttpFactory_ = opt_xmlHttpFactory || null
};
goog.inherits(goog.net.XhrIo, goog.events.EventTarget);
goog.net.XhrIo.ResponseType = {DEFAULT:"", TEXT:"text", DOCUMENT:"document", BLOB:"blob", ARRAY_BUFFER:"arraybuffer"};
goog.net.XhrIo.prototype.logger_ = goog.debug.Logger.getLogger("goog.net.XhrIo");
goog.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
goog.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?:?$/i;
goog.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
goog.net.XhrIo.sendInstances_ = [];
goog.net.XhrIo.send = function(url, opt_callback, opt_method, opt_content, opt_headers, opt_timeoutInterval) {
  var x = new goog.net.XhrIo;
  goog.net.XhrIo.sendInstances_.push(x);
  if(opt_callback) {
    goog.events.listen(x, goog.net.EventType.COMPLETE, opt_callback)
  }
  goog.events.listen(x, goog.net.EventType.READY, goog.partial(goog.net.XhrIo.cleanupSend_, x));
  if(opt_timeoutInterval) {
    x.setTimeoutInterval(opt_timeoutInterval)
  }
  x.send(url, opt_method, opt_content, opt_headers)
};
goog.net.XhrIo.cleanup = function() {
  var instances = goog.net.XhrIo.sendInstances_;
  while(instances.length) {
    instances.pop().dispose()
  }
};
goog.net.XhrIo.protectEntryPoints = function(errorHandler) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = errorHandler.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
};
goog.net.XhrIo.cleanupSend_ = function(XhrIo) {
  XhrIo.dispose();
  goog.array.remove(goog.net.XhrIo.sendInstances_, XhrIo)
};
goog.net.XhrIo.prototype.active_ = false;
goog.net.XhrIo.prototype.xhr_ = null;
goog.net.XhrIo.prototype.xhrOptions_ = null;
goog.net.XhrIo.prototype.lastUri_ = "";
goog.net.XhrIo.prototype.lastMethod_ = "";
goog.net.XhrIo.prototype.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
goog.net.XhrIo.prototype.lastError_ = "";
goog.net.XhrIo.prototype.errorDispatched_ = false;
goog.net.XhrIo.prototype.inSend_ = false;
goog.net.XhrIo.prototype.inOpen_ = false;
goog.net.XhrIo.prototype.inAbort_ = false;
goog.net.XhrIo.prototype.timeoutInterval_ = 0;
goog.net.XhrIo.prototype.timeoutId_ = null;
goog.net.XhrIo.prototype.responseType_ = goog.net.XhrIo.ResponseType.DEFAULT;
goog.net.XhrIo.prototype.withCredentials_ = false;
goog.net.XhrIo.prototype.getTimeoutInterval = function() {
  return this.timeoutInterval_
};
goog.net.XhrIo.prototype.setTimeoutInterval = function(ms) {
  this.timeoutInterval_ = Math.max(0, ms)
};
goog.net.XhrIo.prototype.setResponseType = function(type) {
  this.responseType_ = type
};
goog.net.XhrIo.prototype.getResponseType = function() {
  return this.responseType_
};
goog.net.XhrIo.prototype.setWithCredentials = function(withCredentials) {
  this.withCredentials_ = withCredentials
};
goog.net.XhrIo.prototype.getWithCredentials = function() {
  return this.withCredentials_
};
goog.net.XhrIo.prototype.send = function(url, opt_method, opt_content, opt_headers) {
  if(this.xhr_) {
    throw Error("[goog.net.XhrIo] Object is active with another request");
  }
  var method = opt_method || "GET";
  this.lastUri_ = url;
  this.lastError_ = "";
  this.lastErrorCode_ = goog.net.ErrorCode.NO_ERROR;
  this.lastMethod_ = method;
  this.errorDispatched_ = false;
  this.active_ = true;
  this.xhr_ = this.createXhr();
  this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : goog.net.XmlHttp.getOptions();
  goog.net.xhrMonitor.markXhrOpen(this.xhr_);
  this.xhr_.onreadystatechange = goog.bind(this.onReadyStateChange_, this);
  try {
    this.logger_.fine(this.formatMsg_("Opening Xhr"));
    this.inOpen_ = true;
    this.xhr_.open(method, url, true);
    this.inOpen_ = false
  }catch(err) {
    this.logger_.fine(this.formatMsg_("Error opening Xhr: " + err.message));
    this.error_(goog.net.ErrorCode.EXCEPTION, err);
    return
  }
  var content = opt_content || "";
  var headers = this.headers.clone();
  if(opt_headers) {
    goog.structs.forEach(opt_headers, function(value, key) {
      headers.set(key, value)
    })
  }
  if(method == "POST" && !headers.containsKey(goog.net.XhrIo.CONTENT_TYPE_HEADER)) {
    headers.set(goog.net.XhrIo.CONTENT_TYPE_HEADER, goog.net.XhrIo.FORM_CONTENT_TYPE)
  }
  goog.structs.forEach(headers, function(value, key) {
    this.xhr_.setRequestHeader(key, value)
  }, this);
  if(this.responseType_) {
    this.xhr_.responseType = this.responseType_
  }
  if(goog.object.containsKey(this.xhr_, "withCredentials")) {
    this.xhr_.withCredentials = this.withCredentials_
  }
  try {
    if(this.timeoutId_) {
      goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_);
      this.timeoutId_ = null
    }
    if(this.timeoutInterval_ > 0) {
      this.logger_.fine(this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete"));
      this.timeoutId_ = goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.timeout_, this), this.timeoutInterval_)
    }
    this.logger_.fine(this.formatMsg_("Sending request"));
    this.inSend_ = true;
    this.xhr_.send(content);
    this.inSend_ = false
  }catch(err) {
    this.logger_.fine(this.formatMsg_("Send error: " + err.message));
    this.error_(goog.net.ErrorCode.EXCEPTION, err)
  }
};
goog.net.XhrIo.prototype.createXhr = function() {
  return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : new goog.net.XmlHttp
};
goog.net.XhrIo.prototype.dispatchEvent = function(e) {
  if(this.xhr_) {
    goog.net.xhrMonitor.pushContext(this.xhr_);
    try {
      return goog.net.XhrIo.superClass_.dispatchEvent.call(this, e)
    }finally {
      goog.net.xhrMonitor.popContext()
    }
  }else {
    return goog.net.XhrIo.superClass_.dispatchEvent.call(this, e)
  }
};
goog.net.XhrIo.prototype.timeout_ = function() {
  if(typeof goog == "undefined") {
  }else {
    if(this.xhr_) {
      this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting";
      this.lastErrorCode_ = goog.net.ErrorCode.TIMEOUT;
      this.logger_.fine(this.formatMsg_(this.lastError_));
      this.dispatchEvent(goog.net.EventType.TIMEOUT);
      this.abort(goog.net.ErrorCode.TIMEOUT)
    }
  }
};
goog.net.XhrIo.prototype.error_ = function(errorCode, err) {
  this.active_ = false;
  if(this.xhr_) {
    this.inAbort_ = true;
    this.xhr_.abort();
    this.inAbort_ = false
  }
  this.lastError_ = err;
  this.lastErrorCode_ = errorCode;
  this.dispatchErrors_();
  this.cleanUpXhr_()
};
goog.net.XhrIo.prototype.dispatchErrors_ = function() {
  if(!this.errorDispatched_) {
    this.errorDispatched_ = true;
    this.dispatchEvent(goog.net.EventType.COMPLETE);
    this.dispatchEvent(goog.net.EventType.ERROR)
  }
};
goog.net.XhrIo.prototype.abort = function(opt_failureCode) {
  if(this.xhr_ && this.active_) {
    this.logger_.fine(this.formatMsg_("Aborting"));
    this.active_ = false;
    this.inAbort_ = true;
    this.xhr_.abort();
    this.inAbort_ = false;
    this.lastErrorCode_ = opt_failureCode || goog.net.ErrorCode.ABORT;
    this.dispatchEvent(goog.net.EventType.COMPLETE);
    this.dispatchEvent(goog.net.EventType.ABORT);
    this.cleanUpXhr_()
  }
};
goog.net.XhrIo.prototype.disposeInternal = function() {
  if(this.xhr_) {
    if(this.active_) {
      this.active_ = false;
      this.inAbort_ = true;
      this.xhr_.abort();
      this.inAbort_ = false
    }
    this.cleanUpXhr_(true)
  }
  goog.net.XhrIo.superClass_.disposeInternal.call(this)
};
goog.net.XhrIo.prototype.onReadyStateChange_ = function() {
  if(!this.inOpen_ && !this.inSend_ && !this.inAbort_) {
    this.onReadyStateChangeEntryPoint_()
  }else {
    this.onReadyStateChangeHelper_()
  }
};
goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = function() {
  this.onReadyStateChangeHelper_()
};
goog.net.XhrIo.prototype.onReadyStateChangeHelper_ = function() {
  if(!this.active_) {
    return
  }
  if(typeof goog == "undefined") {
  }else {
    if(this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE && this.getStatus() == 2) {
      this.logger_.fine(this.formatMsg_("Local request error detected and ignored"))
    }else {
      if(this.inSend_ && this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE) {
        goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.onReadyStateChange_, this), 0);
        return
      }
      this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE);
      if(this.isComplete()) {
        this.logger_.fine(this.formatMsg_("Request complete"));
        this.active_ = false;
        if(this.isSuccess()) {
          this.dispatchEvent(goog.net.EventType.COMPLETE);
          this.dispatchEvent(goog.net.EventType.SUCCESS)
        }else {
          this.lastErrorCode_ = goog.net.ErrorCode.HTTP_ERROR;
          this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]";
          this.dispatchErrors_()
        }
        this.cleanUpXhr_()
      }
    }
  }
};
goog.net.XhrIo.prototype.cleanUpXhr_ = function(opt_fromDispose) {
  if(this.xhr_) {
    var xhr = this.xhr_;
    var clearedOnReadyStateChange = this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? goog.nullFunction : null;
    this.xhr_ = null;
    this.xhrOptions_ = null;
    if(this.timeoutId_) {
      goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_);
      this.timeoutId_ = null
    }
    if(!opt_fromDispose) {
      goog.net.xhrMonitor.pushContext(xhr);
      this.dispatchEvent(goog.net.EventType.READY);
      goog.net.xhrMonitor.popContext()
    }
    goog.net.xhrMonitor.markXhrClosed(xhr);
    try {
      xhr.onreadystatechange = clearedOnReadyStateChange
    }catch(e) {
      this.logger_.severe("Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
};
goog.net.XhrIo.prototype.isActive = function() {
  return!!this.xhr_
};
goog.net.XhrIo.prototype.isComplete = function() {
  return this.getReadyState() == goog.net.XmlHttp.ReadyState.COMPLETE
};
goog.net.XhrIo.prototype.isSuccess = function() {
  switch(this.getStatus()) {
    case 0:
      return!this.isLastUriEffectiveSchemeHttp_();
    case goog.net.HttpStatus.OK:
    ;
    case goog.net.HttpStatus.NO_CONTENT:
    ;
    case goog.net.HttpStatus.NOT_MODIFIED:
      return true;
    default:
      return false
  }
};
goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_ = function() {
  var lastUriScheme = goog.isString(this.lastUri_) ? goog.uri.utils.getScheme(this.lastUri_) : this.lastUri_.getScheme();
  if(lastUriScheme) {
    return goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(lastUriScheme)
  }
  if(self.location) {
    return goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(self.location.protocol)
  }else {
    return true
  }
};
goog.net.XhrIo.prototype.getReadyState = function() {
  return this.xhr_ ? this.xhr_.readyState : goog.net.XmlHttp.ReadyState.UNINITIALIZED
};
goog.net.XhrIo.prototype.getStatus = function() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1
  }catch(e) {
    this.logger_.warning("Can not get status: " + e.message);
    return-1
  }
};
goog.net.XhrIo.prototype.getStatusText = function() {
  try {
    return this.getReadyState() > goog.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : ""
  }catch(e) {
    this.logger_.fine("Can not get status: " + e.message);
    return""
  }
};
goog.net.XhrIo.prototype.getLastUri = function() {
  return String(this.lastUri_)
};
goog.net.XhrIo.prototype.getResponseText = function() {
  try {
    return this.xhr_ ? this.xhr_.responseText : ""
  }catch(e) {
    this.logger_.fine("Can not get responseText: " + e.message);
    return""
  }
};
goog.net.XhrIo.prototype.getResponseXml = function() {
  try {
    return this.xhr_ ? this.xhr_.responseXML : null
  }catch(e) {
    this.logger_.fine("Can not get responseXML: " + e.message);
    return null
  }
};
goog.net.XhrIo.prototype.getResponseJson = function(opt_xssiPrefix) {
  if(!this.xhr_) {
    return undefined
  }
  var responseText = this.xhr_.responseText;
  if(opt_xssiPrefix && responseText.indexOf(opt_xssiPrefix) == 0) {
    responseText = responseText.substring(opt_xssiPrefix.length)
  }
  return goog.json.parse(responseText)
};
goog.net.XhrIo.prototype.getResponse = function() {
  try {
    return this.xhr_ && this.xhr_.response
  }catch(e) {
    this.logger_.fine("Can not get response: " + e.message);
    return null
  }
};
goog.net.XhrIo.prototype.getResponseHeader = function(key) {
  return this.xhr_ && this.isComplete() ? this.xhr_.getResponseHeader(key) : undefined
};
goog.net.XhrIo.prototype.getAllResponseHeaders = function() {
  return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : ""
};
goog.net.XhrIo.prototype.getLastErrorCode = function() {
  return this.lastErrorCode_
};
goog.net.XhrIo.prototype.getLastError = function() {
  return goog.isString(this.lastError_) ? this.lastError_ : String(this.lastError_)
};
goog.net.XhrIo.prototype.formatMsg_ = function(msg) {
  return msg + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
};
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = transformer(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
});
goog.provide("goog.string.StringBuffer");
goog.require("goog.userAgent.jscript");
goog.string.StringBuffer = function(opt_a1, var_args) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  if(opt_a1 != null) {
    this.append.apply(this, arguments)
  }
};
goog.string.StringBuffer.prototype.set = function(s) {
  this.clear();
  this.append(s)
};
if(goog.userAgent.jscript.HAS_JSCRIPT) {
  goog.string.StringBuffer.prototype.bufferLength_ = 0;
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    if(opt_a2 == null) {
      this.buffer_[this.bufferLength_++] = a1
    }else {
      this.buffer_.push.apply(this.buffer_, arguments);
      this.bufferLength_ = this.buffer_.length
    }
    return this
  }
}else {
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    this.buffer_ += a1;
    if(opt_a2 != null) {
      for(var i = 1;i < arguments.length;i++) {
        this.buffer_ += arguments[i]
      }
    }
    return this
  }
}
goog.string.StringBuffer.prototype.clear = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    this.buffer_.length = 0;
    this.bufferLength_ = 0
  }else {
    this.buffer_ = ""
  }
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var str = this.buffer_.join("");
    this.clear();
    if(str) {
      this.append(str)
    }
    return str
  }else {
    return this.buffer_
  }
};
goog.provide("goog.fx.Animation");
goog.provide("goog.fx.Animation.EventType");
goog.provide("goog.fx.Animation.State");
goog.provide("goog.fx.AnimationEvent");
goog.require("goog.Timer");
goog.require("goog.array");
goog.require("goog.events.Event");
goog.require("goog.events.EventTarget");
goog.require("goog.object");
goog.fx.Animation = function(start, end, duration, opt_acc) {
  goog.events.EventTarget.call(this);
  if(!goog.isArray(start) || !goog.isArray(end)) {
    throw Error("Start and end parameters must be arrays");
  }
  if(start.length != end.length) {
    throw Error("Start and end points must be the same length");
  }
  this.startPoint = start;
  this.endPoint = end;
  this.duration = duration;
  this.accel_ = opt_acc;
  this.coords = []
};
goog.inherits(goog.fx.Animation, goog.events.EventTarget);
goog.fx.Animation.EventType = {PLAY:"play", BEGIN:"begin", RESUME:"resume", END:"end", STOP:"stop", FINISH:"finish", PAUSE:"pause", ANIMATE:"animate", DESTROY:"destroy"};
goog.fx.Animation.State = {STOPPED:0, PAUSED:-1, PLAYING:1};
goog.fx.Animation.TIMEOUT = 20;
goog.fx.Animation.activeAnimations_ = {};
goog.fx.Animation.globalTimer_ = null;
goog.fx.Animation.cycleAnimations_ = function() {
  goog.Timer.defaultTimerObject.clearTimeout(goog.fx.Animation.globalTimer_);
  var now = goog.now();
  for(var uid in goog.fx.Animation.activeAnimations_) {
    goog.fx.Animation.activeAnimations_[uid].cycle(now)
  }
  goog.fx.Animation.globalTimer_ = goog.object.isEmpty(goog.fx.Animation.activeAnimations_) ? null : goog.Timer.defaultTimerObject.setTimeout(goog.fx.Animation.cycleAnimations_, goog.fx.Animation.TIMEOUT)
};
goog.fx.Animation.registerAnimation = function(animation) {
  var uid = goog.getUid(animation);
  if(!(uid in goog.fx.Animation.activeAnimations_)) {
    goog.fx.Animation.activeAnimations_[uid] = animation
  }
  if(!goog.fx.Animation.globalTimer_) {
    goog.fx.Animation.globalTimer_ = goog.Timer.defaultTimerObject.setTimeout(goog.fx.Animation.cycleAnimations_, goog.fx.Animation.TIMEOUT)
  }
};
goog.fx.Animation.unregisterAnimation = function(animation) {
  var uid = goog.getUid(animation);
  delete goog.fx.Animation.activeAnimations_[uid];
  if(goog.fx.Animation.globalTimer_ && goog.object.isEmpty(goog.fx.Animation.activeAnimations_)) {
    goog.Timer.defaultTimerObject.clearTimeout(goog.fx.Animation.globalTimer_);
    goog.fx.Animation.globalTimer_ = null
  }
};
goog.fx.Animation.prototype.state_ = goog.fx.Animation.State.STOPPED;
goog.fx.Animation.prototype.fps_ = 0;
goog.fx.Animation.prototype.progress = 0;
goog.fx.Animation.prototype.startTime = null;
goog.fx.Animation.prototype.endTime = null;
goog.fx.Animation.prototype.lastFrame = null;
goog.fx.Animation.prototype.getStateInternal = function() {
  return this.state_
};
goog.fx.Animation.prototype.play = function(opt_restart) {
  if(opt_restart || this.state_ == goog.fx.Animation.State.STOPPED) {
    this.progress = 0;
    this.coords = this.startPoint
  }else {
    if(this.state_ == goog.fx.Animation.State.PLAYING) {
      return false
    }
  }
  goog.fx.Animation.unregisterAnimation(this);
  this.startTime = goog.now();
  if(this.state_ == goog.fx.Animation.State.PAUSED) {
    this.startTime -= this.duration * this.progress
  }
  this.endTime = this.startTime + this.duration;
  this.lastFrame = this.startTime;
  if(!this.progress) {
    this.onBegin()
  }
  this.onPlay();
  if(this.state_ == goog.fx.Animation.State.PAUSED) {
    this.onResume()
  }
  this.state_ = goog.fx.Animation.State.PLAYING;
  goog.fx.Animation.registerAnimation(this);
  this.cycle(this.startTime);
  return true
};
goog.fx.Animation.prototype.stop = function(gotoEnd) {
  goog.fx.Animation.unregisterAnimation(this);
  this.state_ = goog.fx.Animation.State.STOPPED;
  if(gotoEnd) {
    this.progress = 1
  }
  this.updateCoords_(this.progress);
  this.onStop();
  this.onEnd()
};
goog.fx.Animation.prototype.pause = function() {
  if(this.state_ == goog.fx.Animation.State.PLAYING) {
    goog.fx.Animation.unregisterAnimation(this);
    this.state_ = goog.fx.Animation.State.PAUSED;
    this.onPause()
  }
};
goog.fx.Animation.prototype.disposeInternal = function() {
  if(this.state_ != goog.fx.Animation.State.STOPPED) {
    this.stop(false)
  }
  this.onDestroy();
  goog.fx.Animation.superClass_.disposeInternal.call(this)
};
goog.fx.Animation.prototype.destroy = function() {
  this.dispose()
};
goog.fx.Animation.prototype.cycle = function(now) {
  this.progress = (now - this.startTime) / (this.endTime - this.startTime);
  if(this.progress >= 1) {
    this.progress = 1
  }
  this.fps_ = 1E3 / (now - this.lastFrame);
  this.lastFrame = now;
  if(goog.isFunction(this.accel_)) {
    this.updateCoords_(this.accel_(this.progress))
  }else {
    this.updateCoords_(this.progress)
  }
  if(this.progress == 1) {
    this.state_ = goog.fx.Animation.State.STOPPED;
    goog.fx.Animation.unregisterAnimation(this);
    this.onFinish();
    this.onEnd()
  }else {
    if(this.state_ == goog.fx.Animation.State.PLAYING) {
      this.onAnimate()
    }
  }
};
goog.fx.Animation.prototype.updateCoords_ = function(t) {
  this.coords = new Array(this.startPoint.length);
  for(var i = 0;i < this.startPoint.length;i++) {
    this.coords[i] = (this.endPoint[i] - this.startPoint[i]) * t + this.startPoint[i]
  }
};
goog.fx.Animation.prototype.onAnimate = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.ANIMATE)
};
goog.fx.Animation.prototype.onBegin = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.BEGIN)
};
goog.fx.Animation.prototype.onDestroy = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.DESTROY)
};
goog.fx.Animation.prototype.onEnd = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.END)
};
goog.fx.Animation.prototype.onFinish = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.FINISH)
};
goog.fx.Animation.prototype.onPause = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.PAUSE)
};
goog.fx.Animation.prototype.onPlay = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.PLAY)
};
goog.fx.Animation.prototype.onResume = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.RESUME)
};
goog.fx.Animation.prototype.onStop = function() {
  this.dispatchAnimationEvent_(goog.fx.Animation.EventType.STOP)
};
goog.fx.Animation.prototype.dispatchAnimationEvent_ = function(type) {
  this.dispatchEvent(new goog.fx.AnimationEvent(type, this))
};
goog.fx.AnimationEvent = function(type, anim) {
  goog.events.Event.call(this, type);
  this.coords = anim.coords;
  this.x = anim.coords[0];
  this.y = anim.coords[1];
  this.z = anim.coords[2];
  this.duration = anim.duration;
  this.progress = anim.progress;
  this.fps = anim.fps_;
  this.state = anim.state_;
  this.anim = anim
};
goog.inherits(goog.fx.AnimationEvent, goog.events.Event);
goog.fx.AnimationEvent.prototype.coordsAsInts = function() {
  return goog.array.map(this.coords, Math.round)
};
goog.provide("goog.fx.easing");
goog.fx.easing.easeIn = function(t) {
  return t * t * t
};
goog.fx.easing.easeOut = function(t) {
  return 1 - Math.pow(1 - t, 3)
};
goog.fx.easing.inAndOut = function(t) {
  return 3 * t * t - 2 * t * t * t
};
goog.provide("goog.fx");
goog.require("goog.asserts");
goog.require("goog.fx.Animation");
goog.require("goog.fx.Animation.EventType");
goog.require("goog.fx.Animation.State");
goog.require("goog.fx.AnimationEvent");
goog.require("goog.fx.easing");
goog.provide("goog.dom.BrowserFeature");
goog.require("goog.userAgent");
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isVersion("9"), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isVersion("9") || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.provide("goog.dom.TagName");
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.provide("goog.dom.classes");
goog.require("goog.array");
goog.dom.classes.set = function(element, className) {
  element.className = className
};
goog.dom.classes.get = function(element) {
  var className = element.className;
  return className && typeof className.split == "function" ? className.split(/\s+/) : []
};
goog.dom.classes.add = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.add_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.remove = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.remove_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.add_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < args.length;i++) {
    if(!goog.array.contains(classes, args[i])) {
      classes.push(args[i]);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.remove_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < classes.length;i++) {
    if(goog.array.contains(args, classes[i])) {
      goog.array.splice(classes, i--, 1);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.swap = function(element, fromClass, toClass) {
  var classes = goog.dom.classes.get(element);
  var removed = false;
  for(var i = 0;i < classes.length;i++) {
    if(classes[i] == fromClass) {
      goog.array.splice(classes, i--, 1);
      removed = true
    }
  }
  if(removed) {
    classes.push(toClass);
    element.className = classes.join(" ")
  }
  return removed
};
goog.dom.classes.addRemove = function(element, classesToRemove, classesToAdd) {
  var classes = goog.dom.classes.get(element);
  if(goog.isString(classesToRemove)) {
    goog.array.remove(classes, classesToRemove)
  }else {
    if(goog.isArray(classesToRemove)) {
      goog.dom.classes.remove_(classes, classesToRemove)
    }
  }
  if(goog.isString(classesToAdd) && !goog.array.contains(classes, classesToAdd)) {
    classes.push(classesToAdd)
  }else {
    if(goog.isArray(classesToAdd)) {
      goog.dom.classes.add_(classes, classesToAdd)
    }
  }
  element.className = classes.join(" ")
};
goog.dom.classes.has = function(element, className) {
  return goog.array.contains(goog.dom.classes.get(element), className)
};
goog.dom.classes.enable = function(element, className, enabled) {
  if(enabled) {
    goog.dom.classes.add(element, className)
  }else {
    goog.dom.classes.remove(element, className)
  }
};
goog.dom.classes.toggle = function(element, className) {
  var add = !goog.dom.classes.has(element, className);
  goog.dom.classes.enable(element, className, add);
  return add
};
goog.provide("goog.math.Coordinate");
goog.math.Coordinate = function(opt_x, opt_y) {
  this.x = goog.isDef(opt_x) ? opt_x : 0;
  this.y = goog.isDef(opt_y) ? opt_y : 0
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y)
};
if(goog.DEBUG) {
  goog.math.Coordinate.prototype.toString = function() {
    return"(" + this.x + ", " + this.y + ")"
  }
}
goog.math.Coordinate.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.provide("goog.math.Size");
goog.math.Size = function(width, height) {
  this.width = width;
  this.height = height
};
goog.math.Size.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.width == b.width && a.height == b.height
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height)
};
if(goog.DEBUG) {
  goog.math.Size.prototype.toString = function() {
    return"(" + this.width + " x " + this.height + ")"
  }
}
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height)
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height)
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height
};
goog.math.Size.prototype.perimeter = function() {
  return(this.width + this.height) * 2
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height
};
goog.math.Size.prototype.isEmpty = function() {
  return!this.area()
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
goog.math.Size.prototype.fitsInside = function(target) {
  return this.width <= target.width && this.height <= target.height
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
goog.math.Size.prototype.scale = function(s) {
  this.width *= s;
  this.height *= s;
  return this
};
goog.math.Size.prototype.scaleToFit = function(target) {
  var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s)
};
goog.provide("goog.dom");
goog.provide("goog.dom.DomHelper");
goog.provide("goog.dom.NodeType");
goog.require("goog.array");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classes");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.ASSUME_QUIRKS_MODE = false;
goog.dom.ASSUME_STANDARDS_MODE = false;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(opt_element) {
  return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.defaultDomHelper_;
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(element) {
  return goog.isString(element) ? document.getElementById(element) : element
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el)
};
goog.dom.getElementsByClass = function(className, opt_el) {
  var parent = opt_el || document;
  if(goog.dom.canUseQuerySelector_(parent)) {
    return parent.querySelectorAll("." + className)
  }else {
    if(parent.getElementsByClassName) {
      return parent.getElementsByClassName(className)
    }
  }
  return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el)
};
goog.dom.getElementByClass = function(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if(goog.dom.canUseQuerySelector_(parent)) {
    retVal = parent.querySelector("." + className)
  }else {
    retVal = goog.dom.getElementsByClass(className, opt_el)[0]
  }
  return retVal || null
};
goog.dom.canUseQuerySelector_ = function(parent) {
  return parent.querySelectorAll && parent.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tagName = opt_tag && opt_tag != "*" ? opt_tag.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
    var query = tagName + (opt_class ? "." + opt_class : "");
    return parent.querySelectorAll(query)
  }
  if(opt_class && parent.getElementsByClassName) {
    var els = parent.getElementsByClassName(opt_class);
    if(tagName) {
      var arrayLike = {};
      var len = 0;
      for(var i = 0, el;el = els[i];i++) {
        if(tagName == el.nodeName) {
          arrayLike[len++] = el
        }
      }
      arrayLike.length = len;
      return arrayLike
    }else {
      return els
    }
  }
  var els = parent.getElementsByTagName(tagName || "*");
  if(opt_class) {
    var arrayLike = {};
    var len = 0;
    for(var i = 0, el;el = els[i];i++) {
      var className = el.className;
      if(typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) {
        arrayLike[len++] = el
      }
    }
    arrayLike.length = len;
    return arrayLike
  }else {
    return els
  }
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(element, properties) {
  goog.object.forEach(properties, function(val, key) {
    if(key == "style") {
      element.style.cssText = val
    }else {
      if(key == "class") {
        element.className = val
      }else {
        if(key == "for") {
          element.htmlFor = val
        }else {
          if(key in goog.dom.DIRECT_ATTRIBUTE_MAP_) {
            element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val)
          }else {
            element[key] = val
          }
        }
      }
    }
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {"cellpadding":"cellPadding", "cellspacing":"cellSpacing", "colspan":"colSpan", "rowspan":"rowSpan", "valign":"vAlign", "height":"height", "width":"width", "usemap":"useMap", "frameborder":"frameBorder", "maxlength":"maxLength", "type":"type"};
goog.dom.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize_(opt_window || window)
};
goog.dom.getViewportSize_ = function(win) {
  var doc = win.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    if(typeof win.innerHeight == "undefined") {
      win = window
    }
    var innerHeight = win.innerHeight;
    var scrollHeight = win.document.documentElement.scrollHeight;
    if(win == win.top) {
      if(scrollHeight < innerHeight) {
        innerHeight -= 15
      }
    }
    return new goog.math.Size(win.innerWidth, innerHeight)
  }
  var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
  return new goog.math.Size(el.clientWidth, el.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(win) {
  var doc = win.document;
  var height = 0;
  if(doc) {
    var vh = goog.dom.getViewportSize_(win).height;
    var body = doc.body;
    var docEl = doc.documentElement;
    if(goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
      height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight
    }else {
      var sh = docEl.scrollHeight;
      var oh = docEl.offsetHeight;
      if(docEl.clientHeight != oh) {
        sh = body.scrollHeight;
        oh = body.offsetHeight
      }
      if(sh > vh) {
        height = sh > oh ? sh : oh
      }else {
        height = sh < oh ? sh : oh
      }
    }
  }
  return height
};
goog.dom.getPageScroll = function(opt_window) {
  var win = opt_window || goog.global || window;
  return goog.dom.getDomHelper(win.document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(doc) {
  var el = goog.dom.getDocumentScrollElement_(doc);
  var win = goog.dom.getWindow_(doc);
  return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(doc) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body
};
goog.dom.getWindow = function(opt_doc) {
  return opt_doc ? goog.dom.getWindow_(opt_doc) : window
};
goog.dom.getWindow_ = function(doc) {
  return doc.parentWindow || doc.defaultView
};
goog.dom.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(doc, args) {
  var tagName = args[0];
  var attributes = args[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes && (attributes.name || attributes.type)) {
    var tagNameArr = ["<", tagName];
    if(attributes.name) {
      tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"')
    }
    if(attributes.type) {
      tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');
      var clone = {};
      goog.object.extend(clone, attributes);
      attributes = clone;
      delete attributes.type
    }
    tagNameArr.push(">");
    tagName = tagNameArr.join("")
  }
  var element = doc.createElement(tagName);
  if(attributes) {
    if(goog.isString(attributes)) {
      element.className = attributes
    }else {
      if(goog.isArray(attributes)) {
        goog.dom.classes.add.apply(null, [element].concat(attributes))
      }else {
        goog.dom.setProperties(element, attributes)
      }
    }
  }
  if(args.length > 2) {
    goog.dom.append_(doc, element, args, 2)
  }
  return element
};
goog.dom.append_ = function(doc, parent, args, startIndex) {
  function childHandler(child) {
    if(child) {
      parent.appendChild(goog.isString(child) ? doc.createTextNode(child) : child)
    }
  }
  for(var i = startIndex;i < args.length;i++) {
    var arg = args[i];
    if(goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
      goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.clone(arg) : arg, childHandler)
    }else {
      childHandler(arg)
    }
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(name) {
  return document.createElement(name)
};
goog.dom.createTextNode = function(content) {
  return document.createTextNode(content)
};
goog.dom.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.createTable_ = function(doc, rows, columns, fillWithNbsp) {
  var rowHtml = ["<tr>"];
  for(var i = 0;i < columns;i++) {
    rowHtml.push(fillWithNbsp ? "<td>&nbsp;</td>" : "<td></td>")
  }
  rowHtml.push("</tr>");
  rowHtml = rowHtml.join("");
  var totalHtml = ["<table>"];
  for(i = 0;i < rows;i++) {
    totalHtml.push(rowHtml)
  }
  totalHtml.push("</table>");
  var elem = doc.createElement(goog.dom.TagName.DIV);
  elem.innerHTML = totalHtml.join("");
  return elem.removeChild(elem.firstChild)
};
goog.dom.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(document, htmlString)
};
goog.dom.htmlToDocumentFragment_ = function(doc, htmlString) {
  var tempDiv = doc.createElement("div");
  if(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
    tempDiv.innerHTML = "<br>" + htmlString;
    tempDiv.removeChild(tempDiv.firstChild)
  }else {
    tempDiv.innerHTML = htmlString
  }
  if(tempDiv.childNodes.length == 1) {
    return tempDiv.removeChild(tempDiv.firstChild)
  }else {
    var fragment = doc.createDocumentFragment();
    while(tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild)
    }
    return fragment
  }
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(doc) {
  if(goog.dom.COMPAT_MODE_KNOWN_) {
    return goog.dom.ASSUME_STANDARDS_MODE
  }
  return doc.compatMode == "CSS1Compat"
};
goog.dom.canHaveChildren = function(node) {
  if(node.nodeType != goog.dom.NodeType.ELEMENT) {
    return false
  }
  switch(node.tagName) {
    case goog.dom.TagName.APPLET:
    ;
    case goog.dom.TagName.AREA:
    ;
    case goog.dom.TagName.BASE:
    ;
    case goog.dom.TagName.BR:
    ;
    case goog.dom.TagName.COL:
    ;
    case goog.dom.TagName.FRAME:
    ;
    case goog.dom.TagName.HR:
    ;
    case goog.dom.TagName.IMG:
    ;
    case goog.dom.TagName.INPUT:
    ;
    case goog.dom.TagName.IFRAME:
    ;
    case goog.dom.TagName.ISINDEX:
    ;
    case goog.dom.TagName.LINK:
    ;
    case goog.dom.TagName.NOFRAMES:
    ;
    case goog.dom.TagName.NOSCRIPT:
    ;
    case goog.dom.TagName.META:
    ;
    case goog.dom.TagName.OBJECT:
    ;
    case goog.dom.TagName.PARAM:
    ;
    case goog.dom.TagName.SCRIPT:
    ;
    case goog.dom.TagName.STYLE:
      return false
  }
  return true
};
goog.dom.appendChild = function(parent, child) {
  parent.appendChild(child)
};
goog.dom.append = function(parent, var_args) {
  goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1)
};
goog.dom.removeChildren = function(node) {
  var child;
  while(child = node.firstChild) {
    node.removeChild(child)
  }
};
goog.dom.insertSiblingBefore = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode)
  }
};
goog.dom.insertSiblingAfter = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
  }
};
goog.dom.insertChildAt = function(parent, child, index) {
  parent.insertBefore(child, parent.childNodes[index] || null)
};
goog.dom.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null
};
goog.dom.replaceNode = function(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if(parent) {
    parent.replaceChild(newNode, oldNode)
  }
};
goog.dom.flattenElement = function(element) {
  var child, parent = element.parentNode;
  if(parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(element.removeNode) {
      return element.removeNode(false)
    }else {
      while(child = element.firstChild) {
        parent.insertBefore(child, element)
      }
      return goog.dom.removeNode(element)
    }
  }
};
goog.dom.getChildren = function(element) {
  if(goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && element.children != undefined) {
    return element.children
  }
  return goog.array.filter(element.childNodes, function(node) {
    return node.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(node) {
  if(node.firstElementChild != undefined) {
    return node.firstElementChild
  }
  return goog.dom.getNextElementNode_(node.firstChild, true)
};
goog.dom.getLastElementChild = function(node) {
  if(node.lastElementChild != undefined) {
    return node.lastElementChild
  }
  return goog.dom.getNextElementNode_(node.lastChild, false)
};
goog.dom.getNextElementSibling = function(node) {
  if(node.nextElementSibling != undefined) {
    return node.nextElementSibling
  }
  return goog.dom.getNextElementNode_(node.nextSibling, true)
};
goog.dom.getPreviousElementSibling = function(node) {
  if(node.previousElementSibling != undefined) {
    return node.previousElementSibling
  }
  return goog.dom.getNextElementNode_(node.previousSibling, false)
};
goog.dom.getNextElementNode_ = function(node, forward) {
  while(node && node.nodeType != goog.dom.NodeType.ELEMENT) {
    node = forward ? node.nextSibling : node.previousSibling
  }
  return node
};
goog.dom.getNextNode = function(node) {
  if(!node) {
    return null
  }
  if(node.firstChild) {
    return node.firstChild
  }
  while(node && !node.nextSibling) {
    node = node.parentNode
  }
  return node ? node.nextSibling : null
};
goog.dom.getPreviousNode = function(node) {
  if(!node) {
    return null
  }
  if(!node.previousSibling) {
    return node.parentNode
  }
  node = node.previousSibling;
  while(node && node.lastChild) {
    node = node.lastChild
  }
  return node
};
goog.dom.isNodeLike = function(obj) {
  return goog.isObject(obj) && obj.nodeType > 0
};
goog.dom.isWindow = function(obj) {
  return goog.isObject(obj) && obj["window"] == obj
};
goog.dom.contains = function(parent, descendant) {
  if(parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
    return parent == descendant || parent.contains(descendant)
  }
  if(typeof parent.compareDocumentPosition != "undefined") {
    return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16)
  }
  while(descendant && parent != descendant) {
    descendant = descendant.parentNode
  }
  return descendant == parent
};
goog.dom.compareNodeOrder = function(node1, node2) {
  if(node1 == node2) {
    return 0
  }
  if(node1.compareDocumentPosition) {
    return node1.compareDocumentPosition(node2) & 2 ? 1 : -1
  }
  if("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
    var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
    var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
    if(isElement1 && isElement2) {
      return node1.sourceIndex - node2.sourceIndex
    }else {
      var parent1 = node1.parentNode;
      var parent2 = node2.parentNode;
      if(parent1 == parent2) {
        return goog.dom.compareSiblingOrder_(node1, node2)
      }
      if(!isElement1 && goog.dom.contains(parent1, node2)) {
        return-1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2)
      }
      if(!isElement2 && goog.dom.contains(parent2, node1)) {
        return goog.dom.compareParentsDescendantNodeIe_(node2, node1)
      }
      return(isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex : parent2.sourceIndex)
    }
  }
  var doc = goog.dom.getOwnerDocument(node1);
  var range1, range2;
  range1 = doc.createRange();
  range1.selectNode(node1);
  range1.collapse(true);
  range2 = doc.createRange();
  range2.selectNode(node2);
  range2.collapse(true);
  return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2)
};
goog.dom.compareParentsDescendantNodeIe_ = function(textNode, node) {
  var parent = textNode.parentNode;
  if(parent == node) {
    return-1
  }
  var sibling = node;
  while(sibling.parentNode != parent) {
    sibling = sibling.parentNode
  }
  return goog.dom.compareSiblingOrder_(sibling, textNode)
};
goog.dom.compareSiblingOrder_ = function(node1, node2) {
  var s = node2;
  while(s = s.previousSibling) {
    if(s == node1) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(var_args) {
  var i, count = arguments.length;
  if(!count) {
    return null
  }else {
    if(count == 1) {
      return arguments[0]
    }
  }
  var paths = [];
  var minLength = Infinity;
  for(i = 0;i < count;i++) {
    var ancestors = [];
    var node = arguments[i];
    while(node) {
      ancestors.unshift(node);
      node = node.parentNode
    }
    paths.push(ancestors);
    minLength = Math.min(minLength, ancestors.length)
  }
  var output = null;
  for(i = 0;i < minLength;i++) {
    var first = paths[0][i];
    for(var j = 1;j < count;j++) {
      if(first != paths[j][i]) {
        return output
      }
    }
    output = first
  }
  return output
};
goog.dom.getOwnerDocument = function(node) {
  return node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document
};
goog.dom.getFrameContentDocument = function(frame) {
  var doc;
  if(goog.userAgent.WEBKIT) {
    doc = frame.document || frame.contentWindow.document
  }else {
    doc = frame.contentDocument || frame.contentWindow.document
  }
  return doc
};
goog.dom.getFrameContentWindow = function(frame) {
  return frame.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(frame))
};
goog.dom.setTextContent = function(element, text) {
  if("textContent" in element) {
    element.textContent = text
  }else {
    if(element.firstChild && element.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      while(element.lastChild != element.firstChild) {
        element.removeChild(element.lastChild)
      }
      element.firstChild.data = text
    }else {
      goog.dom.removeChildren(element);
      var doc = goog.dom.getOwnerDocument(element);
      element.appendChild(doc.createTextNode(text))
    }
  }
};
goog.dom.getOuterHtml = function(element) {
  if("outerHTML" in element) {
    return element.outerHTML
  }else {
    var doc = goog.dom.getOwnerDocument(element);
    var div = doc.createElement("div");
    div.appendChild(element.cloneNode(true));
    return div.innerHTML
  }
};
goog.dom.findNode = function(root, p) {
  var rv = [];
  var found = goog.dom.findNodes_(root, p, rv, true);
  return found ? rv[0] : undefined
};
goog.dom.findNodes = function(root, p) {
  var rv = [];
  goog.dom.findNodes_(root, p, rv, false);
  return rv
};
goog.dom.findNodes_ = function(root, p, rv, findOne) {
  if(root != null) {
    for(var i = 0, child;child = root.childNodes[i];i++) {
      if(p(child)) {
        rv.push(child);
        if(findOne) {
          return true
        }
      }
      if(goog.dom.findNodes_(child, p, rv, findOne)) {
        return true
      }
    }
  }
  return false
};
goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT":1, "STYLE":1, "HEAD":1, "IFRAME":1, "OBJECT":1};
goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG":" ", "BR":"\n"};
goog.dom.isFocusableTabIndex = function(element) {
  var attrNode = element.getAttributeNode("tabindex");
  if(attrNode && attrNode.specified) {
    var index = element.tabIndex;
    return goog.isNumber(index) && index >= 0
  }
  return false
};
goog.dom.setFocusableTabIndex = function(element, enable) {
  if(enable) {
    element.tabIndex = 0
  }else {
    element.removeAttribute("tabIndex")
  }
};
goog.dom.getTextContent = function(node) {
  var textContent;
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in node) {
    textContent = goog.string.canonicalizeNewlines(node.innerText)
  }else {
    var buf = [];
    goog.dom.getTextContent_(node, buf, true);
    textContent = buf.join("")
  }
  textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  textContent = textContent.replace(/\u200B/g, "");
  if(!goog.userAgent.IE) {
    textContent = textContent.replace(/ +/g, " ")
  }
  if(textContent != " ") {
    textContent = textContent.replace(/^\s*/, "")
  }
  return textContent
};
goog.dom.getRawTextContent = function(node) {
  var buf = [];
  goog.dom.getTextContent_(node, buf, false);
  return buf.join("")
};
goog.dom.getTextContent_ = function(node, buf, normalizeWhitespace) {
  if(node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
  }else {
    if(node.nodeType == goog.dom.NodeType.TEXT) {
      if(normalizeWhitespace) {
        buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
      }else {
        buf.push(node.nodeValue)
      }
    }else {
      if(node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName])
      }else {
        var child = node.firstChild;
        while(child) {
          goog.dom.getTextContent_(child, buf, normalizeWhitespace);
          child = child.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(node) {
  return goog.dom.getTextContent(node).length
};
goog.dom.getNodeTextOffset = function(node, opt_offsetParent) {
  var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
  var buf = [];
  while(node && node != root) {
    var cur = node;
    while(cur = cur.previousSibling) {
      buf.unshift(goog.dom.getTextContent(cur))
    }
    node = node.parentNode
  }
  return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(parent, offset, opt_result) {
  var stack = [parent], pos = 0, cur;
  while(stack.length > 0 && pos < offset) {
    cur = stack.pop();
    if(cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
    }else {
      if(cur.nodeType == goog.dom.NodeType.TEXT) {
        var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        pos += text.length
      }else {
        if(cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length
        }else {
          for(var i = cur.childNodes.length - 1;i >= 0;i--) {
            stack.push(cur.childNodes[i])
          }
        }
      }
    }
  }
  if(goog.isObject(opt_result)) {
    opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
    opt_result.node = cur
  }
  return cur
};
goog.dom.isNodeList = function(val) {
  if(val && typeof val.length == "number") {
    if(goog.isObject(val)) {
      return typeof val.item == "function" || typeof val.item == "string"
    }else {
      if(goog.isFunction(val)) {
        return typeof val.item == "function"
      }
    }
  }
  return false
};
goog.dom.getAncestorByTagNameAndClass = function(element, opt_tag, opt_class) {
  var tagName = opt_tag ? opt_tag.toUpperCase() : null;
  return goog.dom.getAncestor(element, function(node) {
    return(!tagName || node.nodeName == tagName) && (!opt_class || goog.dom.classes.has(node, opt_class))
  }, true)
};
goog.dom.getAncestorByClass = function(element, opt_class) {
  return goog.dom.getAncestorByTagNameAndClass(element, null, opt_class)
};
goog.dom.getAncestor = function(element, matcher, opt_includeNode, opt_maxSearchSteps) {
  if(!opt_includeNode) {
    element = element.parentNode
  }
  var ignoreSearchSteps = opt_maxSearchSteps == null;
  var steps = 0;
  while(element && (ignoreSearchSteps || steps <= opt_maxSearchSteps)) {
    if(matcher(element)) {
      return element
    }
    element = element.parentNode;
    steps++
  }
  return null
};
goog.dom.DomHelper = function(opt_document) {
  this.document_ = opt_document || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(document) {
  this.document_ = document
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(element) {
  if(goog.isString(element)) {
    return this.document_.getElementById(element)
  }else {
    return element
  }
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementsByClass(className, doc)
};
goog.dom.DomHelper.prototype.getElementByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementByClass(className, doc)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize(opt_window || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.Appendable;
goog.dom.DomHelper.prototype.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(name) {
  return this.document_.createElement(name)
};
goog.dom.DomHelper.prototype.createTextNode = function(content) {
  return this.document_.createTextNode(content)
};
goog.dom.DomHelper.prototype.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(this.document_, htmlString)
};
goog.dom.DomHelper.prototype.getCompatMode = function() {
  return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_)
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_)
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.provide("goog.dom.ViewportSizeMonitor");
goog.require("goog.dom");
goog.require("goog.events");
goog.require("goog.events.EventTarget");
goog.require("goog.events.EventType");
goog.require("goog.math.Size");
goog.require("goog.userAgent");
goog.dom.ViewportSizeMonitor = function(opt_window) {
  goog.events.EventTarget.call(this);
  this.window_ = opt_window || window;
  this.listenerKey_ = goog.events.listen(this.window_, goog.events.EventType.RESIZE, this.handleResize_, false, this);
  this.size_ = goog.dom.getViewportSize(this.window_);
  if(this.isPollingRequired_()) {
    this.windowSizePollInterval_ = window.setInterval(goog.bind(this.checkForSizeChange_, this), goog.dom.ViewportSizeMonitor.WINDOW_SIZE_POLL_RATE)
  }
};
goog.inherits(goog.dom.ViewportSizeMonitor, goog.events.EventTarget);
goog.dom.ViewportSizeMonitor.getInstanceForWindow = function(opt_window) {
  var currentWindow = opt_window || window;
  var uid = goog.getUid(currentWindow);
  return goog.dom.ViewportSizeMonitor.windowInstanceMap_[uid] = goog.dom.ViewportSizeMonitor.windowInstanceMap_[uid] || new goog.dom.ViewportSizeMonitor(currentWindow)
};
goog.dom.ViewportSizeMonitor.windowInstanceMap_ = {};
goog.dom.ViewportSizeMonitor.WINDOW_SIZE_POLL_RATE = 500;
goog.dom.ViewportSizeMonitor.prototype.listenerKey_ = null;
goog.dom.ViewportSizeMonitor.prototype.window_ = null;
goog.dom.ViewportSizeMonitor.prototype.size_ = null;
goog.dom.ViewportSizeMonitor.prototype.windowSizePollInterval_ = null;
goog.dom.ViewportSizeMonitor.prototype.isPollingRequired_ = function() {
  return goog.userAgent.WEBKIT && goog.userAgent.WINDOWS || goog.userAgent.OPERA && this.window_.self != this.window_.top
};
goog.dom.ViewportSizeMonitor.prototype.getSize = function() {
  return this.size_ ? this.size_.clone() : null
};
goog.dom.ViewportSizeMonitor.prototype.disposeInternal = function() {
  goog.dom.ViewportSizeMonitor.superClass_.disposeInternal.call(this);
  if(this.listenerKey_) {
    goog.events.unlistenByKey(this.listenerKey_);
    this.listenerKey_ = null
  }
  if(this.windowSizePollInterval_) {
    window.clearInterval(this.windowSizePollInterval_);
    this.windowSizePollInterval_ = null
  }
  this.window_ = null;
  this.size_ = null
};
goog.dom.ViewportSizeMonitor.prototype.handleResize_ = function(event) {
  this.checkForSizeChange_()
};
goog.dom.ViewportSizeMonitor.prototype.checkForSizeChange_ = function() {
  var size = goog.dom.getViewportSize(this.window_);
  if(!goog.math.Size.equals(size, this.size_)) {
    this.size_ = size;
    this.dispatchEvent(goog.events.EventType.RESIZE)
  }
};
goog.provide("goog.color.names");
goog.color.names = {"aliceblue":"#f0f8ff", "antiquewhite":"#faebd7", "aqua":"#00ffff", "aquamarine":"#7fffd4", "azure":"#f0ffff", "beige":"#f5f5dc", "bisque":"#ffe4c4", "black":"#000000", "blanchedalmond":"#ffebcd", "blue":"#0000ff", "blueviolet":"#8a2be2", "brown":"#a52a2a", "burlywood":"#deb887", "cadetblue":"#5f9ea0", "chartreuse":"#7fff00", "chocolate":"#d2691e", "coral":"#ff7f50", "cornflowerblue":"#6495ed", "cornsilk":"#fff8dc", "crimson":"#dc143c", "cyan":"#00ffff", "darkblue":"#00008b", "darkcyan":"#008b8b", 
"darkgoldenrod":"#b8860b", "darkgray":"#a9a9a9", "darkgreen":"#006400", "darkgrey":"#a9a9a9", "darkkhaki":"#bdb76b", "darkmagenta":"#8b008b", "darkolivegreen":"#556b2f", "darkorange":"#ff8c00", "darkorchid":"#9932cc", "darkred":"#8b0000", "darksalmon":"#e9967a", "darkseagreen":"#8fbc8f", "darkslateblue":"#483d8b", "darkslategray":"#2f4f4f", "darkslategrey":"#2f4f4f", "darkturquoise":"#00ced1", "darkviolet":"#9400d3", "deeppink":"#ff1493", "deepskyblue":"#00bfff", "dimgray":"#696969", "dimgrey":"#696969", 
"dodgerblue":"#1e90ff", "firebrick":"#b22222", "floralwhite":"#fffaf0", "forestgreen":"#228b22", "fuchsia":"#ff00ff", "gainsboro":"#dcdcdc", "ghostwhite":"#f8f8ff", "gold":"#ffd700", "goldenrod":"#daa520", "gray":"#808080", "green":"#008000", "greenyellow":"#adff2f", "grey":"#808080", "honeydew":"#f0fff0", "hotpink":"#ff69b4", "indianred":"#cd5c5c", "indigo":"#4b0082", "ivory":"#fffff0", "khaki":"#f0e68c", "lavender":"#e6e6fa", "lavenderblush":"#fff0f5", "lawngreen":"#7cfc00", "lemonchiffon":"#fffacd", 
"lightblue":"#add8e6", "lightcoral":"#f08080", "lightcyan":"#e0ffff", "lightgoldenrodyellow":"#fafad2", "lightgray":"#d3d3d3", "lightgreen":"#90ee90", "lightgrey":"#d3d3d3", "lightpink":"#ffb6c1", "lightsalmon":"#ffa07a", "lightseagreen":"#20b2aa", "lightskyblue":"#87cefa", "lightslategray":"#778899", "lightslategrey":"#778899", "lightsteelblue":"#b0c4de", "lightyellow":"#ffffe0", "lime":"#00ff00", "limegreen":"#32cd32", "linen":"#faf0e6", "magenta":"#ff00ff", "maroon":"#800000", "mediumaquamarine":"#66cdaa", 
"mediumblue":"#0000cd", "mediumorchid":"#ba55d3", "mediumpurple":"#9370d8", "mediumseagreen":"#3cb371", "mediumslateblue":"#7b68ee", "mediumspringgreen":"#00fa9a", "mediumturquoise":"#48d1cc", "mediumvioletred":"#c71585", "midnightblue":"#191970", "mintcream":"#f5fffa", "mistyrose":"#ffe4e1", "moccasin":"#ffe4b5", "navajowhite":"#ffdead", "navy":"#000080", "oldlace":"#fdf5e6", "olive":"#808000", "olivedrab":"#6b8e23", "orange":"#ffa500", "orangered":"#ff4500", "orchid":"#da70d6", "palegoldenrod":"#eee8aa", 
"palegreen":"#98fb98", "paleturquoise":"#afeeee", "palevioletred":"#d87093", "papayawhip":"#ffefd5", "peachpuff":"#ffdab9", "peru":"#cd853f", "pink":"#ffc0cb", "plum":"#dda0dd", "powderblue":"#b0e0e6", "purple":"#800080", "red":"#ff0000", "rosybrown":"#bc8f8f", "royalblue":"#4169e1", "saddlebrown":"#8b4513", "salmon":"#fa8072", "sandybrown":"#f4a460", "seagreen":"#2e8b57", "seashell":"#fff5ee", "sienna":"#a0522d", "silver":"#c0c0c0", "skyblue":"#87ceeb", "slateblue":"#6a5acd", "slategray":"#708090", 
"slategrey":"#708090", "snow":"#fffafa", "springgreen":"#00ff7f", "steelblue":"#4682b4", "tan":"#d2b48c", "teal":"#008080", "thistle":"#d8bfd8", "tomato":"#ff6347", "turquoise":"#40e0d0", "violet":"#ee82ee", "wheat":"#f5deb3", "white":"#ffffff", "whitesmoke":"#f5f5f5", "yellow":"#ffff00", "yellowgreen":"#9acd32"};
goog.provide("goog.math");
goog.require("goog.array");
goog.math.randomInt = function(a) {
  return Math.floor(Math.random() * a)
};
goog.math.uniformRandom = function(a, b) {
  return a + Math.random() * (b - a)
};
goog.math.clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max)
};
goog.math.modulo = function(a, b) {
  var r = a % b;
  return r * b < 0 ? r + b : r
};
goog.math.lerp = function(a, b, x) {
  return a + x * (b - a)
};
goog.math.nearlyEquals = function(a, b, opt_tolerance) {
  return Math.abs(a - b) <= (opt_tolerance || 1.0E-6)
};
goog.math.standardAngle = function(angle) {
  return goog.math.modulo(angle, 360)
};
goog.math.toRadians = function(angleDegrees) {
  return angleDegrees * Math.PI / 180
};
goog.math.toDegrees = function(angleRadians) {
  return angleRadians * 180 / Math.PI
};
goog.math.angleDx = function(degrees, radius) {
  return radius * Math.cos(goog.math.toRadians(degrees))
};
goog.math.angleDy = function(degrees, radius) {
  return radius * Math.sin(goog.math.toRadians(degrees))
};
goog.math.angle = function(x1, y1, x2, y2) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(y2 - y1, x2 - x1)))
};
goog.math.angleDifference = function(startAngle, endAngle) {
  var d = goog.math.standardAngle(endAngle) - goog.math.standardAngle(startAngle);
  if(d > 180) {
    d = d - 360
  }else {
    if(d <= -180) {
      d = 360 + d
    }
  }
  return d
};
goog.math.sign = function(x) {
  return x == 0 ? 0 : x < 0 ? -1 : 1
};
goog.math.longestCommonSubsequence = function(array1, array2, opt_compareFn, opt_collectorFn) {
  var compare = opt_compareFn || function(a, b) {
    return a == b
  };
  var collect = opt_collectorFn || function(i1, i2) {
    return array1[i1]
  };
  var length1 = array1.length;
  var length2 = array2.length;
  var arr = [];
  for(var i = 0;i < length1 + 1;i++) {
    arr[i] = [];
    arr[i][0] = 0
  }
  for(var j = 0;j < length2 + 1;j++) {
    arr[0][j] = 0
  }
  for(i = 1;i <= length1;i++) {
    for(j = 1;j <= length1;j++) {
      if(compare(array1[i - 1], array2[j - 1])) {
        arr[i][j] = arr[i - 1][j - 1] + 1
      }else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
      }
    }
  }
  var result = [];
  var i = length1, j = length2;
  while(i > 0 && j > 0) {
    if(compare(array1[i - 1], array2[j - 1])) {
      result.unshift(collect(i - 1, j - 1));
      i--;
      j--
    }else {
      if(arr[i - 1][j] > arr[i][j - 1]) {
        i--
      }else {
        j--
      }
    }
  }
  return result
};
goog.math.sum = function(var_args) {
  return goog.array.reduce(arguments, function(sum, value) {
    return sum + value
  }, 0)
};
goog.math.average = function(var_args) {
  return goog.math.sum.apply(null, arguments) / arguments.length
};
goog.math.standardDeviation = function(var_args) {
  var sampleSize = arguments.length;
  if(sampleSize < 2) {
    return 0
  }
  var mean = goog.math.average.apply(null, arguments);
  var variance = goog.math.sum.apply(null, goog.array.map(arguments, function(val) {
    return Math.pow(val - mean, 2)
  })) / (sampleSize - 1);
  return Math.sqrt(variance)
};
goog.math.isInt = function(num) {
  return isFinite(num) && num % 1 == 0
};
goog.math.isFiniteNumber = function(num) {
  return isFinite(num) && !isNaN(num)
};
goog.provide("goog.color");
goog.require("goog.color.names");
goog.require("goog.math");
goog.color.parse = function(str) {
  var result = {};
  str = String(str);
  var maybeHex = goog.color.prependPoundIfNecessary_(str);
  if(goog.color.isValidHexColor_(maybeHex)) {
    result.hex = goog.color.normalizeHex(maybeHex);
    result.type = "hex";
    return result
  }else {
    var rgb = goog.color.isValidRgbColor_(str);
    if(rgb.length) {
      result.hex = goog.color.rgbArrayToHex(rgb);
      result.type = "rgb";
      return result
    }else {
      if(goog.color.names) {
        var hex = goog.color.names[str.toLowerCase()];
        if(hex) {
          result.hex = hex;
          result.type = "named";
          return result
        }
      }
    }
  }
  throw Error(str + " is not a valid color string");
};
goog.color.parseRgb = function(str) {
  var rgb = goog.color.isValidRgbColor_(str);
  if(!rgb.length) {
    throw Error(str + " is not a valid RGB color");
  }
  return rgb
};
goog.color.hexToRgbStyle = function(hexColor) {
  return goog.color.rgbStyle_(goog.color.hexToRgb(hexColor))
};
goog.color.hexTripletRe_ = /#(.)(.)(.)/;
goog.color.normalizeHex = function(hexColor) {
  if(!goog.color.isValidHexColor_(hexColor)) {
    throw Error("'" + hexColor + "' is not a valid hex color");
  }
  if(hexColor.length == 4) {
    hexColor = hexColor.replace(goog.color.hexTripletRe_, "#$1$1$2$2$3$3")
  }
  return hexColor.toLowerCase()
};
goog.color.hexToRgb = function(hexColor) {
  hexColor = goog.color.normalizeHex(hexColor);
  var r = parseInt(hexColor.substr(1, 2), 16);
  var g = parseInt(hexColor.substr(3, 2), 16);
  var b = parseInt(hexColor.substr(5, 2), 16);
  return[r, g, b]
};
goog.color.rgbToHex = function(r, g, b) {
  r = Number(r);
  g = Number(g);
  b = Number(b);
  if(isNaN(r) || r < 0 || r > 255 || isNaN(g) || g < 0 || g > 255 || isNaN(b) || b < 0 || b > 255) {
    throw Error('"(' + r + "," + g + "," + b + '") is not a valid RGB color');
  }
  var hexR = goog.color.prependZeroIfNecessary_(r.toString(16));
  var hexG = goog.color.prependZeroIfNecessary_(g.toString(16));
  var hexB = goog.color.prependZeroIfNecessary_(b.toString(16));
  return"#" + hexR + hexG + hexB
};
goog.color.rgbArrayToHex = function(rgb) {
  return goog.color.rgbToHex(rgb[0], rgb[1], rgb[2])
};
goog.color.rgbToHsl = function(r, g, b) {
  var normR = r / 255;
  var normG = g / 255;
  var normB = b / 255;
  var max = Math.max(normR, normG, normB);
  var min = Math.min(normR, normG, normB);
  var h = 0;
  var s = 0;
  var l = 0.5 * (max + min);
  if(max != min) {
    if(max == normR) {
      h = 60 * (normG - normB) / (max - min)
    }else {
      if(max == normG) {
        h = 60 * (normB - normR) / (max - min) + 120
      }else {
        if(max == normB) {
          h = 60 * (normR - normG) / (max - min) + 240
        }
      }
    }
    if(0 < l && l <= 0.5) {
      s = (max - min) / (2 * l)
    }else {
      s = (max - min) / (2 - 2 * l)
    }
  }
  return[Math.round(h + 360) % 360, s, l]
};
goog.color.rgbArrayToHsl = function(rgb) {
  return goog.color.rgbToHsl(rgb[0], rgb[1], rgb[2])
};
goog.color.hueToRgb_ = function(v1, v2, vH) {
  if(vH < 0) {
    vH += 1
  }else {
    if(vH > 1) {
      vH -= 1
    }
  }
  if(6 * vH < 1) {
    return v1 + (v2 - v1) * 6 * vH
  }else {
    if(2 * vH < 1) {
      return v2
    }else {
      if(3 * vH < 2) {
        return v1 + (v2 - v1) * (2 / 3 - vH) * 6
      }
    }
  }
  return v1
};
goog.color.hslToRgb = function(h, s, l) {
  var r = 0;
  var g = 0;
  var b = 0;
  var normH = h / 360;
  if(s == 0) {
    r = g = b = l * 255
  }else {
    var temp1 = 0;
    var temp2 = 0;
    if(l < 0.5) {
      temp2 = l * (1 + s)
    }else {
      temp2 = l + s - s * l
    }
    temp1 = 2 * l - temp2;
    r = 255 * goog.color.hueToRgb_(temp1, temp2, normH + 1 / 3);
    g = 255 * goog.color.hueToRgb_(temp1, temp2, normH);
    b = 255 * goog.color.hueToRgb_(temp1, temp2, normH - 1 / 3)
  }
  return[Math.round(r), Math.round(g), Math.round(b)]
};
goog.color.hslArrayToRgb = function(hsl) {
  return goog.color.hslToRgb(hsl[0], hsl[1], hsl[2])
};
goog.color.validHexColorRe_ = /^#(?:[0-9a-f]{3}){1,2}$/i;
goog.color.isValidHexColor_ = function(str) {
  return goog.color.validHexColorRe_.test(str)
};
goog.color.normalizedHexColorRe_ = /^#[0-9a-f]{6}$/;
goog.color.isNormalizedHexColor_ = function(str) {
  return goog.color.normalizedHexColorRe_.test(str)
};
goog.color.rgbColorRe_ = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
goog.color.isValidRgbColor_ = function(str) {
  var regExpResultArray = str.match(goog.color.rgbColorRe_);
  if(regExpResultArray) {
    var r = Number(regExpResultArray[1]);
    var g = Number(regExpResultArray[2]);
    var b = Number(regExpResultArray[3]);
    if(r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      return[r, g, b]
    }
  }
  return[]
};
goog.color.prependZeroIfNecessary_ = function(hex) {
  return hex.length == 1 ? "0" + hex : hex
};
goog.color.prependPoundIfNecessary_ = function(str) {
  return str.charAt(0) == "#" ? str : "#" + str
};
goog.color.rgbStyle_ = function(rgb) {
  return"rgb(" + rgb.join(",") + ")"
};
goog.color.hsvToRgb = function(h, s, brightness) {
  var red = 0;
  var green = 0;
  var blue = 0;
  if(s == 0) {
    red = brightness;
    green = brightness;
    blue = brightness
  }else {
    var sextant = Math.floor(h / 60);
    var remainder = h / 60 - sextant;
    var val1 = brightness * (1 - s);
    var val2 = brightness * (1 - s * remainder);
    var val3 = brightness * (1 - s * (1 - remainder));
    switch(sextant) {
      case 1:
        red = val2;
        green = brightness;
        blue = val1;
        break;
      case 2:
        red = val1;
        green = brightness;
        blue = val3;
        break;
      case 3:
        red = val1;
        green = val2;
        blue = brightness;
        break;
      case 4:
        red = val3;
        green = val1;
        blue = brightness;
        break;
      case 5:
        red = brightness;
        green = val1;
        blue = val2;
        break;
      case 6:
      ;
      case 0:
        red = brightness;
        green = val3;
        blue = val1;
        break
    }
  }
  return[Math.floor(red), Math.floor(green), Math.floor(blue)]
};
goog.color.rgbToHsv = function(red, green, blue) {
  var max = Math.max(Math.max(red, green), blue);
  var min = Math.min(Math.min(red, green), blue);
  var hue;
  var saturation;
  var value = max;
  if(min == max) {
    hue = 0;
    saturation = 0
  }else {
    var delta = max - min;
    saturation = delta / max;
    if(red == max) {
      hue = (green - blue) / delta
    }else {
      if(green == max) {
        hue = 2 + (blue - red) / delta
      }else {
        hue = 4 + (red - green) / delta
      }
    }
    hue *= 60;
    if(hue < 0) {
      hue += 360
    }
    if(hue > 360) {
      hue -= 360
    }
  }
  return[hue, saturation, value]
};
goog.color.rgbArrayToHsv = function(rgb) {
  return goog.color.rgbToHsv(rgb[0], rgb[1], rgb[2])
};
goog.color.hsvArrayToRgb = function(hsv) {
  return goog.color.hsvToRgb(hsv[0], hsv[1], hsv[2])
};
goog.color.hexToHsl = function(hex) {
  var rgb = goog.color.hexToRgb(hex);
  return goog.color.rgbToHsl(rgb[0], rgb[1], rgb[2])
};
goog.color.hslToHex = function(h, s, l) {
  return goog.color.rgbArrayToHex(goog.color.hslToRgb(h, s, l))
};
goog.color.hslArrayToHex = function(hsl) {
  return goog.color.rgbArrayToHex(goog.color.hslToRgb(hsl[0], hsl[1], hsl[2]))
};
goog.color.hexToHsv = function(hex) {
  return goog.color.rgbArrayToHsv(goog.color.hexToRgb(hex))
};
goog.color.hsvToHex = function(h, s, v) {
  return goog.color.rgbArrayToHex(goog.color.hsvToRgb(h, s, v))
};
goog.color.hsvArrayToHex = function(hsv) {
  return goog.color.hsvToHex(hsv[0], hsv[1], hsv[2])
};
goog.color.hslDistance = function(hsl1, hsl2) {
  var sl1, sl2;
  if(hsl1[2] <= 0.5) {
    sl1 = hsl1[1] * hsl1[2]
  }else {
    sl1 = hsl1[1] * (1 - hsl1[2])
  }
  if(hsl2[2] <= 0.5) {
    sl2 = hsl2[1] * hsl2[2]
  }else {
    sl2 = hsl2[1] * (1 - hsl2[2])
  }
  var h1 = hsl1[0] / 360;
  var h2 = hsl2[0] / 360;
  var dh = (h1 - h2) * 2 * Math.PI;
  return(hsl1[2] - hsl2[2]) * (hsl1[2] - hsl2[2]) + sl1 * sl1 + sl2 * sl2 - 2 * sl1 * sl2 * Math.cos(dh)
};
goog.color.blend = function(rgb1, rgb2, factor) {
  factor = goog.math.clamp(factor, 0, 1);
  return[Math.round(factor * rgb1[0] + (1 - factor) * rgb2[0]), Math.round(factor * rgb1[1] + (1 - factor) * rgb2[1]), Math.round(factor * rgb1[2] + (1 - factor) * rgb2[2])]
};
goog.color.darken = function(rgb, factor) {
  var black = [0, 0, 0];
  return goog.color.blend(black, rgb, factor)
};
goog.color.lighten = function(rgb, factor) {
  var white = [255, 255, 255];
  return goog.color.blend(white, rgb, factor)
};
goog.color.highContrast = function(prime, suggestions) {
  var suggestionsWithDiff = [];
  for(var i = 0;i < suggestions.length;i++) {
    suggestionsWithDiff.push({color:suggestions[i], diff:goog.color.yiqBrightnessDiff_(suggestions[i], prime) + goog.color.colorDiff_(suggestions[i], prime)})
  }
  suggestionsWithDiff.sort(function(a, b) {
    return b.diff - a.diff
  });
  return suggestionsWithDiff[0].color
};
goog.color.yiqBrightness_ = function(rgb) {
  return Math.round((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1E3)
};
goog.color.yiqBrightnessDiff_ = function(rgb1, rgb2) {
  return Math.abs(goog.color.yiqBrightness_(rgb1) - goog.color.yiqBrightness_(rgb2))
};
goog.color.colorDiff_ = function(rgb1, rgb2) {
  return Math.abs(rgb1[0] - rgb2[0]) + Math.abs(rgb1[1] - rgb2[1]) + Math.abs(rgb1[2] - rgb2[2])
};
goog.provide("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.math.Box = function(top, right, bottom, left) {
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left
};
goog.math.Box.boundingBox = function(var_args) {
  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);
  for(var i = 1;i < arguments.length;i++) {
    var coord = arguments[i];
    box.top = Math.min(box.top, coord.y);
    box.right = Math.max(box.right, coord.x);
    box.bottom = Math.max(box.bottom, coord.y);
    box.left = Math.min(box.left, coord.x)
  }
  return box
};
goog.math.Box.prototype.clone = function() {
  return new goog.math.Box(this.top, this.right, this.bottom, this.left)
};
if(goog.DEBUG) {
  goog.math.Box.prototype.toString = function() {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  }
}
goog.math.Box.prototype.contains = function(other) {
  return goog.math.Box.contains(this, other)
};
goog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {
  if(goog.isObject(top)) {
    this.top -= top.top;
    this.right += top.right;
    this.bottom += top.bottom;
    this.left -= top.left
  }else {
    this.top -= top;
    this.right += opt_right;
    this.bottom += opt_bottom;
    this.left -= opt_left
  }
  return this
};
goog.math.Box.prototype.expandToInclude = function(box) {
  this.left = Math.min(this.left, box.left);
  this.top = Math.min(this.top, box.top);
  this.right = Math.max(this.right, box.right);
  this.bottom = Math.max(this.bottom, box.bottom)
};
goog.math.Box.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left
};
goog.math.Box.contains = function(box, other) {
  if(!box || !other) {
    return false
  }
  if(other instanceof goog.math.Box) {
    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom
  }
  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom
};
goog.math.Box.distance = function(box, coord) {
  if(coord.x >= box.left && coord.x <= box.right) {
    if(coord.y >= box.top && coord.y <= box.bottom) {
      return 0
    }
    return coord.y < box.top ? box.top - coord.y : coord.y - box.bottom
  }
  if(coord.y >= box.top && coord.y <= box.bottom) {
    return coord.x < box.left ? box.left - coord.x : coord.x - box.right
  }
  return goog.math.Coordinate.distance(coord, new goog.math.Coordinate(coord.x < box.left ? box.left : box.right, coord.y < box.top ? box.top : box.bottom))
};
goog.math.Box.intersects = function(a, b) {
  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
};
goog.math.Box.intersectsWithPadding = function(a, b, padding) {
  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding
};
goog.provide("goog.math.Rect");
goog.require("goog.math.Box");
goog.require("goog.math.Size");
goog.math.Rect = function(x, y, w, h) {
  this.left = x;
  this.top = y;
  this.width = w;
  this.height = h
};
goog.math.Rect.prototype.clone = function() {
  return new goog.math.Rect(this.left, this.top, this.width, this.height)
};
goog.math.Rect.prototype.toBox = function() {
  var right = this.left + this.width;
  var bottom = this.top + this.height;
  return new goog.math.Box(this.top, right, bottom, this.left)
};
goog.math.Rect.createFromBox = function(box) {
  return new goog.math.Rect(box.left, box.top, box.right - box.left, box.bottom - box.top)
};
if(goog.DEBUG) {
  goog.math.Rect.prototype.toString = function() {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  }
}
goog.math.Rect.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height
};
goog.math.Rect.prototype.intersection = function(rect) {
  var x0 = Math.max(this.left, rect.left);
  var x1 = Math.min(this.left + this.width, rect.left + rect.width);
  if(x0 <= x1) {
    var y0 = Math.max(this.top, rect.top);
    var y1 = Math.min(this.top + this.height, rect.top + rect.height);
    if(y0 <= y1) {
      this.left = x0;
      this.top = y0;
      this.width = x1 - x0;
      this.height = y1 - y0;
      return true
    }
  }
  return false
};
goog.math.Rect.intersection = function(a, b) {
  var x0 = Math.max(a.left, b.left);
  var x1 = Math.min(a.left + a.width, b.left + b.width);
  if(x0 <= x1) {
    var y0 = Math.max(a.top, b.top);
    var y1 = Math.min(a.top + a.height, b.top + b.height);
    if(y0 <= y1) {
      return new goog.math.Rect(x0, y0, x1 - x0, y1 - y0)
    }
  }
  return null
};
goog.math.Rect.intersects = function(a, b) {
  return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
};
goog.math.Rect.prototype.intersects = function(rect) {
  return goog.math.Rect.intersects(this, rect)
};
goog.math.Rect.difference = function(a, b) {
  var intersection = goog.math.Rect.intersection(a, b);
  if(!intersection || !intersection.height || !intersection.width) {
    return[a.clone()]
  }
  var result = [];
  var top = a.top;
  var height = a.height;
  var ar = a.left + a.width;
  var ab = a.top + a.height;
  var br = b.left + b.width;
  var bb = b.top + b.height;
  if(b.top > a.top) {
    result.push(new goog.math.Rect(a.left, a.top, a.width, b.top - a.top));
    top = b.top;
    height -= b.top - a.top
  }
  if(bb < ab) {
    result.push(new goog.math.Rect(a.left, bb, a.width, ab - bb));
    height = bb - top
  }
  if(b.left > a.left) {
    result.push(new goog.math.Rect(a.left, top, b.left - a.left, height))
  }
  if(br < ar) {
    result.push(new goog.math.Rect(br, top, ar - br, height))
  }
  return result
};
goog.math.Rect.prototype.difference = function(rect) {
  return goog.math.Rect.difference(this, rect)
};
goog.math.Rect.prototype.boundingRect = function(rect) {
  var right = Math.max(this.left + this.width, rect.left + rect.width);
  var bottom = Math.max(this.top + this.height, rect.top + rect.height);
  this.left = Math.min(this.left, rect.left);
  this.top = Math.min(this.top, rect.top);
  this.width = right - this.left;
  this.height = bottom - this.top
};
goog.math.Rect.boundingRect = function(a, b) {
  if(!a || !b) {
    return null
  }
  var clone = a.clone();
  clone.boundingRect(b);
  return clone
};
goog.math.Rect.prototype.contains = function(another) {
  if(another instanceof goog.math.Rect) {
    return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height
  }else {
    return another.x >= this.left && another.x <= this.left + this.width && another.y >= this.top && another.y <= this.top + this.height
  }
};
goog.math.Rect.prototype.getSize = function() {
  return new goog.math.Size(this.width, this.height)
};
goog.provide("goog.style");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.style.setStyle = function(element, style, opt_value) {
  if(goog.isString(style)) {
    goog.style.setStyle_(element, opt_value, style)
  }else {
    goog.object.forEach(style, goog.partial(goog.style.setStyle_, element))
  }
};
goog.style.setStyle_ = function(element, value, style) {
  element.style[goog.string.toCamelCase(style)] = value
};
goog.style.getStyle = function(element, property) {
  return element.style[goog.string.toCamelCase(property)] || ""
};
goog.style.getComputedStyle = function(element, property) {
  var doc = goog.dom.getOwnerDocument(element);
  if(doc.defaultView && doc.defaultView.getComputedStyle) {
    var styles = doc.defaultView.getComputedStyle(element, null);
    if(styles) {
      return styles[property] || styles.getPropertyValue(property)
    }
  }
  return""
};
goog.style.getCascadedStyle = function(element, style) {
  return element.currentStyle ? element.currentStyle[style] : null
};
goog.style.getStyle_ = function(element, style) {
  return goog.style.getComputedStyle(element, style) || goog.style.getCascadedStyle(element, style) || element.style[style]
};
goog.style.getComputedPosition = function(element) {
  return goog.style.getStyle_(element, "position")
};
goog.style.getBackgroundColor = function(element) {
  return goog.style.getStyle_(element, "backgroundColor")
};
goog.style.getComputedOverflowX = function(element) {
  return goog.style.getStyle_(element, "overflowX")
};
goog.style.getComputedOverflowY = function(element) {
  return goog.style.getStyle_(element, "overflowY")
};
goog.style.getComputedZIndex = function(element) {
  return goog.style.getStyle_(element, "zIndex")
};
goog.style.getComputedTextAlign = function(element) {
  return goog.style.getStyle_(element, "textAlign")
};
goog.style.getComputedCursor = function(element) {
  return goog.style.getStyle_(element, "cursor")
};
goog.style.setPosition = function(el, arg1, opt_arg2) {
  var x, y;
  var buggyGeckoSubPixelPos = goog.userAgent.GECKO && (goog.userAgent.MAC || goog.userAgent.X11) && goog.userAgent.isVersion("1.9");
  if(arg1 instanceof goog.math.Coordinate) {
    x = arg1.x;
    y = arg1.y
  }else {
    x = arg1;
    y = opt_arg2
  }
  el.style.left = goog.style.getPixelStyleValue_(x, buggyGeckoSubPixelPos);
  el.style.top = goog.style.getPixelStyleValue_(y, buggyGeckoSubPixelPos)
};
goog.style.getPosition = function(element) {
  return new goog.math.Coordinate(element.offsetLeft, element.offsetTop)
};
goog.style.getClientViewportElement = function(opt_node) {
  var doc;
  if(opt_node) {
    if(opt_node.nodeType == goog.dom.NodeType.DOCUMENT) {
      doc = opt_node
    }else {
      doc = goog.dom.getOwnerDocument(opt_node)
    }
  }else {
    doc = goog.dom.getDocument()
  }
  if(goog.userAgent.IE && !goog.userAgent.isVersion(9) && !goog.dom.getDomHelper(doc).isCss1CompatMode()) {
    return doc.body
  }
  return doc.documentElement
};
goog.style.getBoundingClientRect_ = function(el) {
  var rect = el.getBoundingClientRect();
  if(goog.userAgent.IE) {
    var doc = el.ownerDocument;
    rect.left -= doc.documentElement.clientLeft + doc.body.clientLeft;
    rect.top -= doc.documentElement.clientTop + doc.body.clientTop
  }
  return rect
};
goog.style.getOffsetParent = function(element) {
  if(goog.userAgent.IE) {
    return element.offsetParent
  }
  var doc = goog.dom.getOwnerDocument(element);
  var positionStyle = goog.style.getStyle_(element, "position");
  var skipStatic = positionStyle == "fixed" || positionStyle == "absolute";
  for(var parent = element.parentNode;parent && parent != doc;parent = parent.parentNode) {
    positionStyle = goog.style.getStyle_(parent, "position");
    skipStatic = skipStatic && positionStyle == "static" && parent != doc.documentElement && parent != doc.body;
    if(!skipStatic && (parent.scrollWidth > parent.clientWidth || parent.scrollHeight > parent.clientHeight || positionStyle == "fixed" || positionStyle == "absolute")) {
      return parent
    }
  }
  return null
};
goog.style.getVisibleRectForElement = function(element) {
  var visibleRect = new goog.math.Box(0, Infinity, Infinity, 0);
  var dom = goog.dom.getDomHelper(element);
  var body = dom.getDocument().body;
  var scrollEl = dom.getDocumentScrollElement();
  var inContainer;
  for(var el = element;el = goog.style.getOffsetParent(el);) {
    if((!goog.userAgent.IE || el.clientWidth != 0) && (!goog.userAgent.WEBKIT || el.clientHeight != 0 || el != body) && (el.scrollWidth != el.clientWidth || el.scrollHeight != el.clientHeight) && goog.style.getStyle_(el, "overflow") != "visible") {
      var pos = goog.style.getPageOffset(el);
      var client = goog.style.getClientLeftTop(el);
      pos.x += client.x;
      pos.y += client.y;
      visibleRect.top = Math.max(visibleRect.top, pos.y);
      visibleRect.right = Math.min(visibleRect.right, pos.x + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.y + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.x);
      inContainer = inContainer || el != scrollEl
    }
  }
  var scrollX = scrollEl.scrollLeft, scrollY = scrollEl.scrollTop;
  if(goog.userAgent.WEBKIT) {
    visibleRect.left += scrollX;
    visibleRect.top += scrollY
  }else {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY)
  }
  if(!inContainer || goog.userAgent.WEBKIT) {
    visibleRect.right += scrollX;
    visibleRect.bottom += scrollY
  }
  var winSize = dom.getViewportSize();
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null
};
goog.style.scrollIntoContainerView = function(element, container, opt_center) {
  var elementPos = goog.style.getPageOffset(element);
  var containerPos = goog.style.getPageOffset(container);
  var containerBorder = goog.style.getBorderBox(container);
  var relX = elementPos.x - containerPos.x - containerBorder.left;
  var relY = elementPos.y - containerPos.y - containerBorder.top;
  var spaceX = container.clientWidth - element.offsetWidth;
  var spaceY = container.clientHeight - element.offsetHeight;
  if(opt_center) {
    container.scrollLeft += relX - spaceX / 2;
    container.scrollTop += relY - spaceY / 2
  }else {
    container.scrollLeft += Math.min(relX, Math.max(relX - spaceX, 0));
    container.scrollTop += Math.min(relY, Math.max(relY - spaceY, 0))
  }
};
goog.style.getClientLeftTop = function(el) {
  if(goog.userAgent.GECKO && !goog.userAgent.isVersion("1.9")) {
    var left = parseFloat(goog.style.getComputedStyle(el, "borderLeftWidth"));
    if(goog.style.isRightToLeft(el)) {
      var scrollbarWidth = el.offsetWidth - el.clientWidth - left - parseFloat(goog.style.getComputedStyle(el, "borderRightWidth"));
      left += scrollbarWidth
    }
    return new goog.math.Coordinate(left, parseFloat(goog.style.getComputedStyle(el, "borderTopWidth")))
  }
  return new goog.math.Coordinate(el.clientLeft, el.clientTop)
};
goog.style.getPageOffset = function(el) {
  var box, doc = goog.dom.getOwnerDocument(el);
  var positionStyle = goog.style.getStyle_(el, "position");
  var BUGGY_GECKO_BOX_OBJECT = goog.userAgent.GECKO && doc.getBoxObjectFor && !el.getBoundingClientRect && positionStyle == "absolute" && (box = doc.getBoxObjectFor(el)) && (box.screenX < 0 || box.screenY < 0);
  var pos = new goog.math.Coordinate(0, 0);
  var viewportElement = goog.style.getClientViewportElement(doc);
  if(el == viewportElement) {
    return pos
  }
  if(el.getBoundingClientRect) {
    box = goog.style.getBoundingClientRect_(el);
    var scrollCoord = goog.dom.getDomHelper(doc).getDocumentScroll();
    pos.x = box.left + scrollCoord.x;
    pos.y = box.top + scrollCoord.y
  }else {
    if(doc.getBoxObjectFor && !BUGGY_GECKO_BOX_OBJECT) {
      box = doc.getBoxObjectFor(el);
      var vpBox = doc.getBoxObjectFor(viewportElement);
      pos.x = box.screenX - vpBox.screenX;
      pos.y = box.screenY - vpBox.screenY
    }else {
      var parent = el;
      do {
        pos.x += parent.offsetLeft;
        pos.y += parent.offsetTop;
        if(parent != el) {
          pos.x += parent.clientLeft || 0;
          pos.y += parent.clientTop || 0
        }
        if(goog.userAgent.WEBKIT && goog.style.getComputedPosition(parent) == "fixed") {
          pos.x += doc.body.scrollLeft;
          pos.y += doc.body.scrollTop;
          break
        }
        parent = parent.offsetParent
      }while(parent && parent != el);
      if(goog.userAgent.OPERA || goog.userAgent.WEBKIT && positionStyle == "absolute") {
        pos.y -= doc.body.offsetTop
      }
      for(parent = el;(parent = goog.style.getOffsetParent(parent)) && parent != doc.body && parent != viewportElement;) {
        pos.x -= parent.scrollLeft;
        if(!goog.userAgent.OPERA || parent.tagName != "TR") {
          pos.y -= parent.scrollTop
        }
      }
    }
  }
  return pos
};
goog.style.getPageOffsetLeft = function(el) {
  return goog.style.getPageOffset(el).x
};
goog.style.getPageOffsetTop = function(el) {
  return goog.style.getPageOffset(el).y
};
goog.style.getFramedPageOffset = function(el, relativeWin) {
  var position = new goog.math.Coordinate(0, 0);
  var currentWin = goog.dom.getWindow(goog.dom.getOwnerDocument(el));
  var currentEl = el;
  do {
    var offset = currentWin == relativeWin ? goog.style.getPageOffset(currentEl) : goog.style.getClientPosition(currentEl);
    position.x += offset.x;
    position.y += offset.y
  }while(currentWin && currentWin != relativeWin && (currentEl = currentWin.frameElement) && (currentWin = currentWin.parent));
  return position
};
goog.style.translateRectForAnotherFrame = function(rect, origBase, newBase) {
  if(origBase.getDocument() != newBase.getDocument()) {
    var body = origBase.getDocument().body;
    var pos = goog.style.getFramedPageOffset(body, newBase.getWindow());
    pos = goog.math.Coordinate.difference(pos, goog.style.getPageOffset(body));
    if(goog.userAgent.IE && !origBase.isCss1CompatMode()) {
      pos = goog.math.Coordinate.difference(pos, origBase.getDocumentScroll())
    }
    rect.left += pos.x;
    rect.top += pos.y
  }
};
goog.style.getRelativePosition = function(a, b) {
  var ap = goog.style.getClientPosition(a);
  var bp = goog.style.getClientPosition(b);
  return new goog.math.Coordinate(ap.x - bp.x, ap.y - bp.y)
};
goog.style.getClientPosition = function(el) {
  var pos = new goog.math.Coordinate;
  if(el.nodeType == goog.dom.NodeType.ELEMENT) {
    if(el.getBoundingClientRect) {
      var box = goog.style.getBoundingClientRect_(el);
      pos.x = box.left;
      pos.y = box.top
    }else {
      var scrollCoord = goog.dom.getDomHelper(el).getDocumentScroll();
      var pageCoord = goog.style.getPageOffset(el);
      pos.x = pageCoord.x - scrollCoord.x;
      pos.y = pageCoord.y - scrollCoord.y
    }
  }else {
    var isAbstractedEvent = goog.isFunction(el.getBrowserEvent);
    var targetEvent = el;
    if(el.targetTouches) {
      targetEvent = el.targetTouches[0]
    }else {
      if(isAbstractedEvent && el.getBrowserEvent().targetTouches) {
        targetEvent = el.getBrowserEvent().targetTouches[0]
      }
    }
    pos.x = targetEvent.clientX;
    pos.y = targetEvent.clientY
  }
  return pos
};
goog.style.setPageOffset = function(el, x, opt_y) {
  var cur = goog.style.getPageOffset(el);
  if(x instanceof goog.math.Coordinate) {
    opt_y = x.y;
    x = x.x
  }
  var dx = x - cur.x;
  var dy = opt_y - cur.y;
  goog.style.setPosition(el, el.offsetLeft + dx, el.offsetTop + dy)
};
goog.style.setSize = function(element, w, opt_h) {
  var h;
  if(w instanceof goog.math.Size) {
    h = w.height;
    w = w.width
  }else {
    if(opt_h == undefined) {
      throw Error("missing height argument");
    }
    h = opt_h
  }
  goog.style.setWidth(element, w);
  goog.style.setHeight(element, h)
};
goog.style.getPixelStyleValue_ = function(value, round) {
  if(typeof value == "number") {
    value = (round ? Math.round(value) : value) + "px"
  }
  return value
};
goog.style.setHeight = function(element, height) {
  element.style.height = goog.style.getPixelStyleValue_(height, true)
};
goog.style.setWidth = function(element, width) {
  element.style.width = goog.style.getPixelStyleValue_(width, true)
};
goog.style.getSize = function(element) {
  if(goog.style.getStyle_(element, "display") != "none") {
    return new goog.math.Size(element.offsetWidth, element.offsetHeight)
  }
  var style = element.style;
  var originalDisplay = style.display;
  var originalVisibility = style.visibility;
  var originalPosition = style.position;
  style.visibility = "hidden";
  style.position = "absolute";
  style.display = "inline";
  var originalWidth = element.offsetWidth;
  var originalHeight = element.offsetHeight;
  style.display = originalDisplay;
  style.position = originalPosition;
  style.visibility = originalVisibility;
  return new goog.math.Size(originalWidth, originalHeight)
};
goog.style.getBounds = function(element) {
  var o = goog.style.getPageOffset(element);
  var s = goog.style.getSize(element);
  return new goog.math.Rect(o.x, o.y, s.width, s.height)
};
goog.style.toCamelCase = function(selector) {
  return goog.string.toCamelCase(String(selector))
};
goog.style.toSelectorCase = function(selector) {
  return goog.string.toSelectorCase(selector)
};
goog.style.getOpacity = function(el) {
  var style = el.style;
  var result = "";
  if("opacity" in style) {
    result = style.opacity
  }else {
    if("MozOpacity" in style) {
      result = style.MozOpacity
    }else {
      if("filter" in style) {
        var match = style.filter.match(/alpha\(opacity=([\d.]+)\)/);
        if(match) {
          result = String(match[1] / 100)
        }
      }
    }
  }
  return result == "" ? result : Number(result)
};
goog.style.setOpacity = function(el, alpha) {
  var style = el.style;
  if("opacity" in style) {
    style.opacity = alpha
  }else {
    if("MozOpacity" in style) {
      style.MozOpacity = alpha
    }else {
      if("filter" in style) {
        if(alpha === "") {
          style.filter = ""
        }else {
          style.filter = "alpha(opacity=" + alpha * 100 + ")"
        }
      }
    }
  }
};
goog.style.setTransparentBackgroundImage = function(el, src) {
  var style = el.style;
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(" + 'src="' + src + '", sizingMethod="crop")'
  }else {
    style.backgroundImage = "url(" + src + ")";
    style.backgroundPosition = "top left";
    style.backgroundRepeat = "no-repeat"
  }
};
goog.style.clearTransparentBackgroundImage = function(el) {
  var style = el.style;
  if("filter" in style) {
    style.filter = ""
  }else {
    style.backgroundImage = "none"
  }
};
goog.style.showElement = function(el, display) {
  el.style.display = display ? "" : "none"
};
goog.style.isElementShown = function(el) {
  return el.style.display != "none"
};
goog.style.installStyles = function(stylesString, opt_node) {
  var dh = goog.dom.getDomHelper(opt_node);
  var styleSheet = null;
  if(goog.userAgent.IE) {
    styleSheet = dh.getDocument().createStyleSheet();
    goog.style.setStyles(styleSheet, stylesString)
  }else {
    var head = dh.getElementsByTagNameAndClass("head")[0];
    if(!head) {
      var body = dh.getElementsByTagNameAndClass("body")[0];
      head = dh.createDom("head");
      body.parentNode.insertBefore(head, body)
    }
    styleSheet = dh.createDom("style");
    goog.style.setStyles(styleSheet, stylesString);
    dh.appendChild(head, styleSheet)
  }
  return styleSheet
};
goog.style.uninstallStyles = function(styleSheet) {
  var node = styleSheet.ownerNode || styleSheet.owningElement || styleSheet;
  goog.dom.removeNode(node)
};
goog.style.setStyles = function(element, stylesString) {
  if(goog.userAgent.IE) {
    element.cssText = stylesString
  }else {
    var propToSet = goog.userAgent.WEBKIT ? "innerText" : "innerHTML";
    element[propToSet] = stylesString
  }
};
goog.style.setPreWrap = function(el) {
  var style = el.style;
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.whiteSpace = "pre";
    style.wordWrap = "break-word"
  }else {
    if(goog.userAgent.GECKO) {
      style.whiteSpace = "-moz-pre-wrap"
    }else {
      style.whiteSpace = "pre-wrap"
    }
  }
};
goog.style.setInlineBlock = function(el) {
  var style = el.style;
  style.position = "relative";
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.zoom = "1";
    style.display = "inline"
  }else {
    if(goog.userAgent.GECKO) {
      style.display = goog.userAgent.isVersion("1.9a") ? "inline-block" : "-moz-inline-box"
    }else {
      style.display = "inline-block"
    }
  }
};
goog.style.isRightToLeft = function(el) {
  return"rtl" == goog.style.getStyle_(el, "direction")
};
goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT ? "WebkitUserSelect" : null;
goog.style.isUnselectable = function(el) {
  if(goog.style.unselectableStyle_) {
    return el.style[goog.style.unselectableStyle_].toLowerCase() == "none"
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      return el.getAttribute("unselectable") == "on"
    }
  }
  return false
};
goog.style.setUnselectable = function(el, unselectable, opt_noRecurse) {
  var descendants = !opt_noRecurse ? el.getElementsByTagName("*") : null;
  var name = goog.style.unselectableStyle_;
  if(name) {
    var value = unselectable ? "none" : "";
    el.style[name] = value;
    if(descendants) {
      for(var i = 0, descendant;descendant = descendants[i];i++) {
        descendant.style[name] = value
      }
    }
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      var value = unselectable ? "on" : "";
      el.setAttribute("unselectable", value);
      if(descendants) {
        for(var i = 0, descendant;descendant = descendants[i];i++) {
          descendant.setAttribute("unselectable", value)
        }
      }
    }
  }
};
goog.style.getBorderBoxSize = function(element) {
  return new goog.math.Size(element.offsetWidth, element.offsetHeight)
};
goog.style.setBorderBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if(goog.userAgent.IE && (!isCss1CompatMode || !goog.userAgent.isVersion("8"))) {
    var style = element.style;
    if(isCss1CompatMode) {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right;
      style.pixelHeight = size.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom
    }else {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height
    }
  }else {
    goog.style.setBoxSizingSize_(element, size, "border-box")
  }
};
goog.style.getContentBoxSize = function(element) {
  var doc = goog.dom.getOwnerDocument(element);
  var ieCurrentStyle = goog.userAgent.IE && element.currentStyle;
  if(ieCurrentStyle && goog.dom.getDomHelper(doc).isCss1CompatMode() && ieCurrentStyle.width != "auto" && ieCurrentStyle.height != "auto" && !ieCurrentStyle.boxSizing) {
    var width = goog.style.getIePixelValue_(element, ieCurrentStyle.width, "width", "pixelWidth");
    var height = goog.style.getIePixelValue_(element, ieCurrentStyle.height, "height", "pixelHeight");
    return new goog.math.Size(width, height)
  }else {
    var borderBoxSize = goog.style.getBorderBoxSize(element);
    var paddingBox = goog.style.getPaddingBox(element);
    var borderBox = goog.style.getBorderBox(element);
    return new goog.math.Size(borderBoxSize.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right, borderBoxSize.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom)
  }
};
goog.style.setContentBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if(goog.userAgent.IE && (!isCss1CompatMode || !goog.userAgent.isVersion("8"))) {
    var style = element.style;
    if(isCss1CompatMode) {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height
    }else {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width + borderBox.left + paddingBox.left + paddingBox.right + borderBox.right;
      style.pixelHeight = size.height + borderBox.top + paddingBox.top + paddingBox.bottom + borderBox.bottom
    }
  }else {
    goog.style.setBoxSizingSize_(element, size, "content-box")
  }
};
goog.style.setBoxSizingSize_ = function(element, size, boxSizing) {
  var style = element.style;
  if(goog.userAgent.GECKO) {
    style.MozBoxSizing = boxSizing
  }else {
    if(goog.userAgent.WEBKIT) {
      style.WebkitBoxSizing = boxSizing
    }else {
      style.boxSizing = boxSizing
    }
  }
  style.width = size.width + "px";
  style.height = size.height + "px"
};
goog.style.getIePixelValue_ = function(element, value, name, pixelName) {
  if(/^\d+px?$/.test(value)) {
    return parseInt(value, 10)
  }else {
    var oldStyleValue = element.style[name];
    var oldRuntimeValue = element.runtimeStyle[name];
    element.runtimeStyle[name] = element.currentStyle[name];
    element.style[name] = value;
    var pixelValue = element.style[pixelName];
    element.style[name] = oldStyleValue;
    element.runtimeStyle[name] = oldRuntimeValue;
    return pixelValue
  }
};
goog.style.getIePixelDistance_ = function(element, propName) {
  return goog.style.getIePixelValue_(element, goog.style.getCascadedStyle(element, propName), "left", "pixelLeft")
};
goog.style.getBox_ = function(element, stylePrefix) {
  if(goog.userAgent.IE) {
    var left = goog.style.getIePixelDistance_(element, stylePrefix + "Left");
    var right = goog.style.getIePixelDistance_(element, stylePrefix + "Right");
    var top = goog.style.getIePixelDistance_(element, stylePrefix + "Top");
    var bottom = goog.style.getIePixelDistance_(element, stylePrefix + "Bottom");
    return new goog.math.Box(top, right, bottom, left)
  }else {
    var left = goog.style.getComputedStyle(element, stylePrefix + "Left");
    var right = goog.style.getComputedStyle(element, stylePrefix + "Right");
    var top = goog.style.getComputedStyle(element, stylePrefix + "Top");
    var bottom = goog.style.getComputedStyle(element, stylePrefix + "Bottom");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left))
  }
};
goog.style.getPaddingBox = function(element) {
  return goog.style.getBox_(element, "padding")
};
goog.style.getMarginBox = function(element) {
  return goog.style.getBox_(element, "margin")
};
goog.style.ieBorderWidthKeywords_ = {"thin":2, "medium":4, "thick":6};
goog.style.getIePixelBorder_ = function(element, prop) {
  if(goog.style.getCascadedStyle(element, prop + "Style") == "none") {
    return 0
  }
  var width = goog.style.getCascadedStyle(element, prop + "Width");
  if(width in goog.style.ieBorderWidthKeywords_) {
    return goog.style.ieBorderWidthKeywords_[width]
  }
  return goog.style.getIePixelValue_(element, width, "left", "pixelLeft")
};
goog.style.getBorderBox = function(element) {
  if(goog.userAgent.IE) {
    var left = goog.style.getIePixelBorder_(element, "borderLeft");
    var right = goog.style.getIePixelBorder_(element, "borderRight");
    var top = goog.style.getIePixelBorder_(element, "borderTop");
    var bottom = goog.style.getIePixelBorder_(element, "borderBottom");
    return new goog.math.Box(top, right, bottom, left)
  }else {
    var left = goog.style.getComputedStyle(element, "borderLeftWidth");
    var right = goog.style.getComputedStyle(element, "borderRightWidth");
    var top = goog.style.getComputedStyle(element, "borderTopWidth");
    var bottom = goog.style.getComputedStyle(element, "borderBottomWidth");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left))
  }
};
goog.style.getFontFamily = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  var font = "";
  if(doc.body.createTextRange) {
    var range = doc.body.createTextRange();
    range.moveToElementText(el);
    try {
      font = range.queryCommandValue("FontName")
    }catch(e) {
      font = ""
    }
  }
  if(!font) {
    font = goog.style.getStyle_(el, "fontFamily")
  }
  var fontsArray = font.split(",");
  if(fontsArray.length > 1) {
    font = fontsArray[0]
  }
  return goog.string.stripQuotes(font, "\"'")
};
goog.style.lengthUnitRegex_ = /[^\d]+$/;
goog.style.getLengthUnits = function(value) {
  var units = value.match(goog.style.lengthUnitRegex_);
  return units && units[0] || null
};
goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {"cm":1, "in":1, "mm":1, "pc":1, "pt":1};
goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {"em":1, "ex":1};
goog.style.getFontSize = function(el) {
  var fontSize = goog.style.getStyle_(el, "fontSize");
  var sizeUnits = goog.style.getLengthUnits(fontSize);
  if(fontSize && "px" == sizeUnits) {
    return parseInt(fontSize, 10)
  }
  if(goog.userAgent.IE) {
    if(sizeUnits in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) {
      return goog.style.getIePixelValue_(el, fontSize, "left", "pixelLeft")
    }else {
      if(el.parentNode && el.parentNode.nodeType == goog.dom.NodeType.ELEMENT && sizeUnits in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) {
        var parentElement = el.parentNode;
        var parentSize = goog.style.getStyle_(parentElement, "fontSize");
        return goog.style.getIePixelValue_(parentElement, fontSize == parentSize ? "1em" : fontSize, "left", "pixelLeft")
      }
    }
  }
  var sizeElement = goog.dom.createDom("span", {"style":"visibility:hidden;position:absolute;" + "line-height:0;padding:0;margin:0;border:0;height:1em;"});
  goog.dom.appendChild(el, sizeElement);
  fontSize = sizeElement.offsetHeight;
  goog.dom.removeNode(sizeElement);
  return fontSize
};
goog.style.parseStyleAttribute = function(value) {
  var result = {};
  goog.array.forEach(value.split(/\s*;\s*/), function(pair) {
    var keyValue = pair.split(/\s*:\s*/);
    if(keyValue.length == 2) {
      result[goog.string.toCamelCase(keyValue[0].toLowerCase())] = keyValue[1]
    }
  });
  return result
};
goog.style.toStyleAttribute = function(obj) {
  var buffer = [];
  goog.object.forEach(obj, function(value, key) {
    buffer.push(goog.string.toSelectorCase(key), ":", value, ";")
  });
  return buffer.join("")
};
goog.style.setFloat = function(el, value) {
  el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = value
};
goog.style.getFloat = function(el) {
  return el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
};
goog.style.getScrollbarWidth = function() {
  var mockElement = goog.dom.createElement("div");
  mockElement.style.cssText = "visibility:hidden;overflow:scroll;" + "position:absolute;top:0;width:100px;height:100px";
  goog.dom.appendChild(goog.dom.getDocument().body, mockElement);
  var width = mockElement.offsetWidth - mockElement.clientWidth;
  goog.dom.removeNode(mockElement);
  return width
};
goog.provide("goog.fx.dom");
goog.provide("goog.fx.dom.BgColorTransform");
goog.provide("goog.fx.dom.ColorTransform");
goog.provide("goog.fx.dom.Fade");
goog.provide("goog.fx.dom.FadeIn");
goog.provide("goog.fx.dom.FadeInAndShow");
goog.provide("goog.fx.dom.FadeOut");
goog.provide("goog.fx.dom.FadeOutAndHide");
goog.provide("goog.fx.dom.PredefinedEffect");
goog.provide("goog.fx.dom.Resize");
goog.provide("goog.fx.dom.ResizeHeight");
goog.provide("goog.fx.dom.ResizeWidth");
goog.provide("goog.fx.dom.Scroll");
goog.provide("goog.fx.dom.Slide");
goog.provide("goog.fx.dom.SlideFrom");
goog.provide("goog.fx.dom.Swipe");
goog.require("goog.color");
goog.require("goog.events");
goog.require("goog.fx.Animation");
goog.require("goog.fx.Animation.EventType");
goog.require("goog.style");
goog.fx.dom.PredefinedEffect = function(element, start, end, time, opt_acc) {
  goog.fx.Animation.call(this, start, end, time, opt_acc);
  this.element = element
};
goog.inherits(goog.fx.dom.PredefinedEffect, goog.fx.Animation);
goog.fx.dom.PredefinedEffect.prototype.updateStyle = goog.nullFunction;
goog.fx.dom.PredefinedEffect.prototype.onAnimate = function() {
  this.updateStyle();
  goog.fx.dom.PredefinedEffect.superClass_.onAnimate.call(this)
};
goog.fx.dom.PredefinedEffect.prototype.onEnd = function() {
  this.updateStyle();
  goog.fx.dom.PredefinedEffect.superClass_.onEnd.call(this)
};
goog.fx.dom.PredefinedEffect.prototype.onBegin = function() {
  this.updateStyle();
  goog.fx.dom.PredefinedEffect.superClass_.onBegin.call(this)
};
goog.fx.dom.Slide = function(element, start, end, time, opt_acc) {
  if(start.length != 2 || end.length != 2) {
    throw Error("Start and end points must be 2D");
  }
  goog.fx.dom.PredefinedEffect.apply(this, arguments)
};
goog.inherits(goog.fx.dom.Slide, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Slide.prototype.updateStyle = function() {
  this.element.style.left = Math.round(this.coords[0]) + "px";
  this.element.style.top = Math.round(this.coords[1]) + "px"
};
goog.fx.dom.SlideFrom = function(element, end, time, opt_acc) {
  var start = [element.offsetLeft, element.offsetTop];
  goog.fx.dom.Slide.call(this, element, start, end, time, opt_acc)
};
goog.inherits(goog.fx.dom.SlideFrom, goog.fx.dom.Slide);
goog.fx.dom.SlideFrom.prototype.onBegin = function() {
  this.startPoint = [this.element.offsetLeft, this.element.offsetTop];
  goog.fx.dom.SlideFrom.superClass_.onBegin.call(this)
};
goog.fx.dom.Swipe = function(element, start, end, time, opt_acc) {
  if(start.length != 2 || end.length != 2) {
    throw Error("Start and end points must be 2D");
  }
  goog.fx.dom.PredefinedEffect.apply(this, arguments);
  this.maxWidth_ = Math.max(this.endPoint[0], this.startPoint[0]);
  this.maxHeight_ = Math.max(this.endPoint[1], this.startPoint[1])
};
goog.inherits(goog.fx.dom.Swipe, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Swipe.prototype.updateStyle = function() {
  var x = this.coords[0];
  var y = this.coords[1];
  this.clip_(Math.round(x), Math.round(y), this.maxWidth_, this.maxHeight_);
  this.element.style.width = Math.round(x) + "px";
  this.element.style.marginLeft = Math.round(x) - this.maxWidth_ + "px";
  this.element.style.marginTop = Math.round(y) - this.maxHeight_ + "px"
};
goog.fx.dom.Swipe.prototype.clip_ = function(x, y, w, h) {
  this.element.style.clip = "rect(" + (h - y) + "px " + w + "px " + h + "px " + (w - x) + "px)"
};
goog.fx.dom.Scroll = function(element, start, end, time, opt_acc) {
  if(start.length != 2 || end.length != 2) {
    throw Error("Start and end points must be 2D");
  }
  goog.fx.dom.PredefinedEffect.apply(this, arguments)
};
goog.inherits(goog.fx.dom.Scroll, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Scroll.prototype.updateStyle = function() {
  this.element.scrollLeft = Math.round(this.coords[0]);
  this.element.scrollTop = Math.round(this.coords[1])
};
goog.fx.dom.Resize = function(element, start, end, time, opt_acc) {
  if(start.length != 2 || end.length != 2) {
    throw Error("Start and end points must be 2D");
  }
  goog.fx.dom.PredefinedEffect.apply(this, arguments)
};
goog.inherits(goog.fx.dom.Resize, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Resize.prototype.updateStyle = function() {
  this.element.style.width = Math.round(this.coords[0]) + "px";
  this.element.style.height = Math.round(this.coords[1]) + "px"
};
goog.fx.dom.ResizeWidth = function(element, start, end, time, opt_acc) {
  goog.fx.dom.PredefinedEffect.call(this, element, [start], [end], time, opt_acc)
};
goog.inherits(goog.fx.dom.ResizeWidth, goog.fx.dom.PredefinedEffect);
goog.fx.dom.ResizeWidth.prototype.updateStyle = function() {
  this.element.style.width = Math.round(this.coords[0]) + "px"
};
goog.fx.dom.ResizeHeight = function(element, start, end, time, opt_acc) {
  goog.fx.dom.PredefinedEffect.call(this, element, [start], [end], time, opt_acc)
};
goog.inherits(goog.fx.dom.ResizeHeight, goog.fx.dom.PredefinedEffect);
goog.fx.dom.ResizeHeight.prototype.updateStyle = function() {
  this.element.style.height = Math.round(this.coords[0]) + "px"
};
goog.fx.dom.Fade = function(element, start, end, time, opt_acc) {
  if(goog.isNumber(start)) {
    start = [start]
  }
  if(goog.isNumber(end)) {
    end = [end]
  }
  goog.fx.dom.PredefinedEffect.call(this, element, start, end, time, opt_acc);
  if(start.length != 1 || end.length != 1) {
    throw Error("Start and end points must be 1D");
  }
};
goog.inherits(goog.fx.dom.Fade, goog.fx.dom.PredefinedEffect);
goog.fx.dom.Fade.prototype.updateStyle = function() {
  goog.style.setOpacity(this.element, this.coords[0])
};
goog.fx.dom.Fade.prototype.show = function() {
  this.element.style.display = ""
};
goog.fx.dom.Fade.prototype.hide = function() {
  this.element.style.display = "none"
};
goog.fx.dom.FadeOut = function(element, time, opt_acc) {
  goog.fx.dom.Fade.call(this, element, 1, 0, time, opt_acc)
};
goog.inherits(goog.fx.dom.FadeOut, goog.fx.dom.Fade);
goog.fx.dom.FadeIn = function(element, time, opt_acc) {
  goog.fx.dom.Fade.call(this, element, 0, 1, time, opt_acc)
};
goog.inherits(goog.fx.dom.FadeIn, goog.fx.dom.Fade);
goog.fx.dom.FadeOutAndHide = function(element, time, opt_acc) {
  goog.fx.dom.Fade.call(this, element, 1, 0, time, opt_acc)
};
goog.inherits(goog.fx.dom.FadeOutAndHide, goog.fx.dom.Fade);
goog.fx.dom.FadeOutAndHide.prototype.onBegin = function() {
  this.show();
  goog.fx.dom.FadeOutAndHide.superClass_.onBegin.call(this)
};
goog.fx.dom.FadeOutAndHide.prototype.onEnd = function() {
  this.hide();
  goog.fx.dom.FadeOutAndHide.superClass_.onEnd.call(this)
};
goog.fx.dom.FadeInAndShow = function(element, time, opt_acc) {
  goog.fx.dom.Fade.call(this, element, 0, 1, time, opt_acc)
};
goog.inherits(goog.fx.dom.FadeInAndShow, goog.fx.dom.Fade);
goog.fx.dom.FadeInAndShow.prototype.onBegin = function() {
  this.show();
  goog.fx.dom.FadeInAndShow.superClass_.onBegin.call(this)
};
goog.fx.dom.BgColorTransform = function(element, start, end, time, opt_acc) {
  if(start.length != 3 || end.length != 3) {
    throw Error("Start and end points must be 3D");
  }
  goog.fx.dom.PredefinedEffect.apply(this, arguments)
};
goog.inherits(goog.fx.dom.BgColorTransform, goog.fx.dom.PredefinedEffect);
goog.fx.dom.BgColorTransform.prototype.setColor = function() {
  var coordsAsInts = [];
  for(var i = 0;i < this.coords.length;i++) {
    coordsAsInts[i] = Math.round(this.coords[i])
  }
  var color = "rgb(" + coordsAsInts.join(",") + ")";
  this.element.style.backgroundColor = color
};
goog.fx.dom.BgColorTransform.prototype.updateStyle = function() {
  this.setColor()
};
goog.fx.dom.bgColorFadeIn = function(element, start, time, opt_eventHandler) {
  var initialBgColor = element.style.backgroundColor || "";
  var computedBgColor = goog.style.getBackgroundColor(element);
  var end;
  if(computedBgColor != "transparent" && computedBgColor != "rgba(0, 0, 0, 0)") {
    end = goog.color.hexToRgb(goog.color.parse(computedBgColor).hex)
  }else {
    end = [255, 255, 255]
  }
  var anim = new goog.fx.dom.BgColorTransform(element, start, end, time);
  function setBgColor() {
    element.style.backgroundColor = initialBgColor
  }
  if(opt_eventHandler) {
    opt_eventHandler.listen(anim, goog.fx.Animation.EventType.END, setBgColor)
  }else {
    goog.events.listen(anim, goog.fx.Animation.EventType.END, setBgColor)
  }
  anim.play()
};
goog.fx.dom.ColorTransform = function(element, start, end, time, opt_acc) {
  if(start.length != 3 || end.length != 3) {
    throw Error("Start and end points must be 3D");
  }
  goog.fx.dom.PredefinedEffect.apply(this, arguments)
};
goog.inherits(goog.fx.dom.ColorTransform, goog.fx.dom.PredefinedEffect);
goog.fx.dom.ColorTransform.prototype.updateStyle = function() {
  var coordsAsInts = [];
  for(var i = 0;i < this.coords.length;i++) {
    coordsAsInts[i] = Math.round(this.coords[i])
  }
  var color = "rgb(" + coordsAsInts.join(",") + ")";
  this.element.style.color = color
};
goog.provide("goog.positioning");
goog.provide("goog.positioning.Corner");
goog.provide("goog.positioning.CornerBit");
goog.provide("goog.positioning.Overflow");
goog.provide("goog.positioning.OverflowStatus");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.style");
goog.positioning.Corner = {TOP_LEFT:0, TOP_RIGHT:2, BOTTOM_LEFT:1, BOTTOM_RIGHT:3, TOP_START:4, TOP_END:6, BOTTOM_START:5, BOTTOM_END:7};
goog.positioning.CornerBit = {BOTTOM:1, RIGHT:2, FLIP_RTL:4};
goog.positioning.Overflow = {IGNORE:0, ADJUST_X:1, FAIL_X:2, ADJUST_Y:4, FAIL_Y:8, RESIZE_WIDTH:16, RESIZE_HEIGHT:32};
goog.positioning.OverflowStatus = {NONE:0, ADJUSTED_X:1, ADJUSTED_Y:2, WIDTH_ADJUSTED:4, HEIGHT_ADJUSTED:8, FAILED_LEFT:16, FAILED_RIGHT:32, FAILED_TOP:64, FAILED_BOTTOM:128, FAILED_OUTSIDE_VIEWPORT:256};
goog.positioning.OverflowStatus.FAILED = goog.positioning.OverflowStatus.FAILED_LEFT | goog.positioning.OverflowStatus.FAILED_RIGHT | goog.positioning.OverflowStatus.FAILED_TOP | goog.positioning.OverflowStatus.FAILED_BOTTOM | goog.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT;
goog.positioning.OverflowStatus.FAILED_HORIZONTAL = goog.positioning.OverflowStatus.FAILED_LEFT | goog.positioning.OverflowStatus.FAILED_RIGHT;
goog.positioning.OverflowStatus.FAILED_VERTICAL = goog.positioning.OverflowStatus.FAILED_TOP | goog.positioning.OverflowStatus.FAILED_BOTTOM;
goog.positioning.positionAtAnchor = function(anchorElement, anchorElementCorner, movableElement, movableElementCorner, opt_offset, opt_margin, opt_overflow, opt_preferredSize) {
  var moveableParentTopLeft;
  var parent = movableElement.offsetParent;
  if(parent) {
    var isBody = parent.tagName == goog.dom.TagName.HTML || parent.tagName == goog.dom.TagName.BODY;
    if(!isBody || goog.style.getComputedPosition(parent) != "static") {
      moveableParentTopLeft = goog.style.getPageOffset(parent);
      if(!isBody) {
        moveableParentTopLeft = goog.math.Coordinate.difference(moveableParentTopLeft, new goog.math.Coordinate(parent.scrollLeft, parent.scrollTop))
      }
    }
  }
  var anchorRect = goog.positioning.getVisiblePart_(anchorElement);
  goog.style.translateRectForAnotherFrame(anchorRect, goog.dom.getDomHelper(anchorElement), goog.dom.getDomHelper(movableElement));
  var corner = goog.positioning.getEffectiveCorner(anchorElement, anchorElementCorner);
  var absolutePos = new goog.math.Coordinate(corner & goog.positioning.CornerBit.RIGHT ? anchorRect.left + anchorRect.width : anchorRect.left, corner & goog.positioning.CornerBit.BOTTOM ? anchorRect.top + anchorRect.height : anchorRect.top);
  if(moveableParentTopLeft) {
    absolutePos = goog.math.Coordinate.difference(absolutePos, moveableParentTopLeft)
  }
  if(opt_offset) {
    absolutePos.x += (corner & goog.positioning.CornerBit.RIGHT ? -1 : 1) * opt_offset.x;
    absolutePos.y += (corner & goog.positioning.CornerBit.BOTTOM ? -1 : 1) * opt_offset.y
  }
  var viewport;
  if(opt_overflow) {
    viewport = goog.style.getVisibleRectForElement(movableElement);
    if(viewport && moveableParentTopLeft) {
      viewport.top = Math.max(0, viewport.top - moveableParentTopLeft.y);
      viewport.right -= moveableParentTopLeft.x;
      viewport.bottom -= moveableParentTopLeft.y;
      viewport.left = Math.max(0, viewport.left - moveableParentTopLeft.x)
    }
  }
  return goog.positioning.positionAtCoordinate(absolutePos, movableElement, movableElementCorner, opt_margin, viewport, opt_overflow, opt_preferredSize)
};
goog.positioning.getVisiblePart_ = function(el) {
  var rect = goog.style.getBounds(el);
  var visibleBox = goog.style.getVisibleRectForElement(el);
  if(visibleBox) {
    rect.intersection(goog.math.Rect.createFromBox(visibleBox))
  }
  return rect
};
goog.positioning.positionAtCoordinate = function(absolutePos, movableElement, movableElementCorner, opt_margin, opt_viewport, opt_overflow, opt_preferredSize) {
  absolutePos = absolutePos.clone();
  var status = goog.positioning.OverflowStatus.NONE;
  var corner = goog.positioning.getEffectiveCorner(movableElement, movableElementCorner);
  var elementSize = goog.style.getSize(movableElement);
  var size = opt_preferredSize ? opt_preferredSize.clone() : elementSize;
  if(opt_margin || corner != goog.positioning.Corner.TOP_LEFT) {
    if(corner & goog.positioning.CornerBit.RIGHT) {
      absolutePos.x -= size.width + (opt_margin ? opt_margin.right : 0)
    }else {
      if(opt_margin) {
        absolutePos.x += opt_margin.left
      }
    }
    if(corner & goog.positioning.CornerBit.BOTTOM) {
      absolutePos.y -= size.height + (opt_margin ? opt_margin.bottom : 0)
    }else {
      if(opt_margin) {
        absolutePos.y += opt_margin.top
      }
    }
  }
  if(opt_overflow) {
    status = opt_viewport ? goog.positioning.adjustForViewport(absolutePos, size, opt_viewport, opt_overflow) : goog.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT;
    if(status & goog.positioning.OverflowStatus.FAILED) {
      return status
    }
  }
  goog.style.setPosition(movableElement, absolutePos);
  if(!goog.math.Size.equals(elementSize, size)) {
    goog.style.setSize(movableElement, size)
  }
  return status
};
goog.positioning.adjustForViewport = function(pos, size, viewport, overflow) {
  var status = goog.positioning.OverflowStatus.NONE;
  if(pos.x < viewport.left && overflow & goog.positioning.Overflow.ADJUST_X) {
    pos.x = viewport.left;
    status |= goog.positioning.OverflowStatus.ADJUSTED_X
  }
  if(pos.x < viewport.left && pos.x + size.width > viewport.right && overflow & goog.positioning.Overflow.RESIZE_WIDTH) {
    size.width -= pos.x + size.width - viewport.right;
    status |= goog.positioning.OverflowStatus.WIDTH_ADJUSTED
  }
  if(pos.x + size.width > viewport.right && overflow & goog.positioning.Overflow.ADJUST_X) {
    pos.x = Math.max(viewport.right - size.width, viewport.left);
    status |= goog.positioning.OverflowStatus.ADJUSTED_X
  }
  if(overflow & goog.positioning.Overflow.FAIL_X) {
    status |= (pos.x < viewport.left ? goog.positioning.OverflowStatus.FAILED_LEFT : 0) | (pos.x + size.width > viewport.right ? goog.positioning.OverflowStatus.FAILED_RIGHT : 0)
  }
  if(pos.y < viewport.top && overflow & goog.positioning.Overflow.ADJUST_Y) {
    pos.y = viewport.top;
    status |= goog.positioning.OverflowStatus.ADJUSTED_Y
  }
  if(pos.y >= viewport.top && pos.y + size.height > viewport.bottom && overflow & goog.positioning.Overflow.RESIZE_HEIGHT) {
    size.height -= pos.y + size.height - viewport.bottom;
    status |= goog.positioning.OverflowStatus.HEIGHT_ADJUSTED
  }
  if(pos.y + size.height > viewport.bottom && overflow & goog.positioning.Overflow.ADJUST_Y) {
    pos.y = Math.max(viewport.bottom - size.height, viewport.top);
    status |= goog.positioning.OverflowStatus.ADJUSTED_Y
  }
  if(overflow & goog.positioning.Overflow.FAIL_Y) {
    status |= (pos.y < viewport.top ? goog.positioning.OverflowStatus.FAILED_TOP : 0) | (pos.y + size.height > viewport.bottom ? goog.positioning.OverflowStatus.FAILED_BOTTOM : 0)
  }
  return status
};
goog.positioning.getEffectiveCorner = function(element, corner) {
  return(corner & goog.positioning.CornerBit.FLIP_RTL && goog.style.isRightToLeft(element) ? corner ^ goog.positioning.CornerBit.RIGHT : corner) & ~goog.positioning.CornerBit.FLIP_RTL
};
goog.positioning.flipCornerHorizontal = function(corner) {
  return corner ^ goog.positioning.CornerBit.RIGHT
};
goog.positioning.flipCornerVertical = function(corner) {
  return corner ^ goog.positioning.CornerBit.BOTTOM
};
goog.positioning.flipCorner = function(corner) {
  return corner ^ goog.positioning.CornerBit.BOTTOM ^ goog.positioning.CornerBit.RIGHT
};
goog.provide("goog.Delay");
goog.provide("goog.async.Delay");
goog.require("goog.Disposable");
goog.require("goog.Timer");
goog.async.Delay = function(listener, opt_interval, opt_handler) {
  goog.Disposable.call(this);
  this.listener_ = listener;
  this.interval_ = opt_interval || 0;
  this.handler_ = opt_handler;
  this.callback_ = goog.bind(this.doAction_, this)
};
goog.inherits(goog.async.Delay, goog.Disposable);
goog.Delay = goog.async.Delay;
goog.async.Delay.prototype.id_ = 0;
goog.async.Delay.prototype.disposeInternal = function() {
  goog.async.Delay.superClass_.disposeInternal.call(this);
  this.stop();
  delete this.listener_;
  delete this.handler_
};
goog.async.Delay.prototype.start = function(opt_interval) {
  this.stop();
  this.id_ = goog.Timer.callOnce(this.callback_, goog.isDef(opt_interval) ? opt_interval : this.interval_)
};
goog.async.Delay.prototype.stop = function() {
  if(this.isActive()) {
    goog.Timer.clear(this.id_)
  }
  this.id_ = 0
};
goog.async.Delay.prototype.fire = function() {
  this.stop();
  this.doAction_()
};
goog.async.Delay.prototype.fireIfActive = function() {
  if(this.isActive()) {
    this.fire()
  }
};
goog.async.Delay.prototype.isActive = function() {
  return this.id_ != 0
};
goog.async.Delay.prototype.doAction_ = function() {
  this.id_ = 0;
  if(this.listener_) {
    this.listener_.call(this.handler_)
  }
};
goog.provide("goog.functions");
goog.functions.constant = function(retValue) {
  return function() {
    return retValue
  }
};
goog.functions.FALSE = goog.functions.constant(false);
goog.functions.TRUE = goog.functions.constant(true);
goog.functions.NULL = goog.functions.constant(null);
goog.functions.identity = function(opt_returnValue, var_args) {
  return opt_returnValue
};
goog.functions.error = function(message) {
  return function() {
    throw Error(message);
  }
};
goog.functions.lock = function(f) {
  return function() {
    return f.call(this)
  }
};
goog.functions.withReturnValue = function(f, retValue) {
  return goog.functions.sequence(f, goog.functions.constant(retValue))
};
goog.functions.compose = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    var result;
    if(length) {
      result = functions[length - 1].apply(this, arguments)
    }
    for(var i = length - 2;i >= 0;i--) {
      result = functions[i].call(this, result)
    }
    return result
  }
};
goog.functions.sequence = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    var result;
    for(var i = 0;i < length;i++) {
      result = functions[i].apply(this, arguments)
    }
    return result
  }
};
goog.functions.and = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    for(var i = 0;i < length;i++) {
      if(!functions[i].apply(this, arguments)) {
        return false
      }
    }
    return true
  }
};
goog.functions.or = function(var_args) {
  var functions = arguments;
  var length = functions.length;
  return function() {
    for(var i = 0;i < length;i++) {
      if(functions[i].apply(this, arguments)) {
        return true
      }
    }
    return false
  }
};
goog.functions.not = function(f) {
  return function() {
    return!f.apply(this, arguments)
  }
};
goog.functions.create = function(constructor, var_args) {
  var temp = function() {
  };
  temp.prototype = constructor.prototype;
  var obj = new temp;
  constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

 The "New" BSD License:

 Copyright (c) 2005-2009, The Dojo Foundation
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
goog.provide("goog.dom.query");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.functions");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.query = function() {
  var cssCaseBug = goog.userAgent.WEBKIT && goog.dom.getDocument().compatMode == "BackCompat";
  var childNodesName = !!goog.dom.getDocument().firstChild["children"] ? "children" : "childNodes";
  var specials = ">~+";
  var caseSensitive = false;
  var getQueryParts = function(query) {
    if(specials.indexOf(query.slice(-1)) >= 0) {
      query += " * "
    }else {
      query += " "
    }
    var ts = function(s, e) {
      return goog.string.trim(query.slice(s, e))
    };
    var queryParts = [];
    var inBrackets = -1, inParens = -1, inMatchFor = -1, inPseudo = -1, inClass = -1, inId = -1, inTag = -1, lc = "", cc = "", pStart;
    var x = 0, ql = query.length, currentPart = null, cp = null;
    var endTag = function() {
      if(inTag >= 0) {
        var tv = inTag == x ? null : ts(inTag, x);
        if(specials.indexOf(tv) < 0) {
          currentPart.tag = tv
        }else {
          currentPart.oper = tv
        }
        inTag = -1
      }
    };
    var endId = function() {
      if(inId >= 0) {
        currentPart.id = ts(inId, x).replace(/\\/g, "");
        inId = -1
      }
    };
    var endClass = function() {
      if(inClass >= 0) {
        currentPart.classes.push(ts(inClass + 1, x).replace(/\\/g, ""));
        inClass = -1
      }
    };
    var endAll = function() {
      endId();
      endTag();
      endClass()
    };
    var endPart = function() {
      endAll();
      if(inPseudo >= 0) {
        currentPart.pseudos.push({name:ts(inPseudo + 1, x)})
      }
      currentPart.loops = currentPart.pseudos.length || currentPart.attrs.length || currentPart.classes.length;
      currentPart.oquery = currentPart.query = ts(pStart, x);
      currentPart.otag = currentPart.tag = currentPart.oper ? null : currentPart.tag || "*";
      if(currentPart.tag) {
        currentPart.tag = currentPart.tag.toUpperCase()
      }
      if(queryParts.length && queryParts[queryParts.length - 1].oper) {
        currentPart.infixOper = queryParts.pop();
        currentPart.query = currentPart.infixOper.query + " " + currentPart.query
      }
      queryParts.push(currentPart);
      currentPart = null
    };
    for(;lc = cc, cc = query.charAt(x), x < ql;x++) {
      if(lc == "\\") {
        continue
      }
      if(!currentPart) {
        pStart = x;
        currentPart = {query:null, pseudos:[], attrs:[], classes:[], tag:null, oper:null, id:null, getTag:function() {
          return caseSensitive ? this.otag : this.tag
        }};
        inTag = x
      }
      if(inBrackets >= 0) {
        if(cc == "]") {
          if(!cp.attr) {
            cp.attr = ts(inBrackets + 1, x)
          }else {
            cp.matchFor = ts(inMatchFor || inBrackets + 1, x)
          }
          var cmf = cp.matchFor;
          if(cmf) {
            if(cmf.charAt(0) == '"' || cmf.charAt(0) == "'") {
              cp.matchFor = cmf.slice(1, -1)
            }
          }
          currentPart.attrs.push(cp);
          cp = null;
          inBrackets = inMatchFor = -1
        }else {
          if(cc == "=") {
            var addToCc = "|~^$*".indexOf(lc) >= 0 ? lc : "";
            cp.type = addToCc + cc;
            cp.attr = ts(inBrackets + 1, x - addToCc.length);
            inMatchFor = x + 1
          }
        }
      }else {
        if(inParens >= 0) {
          if(cc == ")") {
            if(inPseudo >= 0) {
              cp.value = ts(inParens + 1, x)
            }
            inPseudo = inParens = -1
          }
        }else {
          if(cc == "#") {
            endAll();
            inId = x + 1
          }else {
            if(cc == ".") {
              endAll();
              inClass = x
            }else {
              if(cc == ":") {
                endAll();
                inPseudo = x
              }else {
                if(cc == "[") {
                  endAll();
                  inBrackets = x;
                  cp = {}
                }else {
                  if(cc == "(") {
                    if(inPseudo >= 0) {
                      cp = {name:ts(inPseudo + 1, x), value:null};
                      currentPart.pseudos.push(cp)
                    }
                    inParens = x
                  }else {
                    if(cc == " " && lc != cc) {
                      endPart()
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return queryParts
  };
  var agree = function(first, second) {
    if(!first) {
      return second
    }
    if(!second) {
      return first
    }
    return function() {
      return first.apply(window, arguments) && second.apply(window, arguments)
    }
  };
  function getArr(i, opt_arr) {
    var r = opt_arr || [];
    if(i) {
      r.push(i)
    }
    return r
  }
  var isElement = function(n) {
    return 1 == n.nodeType
  };
  var blank = "";
  var getAttr = function(elem, attr) {
    if(!elem) {
      return blank
    }
    if(attr == "class") {
      return elem.className || blank
    }
    if(attr == "for") {
      return elem.htmlFor || blank
    }
    if(attr == "style") {
      return elem.style.cssText || blank
    }
    return(caseSensitive ? elem.getAttribute(attr) : elem.getAttribute(attr, 2)) || blank
  };
  var attrs = {"*=":function(attr, value) {
    return function(elem) {
      return getAttr(elem, attr).indexOf(value) >= 0
    }
  }, "^=":function(attr, value) {
    return function(elem) {
      return getAttr(elem, attr).indexOf(value) == 0
    }
  }, "$=":function(attr, value) {
    var tval = " " + value;
    return function(elem) {
      var ea = " " + getAttr(elem, attr);
      return ea.lastIndexOf(value) == ea.length - value.length
    }
  }, "~=":function(attr, value) {
    var tval = " " + value + " ";
    return function(elem) {
      var ea = " " + getAttr(elem, attr) + " ";
      return ea.indexOf(tval) >= 0
    }
  }, "|=":function(attr, value) {
    value = " " + value;
    return function(elem) {
      var ea = " " + getAttr(elem, attr);
      return ea == value || ea.indexOf(value + "-") == 0
    }
  }, "=":function(attr, value) {
    return function(elem) {
      return getAttr(elem, attr) == value
    }
  }};
  var noNextElementSibling = typeof goog.dom.getDocument().firstChild.nextElementSibling == "undefined";
  var nSibling = !noNextElementSibling ? "nextElementSibling" : "nextSibling";
  var pSibling = !noNextElementSibling ? "previousElementSibling" : "previousSibling";
  var simpleNodeTest = noNextElementSibling ? isElement : goog.functions.TRUE;
  var _lookLeft = function(node) {
    while(node = node[pSibling]) {
      if(simpleNodeTest(node)) {
        return false
      }
    }
    return true
  };
  var _lookRight = function(node) {
    while(node = node[nSibling]) {
      if(simpleNodeTest(node)) {
        return false
      }
    }
    return true
  };
  var getNodeIndex = function(node) {
    var root = node.parentNode;
    var i = 0, tret = root[childNodesName], ci = node["_i"] || -1, cl = root["_l"] || -1;
    if(!tret) {
      return-1
    }
    var l = tret.length;
    if(cl == l && ci >= 0 && cl >= 0) {
      return ci
    }
    root["_l"] = l;
    ci = -1;
    var te = root["firstElementChild"] || root["firstChild"];
    for(;te;te = te[nSibling]) {
      if(simpleNodeTest(te)) {
        te["_i"] = ++i;
        if(node === te) {
          ci = i
        }
      }
    }
    return ci
  };
  var isEven = function(elem) {
    return!(getNodeIndex(elem) % 2)
  };
  var isOdd = function(elem) {
    return getNodeIndex(elem) % 2
  };
  var pseudos = {"checked":function(name, condition) {
    return function(elem) {
      return elem.checked || elem.attributes["checked"]
    }
  }, "first-child":function() {
    return _lookLeft
  }, "last-child":function() {
    return _lookRight
  }, "only-child":function(name, condition) {
    return function(node) {
      if(!_lookLeft(node)) {
        return false
      }
      if(!_lookRight(node)) {
        return false
      }
      return true
    }
  }, "empty":function(name, condition) {
    return function(elem) {
      var cn = elem.childNodes;
      var cnl = elem.childNodes.length;
      for(var x = cnl - 1;x >= 0;x--) {
        var nt = cn[x].nodeType;
        if(nt === 1 || nt == 3) {
          return false
        }
      }
      return true
    }
  }, "contains":function(name, condition) {
    var cz = condition.charAt(0);
    if(cz == '"' || cz == "'") {
      condition = condition.slice(1, -1)
    }
    return function(elem) {
      return elem.innerHTML.indexOf(condition) >= 0
    }
  }, "not":function(name, condition) {
    var p = getQueryParts(condition)[0];
    var ignores = {el:1};
    if(p.tag != "*") {
      ignores.tag = 1
    }
    if(!p.classes.length) {
      ignores.classes = 1
    }
    var ntf = getSimpleFilterFunc(p, ignores);
    return function(elem) {
      return!ntf(elem)
    }
  }, "nth-child":function(name, condition) {
    function pi(n) {
      return parseInt(n, 10)
    }
    if(condition == "odd") {
      return isOdd
    }else {
      if(condition == "even") {
        return isEven
      }
    }
    if(condition.indexOf("n") != -1) {
      var tparts = condition.split("n", 2);
      var pred = tparts[0] ? tparts[0] == "-" ? -1 : pi(tparts[0]) : 1;
      var idx = tparts[1] ? pi(tparts[1]) : 0;
      var lb = 0, ub = -1;
      if(pred > 0) {
        if(idx < 0) {
          idx = idx % pred && pred + idx % pred
        }else {
          if(idx > 0) {
            if(idx >= pred) {
              lb = idx - idx % pred
            }
            idx = idx % pred
          }
        }
      }else {
        if(pred < 0) {
          pred *= -1;
          if(idx > 0) {
            ub = idx;
            idx = idx % pred
          }
        }
      }
      if(pred > 0) {
        return function(elem) {
          var i = getNodeIndex(elem);
          return i >= lb && (ub < 0 || i <= ub) && i % pred == idx
        }
      }else {
        condition = idx
      }
    }
    var ncount = pi(condition);
    return function(elem) {
      return getNodeIndex(elem) == ncount
    }
  }};
  var defaultGetter = goog.userAgent.IE ? function(cond) {
    var clc = cond.toLowerCase();
    if(clc == "class") {
      cond = "className"
    }
    return function(elem) {
      return caseSensitive ? elem.getAttribute(cond) : elem[cond] || elem[clc]
    }
  } : function(cond) {
    return function(elem) {
      return elem && elem.getAttribute && elem.hasAttribute(cond)
    }
  };
  var getSimpleFilterFunc = function(query, ignores) {
    if(!query) {
      return goog.functions.TRUE
    }
    ignores = ignores || {};
    var ff = null;
    if(!ignores.el) {
      ff = agree(ff, isElement)
    }
    if(!ignores.tag) {
      if(query.tag != "*") {
        ff = agree(ff, function(elem) {
          return elem && elem.tagName == query.getTag()
        })
      }
    }
    if(!ignores.classes) {
      goog.array.forEach(query.classes, function(cname, idx, arr) {
        var re = new RegExp("(?:^|\\s)" + cname + "(?:\\s|$)");
        ff = agree(ff, function(elem) {
          return re.test(elem.className)
        });
        ff.count = idx
      })
    }
    if(!ignores.pseudos) {
      goog.array.forEach(query.pseudos, function(pseudo) {
        var pn = pseudo.name;
        if(pseudos[pn]) {
          ff = agree(ff, pseudos[pn](pn, pseudo.value))
        }
      })
    }
    if(!ignores.attrs) {
      goog.array.forEach(query.attrs, function(attr) {
        var matcher;
        var a = attr.attr;
        if(attr.type && attrs[attr.type]) {
          matcher = attrs[attr.type](a, attr.matchFor)
        }else {
          if(a.length) {
            matcher = defaultGetter(a)
          }
        }
        if(matcher) {
          ff = agree(ff, matcher)
        }
      })
    }
    if(!ignores.id) {
      if(query.id) {
        ff = agree(ff, function(elem) {
          return!!elem && elem.id == query.id
        })
      }
    }
    if(!ff) {
      if(!("default" in ignores)) {
        ff = goog.functions.TRUE
      }
    }
    return ff
  };
  var nextSiblingIterator = function(filterFunc) {
    return function(node, ret, bag) {
      while(node = node[nSibling]) {
        if(noNextElementSibling && !isElement(node)) {
          continue
        }
        if((!bag || _isUnique(node, bag)) && filterFunc(node)) {
          ret.push(node)
        }
        break
      }
      return ret
    }
  };
  var nextSiblingsIterator = function(filterFunc) {
    return function(root, ret, bag) {
      var te = root[nSibling];
      while(te) {
        if(simpleNodeTest(te)) {
          if(bag && !_isUnique(te, bag)) {
            break
          }
          if(filterFunc(te)) {
            ret.push(te)
          }
        }
        te = te[nSibling]
      }
      return ret
    }
  };
  var _childElements = function(filterFunc) {
    filterFunc = filterFunc || goog.functions.TRUE;
    return function(root, ret, bag) {
      var te, x = 0, tret = root[childNodesName];
      while(te = tret[x++]) {
        if(simpleNodeTest(te) && (!bag || _isUnique(te, bag)) && filterFunc(te, x)) {
          ret.push(te)
        }
      }
      return ret
    }
  };
  var _isDescendant = function(node, root) {
    var pn = node.parentNode;
    while(pn) {
      if(pn == root) {
        break
      }
      pn = pn.parentNode
    }
    return!!pn
  };
  var _getElementsFuncCache = {};
  var getElementsFunc = function(query) {
    var retFunc = _getElementsFuncCache[query.query];
    if(retFunc) {
      return retFunc
    }
    var io = query.infixOper;
    var oper = io ? io.oper : "";
    var filterFunc = getSimpleFilterFunc(query, {el:1});
    var qt = query.tag;
    var wildcardTag = "*" == qt;
    var ecs = goog.dom.getDocument()["getElementsByClassName"];
    if(!oper) {
      if(query.id) {
        filterFunc = !query.loops && wildcardTag ? goog.functions.TRUE : getSimpleFilterFunc(query, {el:1, id:1});
        retFunc = function(root, arr) {
          var te = goog.dom.getDomHelper(root).getElement(query.id);
          if(!te || !filterFunc(te)) {
            return
          }
          if(9 == root.nodeType) {
            return getArr(te, arr)
          }else {
            if(_isDescendant(te, root)) {
              return getArr(te, arr)
            }
          }
        }
      }else {
        if(ecs && /\{\s*\[native code\]\s*\}/.test(String(ecs)) && query.classes.length && !cssCaseBug) {
          filterFunc = getSimpleFilterFunc(query, {el:1, classes:1, id:1});
          var classesString = query.classes.join(" ");
          retFunc = function(root, arr) {
            var ret = getArr(0, arr), te, x = 0;
            var tret = root.getElementsByClassName(classesString);
            while(te = tret[x++]) {
              if(filterFunc(te, root)) {
                ret.push(te)
              }
            }
            return ret
          }
        }else {
          if(!wildcardTag && !query.loops) {
            retFunc = function(root, arr) {
              var ret = getArr(0, arr), te, x = 0;
              var tret = root.getElementsByTagName(query.getTag());
              while(te = tret[x++]) {
                ret.push(te)
              }
              return ret
            }
          }else {
            filterFunc = getSimpleFilterFunc(query, {el:1, tag:1, id:1});
            retFunc = function(root, arr) {
              var ret = getArr(0, arr), te, x = 0;
              var tret = root.getElementsByTagName(query.getTag());
              while(te = tret[x++]) {
                if(filterFunc(te, root)) {
                  ret.push(te)
                }
              }
              return ret
            }
          }
        }
      }
    }else {
      var skipFilters = {el:1};
      if(wildcardTag) {
        skipFilters.tag = 1
      }
      filterFunc = getSimpleFilterFunc(query, skipFilters);
      if("+" == oper) {
        retFunc = nextSiblingIterator(filterFunc)
      }else {
        if("~" == oper) {
          retFunc = nextSiblingsIterator(filterFunc)
        }else {
          if(">" == oper) {
            retFunc = _childElements(filterFunc)
          }
        }
      }
    }
    return _getElementsFuncCache[query.query] = retFunc
  };
  var filterDown = function(root, queryParts) {
    var candidates = getArr(root), qp, x, te, qpl = queryParts.length, bag, ret;
    for(var i = 0;i < qpl;i++) {
      ret = [];
      qp = queryParts[i];
      x = candidates.length - 1;
      if(x > 0) {
        bag = {};
        ret.nozip = true
      }
      var gef = getElementsFunc(qp);
      for(var j = 0;te = candidates[j];j++) {
        gef(te, ret, bag)
      }
      if(!ret.length) {
        break
      }
      candidates = ret
    }
    return ret
  };
  var _queryFuncCacheDOM = {}, _queryFuncCacheQSA = {};
  var getStepQueryFunc = function(query) {
    var qparts = getQueryParts(goog.string.trim(query));
    if(qparts.length == 1) {
      var tef = getElementsFunc(qparts[0]);
      return function(root) {
        var r = tef(root, []);
        if(r) {
          r.nozip = true
        }
        return r
      }
    }
    return function(root) {
      return filterDown(root, qparts)
    }
  };
  var qsa = "querySelectorAll";
  var qsaAvail = !!goog.dom.getDocument()[qsa] && (!goog.userAgent.WEBKIT || goog.userAgent.isVersion("526"));
  var getQueryFunc = function(query, opt_forceDOM) {
    if(qsaAvail) {
      var qsaCached = _queryFuncCacheQSA[query];
      if(qsaCached && !opt_forceDOM) {
        return qsaCached
      }
    }
    var domCached = _queryFuncCacheDOM[query];
    if(domCached) {
      return domCached
    }
    var qcz = query.charAt(0);
    var nospace = -1 == query.indexOf(" ");
    if(query.indexOf("#") >= 0 && nospace) {
      opt_forceDOM = true
    }
    var useQSA = qsaAvail && !opt_forceDOM && specials.indexOf(qcz) == -1 && (!goog.userAgent.IE || query.indexOf(":") == -1) && !(cssCaseBug && query.indexOf(".") >= 0) && query.indexOf(":contains") == -1 && query.indexOf("|=") == -1;
    if(useQSA) {
      var tq = specials.indexOf(query.charAt(query.length - 1)) >= 0 ? query + " *" : query;
      return _queryFuncCacheQSA[query] = function(root) {
        try {
          if(!(9 == root.nodeType || nospace)) {
            throw"";
          }
          var r = root[qsa](tq);
          if(goog.userAgent.IE) {
            r.commentStrip = true
          }else {
            r.nozip = true
          }
          return r
        }catch(e) {
          return getQueryFunc(query, true)(root)
        }
      }
    }else {
      var parts = query.split(/\s*,\s*/);
      return _queryFuncCacheDOM[query] = parts.length < 2 ? getStepQueryFunc(query) : function(root) {
        var pindex = 0, ret = [], tp;
        while(tp = parts[pindex++]) {
          ret = ret.concat(getStepQueryFunc(tp)(root))
        }
        return ret
      }
    }
  };
  var _zipIdx = 0;
  var _nodeUID = goog.userAgent.IE ? function(node) {
    if(caseSensitive) {
      return node.getAttribute("_uid") || node.setAttribute("_uid", ++_zipIdx) || _zipIdx
    }else {
      return node.uniqueID
    }
  } : function(node) {
    return node["_uid"] || (node["_uid"] = ++_zipIdx)
  };
  var _isUnique = function(node, bag) {
    if(!bag) {
      return 1
    }
    var id = _nodeUID(node);
    if(!bag[id]) {
      return bag[id] = 1
    }
    return 0
  };
  var _zipIdxName = "_zipIdx";
  var _zip = function(arr) {
    if(arr && arr.nozip) {
      return arr
    }
    var ret = [];
    if(!arr || !arr.length) {
      return ret
    }
    if(arr[0]) {
      ret.push(arr[0])
    }
    if(arr.length < 2) {
      return ret
    }
    _zipIdx++;
    if(goog.userAgent.IE && caseSensitive) {
      var szidx = _zipIdx + "";
      arr[0].setAttribute(_zipIdxName, szidx);
      for(var x = 1, te;te = arr[x];x++) {
        if(arr[x].getAttribute(_zipIdxName) != szidx) {
          ret.push(te)
        }
        te.setAttribute(_zipIdxName, szidx)
      }
    }else {
      if(goog.userAgent.IE && arr.commentStrip) {
        try {
          for(var x = 1, te;te = arr[x];x++) {
            if(isElement(te)) {
              ret.push(te)
            }
          }
        }catch(e) {
        }
      }else {
        if(arr[0]) {
          arr[0][_zipIdxName] = _zipIdx
        }
        for(var x = 1, te;te = arr[x];x++) {
          if(arr[x][_zipIdxName] != _zipIdx) {
            ret.push(te)
          }
          te[_zipIdxName] = _zipIdx
        }
      }
    }
    return ret
  };
  var query = function(query, root) {
    if(!query) {
      return[]
    }
    if(query.constructor == Array) {
      return query
    }
    if(!goog.isString(query)) {
      return[query]
    }
    if(goog.isString(root)) {
      root = goog.dom.getElement(root);
      if(!root) {
        return[]
      }
    }
    root = root || goog.dom.getDocument();
    var od = root.ownerDocument || root.documentElement;
    caseSensitive = root.contentType && root.contentType == "application/xml" || goog.userAgent.OPERA && (root.doctype || od.toString() == "[object XMLDocument]") || !!od && (goog.userAgent.IE ? od.xml : root.xmlVersion || od.xmlVersion);
    var r = getQueryFunc(query)(root);
    if(r && r.nozip) {
      return r
    }
    return _zip(r)
  };
  query.pseudos = pseudos;
  return query
}();
goog.exportSymbol("goog.dom.query", goog.dom.query);
goog.exportSymbol("goog.dom.query.pseudos", goog.dom.query.pseudos);
goog.provide("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
goog.require("goog.object");
goog.require("goog.array");
cljs.core._STAR_print_fn_STAR_ = function _STAR_print_fn_STAR_(_) {
  throw new Error("No *print-fn* fn set for evaluation environment");
};
cljs.core.truth_ = function truth_(x) {
  return x != null && x !== false
};
cljs.core.type_satisfies_ = function type_satisfies_(p, x) {
  var or__3548__auto____82220 = p[goog.typeOf.call(null, x)];
  if(cljs.core.truth_(or__3548__auto____82220)) {
    return or__3548__auto____82220
  }else {
    var or__3548__auto____82221 = p["_"];
    if(cljs.core.truth_(or__3548__auto____82221)) {
      return or__3548__auto____82221
    }else {
      return false
    }
  }
};
cljs.core.is_proto_ = function is_proto_(x) {
  return x.constructor.prototype === x
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function missing_protocol(proto, obj) {
  return Error.call(null, "No protocol method " + proto + " defined for type " + goog.typeOf.call(null, obj) + ": " + obj)
};
cljs.core.aclone = function aclone(array_like) {
  return Array.prototype.slice.call(array_like)
};
cljs.core.array = function array(var_args) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.aget = function aget(array, i) {
  return array[i]
};
cljs.core.aset = function aset(array, i, val) {
  return array[i] = val
};
cljs.core.alength = function alength(array) {
  return array.length
};
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var _invoke = null;
  var _invoke__82285 = function(this$) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82222 = this$;
      if(cljs.core.truth_(and__3546__auto____82222)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82222
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$)
    }else {
      return function() {
        var or__3548__auto____82223 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82223)) {
          return or__3548__auto____82223
        }else {
          var or__3548__auto____82224 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82224)) {
            return or__3548__auto____82224
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _invoke__82286 = function(this$, a) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82225 = this$;
      if(cljs.core.truth_(and__3546__auto____82225)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82225
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a)
    }else {
      return function() {
        var or__3548__auto____82226 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82226)) {
          return or__3548__auto____82226
        }else {
          var or__3548__auto____82227 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82227)) {
            return or__3548__auto____82227
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a)
    }
  };
  var _invoke__82287 = function(this$, a, b) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82228 = this$;
      if(cljs.core.truth_(and__3546__auto____82228)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82228
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b)
    }else {
      return function() {
        var or__3548__auto____82229 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82229)) {
          return or__3548__auto____82229
        }else {
          var or__3548__auto____82230 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82230)) {
            return or__3548__auto____82230
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b)
    }
  };
  var _invoke__82288 = function(this$, a, b, c) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82231 = this$;
      if(cljs.core.truth_(and__3546__auto____82231)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82231
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c)
    }else {
      return function() {
        var or__3548__auto____82232 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82232)) {
          return or__3548__auto____82232
        }else {
          var or__3548__auto____82233 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82233)) {
            return or__3548__auto____82233
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c)
    }
  };
  var _invoke__82289 = function(this$, a, b, c, d) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82234 = this$;
      if(cljs.core.truth_(and__3546__auto____82234)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82234
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d)
    }else {
      return function() {
        var or__3548__auto____82235 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82235)) {
          return or__3548__auto____82235
        }else {
          var or__3548__auto____82236 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82236)) {
            return or__3548__auto____82236
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d)
    }
  };
  var _invoke__82290 = function(this$, a, b, c, d, e) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82237 = this$;
      if(cljs.core.truth_(and__3546__auto____82237)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82237
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e)
    }else {
      return function() {
        var or__3548__auto____82238 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82238)) {
          return or__3548__auto____82238
        }else {
          var or__3548__auto____82239 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82239)) {
            return or__3548__auto____82239
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e)
    }
  };
  var _invoke__82291 = function(this$, a, b, c, d, e, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82240 = this$;
      if(cljs.core.truth_(and__3546__auto____82240)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82240
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f)
    }else {
      return function() {
        var or__3548__auto____82241 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82241)) {
          return or__3548__auto____82241
        }else {
          var or__3548__auto____82242 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82242)) {
            return or__3548__auto____82242
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f)
    }
  };
  var _invoke__82292 = function(this$, a, b, c, d, e, f, g) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82243 = this$;
      if(cljs.core.truth_(and__3546__auto____82243)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82243
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g)
    }else {
      return function() {
        var or__3548__auto____82244 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82244)) {
          return or__3548__auto____82244
        }else {
          var or__3548__auto____82245 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82245)) {
            return or__3548__auto____82245
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g)
    }
  };
  var _invoke__82293 = function(this$, a, b, c, d, e, f, g, h) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82246 = this$;
      if(cljs.core.truth_(and__3546__auto____82246)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82246
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h)
    }else {
      return function() {
        var or__3548__auto____82247 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82247)) {
          return or__3548__auto____82247
        }else {
          var or__3548__auto____82248 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82248)) {
            return or__3548__auto____82248
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h)
    }
  };
  var _invoke__82294 = function(this$, a, b, c, d, e, f, g, h, i) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82249 = this$;
      if(cljs.core.truth_(and__3546__auto____82249)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82249
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i)
    }else {
      return function() {
        var or__3548__auto____82250 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82250)) {
          return or__3548__auto____82250
        }else {
          var or__3548__auto____82251 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82251)) {
            return or__3548__auto____82251
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i)
    }
  };
  var _invoke__82295 = function(this$, a, b, c, d, e, f, g, h, i, j) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82252 = this$;
      if(cljs.core.truth_(and__3546__auto____82252)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82252
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j)
    }else {
      return function() {
        var or__3548__auto____82253 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82253)) {
          return or__3548__auto____82253
        }else {
          var or__3548__auto____82254 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82254)) {
            return or__3548__auto____82254
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j)
    }
  };
  var _invoke__82296 = function(this$, a, b, c, d, e, f, g, h, i, j, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82255 = this$;
      if(cljs.core.truth_(and__3546__auto____82255)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82255
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k)
    }else {
      return function() {
        var or__3548__auto____82256 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82256)) {
          return or__3548__auto____82256
        }else {
          var or__3548__auto____82257 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82257)) {
            return or__3548__auto____82257
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k)
    }
  };
  var _invoke__82297 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82258 = this$;
      if(cljs.core.truth_(and__3546__auto____82258)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82258
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }else {
      return function() {
        var or__3548__auto____82259 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82259)) {
          return or__3548__auto____82259
        }else {
          var or__3548__auto____82260 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82260)) {
            return or__3548__auto____82260
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }
  };
  var _invoke__82298 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82261 = this$;
      if(cljs.core.truth_(and__3546__auto____82261)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82261
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }else {
      return function() {
        var or__3548__auto____82262 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82262)) {
          return or__3548__auto____82262
        }else {
          var or__3548__auto____82263 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82263)) {
            return or__3548__auto____82263
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }
  };
  var _invoke__82299 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82264 = this$;
      if(cljs.core.truth_(and__3546__auto____82264)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82264
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }else {
      return function() {
        var or__3548__auto____82265 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82265)) {
          return or__3548__auto____82265
        }else {
          var or__3548__auto____82266 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82266)) {
            return or__3548__auto____82266
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }
  };
  var _invoke__82300 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82267 = this$;
      if(cljs.core.truth_(and__3546__auto____82267)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82267
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }else {
      return function() {
        var or__3548__auto____82268 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82268)) {
          return or__3548__auto____82268
        }else {
          var or__3548__auto____82269 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82269)) {
            return or__3548__auto____82269
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }
  };
  var _invoke__82301 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82270 = this$;
      if(cljs.core.truth_(and__3546__auto____82270)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82270
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }else {
      return function() {
        var or__3548__auto____82271 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82271)) {
          return or__3548__auto____82271
        }else {
          var or__3548__auto____82272 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82272)) {
            return or__3548__auto____82272
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }
  };
  var _invoke__82302 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82273 = this$;
      if(cljs.core.truth_(and__3546__auto____82273)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82273
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }else {
      return function() {
        var or__3548__auto____82274 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82274)) {
          return or__3548__auto____82274
        }else {
          var or__3548__auto____82275 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82275)) {
            return or__3548__auto____82275
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }
  };
  var _invoke__82303 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82276 = this$;
      if(cljs.core.truth_(and__3546__auto____82276)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82276
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }else {
      return function() {
        var or__3548__auto____82277 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82277)) {
          return or__3548__auto____82277
        }else {
          var or__3548__auto____82278 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82278)) {
            return or__3548__auto____82278
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }
  };
  var _invoke__82304 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82279 = this$;
      if(cljs.core.truth_(and__3546__auto____82279)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82279
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }else {
      return function() {
        var or__3548__auto____82280 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82280)) {
          return or__3548__auto____82280
        }else {
          var or__3548__auto____82281 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82281)) {
            return or__3548__auto____82281
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }
  };
  var _invoke__82305 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82282 = this$;
      if(cljs.core.truth_(and__3546__auto____82282)) {
        return this$.cljs$core$IFn$_invoke
      }else {
        return and__3546__auto____82282
      }
    }())) {
      return this$.cljs$core$IFn$_invoke(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }else {
      return function() {
        var or__3548__auto____82283 = cljs.core._invoke[goog.typeOf.call(null, this$)];
        if(cljs.core.truth_(or__3548__auto____82283)) {
          return or__3548__auto____82283
        }else {
          var or__3548__auto____82284 = cljs.core._invoke["_"];
          if(cljs.core.truth_(or__3548__auto____82284)) {
            return or__3548__auto____82284
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
  };
  _invoke = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    switch(arguments.length) {
      case 1:
        return _invoke__82285.call(this, this$);
      case 2:
        return _invoke__82286.call(this, this$, a);
      case 3:
        return _invoke__82287.call(this, this$, a, b);
      case 4:
        return _invoke__82288.call(this, this$, a, b, c);
      case 5:
        return _invoke__82289.call(this, this$, a, b, c, d);
      case 6:
        return _invoke__82290.call(this, this$, a, b, c, d, e);
      case 7:
        return _invoke__82291.call(this, this$, a, b, c, d, e, f);
      case 8:
        return _invoke__82292.call(this, this$, a, b, c, d, e, f, g);
      case 9:
        return _invoke__82293.call(this, this$, a, b, c, d, e, f, g, h);
      case 10:
        return _invoke__82294.call(this, this$, a, b, c, d, e, f, g, h, i);
      case 11:
        return _invoke__82295.call(this, this$, a, b, c, d, e, f, g, h, i, j);
      case 12:
        return _invoke__82296.call(this, this$, a, b, c, d, e, f, g, h, i, j, k);
      case 13:
        return _invoke__82297.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l);
      case 14:
        return _invoke__82298.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m);
      case 15:
        return _invoke__82299.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n);
      case 16:
        return _invoke__82300.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
      case 17:
        return _invoke__82301.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
      case 18:
        return _invoke__82302.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);
      case 19:
        return _invoke__82303.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s);
      case 20:
        return _invoke__82304.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t);
      case 21:
        return _invoke__82305.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _invoke
}();
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82307 = coll;
    if(cljs.core.truth_(and__3546__auto____82307)) {
      return coll.cljs$core$ICounted$_count
    }else {
      return and__3546__auto____82307
    }
  }())) {
    return coll.cljs$core$ICounted$_count(coll)
  }else {
    return function() {
      var or__3548__auto____82308 = cljs.core._count[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82308)) {
        return or__3548__auto____82308
      }else {
        var or__3548__auto____82309 = cljs.core._count["_"];
        if(cljs.core.truth_(or__3548__auto____82309)) {
          return or__3548__auto____82309
        }else {
          throw cljs.core.missing_protocol.call(null, "ICounted.-count", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function _empty(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82310 = coll;
    if(cljs.core.truth_(and__3546__auto____82310)) {
      return coll.cljs$core$IEmptyableCollection$_empty
    }else {
      return and__3546__auto____82310
    }
  }())) {
    return coll.cljs$core$IEmptyableCollection$_empty(coll)
  }else {
    return function() {
      var or__3548__auto____82311 = cljs.core._empty[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82311)) {
        return or__3548__auto____82311
      }else {
        var or__3548__auto____82312 = cljs.core._empty["_"];
        if(cljs.core.truth_(or__3548__auto____82312)) {
          return or__3548__auto____82312
        }else {
          throw cljs.core.missing_protocol.call(null, "IEmptyableCollection.-empty", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ICollection = {};
cljs.core._conj = function _conj(coll, o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82313 = coll;
    if(cljs.core.truth_(and__3546__auto____82313)) {
      return coll.cljs$core$ICollection$_conj
    }else {
      return and__3546__auto____82313
    }
  }())) {
    return coll.cljs$core$ICollection$_conj(coll, o)
  }else {
    return function() {
      var or__3548__auto____82314 = cljs.core._conj[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82314)) {
        return or__3548__auto____82314
      }else {
        var or__3548__auto____82315 = cljs.core._conj["_"];
        if(cljs.core.truth_(or__3548__auto____82315)) {
          return or__3548__auto____82315
        }else {
          throw cljs.core.missing_protocol.call(null, "ICollection.-conj", coll);
        }
      }
    }().call(null, coll, o)
  }
};
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var _nth = null;
  var _nth__82322 = function(coll, n) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82316 = coll;
      if(cljs.core.truth_(and__3546__auto____82316)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____82316
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n)
    }else {
      return function() {
        var or__3548__auto____82317 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____82317)) {
          return or__3548__auto____82317
        }else {
          var or__3548__auto____82318 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____82318)) {
            return or__3548__auto____82318
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__82323 = function(coll, n, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82319 = coll;
      if(cljs.core.truth_(and__3546__auto____82319)) {
        return coll.cljs$core$IIndexed$_nth
      }else {
        return and__3546__auto____82319
      }
    }())) {
      return coll.cljs$core$IIndexed$_nth(coll, n, not_found)
    }else {
      return function() {
        var or__3548__auto____82320 = cljs.core._nth[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____82320)) {
          return or__3548__auto____82320
        }else {
          var or__3548__auto____82321 = cljs.core._nth["_"];
          if(cljs.core.truth_(or__3548__auto____82321)) {
            return or__3548__auto____82321
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n, not_found)
    }
  };
  _nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return _nth__82322.call(this, coll, n);
      case 3:
        return _nth__82323.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _nth
}();
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82325 = coll;
    if(cljs.core.truth_(and__3546__auto____82325)) {
      return coll.cljs$core$ISeq$_first
    }else {
      return and__3546__auto____82325
    }
  }())) {
    return coll.cljs$core$ISeq$_first(coll)
  }else {
    return function() {
      var or__3548__auto____82326 = cljs.core._first[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82326)) {
        return or__3548__auto____82326
      }else {
        var or__3548__auto____82327 = cljs.core._first["_"];
        if(cljs.core.truth_(or__3548__auto____82327)) {
          return or__3548__auto____82327
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82328 = coll;
    if(cljs.core.truth_(and__3546__auto____82328)) {
      return coll.cljs$core$ISeq$_rest
    }else {
      return and__3546__auto____82328
    }
  }())) {
    return coll.cljs$core$ISeq$_rest(coll)
  }else {
    return function() {
      var or__3548__auto____82329 = cljs.core._rest[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82329)) {
        return or__3548__auto____82329
      }else {
        var or__3548__auto____82330 = cljs.core._rest["_"];
        if(cljs.core.truth_(or__3548__auto____82330)) {
          return or__3548__auto____82330
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-rest", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var _lookup = null;
  var _lookup__82337 = function(o, k) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82331 = o;
      if(cljs.core.truth_(and__3546__auto____82331)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____82331
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k)
    }else {
      return function() {
        var or__3548__auto____82332 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____82332)) {
          return or__3548__auto____82332
        }else {
          var or__3548__auto____82333 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____82333)) {
            return or__3548__auto____82333
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__82338 = function(o, k, not_found) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82334 = o;
      if(cljs.core.truth_(and__3546__auto____82334)) {
        return o.cljs$core$ILookup$_lookup
      }else {
        return and__3546__auto____82334
      }
    }())) {
      return o.cljs$core$ILookup$_lookup(o, k, not_found)
    }else {
      return function() {
        var or__3548__auto____82335 = cljs.core._lookup[goog.typeOf.call(null, o)];
        if(cljs.core.truth_(or__3548__auto____82335)) {
          return or__3548__auto____82335
        }else {
          var or__3548__auto____82336 = cljs.core._lookup["_"];
          if(cljs.core.truth_(or__3548__auto____82336)) {
            return or__3548__auto____82336
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k, not_found)
    }
  };
  _lookup = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return _lookup__82337.call(this, o, k);
      case 3:
        return _lookup__82338.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82340 = coll;
    if(cljs.core.truth_(and__3546__auto____82340)) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_
    }else {
      return and__3546__auto____82340
    }
  }())) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll, k)
  }else {
    return function() {
      var or__3548__auto____82341 = cljs.core._contains_key_QMARK_[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82341)) {
        return or__3548__auto____82341
      }else {
        var or__3548__auto____82342 = cljs.core._contains_key_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____82342)) {
          return or__3548__auto____82342
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82343 = coll;
    if(cljs.core.truth_(and__3546__auto____82343)) {
      return coll.cljs$core$IAssociative$_assoc
    }else {
      return and__3546__auto____82343
    }
  }())) {
    return coll.cljs$core$IAssociative$_assoc(coll, k, v)
  }else {
    return function() {
      var or__3548__auto____82344 = cljs.core._assoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82344)) {
        return or__3548__auto____82344
      }else {
        var or__3548__auto____82345 = cljs.core._assoc["_"];
        if(cljs.core.truth_(or__3548__auto____82345)) {
          return or__3548__auto____82345
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-assoc", coll);
        }
      }
    }().call(null, coll, k, v)
  }
};
cljs.core.IMap = {};
cljs.core._dissoc = function _dissoc(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82346 = coll;
    if(cljs.core.truth_(and__3546__auto____82346)) {
      return coll.cljs$core$IMap$_dissoc
    }else {
      return and__3546__auto____82346
    }
  }())) {
    return coll.cljs$core$IMap$_dissoc(coll, k)
  }else {
    return function() {
      var or__3548__auto____82347 = cljs.core._dissoc[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82347)) {
        return or__3548__auto____82347
      }else {
        var or__3548__auto____82348 = cljs.core._dissoc["_"];
        if(cljs.core.truth_(or__3548__auto____82348)) {
          return or__3548__auto____82348
        }else {
          throw cljs.core.missing_protocol.call(null, "IMap.-dissoc", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core.ISet = {};
cljs.core._disjoin = function _disjoin(coll, v) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82349 = coll;
    if(cljs.core.truth_(and__3546__auto____82349)) {
      return coll.cljs$core$ISet$_disjoin
    }else {
      return and__3546__auto____82349
    }
  }())) {
    return coll.cljs$core$ISet$_disjoin(coll, v)
  }else {
    return function() {
      var or__3548__auto____82350 = cljs.core._disjoin[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82350)) {
        return or__3548__auto____82350
      }else {
        var or__3548__auto____82351 = cljs.core._disjoin["_"];
        if(cljs.core.truth_(or__3548__auto____82351)) {
          return or__3548__auto____82351
        }else {
          throw cljs.core.missing_protocol.call(null, "ISet.-disjoin", coll);
        }
      }
    }().call(null, coll, v)
  }
};
cljs.core.IStack = {};
cljs.core._peek = function _peek(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82352 = coll;
    if(cljs.core.truth_(and__3546__auto____82352)) {
      return coll.cljs$core$IStack$_peek
    }else {
      return and__3546__auto____82352
    }
  }())) {
    return coll.cljs$core$IStack$_peek(coll)
  }else {
    return function() {
      var or__3548__auto____82353 = cljs.core._peek[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82353)) {
        return or__3548__auto____82353
      }else {
        var or__3548__auto____82354 = cljs.core._peek["_"];
        if(cljs.core.truth_(or__3548__auto____82354)) {
          return or__3548__auto____82354
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82355 = coll;
    if(cljs.core.truth_(and__3546__auto____82355)) {
      return coll.cljs$core$IStack$_pop
    }else {
      return and__3546__auto____82355
    }
  }())) {
    return coll.cljs$core$IStack$_pop(coll)
  }else {
    return function() {
      var or__3548__auto____82356 = cljs.core._pop[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82356)) {
        return or__3548__auto____82356
      }else {
        var or__3548__auto____82357 = cljs.core._pop["_"];
        if(cljs.core.truth_(or__3548__auto____82357)) {
          return or__3548__auto____82357
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-pop", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IVector = {};
cljs.core._assoc_n = function _assoc_n(coll, n, val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82358 = coll;
    if(cljs.core.truth_(and__3546__auto____82358)) {
      return coll.cljs$core$IVector$_assoc_n
    }else {
      return and__3546__auto____82358
    }
  }())) {
    return coll.cljs$core$IVector$_assoc_n(coll, n, val)
  }else {
    return function() {
      var or__3548__auto____82359 = cljs.core._assoc_n[goog.typeOf.call(null, coll)];
      if(cljs.core.truth_(or__3548__auto____82359)) {
        return or__3548__auto____82359
      }else {
        var or__3548__auto____82360 = cljs.core._assoc_n["_"];
        if(cljs.core.truth_(or__3548__auto____82360)) {
          return or__3548__auto____82360
        }else {
          throw cljs.core.missing_protocol.call(null, "IVector.-assoc-n", coll);
        }
      }
    }().call(null, coll, n, val)
  }
};
cljs.core.IDeref = {};
cljs.core._deref = function _deref(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82361 = o;
    if(cljs.core.truth_(and__3546__auto____82361)) {
      return o.cljs$core$IDeref$_deref
    }else {
      return and__3546__auto____82361
    }
  }())) {
    return o.cljs$core$IDeref$_deref(o)
  }else {
    return function() {
      var or__3548__auto____82362 = cljs.core._deref[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82362)) {
        return or__3548__auto____82362
      }else {
        var or__3548__auto____82363 = cljs.core._deref["_"];
        if(cljs.core.truth_(or__3548__auto____82363)) {
          return or__3548__auto____82363
        }else {
          throw cljs.core.missing_protocol.call(null, "IDeref.-deref", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function _deref_with_timeout(o, msec, timeout_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82364 = o;
    if(cljs.core.truth_(and__3546__auto____82364)) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout
    }else {
      return and__3546__auto____82364
    }
  }())) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o, msec, timeout_val)
  }else {
    return function() {
      var or__3548__auto____82365 = cljs.core._deref_with_timeout[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82365)) {
        return or__3548__auto____82365
      }else {
        var or__3548__auto____82366 = cljs.core._deref_with_timeout["_"];
        if(cljs.core.truth_(or__3548__auto____82366)) {
          return or__3548__auto____82366
        }else {
          throw cljs.core.missing_protocol.call(null, "IDerefWithTimeout.-deref-with-timeout", o);
        }
      }
    }().call(null, o, msec, timeout_val)
  }
};
cljs.core.IMeta = {};
cljs.core._meta = function _meta(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82367 = o;
    if(cljs.core.truth_(and__3546__auto____82367)) {
      return o.cljs$core$IMeta$_meta
    }else {
      return and__3546__auto____82367
    }
  }())) {
    return o.cljs$core$IMeta$_meta(o)
  }else {
    return function() {
      var or__3548__auto____82368 = cljs.core._meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82368)) {
        return or__3548__auto____82368
      }else {
        var or__3548__auto____82369 = cljs.core._meta["_"];
        if(cljs.core.truth_(or__3548__auto____82369)) {
          return or__3548__auto____82369
        }else {
          throw cljs.core.missing_protocol.call(null, "IMeta.-meta", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.IWithMeta = {};
cljs.core._with_meta = function _with_meta(o, meta) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82370 = o;
    if(cljs.core.truth_(and__3546__auto____82370)) {
      return o.cljs$core$IWithMeta$_with_meta
    }else {
      return and__3546__auto____82370
    }
  }())) {
    return o.cljs$core$IWithMeta$_with_meta(o, meta)
  }else {
    return function() {
      var or__3548__auto____82371 = cljs.core._with_meta[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82371)) {
        return or__3548__auto____82371
      }else {
        var or__3548__auto____82372 = cljs.core._with_meta["_"];
        if(cljs.core.truth_(or__3548__auto____82372)) {
          return or__3548__auto____82372
        }else {
          throw cljs.core.missing_protocol.call(null, "IWithMeta.-with-meta", o);
        }
      }
    }().call(null, o, meta)
  }
};
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var _reduce = null;
  var _reduce__82379 = function(coll, f) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82373 = coll;
      if(cljs.core.truth_(and__3546__auto____82373)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____82373
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f)
    }else {
      return function() {
        var or__3548__auto____82374 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____82374)) {
          return or__3548__auto____82374
        }else {
          var or__3548__auto____82375 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____82375)) {
            return or__3548__auto____82375
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__82380 = function(coll, f, start) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82376 = coll;
      if(cljs.core.truth_(and__3546__auto____82376)) {
        return coll.cljs$core$IReduce$_reduce
      }else {
        return and__3546__auto____82376
      }
    }())) {
      return coll.cljs$core$IReduce$_reduce(coll, f, start)
    }else {
      return function() {
        var or__3548__auto____82377 = cljs.core._reduce[goog.typeOf.call(null, coll)];
        if(cljs.core.truth_(or__3548__auto____82377)) {
          return or__3548__auto____82377
        }else {
          var or__3548__auto____82378 = cljs.core._reduce["_"];
          if(cljs.core.truth_(or__3548__auto____82378)) {
            return or__3548__auto____82378
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f, start)
    }
  };
  _reduce = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return _reduce__82379.call(this, coll, f);
      case 3:
        return _reduce__82380.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return _reduce
}();
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82382 = o;
    if(cljs.core.truth_(and__3546__auto____82382)) {
      return o.cljs$core$IEquiv$_equiv
    }else {
      return and__3546__auto____82382
    }
  }())) {
    return o.cljs$core$IEquiv$_equiv(o, other)
  }else {
    return function() {
      var or__3548__auto____82383 = cljs.core._equiv[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82383)) {
        return or__3548__auto____82383
      }else {
        var or__3548__auto____82384 = cljs.core._equiv["_"];
        if(cljs.core.truth_(or__3548__auto____82384)) {
          return or__3548__auto____82384
        }else {
          throw cljs.core.missing_protocol.call(null, "IEquiv.-equiv", o);
        }
      }
    }().call(null, o, other)
  }
};
cljs.core.IHash = {};
cljs.core._hash = function _hash(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82385 = o;
    if(cljs.core.truth_(and__3546__auto____82385)) {
      return o.cljs$core$IHash$_hash
    }else {
      return and__3546__auto____82385
    }
  }())) {
    return o.cljs$core$IHash$_hash(o)
  }else {
    return function() {
      var or__3548__auto____82386 = cljs.core._hash[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82386)) {
        return or__3548__auto____82386
      }else {
        var or__3548__auto____82387 = cljs.core._hash["_"];
        if(cljs.core.truth_(or__3548__auto____82387)) {
          return or__3548__auto____82387
        }else {
          throw cljs.core.missing_protocol.call(null, "IHash.-hash", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.ISeqable = {};
cljs.core._seq = function _seq(o) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82388 = o;
    if(cljs.core.truth_(and__3546__auto____82388)) {
      return o.cljs$core$ISeqable$_seq
    }else {
      return and__3546__auto____82388
    }
  }())) {
    return o.cljs$core$ISeqable$_seq(o)
  }else {
    return function() {
      var or__3548__auto____82389 = cljs.core._seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82389)) {
        return or__3548__auto____82389
      }else {
        var or__3548__auto____82390 = cljs.core._seq["_"];
        if(cljs.core.truth_(or__3548__auto____82390)) {
          return or__3548__auto____82390
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeqable.-seq", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = function _pr_seq(o, opts) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82391 = o;
    if(cljs.core.truth_(and__3546__auto____82391)) {
      return o.cljs$core$IPrintable$_pr_seq
    }else {
      return and__3546__auto____82391
    }
  }())) {
    return o.cljs$core$IPrintable$_pr_seq(o, opts)
  }else {
    return function() {
      var or__3548__auto____82392 = cljs.core._pr_seq[goog.typeOf.call(null, o)];
      if(cljs.core.truth_(or__3548__auto____82392)) {
        return or__3548__auto____82392
      }else {
        var or__3548__auto____82393 = cljs.core._pr_seq["_"];
        if(cljs.core.truth_(or__3548__auto____82393)) {
          return or__3548__auto____82393
        }else {
          throw cljs.core.missing_protocol.call(null, "IPrintable.-pr-seq", o);
        }
      }
    }().call(null, o, opts)
  }
};
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function _realized_QMARK_(d) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82394 = d;
    if(cljs.core.truth_(and__3546__auto____82394)) {
      return d.cljs$core$IPending$_realized_QMARK_
    }else {
      return and__3546__auto____82394
    }
  }())) {
    return d.cljs$core$IPending$_realized_QMARK_(d)
  }else {
    return function() {
      var or__3548__auto____82395 = cljs.core._realized_QMARK_[goog.typeOf.call(null, d)];
      if(cljs.core.truth_(or__3548__auto____82395)) {
        return or__3548__auto____82395
      }else {
        var or__3548__auto____82396 = cljs.core._realized_QMARK_["_"];
        if(cljs.core.truth_(or__3548__auto____82396)) {
          return or__3548__auto____82396
        }else {
          throw cljs.core.missing_protocol.call(null, "IPending.-realized?", d);
        }
      }
    }().call(null, d)
  }
};
cljs.core.IWatchable = {};
cljs.core._notify_watches = function _notify_watches(this$, oldval, newval) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82397 = this$;
    if(cljs.core.truth_(and__3546__auto____82397)) {
      return this$.cljs$core$IWatchable$_notify_watches
    }else {
      return and__3546__auto____82397
    }
  }())) {
    return this$.cljs$core$IWatchable$_notify_watches(this$, oldval, newval)
  }else {
    return function() {
      var or__3548__auto____82398 = cljs.core._notify_watches[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____82398)) {
        return or__3548__auto____82398
      }else {
        var or__3548__auto____82399 = cljs.core._notify_watches["_"];
        if(cljs.core.truth_(or__3548__auto____82399)) {
          return or__3548__auto____82399
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82400 = this$;
    if(cljs.core.truth_(and__3546__auto____82400)) {
      return this$.cljs$core$IWatchable$_add_watch
    }else {
      return and__3546__auto____82400
    }
  }())) {
    return this$.cljs$core$IWatchable$_add_watch(this$, key, f)
  }else {
    return function() {
      var or__3548__auto____82401 = cljs.core._add_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____82401)) {
        return or__3548__auto____82401
      }else {
        var or__3548__auto____82402 = cljs.core._add_watch["_"];
        if(cljs.core.truth_(or__3548__auto____82402)) {
          return or__3548__auto____82402
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82403 = this$;
    if(cljs.core.truth_(and__3546__auto____82403)) {
      return this$.cljs$core$IWatchable$_remove_watch
    }else {
      return and__3546__auto____82403
    }
  }())) {
    return this$.cljs$core$IWatchable$_remove_watch(this$, key)
  }else {
    return function() {
      var or__3548__auto____82404 = cljs.core._remove_watch[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____82404)) {
        return or__3548__auto____82404
      }else {
        var or__3548__auto____82405 = cljs.core._remove_watch["_"];
        if(cljs.core.truth_(or__3548__auto____82405)) {
          return or__3548__auto____82405
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-remove-watch", this$);
        }
      }
    }().call(null, this$, key)
  }
};
cljs.core.identical_QMARK_ = function identical_QMARK_(x, y) {
  return x === y
};
cljs.core._EQ_ = function _EQ_(x, y) {
  return cljs.core._equiv.call(null, x, y)
};
cljs.core.nil_QMARK_ = function nil_QMARK_(x) {
  return x === null
};
cljs.core.type = function type(x) {
  return x.constructor
};
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = function(this$) {
  return cljs.core.list.call(null, "#<", cljs.core.str.call(null, this$), ">")
};
cljs.core.IHash["null"] = true;
cljs.core._hash["null"] = function(o) {
  return 0
};
cljs.core.ILookup["null"] = true;
cljs.core._lookup["null"] = function() {
  var G__82406 = null;
  var G__82406__82407 = function(o, k) {
    return null
  };
  var G__82406__82408 = function(o, k, not_found) {
    return not_found
  };
  G__82406 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82406__82407.call(this, o, k);
      case 3:
        return G__82406__82408.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82406
}();
cljs.core.IAssociative["null"] = true;
cljs.core._assoc["null"] = function(_, k, v) {
  return cljs.core.hash_map.call(null, k, v)
};
cljs.core.ICollection["null"] = true;
cljs.core._conj["null"] = function(_, o) {
  return cljs.core.list.call(null, o)
};
cljs.core.IReduce["null"] = true;
cljs.core._reduce["null"] = function() {
  var G__82410 = null;
  var G__82410__82411 = function(_, f) {
    return f.call(null)
  };
  var G__82410__82412 = function(_, f, start) {
    return start
  };
  G__82410 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__82410__82411.call(this, _, f);
      case 3:
        return G__82410__82412.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82410
}();
cljs.core.IPrintable["null"] = true;
cljs.core._pr_seq["null"] = function(o) {
  return cljs.core.list.call(null, "nil")
};
cljs.core.ISet["null"] = true;
cljs.core._disjoin["null"] = function(_, v) {
  return null
};
cljs.core.ICounted["null"] = true;
cljs.core._count["null"] = function(_) {
  return 0
};
cljs.core.IStack["null"] = true;
cljs.core._peek["null"] = function(_) {
  return null
};
cljs.core._pop["null"] = function(_) {
  return null
};
cljs.core.ISeq["null"] = true;
cljs.core._first["null"] = function(_) {
  return null
};
cljs.core._rest["null"] = function(_) {
  return cljs.core.list.call(null)
};
cljs.core.IEquiv["null"] = true;
cljs.core._equiv["null"] = function(_, o) {
  return cljs.core.nil_QMARK_.call(null, o)
};
cljs.core.IWithMeta["null"] = true;
cljs.core._with_meta["null"] = function(_, meta) {
  return null
};
cljs.core.IMeta["null"] = true;
cljs.core._meta["null"] = function(_) {
  return null
};
cljs.core.IIndexed["null"] = true;
cljs.core._nth["null"] = function() {
  var G__82414 = null;
  var G__82414__82415 = function(_, n) {
    return null
  };
  var G__82414__82416 = function(_, n, not_found) {
    return not_found
  };
  G__82414 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82414__82415.call(this, _, n);
      case 3:
        return G__82414__82416.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82414
}();
cljs.core.IEmptyableCollection["null"] = true;
cljs.core._empty["null"] = function(_) {
  return null
};
cljs.core.IMap["null"] = true;
cljs.core._dissoc["null"] = function(_, k) {
  return null
};
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  return o.toString() === other.toString()
};
cljs.core.IHash["number"] = true;
cljs.core._hash["number"] = function(o) {
  return o
};
cljs.core.IEquiv["number"] = true;
cljs.core._equiv["number"] = function(x, o) {
  return x === o
};
cljs.core.IHash["boolean"] = true;
cljs.core._hash["boolean"] = function(o) {
  return o === true ? 1 : 0
};
cljs.core.IHash["function"] = true;
cljs.core._hash["function"] = function(o) {
  return goog.getUid.call(null, o)
};
cljs.core.inc = function inc(x) {
  return x + 1
};
cljs.core.ci_reduce = function() {
  var ci_reduce = null;
  var ci_reduce__82424 = function(cicoll, f) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core._count.call(null, cicoll)))) {
      return f.call(null)
    }else {
      var val__82418 = cljs.core._nth.call(null, cicoll, 0);
      var n__82419 = 1;
      while(true) {
        if(cljs.core.truth_(n__82419 < cljs.core._count.call(null, cicoll))) {
          var G__82428 = f.call(null, val__82418, cljs.core._nth.call(null, cicoll, n__82419));
          var G__82429 = n__82419 + 1;
          val__82418 = G__82428;
          n__82419 = G__82429;
          continue
        }else {
          return val__82418
        }
        break
      }
    }
  };
  var ci_reduce__82425 = function(cicoll, f, val) {
    var val__82420 = val;
    var n__82421 = 0;
    while(true) {
      if(cljs.core.truth_(n__82421 < cljs.core._count.call(null, cicoll))) {
        var G__82430 = f.call(null, val__82420, cljs.core._nth.call(null, cicoll, n__82421));
        var G__82431 = n__82421 + 1;
        val__82420 = G__82430;
        n__82421 = G__82431;
        continue
      }else {
        return val__82420
      }
      break
    }
  };
  var ci_reduce__82426 = function(cicoll, f, val, idx) {
    var val__82422 = val;
    var n__82423 = idx;
    while(true) {
      if(cljs.core.truth_(n__82423 < cljs.core._count.call(null, cicoll))) {
        var G__82432 = f.call(null, val__82422, cljs.core._nth.call(null, cicoll, n__82423));
        var G__82433 = n__82423 + 1;
        val__82422 = G__82432;
        n__82423 = G__82433;
        continue
      }else {
        return val__82422
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__82424.call(this, cicoll, f);
      case 3:
        return ci_reduce__82425.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__82426.call(this, cicoll, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ci_reduce
}();
cljs.core.IndexedSeq = function(a, i) {
  this.a = a;
  this.i = i
};
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__82434 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = function() {
  var G__82447 = null;
  var G__82447__82448 = function(_, f) {
    var this__82435 = this;
    return cljs.core.ci_reduce.call(null, this__82435.a, f, this__82435.a[this__82435.i], this__82435.i + 1)
  };
  var G__82447__82449 = function(_, f, start) {
    var this__82436 = this;
    return cljs.core.ci_reduce.call(null, this__82436.a, f, start, this__82436.i)
  };
  G__82447 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__82447__82448.call(this, _, f);
      case 3:
        return G__82447__82449.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82447
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__82437 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__82438 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = function() {
  var G__82451 = null;
  var G__82451__82452 = function(coll, n) {
    var this__82439 = this;
    var i__82440 = n + this__82439.i;
    if(cljs.core.truth_(i__82440 < this__82439.a.length)) {
      return this__82439.a[i__82440]
    }else {
      return null
    }
  };
  var G__82451__82453 = function(coll, n, not_found) {
    var this__82441 = this;
    var i__82442 = n + this__82441.i;
    if(cljs.core.truth_(i__82442 < this__82441.a.length)) {
      return this__82441.a[i__82442]
    }else {
      return not_found
    }
  };
  G__82451 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82451__82452.call(this, coll, n);
      case 3:
        return G__82451__82453.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82451
}();
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = function(_) {
  var this__82443 = this;
  return this__82443.a.length - this__82443.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = function(_) {
  var this__82444 = this;
  return this__82444.a[this__82444.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = function(_) {
  var this__82445 = this;
  if(cljs.core.truth_(this__82445.i + 1 < this__82445.a.length)) {
    return new cljs.core.IndexedSeq(this__82445.a, this__82445.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = function(this$) {
  var this__82446 = this;
  return this$
};
cljs.core.IndexedSeq;
cljs.core.prim_seq = function prim_seq(prim, i) {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, prim.length))) {
    return null
  }else {
    return new cljs.core.IndexedSeq(prim, i)
  }
};
cljs.core.array_seq = function array_seq(array, i) {
  return cljs.core.prim_seq.call(null, array, i)
};
cljs.core.IReduce["array"] = true;
cljs.core._reduce["array"] = function() {
  var G__82455 = null;
  var G__82455__82456 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__82455__82457 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__82455 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__82455__82456.call(this, array, f);
      case 3:
        return G__82455__82457.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82455
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__82459 = null;
  var G__82459__82460 = function(array, k) {
    return array[k]
  };
  var G__82459__82461 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__82459 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82459__82460.call(this, array, k);
      case 3:
        return G__82459__82461.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82459
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__82463 = null;
  var G__82463__82464 = function(array, n) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return null
    }
  };
  var G__82463__82465 = function(array, n, not_found) {
    if(cljs.core.truth_(n < array.length)) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__82463 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82463__82464.call(this, array, n);
      case 3:
        return G__82463__82465.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82463
}();
cljs.core.ICounted["array"] = true;
cljs.core._count["array"] = function(a) {
  return a.length
};
cljs.core.ISeqable["array"] = true;
cljs.core._seq["array"] = function(array) {
  return cljs.core.array_seq.call(null, array, 0)
};
cljs.core.seq = function seq(coll) {
  if(cljs.core.truth_(coll)) {
    return cljs.core._seq.call(null, coll)
  }else {
    return null
  }
};
cljs.core.first = function first(coll) {
  var temp__3698__auto____82467 = cljs.core.seq.call(null, coll);
  if(cljs.core.truth_(temp__3698__auto____82467)) {
    var s__82468 = temp__3698__auto____82467;
    return cljs.core._first.call(null, s__82468)
  }else {
    return null
  }
};
cljs.core.rest = function rest(coll) {
  return cljs.core._rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.next = function next(coll) {
  if(cljs.core.truth_(coll)) {
    return cljs.core.seq.call(null, cljs.core.rest.call(null, coll))
  }else {
    return null
  }
};
cljs.core.second = function second(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.ffirst = function ffirst(coll) {
  return cljs.core.first.call(null, cljs.core.first.call(null, coll))
};
cljs.core.nfirst = function nfirst(coll) {
  return cljs.core.next.call(null, cljs.core.first.call(null, coll))
};
cljs.core.fnext = function fnext(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.nnext = function nnext(coll) {
  return cljs.core.next.call(null, cljs.core.next.call(null, coll))
};
cljs.core.last = function last(s) {
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s))) {
      var G__82469 = cljs.core.next.call(null, s);
      s = G__82469;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.ICounted["_"] = true;
cljs.core._count["_"] = function(x) {
  var s__82470 = cljs.core.seq.call(null, x);
  var n__82471 = 0;
  while(true) {
    if(cljs.core.truth_(s__82470)) {
      var G__82472 = cljs.core.next.call(null, s__82470);
      var G__82473 = n__82471 + 1;
      s__82470 = G__82472;
      n__82471 = G__82473;
      continue
    }else {
      return n__82471
    }
    break
  }
};
cljs.core.IEquiv["_"] = true;
cljs.core._equiv["_"] = function(x, o) {
  return x === o
};
cljs.core.not = function not(x) {
  if(cljs.core.truth_(x)) {
    return false
  }else {
    return true
  }
};
cljs.core.conj = function() {
  var conj = null;
  var conj__82474 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__82475 = function() {
    var G__82477__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__82478 = conj.call(null, coll, x);
          var G__82479 = cljs.core.first.call(null, xs);
          var G__82480 = cljs.core.next.call(null, xs);
          coll = G__82478;
          x = G__82479;
          xs = G__82480;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__82477 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82477__delegate.call(this, coll, x, xs)
    };
    G__82477.cljs$lang$maxFixedArity = 2;
    G__82477.cljs$lang$applyTo = function(arglist__82481) {
      var coll = cljs.core.first(arglist__82481);
      var x = cljs.core.first(cljs.core.next(arglist__82481));
      var xs = cljs.core.rest(cljs.core.next(arglist__82481));
      return G__82477__delegate.call(this, coll, x, xs)
    };
    return G__82477
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__82474.call(this, coll, x);
      default:
        return conj__82475.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__82475.cljs$lang$applyTo;
  return conj
}();
cljs.core.empty = function empty(coll) {
  return cljs.core._empty.call(null, coll)
};
cljs.core.count = function count(coll) {
  return cljs.core._count.call(null, coll)
};
cljs.core.nth = function() {
  var nth = null;
  var nth__82482 = function(coll, n) {
    return cljs.core._nth.call(null, coll, Math.floor(n))
  };
  var nth__82483 = function(coll, n, not_found) {
    return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__82482.call(this, coll, n);
      case 3:
        return nth__82483.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__82485 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__82486 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__82485.call(this, o, k);
      case 3:
        return get__82486.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__82489 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__82490 = function() {
    var G__82492__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__82488 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__82493 = ret__82488;
          var G__82494 = cljs.core.first.call(null, kvs);
          var G__82495 = cljs.core.second.call(null, kvs);
          var G__82496 = cljs.core.nnext.call(null, kvs);
          coll = G__82493;
          k = G__82494;
          v = G__82495;
          kvs = G__82496;
          continue
        }else {
          return ret__82488
        }
        break
      }
    };
    var G__82492 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__82492__delegate.call(this, coll, k, v, kvs)
    };
    G__82492.cljs$lang$maxFixedArity = 3;
    G__82492.cljs$lang$applyTo = function(arglist__82497) {
      var coll = cljs.core.first(arglist__82497);
      var k = cljs.core.first(cljs.core.next(arglist__82497));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82497)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82497)));
      return G__82492__delegate.call(this, coll, k, v, kvs)
    };
    return G__82492
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__82489.call(this, coll, k, v);
      default:
        return assoc__82490.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__82490.cljs$lang$applyTo;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__82499 = function(coll) {
    return coll
  };
  var dissoc__82500 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__82501 = function() {
    var G__82503__delegate = function(coll, k, ks) {
      while(true) {
        var ret__82498 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__82504 = ret__82498;
          var G__82505 = cljs.core.first.call(null, ks);
          var G__82506 = cljs.core.next.call(null, ks);
          coll = G__82504;
          k = G__82505;
          ks = G__82506;
          continue
        }else {
          return ret__82498
        }
        break
      }
    };
    var G__82503 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82503__delegate.call(this, coll, k, ks)
    };
    G__82503.cljs$lang$maxFixedArity = 2;
    G__82503.cljs$lang$applyTo = function(arglist__82507) {
      var coll = cljs.core.first(arglist__82507);
      var k = cljs.core.first(cljs.core.next(arglist__82507));
      var ks = cljs.core.rest(cljs.core.next(arglist__82507));
      return G__82503__delegate.call(this, coll, k, ks)
    };
    return G__82503
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__82499.call(this, coll);
      case 2:
        return dissoc__82500.call(this, coll, k);
      default:
        return dissoc__82501.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__82501.cljs$lang$applyTo;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(cljs.core.truth_(function() {
    var x__445__auto____82508 = o;
    if(cljs.core.truth_(function() {
      var and__3546__auto____82509 = x__445__auto____82508;
      if(cljs.core.truth_(and__3546__auto____82509)) {
        var and__3546__auto____82510 = x__445__auto____82508.cljs$core$IMeta$;
        if(cljs.core.truth_(and__3546__auto____82510)) {
          return cljs.core.not.call(null, x__445__auto____82508.hasOwnProperty("cljs$core$IMeta$"))
        }else {
          return and__3546__auto____82510
        }
      }else {
        return and__3546__auto____82509
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__445__auto____82508)
    }
  }())) {
    return cljs.core._meta.call(null, o)
  }else {
    return null
  }
};
cljs.core.peek = function peek(coll) {
  return cljs.core._peek.call(null, coll)
};
cljs.core.pop = function pop(coll) {
  return cljs.core._pop.call(null, coll)
};
cljs.core.disj = function() {
  var disj = null;
  var disj__82512 = function(coll) {
    return coll
  };
  var disj__82513 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__82514 = function() {
    var G__82516__delegate = function(coll, k, ks) {
      while(true) {
        var ret__82511 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__82517 = ret__82511;
          var G__82518 = cljs.core.first.call(null, ks);
          var G__82519 = cljs.core.next.call(null, ks);
          coll = G__82517;
          k = G__82518;
          ks = G__82519;
          continue
        }else {
          return ret__82511
        }
        break
      }
    };
    var G__82516 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82516__delegate.call(this, coll, k, ks)
    };
    G__82516.cljs$lang$maxFixedArity = 2;
    G__82516.cljs$lang$applyTo = function(arglist__82520) {
      var coll = cljs.core.first(arglist__82520);
      var k = cljs.core.first(cljs.core.next(arglist__82520));
      var ks = cljs.core.rest(cljs.core.next(arglist__82520));
      return G__82516__delegate.call(this, coll, k, ks)
    };
    return G__82516
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__82512.call(this, coll);
      case 2:
        return disj__82513.call(this, coll, k);
      default:
        return disj__82514.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__82514.cljs$lang$applyTo;
  return disj
}();
cljs.core.hash = function hash(o) {
  return cljs.core._hash.call(null, o)
};
cljs.core.empty_QMARK_ = function empty_QMARK_(coll) {
  return cljs.core.not.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.coll_QMARK_ = function coll_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____82521 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____82522 = x__445__auto____82521;
      if(cljs.core.truth_(and__3546__auto____82522)) {
        var and__3546__auto____82523 = x__445__auto____82521.cljs$core$ICollection$;
        if(cljs.core.truth_(and__3546__auto____82523)) {
          return cljs.core.not.call(null, x__445__auto____82521.hasOwnProperty("cljs$core$ICollection$"))
        }else {
          return and__3546__auto____82523
        }
      }else {
        return and__3546__auto____82522
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, x__445__auto____82521)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____82524 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____82525 = x__445__auto____82524;
      if(cljs.core.truth_(and__3546__auto____82525)) {
        var and__3546__auto____82526 = x__445__auto____82524.cljs$core$ISet$;
        if(cljs.core.truth_(and__3546__auto____82526)) {
          return cljs.core.not.call(null, x__445__auto____82524.hasOwnProperty("cljs$core$ISet$"))
        }else {
          return and__3546__auto____82526
        }
      }else {
        return and__3546__auto____82525
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, x__445__auto____82524)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var x__445__auto____82527 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____82528 = x__445__auto____82527;
    if(cljs.core.truth_(and__3546__auto____82528)) {
      var and__3546__auto____82529 = x__445__auto____82527.cljs$core$IAssociative$;
      if(cljs.core.truth_(and__3546__auto____82529)) {
        return cljs.core.not.call(null, x__445__auto____82527.hasOwnProperty("cljs$core$IAssociative$"))
      }else {
        return and__3546__auto____82529
      }
    }else {
      return and__3546__auto____82528
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, x__445__auto____82527)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var x__445__auto____82530 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____82531 = x__445__auto____82530;
    if(cljs.core.truth_(and__3546__auto____82531)) {
      var and__3546__auto____82532 = x__445__auto____82530.cljs$core$ISequential$;
      if(cljs.core.truth_(and__3546__auto____82532)) {
        return cljs.core.not.call(null, x__445__auto____82530.hasOwnProperty("cljs$core$ISequential$"))
      }else {
        return and__3546__auto____82532
      }
    }else {
      return and__3546__auto____82531
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, x__445__auto____82530)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var x__445__auto____82533 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____82534 = x__445__auto____82533;
    if(cljs.core.truth_(and__3546__auto____82534)) {
      var and__3546__auto____82535 = x__445__auto____82533.cljs$core$ICounted$;
      if(cljs.core.truth_(and__3546__auto____82535)) {
        return cljs.core.not.call(null, x__445__auto____82533.hasOwnProperty("cljs$core$ICounted$"))
      }else {
        return and__3546__auto____82535
      }
    }else {
      return and__3546__auto____82534
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, x__445__auto____82533)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
    return false
  }else {
    var x__445__auto____82536 = x;
    if(cljs.core.truth_(function() {
      var and__3546__auto____82537 = x__445__auto____82536;
      if(cljs.core.truth_(and__3546__auto____82537)) {
        var and__3546__auto____82538 = x__445__auto____82536.cljs$core$IMap$;
        if(cljs.core.truth_(and__3546__auto____82538)) {
          return cljs.core.not.call(null, x__445__auto____82536.hasOwnProperty("cljs$core$IMap$"))
        }else {
          return and__3546__auto____82538
        }
      }else {
        return and__3546__auto____82537
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, x__445__auto____82536)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var x__445__auto____82539 = x;
  if(cljs.core.truth_(function() {
    var and__3546__auto____82540 = x__445__auto____82539;
    if(cljs.core.truth_(and__3546__auto____82540)) {
      var and__3546__auto____82541 = x__445__auto____82539.cljs$core$IVector$;
      if(cljs.core.truth_(and__3546__auto____82541)) {
        return cljs.core.not.call(null, x__445__auto____82539.hasOwnProperty("cljs$core$IVector$"))
      }else {
        return and__3546__auto____82541
      }
    }else {
      return and__3546__auto____82540
    }
  }())) {
    return true
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, x__445__auto____82539)
  }
};
cljs.core.js_obj = function js_obj() {
  return{}
};
cljs.core.js_keys = function js_keys(obj) {
  var keys__82542 = cljs.core.array.call(null);
  goog.object.forEach.call(null, obj, function(val, key, obj) {
    return keys__82542.push(key)
  });
  return keys__82542
};
cljs.core.js_delete = function js_delete(obj, key) {
  return delete obj[key]
};
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
cljs.core.false_QMARK_ = function false_QMARK_(x) {
  return x === false
};
cljs.core.true_QMARK_ = function true_QMARK_(x) {
  return x === true
};
cljs.core.undefined_QMARK_ = function undefined_QMARK_(x) {
  return void 0 === x
};
cljs.core.instance_QMARK_ = function instance_QMARK_(t, o) {
  return o != null && (o instanceof t || o.constructor === t || t === Object)
};
cljs.core.seq_QMARK_ = function seq_QMARK_(s) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, s))) {
    return false
  }else {
    var x__445__auto____82543 = s;
    if(cljs.core.truth_(function() {
      var and__3546__auto____82544 = x__445__auto____82543;
      if(cljs.core.truth_(and__3546__auto____82544)) {
        var and__3546__auto____82545 = x__445__auto____82543.cljs$core$ISeq$;
        if(cljs.core.truth_(and__3546__auto____82545)) {
          return cljs.core.not.call(null, x__445__auto____82543.hasOwnProperty("cljs$core$ISeq$"))
        }else {
          return and__3546__auto____82545
        }
      }else {
        return and__3546__auto____82544
      }
    }())) {
      return true
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, x__445__auto____82543)
    }
  }
};
cljs.core.boolean$ = function boolean$(x) {
  if(cljs.core.truth_(x)) {
    return true
  }else {
    return false
  }
};
cljs.core.string_QMARK_ = function string_QMARK_(x) {
  var and__3546__auto____82546 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____82546)) {
    return cljs.core.not.call(null, function() {
      var or__3548__auto____82547 = cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0");
      if(cljs.core.truth_(or__3548__auto____82547)) {
        return or__3548__auto____82547
      }else {
        return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
      }
    }())
  }else {
    return and__3546__auto____82546
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3546__auto____82548 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____82548)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd0")
  }else {
    return and__3546__auto____82548
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3546__auto____82549 = goog.isString.call(null, x);
  if(cljs.core.truth_(and__3546__auto____82549)) {
    return cljs.core._EQ_.call(null, x.charAt(0), "\ufdd1")
  }else {
    return and__3546__auto____82549
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber.call(null, n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction.call(null, f)
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3546__auto____82550 = cljs.core.number_QMARK_.call(null, n);
  if(cljs.core.truth_(and__3546__auto____82550)) {
    return n == n.toFixed()
  }else {
    return and__3546__auto____82550
  }
};
cljs.core.contains_QMARK_ = function contains_QMARK_(coll, v) {
  if(cljs.core.truth_(cljs.core._lookup.call(null, coll, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)) {
    return false
  }else {
    return true
  }
};
cljs.core.find = function find(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____82551 = coll;
    if(cljs.core.truth_(and__3546__auto____82551)) {
      var and__3546__auto____82552 = cljs.core.associative_QMARK_.call(null, coll);
      if(cljs.core.truth_(and__3546__auto____82552)) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3546__auto____82552
      }
    }else {
      return and__3546__auto____82551
    }
  }())) {
    return cljs.core.Vector.fromArray([k, cljs.core._lookup.call(null, coll, k)])
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___82557 = function(x) {
    return true
  };
  var distinct_QMARK___82558 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var distinct_QMARK___82559 = function() {
    var G__82561__delegate = function(x, y, more) {
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y)))) {
        var s__82553 = cljs.core.set([y, x]);
        var xs__82554 = more;
        while(true) {
          var x__82555 = cljs.core.first.call(null, xs__82554);
          var etc__82556 = cljs.core.next.call(null, xs__82554);
          if(cljs.core.truth_(xs__82554)) {
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, s__82553, x__82555))) {
              return false
            }else {
              var G__82562 = cljs.core.conj.call(null, s__82553, x__82555);
              var G__82563 = etc__82556;
              s__82553 = G__82562;
              xs__82554 = G__82563;
              continue
            }
          }else {
            return true
          }
          break
        }
      }else {
        return false
      }
    };
    var G__82561 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82561__delegate.call(this, x, y, more)
    };
    G__82561.cljs$lang$maxFixedArity = 2;
    G__82561.cljs$lang$applyTo = function(arglist__82564) {
      var x = cljs.core.first(arglist__82564);
      var y = cljs.core.first(cljs.core.next(arglist__82564));
      var more = cljs.core.rest(cljs.core.next(arglist__82564));
      return G__82561__delegate.call(this, x, y, more)
    };
    return G__82561
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___82557.call(this, x);
      case 2:
        return distinct_QMARK___82558.call(this, x, y);
      default:
        return distinct_QMARK___82559.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___82559.cljs$lang$applyTo;
  return distinct_QMARK_
}();
cljs.core.compare = function compare(x, y) {
  return goog.array.defaultCompare.call(null, x, y)
};
cljs.core.fn__GT_comparator = function fn__GT_comparator(f) {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, f, cljs.core.compare))) {
    return cljs.core.compare
  }else {
    return function(x, y) {
      var r__82565 = f.call(null, x, y);
      if(cljs.core.truth_(cljs.core.number_QMARK_.call(null, r__82565))) {
        return r__82565
      }else {
        if(cljs.core.truth_(r__82565)) {
          return-1
        }else {
          if(cljs.core.truth_(f.call(null, y, x))) {
            return 1
          }else {
            return 0
          }
        }
      }
    }
  }
};
cljs.core.sort = function() {
  var sort = null;
  var sort__82567 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__82568 = function(comp, coll) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var a__82566 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort.call(null, a__82566, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__82566)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__82567.call(this, comp);
      case 2:
        return sort__82568.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__82570 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__82571 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__82570.call(this, keyfn, comp);
      case 3:
        return sort_by__82571.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return sort_by
}();
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__82573 = function(f, coll) {
    return cljs.core._reduce.call(null, coll, f)
  };
  var reduce__82574 = function(f, val, coll) {
    return cljs.core._reduce.call(null, coll, f, val)
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__82573.call(this, f, val);
      case 3:
        return reduce__82574.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reduce
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__82580 = function(f, coll) {
    var temp__3695__auto____82576 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3695__auto____82576)) {
      var s__82577 = temp__3695__auto____82576;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__82577), cljs.core.next.call(null, s__82577))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__82581 = function(f, val, coll) {
    var val__82578 = val;
    var coll__82579 = cljs.core.seq.call(null, coll);
    while(true) {
      if(cljs.core.truth_(coll__82579)) {
        var G__82583 = f.call(null, val__82578, cljs.core.first.call(null, coll__82579));
        var G__82584 = cljs.core.next.call(null, coll__82579);
        val__82578 = G__82583;
        coll__82579 = G__82584;
        continue
      }else {
        return val__82578
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__82580.call(this, f, val);
      case 3:
        return seq_reduce__82581.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return seq_reduce
}();
cljs.core.IReduce["_"] = true;
cljs.core._reduce["_"] = function() {
  var G__82585 = null;
  var G__82585__82586 = function(coll, f) {
    return cljs.core.seq_reduce.call(null, f, coll)
  };
  var G__82585__82587 = function(coll, f, start) {
    return cljs.core.seq_reduce.call(null, f, start, coll)
  };
  G__82585 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__82585__82586.call(this, coll, f);
      case 3:
        return G__82585__82587.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82585
}();
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___82589 = function() {
    return 0
  };
  var _PLUS___82590 = function(x) {
    return x
  };
  var _PLUS___82591 = function(x, y) {
    return x + y
  };
  var _PLUS___82592 = function() {
    var G__82594__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, x + y, more)
    };
    var G__82594 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82594__delegate.call(this, x, y, more)
    };
    G__82594.cljs$lang$maxFixedArity = 2;
    G__82594.cljs$lang$applyTo = function(arglist__82595) {
      var x = cljs.core.first(arglist__82595);
      var y = cljs.core.first(cljs.core.next(arglist__82595));
      var more = cljs.core.rest(cljs.core.next(arglist__82595));
      return G__82594__delegate.call(this, x, y, more)
    };
    return G__82594
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___82589.call(this);
      case 1:
        return _PLUS___82590.call(this, x);
      case 2:
        return _PLUS___82591.call(this, x, y);
      default:
        return _PLUS___82592.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___82592.cljs$lang$applyTo;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___82596 = function(x) {
    return-x
  };
  var ___82597 = function(x, y) {
    return x - y
  };
  var ___82598 = function() {
    var G__82600__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, x - y, more)
    };
    var G__82600 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82600__delegate.call(this, x, y, more)
    };
    G__82600.cljs$lang$maxFixedArity = 2;
    G__82600.cljs$lang$applyTo = function(arglist__82601) {
      var x = cljs.core.first(arglist__82601);
      var y = cljs.core.first(cljs.core.next(arglist__82601));
      var more = cljs.core.rest(cljs.core.next(arglist__82601));
      return G__82600__delegate.call(this, x, y, more)
    };
    return G__82600
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___82596.call(this, x);
      case 2:
        return ___82597.call(this, x, y);
      default:
        return ___82598.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___82598.cljs$lang$applyTo;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___82602 = function() {
    return 1
  };
  var _STAR___82603 = function(x) {
    return x
  };
  var _STAR___82604 = function(x, y) {
    return x * y
  };
  var _STAR___82605 = function() {
    var G__82607__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, x * y, more)
    };
    var G__82607 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82607__delegate.call(this, x, y, more)
    };
    G__82607.cljs$lang$maxFixedArity = 2;
    G__82607.cljs$lang$applyTo = function(arglist__82608) {
      var x = cljs.core.first(arglist__82608);
      var y = cljs.core.first(cljs.core.next(arglist__82608));
      var more = cljs.core.rest(cljs.core.next(arglist__82608));
      return G__82607__delegate.call(this, x, y, more)
    };
    return G__82607
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___82602.call(this);
      case 1:
        return _STAR___82603.call(this, x);
      case 2:
        return _STAR___82604.call(this, x, y);
      default:
        return _STAR___82605.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___82605.cljs$lang$applyTo;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___82609 = function(x) {
    return _SLASH_.call(null, 1, x)
  };
  var _SLASH___82610 = function(x, y) {
    return _SLASH_.call(null, x, y)
  };
  var _SLASH___82611 = function() {
    var G__82613__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__82613 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82613__delegate.call(this, x, y, more)
    };
    G__82613.cljs$lang$maxFixedArity = 2;
    G__82613.cljs$lang$applyTo = function(arglist__82614) {
      var x = cljs.core.first(arglist__82614);
      var y = cljs.core.first(cljs.core.next(arglist__82614));
      var more = cljs.core.rest(cljs.core.next(arglist__82614));
      return G__82613__delegate.call(this, x, y, more)
    };
    return G__82613
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___82609.call(this, x);
      case 2:
        return _SLASH___82610.call(this, x, y);
      default:
        return _SLASH___82611.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___82611.cljs$lang$applyTo;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___82615 = function(x) {
    return true
  };
  var _LT___82616 = function(x, y) {
    return x < y
  };
  var _LT___82617 = function() {
    var G__82619__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x < y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__82620 = y;
            var G__82621 = cljs.core.first.call(null, more);
            var G__82622 = cljs.core.next.call(null, more);
            x = G__82620;
            y = G__82621;
            more = G__82622;
            continue
          }else {
            return y < cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__82619 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82619__delegate.call(this, x, y, more)
    };
    G__82619.cljs$lang$maxFixedArity = 2;
    G__82619.cljs$lang$applyTo = function(arglist__82623) {
      var x = cljs.core.first(arglist__82623);
      var y = cljs.core.first(cljs.core.next(arglist__82623));
      var more = cljs.core.rest(cljs.core.next(arglist__82623));
      return G__82619__delegate.call(this, x, y, more)
    };
    return G__82619
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___82615.call(this, x);
      case 2:
        return _LT___82616.call(this, x, y);
      default:
        return _LT___82617.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___82617.cljs$lang$applyTo;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___82624 = function(x) {
    return true
  };
  var _LT__EQ___82625 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___82626 = function() {
    var G__82628__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x <= y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__82629 = y;
            var G__82630 = cljs.core.first.call(null, more);
            var G__82631 = cljs.core.next.call(null, more);
            x = G__82629;
            y = G__82630;
            more = G__82631;
            continue
          }else {
            return y <= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__82628 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82628__delegate.call(this, x, y, more)
    };
    G__82628.cljs$lang$maxFixedArity = 2;
    G__82628.cljs$lang$applyTo = function(arglist__82632) {
      var x = cljs.core.first(arglist__82632);
      var y = cljs.core.first(cljs.core.next(arglist__82632));
      var more = cljs.core.rest(cljs.core.next(arglist__82632));
      return G__82628__delegate.call(this, x, y, more)
    };
    return G__82628
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___82624.call(this, x);
      case 2:
        return _LT__EQ___82625.call(this, x, y);
      default:
        return _LT__EQ___82626.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___82626.cljs$lang$applyTo;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___82633 = function(x) {
    return true
  };
  var _GT___82634 = function(x, y) {
    return x > y
  };
  var _GT___82635 = function() {
    var G__82637__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x > y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__82638 = y;
            var G__82639 = cljs.core.first.call(null, more);
            var G__82640 = cljs.core.next.call(null, more);
            x = G__82638;
            y = G__82639;
            more = G__82640;
            continue
          }else {
            return y > cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__82637 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82637__delegate.call(this, x, y, more)
    };
    G__82637.cljs$lang$maxFixedArity = 2;
    G__82637.cljs$lang$applyTo = function(arglist__82641) {
      var x = cljs.core.first(arglist__82641);
      var y = cljs.core.first(cljs.core.next(arglist__82641));
      var more = cljs.core.rest(cljs.core.next(arglist__82641));
      return G__82637__delegate.call(this, x, y, more)
    };
    return G__82637
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___82633.call(this, x);
      case 2:
        return _GT___82634.call(this, x, y);
      default:
        return _GT___82635.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___82635.cljs$lang$applyTo;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___82642 = function(x) {
    return true
  };
  var _GT__EQ___82643 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___82644 = function() {
    var G__82646__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(x >= y)) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__82647 = y;
            var G__82648 = cljs.core.first.call(null, more);
            var G__82649 = cljs.core.next.call(null, more);
            x = G__82647;
            y = G__82648;
            more = G__82649;
            continue
          }else {
            return y >= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__82646 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82646__delegate.call(this, x, y, more)
    };
    G__82646.cljs$lang$maxFixedArity = 2;
    G__82646.cljs$lang$applyTo = function(arglist__82650) {
      var x = cljs.core.first(arglist__82650);
      var y = cljs.core.first(cljs.core.next(arglist__82650));
      var more = cljs.core.rest(cljs.core.next(arglist__82650));
      return G__82646__delegate.call(this, x, y, more)
    };
    return G__82646
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___82642.call(this, x);
      case 2:
        return _GT__EQ___82643.call(this, x, y);
      default:
        return _GT__EQ___82644.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___82644.cljs$lang$applyTo;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__82651 = function(x) {
    return x
  };
  var max__82652 = function(x, y) {
    return x > y ? x : y
  };
  var max__82653 = function() {
    var G__82655__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, x > y ? x : y, more)
    };
    var G__82655 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82655__delegate.call(this, x, y, more)
    };
    G__82655.cljs$lang$maxFixedArity = 2;
    G__82655.cljs$lang$applyTo = function(arglist__82656) {
      var x = cljs.core.first(arglist__82656);
      var y = cljs.core.first(cljs.core.next(arglist__82656));
      var more = cljs.core.rest(cljs.core.next(arglist__82656));
      return G__82655__delegate.call(this, x, y, more)
    };
    return G__82655
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__82651.call(this, x);
      case 2:
        return max__82652.call(this, x, y);
      default:
        return max__82653.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__82653.cljs$lang$applyTo;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__82657 = function(x) {
    return x
  };
  var min__82658 = function(x, y) {
    return x < y ? x : y
  };
  var min__82659 = function() {
    var G__82661__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, x < y ? x : y, more)
    };
    var G__82661 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82661__delegate.call(this, x, y, more)
    };
    G__82661.cljs$lang$maxFixedArity = 2;
    G__82661.cljs$lang$applyTo = function(arglist__82662) {
      var x = cljs.core.first(arglist__82662);
      var y = cljs.core.first(cljs.core.next(arglist__82662));
      var more = cljs.core.rest(cljs.core.next(arglist__82662));
      return G__82661__delegate.call(this, x, y, more)
    };
    return G__82661
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__82657.call(this, x);
      case 2:
        return min__82658.call(this, x, y);
      default:
        return min__82659.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__82659.cljs$lang$applyTo;
  return min
}();
cljs.core.fix = function fix(q) {
  if(cljs.core.truth_(q >= 0)) {
    return Math.floor.call(null, q)
  }else {
    return Math.ceil.call(null, q)
  }
};
cljs.core.mod = function mod(n, d) {
  return n % d
};
cljs.core.quot = function quot(n, d) {
  var rem__82663 = n % d;
  return cljs.core.fix.call(null, (n - rem__82663) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__82664 = cljs.core.quot.call(null, n, d);
  return n - d * q__82664
};
cljs.core.rand = function() {
  var rand = null;
  var rand__82665 = function() {
    return Math.random.call(null)
  };
  var rand__82666 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__82665.call(this);
      case 1:
        return rand__82666.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return cljs.core.fix.call(null, cljs.core.rand.call(null, n))
};
cljs.core.bit_xor = function bit_xor(x, y) {
  return x ^ y
};
cljs.core.bit_and = function bit_and(x, y) {
  return x & y
};
cljs.core.bit_or = function bit_or(x, y) {
  return x | y
};
cljs.core.bit_and_not = function bit_and_not(x, y) {
  return x & ~y
};
cljs.core.bit_clear = function bit_clear(x, n) {
  return x & ~(1 << n)
};
cljs.core.bit_flip = function bit_flip(x, n) {
  return x ^ 1 << n
};
cljs.core.bit_not = function bit_not(x) {
  return~x
};
cljs.core.bit_set = function bit_set(x, n) {
  return x | 1 << n
};
cljs.core.bit_test = function bit_test(x, n) {
  return(x & 1 << n) != 0
};
cljs.core.bit_shift_left = function bit_shift_left(x, n) {
  return x << n
};
cljs.core.bit_shift_right = function bit_shift_right(x, n) {
  return x >> n
};
cljs.core._EQ__EQ_ = function() {
  var _EQ__EQ_ = null;
  var _EQ__EQ___82668 = function(x) {
    return true
  };
  var _EQ__EQ___82669 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___82670 = function() {
    var G__82672__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.truth_(cljs.core.next.call(null, more))) {
            var G__82673 = y;
            var G__82674 = cljs.core.first.call(null, more);
            var G__82675 = cljs.core.next.call(null, more);
            x = G__82673;
            y = G__82674;
            more = G__82675;
            continue
          }else {
            return _EQ__EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__82672 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82672__delegate.call(this, x, y, more)
    };
    G__82672.cljs$lang$maxFixedArity = 2;
    G__82672.cljs$lang$applyTo = function(arglist__82676) {
      var x = cljs.core.first(arglist__82676);
      var y = cljs.core.first(cljs.core.next(arglist__82676));
      var more = cljs.core.rest(cljs.core.next(arglist__82676));
      return G__82672__delegate.call(this, x, y, more)
    };
    return G__82672
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___82668.call(this, x);
      case 2:
        return _EQ__EQ___82669.call(this, x, y);
      default:
        return _EQ__EQ___82670.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___82670.cljs$lang$applyTo;
  return _EQ__EQ_
}();
cljs.core.pos_QMARK_ = function pos_QMARK_(n) {
  return n > 0
};
cljs.core.zero_QMARK_ = function zero_QMARK_(n) {
  return n === 0
};
cljs.core.neg_QMARK_ = function neg_QMARK_(x) {
  return x < 0
};
cljs.core.nthnext = function nthnext(coll, n) {
  var n__82677 = n;
  var xs__82678 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82679 = xs__82678;
      if(cljs.core.truth_(and__3546__auto____82679)) {
        return n__82677 > 0
      }else {
        return and__3546__auto____82679
      }
    }())) {
      var G__82680 = n__82677 - 1;
      var G__82681 = cljs.core.next.call(null, xs__82678);
      n__82677 = G__82680;
      xs__82678 = G__82681;
      continue
    }else {
      return xs__82678
    }
    break
  }
};
cljs.core.IIndexed["_"] = true;
cljs.core._nth["_"] = function() {
  var G__82686 = null;
  var G__82686__82687 = function(coll, n) {
    var temp__3695__auto____82682 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____82682)) {
      var xs__82683 = temp__3695__auto____82682;
      return cljs.core.first.call(null, xs__82683)
    }else {
      throw new Error("Index out of bounds");
    }
  };
  var G__82686__82688 = function(coll, n, not_found) {
    var temp__3695__auto____82684 = cljs.core.nthnext.call(null, coll, n);
    if(cljs.core.truth_(temp__3695__auto____82684)) {
      var xs__82685 = temp__3695__auto____82684;
      return cljs.core.first.call(null, xs__82685)
    }else {
      return not_found
    }
  };
  G__82686 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82686__82687.call(this, coll, n);
      case 3:
        return G__82686__82688.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82686
}();
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___82690 = function() {
    return""
  };
  var str_STAR___82691 = function(x) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
      return""
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return x.toString()
      }else {
        return null
      }
    }
  };
  var str_STAR___82692 = function() {
    var G__82694__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__82695 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__82696 = cljs.core.next.call(null, more);
            sb = G__82695;
            more = G__82696;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__82694 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__82694__delegate.call(this, x, ys)
    };
    G__82694.cljs$lang$maxFixedArity = 1;
    G__82694.cljs$lang$applyTo = function(arglist__82697) {
      var x = cljs.core.first(arglist__82697);
      var ys = cljs.core.rest(arglist__82697);
      return G__82694__delegate.call(this, x, ys)
    };
    return G__82694
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___82690.call(this);
      case 1:
        return str_STAR___82691.call(this, x);
      default:
        return str_STAR___82692.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___82692.cljs$lang$applyTo;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__82698 = function() {
    return""
  };
  var str__82699 = function(x) {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, x))) {
      return x.substring(2, x.length)
    }else {
      if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, x))) {
        return cljs.core.str_STAR_.call(null, ":", x.substring(2, x.length))
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x))) {
          return""
        }else {
          if(cljs.core.truth_("\ufdd0'else")) {
            return x.toString()
          }else {
            return null
          }
        }
      }
    }
  };
  var str__82700 = function() {
    var G__82702__delegate = function(x, ys) {
      return cljs.core.apply.call(null, cljs.core.str_STAR_, x, ys)
    };
    var G__82702 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__82702__delegate.call(this, x, ys)
    };
    G__82702.cljs$lang$maxFixedArity = 1;
    G__82702.cljs$lang$applyTo = function(arglist__82703) {
      var x = cljs.core.first(arglist__82703);
      var ys = cljs.core.rest(arglist__82703);
      return G__82702__delegate.call(this, x, ys)
    };
    return G__82702
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__82698.call(this);
      case 1:
        return str__82699.call(this, x);
      default:
        return str__82700.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__82700.cljs$lang$applyTo;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__82704 = function(s, start) {
    return s.substring(start)
  };
  var subs__82705 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__82704.call(this, s, start);
      case 3:
        return subs__82705.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subs
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__82707 = function(name) {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, name))) {
      name
    }else {
      if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, name))) {
        cljs.core.str_STAR_.call(null, "\ufdd1", "'", cljs.core.subs.call(null, name, 2))
      }else {
      }
    }
    return cljs.core.str_STAR_.call(null, "\ufdd1", "'", name)
  };
  var symbol__82708 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__82707.call(this, ns);
      case 2:
        return symbol__82708.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__82710 = function(name) {
    if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, name))) {
      return name
    }else {
      if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, name))) {
        return cljs.core.str_STAR_.call(null, "\ufdd0", "'", cljs.core.subs.call(null, name, 2))
      }else {
        if(cljs.core.truth_("\ufdd0'else")) {
          return cljs.core.str_STAR_.call(null, "\ufdd0", "'", name)
        }else {
          return null
        }
      }
    }
  };
  var keyword__82711 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__82710.call(this, ns);
      case 2:
        return keyword__82711.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.sequential_QMARK_.call(null, y)) ? function() {
    var xs__82713 = cljs.core.seq.call(null, x);
    var ys__82714 = cljs.core.seq.call(null, y);
    while(true) {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, xs__82713))) {
        return cljs.core.nil_QMARK_.call(null, ys__82714)
      }else {
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, ys__82714))) {
          return false
        }else {
          if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__82713), cljs.core.first.call(null, ys__82714)))) {
            var G__82715 = cljs.core.next.call(null, xs__82713);
            var G__82716 = cljs.core.next.call(null, ys__82714);
            xs__82713 = G__82715;
            ys__82714 = G__82716;
            continue
          }else {
            if(cljs.core.truth_("\ufdd0'else")) {
              return false
            }else {
              return null
            }
          }
        }
      }
      break
    }
  }() : null)
};
cljs.core.hash_combine = function hash_combine(seed, hash) {
  return seed ^ hash + 2654435769 + (seed << 6) + (seed >> 2)
};
cljs.core.hash_coll = function hash_coll(coll) {
  return cljs.core.reduce.call(null, function(p1__82717_SHARP_, p2__82718_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__82717_SHARP_, cljs.core.hash.call(null, p2__82718_SHARP_))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll)), cljs.core.next.call(null, coll))
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__82719__82720 = cljs.core.seq.call(null, fn_map);
  if(cljs.core.truth_(G__82719__82720)) {
    var G__82722__82724 = cljs.core.first.call(null, G__82719__82720);
    var vec__82723__82725 = G__82722__82724;
    var key_name__82726 = cljs.core.nth.call(null, vec__82723__82725, 0, null);
    var f__82727 = cljs.core.nth.call(null, vec__82723__82725, 1, null);
    var G__82719__82728 = G__82719__82720;
    var G__82722__82729 = G__82722__82724;
    var G__82719__82730 = G__82719__82728;
    while(true) {
      var vec__82731__82732 = G__82722__82729;
      var key_name__82733 = cljs.core.nth.call(null, vec__82731__82732, 0, null);
      var f__82734 = cljs.core.nth.call(null, vec__82731__82732, 1, null);
      var G__82719__82735 = G__82719__82730;
      var str_name__82736 = cljs.core.name.call(null, key_name__82733);
      obj[str_name__82736] = f__82734;
      var temp__3698__auto____82737 = cljs.core.next.call(null, G__82719__82735);
      if(cljs.core.truth_(temp__3698__auto____82737)) {
        var G__82719__82738 = temp__3698__auto____82737;
        var G__82739 = cljs.core.first.call(null, G__82719__82738);
        var G__82740 = G__82719__82738;
        G__82722__82729 = G__82739;
        G__82719__82730 = G__82740;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return obj
};
cljs.core.List = function(meta, first, rest, count) {
  this.meta = meta;
  this.first = first;
  this.rest = rest;
  this.count = count
};
cljs.core.List.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.List")
};
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__82741 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__82742 = this;
  return new cljs.core.List(this__82742.meta, o, coll, this__82742.count + 1)
};
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__82743 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__82744 = this;
  return this__82744.count
};
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__82745 = this;
  return this__82745.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__82746 = this;
  return cljs.core._rest.call(null, coll)
};
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__82747 = this;
  return this__82747.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__82748 = this;
  return this__82748.rest
};
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__82749 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__82750 = this;
  return new cljs.core.List(meta, this__82750.first, this__82750.rest, this__82750.count)
};
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__82751 = this;
  return this__82751.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__82752 = this;
  return cljs.core.List.EMPTY
};
cljs.core.List;
cljs.core.EmptyList = function(meta) {
  this.meta = meta
};
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__82753 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__82754 = this;
  return new cljs.core.List(this__82754.meta, o, null, 1)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__82755 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__82756 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__82757 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__82758 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__82759 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__82760 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__82761 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__82762 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__82763 = this;
  return this__82763.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__82764 = this;
  return coll
};
cljs.core.EmptyList;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reverse = function reverse(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
};
cljs.core.list = function() {
  var list__delegate = function(items) {
    return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse.call(null, items))
  };
  var list = function(var_args) {
    var items = null;
    if(goog.isDef(var_args)) {
      items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return list__delegate.call(this, items)
  };
  list.cljs$lang$maxFixedArity = 0;
  list.cljs$lang$applyTo = function(arglist__82765) {
    var items = cljs.core.seq(arglist__82765);
    return list__delegate.call(this, items)
  };
  return list
}();
cljs.core.Cons = function(meta, first, rest) {
  this.meta = meta;
  this.first = first;
  this.rest = rest
};
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Cons")
};
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__82766 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__82767 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__82768 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__82769 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__82769.meta)
};
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__82770 = this;
  return new cljs.core.Cons(null, o, coll)
};
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__82771 = this;
  return this__82771.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__82772 = this;
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__82772.rest))) {
    return cljs.core.List.EMPTY
  }else {
    return this__82772.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__82773 = this;
  return this__82773.meta
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__82774 = this;
  return new cljs.core.Cons(meta, this__82774.first, this__82774.rest)
};
cljs.core.Cons;
cljs.core.cons = function cons(x, seq) {
  return new cljs.core.Cons(null, x, seq)
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__82775 = null;
  var G__82775__82776 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__82775__82777 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__82775 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__82775__82776.call(this, string, f);
      case 3:
        return G__82775__82777.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82775
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__82779 = null;
  var G__82779__82780 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__82779__82781 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__82779 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82779__82780.call(this, string, k);
      case 3:
        return G__82779__82781.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82779
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__82783 = null;
  var G__82783__82784 = function(string, n) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__82783__82785 = function(string, n, not_found) {
    if(cljs.core.truth_(n < cljs.core._count.call(null, string))) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__82783 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82783__82784.call(this, string, n);
      case 3:
        return G__82783__82785.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82783
}();
cljs.core.ICounted["string"] = true;
cljs.core._count["string"] = function(s) {
  return s.length
};
cljs.core.ISeqable["string"] = true;
cljs.core._seq["string"] = function(string) {
  return cljs.core.prim_seq.call(null, string, 0)
};
cljs.core.IHash["string"] = true;
cljs.core._hash["string"] = function(o) {
  return goog.string.hashCode.call(null, o)
};
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = function() {
  var G__82787 = null;
  var G__82787__82788 = function(this$, coll) {
    this$ = this;
    return cljs.core.get.call(null, coll, this$.toString())
  };
  var G__82787__82789 = function(this$, coll, not_found) {
    this$ = this;
    return cljs.core.get.call(null, coll, this$.toString(), not_found)
  };
  G__82787 = function(this$, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__82787__82788.call(this, this$, coll);
      case 3:
        return G__82787__82789.call(this, this$, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__82787
}();
String["prototype"]["apply"] = function(s, args) {
  if(cljs.core.truth_(cljs.core.count.call(null, args) < 2)) {
    return cljs.core.get.call(null, args[0], s)
  }else {
    return cljs.core.get.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__82791 = lazy_seq.x;
  if(cljs.core.truth_(lazy_seq.realized)) {
    return x__82791
  }else {
    lazy_seq.x = x__82791.call(null);
    lazy_seq.realized = true;
    return lazy_seq.x
  }
};
cljs.core.LazySeq = function(meta, realized, x) {
  this.meta = meta;
  this.realized = realized;
  this.x = x
};
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__82792 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__82793 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__82794 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__82795 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__82795.meta)
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__82796 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__82797 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__82798 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__82799 = this;
  return this__82799.meta
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__82800 = this;
  return new cljs.core.LazySeq(meta, this__82800.realized, this__82800.x)
};
cljs.core.LazySeq;
cljs.core.to_array = function to_array(s) {
  var ary__82801 = cljs.core.array.call(null);
  var s__82802 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, s__82802))) {
      ary__82801.push(cljs.core.first.call(null, s__82802));
      var G__82803 = cljs.core.next.call(null, s__82802);
      s__82802 = G__82803;
      continue
    }else {
      return ary__82801
    }
    break
  }
};
cljs.core.bounded_count = function bounded_count(s, n) {
  var s__82804 = s;
  var i__82805 = n;
  var sum__82806 = 0;
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____82807 = i__82805 > 0;
      if(cljs.core.truth_(and__3546__auto____82807)) {
        return cljs.core.seq.call(null, s__82804)
      }else {
        return and__3546__auto____82807
      }
    }())) {
      var G__82808 = cljs.core.next.call(null, s__82804);
      var G__82809 = i__82805 - 1;
      var G__82810 = sum__82806 + 1;
      s__82804 = G__82808;
      i__82805 = G__82809;
      sum__82806 = G__82810;
      continue
    }else {
      return sum__82806
    }
    break
  }
};
cljs.core.spread = function spread(arglist) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, arglist))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.next.call(null, arglist)))) {
      return cljs.core.seq.call(null, cljs.core.first.call(null, arglist))
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, arglist), spread.call(null, cljs.core.next.call(null, arglist)))
      }else {
        return null
      }
    }
  }
};
cljs.core.concat = function() {
  var concat = null;
  var concat__82814 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    })
  };
  var concat__82815 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    })
  };
  var concat__82816 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__82811 = cljs.core.seq.call(null, x);
      if(cljs.core.truth_(s__82811)) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__82811), concat.call(null, cljs.core.rest.call(null, s__82811), y))
      }else {
        return y
      }
    })
  };
  var concat__82817 = function() {
    var G__82819__delegate = function(x, y, zs) {
      var cat__82813 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__82812 = cljs.core.seq.call(null, xys);
          if(cljs.core.truth_(xys__82812)) {
            return cljs.core.cons.call(null, cljs.core.first.call(null, xys__82812), cat.call(null, cljs.core.rest.call(null, xys__82812), zs))
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        })
      };
      return cat__82813.call(null, concat.call(null, x, y), zs)
    };
    var G__82819 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82819__delegate.call(this, x, y, zs)
    };
    G__82819.cljs$lang$maxFixedArity = 2;
    G__82819.cljs$lang$applyTo = function(arglist__82820) {
      var x = cljs.core.first(arglist__82820);
      var y = cljs.core.first(cljs.core.next(arglist__82820));
      var zs = cljs.core.rest(cljs.core.next(arglist__82820));
      return G__82819__delegate.call(this, x, y, zs)
    };
    return G__82819
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__82814.call(this);
      case 1:
        return concat__82815.call(this, x);
      case 2:
        return concat__82816.call(this, x, y);
      default:
        return concat__82817.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__82817.cljs$lang$applyTo;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___82821 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___82822 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___82823 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___82824 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___82825 = function() {
    var G__82827__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__82827 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__82827__delegate.call(this, a, b, c, d, more)
    };
    G__82827.cljs$lang$maxFixedArity = 4;
    G__82827.cljs$lang$applyTo = function(arglist__82828) {
      var a = cljs.core.first(arglist__82828);
      var b = cljs.core.first(cljs.core.next(arglist__82828));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82828)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82828))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82828))));
      return G__82827__delegate.call(this, a, b, c, d, more)
    };
    return G__82827
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___82821.call(this, a);
      case 2:
        return list_STAR___82822.call(this, a, b);
      case 3:
        return list_STAR___82823.call(this, a, b, c);
      case 4:
        return list_STAR___82824.call(this, a, b, c, d);
      default:
        return list_STAR___82825.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___82825.cljs$lang$applyTo;
  return list_STAR_
}();
cljs.core.apply = function() {
  var apply = null;
  var apply__82838 = function(f, args) {
    var fixed_arity__82829 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, args, fixed_arity__82829 + 1) <= fixed_arity__82829)) {
        return f.apply(f, cljs.core.to_array.call(null, args))
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__82839 = function(f, x, args) {
    var arglist__82830 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__82831 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__82830, fixed_arity__82831) <= fixed_arity__82831)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__82830))
      }else {
        return f.cljs$lang$applyTo(arglist__82830)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__82830))
    }
  };
  var apply__82840 = function(f, x, y, args) {
    var arglist__82832 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__82833 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__82832, fixed_arity__82833) <= fixed_arity__82833)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__82832))
      }else {
        return f.cljs$lang$applyTo(arglist__82832)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__82832))
    }
  };
  var apply__82841 = function(f, x, y, z, args) {
    var arglist__82834 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__82835 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__82834, fixed_arity__82835) <= fixed_arity__82835)) {
        return f.apply(f, cljs.core.to_array.call(null, arglist__82834))
      }else {
        return f.cljs$lang$applyTo(arglist__82834)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__82834))
    }
  };
  var apply__82842 = function() {
    var G__82844__delegate = function(f, a, b, c, d, args) {
      var arglist__82836 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__82837 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        if(cljs.core.truth_(cljs.core.bounded_count.call(null, arglist__82836, fixed_arity__82837) <= fixed_arity__82837)) {
          return f.apply(f, cljs.core.to_array.call(null, arglist__82836))
        }else {
          return f.cljs$lang$applyTo(arglist__82836)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__82836))
      }
    };
    var G__82844 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__82844__delegate.call(this, f, a, b, c, d, args)
    };
    G__82844.cljs$lang$maxFixedArity = 5;
    G__82844.cljs$lang$applyTo = function(arglist__82845) {
      var f = cljs.core.first(arglist__82845);
      var a = cljs.core.first(cljs.core.next(arglist__82845));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82845)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82845))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82845)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82845)))));
      return G__82844__delegate.call(this, f, a, b, c, d, args)
    };
    return G__82844
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__82838.call(this, f, a);
      case 3:
        return apply__82839.call(this, f, a, b);
      case 4:
        return apply__82840.call(this, f, a, b, c);
      case 5:
        return apply__82841.call(this, f, a, b, c, d);
      default:
        return apply__82842.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__82842.cljs$lang$applyTo;
  return apply
}();
cljs.core.vary_meta = function() {
  var vary_meta__delegate = function(obj, f, args) {
    return cljs.core.with_meta.call(null, obj, cljs.core.apply.call(null, f, cljs.core.meta.call(null, obj), args))
  };
  var vary_meta = function(obj, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return vary_meta__delegate.call(this, obj, f, args)
  };
  vary_meta.cljs$lang$maxFixedArity = 2;
  vary_meta.cljs$lang$applyTo = function(arglist__82846) {
    var obj = cljs.core.first(arglist__82846);
    var f = cljs.core.first(cljs.core.next(arglist__82846));
    var args = cljs.core.rest(cljs.core.next(arglist__82846));
    return vary_meta__delegate.call(this, obj, f, args)
  };
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___82847 = function(x) {
    return false
  };
  var not_EQ___82848 = function(x, y) {
    return cljs.core.not.call(null, cljs.core._EQ_.call(null, x, y))
  };
  var not_EQ___82849 = function() {
    var G__82851__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__82851 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__82851__delegate.call(this, x, y, more)
    };
    G__82851.cljs$lang$maxFixedArity = 2;
    G__82851.cljs$lang$applyTo = function(arglist__82852) {
      var x = cljs.core.first(arglist__82852);
      var y = cljs.core.first(cljs.core.next(arglist__82852));
      var more = cljs.core.rest(cljs.core.next(arglist__82852));
      return G__82851__delegate.call(this, x, y, more)
    };
    return G__82851
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___82847.call(this, x);
      case 2:
        return not_EQ___82848.call(this, x, y);
      default:
        return not_EQ___82849.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___82849.cljs$lang$applyTo;
  return not_EQ_
}();
cljs.core.not_empty = function not_empty(coll) {
  if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
    return coll
  }else {
    return null
  }
};
cljs.core.every_QMARK_ = function every_QMARK_(pred, coll) {
  while(true) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.seq.call(null, coll)))) {
      return true
    }else {
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, coll)))) {
        var G__82853 = pred;
        var G__82854 = cljs.core.next.call(null, coll);
        pred = G__82853;
        coll = G__82854;
        continue
      }else {
        if(cljs.core.truth_("\ufdd0'else")) {
          return false
        }else {
          return null
        }
      }
    }
    break
  }
};
cljs.core.not_every_QMARK_ = function not_every_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.every_QMARK_.call(null, pred, coll))
};
cljs.core.some = function some(pred, coll) {
  while(true) {
    if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
      var or__3548__auto____82855 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3548__auto____82855)) {
        return or__3548__auto____82855
      }else {
        var G__82856 = pred;
        var G__82857 = cljs.core.next.call(null, coll);
        pred = G__82856;
        coll = G__82857;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.not_any_QMARK_ = function not_any_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.some.call(null, pred, coll))
};
cljs.core.even_QMARK_ = function even_QMARK_(n) {
  if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null, n))) {
    return(n & 1) === 0
  }else {
    throw new Error(cljs.core.str.call(null, "Argument must be an integer: ", n));
  }
};
cljs.core.odd_QMARK_ = function odd_QMARK_(n) {
  return cljs.core.not.call(null, cljs.core.even_QMARK_.call(null, n))
};
cljs.core.identity = function identity(x) {
  return x
};
cljs.core.complement = function complement(f) {
  return function() {
    var G__82858 = null;
    var G__82858__82859 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__82858__82860 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__82858__82861 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__82858__82862 = function() {
      var G__82864__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__82864 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__82864__delegate.call(this, x, y, zs)
      };
      G__82864.cljs$lang$maxFixedArity = 2;
      G__82864.cljs$lang$applyTo = function(arglist__82865) {
        var x = cljs.core.first(arglist__82865);
        var y = cljs.core.first(cljs.core.next(arglist__82865));
        var zs = cljs.core.rest(cljs.core.next(arglist__82865));
        return G__82864__delegate.call(this, x, y, zs)
      };
      return G__82864
    }();
    G__82858 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__82858__82859.call(this);
        case 1:
          return G__82858__82860.call(this, x);
        case 2:
          return G__82858__82861.call(this, x, y);
        default:
          return G__82858__82862.apply(this, arguments)
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__82858.cljs$lang$maxFixedArity = 2;
    G__82858.cljs$lang$applyTo = G__82858__82862.cljs$lang$applyTo;
    return G__82858
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__82866__delegate = function(args) {
      return x
    };
    var G__82866 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__82866__delegate.call(this, args)
    };
    G__82866.cljs$lang$maxFixedArity = 0;
    G__82866.cljs$lang$applyTo = function(arglist__82867) {
      var args = cljs.core.seq(arglist__82867);
      return G__82866__delegate.call(this, args)
    };
    return G__82866
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__82871 = function() {
    return cljs.core.identity
  };
  var comp__82872 = function(f) {
    return f
  };
  var comp__82873 = function(f, g) {
    return function() {
      var G__82877 = null;
      var G__82877__82878 = function() {
        return f.call(null, g.call(null))
      };
      var G__82877__82879 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__82877__82880 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__82877__82881 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__82877__82882 = function() {
        var G__82884__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__82884 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__82884__delegate.call(this, x, y, z, args)
        };
        G__82884.cljs$lang$maxFixedArity = 3;
        G__82884.cljs$lang$applyTo = function(arglist__82885) {
          var x = cljs.core.first(arglist__82885);
          var y = cljs.core.first(cljs.core.next(arglist__82885));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82885)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82885)));
          return G__82884__delegate.call(this, x, y, z, args)
        };
        return G__82884
      }();
      G__82877 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__82877__82878.call(this);
          case 1:
            return G__82877__82879.call(this, x);
          case 2:
            return G__82877__82880.call(this, x, y);
          case 3:
            return G__82877__82881.call(this, x, y, z);
          default:
            return G__82877__82882.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__82877.cljs$lang$maxFixedArity = 3;
      G__82877.cljs$lang$applyTo = G__82877__82882.cljs$lang$applyTo;
      return G__82877
    }()
  };
  var comp__82874 = function(f, g, h) {
    return function() {
      var G__82886 = null;
      var G__82886__82887 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__82886__82888 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__82886__82889 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__82886__82890 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__82886__82891 = function() {
        var G__82893__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__82893 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__82893__delegate.call(this, x, y, z, args)
        };
        G__82893.cljs$lang$maxFixedArity = 3;
        G__82893.cljs$lang$applyTo = function(arglist__82894) {
          var x = cljs.core.first(arglist__82894);
          var y = cljs.core.first(cljs.core.next(arglist__82894));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82894)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82894)));
          return G__82893__delegate.call(this, x, y, z, args)
        };
        return G__82893
      }();
      G__82886 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__82886__82887.call(this);
          case 1:
            return G__82886__82888.call(this, x);
          case 2:
            return G__82886__82889.call(this, x, y);
          case 3:
            return G__82886__82890.call(this, x, y, z);
          default:
            return G__82886__82891.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__82886.cljs$lang$maxFixedArity = 3;
      G__82886.cljs$lang$applyTo = G__82886__82891.cljs$lang$applyTo;
      return G__82886
    }()
  };
  var comp__82875 = function() {
    var G__82895__delegate = function(f1, f2, f3, fs) {
      var fs__82868 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__82896__delegate = function(args) {
          var ret__82869 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__82868), args);
          var fs__82870 = cljs.core.next.call(null, fs__82868);
          while(true) {
            if(cljs.core.truth_(fs__82870)) {
              var G__82897 = cljs.core.first.call(null, fs__82870).call(null, ret__82869);
              var G__82898 = cljs.core.next.call(null, fs__82870);
              ret__82869 = G__82897;
              fs__82870 = G__82898;
              continue
            }else {
              return ret__82869
            }
            break
          }
        };
        var G__82896 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__82896__delegate.call(this, args)
        };
        G__82896.cljs$lang$maxFixedArity = 0;
        G__82896.cljs$lang$applyTo = function(arglist__82899) {
          var args = cljs.core.seq(arglist__82899);
          return G__82896__delegate.call(this, args)
        };
        return G__82896
      }()
    };
    var G__82895 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__82895__delegate.call(this, f1, f2, f3, fs)
    };
    G__82895.cljs$lang$maxFixedArity = 3;
    G__82895.cljs$lang$applyTo = function(arglist__82900) {
      var f1 = cljs.core.first(arglist__82900);
      var f2 = cljs.core.first(cljs.core.next(arglist__82900));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82900)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82900)));
      return G__82895__delegate.call(this, f1, f2, f3, fs)
    };
    return G__82895
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__82871.call(this);
      case 1:
        return comp__82872.call(this, f1);
      case 2:
        return comp__82873.call(this, f1, f2);
      case 3:
        return comp__82874.call(this, f1, f2, f3);
      default:
        return comp__82875.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__82875.cljs$lang$applyTo;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__82901 = function(f, arg1) {
    return function() {
      var G__82906__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__82906 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__82906__delegate.call(this, args)
      };
      G__82906.cljs$lang$maxFixedArity = 0;
      G__82906.cljs$lang$applyTo = function(arglist__82907) {
        var args = cljs.core.seq(arglist__82907);
        return G__82906__delegate.call(this, args)
      };
      return G__82906
    }()
  };
  var partial__82902 = function(f, arg1, arg2) {
    return function() {
      var G__82908__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__82908 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__82908__delegate.call(this, args)
      };
      G__82908.cljs$lang$maxFixedArity = 0;
      G__82908.cljs$lang$applyTo = function(arglist__82909) {
        var args = cljs.core.seq(arglist__82909);
        return G__82908__delegate.call(this, args)
      };
      return G__82908
    }()
  };
  var partial__82903 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__82910__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__82910 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__82910__delegate.call(this, args)
      };
      G__82910.cljs$lang$maxFixedArity = 0;
      G__82910.cljs$lang$applyTo = function(arglist__82911) {
        var args = cljs.core.seq(arglist__82911);
        return G__82910__delegate.call(this, args)
      };
      return G__82910
    }()
  };
  var partial__82904 = function() {
    var G__82912__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__82913__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__82913 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__82913__delegate.call(this, args)
        };
        G__82913.cljs$lang$maxFixedArity = 0;
        G__82913.cljs$lang$applyTo = function(arglist__82914) {
          var args = cljs.core.seq(arglist__82914);
          return G__82913__delegate.call(this, args)
        };
        return G__82913
      }()
    };
    var G__82912 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__82912__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__82912.cljs$lang$maxFixedArity = 4;
    G__82912.cljs$lang$applyTo = function(arglist__82915) {
      var f = cljs.core.first(arglist__82915);
      var arg1 = cljs.core.first(cljs.core.next(arglist__82915));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82915)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82915))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__82915))));
      return G__82912__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    return G__82912
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__82901.call(this, f, arg1);
      case 3:
        return partial__82902.call(this, f, arg1, arg2);
      case 4:
        return partial__82903.call(this, f, arg1, arg2, arg3);
      default:
        return partial__82904.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__82904.cljs$lang$applyTo;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__82916 = function(f, x) {
    return function() {
      var G__82920 = null;
      var G__82920__82921 = function(a) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a)
      };
      var G__82920__82922 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b)
      };
      var G__82920__82923 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c)
      };
      var G__82920__82924 = function() {
        var G__82926__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, b, c, ds)
        };
        var G__82926 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__82926__delegate.call(this, a, b, c, ds)
        };
        G__82926.cljs$lang$maxFixedArity = 3;
        G__82926.cljs$lang$applyTo = function(arglist__82927) {
          var a = cljs.core.first(arglist__82927);
          var b = cljs.core.first(cljs.core.next(arglist__82927));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82927)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82927)));
          return G__82926__delegate.call(this, a, b, c, ds)
        };
        return G__82926
      }();
      G__82920 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__82920__82921.call(this, a);
          case 2:
            return G__82920__82922.call(this, a, b);
          case 3:
            return G__82920__82923.call(this, a, b, c);
          default:
            return G__82920__82924.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__82920.cljs$lang$maxFixedArity = 3;
      G__82920.cljs$lang$applyTo = G__82920__82924.cljs$lang$applyTo;
      return G__82920
    }()
  };
  var fnil__82917 = function(f, x, y) {
    return function() {
      var G__82928 = null;
      var G__82928__82929 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__82928__82930 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c)
      };
      var G__82928__82931 = function() {
        var G__82933__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, c, ds)
        };
        var G__82933 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__82933__delegate.call(this, a, b, c, ds)
        };
        G__82933.cljs$lang$maxFixedArity = 3;
        G__82933.cljs$lang$applyTo = function(arglist__82934) {
          var a = cljs.core.first(arglist__82934);
          var b = cljs.core.first(cljs.core.next(arglist__82934));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82934)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82934)));
          return G__82933__delegate.call(this, a, b, c, ds)
        };
        return G__82933
      }();
      G__82928 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__82928__82929.call(this, a, b);
          case 3:
            return G__82928__82930.call(this, a, b, c);
          default:
            return G__82928__82931.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__82928.cljs$lang$maxFixedArity = 3;
      G__82928.cljs$lang$applyTo = G__82928__82931.cljs$lang$applyTo;
      return G__82928
    }()
  };
  var fnil__82918 = function(f, x, y, z) {
    return function() {
      var G__82935 = null;
      var G__82935__82936 = function(a, b) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b)
      };
      var G__82935__82937 = function(a, b, c) {
        return f.call(null, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c)
      };
      var G__82935__82938 = function() {
        var G__82940__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, a)) ? x : a, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, b)) ? y : b, cljs.core.truth_(cljs.core.nil_QMARK_.call(null, c)) ? z : c, ds)
        };
        var G__82940 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__82940__delegate.call(this, a, b, c, ds)
        };
        G__82940.cljs$lang$maxFixedArity = 3;
        G__82940.cljs$lang$applyTo = function(arglist__82941) {
          var a = cljs.core.first(arglist__82941);
          var b = cljs.core.first(cljs.core.next(arglist__82941));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__82941)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__82941)));
          return G__82940__delegate.call(this, a, b, c, ds)
        };
        return G__82940
      }();
      G__82935 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__82935__82936.call(this, a, b);
          case 3:
            return G__82935__82937.call(this, a, b, c);
          default:
            return G__82935__82938.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__82935.cljs$lang$maxFixedArity = 3;
      G__82935.cljs$lang$applyTo = G__82935__82938.cljs$lang$applyTo;
      return G__82935
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__82916.call(this, f, x);
      case 3:
        return fnil__82917.call(this, f, x, y);
      case 4:
        return fnil__82918.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__82944 = function mpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____82942 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____82942)) {
        var s__82943 = temp__3698__auto____82942;
        return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__82943)), mpi.call(null, idx + 1, cljs.core.rest.call(null, s__82943)))
      }else {
        return null
      }
    })
  };
  return mapi__82944.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____82945 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____82945)) {
      var s__82946 = temp__3698__auto____82945;
      var x__82947 = f.call(null, cljs.core.first.call(null, s__82946));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__82947))) {
        return keep.call(null, f, cljs.core.rest.call(null, s__82946))
      }else {
        return cljs.core.cons.call(null, x__82947, keep.call(null, f, cljs.core.rest.call(null, s__82946)))
      }
    }else {
      return null
    }
  })
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__82957 = function kpi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____82954 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____82954)) {
        var s__82955 = temp__3698__auto____82954;
        var x__82956 = f.call(null, idx, cljs.core.first.call(null, s__82955));
        if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, x__82956))) {
          return kpi.call(null, idx + 1, cljs.core.rest.call(null, s__82955))
        }else {
          return cljs.core.cons.call(null, x__82956, kpi.call(null, idx + 1, cljs.core.rest.call(null, s__82955)))
        }
      }else {
        return null
      }
    })
  };
  return keepi__82957.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__83002 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__83007 = function() {
        return true
      };
      var ep1__83008 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__83009 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82964 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82964)) {
            return p.call(null, y)
          }else {
            return and__3546__auto____82964
          }
        }())
      };
      var ep1__83010 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82965 = p.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82965)) {
            var and__3546__auto____82966 = p.call(null, y);
            if(cljs.core.truth_(and__3546__auto____82966)) {
              return p.call(null, z)
            }else {
              return and__3546__auto____82966
            }
          }else {
            return and__3546__auto____82965
          }
        }())
      };
      var ep1__83011 = function() {
        var G__83013__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____82967 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____82967)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3546__auto____82967
            }
          }())
        };
        var G__83013 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83013__delegate.call(this, x, y, z, args)
        };
        G__83013.cljs$lang$maxFixedArity = 3;
        G__83013.cljs$lang$applyTo = function(arglist__83014) {
          var x = cljs.core.first(arglist__83014);
          var y = cljs.core.first(cljs.core.next(arglist__83014));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83014)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83014)));
          return G__83013__delegate.call(this, x, y, z, args)
        };
        return G__83013
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__83007.call(this);
          case 1:
            return ep1__83008.call(this, x);
          case 2:
            return ep1__83009.call(this, x, y);
          case 3:
            return ep1__83010.call(this, x, y, z);
          default:
            return ep1__83011.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__83011.cljs$lang$applyTo;
      return ep1
    }()
  };
  var every_pred__83003 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__83015 = function() {
        return true
      };
      var ep2__83016 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82968 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82968)) {
            return p2.call(null, x)
          }else {
            return and__3546__auto____82968
          }
        }())
      };
      var ep2__83017 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82969 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82969)) {
            var and__3546__auto____82970 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____82970)) {
              var and__3546__auto____82971 = p2.call(null, x);
              if(cljs.core.truth_(and__3546__auto____82971)) {
                return p2.call(null, y)
              }else {
                return and__3546__auto____82971
              }
            }else {
              return and__3546__auto____82970
            }
          }else {
            return and__3546__auto____82969
          }
        }())
      };
      var ep2__83018 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82972 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82972)) {
            var and__3546__auto____82973 = p1.call(null, y);
            if(cljs.core.truth_(and__3546__auto____82973)) {
              var and__3546__auto____82974 = p1.call(null, z);
              if(cljs.core.truth_(and__3546__auto____82974)) {
                var and__3546__auto____82975 = p2.call(null, x);
                if(cljs.core.truth_(and__3546__auto____82975)) {
                  var and__3546__auto____82976 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____82976)) {
                    return p2.call(null, z)
                  }else {
                    return and__3546__auto____82976
                  }
                }else {
                  return and__3546__auto____82975
                }
              }else {
                return and__3546__auto____82974
              }
            }else {
              return and__3546__auto____82973
            }
          }else {
            return and__3546__auto____82972
          }
        }())
      };
      var ep2__83019 = function() {
        var G__83021__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____82977 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____82977)) {
              return cljs.core.every_QMARK_.call(null, function(p1__82948_SHARP_) {
                var and__3546__auto____82978 = p1.call(null, p1__82948_SHARP_);
                if(cljs.core.truth_(and__3546__auto____82978)) {
                  return p2.call(null, p1__82948_SHARP_)
                }else {
                  return and__3546__auto____82978
                }
              }, args)
            }else {
              return and__3546__auto____82977
            }
          }())
        };
        var G__83021 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83021__delegate.call(this, x, y, z, args)
        };
        G__83021.cljs$lang$maxFixedArity = 3;
        G__83021.cljs$lang$applyTo = function(arglist__83022) {
          var x = cljs.core.first(arglist__83022);
          var y = cljs.core.first(cljs.core.next(arglist__83022));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83022)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83022)));
          return G__83021__delegate.call(this, x, y, z, args)
        };
        return G__83021
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__83015.call(this);
          case 1:
            return ep2__83016.call(this, x);
          case 2:
            return ep2__83017.call(this, x, y);
          case 3:
            return ep2__83018.call(this, x, y, z);
          default:
            return ep2__83019.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__83019.cljs$lang$applyTo;
      return ep2
    }()
  };
  var every_pred__83004 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__83023 = function() {
        return true
      };
      var ep3__83024 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82979 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82979)) {
            var and__3546__auto____82980 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____82980)) {
              return p3.call(null, x)
            }else {
              return and__3546__auto____82980
            }
          }else {
            return and__3546__auto____82979
          }
        }())
      };
      var ep3__83025 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82981 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82981)) {
            var and__3546__auto____82982 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____82982)) {
              var and__3546__auto____82983 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____82983)) {
                var and__3546__auto____82984 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____82984)) {
                  var and__3546__auto____82985 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____82985)) {
                    return p3.call(null, y)
                  }else {
                    return and__3546__auto____82985
                  }
                }else {
                  return and__3546__auto____82984
                }
              }else {
                return and__3546__auto____82983
              }
            }else {
              return and__3546__auto____82982
            }
          }else {
            return and__3546__auto____82981
          }
        }())
      };
      var ep3__83026 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3546__auto____82986 = p1.call(null, x);
          if(cljs.core.truth_(and__3546__auto____82986)) {
            var and__3546__auto____82987 = p2.call(null, x);
            if(cljs.core.truth_(and__3546__auto____82987)) {
              var and__3546__auto____82988 = p3.call(null, x);
              if(cljs.core.truth_(and__3546__auto____82988)) {
                var and__3546__auto____82989 = p1.call(null, y);
                if(cljs.core.truth_(and__3546__auto____82989)) {
                  var and__3546__auto____82990 = p2.call(null, y);
                  if(cljs.core.truth_(and__3546__auto____82990)) {
                    var and__3546__auto____82991 = p3.call(null, y);
                    if(cljs.core.truth_(and__3546__auto____82991)) {
                      var and__3546__auto____82992 = p1.call(null, z);
                      if(cljs.core.truth_(and__3546__auto____82992)) {
                        var and__3546__auto____82993 = p2.call(null, z);
                        if(cljs.core.truth_(and__3546__auto____82993)) {
                          return p3.call(null, z)
                        }else {
                          return and__3546__auto____82993
                        }
                      }else {
                        return and__3546__auto____82992
                      }
                    }else {
                      return and__3546__auto____82991
                    }
                  }else {
                    return and__3546__auto____82990
                  }
                }else {
                  return and__3546__auto____82989
                }
              }else {
                return and__3546__auto____82988
              }
            }else {
              return and__3546__auto____82987
            }
          }else {
            return and__3546__auto____82986
          }
        }())
      };
      var ep3__83027 = function() {
        var G__83029__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3546__auto____82994 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3546__auto____82994)) {
              return cljs.core.every_QMARK_.call(null, function(p1__82949_SHARP_) {
                var and__3546__auto____82995 = p1.call(null, p1__82949_SHARP_);
                if(cljs.core.truth_(and__3546__auto____82995)) {
                  var and__3546__auto____82996 = p2.call(null, p1__82949_SHARP_);
                  if(cljs.core.truth_(and__3546__auto____82996)) {
                    return p3.call(null, p1__82949_SHARP_)
                  }else {
                    return and__3546__auto____82996
                  }
                }else {
                  return and__3546__auto____82995
                }
              }, args)
            }else {
              return and__3546__auto____82994
            }
          }())
        };
        var G__83029 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83029__delegate.call(this, x, y, z, args)
        };
        G__83029.cljs$lang$maxFixedArity = 3;
        G__83029.cljs$lang$applyTo = function(arglist__83030) {
          var x = cljs.core.first(arglist__83030);
          var y = cljs.core.first(cljs.core.next(arglist__83030));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83030)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83030)));
          return G__83029__delegate.call(this, x, y, z, args)
        };
        return G__83029
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__83023.call(this);
          case 1:
            return ep3__83024.call(this, x);
          case 2:
            return ep3__83025.call(this, x, y);
          case 3:
            return ep3__83026.call(this, x, y, z);
          default:
            return ep3__83027.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__83027.cljs$lang$applyTo;
      return ep3
    }()
  };
  var every_pred__83005 = function() {
    var G__83031__delegate = function(p1, p2, p3, ps) {
      var ps__82997 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__83032 = function() {
          return true
        };
        var epn__83033 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__82950_SHARP_) {
            return p1__82950_SHARP_.call(null, x)
          }, ps__82997)
        };
        var epn__83034 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__82951_SHARP_) {
            var and__3546__auto____82998 = p1__82951_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____82998)) {
              return p1__82951_SHARP_.call(null, y)
            }else {
              return and__3546__auto____82998
            }
          }, ps__82997)
        };
        var epn__83035 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__82952_SHARP_) {
            var and__3546__auto____82999 = p1__82952_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3546__auto____82999)) {
              var and__3546__auto____83000 = p1__82952_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3546__auto____83000)) {
                return p1__82952_SHARP_.call(null, z)
              }else {
                return and__3546__auto____83000
              }
            }else {
              return and__3546__auto____82999
            }
          }, ps__82997)
        };
        var epn__83036 = function() {
          var G__83038__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3546__auto____83001 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3546__auto____83001)) {
                return cljs.core.every_QMARK_.call(null, function(p1__82953_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__82953_SHARP_, args)
                }, ps__82997)
              }else {
                return and__3546__auto____83001
              }
            }())
          };
          var G__83038 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__83038__delegate.call(this, x, y, z, args)
          };
          G__83038.cljs$lang$maxFixedArity = 3;
          G__83038.cljs$lang$applyTo = function(arglist__83039) {
            var x = cljs.core.first(arglist__83039);
            var y = cljs.core.first(cljs.core.next(arglist__83039));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83039)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83039)));
            return G__83038__delegate.call(this, x, y, z, args)
          };
          return G__83038
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__83032.call(this);
            case 1:
              return epn__83033.call(this, x);
            case 2:
              return epn__83034.call(this, x, y);
            case 3:
              return epn__83035.call(this, x, y, z);
            default:
              return epn__83036.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__83036.cljs$lang$applyTo;
        return epn
      }()
    };
    var G__83031 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__83031__delegate.call(this, p1, p2, p3, ps)
    };
    G__83031.cljs$lang$maxFixedArity = 3;
    G__83031.cljs$lang$applyTo = function(arglist__83040) {
      var p1 = cljs.core.first(arglist__83040);
      var p2 = cljs.core.first(cljs.core.next(arglist__83040));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83040)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83040)));
      return G__83031__delegate.call(this, p1, p2, p3, ps)
    };
    return G__83031
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__83002.call(this, p1);
      case 2:
        return every_pred__83003.call(this, p1, p2);
      case 3:
        return every_pred__83004.call(this, p1, p2, p3);
      default:
        return every_pred__83005.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__83005.cljs$lang$applyTo;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__83080 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__83085 = function() {
        return null
      };
      var sp1__83086 = function(x) {
        return p.call(null, x)
      };
      var sp1__83087 = function(x, y) {
        var or__3548__auto____83042 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83042)) {
          return or__3548__auto____83042
        }else {
          return p.call(null, y)
        }
      };
      var sp1__83088 = function(x, y, z) {
        var or__3548__auto____83043 = p.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83043)) {
          return or__3548__auto____83043
        }else {
          var or__3548__auto____83044 = p.call(null, y);
          if(cljs.core.truth_(or__3548__auto____83044)) {
            return or__3548__auto____83044
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__83089 = function() {
        var G__83091__delegate = function(x, y, z, args) {
          var or__3548__auto____83045 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____83045)) {
            return or__3548__auto____83045
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__83091 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83091__delegate.call(this, x, y, z, args)
        };
        G__83091.cljs$lang$maxFixedArity = 3;
        G__83091.cljs$lang$applyTo = function(arglist__83092) {
          var x = cljs.core.first(arglist__83092);
          var y = cljs.core.first(cljs.core.next(arglist__83092));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83092)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83092)));
          return G__83091__delegate.call(this, x, y, z, args)
        };
        return G__83091
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__83085.call(this);
          case 1:
            return sp1__83086.call(this, x);
          case 2:
            return sp1__83087.call(this, x, y);
          case 3:
            return sp1__83088.call(this, x, y, z);
          default:
            return sp1__83089.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__83089.cljs$lang$applyTo;
      return sp1
    }()
  };
  var some_fn__83081 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__83093 = function() {
        return null
      };
      var sp2__83094 = function(x) {
        var or__3548__auto____83046 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83046)) {
          return or__3548__auto____83046
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__83095 = function(x, y) {
        var or__3548__auto____83047 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83047)) {
          return or__3548__auto____83047
        }else {
          var or__3548__auto____83048 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____83048)) {
            return or__3548__auto____83048
          }else {
            var or__3548__auto____83049 = p2.call(null, x);
            if(cljs.core.truth_(or__3548__auto____83049)) {
              return or__3548__auto____83049
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__83096 = function(x, y, z) {
        var or__3548__auto____83050 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83050)) {
          return or__3548__auto____83050
        }else {
          var or__3548__auto____83051 = p1.call(null, y);
          if(cljs.core.truth_(or__3548__auto____83051)) {
            return or__3548__auto____83051
          }else {
            var or__3548__auto____83052 = p1.call(null, z);
            if(cljs.core.truth_(or__3548__auto____83052)) {
              return or__3548__auto____83052
            }else {
              var or__3548__auto____83053 = p2.call(null, x);
              if(cljs.core.truth_(or__3548__auto____83053)) {
                return or__3548__auto____83053
              }else {
                var or__3548__auto____83054 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____83054)) {
                  return or__3548__auto____83054
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__83097 = function() {
        var G__83099__delegate = function(x, y, z, args) {
          var or__3548__auto____83055 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____83055)) {
            return or__3548__auto____83055
          }else {
            return cljs.core.some.call(null, function(p1__82958_SHARP_) {
              var or__3548__auto____83056 = p1.call(null, p1__82958_SHARP_);
              if(cljs.core.truth_(or__3548__auto____83056)) {
                return or__3548__auto____83056
              }else {
                return p2.call(null, p1__82958_SHARP_)
              }
            }, args)
          }
        };
        var G__83099 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83099__delegate.call(this, x, y, z, args)
        };
        G__83099.cljs$lang$maxFixedArity = 3;
        G__83099.cljs$lang$applyTo = function(arglist__83100) {
          var x = cljs.core.first(arglist__83100);
          var y = cljs.core.first(cljs.core.next(arglist__83100));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83100)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83100)));
          return G__83099__delegate.call(this, x, y, z, args)
        };
        return G__83099
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__83093.call(this);
          case 1:
            return sp2__83094.call(this, x);
          case 2:
            return sp2__83095.call(this, x, y);
          case 3:
            return sp2__83096.call(this, x, y, z);
          default:
            return sp2__83097.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__83097.cljs$lang$applyTo;
      return sp2
    }()
  };
  var some_fn__83082 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__83101 = function() {
        return null
      };
      var sp3__83102 = function(x) {
        var or__3548__auto____83057 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83057)) {
          return or__3548__auto____83057
        }else {
          var or__3548__auto____83058 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____83058)) {
            return or__3548__auto____83058
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__83103 = function(x, y) {
        var or__3548__auto____83059 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83059)) {
          return or__3548__auto____83059
        }else {
          var or__3548__auto____83060 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____83060)) {
            return or__3548__auto____83060
          }else {
            var or__3548__auto____83061 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____83061)) {
              return or__3548__auto____83061
            }else {
              var or__3548__auto____83062 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____83062)) {
                return or__3548__auto____83062
              }else {
                var or__3548__auto____83063 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____83063)) {
                  return or__3548__auto____83063
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__83104 = function(x, y, z) {
        var or__3548__auto____83064 = p1.call(null, x);
        if(cljs.core.truth_(or__3548__auto____83064)) {
          return or__3548__auto____83064
        }else {
          var or__3548__auto____83065 = p2.call(null, x);
          if(cljs.core.truth_(or__3548__auto____83065)) {
            return or__3548__auto____83065
          }else {
            var or__3548__auto____83066 = p3.call(null, x);
            if(cljs.core.truth_(or__3548__auto____83066)) {
              return or__3548__auto____83066
            }else {
              var or__3548__auto____83067 = p1.call(null, y);
              if(cljs.core.truth_(or__3548__auto____83067)) {
                return or__3548__auto____83067
              }else {
                var or__3548__auto____83068 = p2.call(null, y);
                if(cljs.core.truth_(or__3548__auto____83068)) {
                  return or__3548__auto____83068
                }else {
                  var or__3548__auto____83069 = p3.call(null, y);
                  if(cljs.core.truth_(or__3548__auto____83069)) {
                    return or__3548__auto____83069
                  }else {
                    var or__3548__auto____83070 = p1.call(null, z);
                    if(cljs.core.truth_(or__3548__auto____83070)) {
                      return or__3548__auto____83070
                    }else {
                      var or__3548__auto____83071 = p2.call(null, z);
                      if(cljs.core.truth_(or__3548__auto____83071)) {
                        return or__3548__auto____83071
                      }else {
                        return p3.call(null, z)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      var sp3__83105 = function() {
        var G__83107__delegate = function(x, y, z, args) {
          var or__3548__auto____83072 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3548__auto____83072)) {
            return or__3548__auto____83072
          }else {
            return cljs.core.some.call(null, function(p1__82959_SHARP_) {
              var or__3548__auto____83073 = p1.call(null, p1__82959_SHARP_);
              if(cljs.core.truth_(or__3548__auto____83073)) {
                return or__3548__auto____83073
              }else {
                var or__3548__auto____83074 = p2.call(null, p1__82959_SHARP_);
                if(cljs.core.truth_(or__3548__auto____83074)) {
                  return or__3548__auto____83074
                }else {
                  return p3.call(null, p1__82959_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__83107 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83107__delegate.call(this, x, y, z, args)
        };
        G__83107.cljs$lang$maxFixedArity = 3;
        G__83107.cljs$lang$applyTo = function(arglist__83108) {
          var x = cljs.core.first(arglist__83108);
          var y = cljs.core.first(cljs.core.next(arglist__83108));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83108)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83108)));
          return G__83107__delegate.call(this, x, y, z, args)
        };
        return G__83107
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__83101.call(this);
          case 1:
            return sp3__83102.call(this, x);
          case 2:
            return sp3__83103.call(this, x, y);
          case 3:
            return sp3__83104.call(this, x, y, z);
          default:
            return sp3__83105.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__83105.cljs$lang$applyTo;
      return sp3
    }()
  };
  var some_fn__83083 = function() {
    var G__83109__delegate = function(p1, p2, p3, ps) {
      var ps__83075 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__83110 = function() {
          return null
        };
        var spn__83111 = function(x) {
          return cljs.core.some.call(null, function(p1__82960_SHARP_) {
            return p1__82960_SHARP_.call(null, x)
          }, ps__83075)
        };
        var spn__83112 = function(x, y) {
          return cljs.core.some.call(null, function(p1__82961_SHARP_) {
            var or__3548__auto____83076 = p1__82961_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____83076)) {
              return or__3548__auto____83076
            }else {
              return p1__82961_SHARP_.call(null, y)
            }
          }, ps__83075)
        };
        var spn__83113 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__82962_SHARP_) {
            var or__3548__auto____83077 = p1__82962_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3548__auto____83077)) {
              return or__3548__auto____83077
            }else {
              var or__3548__auto____83078 = p1__82962_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3548__auto____83078)) {
                return or__3548__auto____83078
              }else {
                return p1__82962_SHARP_.call(null, z)
              }
            }
          }, ps__83075)
        };
        var spn__83114 = function() {
          var G__83116__delegate = function(x, y, z, args) {
            var or__3548__auto____83079 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3548__auto____83079)) {
              return or__3548__auto____83079
            }else {
              return cljs.core.some.call(null, function(p1__82963_SHARP_) {
                return cljs.core.some.call(null, p1__82963_SHARP_, args)
              }, ps__83075)
            }
          };
          var G__83116 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__83116__delegate.call(this, x, y, z, args)
          };
          G__83116.cljs$lang$maxFixedArity = 3;
          G__83116.cljs$lang$applyTo = function(arglist__83117) {
            var x = cljs.core.first(arglist__83117);
            var y = cljs.core.first(cljs.core.next(arglist__83117));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83117)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83117)));
            return G__83116__delegate.call(this, x, y, z, args)
          };
          return G__83116
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__83110.call(this);
            case 1:
              return spn__83111.call(this, x);
            case 2:
              return spn__83112.call(this, x, y);
            case 3:
              return spn__83113.call(this, x, y, z);
            default:
              return spn__83114.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__83114.cljs$lang$applyTo;
        return spn
      }()
    };
    var G__83109 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__83109__delegate.call(this, p1, p2, p3, ps)
    };
    G__83109.cljs$lang$maxFixedArity = 3;
    G__83109.cljs$lang$applyTo = function(arglist__83118) {
      var p1 = cljs.core.first(arglist__83118);
      var p2 = cljs.core.first(cljs.core.next(arglist__83118));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83118)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83118)));
      return G__83109__delegate.call(this, p1, p2, p3, ps)
    };
    return G__83109
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__83080.call(this, p1);
      case 2:
        return some_fn__83081.call(this, p1, p2);
      case 3:
        return some_fn__83082.call(this, p1, p2, p3);
      default:
        return some_fn__83083.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__83083.cljs$lang$applyTo;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__83131 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____83119 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____83119)) {
        var s__83120 = temp__3698__auto____83119;
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__83120)), map.call(null, f, cljs.core.rest.call(null, s__83120)))
      }else {
        return null
      }
    })
  };
  var map__83132 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__83121 = cljs.core.seq.call(null, c1);
      var s2__83122 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____83123 = s1__83121;
        if(cljs.core.truth_(and__3546__auto____83123)) {
          return s2__83122
        }else {
          return and__3546__auto____83123
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__83121), cljs.core.first.call(null, s2__83122)), map.call(null, f, cljs.core.rest.call(null, s1__83121), cljs.core.rest.call(null, s2__83122)))
      }else {
        return null
      }
    })
  };
  var map__83133 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__83124 = cljs.core.seq.call(null, c1);
      var s2__83125 = cljs.core.seq.call(null, c2);
      var s3__83126 = cljs.core.seq.call(null, c3);
      if(cljs.core.truth_(function() {
        var and__3546__auto____83127 = s1__83124;
        if(cljs.core.truth_(and__3546__auto____83127)) {
          var and__3546__auto____83128 = s2__83125;
          if(cljs.core.truth_(and__3546__auto____83128)) {
            return s3__83126
          }else {
            return and__3546__auto____83128
          }
        }else {
          return and__3546__auto____83127
        }
      }())) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__83124), cljs.core.first.call(null, s2__83125), cljs.core.first.call(null, s3__83126)), map.call(null, f, cljs.core.rest.call(null, s1__83124), cljs.core.rest.call(null, s2__83125), cljs.core.rest.call(null, s3__83126)))
      }else {
        return null
      }
    })
  };
  var map__83134 = function() {
    var G__83136__delegate = function(f, c1, c2, c3, colls) {
      var step__83130 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__83129 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__83129))) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__83129), step.call(null, map.call(null, cljs.core.rest, ss__83129)))
          }else {
            return null
          }
        })
      };
      return map.call(null, function(p1__83041_SHARP_) {
        return cljs.core.apply.call(null, f, p1__83041_SHARP_)
      }, step__83130.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__83136 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__83136__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__83136.cljs$lang$maxFixedArity = 4;
    G__83136.cljs$lang$applyTo = function(arglist__83137) {
      var f = cljs.core.first(arglist__83137);
      var c1 = cljs.core.first(cljs.core.next(arglist__83137));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83137)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83137))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83137))));
      return G__83136__delegate.call(this, f, c1, c2, c3, colls)
    };
    return G__83136
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__83131.call(this, f, c1);
      case 3:
        return map__83132.call(this, f, c1, c2);
      case 4:
        return map__83133.call(this, f, c1, c2, c3);
      default:
        return map__83134.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__83134.cljs$lang$applyTo;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(cljs.core.truth_(n > 0)) {
      var temp__3698__auto____83138 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____83138)) {
        var s__83139 = temp__3698__auto____83138;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__83139), take.call(null, n - 1, cljs.core.rest.call(null, s__83139)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.drop = function drop(n, coll) {
  var step__83142 = function(n, coll) {
    while(true) {
      var s__83140 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____83141 = n > 0;
        if(cljs.core.truth_(and__3546__auto____83141)) {
          return s__83140
        }else {
          return and__3546__auto____83141
        }
      }())) {
        var G__83143 = n - 1;
        var G__83144 = cljs.core.rest.call(null, s__83140);
        n = G__83143;
        coll = G__83144;
        continue
      }else {
        return s__83140
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__83142.call(null, n, coll)
  })
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__83145 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__83146 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__83145.call(this, n);
      case 2:
        return drop_last__83146.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__83148 = cljs.core.seq.call(null, coll);
  var lead__83149 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(cljs.core.truth_(lead__83149)) {
      var G__83150 = cljs.core.next.call(null, s__83148);
      var G__83151 = cljs.core.next.call(null, lead__83149);
      s__83148 = G__83150;
      lead__83149 = G__83151;
      continue
    }else {
      return s__83148
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__83154 = function(pred, coll) {
    while(true) {
      var s__83152 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3546__auto____83153 = s__83152;
        if(cljs.core.truth_(and__3546__auto____83153)) {
          return pred.call(null, cljs.core.first.call(null, s__83152))
        }else {
          return and__3546__auto____83153
        }
      }())) {
        var G__83155 = pred;
        var G__83156 = cljs.core.rest.call(null, s__83152);
        pred = G__83155;
        coll = G__83156;
        continue
      }else {
        return s__83152
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__83154.call(null, pred, coll)
  })
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____83157 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____83157)) {
      var s__83158 = temp__3698__auto____83157;
      return cljs.core.concat.call(null, s__83158, cycle.call(null, s__83158))
    }else {
      return null
    }
  })
};
cljs.core.split_at = function split_at(n, coll) {
  return cljs.core.Vector.fromArray([cljs.core.take.call(null, n, coll), cljs.core.drop.call(null, n, coll)])
};
cljs.core.repeat = function() {
  var repeat = null;
  var repeat__83159 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    })
  };
  var repeat__83160 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__83159.call(this, n);
      case 2:
        return repeat__83160.call(this, n, x)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return repeat
}();
cljs.core.replicate = function replicate(n, x) {
  return cljs.core.take.call(null, n, cljs.core.repeat.call(null, x))
};
cljs.core.repeatedly = function() {
  var repeatedly = null;
  var repeatedly__83162 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    })
  };
  var repeatedly__83163 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__83162.call(this, n);
      case 2:
        return repeatedly__83163.call(this, n, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return repeatedly
}();
cljs.core.iterate = function iterate(f, x) {
  return cljs.core.cons.call(null, x, new cljs.core.LazySeq(null, false, function() {
    return iterate.call(null, f, f.call(null, x))
  }))
};
cljs.core.interleave = function() {
  var interleave = null;
  var interleave__83169 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__83165 = cljs.core.seq.call(null, c1);
      var s2__83166 = cljs.core.seq.call(null, c2);
      if(cljs.core.truth_(function() {
        var and__3546__auto____83167 = s1__83165;
        if(cljs.core.truth_(and__3546__auto____83167)) {
          return s2__83166
        }else {
          return and__3546__auto____83167
        }
      }())) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__83165), cljs.core.cons.call(null, cljs.core.first.call(null, s2__83166), interleave.call(null, cljs.core.rest.call(null, s1__83165), cljs.core.rest.call(null, s2__83166))))
      }else {
        return null
      }
    })
  };
  var interleave__83170 = function() {
    var G__83172__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__83168 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.truth_(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__83168))) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__83168), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__83168)))
        }else {
          return null
        }
      })
    };
    var G__83172 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__83172__delegate.call(this, c1, c2, colls)
    };
    G__83172.cljs$lang$maxFixedArity = 2;
    G__83172.cljs$lang$applyTo = function(arglist__83173) {
      var c1 = cljs.core.first(arglist__83173);
      var c2 = cljs.core.first(cljs.core.next(arglist__83173));
      var colls = cljs.core.rest(cljs.core.next(arglist__83173));
      return G__83172__delegate.call(this, c1, c2, colls)
    };
    return G__83172
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__83169.call(this, c1, c2);
      default:
        return interleave__83170.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__83170.cljs$lang$applyTo;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__83176 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____83174 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____83174)) {
        var coll__83175 = temp__3695__auto____83174;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__83175), cat.call(null, cljs.core.rest.call(null, coll__83175), colls))
      }else {
        if(cljs.core.truth_(cljs.core.seq.call(null, colls))) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    })
  };
  return cat__83176.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__83177 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__83178 = function() {
    var G__83180__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__83180 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__83180__delegate.call(this, f, coll, colls)
    };
    G__83180.cljs$lang$maxFixedArity = 2;
    G__83180.cljs$lang$applyTo = function(arglist__83181) {
      var f = cljs.core.first(arglist__83181);
      var coll = cljs.core.first(cljs.core.next(arglist__83181));
      var colls = cljs.core.rest(cljs.core.next(arglist__83181));
      return G__83180__delegate.call(this, f, coll, colls)
    };
    return G__83180
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__83177.call(this, f, coll);
      default:
        return mapcat__83178.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__83178.cljs$lang$applyTo;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____83182 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____83182)) {
      var s__83183 = temp__3698__auto____83182;
      var f__83184 = cljs.core.first.call(null, s__83183);
      var r__83185 = cljs.core.rest.call(null, s__83183);
      if(cljs.core.truth_(pred.call(null, f__83184))) {
        return cljs.core.cons.call(null, f__83184, filter.call(null, pred, r__83185))
      }else {
        return filter.call(null, pred, r__83185)
      }
    }else {
      return null
    }
  })
};
cljs.core.remove = function remove(pred, coll) {
  return cljs.core.filter.call(null, cljs.core.complement.call(null, pred), coll)
};
cljs.core.tree_seq = function tree_seq(branch_QMARK_, children, root) {
  var walk__83187 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    })
  };
  return walk__83187.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__83186_SHARP_) {
    return cljs.core.not.call(null, cljs.core.sequential_QMARK_.call(null, p1__83186_SHARP_))
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  return cljs.core.reduce.call(null, cljs.core._conj, to, from)
};
cljs.core.partition = function() {
  var partition = null;
  var partition__83194 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__83195 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____83188 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____83188)) {
        var s__83189 = temp__3698__auto____83188;
        var p__83190 = cljs.core.take.call(null, n, s__83189);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__83190)))) {
          return cljs.core.cons.call(null, p__83190, partition.call(null, n, step, cljs.core.drop.call(null, step, s__83189)))
        }else {
          return null
        }
      }else {
        return null
      }
    })
  };
  var partition__83196 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____83191 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____83191)) {
        var s__83192 = temp__3698__auto____83191;
        var p__83193 = cljs.core.take.call(null, n, s__83192);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, n, cljs.core.count.call(null, p__83193)))) {
          return cljs.core.cons.call(null, p__83193, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__83192)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__83193, pad)))
        }
      }else {
        return null
      }
    })
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__83194.call(this, n, step);
      case 3:
        return partition__83195.call(this, n, step, pad);
      case 4:
        return partition__83196.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__83202 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__83203 = function(m, ks, not_found) {
    var sentinel__83198 = cljs.core.lookup_sentinel;
    var m__83199 = m;
    var ks__83200 = cljs.core.seq.call(null, ks);
    while(true) {
      if(cljs.core.truth_(ks__83200)) {
        var m__83201 = cljs.core.get.call(null, m__83199, cljs.core.first.call(null, ks__83200), sentinel__83198);
        if(cljs.core.truth_(sentinel__83198 === m__83201)) {
          return not_found
        }else {
          var G__83205 = sentinel__83198;
          var G__83206 = m__83201;
          var G__83207 = cljs.core.next.call(null, ks__83200);
          sentinel__83198 = G__83205;
          m__83199 = G__83206;
          ks__83200 = G__83207;
          continue
        }
      }else {
        return m__83199
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__83202.call(this, m, ks);
      case 3:
        return get_in__83203.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__83208, v) {
  var vec__83209__83210 = p__83208;
  var k__83211 = cljs.core.nth.call(null, vec__83209__83210, 0, null);
  var ks__83212 = cljs.core.nthnext.call(null, vec__83209__83210, 1);
  if(cljs.core.truth_(ks__83212)) {
    return cljs.core.assoc.call(null, m, k__83211, assoc_in.call(null, cljs.core.get.call(null, m, k__83211), ks__83212, v))
  }else {
    return cljs.core.assoc.call(null, m, k__83211, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__83213, f, args) {
    var vec__83214__83215 = p__83213;
    var k__83216 = cljs.core.nth.call(null, vec__83214__83215, 0, null);
    var ks__83217 = cljs.core.nthnext.call(null, vec__83214__83215, 1);
    if(cljs.core.truth_(ks__83217)) {
      return cljs.core.assoc.call(null, m, k__83216, cljs.core.apply.call(null, update_in, cljs.core.get.call(null, m, k__83216), ks__83217, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__83216, cljs.core.apply.call(null, f, cljs.core.get.call(null, m, k__83216), args))
    }
  };
  var update_in = function(m, p__83213, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__83213, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__83218) {
    var m = cljs.core.first(arglist__83218);
    var p__83213 = cljs.core.first(cljs.core.next(arglist__83218));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83218)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83218)));
    return update_in__delegate.call(this, m, p__83213, f, args)
  };
  return update_in
}();
cljs.core.Vector = function(meta, array) {
  this.meta = meta;
  this.array = array
};
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83219 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = function() {
  var G__83246 = null;
  var G__83246__83247 = function(coll, k) {
    var this__83220 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__83246__83248 = function(coll, k, not_found) {
    var this__83221 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__83246 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83246__83247.call(this, coll, k);
      case 3:
        return G__83246__83248.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83246
}();
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__83222 = this;
  var new_array__83223 = cljs.core.aclone.call(null, this__83222.array);
  new_array__83223[k] = v;
  return new cljs.core.Vector(this__83222.meta, new_array__83223)
};
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = function() {
  var G__83250 = null;
  var G__83250__83251 = function(coll, k) {
    var this__83224 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__83250__83252 = function(coll, k, not_found) {
    var this__83225 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__83250 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83250__83251.call(this, coll, k);
      case 3:
        return G__83250__83252.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83250
}();
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__83226 = this;
  var new_array__83227 = cljs.core.aclone.call(null, this__83226.array);
  new_array__83227.push(o);
  return new cljs.core.Vector(this__83226.meta, new_array__83227)
};
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = function() {
  var G__83254 = null;
  var G__83254__83255 = function(v, f) {
    var this__83228 = this;
    return cljs.core.ci_reduce.call(null, this__83228.array, f)
  };
  var G__83254__83256 = function(v, f, start) {
    var this__83229 = this;
    return cljs.core.ci_reduce.call(null, this__83229.array, f, start)
  };
  G__83254 = function(v, f, start) {
    switch(arguments.length) {
      case 2:
        return G__83254__83255.call(this, v, f);
      case 3:
        return G__83254__83256.call(this, v, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83254
}();
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83230 = this;
  if(cljs.core.truth_(this__83230.array.length > 0)) {
    var vector_seq__83231 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(cljs.core.truth_(i < this__83230.array.length)) {
          return cljs.core.cons.call(null, this__83230.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      })
    };
    return vector_seq__83231.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__83232 = this;
  return this__83232.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__83233 = this;
  var count__83234 = this__83233.array.length;
  if(cljs.core.truth_(count__83234 > 0)) {
    return this__83233.array[count__83234 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__83235 = this;
  if(cljs.core.truth_(this__83235.array.length > 0)) {
    var new_array__83236 = cljs.core.aclone.call(null, this__83235.array);
    new_array__83236.pop();
    return new cljs.core.Vector(this__83235.meta, new_array__83236)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__83237 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83238 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83239 = this;
  return new cljs.core.Vector(meta, this__83239.array)
};
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83240 = this;
  return this__83240.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = function() {
  var G__83258 = null;
  var G__83258__83259 = function(coll, n) {
    var this__83241 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____83242 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____83242)) {
        return n < this__83241.array.length
      }else {
        return and__3546__auto____83242
      }
    }())) {
      return this__83241.array[n]
    }else {
      return null
    }
  };
  var G__83258__83260 = function(coll, n, not_found) {
    var this__83243 = this;
    if(cljs.core.truth_(function() {
      var and__3546__auto____83244 = 0 <= n;
      if(cljs.core.truth_(and__3546__auto____83244)) {
        return n < this__83243.array.length
      }else {
        return and__3546__auto____83244
      }
    }())) {
      return this__83243.array[n]
    }else {
      return not_found
    }
  };
  G__83258 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83258__83259.call(this, coll, n);
      case 3:
        return G__83258__83260.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83258
}();
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83245 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__83245.meta)
};
cljs.core.Vector;
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, cljs.core.array.call(null));
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs)
};
cljs.core.vec = function vec(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.Vector.EMPTY, coll)
};
cljs.core.vector = function() {
  var vector__delegate = function(args) {
    return cljs.core.vec.call(null, args)
  };
  var vector = function(var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return vector__delegate.call(this, args)
  };
  vector.cljs$lang$maxFixedArity = 0;
  vector.cljs$lang$applyTo = function(arglist__83262) {
    var args = cljs.core.seq(arglist__83262);
    return vector__delegate.call(this, args)
  };
  return vector
}();
cljs.core.Subvec = function(meta, v, start, end) {
  this.meta = meta;
  this.v = v;
  this.start = start;
  this.end = end
};
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83263 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = function() {
  var G__83285 = null;
  var G__83285__83286 = function(coll, k) {
    var this__83264 = this;
    return cljs.core._nth.call(null, coll, k, null)
  };
  var G__83285__83287 = function(coll, k, not_found) {
    var this__83265 = this;
    return cljs.core._nth.call(null, coll, k, not_found)
  };
  G__83285 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83285__83286.call(this, coll, k);
      case 3:
        return G__83285__83287.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83285
}();
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = function(coll, key, val) {
  var this__83266 = this;
  var v_pos__83267 = this__83266.start + key;
  return new cljs.core.Subvec(this__83266.meta, cljs.core._assoc.call(null, this__83266.v, v_pos__83267, val), this__83266.start, this__83266.end > v_pos__83267 + 1 ? this__83266.end : v_pos__83267 + 1)
};
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = function() {
  var G__83289 = null;
  var G__83289__83290 = function(coll, k) {
    var this__83268 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__83289__83291 = function(coll, k, not_found) {
    var this__83269 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__83289 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83289__83290.call(this, coll, k);
      case 3:
        return G__83289__83291.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83289
}();
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__83270 = this;
  return new cljs.core.Subvec(this__83270.meta, cljs.core._assoc_n.call(null, this__83270.v, this__83270.end, o), this__83270.start, this__83270.end + 1)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = function() {
  var G__83293 = null;
  var G__83293__83294 = function(coll, f) {
    var this__83271 = this;
    return cljs.core.ci_reduce.call(null, coll, f)
  };
  var G__83293__83295 = function(coll, f, start) {
    var this__83272 = this;
    return cljs.core.ci_reduce.call(null, coll, f, start)
  };
  G__83293 = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return G__83293__83294.call(this, coll, f);
      case 3:
        return G__83293__83295.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83293
}();
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83273 = this;
  var subvec_seq__83274 = function subvec_seq(i) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, i, this__83273.end))) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__83273.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }))
    }
  };
  return subvec_seq__83274.call(null, this__83273.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__83275 = this;
  return this__83275.end - this__83275.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__83276 = this;
  return cljs.core._nth.call(null, this__83276.v, this__83276.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__83277 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, this__83277.start, this__83277.end))) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__83277.meta, this__83277.v, this__83277.start, this__83277.end - 1)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = function(coll, n, val) {
  var this__83278 = this;
  return cljs.core._assoc.call(null, coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83279 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83280 = this;
  return new cljs.core.Subvec(meta, this__83280.v, this__83280.start, this__83280.end)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83281 = this;
  return this__83281.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = function() {
  var G__83297 = null;
  var G__83297__83298 = function(coll, n) {
    var this__83282 = this;
    return cljs.core._nth.call(null, this__83282.v, this__83282.start + n)
  };
  var G__83297__83299 = function(coll, n, not_found) {
    var this__83283 = this;
    return cljs.core._nth.call(null, this__83283.v, this__83283.start + n, not_found)
  };
  G__83297 = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83297__83298.call(this, coll, n);
      case 3:
        return G__83297__83299.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83297
}();
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83284 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__83284.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__83301 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__83302 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__83301.call(this, v, start);
      case 3:
        return subvec__83302.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return subvec
}();
cljs.core.PersistentQueueSeq = function(meta, front, rear) {
  this.meta = meta;
  this.front = front;
  this.rear = rear
};
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83304 = this;
  return coll
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83305 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83306 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83307 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__83307.meta)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__83308 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__83309 = this;
  return cljs.core._first.call(null, this__83309.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__83310 = this;
  var temp__3695__auto____83311 = cljs.core.next.call(null, this__83310.front);
  if(cljs.core.truth_(temp__3695__auto____83311)) {
    var f1__83312 = temp__3695__auto____83311;
    return new cljs.core.PersistentQueueSeq(this__83310.meta, f1__83312, this__83310.rear)
  }else {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, this__83310.rear))) {
      return cljs.core._empty.call(null, coll)
    }else {
      return new cljs.core.PersistentQueueSeq(this__83310.meta, this__83310.rear, null)
    }
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83313 = this;
  return this__83313.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83314 = this;
  return new cljs.core.PersistentQueueSeq(meta, this__83314.front, this__83314.rear)
};
cljs.core.PersistentQueueSeq;
cljs.core.PersistentQueue = function(meta, count, front, rear) {
  this.meta = meta;
  this.count = count;
  this.front = front;
  this.rear = rear
};
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83315 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__83316 = this;
  if(cljs.core.truth_(this__83316.front)) {
    return new cljs.core.PersistentQueue(this__83316.meta, this__83316.count + 1, this__83316.front, cljs.core.conj.call(null, function() {
      var or__3548__auto____83317 = this__83316.rear;
      if(cljs.core.truth_(or__3548__auto____83317)) {
        return or__3548__auto____83317
      }else {
        return cljs.core.Vector.fromArray([])
      }
    }(), o))
  }else {
    return new cljs.core.PersistentQueue(this__83316.meta, this__83316.count + 1, cljs.core.conj.call(null, this__83316.front, o), cljs.core.Vector.fromArray([]))
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83318 = this;
  var rear__83319 = cljs.core.seq.call(null, this__83318.rear);
  if(cljs.core.truth_(function() {
    var or__3548__auto____83320 = this__83318.front;
    if(cljs.core.truth_(or__3548__auto____83320)) {
      return or__3548__auto____83320
    }else {
      return rear__83319
    }
  }())) {
    return new cljs.core.PersistentQueueSeq(null, this__83318.front, cljs.core.seq.call(null, rear__83319))
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__83321 = this;
  return this__83321.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = function(coll) {
  var this__83322 = this;
  return cljs.core._first.call(null, this__83322.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = function(coll) {
  var this__83323 = this;
  if(cljs.core.truth_(this__83323.front)) {
    var temp__3695__auto____83324 = cljs.core.next.call(null, this__83323.front);
    if(cljs.core.truth_(temp__3695__auto____83324)) {
      var f1__83325 = temp__3695__auto____83324;
      return new cljs.core.PersistentQueue(this__83323.meta, this__83323.count - 1, f1__83325, this__83323.rear)
    }else {
      return new cljs.core.PersistentQueue(this__83323.meta, this__83323.count - 1, cljs.core.seq.call(null, this__83323.rear), cljs.core.Vector.fromArray([]))
    }
  }else {
    return coll
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = function(coll) {
  var this__83326 = this;
  return cljs.core.first.call(null, this__83326.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = function(coll) {
  var this__83327 = this;
  return cljs.core.rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83328 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83329 = this;
  return new cljs.core.PersistentQueue(meta, this__83329.count, this__83329.front, this__83329.rear)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83330 = this;
  return this__83330.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83331 = this;
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.Vector.fromArray([]));
cljs.core.NeverEquiv = function() {
};
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__83332 = this;
  return false
};
cljs.core.NeverEquiv;
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.truth_(cljs.core.map_QMARK_.call(null, y)) ? cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, x), cljs.core.count.call(null, y))) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core.get.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__83333 = array.length;
  var i__83334 = 0;
  while(true) {
    if(cljs.core.truth_(i__83334 < len__83333)) {
      if(cljs.core.truth_(cljs.core._EQ_.call(null, k, array[i__83334]))) {
        return i__83334
      }else {
        var G__83335 = i__83334 + incr;
        i__83334 = G__83335;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.obj_map_contains_key_QMARK_ = function() {
  var obj_map_contains_key_QMARK_ = null;
  var obj_map_contains_key_QMARK___83337 = function(k, strobj) {
    return obj_map_contains_key_QMARK_.call(null, k, strobj, true, false)
  };
  var obj_map_contains_key_QMARK___83338 = function(k, strobj, true_val, false_val) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____83336 = goog.isString.call(null, k);
      if(cljs.core.truth_(and__3546__auto____83336)) {
        return strobj.hasOwnProperty(k)
      }else {
        return and__3546__auto____83336
      }
    }())) {
      return true_val
    }else {
      return false_val
    }
  };
  obj_map_contains_key_QMARK_ = function(k, strobj, true_val, false_val) {
    switch(arguments.length) {
      case 2:
        return obj_map_contains_key_QMARK___83337.call(this, k, strobj);
      case 4:
        return obj_map_contains_key_QMARK___83338.call(this, k, strobj, true_val, false_val)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return obj_map_contains_key_QMARK_
}();
cljs.core.ObjMap = function(meta, keys, strobj) {
  this.meta = meta;
  this.keys = keys;
  this.strobj = strobj
};
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83341 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__83362 = null;
  var G__83362__83363 = function(coll, k) {
    var this__83342 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__83362__83364 = function(coll, k, not_found) {
    var this__83343 = this;
    return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__83343.strobj, this__83343.strobj[k], not_found)
  };
  G__83362 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83362__83363.call(this, coll, k);
      case 3:
        return G__83362__83364.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83362
}();
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__83344 = this;
  if(cljs.core.truth_(goog.isString.call(null, k))) {
    var new_strobj__83345 = goog.object.clone.call(null, this__83344.strobj);
    var overwrite_QMARK___83346 = new_strobj__83345.hasOwnProperty(k);
    new_strobj__83345[k] = v;
    if(cljs.core.truth_(overwrite_QMARK___83346)) {
      return new cljs.core.ObjMap(this__83344.meta, this__83344.keys, new_strobj__83345)
    }else {
      var new_keys__83347 = cljs.core.aclone.call(null, this__83344.keys);
      new_keys__83347.push(k);
      return new cljs.core.ObjMap(this__83344.meta, new_keys__83347, new_strobj__83345)
    }
  }else {
    return cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null, k, v), cljs.core.seq.call(null, coll)), this__83344.meta)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__83348 = this;
  return cljs.core.obj_map_contains_key_QMARK_.call(null, k, this__83348.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = function() {
  var G__83366 = null;
  var G__83366__83367 = function(coll, k) {
    var this__83349 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__83366__83368 = function(coll, k, not_found) {
    var this__83350 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__83366 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83366__83367.call(this, coll, k);
      case 3:
        return G__83366__83368.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83366
}();
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__83351 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83352 = this;
  if(cljs.core.truth_(this__83352.keys.length > 0)) {
    return cljs.core.map.call(null, function(p1__83340_SHARP_) {
      return cljs.core.vector.call(null, p1__83340_SHARP_, this__83352.strobj[p1__83340_SHARP_])
    }, this__83352.keys)
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__83353 = this;
  return this__83353.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83354 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83355 = this;
  return new cljs.core.ObjMap(meta, this__83355.keys, this__83355.strobj)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83356 = this;
  return this__83356.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83357 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__83357.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__83358 = this;
  if(cljs.core.truth_(function() {
    var and__3546__auto____83359 = goog.isString.call(null, k);
    if(cljs.core.truth_(and__3546__auto____83359)) {
      return this__83358.strobj.hasOwnProperty(k)
    }else {
      return and__3546__auto____83359
    }
  }())) {
    var new_keys__83360 = cljs.core.aclone.call(null, this__83358.keys);
    var new_strobj__83361 = goog.object.clone.call(null, this__83358.strobj);
    new_keys__83360.splice(cljs.core.scan_array.call(null, 1, k, new_keys__83360), 1);
    cljs.core.js_delete.call(null, new_strobj__83361, k);
    return new cljs.core.ObjMap(this__83358.meta, new_keys__83360, new_strobj__83361)
  }else {
    return coll
  }
};
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, cljs.core.array.call(null), cljs.core.js_obj.call(null));
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj)
};
cljs.core.HashMap = function(meta, count, hashobj) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj
};
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83371 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = function() {
  var G__83403 = null;
  var G__83403__83404 = function(coll, k) {
    var this__83372 = this;
    return cljs.core._lookup.call(null, coll, k, null)
  };
  var G__83403__83405 = function(coll, k, not_found) {
    var this__83373 = this;
    var bucket__83374 = this__83373.hashobj[cljs.core.hash.call(null, k)];
    var i__83375 = cljs.core.truth_(bucket__83374) ? cljs.core.scan_array.call(null, 2, k, bucket__83374) : null;
    if(cljs.core.truth_(i__83375)) {
      return bucket__83374[i__83375 + 1]
    }else {
      return not_found
    }
  };
  G__83403 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83403__83404.call(this, coll, k);
      case 3:
        return G__83403__83405.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83403
}();
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = function(coll, k, v) {
  var this__83376 = this;
  var h__83377 = cljs.core.hash.call(null, k);
  var bucket__83378 = this__83376.hashobj[h__83377];
  if(cljs.core.truth_(bucket__83378)) {
    var new_bucket__83379 = cljs.core.aclone.call(null, bucket__83378);
    var new_hashobj__83380 = goog.object.clone.call(null, this__83376.hashobj);
    new_hashobj__83380[h__83377] = new_bucket__83379;
    var temp__3695__auto____83381 = cljs.core.scan_array.call(null, 2, k, new_bucket__83379);
    if(cljs.core.truth_(temp__3695__auto____83381)) {
      var i__83382 = temp__3695__auto____83381;
      new_bucket__83379[i__83382 + 1] = v;
      return new cljs.core.HashMap(this__83376.meta, this__83376.count, new_hashobj__83380)
    }else {
      new_bucket__83379.push(k, v);
      return new cljs.core.HashMap(this__83376.meta, this__83376.count + 1, new_hashobj__83380)
    }
  }else {
    var new_hashobj__83383 = goog.object.clone.call(null, this__83376.hashobj);
    new_hashobj__83383[h__83377] = cljs.core.array.call(null, k, v);
    return new cljs.core.HashMap(this__83376.meta, this__83376.count + 1, new_hashobj__83383)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = function(coll, k) {
  var this__83384 = this;
  var bucket__83385 = this__83384.hashobj[cljs.core.hash.call(null, k)];
  var i__83386 = cljs.core.truth_(bucket__83385) ? cljs.core.scan_array.call(null, 2, k, bucket__83385) : null;
  if(cljs.core.truth_(i__83386)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = function() {
  var G__83407 = null;
  var G__83407__83408 = function(coll, k) {
    var this__83387 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__83407__83409 = function(coll, k, not_found) {
    var this__83388 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__83407 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83407__83408.call(this, coll, k);
      case 3:
        return G__83407__83409.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83407
}();
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = function(coll, entry) {
  var this__83389 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry))) {
    return cljs.core._assoc.call(null, coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83390 = this;
  if(cljs.core.truth_(this__83390.count > 0)) {
    var hashes__83391 = cljs.core.js_keys.call(null, this__83390.hashobj).sort();
    return cljs.core.mapcat.call(null, function(p1__83370_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__83390.hashobj[p1__83370_SHARP_]))
    }, hashes__83391)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__83392 = this;
  return this__83392.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83393 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83394 = this;
  return new cljs.core.HashMap(meta, this__83394.count, this__83394.hashobj)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83395 = this;
  return this__83395.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83396 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__83396.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = function(coll, k) {
  var this__83397 = this;
  var h__83398 = cljs.core.hash.call(null, k);
  var bucket__83399 = this__83397.hashobj[h__83398];
  var i__83400 = cljs.core.truth_(bucket__83399) ? cljs.core.scan_array.call(null, 2, k, bucket__83399) : null;
  if(cljs.core.truth_(cljs.core.not.call(null, i__83400))) {
    return coll
  }else {
    var new_hashobj__83401 = goog.object.clone.call(null, this__83397.hashobj);
    if(cljs.core.truth_(3 > bucket__83399.length)) {
      cljs.core.js_delete.call(null, new_hashobj__83401, h__83398)
    }else {
      var new_bucket__83402 = cljs.core.aclone.call(null, bucket__83399);
      new_bucket__83402.splice(i__83400, 2);
      new_hashobj__83401[h__83398] = new_bucket__83402
    }
    return new cljs.core.HashMap(this__83397.meta, this__83397.count - 1, new_hashobj__83401)
  }
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, cljs.core.js_obj.call(null));
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__83411 = ks.length;
  var i__83412 = 0;
  var out__83413 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(cljs.core.truth_(i__83412 < len__83411)) {
      var G__83414 = i__83412 + 1;
      var G__83415 = cljs.core.assoc.call(null, out__83413, ks[i__83412], vs[i__83412]);
      i__83412 = G__83414;
      out__83413 = G__83415;
      continue
    }else {
      return out__83413
    }
    break
  }
};
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in$__83416 = cljs.core.seq.call(null, keyvals);
    var out__83417 = cljs.core.HashMap.EMPTY;
    while(true) {
      if(cljs.core.truth_(in$__83416)) {
        var G__83418 = cljs.core.nnext.call(null, in$__83416);
        var G__83419 = cljs.core.assoc.call(null, out__83417, cljs.core.first.call(null, in$__83416), cljs.core.second.call(null, in$__83416));
        in$__83416 = G__83418;
        out__83417 = G__83419;
        continue
      }else {
        return out__83417
      }
      break
    }
  };
  var hash_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return hash_map__delegate.call(this, keyvals)
  };
  hash_map.cljs$lang$maxFixedArity = 0;
  hash_map.cljs$lang$applyTo = function(arglist__83420) {
    var keyvals = cljs.core.seq(arglist__83420);
    return hash_map__delegate.call(this, keyvals)
  };
  return hash_map
}();
cljs.core.keys = function keys(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.first, hash_map))
};
cljs.core.vals = function vals(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.second, hash_map))
};
cljs.core.merge = function() {
  var merge__delegate = function(maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      return cljs.core.reduce.call(null, function(p1__83421_SHARP_, p2__83422_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3548__auto____83423 = p1__83421_SHARP_;
          if(cljs.core.truth_(or__3548__auto____83423)) {
            return or__3548__auto____83423
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), p2__83422_SHARP_)
      }, maps)
    }else {
      return null
    }
  };
  var merge = function(var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return merge__delegate.call(this, maps)
  };
  merge.cljs$lang$maxFixedArity = 0;
  merge.cljs$lang$applyTo = function(arglist__83424) {
    var maps = cljs.core.seq(arglist__83424);
    return merge__delegate.call(this, maps)
  };
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__83427 = function(m, e) {
        var k__83425 = cljs.core.first.call(null, e);
        var v__83426 = cljs.core.second.call(null, e);
        if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, m, k__83425))) {
          return cljs.core.assoc.call(null, m, k__83425, f.call(null, cljs.core.get.call(null, m, k__83425), v__83426))
        }else {
          return cljs.core.assoc.call(null, m, k__83425, v__83426)
        }
      };
      var merge2__83429 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__83427, function() {
          var or__3548__auto____83428 = m1;
          if(cljs.core.truth_(or__3548__auto____83428)) {
            return or__3548__auto____83428
          }else {
            return cljs.core.ObjMap.fromObject([], {})
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__83429, maps)
    }else {
      return null
    }
  };
  var merge_with = function(f, var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return merge_with__delegate.call(this, f, maps)
  };
  merge_with.cljs$lang$maxFixedArity = 1;
  merge_with.cljs$lang$applyTo = function(arglist__83430) {
    var f = cljs.core.first(arglist__83430);
    var maps = cljs.core.rest(arglist__83430);
    return merge_with__delegate.call(this, f, maps)
  };
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__83432 = cljs.core.ObjMap.fromObject([], {});
  var keys__83433 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(cljs.core.truth_(keys__83433)) {
      var key__83434 = cljs.core.first.call(null, keys__83433);
      var entry__83435 = cljs.core.get.call(null, map, key__83434, "\ufdd0'user/not-found");
      var G__83436 = cljs.core.truth_(cljs.core.not_EQ_.call(null, entry__83435, "\ufdd0'user/not-found")) ? cljs.core.assoc.call(null, ret__83432, key__83434, entry__83435) : ret__83432;
      var G__83437 = cljs.core.next.call(null, keys__83433);
      ret__83432 = G__83436;
      keys__83433 = G__83437;
      continue
    }else {
      return ret__83432
    }
    break
  }
};
cljs.core.Set = function(meta, hash_map) {
  this.meta = meta;
  this.hash_map = hash_map
};
cljs.core.Set.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Set")
};
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = function(coll) {
  var this__83438 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = function() {
  var G__83453 = null;
  var G__83453__83454 = function(coll, v) {
    var this__83439 = this;
    return cljs.core._lookup.call(null, coll, v, null)
  };
  var G__83453__83455 = function(coll, v, not_found) {
    var this__83440 = this;
    if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__83440.hash_map, v))) {
      return v
    }else {
      return not_found
    }
  };
  G__83453 = function(coll, v, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83453__83454.call(this, coll, v);
      case 3:
        return G__83453__83455.call(this, coll, v, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83453
}();
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = function() {
  var G__83457 = null;
  var G__83457__83458 = function(coll, k) {
    var this__83441 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k)
  };
  var G__83457__83459 = function(coll, k, not_found) {
    var this__83442 = this;
    coll = this;
    return cljs.core._lookup.call(null, coll, k, not_found)
  };
  G__83457 = function(coll, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83457__83458.call(this, coll, k);
      case 3:
        return G__83457__83459.call(this, coll, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83457
}();
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = function(coll, o) {
  var this__83443 = this;
  return new cljs.core.Set(this__83443.meta, cljs.core.assoc.call(null, this__83443.hash_map, o, null))
};
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = function(coll) {
  var this__83444 = this;
  return cljs.core.keys.call(null, this__83444.hash_map)
};
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = function(coll, v) {
  var this__83445 = this;
  return new cljs.core.Set(this__83445.meta, cljs.core.dissoc.call(null, this__83445.hash_map, v))
};
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = function(coll) {
  var this__83446 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = function(coll, other) {
  var this__83447 = this;
  var and__3546__auto____83448 = cljs.core.set_QMARK_.call(null, other);
  if(cljs.core.truth_(and__3546__auto____83448)) {
    var and__3546__auto____83449 = cljs.core._EQ_.call(null, cljs.core.count.call(null, coll), cljs.core.count.call(null, other));
    if(cljs.core.truth_(and__3546__auto____83449)) {
      return cljs.core.every_QMARK_.call(null, function(p1__83431_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__83431_SHARP_)
      }, other)
    }else {
      return and__3546__auto____83449
    }
  }else {
    return and__3546__auto____83448
  }
};
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = function(coll, meta) {
  var this__83450 = this;
  return new cljs.core.Set(meta, this__83450.hash_map)
};
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = function(coll) {
  var this__83451 = this;
  return this__83451.meta
};
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = function(coll) {
  var this__83452 = this;
  return cljs.core.with_meta.call(null, cljs.core.Set.EMPTY, this__83452.meta)
};
cljs.core.Set;
cljs.core.Set.EMPTY = new cljs.core.Set(null, cljs.core.hash_map.call(null));
cljs.core.set = function set(coll) {
  var in$__83462 = cljs.core.seq.call(null, coll);
  var out__83463 = cljs.core.Set.EMPTY;
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.empty_QMARK_.call(null, in$__83462)))) {
      var G__83464 = cljs.core.rest.call(null, in$__83462);
      var G__83465 = cljs.core.conj.call(null, out__83463, cljs.core.first.call(null, in$__83462));
      in$__83462 = G__83464;
      out__83463 = G__83465;
      continue
    }else {
      return out__83463
    }
    break
  }
};
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, coll))) {
    var n__83466 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3695__auto____83467 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3695__auto____83467)) {
        var e__83468 = temp__3695__auto____83467;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__83468))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__83466, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__83461_SHARP_) {
      var temp__3695__auto____83469 = cljs.core.find.call(null, smap, p1__83461_SHARP_);
      if(cljs.core.truth_(temp__3695__auto____83469)) {
        var e__83470 = temp__3695__auto____83469;
        return cljs.core.second.call(null, e__83470)
      }else {
        return p1__83461_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__83478 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__83471, seen) {
        while(true) {
          var vec__83472__83473 = p__83471;
          var f__83474 = cljs.core.nth.call(null, vec__83472__83473, 0, null);
          var xs__83475 = vec__83472__83473;
          var temp__3698__auto____83476 = cljs.core.seq.call(null, xs__83475);
          if(cljs.core.truth_(temp__3698__auto____83476)) {
            var s__83477 = temp__3698__auto____83476;
            if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, seen, f__83474))) {
              var G__83479 = cljs.core.rest.call(null, s__83477);
              var G__83480 = seen;
              p__83471 = G__83479;
              seen = G__83480;
              continue
            }else {
              return cljs.core.cons.call(null, f__83474, step.call(null, cljs.core.rest.call(null, s__83477), cljs.core.conj.call(null, seen, f__83474)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    })
  };
  return step__83478.call(null, coll, cljs.core.set([]))
};
cljs.core.butlast = function butlast(s) {
  var ret__83481 = cljs.core.Vector.fromArray([]);
  var s__83482 = s;
  while(true) {
    if(cljs.core.truth_(cljs.core.next.call(null, s__83482))) {
      var G__83483 = cljs.core.conj.call(null, ret__83481, cljs.core.first.call(null, s__83482));
      var G__83484 = cljs.core.next.call(null, s__83482);
      ret__83481 = G__83483;
      s__83482 = G__83484;
      continue
    }else {
      return cljs.core.seq.call(null, ret__83481)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, x))) {
    return x
  }else {
    if(cljs.core.truth_(function() {
      var or__3548__auto____83485 = cljs.core.keyword_QMARK_.call(null, x);
      if(cljs.core.truth_(or__3548__auto____83485)) {
        return or__3548__auto____83485
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }())) {
      var i__83486 = x.lastIndexOf("/");
      if(cljs.core.truth_(i__83486 < 0)) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__83486 + 1)
      }
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw new Error(cljs.core.str.call(null, "Doesn't support name: ", x));
      }else {
        return null
      }
    }
  }
};
cljs.core.namespace = function namespace(x) {
  if(cljs.core.truth_(function() {
    var or__3548__auto____83487 = cljs.core.keyword_QMARK_.call(null, x);
    if(cljs.core.truth_(or__3548__auto____83487)) {
      return or__3548__auto____83487
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }())) {
    var i__83488 = x.lastIndexOf("/");
    if(cljs.core.truth_(i__83488 > -1)) {
      return cljs.core.subs.call(null, x, 2, i__83488)
    }else {
      return null
    }
  }else {
    throw new Error(cljs.core.str.call(null, "Doesn't support namespace: ", x));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__83491 = cljs.core.ObjMap.fromObject([], {});
  var ks__83492 = cljs.core.seq.call(null, keys);
  var vs__83493 = cljs.core.seq.call(null, vals);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____83494 = ks__83492;
      if(cljs.core.truth_(and__3546__auto____83494)) {
        return vs__83493
      }else {
        return and__3546__auto____83494
      }
    }())) {
      var G__83495 = cljs.core.assoc.call(null, map__83491, cljs.core.first.call(null, ks__83492), cljs.core.first.call(null, vs__83493));
      var G__83496 = cljs.core.next.call(null, ks__83492);
      var G__83497 = cljs.core.next.call(null, vs__83493);
      map__83491 = G__83495;
      ks__83492 = G__83496;
      vs__83493 = G__83497;
      continue
    }else {
      return map__83491
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__83500 = function(k, x) {
    return x
  };
  var max_key__83501 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) > k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var max_key__83502 = function() {
    var G__83504__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__83489_SHARP_, p2__83490_SHARP_) {
        return max_key.call(null, k, p1__83489_SHARP_, p2__83490_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__83504 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__83504__delegate.call(this, k, x, y, more)
    };
    G__83504.cljs$lang$maxFixedArity = 3;
    G__83504.cljs$lang$applyTo = function(arglist__83505) {
      var k = cljs.core.first(arglist__83505);
      var x = cljs.core.first(cljs.core.next(arglist__83505));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83505)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83505)));
      return G__83504__delegate.call(this, k, x, y, more)
    };
    return G__83504
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__83500.call(this, k, x);
      case 3:
        return max_key__83501.call(this, k, x, y);
      default:
        return max_key__83502.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__83502.cljs$lang$applyTo;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__83506 = function(k, x) {
    return x
  };
  var min_key__83507 = function(k, x, y) {
    if(cljs.core.truth_(k.call(null, x) < k.call(null, y))) {
      return x
    }else {
      return y
    }
  };
  var min_key__83508 = function() {
    var G__83510__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__83498_SHARP_, p2__83499_SHARP_) {
        return min_key.call(null, k, p1__83498_SHARP_, p2__83499_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__83510 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__83510__delegate.call(this, k, x, y, more)
    };
    G__83510.cljs$lang$maxFixedArity = 3;
    G__83510.cljs$lang$applyTo = function(arglist__83511) {
      var k = cljs.core.first(arglist__83511);
      var x = cljs.core.first(cljs.core.next(arglist__83511));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83511)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83511)));
      return G__83510__delegate.call(this, k, x, y, more)
    };
    return G__83510
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__83506.call(this, k, x);
      case 3:
        return min_key__83507.call(this, k, x, y);
      default:
        return min_key__83508.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__83508.cljs$lang$applyTo;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__83514 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__83515 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____83512 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____83512)) {
        var s__83513 = temp__3698__auto____83512;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__83513), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__83513)))
      }else {
        return null
      }
    })
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__83514.call(this, n, step);
      case 3:
        return partition_all__83515.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____83517 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____83517)) {
      var s__83518 = temp__3698__auto____83517;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__83518)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__83518), take_while.call(null, pred, cljs.core.rest.call(null, s__83518)))
      }else {
        return null
      }
    }else {
      return null
    }
  })
};
cljs.core.Range = function(meta, start, end, step) {
  this.meta = meta;
  this.start = start;
  this.end = end;
  this.step = step
};
cljs.core.Range.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Range")
};
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = function(rng) {
  var this__83519 = this;
  return cljs.core.hash_coll.call(null, rng)
};
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = function(rng, o) {
  var this__83520 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = function() {
  var G__83536 = null;
  var G__83536__83537 = function(rng, f) {
    var this__83521 = this;
    return cljs.core.ci_reduce.call(null, rng, f)
  };
  var G__83536__83538 = function(rng, f, s) {
    var this__83522 = this;
    return cljs.core.ci_reduce.call(null, rng, f, s)
  };
  G__83536 = function(rng, f, s) {
    switch(arguments.length) {
      case 2:
        return G__83536__83537.call(this, rng, f);
      case 3:
        return G__83536__83538.call(this, rng, f, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83536
}();
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = function(rng) {
  var this__83523 = this;
  var comp__83524 = cljs.core.truth_(this__83523.step > 0) ? cljs.core._LT_ : cljs.core._GT_;
  if(cljs.core.truth_(comp__83524.call(null, this__83523.start, this__83523.end))) {
    return rng
  }else {
    return null
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = function(rng) {
  var this__83525 = this;
  if(cljs.core.truth_(cljs.core.not.call(null, cljs.core._seq.call(null, rng)))) {
    return 0
  }else {
    return Math["ceil"].call(null, (this__83525.end - this__83525.start) / this__83525.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = function(rng) {
  var this__83526 = this;
  return this__83526.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest = function(rng) {
  var this__83527 = this;
  if(cljs.core.truth_(cljs.core._seq.call(null, rng))) {
    return new cljs.core.Range(this__83527.meta, this__83527.start + this__83527.step, this__83527.end, this__83527.step)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = function(rng, other) {
  var this__83528 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = function(rng, meta) {
  var this__83529 = this;
  return new cljs.core.Range(meta, this__83529.start, this__83529.end, this__83529.step)
};
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = function(rng) {
  var this__83530 = this;
  return this__83530.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = function() {
  var G__83540 = null;
  var G__83540__83541 = function(rng, n) {
    var this__83531 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__83531.start + n * this__83531.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____83532 = this__83531.start > this__83531.end;
        if(cljs.core.truth_(and__3546__auto____83532)) {
          return cljs.core._EQ_.call(null, this__83531.step, 0)
        }else {
          return and__3546__auto____83532
        }
      }())) {
        return this__83531.start
      }else {
        throw new Error("Index out of bounds");
      }
    }
  };
  var G__83540__83542 = function(rng, n, not_found) {
    var this__83533 = this;
    if(cljs.core.truth_(n < cljs.core._count.call(null, rng))) {
      return this__83533.start + n * this__83533.step
    }else {
      if(cljs.core.truth_(function() {
        var and__3546__auto____83534 = this__83533.start > this__83533.end;
        if(cljs.core.truth_(and__3546__auto____83534)) {
          return cljs.core._EQ_.call(null, this__83533.step, 0)
        }else {
          return and__3546__auto____83534
        }
      }())) {
        return this__83533.start
      }else {
        return not_found
      }
    }
  };
  G__83540 = function(rng, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__83540__83541.call(this, rng, n);
      case 3:
        return G__83540__83542.call(this, rng, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__83540
}();
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = function(rng) {
  var this__83535 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__83535.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var range = null;
  var range__83544 = function() {
    return range.call(null, 0, Number["MAX_VALUE"], 1)
  };
  var range__83545 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__83546 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__83547 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__83544.call(this);
      case 1:
        return range__83545.call(this, start);
      case 2:
        return range__83546.call(this, start, end);
      case 3:
        return range__83547.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____83549 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____83549)) {
      var s__83550 = temp__3698__auto____83549;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__83550), take_nth.call(null, n, cljs.core.drop.call(null, n, s__83550)))
    }else {
      return null
    }
  })
};
cljs.core.split_with = function split_with(pred, coll) {
  return cljs.core.Vector.fromArray([cljs.core.take_while.call(null, pred, coll), cljs.core.drop_while.call(null, pred, coll)])
};
cljs.core.partition_by = function partition_by(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3698__auto____83552 = cljs.core.seq.call(null, coll);
    if(cljs.core.truth_(temp__3698__auto____83552)) {
      var s__83553 = temp__3698__auto____83552;
      var fst__83554 = cljs.core.first.call(null, s__83553);
      var fv__83555 = f.call(null, fst__83554);
      var run__83556 = cljs.core.cons.call(null, fst__83554, cljs.core.take_while.call(null, function(p1__83551_SHARP_) {
        return cljs.core._EQ_.call(null, fv__83555, f.call(null, p1__83551_SHARP_))
      }, cljs.core.next.call(null, s__83553)));
      return cljs.core.cons.call(null, run__83556, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__83556), s__83553))))
    }else {
      return null
    }
  })
};
cljs.core.frequencies = function frequencies(coll) {
  return cljs.core.reduce.call(null, function(counts, x) {
    return cljs.core.assoc.call(null, counts, x, cljs.core.get.call(null, counts, x, 0) + 1)
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.reductions = function() {
  var reductions = null;
  var reductions__83571 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3695__auto____83567 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3695__auto____83567)) {
        var s__83568 = temp__3695__auto____83567;
        return reductions.call(null, f, cljs.core.first.call(null, s__83568), cljs.core.rest.call(null, s__83568))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    })
  };
  var reductions__83572 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3698__auto____83569 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(temp__3698__auto____83569)) {
        var s__83570 = temp__3698__auto____83569;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__83570)), cljs.core.rest.call(null, s__83570))
      }else {
        return null
      }
    }))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__83571.call(this, f, init);
      case 3:
        return reductions__83572.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__83575 = function(f) {
    return function() {
      var G__83580 = null;
      var G__83580__83581 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__83580__83582 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__83580__83583 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__83580__83584 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__83580__83585 = function() {
        var G__83587__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__83587 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83587__delegate.call(this, x, y, z, args)
        };
        G__83587.cljs$lang$maxFixedArity = 3;
        G__83587.cljs$lang$applyTo = function(arglist__83588) {
          var x = cljs.core.first(arglist__83588);
          var y = cljs.core.first(cljs.core.next(arglist__83588));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83588)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83588)));
          return G__83587__delegate.call(this, x, y, z, args)
        };
        return G__83587
      }();
      G__83580 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__83580__83581.call(this);
          case 1:
            return G__83580__83582.call(this, x);
          case 2:
            return G__83580__83583.call(this, x, y);
          case 3:
            return G__83580__83584.call(this, x, y, z);
          default:
            return G__83580__83585.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__83580.cljs$lang$maxFixedArity = 3;
      G__83580.cljs$lang$applyTo = G__83580__83585.cljs$lang$applyTo;
      return G__83580
    }()
  };
  var juxt__83576 = function(f, g) {
    return function() {
      var G__83589 = null;
      var G__83589__83590 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__83589__83591 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__83589__83592 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__83589__83593 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__83589__83594 = function() {
        var G__83596__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__83596 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83596__delegate.call(this, x, y, z, args)
        };
        G__83596.cljs$lang$maxFixedArity = 3;
        G__83596.cljs$lang$applyTo = function(arglist__83597) {
          var x = cljs.core.first(arglist__83597);
          var y = cljs.core.first(cljs.core.next(arglist__83597));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83597)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83597)));
          return G__83596__delegate.call(this, x, y, z, args)
        };
        return G__83596
      }();
      G__83589 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__83589__83590.call(this);
          case 1:
            return G__83589__83591.call(this, x);
          case 2:
            return G__83589__83592.call(this, x, y);
          case 3:
            return G__83589__83593.call(this, x, y, z);
          default:
            return G__83589__83594.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__83589.cljs$lang$maxFixedArity = 3;
      G__83589.cljs$lang$applyTo = G__83589__83594.cljs$lang$applyTo;
      return G__83589
    }()
  };
  var juxt__83577 = function(f, g, h) {
    return function() {
      var G__83598 = null;
      var G__83598__83599 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__83598__83600 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__83598__83601 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__83598__83602 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__83598__83603 = function() {
        var G__83605__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__83605 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__83605__delegate.call(this, x, y, z, args)
        };
        G__83605.cljs$lang$maxFixedArity = 3;
        G__83605.cljs$lang$applyTo = function(arglist__83606) {
          var x = cljs.core.first(arglist__83606);
          var y = cljs.core.first(cljs.core.next(arglist__83606));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83606)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83606)));
          return G__83605__delegate.call(this, x, y, z, args)
        };
        return G__83605
      }();
      G__83598 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__83598__83599.call(this);
          case 1:
            return G__83598__83600.call(this, x);
          case 2:
            return G__83598__83601.call(this, x, y);
          case 3:
            return G__83598__83602.call(this, x, y, z);
          default:
            return G__83598__83603.apply(this, arguments)
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__83598.cljs$lang$maxFixedArity = 3;
      G__83598.cljs$lang$applyTo = G__83598__83603.cljs$lang$applyTo;
      return G__83598
    }()
  };
  var juxt__83578 = function() {
    var G__83607__delegate = function(f, g, h, fs) {
      var fs__83574 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__83608 = null;
        var G__83608__83609 = function() {
          return cljs.core.reduce.call(null, function(p1__83557_SHARP_, p2__83558_SHARP_) {
            return cljs.core.conj.call(null, p1__83557_SHARP_, p2__83558_SHARP_.call(null))
          }, cljs.core.Vector.fromArray([]), fs__83574)
        };
        var G__83608__83610 = function(x) {
          return cljs.core.reduce.call(null, function(p1__83559_SHARP_, p2__83560_SHARP_) {
            return cljs.core.conj.call(null, p1__83559_SHARP_, p2__83560_SHARP_.call(null, x))
          }, cljs.core.Vector.fromArray([]), fs__83574)
        };
        var G__83608__83611 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__83561_SHARP_, p2__83562_SHARP_) {
            return cljs.core.conj.call(null, p1__83561_SHARP_, p2__83562_SHARP_.call(null, x, y))
          }, cljs.core.Vector.fromArray([]), fs__83574)
        };
        var G__83608__83612 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__83563_SHARP_, p2__83564_SHARP_) {
            return cljs.core.conj.call(null, p1__83563_SHARP_, p2__83564_SHARP_.call(null, x, y, z))
          }, cljs.core.Vector.fromArray([]), fs__83574)
        };
        var G__83608__83613 = function() {
          var G__83615__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__83565_SHARP_, p2__83566_SHARP_) {
              return cljs.core.conj.call(null, p1__83565_SHARP_, cljs.core.apply.call(null, p2__83566_SHARP_, x, y, z, args))
            }, cljs.core.Vector.fromArray([]), fs__83574)
          };
          var G__83615 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__83615__delegate.call(this, x, y, z, args)
          };
          G__83615.cljs$lang$maxFixedArity = 3;
          G__83615.cljs$lang$applyTo = function(arglist__83616) {
            var x = cljs.core.first(arglist__83616);
            var y = cljs.core.first(cljs.core.next(arglist__83616));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83616)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83616)));
            return G__83615__delegate.call(this, x, y, z, args)
          };
          return G__83615
        }();
        G__83608 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__83608__83609.call(this);
            case 1:
              return G__83608__83610.call(this, x);
            case 2:
              return G__83608__83611.call(this, x, y);
            case 3:
              return G__83608__83612.call(this, x, y, z);
            default:
              return G__83608__83613.apply(this, arguments)
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__83608.cljs$lang$maxFixedArity = 3;
        G__83608.cljs$lang$applyTo = G__83608__83613.cljs$lang$applyTo;
        return G__83608
      }()
    };
    var G__83607 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__83607__delegate.call(this, f, g, h, fs)
    };
    G__83607.cljs$lang$maxFixedArity = 3;
    G__83607.cljs$lang$applyTo = function(arglist__83617) {
      var f = cljs.core.first(arglist__83617);
      var g = cljs.core.first(cljs.core.next(arglist__83617));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83617)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__83617)));
      return G__83607__delegate.call(this, f, g, h, fs)
    };
    return G__83607
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__83575.call(this, f);
      case 2:
        return juxt__83576.call(this, f, g);
      case 3:
        return juxt__83577.call(this, f, g, h);
      default:
        return juxt__83578.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__83578.cljs$lang$applyTo;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__83619 = function(coll) {
    while(true) {
      if(cljs.core.truth_(cljs.core.seq.call(null, coll))) {
        var G__83622 = cljs.core.next.call(null, coll);
        coll = G__83622;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__83620 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3546__auto____83618 = cljs.core.seq.call(null, coll);
        if(cljs.core.truth_(and__3546__auto____83618)) {
          return n > 0
        }else {
          return and__3546__auto____83618
        }
      }())) {
        var G__83623 = n - 1;
        var G__83624 = cljs.core.next.call(null, coll);
        n = G__83623;
        coll = G__83624;
        continue
      }else {
        return null
      }
      break
    }
  };
  dorun = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return dorun__83619.call(this, n);
      case 2:
        return dorun__83620.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__83625 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__83626 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__83625.call(this, n);
      case 2:
        return doall__83626.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return doall
}();
cljs.core.re_matches = function re_matches(re, s) {
  var matches__83628 = re.exec(s);
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__83628), s))) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__83628), 1))) {
      return cljs.core.first.call(null, matches__83628)
    }else {
      return cljs.core.vec.call(null, matches__83628)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__83629 = re.exec(s);
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, matches__83629))) {
    return null
  }else {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.count.call(null, matches__83629), 1))) {
      return cljs.core.first.call(null, matches__83629)
    }else {
      return cljs.core.vec.call(null, matches__83629)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__83630 = cljs.core.re_find.call(null, re, s);
  var match_idx__83631 = s.search(re);
  var match_str__83632 = cljs.core.truth_(cljs.core.coll_QMARK_.call(null, match_data__83630)) ? cljs.core.first.call(null, match_data__83630) : match_data__83630;
  var post_match__83633 = cljs.core.subs.call(null, s, match_idx__83631 + cljs.core.count.call(null, match_str__83632));
  if(cljs.core.truth_(match_data__83630)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__83630, re_seq.call(null, re, post_match__83633))
    })
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  return new RegExp(s)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray([begin]), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.Vector.fromArray([sep]), cljs.core.map.call(null, function(p1__83634_SHARP_) {
    return print_one.call(null, p1__83634_SHARP_, opts)
  }, coll))), cljs.core.Vector.fromArray([end]))
};
cljs.core.string_print = function string_print(x) {
  cljs.core._STAR_print_fn_STAR_.call(null, x);
  return null
};
cljs.core.flush = function flush() {
  return null
};
cljs.core.pr_seq = function pr_seq(obj, opts) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, obj))) {
    return cljs.core.list.call(null, "nil")
  }else {
    if(cljs.core.truth_(void 0 === obj)) {
      return cljs.core.list.call(null, "#<undefined>")
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.concat.call(null, cljs.core.truth_(function() {
          var and__3546__auto____83635 = cljs.core.get.call(null, opts, "\ufdd0'meta");
          if(cljs.core.truth_(and__3546__auto____83635)) {
            var and__3546__auto____83639 = function() {
              var x__445__auto____83636 = obj;
              if(cljs.core.truth_(function() {
                var and__3546__auto____83637 = x__445__auto____83636;
                if(cljs.core.truth_(and__3546__auto____83637)) {
                  var and__3546__auto____83638 = x__445__auto____83636.cljs$core$IMeta$;
                  if(cljs.core.truth_(and__3546__auto____83638)) {
                    return cljs.core.not.call(null, x__445__auto____83636.hasOwnProperty("cljs$core$IMeta$"))
                  }else {
                    return and__3546__auto____83638
                  }
                }else {
                  return and__3546__auto____83637
                }
              }())) {
                return true
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, x__445__auto____83636)
              }
            }();
            if(cljs.core.truth_(and__3546__auto____83639)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3546__auto____83639
            }
          }else {
            return and__3546__auto____83635
          }
        }()) ? cljs.core.concat.call(null, cljs.core.Vector.fromArray(["^"]), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.Vector.fromArray([" "])) : null, cljs.core.truth_(function() {
          var x__445__auto____83640 = obj;
          if(cljs.core.truth_(function() {
            var and__3546__auto____83641 = x__445__auto____83640;
            if(cljs.core.truth_(and__3546__auto____83641)) {
              var and__3546__auto____83642 = x__445__auto____83640.cljs$core$IPrintable$;
              if(cljs.core.truth_(and__3546__auto____83642)) {
                return cljs.core.not.call(null, x__445__auto____83640.hasOwnProperty("cljs$core$IPrintable$"))
              }else {
                return and__3546__auto____83642
              }
            }else {
              return and__3546__auto____83641
            }
          }())) {
            return true
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, x__445__auto____83640)
          }
        }()) ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.list.call(null, "#<", cljs.core.str.call(null, obj), ">"))
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  var first_obj__83643 = cljs.core.first.call(null, objs);
  var sb__83644 = new goog.string.StringBuffer;
  var G__83645__83646 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__83645__83646)) {
    var obj__83647 = cljs.core.first.call(null, G__83645__83646);
    var G__83645__83648 = G__83645__83646;
    while(true) {
      if(cljs.core.truth_(obj__83647 === first_obj__83643)) {
      }else {
        sb__83644.append(" ")
      }
      var G__83649__83650 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__83647, opts));
      if(cljs.core.truth_(G__83649__83650)) {
        var string__83651 = cljs.core.first.call(null, G__83649__83650);
        var G__83649__83652 = G__83649__83650;
        while(true) {
          sb__83644.append(string__83651);
          var temp__3698__auto____83653 = cljs.core.next.call(null, G__83649__83652);
          if(cljs.core.truth_(temp__3698__auto____83653)) {
            var G__83649__83654 = temp__3698__auto____83653;
            var G__83657 = cljs.core.first.call(null, G__83649__83654);
            var G__83658 = G__83649__83654;
            string__83651 = G__83657;
            G__83649__83652 = G__83658;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____83655 = cljs.core.next.call(null, G__83645__83648);
      if(cljs.core.truth_(temp__3698__auto____83655)) {
        var G__83645__83656 = temp__3698__auto____83655;
        var G__83659 = cljs.core.first.call(null, G__83645__83656);
        var G__83660 = G__83645__83656;
        obj__83647 = G__83659;
        G__83645__83648 = G__83660;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return cljs.core.str.call(null, sb__83644)
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var first_obj__83661 = cljs.core.first.call(null, objs);
  var G__83662__83663 = cljs.core.seq.call(null, objs);
  if(cljs.core.truth_(G__83662__83663)) {
    var obj__83664 = cljs.core.first.call(null, G__83662__83663);
    var G__83662__83665 = G__83662__83663;
    while(true) {
      if(cljs.core.truth_(obj__83664 === first_obj__83661)) {
      }else {
        cljs.core.string_print.call(null, " ")
      }
      var G__83666__83667 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__83664, opts));
      if(cljs.core.truth_(G__83666__83667)) {
        var string__83668 = cljs.core.first.call(null, G__83666__83667);
        var G__83666__83669 = G__83666__83667;
        while(true) {
          cljs.core.string_print.call(null, string__83668);
          var temp__3698__auto____83670 = cljs.core.next.call(null, G__83666__83669);
          if(cljs.core.truth_(temp__3698__auto____83670)) {
            var G__83666__83671 = temp__3698__auto____83670;
            var G__83674 = cljs.core.first.call(null, G__83666__83671);
            var G__83675 = G__83666__83671;
            string__83668 = G__83674;
            G__83666__83669 = G__83675;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3698__auto____83672 = cljs.core.next.call(null, G__83662__83665);
      if(cljs.core.truth_(temp__3698__auto____83672)) {
        var G__83662__83673 = temp__3698__auto____83672;
        var G__83676 = cljs.core.first.call(null, G__83662__83673);
        var G__83677 = G__83662__83673;
        obj__83664 = G__83676;
        G__83662__83665 = G__83677;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.newline = function newline(opts) {
  cljs.core.string_print.call(null, "\n");
  if(cljs.core.truth_(cljs.core.get.call(null, opts, "\ufdd0'flush-on-newline"))) {
    return cljs.core.flush.call(null)
  }else {
    return null
  }
};
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = function pr_opts() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var pr_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr_str__delegate.call(this, objs)
  };
  pr_str.cljs$lang$maxFixedArity = 0;
  pr_str.cljs$lang$applyTo = function(arglist__83678) {
    var objs = cljs.core.seq(arglist__83678);
    return pr_str__delegate.call(this, objs)
  };
  return pr_str
}();
cljs.core.pr = function() {
  var pr__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr__delegate.call(this, objs)
  };
  pr.cljs$lang$maxFixedArity = 0;
  pr.cljs$lang$applyTo = function(arglist__83679) {
    var objs = cljs.core.seq(arglist__83679);
    return pr__delegate.call(this, objs)
  };
  return pr
}();
cljs.core.print = function() {
  var cljs_core_print__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var cljs_core_print = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return cljs_core_print__delegate.call(this, objs)
  };
  cljs_core_print.cljs$lang$maxFixedArity = 0;
  cljs_core_print.cljs$lang$applyTo = function(arglist__83680) {
    var objs = cljs.core.seq(arglist__83680);
    return cljs_core_print__delegate.call(this, objs)
  };
  return cljs_core_print
}();
cljs.core.println = function() {
  var println__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var println = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println__delegate.call(this, objs)
  };
  println.cljs$lang$maxFixedArity = 0;
  println.cljs$lang$applyTo = function(arglist__83681) {
    var objs = cljs.core.seq(arglist__83681);
    return println__delegate.call(this, objs)
  };
  return println
}();
cljs.core.prn = function() {
  var prn__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var prn = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn__delegate.call(this, objs)
  };
  prn.cljs$lang$maxFixedArity = 0;
  prn.cljs$lang$applyTo = function(arglist__83682) {
    var objs = cljs.core.seq(arglist__83682);
    return prn__delegate.call(this, objs)
  };
  return prn
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__83683 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__83683, "{", ", ", "}", opts, coll)
};
cljs.core.IPrintable["number"] = true;
cljs.core._pr_seq["number"] = function(n, opts) {
  return cljs.core.list.call(null, cljs.core.str.call(null, n))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["boolean"] = true;
cljs.core._pr_seq["boolean"] = function(bool, opts) {
  return cljs.core.list.call(null, cljs.core.str.call(null, bool))
};
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.IPrintable["string"] = true;
cljs.core._pr_seq["string"] = function(obj, opts) {
  if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, obj))) {
    return cljs.core.list.call(null, cljs.core.str.call(null, ":", function() {
      var temp__3698__auto____83684 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3698__auto____83684)) {
        var nspc__83685 = temp__3698__auto____83684;
        return cljs.core.str.call(null, nspc__83685, "/")
      }else {
        return null
      }
    }(), cljs.core.name.call(null, obj)))
  }else {
    if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, obj))) {
      return cljs.core.list.call(null, cljs.core.str.call(null, function() {
        var temp__3698__auto____83686 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3698__auto____83686)) {
          var nspc__83687 = temp__3698__auto____83686;
          return cljs.core.str.call(null, nspc__83687, "/")
        }else {
          return null
        }
      }(), cljs.core.name.call(null, obj)))
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return cljs.core.list.call(null, cljs.core.truth_("\ufdd0'readably".call(null, opts)) ? goog.string.quote.call(null, obj) : obj)
      }else {
        return null
      }
    }
  }
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["array"] = true;
cljs.core._pr_seq["array"] = function(a, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#<Array [", ", ", "]>", opts, a)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.list.call(null, "()")
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = function(coll, opts) {
  var pr_pair__83688 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__83688, "{", ", ", "}", opts, coll)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches
};
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = function(this$) {
  var this__83689 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = function(this$, oldval, newval) {
  var this__83690 = this;
  var G__83691__83692 = cljs.core.seq.call(null, this__83690.watches);
  if(cljs.core.truth_(G__83691__83692)) {
    var G__83694__83696 = cljs.core.first.call(null, G__83691__83692);
    var vec__83695__83697 = G__83694__83696;
    var key__83698 = cljs.core.nth.call(null, vec__83695__83697, 0, null);
    var f__83699 = cljs.core.nth.call(null, vec__83695__83697, 1, null);
    var G__83691__83700 = G__83691__83692;
    var G__83694__83701 = G__83694__83696;
    var G__83691__83702 = G__83691__83700;
    while(true) {
      var vec__83703__83704 = G__83694__83701;
      var key__83705 = cljs.core.nth.call(null, vec__83703__83704, 0, null);
      var f__83706 = cljs.core.nth.call(null, vec__83703__83704, 1, null);
      var G__83691__83707 = G__83691__83702;
      f__83706.call(null, key__83705, this$, oldval, newval);
      var temp__3698__auto____83708 = cljs.core.next.call(null, G__83691__83707);
      if(cljs.core.truth_(temp__3698__auto____83708)) {
        var G__83691__83709 = temp__3698__auto____83708;
        var G__83716 = cljs.core.first.call(null, G__83691__83709);
        var G__83717 = G__83691__83709;
        G__83694__83701 = G__83716;
        G__83691__83702 = G__83717;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = function(this$, key, f) {
  var this__83710 = this;
  return this$.watches = cljs.core.assoc.call(null, this__83710.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = function(this$, key) {
  var this__83711 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__83711.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = function(a, opts) {
  var this__83712 = this;
  return cljs.core.concat.call(null, cljs.core.Vector.fromArray(["#<Atom: "]), cljs.core._pr_seq.call(null, this__83712.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = function(_) {
  var this__83713 = this;
  return this__83713.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__83714 = this;
  return this__83714.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = function(o, other) {
  var this__83715 = this;
  return o === other
};
cljs.core.Atom;
cljs.core.atom = function() {
  var atom = null;
  var atom__83724 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__83725 = function() {
    var G__83727__delegate = function(x, p__83718) {
      var map__83719__83720 = p__83718;
      var map__83719__83721 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__83719__83720)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__83719__83720) : map__83719__83720;
      var validator__83722 = cljs.core.get.call(null, map__83719__83721, "\ufdd0'validator");
      var meta__83723 = cljs.core.get.call(null, map__83719__83721, "\ufdd0'meta");
      return new cljs.core.Atom(x, meta__83723, validator__83722, null)
    };
    var G__83727 = function(x, var_args) {
      var p__83718 = null;
      if(goog.isDef(var_args)) {
        p__83718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__83727__delegate.call(this, x, p__83718)
    };
    G__83727.cljs$lang$maxFixedArity = 1;
    G__83727.cljs$lang$applyTo = function(arglist__83728) {
      var x = cljs.core.first(arglist__83728);
      var p__83718 = cljs.core.rest(arglist__83728);
      return G__83727__delegate.call(this, x, p__83718)
    };
    return G__83727
  }();
  atom = function(x, var_args) {
    var p__83718 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__83724.call(this, x);
      default:
        return atom__83725.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__83725.cljs$lang$applyTo;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3698__auto____83729 = a.validator;
  if(cljs.core.truth_(temp__3698__auto____83729)) {
    var validate__83730 = temp__3698__auto____83729;
    if(cljs.core.truth_(validate__83730.call(null, new_value))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", "Validator rejected reference state", "\n", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 3061)))));
    }
  }else {
  }
  var old_value__83731 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__83731, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___83732 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___83733 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___83734 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___83735 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___83736 = function() {
    var G__83738__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__83738 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__83738__delegate.call(this, a, f, x, y, z, more)
    };
    G__83738.cljs$lang$maxFixedArity = 5;
    G__83738.cljs$lang$applyTo = function(arglist__83739) {
      var a = cljs.core.first(arglist__83739);
      var f = cljs.core.first(cljs.core.next(arglist__83739));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__83739)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83739))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83739)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__83739)))));
      return G__83738__delegate.call(this, a, f, x, y, z, more)
    };
    return G__83738
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___83732.call(this, a, f);
      case 3:
        return swap_BANG___83733.call(this, a, f, x);
      case 4:
        return swap_BANG___83734.call(this, a, f, x, y);
      case 5:
        return swap_BANG___83735.call(this, a, f, x, y, z);
      default:
        return swap_BANG___83736.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___83736.cljs$lang$applyTo;
  return swap_BANG_
}();
cljs.core.compare_and_set_BANG_ = function compare_and_set_BANG_(a, oldval, newval) {
  if(cljs.core.truth_(cljs.core._EQ_.call(null, a.state, oldval))) {
    cljs.core.reset_BANG_.call(null, a, newval);
    return true
  }else {
    return false
  }
};
cljs.core.deref = function deref(o) {
  return cljs.core._deref.call(null, o)
};
cljs.core.set_validator_BANG_ = function set_validator_BANG_(iref, val) {
  return iref.validator = val
};
cljs.core.get_validator = function get_validator(iref) {
  return iref.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var alter_meta_BANG___delegate = function(iref, f, args) {
    return iref.meta = cljs.core.apply.call(null, f, iref.meta, args)
  };
  var alter_meta_BANG_ = function(iref, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__83740) {
    var iref = cljs.core.first(arglist__83740);
    var f = cljs.core.first(cljs.core.next(arglist__83740));
    var args = cljs.core.rest(cljs.core.next(arglist__83740));
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  return alter_meta_BANG_
}();
cljs.core.reset_meta_BANG_ = function reset_meta_BANG_(iref, m) {
  return iref.meta = m
};
cljs.core.add_watch = function add_watch(iref, key, f) {
  return cljs.core._add_watch.call(null, iref, key, f)
};
cljs.core.remove_watch = function remove_watch(iref, key) {
  return cljs.core._remove_watch.call(null, iref, key)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var gensym = null;
  var gensym__83741 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__83742 = function(prefix_string) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.gensym_counter))) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, cljs.core.str.call(null, prefix_string, cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc)))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__83741.call(this);
      case 1:
        return gensym__83742.call(this, prefix_string)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return gensym
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(f, state) {
  this.f = f;
  this.state = state
};
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = function(d) {
  var this__83744 = this;
  return cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, this__83744.state)))
};
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = function(_) {
  var this__83745 = this;
  if(cljs.core.truth_(cljs.core.deref.call(null, this__83745.state))) {
  }else {
    cljs.core.swap_BANG_.call(null, this__83745.state, this__83745.f)
  }
  return cljs.core.deref.call(null, this__83745.state)
};
cljs.core.Delay;
cljs.core.delay = function() {
  var delay__delegate = function(body) {
    return new cljs.core.Delay(function() {
      return cljs.core.apply.call(null, cljs.core.identity, body)
    }, cljs.core.atom.call(null, null))
  };
  var delay = function(var_args) {
    var body = null;
    if(goog.isDef(var_args)) {
      body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return delay__delegate.call(this, body)
  };
  delay.cljs$lang$maxFixedArity = 0;
  delay.cljs$lang$applyTo = function(arglist__83746) {
    var body = cljs.core.seq(arglist__83746);
    return delay__delegate.call(this, body)
  };
  return delay
}();
cljs.core.delay_QMARK_ = function delay_QMARK_(x) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Delay, x)
};
cljs.core.force = function force(x) {
  if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null, x))) {
    return cljs.core.deref.call(null, x)
  }else {
    return x
  }
};
cljs.core.realized_QMARK_ = function realized_QMARK_(d) {
  return cljs.core._realized_QMARK_.call(null, d)
};
cljs.core.js__GT_clj = function() {
  var js__GT_clj__delegate = function(x, options) {
    var map__83747__83748 = options;
    var map__83747__83749 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__83747__83748)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__83747__83748) : map__83747__83748;
    var keywordize_keys__83750 = cljs.core.get.call(null, map__83747__83749, "\ufdd0'keywordize-keys");
    var keyfn__83751 = cljs.core.truth_(keywordize_keys__83750) ? cljs.core.keyword : cljs.core.str;
    var f__83757 = function thisfn(x) {
      if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null, x))) {
        return cljs.core.doall.call(null, cljs.core.map.call(null, thisfn, x))
      }else {
        if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null, x))) {
          return cljs.core.into.call(null, cljs.core.empty.call(null, x), cljs.core.map.call(null, thisfn, x))
        }else {
          if(cljs.core.truth_(goog.isArray.call(null, x))) {
            return cljs.core.vec.call(null, cljs.core.map.call(null, thisfn, x))
          }else {
            if(cljs.core.truth_(goog.isObject.call(null, x))) {
              return cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), function() {
                var iter__509__auto____83756 = function iter__83752(s__83753) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__83753__83754 = s__83753;
                    while(true) {
                      if(cljs.core.truth_(cljs.core.seq.call(null, s__83753__83754))) {
                        var k__83755 = cljs.core.first.call(null, s__83753__83754);
                        return cljs.core.cons.call(null, cljs.core.Vector.fromArray([keyfn__83751.call(null, k__83755), thisfn.call(null, x[k__83755])]), iter__83752.call(null, cljs.core.rest.call(null, s__83753__83754)))
                      }else {
                        return null
                      }
                      break
                    }
                  })
                };
                return iter__509__auto____83756.call(null, cljs.core.js_keys.call(null, x))
              }())
            }else {
              if(cljs.core.truth_("\ufdd0'else")) {
                return x
              }else {
                return null
              }
            }
          }
        }
      }
    };
    return f__83757.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__83758) {
    var x = cljs.core.first(arglist__83758);
    var options = cljs.core.rest(arglist__83758);
    return js__GT_clj__delegate.call(this, x, options)
  };
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__83759 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
  return function() {
    var G__83763__delegate = function(args) {
      var temp__3695__auto____83760 = cljs.core.get.call(null, cljs.core.deref.call(null, mem__83759), args);
      if(cljs.core.truth_(temp__3695__auto____83760)) {
        var v__83761 = temp__3695__auto____83760;
        return v__83761
      }else {
        var ret__83762 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__83759, cljs.core.assoc, args, ret__83762);
        return ret__83762
      }
    };
    var G__83763 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__83763__delegate.call(this, args)
    };
    G__83763.cljs$lang$maxFixedArity = 0;
    G__83763.cljs$lang$applyTo = function(arglist__83764) {
      var args = cljs.core.seq(arglist__83764);
      return G__83763__delegate.call(this, args)
    };
    return G__83763
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__83766 = function(f) {
    while(true) {
      var ret__83765 = f.call(null);
      if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null, ret__83765))) {
        var G__83769 = ret__83765;
        f = G__83769;
        continue
      }else {
        return ret__83765
      }
      break
    }
  };
  var trampoline__83767 = function() {
    var G__83770__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__83770 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__83770__delegate.call(this, f, args)
    };
    G__83770.cljs$lang$maxFixedArity = 1;
    G__83770.cljs$lang$applyTo = function(arglist__83771) {
      var f = cljs.core.first(arglist__83771);
      var args = cljs.core.rest(arglist__83771);
      return G__83770__delegate.call(this, f, args)
    };
    return G__83770
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__83766.call(this, f);
      default:
        return trampoline__83767.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__83767.cljs$lang$applyTo;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__83772 = function() {
    return rand.call(null, 1)
  };
  var rand__83773 = function(n) {
    return Math.random() * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__83772.call(this);
      case 1:
        return rand__83773.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return Math.floor(Math.random() * n)
};
cljs.core.rand_nth = function rand_nth(coll) {
  return cljs.core.nth.call(null, coll, cljs.core.rand_int.call(null, cljs.core.count.call(null, coll)))
};
cljs.core.group_by = function group_by(f, coll) {
  return cljs.core.reduce.call(null, function(ret, x) {
    var k__83775 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__83775, cljs.core.conj.call(null, cljs.core.get.call(null, ret, k__83775, cljs.core.Vector.fromArray([])), x))
  }, cljs.core.ObjMap.fromObject([], {}), coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'descendants":cljs.core.ObjMap.fromObject([], {}), "\ufdd0'ancestors":cljs.core.ObjMap.fromObject([], {})})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___83784 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___83785 = function(h, child, parent) {
    var or__3548__auto____83776 = cljs.core._EQ_.call(null, child, parent);
    if(cljs.core.truth_(or__3548__auto____83776)) {
      return or__3548__auto____83776
    }else {
      var or__3548__auto____83777 = cljs.core.contains_QMARK_.call(null, "\ufdd0'ancestors".call(null, h).call(null, child), parent);
      if(cljs.core.truth_(or__3548__auto____83777)) {
        return or__3548__auto____83777
      }else {
        var and__3546__auto____83778 = cljs.core.vector_QMARK_.call(null, parent);
        if(cljs.core.truth_(and__3546__auto____83778)) {
          var and__3546__auto____83779 = cljs.core.vector_QMARK_.call(null, child);
          if(cljs.core.truth_(and__3546__auto____83779)) {
            var and__3546__auto____83780 = cljs.core._EQ_.call(null, cljs.core.count.call(null, parent), cljs.core.count.call(null, child));
            if(cljs.core.truth_(and__3546__auto____83780)) {
              var ret__83781 = true;
              var i__83782 = 0;
              while(true) {
                if(cljs.core.truth_(function() {
                  var or__3548__auto____83783 = cljs.core.not.call(null, ret__83781);
                  if(cljs.core.truth_(or__3548__auto____83783)) {
                    return or__3548__auto____83783
                  }else {
                    return cljs.core._EQ_.call(null, i__83782, cljs.core.count.call(null, parent))
                  }
                }())) {
                  return ret__83781
                }else {
                  var G__83787 = isa_QMARK_.call(null, h, child.call(null, i__83782), parent.call(null, i__83782));
                  var G__83788 = i__83782 + 1;
                  ret__83781 = G__83787;
                  i__83782 = G__83788;
                  continue
                }
                break
              }
            }else {
              return and__3546__auto____83780
            }
          }else {
            return and__3546__auto____83779
          }
        }else {
          return and__3546__auto____83778
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___83784.call(this, h, child);
      case 3:
        return isa_QMARK___83785.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__83789 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__83790 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'parents".call(null, h), tag))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__83789.call(this, h);
      case 2:
        return parents__83790.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__83792 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__83793 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'ancestors".call(null, h), tag))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__83792.call(this, h);
      case 2:
        return ancestors__83793.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__83795 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__83796 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core.get.call(null, "\ufdd0'descendants".call(null, h), tag))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__83795.call(this, h);
      case 2:
        return descendants__83796.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__83806 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3353)))));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__83807 = function(h, tag, parent) {
    if(cljs.core.truth_(cljs.core.not_EQ_.call(null, tag, parent))) {
    }else {
      throw new Error(cljs.core.str.call(null, "Assert failed: ", cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 3357)))));
    }
    var tp__83801 = "\ufdd0'parents".call(null, h);
    var td__83802 = "\ufdd0'descendants".call(null, h);
    var ta__83803 = "\ufdd0'ancestors".call(null, h);
    var tf__83804 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.get.call(null, targets, k, cljs.core.set([])), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3548__auto____83805 = cljs.core.truth_(cljs.core.contains_QMARK_.call(null, tp__83801.call(null, tag), parent)) ? null : function() {
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__83803.call(null, tag), parent))) {
        throw new Error(cljs.core.str.call(null, tag, "already has", parent, "as ancestor"));
      }else {
      }
      if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, ta__83803.call(null, parent), tag))) {
        throw new Error(cljs.core.str.call(null, "Cyclic derivation:", parent, "has", tag, "as ancestor"));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, "\ufdd0'parents".call(null, h), tag, cljs.core.conj.call(null, cljs.core.get.call(null, tp__83801, tag, cljs.core.set([])), parent)), "\ufdd0'ancestors":tf__83804.call(null, "\ufdd0'ancestors".call(null, h), tag, td__83802, parent, ta__83803), "\ufdd0'descendants":tf__83804.call(null, "\ufdd0'descendants".call(null, h), parent, ta__83803, tag, td__83802)})
    }();
    if(cljs.core.truth_(or__3548__auto____83805)) {
      return or__3548__auto____83805
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__83806.call(this, h, tag);
      case 3:
        return derive__83807.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__83813 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__83814 = function(h, tag, parent) {
    var parentMap__83809 = "\ufdd0'parents".call(null, h);
    var childsParents__83810 = cljs.core.truth_(parentMap__83809.call(null, tag)) ? cljs.core.disj.call(null, parentMap__83809.call(null, tag), parent) : cljs.core.set([]);
    var newParents__83811 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__83810)) ? cljs.core.assoc.call(null, parentMap__83809, tag, childsParents__83810) : cljs.core.dissoc.call(null, parentMap__83809, tag);
    var deriv_seq__83812 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__83798_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__83798_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__83798_SHARP_), cljs.core.second.call(null, p1__83798_SHARP_)))
    }, cljs.core.seq.call(null, newParents__83811)));
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, parentMap__83809.call(null, tag), parent))) {
      return cljs.core.reduce.call(null, function(p1__83799_SHARP_, p2__83800_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__83799_SHARP_, p2__83800_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__83812))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__83813.call(this, h, tag);
      case 3:
        return underive__83814.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return underive
}();
cljs.core.reset_cache = function reset_cache(method_cache, method_table, cached_hierarchy, hierarchy) {
  cljs.core.swap_BANG_.call(null, method_cache, function(_) {
    return cljs.core.deref.call(null, method_table)
  });
  return cljs.core.swap_BANG_.call(null, cached_hierarchy, function(_) {
    return cljs.core.deref.call(null, hierarchy)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(x, y, prefer_table) {
  var xprefs__83816 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3548__auto____83818 = cljs.core.truth_(function() {
    var and__3546__auto____83817 = xprefs__83816;
    if(cljs.core.truth_(and__3546__auto____83817)) {
      return xprefs__83816.call(null, y)
    }else {
      return and__3546__auto____83817
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3548__auto____83818)) {
    return or__3548__auto____83818
  }else {
    var or__3548__auto____83820 = function() {
      var ps__83819 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.truth_(cljs.core.count.call(null, ps__83819) > 0)) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__83819), prefer_table))) {
          }else {
          }
          var G__83823 = cljs.core.rest.call(null, ps__83819);
          ps__83819 = G__83823;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3548__auto____83820)) {
      return or__3548__auto____83820
    }else {
      var or__3548__auto____83822 = function() {
        var ps__83821 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.truth_(cljs.core.count.call(null, ps__83821) > 0)) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__83821), y, prefer_table))) {
            }else {
            }
            var G__83824 = cljs.core.rest.call(null, ps__83821);
            ps__83821 = G__83824;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3548__auto____83822)) {
        return or__3548__auto____83822
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3548__auto____83825 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3548__auto____83825)) {
    return or__3548__auto____83825
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__83834 = cljs.core.reduce.call(null, function(be, p__83826) {
    var vec__83827__83828 = p__83826;
    var k__83829 = cljs.core.nth.call(null, vec__83827__83828, 0, null);
    var ___83830 = cljs.core.nth.call(null, vec__83827__83828, 1, null);
    var e__83831 = vec__83827__83828;
    if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null, dispatch_val, k__83829))) {
      var be2__83833 = cljs.core.truth_(function() {
        var or__3548__auto____83832 = cljs.core.nil_QMARK_.call(null, be);
        if(cljs.core.truth_(or__3548__auto____83832)) {
          return or__3548__auto____83832
        }else {
          return cljs.core.dominates.call(null, k__83829, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__83831 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__83833), k__83829, prefer_table))) {
      }else {
        throw new Error(cljs.core.str.call(null, "Multiple methods in multimethod '", name, "' match dispatch value: ", dispatch_val, " -> ", k__83829, " and ", cljs.core.first.call(null, be2__83833), ", and neither is preferred"));
      }
      return be2__83833
    }else {
      return be
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__83834)) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy)))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__83834));
      return cljs.core.second.call(null, best_entry__83834)
    }else {
      cljs.core.reset_cache.call(null, method_cache, method_table, cached_hierarchy, hierarchy);
      return find_and_cache_best_method.call(null, name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy)
    }
  }else {
    return null
  }
};
cljs.core.IMultiFn = {};
cljs.core._reset = function _reset(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83835 = mf;
    if(cljs.core.truth_(and__3546__auto____83835)) {
      return mf.cljs$core$IMultiFn$_reset
    }else {
      return and__3546__auto____83835
    }
  }())) {
    return mf.cljs$core$IMultiFn$_reset(mf)
  }else {
    return function() {
      var or__3548__auto____83836 = cljs.core._reset[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83836)) {
        return or__3548__auto____83836
      }else {
        var or__3548__auto____83837 = cljs.core._reset["_"];
        if(cljs.core.truth_(or__3548__auto____83837)) {
          return or__3548__auto____83837
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83838 = mf;
    if(cljs.core.truth_(and__3546__auto____83838)) {
      return mf.cljs$core$IMultiFn$_add_method
    }else {
      return and__3546__auto____83838
    }
  }())) {
    return mf.cljs$core$IMultiFn$_add_method(mf, dispatch_val, method)
  }else {
    return function() {
      var or__3548__auto____83839 = cljs.core._add_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83839)) {
        return or__3548__auto____83839
      }else {
        var or__3548__auto____83840 = cljs.core._add_method["_"];
        if(cljs.core.truth_(or__3548__auto____83840)) {
          return or__3548__auto____83840
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83841 = mf;
    if(cljs.core.truth_(and__3546__auto____83841)) {
      return mf.cljs$core$IMultiFn$_remove_method
    }else {
      return and__3546__auto____83841
    }
  }())) {
    return mf.cljs$core$IMultiFn$_remove_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____83842 = cljs.core._remove_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83842)) {
        return or__3548__auto____83842
      }else {
        var or__3548__auto____83843 = cljs.core._remove_method["_"];
        if(cljs.core.truth_(or__3548__auto____83843)) {
          return or__3548__auto____83843
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83844 = mf;
    if(cljs.core.truth_(and__3546__auto____83844)) {
      return mf.cljs$core$IMultiFn$_prefer_method
    }else {
      return and__3546__auto____83844
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefer_method(mf, dispatch_val, dispatch_val_y)
  }else {
    return function() {
      var or__3548__auto____83845 = cljs.core._prefer_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83845)) {
        return or__3548__auto____83845
      }else {
        var or__3548__auto____83846 = cljs.core._prefer_method["_"];
        if(cljs.core.truth_(or__3548__auto____83846)) {
          return or__3548__auto____83846
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83847 = mf;
    if(cljs.core.truth_(and__3546__auto____83847)) {
      return mf.cljs$core$IMultiFn$_get_method
    }else {
      return and__3546__auto____83847
    }
  }())) {
    return mf.cljs$core$IMultiFn$_get_method(mf, dispatch_val)
  }else {
    return function() {
      var or__3548__auto____83848 = cljs.core._get_method[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83848)) {
        return or__3548__auto____83848
      }else {
        var or__3548__auto____83849 = cljs.core._get_method["_"];
        if(cljs.core.truth_(or__3548__auto____83849)) {
          return or__3548__auto____83849
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83850 = mf;
    if(cljs.core.truth_(and__3546__auto____83850)) {
      return mf.cljs$core$IMultiFn$_methods
    }else {
      return and__3546__auto____83850
    }
  }())) {
    return mf.cljs$core$IMultiFn$_methods(mf)
  }else {
    return function() {
      var or__3548__auto____83851 = cljs.core._methods[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83851)) {
        return or__3548__auto____83851
      }else {
        var or__3548__auto____83852 = cljs.core._methods["_"];
        if(cljs.core.truth_(or__3548__auto____83852)) {
          return or__3548__auto____83852
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83853 = mf;
    if(cljs.core.truth_(and__3546__auto____83853)) {
      return mf.cljs$core$IMultiFn$_prefers
    }else {
      return and__3546__auto____83853
    }
  }())) {
    return mf.cljs$core$IMultiFn$_prefers(mf)
  }else {
    return function() {
      var or__3548__auto____83854 = cljs.core._prefers[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83854)) {
        return or__3548__auto____83854
      }else {
        var or__3548__auto____83855 = cljs.core._prefers["_"];
        if(cljs.core.truth_(or__3548__auto____83855)) {
          return or__3548__auto____83855
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._dispatch = function _dispatch(mf, args) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83856 = mf;
    if(cljs.core.truth_(and__3546__auto____83856)) {
      return mf.cljs$core$IMultiFn$_dispatch
    }else {
      return and__3546__auto____83856
    }
  }())) {
    return mf.cljs$core$IMultiFn$_dispatch(mf, args)
  }else {
    return function() {
      var or__3548__auto____83857 = cljs.core._dispatch[goog.typeOf.call(null, mf)];
      if(cljs.core.truth_(or__3548__auto____83857)) {
        return or__3548__auto____83857
      }else {
        var or__3548__auto____83858 = cljs.core._dispatch["_"];
        if(cljs.core.truth_(or__3548__auto____83858)) {
          return or__3548__auto____83858
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_dispatch = function do_dispatch(mf, dispatch_fn, args) {
  var dispatch_val__83859 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__83860 = cljs.core._get_method.call(null, mf, dispatch_val__83859);
  if(cljs.core.truth_(target_fn__83860)) {
  }else {
    throw new Error(cljs.core.str.call(null, "No method in multimethod '", cljs.core.name, "' for dispatch value: ", dispatch_val__83859));
  }
  return cljs.core.apply.call(null, target_fn__83860, args)
};
cljs.core.MultiFn = function(name, dispatch_fn, default_dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  this.name = name;
  this.dispatch_fn = dispatch_fn;
  this.default_dispatch_val = default_dispatch_val;
  this.hierarchy = hierarchy;
  this.method_table = method_table;
  this.prefer_table = prefer_table;
  this.method_cache = method_cache;
  this.cached_hierarchy = cached_hierarchy
};
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "cljs.core.MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = function(this$) {
  var this__83861 = this;
  return goog.getUid.call(null, this$)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = function(mf) {
  var this__83862 = this;
  cljs.core.swap_BANG_.call(null, this__83862.method_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__83862.method_cache, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__83862.prefer_table, function(mf) {
    return cljs.core.ObjMap.fromObject([], {})
  });
  cljs.core.swap_BANG_.call(null, this__83862.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = function(mf, dispatch_val, method) {
  var this__83863 = this;
  cljs.core.swap_BANG_.call(null, this__83863.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__83863.method_cache, this__83863.method_table, this__83863.cached_hierarchy, this__83863.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = function(mf, dispatch_val) {
  var this__83864 = this;
  cljs.core.swap_BANG_.call(null, this__83864.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__83864.method_cache, this__83864.method_table, this__83864.cached_hierarchy, this__83864.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = function(mf, dispatch_val) {
  var this__83865 = this;
  if(cljs.core.truth_(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__83865.cached_hierarchy), cljs.core.deref.call(null, this__83865.hierarchy)))) {
  }else {
    cljs.core.reset_cache.call(null, this__83865.method_cache, this__83865.method_table, this__83865.cached_hierarchy, this__83865.hierarchy)
  }
  var temp__3695__auto____83866 = cljs.core.deref.call(null, this__83865.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3695__auto____83866)) {
    var target_fn__83867 = temp__3695__auto____83866;
    return target_fn__83867
  }else {
    var temp__3695__auto____83868 = cljs.core.find_and_cache_best_method.call(null, this__83865.name, dispatch_val, this__83865.hierarchy, this__83865.method_table, this__83865.prefer_table, this__83865.method_cache, this__83865.cached_hierarchy);
    if(cljs.core.truth_(temp__3695__auto____83868)) {
      var target_fn__83869 = temp__3695__auto____83868;
      return target_fn__83869
    }else {
      return cljs.core.deref.call(null, this__83865.method_table).call(null, this__83865.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__83870 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__83870.prefer_table))) {
    throw new Error(cljs.core.str.call(null, "Preference conflict in multimethod '", this__83870.name, "': ", dispatch_val_y, " is already preferred to ", dispatch_val_x));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__83870.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core.get.call(null, old, dispatch_val_x, cljs.core.set([])), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__83870.method_cache, this__83870.method_table, this__83870.cached_hierarchy, this__83870.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = function(mf) {
  var this__83871 = this;
  return cljs.core.deref.call(null, this__83871.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = function(mf) {
  var this__83872 = this;
  return cljs.core.deref.call(null, this__83872.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = function(mf, args) {
  var this__83873 = this;
  return cljs.core.do_dispatch.call(null, mf, this__83873.dispatch_fn, args)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var G__83874__delegate = function(_, args) {
    return cljs.core._dispatch.call(null, this, args)
  };
  var G__83874 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__83874__delegate.call(this, _, args)
  };
  G__83874.cljs$lang$maxFixedArity = 1;
  G__83874.cljs$lang$applyTo = function(arglist__83875) {
    var _ = cljs.core.first(arglist__83875);
    var args = cljs.core.rest(arglist__83875);
    return G__83874__delegate.call(this, _, args)
  };
  return G__83874
}();
cljs.core.MultiFn.prototype.apply = function(_, args) {
  return cljs.core._dispatch.call(null, this, args)
};
cljs.core.remove_all_methods = function remove_all_methods(multifn) {
  return cljs.core._reset.call(null, multifn)
};
cljs.core.remove_method = function remove_method(multifn, dispatch_val) {
  return cljs.core._remove_method.call(null, multifn, dispatch_val)
};
cljs.core.prefer_method = function prefer_method(multifn, dispatch_val_x, dispatch_val_y) {
  return cljs.core._prefer_method.call(null, multifn, dispatch_val_x, dispatch_val_y)
};
cljs.core.methods$ = function methods$(multifn) {
  return cljs.core._methods.call(null, multifn)
};
cljs.core.get_method = function get_method(multifn, dispatch_val) {
  return cljs.core._get_method.call(null, multifn, dispatch_val)
};
cljs.core.prefers = function prefers(multifn) {
  return cljs.core._prefers.call(null, multifn)
};
goog.provide("prezo.util");
goog.require("cljs.core");
prezo.util.by_id = function by_id(id) {
  return document.getElementById(id)
};
goog.provide("clojure.string");
goog.require("cljs.core");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
clojure.string.seq_reverse = function seq_reverse(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
};
clojure.string.reverse = function reverse(s) {
  return s.split("").reverse().join("")
};
clojure.string.replace = function replace(s, match, replacement) {
  if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, match))) {
    return s.replace(new RegExp(goog.string.regExpEscape.call(null, match), "g"), replacement)
  }else {
    if(cljs.core.truth_(match.hasOwnProperty("source"))) {
      return s.replace(new RegExp(match.source, "g"), replacement)
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw cljs.core.str.call(null, "Invalid match arg: ", match);
      }else {
        return null
      }
    }
  }
};
clojure.string.replace_first = function replace_first(s, match, replacement) {
  return s.replace(match, replacement)
};
clojure.string.join = function() {
  var join = null;
  var join__84080 = function(coll) {
    return cljs.core.apply.call(null, cljs.core.str, coll)
  };
  var join__84081 = function(separator, coll) {
    return cljs.core.apply.call(null, cljs.core.str, cljs.core.interpose.call(null, separator, coll))
  };
  join = function(separator, coll) {
    switch(arguments.length) {
      case 1:
        return join__84080.call(this, separator);
      case 2:
        return join__84081.call(this, separator, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return join
}();
clojure.string.upper_case = function upper_case(s) {
  return s.toUpperCase()
};
clojure.string.lower_case = function lower_case(s) {
  return s.toLowerCase()
};
clojure.string.capitalize = function capitalize(s) {
  if(cljs.core.truth_(cljs.core.count.call(null, s) < 2)) {
    return clojure.string.upper_case.call(null, s)
  }else {
    return cljs.core.str.call(null, clojure.string.upper_case.call(null, cljs.core.subs.call(null, s, 0, 1)), clojure.string.lower_case.call(null, cljs.core.subs.call(null, s, 1)))
  }
};
clojure.string.split = function() {
  var split = null;
  var split__84089 = function(s, re) {
    return cljs.core.vec.call(null, cljs.core.str.call(null, s).split(re))
  };
  var split__84090 = function(s, re, limit) {
    if(cljs.core.truth_(limit < 1)) {
      return cljs.core.vec.call(null, cljs.core.str.call(null, s).split(re))
    }else {
      var s__84083 = s;
      var limit__84084 = limit;
      var parts__84085 = cljs.core.Vector.fromArray([]);
      while(true) {
        if(cljs.core.truth_(cljs.core._EQ_.call(null, limit__84084, 1))) {
          return cljs.core.conj.call(null, parts__84085, s__84083)
        }else {
          var temp__3695__auto____84086 = cljs.core.re_find.call(null, re, s__84083);
          if(cljs.core.truth_(temp__3695__auto____84086)) {
            var m__84087 = temp__3695__auto____84086;
            var index__84088 = s__84083.indexOf(m__84087);
            var G__84092 = s__84083.substring(index__84088 + cljs.core.count.call(null, m__84087));
            var G__84093 = limit__84084 - 1;
            var G__84094 = cljs.core.conj.call(null, parts__84085, s__84083.substring(0, index__84088));
            s__84083 = G__84092;
            limit__84084 = G__84093;
            parts__84085 = G__84094;
            continue
          }else {
            return cljs.core.conj.call(null, parts__84085, s__84083)
          }
        }
        break
      }
    }
  };
  split = function(s, re, limit) {
    switch(arguments.length) {
      case 2:
        return split__84089.call(this, s, re);
      case 3:
        return split__84090.call(this, s, re, limit)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return split
}();
clojure.string.split_lines = function split_lines(s) {
  return clojure.string.split.call(null, s, /\n|\r\n/)
};
clojure.string.trim = function trim(s) {
  return goog.string.trim.call(null, s)
};
clojure.string.triml = function triml(s) {
  return goog.string.trimLeft.call(null, s)
};
clojure.string.trimr = function trimr(s) {
  return goog.string.trimRight.call(null, s)
};
clojure.string.trim_newline = function trim_newline(s) {
  var index__84095 = s.length;
  while(true) {
    if(cljs.core.truth_(index__84095 === 0)) {
      return""
    }else {
      var ch__84096 = cljs.core.get.call(null, s, index__84095 - 1);
      if(cljs.core.truth_(function() {
        var or__3548__auto____84097 = cljs.core._EQ_.call(null, ch__84096, "\n");
        if(cljs.core.truth_(or__3548__auto____84097)) {
          return or__3548__auto____84097
        }else {
          return cljs.core._EQ_.call(null, ch__84096, "\r")
        }
      }())) {
        var G__84098 = index__84095 - 1;
        index__84095 = G__84098;
        continue
      }else {
        return s.substring(0, index__84095)
      }
    }
    break
  }
};
clojure.string.blank_QMARK_ = function blank_QMARK_(s) {
  var s__84099 = cljs.core.str.call(null, s);
  if(cljs.core.truth_(function() {
    var or__3548__auto____84100 = cljs.core.not.call(null, s__84099);
    if(cljs.core.truth_(or__3548__auto____84100)) {
      return or__3548__auto____84100
    }else {
      var or__3548__auto____84101 = cljs.core._EQ_.call(null, "", s__84099);
      if(cljs.core.truth_(or__3548__auto____84101)) {
        return or__3548__auto____84101
      }else {
        return cljs.core.re_matches.call(null, /\s+/, s__84099)
      }
    }
  }())) {
    return true
  }else {
    return false
  }
};
clojure.string.escape = function escape(s, cmap) {
  var buffer__84102 = new goog.string.StringBuffer;
  var length__84103 = s.length;
  var index__84104 = 0;
  while(true) {
    if(cljs.core.truth_(cljs.core._EQ_.call(null, length__84103, index__84104))) {
      return buffer__84102.toString()
    }else {
      var ch__84105 = s.charAt(index__84104);
      var temp__3695__auto____84106 = cljs.core.get.call(null, cmap, ch__84105);
      if(cljs.core.truth_(temp__3695__auto____84106)) {
        var replacement__84107 = temp__3695__auto____84106;
        buffer__84102.append(cljs.core.str.call(null, replacement__84107))
      }else {
        buffer__84102.append(ch__84105)
      }
      var G__84108 = index__84104 + 1;
      index__84104 = G__84108;
      continue
    }
    break
  }
};
goog.provide("enfocus.core");
goog.require("cljs.core");
goog.require("goog.dom.query");
goog.require("goog.async.Delay");
goog.require("goog.dom.classes");
goog.require("goog.dom.ViewportSizeMonitor");
goog.require("goog.events");
goog.require("goog.dom");
goog.require("clojure.string");
goog.require("goog.fx.dom");
goog.require("goog.Timer");
goog.require("goog.style");
goog.require("goog.net.XhrIo");
goog.require("goog.fx");
enfocus.core.debug = true;
enfocus.core.log_debug = function log_debug(mesg) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____83876 = enfocus.core.debug;
    if(cljs.core.truth_(and__3546__auto____83876)) {
      return cljs.core.not.call(null, cljs.core._EQ_.call(null, window.console, undefined))
    }else {
      return and__3546__auto____83876
    }
  }())) {
    return console.log(mesg)
  }else {
    return null
  }
};
enfocus.core.setTimeout = function setTimeout(func, ttime) {
  return goog.Timer.callOnce.call(null, func, ttime)
};
enfocus.core.node_QMARK_ = function node_QMARK_(tst) {
  return goog.dom.isNodeLike.call(null, tst)
};
enfocus.core.nodelist_QMARK_ = function nodelist_QMARK_(tst) {
  return cljs.core.instance_QMARK_.call(null, NodeList, tst)
};
enfocus.core.nodes__GT_coll = function nodes__GT_coll(nl) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, nl))) {
    return cljs.core.Vector.fromArray([])
  }else {
    if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null, nl))) {
      return cljs.core.Vector.fromArray([nl])
    }else {
      if(cljs.core.truth_(window === nl)) {
        return cljs.core.Vector.fromArray([nl])
      }else {
        if(cljs.core.truth_(function() {
          var or__3548__auto____83878 = cljs.core.instance_QMARK_.call(null, Array, nl);
          if(cljs.core.truth_(or__3548__auto____83878)) {
            return or__3548__auto____83878
          }else {
            return cljs.core.coll_QMARK_.call(null, nl)
          }
        }())) {
          return nl
        }else {
          if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null, nl))) {
            var iter__509__auto____83883 = function iter__83879(s__83880) {
              return new cljs.core.LazySeq(null, false, function() {
                var s__83880__83881 = s__83880;
                while(true) {
                  if(cljs.core.truth_(cljs.core.seq.call(null, s__83880__83881))) {
                    var x__83882 = cljs.core.first.call(null, s__83880__83881);
                    return cljs.core.cons.call(null, nl[x__83882], iter__83879.call(null, cljs.core.rest.call(null, s__83880__83881)))
                  }else {
                    return null
                  }
                  break
                }
              })
            };
            return iter__509__auto____83883.call(null, cljs.core.range.call(null, 0, nl.length))
          }else {
            return null
          }
        }
      }
    }
  }
};
enfocus.core.flatten_nodes_coll = function flatten_nodes_coll(values) {
  return cljs.core.mapcat.call(null, function(p1__83877_SHARP_) {
    if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, p1__83877_SHARP_))) {
      return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null, p1__83877_SHARP_)])
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        return enfocus.core.nodes__GT_coll.call(null, p1__83877_SHARP_)
      }else {
        return null
      }
    }
  }, values)
};
enfocus.core.style_set = function style_set(obj, values) {
  var G__83884__83885 = cljs.core.seq.call(null, cljs.core.apply.call(null, cljs.core.hash_map, values));
  if(cljs.core.truth_(G__83884__83885)) {
    var G__83887__83889 = cljs.core.first.call(null, G__83884__83885);
    var vec__83888__83890 = G__83887__83889;
    var attr__83891 = cljs.core.nth.call(null, vec__83888__83890, 0, null);
    var value__83892 = cljs.core.nth.call(null, vec__83888__83890, 1, null);
    var G__83884__83893 = G__83884__83885;
    var G__83887__83894 = G__83887__83889;
    var G__83884__83895 = G__83884__83893;
    while(true) {
      var vec__83896__83897 = G__83887__83894;
      var attr__83898 = cljs.core.nth.call(null, vec__83896__83897, 0, null);
      var value__83899 = cljs.core.nth.call(null, vec__83896__83897, 1, null);
      var G__83884__83900 = G__83884__83895;
      goog.style.setStyle.call(null, obj, cljs.core.name.call(null, attr__83898), value__83899);
      var temp__3698__auto____83901 = cljs.core.next.call(null, G__83884__83900);
      if(cljs.core.truth_(temp__3698__auto____83901)) {
        var G__83884__83902 = temp__3698__auto____83901;
        var G__83903 = cljs.core.first.call(null, G__83884__83902);
        var G__83904 = G__83884__83902;
        G__83887__83894 = G__83903;
        G__83884__83895 = G__83904;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return obj
};
enfocus.core.style_remove = function style_remove(obj, values) {
  var G__83905__83906 = cljs.core.seq.call(null, values);
  if(cljs.core.truth_(G__83905__83906)) {
    var attr__83907 = cljs.core.first.call(null, G__83905__83906);
    var G__83905__83908 = G__83905__83906;
    while(true) {
      if(cljs.core.truth_(goog.userAgent.IE)) {
        goog.style.setStyle.call(null, obj, cljs.core.name.call(null, attr__83907), "")
      }else {
        obj.style.removeProperty(cljs.core.name.call(null, attr__83907))
      }
      var temp__3698__auto____83909 = cljs.core.next.call(null, G__83905__83908);
      if(cljs.core.truth_(temp__3698__auto____83909)) {
        var G__83905__83910 = temp__3698__auto____83909;
        var G__83911 = cljs.core.first.call(null, G__83905__83910);
        var G__83912 = G__83905__83910;
        attr__83907 = G__83911;
        G__83905__83908 = G__83912;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
enfocus.core.get_eff_prop_name = function get_eff_prop_name(etype) {
  return cljs.core.str.call(null, "__ef_effect_", etype)
};
enfocus.core.get_mills = function get_mills() {
  return(new Date).getMilliseconds()
};
enfocus.core.child_of_QMARK_ = function child_of_QMARK_(parent, child) {
  while(true) {
    if(cljs.core.truth_(cljs.core.not.call(null, child))) {
      return false
    }else {
      if(cljs.core.truth_(parent === child)) {
        return false
      }else {
        if(cljs.core.truth_(child.parentNode === parent)) {
          return true
        }else {
          if(cljs.core.truth_("\ufdd0'else")) {
            var G__83913 = parent;
            var G__83914 = child.parentNode;
            parent = G__83913;
            child = G__83914;
            continue
          }else {
            return null
          }
        }
      }
    }
    break
  }
};
enfocus.core.mouse_enter_leave = function mouse_enter_leave(func) {
  return function(e) {
    var re__83915 = e.relatedTarget;
    var this$__83916 = e.currentTarget;
    if(cljs.core.truth_(function() {
      var and__3546__auto____83917 = cljs.core.not.call(null, re__83915 === this$__83916);
      if(cljs.core.truth_(and__3546__auto____83917)) {
        return cljs.core.not.call(null, enfocus.core.child_of_QMARK_.call(null, this$__83916, re__83915))
      }else {
        return and__3546__auto____83917
      }
    }())) {
      return func.call(null, e)
    }else {
      return null
    }
  }
};
enfocus.core.pix_round = function pix_round(step) {
  if(cljs.core.truth_(step < 0)) {
    return Math.floor.call(null, step)
  }else {
    return Math.ceil.call(null, step)
  }
};
enfocus.core.add_map_attrs = function() {
  var add_map_attrs = null;
  var add_map_attrs__83937 = function(elem, ats) {
    if(cljs.core.truth_(elem)) {
      if(cljs.core.truth_(cljs.core.map_QMARK_.call(null, ats))) {
        var G__83918__83919 = cljs.core.seq.call(null, ats);
        if(cljs.core.truth_(G__83918__83919)) {
          var G__83921__83923 = cljs.core.first.call(null, G__83918__83919);
          var vec__83922__83924 = G__83921__83923;
          var k__83925 = cljs.core.nth.call(null, vec__83922__83924, 0, null);
          var v__83926 = cljs.core.nth.call(null, vec__83922__83924, 1, null);
          var G__83918__83927 = G__83918__83919;
          var G__83921__83928 = G__83921__83923;
          var G__83918__83929 = G__83918__83927;
          while(true) {
            var vec__83930__83931 = G__83921__83928;
            var k__83932 = cljs.core.nth.call(null, vec__83930__83931, 0, null);
            var v__83933 = cljs.core.nth.call(null, vec__83930__83931, 1, null);
            var G__83918__83934 = G__83918__83929;
            add_map_attrs.call(null, elem, k__83932, v__83933);
            var temp__3698__auto____83935 = cljs.core.next.call(null, G__83918__83934);
            if(cljs.core.truth_(temp__3698__auto____83935)) {
              var G__83918__83936 = temp__3698__auto____83935;
              var G__83940 = cljs.core.first.call(null, G__83918__83936);
              var G__83941 = G__83918__83936;
              G__83921__83928 = G__83940;
              G__83918__83929 = G__83941;
              continue
            }else {
            }
            break
          }
        }else {
        }
        return elem
      }else {
        return null
      }
    }else {
      return null
    }
  };
  var add_map_attrs__83938 = function(elem, k, v) {
    elem.setAttribute(cljs.core.name.call(null, k), v);
    return elem
  };
  add_map_attrs = function(elem, k, v) {
    switch(arguments.length) {
      case 2:
        return add_map_attrs__83937.call(this, elem, k);
      case 3:
        return add_map_attrs__83938.call(this, elem, k, v)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return add_map_attrs
}();
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null, 0);
enfocus.core.tpl_cache = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"], {"style":"display: none; width: 0px; height: 0px"}).strobj;
enfocus.core.create_hidden_dom = function create_hidden_dom(child) {
  var div__83942 = goog.dom.createDom.call(null, "div", enfocus.core.hide_style);
  div__83942.appendChild(child);
  goog.dom.appendChild.call(null, goog.dom.getDocument.call(null).body, div__83942);
  return div__83942
};
enfocus.core.remove_node_return_child = function remove_node_return_child(div) {
  var child__83943 = div.childNodes;
  var frag__83944 = document.createDocumentFragment();
  goog.dom.append.call(null, frag__83944, child__83943);
  goog.dom.removeNode.call(null, div);
  return frag__83944
};
enfocus.core.replace_ids = function replace_ids(text) {
  var re__83946 = new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)", "g");
  var sym__83947 = cljs.core.str.call(null, cljs.core.name.call(null, cljs.core.gensym.call(null, "id")), "_");
  return cljs.core.Vector.fromArray([cljs.core.str.call(null, sym__83947), text.replace(re__83946, function(a, b, c, d) {
    return cljs.core.str.call(null, b, sym__83947, c, d)
  })])
};
enfocus.core.reset_ids = function reset_ids(sym, nod) {
  var id_nodes__83948 = enfocus.core.css_select.call(null, nod, "*[id]");
  var nod_col__83949 = enfocus.core.nodes__GT_coll.call(null, id_nodes__83948);
  return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__83945_SHARP_) {
    var id__83950 = p1__83945_SHARP_.getAttribute("id");
    var rid__83951 = id__83950.replace(sym, "");
    return p1__83945_SHARP_.setAttribute("id", rid__83951)
  }, nod_col__83949))
};
enfocus.core.load_remote_dom = function load_remote_dom(uri) {
  if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, cljs.core.deref.call(null, enfocus.core.tpl_cache).call(null, uri)))) {
    cljs.core.swap_BANG_.call(null, enfocus.core.tpl_load_cnt, cljs.core.inc);
    var req__83952 = new goog.net.XhrIo;
    var callback__83962 = function(req) {
      var text__83954 = req.getResponseText();
      var vec__83953__83955 = enfocus.core.replace_ids.call(null, text__83954);
      var sym__83956 = cljs.core.nth.call(null, vec__83953__83955, 0, null);
      var txt__83957 = cljs.core.nth.call(null, vec__83953__83955, 1, null);
      var data__83958 = goog.dom.htmlToDocumentFragment.call(null, txt__83957);
      var body__83959 = cljs.core.first.call(null, enfocus.core.nodes__GT_coll.call(null, enfocus.core.css_select.call(null, data__83958, "body")));
      if(cljs.core.truth_(body__83959)) {
        var frag__83960 = document.createDocumentFragment();
        var childs__83961 = frag__83960.childNodes;
        goog.dom.append.call(null, frag__83960, childs__83961);
        return cljs.core.swap_BANG_.call(null, enfocus.core.tpl_cache, cljs.core.assoc, uri, cljs.core.Vector.fromArray([sym__83956, frag__83960]))
      }else {
        return cljs.core.swap_BANG_.call(null, enfocus.core.tpl_cache, cljs.core.assoc, uri, cljs.core.Vector.fromArray([sym__83956, data__83958]))
      }
    };
    goog.events.listen.call(null, req__83952, goog.net.EventType.COMPLETE, function() {
      callback__83962.call(null, req__83952);
      return cljs.core.swap_BANG_.call(null, enfocus.core.tpl_load_cnt, cljs.core.dec)
    });
    return req__83952.send(uri, "GET")
  }else {
    return null
  }
};
enfocus.core.get_cached_dom = function get_cached_dom(uri) {
  var nod__83963 = cljs.core.deref.call(null, enfocus.core.tpl_cache).call(null, uri);
  if(cljs.core.truth_(nod__83963)) {
    return cljs.core.Vector.fromArray([cljs.core.first.call(null, nod__83963), cljs.core.second.call(null, nod__83963).cloneNode(true)])
  }else {
    return null
  }
};
enfocus.core.get_cached_snippet = function get_cached_snippet(uri, sel) {
  var sel_str__83964 = enfocus.core.create_sel_str.call(null, sel);
  var cache__83965 = cljs.core.deref.call(null, enfocus.core.tpl_cache).call(null, cljs.core.str.call(null, uri.call(null, sel_str__83964)));
  if(cljs.core.truth_(cache__83965)) {
    return cljs.core.Vector.fromArray([cljs.core.first.call(null, cache__83965), cljs.core.second.call(null, cache__83965).cloneNode(true)])
  }else {
    var vec__83966__83967 = enfocus.core.get_cached_dom.call(null, uri);
    var sym__83968 = cljs.core.nth.call(null, vec__83966__83967, 0, null);
    var tdom__83969 = cljs.core.nth.call(null, vec__83966__83967, 1, null);
    var dom__83970 = enfocus.core.create_hidden_dom.call(null, tdom__83969);
    var tsnip__83971 = enfocus.core.css_select.call(null, dom__83970, sel_str__83964);
    var snip__83972 = cljs.core.truth_(cljs.core.instance_QMARK_.call(null, Array, tsnip__83971)) ? cljs.core.first.call(null, tsnip__83971) : tsnip__83971;
    enfocus.core.remove_node_return_child.call(null, dom__83970);
    cljs.core.assoc.call(null, cljs.core.deref.call(null, enfocus.core.tpl_cache), cljs.core.str.call(null, uri, sel_str__83964), cljs.core.Vector.fromArray([sym__83968, snip__83972]));
    return cljs.core.Vector.fromArray([sym__83968, snip__83972])
  }
};
enfocus.core.extr_multi_node = function extr_multi_node(func) {
  return function trans(pnodes) {
    var pnod_col__83973 = enfocus.core.nodes__GT_coll.call(null, pnodes);
    var result__83974 = cljs.core.doall.call(null, cljs.core.map.call(null, func, pnod_col__83973));
    if(cljs.core.truth_(cljs.core.count.call(null, result__83974) <= 1)) {
      return cljs.core.first.call(null, result__83974)
    }else {
      return result__83974
    }
  }
};
enfocus.core.chainable_standard = function chainable_standard(func) {
  return function() {
    var trans = null;
    var trans__83977 = function(pnodes) {
      return trans.call(null, pnodes, null)
    };
    var trans__83978 = function(pnodes, chain) {
      var pnod_col__83976 = enfocus.core.nodes__GT_coll.call(null, pnodes);
      cljs.core.doall.call(null, cljs.core.map.call(null, func, pnod_col__83976));
      if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, chain)))) {
        return chain.call(null, pnodes)
      }else {
        return null
      }
    };
    trans = function(pnodes, chain) {
      switch(arguments.length) {
        case 1:
          return trans__83977.call(this, pnodes);
        case 2:
          return trans__83978.call(this, pnodes, chain)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return trans
  }()
};
enfocus.core.chainable_effect = function chainable_effect(func, callback) {
  return function() {
    var trans = null;
    var trans__83984 = function(pnodes) {
      return trans.call(null, pnodes, null)
    };
    var trans__83985 = function(pnodes, chain) {
      var pnod_col__83981 = enfocus.core.nodes__GT_coll.call(null, pnodes);
      var cnt__83982 = cljs.core.atom.call(null, cljs.core.count.call(null, pnod_col__83981));
      var partial_cback__83983 = function() {
        cljs.core.swap_BANG_.call(null, cnt__83982, cljs.core.dec);
        if(cljs.core.truth_(cljs.core._EQ_.call(null, 0, cljs.core.deref.call(null, cnt__83982)))) {
          if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, callback)))) {
            callback.call(null, pnodes)
          }else {
          }
          if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, chain)))) {
            return chain.call(null, pnodes)
          }else {
            return null
          }
        }else {
          return null
        }
      };
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__83975_SHARP_) {
        return func.call(null, p1__83975_SHARP_, partial_cback__83983)
      }, pnod_col__83981))
    };
    trans = function(pnodes, chain) {
      switch(arguments.length) {
        case 1:
          return trans__83984.call(this, pnodes);
        case 2:
          return trans__83985.call(this, pnodes, chain)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return trans
  }()
};
enfocus.core.content_based_trans = function content_based_trans(values, func) {
  var fnodes__83987 = enfocus.core.flatten_nodes_coll.call(null, values);
  return enfocus.core.chainable_standard.call(null, function(pnod) {
    var frag__83988 = document.createDocumentFragment();
    cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__83980_SHARP_) {
      return goog.dom.appendChild.call(null, frag__83988, p1__83980_SHARP_.cloneNode(true))
    }, fnodes__83987));
    return func.call(null, pnod, frag__83988)
  })
};
enfocus.core.en_content = function() {
  var en_content__delegate = function(values) {
    return enfocus.core.content_based_trans.call(null, values, function(pnod, frag) {
      goog.dom.removeChildren.call(null, pnod);
      return goog.dom.appendChild.call(null, pnod, frag)
    })
  };
  var en_content = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_content__delegate.call(this, values)
  };
  en_content.cljs$lang$maxFixedArity = 0;
  en_content.cljs$lang$applyTo = function(arglist__83989) {
    var values = cljs.core.seq(arglist__83989);
    return en_content__delegate.call(this, values)
  };
  return en_content
}();
enfocus.core.en_html_content = function en_html_content(txt) {
  return enfocus.core.chainable_standard.call(null, function(pnod) {
    var frag__83990 = goog.dom.htmlToDocumentFragment.call(null, txt);
    goog.dom.removeChildren.call(null, pnod);
    return goog.dom.append.call(null, pnod, frag__83990)
  })
};
enfocus.core.en_set_attr = function() {
  var en_set_attr__delegate = function(values) {
    var at_lst__83992 = cljs.core.partition.call(null, 2, values);
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p__83993) {
        var vec__83994__83995 = p__83993;
        var a__83996 = cljs.core.nth.call(null, vec__83994__83995, 0, null);
        var v__83997 = cljs.core.nth.call(null, vec__83994__83995, 1, null);
        return pnod.setAttribute(cljs.core.name.call(null, a__83996), v__83997)
      }, at_lst__83992))
    })
  };
  var en_set_attr = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_set_attr__delegate.call(this, values)
  };
  en_set_attr.cljs$lang$maxFixedArity = 0;
  en_set_attr.cljs$lang$applyTo = function(arglist__83998) {
    var values = cljs.core.seq(arglist__83998);
    return en_set_attr__delegate.call(this, values)
  };
  return en_set_attr
}();
enfocus.core.en_remove_attr = function() {
  var en_remove_attr__delegate = function(values) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__83991_SHARP_) {
        return pnod.removeAttribute(cljs.core.name.call(null, p1__83991_SHARP_))
      }, values))
    })
  };
  var en_remove_attr = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_remove_attr__delegate.call(this, values)
  };
  en_remove_attr.cljs$lang$maxFixedArity = 0;
  en_remove_attr.cljs$lang$applyTo = function(arglist__83999) {
    var values = cljs.core.seq(arglist__83999);
    return en_remove_attr__delegate.call(this, values)
  };
  return en_remove_attr
}();
enfocus.core.has_class = function has_class(el, cls) {
  return goog.dom.classes.hasClass.call(null, el, cls)
};
enfocus.core.en_add_class = function() {
  var en_add_class__delegate = function(values) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__84000_SHARP_) {
        return goog.dom.classes.add.call(null, pnod, p1__84000_SHARP_)
      }, values))
    })
  };
  var en_add_class = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_add_class__delegate.call(this, values)
  };
  en_add_class.cljs$lang$maxFixedArity = 0;
  en_add_class.cljs$lang$applyTo = function(arglist__84002) {
    var values = cljs.core.seq(arglist__84002);
    return en_add_class__delegate.call(this, values)
  };
  return en_add_class
}();
enfocus.core.en_remove_class = function() {
  var en_remove_class__delegate = function(values) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__84001_SHARP_) {
        return goog.dom.classes.remove.call(null, pnod, p1__84001_SHARP_)
      }, values))
    })
  };
  var en_remove_class = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_remove_class__delegate.call(this, values)
  };
  en_remove_class.cljs$lang$maxFixedArity = 0;
  en_remove_class.cljs$lang$applyTo = function(arglist__84004) {
    var values = cljs.core.seq(arglist__84004);
    return en_remove_class__delegate.call(this, values)
  };
  return en_remove_class
}();
enfocus.core.en_do__GT_ = function() {
  var en_do__GT___delegate = function(forms) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__84003_SHARP_) {
        return p1__84003_SHARP_.call(null, pnod)
      }, forms))
    })
  };
  var en_do__GT_ = function(var_args) {
    var forms = null;
    if(goog.isDef(var_args)) {
      forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_do__GT___delegate.call(this, forms)
  };
  en_do__GT_.cljs$lang$maxFixedArity = 0;
  en_do__GT_.cljs$lang$applyTo = function(arglist__84005) {
    var forms = cljs.core.seq(arglist__84005);
    return en_do__GT___delegate.call(this, forms)
  };
  return en_do__GT_
}();
enfocus.core.en_append = function() {
  var en_append__delegate = function(values) {
    return enfocus.core.content_based_trans.call(null, values, function(pnod, frag) {
      return goog.dom.appendChild.call(null, pnod, frag)
    })
  };
  var en_append = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_append__delegate.call(this, values)
  };
  en_append.cljs$lang$maxFixedArity = 0;
  en_append.cljs$lang$applyTo = function(arglist__84006) {
    var values = cljs.core.seq(arglist__84006);
    return en_append__delegate.call(this, values)
  };
  return en_append
}();
enfocus.core.en_prepend = function() {
  var en_prepend__delegate = function(values) {
    return enfocus.core.content_based_trans.call(null, values, function(pnod, frag) {
      var nod__84007 = pnod.firstChild;
      return pnod.insertBefore(frag, nod__84007)
    })
  };
  var en_prepend = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_prepend__delegate.call(this, values)
  };
  en_prepend.cljs$lang$maxFixedArity = 0;
  en_prepend.cljs$lang$applyTo = function(arglist__84008) {
    var values = cljs.core.seq(arglist__84008);
    return en_prepend__delegate.call(this, values)
  };
  return en_prepend
}();
enfocus.core.en_before = function() {
  var en_before__delegate = function(values) {
    return enfocus.core.content_based_trans.call(null, values, function(pnod, frag) {
      return goog.dom.insertSiblingBefore.call(null, frag, pnod)
    })
  };
  var en_before = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_before__delegate.call(this, values)
  };
  en_before.cljs$lang$maxFixedArity = 0;
  en_before.cljs$lang$applyTo = function(arglist__84009) {
    var values = cljs.core.seq(arglist__84009);
    return en_before__delegate.call(this, values)
  };
  return en_before
}();
enfocus.core.en_after = function() {
  var en_after__delegate = function(values) {
    return enfocus.core.content_based_trans.call(null, values, function(pnod, frag) {
      return goog.dom.insertSiblingAfter.call(null, frag, pnod)
    })
  };
  var en_after = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_after__delegate.call(this, values)
  };
  en_after.cljs$lang$maxFixedArity = 0;
  en_after.cljs$lang$applyTo = function(arglist__84010) {
    var values = cljs.core.seq(arglist__84010);
    return en_after__delegate.call(this, values)
  };
  return en_after
}();
enfocus.core.en_substitute = function() {
  var en_substitute__delegate = function(values) {
    return enfocus.core.content_based_trans.call(null, values, function(pnod, frag) {
      return goog.dom.replaceNode.call(null, frag, pnod)
    })
  };
  var en_substitute = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_substitute__delegate.call(this, values)
  };
  en_substitute.cljs$lang$maxFixedArity = 0;
  en_substitute.cljs$lang$applyTo = function(arglist__84011) {
    var values = cljs.core.seq(arglist__84011);
    return en_substitute__delegate.call(this, values)
  };
  return en_substitute
}();
enfocus.core.en_remove_node = function() {
  var en_remove_node__delegate = function(values) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return goog.dom.removeNode.call(null, pnod)
    })
  };
  var en_remove_node = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_remove_node__delegate.call(this, values)
  };
  en_remove_node.cljs$lang$maxFixedArity = 0;
  en_remove_node.cljs$lang$applyTo = function(arglist__84012) {
    var values = cljs.core.seq(arglist__84012);
    return en_remove_node__delegate.call(this, values)
  };
  return en_remove_node
}();
enfocus.core.en_wrap = function en_wrap(elm, mattr) {
  return enfocus.core.chainable_standard.call(null, function(pnod) {
    var elem__84013 = goog.dom.createElement.call(null, cljs.core.name.call(null, elm));
    enfocus.core.add_map_attrs.call(null, elem__84013, mattr);
    enfocus.core.en_content.call(null, pnod.cloneNode(true)).call(null, elem__84013);
    elem__84013;
    enfocus.core.en_do__GT_.call(null, enfocus.core.en_after.call(null, elem__84013), enfocus.core.en_remove_node.call(null)).call(null, pnod);
    return pnod
  })
};
enfocus.core.en_unwrap = function en_unwrap() {
  return enfocus.core.chainable_standard.call(null, function(pnod) {
    var frag__84014 = document.createDocumentFragment();
    enfocus.core.en_append.call(null, pnod.childNodes).call(null, frag__84014);
    frag__84014;
    return goog.dom.replaceNode.call(null, frag__84014, pnod)
  })
};
enfocus.core.en_set_style = function() {
  var en_set_style__delegate = function(values) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return enfocus.core.style_set.call(null, pnod, values)
    })
  };
  var en_set_style = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_set_style__delegate.call(this, values)
  };
  en_set_style.cljs$lang$maxFixedArity = 0;
  en_set_style.cljs$lang$applyTo = function(arglist__84015) {
    var values = cljs.core.seq(arglist__84015);
    return en_set_style__delegate.call(this, values)
  };
  return en_set_style
}();
enfocus.core.en_remove_style = function() {
  var en_remove_style__delegate = function(values) {
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return enfocus.core.style_remove.call(null, pnod, values)
    })
  };
  var en_remove_style = function(var_args) {
    var values = null;
    if(goog.isDef(var_args)) {
      values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_remove_style__delegate.call(this, values)
  };
  en_remove_style.cljs$lang$maxFixedArity = 0;
  en_remove_style.cljs$lang$applyTo = function(arglist__84016) {
    var values = cljs.core.seq(arglist__84016);
    return en_remove_style__delegate.call(this, values)
  };
  return en_remove_style
}();
enfocus.core.view_port_monitor = cljs.core.atom.call(null, null);
enfocus.core.get_vp_monitor = function get_vp_monitor() {
  if(cljs.core.truth_(cljs.core.deref.call(null, enfocus.core.view_port_monitor))) {
    return cljs.core.deref.call(null, enfocus.core.view_port_monitor)
  }else {
    cljs.core.swap_BANG_.call(null, enfocus.core.view_port_monitor, function() {
      return new goog.dom.ViewportSizeMonitor
    });
    return cljs.core.deref.call(null, enfocus.core.view_port_monitor)
  }
};
enfocus.core.gen_enter_leave_wrapper = function gen_enter_leave_wrapper(event) {
  var obj__84017 = new Object;
  obj__84017.listen = function(elm, func, opt_cap, opt_scope, opt_handler) {
    var callback__84018 = enfocus.core.mouse_enter_leave.call(null, func);
    callback__84018.listen = func;
    callback__84018.scope = opt_scope;
    if(cljs.core.truth_(enfocus.core.op_handler)) {
      return opt_handler.listen(elm, cljs.core.name.call(null, event), callback__84018)
    }else {
      return goog.events.listen.call(null, elm, cljs.core.name.call(null, event), callback__84018)
    }
  };
  obj__84017.unlisten = function(elm, func, opt_cap, opt_scope, opt_handler) {
    var listeners__84019 = goog.events.getListeners.call(null, elm, cljs.core.name.call(null, event), false);
    return cljs.core.dorun.call(null, cljs.core.map.call(null, function(obj) {
      var listener__84020 = obj.listener;
      if(cljs.core.truth_(function() {
        var and__3546__auto____84022 = function() {
          var or__3548__auto____84021 = cljs.core.not.call(null, func);
          if(cljs.core.truth_(or__3548__auto____84021)) {
            return or__3548__auto____84021
          }else {
            return cljs.core._EQ_.call(null, listener__84020.listen, func)
          }
        }();
        if(cljs.core.truth_(and__3546__auto____84022)) {
          var or__3548__auto____84023 = cljs.core.not.call(null, opt_scope);
          if(cljs.core.truth_(or__3548__auto____84023)) {
            return or__3548__auto____84023
          }else {
            return cljs.core._EQ_.call(null, listener__84020.scope, opt_scope)
          }
        }else {
          return and__3546__auto____84022
        }
      }())) {
        if(cljs.core.truth_(opt_handler)) {
          return opt_handler.unlisten(elm, cljs.core.name.call(null, event), listener__84020)
        }else {
          return goog.events.unlisten.call(null, elm, cljs.core.name.call(null, event), listener__84020)
        }
      }else {
        return null
      }
    }, listeners__84019))
  };
  return obj__84017
};
enfocus.core.wrapper_register = cljs.core.ObjMap.fromObject(["\ufdd0'mouseenter", "\ufdd0'mouseleave"], {"\ufdd0'mouseenter":enfocus.core.gen_enter_leave_wrapper.call(null, "\ufdd0'mouseover"), "\ufdd0'mouseleave":enfocus.core.gen_enter_leave_wrapper.call(null, "\ufdd0'mouseout")});
enfocus.core.en_listen = function en_listen(event, func) {
  var wrapper__84024 = enfocus.core.wrapper_register.call(null, event);
  return enfocus.core.chainable_standard.call(null, function(pnod) {
    if(cljs.core.truth_(function() {
      var and__3546__auto____84025 = cljs.core._EQ_.call(null, "\ufdd0'resize", event);
      if(cljs.core.truth_(and__3546__auto____84025)) {
        return window === pnod
      }else {
        return and__3546__auto____84025
      }
    }())) {
      return goog.events.listen.call(null, enfocus.core.get_vp_monitor.call(null), "resize", func)
    }else {
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, wrapper__84024))) {
        return goog.events.listen.call(null, pnod, cljs.core.name.call(null, event), func)
      }else {
        return goog.events.listenWithWrapper.call(null, pnod, wrapper__84024, func)
      }
    }
  })
};
enfocus.core.en_unlisten = function en_unlisten(event, func) {
  var wrapper__84028 = enfocus.core.wrapper_register.call(null, event);
  return enfocus.core.chainable_standard.call(null, function(pnod) {
    if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, wrapper__84028))) {
      return goog.events.unlisten.call(null, pnod, cljs.core.name.call(null, event), func)
    }else {
      return goog.events.unlistenWithWrapper.call(null, pnod, wrapper__84028, func)
    }
  })
};
enfocus.core.en_remove_listeners = function() {
  var en_remove_listeners__delegate = function(event_list) {
    var get_name__84029 = function(p1__84026_SHARP_) {
      return cljs.core.name.call(null, cljs.core.truth_(cljs.core._EQ_.call(null, p1__84026_SHARP_, "\ufdd0'mouseenter")) ? "\ufdd0'mouseover" : cljs.core.truth_(cljs.core._EQ_.call(null, p1__84026_SHARP_, "\ufdd0'mouseleave")) ? "\ufdd0'mouseout" : cljs.core.truth_("\ufdd0'else") ? p1__84026_SHARP_ : null)
    };
    return enfocus.core.chainable_standard.call(null, function(pnod) {
      return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__84027_SHARP_) {
        return goog.events.removeAll.call(null, pnod, get_name__84029.call(null, p1__84027_SHARP_))
      }, event_list))
    })
  };
  var en_remove_listeners = function(var_args) {
    var event_list = null;
    if(goog.isDef(var_args)) {
      event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return en_remove_listeners__delegate.call(this, event_list)
  };
  en_remove_listeners.cljs$lang$maxFixedArity = 0;
  en_remove_listeners.cljs$lang$applyTo = function(arglist__84030) {
    var event_list = cljs.core.seq(arglist__84030);
    return en_remove_listeners__delegate.call(this, event_list)
  };
  return en_remove_listeners
}();
enfocus.core.en_fade_out = function en_fade_out(ttime, callback, accel) {
  return enfocus.core.chainable_effect.call(null, function(pnod, pcallback) {
    var anim__84031 = new goog.fx.dom.FadeOut(pnod, ttime, accel);
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, pcallback)))) {
      goog.events.listen.call(null, anim__84031, goog.fx.Animation.EventType.END, pcallback)
    }else {
    }
    return anim__84031.play()
  }, callback)
};
enfocus.core.en_fade_in = function en_fade_in(ttime, callback, accel) {
  return enfocus.core.chainable_effect.call(null, function(pnod, pcallback) {
    var anim__84032 = new goog.fx.dom.FadeIn(pnod, ttime, accel);
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, pcallback)))) {
      goog.events.listen.call(null, anim__84032, goog.fx.Animation.EventType.END, pcallback)
    }else {
    }
    return anim__84032.play()
  }, callback)
};
enfocus.core.en_resize = function en_resize(wth, hgt, ttime, callback, accel) {
  return enfocus.core.chainable_effect.call(null, function(pnod, pcallback) {
    var csize__84033 = goog.style.getSize.call(null, pnod);
    var start__84034 = cljs.core.array.call(null, csize__84033.width, csize__84033.height);
    var wth__84035 = cljs.core.truth_(cljs.core._EQ_.call(null, "\ufdd0'curwidth", wth)) ? csize__84033.width : wth;
    var hgt__84036 = cljs.core.truth_(cljs.core._EQ_.call(null, "\ufdd0'curheight", hgt)) ? csize__84033.height : hgt;
    var end__84037 = cljs.core.array.call(null, wth__84035, hgt__84036);
    var anim__84038 = new goog.fx.dom.Resize(pnod, start__84034, end__84037, ttime, accel);
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, pcallback)))) {
      goog.events.listen.call(null, anim__84038, goog.fx.Animation.EventType.END, pcallback)
    }else {
    }
    return anim__84038.play()
  }, callback)
};
enfocus.core.en_move = function en_move(xpos, ypos, ttime, callback, accel) {
  return enfocus.core.chainable_effect.call(null, function(pnod, pcallback) {
    var cpos__84039 = goog.style.getPosition.call(null, pnod);
    var start__84040 = cljs.core.array.call(null, cpos__84039.x, cpos__84039.y);
    var xpos__84041 = cljs.core.truth_(cljs.core._EQ_.call(null, "\ufdd0'curx")) ? cpos__84039.x : xpos;
    var ypos__84042 = cljs.core.truth_(cljs.core._EQ_.call(null, "\ufdd0'cury")) ? cpos__84039.y : ypos;
    var end__84043 = cljs.core.array.call(null, xpos__84041, ypos__84042);
    var anim__84044 = new goog.fx.dom.Slide(pnod, start__84040, end__84043, ttime, accel);
    if(cljs.core.truth_(cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, pcallback)))) {
      goog.events.listen.call(null, anim__84044, goog.fx.Animation.EventType.END, pcallback)
    }else {
    }
    return anim__84044.play()
  }, callback)
};
enfocus.core.en_get_attr = function en_get_attr(attr) {
  return enfocus.core.extr_multi_node.call(null, function(pnod) {
    return pnod.getAttribute(cljs.core.name.call(null, attr))
  })
};
enfocus.core.en_get_attr = function en_get_attr(attr) {
  return enfocus.core.extr_multi_node.call(null, function(pnod) {
    return pnod.getAttribute(cljs.core.name.call(null, attr))
  })
};
enfocus.core.en_get_text = function en_get_text() {
  return enfocus.core.extr_multi_node.call(null, function(pnod) {
    return goog.dom.getTextContent.call(null, pnod)
  })
};
enfocus.core.reg_filt = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
enfocus.core.en_filter = function en_filter(tst, trans) {
  return function() {
    var filt = null;
    var filt__84048 = function(pnodes) {
      return filt.call(null, pnodes, null)
    };
    var filt__84049 = function(pnodes, chain) {
      var pnod_col__84045 = enfocus.core.nodes__GT_coll.call(null, pnodes);
      var ttest__84046 = cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, tst)) ? cljs.core.deref.call(null, enfocus.core.reg_filt).call(null, tst) : tst;
      var res__84047 = cljs.core.filter.call(null, ttest__84046, pnod_col__84045);
      enfocus.core.log_debug.call(null, cljs.core.pr_str.call(null, res__84047));
      if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null, chain))) {
        return trans.call(null, res__84047)
      }else {
        return trans.call(null, res__84047, chain)
      }
    };
    filt = function(pnodes, chain) {
      switch(arguments.length) {
        case 1:
          return filt__84048.call(this, pnodes);
        case 2:
          return filt__84049.call(this, pnodes, chain)
      }
      throw"Invalid arity: " + arguments.length;
    };
    return filt
  }()
};
enfocus.core.register_filter = function register_filter(ky, func) {
  return cljs.core.swap_BANG_.call(null, enfocus.core.reg_filt, cljs.core.assoc, ky, func)
};
enfocus.core.selected_options = function selected_options(pnod) {
  return pnod.selected
};
enfocus.core.checked_radio_checkbox = function checked_radio_checkbox(pnod) {
  return pnod.checked
};
enfocus.core.register_filter.call(null, "\ufdd0'selected", enfocus.core.selected_options);
enfocus.core.register_filter.call(null, "\ufdd0'checked", enfocus.core.checked_radio_checkbox);
enfocus.core.create_sel_str = function() {
  var create_sel_str = null;
  var create_sel_str__84052 = function(css_sel) {
    return create_sel_str.call(null, "", css_sel)
  };
  var create_sel_str__84053 = function(id_mask_sym, css_sel) {
    return cljs.core.apply.call(null, cljs.core.str, cljs.core.map.call(null, function(p1__84051_SHARP_) {
      if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null, p1__84051_SHARP_))) {
        return enfocus.core.css_syms.call(null, p1__84051_SHARP_)
      }else {
        if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null, p1__84051_SHARP_))) {
          return cljs.core.str.call(null, " ", cljs.core.name.call(null, p1__84051_SHARP_).replace("#", cljs.core.str.call(null, "#", id_mask_sym)))
        }else {
          if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, p1__84051_SHARP_))) {
            return create_sel_str.call(null, p1__84051_SHARP_)
          }else {
            if(cljs.core.truth_(cljs.core.string_QMARK_.call(null, p1__84051_SHARP_))) {
              return p1__84051_SHARP_.replace("#", cljs.core.str.call(null, "#", id_mask_sym))
            }else {
              return null
            }
          }
        }
      }
    }, css_sel))
  };
  create_sel_str = function(id_mask_sym, css_sel) {
    switch(arguments.length) {
      case 1:
        return create_sel_str__84052.call(this, id_mask_sym);
      case 2:
        return create_sel_str__84053.call(this, id_mask_sym, css_sel)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return create_sel_str
}();
enfocus.core.css_select = function() {
  var css_select = null;
  var css_select__84057 = function(css_sel) {
    return css_select.call(null, "", document, css_sel)
  };
  var css_select__84058 = function(dom_node, css_sel) {
    return css_select.call(null, "", dom_node, css_sel)
  };
  var css_select__84059 = function(id_mask_sym, dom_node, css_sel) {
    var sel__84055 = clojure.string.trim.call(null, clojure.string.replace.call(null, enfocus.core.create_sel_str.call(null, id_mask_sym, css_sel), " :", ":"));
    var ret__84056 = goog.dom.query.call(null, sel__84055, dom_node);
    return ret__84056
  };
  css_select = function(id_mask_sym, dom_node, css_sel) {
    switch(arguments.length) {
      case 1:
        return css_select__84057.call(this, id_mask_sym);
      case 2:
        return css_select__84058.call(this, id_mask_sym, dom_node);
      case 3:
        return css_select__84059.call(this, id_mask_sym, dom_node, css_sel)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return css_select
}();
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["\ufdd1'first-child", "\ufdd1'last-child"], [" *:first-child", " *:last-child"]);
enfocus.core.attr_QMARK_ = function() {
  var attr_QMARK___delegate = function(kys) {
    return cljs.core.apply.call(null, cljs.core.str, cljs.core.mapcat.call(null, function(p1__84061_SHARP_) {
      return cljs.core.str.call(null, "[", cljs.core.name.call(null, p1__84061_SHARP_), "]")
    }, kys))
  };
  var attr_QMARK_ = function(var_args) {
    var kys = null;
    if(goog.isDef(var_args)) {
      kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return attr_QMARK___delegate.call(this, kys)
  };
  attr_QMARK_.cljs$lang$maxFixedArity = 0;
  attr_QMARK_.cljs$lang$applyTo = function(arglist__84062) {
    var kys = cljs.core.seq(arglist__84062);
    return attr_QMARK___delegate.call(this, kys)
  };
  return attr_QMARK_
}();
enfocus.core.attr_EQ_ = function() {
  var attr_EQ_ = null;
  var attr_EQ___84063 = function() {
    return""
  };
  var attr_EQ___84064 = function() {
    var G__84066__delegate = function(ky, txt, forms) {
      return cljs.core.str.call(null, "[", cljs.core.name.call(null, ky), "='", txt, "']", cljs.core.apply.call(null, attr_EQ_, forms))
    };
    var G__84066 = function(ky, txt, var_args) {
      var forms = null;
      if(goog.isDef(var_args)) {
        forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__84066__delegate.call(this, ky, txt, forms)
    };
    G__84066.cljs$lang$maxFixedArity = 2;
    G__84066.cljs$lang$applyTo = function(arglist__84067) {
      var ky = cljs.core.first(arglist__84067);
      var txt = cljs.core.first(cljs.core.next(arglist__84067));
      var forms = cljs.core.rest(cljs.core.next(arglist__84067));
      return G__84066__delegate.call(this, ky, txt, forms)
    };
    return G__84066
  }();
  attr_EQ_ = function(ky, txt, var_args) {
    var forms = var_args;
    switch(arguments.length) {
      case 0:
        return attr_EQ___84063.call(this);
      default:
        return attr_EQ___84064.apply(this, arguments)
    }
    throw"Invalid arity: " + arguments.length;
  };
  attr_EQ_.cljs$lang$maxFixedArity = 2;
  attr_EQ_.cljs$lang$applyTo = attr_EQ___84064.cljs$lang$applyTo;
  return attr_EQ_
}();
enfocus.core.nth_child = function() {
  var nth_child = null;
  var nth_child__84068 = function(x) {
    return cljs.core.str.call(null, ":nth-child(", x, ")")
  };
  var nth_child__84069 = function(x, y) {
    return cljs.core.str.call(null, ":nth-child(", x, "n+", y, ")")
  };
  nth_child = function(x, y) {
    switch(arguments.length) {
      case 1:
        return nth_child__84068.call(this, x);
      case 2:
        return nth_child__84069.call(this, x, y)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth_child
}();
enfocus.core.nth_of_type = function() {
  var nth_of_type = null;
  var nth_of_type__84071 = function(x) {
    return cljs.core.str.call(null, ":nth-of-type(", x, ")")
  };
  var nth_of_type__84072 = function(x, y) {
    return cljs.core.str.call(null, ":nth-of-type(", x, "n+", y, ")")
  };
  nth_of_type = function(x, y) {
    switch(arguments.length) {
      case 1:
        return nth_of_type__84071.call(this, x);
      case 2:
        return nth_of_type__84072.call(this, x, y)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth_of_type
}();
enfocus.core.nth_last_child = function() {
  var nth_last_child = null;
  var nth_last_child__84074 = function(x) {
    return cljs.core.str.call(null, ":nth-last-child(", x, ")")
  };
  var nth_last_child__84075 = function(x, y) {
    return cljs.core.str.call(null, ":nth-last-child(", x, "n+", y, ")")
  };
  nth_last_child = function(x, y) {
    switch(arguments.length) {
      case 1:
        return nth_last_child__84074.call(this, x);
      case 2:
        return nth_last_child__84075.call(this, x, y)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth_last_child
}();
enfocus.core.nth_last_of_type = function() {
  var nth_last_of_type = null;
  var nth_last_of_type__84077 = function(x) {
    return cljs.core.str.call(null, ":nth-last-of-type(", x, ")")
  };
  var nth_last_of_type__84078 = function(x, y) {
    return cljs.core.str.call(null, ":nth-last-of-type(", x, "n+", y, ")")
  };
  nth_last_of_type = function(x, y) {
    switch(arguments.length) {
      case 1:
        return nth_last_of_type__84077.call(this, x);
      case 2:
        return nth_last_of_type__84078.call(this, x, y)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return nth_last_of_type
}();
goog.provide("prezo.atom");
goog.require("cljs.core");
goog.require("prezo.util");
goog.require("enfocus.core");
goog.require("goog.dom");
prezo.atom.FormException = {};
prezo.atom.get_errors = function get_errors(this$) {
  if(cljs.core.truth_(function() {
    var and__3546__auto____81866 = this$;
    if(cljs.core.truth_(and__3546__auto____81866)) {
      return this$.prezo$atom$FormException$get_errors
    }else {
      return and__3546__auto____81866
    }
  }())) {
    return this$.prezo$atom$FormException$get_errors(this$)
  }else {
    return function() {
      var or__3548__auto____81867 = prezo.atom.get_errors[goog.typeOf.call(null, this$)];
      if(cljs.core.truth_(or__3548__auto____81867)) {
        return or__3548__auto____81867
      }else {
        var or__3548__auto____81868 = prezo.atom.get_errors["_"];
        if(cljs.core.truth_(or__3548__auto____81868)) {
          return or__3548__auto____81868
        }else {
          throw cljs.core.missing_protocol.call(null, "FormException.get-errors", this$);
        }
      }
    }().call(null, this$)
  }
};
prezo.atom.FormError = function(errors) {
  this.errors = errors
};
prezo.atom.FormError.cljs$core$IPrintable$_pr_seq = function(this__360__auto__) {
  return cljs.core.list.call(null, "prezo.atom.FormError")
};
prezo.atom.FormError.prototype.prezo$atom$FormException$ = true;
prezo.atom.FormError.prototype.prezo$atom$FormException$get_errors = function(this$) {
  var this__81869 = this;
  return this__81869.errors
};
prezo.atom.FormError;
prezo.atom.UserModel = function(name, email, twitter, __meta, __extmap) {
  this.name = name;
  this.email = email;
  this.twitter = twitter;
  this.__meta = __meta;
  this.__extmap = __extmap;
  if(arguments.length > 3) {
    this.__meta = __meta;
    this.__extmap = __extmap
  }else {
    this.__meta = null;
    this.__extmap = null
  }
};
prezo.atom.UserModel.prototype.cljs$core$IHash$ = true;
prezo.atom.UserModel.prototype.cljs$core$IHash$_hash = function(this__376__auto__) {
  var this__81872 = this;
  return cljs.core.hash_coll.call(null, this__376__auto__)
};
prezo.atom.UserModel.prototype.cljs$core$ILookup$ = true;
prezo.atom.UserModel.prototype.cljs$core$ILookup$_lookup = function() {
  var G__81891 = null;
  var G__81891__81892 = function(this__381__auto__, k__382__auto__) {
    var this__81873 = this;
    return cljs.core._lookup.call(null, this__381__auto__, k__382__auto__, null)
  };
  var G__81891__81893 = function(this__383__auto__, k__384__auto__, else__385__auto__) {
    var this__81874 = this;
    return cljs.core.get.call(null, cljs.core.merge.call(null, cljs.core.hash_map.call(null, "\ufdd0'name", this__81874.name, "\ufdd0'email", this__81874.email, "\ufdd0'twitter", this__81874.twitter), this__81874.__extmap), k__384__auto__, else__385__auto__)
  };
  G__81891 = function(this__383__auto__, k__384__auto__, else__385__auto__) {
    switch(arguments.length) {
      case 2:
        return G__81891__81892.call(this, this__383__auto__, k__384__auto__);
      case 3:
        return G__81891__81893.call(this, this__383__auto__, k__384__auto__, else__385__auto__)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__81891
}();
prezo.atom.UserModel.prototype.cljs$core$IAssociative$ = true;
prezo.atom.UserModel.prototype.cljs$core$IAssociative$_assoc = function(this__389__auto__, k__390__auto__, G__81870) {
  var this__81875 = this;
  var pred__81876__81879 = cljs.core.identical_QMARK_;
  var expr__81877__81880 = k__390__auto__;
  if(cljs.core.truth_(pred__81876__81879.call(null, "\ufdd0'name", expr__81877__81880))) {
    return new prezo.atom.UserModel(G__81870, this__81875.email, this__81875.twitter, this__81875.__meta, this__81875.__extmap)
  }else {
    if(cljs.core.truth_(pred__81876__81879.call(null, "\ufdd0'email", expr__81877__81880))) {
      return new prezo.atom.UserModel(this__81875.name, G__81870, this__81875.twitter, this__81875.__meta, this__81875.__extmap)
    }else {
      if(cljs.core.truth_(pred__81876__81879.call(null, "\ufdd0'twitter", expr__81877__81880))) {
        return new prezo.atom.UserModel(this__81875.name, this__81875.email, G__81870, this__81875.__meta, this__81875.__extmap)
      }else {
        return new prezo.atom.UserModel(this__81875.name, this__81875.email, this__81875.twitter, this__81875.__meta, cljs.core.assoc.call(null, this__81875.__extmap, k__390__auto__, G__81870))
      }
    }
  }
};
prezo.atom.UserModel.prototype.cljs$core$IRecord$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICollection$_conj = function(this__387__auto__, entry__388__auto__) {
  var this__81881 = this;
  if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null, entry__388__auto__))) {
    return cljs.core._assoc.call(null, this__387__auto__, cljs.core._nth.call(null, entry__388__auto__, 0), cljs.core._nth.call(null, entry__388__auto__, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, this__387__auto__, entry__388__auto__)
  }
};
prezo.atom.UserModel.prototype.cljs$core$ISeqable$ = true;
prezo.atom.UserModel.prototype.cljs$core$ISeqable$_seq = function(this__394__auto__) {
  var this__81882 = this;
  return cljs.core.seq.call(null, cljs.core.concat.call(null, cljs.core.Vector.fromArray([cljs.core.vector.call(null, "\ufdd0'name", this__81882.name), cljs.core.vector.call(null, "\ufdd0'email", this__81882.email), cljs.core.vector.call(null, "\ufdd0'twitter", this__81882.twitter)]), this__81882.__extmap))
};
prezo.atom.UserModel.prototype.cljs$core$IPrintable$ = true;
prezo.atom.UserModel.prototype.cljs$core$IPrintable$_pr_seq = function(this__396__auto__, opts__397__auto__) {
  var this__81883 = this;
  var pr_pair__398__auto____81884 = function(keyval__399__auto__) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts__397__auto__, keyval__399__auto__)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__398__auto____81884, cljs.core.str.call(null, "#", "prezo.atom.UserModel", "{"), ", ", "}", opts__397__auto__, cljs.core.concat.call(null, cljs.core.Vector.fromArray([cljs.core.vector.call(null, "\ufdd0'name", this__81883.name), cljs.core.vector.call(null, "\ufdd0'email", this__81883.email), cljs.core.vector.call(null, "\ufdd0'twitter", this__81883.twitter)]), this__81883.__extmap))
};
prezo.atom.UserModel.prototype.cljs$core$ICounted$ = true;
prezo.atom.UserModel.prototype.cljs$core$ICounted$_count = function(this__386__auto__) {
  var this__81885 = this;
  return 3 + cljs.core.count.call(null, this__81885.__extmap)
};
prezo.atom.UserModel.prototype.cljs$core$IEquiv$ = true;
prezo.atom.UserModel.prototype.cljs$core$IEquiv$_equiv = function(this__377__auto__, other__378__auto__) {
  var this__81886 = this;
  var and__3546__auto____81887 = this__377__auto__.constructor === other__378__auto__.constructor;
  if(cljs.core.truth_(and__3546__auto____81887)) {
    return cljs.core.equiv_map.call(null, this__377__auto__, other__378__auto__)
  }else {
    return and__3546__auto____81887
  }
};
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IWithMeta$_with_meta = function(this__380__auto__, G__81870) {
  var this__81888 = this;
  return new prezo.atom.UserModel(this__81888.name, this__81888.email, this__81888.twitter, G__81870, this__81888.__extmap)
};
prezo.atom.UserModel.prototype.cljs$core$IMeta$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMeta$_meta = function(this__379__auto__) {
  var this__81889 = this;
  return this__81889.__meta
};
prezo.atom.UserModel.prototype.cljs$core$IMap$ = true;
prezo.atom.UserModel.prototype.cljs$core$IMap$_dissoc = function(this__391__auto__, k__392__auto__) {
  var this__81890 = this;
  if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, cljs.core.set(["\ufdd0'name", "\ufdd0'email", "\ufdd0'twitter"]), k__392__auto__))) {
    return cljs.core.dissoc.call(null, cljs.core.with_meta.call(null, cljs.core.into.call(null, cljs.core.ObjMap.fromObject([], {}), this__391__auto__), this__81890.__meta), k__392__auto__)
  }else {
    return new prezo.atom.UserModel(this__81890.name, this__81890.email, this__81890.twitter, this__81890.__meta, cljs.core.not_empty.call(null, cljs.core.dissoc.call(null, this__81890.__extmap, k__392__auto__)))
  }
};
prezo.atom.UserModel.cljs$core$IPrintable$_pr_seq = function(this__423__auto__) {
  return cljs.core.list.call(null, "prezo.atom.UserModel")
};
prezo.atom.__GT_UserModel = function __GT_UserModel(name, email, twitter) {
  return new prezo.atom.UserModel(name, email, twitter)
};
prezo.atom.map__GT_UserModel = function map__GT_UserModel(G__81871) {
  return new prezo.atom.UserModel("\ufdd0'name".call(null, G__81871), "\ufdd0'email".call(null, G__81871), "\ufdd0'twitter".call(null, G__81871), null, cljs.core.dissoc.call(null, G__81871, "\ufdd0'name", "\ufdd0'email", "\ufdd0'twitter"))
};
prezo.atom.UserModel;
prezo.atom.my_user = cljs.core.atom.call(null, new prezo.atom.UserModel("Creighton Kirkendall", "ckirkendall@gmail.com", "@crkirkendall"));
prezo.atom.user_validator = function user_validator(new_val) {
  var check_map__81895 = cljs.core.ObjMap.fromObject(["\ufdd0'name", "\ufdd0'email", "\ufdd0'twitter"], {"\ufdd0'name":cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.re_matches.call(null, /\S+.*/, "\ufdd0'name".call(null, new_val)))), "\ufdd0'email":cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.re_matches.call(null, /.+@.+\..+/, "\ufdd0'email".call(null, new_val)))), "\ufdd0'twitter":cljs.core.not.call(null, cljs.core.nil_QMARK_.call(null, cljs.core.re_matches.call(null, 
  /@\S+/, "\ufdd0'twitter".call(null, new_val))))});
  if(cljs.core.truth_(cljs.core.not_every_QMARK_.call(null, cljs.core.true_QMARK_, cljs.core.vals.call(null, check_map__81895)))) {
    throw new prezo.atom.FormError(check_map__81895);
  }else {
    return new_val
  }
};
cljs.core.set_validator_BANG_.call(null, prezo.atom.my_user, prezo.atom.user_validator);
cljs.core.add_watch.call(null, prezo.atom.my_user, "\ufdd0'user-view", function(key, ref, old_val, new_val) {
  return prezo.atom.user_view.call(null, new_val)
});
prezo.atom.user_view = function user_view(user_val) {
  var nods__3015__auto____81898 = enfocus.core.nodes__GT_coll.call(null, prezo.util.by_id.call(null, "user-div"));
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81897) {
    enfocus.core.en_content.call(null, "\ufdd0'name".call(null, user_val)).call(null, enfocus.core.css_select.call(null, "", pnod81897, cljs.core.Vector.fromArray([".name"])));
    enfocus.core.en_content.call(null, "\ufdd0'email".call(null, user_val)).call(null, enfocus.core.css_select.call(null, "", pnod81897, cljs.core.Vector.fromArray([".email"])));
    enfocus.core.en_content.call(null, "\ufdd0'twitter".call(null, user_val)).call(null, enfocus.core.css_select.call(null, "", pnod81897, cljs.core.Vector.fromArray([".twitter"])));
    return pnod81897
  }, nods__3015__auto____81898));
  return prezo.util.by_id.call(null, "user-div")
};
prezo.atom.persist_user_form = function persist_user_form() {
  try {
    cljs.core.swap_BANG_.call(null, prezo.atom.my_user, cljs.core.merge, function() {
      var nods__3026__auto____81905 = enfocus.core.nodes__GT_coll.call(null, document);
      var map81904__81906 = cljs.core.atom.call(null, cljs.core.ObjMap.fromObject([], {}));
      var map_list__3027__auto____81907 = cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81903) {
        cljs.core.swap_BANG_.call(null, map81904__81906, cljs.core.assoc, "\ufdd0'name", enfocus.core.extr_multi_node.call(null, function(pnod__3206__auto__) {
          return pnod__3206__auto__.value
        }).call(null, enfocus.core.css_select.call(null, "", pnod81903, cljs.core.Vector.fromArray(["#user-name"]))));
        cljs.core.swap_BANG_.call(null, map81904__81906, cljs.core.assoc, "\ufdd0'email", enfocus.core.extr_multi_node.call(null, function(pnod__3206__auto__) {
          return pnod__3206__auto__.value
        }).call(null, enfocus.core.css_select.call(null, "", pnod81903, cljs.core.Vector.fromArray(["#user-email"]))));
        cljs.core.swap_BANG_.call(null, map81904__81906, cljs.core.assoc, "\ufdd0'twitter", enfocus.core.extr_multi_node.call(null, function(pnod__3206__auto__) {
          return pnod__3206__auto__.value
        }).call(null, enfocus.core.css_select.call(null, "", pnod81903, cljs.core.Vector.fromArray(["#user-twitter"]))));
        return pnod81903
      }, nods__3026__auto____81905));
      return cljs.core.deref.call(null, map81904__81906)
    }());
    enfocus.core.en_content.call(null, "").call(null, prezo.util.by_id.call(null, "user-form-errors"));
    return prezo.util.by_id.call(null, "user-form-errors")
  }catch(e81899) {
    if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null, prezo.atom.FormError, e81899))) {
      var e__81900 = e81899;
      var errors__81901 = prezo.atom.get_errors.call(null, e__81900);
      var inv_flds__81902 = cljs.core.filter.call(null, function(p1__81896_SHARP_) {
        return cljs.core.not.call(null, p1__81896_SHARP_.call(null, errors__81901))
      }, cljs.core.keys.call(null, errors__81901));
      enfocus.core.en_content.call(null, cljs.core.str.call(null, "The following fields where invalid:", cljs.core.pr_str.call(null, inv_flds__81902))).call(null, prezo.util.by_id.call(null, "user-form-errors"));
      return prezo.util.by_id.call(null, "user-form-errors")
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        throw e81899;
      }else {
        return null
      }
    }
  }
};
goog.provide("prezo.animation");
goog.require("cljs.core");
goog.require("enfocus.core");
goog.require("goog.dom");
goog.require("goog.positioning");
goog.require("goog.math");
prezo.animation.pos_rel_anchor = function pos_rel_anchor(anchor, relx, rely) {
  var coord__81908 = new goog.math.Coordinate(relx, rely);
  return enfocus.core.chainable_standard.call(null, function(node) {
    return goog.positioning.positionAtAnchor.call(null, anchor, 0, node, 0, coord__81908)
  })
};
prezo.animation.call_out = function call_out(node, txt, p__81909) {
  var map__81910__81914 = p__81909;
  var map__81910__81915 = cljs.core.truth_(cljs.core.seq_QMARK_.call(null, map__81910__81914)) ? cljs.core.apply.call(null, cljs.core.hash_map, map__81910__81914) : map__81910__81914;
  var fsize__81916 = cljs.core.get.call(null, map__81910__81915, "\ufdd0'font-size", "4.4em");
  var vec__81911__81917 = cljs.core.get.call(null, map__81910__81915, "\ufdd0'loc");
  var x__81918 = cljs.core.nth.call(null, vec__81911__81917, 0, null);
  var y__81919 = cljs.core.nth.call(null, vec__81911__81917, 1, null);
  var vec__81912__81920 = cljs.core.get.call(null, map__81910__81915, "\ufdd0'size");
  var w__81921 = cljs.core.nth.call(null, vec__81912__81920, 0, null);
  var h__81922 = cljs.core.nth.call(null, vec__81912__81920, 1, null);
  var vec__81913__81923 = cljs.core.get.call(null, map__81910__81915, "\ufdd0'font-offset", cljs.core.Vector.fromArray([5, 10]));
  var fx__81924 = cljs.core.nth.call(null, vec__81913__81923, 0, null);
  var fy__81925 = cljs.core.nth.call(null, vec__81913__81923, 1, null);
  var div1__81926 = cljs.core.name.call(null, cljs.core.gensym.call(null, "div"));
  var div2__81927 = cljs.core.name.call(null, cljs.core.gensym.call(null, "div"));
  var nods__3015__auto____81929 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81928) {
    enfocus.core.en_append.call(null, goog.dom.htmlToDocumentFragment.call(null, cljs.core.str.call(null, "<div class='call-block' id='", div1__81926, "' style='display: none; position: fixed;'></div>", "<div class='call-text' id='", div2__81927, "' style='display: none; position: fixed;'>", txt, "</div>"))).call(null, enfocus.core.css_select.call(null, "", pnod81928, cljs.core.Vector.fromArray(["#content-pane"])));
    (function(pnod__3190__auto__) {
      return prezo.animation.pos_rel_anchor.call(null, node, x__81918, y__81919).call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
        return enfocus.core.en_set_style.call(null, "\ufdd0'border", "3px solid #ff0000").call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
          return enfocus.core.en_set_style.call(null, "\ufdd0'display", "inline").call(null, pnod__3190__auto__, function(pnod__3189__auto__) {
            return enfocus.core.en_resize.call(null, w__81921, h__81922, 500, null, null).call(null, pnod__3189__auto__)
          })
        })
      })
    }).call(null, enfocus.core.css_select.call(null, "", pnod81928, cljs.core.Vector.fromArray([cljs.core.str.call(null, "#", div1__81926)])));
    (function(pnod__3190__auto__) {
      return enfocus.core.en_fade_out.call(null, 1, null, null).call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
        return prezo.animation.pos_rel_anchor.call(null, node, x__81918 + fx__81924, y__81919 + h__81922 + fy__81925).call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
          return enfocus.core.en_set_style.call(null, "\ufdd0'font-size", fsize__81916).call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
            return enfocus.core.chainable_standard.call(null, function(pnod__3168__auto__) {
              return enfocus.core.setTimeout.call(null, function() {
                return function() {
                  var nods__3015__auto____81931 = enfocus.core.nodes__GT_coll.call(null, enfocus.core.en_set_style.call(null, "\ufdd0'display", "inline"));
                  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81930) {
                    return pnod81930
                  }, nods__3015__auto____81931));
                  return enfocus.core.en_set_style.call(null, "\ufdd0'display", "inline")
                }().call(null, pnod__3168__auto__)
              }, 600)
            }).call(null, pnod__3190__auto__, function(pnod__3189__auto__) {
              return enfocus.core.en_fade_in.call(null, 1E3, null, null).call(null, pnod__3189__auto__)
            })
          })
        })
      })
    }).call(null, enfocus.core.css_select.call(null, "", pnod81928, cljs.core.Vector.fromArray([cljs.core.str.call(null, "#", div2__81927)])));
    return pnod81928
  }, nods__3015__auto____81929));
  return document
};
prezo.animation.scary_parens = function scary_parens() {
  var G__81932__81933 = cljs.core.seq.call(null, cljs.core.range.call(null, 1, 200));
  if(cljs.core.truth_(G__81932__81933)) {
    var i__81934 = cljs.core.first.call(null, G__81932__81933);
    var G__81932__81935 = G__81932__81933;
    while(true) {
      var win_size__81936 = goog.dom.getViewportSize.call(null);
      var colors__81937 = cljs.core.Vector.fromArray(["aqua", "black", "blue", "fuchsia", "gray", "grey", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"]);
      var paren_id__81938 = cljs.core.str.call(null, "paren", i__81934);
      var color__81939 = cljs.core.nth.call(null, colors__81937, cljs.core.rand_int.call(null, 17));
      var fsize__81940 = cljs.core.str.call(null, cljs.core.rand.call(null, 14), "em");
      var width__81941 = cljs.core.rand_int.call(null, win_size__81936.width);
      var height__81942 = cljs.core.rand_int.call(null, win_size__81936.height);
      var dly__81943 = cljs.core.rand_int.call(null, 3E3);
      var nods__3015__auto____81945 = enfocus.core.nodes__GT_coll.call(null, document);
      cljs.core.doall.call(null, cljs.core.map.call(null, function(i__81934, G__81932__81935) {
        return function(pnod81944) {
          enfocus.core.en_append.call(null, goog.dom.htmlToDocumentFragment.call(null, cljs.core.str.call(null, "<div id='", paren_id__81938, "' style='display: none; position: fixed'>()<div>"))).call(null, enfocus.core.css_select.call(null, "", pnod81944, cljs.core.Vector.fromArray([".slide"])));
          enfocus.core.en_do__GT_.call(null, enfocus.core.en_move.call(null, width__81941, height__81942, 0, null, null), enfocus.core.en_set_style.call(null, "\ufdd0'font-size", fsize__81940), enfocus.core.en_set_style.call(null, "\ufdd0'color", color__81939), enfocus.core.chainable_standard.call(null, function(i__81934, G__81932__81935) {
            return function(pnod__3168__auto__) {
              return enfocus.core.setTimeout.call(null, function(i__81934, G__81932__81935) {
                return function() {
                  return function() {
                    var nods__3015__auto____81947 = enfocus.core.nodes__GT_coll.call(null, enfocus.core.en_set_style.call(null, "\ufdd0'display", "inline"));
                    cljs.core.doall.call(null, cljs.core.map.call(null, function(i__81934, G__81932__81935) {
                      return function(pnod81946) {
                        return pnod81946
                      }
                    }(i__81934, G__81932__81935), nods__3015__auto____81947));
                    return enfocus.core.en_set_style.call(null, "\ufdd0'display", "inline")
                  }().call(null, pnod__3168__auto__)
                }
              }(i__81934, G__81932__81935), dly__81943)
            }
          }(i__81934, G__81932__81935))).call(null, enfocus.core.css_select.call(null, "", pnod81944, cljs.core.Vector.fromArray([cljs.core.str.call(null, "#", paren_id__81938)])));
          return pnod81944
        }
      }(i__81934, G__81932__81935), nods__3015__auto____81945));
      document;
      var temp__3698__auto____81948 = cljs.core.next.call(null, G__81932__81935);
      if(cljs.core.truth_(temp__3698__auto____81948)) {
        var G__81932__81949 = temp__3698__auto____81948;
        var G__81950 = cljs.core.first.call(null, G__81932__81949);
        var G__81951 = G__81932__81949;
        i__81934 = G__81950;
        G__81932__81935 = G__81951;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
goog.provide("prezo.content");
goog.require("cljs.core");
prezo.content.decon_with_defualt_js = cljs.core.str.call(null, "function tmp (point) {\n", "     var x=point.x;\n", "     var y=point.y;\n", "     if(x === undefined) {\n", "          x=3;\n", "     }\n", "     log(x y);\n", "}\n\n", "tmp({ z : 3, y : 4 });\n\n\n\n\n\n\n\n\n\n");
prezo.content.concurrency = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Concurrency</h3>", "In the same way Java solved the biggest challenge facing<br/>", "the productivity of developers in the 90's, memory management.<br/>", "One Clojure's main design goals is to solve the biggest<br/>", "issue facing developers today, concurrency. <br/>");
prezo.content.syntax_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Immutable Data Structures</h3>", "All primary data structures in ClojureScript are immutable.<br/>", "Operations on them return a 'copy', leaving the original intact.<br/>", "ClojureScript encourages controlled access to mutable state,<br/>", "through constructs like the Atom. </div>");
prezo.content.ns_use_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>:use</h3>", "Provides the ability to import symbols defined in another namespace.<br>", "<br>The following filters to be applied to the symbols:<br>", "&nbsp;&nbsp;&nbsp;&nbsp;:exclude [sym1 sym2 ..]<br/>", "&nbsp;&nbsp;&nbsp;&nbsp;:only [sym1 sym2 ...]<br/>", "&nbsp;&nbsp;&nbsp;&nbsp;:rename {new-name1 sym1 new-name2 sym2 ...}</div>");
prezo.content.ns_require_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>:require</h3>", "Allows us to import another namespace and provide an alias.<br>", "<br>Functions and values are accessed by prefixing the alias:<br>", "&nbsp;&nbsp;&nbsp;&nbsp;(dom/append! ...) </div>");
prezo.content.ns_proto_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Protocols</h3>", "Provide an abstraction for safely extending types without the chance of collision or the need for wrappers/adapters.<br/>", "We will see an example later...</div>");
prezo.content.ex1_js_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>What About Collisions?</h3>", "Here we see that we must modify JQuery's namespace.<br/>", "Modern apps have simply moved the collision problem<br/>", "from the global namespace to JQuery's namespace.</div>");
prezo.content.ex1_cljs_func_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Just a Function</h3>", "Our logging function is no longer a plugin; it's now just </br>", "a standard function in its own namespace.</div>");
prezo.content.ex1_cljs_def_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Defaulting</h3>", "Here, we are using argument deconstruction to provide option defaults.</div>");
prezo.content.ex1_cljs_macro_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>'->' Macro</h3>", "Provides chaining similar to what we familiar with, without requiring<br/>", "functions be part of the object's namespace.</div>");
prezo.content.ex2_proto_def_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>DomContent</h3>", "This protocol is used in Domina to define the contract required <br/>", "to make base functions like 'append!' and 'prepend!' work.  <br/>", "It provides the same basic structure as JQuery's WrappedSet<br/>", "without requiring a wrapper object, that is aware of all<br/>", "implementing cases.<br/><br/>", "It is closer in concept to a Java interface where as long as <br/> ", "type extends this protocol Domina's base functions will work.</div>");
prezo.content.ex2_proto_ep_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Extend Protocol</h3>", "The extend-protocol function allows you to provide<br/>", "implementation details of a given protocol on a set of<br/>", "types. In this case, we see Domina extending string and<br/>", "Element. They are also providing default if the type does<br/>", "match a known type that assumes the unknown type can be<br/>", "converted to a sequence.<br/><br/>", "It is important to understand, that unlike extending an<br/>", 
"object in JavaScript, these extensions are local to this<br/>", "namespace.</div>");
prezo.content.ex2_proto_et_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Extend Type</h3>", "The extend-type function allows you to extend a given type <br/>", "to a specific protocol.  In this case, we see Domina extending <br/>", "NodeList, so it can be easily converted to a sequence.<br/>", "This means that it can be used by the DomContent default<br/>", "mapping.<br/><br/>", "It is important to understand, that unlike extending an<br/>", "object in JavaScript, these extensions are local to this<br/>", 
"namespace.</div>");
prezo.content.macro_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Macros</h3>", "Macros are more about building the tools and libraries than <br/>", "they are about building applications.<br/>");
prezo.content.val_atom_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Validators</h3>", "A validator checks the value before the atom is changed and,<br/>", "if not valid, the atom is not update and an exception is thrown.</div>");
prezo.content.watch_atom_text = cljs.core.str.call(null, "<div id='use-doc' class='doc'><h3>Watchers</h3>", "Watchers are triggered anytime the state of an atom changes.</div>");
goog.provide("prezo.core");
goog.require("cljs.core");
goog.require("prezo.util");
goog.require("enfocus.core");
goog.require("goog.dom");
goog.require("prezo.animation");
goog.require("prezo.content");
goog.require("prezo.atom");
prezo.core.setup_pane = function setup_pane(width, height) {
  var nods__3015__auto____81954 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81953) {
    (function(pnod__3190__auto__) {
      return enfocus.core.en_resize.call(null, 5, height, 500, null, null).call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
        return enfocus.core.en_resize.call(null, width, "\ufdd0'curheight", 500, null, null).call(null, pnod__3190__auto__, function(pnod__3190__auto__) {
          return enfocus.core.en_content.call(null, prezo.core.slide1.call(null)).call(null, pnod__3190__auto__, function(pnod__3189__auto__) {
            return function(p1__81952_SHARP_) {
              var nods__3015__auto____81956 = enfocus.core.nodes__GT_coll.call(null, p1__81952_SHARP_);
              cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81955) {
                enfocus.core.en_fade_in.call(null, 1E3, null, null).call(null, enfocus.core.css_select.call(null, "", pnod81955, cljs.core.Vector.fromArray([".slide"])));
                return pnod81955
              }, nods__3015__auto____81956));
              return p1__81952_SHARP_
            }.call(null, pnod__3189__auto__)
          })
        })
      })
    }).call(null, enfocus.core.css_select.call(null, "", pnod81953, cljs.core.Vector.fromArray(["#content-pane"])));
    return pnod81953
  }, nods__3015__auto____81954));
  return document
};
prezo.core.resize_pane = function resize_pane(width, height) {
  var nods__3015__auto____81958 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81957) {
    enfocus.core.en_resize.call(null, width, height, 200, null, null).call(null, enfocus.core.css_select.call(null, "", pnod81957, cljs.core.Vector.fromArray(["#content-pane"])));
    return pnod81957
  }, nods__3015__auto____81958));
  return document
};
prezo.core.resize_content_pane = function resize_content_pane() {
  var size__81959 = goog.dom.getViewportSize.call(null);
  var width__81960 = size__81959.width - 40;
  var height__81961 = size__81959.height - 80;
  return prezo.core.resize_pane.call(null, width__81960, height__81961)
};
prezo.core.init_content_pane = function init_content_pane() {
  var size__81962 = goog.dom.getViewportSize.call(null);
  var width__81963 = size__81962.width - 40;
  var height__81964 = size__81962.height - 80;
  prezo.core.setup_pane.call(null, width__81963, height__81964);
  enfocus.core.en_listen.call(null, "\ufdd0'resize", prezo.core.resize_content_pane).call(null, window);
  return window
};
prezo.core.start = function start() {
  var nods__3015__auto____81967 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod81966) {
    enfocus.core.en_listen.call(null, "\ufdd0'click", prezo.core.init_content_pane).call(null, enfocus.core.css_select.call(null, "", pnod81966, cljs.core.Vector.fromArray(["#inner-circle"])));
    return pnod81966
  }, nods__3015__auto____81967));
  return document
};
prezo.core.enable_nav_keys = function enable_nav_keys() {
  enfocus.core.en_listen.call(null, "\ufdd0'keydown", function(p1__81965_SHARP_) {
    return prezo.core.exec_action_BANG_.call(null, p1__81965_SHARP_.keyCode)
  }).call(null, document);
  return document
};
prezo.core.disable_nav_keys = function disable_nav_keys() {
  enfocus.core.en_remove_listeners.call(null, "\ufdd0'keydown").call(null, document);
  return document
};
window.onload = function() {
  prezo.core.enable_nav_keys.call(null);
  return prezo.core.start.call(null)
};
enfocus.core.load_remote_dom.call(null, "slides/why-clojure.html");
prezo.core.slide1 = function slide1() {
  var vec__81970__81971 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-clojure.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-clojure.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-clojure.html")
  }]);
  var id_sym81968__81972 = cljs.core.nth.call(null, vec__81970__81971, 0, null);
  var pnod81969__81973 = cljs.core.nth.call(null, vec__81970__81971, 1, null);
  var pnod81969__81974 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod81969__81973) : pnod81969__81973;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym81968__81972, pnod81969__81974);
    return enfocus.core.remove_node_return_child.call(null, pnod81969__81974)
  }else {
    return pnod81969__81974
  }
};
enfocus.core.load_remote_dom.call(null, "slides/what-clojure.html");
prezo.core.slide2 = function slide2() {
  var vec__81977__81978 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-clojure.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-clojure.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-clojure.html")
  }]);
  var id_sym81975__81979 = cljs.core.nth.call(null, vec__81977__81978, 0, null);
  var pnod81976__81980 = cljs.core.nth.call(null, vec__81977__81978, 1, null);
  var pnod81976__81981 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod81976__81980) : pnod81976__81980;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym81975__81979, pnod81976__81981);
    return enfocus.core.remove_node_return_child.call(null, pnod81976__81981)
  }else {
    return pnod81976__81981
  }
};
enfocus.core.load_remote_dom.call(null, "slides/what-to-do.html");
prezo.core.slide2_5 = function slide2_5() {
  var vec__81984__81985 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-to-do.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-to-do.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-to-do.html")
  }]);
  var id_sym81982__81986 = cljs.core.nth.call(null, vec__81984__81985, 0, null);
  var pnod81983__81987 = cljs.core.nth.call(null, vec__81984__81985, 1, null);
  var pnod81983__81988 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod81983__81987) : pnod81983__81987;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym81982__81986, pnod81983__81988);
    return enfocus.core.remove_node_return_child.call(null, pnod81983__81988)
  }else {
    return pnod81983__81988
  }
};
enfocus.core.load_remote_dom.call(null, "slides/why-clojurescript.html");
prezo.core.slide3 = function slide3() {
  var vec__81991__81992 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-clojurescript.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-clojurescript.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-clojurescript.html")
  }]);
  var id_sym81989__81993 = cljs.core.nth.call(null, vec__81991__81992, 0, null);
  var pnod81990__81994 = cljs.core.nth.call(null, vec__81991__81992, 1, null);
  var pnod81990__81995 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod81990__81994) : pnod81990__81994;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym81989__81993, pnod81990__81995);
    return enfocus.core.remove_node_return_child.call(null, pnod81990__81995)
  }else {
    return pnod81990__81995
  }
};
enfocus.core.load_remote_dom.call(null, "slides/what-clojurescript.html");
prezo.core.slide4 = function slide4() {
  var vec__81998__81999 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-clojurescript.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-clojurescript.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-clojurescript.html")
  }]);
  var id_sym81996__82000 = cljs.core.nth.call(null, vec__81998__81999, 0, null);
  var pnod81997__82001 = cljs.core.nth.call(null, vec__81998__81999, 1, null);
  var pnod81997__82002 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod81997__82001) : pnod81997__82001;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym81996__82000, pnod81997__82002);
    return enfocus.core.remove_node_return_child.call(null, pnod81997__82002)
  }else {
    return pnod81997__82002
  }
};
enfocus.core.load_remote_dom.call(null, "slides/clojure-syntax.html");
prezo.core.slide5 = function slide5() {
  var vec__82005__82006 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/clojure-syntax.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/clojure-syntax.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/clojure-syntax.html")
  }]);
  var id_sym82003__82007 = cljs.core.nth.call(null, vec__82005__82006, 0, null);
  var pnod82004__82008 = cljs.core.nth.call(null, vec__82005__82006, 1, null);
  var pnod82004__82009 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82004__82008) : pnod82004__82008;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82003__82007, pnod82004__82009);
    return enfocus.core.remove_node_return_child.call(null, pnod82004__82009)
  }else {
    return pnod82004__82009
  }
};
enfocus.core.load_remote_dom.call(null, "slides/defining-functions.html");
prezo.core.slide6 = function slide6() {
  var vec__82012__82013 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/defining-functions.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/defining-functions.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/defining-functions.html")
  }]);
  var id_sym82010__82014 = cljs.core.nth.call(null, vec__82012__82013, 0, null);
  var pnod82011__82015 = cljs.core.nth.call(null, vec__82012__82013, 1, null);
  var pnod82011__82016 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82011__82015) : pnod82011__82015;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82010__82014, pnod82011__82016);
    return enfocus.core.remove_node_return_child.call(null, pnod82011__82016)
  }else {
    return pnod82011__82016
  }
};
enfocus.core.load_remote_dom.call(null, "slides/overloading.html");
prezo.core.slide7 = function slide7() {
  var vec__82019__82020 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/overloading.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/overloading.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/overloading.html")
  }]);
  var id_sym82017__82021 = cljs.core.nth.call(null, vec__82019__82020, 0, null);
  var pnod82018__82022 = cljs.core.nth.call(null, vec__82019__82020, 1, null);
  var pnod82018__82023 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82018__82022) : pnod82018__82022;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82017__82021, pnod82018__82023);
    return enfocus.core.remove_node_return_child.call(null, pnod82018__82023)
  }else {
    return pnod82018__82023
  }
};
enfocus.core.load_remote_dom.call(null, "slides/deconstruction.html");
prezo.core.slide8 = function slide8() {
  var vec__82026__82027 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/deconstruction.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/deconstruction.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/deconstruction.html")
  }]);
  var id_sym82024__82028 = cljs.core.nth.call(null, vec__82026__82027, 0, null);
  var pnod82025__82029 = cljs.core.nth.call(null, vec__82026__82027, 1, null);
  var pnod82025__82030 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82025__82029) : pnod82025__82029;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82024__82028, pnod82025__82030);
    return enfocus.core.remove_node_return_child.call(null, pnod82025__82030)
  }else {
    return pnod82025__82030
  }
};
enfocus.core.load_remote_dom.call(null, "slides/assigning-vars.html");
prezo.core.slide9 = function slide9() {
  var vec__82033__82034 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/assigning-vars.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/assigning-vars.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/assigning-vars.html")
  }]);
  var id_sym82031__82035 = cljs.core.nth.call(null, vec__82033__82034, 0, null);
  var pnod82032__82036 = cljs.core.nth.call(null, vec__82033__82034, 1, null);
  var pnod82032__82037 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82032__82036) : pnod82032__82036;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82031__82035, pnod82032__82037);
    return enfocus.core.remove_node_return_child.call(null, pnod82032__82037)
  }else {
    return pnod82032__82037
  }
};
enfocus.core.load_remote_dom.call(null, "slides/js-interop.html");
prezo.core.slide10 = function slide10() {
  var vec__82040__82041 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/js-interop.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/js-interop.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/js-interop.html")
  }]);
  var id_sym82038__82042 = cljs.core.nth.call(null, vec__82040__82041, 0, null);
  var pnod82039__82043 = cljs.core.nth.call(null, vec__82040__82041, 1, null);
  var pnod82039__82044 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82039__82043) : pnod82039__82043;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82038__82042, pnod82039__82044);
    return enfocus.core.remove_node_return_child.call(null, pnod82039__82044)
  }else {
    return pnod82039__82044
  }
};
enfocus.core.load_remote_dom.call(null, "slides/js-namespaces.html");
prezo.core.slide11 = function slide11() {
  var vec__82047__82048 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/js-namespaces.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/js-namespaces.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/js-namespaces.html")
  }]);
  var id_sym82045__82049 = cljs.core.nth.call(null, vec__82047__82048, 0, null);
  var pnod82046__82050 = cljs.core.nth.call(null, vec__82047__82048, 1, null);
  var pnod82046__82051 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82046__82050) : pnod82046__82050;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82045__82049, pnod82046__82051);
    return enfocus.core.remove_node_return_child.call(null, pnod82046__82051)
  }else {
    return pnod82046__82051
  }
};
enfocus.core.load_remote_dom.call(null, "slides/cljs-namespaces.html");
prezo.core.slide12 = function slide12() {
  var vec__82054__82055 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/cljs-namespaces.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/cljs-namespaces.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/cljs-namespaces.html")
  }]);
  var id_sym82052__82056 = cljs.core.nth.call(null, vec__82054__82055, 0, null);
  var pnod82053__82057 = cljs.core.nth.call(null, vec__82054__82055, 1, null);
  var pnod82053__82058 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82053__82057) : pnod82053__82057;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82052__82056, pnod82053__82058);
    return enfocus.core.remove_node_return_child.call(null, pnod82053__82058)
  }else {
    return pnod82053__82058
  }
};
enfocus.core.load_remote_dom.call(null, "slides/macros.html");
prezo.core.slide13 = function slide13() {
  var vec__82061__82062 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/macros.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/macros.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/macros.html")
  }]);
  var id_sym82059__82063 = cljs.core.nth.call(null, vec__82061__82062, 0, null);
  var pnod82060__82064 = cljs.core.nth.call(null, vec__82061__82062, 1, null);
  var pnod82060__82065 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82060__82064) : pnod82060__82064;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82059__82063, pnod82060__82065);
    return enfocus.core.remove_node_return_child.call(null, pnod82060__82065)
  }else {
    return pnod82060__82065
  }
};
enfocus.core.load_remote_dom.call(null, "slides/what-are-we-missing.html");
prezo.core.slide14 = function slide14() {
  var vec__82068__82069 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-are-we-missing.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-are-we-missing.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/what-are-we-missing.html")
  }]);
  var id_sym82066__82070 = cljs.core.nth.call(null, vec__82068__82069, 0, null);
  var pnod82067__82071 = cljs.core.nth.call(null, vec__82068__82069, 1, null);
  var pnod82067__82072 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82067__82071) : pnod82067__82071;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82066__82070, pnod82067__82072);
    return enfocus.core.remove_node_return_child.call(null, pnod82067__82072)
  }else {
    return pnod82067__82072
  }
};
enfocus.core.load_remote_dom.call(null, "slides/choosing-your-materials.html");
prezo.core.slide15 = function slide15() {
  var vec__82075__82076 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/choosing-your-materials.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/choosing-your-materials.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/choosing-your-materials.html")
  }]);
  var id_sym82073__82077 = cljs.core.nth.call(null, vec__82075__82076, 0, null);
  var pnod82074__82078 = cljs.core.nth.call(null, vec__82075__82076, 1, null);
  var pnod82074__82079 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82074__82078) : pnod82074__82078;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82073__82077, pnod82074__82079);
    return enfocus.core.remove_node_return_child.call(null, pnod82074__82079)
  }else {
    return pnod82074__82079
  }
};
enfocus.core.load_remote_dom.call(null, "slides/why-not-closure-lib.html");
prezo.core.slide16 = function slide16() {
  var vec__82082__82083 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-not-closure-lib.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-not-closure-lib.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-not-closure-lib.html")
  }]);
  var id_sym82080__82084 = cljs.core.nth.call(null, vec__82082__82083, 0, null);
  var pnod82081__82085 = cljs.core.nth.call(null, vec__82082__82083, 1, null);
  var pnod82081__82086 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82081__82085) : pnod82081__82085;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82080__82084, pnod82081__82086);
    return enfocus.core.remove_node_return_child.call(null, pnod82081__82086)
  }else {
    return pnod82081__82086
  }
};
enfocus.core.load_remote_dom.call(null, "slides/why-closure-lib.html");
prezo.core.slide17 = function slide17() {
  var vec__82089__82090 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-closure-lib.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-closure-lib.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/why-closure-lib.html")
  }]);
  var id_sym82087__82091 = cljs.core.nth.call(null, vec__82089__82090, 0, null);
  var pnod82088__82092 = cljs.core.nth.call(null, vec__82089__82090, 1, null);
  var pnod82088__82093 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82088__82092) : pnod82088__82092;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82087__82091, pnod82088__82093);
    return enfocus.core.remove_node_return_child.call(null, pnod82088__82093)
  }else {
    return pnod82088__82093
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-naming.html");
prezo.core.slide18 = function slide18() {
  var vec__82096__82097 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-naming.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-naming.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-naming.html")
  }]);
  var id_sym82094__82098 = cljs.core.nth.call(null, vec__82096__82097, 0, null);
  var pnod82095__82099 = cljs.core.nth.call(null, vec__82096__82097, 1, null);
  var pnod82095__82100 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82095__82099) : pnod82095__82099;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82094__82098, pnod82095__82100);
    return enfocus.core.remove_node_return_child.call(null, pnod82095__82100)
  }else {
    return pnod82095__82100
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-lib-info-1.html");
prezo.core.slide19 = function slide19() {
  var vec__82103__82104 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-1.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-1.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-1.html")
  }]);
  var id_sym82101__82105 = cljs.core.nth.call(null, vec__82103__82104, 0, null);
  var pnod82102__82106 = cljs.core.nth.call(null, vec__82103__82104, 1, null);
  var pnod82102__82107 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82102__82106) : pnod82102__82106;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82101__82105, pnod82102__82107);
    return enfocus.core.remove_node_return_child.call(null, pnod82102__82107)
  }else {
    return pnod82102__82107
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-lib-info-2.html");
prezo.core.slide20 = function slide20() {
  var vec__82110__82111 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-2.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-2.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-2.html")
  }]);
  var id_sym82108__82112 = cljs.core.nth.call(null, vec__82110__82111, 0, null);
  var pnod82109__82113 = cljs.core.nth.call(null, vec__82110__82111, 1, null);
  var pnod82109__82114 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82109__82113) : pnod82109__82113;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82108__82112, pnod82109__82114);
    return enfocus.core.remove_node_return_child.call(null, pnod82109__82114)
  }else {
    return pnod82109__82114
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-lib-info-3.html");
prezo.core.slide21 = function slide21() {
  var vec__82117__82118 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-3.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-3.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-lib-info-3.html")
  }]);
  var id_sym82115__82119 = cljs.core.nth.call(null, vec__82117__82118, 0, null);
  var pnod82116__82120 = cljs.core.nth.call(null, vec__82117__82118, 1, null);
  var pnod82116__82121 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82116__82120) : pnod82116__82120;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82115__82119, pnod82116__82121);
    return enfocus.core.remove_node_return_child.call(null, pnod82116__82121)
  }else {
    return pnod82116__82121
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-third-party-tools.html");
prezo.core.slide22 = function slide22() {
  var vec__82124__82125 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-third-party-tools.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-third-party-tools.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-third-party-tools.html")
  }]);
  var id_sym82122__82126 = cljs.core.nth.call(null, vec__82124__82125, 0, null);
  var pnod82123__82127 = cljs.core.nth.call(null, vec__82124__82125, 1, null);
  var pnod82123__82128 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82123__82127) : pnod82123__82127;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82122__82126, pnod82123__82128);
    return enfocus.core.remove_node_return_child.call(null, pnod82123__82128)
  }else {
    return pnod82123__82128
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-externs-foreign-libs.html");
prezo.core.slide23 = function slide23() {
  var vec__82131__82132 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-externs-foreign-libs.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-externs-foreign-libs.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-externs-foreign-libs.html")
  }]);
  var id_sym82129__82133 = cljs.core.nth.call(null, vec__82131__82132, 0, null);
  var pnod82130__82134 = cljs.core.nth.call(null, vec__82131__82132, 1, null);
  var pnod82130__82135 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82130__82134) : pnod82130__82134;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82129__82133, pnod82130__82135);
    return enfocus.core.remove_node_return_child.call(null, pnod82130__82135)
  }else {
    return pnod82130__82135
  }
};
enfocus.core.load_remote_dom.call(null, "slides/atom-demo.html");
prezo.core.slide24 = function slide24() {
  var vec__82138__82139 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/atom-demo.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/atom-demo.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/atom-demo.html")
  }]);
  var id_sym82136__82140 = cljs.core.nth.call(null, vec__82138__82139, 0, null);
  var pnod82137__82141 = cljs.core.nth.call(null, vec__82138__82139, 1, null);
  var pnod82137__82142 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82137__82141) : pnod82137__82141;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82136__82140, pnod82137__82142);
    return enfocus.core.remove_node_return_child.call(null, pnod82137__82142)
  }else {
    return pnod82137__82142
  }
};
enfocus.core.load_remote_dom.call(null, "slides/closure-extern-cost.html");
prezo.core.slide25 = function slide25() {
  var vec__82145__82146 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-extern-cost.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-extern-cost.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/closure-extern-cost.html")
  }]);
  var id_sym82143__82147 = cljs.core.nth.call(null, vec__82145__82146, 0, null);
  var pnod82144__82148 = cljs.core.nth.call(null, vec__82145__82146, 1, null);
  var pnod82144__82149 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82144__82148) : pnod82144__82148;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82143__82147, pnod82144__82149);
    return enfocus.core.remove_node_return_child.call(null, pnod82144__82149)
  }else {
    return pnod82144__82149
  }
};
enfocus.core.load_remote_dom.call(null, "slides/managing-upstream-deps.html");
prezo.core.slide26 = function slide26() {
  var vec__82152__82153 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/managing-upstream-deps.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/managing-upstream-deps.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/managing-upstream-deps.html")
  }]);
  var id_sym82150__82154 = cljs.core.nth.call(null, vec__82152__82153, 0, null);
  var pnod82151__82155 = cljs.core.nth.call(null, vec__82152__82153, 1, null);
  var pnod82151__82156 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82151__82155) : pnod82151__82155;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82150__82154, pnod82151__82156);
    return enfocus.core.remove_node_return_child.call(null, pnod82151__82156)
  }else {
    return pnod82151__82156
  }
};
enfocus.core.load_remote_dom.call(null, "slides/challenges-1.html");
prezo.core.slide27 = function slide27() {
  var vec__82159__82160 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-1.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-1.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-1.html")
  }]);
  var id_sym82157__82161 = cljs.core.nth.call(null, vec__82159__82160, 0, null);
  var pnod82158__82162 = cljs.core.nth.call(null, vec__82159__82160, 1, null);
  var pnod82158__82163 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82158__82162) : pnod82158__82162;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82157__82161, pnod82158__82163);
    return enfocus.core.remove_node_return_child.call(null, pnod82158__82163)
  }else {
    return pnod82158__82163
  }
};
enfocus.core.load_remote_dom.call(null, "slides/challenges-2.html");
prezo.core.slide28 = function slide28() {
  var vec__82166__82167 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-2.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-2.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-2.html")
  }]);
  var id_sym82164__82168 = cljs.core.nth.call(null, vec__82166__82167, 0, null);
  var pnod82165__82169 = cljs.core.nth.call(null, vec__82166__82167, 1, null);
  var pnod82165__82170 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82165__82169) : pnod82165__82169;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82164__82168, pnod82165__82170);
    return enfocus.core.remove_node_return_child.call(null, pnod82165__82170)
  }else {
    return pnod82165__82170
  }
};
enfocus.core.load_remote_dom.call(null, "slides/challenges-3.html");
prezo.core.slide29 = function slide29() {
  var vec__82173__82174 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-3.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-3.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-3.html")
  }]);
  var id_sym82171__82175 = cljs.core.nth.call(null, vec__82173__82174, 0, null);
  var pnod82172__82176 = cljs.core.nth.call(null, vec__82173__82174, 1, null);
  var pnod82172__82177 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82172__82176) : pnod82172__82176;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82171__82175, pnod82172__82177);
    return enfocus.core.remove_node_return_child.call(null, pnod82172__82177)
  }else {
    return pnod82172__82177
  }
};
enfocus.core.load_remote_dom.call(null, "slides/challenges-4.html");
prezo.core.slide30 = function slide30() {
  var vec__82180__82181 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-4.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-4.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/challenges-4.html")
  }]);
  var id_sym82178__82182 = cljs.core.nth.call(null, vec__82180__82181, 0, null);
  var pnod82179__82183 = cljs.core.nth.call(null, vec__82180__82181, 1, null);
  var pnod82179__82184 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82179__82183) : pnod82179__82183;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82178__82182, pnod82179__82184);
    return enfocus.core.remove_node_return_child.call(null, pnod82179__82184)
  }else {
    return pnod82179__82184
  }
};
enfocus.core.load_remote_dom.call(null, "slides/parting-advice.html");
prezo.core.slide31 = function slide31() {
  var vec__82187__82188 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/parting-advice.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/parting-advice.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/parting-advice.html")
  }]);
  var id_sym82185__82189 = cljs.core.nth.call(null, vec__82187__82188, 0, null);
  var pnod82186__82190 = cljs.core.nth.call(null, vec__82187__82188, 1, null);
  var pnod82186__82191 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82186__82190) : pnod82186__82190;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82185__82189, pnod82186__82191);
    return enfocus.core.remove_node_return_child.call(null, pnod82186__82191)
  }else {
    return pnod82186__82191
  }
};
enfocus.core.load_remote_dom.call(null, "slides/about-prezo.html");
prezo.core.slide32 = function slide32() {
  var vec__82194__82195 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/about-prezo.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/about-prezo.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/about-prezo.html")
  }]);
  var id_sym82192__82196 = cljs.core.nth.call(null, vec__82194__82195, 0, null);
  var pnod82193__82197 = cljs.core.nth.call(null, vec__82194__82195, 1, null);
  var pnod82193__82198 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82193__82197) : pnod82193__82197;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82192__82196, pnod82193__82198);
    return enfocus.core.remove_node_return_child.call(null, pnod82193__82198)
  }else {
    return pnod82193__82198
  }
};
enfocus.core.load_remote_dom.call(null, "slides/question.html");
prezo.core.slide33 = function slide33() {
  var vec__82201__82202 = cljs.core.truth_(cljs.core.fn_QMARK_.call(null, function() {
    return enfocus.core.get_cached_dom.call(null, "slides/question.html")
  })) ? function() {
    return enfocus.core.get_cached_dom.call(null, "slides/question.html")
  }.call(null) : cljs.core.Vector.fromArray(["", function() {
    return enfocus.core.get_cached_dom.call(null, "slides/question.html")
  }]);
  var id_sym82199__82203 = cljs.core.nth.call(null, vec__82201__82202, 0, null);
  var pnod82200__82204 = cljs.core.nth.call(null, vec__82201__82202, 1, null);
  var pnod82200__82205 = cljs.core.truth_(true) ? enfocus.core.create_hidden_dom.call(null, pnod82200__82204) : pnod82200__82204;
  if(cljs.core.truth_(true)) {
    enfocus.core.reset_ids.call(null, id_sym82199__82203, pnod82200__82205);
    return enfocus.core.remove_node_return_child.call(null, pnod82200__82205)
  }else {
    return pnod82200__82205
  }
};
prezo.core.action_index = cljs.core.atom.call(null, 0);
prezo.core.actions = cljs.core.Vector.fromArray([function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide1)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide2)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide2);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "clj-is"), prezo.content.concurrency, cljs.core.ObjMap.fromObject(["\ufdd0'font-size", "\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset"], {"\ufdd0'font-size":"1em", "\ufdd0'loc":cljs.core.Vector.fromArray([-10, 183]), "\ufdd0'size":cljs.core.Vector.fromArray([180, 30]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([5, 80])}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide2_5)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide2_5);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "port-text"));
  return prezo.util.by_id.call(null, "port-text")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide2_5);
  var nods__3015__auto____82207 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod82206) {
    enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, enfocus.core.css_select.call(null, "", pnod82206, cljs.core.Vector.fromArray(["#port-text"])));
    enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, enfocus.core.css_select.call(null, "", pnod82206, cljs.core.Vector.fromArray(["#huh-text"])));
    return pnod82206
  }, nods__3015__auto____82207));
  return document
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide3)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide4)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide4);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "clj-is"), "Bold Claims!", cljs.core.ObjMap.fromObject(["\ufdd0'font-size", "\ufdd0'loc", "\ufdd0'size"], {"\ufdd0'font-size":"3em", "\ufdd0'loc":cljs.core.Vector.fromArray([-10, 220]), "\ufdd0'size":cljs.core.Vector.fromArray([300, 100])}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide5)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide5);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "syntax-el"), prezo.content.syntax_text, cljs.core.ObjMap.fromObject(["\ufdd0'font-size", "\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset"], {"\ufdd0'font-size":"1em", "\ufdd0'loc":cljs.core.Vector.fromArray([-5, -5]), "\ufdd0'size":cljs.core.Vector.fromArray([360, 190]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([5, -400])}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide6)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide6);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "inline-func"), "You will see this a lot.", cljs.core.ObjMap.fromObject(["\ufdd0'font-size", "\ufdd0'loc", "\ufdd0'size"], {"\ufdd0'font-size":"2em", "\ufdd0'loc":cljs.core.Vector.fromArray([0, 87]), "\ufdd0'size":cljs.core.Vector.fromArray([180, 30])}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide7)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide8)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide8);
  enfocus.core.en_content.call(null, prezo.content.decon_with_defualt_js).call(null, prezo.util.by_id.call(null, "js-decon"));
  prezo.util.by_id.call(null, "js-decon");
  prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "js-decon"), "", cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([0, 5]), "\ufdd0'size":cljs.core.Vector.fromArray([370, 200])}));
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "decon"), "", cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([0, 287]), "\ufdd0'size":cljs.core.Vector.fromArray([450, 93])}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide9)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide9);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "global-var"), "No one does this on purpose, right?", cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset", "\ufdd0'font-size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([0, 5]), "\ufdd0'size":cljs.core.Vector.fromArray([200, 30]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([150, -60]), "\ufdd0'font-size":"1.5em"}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide10)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide11)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide12)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide12);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "ns-def"), prezo.content.ns_use_text, cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset", "\ufdd0'font-size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([60, 22]), "\ufdd0'size":cljs.core.Vector.fromArray([365, 56]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([5, 5]), "\ufdd0'font-size":"1em"}))
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide12);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "ns-def"), prezo.content.ns_require_text, cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset", "\ufdd0'font-size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([60, 75]), "\ufdd0'size":cljs.core.Vector.fromArray([280, 20]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([5, 5]), "\ufdd0'font-size":"1em"}))
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide12);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "ns-body"), prezo.content.ns_proto_text, cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset", "\ufdd0'font-size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([5, 75]), "\ufdd0'size":cljs.core.Vector.fromArray([310, 90]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([5, 5]), "\ufdd0'font-size":"1em"}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide13)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide13);
  return prezo.animation.call_out.call(null, prezo.util.by_id.call(null, "macro-text"), prezo.content.macro_text, cljs.core.ObjMap.fromObject(["\ufdd0'loc", "\ufdd0'size", "\ufdd0'font-offset", "\ufdd0'font-size"], {"\ufdd0'loc":cljs.core.Vector.fromArray([-4, -2]), "\ufdd0'size":cljs.core.Vector.fromArray([110, 30]), "\ufdd0'font-offset":cljs.core.Vector.fromArray([5, 5]), "\ufdd0'font-size":"1em"}))
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide14)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide14);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text"));
  return prezo.util.by_id.call(null, "missing-text")
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide15)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide16)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide17)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide18)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide19)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide20)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide21)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide22)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide23)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide23);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text"));
  return prezo.util.by_id.call(null, "missing-text")
}, function actions() {
  prezo.core.transition_slide.call(null, prezo.core.slide24);
  prezo.atom.user_view.call(null, cljs.core.deref.call(null, prezo.atom.my_user));
  var nods__3015__auto____82209 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod82208) {
    enfocus.core.en_listen.call(null, "\ufdd0'click", prezo.atom.persist_user_form).call(null, enfocus.core.css_select.call(null, "", pnod82208, cljs.core.Vector.fromArray(["#user-submit"])));
    enfocus.core.en_do__GT_.call(null, enfocus.core.en_listen.call(null, "\ufdd0'focus", prezo.core.disable_nav_keys), enfocus.core.en_listen.call(null, "\ufdd0'blur", prezo.core.enable_nav_keys)).call(null, enfocus.core.css_select.call(null, "", pnod82208, cljs.core.Vector.fromArray(["input"])));
    return pnod82208
  }, nods__3015__auto____82209));
  return document
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide25)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide26)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide26);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text"));
  return prezo.util.by_id.call(null, "missing-text")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide26);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "clj-is"));
  return prezo.util.by_id.call(null, "clj-is")
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide27)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide27);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "google-img"));
  return prezo.util.by_id.call(null, "google-img")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide27);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "google-img"));
  prezo.util.by_id.call(null, "google-img");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text"));
  return prezo.util.by_id.call(null, "missing-text")
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide28)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide28);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "rtfm-img"));
  return prezo.util.by_id.call(null, "rtfm-img")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide28);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "rtfm-x-img"));
  prezo.util.by_id.call(null, "rtfm-x-img");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text"));
  return prezo.util.by_id.call(null, "missing-text")
}, function actions() {
  prezo.core.transition_slide.call(null, prezo.core.slide29);
  var size__82210 = goog.dom.getViewportSize.call(null);
  enfocus.core.en_do__GT_.call(null, enfocus.core.en_move.call(null, -300, size__82210.height + 300, 0, null, null), enfocus.core.en_set_style.call(null, "\ufdd0'display", ""), enfocus.core.chainable_standard.call(null, function(pnod__3168__auto__) {
    return enfocus.core.setTimeout.call(null, function() {
      return function() {
        var nods__3015__auto____82212 = enfocus.core.nodes__GT_coll.call(null, enfocus.core.en_move.call(null, size__82210.width + 200, -300, 3E3, null, null));
        cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod82211) {
          return pnod82211
        }, nods__3015__auto____82212));
        return enfocus.core.en_move.call(null, size__82210.width + 200, -300, 3E3, null, null)
      }().call(null, pnod__3168__auto__)
    }, 2E3)
  })).call(null, prezo.util.by_id.call(null, "cockroach-bug"));
  return prezo.util.by_id.call(null, "cockroach-bug")
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide30)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide31)
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide31);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text1"));
  return prezo.util.by_id.call(null, "missing-text1")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide31);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text1"));
  prezo.util.by_id.call(null, "missing-text1");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text2"));
  return prezo.util.by_id.call(null, "missing-text2")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide31);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text1"));
  prezo.util.by_id.call(null, "missing-text1");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text2"));
  prezo.util.by_id.call(null, "missing-text2");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text3"));
  return prezo.util.by_id.call(null, "missing-text3")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide31);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text1"));
  prezo.util.by_id.call(null, "missing-text1");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text2"));
  prezo.util.by_id.call(null, "missing-text2");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text3"));
  prezo.util.by_id.call(null, "missing-text3");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text4"));
  return prezo.util.by_id.call(null, "missing-text4")
}, function actions() {
  prezo.core.reset_slide.call(null, prezo.core.slide31);
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text1"));
  prezo.util.by_id.call(null, "missing-text1");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text2"));
  prezo.util.by_id.call(null, "missing-text2");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text3"));
  prezo.util.by_id.call(null, "missing-text3");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text4"));
  prezo.util.by_id.call(null, "missing-text4");
  enfocus.core.en_set_style.call(null, "\ufdd0'display", "").call(null, prezo.util.by_id.call(null, "missing-text5"));
  return prezo.util.by_id.call(null, "missing-text5")
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide32)
}, function actions() {
  return prezo.core.transition_slide.call(null, prezo.core.slide33)
}]);
prezo.core.back_key_codes = cljs.core.set([66, 37, 38, 8, 80]);
prezo.core.start_key_codes = cljs.core.set([83]);
prezo.core.exec_action_BANG_ = function exec_action_BANG_(keycode) {
  if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, prezo.core.back_key_codes, keycode))) {
    cljs.core.swap_BANG_.call(null, prezo.core.action_index, function(p1__82213_SHARP_) {
      return(p1__82213_SHARP_ - 1) % cljs.core.count.call(null, prezo.core.actions)
    })
  }else {
    if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null, prezo.core.start_key_codes, keycode))) {
      cljs.core.reset_BANG_.call(null, prezo.core.action_index, 0)
    }else {
      if(cljs.core.truth_("\ufdd0'else")) {
        cljs.core.swap_BANG_.call(null, prezo.core.action_index, function(p1__82214_SHARP_) {
          return(p1__82214_SHARP_ + 1) % cljs.core.count.call(null, prezo.core.actions)
        })
      }else {
      }
    }
  }
  var func__82215 = cljs.core.nth.call(null, prezo.core.actions, cljs.core.deref.call(null, prezo.core.action_index));
  return func__82215.call(null)
};
prezo.core.transition_slide = function transition_slide(init_func) {
  var nods__3015__auto____82217 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod82216) {
    enfocus.core.en_fade_out.call(null, 2E3, null, null).call(null, enfocus.core.css_select.call(null, "", pnod82216, cljs.core.Vector.fromArray([".slide"])));
    enfocus.core.en_content.call(null, init_func.call(null)).call(null, enfocus.core.css_select.call(null, "", pnod82216, cljs.core.Vector.fromArray(["#content-pane"])));
    enfocus.core.en_fade_in.call(null, 1E3, null, null).call(null, enfocus.core.css_select.call(null, "", pnod82216, cljs.core.Vector.fromArray([".slide"])));
    return pnod82216
  }, nods__3015__auto____82217));
  return document
};
prezo.core.reset_slide = function reset_slide(init_func) {
  var nods__3015__auto____82219 = enfocus.core.nodes__GT_coll.call(null, document);
  cljs.core.doall.call(null, cljs.core.map.call(null, function(pnod82218) {
    enfocus.core.en_content.call(null, init_func.call(null)).call(null, enfocus.core.css_select.call(null, "", pnod82218, cljs.core.Vector.fromArray(["#content-pane"])));
    enfocus.core.en_set_style.call(null, "\ufdd0'opacity", "1.0").call(null, enfocus.core.css_select.call(null, "", pnod82218, cljs.core.Vector.fromArray([".slide"])));
    enfocus.core.en_set_style.call(null, "\ufdd0'filter", "alpha(opacity=100)").call(null, enfocus.core.css_select.call(null, "", pnod82218, cljs.core.Vector.fromArray([".slide"])));
    return pnod82218
  }, nods__3015__auto____82219));
  return document
};
