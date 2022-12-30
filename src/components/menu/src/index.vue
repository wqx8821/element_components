<script setup lang="ts">
import { PropType } from 'vue';
import { MenuItem } from './types';

defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  defaultActive: {
    type: String,
    default: '',
  },
  router: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <!-- $attrs接收父组件传递的内容， 不包含在props已经接收的数据 -->
  <el-menu v-bind="$attrs" :defaultActive="defaultActive" :router="router">
    <template v-for="(item, index) in data" :key="index">
      <!-- 第一级 -->
      <el-menu-item v-if="!item.children || item.children.length <= 0">
        <component :is="item.icon" v-if="item.icon"></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <!-- 有子级 -->
      <el-sub-menu v-if="item.children && item.children.length >= 0">
        <template #title>{{ item.name }}</template>
        <el-menu-item v-for="(subItem, index1) in item.children" :key="index1" :index="index">
          <component :is="subItem.icon" v-if="subItem.icon"></component>
          <span>{{ subItem.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>
