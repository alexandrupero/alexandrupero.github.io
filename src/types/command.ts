export interface Command {
  name: string
  description: string
  usage: string
  aliases?: string[]
  hidden?: boolean
  output: (args: string[]) => string
  run?: () => void
}
