<script setup lang="ts">
const { isScrolling, isToBottom, isOnBottom } = useInjectedScroll()

const isScrollingDown = computed(() => isScrolling.value || isToBottom.value || isOnBottom.value)
</script>

<template>
  <div aria-hidden="true" fixed flex="~ items-end justify-end sm:justify-center" m="y-10 sm:y-20 md:y-24 lg:y-32 x-12" transition="composite duration-300" class="events-none inset-0" :class="isScrollingDown ? 'opacity-0 animate-paused' : 'opacity-75'">
    <div class="animate-bounce">
      <span select="none" text="sm md:base" font="medium jetbrains-mono">scroll down</span>
      <div m="x-auto" i="carbon-chevron-down" />
    </div>
  </div>
</template>
