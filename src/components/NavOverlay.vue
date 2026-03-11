<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const isDark = useDark()
const { t, locale } = useI18n()

async function toggleLocale() {
  const newLocale = availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav flex pointer-events="none" class="justify-between">
    <slot name="left">
      <div />
    </slot>
    <slot name="right">
      <div class="tracking-wider flex h-full w-30 items-center relative md:w-80">
        <ToggleButton class="flex-1 pointer-events-auto hover:bg-primary/10" :state="locale === 'en'" truthy-label="ENG" falsy-label="IDN" @click="toggleLocale">
          <span aria-hidden="true" i="carbon-language" block />
          <span class="text-sm truncate sr-only md:not-sr-only">{{ t('button.toggle_lang') }}</span>
        </ToggleButton>
        <ToggleButton class="flex-1 pointer-events-auto hover:bg-primary/10" :state="isDark" :truthy-label="t('button.toggle_theme.dark')" :falsy-label="t('button.toggle_theme.light')" @click="toggleDark()">
          <span aria-hidden="true" block i="carbon-sun dark:carbon-moon" />
          <span class="text-sm truncate sr-only md:not-sr-only">{{ t('button.toggle_theme._label') }}</span>
        </ToggleButton>
      </div>
    </slot>
  </nav>
</template>
