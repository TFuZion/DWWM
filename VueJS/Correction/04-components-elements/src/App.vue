<script setup>
    import { reactive } from 'vue'
    import GoatAddForm from './components/GoatAddForm.vue'
    import GoatCard from './components/GoatCard.vue'

    const myGoats = reactive([])

    const deleteGoatHandler = (goat, index) => {
        if (!goat.isDamascus) {
            myGoats.splice(index, 1)
            myGoats.push({
                ...goat,
                isDamascus: true
            })
        }
    }
</script>

<template>
    <div>
        <GoatAddForm @add-goat="myGoats.push($event)" />
    </div>
    <div>
        <GoatCard v-for="(g, i) in myGoats" :key="g.id" :goat="g" @delete-goat="deleteGoatHandler(g, i)" />
    </div>
</template>

<style scoped>
</style>
