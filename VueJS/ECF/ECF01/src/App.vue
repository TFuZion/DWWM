<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Wallet Wizzard</h1>
    <nav>
      <RouterLink to="/homepage">HomePage</RouterLink>
      <RouterLink to="/historique">Historique</RouterLink>
      <RouterLink to="/add">Transaction</RouterLink>
      <RouterLink to="/ttdepense">Totale</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  > h1 {
    text-align: center;
    font-size: 3rem;
    color: #ebe9fc;
    margin: 10px;
  }
}
a {
  color: #584db0;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
}
nav {
  display: flex;
  justify-content: space-evenly;
}
main {
  width: 90%;
}
.router-link-active {
  height: 3px;
  background-color: #ebe9fc;;
}
</style>
