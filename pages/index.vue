<script lang="ts" setup>
const renderComponent = ref(true);

const componentKey = ref(0);

function reloadComponent() {
  componentKey.value++;
}

const forceRender = async () => {
  // Here, we'll remove MyComponent
  renderComponent.value = false;

   // Then, wait for the change to get flushed to the DOM
  await nextTick();

  // Add MyComponent back in
  renderComponent.value = true;
};
</script>

<template>
  <div>
    <h1 class="text-primary">H1 with primary color</h1>
    <h2 class="text-secondary-dark">H2 with secondary dark variation</h2>
    <p class="pt-6">Icon group component:</p>
    <SocialIconGroup />
    <p class="pt-6">Buttons:</p>
    <div class="flex space-x-4">
      <Btn :icon="false" :to="'about'" />
      <Btn :icon="true" :to="'lkj'" msg="error page" />
      <Btn ghost />
    </div>
    <p class="pt-6">Animated Hero Text:</p>
    <HeroTextAnimated :quote="'This is an animated quote'" :key="componentKey"/>
  </div>
</template>

<style scoped></style>
