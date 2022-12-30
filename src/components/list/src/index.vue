<template>
  <div class="list-tabs-item-center">
    <el-tabs>
      <el-tab-pane v-for="tab in list" :Key="tab.title" :label="tab.title" :name="tab.title">
        <div class="list">
          <el-scrollbar height="300px">
            <div v-for="(item, index) in tab.content" :Key="item.id">
              <div class="container" @click="clickItem(item, index)">
                <el-avatar class="avatar" :size="60" :src="item.avatar" v-if="item.avatar"></el-avatar>
                <div>
                  <div v-if="item.title" class="title">
                    <div>{{ item.title }}</div>
                    <el-tag v-if="item.tag" class="tag">{{ item.tag }}</el-tag>
                  </div>
                  <span v-if="item.time" class="time">{{ item.time }}</span>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
        <div class="action">
          <div v-for="action in actions" :Key="action.text">
            <div class="a-item" @click="clickAction(action)">
              <component :is="action.icon"></component>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { ListOptions, ActionOptions } from './types';

let props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
const emits = defineEmits(['clickItem', 'clickAction']);
const clickItem = (item: ListOptions, index: number) => {
  emits('clickItem', { item, index });
};
const clickAction = (item: ActionOptions) => {
  emits('clickItem', item);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 20px;
  margin: 10px 5px;
  cursor: pointer;
  &:hover {
    background-color: #e6f6ff;
  }
  .avatar {
    flex: 1;
    width: 70px;
  }
  .title {
    display: flex;
    flex: 3;
    gap: 10px;
    font-size: 16px;
    margin: 10px 5px;
    width: 180px;
    text-align: justify;
    hyphens: auto;
    overflow: hidden;
    line-height: 1.5em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    .tag {
      width: 30px;
    }
  }
}
.action {
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  .a-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 40px;
  }
  .a-text {
    color: #484848;
  }
}
</style>
