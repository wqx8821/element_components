<script setup lang="ts"></script>

<template>
  <div class="container">
    <div>
      <h2>默认使用</h2>
      <c-trend type="down" text="收入" />
      <c-trend text="支出"> </c-trend>
    </div>
    <el-divider />
    <div>
      <h2>自定义图标</h2>
      <c-trend type="down" text="收入">
        <template #icon> <CaretBottom /> </template>
      </c-trend>
      <c-trend text="支出">
        <template #icon> <CaretTop /></template>
      </c-trend>
    </div>
    <el-divider />
    <div>
      <h2>自定义图标颜色</h2>
      <c-trend type="down" text="收入" downColor="#a0cfff">
        <template #icon> <CaretBottom /> </template>
      </c-trend>
      <c-trend text="支出" upColor="#95d475"> </c-trend>
    </div>
    <el-divider />
    <div>
      <h2>自定义文本颜色</h2>
      <c-trend type="down" text="收入" downTextColor="#a0cfff"> </c-trend>
      <c-trend text="支出" upTextColor="#95d475"> </c-trend>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
