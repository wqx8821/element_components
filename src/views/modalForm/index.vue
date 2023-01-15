<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { FormInstance, FormOptions } from '../../components/form/src/types/types';

let visible = ref<boolean>(false);

const open = () => {
  visible.value = true;
};
// 点击确认
const confirm = (form: any) => {
  const validate = form.validate();
  const model = form.getFormData();
  // 表单验证
  validate((value: any) => {
    if (value) {
      console.log(model);
      ElMessage.success('验证成功');
    } else {
      ElMessage.error('验证失败');
    }
  });
};
let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        max: 6,
        message: '不能为空',
        trigger: 'blur',
      },
    ],
  },
  {
    type: 'input',
    value: '',
    prop: 'password',
    label: '用户名',
    rules: [
      {
        required: true,
        max: 5,
        message: '不能为空',
        trigger: 'blur',
      },
    ],
    attrs: {
      showPassword: true,
    },
  },
  {
    type: 'select',
    value: '',
    prop: 'role',
    label: '职位',
    placeholder: '请选择职位',
    children: [
      {
        type: 'option',
        label: '经理1',
        value: '1',
        attrs: {
          style: {
            height: '80px',
          },
        },
      },
      {
        type: 'option',
        label: '经理2',
        value: '2',
      },
      {
        type: 'option',
        label: '经理3',
        value: '3',
      },
    ],
  },
  {
    type: 'checkbox-group',
    value: ['1', '2'],
    prop: 'like',
    label: '爱好',
    placeholder: '请选择',
    rules: [
      {
        required: true,
        message: '不能为空',
      },
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1',
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2',
      },
      {
        type: 'checkbox',
        label: '棒球',
        value: '3',
      },
    ],
  },
  {
    type: 'radio-group',
    value: [],
    prop: 'gender',
    label: '爱好',
    placeholder: '请选择',
    children: [
      {
        type: 'radio',
        label: '足球',
        value: '1',
      },
      {
        type: 'radio',
        label: '篮球',
        value: '2',
      },
      {
        type: 'radio',
        label: '棒球',
        value: '3',
      },
    ],
  },
  {
    type: 'upload',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
    },
  },
  {
    type: 'editor',
    prop: 'desc',
    value: '',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '输入不能为空',
      },
    ],
  },
];
</script>

<template>
  <el-button type="primary" @click="open">open</el-button>
  <c-modal-form v-model:visible="visible" width="65%" title="标题" :options="options">
    <template #footer="{ form }">
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm(form)"> Confirm </el-button>
      </span>
    </template>
  </c-modal-form>
</template>

<style lang="scss" scoped></style>
