import { defineStore } from 'pinia';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    inventory: [],
    id: 1,
  }),
  actions: {
    addItem(item) {
      this.inventory.push({ ...item, id: this.id++ });
    },
    removeItem(idToRemove) {
      this.inventory = this.inventory.filter((item) => item.id !== idToRemove);
    },
  },
});