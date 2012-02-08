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
(em/deftemplate slide3 "slides/fear.html" [])
(em/deftemplate slide4 "slides/rainbows.html" [])
(em/deftemplate slide5 "slides/clojure-syntax.html" [])
(em/deftemplate slide6 "slides/defining-functions.html" []) 
(em/deftemplate slide7 "slides/overloading.html" [])  
(em/deftemplate slide8 "slides/deconstruction.html" [])
(em/deftemplate slide9 "slides/assigning-vars.html" [])
(em/deftemplate slide10 "slides/js-interop.html" [])
(em/deftemplate slide11 "slides/js-namespaces.html" [])
(em/deftemplate slide12 "slides/cljs-namespaces.html" [])
(em/deftemplate slide13 "slides/thats-nice.html" [])
(em/deftemplate slide14 "slides/example1-jquery-js.html" [])
(em/deftemplate slide15 "slides/example1-jquery-cljs.html" [])
(em/deftemplate slide16 "slides/example2-protocols.html" [])
(em/deftemplate slide17 "slides/atom1.html" [])
(em/deftemplate slide18 "slides/atom2.html" [])
(em/deftemplate slide19 "slides/atom-demo.html" [])
(em/deftemplate slide20 "slides/about-prezo.html" [])
(em/deftemplate slide21 "slides/question.html" [])

(def action-index (atom 0))

(def actions [#(transition-slide slide1)
              #(transition-slide slide2)
              #(do
                 (reset-slide slide2)
                 (anim/call-out (by-id "clj-is") 
                                "Bold Claims!" 
                                {:font-size "3em" :loc [-10 220] :size [300 100]}))
              #(transition-slide slide3)
              #(do
                 (reset-slide slide3)
                 (anim/scary-parens))
              ;#(transition-slide slide4)
              #(transition-slide slide5)
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
              #(transition-slide slide14)
              #(do
                 (reset-slide slide14)
                 (anim/call-out (by-id "js-plugin-def") con/ex1-js-text
                                {:loc [30 20] :size [310 90]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(transition-slide slide15)
              #(do
                 (reset-slide slide15)
                 (anim/call-out (by-id "cljs-plugin-def") con/ex1-cljs-func-text
                                {:loc [10 38] :size [420 50]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(do
                 (reset-slide slide15)
                 (anim/call-out (by-id "cljs-plugin-def") con/ex1-cljs-def-text
                                {:loc [120 38] :size [320 20]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(do
                 (reset-slide slide15)
                 (anim/call-out (by-id "cljs-plugin-call") con/ex1-cljs-macro-text
                                {:loc [7 7] :size [275 60]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(transition-slide slide16)
              #(do
                 (reset-slide slide16)
                 (anim/call-out (by-id "cljs-proto-def") con/ex2-proto-def-text
                                {:loc [7 7] :size [580 50]  
                                 :font-offset [5 5] :font-size "1em"}))
              #(do
                 (reset-slide slide16)
                 (anim/call-out (by-id "cljs-proto-call") con/ex2-proto-ep-text
                                {:loc [7 7] :size [440 190]  
                                 :font-offset [455 -190] :font-size "1em"}))
              #(do
                 (reset-slide slide16)
                 (anim/call-out (by-id "cljs-proto-call") con/ex2-proto-et-text
                                {:loc [7 200] :size [400 50]  
                                 :font-offset [415 -200] :font-size "1em"}))
              #(transition-slide slide17)
              #(do
                 (reset-slide slide17)
                 (anim/call-out (by-id "def-atom") con/def-atom-text
                                {:loc [5 5] :size [350 30]  
                                 :font-offset [5 5] :font-size "1em"}))
               #(do
                 (reset-slide slide17)
                 (anim/call-out (by-id "val-atom") con/val-atom-text
                                {:loc [5 5] :size [600 30]  
                                 :font-offset [5 5] :font-size "1em"}))
                #(do
                 (reset-slide slide17)
                 (anim/call-out (by-id "watch-atom") con/watch-atom-text
                                {:loc [5 5] :size [650 30]  
                                 :font-offset [5 -120] :font-size "1em"}))
              #(transition-slide slide18)
              #(do
                 (transition-slide slide19)
                 (atm/user-view @atm/my-user)
                 (em/at js/document
                        ["#user-submit"](em/listen :click atm/persist-user-form)
                        ["input"] (em/do-> 
                                         (em/listen :focus disable-nav-keys)
                                         (em/listen :blur enable-nav-keys))))
              #(transition-slide slide20)
              #(transition-slide slide21)])

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
 [".slide"] (em/set-style :filter "alpha(opacity=0)"))


              

;(try
;  (throw (FormError. {:name "Name is invalid"}))
;  (catch FormError e 
;    (js/alert (get-field-error e :name))))


;(defn test [] (js/alert "wow"))
