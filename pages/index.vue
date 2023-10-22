<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="text-primary">H1 with primary color</h1>
    <h2 class="text-secondary-dark">H2 with secondary dark variation</h2>
    <p>This is a paragraph.</p>
    <div class="flex space-x-4">
      <Btn :icon="false" :to="'about'" />
      <Btn :icon="true" :to="'lkj'" msg="error page" />
    </div>
  </div>
</template>

<style scoped></style>
