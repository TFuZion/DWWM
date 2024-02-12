<script setup>
import { ref, computed } from 'vue'

// Récupération de l'username
const props = defineProps({
  getUserName: String
})

// Date avec computed
const formattedDateTime = computed(() => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  return new Date().toLocaleDateString('fr-FR', options);
})

// Bouton "Se déconnecter" avec emit
const emit = defineEmits(['update:userStartApp']);

const toggleUserStartApp = () => {
  userStartApp.value = !userStartApp.value;
  emit('update:userStartApp', userStartApp.value) // Emettre l'évènement avec la nouvelle valeur
}

const userStartApp = ref(false);
</script>

<template>
  <div>Bienvenue {{ getUserName }}</div>
  <div>Nous sommes le {{ formattedDateTime }}</div>
  <a href="#" @click="toggleUserStartApp">Se déconnecter</a>
</template>
