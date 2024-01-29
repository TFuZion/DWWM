<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Définition des props qui peuvent être passées dans le composant
// Ici c'est le temps du chrono en seconde
const props = defineProps(["measuredTime"]);

// Définition des évènements que peut déclencher le chrono
// ici c'est l'évènement de suppression du chrono
const emits = defineEmits(["deleteTimer"]);

// Création d'un variable réactive à partir de la props
const timerValue = ref(props.measuredTime);
let interval = null;

// Utilisation du hook on mounted pour déclencher le minuteur
onMounted(() => {
  interval = setInterval(() => {
    // On décrémente le timer de seconde en seconde
    timerValue.value--;
    // Si le timeur arrive à 0, on le clear
    if (timerValue.value <= 0) clearInterval(interval);
  }, 1000);
});

// Lorsque le composant est démonté, on clear l'interval
onUnmounted(() => {
  if (interval) clearInterval(interval);
});

// Création du compteur en chaîne de caractère
// Mise en forme du timer
const toTimer = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) - hours * 60;
  const seconds = Math.floor(time % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// Générer une unité d'avancement css en %
const timerWidth = computed(() => {
  return 100 - (timerValue.value / props.measuredTime) * 100 + "%";
});
</script>

<template>
  <div class="chrono">
    <!-- ici on fait évoluer la width du background en fonction de la propriété computed -->
    <div class="chrono-bg" :style="{ width: timerWidth }"></div>

    <!-- On affiche l'avancement du timer -->
    <span v-if="timerValue > 0" class="chrono-text"
      >{{ toTimer(timerValue) }} / {{ toTimer(measuredTime) }}</span
    >
    <!-- Affichage du bouton pour supprimer le timer -->
    <button class="chrono-btn" v-else @click="$emit('deleteTimer')">
      Delete timer
    </button>
  </div>
</template>

<style scoped>
.chrono {
  margin: 1em auto;
  border-radius: 1em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  aspect-ratio: 3 / 1;
  background-color: gray;
  position: relative;
  overflow: hidden;
}

.chrono-bg {
  background-color: rgb(55, 55, 55);
  height: 100%;
  margin-right: auto;
  transition: width 200ms linear;
}

.chrono-text {
  color: rgba(209, 209, 207)
}

.chrono-text,
.chrono-btn {
  position: absolute;
  font-family: monospace;
  font-size: 1.2rem;
}
</style>
