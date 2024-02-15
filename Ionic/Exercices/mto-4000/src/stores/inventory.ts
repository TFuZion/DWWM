import { defineStore } from "pinia";
import { BackPack } from "@/types/types";
import {ref, computed} from "vue";
import { v4 as uuid } from "uuid";

export const useBackPackStore = defineStore("item", () => {
  const items = ref<BackPack[]>([
    {
      id: '',
      title: '',
      image: '',
      description: '',
    }
  ])

  function addItems(item: Omit<BackPack, 'id'>) {
    items.value.push({id: uuid(), ...item})
  }
  return {items, addItems}
})