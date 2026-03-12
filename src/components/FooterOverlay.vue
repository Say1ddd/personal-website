<script setup lang="ts">
const { isOnBottom } = useInjectedScroll()
</script>

<template>
  <footer p="y-1 sm:0" flex text="xs" leading="relaxed sm:loose" pointer-events="none" class="h-8 items-end justify-between">
    <div pointer-events="auto" text="nowrap">
      2025-Present &copy; Sajid Ikhlas.<br sm="hidden"> Licensed under the <a underline href="https://github.com/Say1ddd/personal-space/blob/main/LICENSE" target="_blank">MIT License</a>.
    </div>
    <a href="https://github.com/Say1ddd/personal-website" target="_blank" underline pointer-events="auto" select="none" :class="!isOnBottom && `hidden sm:block`">
      <div class="flex gap-1 items-center">
        <span block i="carbon-logo-github" />
        <span class="sr-only sm:not-sr-only" truncate>Source code</span>
        <span class="sm:hidden" truncate>Source</span>
      </div>
    </a>
  </footer>
</template>
