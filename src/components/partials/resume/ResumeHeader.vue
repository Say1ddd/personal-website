<script setup lang="ts">
interface PersonalDetail {
  label: string
  href?: string
}

const personalDetail: PersonalDetail[] = [
  {
    label: 'sikhlas.com',
    href: 'https://sikhlas.com',
  },
  {
    label: 'Yogyakarta, Indonesia',
  },
  {
    label: 'email@sikhlas.com',
    href: 'mailto:email@sikhlas.com',
  },
]
</script>

<template>
  <header text="center" class="relative">
    <h1 text="xl" font="medium" tracking="wide" mb="2">
      Sajid Muhammad Ikhlas
    </h1>
    <ul text="sm" font="medium" grid="~ cols-3" mb="3" class="mx-auto max-w-lg">
      <li v-for="detail in personalDetail" :key="detail.label" class="py-1">
        <a v-if="detail.href" print="underline underline-transparent" class="underline underline-primary underline-offset-4 hover:underline-primary/50" :href="detail.href" target="_blank">
          <h2>
            {{ detail.label }}
          </h2>
        </a>
        <h2 v-else>
          {{ detail.label }}
        </h2>
      </li>
    </ul>
    <slot />
  </header>
</template>
