<script setup lang="ts">
interface Prop {
  text?: string
}

defineProps<Prop>()
const ref = useTemplateRef('ref')
const isVisible = useElementVisibility(ref)
</script>

<template>
  <div ref="ref" aria-hidden="true" class="wrapper">
    <div class="curtain transition-transform duration-2000" :class="isVisible ? '-translate-y-full' : 'translate-y-none'" />
    <span class="background-text leading-none font-fugazOne text-20 pointer-events-none truncate 2xl:text-80 lg:text-56 md:text-40 sm:text-36">
      <slot>
        {{ text }}
      </slot>
    </span>
  </div>
</template>

<style scoped>
.wrapper {
  top: 50%;
  right: 3rem;
  user-select: none;
  pointer-events: none;
  position: absolute;
  opacity: 0.2;
  overflow: hidden;
}

.background-text {
  text-transform: uppercase;
  mask-image: var(--image-diagonal-lines);
}

.curtain {
  position: absolute;
  z-index: 1;
  inset: 0;
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border-bottom: 5px solid var(--color-foreground);
}
</style>
