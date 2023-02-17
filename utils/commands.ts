import { Command } from '~~/types/command'

// Constants
const MESSAGE_COMMAND_HELP_NAME = `help`
const MESSAGE_COMMAND_HELP_DESCRIPTION = `Shows this help.`
const MESSAGE_COMMAND_HELP_USAGE = `help`
const MESSAGE_COMMAND_HELP_ALIASES = ['h']

// Commands
class HelpCommand implements Command {
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

// Helpers

const availableCommandsLine = (command: Command) => {
  const commandUsageLine =
    command.usage + (command.aliases ? ', ' + command.aliases.join(',') : '')

  const divider = ' '.repeat(12 - commandUsageLine.length)

  return commandUsageLine + divider + command.description
}

// Exported

export const getAvailableCommands = (): Command[] => [new HelpCommand()]
