import { HelpCommand } from './helpCommand'
import { Command } from '~~/types/command'

export function getAvailableCommands(): Command[] {
  return [new HelpCommand()]
}
