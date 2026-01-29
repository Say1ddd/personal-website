<script setup lang="ts">
interface Prop {
  text?: string
}

defineProps<Prop>()
</script>

<template>
  <span class="background-text font-fugazOne text-20 pointer-events-none truncate 2xl:text-80 lg:text-56 md:text-40 sm:text-36">
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<style scoped>
.background-text {
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 25%;
  right: -2.5rem;
  mask-image: var(--image-diagonal-lines);
  opacity: 0.2;
}
</style>
