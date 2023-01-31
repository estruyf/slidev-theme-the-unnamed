<!-- 
Example:

---
clicks: 4
---

# Common capabilities of extensions

- Registering commands, configurations, keybindings, or menus
- Storing workspace or global state
- Displaying notifications
- Collect user input
- Open files, folders, or URLs
- Theming
- Language features

<ShowHide show="1" hide="2">
  Show on click 1, hide on 2, {{ $slidev.nav.clicks }}
</ShowHide>
<ShowHide show="2" hide="3">
  Show on click 1, hide on 2, {{ $slidev.nav.clicks }}
</ShowHide>

-->


<script setup lang="ts">
import { ref, resolveDirective } from 'vue'

const props = defineProps({
  show: {
    type: Number,
    default: null
  },
  hide: {
    type: Number,
    default: null
  },
})

const show = ref(props.show)
const hide = ref(props.hide)
</script>

<template>
  <slot v-if="$slidev.nav.clicks >= parseInt(show) && $slidev.nav.clicks < parseInt(hide)" />
</template>
