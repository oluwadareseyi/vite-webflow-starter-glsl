import glsl from "vite-plugin-glsl";

export default {
  plugins: [glsl()],
  root: "src",
  server: {
    cors: "*",
    hmr: {},
  },
  build: {
    minify: true,
    outDir: "../src/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "/js/index.js",
      output: {
        format: "umd",
        entryFileNames: "index.js",
        compact: true,
      },
    },
  },
  envDir: "../",
};
