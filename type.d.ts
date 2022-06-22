import {IntlifyModuleOptions} from "@intlify/nuxt3"

declare module "@nuxt/schema" {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}
