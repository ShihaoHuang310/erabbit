import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    //全局指令
    app.directive('img-lazy', {
      /**
       *
       * @param {*} el 绑定元素
       * @param {*} binding 绑定的值
       */
      mounted(el, binding) {
        console.log(el, binding.value)
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
