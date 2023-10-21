<script setup>
const error = useError();
</script>

<template>
    <NuxtLayout name="404">
        <div>
            <h1>Dang</h1>
            <p>
                <strong>{{ error.message }}</strong>
            </p>
            <p>It looks like something broke.</p>
            <p>Sorry about that.</p>
            <NuxtLink to="/" class="inline-flex items-center">
                <i-mdi-arrow-left class="pr-1" />
                Go Home
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
