<template>
  <div>
    <Header />
    <div class="container">
      <h2 class="title">申請フォーム</h2>
      <form @submit.prevent="submitRequest">
        <div class="field">
          <label for="absence_date">公欠日</label>
          <input
            id="absence_date"
            v-model="form.absence_date"
            type="date"
            class="input"
          />
        </div>

        <div class="field">
          <label for="activity">活動内容</label>
          <input
            id="activity"
            v-model="form.activity"
            type="text"
            class="input"
            placeholder="活動内容を入力"
          />
        </div>

        <div class="field">
          <label for="company_name">会社名または主催者</label>
          <input
            id="company_name"
            v-model="form.company_name"
            type="text"
            class="input"
            placeholder="会社名または主催者を入力"
          />
        </div>

        <div class="field">
          <label>授業情報</label>
          <div class="table">
            <div
              class="row"
              v-for="(classInfo, index) in classInformation"
              :key="index"
            >
              <input
                v-model="form[classInfo.subjectName]"
                type="text"
                class="input small"
                :placeholder="`${index + 1}限目 科目名`"
              />
              <input
                v-model="form[classInfo.instructor]"
                type="text"
                class="input small"
                :placeholder="`担当教員`"
              />
            </div>
          </div>
        </div>

        <button type="submit" class="button">申請</button>
      </form>
      <button @click="goToDashboard" class="button back">戻る</button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const form = ref({
  student_id: '',
  absence_date: '',
  activity: '',
  company_name: '',
  time_class_information_subject_name: '',
  time_class_information_instructor: '',
  two_time_class_information_subject_name: '',
  two_time_class_information_instructor: '',
  three_time_class_information_subject_name: '',
  three_time_class_information_instructor: '',
  four_time_class_information_subject_name: '',
  four_time_class_information_instructor: '',
});

// student_id をルートから取得し、フォームに設定
onMounted(() => {
  const studentId = route.query.student_id; // URLパラメータから取得
  if (studentId) {
    form.value.student_id = studentId;
    console.log('取得した student_id:', studentId);
  } else {
    console.error('student_id が見つかりません');
  }
});
const classInformation = [
  {
    subjectName: 'time_class_information_subject_name',
    instructor: 'time_class_information_instructor',
  },
  {
    subjectName: 'two_time_class_information_subject_name',
    instructor: 'two_time_class_information_instructor',
  },
  {
    subjectName: 'three_time_class_information_subject_name',
    instructor: 'three_time_class_information_instructor',
  },
  {
    subjectName: 'four_time_class_information_subject_name',
    instructor: 'four_time_class_information_instructor',
  },
];

const submitRequest = async () => {
  try {
    const response = await fetch('http://localhost:3000/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    });
    console.log(form.value);

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.errors.map((err) => err.msg).join('\n'));
      return;
    }

    alert('申請が成功しました');
    router.push('/dashboard-page');
  } catch (error) {
    alert('申請中にエラーが発生しました');
  }
};

const goToDashboard = () => {
  router.push('/dashboard-page');
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.field {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input.small {
  width: 48%;
  display: inline-block;
}

.table {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button.back {
  background-color: #2196f3;
  margin-top: 10px;
}

.button:hover {
  opacity: 0.9;
}
</style>
