import { languageController } from './languageController'

export function InitApp() {
  const language = languageController()

  return {
    language,
  }
}
