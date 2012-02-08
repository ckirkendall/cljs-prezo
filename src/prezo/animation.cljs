(ns prezo.animation
  (:require [enfocus.core :as ef]
            [goog.dom :as dom]
            [goog.positioning :as pos]
            [goog.math :as gmath])
  (:require-macros [enfocus.macros :as em]))


;;;;;;;;;;;;;;;;;;;; Animation Functions ;;;;;;;;;;;;;;;;;;



(defn pos-rel-anchor 
  "this is an example of a custom transform for enfocus"
  [anchor, relx, rely]
  (let [coord (gmath/Coordinate. relx, rely)]
    (ef/chainable-standard 
      (fn [node]
        (pos/positionAtAnchor anchor 0 node 0 coord)))))


(defn call-out [node txt {fsize :font-size [x y] :loc [w h] :size [fx fy] :font-offset :or {fsize "4.4em" [fx fy] [5 10]}}]
  (let [div1 (name (gensym "div"))
        div2 (name (gensym "div"))]
    (em/at js/document
           ["#content-pane"] (em/append 
                               (dom/htmlToDocumentFragment 
                                 (str "<div class='call-block' id='" div1 "' style='display: none; position: fixed;'></div>"
                                      "<div class='call-text' id='" div2 "' style='display: none; position: fixed;'>" txt "</div>")))
           [(str "#" div1)] (em/chain
                              (pos-rel-anchor node x y)  
                              (em/set-style :border "3px solid #ff0000")
                              (em/set-style :display "inline")
                              (em/resize w h 500))
           [(str "#" div2)]  (em/chain
                               (em/fade-out 1)
                               (pos-rel-anchor node (+ x fx) (+ y h fy))
                               (em/set-style :font-size fsize)
                               (em/delay 600 (em/set-style :display "inline"))
                               (em/fade-in 1000)))))

(defn scary-parens []
  (doseq [i (range 1 200)]
    (let [win-size (dom/getViewportSize)
          colors [ "aqua" "black" "blue" "fuchsia" "gray" "grey"
                  "green" "lime" "maroon" "navy" "olive" "purple"
                  "red" "silver" "teal" "white" "yellow"]
          paren-id (str "paren" i)
          color (nth colors (rand-int 17))
          fsize (str (rand 14) "em")
          width (rand-int (.-width win-size))
          height (rand-int (.-height win-size))
          dly  (rand-int 3000)]
      (em/at js/document 
             [".slide"] (em/append 
                          (dom/htmlToDocumentFragment 
                            (str "<div id='" paren-id "' style='display: none; position: fixed'>()<div>")))
             [(str "#" paren-id)] (em/do-> 
                                    (em/move width height)
                                    (em/set-style :font-size fsize)
                                    (em/set-style :color color)
                                    (em/delay dly (em/set-style :display "inline")))))))

