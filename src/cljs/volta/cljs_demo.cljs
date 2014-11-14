(ns volta.cljs-demo
  (:require [goog.dom :as gdom]))

(def $output (gdom/getElement "cljsOutput"))

(defn timed-string
  "A timestamped greeting"
  []
  (str "This greeting dynamically created on " (js/Date.)))

(defn ^:export init
  "Initialize the main cljs-demo page"
  []
  (.log js/console "initializing cljs-demo page...")
  (gdom/setTextContent $output (timed-string)))


