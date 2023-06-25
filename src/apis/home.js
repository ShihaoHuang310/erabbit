import instance from '@/utils/http'

export function getBannerAPI() {
  return instance({
    url: '/home/banner'
  })
}
