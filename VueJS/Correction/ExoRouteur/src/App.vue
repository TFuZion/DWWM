<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const userStartApp = ref(true)

const userName = ref('')

const handleUserStartAppUpdate = (newValue) => {
  userStartApp.value = newValue
}

function startToggle() {
  userStartApp.value = !userStartApp.value
}

</script>

<template>
  <main>
    <div v-if="userStartApp">
      <h1>Vue2000...</h1>
      <p>Veuillez entrer un pseudo</p>
      <input type="text" v-model="userName">
      <button @click="startToggle">Confirmer</button>
    </div>
    <div v-else>
      <RouterView @update:userStartApp="handleUserStartAppUpdate" :getUserName="userName"/>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
        </nav>
      </div>
    </div>
  </main>

</template>

<style scoped>
main {
  border: 1px solid gray;
  border-radius: 10px;
  width: 70vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
