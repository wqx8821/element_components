<script setup lang="ts">
import { ElMessageBox, ElMessage, ElButton } from 'element-plus';
import { ref } from 'vue';
import { ActionScope, FormOptions } from '../../components/form/src/types/types';

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
    // rules: [
    //   {
    //     required: true,
    //     message: '不能为空',
    //   },
    // ],
  },
];

let handleRemove = (file: any, fileList: any) => {
  console.log('handleRemove');
  console.log(file, fileList);
};
let handlePreview = (file: any) => {
  console.log('handlePreview');
  console.log(file);
};
let beforeRemove = (val: any) => {
  console.log('beforeRemove');
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`);
};
let handleExceed = (val: any) => {
  console.log('handleExceed', val);
  ElMessage.warning(`The limit is 3, you selected ${val.files.length} files this time, add up to ${val.files.length + val.fileList.length} totally`);
};
let handleSuccess = (val: any) => {
  console.log('success');
  console.log(val);
};
let handleChange = (val: any) => {
  console.log('change');
  console.log(val);
};
let handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload');
  console.log(val);
};

let form = ref();

// 表单动作项
let submitForm = (scope: ActionScope) => {
  scope.form.validate((valid) => {
    if (valid) {
      // scope.model表单的值 scope.form表单的实例
      console.log(scope.model);
      ElMessage.success('提交成功');
    } else {
      ElMessage.error('表单填写有误,请检查');
    }
  });
};
// 重置表单
let resetForm = (scope: ActionScope) => {
  scope.form.resetFields();

  // form.value.resetFields();
};
</script>

<template>
  <c-form
    :options="options"
    @on-change="handleChange"
    @before-upload="handleBeforeUpload"
    @on-preview="handlePreview"
    @on-remove="handleRemove"
    @before-remove="beforeRemove"
    @on-success="handleSuccess"
    @on-exceed="handleExceed"
  >
    <template #uploadArea>
      <el-button size="small" type="primary">Click to upload</el-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc; font-size: 12px">jpg/png files with a size less than 500kb</div>
    </template>
    <template #action="scope">
      <el-button size="small" type="primary" @click="resetForm(scope)">清空</el-button>
      <el-button size="small" type="primary" @click="submitForm(scope)">确认</el-button>
    </template>
  </c-form>
</template>

<style lang="scss" scoped></style>
