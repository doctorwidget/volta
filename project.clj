(defproject volta "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [com.cemerick/friend "0.2.1"]
                 [com.novemberain/monger "2.0.0"]
                 [ring "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [compojure "1.2.1"]
                 [enlive "1.1.5"]
                 [clj-time "0.8.0"]
                 [cheshire "5.3.1"]
                 [environ "1.0.0"]]
 
  :plugins [[lein-ring "0.8.11"]
            [lein-environ "1.0.0"]
            [lein-sphinx "1.0.0"]]

  :source-paths ["src" "src/clj" "src/cljs"]
  :test-paths ["test" "test/clj" "test/cljs"]
  
  :min-lein-version "2.0.0"
  
  :main ^:skip-aot volta.core    ; target for 'lein run'

  :target-path "target/%s"

  :uberjar-name "volta.standalone.jar"
  
  :profiles {:uberjar {:aot :all}
             :default [:base :system :user :provided :dev :dev*]
             :dev {:env {:demo-foo "FOO from project.clj"
                         :demo-bar "BAR from project.clj"}
                   :dependencies [[org.clojure/clojurescript "0.0-2371"]
                                  [om "0.7.3"]]
                   :plugins [[lein-cljsbuild "1.0.3"]]}
             :production {:env {:production true}}}

  :ring {:handler volta.routes/main
         :init volta.db/init}
 
  :sphinx {:builder :html
           :source "doc"
           :output "doc/_build"
           :rebuild true
           :nitpicky true
           :setting-values {:html_theme "agogo"}}
           ; standard themes:  haiku, traditional, scrolls, nature, pyramid

  :cljsbuild {:builds 
                [{:id "dev"
                  :source-paths ["src/cljs"]
                  :compiler {:pretty-print true
                             :output-to "resources/public/js/volta.js"
                             :source-map "resources/public/js/volta.js.map"
                             :output-dir "resources/public/js/out-dev"
                             ;:preamble ["lib/react.js"]
                             :externs ["lib/react-externs.js"]
                             :optimizations :whitespace}}
                 {:id "prod"
                  :source-paths ["src/cljs"]
                  :compiler {:output-to "resources/public/js/volta.min.js"
                             :source-map "resources/public/js/volta.min.js.map"
                             :output-dir "resources/public/js/out"
                             ;:preamble ["lib/react.min.js"]
                             :externs ["lib/react-externs.js"]
                             :optimizations :advanced}}]})           

