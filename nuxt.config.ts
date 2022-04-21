import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    buildModules: [
        // pinia plugin - https://pinia.esm.dev
        "@pinia/nuxt",
    ],
    build: {
        transpile: ['@heroicons/vue'],
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    vite: {
        logLevel: "info",
        optimizeDeps: {
            include: [
                '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', 'pinia', 'ufo'
            ]
        }
    }
});
