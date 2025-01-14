<template>
  <Header></Header>
  <div class="container">
    <h1 class="title">申請フォーム</h1>

    <div class="form-row">
      <label class="label">公欠日</label>
      <input type="date" class="input" v-model="form.absence_date" />
      <label class="label">提出日</label>
      <input
        type="date"
        class="input"
        v-model="date.submission_date"
        disabled
      />
    </div>

    <div class="form-row">
      <label class="label">活動内容</label>
      <label>
        <input
          type="radio"
          name="activity"
          value="合同説明会"
          v-model="form.activity"
        />
        <span class="radio-text">合同説明会</span>
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="説明会"
          v-model="form.activity"
        />
        <span class="radio-text">説明会</span>
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="試験"
          v-model="form.activity"
        />
        <span class="radio-text">試験</span>
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="研修"
          v-model="form.activity"
        />
        <span class="radio-text">研修</span>
      </label>
      <label>
        <input
          type="radio"
          name="activity"
          value="その他"
          v-model="form.activity"
        />
        <span class="radio-text">その他</span>
      </label>
      <input
        v-if="form.activity === 'その他'"
        type="text"
        class="input"
        v-model="form.comment"
        placeholder="その他の場合、詳細を入力"
      />
    </div>

    <div class="form-row">
      <label class="label">会社名または主催者</label>
      <input
        type="text"
        class="input"
        v-model="form.company_name"
        placeholder="会社名または主催者を入力"
      />
    </div>

    <div class="form-row">
      <label class="label">一限目</label>
      <select class="input" v-model="form.time_class_information_subject_name">
        <option disabled value="">科目を選択</option>
        <option v-for="subject in subjects" :key="subject">
          {{ subject }}
        </option>
      </select>
      <select class="input" v-model="form.time_class_information_instructor">
        <option disabled value="">担当教員を選択</option>
        <option v-for="instructor in instructors" :key="instructor">
          {{ instructor }}
        </option>
      </select>
    </div>
    <div class="form-row">
      <label class="label">二限目</label>
      <select
        class="input"
        v-model="form.two_time_class_information_subject_name"
      >
        <option disabled value="">科目を選択</option>
        <option v-for="subject in subjects" :key="subject">
          {{ subject }}
        </option>
      </select>
      <select
        class="input"
        v-model="form.two_time_class_information_instructor"
      >
        <option disabled value="">担当教員を選択</option>
        <option v-for="instructor in instructors" :key="instructor">
          {{ instructor }}
        </option>
      </select>
    </div>
    <div class="form-row">
      <label class="label">三限目</label>
      <select
        class="input"
        v-model="form.three_time_class_information_subject_name"
      >
        <option disabled value="">科目を選択</option>
        <option v-for="subject in subjects" :key="subject">
          {{ subject }}
        </option>
      </select>
      <select
        class="input"
        v-model="form.three_time_class_information_instructor"
      >
        <option disabled value="">担当教員を選択</option>
        <option v-for="instructor in instructors" :key="instructor">
          {{ instructor }}
        </option>
      </select>
    </div>
    <div class="form-row">
      <label class="label">四限目</label>
      <select
        class="input"
        v-model="form.four_time_class_information_subject_name"
      >
        <option disabled value="">科目を選択</option>
        <option v-for="subject in subjects" :key="subject">
          {{ subject }}
        </option>
      </select>
      <select
        class="input"
        v-model="form.four_time_class_information_instructor"
      >
        <option disabled value="">担当教員を選択</option>
        <option v-for="instructor in instructors" :key="instructor">
          {{ instructor }}
        </option>
      </select>
    </div>

    <div class="button-container">
      <button class="button" @click="submitRequest">提出</button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const subjects = ref(['数学', '英語', '物理', '化学']);
const instructors = ref(['山田太郎', '佐藤花子', '田中一郎', '高橋次郎']);

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
  comment: '',
});
const date = ref({
  submission_date: '',
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

  date.value.submission_date = new Date().toISOString().slice(0, 10);
});

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

// const goToDashboard = () => {
//   router.push('/dashboard-page');
// };
</script>

<style scoped>
.container {
  background-color: #ffffff;
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
  background-color: #e8f0fe;
  outline: none;
  border-color: #4a90e2;
}

.input.error {
  background-color: #ffe8e8;
  border-color: #ff0000;
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
