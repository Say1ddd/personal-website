import { scrollKey } from '~/keys/scroll'

export function useInjectedScroll() {
  const scroll = inject(scrollKey)

  if (!scroll) {
    throw new Error('scroll injection has not been provided by kei-chan')
  }

  const {
    x,
    y,
    isScrolling,
    measure,
    arrivedState,
    directions,
  } = scroll

  const {
    top: isOnTop,
    bottom: isOnBottom,
    right: isOnRight,
    left: isOnLeft,
  } = toRefs(arrivedState)

  const {
    top: isToTop,
    bottom: isToBottom,
    right: isToRight,
    left: isToLeft,
  } = toRefs(directions)

  return {
    x,
    y,
    isScrolling,
    measure,
    isOnTop,
    isOnRight,
    isOnBottom,
    isOnLeft,
    isToTop,
    isToRight,
    isToBottom,
    isToLeft,
  }
}
