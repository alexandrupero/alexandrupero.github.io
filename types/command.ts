export interface Command {
  name: string
  description: string
  usage: string
  aliases?: string[]
  hidden: boolean
  execute: () => string
}
