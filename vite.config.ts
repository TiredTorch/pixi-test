/// <reference types='vitest' />
import { defineConfig } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    root: __dirname,
    cacheDir: "./node_modules/.vite/pixi-test",
    server: {
        port: 4200,
        host: "localhost",
    },

    preview: {
        port: 4300,
        host: "localhost",
    },

    base: "/pixi-test",
    plugins: [react(), nxViteTsPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
        outDir: "./dist/pixi-test",
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },

    test: {
        watch: false,
        globals: true,
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

        reporters: ["default"],
        coverage: {
            reportsDirectory: "./coverage/pixi-test",
            provider: "v8",
        },
    },
});
