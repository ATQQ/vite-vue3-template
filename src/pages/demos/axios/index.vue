<script lang="ts" setup>
import type { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import { inject, ref } from 'vue'
import { publicApi } from '../../../apis/index'

const phone = ref('12345678901')
const $http = inject<AxiosInstance>('$http')

function getCode() {
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
</script>

<template>
  <div>
    <h1>Axios Page</h1>
    <input v-model="phone" type="number">
    <button @click="getCode">
      获取验证码
    </button>
  </div>
</template>
