<template>
  <footer class="footer footer-center bg-base-100 text-base-content rounded">
    <div :class="{ shake: useGlobalFlags().shakeSocialIcons }">
      <div class="grid grid-flow-col gap-4">
        <a
          target="_blank"
          :href="cv.contact.matrix"
          aria-label="Contact me through Matrix"
        >
          <IconCSS name="simple-icons:matrix" size="20" />
        </a>
        <a
          target="_blank"
          :href="cv.contact.github"
          aria-label="Contact me through GitHub"
        >
          <IconCSS name="uil:github-alt" size="20" />
        </a>
        <a
          target="_blank"
          :href="cv.contact.linkedin"
          aria-label="Contact me through LinkedIn"
        >
          <IconCSS name="uil:linkedin-alt" size="20" />
        </a>
      </div>
    </div>
    <div>
      <p>© {{ cv.name }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import cv from '~~/data/cv'
import { useGlobalFlags } from '~~/store/globalFlags'
</script>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
