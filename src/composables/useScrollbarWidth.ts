// source code: https://github.com/vueuse/vueuse/issues/4262
import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

// Calculates scrollbar width for an HTML element reactively.
// This is needed for gutter layout happening on Chrome & Opera.
export default function useScrollbarWidth(
  elementRef: Ref<HTMLElement | null>,
): Ref<number> {
  const scrollbarWidth = ref<number>(0)
  let resizeObserver: ResizeObserver

  function calc() {
    const scrollEl = elementRef.value!
    scrollbarWidth.value = scrollEl.offsetWidth - scrollEl.clientWidth
  }

  onMounted(() => {
    const element = elementRef.value!

    // initial calculation
    calc()

    // recalculate whenever window size or zoom level changes
    window.addEventListener('resize', calc, false)

    // recalculate whenever element size changes
    resizeObserver = new ResizeObserver(calc)
    resizeObserver.observe(element)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', calc)
    resizeObserver.disconnect()
  })

  return scrollbarWidth
}
