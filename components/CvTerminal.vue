<template>
  <div
    class="mockup-code bg-base-300 text-base-content text-sm items-stretch overflow-x-clip h-full w-full"
  >
    <pre><code>   ________________________
    / Hi there, it's nice to \
    \ virtually meet you!    /
     ------------------------
      \
       \
       |\_/|
       |o o|__
       --*--__\
       C_C_(___)
       <pre><code>  Available commands:
      bla - blabla
</code></pre>
</code></pre>
    <pre
      data-prefix="$"
    ><input type="text" placeholder="Type here" class="terminal-input input-sm input-ghost bg-base-300 w-11/12" autofocus /></pre>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.terminal-input:focus {
  outline: none;
  border: none;
}
</style>
