<template>
  <div :class="['my-14', backgroundColor, small, 'border-2 border-opacity-50 border-stone-800 rounded h-full w-full bg-gradient-to-bl font-switzer leading-relaxed tracking-wide text-stone-200']" id="imageDescription">    <!-- Entire Header as toggle button -->
    <div @click="toggleDescription" class="flex items-center justify-between cursor-pointer" :aria-expanded="isDescriptionVisible.toString()" role="button" :aria-label="isDescriptionVisible ? 'Collapse description' : 'Expand description'">
      <h2 :class="[small ? 'text-base md:text-xl' : 'text-xl md:text-3xl', 'text-stone-100 tracking-widest uppercase p-2.5 md:p-4']">{{ title }}</h2>
            <i-mdi-plus-thick v-if="!isDescriptionVisible" class="text-2xl mr-4" />
      <i-mdi-minus-thick v-else class="text-2xl mr-4" />
    </div>
    <!-- Transition for description -->
    <transition name="description" @before-enter="beforeEnter" @after-leave="afterLeave">
      <div v-if="isDescriptionVisible" class="description-box !pb-0">
        <slot name="description"></slot>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Default Title'
  },
  backgroundColor: {
    type: String,
    default: 'bg-red-950' // Default background color
  },
  small: {
    type: Boolean,
    default: false // Default value for small prop
  }
});

// Computed class based on the small prop
const smallClass = computed(() => {
  return props.small ? 'text-sm md:text-base p-1 md:p-2' : 'text-xl md:text-2xl p-2.5 md:p-4';
});

const isDescriptionVisible = ref(false);

const toggleDescription = () => {
  isDescriptionVisible.value = !isDescriptionVisible.value;
};

const beforeEnter = (el) => {
  el.style.paddingBottom = '1rem';
};

const afterLeave = (el) => {
  el.style.paddingBottom = '0';
};
</script>


<style scoped>
/* Transition enter and leave active */
.description-enter-active, .description-leave-active {
  transition: opacity 0.5s ease, max-height 0.5s ease;
  overflow: hidden;
}

/* Transition enter from and leave to */
.description-enter-from, .description-leave-to {
  opacity: 0;
  max-height: 0;
}

/* Transition enter to and leave from */
.description-enter-to, .description-leave-from {
  opacity: 1;
  max-height: 1000px; /* Adjust as needed */
}

/* Description box styling */
.description-box {
  /* No padding */
}
</style>
