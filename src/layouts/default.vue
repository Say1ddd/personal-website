<script setup lang="ts">
const route = useRoute()

const isInRoot = computed(() => route.path === '/')

/*
const ref = useTemplateRef('childRef')
const { x, y, isScrolling, arrivedState, directions, measure } = useScroll(ref)
const { top: isOnTop, bottom: isOnBottom } = toRefs(arrivedState)
const { left: toLeft, right: toRight, top: toTop, bottom: toBottom } = toRefs(directions)
 */
const transitionClass = {
  enterFromLeaveTo: 'opacity-0 rotate-90 translate-x-24',
  enterToLeaveFrom: 'opacity-100 rotate-0 translate-x-none',
  enterActive: 'pointer-events-none transition duration-500 delay-500',
  leaveActive: 'pointer-events-none transition duration-300',
}
</script>

<template>
  <div>
    <TheHeader />
    <Transition
      mode="out-in"
      :enter-from-class="transitionClass.enterFromLeaveTo"
      :enter-to-class="transitionClass.enterToLeaveFrom"
      :enter-active-class="transitionClass.enterActive"
      :leave-active-class="transitionClass.leaveActive"
      :leave-from-class="transitionClass.enterToLeaveFrom"
      :leave-to-class="transitionClass.enterFromLeaveTo"
    >
      <PreviousButton v-show="!isInRoot" :aria-hidden="isInRoot" />
    </Transition>

    <main h="dvh lg:screen *:full" overflow="hidden" z="1" relative class="min-w-0">
      <RouterView v-slot="{ Component, route: r }">
        <Transition name="fade-reveal" mode="out-in">
          <component :is="Component" :key="r.path" />
        </Transition>
      </RouterView>
    </main>

    <div aria-hidden="true" class="pointer-events-none transition-opacity duration-1000 inset-0 absolute z-0" flex="~ col">
      <Transition name="slide-down" mode="out-in">
        <LayoutDivider v-show="isInRoot" border="before:foreground/25 after:foreground/25 *:foreground/25" />
      </Transition>
      <Transition name="minimize" mode="out-in">
        <LayoutDivider
          v-show="isInRoot"
          border="before:foreground/25 after:foreground/25 *:foreground/25 *:t-none"
          rounded="*:b-lg"
          bg="*:background"
          origin="top-left"
          flex="1"
        />
      </Transition>
      <Transition name="scale-up" mode="out-in">
        <LayoutDivider v-show="isInRoot" border="before:foreground/25 after:foreground/25 *:foreground/25" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.scale-up-enter-active,
.scale-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.minimize-enter-active,
.minimize-leave-active {
  transition: transform 0.5s;
}

/* scale up */
.scale-up-enter-from,
.scale-up-leave-to {
  transform: scale(1.25);
}

/* slide down */
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

/* minimize */
.minimize-enter-from,
.minimize-leave-to {
  transform: scale(0) scaleX(0);
}
.minimize-leave-to {
  transform-origin: top right;
}

/*
main div.wrapper::before {
  background: linear-gradient(to bottom left, transparent 25%, var(--color-foreground));
}

main div.wrapper::after {
  background: linear-gradient(to bottom right, transparent 25%, var(--color-foreground));
}

main div.wrapper {
  -webkit-box-shadow: 0 0 1rem 1rem var(--color-background);
  -moz-box-shadow: 0 0 1rem 1rem var(--color-background);
  box-shadow: 0 0 1rem 1rem var(--color-background);
}
*/
</style>
