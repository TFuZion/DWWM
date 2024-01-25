<script setup>
import { defineProps } from "vue";
import Formulaire from "./Formulaire.vue";

const props = defineProps([
  "tdCharacter",
  "fontW"
]);
const styleFirstname = {
  'name-bold': props.fontW === 'bold',
  'name-danger': props.tdFirstname === 'danger'

}

</script>

<template>
  <tr>
    <td :class="styleFirstname">{{ tdCharacter.firstname}}</td>
    <td>{{ tdCharacter.lastname}}</td>
    <td>{{ tdCharacter.email}}</td>
    <td>{{ tdCharacter.phoneNumber}}</td>
  </tr>
</template>

<style scoped>
.name-bold {
  font-weight: bold;
}
.name-danger {
        background-color: red;
    }

td {
  text-align: center;
  font-size: 1.2rem;
  margin: 5px;
}
tr {
  margin: 10px;
}

</style>
