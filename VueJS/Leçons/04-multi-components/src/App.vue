<script setup>
import ContactAddForm from './components/ContactAddForm.vue';
import MonBouton from './components/MonBouton.vue';
import { ref } from 'vue'

const counter = ref(0)
const contacts = ref([])

const increment = () => {
  counter.value++
  console.log(counter.value);
}
</script>

<template>
  <!-- <MonBouton ftSize="4rem" :theme="counter % 2 == 0 ? 'danger' : 'primary'" btnText="Bonjour"/> <br />
  <MonBouton theme="primary"/> <br />
  <MonBouton @addDog="increment" />
  <hr>
  <MonBouton @addDog="console.log(`J'ajoute un chien`)" btnText="Ajouter un chien" theme="danger"/>
  <p v-for="n in counter">Je suis un chien</p> -->

  <ContactAddForm @addContact="console.log($event)" />
  <hr>
  <ContactAddForm @addContact="contacts.push($event)"/>
  <ul>
    <li v-for="c in contacts">{{ c.firstname }} {{ c.lastname }}</li>
    <!-- <ContactDisplay v-for="c in contacts" :contact="c"/> -->
    <MonBouton v-for="c in contacts" :btnText="c.firstname" />
  </ul>
</template>

<style scoped>

</style>
