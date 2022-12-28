<script setup lang="ts">
import { ref, watch } from 'vue';

import * as ElIcons from '@element-plus/icons-vue';
import { useCopy } from '../../../hooks/useCopy';

let emits = defineEmits(['update:visible']);
let props = defineProps<{
  title: string; // 弹出框标题
  visible: boolean; // 弹出框显示隐藏
}>();

const visibleRef = ref<boolean>(props.visible);
const handleClick = () => {
  visibleRef.value = !props.visible;
  emits('update:visible', !props.visible);
};

// 监听弹窗显示状态
watch(
  () => visibleRef.value,
  (val) => {
    visibleRef.value = val;
    emits('update:visible', val);
  }
);

// 点击图标复制
const clickItemCopy = (item: string) => {
  useCopy(`<${item} />`);
  // 复制后关闭弹窗
  visibleRef.value = false;
};
</script>

<template>
  <div>
    <el-button type="primary" @click="handleClick()">
      <slot></slot>
    </el-button>
    <div class="choose-icon-dialog-body-height">
      <el-dialog v-model="visibleRef" :title="title">
        <el-scrollbar>
          <div class="container">
            <div class="icon-item" v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="clickItemCopy(item)">
              <div>
                <component :is="item"></component>
              </div>
              <div>{{ item }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.icon-item {
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
  height: 70px;
  cursor: pointer;

  svg {
    width: 2em;
    height: 2em;
  }
}
</style>
