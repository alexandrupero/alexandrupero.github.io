export interface Command {
  name: string
  description: string
  execute: () => string
  usage: string
  aliases: Array<string>
  hidden: boolean
}
