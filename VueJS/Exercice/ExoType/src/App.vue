<script setup>
import { ref, reactive } from "vue";
import FormProduct from "./components/FormProduct.vue";

const productArray = ref([]);
const productFormMode = ref("");
const productBeingEdited = reactive({});

const buttonAddProductHandler = () => {
  for (const key in productBeingEdited) {
    productBeingEdited[key] = "";
  }
  productFormMode.value = "add";
};

const addProductHandler = (product) => {
  productArray.value.push(product)
  productFormMode = ''
}

</script>

<template>
  <button @click="buttonAddProductHandler">Add</button>
  <FormProduct v-if="productFormMode" @close-modal="productFormMode=''" :mode="productFormMode" @add-product="addProductHandler"/>
  <p v-if="productArray.length === 0">No Product Yet...</p>
</template>

<style scoped></style>
