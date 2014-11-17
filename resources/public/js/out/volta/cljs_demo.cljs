(ns volta.cljs-demo
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [om.dom :as odom :include-macros true]))

(def $output (gdom/getElement "cljsOutput"))

(defn timed-string
  "A timestamped greeting"
  []
  (str "ClojureScript up and running as of " (js/Date.)))


;;---------------------------------
;; Om Section
;;---------------------------------

(def app-state (atom {:greetings 
                       [{:language "English" :greeting "Hello World!"}
                        {:language "French" :greeting "Bonjour Monde!"}
                        {:language "Spanish" :greeting "Hola Mundo!"}]
                       :extra "spam"
                       :other 42}))

(def APP-ROOT (.getElementById js/document "omTarget"))

(defn greeting [cursor owner opts]
  (reify
    om/IRender
    (render [_]
      (odom/li #js {:className "oneGreeting"}
               (odom/strong #js {} (str (:language cursor) ": "))
               (odom/em #js {} (:greeting cursor))))))

(defn all-greetings [cursor owner opts]
  (reify
    om/IRender
    (render [_]
      (apply odom/ul #js {:className "allGreetings"}
             (om/build-all greeting (:greetings cursor))))))

(defn top-level-widget [app owner opts]
  (reify
    om/IRender
    (render [_]
      (odom/div #js {:className "outerBox"}
                (om/build all-greetings app)))))

;;-------------------------------------------------------
;; (init) function: exported for use on HTML host!
;;-------------------------------------------------------

(defn ^:export init
  "Initialize the main cljs-demo page"
  []
  (.log js/console "(init) called on cljs-demo page...")
  (gdom/setTextContent $output (timed-string))
  (om/root top-level-widget app-state {:target APP-ROOT}))


