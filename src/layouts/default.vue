<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { scrollbarWidthKey, scrollKey } from '~/keys/scroll'
import { isSidebarOpenKey } from '~/keys/sidebar'

const route = useRoute()

const isInRoot = computed(() => route.path === '/')
const scrollbarWidth = ref(0)
const isSidebarOpen = ref(false)

// composable init
const el = useTemplateRef<HTMLElement>('scrollRef')
const scrollReturn: UseScrollReturn = useScroll(el)

// composable won't work on the same level as initialization
const { arrivedState, measure } = scrollReturn
const { bottom: isOnBottom } = toRefs(arrivedState)

const transitionClass = {
  enterFromLeaveTo: 'opacity-0 rotate-90 translate-x-32',
  enterToLeaveFrom: 'opacity-100 rotate-0 translate-x-none',
  enterActive: 'transition-composite pointer-events-none duration-500 delay-300',
  leaveActive: 'transition-composite pointer-events-none duration-300 delay-500',
}

/* ? there has to be another way (try checking whether the component has already mounted(?))
* nvm this is fixed thanks to transition hooks https://vuejs.org/guide/built-ins/transition.html#javascript-hooks
router.afterEach(() => {
  setTimeout(() => {
    measure()
  }, 1000)
  console.info('afterEach after 1 second timeout')
})
*/

function setScrollbarWidth(value: number) {
  scrollbarWidth.value = value
}

provide(scrollbarWidthKey, {
  scrollbarWidth,
  setScrollbarWidth,
})
provide(scrollKey, scrollReturn)
provide(isSidebarOpenKey, isSidebarOpen)

// TODO: match layout decor with browser scrollbar width, fix layout shifts, reset default scrollbar style
</script>

<template>
  <div>
    <!-- top overlay -->
    <div flex="~ col" w="full" fixed z="30" top="0" pointer-events="none">
      <div m="x-4" p="y-2 x-4" class="translate-y-4">
        <NavOverlay>
          <template #left>
            <AppLogo />
          </template>
        </NavOverlay>
        <div p="x-4" flex class="justify-end">
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
        </div>
      </div>
    </div>

    <!-- sidebar overlay -->
    <SidebarOverlay transition="composite duration-500 ease-out-expo" :class="!isSidebarOpen && `translate-x-full events-none opacity-0`" />
    <!-- dismiss overlay -->
    <Transition mode="out-in" name="fade">
      <div v-show="isSidebarOpen" absolute z="20" class="bg-black/50 inset-0" @click="isSidebarOpen = false" />
    </Transition>

    <!-- content -->
    <main :inert="isSidebarOpen" h="dvh lg:screen *:full" overflow="hidden" z="1" relative class="min-w-0">
      <RouterView v-slot="{ Component, route: r }">
        <Transition name="fade-reveal" mode="out-in" @after-enter="measure">
          <component :is="Component" ref="scrollRef" :key="r.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- bottom overlay -->
    <div bottom="0" fixed pointer-events="none" w="full" z="25">
      <div :data-open="isOnBottom && !isSidebarOpen" translate-y="-4" flex="~ col" gap="4 sm:0" class="footer-background">
        <HeaderOverlay :inert="isSidebarOpen" lowercase relative z="10" m="x-4" p="x-0 sm:x-4" />
        <FooterOverlay relative z="10" transition="composite" duration="300" ease="out-back" m="sm:(x-4 y-0)" p="sm:x-4" :class="!isOnBottom ? `mx-4 p-2 sm:px-4 opacity-50 hover:opacity-75` : `mx-2 opacity-75 translate-y-2`" />
      </div>
    </div>

    <!-- decor -->
    <div aria-hidden="true" inset-0 fixed z="0" flex="~ col" pointer-events="none" transition="composite" duration="1000">
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
      <LayoutDivider border="before:foreground/25 after:foreground/25 *:foreground/25" />
    </div>
  </div>
</template>

<style scoped>
.footer-background::before,
.footer-background::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 5;
  transition-property: var(--property-composite);
  transition-duration: 1s;
  transition-timing-function: var(--ease-o-expo);
  height: 100vh;
  pointer-events: none;
}

.footer-background::before {
  background-color: var(--color-primary);
}

.footer-background::after {
  background-color: var(--color-background);
  border-top: 4px solid var(--color-primary);
}

.footer-background[data-open='false']::before,
.footer-background[data-open='false']::after {
  transform: translateY(10%);
  opacity: 0;
}

.footer-background[data-open='true']::after {
  transition-delay: 0.3s;
}

.footer-background[data-open='true']::before,
.footer-background[data-open='true']::after {
  transform: translateY(-0.5rem);
}

@media (min-width: 640px) {
  .footer-background[data-open='true']::before,
  .footer-background[data-open='true']::after {
    transform: translateY(-4rem);
  }
}

@media (min-width: 768px) {
  .footer-background[data-open='true']::before,
  .footer-background[data-open='true']::after {
    transform: translateY(-2rem);
  }
}

@media (min-width: 1024px) {
  .footer-background[data-open='true']::before,
  .footer-background[data-open='true']::after {
    transform: translateY(-4rem);
  }
}

/* named transitions */
.scale-up-enter-active,
.scale-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.minimize-enter-active,
.minimize-leave-active {
  transition-property: var(--property-composite);
  transition-duration: 0.5s;
  animation-timing-function: var(--ease-o-expo);
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
