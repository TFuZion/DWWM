<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('')

const store = useTodoListStore()

function addItem(item) {
  if (item.length === 0) {
    return
  }
  store.addTodo(item);
  todo.value = '';
}

</script>

<template>
  <div>
    <form @submit.prevent="addItem(todo)">
      <input type="text" v-model="todo">
      <button>Ajouter</button>
    </form>
  </div>
</template>

<style scoped>

</style>