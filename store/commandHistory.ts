import { CommandHistory } from '~~/types/commandHistory'

export const useCommandHistoryStore = defineStore('commandHistory', () => {
  const state = $ref({
    items: [] as CommandHistory[],
  })

  let index = $ref(0)
  const previousCommands = $ref([] as string[])

  const actions = {
    clearItems(): void {
      state.items = []
    },
    add(commandHistory: CommandHistory): void {
      state.items.push(commandHistory)
      previousCommands.push(commandHistory.command)
      // move past the end, so the previous command is the last command
      index = previousCommands.length
    },
  }

  const getters = {
    getItems(): Readonly<CommandHistory[]> {
      return readonly(state.items)
    },
    getNextCommand(): Readonly<string> | null {
      if (index < previousCommands.length) index++

      return previousCommands[index] || null
    },
    getPreviousCommand(): Readonly<string> | null {
      if (index > 0) index--

      return previousCommands[index] || null
    },
  }

  return { ...actions, ...getters }
})
