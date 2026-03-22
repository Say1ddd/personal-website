<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div relative overflow="hidden">
    <div aria-hidden="true" absolute top="0" left="0" h="full" w="full" class="pattern-bg opacity-20 dark:opacity-15" />
    <div m="x-auto" overflow="hidden" class="wrap">
      <div relative z="10" overflow="hidden">
        <h1 text="3xl sm:4xl md:5xl lg:6xl" font="black" class="uppercase">
          {{ t('home.section_1.whoami') }} DEVELOPER
        </h1>
      </div>
      <div aria-hidden="true" m="lg:r-4" absolute top="0" right="0" overflow="hidden" transition="composite" duration="1000" ease="in-out-circ" class="events-none group-hover:skew-x-0 md:skew-x-90">
        <span text="4xl sm:5xl md:6xl lg:7xl nowrap" font="black" class="pattern-text">
          <span class="hidden xl:inline">
            COMPOSITOR-ONLY
          </span>
          <span class="xl:hidden">
            /dev/
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-bg {
  background-image: var(--images-pattern-diagonal-lines);
  background-attachment: fixed;
}

.pattern-text {
  color: var(--color-background);
}

@supports (-webkit-text-stroke: 1px var(--color-foreground)) {
  .pattern-text {
    -webkit-text-stroke: 1px rgb(var(--color-foreground-raw) / 0.2);
    color: var(--color-background);
  }
}
</style>
