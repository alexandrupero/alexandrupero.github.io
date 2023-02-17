// Terminal "Hello"
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

// Command not found
export const MESSAGE_COMMAND_NOT_FOUND = (commandName: string) =>
  `Unknown command: "${commandName}"

To see a list of supported commands, run:
  help`
