<script setup>
const products = [
  {id:1, name:'Produit 1', description: 'Description 1', price: 10 },
  {id:2, name:'Produit 2', description: 'Description 2', price: 20},
  {id:3, name:'Produit 3', description: 'Description 3', price: 30},
  {id:4, name:'Produit 4', description: 'Description 4', price: 40},
  {id:5, name:'Produit 5', description: 'Description 5', price: 50},
]
</script>

<template>
  <div class="products">
    <h1>Nos produits</h1>
    <div class="products-cards">
      <div v-for="product in products" :key="product.id" class="card">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Prix: {{ product.price }}</p>
      </div>
    </div>

  </div>
  
</template>

<style scoped>
.products {
  text-align: center;
}

.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 200px;
}
</style>
