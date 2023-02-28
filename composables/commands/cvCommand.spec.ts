import { describe, expect, it } from 'vitest'
import { AVAILABLE_COMMANDS } from '../../constants/messages'
import { CvCommand } from './cvCommand'

describe('CvCommand', () => {
  it('throws an error when the command type is not valid', () => {
    expect(() => new CvCommand('not_valid')).toThrowError(
      new TypeError("The type 'not_valid' is not a valid command type.")
    )
  })

  it('creates a new command when the command type is valid', () => {
    const cvCommand = new CvCommand('help')

    expect(cvCommand).toMatchObject({
      name: AVAILABLE_COMMANDS.help.name,
      description: AVAILABLE_COMMANDS.help.description,
      usage: AVAILABLE_COMMANDS.help.usage,
      aliases: AVAILABLE_COMMANDS.help.aliases,
      hidden: false,
    })
  })
})
