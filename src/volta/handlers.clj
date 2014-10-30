(ns volta.handlers
  (:require [ring.util.response :as rr]
            [net.cgrand.enlive-html :as h]))

(defn handler-alpha
  "For running from the REPL as a simplest-possible example of a server. "
  [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello Volta!"})

(defn handler-beta
  "Another REPL example."
  [request]
  (rr/response
   (str "<HTML><BODY><UL>"
          (apply str (for [[k v] request]
              (str "<li>" k " >> " v "</li>")))
        "</UL></BODY></HTML>")))

(defn red-page
  [request]
  (rr/response
   (str "<HTML><BODY style='background-color:red'>Red</BODY></HTML>")))

(defn blue-page
  [request]
  (rr/response
   (str "<HTML><BODY style='background-color:blue'>Blue</BODY></HTML>")))


;; helper function that yields one single stylesheet element
(defn stylesheet [href]
  (first (h/html [:link {:href href :rel "stylesheet" :type "text/css"}])))

;; helper function that gives one script element
(defn script [src]
  (first (h/html [:script {:src src :type "text/javascript"}])))

;; snippet that gives us the complete contents of a fragmentary HTML file
(h/defsnippet home-body "public/html/home.tpl.html" [:div#main] [])

;; template that outputs a complete response
(h/deftemplate base-page
  "public/html/base.html"
  [{:keys [extra-css extra-js title] :as context}]
  [:title] (h/content title)
  [:head] (h/append (map stylesheet extra-css))
  [:#contents] (h/content (:content context))
  [:body] (h/append (map script extra-js)))

(defn volta-home [request]
   (base-page {:title "Project Volta"
              :content (home-body)
              :extra-css ["css/volta_home.css"]
              :extra-js ["js/volta_home.js"]}))
