<script lang="ts" setup>
import { defineProps, computed } from "vue";

const { msg, to, icon, onclick, ghost, round, square } = defineProps<{
  msg?: string;
  to?: string;
  icon?: boolean;
  onclick?: () => void;
  ghost?: boolean;
  round?: boolean;
  square?: boolean;
}>();

const displayMsg = computed(() => msg ?? to ?? "Enter");

const buttonClasses = computed(() => {
  let baseClasses = "inline-flex py-2 px-4 font-medium cursor-pointer mt-4"; // update these to customize the button
  let borderClasses = round
    ? "rounded-full"
    : square
    ? "rounded-none"
    : "rounded-sm"; 

  let styleClasses = ghost
    ? `bg-transparent border border-primary-light hover:bg-primary hover:text-white text-primary-light ${borderClasses}`
    : `bg-primary border border-primary-light hover:bg-primary-light text-white ${borderClasses}`;

  return `${baseClasses} ${styleClasses} transition-all duration-100 ease-in-out`;
});

</script>

<template>
  <NuxtLink :to="to" :class="buttonClasses" @click="onclick" class="h-min">
    <p>{{ displayMsg }}</p>
    <i-mdi-arrow-right v-if="icon" class="mt-0.5 ml-2" />
  </NuxtLink>
</template>
