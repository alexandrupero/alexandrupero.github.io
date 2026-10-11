import { findCommand } from '@/commands'
import { MESSAGE_COMMAND_NOT_FOUND } from '@/constants/messages'
import { useCommandHistory } from '@/composables/useCommandHistory'

export const useCommands = () => {
  const { add: addToCommandHistory } = useCommandHistory()

  const executeCommand = (input: string): void => {
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    const [name, ...args] = trimmedInput.split(/\s+/)
    const command = findCommand(name)

    if (!command) {
      addToCommandHistory({
        command: input,
        output: MESSAGE_COMMAND_NOT_FOUND(name),
      })
      return
    }

    addToCommandHistory({
      command: input,
      output: command.output(args),
    })
    command.run?.()
  }

  return { executeCommand }
}
