<script setup>
import { ref, reactive } from "vue";
import { v4 as newId } from "uuid";

const props = defineProps({
  mode: {
    type: String,
    default: "add",
  },
  product: {
    type: Object,
    default: null,
  },
});

const emits = defineEmits(["addProduct", "editProduct", "closeModal"]);

const category = [
  "meat",
  "fish",
  "fresh Product",
  "fruts and vegetable",
  "freezer",
  "salt grocery",
  "sugar grocery",
  "beverage",
  "bio",
];

const productInfos = reactive({
  id: props.product ? props.product.id : undefined,
  name: props.product ? props.product.name : "",
  price: props.product ? props.product.price : ref(0),
  description: props.product ? props.product.description : "",
  // picture: props.product ? props.product.picture : null,
  category: props.product ? props.product.category : [],
});

const submitHandler = () => {
  if (props.mode === "add")
    emits("addProduct", {
      ...productInfos,
      id: newId(),
    });
  else if (props.mode === "edit")
    emits("editProduct", {
      ...productInfos,
    });
};
  // onFileSelected(e) {
  //   console.log(e)
  // }
</script>

<template>
  <div class="modal-bg" @click.self="$emit('closeModal')">
    <div class="modal-content">
      <form action="#" @submit.prevent="submitHandler">
        <div>
          <label for="name">Name : </label>
          <input type="text" id="name" v-model="productInfos.name" />
        </div>
        <div>
          <input type="file" @change="onFileSelected" />
        </div>
        <div>
          <label for="price">Price : </label>
          <input type="number" id="price" v-model="productInfos.price" />
        </div>
        <div>
          <label for="description">Description : </label>
          <textarea
            id="description"
            cols="25"
            rows="5"
            v-model="productInfos.description"
          ></textarea>
        </div>
        <div>
          <label for="category">Category : </label>
          <select id="category" v-model="productInfos.category">
            <option v-for="c in category" :value="c">{{ c }}</option>
          </select>
        </div>
        <button>
          {{
            mode.substring(0, 1).toUpperCase() +
            mode.substring(1).toLocaleLowerCase()
          }}
          a Product
        </button>
      </form>
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
  height: 60dvh;
  aspect-ratio: 1.5 / 1;
  padding: 2.5%;
  box-sizing: border-box;
  border-radius: 1.5rem;
  background-color: hsl(0, 0%, 75%);
}
</style>
