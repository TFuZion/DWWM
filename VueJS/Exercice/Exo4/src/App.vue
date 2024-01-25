<script setup>
import { ref } from "vue";
import Formulaire from "./components/Formulaire.vue";
import DisplayContact from "./components/DisplayContact.vue";

const contacts = ref([]);
</script>

<template>
  <div id="div-form">
    <Formulaire @add-contact="console.log($event), contacts.push($event)" />
  </div>
  <div id="div-table">
    <table>
      <thead>
        <th>Prenom</th>
        <th>Nom</th>
        <th>Email</th>
        <th>N° de Tel</th>
      </thead>
      <tbody>
        <DisplayContact v-for="c in contacts" :tdCharacter="c"/>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
div {
  background-color: hsl(0, 0%, 15%);
  height: 80%;
  margin: 30px;
  border-radius: 20px;
}
#div-table {
  padding: 10px;
  width: 60%;
}
#div-form {
  width: 30%;
  display: flex;
  justify-content: start;
  align-items: start;
}
th {
  font-size: 2rem;
}

table {
  width: 100%;
  color: hsl(0, 0%, 90%);
}
</style>
