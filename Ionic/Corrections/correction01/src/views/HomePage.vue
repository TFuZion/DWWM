<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="dark">
        <ion-title>FizzBuzz</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" color="dark">
        <ion-grid>
          <ion-row class="ion-align-items-center">
            <ion-col>
              <ion-button fill="clear" color="light" @click="count--" :disabled="count <= 0">
                <ion-icon slot="icon-only" :icon="arrowBackCircleOutline"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col>
              <ion-text>
                <p class="text-center xtra-size">
                  {{ fizzBuzzValue }}
                </p>

              </ion-text>
            </ion-col>
            <ion-col>
              <ion-button fill="clear" color="light" @click="count++">
                <ion-icon slot="icon-only" :icon="arrowForwardCircleOutline"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { ref, computed } from 'vue'
import { arrowForwardCircleOutline, arrowBackCircleOutline } from 'ionicons/icons'

const count = ref<number>(0);

const fizzBuzzValue = computed(() => {
  if (count.value <= 0) {
    return '0';
  }
  if (count.value % 15 === 0) {
    return 'FizzBuzz'
  } else if (count.value % 5 === 0) {
    return 'Buzz'
  } else if (count.value % 3 === 0) {
    return 'Fizz'
  } else {
    return count.value.toString();
  }
})


</script>

<style scoped>
.text-center {
  text-align: center;
}

.xtra-size {
  font-size: 3rem;
}

</style>
