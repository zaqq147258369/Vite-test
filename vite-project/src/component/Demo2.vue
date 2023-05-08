<script setup>
import {ref,reactive,computed,watch,watchEffect} from "vue"
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
},{immedite:true});

/*监视reactive定义的一个响应式数据的全部属性，
    注意：
        1、此处无法获取到oldValue
        2、强制开启了深度监视（deep配置无效）
*/
 watch(person,(newValue,oldValue)=>{
    console.log('person变了',newValue,oldValue)
},{deep:false});       


/*监视reactive定义的一个响应式数据中的某个属性，
 watch(()=>person.firstName,(newValue,oldValue)=>{
    console.log('person中的name变了',newValue,oldValue)
});       
*/

/*监视reactive定义的一个响应式数据中的某些属性，
 watch([()=>person.firstName,()=>person.lastName],(newValue,oldValue)=>{
    console.log('person中的name变了',newValue,oldValue)
});       
*/

/*
特殊情况：
watch([()=>person.job,()=>person.lastName],(newValue,oldValue)=>{
    console.log('person中的name变了',newValue,oldValue)
},{deep:true});       //此处由于监视的是reactive定义的对象中的某个属性，所以deep有效

*/

watchEffect(()=>{
    const x1 = sum.value;
    
})


</script>
<template>
    <div>
        <h1>一个人的信息</h1>
        姓: <input type="text" v-model="person.firstName">
        <br>
        名: <input type="text" v-model="person.lastName">
        <br>
        <span>全名：{{person.fullName}}</span>
        <h1>和：{{ sum }}</h1>
        <button @click="sum++">+</button>
    </div>
</template>
<style scoped>

</style> 