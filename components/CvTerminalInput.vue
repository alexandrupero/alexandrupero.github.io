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
import { useDisplay } from 'vuetify'
import { useCommandHistoryStore } from '~~/store/commandHistory'

const { executeCommand } = useCommands()
const { getPreviousCommand, getNextCommand } = useCommandHistoryStore()

const terminalInput = ref('')

const { mobile } = useDisplay() // less than 1280px

const onTerminalEnterKey = (event: KeyboardEvent) => {
  if (!terminalInput) return
  executeCommand(terminalInput.value)
  terminalInput.value = ''
  hideKeyboardOnMobile(event.target as HTMLElement)
}

const onTerminalUpKey = (event: KeyboardEvent) => {
  terminalInput.value = getPreviousCommand() || terminalInput.value
  event.preventDefault()
}

const onTerminalDownKey = (event: KeyboardEvent) => {
  terminalInput.value = getNextCommand() || ''
  event.preventDefault()
}

const hideKeyboardOnMobile = (inputElement: HTMLElement) => {
  if (mobile.value) {
    inputElement.setAttribute('readonly', 'readonly')
    inputElement.setAttribute('disabled', 'true')
    setTimeout(() => {
      inputElement.blur()
      inputElement.removeAttribute('readonly')
      inputElement.removeAttribute('disabled')
    }, 100)
  }
}
</script>
