import { isSidebarOpenKey } from '~/keys/sidebar'

export function useInjectedSidebar() {
  const isSidebarOpen = inject(isSidebarOpenKey)

  if (!isSidebarOpen) {
    throw new Error('sidebar injection has not been provided by kei-chan')
  }

  function toggle() {
    if (typeof isSidebarOpen !== 'undefined')
      isSidebarOpen.value = !isSidebarOpen.value
    throw new Error('sidebar injection may has been provided by kei-chan but is undefined')
  }

  return {
    isSidebarOpen,
    toggle,
  }
}
