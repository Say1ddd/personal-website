import type { SupportLocales } from '~/i18n'
import { SUPPORT_LOCALES } from '~/i18n'

export function useLocale() {
  const { locale: currentLocale } = useI18n() // same as `useI18n({ useScope: 'global' })`

  /**
   * select locale value for language select form
   *
   * If you use the vue-i18n composer `locale` property directly, it will be re-rendering component when this property is changed,
   * before dynamic import was used to asynchronously load and apply locale messages
   * To avoid this, use the another locale reactive value.
   */

  function toggleLocale() {
    const currentIndex = SUPPORT_LOCALES.indexOf(currentLocale.value as SupportLocales)

    const nextIndex = (currentIndex + 1) % SUPPORT_LOCALES.length

    currentLocale.value = SUPPORT_LOCALES[nextIndex]
  }

  return {
    currentLocale,
    toggleLocale,
  }
}
