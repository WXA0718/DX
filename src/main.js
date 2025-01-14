import { createApp } from 'vue';
import dashboard from './DashboardPage.vue';

const app = createApp(dashboard);
createApp(App).use(router).mount('#app');// 必要なHTML要素IDを指定
