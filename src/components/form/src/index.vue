<script setup lang="ts">
import { PropType, ref, onMounted, watch, nextTick } from 'vue';
import { FormOptions, FormInstance } from './types/types';
import cloneDeep from 'lodash/cloneDeep';
import E from 'wangeditor';
import form from '..';

const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'before-upload', 'before-remove', 'on-exceed']);
const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function,
  },
  // action 左中右位置
  actionPosition: {
    type: String,
    default: 'center',
  },
});

let model = ref<any>(null);
let rules = ref<any>(null);
let fromRef = ref<FormInstance | null>(null);
let edit = ref();

// 初始化表单的方法
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    // 构造model 和 rules 数据
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
      // 初始化富文本操作
      if (item.type == 'editor') {
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor');
            if (item.placeholder) editor.config.placeholder = item.placeholder;
            editor.create();
            // 设置默认值内容方法
            editor.txt.html(item.value);
            // 发生改变获取新内容的方法
            editor.config.onchange = (newHtml: string) => {
              // 新值搜集到表单内
              model.value[item.prop!] = newHtml;
            };
            edit.value = editor;
          }
        });
      }
    });
    // 深拷贝构造的数据 并 赋予组件绑定的动态值
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};
// 重置表单的方法
let resetFields = () => {
  // 重置element-plus表单
  fromRef.value!.resetFields();
  // 重置富文本编辑器内容
  if (props.options && props.options.length) {
    // 获取编辑配置项
    let editorItem = props.options.find((item) => item.type === 'editor');
    edit.value.txt.html(editorItem?.value);
  }
};
// 表单验证
let validate = () => {
  return fromRef.value!.validate;
};
// 表单数据
let getFormData = () => {
  return model.value;
};

// 分发重置函数
defineExpose({
  resetFields,
  validate,
  getFormData,
});

onMounted(() => {
  initForm();
});

// 监听options 异步请求时重新加载
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);

// 上传组件的所有方法
let onPreview = (file: File) => {
  emits('on-preview', file);
};
let onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList });
};
let onSuccess = (response: any, file: File, fileList: FileList) => {
  console.log('成功');
  // 上传图片成功 给表单上传项赋值
  let uploadItem = props.options.find((item) => item.type === 'upload')!;
  model.value[uploadItem.prop!] = { response, file, fileList };
  emits('on-success', { response, file, fileList });
};
let onError = (err: any, file: File, fileList: FileList) => {
  emits('on-error', { err, file, fileList });
};
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList });
};
let onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList });
};
let beforeUpload = (file: File) => {
  emits('before-upload', file);
};
let beforeRemove = (file: File, fileList: FileList) => {
  emits('before-remove', { file, fileList });
};
let onExceed = (files: File, fileList: FileList) => {
  emits('on-exceed', { files, fileList });
};
</script>

<template>
  <div>
    <el-form ref="fromRef" v-if="model" :model="model" :rules="rules" :validate-on-rule-change="false">
      <template v-for="(item, i) in options" :key="i">
        <!-- 没有表单子元素的情况 -->
        <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
          <!-- 没有上传组件 -->
          <component v-if="item.type !== 'upload' && item.type !== 'editor'" v-model="model[item.prop!]" v-bind="item.attrs" :placeholder="item.placeholder" :is="`el-${item.type}`"></component>
          <!-- 上传组件 -->
          <el-upload
            v-if="item.type === 'upload'"
            v-bind="item.uploadAttrs"
            :on-preview="onPreview"
            :on-remove="onRemove"
            :on-success="onSuccess"
            :on-error="onError"
            :on-progress="onProgress"
            :on-change="onChange"
            :before-upload="beforeUpload"
            :before-remove="beforeRemove"
            :http-request="httpRequest"
            :on-exceed="onExceed"
          >
            <slot name="uploadArea"></slot>
            <slot name="uploadTip"></slot>
          </el-upload>

          <!-- 富文本 -->
          <div id="editor" v-if="item.type === 'editor'"></div>
        </el-form-item>
        <!-- 有表单子元素的情况 例如select 具有 option选项 -->
        <el-form-item v-if="item.children && item.children.length" :label="item.label" :prop="item.prop">
          <component v-model="model[item.prop!]" v-bind="item.attrs" :placeholder="item.placeholder" :is="`el-${item.type}`">
            <component v-for="(child, index) in item.children" :key="index" :is="`el-${child.type}`" :label="child.label" :vale="child.value"></component>
          </component>
        </el-form-item>
      </template>
      <el-form-item>
        <div :style="{ display: 'flex', justifyContent: props.actionPosition, width: '100%' }">
          <slot name="action" :form="fromRef" :model="model"></slot>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>
