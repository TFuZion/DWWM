<script setup>
import { ref } from "vue";
import { v4 as newId } from "uuid";
import ChronoForm from "./components/ChronoForm.vue";
import Chrono from "./components/Chrono.vue";

const chronos = ref([]);

// Fonction qui ajoute un chronomètre au tableau chronos
// On stocke le chrono avec un id + le temps en seconde
const addChronoHandler = ({ hours, minutes, seconds }) => {
  chronos.value.push({
    id: newId(),
    value: hours * 3600 + minutes * 60 + seconds,
  });
};
</script>

<template>
  <h1>Timer App</h1>
  <hr />
  <ChronoForm @add-chrono="addChronoHandler" />
  <p v-if="chronos.length === 0">No timer yet...</p>
  <div v-else>
    <!-- Création d'une liste de Chrono à partir du tableau réactif -->
    <!-- On passe la props measured-time qui est la durée du chrono en secondes -->
    <!-- Lorsque l'évènements delete-timer est déclenché, on filtre le tableau sans le chrono qui l'a déclenché -->
    <Chrono
      v-for="c in chronos"
      :key="c.id"
      :measured-time="c.value"
      @delete-timer="chronos = chronos.filter((x) => x.id !== c.id)"
    />
  </div>
</template>

<style scoped></style>
