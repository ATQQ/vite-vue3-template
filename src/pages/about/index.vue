<template>
  <div>
    <h1>About Page</h1>
    <h2>{{ count }}</h2>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useCountStore } from '@/store'

const store = useCountStore()
const { count } = storeToRefs(store)

// todo: use onMounted
onMounted(() => {
  store.$patch((v) => {
    v.count += 1
  })
})
</script>
<style lang="scss" scoped>
h2 {
  color: red;
}
</style>
