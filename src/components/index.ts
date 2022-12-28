// 全局注册组件 支持按需引入
import chooseArea from './chooseArea';
import chooseIcon from './chooseIcon';
import trend from './trend';
import { App } from 'vue';

const components = [chooseArea, chooseIcon, trend];

export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  },
};
