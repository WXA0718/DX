import { createApp } from 'vue';
import Login from './AbsentDetails.vue';
import router from './router';

const app = createApp(Login);
app.use(router);
app.mount('#app'); // 必要なHTML要素IDを指定
