<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useInventoryStore } from '../stores/Inventory.js';
import { storeToRefs } from 'pinia';

const inventoryStore = useInventoryStore();
const { inventory } = storeToRefs(inventoryStore);

const route = useRoute();
const itemId = Number(route.params.id);
const item = computed(() => inventory.value.find(i => i.id === itemId));
</script>

<template>
    <div class="flex-container">
        <h1>Item Details</h1>
    <div v-if="item">
        <p><span>name :</span> {{ item.name }}</p>
        <p><span>description :</span> {{ item.description }}</p>
        <p><span>price :</span> {{ item.price }}€</p>
        <p><span>quantity :</span> {{ item.quantity }}</p>
    </div>
    </div>
</template>

<style scoped>
h1 {
    color: hsla(160, 100%, 37%, 1);
}
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
}
span {
    color: hsla(160, 100%, 37%, 1);
}
p {
    margin-top: .5rem;
}
</style>