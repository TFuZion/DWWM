<script setup lang="ts">
import Base from '@/components/Base.vue'
import { useRoute } from 'vue-router';
import { useMemoryStore } from '@/stores/memory';
import MemoryOverview from '@/components/MemoryOverview.vue';
import { IonText } from '@ionic/vue';

const route = useRoute();
const { id } = route.params;

const store = useMemoryStore();
const { getMemoryById } = store;

const memory = getMemoryById(id as string);

</script>

<template>
    <Base title="Memory details" default-back-page="/">
    <ion-text v-if="!memory">Loading ...</ion-text>
    <memory-overview v-else :memory="memory"></memory-overview>
    </Base>
</template>

<style scoped></style>