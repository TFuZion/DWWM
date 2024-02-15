import {defineStore} from 'pinia'
import { ref } from 'vue'
import type { MemoryType } from '@/types/memory'

export const useMemoryStore = defineStore('store', () => {
  const id = ref<number>(0)
  const memories = ref<MemoryType[]>([])

  const addMem: (memory: MemoryType) => {
    memories.value.push(memory)
  }

  return {id, memories, addMem}
})