<script setup>
import { ref, reactive } from "vue";

const mesContacts = reactive([]);

const contact = reactive({
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
});

const addContact = () => {
  mesContacts.push({ ...contact });
  console.log(mesContacts);
};
</script>

<template>
  <form action="#">
    <label for="firstname">Prenom : </label>
    <input v-model="contact.firstname" type="text" id="firstname" />
    <label for="lastname">Name : </label>
    <input v-model="contact.lastname" type="text" id="lastname" />
    <label for="email">Email : </label>
    <input v-model="contact.email" type="email" id="email" />
    <label for="phoneNumber">N° de téléphone : </label>
    <input
      v-model="contact.phoneNumber"
      type="tel"
      id="phoneNumber"
      pattern="[0]{1}[6-7]{1}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}"
    />
    <button @click="addContact">Ajouter</button>
  </form>
  <table>
    <thead>
      <th>Prenom</th>
      <th>Nom</th>
      <th>Email</th>
      <th>N° de Tel</th>
    </thead>
    <tbody>
      <tr v-for="(c, i) in mesContacts">
        <td>{{ c.firstname }}</td>
        <td>{{ c.lastname }}</td>
        <td>{{ c.email }}</td>
        <td>{{ c.phoneNumber }}</td>
        <td>
          <button @click="mesContacts.splice(i, 1)">supprimer</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
