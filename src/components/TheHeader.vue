<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const route = useRoute()
const router = useRouter()
const currentPath = computed(() => route.path)
const isDark = useDark()
const { t, locale } = useI18n()

async function toggleLocale() {
  const newLocale = availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

const fps = useFps()

const isSidebarOpen = ref(false)

provide('sidebar-open', isSidebarOpen)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = useDebounceFn(() => {
  isSidebarOpen.value = false
}, 400)

function navigateTo(href: string) {
  if (currentPath.value !== href) {
    router.push(href)
    closeSidebar()
  }
  else {
    toggleSidebar()
  }
}

const navigations = [
  {
    i18n: 'button.home',
    href: '/',
  },
  {
    i18n: 'button.about',
    href: '/about',
  },
  {
    i18n: 'button.resume',
    href: '/resume',
  },
]

const works = [
  {
    label: 'SIM WEB',
    href: '/works/sim-web',
  },
  {
    label: 'Stage Two',
    href: '/works/stage-two',
  },
  {
    label: 'OG Tool',
    href: '/works/og-tool',
  },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/say1ddd/',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sajid-ikhlas/',
  },
  {
    label: 'Github',
    href: 'https://github.com/Say1ddd/',
  },
]

// TODO: fix horizontal scrolling on mobile breakpoint
</script>

<template>
  <header class="font-jetBMono px-4 bg-transparent flex h-10 w-full pointer-events-none items-center top-4 justify-between absolute z-50">
    <div class="font-(manrope black) text-4xl tracking-widest select-none relative z-30">
      FPS {{ fps }}
    </div>
    <div class="underline flex h-full w-30 items-center relative md:w-80">
      <ToggleButton class="flex-1 pointer-events-auto hover:bg-primary/10" :state="locale === 'en'" truthy-label="ENG" falsy-label="IDN" @click="toggleLocale">
        <span aria-hidden="true" i="carbon-language" block />
        <span class="text-sm font-medium truncate sr-only md:not-sr-only">{{ t('button.toggle_lang') }}</span>
      </ToggleButton>
      <ToggleButton class="flex-1 hover:bg-primary/10" :state="isDark" :truthy-label="t('button.toggle_theme.dark')" :falsy-label="t('button.toggle_theme.light')" @click="toggleDark()">
        <span aria-hidden="true" block i="carbon-sun dark:carbon-moon" />
        <span class="text-sm font-medium truncate sr-only md:not-sr-only">{{ t('button.toggle_theme._label') }}</span>
      </ToggleButton>
      <button flex="~ 1" class="text-foreground bg-foreground/20 h-full items-center justify-center relative z-30 md:hidden" @click="toggleSidebar">
        <span sr-only>Menu</span>
        <span aria-hidden="true" i="carbon-menu" block />
      </button>
    </div>
  </header>
  <Transition name="slide-x" mode="out-in">
    <div v-if="isSidebarOpen" class="sidebar bg-background/50 flex flex-col left-0 top-0 justify-center absolute z-20 overflow-hidden backdrop-blur-lg">
      <div class="wrapper mb-4 mt-14 border-b-4 border-b-primary flex-1">
        <div class="flex flex-col h-full">
          <ul class="font-jetBMono font-black text-right flex-1">
            <li flex="~ col" class="gap-2">
              <span class="font-light w-fit" border="l-4 primary" bg-background p="y-1 x-2">navigation</span>
              <ul>
                <li
                  v-for="nav in navigations" :key="nav.href" class="py-2 flex gap-2 select-none items-center justify-end bg-linear-to-r" :class="currentPath === nav.href ? `from-transparent to-primary text-black` : `from-transparent to-background/20`"
                  @click="navigateTo(nav.href)"
                >
                  <div v-if="currentPath === nav.href" class="text-xl" i="carbon-triangle-right-solid" />
                  <span class="text-5xl tracking-wider uppercase">
                    {{ t(nav.i18n) }}
                  </span>
                </li>
              </ul>
            </li>
            <li flex="~ col" class="gap-2">
              <span class="font-light w-fit" border="l-4 primary" bg-background p="y-1 x-2">featured works</span>
              <ul>
                <li
                  v-for="work in works" :key="work.href"
                  class="py-2 border-b border-dashed flex gap-2 select-none items-center justify-end bg-linear-to-r last:border-none"
                  :class="currentPath === work.href ? `from-transparent to-primary text-black` : `from-transparent to-background/20`"
                  @click="navigateTo(work.href)"
                >
                  <div v-if="currentPath === work.href" class="text-xl" i="carbon-triangle-right-solid" />
                  <span class="text-5xl tracking-wider uppercase">
                    {{ work.label }}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <div flex="~ col" class="asterisk tracking-wide p-3 gap-8">
              <div class="flex gap-3 justify-between">
                <div class="heading-4">
                  <h4>
                    Sajid Ikhlas
                  </h4>
                  <h4>
                    Yogyakarta, Indonesia
                  </h4>
                </div>
                <ul class="text-right">
                  <li v-for="social in socials" :key="social.href">
                    <a :href="social.href" target="_blank" class="inline-flex gap-1 items-center">
                      <span>{{ social.label }}</span>
                      <div i="carbon-arrow-up-right" />
                    </a>
                  </li>
                </ul>
              </div>
              <div flex="~ col" class="gap-3">
                <a href="https://github.com/Say1ddd/personal-space/" target="_blank" p="y-2 x-3" class="text-sm bg-foreground/20 inline-flex gap-2 w-fit items-center">
                  <div i="carbon-logo-github" />
                  <span>Source code</span>
                </a>
                <div class="text-xs inline-flex flex-col *:p-0.5">
                  <a href="https://github.com/Say1ddd/personal-space/blob/main/LICENSE" target="_blank">
                    {{ t('footer.copy.mit') }}
                    <span class="underline">MIT</span>
                  </a>
                  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
                    {{ t('footer.copy.cc') }}
                    <span class="underline">CC-BY-NC-SA 4.0</span>
                  </a>
                </div>
                <div class="text-xs leading-loose">
                  2025-Present &copy; Sajid Ikhlas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.sidebar {
  width: calc(100vw - 1rem);
  height: 100dvh;
}
.wrapper {
  transform: rotateX(-12deg) rotateY(12deg);
  transform-style: preserve-3d;
}

.asterisk {
  position: relative;
}

.asterisk::before {
  content: '*';
  position: absolute;
  font-size: 12rem;
  top: 0;
  left: 0;
  translate: 0.5rem;
  rotate: 12deg;
  color: var(--color-primary);
  opacity: 0.3;
}
</style>
