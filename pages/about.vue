<script lang="ts" setup>
useHead({
  title: 'About'
})
</script>

<template>
  <div class="inline">
    <div>Page: about</div>
    <Btn :to="'/'" :msg="'home'" />
  </div>
</template>

<style scoped></style>
