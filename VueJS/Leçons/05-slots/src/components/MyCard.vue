<script setup>

    const props = defineProps(['cardTitle', 'monHTML'])


</script>

<template>
    <div class="card">
        <h3>{{ cardTitle }}</h3>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
</style>