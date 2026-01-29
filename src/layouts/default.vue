<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const isInRoot = computed(() => route.path === '/')
const toRoot = () => router.push('/')

const transitionClass = {
  enterFromLeaveTo: 'opacity-0 rotate-90 translate-x-24',
  enterActive: 'pointer-events-none transition duration-500 delay-300',
  leaveActive: 'pointer-events-none transition delay-500',
}
</script>

<template>
  <main>
    <LayoutDivider />
    <TheHeader />

    <LayoutDivider class="wrapper flex-1 relative *:rounded-br-lg *:border-dashed">
      <Transition
        mode="out-in"
        :enter-from-class="transitionClass.enterFromLeaveTo"
        :enter-active-class="transitionClass.enterActive"
        :leave-active-class="transitionClass.leaveActive"
        :leave-to-class="transitionClass.enterFromLeaveTo"
      >
        <PreviousButton v-if="!isInRoot" @click="toRoot" />
      </Transition>
      <RouterView v-slot="{ Component, route: r }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="r.path" />
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
}

main div.wrapper::before,
main div.wrapper::after {
  mask-image: var(--image-texture);
}

main div.wrapper::before {
  background: linear-gradient(to bottom left, transparent 25%, var(--color-foreground));
}

main div.wrapper::after {
  background: linear-gradient(to bottom right, transparent 25%, var(--color-foreground));
}

/*
main div.wrapper {
  -webkit-box-shadow: 0 0 1rem 1rem var(--color-background);
  -moz-box-shadow: 0 0 1rem 1rem var(--color-background);
  box-shadow: 0 0 1rem 1rem var(--color-background);
}
*/
</style>
