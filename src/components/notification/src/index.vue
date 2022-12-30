<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
defineProps({
  icon: {
    type: String,
    default: 'Sunset',
  },
  type: {
    type: String,
  },
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
  disabledClick: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <el-popover :disabled="disabledClick" :width="300" trigger="click">
    <template #reference>
      <el-badge :value="value" :type="type" :max="max" :isDot="isDot">
        <component :is="icon" v-if="!slots.icon"></component>
        <slot name="icon" v-else></slot>
      </el-badge>
    </template>
    <!-- 列表 -->
    <template #default>
      <slot> </slot>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped></style>
