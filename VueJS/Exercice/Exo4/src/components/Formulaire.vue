<script setup>
import { defineEmits, reactive } from "vue";
const emits = defineEmits(['addContact']);

const contact = reactive({
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
});

const submitContact = () => {
  emits('addContact', {...contact})
  contact.firstname = '';
  contact.lastname = '';
  contact.email = '';
  contact.phoneNumber = '';
};

</script>

<template>
  <form action="#" @submit.prevent="submitContact">
    <div>
      <label for="firstname">Prenom : </label>
      <input v-model="contact.firstname" type="text" id="firstname" />
    </div>
    <div>
      <label for="lastname">Name : </label>
      <input v-model="contact.lastname" type="text" id="lastname" />
    </div>
    <div>
      <label for="email">Email : </label>
      <input
        v-model="contact.email"
        type="email"
        id="email"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      />
    </div>
    <div>
      <label for="phoneNumber">N° de téléphone : </label>
      <input
        v-model="contact.phoneNumber"
        type="tel"
        id="phoneNumber"
        pattern="[0]{1}[6-7]{1}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}"
      />
    </div>
    <button>Ajouter</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
  > button {
    width: 60%;
    height: 15%;
    border-radius: 5px;
  }
}
div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
}
input {
    margin: 5px 0 70px 0;
    height: 35%;
    width: 75%;
    border-radius: 10px;
    border: solid rgb(81, 81, 236);
    background-color: hsl(0, 0%, 90%);
    padding: 5px;
  }
label {
  color: hsl(0, 0%, 89%);
  margin: 25px 0 0px 0;
}


</style>
