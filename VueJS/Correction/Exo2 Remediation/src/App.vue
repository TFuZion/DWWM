<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/add-item">Add Item</RouterLink>
        <RouterLink to="/inventory-list">Inventory List</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav {
  display: flex;
  gap: 20px;
  font-size: 2rem;
}
a:hover{
  scale: 1.2;
}
</style>