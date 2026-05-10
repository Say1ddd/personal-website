import type { I18nOptions } from 'vue-i18n'
import type { I18nAppInstance } from '~/main'
import type { MessageSchema } from '~/vue-i18n'
import { createI18n } from 'vue-i18n'

export const SUPPORT_LOCALES = ['en', 'id'] as const
export type SupportLocales = typeof SUPPORT_LOCALES[number]

export function getLocale(i18n: I18nAppInstance): string {
  return i18n.global.locale.value
}

export function setLocale(i18n: I18nAppInstance, locale: SupportLocales): void {
  i18n.global.locale.value = locale
}

// such pain in the ass to type
type SetupI18nOptions = Omit<I18nOptions<{ message: MessageSchema }, SupportLocales>, 'locale'> & {
  locale?: SupportLocales
}

export function setupI18n(
  options: SetupI18nOptions = {
    locale: 'en',
    legacy: false,
  },
) {
  const i18n = createI18n<
    { message: MessageSchema },
    SupportLocales,
    false
  >({
    legacy: false,
    ...options,
  })

  setI18nLanguage(i18n, options.locale ?? 'en')

  return i18n
}

export function setI18nLanguage(i18n: I18nAppInstance, locale: SupportLocales): void {
  setLocale(i18n, locale)
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  if (typeof document !== 'undefined') {
    document.querySelector('html')!.setAttribute('lang', locale)
  }
}

const getResourceMessages = (r: any) => r.default || r

export async function loadLocaleMessages(i18n: I18nAppInstance, locale: SupportLocales) {
  // load locale messages
  const messages = await import(`../locales/${locale}.json`).then(getResourceMessages)

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages)

  return nextTick()
}
