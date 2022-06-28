import { useI18n } from "vue-i18n";

export function languageController() {
  // composable
  const { locale } = useI18n();
  const localeUserSetting = useCookie("locale");

  // methods
  const readBrowserLanguage = (): string => {
    try {
      return window ? window.navigator.language : "en-US";
    } catch (error) {
      return "en-US";
    }
  };
  const readUserLocale = (): string =>
    localeUserSetting.value || readBrowserLanguage();

  const systemi18n = useState<string>("locale.i18n", () => readUserLocale());

  watch(systemi18n, (localeSetting) => {
    localeUserSetting.value = localeSetting;
    locale.value = localeSetting;
  });

  const init = () => {
    locale.value = systemi18n.value;
  };

  onMounted(() => init());

  return {
    systemi18n,
    init,
  };
}
