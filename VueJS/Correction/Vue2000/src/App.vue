<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// Pour envoyer mon nom d'utilisateur à l'enfant
const userName = ref('');

// Définir la méthode pour gérer l'évènement émis par le composant enfant
const handleUserStartAppUpdate = (newValue) => {
  userStartApp.value = newValue;
}

// Pour gérer le v-if
const userStartApp = ref(true);
function startToggle() {
  userStartApp.value = !userStartApp.value
}

</script>

<template>

<main>
  <div v-if="userStartApp">
    <h1>Vue2000</h1>
    <p>Veuillez entrer un pseudo:</p>
    <input type="text" v-model="userName" />
    <button @click="startToggle">Confirmer</button>
  </div>
  <div v-else>
    <RouterView @update:userStartApp="handleUserStartAppUpdate" :getUserName="userName"/>

    <div>
      <nav>
        <RouterLink to="/">Home |</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
    </div>      
  </div>

</main> 

</template>

<style scoped>

main {
  border: 1px solid rgb(80, 80, 80);
  border-radius:  10px;
  width: 70vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  padding-bottom: 30px;
}

nav {
  margin-top: 100px;
}
</style>
