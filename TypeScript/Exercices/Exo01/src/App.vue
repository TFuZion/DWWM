<script setup lang="ts">
import { computed, ref } from "vue";
import {toast} from "vue3-toastify"
import 'vue3-toastify/dist/index.css';

const notes = ref<number[]>([]);
const max = computed(() => Math.max(...notes.value));
const min = computed(() => Math.min(...notes.value));
const moyenne = computed(() => notes.value.reduce((p, c) => p + c, 0));
const noteInput = ref(0);

function addNote(note: number) {
  if (note < 0 || note > 20) {
    toast("Erreur: saisir un nombre entre 0 et 20", {
      autoClose: 1000,
      "theme": "light",
      "type": "error",
      "dangerouslyHTMLString": true
    })
    return
  }
}
</script>

<template>
  <main class="container">
    <div class="left-side">

      <h1>Nombres</h1>
      <fieldset>
        <form action="#" :submit.prevent="addNote">
          <label for="number-input"></label>
          <input
            id="number-input"
            type="text"
            placeholder="saisir un nombre"
            v-model="noteInput"
          />
          <button>Ajouter</button>
        </form>
      </fieldset>

      <div>
        <p v-for="note in notes">{{ note }}</p>
      </div>

    </div>
    <div class="right-side">
      <h1>Stast</h1>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
fieldset {
  border: 0;
  padding: 0;
}
.choix {
  cursor: pointer;
  text-decoration: underline;
}
</style>
