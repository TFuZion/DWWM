<script setup>
  import { ref, computed } from 'vue';

  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const inputEmail = ref("")
  const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const inputPassword = ref("")


</script>


<template>
  <form action="#">
    <label for="email">Email : </label>
    <input v-model="inputEmail" type="email" placeholder="Entrer votre email">
    <!-- <span v-if="re.test(inputEmail)"></span> -->
    <p v-if="!re.test(inputEmail)">Votre email est invalide</p>

    <label for="password">Mot de passe : </label>
    <input v-model="inputPassword" type="password" placeholder="Entrer votre Mot de passe" />
    <p v-if="!re2.test(inputPassword)">Votre mot de passe est invalide</p>
    <button>Connexion</button>
  </form>
</template>

<style scoped>
</style>
