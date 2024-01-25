<script setup>
  import { ref, Transition } from 'vue'
  import MyModal from './components/MyModal.vue';

  const prenoms = ref([])

  if(localStorage.getItem('prenoms')) {
    prenoms.value = JSON.parse(localStorage.getItem('prenoms'))
  }

  const prenomInput = ref('')
  const modalVisible = ref('')
  let indexEnCoursEdition = 0;

  const addPrenomHandler = () => {
    prenoms.value.push(prenomInput.value)
    localStorage.setItem('prenoms', JSON.stringify(prenoms.value))
    prenomInput.value = ''
    modalVisible.value = ''
  }

  const editButtonClickHandler = (index) => {
    indexEnCoursEdition = index;
    prenomInput.value = prenoms.value[index]
    modalVisible.value = 'edit'
  }

  const editPrenomHandler = () => {
    prenoms.value[indexEnCoursEdition] = prenomInput.value
    localStorage.setItem('prenoms', JSON.stringify(prenoms.value))


    // [1, 2, 3, 4, 5]

    // [1, 2, 6, 4, 5]

    // prenoms.value = [...prenoms.value.filter(p => p !== laVariableDuPrenom), laVersionModifiée]
    

    prenomInput.value = ''
    modalVisible.value = ''
    console.log(prenoms.value);
  }
</script>

<template>
  <!-- TODO: Faire en sorte que le modal soit rendu au bon emplacement dans l'HTML -->
  <Transition>
    <!-- TODO: Faire la transition du modal -->
    <MyModal v-if="modalVisible == 'add'">
      <form action="#" @submit.prevent="addPrenomHandler">
        <div>
          <label for="firstname">Firstname: </label>
          <input type="text" id="firstname" v-model="prenomInput">
        </div>
        <button>Ajouter</button>
      </form>
    </MyModal>
  </Transition>
  <Transition>
    <!-- TODO: Faire la transition du modal -->
    <MyModal v-if="modalVisible === 'edit'">
      <form action="#" @submit.prevent="editPrenomHandler">
        <div>
          <label for="firstname">Firstname: </label>
          <input type="text" id="firstname" v-model="prenomInput">
        </div>
        <button>Editer</button>
      </form>
    </MyModal>
  </Transition>
  <button @click="modalVisible = 'add'">Ajouter un prénom</button>
  <hr>
  <ul>
    <!-- TODO: Faire une transition sur les <li> -->
    <li v-for="(p, i) in prenoms">{{ p }} <button @click="editButtonClickHandler(i)">Editer</button></li>
  </ul>
</template>

<style scoped>

</style>
