<script setup>
import { ref, reactive, Transition } from "vue";
import { v4 as newId } from "uuid";
import MyModal from "./components/MyModal.vue";
import PuppyCard from "./components/PuppyCard.vue";

const myPuppy = reactive([]);
let indexEnCoursEdition = 0;

const puppyColors = ref([
  {value: 'Golden', text: 'Golden'},
  {value: 'Brown', text: 'Brown'},
  {value: 'Black', text: 'Black'},
  {value: 'White', text: 'White'},
])
const puppyFormInfos = reactive({
  name: "",
  birthDate: new Date(),
  breed: "",
  color: "",
  weaning: false,
});

const addPuppyHandler = () => {
  myPuppy.push({
    ...puppyFormInfos,
    id: newId(),
  });
  puppyFormInfos.name = "";
  puppyFormInfos.birthDate = new Date();
  puppyFormInfos.breed = "";
  puppyFormInfos.color = ref("");
  puppyFormInfos.weaning = "";
};

const modalVisible = ref("");

const deletePuppyHandler = (puppy, index) => {
  myPuppy.splice(index, 1);
};


const editButtonClickHandler = (index) => {
  indexEnCoursEdition = index;
  modalVisible.value = "edit";
  const puppyEdit = myPuppy.find((obj) => obj.id=== index);
  puppyEdit.name = puppyFormInfos.name
  puppyEdit.birthDate = puppyFormInfos.birthDate
  puppyEdit.breed = puppyFormInfos.breed
  puppyEdit.color = puppyFormInfos.color
  puppyEdit.weaning = puppyFormInfos.weaning
};

// const addPuppyHandler = () => {
//   emits("addPuppy", {
//     ...puppyFormInfos,
//     id: newId(),
//   });
//   puppyFormInfos.name = "";
//   puppyFormInfos.birthDate = new Date();
//   puppyFormInfos.breed = "";
//   puppyFormInfos.color = "";
//   puppyFormInfos.weaning = false;
// };

const editPuppyHandler = () => {
  modalVisible.value = ''
  const puppyFound = myPuppy.find((obj) => obj.id=== index);
  puppyFound.name = puppyFormInfos.name
  puppyFound.birthDate = puppyFormInfos.birthDate
  puppyFound.breed = puppyFormInfos.breed
  puppyFound.color = puppyFormInfos.color
  puppyFound.weaning = puppyFormInfos.weaning
}
</script>

<template>
  <!-- TODO: Faire en sorte que le modal soit rendu au bon emplacement dans l'HTML -->
  <Transition>
    <!-- TODO: Faire la transition du modal -->
    <MyModal v-if="modalVisible == 'add'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="addPuppyHandler">
        <div>
          <label for="name">Name : </label>
          <input type="text" id="name" v-model="puppyFormInfos.name" />
        </div>
        <div>
          <label for="birthDate">Date de naissance : </label>
          <input
            type="date"
            id="birthDate"
            @input="puppyFormInfos.birthDate = $event.target.valueAsDate"
            :valueAsDate="puppyFormInfos.birthDate"
          />
        </div>
        <div>
          <label for="breed">Race : </label>
          <input type="text" id="breed" v-model="puppyFormInfos.breed" />
        </div>
        <div>
          <label for="color">Couleur du peulage : </label>
          <select id="color" v-model="puppyFormInfos.color">
            <option disabled value="">Choose one</option>
            <option v-for="c in puppyColors" :value="c.value">{{ c.text }}</option>
          </select>
        </div>
        <div>
          Sevré:
          <input
          type="radio"
          id="yes"
          value="Oui"
          v-model="puppyFormInfos.weaning"
          />
          <label for="yes">Oui </label>
          
          <input
            type="radio"
            id="no"
            value="Non"
            v-model="puppyFormInfos.weaning"
            />
            <label for="no">Non </label>
          </div>
          <button>Ajouter le chiot</button>
        </form>
    </MyModal>
  </Transition>

  
  <Transition>
    <!-- TODO: Faire la transition du modal -->
    <MyModal v-if="modalVisible === 'edit'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="editPuppyHandler">
        <div>
          <label for="name">Name : </label>
          <input type="text" id="name" v-model="puppyFormInfos.name" />
        </div>
        <div>
          <label for="birthDate">Date de naissance : </label>
          <input
            type="date"
            id="birthDate"
            @input="puppyFormInfos.birthDate = $event.target.valueAsDate"
            :valueAsDate="puppyFormInfos.birthDate"
          />
        </div>
        <div>
          <label for="breed">Race : </label>
          <input type="text" id="breed" v-model="puppyFormInfos.breed" />
        </div>
        <div>
          <label for="color">Couleur du peulage : </label>
          <select id="color" v-model="puppyFormInfos.color">
            <option disabled value="">Choose one</option>
            <option v-for="c in puppyColors" :value="c.value">{{ c.text }}</option>
          </select>
        </div>
        <div>
          Sevré:
          <input
            type="radio"
            id="yes"
            value="Oui"
            v-model="puppyFormInfos.weaning"
          />
          <label for="yes">Oui</label>

          <input
          type="radio"
          id="no"
          value="Non"
            v-model="puppyFormInfos.weaning"
            />
            <label for="no">Non</label>
          </div>
        <button>Editer</button>
      </form>
    </MyModal>
  </Transition>
  
  <h1>Elevage De Puppy</h1>
<div id="add">
  <button id="butAdd" @click="modalVisible = 'add'">Ajouter un chiot</button>
</div>
  <div id="card">
    <PuppyCard
    v-for="(p, i) in myPuppy"
      :key="p.id"
      :puppy="p"
      @delete-puppy="deletePuppyHandler(p, i)"
      @editPuppy="editButtonClickHandler(p, i)"
    />
  </div>
  </template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 50px;
  color: wheat;
}
#add {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#butAdd {
  width: 50%;
  height: 70%;
  border: 2px solid wheat;
  background-color: hsl(0, 0%, 25%);
  color: wheat;
  font-size: 1rem;
  transition: scale 200ms ease;
}
#butAdd:hover {
  scale: 1.05;
  cursor: pointer;
}
#butAdd:active {
  scale: 0.95;
}
#card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
form > * {
  margin: 20px;
}
</style>
