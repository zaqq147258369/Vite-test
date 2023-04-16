<script setup >
import Demo from './component/Demo.vue'
import Demo2 from './component/Demo2.vue'
</script>

<template>
  <div>
    <Demo v-if="false"></Demo>
    <Demo2></Demo2> 
  </div>
</template>
