import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getTopCategoryAPI } from '@/apis/category'
export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async id => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await getTopCategoryAPI((id = route.params.id))
    categoryData.value = res.result
    console.log('面包屑导航', categoryData.value)
  }
  onMounted(() => {
    getCategory()
  }),
    onBeforeRouteUpdate(to => {
      getCategory(to.params.id)
    })
  return {
    categoryData
  }
}
