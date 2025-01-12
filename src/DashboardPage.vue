<template>
  <div>
    <Header />
    <div class="dashboard">
      <h1>ダッシュボード</h1>
      <p>
        ようこそ、{{ user.name }} さん ({{
          user.role_id === 1 ? '教員' : '生徒'
        }})
      </p>

      <div v-if="(user.role_id = 2)" class="error">
        <button @click="goRequestPage">書類作成</button>
      </div>

      <div v-if="errorMessage" class="error">
        {{ errorMessage }}
      </div>

      <div v-else-if="loading">
        <p>データを読み込み中...</p>
      </div>

      <div v-else>
        <h2>申請一覧</h2>
        <table>
          <thead>
            <tr>
              <th>申請ID</th>
              <th>学生番号</th>
              <th>名前</th>
              <th>ステータス</th>
              <th>申請日</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requests" :key="request.id">
              <td>{{ request.id }}</td>
              <td>{{ request.student_number }}</td>
              <td>{{ request.student_name }}</td>
              <td>{{ request.status }}</td>
              <td>{{ new Date(request.created_at).toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';

const router = useRouter();

// ログイン成功時に取得したユーザーデータをローカルストレージから取得
const user = JSON.parse(localStorage.getItem('user'));

// API データ
const requests = ref([]);
const errorMessage = ref('');
const loading = ref(true);

const fetchRequests = async () => {
  try {
    let response;
    if (user.role_id === 1) {
      // 教員用 API 呼び出し
      response = await fetch('http://localhost:3000/requests');
    } else if (user.role_id === 2) {
      // 生徒用 API 呼び出し
      response = await fetch(`http://localhost:3000/requests/${user.id}`);
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'データの取得に失敗しました');
    }

    const data = await response.json();
    console.log(data);
    requests.value = data;
  } catch (error) {
    console.error(error);
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};

const goRequestPage = () => {
  router.push(`/request-page?student_id=${user.id}`);
};

onMounted(() => {
  if (!user) {
    // ユーザーデータが存在しない場合、ログインページにリダイレクト
    router.push('/');
  } else {
    fetchRequests();
  }
});
</script>

<style>
.dashboard {
  padding: 20px;
}

.error {
  color: red;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f4f4f4;
}
</style>
