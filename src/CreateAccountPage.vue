<template>
  <Header></Header>
  <div class="container">
    <div class="form-group">
      <label for="email" class="label">メールアドレス</label>
      <input
        id="email"
        v-model="form.email"
        type="text"
        class="input"
        placeholder="メールアドレスを入力"
      />
    </div>

    <div class="form-group">
      <label for="password" class="label">パスワード</label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        class="input"
        placeholder="パスワードを入力"
      />
    </div>

    <div class="form-group">
      <label for="confirmPassword" class="label">パスワード再入力</label>
      <input
        id="confirmPassword"
        v-model="form.confirmPassword"
        type="password"
        class="input"
        placeholder="パスワードを再入力"
      />
    </div>

    <p class="center">プロフィール入力</p>

    <div class="form-group center">
      <input
        id="name"
        v-model="form.name"
        type="text"
        class="input_profile"
        placeholder="氏名"
      />
      <label class="label inline">ユーザー区分</label>
      <label>
        <input type="radio" v-model="form.role_id" :value="1" class="radio" />
        <span class="radio-text">先生</span>
      </label>
      <label>
        <input type="radio" v-model="form.role_id" :value="2" class="radio" />
        <span class="radio-text">生徒</span>
      </label>
    </div>

    <!-- 生徒用のフォーム -->
    <div v-if="form.role_id === 2" class="form-group center">
      <input
        id="studentId"
        v-model="form.student_number"
        type="text"
        class="input_profile"
        placeholder="学籍番号"
      />
      <label class="radio-label">学科</label>
      <select v-model="form.department" class="input_profile">
        <option disabled value="">学科を選択</option>
        <option value="IS">IS</option>
        <option value="C2">C2</option>
        <option value="PN">PN</option>
        <option value="AI">AI</option>
        <option value="L2">L2</option>
      </select>
      <input
        id="year"
        v-model="form.grade"
        type="number"
        min="1"
        max="4"
        class="input_profile"
        placeholder="学年"
      />
      <input
        id="class"
        v-model="form.class"
        type="number"
        min="1"
        max="5"
        class="input_profile"
        placeholder="クラス"
      />
    </div>

    <div>
      <button class="button" @click="register">新規登録</button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  role_id: null,
  student_number: '',
  department: '',
  grade: null,
  class: null,
});

const register = async () => {
  if (form.password !== form.confirmPassword) {
    alert('パスワードが一致しません');
    return;
  }

  try {
    const response = await axios.post(
      'http://localhost:3000/auth/register',
      form
    );
    alert(response.data.message);
    router.push('/');
  } catch (error) {
    // サーバーからのエラーレスポンスを処理
    if (error.response && error.response.data) {
      const errorData = error.response.data;

      // エラーが複数ある場合（例: 配列形式のエラーメッセージ）
      if (errorData.errors && Array.isArray(errorData.errors)) {
        const errorMessages = errorData.errors.map((err) => err.msg).join('\n');
        alert(`エラーが発生しました:\n${errorMessages}`);
      }
      // 単一のエラーメッセージが返された場合
      else if (errorData.message) {
        alert(`エラーが発生しました:\n${errorData.message}`);
      }
      // 予期しない形式のエラーレスポンス
      else {
        alert('不明なエラーが発生しました。');
      }
    } else {
      // サーバーが応答しなかった場合など
      alert('サーバーに接続できませんでした。再度お試しください。');
    }
  }
};
</script>

<style scoped>
/* コンテナ全体 */
.container {
  background-color: #ffffff;
  padding: 20px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  font-size: 16px;
  margin-right: 10px;
  text-align: right;
  width: 130px;
}

.input {
  display: block;
  margin: 10px 0px;
  font-size: 16px;
  width: 30%;
  height: 40px;
  background-color: #f9f9f9;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input_profile {
  margin: 0px 10px;
  font-size: 16px;
  width: 200px;
  height: 40px;
  background-color: #f9f9f9;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input:focus,
.input_profile:focus {
  background-color: #e8f0fe;
  outline: none;
  border-color: #4a90e2;
}

.input.error,
.input_profile.error {
  background-color: #ffe8e8;
  border-color: #ff0000;
}

.button {
  background-color: #4a90e2;
  font-size: 18px;
  color: #ffffff;
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
  background-color: #357abd;
}

.button:active {
  background-color: #3a7bd5;
}

/* ラジオボタン */
.radio {
  margin-right: 12px;
}

.radio-label {
  display: block;
}

input[type='radio'] {
  display: none;
}

.radio-text:before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}

input[type='radio']:not(:checked) + .radio-text:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text:before {
  border-color: #4a90e2;
  background-color: #4a90e2;
}
</style>
