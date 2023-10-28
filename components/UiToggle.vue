<!-- ToggleComponent.vue -->
<template>
  <label class="toggle-wrapper inline-flex items-center cursor-pointer">
    <input type="checkbox" class="hidden" @change="toggleChange" />
    <span class="toggle-slider bg-gray-700 w-8 h-4 rounded-full transition-all duration-100 ease-in-out"></span>
  </label>
</template>

<script lang="ts" setup>
const toggleChange = () => {
  // Handle toggle change here
};
</script>

<style scoped>
.toggle-slider {
  position: relative;
}

.toggle-slider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0.1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s ease;
  transform: translateY(-50%);
}

input[type="checkbox"]:checked + .toggle-slider::before {
  transform: translateX(1rem) translateY(-50%);
}

input[type="checkbox"]:checked + .toggle-slider {
  background-color: gray;
}
</style>
