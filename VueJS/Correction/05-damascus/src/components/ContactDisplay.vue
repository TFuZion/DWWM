<script setup>
    const props = defineProps(['contact'])
    const emits = defineEmits(['editContact', 'deleteContact'])
</script>

<template>
    <div>
        <ul>
            <li><b>Firstname: </b>{{ contact.firstname }}</li>
            <li><b>Lastname: </b>{{ contact.lastname }}</li>
            <li><b>Email: </b>{{ contact.email }}</li>
            <li><b>Phone number: </b>{{ contact.phoneNumber }}</li>
            <li><b>Birth date: </b>{{ contact.birthDate.toLocaleDateString() }}</li>
            <li><b>Phobies: </b>{{ contact.phobies.join(', ') }}</li>
            <li><b>Actions: </b>
                <button @click="$emit('editContact', contact.id)">Editer</button>
                <button @click="$emit('deleteContact', contact.id)">Supprimer</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>