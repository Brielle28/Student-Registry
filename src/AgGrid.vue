<!-- <script setup>
import { ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const name = ref("");
const age = ref("");
const email = ref("");
const records = ref([]);

// Define cell renderer components
const EditButton = {
  template: `
    <button 
      class="px-2 py-1 text-white bg-blue-600 rounded"
      @click="params.onClick(params.node.rowIndex)"
    >
      Edit
    </button>
  `,
};

const DeleteButton = {
  template: `
    <div>
      <button
        v-if="!params.data.isDelete"
        @click="params.onToggleDelete(params.node.rowIndex)"
        class="px-2 py-1 text-white bg-red-600 rounded"
      >
        Delete
      </button>
      <button
        v-if="params.data.isDelete"
        @click="params.onConfirmDelete(params.node.rowIndex)"
        class="px-2 py-1 text-white bg-green-600 rounded"
      >
        Confirm Delete
      </button>
    </div>
  `,
};

const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    editable: true,
  },
  {
    headerName: "Age",
    field: "age",
    editable: true,
  },
  {
    headerName: "Email",
    field: "email",
    editable: true,
  },
  {
    headerName: "Edit",
    cellRenderer: EditButton,
    cellRendererParams: {
      onClick: (index) => {
        const record = records.value[index];
        record.edit = !record.edit;
      },
    },
    width: 120,
  },
  {
    headerName: "Delete",
    cellRenderer: DeleteButton,
    cellRendererParams: {
      onToggleDelete: (index) => {
        records.value[index].isDelete = !records.value[index].isDelete;
      },
      onConfirmDelete: (index) => {
        records.value.splice(index, 1);
      },
    },
    width: 120,
  },
];

const gridOptions = {
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
  },
};

const addRecord = () => {
  if (!name.value || !age.value || !email.value) {
    alert("All fields must be filled");
    return;
  }
  records.value.push({
    name: name.value,
    age: age.value,
    email: email.value,
    edit: false,
    isDelete: false,
  });
  name.value = "";
  age.value = "";
  email.value = "";
};
onMounted(() => {
  console.log("Grid Options:", gridOptions);
  console.log("Column Definitions:", columnDefs);
});
</script> -->
<script setup>
import { ref, onMounted } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const name = ref("");
const age = ref("");
const email = ref("");
const records = ref([]);

// Define cell renderer components
const EditButton = {
  template: `
    <button 
      class="px-2 py-1 text-white bg-blue-600 rounded"
      @click="params.onClick(params.node.rowIndex)"
    >
      Edit
    </button>
  `,
};

const DeleteButton = {
  template: `
    <div>
      <button
        v-if="!params.data.isDelete"
        @click="params.onToggleDelete(params.node.rowIndex)"
        class="px-2 py-1 text-white bg-red-600 rounded"
      >
        Delete
      </button>
      <button
        v-if="params.data.isDelete"
        @click="params.onConfirmDelete(params.node.rowIndex)"
        class="px-2 py-1 text-white bg-green-600 rounded"
      >
        Confirm Delete
      </button>
    </div>
  `,
};

const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    editable: true,
  },
  {
    headerName: "Age",
    field: "age",
    editable: true,
  },
  {
    headerName: "Email",
    field: "email",
    editable: true,
  },
  {
    headerName: "Edit",
    cellRenderer: EditButton,
    cellRendererParams: {
      onClick: (index) => {
        const record = records.value[index];
        record.edit = !record.edit;
      },
    },
    width: 120,
  },
  {
    headerName: "Delete",
    cellRenderer: DeleteButton,
    cellRendererParams: {
      onToggleDelete: (index) => {
        records.value[index].isDelete = !records.value[index].isDelete;
      },
      onConfirmDelete: (index) => {
        records.value.splice(index, 1);
      },
    },
    width: 120,
  },
];

const gridOptions = {
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
  },
};

const addRecord = () => {
  if (!name.value || !age.value || !email.value) {
    alert("All fields must be filled");
    return;
  }
  records.value.push({
    name: name.value,
    age: age.value,
    email: email.value,
    edit: false,
    isDelete: false,
  });
  name.value = "";
  age.value = "";
  email.value = "";
};

// Add this to check if the grid is initialized and rendered properly
onMounted(() => {
  console.log("Grid Options:", gridOptions);
  console.log("Column Definitions:", columnDefs);
});
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
          class="w-full mt-2 bg-pink-100 ag-theme-alpine md:mt-5"
          style="height: 400px; width: 100%"
        >
          <ag-grid-vue
            style="width: 100%; height: 100%"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="records"
            :gridOptions="gridOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>
