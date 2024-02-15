<script setup lang="ts">
import { ref } from 'vue';
import memoryType from '../types/memory.ts'
import {useMemoryStore} from '@/stores/memory.js'
const memory: memoryType = ref({
  name: '',
  description: ''
})
const memoryStore = useMemoryStore();
const addMem: = () => {
  memoryStore.addMem(memory.value)
  memory.value = {
    name: '',

    description: ''
  }
}
</script>

<template>
  <form @submit.prevent="addMem(item)">
    <div>
      <label for="nameMem">Nom du mémoire</label>
      <input v-model="memory.name" id="nameMen" type="text">
    </div>
    <div>
      <img src="https://picsum.photos/200" alt="imageRadom">
    </div>
    <div>
      <label for="descMen">Description du Memoire</label>
      <textarea v-model="memory.description" id="descMen" cols="30" rows="10"></textarea>
    </div>
    <button></button>
  </form>
</template>