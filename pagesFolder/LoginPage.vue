<template>
  <div class="container">
    <Header></Header>
    <div class="form-container">
      <label for="email" class="label">メールアドレス</label>
      <input id="email" type="text" class="input" placeholder="メールアドレスを入力">
      <br>
      <label for="password" class="label">パスワード</label>
      <input id="password" type="password" class="input" placeholder="パスワードを入力">
      <br>
      <button class="button">新規登録</button>
      <br>
      <button class="button">ログイン</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "./components/AppHeader.vue";
import Footer from "./components/AppFooter.vue";
</script>

<style>
/* コンテナ全体 */
.container {
  background-color: #FFFFFF;
  padding: 20px;
}

/* ラベルのスタイル */
.label {
  font-size: 16px;
  display: block;
  margin: 10px 0 5px;
}

/* 入力フォームのスタイル */
.input {
  font-size: 16px;
  width: 80%;
  height: 40px;
  background-color: #F9F9F9;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input:focus {
  background-color: #E8F0FE;
  outline: none;
  border-color: #4A90E2;
}

.input.error {
  background-color: #FFE8E8;
  border-color: #FF0000;
}

/* ボタンスタイル */
.button {
  background-color: #4A90E2;
  font-size: 18px;
  color: #FFFFFF;
  height: 50px;
  width: 60%;
  margin: 10px auto;
  display: block;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 5px #aaa;
}

.button:hover {
  background-color: #357ABD;
}

/* フォームコンテナ */
.form-container {
  margin: 30px 0;
  width: 100%;
  max-width: 400px;
}
</style>
