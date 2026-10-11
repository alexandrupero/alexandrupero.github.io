import { ref } from 'vue'

const isMobileViewport = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(max-width: 1279px)').matches

const shakeSocialIcons = ref(false)
const showTerminal = ref(!isMobileViewport())

export const useGlobalFlags = () => {
  const shakeSocialIconsTemporarily = (duration = 1500): void => {
    shakeSocialIcons.value = true
    setTimeout(() => {
      shakeSocialIcons.value = false
    }, duration)
  }

  return { shakeSocialIcons, showTerminal, shakeSocialIconsTemporarily }
}
