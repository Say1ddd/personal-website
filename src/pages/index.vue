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
  <div h="full" overflow="x-hidden y-scroll" snap="y mandatory">
    <section snap="always center" h="full">
      <h1>home page</h1>
      <button btn @click="toAbout">
        <div i-carbon-border-full />
      </button>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
