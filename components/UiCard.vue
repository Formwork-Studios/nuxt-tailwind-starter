<template>
  <div class="shadow rounded-sm overflow-hidden max-w-sm relative border-2 border-opacity-50 border-stone-800 h-min !max-h-min">
    <img :src="imageSrc" :alt="imageAlt" class="w-full h-48 object-cover" v-if="imageSrc" />
    <div class="p-6 bg-stone-900">
      <div class="flex justify-between items-center mb-1"> 
        <h2 class="text-2xl font-bold">{{ header }}</h2>
        <UiBadge v-if="showBadge" :word="badgeWord" class="top-2 right-2 absolute z-100" />
      </div>
      <slot></slot>
      <Btn :to="to" :msg="msg" v-if="button" class="mt-6" /> 
    </div>
  </div>
</template>


<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  header: string;
  imageSrc?: string;
  imageAlt?: string;
  to?: string;
  msg?: string;
  button?: boolean;
  showBadge?: boolean;
  badgeWord?: string;
  badgeColor?: string;
}>(), {
  button: false,
  showBadge: false
});

const { header, imageSrc, imageAlt, to, msg, button, showBadge, badgeWord, badgeColor } = props;
</script>

<style scoped></style>
