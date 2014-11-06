(ns volta.db
  (:require [monger.core :as m]
            [monger.db :as md]
            [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.ring.session-store :refer [session-store]]
            [cemerick.friend.credentials :as creds])
  (:import org.bson.types.ObjectId))

; create the connection
(def conn (m/connect))

; specify one particular database
(def db (m/get-db conn "volta"))

(def session-coll "web-sessions")

(defn oid
  "Generate one random ObjectId."
  []
  (ObjectId.))

;; This symbol will be an instance suitable for plugging into
;; the ring-defaults configuration map under the :session-store key
(def monger-store (session-store db session-coll))


;;---------------------------------
;; Utility functions
;;---------------------------------
                                 
(defn show-collections
  "Show all available collections. Intended for easily checking
  this in a REPL without needing to import anything but this namespace."
  []
  (md/get-collection-names db))

(defn get-web-sessions
  "Get all current web-sessions as Clojure maps"
  []
  (mc/find-maps db session-coll {}))



;;---------------------------------
;; An in-memory "database"
;;---------------------------------

(def mem-users {"admin" {:username "admin"
                         :password (creds/hash-bcrypt "adminpass")
                         :roles #{::admin}}
                "scott" {:username "scott"
                         :password (creds/hash-bcrypt "scottpass")
                         :roles #{::user}}})

(derive ::admin ::user)


;;-------------------------------------------
;; A real database of users, using MongoDB
;;-------------------------------------------

(def user-coll "auth-users")

(defn db-users
  "Take proposed username as a string and look for that username in the database.
  Returns a map with the keys expected by friend if a match exists."
  [targetname]
  (if-let [user (mc/find-one-as-map db user-coll {:username targetname})]
    (assoc user :roles (map #(keyword "volta.db" %) (:roles user)))))





;;-------------------------------------------
;; Note-Related Functions
;;-------------------------------------------

(def note-coll "user-notes")

(defn new-note!
  "Add a new note to the database"
  [title contents uuid]
  (mc/insert db note-coll {:_id (oid)
                           :title title
                           :contents contents
                           :owner uuid}))

(defn get-notes
  "Get all of the notes associated with a single user, specified by their UUID"
  [uuid]
  (mc/find-maps db note-coll {:owner uuid}))

