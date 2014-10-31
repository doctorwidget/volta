(ns volta.routes
  (:require [ring.middleware.defaults :as d]
            [volta.handlers :as h]
            [volta.middleware :as vm]
            [compojure.core :refer [GET ANY defroutes] :as cj]
            [compojure.route :as route]))

(defroutes greek-routes
  (GET "/alpha" [] h/handler-alpha)
  (GET "/beta" [] h/handler-beta)
  (GET "/gamma" [] h/handler-gamma))

(defroutes all-routes
  (cj/context "/greek" [] greek-routes)
  (cj/context "/colors" []
      (GET "/red" [] h/red-page)
      (GET "/blue" [] h/blue-page))
  (ANY "/" [] h/volta-home)
  (route/resources "/")
  (route/not-found "Not Found"))

(def wrapped-routes
  (-> all-routes
      (vm/ignore-trailing-slash)
      (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])
      (d/wrap-defaults d/site-defaults)))

(def main #'wrapped-routes)

  
