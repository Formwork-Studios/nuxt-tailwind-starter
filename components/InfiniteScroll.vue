<template>
  <div class="marquee">
    <div class="marquee__content" :style="{ animationDuration: animationSpeed }">
      <span v-for="(letter, index) in (message + ' ').split('')" :key="index" class="marquee__item">
        {{ letter }}
      </span>
    </div>
    <div class="marquee__content" :style="{ animationDuration: animationSpeed }">
      <span v-for="(letter, index) in (message + ' ').split('')" :key="index + 1000" class="marquee__item">
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect, onMounted } from 'vue';

const props = defineProps({
  fontSize: {
    type: String,
    default: '16px'
  },
  message: {
    type: String,
    default: 'YOUR_SPECIAL_STRING'
  },
  speed: {
    type: Number,
    default: 10
  }
});

const animationSpeed = computed(() => `${props.speed}s`);


onMounted(() => {
  watchEffect(() => {
    document.documentElement.style.setProperty('--baseFontSize', props.fontSize);
  });
});
</script>

<style>
.marquee {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  user-select: none;
  display: flex;
  gap: var(--gap);
  --gap: 1rem;
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  min-width: 100%;
  gap: var(--gap);
  animation: scroll linear infinite;
}

.marquee__item {
  white-space: nowrap;
  font-size: var(--baseFontSize);
  margin-right: 1px; 
}

@media (max-width: 600px) {
  .marquee__item {
    font-size: calc(var(--baseFontSize) * 0.5);
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .marquee__item {
    font-size: calc(var(--baseFontSize) * 0.75);
  }
}

@media (min-width: 1025px) {
  .marquee__item {
    font-size: calc(var(--baseFontSize) * 2);
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
