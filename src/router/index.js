import { createRouter, createWebHistory } from 'vue-router';

// コンポーネントをインポート
import LoginPage from '../LoginPage.vue';
import CreateAccountPage from '../CreateAccountPage.vue';
import DashboardPage from '../DashboardPage.vue';
import RequeestPage from '../RequestPage.vue';

// ルートの設定
const routes = [
    {
    path: '/',
    name: 'Login',
    component: LoginPage,
    },
    {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccountPage,
    },
    {
    path: '/dashboard-page',
    name: 'Dashboard',
    component: DashboardPage,
    },
    {
    path: '/request-page',
    name: 'request',
    component: RequeestPage,
    },
];

// ルーターの作成
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
