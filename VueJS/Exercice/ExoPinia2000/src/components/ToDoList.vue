<script setup>
import { useTodoListStore } from '@/stores/todoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore()

const { todoList } = storeToRefs(store)

const { deleteTodo } = store;

const { toggleCompleted } = store;


</script>

<template>
    <div v-for="todo in todoList" :key="todo.id">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span id="pointer" @click="toggleCompleted(todo.id)"> &#10004; </span>
      <button @click="deleteTodo(todo.id)">Supprimer</button>
    </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
#pointer {
  cursor: pointer;
}
</style>