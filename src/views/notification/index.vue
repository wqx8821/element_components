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
    <c-notification :value="50" :max="40" disabledClick />
    <c-notification :value="50" :isDot="true" disabledClick />

    <h2>自定义图标</h2>
    <c-notification icon="ChatLineSquare" disabledClick />
    <c-notification :value="50" disabledClick>
      <template #icon>
        <ChatLineSquare />
      </template>
    </c-notification>

    <h2>唤醒通知菜单</h2>
    <c-notification>
      <template #default>
        <c-list @clickItem="clickItem" @clickAction="clickAction" :list="listData" :actions="actions"></c-list>
      </template>
    </c-notification>
  </div>
</template>

<style lang="scss" scoped></style>
