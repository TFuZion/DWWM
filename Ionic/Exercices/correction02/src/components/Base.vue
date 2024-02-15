<script setup lang="ts">

import { IonPage, IonToolbar, IonHeader, IonButtons, IonBackButton, IonTitle, IonContent, IonButton } from '@ionic/vue'

interface Props {
    title: string;
    defaultBackPage: string
}

defineProps<Props>()

</script>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="defaultBackPage"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ title }}</ion-title>
                <ion-buttons slot="end">
                    <slot name="action-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<style scoped></style>