const { add: addCommandToHistory } = useCommandHistory()

const commandNotFoundMessage = (
  commandName: string
) => `Unknown command: "${commandName}"

To see a list of supported commands, run:
  help`

export const useCommands = () => {
  const executeCommand = (commandString: string): void => {
    const command = getAvailableCommands().find((c) => c.name === commandString)

    addCommandToHistory(
      commandString,
      command === undefined
        ? commandNotFoundMessage(commandString)
        : command.execute()
    )
  }

  return { executeCommand }
}
