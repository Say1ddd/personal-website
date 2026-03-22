<script setup lang="ts">
defineProps<{
  fadeDirection: 'left' | 'right'
}>()

const overlayClassMap = {
  left: 'bg-linear-to-r',
  right: 'bg-linear-to-l',
}
</script>

<template>
  <div aria-hidden="true" relative class="opacity-25 events-none">
    <div p="y-1 x-2 sm:y-2 sm:x-3" class="indicator-content">
      <slot />
    </div>
    <div class="absolute-overlay from-transparent to-background from-25%" :class="overlayClassMap[fadeDirection]" />
  </div>
</template>

<style scoped>
.indicator-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>
