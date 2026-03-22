<script setup lang="ts">
interface Prop {
  isVisible: boolean
}

const props = defineProps<Prop>()
const { t } = useI18n()
</script>

<template>
  <div>
    <div aria-hidden="true" m="x-auto" class="wrap translate-y-1/2" sm="border-(l-2 dotted primary rounded-xl)">
      <div text="3xl sm:4xl md:5xl" i="carbon-quotes" />
    </div>
    <HeroBackgroundTag :is-visible="props.isVisible" />
    <HeroHeading />
    <div m="x-auto" class="wrap">
      <h2 text="lg sm:xl md:2xl lg:3xl" font="medium" leading="relaxed">
        {{ t('home.section_1.title') }}
      </h2>
    </div>
  </div>
</template>
