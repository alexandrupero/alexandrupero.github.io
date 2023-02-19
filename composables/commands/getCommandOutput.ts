import { getAvailableCommands } from './getAvailableCommands'
import { AVAILABLE_COMMANDS } from '~~/constants/messages'
import cv from '~~/data/cv'
import { Command } from '~~/types/command'

export function getCommandOutput(command: Command): string {
  switch (command.name) {
    case AVAILABLE_COMMANDS.help.name:
      return getHelpOutput()
    case AVAILABLE_COMMANDS.languages.name:
      return cv.languages.join('\n')
    case AVAILABLE_COMMANDS.frameworks.name:
      return cv.frameworks.join('\n')
    case AVAILABLE_COMMANDS.tools.name:
      return cv.tools.join('\n')
    case AVAILABLE_COMMANDS.skills.name:
      return cv.skills.join('\n')
    case AVAILABLE_COMMANDS.contact.name:
      return 'Check the links below the terminal.'
    case AVAILABLE_COMMANDS.experience.name:
      return getExperienceOutput()
    default:
      return ''
  }
}

function getHelpOutput(): string {
  const availableCommandsLine = (command: Command) => {
    const commandUsageLine =
      command.usage + (command.aliases ? ', ' + command.aliases.join(', ') : '')

    const divider = (firstColumnLength: number) =>
      ' '.repeat(18 - firstColumnLength)

    return (
      commandUsageLine + divider(commandUsageLine.length) + command.description
    )
  }

  return `Usage:

${getAvailableCommands().map(availableCommandsLine).join('\n')}`
}

function getExperienceOutput(): string {
  return cv.experience
    .map((xp) => {
      return `${xp.role} - ${xp.company} (${xp.location})
${xp.startDate.getFullYear()} - ${xp.endDate?.getFullYear() || 'present'}`
    })
    .join('\n\n')
}
