import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    count: 0,
  }),
  getters: {
    isEven: (state) => state.count % 2 === 0,
  },
  actions: {
    synIncrease() {
      this.count++
    },
    async asyncIncrease() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.count++
    },
  },
})

export default useStore

// interface State {
//   count: number
// }

// const store: Module<State, unknown> = {
//   namespaced: true,
//   state() {
//     return {
//       count: 0,
//     }
//   },
//   getters: {
//     isEven(state) {
//       return state.count % 2 === 0
//     },
//   },
//   // 只能同步
//   mutations: {
//     increase(state, num = 1) {
//       state.count += num
//     },
//     decrease(state) {
//       state.count -= 1
//     },
//   },
//   // 支持异步,可以考虑引入API
//   actions: {
//     increase(context, payload) {
//       context.commit('increase', payload)
//       setTimeout(() => {
//         context.commit('decrease')
//       }, 1000)
//     },
//   },
// }

// export default store
