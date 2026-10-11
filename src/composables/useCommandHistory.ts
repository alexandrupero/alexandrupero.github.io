import { ref } from 'vue'
import type { CommandHistory } from '@/types/commandHistory'

const items = ref<CommandHistory[]>([])
const index = ref(0)
const previousCommands = ref<string[]>([])

export const useCommandHistory = () => {
  const add = (entry: CommandHistory): void => {
    items.value.push(entry)
    previousCommands.value.push(entry.command)
    // move past the end, so the previous command is the last command
    index.value = previousCommands.value.length
  }

  const clearItems = (): void => {
    items.value = []
  }

  const reset = (): void => {
    items.value = []
    previousCommands.value = []
    index.value = 0
  }

  const getItems = (): CommandHistory[] => items.value

  const getPreviousCommand = (): string | null => {
    if (index.value > 0) index.value--

    return previousCommands.value[index.value] ?? null
  }

  const getNextCommand = (): string | null => {
    if (index.value < previousCommands.value.length) index.value++

    return previousCommands.value[index.value] ?? null
  }

  return {
    items,
    add,
    clearItems,
    reset,
    getItems,
    getPreviousCommand,
    getNextCommand,
  }
}
