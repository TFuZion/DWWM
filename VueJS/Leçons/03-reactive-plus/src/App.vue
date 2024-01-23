<script setup>
  import { ref, reactive } from 'vue'
  const mesPrenoms = reactive(['John', 'Chloée', 'Martha'])

  
  const addPeople = () => {
    mesPrenoms.push('Toto')
  }

  // const firstname = ref('')
  // const lastname = ref('')

  // const logPerson = () => {
  //   const peopleObj = {
  //     firstname: firstname.value,
  //     lastname: lastname.value
  //   }

  //   console.log(peopleObj);
  // }

  const people = reactive({
    firstname: "",
    lastname: ""
  })

  const logPerson = () => console.log(people)
</script>

<template>
    <button @click="addPeople">Add People</button>
    <ul>
      <li v-for="(p, i) in mesPrenoms"><b>{{ i + 1 }}:</b> {{ p }}</li>
    </ul>
    <div>
      <label for="firstname">Prenom: </label>
      <input v-model="people.firstname" type="text" id="firstname">
    </div>

    <div>
      <label for="lastname">Nom: </label>
      <input v-model="people.lastname" type="text" id="lastname">
    </div>

    <div>
      Je m'appelle {{ people.firstname }} {{ people.lastname }}
    </div>

    <button @click="logPerson">Affiche Personne</button>
</template>

<style scoped>
</style>
