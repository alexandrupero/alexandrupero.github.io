<template>
  <div>
    <NuxtLayout>
      <MaintenanceMode v-if="maintenanceMode" />
      <CvTerminal v-else-if="useGlobalFlags().showTerminal" />
      <CvGui v-else-if="showGui" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useGlobalFlags } from '~~/store/globalFlags'
const { maintenanceMode } = useRuntimeConfig()
const showGui = computed(() => useGlobalFlags().showTerminal === false)
</script>
