<script setup>
import { inject } from 'vue';
let car = inject('car')
</script>
<template>
  <div class="son">
    <h2>Son组件（孙组件）,{{ car.name }} -- {{ car.price }}</h2>
  </div>
</template>
<style scoped>
    .son{
        background: orange;
        padding: 10px;
    }
</style>

