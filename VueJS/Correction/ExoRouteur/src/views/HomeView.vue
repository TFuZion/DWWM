<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  getUserName: String
})

const formatteDateTime = computed(()=> {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  return new Date().toLocaleDateString('fr-FR', options)
})

const emit = defineEmits(['update:userStartApp'])

const toggleUserStartApp = () => {
  userStartApp.value = !userStartApp
  emit('update:userStartApp', userStartApp.value)
}
const userStartApp = ref(false)
</script>

<template>
<div>
  <h2>Bienvenu : {{ getUserName }}</h2>
  <p>Nous Somme le : {{ formatteDateTime }}</p>
  <a href="#" @click="toggleUserStartApp">Se déconnecter</a>
</div>
</template>
