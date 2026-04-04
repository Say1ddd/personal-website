import type { UseScrollReturn } from '@vueuse/core'

interface ScrollbarWidthCtx {
  // uses MaybeRef for injector default value
  scrollbarWidth: MaybeRef<number>
  setScrollbarWidth: (value: number) => void
}

export const scrollKey: InjectionKey<UseScrollReturn> = Symbol('kei-chan is injecting scrolling')
export const scrollbarWidthKey: InjectionKey<ScrollbarWidthCtx> = Symbol('kei-chan is injecting scrollbar width')
