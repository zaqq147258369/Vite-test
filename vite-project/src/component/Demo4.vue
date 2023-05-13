<script setup>
import {reactive,toRefs,shallowReactive,shallowRef,shallowReadonly,readonly} from 'vue'
let person = reactive({
    name:'张三',
    age:18,
    job:{
        j1:{
            salary:27
        }
    }
})
let person2 = shallowReactive({})
let x = shallowRef(0);

// person = readonly(person) //只读数据，深层次限制为只读

person = shallowReadonly(person) //只限制浅层次的数据（person的第一级）。job对象就不会限制为只读。


</script>

<template>
  <div>
    <h2>姓名：{{person.name}}</h2>
    <h2>姓名：{{person.age}}</h2>
    <h2>姓名：{{person.job.j1.salary}}</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>

</template>

