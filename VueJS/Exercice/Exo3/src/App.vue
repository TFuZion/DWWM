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
    <input
      v-model="contact.email"
      type="email"
      id="email"
      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
    />
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
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
  > input {
    margin: 5px 0 10px 0;
    height: 10%;
    width: 45%;
    border-radius: 10px;
    border: solid rgb(81, 81, 236);
    background-color: hsl(0, 0%, 90%);
    padding: 5px;
  }
  > button {
    width: 20%;
    height: 5%;
  }
}
label {
  color: hsl(0, 0%, 89%);
}
table {
  height: 60%;
  width: 100%;
  color: hsl(0, 0%, 89%);
}
td {
  text-align: center;
  > button {
    width: 100%;
    height: 50%;
  }
}
</style>
