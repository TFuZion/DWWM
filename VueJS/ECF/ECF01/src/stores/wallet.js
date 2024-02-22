import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    countWallet: ref(0),
    countDepense: ref(0),
    id: ref(1),
    countIncrement: [],
    countDecrement: []
  }),
  actions: {
    incrementAction(action) {
      this.countIncrement.push({ ...action, id: this.id++ })
    },
    decrementAction(action) {
      this.countDecrement.push({ ...action, id: this.id++ })
    }
  },
});
