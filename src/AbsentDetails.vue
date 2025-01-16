<template>
  <Header></Header>
  <div class="container">
    <div v-if="requestDetails">
      <div class="form-row">
        <label class="label">公欠日</label>
        <label class="input_label">{{
          new Date(requestDetails?.absence_date).toISOString().split('T')[0]
        }}</label>
        <label class="label">提出日</label>
        <label class="input_label">{{
          new Date(requestDetails?.created_at).toISOString().split('T')[0]
        }}</label>
      </div>

      <div class="form-row">
        <label class="label">活動内容</label>
        <label class="label_activity"
          >{{
            requestDetails.activity === 'その他'
              ? requestDetails.comment
              : requestDetails.activity
          }}
        </label>
      </div>

      <div class="form-row">
        <label class="label">会社名または主催者</label>
        <label class="input_company">{{ requestDetails.company_name }}</label>
      </div>

      <div class="form-table">
        <div class="form-row">
          <label class="label">一限目</label>
          <label class="input_label">{{
            requestDetails.period1_subject
          }}</label>
          <label class="label">担当教員</label>
          <label class="input_label">{{
            requestDetails.period1_instructor
          }}</label>
        </div>
        <div class="form-row">
          <label class="label">二限目</label>
          <label class="input_label">{{
            requestDetails.period2_subject
          }}</label>
          <label class="label">担当教員</label>
          <label class="input_label">{{
            requestDetails.period2_instructor
          }}</label>
        </div>
        <div class="form-row">
          <label class="label">三限目</label>
          <label class="input_label">{{
            requestDetails.period3_subject
          }}</label>
          <label class="label">担当教員</label>
          <label class="input_label">{{
            requestDetails.period3_instructor
          }}</label>
        </div>
        <div class="form-row">
          <label class="label">四限目</label>
          <label class="input_label">{{
            requestDetails.period4_subject
          }}</label>
          <label class="label">担当教員</label>
          <label class="input_label">{{
            requestDetails.period4_instructor
          }}</label>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button class="button" @click="goToDashboard">戻る</button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const requestDetails = ref(null);
const studentId = ref('');
const requestId = ref('');
const errorMessage = ref('');

// 公欠申請詳細を取得する関数
const fetchAbsenceRequestDetails = async () => {
  try {
    const student_id = route.query.student_id;
    const request_id = route.query.request_id;
    studentId.value = student_id;
    requestId.value = request_id;
    console.log(studentId.value);
    console.log(requestId.value);
    const response = await fetch(
      `http://localhost:3000/requests2/${studentId.value}/${requestId.value}`
    );
    if (!response.ok) {
      throw new Error('申請の取得に失敗しました');
    }
    const data = await response.json();
    requestDetails.value = data;
    console.log(requestDetails.value);
  } catch (error) {
    errorMessage.value = error.message;
    console.error('エラー:', error);
  }
};

const goToDashboard = () => {
  router.push('/dashboard-page');
};

// コンポーネントがマウントされたタイミングでデータを取得
onMounted(() => {
  fetchAbsenceRequestDetails();
});
</script>

<style scoped>
.container {
  background-color: #ffffff;
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

.label_activity,
.input_company {
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
</style>
