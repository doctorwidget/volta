(ns volta.routes
  (:require [ring.middleware.defaults :as d]
            [ring.util.response :as rr]
            [volta.db :as vdb]
            [volta.handlers :as h]
            [volta.middleware :as vm]
            [compojure.core :refer [ANY GET POST defroutes] :as cj]
            [compojure.route :as route]
            [cemerick.friend :as friend]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])))

(defroutes greek-routes
  (GET "/alpha" [] h/handler-alpha)
  (GET "/beta" [] h/handler-beta)
  (GET "/gamma" [] h/handler-gamma))

(defroutes session-routes
  (cj/context "/sessions" []
              (GET "/simple" [] h/session-page)
              (POST "/simple" [] h/add-todo-item)))

(defroutes auth-routes
  (GET "/login" request h/login-page)
  (GET "/logout" request
                 (friend/logout* (rr/redirect (str (:context request) "/"))))
  (GET "/user" request
       (friend/authenticated h/user-page))
  (GET "/admin" request
       (friend/authorize #{::vdb/admin} h/admin-page))
  (GET "/crud" request
       (friend/authorize #{::vdb/user} h/crud-page)))

(defroutes all-routes
  (cj/context "/greek" [] greek-routes)
  (cj/context "/colors" []
      (GET "/red" [] h/red-page)
      (GET "/blue" [] h/blue-page))
  session-routes
  auth-routes
  (ANY "/" request h/volta-home)
  (route/resources "/")
  (route/not-found "Not Found. WTF dude."))

(def volta-defaults
  (assoc-in d/site-defaults [:session :store] vdb/monger-store))

(def wrapped-routes
  (-> all-routes
      (vm/wrap-spy "Inner spy" [#"\.js" #"\.css" #"\favicon.ico"])
      (vm/ignore-trailing-slash)   
      (friend/authenticate
          {:allow-anon? true
           :login-uri "/login"
           :default-landing-uri "/"
           :unauthorized-handler h/unauthorized
           :credential-fn #(creds/bcrypt-credential-fn vdb/mem-users %)
           :workflows [(workflows/interactive-form)]
          })
      (d/wrap-defaults volta-defaults)
      (vm/wrap-spy "Outer spy" [#"\.js" #"\.css" #"\favicon.ico"])))

(def main #'wrapped-routes)

  
