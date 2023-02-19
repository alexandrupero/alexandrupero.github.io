<template>
  <div v-for="historyItem in getCommandHistoryItems()">
    <span class="terminal-prefix">></span>
    <code class="text-neutral-100">{{ historyItem.command }}</code>
    <div class="terminal-output">
      <code
        ><span class="whitespace-pre-wrap">
          {{ historyItem.output }}
        </span></code
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommandHistoryStore } from '~~/store/commandHistory'

const { getItems: getCommandHistoryItems } = useCommandHistoryStore()
</script>
