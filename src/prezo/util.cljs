(ns prezo.util)

(defn by-id [id]
  (.getElementById js/document id))