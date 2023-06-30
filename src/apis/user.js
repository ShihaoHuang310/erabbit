import instance from '@/utils/http'

export const loginApi = ({ account, password }) => {
  return instance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
