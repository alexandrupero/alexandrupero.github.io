<template>
  <div class="h-screen">
    <CvHeader class="h-1/6" />
    <div class="terminal-card h-4/6">
      <div class="card-body max-h-full">
        <slot />
      </div>
    </div>
    <CvFooter class="h-1/6" />
  </div>
</template>

<script setup lang="ts"></script>
