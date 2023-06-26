import instance from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = id => {
  return instance({
    url: '/category',
    params: {
      id
    }
  })
}