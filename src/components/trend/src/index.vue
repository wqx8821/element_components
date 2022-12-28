<script setup lang="ts">
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
});
</script>

<template>
  <div class="trend">
    <div class="text">{{ text }}</div>
    <div class="icon">
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
