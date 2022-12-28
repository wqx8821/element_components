<script setup lang="ts">
import chooseArea from '../../components/chooseArea/src/index.vue';

const changeArea = (event: any) => {
  console.log(event);
};
</script>

<template>
  <div>
    <chooseArea @change="changeArea" />
  </div>
</template>

<style lang="scss" scoped></style>
