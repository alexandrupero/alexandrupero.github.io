// 'hello' terminal prompt
export const MESSAGE_TERMINAL_HELLO = `
 ____________________________
/ Hi there, it's nice to     \\
| virtually meet you!        |
|                            |
| To see a list of supported |
\\ commands, run: help        /
 ----------------------------`

export const MESSAGE_TERMINAL_HELLO_CAT = `
  \\
   \\
   |\\_/|
   |o o|__
   --*--__\\
   C_C_(___)`

// 'command not found' error
export const MESSAGE_COMMAND_NOT_FOUND = (commandName: string) =>
  `Unknown command: "${commandName}"

To see a list of supported commands, run:
help`

export const AVAILABLE_COMMANDS = {
  help: {
    name: 'help',
    description: 'Displays this help message',
    usage: 'help',
    aliases: ['h'],
  },
  languages: {
    name: 'languages',
    description: 'Shows all programming languages I have experience with.',
    usage: 'languages',
    aliases: ['l'],
  },
  frameworks: {
    name: 'frameworks',
    description: 'Shows all software frameworks I have experience with.',
    usage: 'frameworks',
    aliases: ['f'],
  },
  tools: {
    name: 'tools',
    description: 'Shows all software development tools I have experience with.',
    usage: 'tools',
    aliases: ['t'],
  },
  skills: {
    name: 'skills',
    description: 'Shows my programming/soft skills.',
    usage: 'skills',
    aliases: ['s'],
  },
  contact: {
    name: 'contact',
    description: 'Shows my contact details.',
    usage: 'contact',
    aliases: ['c'],
  },
  experience: {
    name: 'experience',
    description: 'Shows my experience details.',
    usage: 'experience',
    aliases: ['e', 'xp'],
  },
  clear: {
    name: 'clear',
    description: 'Clears the screen.',
    usage: 'clear',
    aliases: ['cls'],
  },
}
