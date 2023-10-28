<template>
  <span :class="[badgeClass, 'uppercase']" class="rounded-full text-sm py-0.5 px-2 font-bold tracking-wide shadow">
    {{ word }}
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  word: {
    type: String,
    default: 'NEW'
  },
  bg: {
    type: String,
    default: 'secondary'
  }
})

const { word, bg } = props

const badgeClass = computed(() => {
  const bgClass = bg ? `bg-${bg}` : 'bg-secondary';
  return [
    'badge',
    bgClass
  ]
})
</script>

<style scoped>

</style>
