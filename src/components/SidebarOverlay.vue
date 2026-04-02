<script setup lang="ts">
const { t } = useI18n()

interface SocialType {
  platform: string
  label?: string
  href: string
}

const SOCIALS: SocialType[] = [
  {
    platform: 'Instagram',
    label: 'say1ddd',
    href: 'https://www.instagram.com/say1ddd',
  },
  {
    platform: 'LinkedIn',
    label: '/in/sajid-ikhlas',
    href: 'https://www.linkedin.com/in/sajid-ikhlas',
  },
  {
    platform: 'Github',
    label: 'say1ddd',
    href: 'https://www.github.com/say1ddd/',
  },
  {
    platform: 'Email',
    label: 'hello@sikhlas.com',
    href: 'mailto:hello@sikhlas.com',
  },
]

function getIconType(platform: string) {
  function isPlatform(value: string) {
    return platform.toLowerCase() === value
  }
  if (isPlatform('linkedin') || isPlatform('email'))
    return 'link'
  else return 'at'
}
</script>

<template>
  <aside fixed z="25" p="t-24 sm:t-26 b-20" flex="~ col" class="border-l-2 rounded bg-background/90 h-full w-full right-0 top-0 dark:bg-background/95 sm:w-md">
    <ul aria-hidden="true" absolute class="h-full events-none right-full top-0" flex="~ col justify-evenly">
      <li v-for="i in 5" :key="i" i="carbon-chevron-left" class="text-xl opacity-50" />
    </ul>
    <div p="y-12 sm:y-6" flex="~ col 1 justify-items-center gap-8" border="y dashed foreground/50" class="overflow-x-hidden overflow-y-auto">
      <ul relative m="x-1" p="x-4 y-4" flex="~ col gap-2" class="nav-border">
        <li aria-hidden="true" absolute flex="~ items-center gap-2" p="x-1" bg="primary" text="xs black" class="events-none translate-y-1/2 bottom-full left-0">
          <span block font="medium jetbrains-mono" class="uppercase">
            tap to open
          </span>
          <div i="carbon-arrow-down" />
        </li>
        <li>
          <LinkCTA to="/about" :replace="true" :label="t('button.about')" color="secondary" class="w-full inline-block uppercase scale-105" />
        </li>
        <li>
          <LinkCTA to="/resume" :label="t('button.resume')" color="secondary" class="w-full inline-block uppercase scale-105" />
        </li>
      </ul>
      <div flex="~ col" gap="3">
        <div m="x-2" p="x-2" border="l-2 primary" class="line-divider events-none">
          <span class="tracking-wider uppercase" font="medium">MY SOCIALS</span>
        </div>
        <ul flex="~ col gap-2" p="x-6">
          <li v-for="social in SOCIALS" :key="social.href" relative>
            <SocialCard>
              <SocialLink :title="social.platform" :subtitle="social.label" :href="social.href" :icon-type="getIconType(social.platform)" class="rounded shadow shadow-foreground/5" />
            </SocialCard>
          </li>
        </ul>
      </div>
      <div text="center" p="x-2">
        <span text="sm" class="*:text-primary">
          handcrafted with love<span>&hearts;</span>
        </span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.nav-border::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px dotted rgb(var(--color-foreground-raw) / 25%);
  transform: scale(105%);
  pointer-events: none;
}

.line-divider {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.line-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: var(--color-foreground);
}
</style>
