<template>
  <div class="h-screen">
    <CvHeader class="h-1/6" />
    <div
      class="card bg-base-100 shadow-xl h-4/6 mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2 w-full"
    >
      <div class="card-body">
        <slot />
      </div>
    </div>
    <CvFooter class="h-1/6" />
  </div>
</template>

<script setup lang="ts"></script>
