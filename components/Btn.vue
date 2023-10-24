<script lang="ts" setup>
import { defineProps, computed } from "vue";

const { msg, to, icon, onclick } = defineProps<{
  msg?: string;
  to?: string;
  icon?: boolean;
  onclick?: () => void;
}>();

const displayMsg = computed(() => msg ?? to);

</script>

<template>
  <NuxtLink :to="to" class="inline-flex py-2 px-4 font-medium bg-gray-700 hover:bg-gray-600 transition-all duration-100 ease-in-out text-white cursor-pointer mt-4 rounded-sm" @click="onclick">
    <p>{{ displayMsg }}</p>
    <i-mdi-arrow-right v-if="icon" class="mt-0.5 ml-2" />
  </NuxtLink>
</template>

<style scoped></style>
