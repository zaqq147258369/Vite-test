<script setup >
import {ref,reactive} from 'vue'
let name = ref('张三');
let age = ref(18)
let job = reactive({
  type:'xxx',
  salary:'30k',
  a:{
    b:{
      c:666
    }
  }
})
function showname(){
  name.value = '李四'
  age.value=29
  
  console.log(job);
  job.type = 'aaa';
  job.salary='49k';
  job.a.b.c=777  
  // console.log(name,age);
}
function addsex(){
  job.sex = '男女'
}

function deletesalay(){
  delete job.salary
}
</script>

<template>

  <div>
    <p>{{ name }}</p>
    <br>
    <p>{{ age }}</p>
    <h1>类型：{{ job.type }}</h1>
    <h1 v-show="job.salary">收入：{{ job.salary }}</h1>
    <h1>{{ job.a.b.c }}</h1>
    <h1 v-show="job.sex">性别：{{ job.sex }}</h1>
    <button @click="showname">确定 </button>
    <button @click="addsex">添加sex属性 </button>
    <button @click="deletesalay">删除salary属性 </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
