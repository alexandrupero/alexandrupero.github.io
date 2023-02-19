<template>
  <div>
    <code>
      <span class="terminal-prefix">$</span
      ><input
        v-model.trim="terminalInput"
        type="text"
        placeholder="Type here"
        class="terminal-input"
        autofocus
        @keyup.enter="onTerminalEnterKey"
        @keydown.up="onTerminalUpKey"
        @keydown.down="onTerminalDownKey"
        @keydown.tab="($event) => $event.preventDefault()"
      />
    </code>
  </div>
</template>

<script setup lang="ts">
import { useCommandHistoryStore } from '~~/store/commandHistory'

const { executeCommand } = useCommands()
const { getPreviousCommand, getNextCommand } = useCommandHistoryStore()

let terminalInput = $ref('')

const onTerminalEnterKey = () => {
  if (!terminalInput) return
  executeCommand(terminalInput)
  terminalInput = ''
}

const onTerminalUpKey = (event: KeyboardEvent) => {
  terminalInput = getPreviousCommand() || terminalInput
  event.preventDefault()
}

const onTerminalDownKey = (event: KeyboardEvent) => {
  terminalInput = getNextCommand() || ''
  event.preventDefault()
}
</script>

<style scoped>
.terminal-input:focus {
  outline: none;
  border: none;
}

@supports (-webkit-overflow-scrolling: touch) {
  input {
    font-size: 16px;
  }
}
</style>
