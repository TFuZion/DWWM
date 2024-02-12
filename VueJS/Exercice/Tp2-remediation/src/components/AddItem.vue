<script setup>
import { ref } from "vue";
import { useInventoryListStore } from "@/stores/inventoryList";

const thing = ref("");
const description = ref("");

const store = useInventoryListStore();

function addInBackPack(item, desc) {
  if (item.length === 0) {
    return;
  }
  store.addItem(item, desc);
  thing.value = "";
  description.value = "";
}
</script>

<template>
  <form @submit.prevent="addInBackPack(thing, description)"></form>
  <div>
    <label for="nameThing">Nom de l'objet : </label>
    <input v-model="thing" type="text" id="nameThing" />
  </div>
  <div>
    <label for="description">Description : </label>
    <textarea
      v-model="description"
      id="description"
      cols="30"
      rows="10"
    ></textarea>
  </div>
  <button>Ajouter</button>
</template>

<style scoped>
form {
  margin: 20px;
}
div {
  border: 1px solid red;
}
</style>
