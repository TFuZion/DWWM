<script setup>
  import { ref } from 'vue'
  import MonComponent from './components/MonComponent.vue'

  const isShown = ref(false)
</script>

<template>
  <button @click="isShown = !isShown">Switch to {{ isShown ? 'false' : 'true' }}</button>
  <MonComponent v-if="isShown" />
</template>

<style scoped>
</style>
