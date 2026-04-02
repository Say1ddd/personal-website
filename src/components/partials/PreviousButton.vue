<template>
  <RouterLink to="/" pointer-events="auto" class="group border-none opacity-80 flex size-16 scale-80 items-center justify-center rounded-none! md:(opacity-100 scale-100)">
    <span class="sr-only">Previous</span>
    <span aria-hidden="true" transition="composite" border="~ dashed" bg="background" class="rotate-clockwise rounded-full h-full w-full duration-500 group-focus:(opacity-100 scale-100) group-hover:(opacity-100 scale-100) sm:(opacity-0 scale-75)" />
    <svg
      viewBox="0 0 128 128"
      aria-hidden="true"
      role="presentation"
      absolute
      duration="400"
      delay="100"
      select="none"
      transition="composite"
      class="rotate-counter-clockwise opacity-50 sm:(opacity-0 scale-75)"
      group-focus="opacity-50 scale-100"
      group-hover="opacity-50 scale-100"
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
        <textPath href="#circlePath" startOffset="50%" tabular-nums>
          PREVIOUS PREVIOUS PREVIOUS PREVIOUS PREVIOUS PREVIOUS
        </textPath>
      </text>
    </svg>

    <span aria-hidden="true" transition="composite" class="text-3xl origin-left absolute" i="carbon-arrow-left" />
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
