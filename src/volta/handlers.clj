(ns volta.handlers
  (:require [ring.util.anti-forgery :as af]
            [ring.util.response :as rr]
            [net.cgrand.enlive-html :as h]))

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
              (str "<li>" k " >> " v "</li>")))
        "</UL></BODY></HTML>")))

(defn handler-gamma
  [request]
  (rr/response (str request)))

(defn red-page
  [request]
  (rr/response
   (str "<HTML><BODY style='background-color:red'>Red</BODY></HTML>")))

(defn blue-page
  [request]
  (rr/response
   (str "<HTML><BODY style='background-color:blue'>Blue</BODY></HTML>")))


;; helper function that yields one single stylesheet element
(defn stylesheet [href]
  (first (h/html [:link {:href href :rel "stylesheet" :type "text/css"}])))

;; helper function that gives one script element
(defn script [src]
  (first (h/html [:script {:src src :type "text/javascript"}])))

;; snippet that gives us the complete contents of a fragmentary HTML file
(h/defsnippet home-body "public/html/home.tpl.html" [:div#main] [])

;; template that outputs a complete response
(h/deftemplate base-page
  "public/html/base.html"
  [{:keys [extra-css extra-js title] :as context}]
  [:title] (h/content title)
  [:head] (h/append (map stylesheet extra-css))
  [:#contents] (h/content (:content context))
  [:body] (h/append (map script extra-js)))

(defn volta-home [request]
   (base-page {:title "Project Volta"
              :content (home-body)
              :extra-css ["css/volta_home.css"]
               :extra-js ["js/volta_home.js"]}))


;; view for session-simple page
(h/defsnippet session-body
  "public/html/sessions_simple.tpl.html"
  [:div#main]
  [request] ; this time we take an actual argument!
  [:span#visitCount] (h/content (str (get-in request [:session :visit-count] 0)))
  [:ul#toDoItems :> :li] (h/clone-for [t (get-in request [:session :todos] [])]
                                      (h/content t))
  [:div#csrf] (h/html-content (af/anti-forgery-field)))

(defn sessions-simple [request]
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

