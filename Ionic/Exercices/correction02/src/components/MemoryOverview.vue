<script setup lang="ts">
import { Memory } from '@/types/types';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

defineProps<{ memory: Memory }>();

</script>

<template>
    <ion-card>
        <div class="cover">
            <img alt="" :src="memory.image" />
        </div>
        <ion-card-header>
            <ion-card-title>{{ memory.title }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            {{ memory.description }}
        </ion-card-content>
    </ion-card>
</template>

<style scoped>

.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>