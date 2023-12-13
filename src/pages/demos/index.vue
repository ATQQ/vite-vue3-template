<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useCountStore } from '@/store'

const id = computed(() => ~~(Math.random() * 1000))

// 获取自定义的store
const store = useCountStore()

// 取需要的 state
const { count } = storeToRefs(store)

// isEven
const isEven = computed(() => store.count % 2 === 0)
// or 从 getters 中获取
// const { isEven } = storeToRefs(store)
// or 从 getters 中获取
// const isEven = computed(() => store.isEven)

// add 方法
function add() {
  return store.$patch((v) => {
    v.count += 1
  })
}
// or actions
// const add = () => store.synIncrease()

// asyncAdd 方法
// const asyncAdd = () => store.$patch((v) => {
//   setTimeout(() => {
//     v.count++
//   }, 1000)
// })
// or actions
const asyncAdd = () => store.asyncIncrease()
</script>

<template>
  <div class="index-pages">
    <h1>Demos Routes</h1>
    <p class="links">
      <RouterLink to="/demos/element">
        Element UI Plus
      </RouterLink>
      <RouterLink :to="`/demos/dynamic/${id}`">
        Dynamic
      </RouterLink>
      <RouterLink to="/demos/axios">
        Axios
      </RouterLink>
      <RouterLink to="/demos/vueuse">
        VueUse
      </RouterLink>
    </p>
    <div class="demos-view-wrapper">
      <RouterView v-slot="{ Component }">
        <div>
          <component :is="Component" />
        </div>
      </RouterView>
    </div>

    <h2>Pinia</h2>
    <h3>{{ isEven ? 'Even' : 'Odd' }}</h3>
    <h3>{{ count }}</h3>
    <div>
      <button @click="add">
        Sync Add
      </button>
      <button @click="asyncAdd">
        Async Add
      </button>
    </div>
  </div>
</template>

<style scoped>
.index-pages {
  text-align: center;
}
.links {
  display: flex;
  justify-content: space-around;
}
@media (min-width: 1024px) {
  .index-pages {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.demos-view-wrapper {
  padding: 40px;
}
</style>
