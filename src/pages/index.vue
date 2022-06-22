<script setup lang="ts">
  import {ILink} from "~/types"
  const {t} = useLang()
  const lists = ref<ILink[]>([
    {id: 1, title: "Pinia Store", url: "pinia"},
    {id: 1, title: "Modal", url: "modal"},
    {id: 1, title: "Menu", url: "menu"},
    {id: 1, title: "New soon...", url: ""},
  ])
</script>

<template>
  <div class="mx-auto mt-4 max-w-sm">
    <div class="mb-10 flex items-center justify-between">
      <a target="_blank" href="https://twitter.com/productdevbook"
        >@productdevbook</a
      >
      <div class="flex space-x-2">
        <TemLanguageChange />
        <TemColorChange />
      </div>
    </div>
    <div class="flex items-center rounded-lg dark:bg-gray-700">
      <div class="flex w-full items-center justify-between px-4 py-2">
        <img
          class="h-20 w-20 rounded-full"
          height="160"
          width="160"
          src="https://avatars.githubusercontent.com/u/38668796?v=4"
          alt="productfrontenddeveloper" />
        <a
          target="blank"
          class="ml-4 font-bold text-gray-900 dark:text-white"
          href="https://github.com/productdevbook"
          >{{ t("follow") }}</a
        >
      </div>
    </div>

    <ul role="list" class="mt-10 space-y-4">
      <li v-for="item in lists" :key="item.id">
        <List
          :link="{
            id: item.id,
            title: item.title,
            url: item.url,
          }" />
      </li>
    </ul>
  </div>
</template>
