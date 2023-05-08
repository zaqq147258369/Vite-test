<script setup>
import {ref,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
let sum = ref(0);

// 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(()=>{
        console.log('---onBeforeMount---');
    })
    onMounted(()=>{
        console.log('---onMounted---');
    })
    onBeforeUpdate(()=>{
        console.log('---onBeforeUpdate---');
    })
    onUpdated(()=>{
        console.log('---onUpdated---');
    })
    onBeforeUnmount(()=>{
        console.log('---onBeforeUnmount---');
    })
    onUnmounted(()=>{
        console.log('---onUnmounted---');
    })
</script>

<template>
  <div>
    <h1>和：{{ sum }}</h1>
    <button @click="sum++">+</button>
  </div>
</template>

