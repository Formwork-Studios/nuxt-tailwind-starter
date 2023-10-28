<template>
  <span :class="['uppercase', badgeClass]" :style="badgeStyle" class="rounded-full text-sm py-0.5 px-2 font-bold tracking-wide shadow">
    {{ word }}
  </span>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  word: {
    type: String,
    default: 'NEW'
  },
  color: {
    type: String,
    default: ''
  }
})

const { word, color } = props

const badgeClass = computed(() => {
  return color ? '' : 'bg-secondary'
})

const badgeStyle = computed(() => {
  return color ? { backgroundColor: color } : {}
})
</script>

<style scoped>

</style>
