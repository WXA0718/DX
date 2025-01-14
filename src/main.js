import { createApp } from 'vue';
import dashboard from './DashboardPage.vue';

const app = createApp(dashboard);
app.mount('#app'); // 必要なHTML要素IDを指定
