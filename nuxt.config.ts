export default defineNuxtConfig({
  srcDir: 'src',
  imports: {
    dirs: ['store'],
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@huntersofbook/plausible-nuxt',
    '@nuxtjs/partytown',
    'nuxt-icon',
    'pinceau/nuxt',
    '@nuxtjs/fontaine',
    'nuxt-headlessui',
  ],
  css: ['~/assets/css/fonts/font.css', '~/assets/css/tailwind.css'],

  build: {
    transpile: [
      /^@apollo\/client/,
      '@vue/apollo-composable',
      '@headlessui/vue',
      'leaflet-geoman'],
  },

  pinceau: {
    preflight: false,
  },

  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      { code: 'tr', file: 'tr.json' },
    ],
    defaultLocale: 'tr',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'tr',
      fallbackLocale: 'tr',
      availableLocales: ['en', 'tr'],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },

  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  ignore: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],

  vite: {
    logLevel: 'info',
    define: {
      'process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE': '1000000',
      'process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS': '1000000',
      '__DEV__': (process.env.mode === 'development').toString(),
    },
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
    viewer: false,
  },

  plausible: {
    init: {
      domain: 'localhost.com',
      apiHost: process.env.PLAUSIBLE,
      trackLocalhost: true,
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: true,
  },
})
