export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en-US',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  tr: {
    name: 'Turkce',
    iso: 'tr-TR',
    flag: 'i-twemoji-flag-turkey',
  },
}
