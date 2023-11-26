<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <div class="w-full flex flex-col items-center bg-stone-900 text-white mb-4 shadow-sm">
    <div class="container my-2 px-2 flex flex-col md:flex-row justify-between text-lg">
      <div class="flex justify-between items-center w-full md:mb-0">
        <NuxtLink :to="'/'" class="font-medium">Nuxt Tailwind Starter</NuxtLink>
        
        <!-- Hamburger Menu -->
        <button @click="toggleMenu" class="md:hidden">
          <i-mdi-close v-if="menuOpen" class="w-6 h-6"></i-mdi-close>
          <i-mdi-menu v-else class="w-6 h-6"></i-mdi-menu>
        </button>
      </div>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex md:space-x-6">
        <NuxtLink to="/about" activeClass="border-stone-200" class="hover:border-b-2 transition-all duration-100">About</NuxtLink>
        <NuxtLink to="/contact" activeClass="border-stone-200 " class="hover:border-stone-200 border-b-2 border-transparent transition-all duration-100">Contact</NuxtLink>
        <NuxtLink to="https://github.com/Formwork-Studios/nuxt-tailwind-starter" activeClass="text-primary-light" class="text-xl mt-0.5"><i-mdi-github /></NuxtLink>
      </div>

      <!-- Mobile Navigation Links -->
      <div :class="{ 'opacity-0 pointer-events-none': !menuOpen, 'opacity-100 pointer-events-auto': menuOpen }" 
      class="fixed top-0 left-0 w-full h-full bg-stone-900 flex-col space-y-4 z-50 transition-opacity duration-300 ease-in-out mt-10 pt-10 px-2 flex flex-col">
        <NuxtLink to="/about" activeClass="text-primary-light" class="hover:text-primary-light transition-all duration-100">About</NuxtLink>
        <NuxtLink to="/contact" activeClass="text-primary-light" class="hover:text-primary-light transition-all duration-100">Contact</NuxtLink>
        <NuxtLink to="https://github.com/Formwork-Studios/nuxt-tailwind-starter" activeClass="text-primary-light" class="hover:text-primary-light transition-all duration-100 text-xl mt-0.5"><i-mdi-github /></NuxtLink>

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
