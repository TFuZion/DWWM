<script setup>
  import { ref } from 'vue'
  import MyComponent from './components/MyComponent.vue'

  const isShown = ref(false)
</script>

<template>
  <button @click="isShown = !isShown">Switch to {{ isShown ? 'false' : 'true' }}</button>
  <MyComponent v-if="isShown" />
</template>

<style scoped>

</style>
