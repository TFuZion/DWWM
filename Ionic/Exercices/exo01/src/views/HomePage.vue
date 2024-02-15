<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonToast,
} from "@ionic/vue";
import { computed, ref } from "vue";
const counter = ref<number>(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;

const decrementDisabled = computed(() => counter.value <= 0);

const FizzBuzz = computed(() => {
  if (counter.value === 0) return counter.value;
  else {
    if (counter.value % 15 === 0) {
      console.log("FizzBuzz");
      return "FizzBuzz";
    } else if (counter.value % 5 === 0) return "Buzz";
    else if (counter.value % 3 === 0) return "Fizz";
    else return counter.value;
  }
});
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-title>FizzBuzz Game</ion-title>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <strong>Play With The FizzBuzz Button</strong>
        <div id="FizzBuzz">
          <ion-button
            v-bind:disable="decrementDisabled"
            v-on:click="decrement"
            id="open-toast"
            expand="block"
          >
            -
          </ion-button>
          <span> {{ FizzBuzz }} </span>
          <ion-button @click="increment"> + </ion-button>
        </div>
        <ion-toast
          v-bind:disable="decrementDisabled"
          trigger="open-toast"
          message="Vous ne pouvez pas en dessous de 0"
          :duration="3000"
        ></ion-toast>
      </div>
    </ion-content>
  </ion-page>
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
  margin: 10px;
}

#FizzBuzz {
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-button:is([disabled]) {
  background-color: gray;
}
span {
  font-weight: bolder;
  font-size: 2rem;
  width: 200px;
}
</style>
