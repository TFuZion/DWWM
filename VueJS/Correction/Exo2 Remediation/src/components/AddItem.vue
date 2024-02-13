<script setup>
import {ref} from 'vue'
import {useInventoryStore} from '../stores/Inventory.js';
const item = ref({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
});
const inventoryStore = useInventoryStore();
const addItem = () => {
    inventoryStore.addItem(item.value);
    item.value = {
        name: '',
        description: '',
        price: 0,
        quantity: 0
    };
};
</script>

<template>
    <div class="center-screen">
        <h1>Add Product</h1>
        <form @submit.prevent="addItem(item)" class="form-grid">
            <div>
                <label for="name">Name : </label>
                <input type="text" id="name" v-model="item.name" />
            </div>
            <div>
                <label for="description">Description : </label>
                <input type="text" id="description" v-model="item.description" />
            </div>
            <div>
                <label for="price">Price : </label>
                <input type="number" id="price" v-model="item.price" />
            </div>
            <div>
                <label for="quantity">Quantity : </label>
                <input type="number" id="quantity" v-model="item.quantity" />
            </div>
            <button>Add Product</button>
        </form>
    </div>
</template>

<style scoped>
    .center-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        flex-direction: column;
    }
    .form-grid {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 10px;
        align-items: center;
        margin-top: 1rem;
    }
    .form-grid > div {
        display: contents;
    }
    .form-grid input {
        max-width: 200px;
    }
    .form-grid button {
        grid-column: span 2;
        justify-self: center;
        margin-top: 1rem;
    }
</style>