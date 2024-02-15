<script setup lang="ts">
import Base from '@/components/Base.vue'
import MemoryForm from '@/components/MemoryForm.vue'
import { Memory } from '@/types/types';
import { useMemoryStore } from '@/stores/memory';
import { useRouter } from 'vue-router';

const store = useMemoryStore();
const { addMemory } = store;

const router = useRouter();

function addMemoryHandler(memory: Omit<Memory, 'id'>) {
    addMemory(memory);
    router.replace('/');
}

</script>

<template>
    <Base title="Add Memory" default-back-page="/">
        <memory-form @add-memory="addMemoryHandler"></memory-form>
    </Base>
</template>

<style scoped></style>