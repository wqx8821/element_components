<script setup lang="ts">
const changeArea = (event: any) => {
  console.log(event);
};
</script>

<template>
  <div>
    <c-chooseArea @change="changeArea" />
  </div>
</template>

<style lang="scss" scoped></style>
