<script setup>
const pseudoElClasses = {
  before: 'before:(first:(border-(~ t-none r-none l-none)) last:(border-(~ r-none b-none l-none)))',
  after: 'after:(first:(border-(~ t-none r-none l-none)) last:border-(~ r-none b-none l-none))',
  child: '*:border *:first:border-t-none *:last:border-y-none *:border-dashed',
}
</script>

<template>
  <div
    aria-hidden="true"
    :class="`divider ${pseudoElClasses.child} ${pseudoElClasses.before} ${pseudoElClasses.after}`"
    :data-leading="!!$slots.leading"
    :data-trailing="!!$slots.trailing"
  >
    <slot name="leading" />
    <slot>
      <div aria-hidden="true" />
    </slot>
    <slot name="trailing" />
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  min-height: 1rem;
}

.divider > * {
  flex: 1;
}

.divider[data-leading='false']::before,
.divider[data-trailing='false']::after {
  display: block;
  content: '';
  min-width: calc(1rem - 1px);
}
</style>
