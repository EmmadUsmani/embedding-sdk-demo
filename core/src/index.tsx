import { render } from "preact"

import { App } from "./App.tsx"

export function init(element: HTMLElement) {
  render(<App />, element)
}
