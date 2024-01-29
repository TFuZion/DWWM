<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_FIREBASE_URL


const valeurInput = ref('')
const users = ref([])

let interval = null;


onMounted(async () => {
    interval = setInterval(() => {
        console.log('Je tourne')
    }, 1000)
    const res = await axios.get(BASE_URL + 'users.json')
    const newArray = []
    for (const key in res.data) {
        newArray.push({
            id: key,
            ...res.data[key]
        })
    }
    users.value = newArray
    console.log(users.value);
})

const textEnMaj = (text) => {
    console.log('textEnMaj');
    return text.toUpperCase()
}

onUnmounted(() => {
    if (interval) clearInterval(interval)
    console.log('onUnmounted');
})
</script>

<template>
    <div>
        <input type="text" v-model="valeurInput">
        <span><b>En majuscule: </b>{{ textEnMaj(valeurInput) }}</span>
    </div>
    <ul>
        <li v-for="u in users">{{ u.username }}</li>
    </ul>
</template>

<style scoped>

</style>