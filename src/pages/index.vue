<script setup lang="ts">
import useScrollbarWidth from '~/composables/useScrollbarWidth'
import { scrollbarWidthKey } from '~/keys/scroll'

const { t } = useI18n()

useHead({
  title: () => t('button.home'),
})

const el = useTemplateRef('scrollRef')
const scrollbarWidth = useScrollbarWidth(el)
// great article https://gusiol.medium.com/typing-vue-inject-with-object-destructuring-f5a2b6067319
const { setScrollbarWidth } = inject(scrollbarWidthKey, {
  scrollbarWidth: 0,
  setScrollbarWidth: () => undefined,
})

onMounted(() => setScrollbarWidth(scrollbarWidth.value))
</script>

<template>
  <div ref="scrollRef" class="relative" overflow="x-hidden y-auto" h="full" snap="y mandatory">
    <ScrollIndicator />
    <IndexFirstSection />
    <IndexSecondSection />
    <IndexThirdSection />
  </div>
</template>
