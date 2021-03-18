<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <p class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="`/dynamic/${id}`">Dynamic</router-link>
    </p>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  setup: () => {
    const id = computed(() => {
      return ~~(Math.random() * 1000)
    })
    return {
      id
    }
  }
})
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