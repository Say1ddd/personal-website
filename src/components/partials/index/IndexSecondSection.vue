<script setup lang="ts">
import { WORKS } from '~/constants'

const { t } = useI18n()

useHead({
  title: () => t('button.home'),
})
const visibilityTarget = useTemplateRef('sectionRef')
const isVisible = useElementVisibility(visibilityTarget, {
  threshold: 1 / 3,
})

// TODO: Replicate and improve from old portfolio style
</script>

<template>
  <section ref="sectionRef" text="right" transition="composite duration-1000 ease-out-expo" class="section-idx origin-top-left items-center" :class="!isVisible && `opacity-0 scale-x-50 events-none`">
    <div flex="~ 1 col" class="group/content works-section-wrapper">
      <div transition="composite" ease="out-expo" duration="1000" class="rotate-works">
        <h1>{{ t('home.section_2.title') }}</h1>
        <ul class="w-screen -translate-x-4" transition="composite" duration="300" ease="out-back">
          <li v-for="work in WORKS" :key="work.href" class="group list-works font-extrabold uppercase from-transparent bg-linear-to-r hover:(text-black to-primary)" gap="8" border="b foreground dashed">
            <RouterLink :to="work.href || '/not-found'" flex p="y-2" class="text-5xl items-center justify-end" gap="4" transition="composite" ease="out-expo" w="full">
              <h1 text="7xl" transition="composite" duration="500" ease="out-expo" class="group-hover:tracking-wider group-hover:-translate-x-1/10">
                todo
              </h1>
              <div class="i-carbon-condition-point" text="3xl" transition="composite" duration="300" ease="out-back" group-hover="rotate-90" />
            </RouterLink>
          </li>
        </ul>
        <h2>{{ t('home.section_2.subtitle') }}</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rotate-works {
  transform: rotateX(9deg) rotateY(-12deg);
}
</style>
