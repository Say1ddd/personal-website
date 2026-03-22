<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => t('button.home'),
})
</script>

<template>
  <div class="relative" overflow="x-hidden y-auto" h="full" snap="y mandatory">
    <section class="section-idx">
      <div class="items-center justify-center" flex="~ 1" p="4">
        <div container flex="~ col" gap="4" border="l-4 primary" class="pl-4 container">
          <h1 class="heading-1">
            {{ t('home.section_1') }}
          </h1>
          <div flex="1" class="">
            <RouterLink to="/about" data-cy="about" p="y-2 x-3" class="text-black tracking-widest font-bold bg-primary w-fit select-none" border="~ r-4 primary">
              <span>ABOUT ME</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <IndexSecondSection />
    <IndexThirdSection />
  </div>
</template>
