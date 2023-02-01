<script setup lang="ts">
  import { computed } from 'vue'
  import { handleBackground } from '@slidev/client/layoutHelper'

  const props = defineProps<{
    imageSrc?: string
    helloMsg?: string
    name?: string
    job?: string
    line1?: string
    line2?: string
    email?: string
    social1?: string
    social2?: string
    social3?: string
  }>()

  const style = computed(() => handleBackground(props.imageSrc, false))
</script>

<template>
  <div class="slidev-layout about-me p-0">
    <div class="flex h-full">
      <div class="w-1/2 h-full flex flex-col justify-end" :style="style">
      </div>
      <div class="w-1/2 flex flex-col justify-between items-end px-8 py-16">
        <h1 v-if="helloMsg" class="flex">{{ helloMsg }}</h1>

        <div class="flex flex-col justify-end items-end text-right py-16">
          <h2 class="font-extrabold">{{ name }}</h2>

          <div class="text-2xl space-y-2 mt-4">
            <p class="job">{{ job }}</p>
            <p class="line-1">{{ line1 }}</p>
            <p class="line-2">{{ line2 }}</p>
          </div>

          <div class="text-2xl space-y-2 mt-4">
            <p class="social social-1">{{ social1 }}</p>
            <p class="social social-2">{{ social2 }}</p>
            <p class="social social-3">{{ social3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

