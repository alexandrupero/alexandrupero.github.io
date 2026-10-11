<template>
  <div class="navbar bg-base-100 justify-center">
    <div class="navbar-start">
      <label class="label cursor-pointer gap-4">
        <input
          type="checkbox"
          class="toggle"
          :checked="showTerminal"
          aria-label="Show Terminal"
          @change="onChecked"
        />
        <Icon icon="mdi:console" width="32" />
      </label>
    </div>
    <div class="navbar-center">
      <div class="w-24 mask mask-hexagon">
        <img src="/avatar.png" alt="avatar image" width="192" height="192" />
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
