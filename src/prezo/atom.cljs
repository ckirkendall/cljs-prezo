(ns prezo.atom
  (:use [prezo.util :only [by-id]])
  (:require [enfocus.core :as ef]
            [goog.dom :as dom])
  (:require-macros [enfocus.macros :as em]))

;;;;;;;;;;;;;;;;;; Protocols ;;;;;;;;;;;;;;;;;;;;;

(defprotocol FormException 
  (get-errors [this]))

(deftype FormError [errors] FormException
  (get-errors [this] errors))  

;;;;;;;;;;;;;; Model Setup ;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord UserModel [name email twitter])

(def my-user (atom (UserModel. "Creighton Kirkendall"
                               "ckirkendall@gmail.com"
                               "@crkirkendall")))

;;;;;;;;;;;;;;;;;; Validators ;;;;;;;;;;;;;;;;;;;;;;;

(defn user-validator [new-val]
 (let [check-map {:name (not (nil? (re-matches #"\S+.*" (:name new-val))))
                  :email (not (nil? (re-matches #".+@.+\..+" (:email new-val))))
                  :twitter (not (nil? (re-matches #"@\S+" (:twitter new-val))))}]
   (if (not-every? true? (vals check-map))
     (throw (FormError. check-map))
     new-val)))

(set-validator! my-user user-validator)

;;;;;;;;;;;;;;;;;;;; Watchers ;;;;;;;;;;;;;;;;;;;;;;;;;;;

(add-watch my-user :user-view (fn [key ref old-val new-val]
                                (user-view new-val)))

;;;;;;;;;;;;;; Templates & Views ;;;;;;;;;;;;;;;;;;;;;


(defn user-view [user-val]
 (em/at (by-id "user-div")
        [".name"] (em/content (:name user-val))
        [".email"] (em/content (:email user-val))
        [".twitter"] (em/content (:twitter user-val))))

;;;;;;;;;;;;;;; Actions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn persist-user-form []
  (try
    (swap! my-user merge
         (em/from js/document
                  :name ["#user-name"] (em/get-prop :value)
                  :email ["#user-email"] (em/get-prop :value)
                  :twitter ["#user-twitter"] (em/get-prop :value)))
    (em/at (by-id "user-form-errors") (em/content ""))
 (catch FormError e
    (let [errors (get-errors e)
          inv-flds (filter #(not (% errors)) (keys errors))]
      (em/at (by-id "user-form-errors") 
             (em/content
               (str "The following fields where invalid:"
                    (pr-str inv-flds))))))))