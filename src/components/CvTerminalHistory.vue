<template>
  <div v-for="historyItem in getItems()" :key="historyItem.command">
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
import { useCommandHistory } from '@/composables/useCommandHistory'

const { getItems } = useCommandHistory()
</script>
