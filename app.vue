<template>
  <div>
    <NuxtLayout>
      <MaintenanceMode v-if="maintenanceMode" />
      <CvTerminal v-else />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { maintenanceMode } = useRuntimeConfig()
</script>
