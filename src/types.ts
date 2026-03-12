import type { ViteSSGContext } from 'vite-ssg'

type UserModule = (ctx: ViteSSGContext) => void

interface LabelHrefItem {
  label: string
  href?: string
}

interface StackItem {
  label: string
  icon: string
}
interface Stack {
  programmingLanguage: StackItem[]
  frameworkLibrary: StackItem[]
  toolSoftware: StackItem[]
  database: StackItem[]
}

export type {
  LabelHrefItem,
  Stack,
  StackItem,
  UserModule,
}
