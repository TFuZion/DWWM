<script setup>
import { reactive } from "vue";

// Définition des évènements qui vont être déclenchés par le composant
const emits = defineEmits(["addChrono"]);

// Définition d'un objet réactif que l'on va binder sur notre formulaire
const chronoFormValues = reactive({
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const submitHandler = () => {
  // Emet l'évènements addChrono et renvoie une copie des valeurs de l'objet chronoFormValues sans la réactivité
  emits("addChrono", {
    ...chronoFormValues,
  });
};
</script>

<template>
  <!-- On déclenche notre évènement lors de l'envoie du formulaire -->
  <form action="#" @submit.prevent="submitHandler">
    <div>
      <label for="hours">Hours :</label>
      <!-- .number permet de caster automatiquement la valeur en nombre -->
      <input
        type="number"
        required
        min="0"
        max="24"
        v-model.number="chronoFormValues.hours"
      />
    </div>
    <div>
      <label for="minutes">Minutes :</label>
      <input
        type="number"
        required
        min="0"
        max="59"
        v-model.number="chronoFormValues.minutes"
      />
    </div>
    <div>
      <label for="seconds">Seconds :</label>
      <input
        type="number"
        required
        min="0"
        max="59"
        v-model.number="chronoFormValues.seconds"
      />
    </div>
    <button>Add a Chrono</button>
  </form>
</template>

<style scoped></style>
