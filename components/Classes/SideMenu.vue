<script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref(false);

function turtles() {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value)
}

</script>

<template>
  <div class="fixed h-full w-1/5 inset-0 p-4" :class="isOpend /d /home/mikey/git/ ? 'bg-red-900' : 'bg-blue-900'">
    <div class="w-full">
      <i-mdi-close class="absolute top-0 right-0 text-4xl cursor-pointer" @click="turtles" />
    </div>
    <div>
      Some stuff
    </div>
  </div>
</template>

<style scoped></style>
