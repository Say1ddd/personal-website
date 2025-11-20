<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

const router = useRouter()

function toHome() {
  router.push(`/`)
}

const { t } = useI18n()

useHead({
  title: () => t('button.about'),
})
</script>

<template>
  <div>
    <h1>About Page</h1>
    <button btn @click="toHome">
      <div i-carbon-home />
    </button>
  </div>
</template>

<route lang="yaml">
meta:
layout: default
</route>
