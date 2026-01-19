<script setup lang="ts">
</script>

<template>
  <main class="font-manrope">
    <LayoutDivider />
    <TheHeader />

    <LayoutDivider class="wrapper flex-1 *:rounded-br-lg *:border-dashed">
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </LayoutDivider>

    <LayoutDivider class="after:border-dashed" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-width: 0;
  scroll-snap-type: y mandatory;
  overflow: hidden;
  flex: auto;
  background-color: var(--color-background);
  background-image: url('/assets/patterns/graph-paper.svg');
}

main div.wrapper::before {
  background-image: url('/assets/patterns/diagonal-lines.svg');
  filter: invert();
}

main div.wrapper {
  background-color: var(--color-background);
  //-webkit-box-shadow: 0 0 1rem 1rem var(--color-background);
  //-moz-box-shadow: 0 0 1rem 1rem var(--color-background);
  //box-shadow: 0 0 1rem 1rem var(--color-background);
}
</style>
