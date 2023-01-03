import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';

import customUi from './components';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import elementPlus from 'element-plus';
import { toLine } from './utils/toLine';
import './styles/index.scss';

const app = createApp(App);
// icons注册为全局
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // app.component(toLine(`el-icon${toLine(key)}`), component);
  app.component(key, component);
}

app.use(router).use(elementPlus).use(customUi).mount('#app');
