<script setup>
import { useWalletStore } from "../stores/wallet.js";
import { storeToRefs } from "pinia";
const walletStore = useWalletStore();
const { countDecrement } = storeToRefs(walletStore);
const { countIncrement } = storeToRefs(walletStore);
</script>

<template>
  <h1>Home Page</h1>
  <div class="container">
    <div id="plus">
      <div class="flex-card" v-for="entree in countIncrement" :key="entree.id">
        <p>+ {{ entree.montant }} €</p>
        <p>{{ entree.description }}</p>
      </div>
    </div>
    <hr />
    <div id="moins">
      <div class="flex-card" v-for="sortie in countDecrement" :key="sortie.id">
        <p>- {{ sortie.montant }} €</p>
        <p>{{ sortie.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  grid-template-rows: 1fr;
}
.flex-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #aeaacd;
  color: rgb(29, 29, 29);
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
}
hr {
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  height: 100%;
  width: 1px;
}
h1 {
  color: #ebe9fc;
  margin: 10px;
}
</style>
