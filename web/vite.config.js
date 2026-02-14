import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["jsnes"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "global-builtin",
          "color-functions",
          "if-function",
          "abs-percent",
          "function-units",
        ],
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      // Watch the core jsnes source for changes
      ignored: ["!**/node_modules/jsnes/**"],
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.js"],
  },
});
