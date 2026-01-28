<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

const { t, tm, rt } = useI18n()

useHead({
  title: () => t('button.about'),
})

const linksMap = {
  instagram: 'https://www.instagram.com/say1ddd/',
  linkedin: 'https://www.linkedin.com/in/sajid-ikhlas/',
  github: 'https://www.github.com/say1ddd/',
}
type SocialKey = keyof typeof linksMap

function resolveT(value: string, lowercase: boolean = true) {
  if (!lowercase)
    return rt(value)
  return rt(value).toLowerCase()
}

function getSocialLink(value: string) {
  const key = resolveT(value)
  return key in linksMap
    ? linksMap[key as SocialKey]
    : undefined
}

function isSocialSection(key: string) {
  const normalized = resolveT(key)
  return normalized === 'social' || normalized === 'sosial'
}
</script>

<template>
  <div flex="~ col" overflow="y-auto x-hidden" class="justify-between relative from-background to-background/50 from-75% bg-linear-to-b">
    <div flex="~ col lg:row" gap="y-2 md:y-8 x-4" class="mx-auto container" p="t-16 x-3">
      <div text="xl xl:2xl" leading="relaxed sm:loose" class="tracking-wide flex-1 max-w-3xl">
        <h1>{{ t('about.title') }}</h1>
        <h1>{{ t('about.subtitle') }}</h1>
      </div>
      <div flex="~ 1 wrap xl:nowrap">
        <div
          v-for="section in tm('about.sections')"
          :key="section._label"
          class="flex-1"
        >
          <section flex="~ col" p="2.5" class="gap-2 sm:max-w-60">
            <h2 text="lg xl:xl" class="section-line font-bold tracking-wider">
              {{ rt(section._label) }}
            </h2>
            <ul gap="4 xl:6" flex="~ col">
              <li v-for="item in section.items" :key="item.title" flex="~ col" class="group list-decoration">
                <template v-if="isSocialSection(section._label)">
                  <div class="rounded h-full w-full shadow-foreground/5 left-0 top-0 absolute z-0 group-hover:shadow">
                    <div class="h-full w-full absolute">
                      <div class="flex justify-between overflow-x-hidden" m="t-1 r-1">
                        <div class="bg-primary opacity-0 w-screen transition duration-500 group-hover:(translate-x-full opacity-100)" />
                        <div class="p-0.5 bg-transparent flex items-center right-2 top-2 justify-center">
                          <div text="xl foreground group-hover:black" i="carbon-arrow-up-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a target="_blank" :href="getSocialLink(item.title)" class="relative" m="y--2 x--2" p="t-1 x-2 b-4">
                    <h3 class="leading-loose tracking-wider">
                      {{ rt(item.title) }}
                    </h3>
                    <div class="text-sm leading-tight opacity-80 flex gap-2 items-center">
                      <div :class="resolveT(item.title) !== 'linkedin' ? 'i-carbon-at' : 'i-carbon-link'" />
                      <h4 class="tracking-wider truncate">
                        {{ rt(item.subtitle) }}
                      </h4>
                    </div>
                  </a>
                </template>
                <template v-else>
                  <h3 class="leading-loose tracking-wider">
                    {{ rt(item.title) }}
                  </h3>
                  <ul v-if="item.subtitle.length > 0">
                    <li v-for="value in item.subtitle" :key="value">
                      <h4 class="text-sm leading-relaxed tracking-wider opacity-80 truncate">
                        {{ rt(value) }}
                      </h4>
                    </li>
                  </ul>
                  <h4
                    v-else
                    class="text-sm leading-relaxed tracking-wider opacity-80"
                  >
                    {{ rt(item.subtitle) }}
                  </h4>
                </template>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <div>
      <footer text="xs right" class="p-1">
        <div class="flex gap-1.5 items-center justify-end">
          <a class="underline select-none" href="https://github.com/Say1ddd/personal-website" target="_blank">
            <div class="flex gap-1 items-center">
              <span block i="carbon-logo-github" />
              <span>Source code</span>
            </div>
          </a>
          <span class="opacity-50 select-none">\\</span>
          <span>handcrafted with love &hearts;</span>
        </div>
        <span>2025-Present &copy; Sajid Ikhlas</span>
      </footer>
    </div>
    <span class="background-label font-fugazOne text-20 pointer-events-none truncate 2xl:text-80 lg:text-56 md:text-40 sm:text-36">
      ABOUT ME
    </span>
  </div>
</template>

<style scoped>
.section-line {
  display: flex;
  align-items: center;
  gap: 1rem;
}

section:hover .section-line::after {
  transform: rotateY(0deg);
}

.section-line::after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: var(--color-foreground);
  transition: transform 0.4s ease-out;
  transform: rotateY(90deg);
  transform-origin: left;
  pointer-events: none;
}

.list-decoration {
  position: relative;
}

.list-decoration:hover::before {
  -webkit-box-shadow: 0 0 0.5rem 1px var(--color-primary);
  -moz-box-shadow: 0 0 0.5rem 1px var(--color-primary);
  box-shadow: 0 0 0.5rem 1px var(--color-primary);
  background-color: var(--color-primary);
  opacity: 1;
}

.list-decoration::before {
  content: '';
  position: absolute;
  top: 0;
  left: -0.75rem;
  height: 100%;
  width: 1px;
  background: var(--color-foreground);
  opacity: 0.1;
  pointer-events: none;
}

.background-label {
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 25%;
  right: -2.5rem;
  mask-image: url('/assets/patterns/diagonal-lines.svg');
  opacity: 0.2;
}

/*
@supports (-webkit-text-stroke: thin var(--color-foreground)) {
  .up-next {
    -webkit-text-stroke: thin var(--color-foreground);
    color: transparent;
  }

  .up-next::selection {
    color: transparent;
    background-color: var(--color-primary);
  }
}
 */
</style>

<route lang="yaml">
meta:
layout: default
</route>
