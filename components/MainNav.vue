<script lang="ts" setup></script>

<template>
  <div class="w-full flex flex-col items-center bg-stone-900 text-white mb-4 shadow-sm">
    <div class="container my-2 px-2 flex justify-between text-lg">
      <NuxtLink to="/" class="font-medium">Nuxt Tailwind Starter</NuxtLink>
      <div class="space-x-6 font-medium">
        <NuxtLink to="/about" activeClass="text-primary-light" class="hover:text-primary-light transition-all duration-100">About</NuxtLink>
        <NuxtLink to="/contact" activeClass="text-primary-light" class="hover:text-primary-light transition-all duration-100">Contact</NuxtLink>
      </div>
    </div>
  </div>
</template>


<style scoped></style>
