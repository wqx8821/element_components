<script setup lang="ts">
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};

defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <el-menu
    style="height: 100vh"
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="chooseIcon">
      <el-icon><document /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="chooseArea">
      <el-icon><setting /></el-icon>
      <span>省市区选择器</span>
    </el-menu-item>
    <el-menu-item index="trend">
      <el-icon><setting /></el-icon>
      <span>趋势标记</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>
