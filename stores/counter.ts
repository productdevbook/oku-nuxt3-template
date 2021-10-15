import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounter = defineStore('counter', {
    state: () => ({
        n: 5,
        myRef: ref('hello'),
    })
})

