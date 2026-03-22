<script setup lang="ts">
const visibilityTarget = useTemplateRef('sectionRef')
const isVisible = useElementVisibility(visibilityTarget, {
  threshold: 2 / 3,
})
</script>

<template>
  <section ref="sectionRef" transition="composite duration-1000 ease-out-expo" class="section-idx origin-top items-center" :class="!isVisible && `opacity-0 scale-y-50 events-none`">
    <div flex="~ 1 col" gap="8" overflow="hidden" class="group">
      <HeroContent :is-visible="isVisible" />
      <HeroCTA :is-visible="isVisible" />
      <div aria-hidden="true" grid="~ cols-12" p="x-0.5" class="opacity-50 skew-x-45">
        <div border="t-2 dotted foreground" class="col-span-1" />
        <div border="t-2 dotted primary" m="x-1" class="col-span-8" />
        <div border="t-2 dotted foreground" class="col-span-3" />
      </div>
    </div>
  </section>
</template>
