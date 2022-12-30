<script setup lang="ts">
import { listData, actions } from './data';

const clickItem = (event: any) => {
  console.log(event);
};
const clickAction = (event: any) => {
  console.log(event);
};
</script>

<template>
  <div>
    <h2>基础展示</h2>
    <notification :value="50" :max="40" disabledClick />
    <notification :value="50" :isDot="true" disabledClick />

    <h2>自定义图标</h2>
    <notification icon="ChatLineSquare" disabledClick />
    <notification :value="50" disabledClick>
      <template #icon>
        <ChatLineSquare />
      </template>
    </notification>

    <h2>唤醒通知菜单</h2>
    <notification>
      <template #default>
        <list @clickItem="clickItem" @clickAction="clickAction" :list="listData" :actions="actions"></list>
      </template>
    </notification>
  </div>
</template>

<style lang="scss" scoped></style>
