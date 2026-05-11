import type { SupportLocales } from '~/i18n'
import { SUPPORT_LOCALES } from '~/i18n'

export function useLocale() {
  const { locale } = useI18n() // same as `useI18n({ useScope: 'global' })`

  const currentLocale = computed<SupportLocales>({
    get: () => locale.value as SupportLocales,
    set: (value) => {
      locale.value = value
    },
  })

  function toggleLocale() {
    const currentIndex = SUPPORT_LOCALES.indexOf(currentLocale.value)

    const nextIndex = (currentIndex + 1) % SUPPORT_LOCALES.length

    currentLocale.value = SUPPORT_LOCALES[nextIndex]
  }

  return {
    currentLocale,
    toggleLocale,
  }
}
