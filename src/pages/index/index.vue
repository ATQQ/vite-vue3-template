<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <p class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="`/dynamic/${id}`">Dynamic</router-link>
      <router-link :to="`/axios`">Axios</router-link>
      <router-link :to="`/element`">Element UI Plus</router-link>
    </p>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <h2>Pinia(Replace Vuex)</h2>
    <h3>{{ isEven ? 'Even' : 'Odd' }}</h3>
    <h3>{{ count }}</h3>
    <div>
      <button @click="add">Sync Add</button>
      <button @click="asyncAdd">Async Add</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
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
const add = () =>
  store.$patch((v) => {
    v.count += 1
  })
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
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
