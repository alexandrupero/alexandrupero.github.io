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
    nextCommand(): Readonly<string> | null {
      if (index < previousCommands.length) index++ // unless we're at the end
      // will return null if we're at the end
      if (index === previousCommands.length) return null

      return previousCommands[index]
    },
    previousCommand(): Readonly<string> | null {
      // will return null for an empty array or if we're at the beginning
      if (previousCommands.length === 0 || index === 0) return null
      index-- // unless we're at the beginning

      return previousCommands[index]
    },
  }

  return { ...actions, ...getters }
})
