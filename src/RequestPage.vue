<template>
	<Header></Header>
	<div class="container">
		<h1 class="title">申請フォーム</h1>
		
		<div class="form-row">
				<label class="label">公欠日</label>
				<input type="date" class="input" />
				<label class="label">提出日</label>
				<input type="date" class="input" />
		</div>

		<div class="form-row">
			<label class="label">活動内容</label>
				<label><input type="radio" name="activity" value="合同説明会" /><span  class="radio-text">合同説明会</span></label>
				<label><input type="radio" name="activity" value="説明会" /><span class="radio-text">説明会</span></label>
				<label><input type="radio" name="activity" value="試験" /><span class="radio-text">試験</span></label>
				<label><input type="radio" name="activity" value="研修" /><span class="radio-text">研修</span></label>
				<label><input type="radio" name="activity" value="その他" /><span class="radio-text">その他</span></label>
				<input type="text"  class="input" />
		</div>
		
		<div class="form-row">
			<label class="label">会社名または主催者</label>
			<input type="text" class="input" placeholder="会社名または主催者を入力" />
		</div>

		<div class="form-row">
			<label class="label">一限目</label>
			<input type="text" class="input" placeholder="科目名" />
			<input type="text" class="input" placeholder="担当教員" />
		</div>
		<div class="form-row">
			<label class="label">二限目</label>
			<input type="text" class="input" placeholder="科目名" />
			<input type="text" class="input" placeholder="担当教員" />
		</div>
		<div class="form-row">
			<label class="label">三限目</label>
			<input type="text" class="input" placeholder="科目名" />
			<input type="text" class="input" placeholder="担当教員" />
		</div>
		<div class="form-row">
			<label class="label">四限目</label>
			<input type="text" class="input" placeholder="科目名" />
			<input type="text" class="input" placeholder="担当教員" />
		</div>


		<div class="button-container">
			<button class="button">提出</button>
		</div>
	</div>
	<!-- <Footer></Footer> -->
</template>

<script setup>
import Header from "./components/AppHeader.vue";
// import Footer from "./components/AppFooter.vue";
</script>

<style>
.container {
	background-color: #FFFFFF;
	padding: 26px;
}

.title {
	text-align: center;
	font-size: 24px;
}

.form-row {
	display: flex;
	align-items: center;
	margin-bottom: 15px;
}

.label {
	width: 150px;
	text-align: right;
	font-size: 16px;
}

.input {
	flex: 1;
	padding: 8px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-left: 10px;
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

.button-container {
	text-align: center;
	margin-top: 20px;
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
	background-color: #357abd;
}

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
