import { createStore } from 'vuex'
// 使用vuex-persistedstate插件来进行持久化
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({
  modules: {
    user,
    category,
    cart,
  },
  //配置插件
  plugins: [
    createPersistedstate({
      //本地存储名字
      key: 'erabbit-client-pc-store',
      //指定需要存储的模块
      paths: ['user', 'cart'],
    }),
  ],
})
