<script setup >
import Demo from './component/Demo.vue'
import Demo2 from './component/Demo2.vue'
import Demo3 from './component/Demo3.vue';
import Demo4 from './component/Demo4.vue';
import Demo5 from './component/Demo5.vue';
import Demo6 from './component/Demo6.vue';
import{ref} from 'vue'
let isShowDemo3 = ref(true)
</script>

<template>
  <div>
    <Demo v-if="false"></Demo>
    <Demo2 v-if="false"></Demo2>
    <!-- <button @click="isShowDemo3 = !isShowDemo3">切换隐藏/显示</button>  -->
    <Demo3 v-if="false"></Demo3>
    <Demo4 v-if="false"></Demo4>
    <Demo5 v-if="false"></Demo5>
    <Demo6></Demo6>
  </div>
</template>
