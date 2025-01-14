<template>
	<Header></Header>
	<div class="container">
		
		<div class="form-row">
				<label class="label">公欠日</label>
				<label class="input_label">1</label>
				<label class="label">提出日</label>
				<label class="input_label"></label>
		</div>

		<div class="form-row">
			<label class="label">活動内容</label>
			<label class="label_activity">あ</label>
		</div>
		

		<div class="form-row">
			<label class="label">会社名または主催者</label>
			<label class="input_company">あ</label>
		</div>

		<div class="form-table">
			<div class="form-row">
				<label class="label">一限目</label>
				<label class="input_label">あ</label>
				<label class="label">担当教員</label>
				<label class="input_label">あ</label>
				
			</div>
			<div class="form-row">
				<label class="label">二限目</label>
				<label class="input_label">あ</label>
				<label class="label">担当教員</label>
				<label class="input_label">あ</label>
			</div>
			<div class="form-row">
				<label class="label">三限目</label>
				<label class="input_label">あ</label>
				<label class="label">担当教員</label>
				<label class="input_label">あ</label>
			</div>
			<div class="form-row">
				<label class="label">四限目</label>
				<label class="input_label">あ</label>
				<label class="label">担当教員</label>
				<label class="input_label">あ</label>
			</div>
		</div>
		

		<div class="button-container">
			<button class="button"  @click="goToDashboard">戻る</button>
		</div>
	</div>
	<Footer></Footer> 
</template>

<script setup>
import Header from "./components/AppHeader.vue";
//import Footer from "./components/AppFooter.vue";

//const currentPage = ref("login");

/*export default {
	name: 'AbsentDetails',
	data() {
    return {
    absentStudents: [
        { name: 'John Doe', date: '2025-01-14' },
        { name: 'Jane Smith', date: '2025-01-15' }
    ]
    };
},
	methods: {
    goToDashboard() {
      this.$router.push('/dashboard');  // DashboardPageへ遷移
    }
	}
};*/

</script>

<style>
.container {
	background-color: #FFFFFF;
	padding: 30px;
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

.label_activity,.input_company{
	flex: 1;
	margin-right: 125px;
	padding: 8px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 5px;
	border: 2px solid black; 
	border-radius: 8px; 
}

.input_label {
	/*display: inline-block;*/
	padding: 8px;
	width: 30%;
	font-size: 16px;
	border: 2px solid black; 
	border-radius: 8px; 
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
