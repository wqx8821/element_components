<script setup lang="ts">
import { ref } from 'vue';
import { EventClickArg, EventContentArg } from '@fullcalendar/core';
import { DateClickArg } from '@fullcalendar/interaction';
import { EventItem } from '../../components/calendar/src/types';

// 事件源
let events = ref<EventItem[]>([
  {
    title: '上班',
    start: '2023-01-11 08:00',
    end: '2023-01-11 18:00',
    editable: true,
  },
  {
    title: '看电影',
    start: '2023-01-13 08:00',
    end: '2023-01-15 18:00',
    editable: true,
  },
]);

// 点击日历上某一天
const dateClick = (info: DateClickArg) => {
  // demo 点击日历某一天添加事件
  events.value.push({
    title: '听歌',
    start: info.dateStr + ' 08:00',
    end: info.dateStr + ' 18:00',
  });
  console.log(info, events.value);
};
// 点击日历上的事件时触发
const eventClick = (info: EventClickArg) => {
  console.log(info);
};

// 自定义渲染内容 （事件：日程） 内容函数
const eventContent = (arg: EventContentArg) => {
  console.log(arg);
  let el = document.createElement('div');
  if (arg.timeText.length) {
    let timeTextArr = arg.timeText.split(' - ');
    let start = timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '');
    let end = timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '');
    el.innerHTML = `
          <img src="src/assets/vue.svg" style="width:20px;height:20px;">
           <div>开始时间: ${start}</div>
           <div>结束时间: ${end}</div>
           <div>标题: ${arg.event._def.title}</div>
          `;
    el.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
  }
  return {
    domNodes: [el],
  };
};
</script>

<template>
  <c-calendar :events="events" :eventContent="eventContent" @dateClick="dateClick" @eventClick="eventClick" displayEventEnd> </c-calendar>
</template>

<style lang="scss" scoped></style>
