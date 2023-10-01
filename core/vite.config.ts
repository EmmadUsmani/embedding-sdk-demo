import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "core",
      formats: ["es"],
      fileName: "core",
    },
  },
  plugins: [dts(), react()],
})
