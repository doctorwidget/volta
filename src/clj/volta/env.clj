(ns volta.env
  (:require [environ.core :refer [env]]))

(defn get-foo []
  (env :demo-foo))

(defn get-bar []
  (env :demo-bar))

(defn get-zug []
  (env :demo-zug))

(defn get-blort []
  (env :demo-blort))

(defn volta-uri []
  (env :mongolab-uri))
