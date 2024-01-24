<script setup>
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps(['theme', 'btnText', 'ftSize'])
    const emits = defineEmits(['addDog'])
    console.log(props.theme);

    const addDogEmit = () => {
        emits('addDog')
    }

    // const btnStyles = {
    //     backgroundColor: theme === 'danger' ? 'red' : theme === 'primary' ? 'blue' : 'green',
    //     animation: 'blink 400ms linear infinite'
    // }

    const btnClasses = {
        'btn-danger': props.theme === 'danger',
        'btn-primary': props.theme === 'primary',
        'btn-warning': props.theme === 'warning'
    }

    const btnStyles = {
        fontSize: props.ftSize ?? '16px'
    }
</script>

<template>
<button @click="addDogEmit" :style="btnStyles" :class="btnClasses">{{btnText ? btnText : 'Click me'}}</button>
</template>

<style scoped>
    button {
        background-color: green;
        border: none;
        padding: 0.25em 0.5em;
        border-radius: 0.25em;
        font-size: 1.2rem;
        color: hsl(0, 0%, 95%);
        margin-block: 0.5em;
    }
    .btn-danger {
        background-color: red;
    }

    .btn-primary {
        background-color: blue;
    }

    .btn-warning {
        background-color: yellow;
        color: black;
    }

</style>