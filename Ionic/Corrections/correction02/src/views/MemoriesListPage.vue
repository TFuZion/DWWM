<script setup lang="ts">
import Base from '@/components/Base.vue'
import { IonButton, IonIcon } from '@ionic/vue';
import { addOutline } from 'ionicons/icons'
import MemoriesList from '@/components/MemoriesList.vue'

</script>

<template>
    <Base title="Memories" default-back-page="/">
    <template #action-end>
        <ion-button router-link="/add">
            <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
        </ion-button>
    </template>
    <memories-list></memories-list>
    </Base>
</template>

<style scoped></style>