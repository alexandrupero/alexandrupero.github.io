import { Command } from '~~/types/command'

class HelpCommand implements Command {
  name = 'help'
  description = 'Shows this help.'
  execute = () => 'stuff'
  usage = 'help [<command>]'
  aliases = ['h']
  hidden = false
}

export const getAvailableCommands = (): Command[] => [new HelpCommand()]
