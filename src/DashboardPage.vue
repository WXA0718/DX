<template>
  <div
    class="dashboard"
    style="font-family: Arial, sans-serif; margin: 0; padding: 0; min-height: 100vh; display: flex; flex-direction: column;"
  >
    <!-- Header Section -->
    <AppHeader/>

    <!-- Main Content -->
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <!-- Greeting Section -->
      <section class="greeting-section" style="margin: 10px 0; text-align: center;">
        <h2 style="font-size: 60px;">Welcome (ワン) さん</h2>
        <div
          class="action-buttons"
          style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;"
        >
          <button
            style="padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; background-color: #ccc; font-size: 30px;"
          >
            書類作成
          </button>
          <button
            style="padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; background-color: #ccc; font-size: 30px;"
          >
            ログアウト
          </button>
        </div>
      </section>

      <!-- Documents List Section -->
      <section class="documents-list" style="margin-top: 20px; width: 80%; background-color: #ccc; padding: 20px; border-radius: 10px;">
        <h3 style="text-align: center;">書類一覧</h3>
        <table
          class="documents-table"
          style="width: 100%; border-collapse: collapse; margin-top: 10px;"
        >
          <thead>
            <tr style="background-color: #f4f4f4; font-weight: bold;">
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                連番
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                学籍番号
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                名前
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                学科
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                学年
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                クラス
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                承認情報
              </th>
              <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                詳細内容表示ボタン
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(doc, index) in paginatedDocuments" :key="index" style="background-color: #fff; border: 1px solid #ddd;">
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ index + 1 }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ doc.studentId }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ doc.name }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ doc.department }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ doc.grade }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ doc.class }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">{{ doc.approval }}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                <button
                  style="padding: 5px 10px; border: 1px solid #ccc; border-radius: 3px; background-color: #e0e0e0; cursor: pointer;"
                >
                  詳細
                </button>
              </td>
            </tr>
          </tbody>
        </table>
				<!-- Pagination -->
        <div style="margin-top: 10px; text-align: center;">
          <button
            v-if="currentPage > 1"
            @click="currentPage--"
            style="padding: 5px 10px; margin-right: 10px;"
          >
            前へ
          </button>
          <button
            v-if="currentPage < totalPages"
            @click="currentPage++"
            style="padding: 5px 10px;"
          >
            次へ
          </button>
        </div>
      </section>
    </div>

    <!-- Footer Section -->
    <AppFooter/>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

const documents = [
  {
    studentId: "202401",
    name: "山田 太郎",
    department: "情報学科",
    grade: "1年",
    class: "A組",
    approval: "承認済",
  },
  {
    studentId: "202402",
    name: "田中 英太",
    department: "経済学科",
    grade: "2年",
    class: "B組",
    approval: "承認待ち",
  },

	{
    studentId: "202402",
    name: "田中 英太",
    department: "経済学科",
    grade: "2年",
    class: "B組",
    approval: "承認待ち",
  },

	{
    studentId: "202402",
    name: "田中 英太",
    department: "経済学科",
    grade: "2年",
    class: "B組",
    approval: "承認待ち",
  },

	{
    studentId: "202402",
    name: "田中 英太",
    department: "経済学科",
    grade: "2年",
    class: "B組",
    approval: "承認待ち",
  },

	{
    studentId: "202402",
    name: "田中 英太",
    department: "経済学科",
    grade: "2年",
    class: "B組",
    approval: "承認待ち",
  },
	];
	const currentPage = ref(1);
	const itemsPerPage = 5;
	const totalPages = Math.ceil(documents.length / itemsPerPage);

	const paginatedDocuments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return documents.slice(start, start + itemsPerPage);
});
</script>
