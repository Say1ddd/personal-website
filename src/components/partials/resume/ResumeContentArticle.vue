<script setup lang="ts">
defineProps<Prop>()

const { currentLocale } = useLocale()

interface Prop {
  title?: string
  subtitle?: string
  timePeriod?: (string | number)[]
}
</script>

<template>
  <div class="*:last:mt-2">
    <div flex="~ justify-between" class="gap-3">
      <slot name="article">
        <article flex="1">
          <slot name="title">
            <h2 v-if="title" font="medium" tracking="wide" class="line-clamp-1">
              {{ title }}
            </h2>
          </slot>
          <slot name="subtitle">
            <h3 v-if="subtitle" tracking="wider" text="foreground/75 wrap">
              {{ subtitle }}
            </h3>
          </slot>
        </article>
      </slot>
      <slot name="period">
        <span v-if="timePeriod" class="min-w-fit">
          <template v-if="timePeriod && timePeriod.length < 2">
            {{ timePeriod[0] }}
          </template>
          <template v-else>
            <template v-if="currentLocale === 'en'">
              {{ `${timePeriod[0]} - ${timePeriod[1]}` }}
            </template>
            <template v-else-if="currentLocale === 'id'">
              {{ `${timePeriod[0]}&mdash;${timePeriod[1]}` }}
            </template>
          </template>
        </span>
      </slot>
    </div>
    <slot />
  </div>
</template>
