<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
/**
const el = useTemplateRef('el')
const { x, y, isScrolling, arrivedState, directions, measure } = useScroll(el)
const { top: isOnTop, bottom: isOnBottom } = toRefs(arrivedState)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)
 */

const { t } = useI18n()

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
    href: 'https://www.linkedin.com/in/sajid-muhammad-ikhlas/',
  },
]
</script>

<template>
  <div class="relative" overflow="x-hidden y-scroll" h="full" snap="y mandatory">
    <section class="text-primary px-4 flex justify-between">
      <span>Home Page</span>
      <span>nothing to see here...</span>
    </section>
    <section class="section-divider gap-3 justify-center" p="4" flex="~ col" snap="always center" h="full">
      <div border="l-4 primary" class="pl-4">
        <h1 class="heading-1">
          {{ t('home.section_1') }}
        </h1>
      </div>
      <div class="text-right md:text-center">
        <button data-cy="about" p="y-2 x-3" class="text-primary font-bold tracking-widest bg-background w-fit" hover="bg-primary text-black" border="~ r-4 primary" @click="router.push('/about')">
          <span>ABOUT ME</span>
        </button>
      </div>
    </section>
    <section class="section-divider" snap="always center" h="full">
      <div>
        <h1>{{ t('home.section_2.title') }}</h1>
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
          <a href="https://github.com/say1ddd/personal-website/" target="_blank" class="underline">here</a>,
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
  background-image: url('/assets/patterns/diagonal-lines.svg');
  filter: invert();
  top: 0;
  left: 0;
  background-attachment: fixed;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
