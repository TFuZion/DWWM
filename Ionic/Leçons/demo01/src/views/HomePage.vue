<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item>
        <ion-icon :icon="logoIonic"></ion-icon>
      </ion-item>
      <ion-item>
        <ion-icon :icon="personOutline"></ion-icon>
      </ion-item>

      <ion-item>
        <ion-button id="open-toast" expand="block">Toast</ion-button>
      </ion-item>
      <ion-toast trigger="open-toast" message="hello world!" :duration="3000"></ion-toast>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonItem, IonButton, IonToast } from '@ionic/vue';
import { logoIonic, personOutline } from 'ionicons/icons';

// importer le composant IonIcon
// récupérer une icon depuis la libraire ionicons/icons pour la binder avec :icon

</script>

<style scoped>

</style>
