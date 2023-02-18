import { getAvailableCommands } from './commands/getAvailableCommands'
import { useCommandHistoryStore } from '~~/store/commandHistory'
import { MESSAGE_COMMAND_NOT_FOUND } from '~~/constants/messages'

export const useCommands = () => {
  const commandHistory = useCommandHistoryStore()

  const executeCommand = (commandName: string): void => {
    const command = getAvailableCommands().find(
      (c) => c.name === commandName || c.aliases?.includes(commandName)
    )

    commandHistory.items.push({
      command: commandName,
      output:
        command === undefined
          ? MESSAGE_COMMAND_NOT_FOUND(commandName)
          : command.execute(),
    })
  }

  return { executeCommand }
}
