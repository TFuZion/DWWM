<script setup>
import { ref } from "vue";
import InventoryList from "@/components/InventoryList.vue";

const props = defineProps({ getUserName: String });

const emit = defineEmits(["update:userStartApp"]);

const toggleUserStartApp = () => {
  userStartApp.value = !userStartApp.value;
  emit("update:userStartApp", userStartApp.value);
};

const userStartApp = ref(false);
</script>

<template>
  <h2>Vous êtes dans la gestion du stock du BackPack de {{ getUserName }}</h2>
  <p>Voici ce que vous avez dans votre inventaire :</p>
  <InventoryList />
  <a href="#" @click="toggleUserStartApp">Se déconnecter</a>
</template>
