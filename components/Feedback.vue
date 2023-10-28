<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  feedback: 'error' | 'success' | 'incomplete' | 'invalid' | 'consent'
}>();
</script>

<template>
  <div
    v-if="feedback === 'error'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    There was an error processing your request.
  </div>

  <div
    v-else-if="feedback === 'success'"
    class="text-white w-full block p-3 mt-4 bg-green-500"
  >
    Success! Thanks for signing up.
  </div>

  <div
    v-else-if="feedback === 'incomplete'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please complete all required fields.
  </div>

  <div
    v-else-if="feedback === 'invalid'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please enter a valid email address.
  </div>

  <div
    v-else-if="feedback === 'consent'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please agree to terms and conditions.
  </div>
</template>

<style scoped></style>
