import { describe, expect, it } from 'vitest'
import { commands, findCommand } from '@/commands'

describe('findCommand', () => {
  it('finds a command by its name', () => {
    expect(findCommand('help')).toBe(commands[0])
  })

  it('finds a command by one of its aliases', () => {
    expect(findCommand('h')).toBe(commands[0])
  })

  it('is case-insensitive', () => {
    expect(findCommand('HELP')).toBe(commands[0])
  })

  it('returns undefined for an unknown command', () => {
    expect(findCommand('nope')).toBeUndefined()
  })
})

describe('help output', () => {
  it('lists every command usage and description', () => {
    const help = findCommand('help')
    const output = help?.output([]) ?? ''

    for (const command of commands) {
      expect(output).toContain(command.usage)
      expect(output).toContain(command.description)
    }
  })
})

describe('experience output', () => {
  it('formats each experience entry with a start year', () => {
    const output = findCommand('experience')?.output([]) ?? ''

    expect(output).toContain('CalypsoAI')
    expect(output).toContain('2023 - present')
  })
})
