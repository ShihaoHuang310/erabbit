import instance from '@/utils/http'

export function getCategory() {
  return instance({
    url: 'home/category/head'
  })
}
