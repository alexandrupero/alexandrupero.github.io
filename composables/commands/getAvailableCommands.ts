import { CvCommand } from './cvCommand'
import type { Command } from '~~/types/command'
import { AVAILABLE_COMMANDS } from '~~/constants/messages'

export function getAvailableCommands(): Command[] {
  return Object.keys(AVAILABLE_COMMANDS).map((key) => new CvCommand(key))
}
