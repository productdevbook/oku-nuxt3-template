<template>
    <div class="max-w-sm mx-auto mt-4">
        <div class="flex items-center">
            <img
                class="w-40 h-40 rounded-full mb-4"
                height="160"
                width="160"
                src="https://avatars.githubusercontent.com/u/38668796?v=4"
                alt="productfrontenddeveloper"
            />
            <a
                target="blank"
                class="ml-4 text-green-900 dark:text-green-400 font-bold"
                href="https://github.com/productdevbook"
            >Follow Me Github</a>
        </div>
        <ul role="list" class="mt-10 space-y-4">
            <li v-for="item in lists" :key="item.id">
                <NuxtLink class="py-4 hover:shadow-xl global-text" :to="item.url">
                    <div
                        class="flex items-center justify-between space-x-3 bg-gray-300 dark:bg-gray-700 rounded-lg p-4"
                    >
                        {{ item.title }}
                        <ArrowNarrowRightIcon class="h-6 w-6 global-text" aria-hidden="true" />
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'

interface links {
    id: number
    title: string
    url: any
}

export default {
    components: {
        ArrowNarrowRightIcon
    },
    setup() {
        const router = useRouter()
        const lists = ref<links[]>([
            { id: 1, title: 'Pinia Store', url: 'pinia' },
            { id: 1, title: 'Modal', url: 'modal' },
             { id: 1, title: 'Menu', url: 'menu' },
            { id: 1, title: 'New soon...', url: '' },
        ])
        return {
            lists
        }
    }
}
</script>