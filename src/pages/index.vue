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
  <div class="relative" h="full" overflow="x-hidden y-scroll" snap="y mandatory">
    <section snap="always center" h="full">
      <h1>{{ t('home.section_1') }}</h1>
      <button data-test-id="about" btn @click="toAbout">
        <div i-carbon-border-full />
      </button>
    </section>
    <section snap="always center" h="full">
      <div>
        <h1>{{ t('home.section_2.title') }}</h1>
        <h2>{{ t('home.section_2.subtitle') }}</h2>
      </div>
    </section>
    <section snap="always center" h="full">
      <h1>Let's connect!</h1>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
