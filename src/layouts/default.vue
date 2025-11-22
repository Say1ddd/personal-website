<template>
  <main>
    <div class="wrapper" m="8" flex="1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 0;
  scroll-snap-type: y mandatory;
  flex: auto;
  background-color: var(--color-background);
  background-image: url('/assets/patterns/topography.svg');
}

main div.wrapper {
  background-color: var(--color-background);
  -webkit-box-shadow: 0 0 1rem 1rem var(--color-background);
  -moz-box-shadow: 0 0 1rem 1rem var(--color-background);
  box-shadow: 0 0 1rem 1rem var(--color-background);
}
</style>
