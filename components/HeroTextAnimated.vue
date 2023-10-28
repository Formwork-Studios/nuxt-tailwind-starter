<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

const props = defineProps({
  quote: String,
});

const words = ref(props.quote.split(' '));
let observer;

onMounted(() => {
  setTimeout(() => {
   // console.log("Starting Intersection Observer.");
    observer = new IntersectionObserver(
      (entries) => {
       // console.log("Observing entries:", entries);
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // console.log("Element is intersecting:", entry.target);
            setTimeout(() => {
              entry.target.classList.add('animate-delay');
              // console.log("Class added:", entry.target);
            }, index * 250);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    const quoteWords = ref(document.querySelectorAll('.quoteWord'));
    quoteWords.value.forEach((word) => {
      // console.log("Adding observer to:", word);
      observer.observe(word);
    });
  }, 150); 
});

onUnmounted(() => {
  // console.log("Component unmounted.");
  if (observer) {
    observer.disconnect();
    // console.log("Observer disconnected.");
  }
});
</script>

<template>
  <div class="quoteContainer">
    <span v-for="(word, index) in words" :key="index" class="quoteWord">
      {{ word + '&nbsp' }}
    </span>
  </div>
</template>


<style scoped>
.quoteWord {
  opacity: 0;
  font-size: 60px;
  display: inline-block;
}
.animate-delay {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
