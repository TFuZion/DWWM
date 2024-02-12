import { defineStore } from "pinia";

export const useInventoryListStore = defineStore("inventoryList", {
  state: () => ({
    inventoryList: [],
    id: 0,
  }),

  actions: {
    addItem(item, desc) {
      this.inventoryList.push({ item, desc, id: this.id++ });
    },
    deleteItem(itemId) {
      this.inventoryList = this.inventoryList.filter((x) => {
        return x.id !== itemId;
      });
    },
  },
});