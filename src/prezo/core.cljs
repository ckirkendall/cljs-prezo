(ns prezo.core
  (:use [prezo.util :only [by-id]])
  (:require [enfocus.core :as ef]
            [goog.dom :as dom]
            [prezo.animation :as anim]
            [prezo.content :as con]
            [prezo.atom :as atm])
  (:require-macros [enfocus.macros :as em]))


;;;;;;;;;;;;;;; Initial Setup ;;;;;;;;;;;;;;;;;;;;
(declare slide1
         bold-claims
         change-slide!)

(em/defaction setup-pane [width height]
              ["#content-pane"] (em/chain
                                  (em/resize 5 height 500)
                                  (em/resize width :curheight 500)
                                  (em/content (slide1))
                                  #(em/at % [".slide"] (em/fade-in 1000))))

(em/defaction resize-pane [width height]
              ["#content-pane"] (em/resize width height 200))

(defn resize-content-pane []
  (let [size (dom/getViewportSize)
        width (- (.-width size) 40)
        height (- (.-height size) 80)]
    (resize-pane width height)))

  
(defn init-content-pane []
    (let [size (dom/getViewportSize)
          width (- (.-width size) 40)
          height (- (.-height size) 80)]
      (setup-pane width height)
      (em/at js/window (em/listen :resize resize-content-pane))))

(em/defaction start [] 
              ["#inner-circle"] (em/listen :click init-content-pane))

(defn enable-nav-keys []
  (em/at js/document (em/listen :keydown #(exec-action! (.-keyCode %)))))

(defn disable-nav-keys []
  (em/at js/document (em/remove-listeners :keydown)))

(set! (.-onload js/window) 
      (fn []
         (enable-nav-keys)
         (start)))


;;;;;;;;;;;;;;;;;;; Slides;;;;;;;;;;;;;;;;;;;;;;;


(em/deftemplate slide1 "slides/why-clojure.html" [])
(em/deftemplate slide2 "slides/what-clojure.html" [])
(em/deftemplate slide2-5 "slides/what-to-do.html" [])
(em/deftemplate slide3 "slides/why-clojurescript.html" [])
(em/deftemplate slide4 "slides/what-clojurescript.html" [])
(em/deftemplate slide5 "slides/clojure-syntax.html" [])
(em/deftemplate slide6 "slides/defining-functions.html" []) 
(em/deftemplate slide7 "slides/overloading.html" [])  
(em/deftemplate slide8 "slides/deconstruction.html" [])
(em/deftemplate slide9 "slides/assigning-vars.html" [])
(em/deftemplate slide10 "slides/js-interop.html" [])
(em/deftemplate slide11 "slides/js-namespaces.html" [])
(em/deftemplate slide12 "slides/cljs-namespaces.html" [])
(em/deftemplate slide13 "slides/macros.html" [])
(em/deftemplate slide14 "slides/what-are-we-missing.html" [])

(em/deftemplate slide14-5 "slides/what-should-I-build.html" [])
(em/deftemplate slide15 "slides/choosing-your-materials.html" [])

(em/deftemplate slide16 "slides/why-not-closure-lib.html" [])
(em/deftemplate slide17 "slides/why-closure-lib.html" [])
(em/deftemplate slide18 "slides/closure-naming.html" [])
(em/deftemplate slide19 "slides/closure-lib-info-1.html" [])
(em/deftemplate slide20 "slides/closure-lib-info-2.html" [])
(em/deftemplate slide21 "slides/closure-lib-info-3.html" [])
(em/deftemplate slide22 "slides/closure-third-party-tools.html" [])
(em/deftemplate slide23 "slides/closure-externs-foreign-libs.html" [])
(em/deftemplate slide24 "slides/atom-demo.html" [])
(em/deftemplate slide25 "slides/closure-extern-cost.html" [])
(em/deftemplate slide26 "slides/managing-upstream-deps.html" [])
(em/deftemplate slide27 "slides/challenges-1.html" [])
(em/deftemplate slide28 "slides/challenges-2.html" [])
(em/deftemplate slide29 "slides/challenges-3.html" [])
(em/deftemplate slide30 "slides/challenges-4.html" [])

(em/deftemplate slide31 "slides/parting-advice.html" [])
(em/deftemplate slide32 "slides/about-prezo.html" [])
(em/deftemplate slide33 "slides/question.html" [])

(def action-index (atom 0))

(def actions [#(transition-slide slide1)
              #(transition-slide slide2)
              #(do  
                 (reset-slide slide2)
                 (anim/call-out (by-id "clj-is") 
                                con/concurrency
                                {:font-size "1em" :loc [-10 183] :size [180 30]
                                 :font-offset [5 80]}))
              #(transition-slide slide2-5)
              #(do  
                 (reset-slide slide2-5)
                 (em/at (by-id "port-text") (em/set-style :display "")))
              #(do  
                 (reset-slide slide2-5)
                 (em/at js/document
                        ["#port-text"] (em/set-style :display "")
                        ["#huh-text"] (em/set-style :display "")))
              #(transition-slide slide3)
              #(transition-slide slide4)
              #(do  
                 (reset-slide slide4)
                 (anim/call-out (by-id "clj-is") 
                                "Bold Claims!" 
                                {:font-size "3em" :loc [-10 220] :size [300 100]}))
              #(transition-slide slide5)
              #(do
                 (reset-slide slide5)
                 (anim/call-out (by-id "syntax-el") 
                                con/syntax-text 
                                {:font-size "1em" :loc [-5 -5] :size [360 190]
                                 :font-offset [5 -400] }))
              #(transition-slide slide6)
              #(do
                 (reset-slide slide6)
                 (anim/call-out (by-id "inline-func") 
                                "You will see this a lot." 
                                {:font-size "2em" :loc [0 87] :size [180 30]}))
              #(transition-slide slide7)
              #(transition-slide slide8)
              #(do
                 (reset-slide slide8)
                 (em/at (by-id "js-decon") (em/content con/decon-with-defualt-js))
                 (anim/call-out (by-id "js-decon") "" 
                                {:loc [0 5] :size [370 200]})
                 (anim/call-out (by-id "decon") "" 
                                {:loc [0 287] :size [450 93]}))
              #(transition-slide slide9) 
              #(do
                 (reset-slide slide9)
                 (anim/call-out (by-id "global-var") "No one does this on purpose, right?"
                                {:loc [0 5] :size [200 30] 
                                 :font-offset [150 -60] :font-size "1.5em"}))
              #(transition-slide slide10)
              #(transition-slide slide11)
              #(transition-slide slide12)
              #(do
                 (reset-slide slide12)
                 (anim/call-out (by-id "ns-def") con/ns-use-text
                                {:loc [60 22] :size [365 56]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(do
                 (reset-slide slide12)
                 (anim/call-out (by-id "ns-def") con/ns-require-text
                                {:loc [60 75] :size [280 20]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(do
                 (reset-slide slide12)
                 (anim/call-out (by-id "ns-body") con/ns-proto-text
                                {:loc [5 75] :size [310 90]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(transition-slide slide13)
              #(do
                 (reset-slide slide13)
                 (anim/call-out (by-id "macro-text") con/macro-text 
                                {:loc [-4 -2] :size [110 30]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(transition-slide slide14)
              #(do  
                 (reset-slide slide14)
                 (em/at (by-id "missing-text") (em/set-style :display "")))
              #(transition-slide slide14-5)
              #(do  
                 (reset-slide slide14-5)
                 (em/at (by-id "java-code") (em/set-style :display "")))
              #(do  
                 (reset-slide slide14-5)
                 (em/at (by-id "clojure-code") (em/set-style :display "")))
              #(transition-slide slide15)
              #(transition-slide slide16)
              #(transition-slide slide17)
              #(transition-slide slide18)
              #(transition-slide slide19)
              #(transition-slide slide20)
              #(transition-slide slide21)
              #(transition-slide slide22)
              #(transition-slide slide23)
              #(do  
                 (reset-slide slide23)
                 (em/at (by-id "missing-text") (em/set-style :display "")))
              #(do
                 (transition-slide slide24)
                 (atm/user-view @atm/my-user)
                 (em/at js/document
                        ["#user-submit"](em/listen :click atm/persist-user-form)
                        ["input"] (em/do-> 
                                         (em/listen :focus disable-nav-keys)
                                         (em/listen :blur enable-nav-keys))))
              #(transition-slide slide25)
              #(transition-slide slide26)
              #(do  
                 (reset-slide slide26)
                 (em/at (by-id "missing-text") (em/set-style :display "")))
              #(do  
                 (reset-slide slide26)
                 (em/at (by-id "clj-is") (em/set-style :display "")))
              #(transition-slide slide27)
              #(do  
                 (reset-slide slide27)
                 (em/at (by-id "google-img") (em/set-style :display "")))
              #(do  
                 (reset-slide slide27)
                 (em/at (by-id "google-img") (em/set-style :display ""))
                 (em/at (by-id "missing-text") (em/set-style :display "")))
              #(transition-slide slide28)
              #(do  
                 (reset-slide slide28)
                 (em/at (by-id "rtfm-img") (em/set-style :display "")))
              #(do  
                 (reset-slide slide28)
                 (em/at (by-id "rtfm-x-img") (em/set-style :display ""))
                 (em/at (by-id "missing-text") (em/set-style :display "")))
              #(do  
                 (transition-slide slide29)
                 (let [size (dom/getViewportSize)]
                   (em/at (by-id "cockroach-bug")
                          (em/do->
                            (em/move -300 (+ (.-height size) 300))
                            (em/set-style :display "")
                            (em/delay 1000 (em/move (+(.-width size) 200) -300 1000))))))
              #(transition-slide slide30)
              #(transition-slide slide31)
              #(do  
                 (reset-slide slide31)
                 (em/at (by-id "missing-text1") (em/set-style :display "")))
              #(do  
                 (reset-slide slide31)
                 (em/at (by-id "missing-text1") (em/set-style :display ""))
                 (em/at (by-id "missing-text2") (em/set-style :display "")))
              #(do  
                 (reset-slide slide31)
                 (em/at (by-id "missing-text1") (em/set-style :display ""))
                 (em/at (by-id "missing-text2") (em/set-style :display ""))
                 (em/at (by-id "missing-text3") (em/set-style :display "")))
              #(do  
                 (reset-slide slide31)
                 (em/at (by-id "missing-text1") (em/set-style :display ""))
                 (em/at (by-id "missing-text2") (em/set-style :display ""))
                 (em/at (by-id "missing-text3") (em/set-style :display ""))
                 (em/at (by-id "missing-text4") (em/set-style :display "")))
              #(do  
                 (reset-slide slide31)
                 (em/at (by-id "missing-text1") (em/set-style :display ""))
                 (em/at (by-id "missing-text2") (em/set-style :display ""))
                 (em/at (by-id "missing-text3") (em/set-style :display ""))
                 (em/at (by-id "missing-text4") (em/set-style :display ""))
                 (em/at (by-id "missing-text5") (em/set-style :display "")))
              #(transition-slide slide32)
              #(transition-slide slide33)])

             

; p,b,left arrow, up arrow, backspace
(def back-key-codes #{80 66 37 38,8}) 

; s
(def start-key-codes #{83})


(defn exec-action! [keycode] 
  (cond 
    (contains? back-key-codes keycode) (swap! action-index #(mod (dec %) (count actions)))
    (contains? start-key-codes keycode) (reset! action-index 0)
    :else (swap! action-index #(mod (inc %) (count actions)))) ;forward
  (let [func (nth actions @action-index)]
    (func)))


(em/defaction transition-slide [init-func]
  [".slide"] (em/fade-out 2000)
  ["#content-pane"] (em/content (init-func))
  [".slide"] (em/fade-in 1000))

(em/defaction reset-slide [init-func]
 ["#content-pane"] (em/content (init-func))
 [".slide"] (em/set-style :opacity "1.0")
 [".slide"] (em/set-style :filter "alpha(opacity=100)"))


              

;(try
;  (throw (FormError. {:name "Name is invalid"}))
;  (catch FormError e 
;    (js/alert (get-field-error e :name))))


;(defn test [] (js/alert "wow"))
