<script setup>
    import { ref,customRef} from 'vue';
    function myRef(value,delay){
        let timer
       return customRef((track,trigger)=>{
            return {
                get(){
                    console.log(`从myRef容器中读取数据：${value}`);
                    track(); //通知Vue追踪value的变化（）
                    return value
                },
                set(newValue){
                    console.log(`把myRef容器中数据改为了：${value}`);
                    clearTimeout(timer)
                    timer =setTimeout(() => {
                        value = newValue 
                        trigger() // 通知Vue去重新解析数据
                    }, delay);
                   
                }
            }
       });
    }
    // let keyWord = ref('hello'); //使用Vue提供的ref
    let keyWord = myRef('hello',500) // 使用自定义的ref
</script>
<template>
    <div>
        <input type="text" v-model="keyWord">
        <h3>{{ keyWord }}</h3>
    </div>
</template>