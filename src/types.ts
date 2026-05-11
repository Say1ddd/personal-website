import type { ViteSSGContext } from 'vite-ssg'
import type { RouteRecordName } from 'vue-router'
import type { PROJECTS_CONST } from '~/constants'
import type { SupportLocales } from '~/i18n'

type UserModule = (ctx: ViteSSGContext) => void

interface LocaleRouteParams {
  locale: SupportLocales
}

type Project = typeof PROJECTS_CONST[number]

type Paragraph = string | string[]

interface Breakpoint {
  '': number | string
  'sm': number | string
  'md': number | string
  'lg': number | string
  'xl': number | string
  '2xl': number | string
}

type LabelItem
  = | {
    label: string
    type: 'route'
    name: RouteRecordName
  }
  | {
    label: string
    type: 'link'
    href: string
  }
  | {
    label: string
    type: 'label'
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

interface Detail {
  title: string
  subtitle: string
}

interface ProjectMeta {
  url: string
  title: string
  other?: Detail[]
}

interface ProjectIntro {
  overview: string
  intro: string
  description: string
}

export type {
  Breakpoint,
  Detail,
  LabelItem,
  LocaleRouteParams,
  Paragraph,
  Project,
  ProjectIntro,
  ProjectMeta,
  Stack,
  StackItem,
  UserModule,
}
