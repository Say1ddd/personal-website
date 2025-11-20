<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()

function toAbout() {
  router.push(`/about`)
}

const { t } = useI18n()

useHead({
  title: () => t('button.home'),
})
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <button btn @click="toAbout">
      <div i-carbon-border-full />
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
