<template>
  <div flex="~ col" class="group">
    <div aria-hidden="true" absolute shadow="foreground/5 group-hover:~" size="full" class="rounded left-0 top-0">
      <div flex overflow="x-hidden" m="t-1 r-1" class="justify-between">
        <div bg="primary" w="screen" transition="composite" duration="500" group-hover="translate-x-full opacity-100" class="opacity-0" />
        <div flex bg="transparent" class="p-0.5 items-center justify-center">
          <div text="xl foreground group-hover:black" i="carbon-arrow-up-right" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
