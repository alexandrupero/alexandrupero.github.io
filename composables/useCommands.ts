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
  const commandHistory = useCommandHistoryStore()

  const executeCommand = (input: string): void => {
    const commandAndArguments = input.split(' ')
    let commandOutput: string | undefined

    // arguments are not supported yet
    if (commandAndArguments.length === 1) {
      const commandName = commandAndArguments[0]
      const command = availableCommand(commandName)

      if (command !== undefined) {
        execute(command)
        commandOutput = getCommandOutput(command)
      }
    }

    commandHistory.items.push({
      command: input,
      output: commandOutput || MESSAGE_COMMAND_NOT_FOUND(input),
    })
  }

  return { executeCommand }
}

function availableCommand(commandName: string): Command | undefined {
  return getAvailableCommands().find(
    (command) =>
      (command.name === commandName.toLowerCase() ||
        command.aliases?.includes(commandName.toLowerCase())) &&
      !command.hidden
  )
}

function execute(command: Command) {
  if (command.name === AVAILABLE_COMMANDS.contact.name) {
    const globalFlags = useGlobalFlags()
    globalFlags.shakeSocialIcons = true
    setTimeout(() => {
      globalFlags.shakeSocialIcons = false
    }, 1500)
  }
}
