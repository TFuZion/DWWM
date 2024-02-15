<script setup lang="ts">
import { Memory } from '@/types/types';
import { shallowReactive } from 'vue';
import { IonList, IonItem, IonInput, IonTextarea, IonButton } from '@ionic/vue';

const emits = defineEmits(["addMemory"])

const memory = shallowReactive<Omit<Memory, "id">>({
    title: "",
    description: "",
    image: ""
})

function submitHandler() {
    emits("addMemory", {...memory})
}

</script>

<template>
    <form action="#" @submit.prevent="submitHandler" class="ion-padding">
        <ion-list>
            <ion-item>
                <ion-input label="Title" placeholder="Enter your title" required v-model="memory.title">

                </ion-input>
            </ion-item>
            <ion-item>
                <ion-input label="Image url" placeholder="http://www.image.com/img.png" required v-model="memory.image">

                </ion-input>
            </ion-item>
            <ion-item>
                <ion-textarea placeholder="Description of the memory ..." :auto-grow="true" required label="Description" v-model="memory.description">

                </ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="full">
            save
        </ion-button>
    </form>
</template>

<style scoped></style>