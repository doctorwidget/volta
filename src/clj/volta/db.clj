(ns volta.db
  (:require [clj-time.core :as t]
            [monger.core :as m]
            [monger.db :as md]
            [monger.collection :as mc]
            [monger.joda-time :as mjt]
            [monger.operators :refer :all]
            [monger.ring.session-store :refer [session-store]]
            [cemerick.friend.credentials :as creds]
            [volta.env :as venv]
            [ring.middleware.session.store :refer :all])
  (:import org.bson.types.ObjectId))


;;--------------------------------------------
;; Top level database functions
;;---------------------------------------------

(def primary-db "volta")

(def session-coll "web_sessions")


; create the connection directly -- NOT AOT FRIENDLY
;(def conn (m/connect))

; specify one particular database
;(def db (m/get-db conn primary-db))


; creating the connection via a URI yields a map
; NOT AOT FRIENDLY!
;(def uri-connection (m/connect-via-uri (venv/volta-uri)))

;(def conn (:conn uri-connection))

;(def db (:db uri-connection))

(def conn (atom nil))

(def db (atom nil))

(def monger-store (atom nil))

(defn init []
  (let [connection-map (m/connect-via-uri (venv/volta-uri))]
    (reset! db (:db connection-map))
    (reset! conn (:conn connection-map))
    (reset! monger-store (session-store @db session-coll))))

;; A new implementation of ring.middleware.session.store/SessionStore
;; Instance of this record type will be suitable to be plugged in to
;; the ring-defaults configuration map under the :session-store key
(defrecord VoltaSessionStore []
  SessionStore
  (read-session [store key]
    (read-session @monger-store key))
  (write-session [store key data]
    (write-session @monger-store key data))
  (delete-session [store key]
    (delete-session @monger-store key)))



;;---------------------------------
;; Utility functions
;;---------------------------------

(defn oid
  "Generate one random ObjectId."
  []
  (ObjectId.))

(defn str->oid
  "Generate an ObjectId instance from a string input. Useful because HTTP
   forms will always have strings submitted, not ObjectId instances!"
  [input-string]
  (ObjectId. input-string))

(defn show-collections
  "Show all available collections. Intended for easily checking
  this in a REPL without needing to import anything but this namespace."
  []
  (md/get-collection-names @db))

(defn get-web-sessions
  "Get all current web-sessions as Clojure maps"
  []
  (mc/find-maps @db session-coll {}))


;;------------------------------------
;; An in-memory "database" of users
;;------------------------------------

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

(def user-coll "auth_users")

(defn db-users
  "Take proposed username as a string and look for that username in the database.
  Returns a map with the keys expected by friend if a match exists."
  [targetname]
  (if-let [user (mc/find-one-as-map @db user-coll {:username targetname})]
    (assoc user :roles (map #(keyword "volta.db" %) (:roles user)))))

(defn add-user!
  "Add one user to the database. Input should be in the form of a map with
  required :username and :password keys.

  The :role key defaults to an empty set. 

  The :hash key defaults to false; passwords are only hashed when it is true.
  "
  [{:keys [username password roles hash]
      :or {:hash false :roles #{}}}]
  (let [final-password (if hash
                         (creds/hash-bcrypt password)
                         password)] 
    (mc/insert @db user-coll {:_id (oid)
                             :username username
                             :password final-password
                             :roles roles})))

;;-------------------------------------------
;; Note-Related Functions
;;-------------------------------------------

(def note-coll "user_notes")

(defn new-note!
  "Add a new note to the database"
  [title contents uuid]
  (mc/insert @db note-coll {:_id (oid)
                           :title title
                           :contents contents
                           :owner uuid
                           :created (t/now)
                           :modified (t/now)}))

(defn all-notes-for-user
  "Get all of the notes associated with a single *user*, specified by the UUID
  of the *owner*. The input must be an *instance* of ObjectId, not a string."
  [uuid]
  (mc/find-maps @db note-coll {:owner uuid}))

(defn get-note-from-id
  "Get the single note with the given UUID. The UUID is that of the *note*.
  The input must be an *instance* of ObjectId, not a string."
  [uuid]
  (mc/find-one-as-map @db note-coll {:_id uuid}))


(defn update-note!
  "Update a note. We could also use mc/update-by-id here, but for now I prefer
  the more generalized (but more verbose) syntax."
  [uuid title contents]
  (mc/update @db note-coll
             {:_id uuid}
             {$set {:title title :contents contents :modified (t/now)}}
             {:multi false}))

(defn delete-note!
  "Delete a note. Uses the more-verbose mc/remove-by-id syntax, just to minimize
  the chances of accidentally deleting the whole collection. DOH!"
  [uuid]
  (mc/remove-by-id @db note-coll uuid))


;;------------------------------------
;; Admin Screen Functions
;;-------------------------------------

(defn collection-summaries
  "Get a vector of maps about each available collection in the database."
  []
  (mapv #(hash-map :name %  :count (mc/count @db %)) (show-collections)))

(defn purge-other-sessions
  "Purges all session other than the current session"
  [current-id]
  (let [selector {:_id {$ne current-id}}]
    (mc/remove @db session-coll selector)))



