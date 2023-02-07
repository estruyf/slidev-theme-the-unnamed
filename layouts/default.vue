<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../utils/layoutHelper'
const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="bg-main slidev-layout default" :style="style">
    <div class="my-auto h-full">
      <slot />
    </div>
  </div>
</template>