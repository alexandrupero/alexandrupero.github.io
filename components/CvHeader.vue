<template>
  <div class="navbar bg-base-100 justify-center">
    <div class="navbar-start">
      <label class="label cursor-pointer gap-4">
        <input
          v-if="useGlobalFlags().showTerminal !== undefined"
          type="checkbox"
          class="toggle"
          :checked="useGlobalFlags().showTerminal"
          aria-label="Show Terminal"
          @change="onChecked"
        />
        <Icon name="mdi:console" size="32" />
      </label>
    </div>
    <div class="navbar-center">
      <div class="w-24 mask mask-hexagon">
        <nuxt-img
          src="/avatar.png"
          alt="avatar image"
          width="192px"
          height="192px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalFlags } from '~~/store/globalFlags'

const onChecked = (event: Event) => {
  const terminalToggle = event.target as HTMLInputElement
  useGlobalFlags().showTerminal = terminalToggle.checked
}
</script>
