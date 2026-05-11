<script setup lang="ts">
interface Prop {
  text: string
  hideDivider?: boolean
}

const { hideDivider = false } = defineProps<Prop>()
</script>

<template>
  <section class="group *:mb-4 *:last:mb-0">
    <div>
      <h1 text="xl" font="medium" tracking="wide" mb="2" class="section-heading">
        {{ text }}
      </h1>
      <hr
        v-if="!hideDivider"
        border="dotted foreground"
        transition="composite duration-500 ease-in-out-circ"
        print="scale-x-100 opacity-100 border-solid transition-none"
        class="opacity-20 scale-x-1000 group-hover:(opacity-100 scale-x-100)"
      >
    </div>
    <slot />
  </section>
</template>

<style scoped>
.section-heading {
  position: relative;
}

.section-heading::before {
  content: '';
  position: absolute;
  right: 100%;
  width: 0.25rem;
  height: 100%;
  margin: 0 0.5rem;
  background-color: var(--color-primary);
  opacity: 0;
  transition-property: var(--property-composite);
  transition-duration: 0.5s;
  transition-timing-function: var(--ease-o-back);
  transform: translateX(100%);
}

section:hover .section-heading::before {
  opacity: 1;
  transform: translateX(-100%);
}

@media print {
  .section-heading::before {
    display: none;
  }

  section {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 1.25rem !important;
  }
}
</style>
