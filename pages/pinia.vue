<script  lang="ts">
import { useCounter } from "~/store/counter";

export default {
    setup() {
        const counter = useCounter();
        return {
            counter,
        }
    },
}

</script>

<template>
    <div>
        <div class="global-text">
            <pre>{{ counter.$state }}</pre>
            <!-- Remove this component to get started! -->
            <p>
                N: {{ counter.n }}
                <br />
                myRef: {{ counter.myRef }}
            </p>

            <input class="text-black" type="text" v-model="counter.myRef" />
            <br />
            <input class="text-black" type="number" v-model="counter.n" />
        </div>
        <button class="p-4 global-text" @click="counter.increment()">+1 number click</button>
    </div>
</template>

