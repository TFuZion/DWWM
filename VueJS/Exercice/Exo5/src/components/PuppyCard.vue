<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps(['puppy'])
    const emits = defineEmits(['deletePuppy'])

    const deletePuppyHandler = () => {
        emits('deletePuppy')
    }
    const randomPictureURL = 'https://source.unsplash.com/random/200x200?puppy&sig=' + Math.floor(Math.random() * 100) + 1
</script>

<template>
    <div class="card">
      <h3>{{ puppy.name }}</h3>
      <img :src="randomPictureURL" alt="Random puppy">
        <ul>
            <li><b>Date de naissance : </b>{{ puppy.birthDate.toLocaleDateString() }}</li>
            <li><b>Race : </b>{{ puppy.breed }}</li>
            <li><b>Couleur du peulage : </b>{{ puppy.color }}</li>
            <li v-if="puppy.weaning"><b>Sevré : OUI </b></li>
            <li v-if="puppy.weaning = false"><b>Sevré : NON </b></li>
        </ul>
        <button @click="deletePuppyHandler">Supprimer</button>
    </div>
</template>

<style scoped>
</style>