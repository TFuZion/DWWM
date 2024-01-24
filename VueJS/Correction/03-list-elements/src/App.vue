<script setup>
    import { reactive } from 'vue'
    import { v4 as newId } from 'uuid'

    const mesChiens = reactive([])

    const nouveauChien = reactive({
        name: '',
        breed: '',
        owner: '',
        birthDate: new Date()
    })

    const addNewDog = () => {
        // event.preventDefault()
        mesChiens.push({
            ...nouveauChien,
            id: newId()
        })
        Object.keys(nouveauChien).forEach(k => {
            if (k !== 'birthDate') nouveauChien[k] = ''
            else nouveauChien[k] = new Date()
        })
        console.log(mesChiens);
    }
    
</script>

<template>
  <h3>eKennel</h3>
  <hr>
  <form action="#" @submit.prevent="addNewDog">
    <div>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="nouveauChien.name">
    </div>
    <div>
        <label for="breed">Breed: </label>
        <input type="text" id="breed" v-model="nouveauChien.breed">
    </div>
    <div>
        <label for="owner">Owner: </label>
        <input type="text" id="owner" v-model="nouveauChien.owner">
    </div>
    <div>
        <label for="birthDate">Birth date: </label>
        <!-- <input type="date" id="birthDate" @input="(e) => nouveauChien.birthDate = e.target.valueAsDate"> -->
        <input type="date" id="birthDate" @input="nouveauChien.birthDate = $event.target.valueAsDate" :valueAsDate="nouveauChien.birthDate">
    </div>
    <button>Submit</button>
  </form>
  <hr>
  <p v-if="mesChiens.length === 0">Il n'y a pas de chiens dans la base de données...</p>
  <table v-else>
    <thead>
        <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Race</th>
            <th>Propriétaire</th>
            <th>Date de naissance</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(c, i) in mesChiens.toSorted((a, b) => a.birthDate.getTime() - b.birthDate.getTime())">
            <td>{{ i + 1 }}</td>
            <td>{{ c.name }}</td>
            <td>{{ c.breed }}</td>
            <td>{{ c.owner }}</td>
            <td>{{ c.birthDate.toLocaleDateString() }}</td>
            <td>
                <button @click="mesChiens.splice(i, 1)">Supprimer</button>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
