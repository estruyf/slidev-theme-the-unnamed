<!-- 
Usage:

<circle left="430px" top="350px" width="330px" height="45px" borderColor="#44FFD2" borderWidth="5px" borderStyle="solid" />
-->

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  x: number | string
  y: number | string
  backgroundColor?: string
  borderColor?: string
  borderStyle?: string
  borderWidth?: string
  width?: string
  height?: string
  title?: string
  description?: string
  textColor?: string
}>()

const style = computed(() => ({
  'width': props.width || `100px`,
  'height': props.height || `100px`,
  'top': props.y,
  'left': props.x,
  'background-color': props.backgroundColor || undefined,
  'border-color': props.borderColor || `#fff`,
  'border-width': props.borderWidth || `2px`,
  'border-style': props.borderStyle || `solid`,
  'color': props.textColor || undefined,
  'content': `' '`
}))
</script>

<template>
  <div 
    class="absolute flex flex-col justify-center items-center rounded-full text-base text-center p-4 space-y-2"
    :style="style">
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>