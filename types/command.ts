export interface Command {
  name: string
  description: string
  usage: string
  aliases?: Array<string>
  hidden: boolean
  execute: () => string
}
