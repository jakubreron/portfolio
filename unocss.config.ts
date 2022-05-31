import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// TODO: setup defaults as following
// $primary-font-family: 'M PLUS Rounded 1c';
// $secondary-font-family: 'Roboto';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefixedOnly: true,
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      light: '#f1f1f1',
      dark: '#191919',
      brand: {
        primary: '#fe5151',
        secondary: ' #0096a6',
      },
    },
  },
})
