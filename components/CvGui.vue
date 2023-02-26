<template>
  <div class="grid grid-cols-2 text-xs sm:text-sm 2xl:text-lg">
    <CvGuiItem :items="cv.languages" title="Languages" />
    <CvGuiItem :items="cv.frameworks" title="Frameworks" />
    <CvGuiItem :items="cv.tools" title="Tools" />
    <CvGuiItem :items="cv.skills" title="Skills" />
    <CvGuiItem :items="uniqueExperienceItems" title="Experience" />
  </div>
</template>

<script setup lang="ts">
import cv from '~~/data/cv'

const uniqueExperienceItems = [
  ...new Set(
    cv.experience.map(
      (exp) => `${exp.company} (${exp.startDate.getFullYear()})`
    )
  ),
]
</script>
