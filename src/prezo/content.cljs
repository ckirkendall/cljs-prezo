(ns prezo.content)


;;;;;;;;;;;;;;;;; Content ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
(def decon-with-defualt-js (str "function tmp (point) {\n" 
                                 "     var x=point.x;\n"
                                 "     var y=point.y;\n"
                                 "     if(x === undefined) {\n"
                                 "          x=3;\n"
                                 "     }\n"
                                 "     log(x y);\n"
                                 "}\n\n"
                                 "tmp({ z : 3, y : 4 });\n\n\n\n\n\n\n\n\n\n"))  

(def ns-use-text (str "<div id='use-doc' class='doc'><h3>:use</h3>"
                      "Provides the ability to import symbols defined in another namespace.<br>"  
                      "<br>The following filters to be applied to the symbols.<br>"
                      "&nbsp;&nbsp;&nbsp;&nbsp;:exclude [sym1 sym2 ..]<br/>"
                      "&nbsp;&nbsp;&nbsp;&nbsp;:only [sym1 sym2 ...]<br/>"
                      "&nbsp;&nbsp;&nbsp;&nbsp;:rename {new-name1 sym1 new-name2 sym2 ...}<div>"))

(def ns-require-text (str "<div id='use-doc' class='doc'><h3>:require</h3>"
                          "Allows us to import a another namespace and provide an alias.<br>"  
                          "<br>functions and values are accessed by prefixing the alias:<br>"
                          "&nbsp;&nbsp;&nbsp;&nbsp;(dom/append! ...) <div>"))

(def ns-proto-text (str "<div id='use-doc' class='doc'><h3>Protocols</h3>"
                          "Provide an abstraction for safely extending types without the chance of collision or the need for wrappers/adapters.<br/>"  
                          "We wills see an example later...</div>"))

(def ex1-js-text (str "<div id='use-doc' class='doc'><h3>What About Collisions?</h3>"
                      "Here we see that we must modify JQuery's namespace.<br/>"
                      "Modern apps have simply moved the collision problem<br/>"
                      "from the global namespace to JQuery's namespace.</div>"))
            
(def ex1-cljs-func-text (str "<div id='use-doc' class='doc'><h3>Just a Function</h3>"
                             "Our logging function is no longer a plugin its now just </br>"
                             "a standard function in its own namespace.</div>"))

(def ex1-cljs-def-text (str "<div id='use-doc' class='doc'><h3>Defaulting</h3>"
                             "Here we are using argument deconstruction to provide option defaults.</div>"))

(def ex1-cljs-macro-text (str "<div id='use-doc' class='doc'><h3>'->' Macro</h3>"
                             "Provides chaining similar to what we are use to without requiring<br/>"
                             "functions be part of the objects namespace.</div>"))

(def ex2-proto-def-text (str "<div id='use-doc' class='doc'><h3>DomContent</h3>"
                             "This protocol is used in Domina to define the contract required <br/>"
                             "to make base function like 'append!' and 'prepend!' work.  <br/>"
                             "It provides the same basic structure as JQuery's WrappedSet<br/>"
                             "without requiring a wrapper object, that is aware of all<br/>"
                             "implementing cases<br/><br/>"
                             "It is closer in concept to a java interface where as long as <br/> "
                             "type extends this protocol Domina's base functions will work.</div>"))

(def ex2-proto-ep-text (str "<div id='use-doc' class='doc'><h3>Extend Protocol</h3>"
                             "The extend-protocol function allows you to provide<br/>"
                             "implementation details of a given protocol on a set<br/>"
                             "types. In this case we see Domina extending string and<br/>"
                             "Element. They are also providing default if the type does<br/>"
                             "match a known type that assums the unknow type can be<br/>"
                             "converted to a sequence.<br/><br/>"
                             "It is important to understand that unlike extending an<br/>"
                             "object in JavaScript these extentions are local to this<br/>"
                             "namespace.</div>"))

(def ex2-proto-et-text (str "<div id='use-doc' class='doc'><h3>Extend Type</h3>"
                             "the extend-type function allows you to extend a given type <br/>"
                             "to a specific protocl.  In this case we see Domina extending <br/>"
                             "NodeList so it can be converted easily to a sequence.<br/>"
                             "This means that if can be used by the DomContent default<br/>"
                             "mapping.<br/><br/>"
                             "It is important to understand that unlike extending an<br/>"
                             "object in JavaScript these extentions are local to this<br/>"
                             "namespace.</div>"))

            
