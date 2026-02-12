<script setup lang="ts">
/**
const el = useTemplateRef('el')
const { x, y, isScrolling, arrivedState, directions, measure } = useScroll(el)
const { top: isOnTop, bottom: isOnBottom } = toRefs(arrivedState)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)
 */

const { t, tm } = useI18n()

useHead({
  title: () => t('button.home'),
})

const links = [
  {
    slug: 'instagram',
    href: 'https://www.instagram.com/say1ddd/',
  },
  {
    slug: 'linkedin',
    href: 'https://www.linkedin.com/in/sajid-ikhlas/',
  },
]

const works = [
  {
    label: 'SIM WEB',
    href: '/work/sim-web',
  },
  {
    label: 'Stage Two',
    href: '/work/stage-two',
  },
  {
    label: 'OG Tool',
    href: '/work/og-tool',
  },
]
</script>

<template>
  <div class="relative" overflow="x-hidden y-auto" h="full" snap="y mandatory">
    <section class="text-primary px-4 flex justify-between">
      <span>Home Page</span>
      <span>nothing to see here...</span>
    </section>
    <section class="section-divider gap-3 justify-center" p="4" flex="~ col" snap="always center" h="full">
      <div class="items-center justify-center" flex="~ 1" p="4">
        <div container flex="~ col" gap="4" border="l-4 primary" class="pl-4 container">
          <h1 v-if="tm('home.section_1')" class="heading-1">
            {{ t('home.section_1') }}
          </h1>
          <h1 v-else>
            Welcome to my personal website.
          </h1>
          <div flex="1" class="">
            <RouterLink to="/about" data-cy="about" p="y-2 x-3" class="text-primary font-bold tracking-widest bg-background w-fit select-none" hover="bg-primary text-black" border="~ r-4 primary">
              <span>ABOUT ME</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-divider text-right flex items-center justify-end" snap="always center" h="full">
      <div flex="~ 1 col">
        <h1>{{ t('home.section_2.title') }}</h1>
        <ul class="border">
          <li v-for="work in works" :key="work.href" class="font-extrabold uppercase from-transparent bg-linear-to-r hover:(text-black to-primary)">
            <RouterLink :to="work.href" block>
              <span class="text-5xl">{{ work.label }}</span>
            </RouterLink>
          </li>
        </ul>
        <h2>{{ t('home.section_2.subtitle') }}</h2>
      </div>
    </section>
    <section snap="always center" h="full">
      <h1>Let's connect!</h1>
      <ul>
        <li v-for="item in links" :key="item.slug">
          <a :href="item.href" target="_blank">{{ item.slug }}</a>
        </li>
      </ul>
      <footer>
        <div class="text-center">
          Source code can be found
          <a href="https://github.com/say1ddd/personal-website/" target="_blank" class="underline">
            here <span class="sr-only">on my Github</span>
          </a>,
          and is licensed under
          <a href="https://github.com/Say1ddd/personal-space/blob/main/LICENSE" target="_blank" class="underline">MIT</a>.
          Assets (such as words and images) are licensed under
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" class="underline">CC-BY-NC-SA 4.0</a>
        </div>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.section-divider {
  position: relative;
}

.section-divider::before {
  content: '';
  position: absolute;
  color: var(--color-background);
  background-color: var(--color-foreground);
  font-size: 0.75em;
  font-weight: 900;
  padding: 0 4px;
  height: 1rem;
  z-index: 10;
  top: 0;
  left: 0;
}

.section-divider::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1rem;
  mask-image: var(--image-diagonal-lines);
  background: var(--color-foreground);
  top: 0;
  left: 0;
}
</style>
