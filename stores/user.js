import { defineStore } from 'pinia'

export const userUserStore = defineStore('user', {
    state: () => ({
        isMenuOverlay: false,
        isLoading: false,
        cart: [],
        checkout: []
    }),
    persist: true
})