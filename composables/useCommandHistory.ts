export const useCommandHistory = () => {
  const commandHistory: [command: string, output: string][] = []

  const add = (command: string, output: string): void => {
    commandHistory.push([command, output])
  }

  const get = (index: number): [command: string, output: string] => {
    return commandHistory[index]
  }
  const getHistory = (): [command: string, output: string][] => {
    return commandHistory
  }

  return { add, get, getHistory }
}
