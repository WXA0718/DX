<template>
	<Header></Header>
	<div class="container">
		<h1 class="title">申請フォーム</h1>
		
		<div class="form-row">
				<label class="label">公欠日</label>
				<label class="input_label"></label>
				<label class="label">提出日</label>
				<label class="input_label"></label>
		</div>

		<div class="form-row">
			<label class="label">活動内容</label>
			<div class="radio-group">
				<label_other>
					<label class="input_other_label"></label>
				</label_other>
			</div>
		</div>
		

		<div class="form-row">
			<label class="label">会社名または主催者</label>
			<label class="input_company_label"></label>
		</div>

		<div class="form-table">
			<div class="form-row">
				<label class="table-label">一限目</label>
				<label class="input_label">aa</label>
				<label class="label"></label>
				<label class="input_label">aa</label>
				
			</div>
			<div class="form-row">
				<label class="table-label">二限目</label>
				<label class="input_label">aa</label>
				<label class="label"></label>
				<label class="input_label">aa</label>
			</div>
			<div class="form-row">
				<label class="table-label">三限目</label>
				<label class="input_label">aa</label>
				<label class="label"></label>
				<label class="input_label">aa</label>
			</div>
			<div class="form-row">
				<label class="table-label">四限目</label>
				<label class="input_label">aa</label>
				<label class="label"></label>
				<label class="input_label">aa</label>
			</div>
		</div>
		

		<div class="button-container">
			<button class="button" onclick="location.href='./DashboardPage.vue'">戻る</button>
		</div>
	</div>
	<Footer></Footer> 
</template>

<script setup>
import Header from "./components/AppHeader.vue";
import Footer from "./components/AppFooter.vue";

//const currentPage = ref("login");
</script>

<style>
.container {
	background-color: #FFFFFF;
	padding: 30px;
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
	margin-right: 10px;
	font-size: 16px;
}

.label_other {
	width: 500px;
	text-align: right;
	margin-right: 10px;
	font-size: 16px;
}

.input_company, .input {
	flex: 1;
	padding: 8px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.input_label {
	width: 30%;
}

.input_other{
	width: 607px;

}

.input_other_label,input_company_label{
	width: 100%;
}

.radio-group {
	display: flex;
	gap: 10px;
}

.radio-group label {
	display: flex;
	align-items: center;
	gap: 5px; 
}

.radio-group label:last-child {
	gap: 0; 
}

.radio-group input[type="radio"] {
	margin-right: 5px;
}

.radio-group input[type="text"] {
	margin-left: 5px; 
	flex: 1; 
	padding: 8px; 
	border: 1px solid #ccc;
	border-radius: 5px;
}


.form-table {
	margin-top: 20px;
}

.table-label {
	width: 150px;
	text-align: right;
	margin-right: 10px;
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

</style>
