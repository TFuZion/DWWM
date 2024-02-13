<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// const notes: Ref<number[]> = ref([]);
const notes = ref<number[]>([]);

const max = computed(() => Math.max(...notes.value));

const min = computed(() => Math.min(...notes.value));

const moyenne: ComputedRef<number> = computed(() => {
  return notes.value.reduce<number>((c, p) => c + p, 0) / notes.value.length
});

const noteInput = ref<number | undefined>(0);

function addNote(note: number | undefined) {

  if(typeof note === 'undefined') {
    return;
  }

  noteInput.value = undefined;
  if(note < 0 || note > 20) {
    toast("Erreur: saisir un autre entre 0 et 20", {
      "theme": "light",
      "type": "error",
      "dangerouslyHTMLString": true
    })
    return;
  }

  notes.value.push(note);
}

</script>

<template>
  <main class="container">
    <div class="left-side">
      <h1>Nombres</h1>

      <form action="#" @submit.prevent="addNote(noteInput)">
        <fieldset>
          <label for="number-input">saisir un nombre: </label>
        <input type="number" id="number-input" placeholder="saisir nombre" v-model.number="noteInput">
        </fieldset>
        <button>Ajouter</button>
      </form>

      <div class="flex-items">
        <p v-for="note in notes" class="item">
          {{ note }}
        </p>
      </div>

    </div>

    <div class="right-side">
      <h1>Stats</h1>

      <div v-if="notes.length">
        <h2>Moyenne</h2>
      <p>{{ Math.round(moyenne * 100) / 100  }}</p>

      <h2>Max</h2>
      <p>{{ max }}</p>

      <h2>Min</h2>
      <p>{{ min }}</p>
      </div>

      <div v-else>
        <p>Aucune note</p>
      </div>



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

  .flex-items {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item {
    color: white;
    width: 50px;
    height: 50px;
    background-color: purple;
    text-align: center;
    border-radius: .25rem;
  }

  form {
    border: 1px solid grey;
    margin-bottom: 1rem;
  }
</style>
