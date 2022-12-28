<script setup lang="ts">
import { ref, watch } from 'vue';
import allAreas from '../lib/pca-code.json';

export interface IAreaItem {
  name: string;
  code: string;
  children?: IAreaItem[];
}
export interface IData {
  name: string;
  code: string;
}

// 数据源
const areas = ref(allAreas);
// 省市区 绑定值
const province = ref<string>('');
const city = ref<string>('');
const area = ref<string>('');

// 筛选城市下拉内容
const selectCity = ref<IAreaItem[]>([]);
watch(
  () => province.value,
  (val) => {
    if (val) {
      let city = areas.value.find((item) => item.code === province.value)?.children!;
      selectCity.value = city;
    }
    city.value = '';
    area.value = '';
  }
);
// 筛选区域下拉内容
const selectArea = ref<IAreaItem[]>([]);
watch(
  () => city.value,
  (val) => {
    if (val) {
      let area = selectCity.value.find((item) => item.code === city.value)?.children!;
      selectArea.value = area;
    }
    area.value = '';
  }
);

// 分发事件给父组件
let emits = defineEmits(['change']);

// 区域是否选择 判断是否全部选择完成 构建数据
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: IData = {
        name: province.value,
        code: areas.value.find((item) => item.code === province.value)!.name,
      };
      let cityData: IData = {
        name: city.value,
        code: city.value && selectCity.value.find((item) => item.code === city.value)!.name,
      };
      let areaData: IData = {
        name: val,
        code: val && selectArea.value.find((item) => item.code === area.value)!.name,
      };
      emits('change', {
        provinceData,
        cityData,
        areaData,
      });
    }
  }
);
</script>

<template>
  <div class="">
    <el-select v-model="province" placeholder="请选择省份" style="margin: 0 5px">
      <el-option v-for="item in areas" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select v-model="city" placeholder="请选择城市" :disabled="!province" style="margin: 0 5px">
      <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select v-model="area" placeholder="请选择区域" :disabled="!province || !city" style="margin: 0 5px">
      <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<style lang="scss" scoped></style>
