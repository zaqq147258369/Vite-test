<script setup>
import {ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
import usePoint from '../hooks/usePoint'
let sum = ref(0);

// 通过组合式API的形式去使用生命周期钩子
//#region 
    // onBeforeMount(()=>{
    //     console.log('---onBeforeMount---');
    // })
    // onMounted(()=>{
    //     console.log('---onMounted---');
    // })
    // onBeforeUpdate(()=>{
    //     console.log('---onBeforeUpdate---');
    // })
    // onUpdated(()=>{
    //     console.log('---onUpdated---');
    // })
    // onBeforeUnmount(()=>{
    //     console.log('---onBeforeUnmount---');
    // })
    // onUnmounted(()=>{
    //     console.log('---onUnmounted---');
    // })
    //#endregion

let point = usePoint();

</script>

<template>
  <div>
    <h1>和：{{ sum }}</h1>
    <button @click="sum++">+</button>
    <hr>
    <h2>当前点击时鼠标的坐标为：x:{{point.x}}，y:{{ point.y }}</h2>
  </div>

</template>

