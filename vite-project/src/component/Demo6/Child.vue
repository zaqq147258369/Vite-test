<script setup>
import { ref } from 'vue';
import Son from './Son.vue';
let title = ref('xxx')
</script>
<template>
  <div class="child">
    <h2>Child组件（子组件）</h2>
    <h3>接受子组件传过来的值{{}}</h3>
    <Son :title="title"></Son>
    
  </div>
</template>
<style scoped>
    .child{
        background: skyblue;
        padding: 10px;
    }
</style>

