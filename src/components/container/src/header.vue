<script setup lang="ts">
let props = defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:collapse']);
const changeHamburger = () => {
  emits('update:collapse', !props.collapse);
};
</script>

<template>
  <span @click="changeHamburger()">
    <Expand v-if="collapse" style="margin-right: 10px"></Expand>
    <Fold v-else style="margin-right: 10px"></Fold>
  </span>
</template>

<style lang="scss" scoped>
svg {
  width: 1.5em;
  height: 1.5em;
  margin-top: 17px;
}
</style>
