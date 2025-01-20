<script setup>
import { ref } from "vue";
const name = ref("");
const age = ref("");
const email = ref("");
const isEditable = ref(false)
const records = ref([]);

const addRecord = () => {
  if (!name.value || !age.value || !email.value) {
    throw new Error("All fields must be filled");
  }
  records.value.push({ name: name.value, age: age.value, email: email.value, edit:isEditable.value, isDelete:false});
  name.value = "";
  age.value = "";
  email.value = "";
};

const toggleDelete = (index) => {
  records.value[index].isDelete = !records.value[index].isDelete;
};

const Delete =(index)=>{
  records.value.splice(index, 1)
}
</script>

<template>
  <div class="flex items-start justify-center w-full h-screen md:items-center">
    <div
      class="w-full md:w-[90%] px-[10px] md:px-[25px] flex flex-col md:flex-row items-start justify-between shadow-2xl rounded-[5px] py-10"
    >
      <div
        class="w-full md:w-[43%] flex flex-col items-start justify-start md:px-2"
      >
        <h1 class="font-bold text-[25px] md:text-[30px] md:mt-10">
          Student Registration
        </h1>
        <form
          @submit.prevent="addRecord"
          class="flex flex-col items-start justify-center w-full gap-3 mt-2 md:mt-5"
        >
          <input
            type="text"
            placeholder="Name"
            v-model="name"
            class="pl-3 w-full bg-transparent rounded-[6px] py-1 md:py-2 outline-0 outline-none border-2 border-gray-400"
          />
          <input
            type="number"
            placeholder="Age"
            v-model="age"
            class="pl-3 w-full bg-transparent rounded-[6px] py-1 md:py-2 outline-0 outline-none border-2 border-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="pl-3 w-full bg-transparent rounded-[6px] py-1 md:py-2 outline-0 outline-none border-2 border-gray-400"
          />
          <button
            type="submit"
            class="w-[120px] h-[30px] md:w-[160px] md:mt-[10px] md:h-[45px] bg-blue-600 rounded-[5px] text-white md:text-[18px] text-[13px]"
          >
            Add Record
          </button>
        </form>
      </div>
      <div class="w-full md:w-[55%] flex flex-col items-start justify-start">
        <h1 class="font-bold text-[25px] md:text-[30px] mt-7 md:mt-10">
          Records
        </h1>
        <div
          class="no-scrollbar mt-2 md:mt-5 w-full flex flex-col items-start justify-start gap-3 md:h-[300px] overflow-scroll"
        >
          <table class="w-full">
            <thead>
              <tr class="bg-gray-200">
                <th
                  class="border-[1px] border-gray-400 md:w-[100px] px-4 py-2 text-left"
                >
                  Name
                </th>
                <th
                  class="border-[1px] border-gray-400 md:w-[50px] px-4 py-2 text-left"
                >
                  Age
                </th>
                <th class="border-[1px] border-gray-400 px-4 py-2 text-left">
                  Email
                </th>
                <th
                  class="border-[1px] border-gray-400 md:w-[110px] px-4 py-2 text-left"
                >
                  Edit
                </th>
                <th
                  class="border-[1px] border-gray-400 md:w-[100px] px-4 py-2 text-left"
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(record, index) in records" :key="index">
                <td class="px-4 py-2 font-normal border border-gray-300">
                  {{ record.name }}
                </td>
                <td class="px-4 py-2 font-normal border border-gray-300">{{record.age}}</td>
                <td class="px-4 py-2 font-normal border border-gray-300">
                  {{record.email}}
                </td>
                <td class="px-1 py-1 border border-gray-300">
                  <button
                  v-if="record.edit === false"
                    class="bg-blue-600 font-medium w-full md:py-[6px] rounded-[3px] text-white"
                  >
                    Edit
                  </button>
                </td>
                <td class="px-1 py-1 border border-gray-300">
                  <button
                    @click="toggleDelete(index)"
                    class="bg-red-600 font-medium w-full md:py-[6px] rounded-[3px] text-white"
                     v-if="!record.isDelete"
                  >
                    Delete
                  </button>
                  <button
                     v-if="record.isDelete"
                    class="flex items-center justify-between w-full px-4 overflow-visible"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'check']"
                      @click="Delete(index)"
                      class="text-[25px] font-bold text-red-500"
                    />
                    <font-awesome-icon
                      @click="toggleDelete(index)"
                      class="text-[20px] font-bold text-yellow-500"
                      :icon="['fas', 'x']"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./assets/main.css"></style>
