<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps(['goat'])
    const emits = defineEmits(['deleteGoat'])

    const randomPictureURL = props.goat.isDamascus ? 'https://www.thehappychickencoop.com/wp-content/uploads/2023/05/damascus-goat-close-up.jpg'
    : 'https://source.unsplash.com/random/200x200?goat&sig=' + Math.floor(Math.random() * 100) + 1

    const deleteGoatHandler = () => {
        emits('deleteGoat')
    }
</script>

<template>
    <div class="card">
        <img :src="randomPictureURL" alt="Random Goat">
        <h3>{{ goat.name }}</h3>
        <ul>
            <li><b>Date de naissance: </b>{{ goat.birthDate.toLocaleDateString() }}</li>
            <li v-if="goat.isDamascus"><b>Victimes: </b>{{ goat.nbVictims }}</li>
        </ul>
        <button :class="goat.isDamascus ? 'damascus' : ''" @click="deleteGoatHandler">Supprimer</button>
    </div>
</template>

<style scoped>
    .card {
        aspect-ratio: 1 / 1.5;
        background-color: rgb(143, 22, 22);
        border-radius: 2rem 2rem 1rem 1rem;
        display: grid;
        grid-template: 2fr 2fr 8fr / 1fr;
        
        color: hsl(0, 0%, 95%);
        font-family: monospace;
    }
    
    .card > img {
        width: 100%;
        border-radius: 2rem 2rem 0 0;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    .card > h3 {
        text-align: center;
        font-size: 1.5rem;
        margin-block: 0.5rem;
        text-transform: uppercase;
    }

    .card > ul {
        list-style: none;
        margin: 0;
        padding: 0 10%;
    }

    .card > button {
        margin-block: 0.5rem;
        display: inline-block;
        margin-inline: auto 1rem;
        background-color: hsl(0, 0%, 15%);
        color: hsl(0, 0%, 95%);
        font-family: monospace;
        padding: 0.25em 0.5em;
        font-size: 1.1rem;
        border: none;
        border-radius: 0.25em;
        transition: background-color 400ms ease,
        scale 400ms ease,
        rotate 800ms ease,
        translate 100ms ease;
    }
    
    .card > button:hover {
        cursor: pointer;
        background-color: hsl(0, 0%, 34%);
        scale: 1.1;
    }
    
    .card > button.damascus:hover {
        cursor: pointer;
        background-color: hsl(74, 100%, 50%);
        scale: 5;
        rotate: 120deg;
        translate: (20%, 50%);
    }
</style>