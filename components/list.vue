<template>
  <NuxtLink class="py-4 hover:shadow-xl global-text" :to="link.url">
    <div
      class="flex items-center justify-between space-x-3 bg-gray-300 dark:bg-gray-700 rounded-lg p-4"
    >
      {{ link.title }}
      <ArrowNarrowRightIcon class="h-6 w-6 global-text" aria-hidden="true" />
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { NuxtLink } from "#components";
import { defineNuxtComponent } from "#app";
import { link } from "~~/types";
import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
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
    return {};
  },
});
</script>
