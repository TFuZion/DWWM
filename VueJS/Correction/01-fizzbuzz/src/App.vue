<script setup>
  import FizzBuzz from './components/FizzBuzz.vue';
</script>

<template>
  <div id="app">
    <FizzBuzz />
  </div>
</template>

<style scoped>
  div#app {
    background-color: hsl(0, 0%, 20%);
    height: 100dvh;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
