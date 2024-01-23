<script setup>
    import { ref, computed } from 'vue'

    let counter = ref(0)

    const decrement = () => counter.value--
    const increment = () => counter.value++

    const decrementDisabled = computed(() => counter.value <= 0)

    const fizzBuzzDisplay = computed(() => {
        if (counter.value === 0) return counter.value
        else {
            if (counter.value % 15 === 0) {
                console.log("FizzBuzz");
                return "FizzBuzz"
            }
            else if (counter.value % 5 === 0) return "Buzz"
            else if (counter.value % 3 === 0) return "Fizz"
            else return counter.value
        }
    })
</script>

<template>
    <div>
        <button v-bind:disabled="decrementDisabled" v-on:click="decrement">&lt;&lt;</button>
        <span>{{ fizzBuzzDisplay }}</span>
        <button @click="increment">&gt;&gt;</button>
    </div>
</template>

<style scoped>
    div {
        position: relative;
        height: 50%;
        aspect-ratio: 1 / 1;
        background-color: rgb(182, 125, 19);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div > * {
        position: absolute;
    }

    div > span {
        font-size: 5rem;
        font-family: monospace;
        color: hsl(0, 0%, 85%);
    }

    div > button {
        bottom: 10%;
        height: 20%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: none;
        background-color: rgb(138, 16, 16);
        color: hsl(0, 0%, 95%);
        font-size: 2rem;
        transition: background-color 400ms ease, scale 400ms ease;
    }

    div > button:not([disabled]):hover {
        background-color: rgb(172, 32, 32);
        cursor: pointer;
        scale: 1.05;
    }

    div > button:is([disabled]) {
        background-color: gray;
    }

    div > button:first-child {
        left: 10%;
    }

    div > button:last-child {
        right: 10%;
    }
</style>