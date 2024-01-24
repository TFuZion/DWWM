<script setup>
    import { defineEmits, reactive } from 'vue';
    import { v4 as newId } from 'uuid'
import MonBouton from './MonBouton.vue';

    const emits = defineEmits(['addContact'])

    const contact = reactive({
        firstname: '',
        lastname: ''
    })

    const submitHandler = () => {
        emits('addContact', {
            ...contact,
            id: newId()
        })
        contact.firstname = '';
        contact.lastname = '';
    }

</script>

<template>
    <form action="#" @submit.prevent="submitHandler">
        <div>
            <label for="firstname">Firstname: </label>
            <input type="text" id="firstname" v-model="contact.firstname">
        </div>

        <div>
            <label for="lastname">Lastname: </label>
            <input type="text" id="lastname" v-model="contact.lastname">
        </div>

        <MonBouton theme="primary" btnText="Add a Contact"></MonBouton>
    </form>
</template>

<style scoped>

</style>