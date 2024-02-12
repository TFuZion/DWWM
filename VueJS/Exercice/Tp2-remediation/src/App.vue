<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const userName = ref("");
const userStartApp = ref(true);

function startToggle() {
  userStartApp.value = !userStartApp;
}

const handleUserStartAppUpdate = (newValue) => {
  userStartApp.value = newValue;
};
</script>

<template>
  <main>
    <div v-if="userStartApp">
      <h1>Bienvenu sur la gestion d'invenetaire de votre BackPack</h1>
      <p>Veuillez entrer votre nom d'utilisateur :</p>
      <input type="text" v-model="userName" />
      <button @click="startToggle">Confirmer</button>
    </div>
    <div v-else>
      <RouterView
        @update:userStartApp="handleUserStartAppUpdate"
        :getUserName="userName"
      />
      <nav>
        <RouterLink to="/"> Home Page</RouterLink>
        <RouterLink to="/add"> Ajouter un object au sac</RouterLink>
      </nav>
    </div>
  </main>
</template>

<style scoped></style>
