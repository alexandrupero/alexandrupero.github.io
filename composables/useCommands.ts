import { getAvailableCommands } from './commands/getAvailableCommands'
import { getCommandOutput } from './commands/getCommandOutput'
import { useCommandHistoryStore } from '~~/store/commandHistory'
import {
  AVAILABLE_COMMANDS,
  MESSAGE_COMMAND_NOT_FOUND,
} from '~~/constants/messages'
import { Command } from '~~/types/command'
import { useGlobalFlags } from '~~/store/globalFlags'

export const useCommands = () => {
  const { add: addToCommandHistory } = useCommandHistoryStore()

  const executeCommand = (input: string): void => {
    const command = getCommand(input.split(' '))

    if (command !== null) {
      addToCommandHistory({
        command: input,
        output: getCommandOutput(command),
      })

      execute(command)
    } else
      addToCommandHistory({
        command: input,
        output: MESSAGE_COMMAND_NOT_FOUND(input),
      })
  }

  return { executeCommand }
}

function getCommand(commandAndArguments: string[]): Command | null {
  // arguments are not supported yet
  if (commandAndArguments.length !== 1) {
    return null
  }

  const commandName = commandAndArguments[0]

  return (
    getAvailableCommands().find(
      (command) =>
        (command.name === commandName.toLowerCase() ||
          command.aliases?.includes(commandName.toLowerCase())) &&
        !command.hidden,
    ) || null
  )
}

function execute(command: Command) {
  if (command.name === AVAILABLE_COMMANDS.contact.name) {
    executeContactCommand()
  } else if (command.name === AVAILABLE_COMMANDS.clear.name) {
    executeClearCommand()
  }
}

function executeContactCommand() {
  const globalFlags = useGlobalFlags()
  globalFlags.shakeSocialIcons = true
  setTimeout(() => {
    globalFlags.shakeSocialIcons = false
  }, 1500)
}

function executeClearCommand() {
  useCommandHistoryStore().clearItems()
}
