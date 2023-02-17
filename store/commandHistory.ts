import { CommandHistory } from '~~/types/commandHistory'

export const useCommandHistoryStore = defineStore('commandHistory', {
  state: () => ({
    items: [] as CommandHistory[],
  }),
})
