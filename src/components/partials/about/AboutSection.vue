<script setup lang="ts">
interface Prop {
  title: string
}
defineProps<Prop>()
</script>

<template>
  <section flex="~ col" gap="2" class="p-2.5 sm:max-w-60">
    <h2 text="lg xl:xl" font="medium" tracking="wider" class="section-line">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<style scoped>
.section-line {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-line::after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: var(--color-foreground);
  transition-property: var(--transition-composite);
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
  transform: rotateY(90deg);
  transform-origin: left;
  pointer-events: none;
}

section:hover .section-line::after {
  transform: rotateY(0deg);
}
</style>
