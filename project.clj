(defproject cinjs-prezo "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :source-path "src"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [goog-jar "1.0.0"]
                 [enfocus "0.9.1-SNAPSHOT"]]
  :dev-dependencies [[lein-eclipse "1.0.0"]
                     [lein-cljsbuild "0.0.7"]]
  :cljsbuild {
              ; The path to the top-level ClojureScript source directory:
              :source-path "src"
              ; The standard ClojureScript compiler options:
              ; (See the ClojureScript compiler documentation for details.)
              :compiler {
                         :output-dir "site/cljs" 
                         :output-to "site/cljs/cinjs.js"         
                         :optimizations :whitespace
                         :pretty-print true}})
               
