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
    <td :class="styleFirstname">{{ tdCharacter.firstname ? tdCharacter.firstname : "Error"}}</td>
    <td>{{ tdCharacter.lastname ? tdCharacter.lastname : "Error" }}</td>
    <td>{{ tdCharacter.email ? tdCharacter.email : "Error" }}</td>
    <td>{{ tdCharacter.phoneNumber ? tdCharacter.phoneNumber : "Error" }}</td>
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
}
tr {
  margin: 10px;
}

</style>
