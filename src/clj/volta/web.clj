(ns volta.web
  (:require [volta.db :as db]
            [volta.routes :as v]
            [environ.core :refer [env]]
            [ring.adapter.jetty :as jetty]))


(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (db/init)
    (jetty/run-jetty v/main {:port port :join? false})))
