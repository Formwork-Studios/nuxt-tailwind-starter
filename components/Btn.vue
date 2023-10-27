<script lang="ts" setup>
import { defineProps, computed } from "vue";

const { msg, to, icon, onclick, ghost } = defineProps<{
  msg?: string;
  to?: string;
  icon?: boolean;
  onclick?: () => void;
  ghost?: boolean;
}>();

const displayMsg = computed(() => msg ?? to ?? "Enter");

const buttonClasses = computed(() => {
  return ghost
    ? "inline-flex py-2 px-4 font-medium bg-transparent border border-gray-400 hover:bg-gray-300 hover:text-gray-800 transition-all duration-100 ease-in-out text-gray-100 cursor-pointer mt-4 rounded-sm"
    : "inline-flex py-2 px-4 font-medium bg-gray-700 hover:bg-gray-600 transition-all duration-100 ease-in-out text-white cursor-pointer mt-4 rounded-sm";
});

</script>

<template>
  <NuxtLink :to="to" :class="buttonClasses" @click="onclick" class="h-min">
    <p>{{ displayMsg }}</p>
    <i-mdi-arrow-right v-if="icon" class="mt-0.5 ml-2" />
  </NuxtLink>
</template>
