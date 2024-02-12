<script setup>
import { useInventoryListStore } from "@/stores/inventoryList";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useInventoryListStore();

const { inventoryList } = storeToRefs(store);

const formattedDateTime = computed(() => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return new Date().toLocaleDateString("fr-FR", options);
});

const { deleteItem } = store;
</script>

<template>
  <div v-for="item in inventoryList" :key="item.id">
    <h3>{{ thing.item }}</h3>
    <span id="date">Ajouté le : {{ formattedDateTime }}</span>
    <span @click="deleteItem(thing.id)"> &#10060; </span>
  </div>
</template>

<style scoped></style>
