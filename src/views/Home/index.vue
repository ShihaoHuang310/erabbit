<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>
<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
    <template #main>
      <el-button type="primary">查看更多</el-button>
    </template>
  </HomePanel>
  <HomePanel title="人气推荐" sub-title="人气推荐 好多商品"></HomePanel> -->
</template>

<style lang="scss" scoped></style>
