<script setup >
import {ref} from 'vue'
let name = ref('张三');
let age = ref(18)
let job = ref({
  type:'xxx',
  salary:'30k'
})
function showname(){
  name.value = '李四'
  age.value=29
  console.log(job.value);
  console.log(name,age);
}
</script>

<template>
  <div>
    <p>{{ name }}</p>
    <br>
    <p>{{ age }}</p>
    <h1>{{ job.type }}</h1>
    <h1>{{ job.salary }}</h1>
    <div @click="showname">确定 </div>
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
