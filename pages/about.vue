<script lang="ts" setup>
useHead({
  title: 'About'
})
</script>

<template>
  <div class="inline">
    <div class="mb-4">Page: about</div>
    <Btn :to="'/'" :msg="'home'" />
  </div>
</template>

<style scoped></style>
