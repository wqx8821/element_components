<script setup lang="ts">
import { ref } from 'vue';

let visible = ref(false);
</script>

<template>
  <c-chooseIcon title="图标选择" v-model:visible="visible">选择图标</c-chooseIcon>
</template>

<style lang="scss" scoped></style>
