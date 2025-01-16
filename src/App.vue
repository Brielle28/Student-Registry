<script setup>
import { ref } from "vue";
const isDelete = ref(false);
const toggleDelete = () => {
  isDelete.value = !isDelete.value;
};
</script>


<template>
  <div class="flex items-start justify-center w-full h-screen md:items-center">
    <div
      class="w-full md:w-[90%] px-[10px] md:px-[25px] flex flex-col md:flex-row items-start justify-between shadow-2xl rounded-[5px] py-10"
    >
      <div class="w-full md:w-[43%] flex flex-col items-start justify-start md:px-2">
        <h1 class="font-bold text-[25px] md:text-[30px] md:mt-10">Student Registration</h1>
        <form
          action=""
          class="flex flex-col items-start justify-center w-full gap-3 mt-2 md:mt-5"
        >
          <input
            type="text"
            placeholder="Name"
            class="pl-3 w-full bg-transparent rounded-[6px] py-1 md:py-2 outline-0 outline-none border-2 border-gray-400"
          />
          <input
            type="number"
            placeholder="Age"
            class="pl-3 w-full bg-transparent rounded-[6px] py-1 md:py-2 outline-0 outline-none border-2 border-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            class="pl-3 w-full bg-transparent rounded-[6px] py-1 md:py-2 outline-0 outline-none border-2 border-gray-400"
          />
          <button
            class=" w-[120px] h-[30px] md:w-[160px] md:mt-[10px] md:h-[45px] bg-blue-600 rounded-[5px] text-white md:text-[18px] text-[13px]"
          >
            Add Record
          </button>
        </form>
      </div>
      <div class="w-full md:w-[55%] flex flex-col items-start justify-start">
        <h1 class="font-bold text-[25px] md:text-[30px] mt-7 md:mt-10">Records</h1>
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
              <tr>
                <td class="px-4 py-2 font-normal border border-gray-300">
                  Nnadozie
                </td>
                <td class="px-4 py-2 font-normal border border-gray-300">22</td>
                <td class="px-4 py-2 font-normal border border-gray-300">
                  chukwuemerieclara@gmail.com
                </td>
                <td class="px-1 py-1 border border-gray-300">
                  <button
                    class="bg-blue-600 font-medium w-full md:py-[6px] rounded-[3px] text-white"
                  >
                    Edit
                  </button>
                </td>
                <td class="px-1 py-1 border border-gray-300">
                  <button
                    @click="toggleDelete"
                    class="bg-red-600 font-medium w-full md:py-[6px] rounded-[3px] text-white"
                    v-if="isDelete === false"
                  >
                    Delete
                  </button>
                  <button
                    v-if="isDelete === true"
                    class="flex items-center justify-between w-full px-4 overflow-visible"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'check']"
                      class="text-[25px] font-bold text-red-500"
                    />
                    <font-awesome-icon
                      @click="toggleDelete"
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
