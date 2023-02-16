<template>
  <div
    class="mockup-code bg-base-300 text-base-content text-sm items-stretch overflow-x-clip h-full w-full"
  >
    <div class="pl-12">
      <pre><code>
 ________________________
/ Hi there, it's nice to \
\ virtually meet you!    /
 ------------------------
  \
   \
   |\_/|
   |o o|__
   --*--__\
   C_C_(___)</code></pre>
      <pre><code>To see a list of supported commands, run:
  help
      </code></pre>
    </div>
    <pre data-prefix="$"><input
        v-model.trim="terminalInput"
        type="text"
        placeholder="Type here"
        class="terminal-input pl-0 input-sm input-ghost bg-base-300 w-11/12"
        autofocus
        @keyup.enter="onTerminalEnterKey" />
    </pre>
  </div>
</template>

<script setup lang="ts">
const terminalInput = useState<string>('terminalInput')
const { executeCommand } = useCommands() // TODO: This is breaking the app

const onTerminalEnterKey = () => {
  executeCommand(terminalInput.value)
  terminalInput.value = ''
}
</script>

<style scoped>
.terminal-input:focus {
  outline: none;
  border: none;
}
</style>
