<script setup lang="ts">
import { ref } from 'vue';
import ChooseIcon from '../../components/chooseIcon/src/index.vue';

let visible = ref(false);
</script>

<template>
  <ChooseIcon title="图标选择" v-model:visible="visible">选择图标</ChooseIcon>
</template>

<style lang="scss" scoped></style>
