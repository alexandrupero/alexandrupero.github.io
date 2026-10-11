import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useMediaQuery = (query: string) => {
  const matches = ref(false)
  let mediaQuery: MediaQueryList | undefined

  const update = (event: MediaQueryList | MediaQueryListEvent): void => {
    matches.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches
    mediaQuery.addEventListener('change', update)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return matches
}
