<script setup>
import { inject } from 'vue';
const propst = defineProps({
  title:''
})

console.log(propst.title);
let car = inject('car')
</script>
<template>
  <div class="son">
    <h2>Son组件（孙组件）,{{ car.name }} -- {{ car.price }}</h2>
    <h2>{{ title }}</h2>
    <teleport to="body">
      <div>11</div>
    </teleport>
  </div>
</template>
<style scoped>
    .son{
        background: orange;
        padding: 10px;
    }
</style>

