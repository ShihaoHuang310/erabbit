import instance from '@/utils/http'

export function getCategoryAPI() {
  return instance({
    url: '/home/category/head'
  })
}
