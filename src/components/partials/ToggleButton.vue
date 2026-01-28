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
  <button :data-state="state" role="button" class="group bottom-line p-2 flex gap-3 h-full truncate items-center overflow-y-clip">
    <span class="bottom-full bg-primary opacity-0 h-px w-full inline-block pointer-events-none transition-opacity absolute group-hover:opacity-100" />
    <span class="bg-primary opacity-0 h-1.5 w-1 inline-block pointer-events-none transition-opacity top-0 absolute group-hover:opacity-100" />
    <slot />
    <span class="state-label text-xs text-black tracking-wide bg-primary w-13 pointer-events-none truncate shadow transition group-hover:opacity-100 group-hover:rotate-none group-active:scale-90">
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
  opacity: 0;
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
