<script setup>
import Child from './Demo6/Child.vue';
import { reactive,provide, ref,readonly,isRef,isReactive,isReadonly,isProxy } from 'vue';
let car = reactive({
    name:'小奔',
    price:'40'
})
let sum = ref(0)
let car2 = readonly(car)

console.log(isRef(sum));
console.log(isReactive(car));
console.log(isReadonly(car2));
console.log(isProxy(car));
console.log(isProxy(sum));

provide('car',car) //给自己的后代组件提供数据
</script>
<template>
  <div class="app">
    <h2>APP组件（祖组件）,{{ car.name }}--{{ car.price }}</h2>
    <Child></Child>
  </div>
</template>
<style scoped>
    .app{
        background: gray;
        padding: 10px;
        width: 500px;
    }

</style>

