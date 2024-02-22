<script setup>
import { ref } from "vue";
import { useWalletStore } from "@/stores/wallet.js";
import { storeToRefs } from "pinia";
const walletStore = useWalletStore();
const {countWallet} = storeToRefs(walletStore)
const {countDepense} = storeToRefs(walletStore)

const action = ref({
  montant: 0,
  description: "",
});


const incrementWallet = () => {
  const transactionMontant = action.value.montant;
    countWallet.value += transactionMontant;
    walletStore.incrementAction(action.value);
    action.value = {
      montant: 0,
      description: "",
    };
};

const decrementWallet = () => {
  const transactionMontant = action.value.montant;
    countWallet.value -= transactionMontant;
    countDepense.value -= transactionMontant;
    walletStore.decrementAction(action.value);
    action.value = {
      montant: 0,
      description: "",
    };
};

const plusOuMoins = ref(true);
</script>

<template>
  <h1>Add Page</h1>
  <div id="but">
    <button @click="plusOuMoins = true">Gain</button>
    <button @click="plusOuMoins = false">Dépense</button>
  </div>
  <main>
    <div v-if="plusOuMoins" class="container">
      <h3>Nouveau gain :</h3>
      <form @submit.prevent="incrementWallet(action)">
        <div>
          <label for="Entree">Entrée : </label>
          <input id="Entree" type="number" v-model="action.montant" />
        </div>
        <div>
          <label for="description">Description : </label>
          <textarea
            id="description"
            cols="25"
            rows="3"
            
            v-model="action.description"
          ></textarea>
        </div>
        <button>Ajourtée l'entrée d'argent</button>
      </form>
    </div>

    <div v-else class="container">
      <h3>Nouvelle dépense :</h3>
      <form @submit.prevent="decrementWallet(action)">
        <div>
          <label for="sortie">Sortie : </label>
          <input id="sortie" type="number" v-model="action.montant" />
        </div>
        <div>
          <label for="description">Description : </label>
          <textarea
            id="description"
            cols="25"
            rows="3"
            v-model="action.description"
          ></textarea>
        </div>
        <button>Ajourtée sortie d'argent</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: #ebe9fc;
  margin: 10px;
}
#but {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  > button {
    width: 100%;
    padding: 5px;
    background-color: var(--background-color);
    color: #373169;
    font-size: 1.5rem;
    margin: 0;
    transition: color 0.2s ease 0.2s;
  }
  > button:hover {
    color: #aeaacd;
  }
  
}
input, textarea {
  background-color: #aeaacd;
  border: none;
  padding: 5px;
  width: 200px;
}
button {
  background-color: #373169;
  color: #ebe9fc;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  width: 100%;
}
.container {
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ebe9fc;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
}
div {
  display: flex;
  margin: 15px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>
