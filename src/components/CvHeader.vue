<template>
  <div class="navbar bg-base-100 justify-center">
    <h1 class="sr-only">Alex Roman - Developer Portfolio</h1>
    <div class="navbar-start">
      <label class="label cursor-pointer gap-4">
        <input
          type="checkbox"
          class="toggle"
          :checked="showTerminal"
          aria-label="Show Terminal"
          @change="onChecked"
        />
        <Icon icon="mdi:console" width="32" aria-hidden="true" />
      </label>
    </div>
    <div class="navbar-center">
      <div class="w-24 mask mask-hexagon">
        <img
          src="/avatar-192.webp"
          srcset="/avatar-96.webp 1x, /avatar-192.webp 2x"
          width="96"
          height="96"
          alt="Portrait of Alex Roman"
          decoding="async"
          fetchpriority="high"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalFlags } from '@/composables/useGlobalFlags'

const { showTerminal } = useGlobalFlags()

const onChecked = (event: Event) => {
  showTerminal.value = (event.target as HTMLInputElement).checked
}
</script>
