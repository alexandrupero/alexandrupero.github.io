<template>
  <div class="cv-terminal-container">
    <div class="card-body">
      <div class="card-title">
        <code>alexroman.dev</code>
      </div>

      <pre><code>{{MESSAGE_TERMINAL_HELLO}}{{ MESSAGE_TERMINAL_HELLO_CAT }}</code></pre>
      <CvTerminalHistory />
      <CvTerminalInput />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  MESSAGE_TERMINAL_HELLO,
  MESSAGE_TERMINAL_HELLO_CAT,
} from '~~/constants/messages'
</script>

<style scoped>
.card-title {
  @apply 2xl:sticky 2xl:top-5 2xl:ml-auto;
}
</style>
