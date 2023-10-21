<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '~/assets/css/main.css';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt Tailwind Starter` : 'Nuxt Tailwind Starter';
  }
})
</script>
