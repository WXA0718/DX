<template>
	<Header></Header>
	<div class="container">
		<div class="form-container">
			<!-- メールアドレス -->
			<label for="email" class="label">メールアドレス</label>
			<input id="email" type="text" class="input1" placeholder="メールアドレスを入力">
			<br>
			
			<!-- パスワード -->
			<label for="password" class="label">パスワード</label>
			<input id="password" type="password" class="input1" placeholder="パスワードを入力">
			
			<!-- パスワード再入力 -->
			<label for="confirmPassword" class="label">パスワード再入力</label>
			<input id="confirmPassword" type="password" class="input1" placeholder="パスワードを再入力">

			<p>プロフィール入力</p>

			<!-- 学籍番号から学科選択 -->
			<div class="center">
				<nobr>
					<input id="studentId" type="text" class="input2" placeholder="学籍番号">
					<label class="label inline">学科</label>
					<label><input type="radio" name="department" value="IS" class="radio"> IS</label>
					<label><input type="radio" name="department" value="C2" class="radio"> C2</label>
					<label><input type="radio" name="department" value="PN" class="radio"> PN</label>
					<label><input type="radio" name="department" value="AI" class="radio"> AI</label>
					<label><input type="radio" name="department" value="L2" class="radio"> L2</label>
				</nobr>
			</div>

			<!-- 学年からユーザー区分 -->
			<div class="center">
				<nobr>
					<input id="year" type="number" min="1" max="4" step="1" class="input2" placeholder="学年">
					<input id="class" type="number" min="1" max="4" step="1" class="input2" placeholder="クラス">
					<input id="name" type="text" class="input2" placeholder="氏名">
					<label class="label inline">ユーザー区分</label>
					<label><input type="radio" name="userType" value="teacher" class="radio"> 先生</label>
					<label><input type="radio" name="userType" value="student" class="radio"> 生徒</label>
				</nobr>
			</div>

			<div>
				<button class="button">新規登録</button>
			</div>
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

.label {
	font-size: 16px;
	margin-right: 10px;
	width: 150px; /* ラベルの固定幅 */
	text-align: right; /* ラベルを右揃え */
}

.input1 {
	margin: 10px auto; /* 上下のマージンは10px、左右は自動調整 */
	font-size: 16px;
	width: 80%;
	height: 40px;
	background-color: #F9F9F9;
	padding: 8px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 5px;
	display: block; /* 横方向に中央揃えにするためにブロック要素に変更 */
}

p{
	text-align: center;
	margin: 19px 0;
}

.input2 {
	margin: 0px 10px;
	font-size: 16px;
	width: 250px;
	height: 40px;
	background-color: #F9F9F9;
	padding: 8px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.input1:focus {
	background-color: #E8F0FE;
	outline: none;
	border-color: #4A90E2;
}

.input2:focus {
	background-color: #E8F0FE;
	outline: none;
	border-color: #4A90E2;
}

/* ボタンスタイル */
.button {
	/* background-color: #4A90E2; */
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

/* 中央揃え */
.center {
	text-align: center;
	margin: 19px 0;
}

.radio {
	margin-right: 12px;
}

nobr {
	display: inline-block;
	text-align: center;
	white-space: nowrap;
}
</style>
