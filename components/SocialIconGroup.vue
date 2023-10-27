<template>
  <div class="text-stone-200 relative my-4">
    <section role="region" aria-label="Social Links">
      <div class="flex items-start">
        <nuxt-link to="https://mstdn.social/" target="_blank">
          <i-mdi-mastodon class="inline px-1 text-stone-100 hover:text-gray-100 text-3xl" />
          <span class="sr-only">Mastodon</span>
        </nuxt-link>
        <a href="https://github.com/" target="_blank">
          <i-mdi-github class="inline px-1 text-stone-100 hover:text-gray-100 text-3xl" />
          <span class="sr-only">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <i-mdi-linkedin class="inline px-1 text-stone-100 hover:text-stone-100 text-3xl" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
