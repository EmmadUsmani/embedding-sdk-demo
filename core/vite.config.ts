import { resolve } from "path"
import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
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
  plugins: [dts(), preact()],
})
