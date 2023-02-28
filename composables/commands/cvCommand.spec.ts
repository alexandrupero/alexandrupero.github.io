import { vi, describe, expect, it } from 'vitest'
import { CvCommand } from './cvCommand'

describe('CvCommand', () => {
  vi.mock('~~/constants/messages', () => ({
    AVAILABLE_COMMANDS: {
      test: {
        name: 'test name',
        description: 'test description',
        usage: 'test usage',
        aliases: ['test', 'alias'],
      },
    },
  }))

  it('throws an error when the command type is not valid', () => {
    expect(() => new CvCommand('not_valid')).toThrowError(
      new TypeError("The type 'not_valid' is not a valid command type.")
    )
  })

  it('creates a new command when the command type is valid', () => {
    const cvCommand = new CvCommand('test')

    expect(cvCommand).toMatchObject({
      name: 'test name',
      description: 'test description',
      usage: 'test usage',
      aliases: ['test', 'alias'],
      hidden: false,
    })
  })
})
