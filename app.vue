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

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
useSeoMeta({
  title: 'Alex Roman - Developer Portfolio',
  ogTitle: 'Alex Roman - Developer Portfolio',
  description:
    'Developer portfolio website for Alex Roman, showcasing skills, experience and contact information.',
  ogDescription:
    'Developer portfolio website for Alex Roman, showcasing skills, experience and contact information.',
})
</script>
