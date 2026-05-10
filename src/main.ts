import type { LocaleRouteParams, UserModule } from './types'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'

import { routes } from 'vue-router/auto-routes'
import { getLocale, loadLocaleMessages, setI18nLanguage, setupI18n, SUPPORT_LOCALES } from '~/i18n'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const i18n = setupI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
})

export type I18nAppInstance = typeof i18n

const instanceLocale = getLocale(i18n)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  async (ctx) => {
    const { app, router: contextRouter } = ctx
    // install all modules under `modules/`
    const modules = Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    // modules.forEach(i => i.install?.(ctx))
    // asynchronous
    for (const m of modules) {
      if (m.install)
        m.install(ctx)
    }
    app.use(i18n)
    await loadLocaleMessages(i18n, 'en')
    // ctx.app.use(Previewer)

    contextRouter.beforeEach(async (to) => {
      const { locale } = to.params as LocaleRouteParams

      // use locale if locale is not in SUPPORT_LOCALES
      if (!SUPPORT_LOCALES.includes(locale)) {
        return `/${instanceLocale}`
      }

      // load locale messages
      if (!i18n.global.availableLocales.includes(locale)) {
        await loadLocaleMessages(i18n, locale)
      }

      // set i18n language
      setI18nLanguage(i18n, locale)
    })
  },
)
