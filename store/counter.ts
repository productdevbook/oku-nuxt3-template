import { ref, Ref } from "vue";
import { defineStore } from "pinia";

interface CounterState {
    n: number;
    myRef: Ref<string>;
}

export const useCounter = defineStore('counter', {
    state: (): CounterState => ({
        n: 5,
        myRef: ref('hello'),
    }),
    actions: {
        increment() {
            this.n++;
        },

    }
})

