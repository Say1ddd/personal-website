<script setup lang="ts">
import { STACKS } from '~/constants'

const visibilityTarget = useTemplateRef('sectionRef')
const isVisible = useElementVisibility(visibilityTarget, {
  threshold: 2 / 3,
})

function calculateDurationByIdx(idx: number, secMultiplier = 100, initialSec = 300) {
  return initialSec + (secMultiplier * idx)
}
</script>

<template>
  <section ref="sectionRef" transition="composite" duration="500" ease="inoutquint" origin="right" class="section-idx" :class="!isVisible && `opacity-0 scale-x-75`">
    <div flex="~ col 1" p="t-16 sm:t-12 lg:4" class="lg:justify-center">
      <div m="x-auto" flex="~ col lg:row" container>
        <div class="max-w-6xl">
          <h1 uppercase text="2xl md:3xl lg:4xl" font="extrabold" tracking="widest">
            Let's connect!
          </h1>
          <h2 text="lg md:xl lg:2xl" tracking="wide">
            Working on something interesting? I primarily take on freelance projects and focus on delivering clean, maintainable, production-ready solutions.
          </h2>
          <div>
            <h3 italic text="base md:lg lg:xl" leading="loose">
              What I'm good at -
            </h3>
            <ul flex="~ col" gap="2 lg:6" overflow="hidden">
              <li v-for="(items, key, i) in STACKS" :key="key" flex="~ col" gap="1">
                <div class="background-diagonal" transition="composite" ease="inoutquint" origin="bottom" delay="300" :class="`duration-${calculateDurationByIdx(i, 300, 100)} ${!isVisible && 'scale-y-0'}`">
                  <span font="jetBMono extrabold" text="background xs" bg="foreground" w="fit" p="x-2" class="curly-braces">
                    {{ key }}
                  </span>
                </div>
                <ul grid="~ cols-3 md:cols-4 lg:cols-6" gap="x-2 y-1" transition="composite" ease="outexpo" bg="linear-to-r" class="from-transparent via-foreground/5" :class="`duration-${calculateDurationByIdx(i, 500)} ${!isVisible && 'translate-x-full'}`">
                  <li v-for="item in items" :key="item.icon" flex gap="2" class="items-center" text="xs sm:base xl:lg" font="medium" tracking="wide">
                    <div :class="`${item.icon} duration-${calculateDurationByIdx(i, 100)} ${!isVisible && 'rotate-360'}`" />
                    <h5 truncate>
                      {{ item.label }}
                    </h5>
                  </li>
                </ul>
              </li>
            </ul>
            <h4>
              Currently working with similar tech stack? Feel free to reach out via:
              <a href="mailto:hello@sikhlas.com" target="_blank" flex="inline" gap="4" pointer-events="auto" class="group origin-left transition-transform items-center hover:scale-x-110">
                <h4 font="medium">
                  hello@sikhlas.com
                </h4>
                <span aria-hidden="true" block i="carbon-arrow-up-right" origin="top-left" transition="composite" duration="300" class="opacity-25 scale-75 -translate-x-full" group-hover="opacity-50 scale-100 translate-0" />
              </a>
            </h4>
          </div>
        </div>
        <div flex="1" class="hidden sm:block" overflow="hidden">
          <ul relative flex="~ col" h="full" class="anim-scroll-reveal items-center justify-between">
            <li v-for="i in 3" :key="i" flex="~ 1" class="order-card items-center justify-center" inset-0 absolute>
              <div i="carbon-debug" text="5xl" />
              <span>nge bug</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-diagonal {
  background-image: var(--image-diagonal-lines);
  background-color: transparent;
  background-attachment: fixed;
}

.curly-braces {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.curly-braces::before,
.curly-braces::after {
  opacity: calc(1 / 3);
}

.curly-braces::before {
  content: '{';
}

.curly-braces::after {
  content: '}';
}

.order-card:first-child {
  transform: translateY(calc(-1 * 100% * 2));
}
.order-card:not(:first-child):not(:last-child) {
  transform: translateY(calc(-1 * 100% * 1));
}

.anim-scroll-reveal {
  animation: scroll-reveal 8s var(--ease-io-circ) infinite;
}

.anim-scroll-reveal:hover {
  animation-play-state: paused;
}

@keyframes scroll-reveal {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(200%);
  }
}
</style>
