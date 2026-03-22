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
    <div transition="composite" duration="2000" class="curtain" :class="isVisible ? '-translate-y-full' : 'translate-y-none'" />
    <span class="background-text text-20 leading-none font-fugaz-one pointer-events-none truncate 2xl:text-80 lg:text-56 md:text-40 sm:text-36">
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
  position: fixed;
  opacity: 0.2;
  overflow: hidden;
}

.background-text {
  text-transform: uppercase;
  mask-image: var(--images-pattern-diagonal-lines);
}

.curtain {
  position: absolute;
  z-index: 1;
  inset: 0;
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border-bottom: calc(5px / 2) dotted var(--color-foreground);
}
</style>
