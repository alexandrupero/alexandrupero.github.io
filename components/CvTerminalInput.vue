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
      />
    </code>
  </div>
</template>

<script setup lang="ts">
const { executeCommand } = useCommands()

let terminalInput = $ref('')

const onTerminalEnterKey = () => {
  if (!terminalInput) return
  executeCommand(terminalInput)
  terminalInput = ''
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
