<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { useInjectedScroll } from '~/composables/useInjectedScroll'

const { isOnTop, isOnBottom } = useInjectedScroll()
const notTopBottom = computed(() => {
  return !isOnTop.value && !isOnBottom.value
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.lg

const onLgBreakpoint = computed(() => {
  if (!isLg.value) {
    return !isOnBottom.value
  }
  else {
    return notTopBottom.value
  }
})
</script>

<template>
  <RouterLink to="/" flex gap="12" pointer-events="auto" select="none" class="swipe" :class="onLgBreakpoint ? `scale-80` : `to-bottom`">
    <h1 :data-scrolled="onLgBreakpoint" aria-label="SIkhlas" aria-description="Sajid Ikhlas Personal Website Title Logo" truncate tracking="wider" font="extralight" text="5xl nowrap" select="none" class="title">
      <span>S<span tracking="widest" class="widen">I</span>k</span>hlas
    </h1>
  </RouterLink>
</template>

<style scoped>
.swipe {
  transition-property: var(--property-composite);
  transition-timing-function: var(--ease-io-quint);
  transition-duration: 0.8s;
  transform-origin: top left;
}

.to-bottom {
  transform: translateY(calc(100dvh - 100% - 13rem)) translateX(calc(100vw - 100% - 2rem - 1rem - 1rem / 2));
}
@media (min-width: 640px) {
  .to-bottom {
    transform: translateY(calc(100dvh - 100% - 12rem));
  }
}
/* 784px instead of 768px for flex wrapping footer content */
@media (min-width: 768px) {
  .to-bottom {
    transform: translateY(calc(100dvh - 100% - 7.5rem));
  }
}

.title > * {
  color: var(--color-foreground);
  font-weight: 800;
}

@supports (-webkit-text-stroke: 1px var(--color-foreground)) {
  .title[data-scrolled='true'] > * {
    -webkit-text-stroke: 1px var(--color-foreground);
    color: transparent;
  }
  .title[data-scrolled='true']:hover > * {
    -webkit-text-stroke-width: 0;
    color: var(--color-foreground);
  }

  .title[data-scrolled='false']:hover > * {
    -webkit-text-stroke: 1px var(--color-foreground);
    color: transparent;
  }
}

.widen {
  display: inline-block;
  transform: scaleX(125%) skewX(12deg);
}
</style>
