<script setup>
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", compenent: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

</script>

<template>
  <div>
    <router-link to="/">Home </router-link>
    <router-link to="/about">About </router-link>
    <router-link to="/contact">Contact </router-link>
  </div>
</template>

<style scoped></style>
