<script lang="ts">
  import {ArrowNarrowRightIcon} from "@heroicons/vue/outline"
  import {NuxtLink} from "#components"
  import {defineNuxtComponent} from "#app"
  import {link} from "~~/types"
  export default defineNuxtComponent({
    components: {
      NuxtLink,
      ArrowNarrowRightIcon,
    },
    props: {
      link: {
        type: Object as () => link,
        required: true,
      },
    },
    setup() {
      return {}
    },
  })
</script>

<template>
  <NuxtLink class="global-text py-4 hover:shadow-xl" :to="link.url">
    <div
      class="flex items-center justify-between space-x-3 rounded-lg bg-gray-300 p-4 dark:bg-gray-700">
      {{ link.title }}
      <ArrowNarrowRightIcon class="global-text h-6 w-6" aria-hidden="true" />
    </div>
  </NuxtLink>
</template>
