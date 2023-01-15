<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import { FormInstance, FormOptions } from '../../form/src/types/types';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    default: () => [],
  },
  onChange: {
    type: Function,
  },
  beforeUpload: {
    type: Function,
  },
  onPreview: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
});
let dialogVisible = ref<boolean>(props.visible);
let form = ref<FormInstance | null>(null);
let emits = defineEmits(['update:visible']);

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);
watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val);
  }
);
</script>

<template>
  <div>
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <c-form
          ref="form"
          :options="options"
          label-width="100px"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @before-remove="beforeRemove"
          @on-success="onSuccess"
          @on-exceed="onExceed"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </c-form>
      </template>
      <template #footer> <slot name="footer" :form="form"></slot> </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
