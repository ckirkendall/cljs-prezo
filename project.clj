(defproject cinjs-prezo "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :source-path "src"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [goog-jar "1.0.0"]
                 [enfocus "0.9.1-SNAPSHOT"]]
  :cljsbuild
    {:builds
     [{:source-path "src",
       :compiler
       {:output-dir "resources/public/cljs",
        :output-to "resources/public/cljs/bootstrap.js",
        :optimizations :whitespace,
        :pretty-print true}}]})
               
