<script setup>
import { useWalletStore } from '../stores/wallet.js';
import { storeToRefs } from "pinia";
const walletStore = useWalletStore();
const {countDepense} = storeToRefs(walletStore)
const {countWallet} = storeToRefs(walletStore)
</script>

<template>
  <h1>Total</h1>
  <div id="container">
    <div class="flex-card">
      <h3>Montant du Compte</h3>
      <p>{{ countWallet }} €</p>
    </div>
    <div class="flex-card">
      <h3>Total Dépensé</h3>
      <p id="dep">{{ countDepense }} €</p>
    </div>
  </div>
</template>

<style scoped>
h1, h3 {
  color: #ebe9fc;
  margin: 10px;
}
#container {
  display: flex;
  justify-content: space-evenly;
}
h3 {
  font-size: 1.3rem;
  text-align: center;
}
.flex-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  margin: 15px;
}
p {
  background-color: #584bd0;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #ebe9fc;
  font-weight: bold;
}
#dep {
  background-color: #373169;
}
</style>
