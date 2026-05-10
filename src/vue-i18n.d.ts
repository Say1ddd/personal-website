// solved using this reference (tysm) https://github.com/intlify/vue-i18n/blob/master/examples/lazy-loading/vite/src/vue-i18n.d.ts
import En from '../locales/en.json' with { type: 'json' }
import 'vue-i18n'

export type MessageSchema = typeof En

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}
}
