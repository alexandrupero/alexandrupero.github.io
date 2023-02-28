import { AVAILABLE_COMMANDS } from '~~/constants/messages'
import { Command } from '~~/types/command'

// Commands
export class CvCommand implements Command {
  constructor(type: string) {
    const availableCommand =
      AVAILABLE_COMMANDS[type as keyof typeof AVAILABLE_COMMANDS]

    if (!availableCommand)
      throw new TypeError(
        "The type '" + type + "' is not a valid command type."
      )

    this.name = availableCommand.name
    this.description = availableCommand.description
    this.usage = availableCommand.usage
    this.aliases = availableCommand.aliases
  }

  name = ''
  description = ''
  usage = ''
  aliases = ['']
  hidden = false
}
