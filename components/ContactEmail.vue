<script lang="ts" setup>
import { ref } from 'vue';

type FormFeedbackType = 'incomplete' | 'invalid' | 'success' | null;

const email = ref('');
const isLoading = ref(false);
const formFeedback: Ref<FormFeedbackType> = ref(null);

const submitForm = async () => {
  isLoading.value = true;
  formFeedback.value = null;

  if (!email.value.trim()) {
    formFeedback.value = 'incomplete';
    isLoading.value = false;
    return;
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    formFeedback.value = 'invalid';
    isLoading.value = false;
    return;
  }

  setTimeout(() => {
    formFeedback.value = 'success';
    isLoading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="w-full max-w-md">
    <h1 class="text-2xl mb-1 text-left">Subscribe to our newsletter</h1>
    <p class="mb-4 text-lg text-left">Stay updated on new releases and features, guides, and community updates.</p>
    <form @submit.prevent="submitForm" class="flex flex-row bg-stone-200 text-black">
      <label class="sr-only">
        Email
      </label>
      <input
        v-model="email"
        type="email"
        class="w-full px-3 py-2 bg-stone-200"
        aria-label="Email"
      />
      <div class="flex flex-col">
        <button
          type="submit"
          class="px-6 py-2 font-medium bg-gray-700 hover:bg-gray-600 transition-all duration-100 ease-in-out text-white "
          @click.prevent="submitForm"
        >
          {{ isLoading ? 'Loading...' : 'Submit' }}
        </button>
      </div>
    </form>
    <Feedback :feedback="formFeedback" />

  </div>
</template>

<style scoped>
  /* Your compact component styles here */
</style>
