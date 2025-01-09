<template>
  <Header />
  <div class="container">
    <form>
      <div class="flex">
        <label for="email">メールアドレス</label>
        <input
          id="email"
          type="text"
          class="input"
          placeholder="メールアドレスを入力"
        />
      </div>

      <div class="flex">
        <label for="password">パスワード</label>
        <input
          id="password"
          type="password"
          class="input"
          placeholder="パスワードを入力"
        />
      </div>

      <!-- ボタン -->
      <button @click="CreateAccountPage" class="button">新規登録</button>
      <button @click="Dashboard" class="button">ログイン</button>
    </form>
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import Dashboard from './DashboardPage.vue';
import CreateAccountPage from './CreateAccountPage.vue';
</script>

<style>
/* 全体の背景色を白に設定 */
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}

/* コンテナ全体 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px; /* 上下の余白を調整 */
}

/* 入力フォームのレイアウト */
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

/* ボタンのスタイル */
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
