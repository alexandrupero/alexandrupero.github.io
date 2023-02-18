<template>
  <footer class="footer footer-center bg-base-100 text-base-content rounded">
    <div>
      <div class="grid grid-flow-col gap-4">
        <a target="_blank" :href="cv.contact.instagram">
          <IconCSS name="uil:instagram" size="20" />
        </a>
        <a target="_blank" :href="cv.contact.github">
          <IconCSS name="uil:github-alt" size="20" />
        </a>
        <a target="_blank" :href="cv.contact.linkedin">
          <IconCSS name="uil:linkedin-alt" size="20" />
        </a>
      </div>
    </div>
    <div>
      <p>by {{ cv.name }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import cv from '~~/data/cv'
</script>
