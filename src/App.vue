<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import type { LocaleRouteParams } from '~/types'
import { useLocale } from '~/composables/useLocale'

useHead({
  title: 'Sikhlas',
  meta: [
    {
      name: 'description',
      content: 'Content',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const router = useRouter()
const { currentLocale } = useLocale()

// sync to switch locale from router locale path
watch(router.currentRoute, (route) => {
  const { locale: localeParam } = route.params as LocaleRouteParams
  currentLocale.value = localeParam
})

/**
 * when change the locale, go to locale route
 *
 * when the changes are detected, load the locale message and set the language via vue-router navigation guard.
 * change the vue-i18n locale too.
 */
watch(currentLocale, (val) => {
  router.push(
    router.currentRoute.value.fullPath.replace(
      /^\/[^/]+/,
      `/${val}`,
    ),
  )
})
</script>

<template>
  <RouterView />
</template>
