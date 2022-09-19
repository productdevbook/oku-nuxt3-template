<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
const color = useColorMode()
const theme = computed(() => {
  return color.preference === 'system' ? (color.value ? lightTheme : darkTheme) : color.value === 'light' ? lightTheme : darkTheme
})

const router = useRouter()

onUnmounted(() => {
  document.body.attributes.removeNamedItem('style')
})
</script>

<template>
  <div>
    <NConfigProvider :theme="theme">
      <NGlobalStyle />
      <div class="mx-auto mt-4 max-w-sm">
        <div class="mb-10 flex items-center justify-between">
          <a target="_blank" href="https://productdevbook.com">productdevbook.com</a>
          <div class="flex space-x-2">
            <TemLanguageChange />
            <TemColorChange />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <NButton @click="router.push('/')">
            Back Home
          </NButton>
          <p>Nuxt module naive ui!</p>
          <NButton>Default</NButton>
          <NInput placeholder="NInput" />
          <NInputNumber placeholder="NInputNumger" />

          <NPopconfirm>
            <template #trigger>
              <NButton>NPopconfirm</NButton>
            </template>
          </NPopconfirm>
          <NPopover>
            <template #trigger>
              <NButton>NPopover</NButton>
            </template>
            Popover
          </NPopover>

          <NTooltip>
            <template #trigger>
              <NButton>Tooltip</NButton>
            </template>
            Toooltip
          </NTooltip>

          <NTimePicker />
          <NDynamicInput />
          <NDynamicTags />
          <NDatePicker />
          <NColorPicker />
          <NSwitch />
          <NSlider />
          <NCheckbox label="Checkbox" />
          <NCheckboxGroup>
            <NSpace>
              <NCheckbox label="CheckboxGroup1" value="foo" />
              <NCheckbox label="CheckboxGroup2" value="bar" />
            </NSpace>
          </NCheckboxGroup>
          <NCalendar />
          <NDivider />
          <NEmpty />
          <NEl>NEl</NEl>
          <NGradientText>NGradientText</NGradientText>
          <NH1 id="NH1">
            H1
          </NH1>
          <NHr />
          <NA>NA</NA>
          <NTag>NTag</NTag>
          <NText>NText</NText>
          <NBadge :value="999">
            NBadge
          </NBadge>
        </div>
      </div>
    </NConfigProvider>
  </div>
</template>
