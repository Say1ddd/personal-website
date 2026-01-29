<script setup lang="ts">
interface Prop {
  href?: string
  title?: string
  subtitle?: string
  iconType?: 'at' | 'link'
}

const {
  title = 'Social',
  iconType = 'at',
} = defineProps<Prop>()
</script>

<template>
  <a target="_blank" :href="href" class="relative" p="x-2 b-2">
    <h3 class="leading-loose tracking-wider">
      {{ title }}
    </h3>
    <div v-if="subtitle" class="text-sm leading-tight opacity-80 flex gap-2 items-center">
      <div :class="iconType === 'at' ? 'i-carbon-at' : 'i-carbon-link'" />
      <h4 class="tracking-wider truncate">
        {{ subtitle }}
      </h4>
    </div>
  </a>
</template>
