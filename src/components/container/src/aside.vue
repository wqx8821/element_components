<script setup lang="ts">
defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <el-scrollbar height="100vh">
    <el-menu style="min-height: 100vh" :collapse="collapse" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2" text-color="#fff" :router="true">
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
      <el-menu-item index="chooseTime">
        <el-icon><setting /></el-icon>
        <span>时间选择</span>
      </el-menu-item>
      <el-menu-item index="notification">
        <el-icon><setting /></el-icon>
        <span>通知菜单</span>
      </el-menu-item>
      <el-menu-item index="chooseCity">
        <el-icon><setting /></el-icon>
        <span>城市选择</span>
      </el-menu-item>
      <el-menu-item index="progress">
        <el-icon><setting /></el-icon>
        <span>进度条</span>
      </el-menu-item>
      <el-menu-item index="menu">
        <el-icon><setting /></el-icon>
        <span>导航菜单</span>
      </el-menu-item>
      <el-menu-item index="calendar">
        <el-icon><setting /></el-icon>
        <span>日历</span>
      </el-menu-item>
      <el-menu-item index="form">
        <el-icon><setting /></el-icon>
        <span>表单</span>
      </el-menu-item>
      <el-menu-item index="modalForm">
        <el-icon><setting /></el-icon>
        <span>弹出框表单</span>
      </el-menu-item>
      <el-menu-item index="table">
        <el-icon><setting /></el-icon>
        <span>表格</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped></style>
