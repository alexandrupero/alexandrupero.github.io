<script setup lang="ts">
import CvFooter from '@/components/CvFooter.vue'
import CvGui from '@/components/CvGui.vue'
import CvHeader from '@/components/CvHeader.vue'
import CvTerminal from '@/components/CvTerminal.vue'
import { useGlobalFlags } from '@/composables/useGlobalFlags'

const { showTerminal } = useGlobalFlags()
</script>

<template>
  <div class="h-screen">
    <CvHeader class="h-1/6" />
    <div class="terminal-card h-4/6">
      <div class="card-body max-h-full">
        <CvTerminal v-if="showTerminal" />
        <CvGui v-else />
      </div>
    </div>
    <CvFooter class="h-1/6" />
  </div>
</template>
