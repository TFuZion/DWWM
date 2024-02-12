<script setup>
import { ref } from "vue";
import { useInventoryListStore } from "@/stores/inventoryList";

const item = ref({
  name: '',
  description: ''
});


const store = useInventoryListStore();

const addInBackPack = () => {
  store.addItem(item.value);
  item.value = {
    name: '',
    description: ''
  }
}

</script>

<template>
  <form @submit.prevent="addInBackPack(item)"></form>
  <div>
    <label for="nameThing">Nom de l'objet : </label>
    <input v-model="item.name" type="text" id="nameThing" />
  </div>
  <div>
    <label for="description">Description : </label>
    <textarea
      v-model="item.description"
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
