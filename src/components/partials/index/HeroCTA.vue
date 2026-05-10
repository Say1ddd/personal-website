<script setup lang="ts">
import { useLocale } from '~/composables/useLocale'

interface Prop {
  isVisible?: boolean
}
const { isVisible = false } = defineProps<Prop>()

const { currentLocale } = useLocale()
const { t } = useI18n()
const ctaClassName = 'w-full scale-105 sm:w-sm'
</script>

<template>
  <div border="~ x-none dashed foreground/25">
    <div transition="composite" duration="2000" m="x-auto" class="wrap" :class="isVisible && `skew-x-10`">
      <div flex="~ col sm:row" gap="2 sm:4" transition="composite" duration="1000" ease="out-expo" :class="!isVisible && `-translate-x-1/5`">
        <HeroButtonIndicator fade-direction="right" class="hidden sm:block">
          <div i="carbon-chevron-right" />
        </HeroButtonIndicator>
        <LinkCTA :to="{ name: 'about', params: { locale: currentLocale } }" :label="t('button.about')" color="primary" class="uppercase origin-right" :class="ctaClassName" />
        <LinkCTA :to="{ name: 'resume', params: { locale: currentLocale } }" :label="t('button.resume')" color="secondary" class="uppercase origin-left" :class="ctaClassName" />
        <HeroButtonIndicator fade-direction="left" class="hidden sm:block">
          <div v-for="i in 5" :key="i" i="carbon-chevron-right" />
        </HeroButtonIndicator>
      </div>
    </div>
  </div>
</template>
