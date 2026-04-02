<script setup lang="ts">
interface PropType {
  initialLabel?: string
  toggledLabel?: string
  state?: boolean
  labelWidth?: number
}

const props = defineProps<PropType>()

const returnWidth = computed(() => {
  function setChWidth(value?: number) {
    if (props.labelWidth || value)
      return `${props.labelWidth || value}ch`
    else return 'auto'
  }

  if (props.initialLabel && props.toggledLabel) {
    if (props.initialLabel.length >= props.toggledLabel.length)
      return setChWidth(props.initialLabel.length)
    else return setChWidth(props.toggledLabel.length)
  }
  return setChWidth()
})
</script>

<template>
  <button class="wrapper text-xs cursor-pointer pointer-events-auto sm:text-base">
    <span relative border="~ foreground/15" class="after-btn inline-block">
      <span relative z="20" flex="~ items-center justify-between" gap="2" bg="background" p="x-3 y-2" class="font-jetbrains-mono overflow-hidden tabular-nums *:last:w-[--w]" :style="{ '--w': returnWidth }">
        <slot>
          <slot name="leading">
            <span i="carbon-menu" block />
            <span>menu</span>
          </slot>
          <slot name="content">
            <template v-if="initialLabel && toggledLabel">
              <Transition mode="out-in" name="slide-y">
                <span v-if="state" inline-block>{{ initialLabel }}</span>
                <span v-else inline-block>{{ toggledLabel }}</span>
              </Transition>
            </template>
          </slot>
        </slot>
      </span>
    </span>
  </button>
</template>

<style scoped>
.wrapper:hover .after-btn::after {
  transform-origin: center;
  transform: scaleX(105%);
  opacity: 100%;
}

.wrapper:active .after-btn::after {
  transform-origin: center;
  background-color: var(--color-primary);
  transform: scaleX(110%) scaleY(55%);
  opacity: 100%;
}

.after-btn::after {
  content: '';
  transition-property: var(--property-composite);
  transition-duration: 0.5s;
  transition-timing-function: var(--ease-o-back);
  position: absolute;
  inset: 0;
  transform-origin: top;
  background-color: var(--color-foreground);
  transform: scaleY(105%);
  z-index: 10;
  opacity: 50%;
}
</style>
