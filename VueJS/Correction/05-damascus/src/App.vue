<script setup>
  import { ref, reactive } from 'vue'
  import ContactForm from './components/ContactForm.vue';
  import ContactDisplay from './components/ContactDisplay.vue'

  const contacts = ref([])
  const contactFormMode = ref('')
  const contactBeingEdited = reactive({})

  const startAddContactHandler = () => {
    for (const key in contactBeingEdited) {
        if (contactBeingEdited[key] instanceof Date) contactBeingEdited[key] = new Date()
        contactBeingEdited[key] = ''
      }
    contactFormMode.value = 'add'
  }
  
  const addContactHandler = (contact) => {
    contacts.value.push(contact)
    contactFormMode.value = ''
  }
  
  const editContactHandler = (contact) => {
    const contactFound = contacts.value.find(c => c.id === contact.id)
    if (contactFound) {
      contactFound.firstname = contact.firstname
      contactFound.lastname = contact.lastname
      contactFound.email = contact.email
      contactFound.phoneNumber = contact.phoneNumber
      contactFound.birthDate = contact.birthDate
      contactFound.phobies = contact.phobies
    }
    contactFormMode.value = ''
  }

  const startEditContactHandler = (contactId) => {
    const contactFound = contacts.value.find(c => c.id === contactId)
    if (contactFound) {
      for (const key in contactFound) {
        contactBeingEdited[key] = contactFound[key]
      }
      contactFormMode.value = 'edit'
    }
  }

  const deleteContactHandler = (contactId) => {
    const contactFound = contacts.value.find(c => c.id === contactId)
    if (contactFound) {
      if(confirm('Etes-vous sûr ?')) {
        contacts.value = contacts.value.filter(c => c !== contactFound)
        console.log(contacts.value);
      }
    }
  }
</script>

<template>
  <button @click="startAddContactHandler">Add</button>
  <ContactForm v-if="contactFormMode" @close-modal="contactFormMode=''" :mode="contactFormMode" @add-contact="addContactHandler" @edit-contact="editContactHandler" :contact="contactBeingEdited"/>
  <p v-if="contacts.length === 0">Pas de contacts dans la base de données...</p>
  <template v-else>
    <ContactDisplay v-for="c in contacts" :contact="c" @edit-contact="startEditContactHandler" @delete-contact="deleteContactHandler"/>
  </template>
</template> 

<style scoped>

</style>
