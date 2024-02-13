<script setup>
import { reactive } from 'vue';
import { useInventoryStore } from '../stores/Inventory.js';
import { storeToRefs } from 'pinia';
const inventoryStore = useInventoryStore();
const { inventory } = storeToRefs(inventoryStore);
const { removeItem } = inventoryStore;
const showEdit = reactive({});
const editvalue = reactive({});
const toggle = (id) => {
    showEdit[id] = !showEdit[id];
    if (showEdit[id]) {
        editvalue[id] = '';
    }
};
const submitEdit = (item) => {
    item.name = editvalue[item.id];
    showEdit[item.id] = false;
};
</script>

<template>
    <div class="flex-container">
        <h1>Inventory List</h1>
    <div v-for="item in inventory" :key="item.id">
        <ul>
            <RouterLink :to="{name: 'item-detail', params: {id: item.id}}">
                <li>{{ item.name }}</li>
            </RouterLink>
            <button @click="removeItem(item.id)">delete</button>
            <button @click="toggle(item.id)">Edit</button>
            <input type="text" v-if="showEdit[item.id]" v-model="editvalue[item.id]">
            <button v-if="showEdit[item.id]" @click="submitEdit(item)">Submit</button>
        </ul>
        <div>
    </div>
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
ul {
    display: flex;
    margin-top: 2rem;
}
</style>