<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

const router = useRouter()

function toHome() {
  router.push(`/`)
}

const { t, tm, rt } = useI18n()

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
    <h1>{{ t('about.title') }}</h1>
    <h2>{{ t('about.subtitle') }}</h2>
    <ul>
      <li v-for="(section, i) in tm('about.sections')" :key="i">
        <h1>{{ rt(section._label) }}</h1>
        <ul v-for="(item, j) in section.items" :key="j">
          <li>
            <h3>{{ rt(item.title) }}</h3>
            <template v-if="item.subtitle.length > 0">
              <ul v-for="(value, k) in item.subtitle" :key="k">
                {{ rt(value) }}
              </ul>
            </template>
            <h4 v-else>
              {{ rt(item.subtitle) }}
            </h4>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
layout: default
</route>
