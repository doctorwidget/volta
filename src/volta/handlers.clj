(ns volta.handlers
  (:require [ring.util.response :as rr]))

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

(defn volta-home
  "A minimalist home page"
  [request]
  (rr/response
   (str  "<HTML><BODY><H1>Project Volta</H1>"
         (str request)
         "</BODY></HTML>")))

(defn red-page
  [request]
  (rr/response
   (str "<HTML><BODY style='background-color:red'>Red</BODY></HTML>")))

(defn blue-page
  [request]
  (rr/response
   (str "<HTML><BODY style='background-color:blue'>Blue</BODY></HTML>")))
