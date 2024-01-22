<script setup>
    import { ref, computed } from 'vue'

    let count = ref(0) // Proxy
    let countBis = ref(25)

    const buttonDisabled = () => {
        console.log('buttonDisabled()');
        return count.value >= 20
    }
    const buttonDisabledComputed = computed(() => {
        console.log('buttonDisabledComputed()');
        return count.value >= 20
    }) // Cache

    const incrementCount = () => {
        count.value++
        console.log(count.value);
    }

    const incrementCountBis = () => {
        countBis.value++
        console.log(countBis.value);
    }
</script>

<template>
    <button :disabled="buttonDisabledComputed" @click="incrementCount">Count: {{ count }}</button>
    <button :disabled="buttonDisabledComputed" @click="incrementCountBis">Count: {{ countBis }}</button>
</template>

<style scoped>
    button {
        background-color: rgb(144, 17, 17);
        padding: 0.5em 1em;
        color: hsl(0, 0%, 95%);
        border-radius: 0.5em;
        border: none;
        margin: 0.5em;
        transition: background-color 400ms ease, scale 400ms ease;
    }
    
    button:not([disabled]):hover {
        background-color: rgb(172, 32, 32);
        cursor: pointer;
        scale: 1.05;
    }

    button:is([disabled]) {
        background-color: gray;
    }
</style>