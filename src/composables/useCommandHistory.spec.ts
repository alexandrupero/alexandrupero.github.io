import { beforeEach, describe, expect, it } from 'vitest'
import { useCommandHistory } from '@/composables/useCommandHistory'

describe('useCommandHistory', () => {
  beforeEach(() => {
    useCommandHistory().reset()
  })

  it('adds entries to the history', () => {
    const { add, getItems } = useCommandHistory()

    add({ command: 'help', output: 'usage' })

    expect(getItems()).toHaveLength(1)
    expect(getItems()[0]).toEqual({ command: 'help', output: 'usage' })
  })

  it('navigates backwards through previous commands', () => {
    const { add, getPreviousCommand } = useCommandHistory()

    add({ command: 'help', output: '' })
    add({ command: 'skills', output: '' })

    expect(getPreviousCommand()).toBe('skills')
    expect(getPreviousCommand()).toBe('help')
    expect(getPreviousCommand()).toBe('help')
  })

  it('navigates forwards through previous commands', () => {
    const { add, getNextCommand, getPreviousCommand } = useCommandHistory()

    add({ command: 'help', output: '' })
    add({ command: 'skills', output: '' })

    expect(getPreviousCommand()).toBe('skills')
    expect(getPreviousCommand()).toBe('help')
    expect(getNextCommand()).toBe('skills')
    expect(getNextCommand()).toBeNull()
  })

  it('clears the visible history but keeps the command buffer', () => {
    const { add, clearItems, getItems, getPreviousCommand } =
      useCommandHistory()

    add({ command: 'help', output: '' })
    clearItems()

    expect(getItems()).toHaveLength(0)
    expect(getPreviousCommand()).toBe('help')
  })
})
