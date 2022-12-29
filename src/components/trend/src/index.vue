<script setup lang="ts">
import { computed, useSlots } from 'vue';

const props = defineProps({
  // 趋势是上升 up 还是下降 down
  type: {
    type: String,
    default: 'up',
  },
  // 趋势文字 可以是props 也可以是插槽
  text: {
    type: String,
    default: '文字',
  },
  upColor: {
    type: String,
    default: '#f5222d',
  },
  downColor: {
    type: String,
    default: '#52c41a',
  },
  upTextColor: {
    type: String,
    default: '#484848',
  },
  downTextColor: {
    type: String,
    default: '#484848',
  },
});

// 判断插槽内容存在 slots.default具名插槽为对应名字
const slots = useSlots();

// 文本颜色
const textColor = computed(() => {
  return props.type == 'up' ? props.upTextColor : props.downTextColor;
});
</script>

<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot></slot>
      <div v-if="!slots.default">{{ text }}</div>
    </div>
    <div class="icon" :style="{ color: type == 'up' ? upColor : downColor }">
      <slot name="icon"></slot>
    </div>
    <div class="icon" v-if="!slots.icon">
      <ArrowUp v-if="type == 'up'" :style="{ color: upColor }" />
      <ArrowDown v-else :style="{ color: downColor }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
