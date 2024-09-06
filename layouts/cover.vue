<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../utils/layoutHelper'
const props = defineProps({
  background: {
    default: '',
  },
})

const slideBg = handleBackground(props.background, true);
const style = computed(() => slideBg)
</script>

<template>
  <div class="slidev-layout cover" :style="style" v-bind:class="(slideBg.background || slideBg.backgroundImage) ? '' : 'no-background'">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>