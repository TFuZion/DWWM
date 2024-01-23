<script setup>
  import { computed, ref } from 'vue';

  const mesPrenoms = ['Albert', 'Chloée', 'Martha', 'John']
  const prenomSelectionne = ref('')
  const dogDisplay = ref('')
  const username = ref('')
  const mesChiens = [
  {
      id: 1,
      name: "Bernie",
      breed: "Doberman",
      age: 3
    },
    {
      id: 2,
      name: "Caramel",
      breed: "Beagle",
      age: 7
    },
    {
      id: 3,
      name: "Princesse",
      breed: "Shi-Tzu",
      age: 12
    }
  ]
  const idChienSelectionne = ref(0)
  // const chienTrouve = computed(() => mesChiens.find(c => c.id === +idChienSelectionne))

  const isShown = ref(false)

  // const switchIsShown = () => {
  //   isShown.value = !isShown.value
  // }

  const dogDetails = (chien) => {
    dogDisplay.value = `Je suis ${chien.name}, de race ${chien.breed} et j'ai ${chien.age} an(s)`;
  }

</script>

<template>
  <button @click="() => isShown = !isShown">{{ isShown ? 'OUI' : 'NON' }}</button>
  <p v-if="isShown">Ce paragraphe est visible car isShown est vrai</p>
  <div></div>
  <p v-if="!isShown">Ce paragraphe est présent car isShown est faux</p>
  <hr>
  <ul>
    <li v-for="pre in mesPrenoms">{{ pre }}</li>
  </ul>
  <table>
    <thead>
      <th>#</th>
      <th>Nom</th>
      <th>Race</th>
      <th>Age</th>
      <th>Actions</th>
    </thead>
    <tbody>
      <tr v-for="c in mesChiens">
        <td>{{ c.id }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.breed }}</td>
        <td>{{ c.age }}</td>
        <td>
          <button @click="() =>dogDetails(c)">Details</button>
        </td>
      </tr>
    </tbody>
  </table>
  <span>
    {{ dogDisplay }}
  </span>
  <hr>
  <input 
    type="text" 
    placeholder="Username..."
    v-model="username">
  <div>
    <span>La valeur de l'input est : {{ username }}</span>
  </div>
  <select v-model="prenomSelectionne">
    <option value="">Select a name...</option>
    <option v-for="p in mesPrenoms" :value="p.toLowerCase()">{{ p }}</option>
  </select>
  <div>
    La valeur du select est : {{ mesPrenoms.find(p => p.toLowerCase() === prenomSelectionne) }}
  </div>
  <select v-model="idChienSelectionne">
    <option value="0">Select a Dog...</option>
    <option v-for="c in mesChiens" :value="c.id">{{ c.name }}</option>
  </select>
  <!-- <ul v-if="chienTrouve">
    <li>{{ chienTrouve.breed }}</li>
  </ul> -->
</template>

<style scoped>
  div:first-of-type {
    height: 100px;
    aspect-ratio: 1 / 1;
    background-color: red;
  }
</style>
