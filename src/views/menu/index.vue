<script setup lang="ts">
import { data1, data2 } from './demo-data';
</script>

<template>
  <div class="container">
    <h4>两级菜单</h4>
    <c-menu :data="data1" width="400" />
    <h4>无限层级菜单</h4>
    <c-infinite-menu :data="data2" width="400" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 30vw;
}
</style>
