(ns volta.middleware
  (:require [clojure.pprint :as p]))


(defn format-map
  "Returns a single string version of a single request or response.
   Skips any keys mentioned in the skip-keys sequence"
 [name request skip-keys]
 (let [divider (apply str (repeat 20 "-"))
       final-request (apply dissoc request skip-keys)]
    (with-out-str
      (println divider)
      (println (str name ": "))
      (p/pprint final-request)
      (println divider))))

(defn matches?
  "Tests an input URI string for any matches with any of a sequence
  of regular expressions."
  [uri regexps]
  (if (some #(re-find % uri) regexps)
    true
    false))

(defn wrap-spy
  "Causes the *complete* incoming and outgoing request maps to echoed to *out*.
   Gives terse output for any URI that matches regular expressions included
   in the terse-files sequence (e.g. #'\\.js'  #'\\.css'  #favicon\\.ico')"
  [handler spyname terse-patterns]
  (fn [{:keys [uri request-method] :as request}]
    (if (matches? uri terse-patterns)
      (let [response (handler request)]
        (println (str request-method  " \"" uri "\" >> " (:status response) "\n"))
        response)
      (let [title-in (str spyname ":\n Request for " request-method " \"" uri "\"")
              incoming (format-map title-in request [:body])]
          (println incoming)
          (let [title-out (str spyname ":\n Response to " request-method " \"" uri "\"")
                response (handler request)
                outgoing (format-map title-out response [:body])]
            (println outgoing)
            response))))) ; return response to next middleware in the series, if any

(defn ignore-trailing-slash
  "Modifies the request uri before calling the handler.
  Removes a single trailing slash from the end of the uri if present.
  Handles optional trailing slashes until Compojure's route matching syntax supports regex."
  [handler]
  (fn [request]
    (let [uri (:uri request)]
      (handler (assoc request :uri (if (and (not (= "/" uri))
                                            (.endsWith uri "/"))
                                     (subs uri 0 (dec (count uri)))
                                     uri))))))

(defn wrap-home
  "Workaround for the (very odd) tendency of the ring.defaults middleware to
  bounce all requests for the root '/' URI back as a zero-byte octet stream.
  Even more strangely, this behavior is only evident when we use AOT compilation
  and run from a jar. The problem does *not* occur when running via leiningen.
  Note that this is not a complete solution; it depends on there also being a
  Compojure route mapped to the '/home' URI. If you try to do a simple redirect
  at the routing level, the ring middleware bounces the response before the
  redirect is ever triggered. Hence this middleware, which should come before
  the ring defaults middleware. "
  [handler]
  (fn [request]
     (let [uri (:uri request)
           fixed-uri (if (= "/" uri) "/home" uri)]
       (handler (assoc request :uri fixed-uri)))))

