<script setup lang="ts">
import { scrollbarWidthKey } from '~/keys/scroll.js'

const slots = useSlots()

const { scrollbarWidth } = inject(scrollbarWidthKey, {
  scrollbarWidth: 0,
  setScrollbarWidth: () => undefined,
})

const returnScrollbarValue = computed(() => {
  const width = unref(scrollbarWidth)
  if (width && width <= 32)
    return width
  return 16
})

const pseudoElClassOnAtt = computed(() => {
  const map = {
    before: 'before:(block w-[--scrollbar-width-minus-px])',
    after: 'after:(block w-[--scrollbar-width-minus-px])',
  }
  if (!slots.leading && !slots.trailing) {
    return `${map.before} ${map.after}`
  }
  return ''
})

const pseudoElClassMap = {
  before: `before:(max-w-8 first:(border-(~ t-none r-none l-none)) last:(border-(~ r-none b-none l-none)))`,
  after: 'after:(max-w-8 first:(border-(~ t-none r-none l-none)) last:border-(~ r-none b-none l-none))',
  child: '*:border *:first:border-t-none *:last:border-y-none *:border-dashed *:flex-1',
}
</script>

<template>
  <div
    aria-hidden="true"
    :class="`divider flex h-[--scrollbar-width] ${pseudoElClassMap.child} ${pseudoElClassMap.before} ${pseudoElClassMap.after} ${pseudoElClassOnAtt}`"
    :style="{
      '--scrollbar-width-minus-px': `${returnScrollbarValue - 1}px`,
      '--scrollbar-width': `${returnScrollbarValue}px`,
    }"
    :data-leading="!!$slots.leading"
    :data-trailing="!!$slots.trailing"
  >
    <slot name="leading" />
    <slot>
      <div aria-hidden="true" />
    </slot>
    <slot name="trailing" />
  </div>
</template>

<style scoped>
.divider[data-leading='false']::before,
.divider[data-trailing='false']::after {
  content: '';
}
</style>
