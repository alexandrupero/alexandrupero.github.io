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
import { ref } from 'vue'
import { useCommands } from '@/composables/useCommands'
import { useCommandHistory } from '@/composables/useCommandHistory'
import { useMediaQuery } from '@/composables/useMediaQuery'

const { executeCommand } = useCommands()
const { getPreviousCommand, getNextCommand } = useCommandHistory()

const terminalInput = ref('')

const mobile = useMediaQuery('(max-width: 1279px)')

const onTerminalEnterKey = (event: KeyboardEvent) => {
  if (!terminalInput.value) return
  executeCommand(terminalInput.value)
  terminalInput.value = ''
  hideKeyboardOnMobile(event.target as HTMLElement)
}

const onTerminalUpKey = (event: KeyboardEvent) => {
  terminalInput.value = getPreviousCommand() ?? terminalInput.value
  event.preventDefault()
}

const onTerminalDownKey = (event: KeyboardEvent) => {
  terminalInput.value = getNextCommand() ?? ''
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
