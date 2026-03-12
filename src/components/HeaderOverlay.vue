<script setup lang="ts">
import { useInjectedScroll } from '~/composables/useInjectedScroll'

const { isOnTop, isOnBottom } = useInjectedScroll()

const route = useRoute()

interface HeaderItem {
  label: string
  href?: string
}

const headerContent: HeaderItem[][][] = [
  [
    [
      {
        label: 'Sajid Ikhlas',
      },
      {
        label: 'Web Developer',
      },
    ],
    [
      {
        label: 'Yogyakarta, Indonesia',
      },
      {
        label: 'hello@sikhlas.com',
        href: 'mailto:hello@sikhlas.com',
      },
    ],
    [
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Resume',
        href: '/resume',
      },
    ],
  ],
  [
    [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/say1ddd/',
      },
    ],
    [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sajid-ikhlas/',
      },
      {
        label: 'Github',
        href: 'https://www.github.com/say1ddd/',
      },
    ],
  ],
]

function isExternalUrl(url: string, includeMailtoUrl = false) {
  try {
    const parsed = new URL(url)
    if (includeMailtoUrl && parsed.protocol === 'mailto:')
      return true
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  }
  catch {
    return false
  }
}

function getHrefNumLabel(current: HeaderItem) {
  const valid = headerContent
    .flat(2)
    .filter(item => typeof item.href === 'string' && item.href.length > 0 && !item.href.toLowerCase().startsWith('mailto:'))

  const index = valid.findIndex(item => item === current)

  return index >= 0 ? index + 1 : undefined
}

const currentPath = computed(() => route.path)
const notTopBottom = computed(() => {
  return !isOnTop.value && !isOnBottom.value
})
</script>

<template>
  <header gap="1.5" transition="composite" duration="500" lg="flex flex-col translate-y-0 justify-end opacity-100" :class="!isOnBottom && `translate-y-40 opacity-0`">
    <div flex gap="4 lg:16" text="sm" class="justify-between md:items-end">
      <section v-for="(section, i) in headerContent" :key="i" transition="composite" duration="500" first="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-(x-8 y-4)" last="flex-(~ wrap) flex-col lg:flex-row items-start md:items-end justify-end gap-2 lg:gap-8" class="max-w-fit" :class="notTopBottom && `swipe-left`">
        <div v-for="(card, idx) in section" :key="idx" flex="~ col" w="40" gap="1.5">
          <template v-for="item in card" :key="item.label">
            <template v-if="item.href">
              <a v-if="isExternalUrl(item.href, true)" :href="item.href" target="_blank" flex gap="4" pointer-events="auto" class="smooth-transition group items-center hover:scale-x-110" :class="notTopBottom && `opacity-50 hover:opacity-100`">
                <span v-if="getHrefNumLabel(item)" aria-hidden="true" font="light" select="none" tabular-nums>{{ `0${getHrefNumLabel(item)}` }}</span>
                <h4 font="medium">
                  {{ item.label }}
                </h4>
                <span aria-hidden="true" block i="carbon-arrow-up-right" origin="top-left" transition="composite" duration="300" class="opacity-25 scale-75 -translate-x-full" group-hover="opacity-50 scale-100 translate-0" />
              </a>
              <RouterLink v-else :to="item.href" :data-active="currentPath === item.href" flex gap="4" pointer-events="auto" select="none" class="smooth-transition route-line items-center hover:scale-x-110" :class="notTopBottom && `to-top`">
                <span aria-hidden="true" font="light" select="none" tabular-nums>{{ `0${getHrefNumLabel(item)}` }}</span>
                <h4 font="medium">
                  {{ item.label }}
                </h4>
              </RouterLink>
            </template>
            <h4 v-else transition="opacity" :class="notTopBottom ? `opacity-0` : `delay-300 pointer-events-auto`">
              {{ item.label }}
            </h4>
          </template>
        </div>
      </section>
    </div>
  </header>
</template>

<style scoped>
.swipe-left:first-child {
  transform: translateX(calc(-10rem - 2rem));
}

.route-line[data-active='true']::after,
.route-line:hover::after {
  scale: 1;
}

.route-line::after {
  content: '';
  width: 100%;
  height: 1px;
  background-color: var(--color-foreground);
  transition: scale, var(--ease-io-circ), 0.8s;
  transform-origin: left;
  scale: 0;
  border-radius: 100%;
}

.smooth-transition {
  transition:
    scale var(--ease-o-back) 0.3s,
    translate var(--ease-io-quint) 0.5s;
  transform-origin: left;
}
/*
.swipe {
  transition: translate var(--ease-io-quint) 0.5s;
}

.swipe[data-scrolled='true'] {
  transition-delay: 0.5s;
}

 */

.to-top {
  translate: 0 calc(-100dvh + 6rem + 100%);
}
</style>
