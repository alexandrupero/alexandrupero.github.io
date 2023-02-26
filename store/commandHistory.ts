import { CommandHistory } from '~~/types/commandHistory'

export const useCommandHistoryStore = defineStore('commandHistory', () => {
  const state = ref({
    items: [] as CommandHistory[],
  })

  const index = ref(0)
  const previousCommands = ref([] as string[])

  const actions = {
    clearItems(): void {
      state.value.items = []
    },
    add(commandHistory: CommandHistory): void {
      state.value.items.push(commandHistory)
      previousCommands.value.push(commandHistory.command)
      // move past the end, so the previous command is the last command
      index.value = previousCommands.value.length
    },
  }

  const getters = {
    getItems(): Readonly<CommandHistory[]> {
      return readonly(state.value.items)
    },
    getNextCommand(): Readonly<string> | null {
      if (index.value < previousCommands.value.length) index.value++

      return previousCommands.value[index.value] || null
    },
    getPreviousCommand(): Readonly<string> | null {
      if (index.value > 0) index.value--

      return previousCommands.value[index.value] || null
    },
  }

  return { ...actions, ...getters }
})
