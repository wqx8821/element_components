<template>
  <div>
    <el-progress
      :percentage="p"
      :isAnimation="isAnimation"
      :time="time"
      v-bind="$attrs"
    ></el-progress>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps({
  // 当前进度条进度
  percentage: {
    type: Number,
    default: 0,
  },
  // 是否开启动画
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画时长（毫秒）
  time: {
    type: Number,
    default: 800,
  },
});

// 记录开启动画时每秒加载的进度
const p = ref(0);

// 页面加载完成判断是否开启动画
onMounted(() => {
  // 开启动画 规定时间内完成进度
  if (props.isAnimation) {
    // 计算每秒钟需要加载的进度 Math.ceil向上取整
    let t = Math.ceil(props.time / props.percentage);
    // 动画效果
    let timer = setInterval(() => {
      p.value += 1;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
      }
    }, t);
  } else {
    p.value = props.percentage;
  }
});
</script>

<style lang="scss" scoped></style>
