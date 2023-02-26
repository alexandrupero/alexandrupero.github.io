<template>
  <div
    tabindex="0"
    class="collapse shadow-xl transform transition hover:text-primary duration-700"
  >
    <div class="collapse-title text-xl sm:text-2xl font-bold">{{ title }}</div>
    <div class="collapse-content">
      <p>{{ items.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    default: [],
    type: Array<string>,
    required: true,
  },
  title: {
    default: '',
    type: String,
    required: true,
  },
})
</script>
