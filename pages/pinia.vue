<script  lang="ts">
import { useCounter } from "~/stores/counter";

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
    <div class="text-white">
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
</template>

