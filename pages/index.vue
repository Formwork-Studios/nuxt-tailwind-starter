<script lang="ts" setup>

// Provides fake feedback for the feedback component
const feedback = ref<string | null>('success');
const updateFeedback = (value: 'error' | 'success' | 'incomplete' | 'invalid' | 'consent') => {
  feedback.value = value;
};
</script>

<template>
  <div>
    <p class="pt-6 pb-4 componentHeader ">Theme Color Swatches</p>
    <div class="mb-8">
  <h2 class="text-lg font-semibold mb-2">Primary</h2>
  <div class="flex space-x-4 mb-4">
    <div class="bg-primary-light w-16 h-8"></div>
    <div class="bg-primary w-16 h-8"></div>
    <div class="bg-primary-dark w-16 h-8"></div>
  </div>
</div>

<div class="mb-8">
  <h2 class="text-lg font-semibold mb-2">Secondary</h2>
  <div class="flex space-x-4 mb-4">
    <div class="bg-secondary-light w-16 h-8"></div>
    <div class="bg-secondary w-16 h-8"></div>
    <div class="bg-secondary-dark w-16 h-8"></div>
  </div>
</div>

<div class="mb-8">
  <h2 class="text-lg font-semibold mb-2">Tertiary</h2>
  <div class="flex space-x-4">
    <div class="bg-tertiary-light w-16 h-8"></div>
    <div class="bg-tertiary w-16 h-8"></div>
    <div class="bg-tertiary-dark w-16 h-8"></div>
  </div>
</div>

    <p class="pt-6 componentHeader ">Buttons</p>
    <div class="flex space-x-4">
      <FooBtn :icon="false" :to="'/'" msg="regular" />
      <FooBtn :icon="true" :to="'/'" msg="with icon" />
      <FooBtn msg="ghost" ghost />
      <FooBtn msg="rounded" round />
      <FooBtn msg="square" square />

    </div>
    <p class="pt-6 pb-4 componentHeader ">Toggle</p>
    <FooToggle />
    <p class="pt-6 componentHeader">Feedback</p>
    <div class="flex space-x-4">
      <FooBtn :icon="false" msg="Success" @click="updateFeedback('success')" />
      <FooBtn :icon="false" msg="Error" @click="updateFeedback('error')" />
    </div>
    <Feedback :feedback="feedback" />
    <p class="pt-6 pb-2 componentHeader ">UI Badges</p>
    <div class="flex space-x-2">
      <UiBadge :word="'New'" :color="'#ffa500'" />
      <UiBadge :word="'Hot'" />
    </div>
    <p class="pt-6 pb-2 componentHeader ">Cards</p>
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
    <p class="pt-6 pb-4 componentHeader ">Contact forms</p>
    <ContactForm />
    <FooAccordion title="Foo Accordion" background-color="bg-stone-900">
      <template v-slot:description>
        <div class="description p-2.5 md:p-4">
          Some accordion content here.
        </div>
      </template>
    </FooAccordion>
    <FooAccordion title="Foo Accordion" background-color="bg-stone-900" small>
      <template v-slot:description>
        <div class="description p-2.5 md:p-4">
          Some accordion content here.
        </div>
      </template>
    </FooAccordion>
    <ContactEmail class="my-10" />
    <p class="pt-6 componentHeader ">Animated Hero Text</p>
    <HeroTextAnimated :quote="'This is animated hero text'" :key="componentKey" />
    <p class="pt-6 componentHeader ">Icon group component</p>
    <SocialIconGroup />
    <InfiniteScroll :fontSize="'100px'" :message="'THIS  IS  A  COOL  MESSAGE  '" :speed="10" />
    <p class="pt-6 pb-4 componentHeader ">Footer</p>


    <MainFooter />
  </div>
</template>

<style scoped>
.componentHeader {
  font-weight: bold !important;
  text-transform: uppercase !important;
  opacity: 40%;
}
</style>
