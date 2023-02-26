import { useDisplay } from 'vuetify'

export const useGlobalFlags = defineStore('globalFlags', () => {
  const { mobile } = useDisplay()

  const state = ref({
    shakeSocialIcons: false,
    showTerminal: undefined as boolean | undefined,
  })

  onNuxtReady(() => {
    useGlobalFlags().showTerminal = !mobile.value
  })

  return { ...state }
})
