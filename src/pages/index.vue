<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => t('button.home'),
})
</script>

<template>
  <div class="relative" overflow="x-hidden y-auto" h="full" snap="y mandatory">
    <ScrollIndicator />
    <IndexFirstSection />
    <IndexSecondSection />
    <IndexThirdSection />
  </div>
</template>
