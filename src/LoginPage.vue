<template>
  <Header />
  <div class="container">
    <form @submit.prevent="handleLogin">
      <div class="flex">
        <label for="email">メールアドレス</label>
        <input
          id="email"
          type="text"
          class="input"
          v-model="email"
          placeholder="メールアドレスを入力"
        />
      </div>

      <div class="flex">
        <label for="password">パスワード</label>
        <input
          id="password"
          type="password"
          class="input"
          v-model="password"
          placeholder="パスワードを入力"
        />
      </div>

      <!-- ボタン -->
      <button type="submit" class="button">ログイン</button>
      <button @click="goToCreateAccount" class="button">新規登録</button>
    </form>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      // エラーの形式に応じてメッセージを取得
      if (errorData.errors && Array.isArray(errorData.errors)) {
        const errorMessages = errorData.errors.map((err) => err.msg).join('\n');
        alert(`ログイン失敗:\n${errorMessages}`);
      } else if (errorData.message) {
        alert(`ログイン失敗:\n${errorData.message}`);
      } else {
        alert('ログイン失敗: サーバーからの不明なエラーが返されました');
      }
      return;
    }

    // 成功時の処理
    const data = await response.json();
    alert('ログイン成功');
    console.log('ユーザーデータ:', data);

    // ユーザー情報をローカルストレージに保存
    localStorage.setItem('user', JSON.stringify(data.user));

    // ダッシュボードページに遷移
    if (router) {
      router.push('/dashboard-page');
    } else {
      window.location.href = '/dashboard-page';
    }
  } catch (error) {
    console.error('ログイン中にエラーが発生しました:', error);
    alert('ログイン中にエラーが発生しました: ' + error.message);
  }
};

const goToCreateAccount = () => {
  router.push('/create-account');
};
</script>

<style scoped>
/* スタイルはそのまま */
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
}

.flex {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

label {
  width: 120px;
  text-align: right;
  margin-right: 10px;
}

.input {
  font-size: 16px;
  width: 300px;
  height: 40px;
  background-color: #f9f9f9;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  background-color: #4a90e2;
  font-size: 18px;
  color: #ffffff;
  height: 45px;
  width: 150px;
  margin: 40px;
  border: none;
  border-radius: 5px;
  align-items: center;
  box-shadow: 2px 2px 5px #aaa;
}

.button:hover {
  background-color: #357abd;
}
</style>
