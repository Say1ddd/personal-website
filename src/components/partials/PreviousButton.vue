<template>
  <RouterLink to="/" class="group border-none opacity-80 flex h-16 w-16 scale-80 items-center right-8 top-4 justify-center absolute z-50 rounded-none! md:(opacity-100 scale-100) lg:(right-10 top-10)">
    <span class="sr-only">Previous</span>
    <span aria-hidden="true" border="~ dashed" class="rotate-clockwise rounded-full h-full w-full transition duration-500 group-focus:(opacity-100 scale-100) group-hover:(opacity-100 scale-100) sm:(opacity-0 scale-75)" />
    <svg
      aria-hidden="true"
      role="presentation"
      class="rotate-counter-clockwise opacity-50 transition duration-400 delay-100 absolute group-focus:(opacity-50 scale-100) group-hover:(opacity-50 scale-100) sm:(opacity-0 scale-75)"
      viewBox="0 0 128 128"
    >
      <defs>
        <path
          id="circlePath"
          d="
              M 64,64
              m -48,0
              a 48,48 0 1,1 96,0
              a 48,48 0 1,1 -96,0
            "
        />
      </defs>

      <text
        font-size="2"
        fill="currentColor"
        text-anchor="middle"
        letter-spacing="1.25"
      >
        <textPath href="#circlePath" tabular-nums startOffset="50%">
          PREVIOUS PREVIOUS PREVIOUS PREVIOUS PREVIOUS PREVIOUS
        </textPath>
      </text>
    </svg>

    <span aria-hidden="true" class="text-3xl origin-left transition-transform absolute group-active:scale-85" i="carbon-arrow-left" />
  </RouterLink>
</template>

<style scoped>
@keyframes rotate-clockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-counter-clockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.rotate-clockwise {
  animation: rotate-clockwise 20s linear infinite;
}

.rotate-counter-clockwise {
  animation: rotate-counter-clockwise 20s linear infinite;
}
</style>
