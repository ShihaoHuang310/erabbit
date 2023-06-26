<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView :key="$route.fullPath" />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
</script>

<style lang="scss" scoped></style>
