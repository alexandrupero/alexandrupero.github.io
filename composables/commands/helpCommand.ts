import { getAvailableCommands } from './getAvailableCommands'
import {
  MESSAGE_COMMAND_HELP_ALIASES,
  MESSAGE_COMMAND_HELP_DESCRIPTION,
  MESSAGE_COMMAND_HELP_NAME,
  MESSAGE_COMMAND_HELP_USAGE,
} from '~~/constants/messages'
import { Command } from '~~/types/command'

// Commands
export class HelpCommand implements Command {
  name = MESSAGE_COMMAND_HELP_NAME
  description = MESSAGE_COMMAND_HELP_DESCRIPTION
  usage = MESSAGE_COMMAND_HELP_USAGE
  aliases = MESSAGE_COMMAND_HELP_ALIASES
  hidden = false
  execute = () => {
    return `Usage:

${getAvailableCommands().map(availableCommandsLine).join('\n')}`
  }
}

const availableCommandsLine = (command: Command) => {
  const commandUsageLine =
    command.usage + (command.aliases ? ', ' + command.aliases.join(',') : '')

  const divider = ' '.repeat(12 - commandUsageLine.length)

  return commandUsageLine + divider + command.description
}
