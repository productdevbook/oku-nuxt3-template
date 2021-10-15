import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        // pinia plugin - https://pinia.esm.dev
        ['@pinia/nuxt']
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    }
})
