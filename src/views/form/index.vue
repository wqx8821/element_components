<script setup lang="ts">
import { FormOptions } from '../../components/form/src/types/types';

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
  },
];
</script>

<template>
  <c-form :options="options"> </c-form>
</template>

<style lang="scss" scoped></style>
