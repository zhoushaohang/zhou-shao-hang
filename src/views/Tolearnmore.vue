<template>
  <el-input v-model="masterpiece" placeholder="名著" clearable />
  <el-input v-model="author" placeholder="作者" clearable />
  <el-input v-model="publishingHouse" placeholder="出版社" clearable />
  <el-button type="primary" @click="addTo">Primary</el-button>
  <el-table :data="listdata" style="width: 100%">
    <el-table-column prop="author" label="Name" width="120" />
    <el-table-column prop="bookname" label="State" width="120" />
    <el-table-column prop="id" label="City" width="120" />
    <el-table-column prop="publisher" label="Address" width="600" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="dele">Detail</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'


const comdea = ref(false)

const listdata = ref()
    const masterpiece = ref('')
    const author = ref('')
    const publishingHouse = ref('')

// 添加
function addTo() {
  axios.post('http://www.liulongbin.top:3006/api/addbook',{
    author:'masterpiece',
    bookname:'author',
    publisher:'publishingHouse'
  }).then(res => {
    getlist();
    masterpiece.value = '',
    author.value = ''
    publishingHouse.value = ''
    console.log(res);
  }).catch(err=> {
    console.log(124);
  })
}
// 删除
function dele(id) {
  axios.get('http://www.liulongbin.top:3006/api/delbook',{
    params:{
      id
    }
  }).then((res) => {
    getlist();
    console.log(res);
  })
}

//查看
function getlist() {
  axios.get('http://www.liulongbin.top:3006/api/getbooks').then(res => {
    listdata. value = res.data.data
    console.log(listdata);
  }).catch(err => {
    console.log(123);
  })
}

getlist();

</script>
