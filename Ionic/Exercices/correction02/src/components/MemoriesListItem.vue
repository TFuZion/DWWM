<script setup lang="ts">
import { IonItem, IonThumbnail, IonLabel } from '@ionic/vue'
import { useMemoryStore } from '@/stores/memory';

const props = defineProps<{ id: string }>()

const memoryStore = useMemoryStore();
const { getMemoryById } = memoryStore;

const memory = getMemoryById(props.id)!;

</script>

<template>
    <ion-item :router-link="`/detail/${memory.id}`">
        <ion-thumbnail slot="start">
            <img :src="memory.image" alt="">
        </ion-thumbnail>
        <ion-label>
            {{ memory.title }}
        </ion-label>
    </ion-item>
</template>

<style scoped></style>