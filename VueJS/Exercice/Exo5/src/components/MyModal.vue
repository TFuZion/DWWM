<script setup>

    const emits = defineEmits(['modalClose'])

    const modalBgClickHandler = (event) => {
        emits('modalClose')
    }
</script>

<template>
    <div class="modal-bg" @click.self="modalBgClickHandler">
        <div class="modal-content">
            <div>
                <slot></slot>
            </div>
            <div>
                <button @click="$emit('modalClose')">Fermer</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .modal-bg {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: grid;
        place-content: center;
    }

    .modal-content {
        height: 600px;
        padding: 5%;
        box-sizing: border-box;
        border-radius: 1rem;
        aspect-ratio: 1 / 1;
        background-color: hsl(0, 0%, 95%);
    }
</style>