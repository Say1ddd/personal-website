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
    <div flex="~ 1 col lg:row" gap="y-2 md:y-8 x-4" class="mx-auto container" p="t-16 x-3">
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
              <li v-for="item in section.items" :key="item.title" class="group list-decoration">
                <div v-if="isSocialSection(section._label)" flex="~ col">
                  <ExternalIndicator />
                  <SocialLink
                    :title="rt(item.title)"
                    :subtitle="rt(item.subtitle)"
                    :href="getSocialLink(item.title)"
                    :icon-type="resolveT(item.title) !== 'linkedin' ? 'at' : 'link'"
                  />
                </div>
                <div v-else flex="~ col" class="gap-1">
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
                  <span v-else class="text-sm leading-relaxed tracking-wider opacity-80">
                    {{ rt(item.subtitle) }}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <AboutFooter />
    <BackgroundText>ABOUT ME</BackgroundText>
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
