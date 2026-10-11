import cv from '@/data/cv'
import { useCommandHistory } from '@/composables/useCommandHistory'
import { useGlobalFlags } from '@/composables/useGlobalFlags'
import type { Command } from '@/types/command'

const HELP_COLUMN_WIDTH = 18

const padUsage = (usage: string): string =>
  usage.length < HELP_COLUMN_WIDTH
    ? usage.padEnd(HELP_COLUMN_WIDTH)
    : `${usage} `

const getHelpOutput = (): string => {
  const lines = commands.map((command) => {
    const usage = command.aliases?.length
      ? `${command.usage}, ${command.aliases.join(', ')}`
      : command.usage

    return `${padUsage(usage)}${command.description}`
  })

  return `Usage:\n\n${lines.join('\n')}`
}

const getExperienceOutput = (): string =>
  cv.experience
    .map((experience) => {
      const startYear = experience.startDate.slice(0, 4)
      const endYear = experience.endDate
        ? experience.endDate.slice(0, 4)
        : 'present'

      return `${experience.role} - ${experience.company} (${experience.location})
${startYear} - ${endYear}`
    })
    .join('\n\n')

export const commands: Command[] = [
  {
    name: 'help',
    description: 'Displays this help message',
    usage: 'help',
    aliases: ['h'],
    output: getHelpOutput,
  },
  {
    name: 'languages',
    description: 'Shows all programming languages I have experience with.',
    usage: 'languages',
    aliases: ['l'],
    output: () => cv.languages.join('\n'),
  },
  {
    name: 'frameworks',
    description: 'Shows all software frameworks I have experience with.',
    usage: 'frameworks',
    aliases: ['f'],
    output: () => cv.frameworks.join('\n'),
  },
  {
    name: 'tools',
    description: 'Shows all software development tools I have experience with.',
    usage: 'tools',
    aliases: ['t'],
    output: () => cv.tools.join('\n'),
  },
  {
    name: 'skills',
    description: 'Shows my programming/soft skills.',
    usage: 'skills',
    aliases: ['s'],
    output: () => cv.skills.join('\n'),
  },
  {
    name: 'contact',
    description: 'Shows my contact details.',
    usage: 'contact',
    aliases: ['c'],
    output: () => 'Check the links below the terminal.',
    run: () => {
      useGlobalFlags().shakeSocialIconsTemporarily()
    },
  },
  {
    name: 'experience',
    description: 'Shows my experience details.',
    usage: 'experience',
    aliases: ['e', 'xp'],
    output: getExperienceOutput,
  },
  {
    name: 'clear',
    description: 'Clears the screen.',
    usage: 'clear',
    aliases: ['cls'],
    output: () => '',
    run: () => {
      useCommandHistory().clearItems()
    },
  },
]

export const findCommand = (name: string): Command | undefined => {
  const normalized = name.toLowerCase()

  return commands.find(
    (command) =>
      !command.hidden &&
      (command.name === normalized || command.aliases?.includes(normalized)),
  )
}
