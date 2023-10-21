<script setup>
const error = useError();
</script>

<template>
    <NuxtLayout name="404">
        <div>
            <div v-if="error.statusCode === 404">
                <h1>404</h1>
                <h2>
                    <strong>{{ error.message }}</strong>
                </h2>
                <p>It looks like you found a glitch in the matrix...</p>
                <Btn msg="home" :icon="false" to="/" />
            </div>
        </div>
    </NuxtLayout>
</template>
