<script setup>
import {ref,reactive,computed,watch} from "vue"
    let sum = ref(0)
let person = reactive({
    firstName:"张",
    lastName:'三'
})
//计算属性-简写（没有考虑计算属性被修改的情况）
// person.fullName = computed(()=>{
//     return person.firstName+person.lastName
// })

//计算属性-完整写法（考虑计算属性读和写的情况）
person.fullName = computed({
    get(){
        return person.firstName+'-'+person.lastName;
    },
    set(value){
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1]
    } 
})

watch(sum,(newValue,oldValue)=>{
    console.log('sum变了',newValue,oldValue)
},{immedite:true})

</script>
<template>
    <div>
        <h1>一个人的信息</h1>
        姓: <input type="text" v-model="person.firstName">
        <br>
        名: <input type="text" v-model="person.lastName">
        <br>
        <span>全名：{{person.fullName}}</span>
        <h1>和：{{ sum }}}</h1>
        <button @click="sum++">+</button>
    </div>
</template>
<style scoped>

</style> 