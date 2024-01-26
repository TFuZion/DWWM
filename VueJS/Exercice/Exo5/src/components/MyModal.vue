<script setup>
const emits = defineEmits(["modalClose"]);

const modalBgClickHandler = (event) => {
  emits("modalClose");
};
</script>

<template>
  <div class="modal-bg" @click.self="modalBgClickHandler">
    <div class="modal-content">
      <div>
        <slot></slot>
      </div>
      <div>
        <button id="fermer" @click="$emit('modalClose')">Fermer</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-content: center;
}

.modal-content {
  height: 600px;
  padding: 5%;
  box-sizing: border-box;
  border-radius: 1rem;
  aspect-ratio: 1 / 1;
  background-color: hsl(0, 0%, 50%);
  color: hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
/* #fermer {

} */
</style>
