<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["puppy"]);
const emits = defineEmits(["deletePuppy"]);

const randomPictureURL =
  "https://source.unsplash.com/random/200x200?puppy&sig=" +
  Math.floor(Math.random() * 100) +
  1;

const deletePuppyHandler = () => {
  emits("deletePuppy");
};
const editPuppyHandler = () => {
  emits("editPuppy");
};
</script>

<template>
  <div class="card">
    <h3>{{ puppy.name }}</h3>
    <img :src="randomPictureURL" alt="Random puppy" />
    <ul>
      <li>
        <b>Date de naissance : </b>{{ puppy.birthDate.toLocaleDateString() }}
      </li>
      <li><b>Race : </b>{{ puppy.breed }}</li>
      <li><b>Couleur du peulage : </b>{{ puppy.color }}</li>
      <li>
        <b>Sevré : {{ puppy.weaning }}</b>
      </li>
    </ul>
    <div id="but">
      <button @click="editPuppyHandler">Editer</button>
      <button @click="deletePuppyHandler">Supprimer</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: wheat;
  width: 20%;
  height: 500px;
  margin: 20px 30px;
  border-radius: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: hsl(0, 0%, 25%);
}
img {
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  border-radius: 1rem;
  border: 2px solid hsl(0, 0%, 25%);
}
li {
  list-style: none;
}
h3 {
  margin: 20px 0;
  font-size: 2rem;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
}
#but {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  width: 80%;
  height: 15%;
}
button {
  margin: 0 15px;
  width: 40%;
  height: 50%;
  background-color: rgb(241, 196, 112);
  color: hsl(0, 0%, 25%);
  border: 2px solid hsl(0, 0%, 25%);
  transition: scale 200ms ease;
}
button:hover {
  scale: 1.05;
  cursor: pointer;
}
button:active {
  scale: 0.95;
}
</style>
