<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

const { t, tm, rt } = useI18n()

useHead({
  title: () => t('button.about'),
})
</script>

<template>
  <div class="flex flex-col gap-6 relative lg:flex-row lg:justify-between">
    <div class="flex flex-col gap-3 max-w-5xl">
      <h1 class="font-bold heading-1">
        {{ t('about.title') }}
      </h1>
      <h2 class="font-semibold heading-2">
        {{ t('about.subtitle') }}
      </h2>
    </div>
    <ul class="flex flex-wrap gap-4">
      <li
        v-for="section in tm('about.sections')"
        :key="section._label"
        class="flex-1 from-background/50 to-transparent via-transparent bg-linear-to-b"
      >
        <section class="p-2.5 flex flex-col gap-3 hover:bg-blue-900">
          <h3 class="label font-semibold heading-3">
            {{ rt(section._label) }}
          </h3>
          <ul class="flex flex-wrap gap-x-4 gap-y-2">
            <li v-for="item in section.items" :key="item.title" class="flex flex-col gap-1">
              <h4 class="font-medium heading-3">
                {{ rt(item.title) }}
              </h4>
              <ul v-if="item.subtitle.length > 0">
                <li v-for="value in item.subtitle" :key="value">
                  <h4 class="truncate heading-4">
                    {{ rt(value) }}
                  </h4>
                </li>
              </ul>
              <h4 v-else class="heading-4">
                {{ rt(item.subtitle) }}
              </h4>
            </li>
          </ul>
        </section>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.label::after {
  opacity: 0;
  content: '-';
  margin-left: 0.25rem;
}
</style>

<route lang="yaml">
meta:
layout: default
</route>
