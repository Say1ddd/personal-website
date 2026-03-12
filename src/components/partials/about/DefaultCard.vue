<script setup lang="ts">
interface Prop {
  title: string
}
defineProps<Prop>()
</script>

<template>
  <div flex="~ col" gap="1">
    <h3 leading="loose" tracking="wider">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>
