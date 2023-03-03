<template>
    <div>
      <nav class="nav border-bottom pt-1 pb-1">
        <button type="button" class="btn btn-primary btn-sm">Thêm mới</button>
      </nav>
    </div>
  <div>
    <table class="table table-hover">
    <thead> 
      <tr>
        <th scope="col" width="5%">#</th>
        <th scope="col" width="20%">Mã bệnh nhân</th>
        <th scope="col" width="70%">Tên bệnh nhân</th>
        <th scope="col" width="5%">Xử lý</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(patient, index) in patients" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ patient.code }}</td>
        <td>{{ patient.name }}</td>
        <td>
          <button type="button" class="btn btn-primary btn-sm">Sửa</button>
          &nbsp;
          <button type="button" class="btn btn-danger btn-sm" @click="onDelete(patient.id)">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
  
  <script>
  export default {
    name: 'PatientPage',
     data() {
       return {
         patients: []
       }
     },
     created() {
      this.getAll();
     },
     methods: {
      getAll(){
        this.patients = [ 
          { id:1, code:'code-1', name:'name-1' },
          { id:2, code:'code-2', name:'name-2' },
          { id:3, code:'code-3', name:'name-3' },
          { id:4, code:'code-4', name:'name-4' },
          { id:5, code:'code-5', name:'name-5' },
        ]
      },
      onDelete(id) {
          console.log(id);
      }
     },
  }
  </script>
  
  <style scoped>
  </style>