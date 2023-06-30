import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user'
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    const getUserInfo = async ({ account, password }) => {
      const res = await loginApi({ account, password })
      userInfo.value = res.result
    }
    return { userInfo, getUserInfo }
  },
  {
    persist: true //持久化配置
  }
)
