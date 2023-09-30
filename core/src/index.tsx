import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App.tsx"

export function init(element: HTMLElement) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
