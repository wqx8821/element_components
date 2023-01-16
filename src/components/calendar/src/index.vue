<script setup lang="ts">
// 导入日历库
import { Calendar, EventClickArg, EventContentArg } from '@fullcalendar/core';
import daygrid from '@fullcalendar/daygrid';
import interaction, { DateClickArg } from '@fullcalendar/interaction';
import { onMounted, ref, PropType, watch } from 'vue';
import { EventItem } from './types';

let props = defineProps({
  // 语言
  locale: {
    type: String,
    default: 'zh-cn',
  },
  // 视图模式 月 周 日
  initialView: {
    type: String,
    default: 'dayGridMonth',
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月',
      };
    },
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next',
      };
    },
  },
  // 底部工具栏
  footerToolbar: {
    type: Object,
    default: () => ({}),
  },
  // 事件源
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => [],
  },
  // 显示结束时间
  displayEventEnd: {
    type: Boolean,
    default: false,
  },
  // 自定义渲染内容 （事件：日程） 内容函数
  eventContent: {
    type: Function,
  },
});

// 日历实例
let calendar = ref<Calendar>();

// 分发事件
let emits = defineEmits(['dateClick', 'eventClick']);

// 渲染日历函数
const renderCalendar = () => {
  let el = document.getElementById('calendar');
  if (el) {
    calendar.value = new Calendar(el, {
      // 日历插件
      plugins: [daygrid, interaction],
      // 视图格式 年 月 日
      initialView: props.initialView,
      // 按钮文本信息
      buttonText: props.buttonText,
      // 底部顶部工具栏
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      // 语言
      locale: props.locale,
      // 事件是否显示结束时间
      displayEventEnd: props.displayEventEnd,
      // 事件源
      eventSources: [
        {
          // 渲染事件
          events(e, callback) {
            props.events.length == 0 ? callback([]) : callback(props.events);
          },
        },
      ],
      // 点击日历上某一天
      dateClick(info: DateClickArg) {
        emits('dateClick', info);
      },
      // 点击日历上的事件操作
      eventClick(info: EventClickArg) {
        emits('eventClick', info);
      },
      // 自定义渲染内容 函数
      eventContent: props.eventContent,
    });
    calendar.value.render();
  }
};
// 监听组件传入的props 保证添加事件及时渲染
watch(
  () => props.events,
  (value) => {
    renderCalendar();
  },
  { deep: true }
);

onMounted(() => {
  renderCalendar();
});
</script>

<template>
  <div id="calendar"></div>
</template>

<style lang="scss" scoped></style>
