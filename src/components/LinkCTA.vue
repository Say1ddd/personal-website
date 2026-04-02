<script setup lang="ts">
interface Prop {
  to: string
  label: string
  color?: 'primary' | 'secondary' | 'neutral'
}

const { color = 'primary' } = defineProps<Prop>()

const wrapperColorMap = {
  primary: 'bg-primary/10 text-primary border-primary',
  secondary: 'bg-foreground/10 text-foreground border-foreground',
  neutral: 'bg-foreground/5 text-foreground border-foreground',
}

const overlayColorMap = {
  primary: 'bg-primary/90 text-black',
  secondary: 'bg-foreground/90 text-background',
  neutral: 'bg-background',
}

const spanClassName = 'text-(lg nowrap) tracking-widest font-bold select-none lg:text-2xl sm:text-xl'
</script>

<template>
  <RouterLink relative :to="to" active-class="*:first:opacity-0" p="y-1 x-2 sm:y-2 sm:x-3" class="wrapper-img group/button text-center *:first:absolute-overlay" border="2" :class="wrapperColorMap[color]">
    <slot name="overlay">
      <div aria-hidden="true" ease="out-expo" duration="500" transition="composite" class="flex-centered group-focus/button:opacity-0 group-hover/button:opacity-0" :class="overlayColorMap[color]">
        <span :class="spanClassName">{{ label }}</span>
      </div>
    </slot>
    <slot>
      <span :class="spanClassName">{{ label }}</span>
    </slot>
  </RouterLink>
</template>

<style scoped>
.wrapper-img {
  background-image: var(--images-pattern-graph-paper);
}
</style>
