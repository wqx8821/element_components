import { App } from 'vue';
import menu from './src/index.vue';
import infiniteMenu from './src/menu';

export default {
  install(app: App) {
    app.component('c-menu', menu);
    app.component('c-infinite-menu', infiniteMenu);
  },
};
