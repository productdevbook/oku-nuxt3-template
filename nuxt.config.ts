import {defineNuxtConfig} from "nuxt"
import presetIcons from "@unocss/preset-icons"

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
    // unocss plugin - https://github.com/unocss/unocss
    "@unocss/nuxt",
  ],
  build: {
    transpile: ["@headlessui/vue"],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: "inline-block",
        },
      }),
    ],
  },
  vite: {
    logLevel: "info",
  },
})
