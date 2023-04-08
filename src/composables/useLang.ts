import { useI18n } from 'vue-i18n'

export function useLang() {
  const { t } = useI18n()
  return {
    t,
  }
}
