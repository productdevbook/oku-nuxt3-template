<script setup lang="ts">
  import {ILink} from "~/types"
  defineProps({
    link: {
      type: Object as () => ILink,
      required: true,
    },
  })
</script>

<template>
  <NuxtLink class="global-text py-4 hover:shadow-xl" :to="link.url">
    <div
      class="flex items-center justify-between space-x-3 rounded-lg bg-gray-300 p-4 dark:bg-gray-700">
      {{ link.title }}
      <UnoIcon
        class="i-ic-round-arrow-forward-ios global-text h-6 w-6 text-lg" />
    </div>
  </NuxtLink>
</template>
