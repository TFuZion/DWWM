<script setup>
import { ref, computed } from "vue";
let count = ref(1);

const incrementCount = () => {
  count.value++;
};
const decrementCount = () => {
  count.value--;
};
const buttonDisabledComputed = computed(() => {
  return count.value <= 0;
});
const multiple = computed(() => {
  if (count.value % 3 === 0 && count.value % 5 === 0) {
    const fizzbuzz = "FizzBuzz";
    return fizzbuzz;
  } else if (count.value % 5 === 0) {
    const buzz = "Buzz";
    return buzz;
  } else if (count.value % 3 === 0) {
    const fizz = "Fizz";
    return fizz;
  } else return count;
});
</script>

<template>
  <button id="green" @click="incrementCount">Add 1</button>
  <span>{{ multiple }}</span>
  <button id="red" :disabled="buttonDisabledComputed" @click="decrementCount">
    Sup 1
  </button>
</template>

<style scoped>
button {
  padding: 0.5em 1em;
  color: hsl(0, 0%, 95%);
  border-radius: 25px;
  border: none;
  margin: 0.5em;
  transition: background-color 400ms ease, scale 400ms ease;
}
#red {
  background-color: rgb(207, 45, 45);
}
#green {
  background-color: rgb(44, 136, 44);
}
#green:hover {
  background-color: green;
}
#red:not([disable]):hover {
  background-color: rgb(214, 12, 12);
}
button:not([disabled]):hover {
  cursor: pointer;
  scale: 1.05;
}
#red:is([disabled]) {
  background-color: gray;
}
#red:is([disabled]):hover {
  background-color: gray;
}
span {
  margin: 20px;
}
</style>
