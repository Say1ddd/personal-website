<script setup lang="ts">
const route = useRoute()

definePage({
  beforeEnter: (to) => {
    // @ts-expect-error suppress "Property slug does not exist on type" error
    if (to.params.slug && !['sim-web', 'stage-two', 'og-tool'].includes(to.params.slug))
      return 'work-not-found'
  },
})
</script>

<template>
  <div class="bg-background overflow-y-scroll">
    <section class="flex h-full items-center">
      <div flex="1" class="relative">
        <div class="title font-plaster right-16 top-0 absolute">
          {{ route.params.slug }}
        </div>
        <div class="hero" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: calc(100dvh - (100dvh / 5 * 2));
  mask-image: var(--image-texture);
  background: linear-gradient(to top right, var(--color-foreground), transparent 75%);
}

.title {
  text-transform: uppercase;
  font-size: 6em;
  font-weight: 800;
  -webkit-text-stroke: 1px var(--color-foreground);
  color: transparent;
}
</style>
