(ns volta.routes
  (:require [ring.middleware.defaults :as d]
            [volta.db :as vdb]
            [volta.handlers :as h]
            [volta.middleware :as vm]
            [compojure.core :refer [ANY GET POST defroutes] :as cj]
            [compojure.route :as route]))

(defroutes greek-routes
  (GET "/alpha" [] h/handler-alpha)
  (GET "/beta" [] h/handler-beta)
  (GET "/gamma" [] h/handler-gamma))

(defroutes session-routes
  (cj/context "/sessions" []
              (GET "/simple" [] h/session-page)
              (POST "/simple" [] h/add-todo-item)))

(defroutes auth-routes
  (GET "/friend" request h/friend-page)
  (GET "/crud" request h/crud-page)
  (GET "/admin" request h/admin-page))

(defroutes all-routes
  (cj/context "/greek" [] greek-routes)
  (cj/context "/colors" []
      (GET "/red" [] h/red-page)
      (GET "/blue" [] h/blue-page))
  session-routes
  auth-routes
  (ANY "/" [] h/volta-home)
  (route/resources "/")
  (route/not-found "Not Found. WTF dude."))

(def volta-defaults
  (assoc-in d/site-defaults [:session :store] vdb/monger-store))

(def wrapped-routes
  (-> all-routes
      (vm/ignore-trailing-slash)
      (vm/wrap-spy "HTTP spy" [#"\.js" #"\.css" #"\favicon.ico"])
      (d/wrap-defaults volta-defaults)))

(def main #'wrapped-routes)

  
