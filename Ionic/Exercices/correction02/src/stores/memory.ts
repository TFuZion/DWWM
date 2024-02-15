import { defineStore } from "pinia";
import { Memory } from "@/types/types";
import { ref, computed } from "vue";
import { v4 as uuid } from "uuid";

export const useMemoryStore = defineStore("memory", () => {
  const memories = ref<Memory[]>([
    {
      id: "id1",
      title: "la plage",
      description: "c'est beau",
      image: "https://source.unsplash.com/random/200x200?sea",
    },
    {
      id: "id2",
      title: "la montagne",
      description: "c'est magnifique",
      image: "https://source.unsplash.com/random/200x200?mountains",
    },
  ]);

  // Permet de récupérer un memory par son id
  const getMemoryById = computed(() => {
    return (id: string) =>
      memories.value.find((memory) => memory.id === id) ?? null;
  });

  // Omit permet de créer un type en omettant une clé
  function addMemory(memory: Omit<Memory, "id">) {
    // ajout d'un memory avec la destructation + les valeurs du memory
    memories.value.push({ id: uuid(), ...memory });
  }

  return { memories, addMemory, getMemoryById };
});
