<template>
  <TouBU />

  <Bottom />
</template>
<script setup>
import TouBU from '../components/TouBu.vue'
import Bottom from '../components/Bottom.vue'
import {ref} from 'vue'
const con = ref('')
const asi = ref('')
function ase(id){
  alert(id)
}
const items = [
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
  {
    id:'1',
    name:'安顿',
    age:'214'
  },
]


</script>
<style lang='less' scoped>
ul {
  margin: 40px;
}
</style>