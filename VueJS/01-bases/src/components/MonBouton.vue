<script setup>
    const texteDuBouton = "Blabla";
    const chaine = `Ma chaine ${Math.random()}`

    const fonctionNbAlea = () => Math.random()

    const delHTML = `
        <span>Je suis un span</span>
    `

    function direBonjour () {
        console.log("Bonjour tout le monde !");
    }

    const catIMG = `https://http.cat/404`
</script>

<template>
    <!-- <button v-on:click="direBonjour" >{{ fonctionNbAlea() }}</button> -->
    <button @click="direBonjour" >{{ fonctionNbAlea() }}</button>
    <div v-html="delHTML"></div>
    <div>
        <!-- <img v-bind:src="catIMG" alt=""> -->
        <img :src="catIMG" alt="">
    </div>
</template>

<style scoped>
    button {
        background-color: rgb(144, 17, 17);
        padding: 0.5em 1em;
        color: hsl(0, 0%, 95%);
        border-radius: 0.5em;
        border: none;
        margin: 0.5em;
        transition: background-color 400ms ease, scale 400ms ease;
    }
    
    button:hover {
        background-color: rgb(172, 32, 32);
        cursor: pointer;
        scale: 1.05;
    }
</style>