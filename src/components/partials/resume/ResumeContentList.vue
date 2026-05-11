<script setup lang="ts">
interface Prop {
  lists: string[]
}

defineProps<Prop>()
</script>

<template>
  <ul flex="~ col" class="list-disc-outside gap-1 print:list-disc-inside">
    <template v-if="lists.length > 0">
      <li v-for="list in lists" :key="list" leading="relaxed">
        {{ list }}
      </li>
    </template>
  </ul>
</template>
