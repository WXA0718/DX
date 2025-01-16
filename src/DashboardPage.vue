<template>
  <div
    class="dashboard"
    style="
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    "
  >
    <!-- Header Section -->
    <Header />

    <!-- Main Content -->
    <div
      style="
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      "
    >
      <!-- Greeting Section -->
      <section
        class="greeting-section"
        style="margin: 10px 0; text-align: center"
      >
        <h2 style="font-size: 60px">Welcome {{ user.name }} さん</h2>
        <div
          class="action-buttons"
          style="
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
          "
        >
          <button
            v-if="user.role_id === 2"
            @click="goRequestPage"
            style="
              padding: 10px 15px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              background-color: #ccc;
              font-size: 30px;
            "
          >
            書類作成
          </button>
          <button
            @click="Logout"
            style="
              padding: 10px 15px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              background-color: #ccc;
              font-size: 30px;
            "
          >
            ログアウト
          </button>
        </div>
      </section>

      <!-- Documents List Section -->
      <section
        class="documents-list"
        style="
          margin-top: 20px;
          width: 80%;
          background-color: #ccc;
          padding: 20px;
          border-radius: 10px;
        "
      >
        <h3 style="text-align: center">書類一覧</h3>
        <table
          class="documents-table"
          style="width: 100%; border-collapse: collapse; margin-top: 10px"
        >
          <thead>
            <tr style="background-color: #f4f4f4; font-weight: bold">
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                連番
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                学籍番号
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                名前
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                学科
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                学年
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                クラス
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                承認情報
              </th>
              <th
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                詳細内容表示ボタン
              </th>
              <th
                v-if="user.role_id === 1"
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                更新ボタン
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(doc, index) in user.role_id === 1
                ? sortedRequests
                : paginatedDocuments"
              :key="index"
              style="background-color: #fff; border: 1px solid #ddd"
            >
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ user.role_id === 1 ? doc.serial_number : doc.id }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ doc.student_number }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ doc.student_name }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ doc.department }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ doc.grade }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ doc.class }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                {{ doc.status }}
              </td>
              <td
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                <button
                  @click="detailPage(doc)"
                  style="
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    background-color: #e0e0e0;
                    cursor: pointer;
                  "
                >
                  詳細
                </button>
              </td>
              <td
                v-if="user.role_id === 1"
                style="border: 1px solid #ddd; padding: 8px; text-align: center"
              >
                <button
                  @click="openStatusModal(doc)"
                  style="
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    background-color: #e0e0e0;
                    cursor: pointer;
                  "
                >
                  更新
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Pagination -->
        <div style="margin-top: 10px; text-align: center">
          <button
            v-if="currentPage > 1"
            @click="currentPage--"
            style="padding: 5px 10px; margin-right: 10px"
          >
            前へ
          </button>
          <button
            v-if="currentPage < totalPages"
            @click="currentPage++"
            style="padding: 5px 10px"
          >
            次へ
          </button>
        </div>
      </section>
    </div>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';

const router = useRouter();
const user = JSON.parse(localStorage.getItem('user')) || {};
const requests = ref([]);
const errorMessage = ref('');
const loading = ref(true);
const currentPage = ref(1);
const itemsPerPage = 10;
const selectedDoc = ref(null);

const paginatedDocuments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return requests.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(requests.value.length / itemsPerPage)
);

const sortedRequests = computed(() => {
  if (user.role_id === 1) {
    return requests.value
      .slice()
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .map((request, index) => ({
        ...request,
        serial_number: index + 1,
      }));
  } else {
    return requests.value;
  }
});

const fetchRequests = async () => {
  try {
    loading.value = true;
    let response;
    if (user.role_id === 1) {
      response = await fetch('http://localhost:3000/requests');
    } else if (user.role_id === 2) {
      response = await fetch(`http://localhost:3000/requests/${user.id}`);
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'データ取得に失敗しました');
    }

    const data = await response.json();
    console.log(data);
    requests.value = data;
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
};

const updateStatus = async (status) => {
  try {
    const response = await fetch(
      `http://localhost:3000/requests/${selectedDoc.value.student_id}/${selectedDoc.value.id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      }
    );
    if (!response.ok) throw new Error('更新に失敗しました');
    fetchRequests();
  } catch (error) {
    alert(error.message);
  }
};

const openStatusModal = (doc) => {
  selectedDoc.value = doc;
  const status = prompt('承認 or 非承認を入力してください (承認/非承認)');
  if (status === '承認' || status === '非承認') {
    updateStatus(status);
  } else {
    alert('無効な入力です。');
  }
};

const goRequestPage = () => {
  router.push(`/request-page?student_id=${user.id}`);
};

const detailPage = (doc) => {
  selectedDoc.value = doc; // ボタンが押された行のdocを設定
  console.log(doc);
  if (user.role_id === 1) {
    router.push(
      `/details-page?student_id=${selectedDoc.value.student_id}&request_id=${selectedDoc.value.id}`
    );
  } else {
    router.push(
      `/details-page?student_id=${user.id}&request_id=${selectedDoc.value.id}`
    );
  }
};

const Logout = () => {
  localStorage.removeItem('user');
  router.push('/');
};

onMounted(() => {
  if (!user) {
    router.push('/');
  } else {
    fetchRequests();
  }
});
</script>
