<script setup lang="ts">
import Base from "@/components/Base.vue"
import { IonIcon, IonButton} from '@ionic/vue';
import {addOutline} from 'ionicons/icons'

</script>

<template>
  <Base title="BackPack" default-back-page="/">
  <template>
    <ion-button router-link="/add">
      <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
    </ion-button>
  </template>
  </Base>
</template>



<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
