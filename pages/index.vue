<script lang="ts" setup>

// Provides fake feedback for the feedback component
const feedback = ref<string | null>('success');
const updateFeedback = (value: 'error' | 'success' | 'incomplete' | 'invalid' | 'consent') => {
  feedback.value = value;
};
</script>

<template>
  <div>
    <p class="pt-6 pb-4">Theme Color Swatches:</p>
    <div class="flex space-x-4 mb-4">
      <div class="bg-primary-light w-16 h-8"></div>
      <div class="bg-primary w-16 h-8"></div>
      <div class="bg-primary-dark w-16 h-8"></div>
    </div>
    <div class="flex space-x-4">
      <div class="bg-secondary-light w-16 h-8"></div>
      <div class="bg-secondary w-16 h-8"></div>
      <div class="bg-secondary-dark w-16 h-8"></div>
    </div>
    <p class="pt-6">Buttons:</p>
    <div class="flex space-x-4">
      <Btn :icon="false" :to="'/'" msg="regular" />
      <Btn :icon="true" :to="'/'" msg="with icon" />
      <Btn msg="ghost" ghost />
    </div>
    <p class="pt-6 pb-4">Toggle:</p>
    <UiToggle />
    <p class="pt-6">Feedback:</p>
    <div class="flex space-x-4">
      <Btn :icon="false" msg="Success" @click="updateFeedback('success')" />
      <Btn :icon="false" msg="Error" @click="updateFeedback('error')" />
    </div>
    <Feedback :feedback="feedback" />
    <p class="pt-6 pb-2">UI Badges:</p>
    <div class="flex space-x-2">
      <UiBadge :word="'New'" :bg="'red-500'" />
      <UiBadge :word="'Hot'" />
    </div>
    <p class="pt-6 pb-2">Cards:</p>
    <div class="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
      <UiCard header="Card Heading" imageSrc="https://loremflickr.com/640/360" imageAlt="Random placeholder image" button
        :to="`/about`" :msg="`See More`">
        <p>This card includes a button.</p>
      </UiCard>
      <UiCard header="Special Card Heading" imageSrc="https://loremflickr.com/640/360" showBadge :badgeWord="Hot"
        :badgeColor="'red-500'">
        <p>This card includes a badge.</p>
      </UiCard>
    </div>
    <p class="pt-6 pb-4">Contact form:</p>
    <ContactForm />
    <p class="pt-6">Animated Hero Text:</p>
    <HeroTextAnimated :quote="'This is animated hero text'" :key="componentKey" />
    <p class="pt-6">Icon group component:</p>
    <SocialIconGroup />
    <MainFooter />
  </div>
</template>

<style scoped></style>
