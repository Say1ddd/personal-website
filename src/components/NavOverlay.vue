<script setup lang="ts">
import { useInjectedSidebar } from '~/composables/useInjectedSidebar'
import { useLocale } from '~/composables/useLocale'

const isDark = useDark()
const { t, locale } = useI18n()
const { toggleLocale } = useLocale()
const { isSidebarOpen, toggle: toggleSidebar } = useInjectedSidebar()
</script>

<template>
  <nav flex="~ justify-between" pointer-events="none">
    <slot name="left">
      <div />
    </slot>
    <slot name="right">
      <div class="tracking-wider flex gap-1 h-full relative">
        <div flex>
          <ToggleButton block class="p-1" :state="locale === 'en'" initial-label="EN" toggled-label="ID" @click="toggleLocale">
            <template #leading>
              <span aria-hidden="true" i="carbon-language" class="hidden sm:block" />
            </template>
          </ToggleButton>
          <ToggleButton block class="p-1 capitalize" :state="isDark" :label-width="6" @click="toggleDark()">
            <template #leading>
              <span aria-hidden="true" block i="carbon-sun dark:carbon-moon" />
            </template>
            <template #content>
              <Transition mode="out-in" name="slide-y">
                <span v-if="isDark" class="hidden sm:inline-block">{{ t('button.toggle_theme.dark') }}</span>
                <span v-else class="hidden sm:inline-block">{{ t('button.toggle_theme.light') }}</span>
              </Transition>
            </template>
          </ToggleButton>
        </div>
        <ToggleButton class="p-1" @click="toggleSidebar">
          <template #leading>
            <span inline-block :class="isSidebarOpen ? `i-carbon-close-large` : `i-carbon-menu`" />
            <span>Menu</span>
          </template>
        </ToggleButton>
      </div>
    </slot>
  </nav>
</template>
