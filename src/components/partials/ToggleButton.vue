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
    <span aria-hidden="true" inline-block absolute transition="composite" bg="primary" pointer-events="none" duration="300" class="opacity-0 h-px w-full bottom-full group-hover:opacity-100" />
    <span aria-hidden="true" inline-block absolute transition="composite" bg="primary" pointer-events="none" duration="300" class="opacity-0 h-1.5 w-1 top-0 group-hover:opacity-100" />
    <slot />
    <span aria-hidden="true" truncate transition="composite" tracking="wide" text="sm black" bg="primary" w="14" pointer-events="none" duration="300" class="state-label opacity-0" group-hover="visible rotate-none scale-90 opacity-100">
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
  transition-property: var(--property-composite);
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
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
