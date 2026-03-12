<script setup lang="ts">
import { WORKS } from '~/constants'

const { t } = useI18n()

useHead({
  title: () => t('button.home'),
})
</script>

<template>
  <div class="relative" overflow="x-hidden y-auto" h="full" snap="y mandatory">
    <!--
    <section class="text-primary px-4 flex justify-between">
      <span>Home Page</span>
      <span>nothing to see here...</span>
    </section>
    -->
    <section class="section-idx">
      <div class="items-center justify-center" flex="~ 1" p="4">
        <div container flex="~ col" gap="4" border="l-4 primary" class="pl-4 container">
          <h1 class="heading-1">
            {{ t('home.section_1') }}
          </h1>
          <div flex="1" class="">
            <RouterLink to="/about" data-cy="about" p="y-2 x-3" class="text-primary tracking-widest font-bold bg-background w-fit select-none" hover="bg-primary text-black" border="~ r-4 primary">
              <span>ABOUT ME</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="section-idx text-right items-center">
      <div flex="~ 1 col">
        <h1>{{ t('home.section_2.title') }}</h1>
        <ul class="border">
          <li v-for="work in WORKS" :key="work.href" class="font-extrabold uppercase from-transparent bg-linear-to-r hover:(text-black to-primary)">
            <RouterLink :to="work.href || ''" block>
              <span class="text-5xl">{{ work.label }}</span>
            </RouterLink>
          </li>
        </ul>
        <h2>{{ t('home.section_2.subtitle') }}</h2>
      </div>
    </section>
    <IndexThirdSection />
  </div>
</template>

<style scoped>
.section-divider {
  position: relative;
}

.section-divider::before {
  content: '';
  position: absolute;
  color: var(--color-background);
  background-color: var(--color-foreground);
  font-size: 0.75em;
  font-weight: 900;
  padding: 0 4px;
  height: 1rem;
  z-index: 10;
  top: 0;
  left: 0;
}

.section-divider::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1rem;
  mask-image: var(--image-diagonal-lines);
  background: var(--color-foreground);
  top: 0;
  left: 0;
}
</style>
