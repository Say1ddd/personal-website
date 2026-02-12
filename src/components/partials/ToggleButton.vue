<script setup lang="ts">
interface PropType {
  truthyLabel?: string
  falsyLabel?: string
  state: boolean
}

const {
  truthyLabel = 'true',
  falsyLabel = 'false',
} = defineProps<PropType>()
</script>

<template>
  <button class="group bottom-line p-2 flex gap-3 h-full truncate items-center overflow-y-clip">
    <span aria-hidden="true" bg="primary" transition="opacity" inline-block absolute class="bottom-full opacity-0 h-px w-full pointer-events-none group-hover:opacity-100" />
    <span aria-hidden="true" bg="primary" transition="opacity" inline-block absolute class="opacity-0 h-1.5 w-1 pointer-events-none top-0 group-hover:opacity-100" />
    <slot />
    <span aria-hidden="true" tracking="wide" text="sm black" bg="primary" transition="transform" w="14" class="state-label pointer-events-none truncate group-hover:(visible rotate-none scale-90)">
      <Transition mode="out-in" name="slide-y">
        <span v-if="state">{{ truthyLabel }}</span>
        <span v-else>{{ falsyLabel }}</span>
      </Transition>
    </span>
  </button>
</template>

<style scoped>
.bottom-line::after {
  content: '';
  position: absolute;
  z-index: 10;
  top: 100%;
  width: 10rem;
  transform: translateY(2px) scaleX(0);
  height: 6px;
  background-color: var(--color-primary);
  transform-origin: left;
  transition: transform 0.5s ease-in-out;
  pointer-events: none;
}

.bottom-line:hover::after {
  transform: translateY(0) scaleX(100%);
}

.state-label {
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 10;
  visibility: hidden;
  text-transform: uppercase;
  transform-origin: left;
  rotate: calc(45deg / 2);
  translate: 0 50%;
}

.state-label > * {
  font-weight: 900;
  display: block;
}
</style>
