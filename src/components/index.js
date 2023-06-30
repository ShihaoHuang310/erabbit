import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

//组件全局注册
export const componentsPlugin = {
  install(app) {
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}
