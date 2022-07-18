<script setup lang="ts">
import { ILink } from '~/types'
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
      class="flex items-center justify-between space-x-3 rounded-lg bg-gray-300 p-4 dark:bg-gray-700"
    >
      <div class="item-center flex">
        <UnoIcon :class="link.icon" class="mr-3 text-lg dark:text-gray-400" />
        {{ link.title }}
      </div>
      <UnoIcon
        class="i-ic-round-arrow-forward-ios global-text h-6 w-6 text-lg"
      />
    </div>
  </NuxtLink>
</template>
