<script setup lang="ts">
import { ref } from 'vue';
import Aside from './aside.vue';
import Header from './header.vue';

const isCollapse = ref(false);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto"><Aside v-model:collapse="isCollapse" /></el-aside>
      <el-container class="common-layout-right">
        <el-header style="border-bottom: 1px solid #484848">
          <Header v-model:collapse="isCollapse" />
        </el-header>
        <el-main style="height: calc(100vh - 60px)">
          <el-scrollbar height="100%">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
/* .common-layout {
  width: 100vw;
  height: 100vh;
} */
.common-layout-right {
  display: flex;
  flex-direction: column;
}
</style>
