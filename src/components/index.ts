// 全局注册组件 支持按需引入
import chooseArea from './chooseArea'; // 省市县联动
import chooseIcon from './chooseIcon'; // 图标选择
import trend from './trend'; // 趋势标记
import notification from './notification'; // 通知菜单
import list from './list'; // list组件
import menu from './menu'; // menu组件
import progress from './progress'; // 进度条组件
import form from './form'; // 表单
import { App } from 'vue';

const components = [chooseArea, chooseIcon, trend, notification, list, menu, progress, form];

export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  },
};
