<template>
  <div>
    <h1>Axios Page</h1>
    <input type="number" v-model="phone" />
    <button @click="getCode">获取验证码</button>
  </div>
</template>
<script lang="ts">
import { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { defineComponent, ref, inject } from 'vue'
import { publicApi } from '../../apis'

export default defineComponent({
  setup() {
    const phone = ref('12345678901')
    const $http = inject<AxiosInstance>('$http')

    const getCode = () => {
      publicApi
        .getCode2(phone.value)
        .then((v) => {
          console.log(v)
          ElMessage.success(`获取成功 ${v.num}`)
        })
        .catch((err) => {
          ElMessage.error(err.message)
        })
    }
    return {
      phone,
      getCode
    }
  }
})
</script>
