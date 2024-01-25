<script setup>
    import { defineEmits, reactive } from 'vue'
    import { v4 as newId } from 'uuid'

    const goatFormInfos = reactive({
        name: '',
        isDamascus: false,
        birthDate: new Date(),
        nbVictims: 0
    });

    const emits = defineEmits(['addGoat'])

    const submitHandler = () => {
        emits('addGoat', {
            ...goatFormInfos,
            id: newId()
        })
        goatFormInfos.name = '';
        goatFormInfos.isDamascus = false;
        goatFormInfos.birthDate = new Date();
        goatFormInfos.nbVictims = 0;
    }

    const isDamascusChangeHandler = (event) => {
        goatFormInfos.isDamascus = event.target.checked;
        if (!goatFormInfos.isDamascus) goatFormInfos.nbVictims = 0;
    }
</script>

<template>
    <form action="#" @submit.prevent="submitHandler">
        <div>
            <label for="name">Name: </label>
            <input type="text" id="name" v-model="goatFormInfos.name">
        </div>
        <div>
            <label for="isDamascus">Est-elle syrienne ? </label>
            <input type="checkbox" id="isDamascus" @change="isDamascusChangeHandler" :checked="goatFormInfos.isDamascus">
        </div>
        <div>
            <label for="birthDate">Date de naissance: </label>
            <input type="date" id="birthDate" @input="goatFormInfos.birthDate = $event.target.valueAsDate" :valueAsDate="goatFormInfos.birthDate">
        </div>
        <div>
            <label for="nbVictims">Nombre de victimes: </label>
            <input type="range" min="0" :max="goatFormInfos.isDamascus ? 2_000_000 : 0" step="100" id="nbVictims" @input="goatFormInfos.nbVictims = +$event.target.value" :value="goatFormInfos.nbVictims">
            <span>{{ goatFormInfos.nbVictims }}</span>
        </div>
        <button>Ajouter une chèvre</button>
    </form>
</template>

<style scoped>
    form {
        font-family: monospace;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    form > div {
        display: flex;
        flex-wrap: wrap;
    }

    form > div:nth-child(4) > span {
        flex-basis: 100%;
        text-align: right;
        margin-left: auto;
    }

    form > div > label {
        margin-right: auto;
    }

    form > div > input {
        background-color: hsl(0, 0%, 15%);
        border: hsl(0, 0%, 95%) solid 0.1em;
        padding: 0.175em 0.25em;
        outline: none;
    }

    form, form input {
        font-size: 1.2rem;
        color: hsl(0, 0%, 95%);
    }

    form > button {
        margin-top: 2rem;
        margin-left: auto;
        background-color: rgb(107, 23, 23);
        padding: 0.25em 0.5em;
        border-radius: 0.25em;
        color: hsl(0, 0%, 85%);
        font-family: monospace;
        font-size: 1.5rem;
        border: none;
        transition: background-color 400ms ease,
        scale 400ms ease;
        transform-origin: right;
    }
    
    form > button:hover {
        cursor: pointer;
        scale: 1.1;
        background-color: rgb(134, 34, 34);
    }
</style>