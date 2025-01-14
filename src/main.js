import { createApp } from 'vue'; 
import App from './app.vue'; 
import router from '../src/router/index.js';

createApp(App).use(router).mount('#app');