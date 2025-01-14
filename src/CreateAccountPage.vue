<template>
	<Header></Header>
	<div class="container">
		<div class="form-group">
			<label for="email" class="label">メールアドレス</label>
			<input id="email" type="text" class="input" placeholder="メールアドレスを入力">
		</div>

		<div class="form-group">
			<label for="password" class="label">パスワード</label>
			<input id="password" type="password" class="input" placeholder="パスワードを入力">
		</div>

		<div class="form-group">
			<label for="confirmPassword" class="label">パスワード再入力</label>
			<input id="confirmPassword" type="password" class="input" placeholder="パスワードを再入力">
		</div>

		<p class="center">プロフィール入力</p>

		<div class="form-group center">
			<input id="studentId" type="text" class="input_profile" placeholder="学籍番号">
			<label class="radio-label">学科</label>
			<label>
				<input type="radio" name="department" value="IS" />
				<span class="radio-text">IS</span>
			</label>
			<label>
				<input type="radio" name="department" value="C2" />
				<span class="radio-text">C2</span>
			</label>
			<label>
				<input type="radio" name="department" value="PN" />
				<span class="radio-text">PN</span>
			</label>
			<label>
				<input type="radio" name="department" value="AI" />
				<span class="radio-text">AI</span>
			</label>
				<label>
				<input type="radio" name="department" value="L2" />
				<span class="radio-text">L2</span>
			</label>
		</div>

		<div class="form-group center">
			<input id="year" type="number" min="1" max="4" step="1" class="input_profile" placeholder="学年">
			<input id="class" type="number" min="1" max="4" step="1" class="input_profile" placeholder="クラス">
			<input id="name" type="text" class="input_profile" placeholder="氏名">
			<label class="label inline">ユーザー区分</label>
			<label>
				<input type="radio" name="userType" value="teacher" class="radio" />
				<span class="radio-text">先生</span>
			</label>
			<label>
				<input type="radio" name="userType" value="student" class="radio" />
				<span class="radio-text">生徒</span>
				</label>
		</div>

		<div>
			<button class="button"  onclick="location.href=''">新規登録</button>
		</div>
	</div>
	<Footer></Footer>
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
	background-color: #F9F9F9;
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
	background-color: #F9F9F9;
	padding: 8px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.input:focus, .input_profile:focus {
	background-color: #E8F0FE;
	outline: none;
	border-color: #4A90E2;
}

.input.error,.input_profile.error {
	background-color: #FFE8E8;
	border-color: #FF0000;
}

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

.button:active {
	background-color: #3A7BD5;
}

/* ラジオボタン */
.radio {
	margin-right: 12px;
}

.radio-label {
	display: block;
}

input[type="radio"] {
	display: none;
}

.radio-text:before {
	content: "";
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

input[type="radio"]:not(:checked) + .radio-text:before {
	border-color: #72767b;
}

input[type="radio"]:checked + .radio-text:before {
	border-color: #4A90E2;
	background-color: #4A90E2;
}
</style>
