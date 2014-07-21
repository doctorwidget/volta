(defproject volta "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.11"]
            [lein-sphinx "1.0.0"]]
  
  :main ^:skip-aot volta.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :sphinx {
           :builder :html
           :source "doc"
           :output "doc/_build"
           :rebuild true
           :nitpicky true
           :setting-values {
                            :html_theme "agogo"
                            ; consider haiku, traditional, scrolls, nature, pyramid
  }})