<script setup>
import { ref, reactive, Transition } from "vue";
import { v4 as newId } from "uuid";
import MyModal from "./components/MyModal.vue";
import PuppyAddForm from "./components/PuppyAddForm.vue";
import PuppyCard from "./components/PuppyCard.vue";

const myPuppy = reactive([]);

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
    id: newId()
  })
  puppyFormInfos.name = "";
  puppyFormInfos.birthDate = new Date();
  puppyFormInfos.breed = "";
  puppyFormInfos.color = "";
  puppyFormInfos.weaning = false;
};
// if(localStorage.getItem('prenoms')) {
//   prenoms.value = JSON.parse(localStorage.getItem('prenoms'))
// }

// const prenomInput = ref('')

const modalVisible = ref("");
// let indexEnCoursEdition = 0;

// const addPrenomHandler = () => {
//   prenoms.value.push(prenomInput.value)
//   localStorage.setItem('prenoms', JSON.stringify(prenoms.value))
//   prenomInput.value = ''
//   modalVisible.value = ''
// }

// const editButtonClickHandler = (index) => {
//   indexEnCoursEdition = index;
//   prenomInput.value = prenoms.value[index];
//   modalVisible.value = "edit";
// };

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

const deletePuppyHandler = (puppy, index) => {
  if (!puppy.isDamascus) {
    myPuppy.splice(index, 1);
    myPuppy.push({
      ...puppy,
      isDamascus: true,
    });
  }
};
// const editPrenomHandler = () => {
//   prenoms.value[indexEnCoursEdition] = prenomInput.value
//   localStorage.setItem('prenoms', JSON.stringify(prenoms.value))

//   // [1, 2, 3, 4, 5]

//   // [1, 2, 6, 4, 5]

//   // prenoms.value = [...prenoms.value.filter(p => p !== laVariableDuPrenom), laVersionModifiée]

//   prenomInput.value = ''
//   modalVisible.value = ''
//   console.log(prenoms.value);
// }
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
          <select id="color">
            <option value="">Golden</option>
            <option value="">Brown</option>
            <option value="">Black</option>
            <option value="">White</option>
            <option value="">Red</option>
          </select>
        </div>
        <div>
          <label for="weaning">Ce chiot est-il sevré ? </label>
          <input
            type="checkbox"
            id="weaning"
            :checked="puppyFormInfos.weaning"
          />
        </div>
        <button>
          Ajouter le chiot
        </button>
      </form>
    </MyModal>
  </Transition>
  <Transition>
    <!-- TODO: Faire la transition du modal -->
    <MyModal v-if="modalVisible === 'edit'" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="addPuppyHandler">
        <PuppyAddForm />
        <button>Editer</button>
      </form>
    </MyModal>
  </Transition>
  <button @click="modalVisible = 'add'">Ajouter un chiot</button>
  <hr />
  <div>
    <PuppyCard
      v-for="(p, i) in myPuppy"
      :key="p.id"
      :puppy="p"
      @delete-puppy="deletePuppyHandler(g, i)"
    />
  </div>
</template>

<style scoped></style>
