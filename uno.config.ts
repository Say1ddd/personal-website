import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['heading-1', 'text-2xl lg:text-4xl md:text-3xl'],
    ['heading-2', 'text-xl lg:text-3xl md:text-2xl'],
    ['heading-3', 'text-lg lg:text-2xl md:text-xl'],
    ['heading-4', 'text-base lg:text-xl md:text-lg'],
    ['section-idx', 'p-4 flex snap-(always center)'],
    ['absolute-overlay', 'absolute inset-0'],
    ['flex-centered', 'flex items-center justify-center'],
    ['events-none', 'pointer-events-none select-none'],
    ['wrap', 'container px-3 md:px-4'],
    ['responsive-padding', 'px-8 sm:px-4 md:px-2'],
    ['fullscreen-height', 'h-dvh lg:h-screen'],
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
    },
    property: {
      composite: 'var(--property-composite)',
    },
    ease: {
      'in-out-quint': 'var(--ease-io-quint)',
      'in-out-circ': 'var(--ease-io-circ)',
      'out-expo': 'var(--ease-o-expo)',
      'out-back': 'var(--ease-o-back)',
    },
  },
  presets: [
    presetWind4,
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        'manrope': [
          {
            name: 'Manrope',
            weights: ['200', '400', '500', '800'],
          },
        ],
        'jetbrains-mono': [
          {
            name: 'JetBrains Mono',
            weights: ['400', '800'],
          },
        ],
        'archivo-black': [
          {
            name: 'Archivo Black',
            weights: ['400'],
          },
        ],
        'fugaz-one': 'Fugaz One',
        // plaster: 'Plaster',
        // climateCrisis: 'Climate Crisis',
      },
      processors: import.meta.env.DEV
        ? [createLocalFontProcessor()]
        : undefined,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    ...'prose prose-sm m-auto text-left'.split(' '),
    ...Array.from({ length: 20 }, (_, i) => `duration-${300 + 100 * i}`),
  ],
})
