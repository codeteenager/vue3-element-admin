import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

interface ISidebar {
  opened: boolean
  withoutAnimation: boolean
}

export const useAppStore = defineStore('app', () => {
  const sidebarStatus = Cookies.get('sidebarStatus')
  const sidebar: ISidebar = reactive({
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    opened: Boolean(sidebarStatus) || true,
    withoutAnimation: false
  })

  const device = ref('desktop')
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
  const size = ref(Cookies.get('size') || 'medium')

  const toggleSidebar = (): void => {
    sidebar.opened = !sidebar.opened
    sidebar.withoutAnimation = false
    if (sidebar.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '0')
    }
  }

  const closeSidebar = (withoutAnimation: boolean): void => {
    sidebar.opened = false
    sidebar.withoutAnimation = withoutAnimation
    Cookies.set('sidebarStatus', '0')
  }

  const toggleDevice = (value: string): void => {
    device.value = value
  }

  const setSize = (value: string): void => {
    size.value = value
    Cookies.set('size', size.value)
  }

  return { device, sidebar, toggleSidebar, closeSidebar, toggleDevice, setSize }
})
