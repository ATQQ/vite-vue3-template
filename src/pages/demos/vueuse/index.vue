<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
  <h1>useWindowSize</h1>
  <p>{{ width }} x {{ height }}</p>
</template>
