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
  <NuxtLink :to="to" class="inline-flex p-2 bg-gray-800 text-white cursor-pointer mt-4" @click="onclick">
    <p>{{ displayMsg }}</p>
    <i-mdi-arrow-bottom-right v-if="icon" class="mt-0.5 -mr-2" />
  </NuxtLink>
</template>

<style scoped></style>
