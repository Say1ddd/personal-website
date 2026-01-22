import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
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
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      subtle: 'var(--color-subtle)',
    },
  },
  presets: [
    presetWind3,
    presetWind4,
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        manrope: 'Manrope',
        jetBMono: 'JetBrains Mono',
        fugazOne: 'Fugaz One',
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
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
