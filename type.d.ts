import { IntlifyModuleOptions } from "@intlify/nuxt3";

import en from "./src/locales/en-US.json";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}

type MessageSchema = typeof en;

declare module "vue-i18n" {
  export interface DefineLocaleMessage extends MessageSchema {}
}
