// 全局注册组件 支持按需引入
import chooseArea from './src/index.vue';
import { App } from 'vue';

// 让组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('c-chooseArea', chooseArea);
  },
};
