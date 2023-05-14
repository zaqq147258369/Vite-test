<script setup>
import {
  reactive,
  toRefs,
  shallowReactive,
  shallowRef,
  shallowReadonly,
  readonly,
  toRaw,
  markRaw
} from 'vue'
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
// person = shallowReadonly(person) //只限制浅层次的数据（person的第一级）。job对象就不会限制为只读。

console.log(person);
const p = toRaw(person) //将reactive定义的响应式对象还原为普通对象
console.log(p);

function addCar(){
  let car = {name:'xx',price:40}
  person.car = markRaw(car) //将car属性标记为一个对象，使其永远不会成为响应式对象。但是可以修改car内容，car对象内部属性修改不会渲染页面。
}

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

