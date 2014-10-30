(ns volta.routes
  (:require [volta.handlers :as h]
            [compojure.core :refer [GET ANY defroutes] :as cj]
            [compojure.route :as route]))

(defroutes greek-routes
  (GET "/alpha" [] h/handler-alpha)
  (GET "/beta" [] h/handler-beta))

(defroutes all-routes
  (cj/context "/greek" [] greek-routes)
  (cj/context "/colors" []
      (GET "/red" [] h/red-page)
      (GET "/blue" [] h/blue-page))
  (ANY "/" [] h/volta-home)
  (route/resources "/")
  (route/not-found "Not Found"))


(def main #'all-routes)

