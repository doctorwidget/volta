(ns volta.handlers
  (:require [cemerick.friend :as friend]
            [ring.util.anti-forgery :as af]
            [ring.util.response :as rr]
            [net.cgrand.enlive-html :as h]
            [volta.db :as v]))

;;---------------------------------
;; Helper functions
;;---------------------------------

(defn stylesheet
  "Render one well-formed stylesheet element, given an HREF"
  [href]
  (first (h/html [:link {:href href :rel "stylesheet" :type "text/css"}])))

(defn script
  "Render one well-formed script element, given a SRC"
  [src]
  (first (h/html [:script {:src src :type "text/javascript"}])))

(defn js-call
  "Render a script block that performs one function call to a JavaScript
   namespace. Intended to kick off a page 'main()' method, but can be
   used to run any kind of initialization function. The argument to the
   function should be a two-item vector containing the namespace and the
   desired function to be called."
  [[namespace fun]]
  (first (h/html [:script (format "%s.%s()" namespace fun)])))

(defn simple-response
  "The ring.util.response helper leaves off the content-type, and some
   browsers force a file download instead of a page view for that. So
   we wrap ring.util.response/response with the minimal extra header."
  [blob]
  (assoc (rr/response blob) :headers {"Content-Type" "text/html"}))

(defn login-status
  "A helper function for returning a string about the current login status.
   Does not return a complete Ring response!"
  [request]
  (if-let [user (friend/identity request)]
    (let [authmap (friend/current-authentication user)
          username (:username authmap)
          roles (:roles authmap)]
      (format "Logged in as %s with these roles: %s" username roles))
    "Anonymous User"))

(defn auth-map
  "A helper function that gives us the authmap for a request, if any"
  [request]
  (if-let [user (friend/identity request)]
    (friend/current-authentication user)))


;;---------------------------------
;; Simple Handlers
;;
;; These return a complete response by via plain old string monging.
;;
;;---------------------------------

(defn unauthorized
  "Handler for requests that fail to pass authorization checks."
  [{:keys [uri] :as request}]
  (-> (simple-response (str "You are not authorized to view" uri))
      (rr/status 401)))

(defn handler-alpha
  "For running from the REPL as a simplest-possible example of a server. "
  [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello Volta!"})

(defn handler-beta
  "Another REPL example."
  [request]
  (simple-response
   (str "<HTML><BODY><UL>"
          (apply str (for [[k v] request]
              (str "<li>" k " >> " v "</li>")))
        "</UL></BODY></HTML>")))

(defn handler-gamma
  [request]
  (simple-response (str request)))

(defn red-page
  [request]
  (simple-response
   (str "<HTML><BODY style='background-color:red'>Red</BODY></HTML>")))

(defn blue-page
  [request]
  (simple-response
   (str "<HTML><BODY style='background-color:blue'>Blue</BODY></HTML>")))


;;---------------------------------
;; Enlive Handlers
;;
;; These all use Enlive to build up more-sophisticated responses.
;;
;;---------------------------------

;; template that outputs a complete response
(h/deftemplate base-page
  "public/html/base.html"
  [{:keys [extra-css extra-js js-calls title] :as context}]
  [:title] (h/content title)
  [:head] (h/append (map stylesheet extra-css))
  [:#contents] (h/content (:content context))
  [:body] (h/append (map script extra-js))
  [:body] (h/append (map js-call js-calls)))


;;---------------------------------------
;; Home (landing) page for entire site
;;---------------------------------------

;; snippet that gives us the complete contents of a fragmentary HTML file
(h/defsnippet home-body "public/html/home.tpl.html" [:div#main] [request]
  [:.loginStatus] (h/content (login-status request)))

(defn volta-home [request]
   (base-page {:title "Project Volta"
              :content (home-body request)
              :extra-css ["css/volta_home.css"]
              :extra-js ["js/volta_home.js"]}))

;; ------------------
;; Simple Sessions
;; ------------------
(h/defsnippet session-body
  "public/html/sessions_simple.tpl.html"
  [:div#main]
  [request] ; this time we take an actual argument!
  [:span#visitCount] (h/content (str (get-in request [:session :visit-count] 0)))
  [:ul#toDoItems :> :li] (h/clone-for [t (get-in request [:session :todos] [])]
                                      (h/content t))
  [:div#csrf] (h/html-content (af/anti-forgery-field)))

(defn session-page [request]
  (let [old-session (:session request)
        new-session (update-in old-session [:visit-count] (fnil inc 0))
        new-request (assoc request :session new-session)
        response-body (base-page {:title "Simple Sessions"
                                :content (session-body new-request)
                                  :extra-css ["../css/volta_sessions.css"]})]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body response-body
     :session new-session}))

(defn add-todo-item
  "Handler for POST requests that want to add a TODO item. Performs
  the update and then returns a HTTP 303, a code which I never even knew
  existed. You learn something new every day.
  Note!: The :params map has keys which have been converted to keywords.
  But the :form-params map retains the original string keys."
  [request]
  (let [items (get-in request [:session :todos] [])
        new-str (get-in request [:params :todo] :empty)
        new-items (if (= :empty new-str)
                    items
                    (conj items new-str))
        new-session (assoc (:session request) :todos new-items)]
    (assoc (rr/redirect-after-post "/sessions/simple")
      :session new-session)))


;;--------------------------
;; Login
;;-------------------------
(h/defsnippet login-body "public/html/login.tpl.html" [:div#main] [request]
  [:.loginStatus] (h/content (login-status request))
  [:#loginForm] (if (friend/identity request)
                  (fn [node] ((h/add-class "hidden") node))
                  identity)
  [:#logoutForm] (if (not (friend/identity request))
                   (fn [node] ((h/add-class "hidden") node))
                   identity)
  [:div#csrf] (h/html-content (af/anti-forgery-field)))

(defn login-page [request]
  (base-page {:title "Login"
              :content (login-body request)}))


;;--------------------------
;; User
;;--------------------------
(h/defsnippet user-body "public/html/user.tpl.html" [:div#main] [])

(defn user-page [request]
  (base-page {:title "User Home"
              :content (user-body)}))

;;--------------------------
;; CRUD
;;--------------------------
(h/defsnippet crud-body "public/html/crud.tpl.html" [:div#main] [request]
  [:.loginStatus] (h/content (-> request auth-map :username)))

(defn crud-page [request]
  (base-page {:title "CRUD Demo"
              :content (crud-body request)}))

(h/defsnippet crud-create-body "public/html/crud-create.tpl.html" [:div#main]
  [username status]
  [:.currentUser] (h/content username)
  [:div#csrf] (h/html-content (af/anti-forgery-field))
  [:.loginStatus] (h/content status))

(defn crud-create-page
  "Handles GET requests to create a new note"
  [request]
  (let [authmap (auth-map request)
        username (:username authmap)
        status (login-status request)
        contents (crud-create-body username status)]
    (base-page {:title "New Note"
                :content contents})))

(defn crud-create!
  "Handles POST requests to create a new note"
  [{{:keys [title contents]} :params :as request}]
  (let [authmap (auth-map request)
        username (:username authmap)
        uuid (:_id authmap)]  
    (println (format "New note titled %s (contents: %s) for %s (%s)"
                     title contents username uuid))
    (v/new-note! title contents uuid)
    (rr/redirect-after-post "/crud/list")))

(h/defsnippet crud-list-body "public/html/crud-list.tpl.html" [:div#main]
  [username notes status]
  [:.currentUser] (h/content username)
  [:.noteCount] (h/content (str (count notes)))
  [:.loginStatus] (h/content status)
  [:#allNotes :.oneNote]
  (h/clone-for
     [note notes]
     [:div.oneNote] (h/set-attr :oid (:_id note))
     [:div.oneNote :a.title] (h/content (:title note))
     [:div.oneNote :a.title]  (h/set-attr :href (str "/crud/" (:_id note) "/update"))
     [:div.oneNote :.created] (h/content (str "created: " (:created note "(?)")))
     [:div.oneNote :.modified] (h/content (str "modified: " (:modified note "(?)")))
     [:div.oneNote :.contents] (h/content (:contents note "(none)"))
     [:div.oneNote :a.delete] (h/content "X")
     [:div.oneNote :a.delete] (h/set-attr :href (str "/crud/" (:_id note) "/delete"))))   

(defn crud-list-page [request]
  (let [authmap (auth-map request)
        username (:username authmap)
        user-id (:_id authmap)
        notes (v/all-notes-for-user user-id)
        total (count notes)
        status (login-status request)
        contents (crud-list-body username notes status)] 
    (base-page {:title "Note List"
                :content contents})))


(h/defsnippet crud-update-body "public/html/crud-create.tpl.html" [:div#main]
  [username status note]
  [:.currentUser] (h/content username)
  [:div#csrf] (h/html-content (af/anti-forgery-field))
  [:h1 :span.verb] (h/content "Update")
  [:input.title] (h/set-attr :value (:title note "wtfnil"))
  ;; note: inputs need h/set-attr
  [:textarea.contents] (h/content (:contents note "wtfnil"))
  ;; but textareas need h/content!
  [[:input (h/attr= :type "submit")]] (h/set-attr :value "Update")
  [:.loginStatus] (h/content status))

(defn crud-update-page
  "Handles GET requests to update a particular note"
  [request id]
  (let [authmap (auth-map request)
        username (:username authmap)
        status (login-status request)
        note (v/get-note-from-id (v/str->oid id))
        contents (crud-update-body username status note)]
    (base-page {:title "Update Note"
                :content contents})))

(defn crud-update!
  "Handles POST requests to update a particular note."
  [{{:keys [title contents]} :params :as request} id]
  (let [authmap (auth-map request)
        username (:username authmap)
        user-id (:_id authmap)
        note-id (v/str->oid id)
        note (v/get-note-from-id note-id)
        owner-id (:owner note)]
    (if (= owner-id user-id)
      (do
        (println (format "Updating note %s for %s (%s)"
                         note-id username user-id))
        (v/update-note! note-id title contents)
        (rr/redirect-after-post "/crud/list"))
      {:status 401
       :headers {}
       :body "You can only update notes you own"})))


(h/defsnippet crud-delete-body "public/html/crud-delete.tpl.html" [:div#main]
  [status note]
  [:div#csrf] (h/html-content (af/anti-forgery-field))
  [:form.deleteForm] (h/set-attr "action" (str  "/crud/" (:_id note) "/delete"))
  [:span.title] (h/content (:title note "wtfnil"))
  [:.loginStatus] (h/content status))

(defn crud-delete-page
  "Handles GET requests to delete a note"
  [request id]
  (let [authmap (auth-map request)
        user-id (:_id authmap)
        status (login-status request)
        note-id (v/str->oid id)
        note (v/get-note-from-id note-id)
        owner-id (:owner note)
        contents (crud-delete-body status note)]
    (if (= owner-id user-id)
      (base-page {:title "Delete Note"
                  :content contents})
      {:status 401
       :headers {}
       :body "You can only delete notes you own, sorry."})))


(defn crud-delete!
  "Handles POST requests to delete a particular note."
  [{{:keys [title contents]} :params :as request} id]
  (let [authmap (auth-map request)
        user-id (:_id authmap)
        note-id (v/str->oid id)
        note (v/get-note-from-id note-id)
        owner-id (:owner note)]
    (if (= owner-id user-id)
      (do
        (v/delete-note! note-id)
        (rr/redirect-after-post "/crud/list"))
      {:status 401
       :headers {}
       :body "You can only delete notes you own. We mean it!"})))


;;-------------------------
;; Admin
;;-------------------------
(h/defsnippet admin-body "public/html/admin.tpl.html"
  [:div#main]
  [colls username]
  [:.username] (h/content username)
  [:div#csrf] (h/html-content (af/anti-forgery-field))
  [:.mongoPanel :.oneColl]
  (h/clone-for [c colls]
     [:.oneColl :.collName] (h/content (:name c))
     [:.oneColl :.collCount] (h/content (str (:count c)))))

(defn admin-page [request]
  (let [colls (v/collection-summaries)
        username (-> request auth-map :username)]
    (base-page {:title "Admin Demo"
                :content (admin-body colls username)
                :extra-css ["css/volta_admin.css"]})))

(defn clean-sessions!
  "Clean out all sessions other than the current session."
  [request]
  (v/purge-other-sessions (-> request :session :_id))
  (rr/redirect-after-post "/admin"))


;;---------------------------
;; ClojureScript Demo
;;---------------------------
(h/defsnippet cljs-demo-body "public/html/cljs-demo.tpl.html"
  [:div#main]
  [request]) ; note: no transformations!


(defn cljs-demo-page [request]
  (base-page {:title "ClojureScript Demo"
              :content (cljs-demo-body request)
              :extra-js ["/js/react.min.js"
                         "/js/volta.js"]
              :js-calls [["volta.cljs_demo" "init"]]}))
