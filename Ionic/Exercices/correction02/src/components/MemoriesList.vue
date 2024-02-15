<script setup lang="ts">
import { IonList } from '@ionic/vue'
import MemoryListItem from '@/components/MemoriesListItem.vue'
import { useMemoryStore } from '@/stores/memory';

const store = useMemoryStore();

const { memories } = store;

</script>

<template>
    <ion-list>
        <memory-list-item v-for="memory in memories" :key="memory.id" :id="memory.id"></memory-list-item>
    </ion-list>
</template>

<style scoped>

</style>