<script setup>
import { useWalletStore } from '../stores/wallet.js';
import { storeToRefs } from 'pinia';
const walletStore = useWalletStore();
const {countDecrement} = storeToRefs(walletStore)

</script>

<template>
  <h1>Historique Des Dépenses</h1>
  <main class="container">
    <div id="flex-card" v-for="sortie in countDecrement" :key="sortie.id">
      <p> - {{ sortie.montant }} € </p>
      <p>{{ sortie.description}}</p>
    </div>
  </main>
</template>

<style scoped>
#flex-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #aeaacd;
  color: rgb(29, 29, 29);
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
}
h1 {
  color: #ebe9fc;
  margin: 10px;
}
</style>
