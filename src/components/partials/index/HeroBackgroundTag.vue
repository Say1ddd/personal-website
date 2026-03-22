<script setup lang="ts">
interface Prop {
  isVisible: boolean
}
type Tag = 'develop' | 'build'

const props = defineProps<Prop>()
const tag = ref<Tag>('develop')

function toggleTag() {
  tag.value = tag.value === 'develop' ? 'build' : 'develop'
}

const spanClassName = 'font-black inline-block text-nowrap first:text-5xl last:text-4xl first:sm:text-6xl last:sm:text-5xl'
</script>

<template>
  <div aria-hidden="true" overflow="hidden" class="group/tag opacity-20 cursor-help select-none dark:opacity-15" @click="toggleTag">
    <div transition="composite" duration="1000" delay="300" ease="out-expo" class="mx-1.5 text-right translate-y-2" :class="!props.isVisible && `translate-y-full`">
      <span class="mask-text w-fit uppercase" :class="spanClassName">
        <Transition mode="out-in" name="fade">
          <span v-if="tag === 'develop'">{{ tag }}</span>
          <span v-else>{{ tag }}</span>
        </Transition>
      </span>
      <span transition="composite" duration="300" class="mask-text origin-bottom-left group-active/tag:scale-90" :class="spanClassName">
        ING
      </span>
    </div>
  </div>
</template>

<style scoped>
.mask-text {
  mask-image: var(--images-pattern-diagonal-lines);
  color: var(--color-foreground);
}
</style>
