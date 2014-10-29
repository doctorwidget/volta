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
              (str "<li>" k ": " v "</li>")))
        "</UL></BODY></HTML>")))

