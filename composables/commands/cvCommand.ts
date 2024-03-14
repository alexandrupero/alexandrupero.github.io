import { AVAILABLE_COMMANDS } from '~~/constants/messages'
import type { Command } from '~~/types/command'

// Commands
export class CvCommand implements Command {
  constructor(type: string) {
    this.name = AVAILABLE_COMMANDS[type as keyof typeof AVAILABLE_COMMANDS].name
    this.description =
      AVAILABLE_COMMANDS[type as keyof typeof AVAILABLE_COMMANDS].description
    this.usage =
      AVAILABLE_COMMANDS[type as keyof typeof AVAILABLE_COMMANDS].usage
    this.aliases =
      AVAILABLE_COMMANDS[type as keyof typeof AVAILABLE_COMMANDS].aliases
  }

  name = ''
  description = ''
  usage = ''
  aliases = ['']
  hidden = false
}
