import {reactive,onMounted,onBeforeUnmount} from 'vue'
function savePoint(){
    let point = reactive({
        x:0,
        y:0
    })
    
    function savePoint(e){
        point.x = e.pageX;
        point.y = e.pageY
        console.log(e.pageX,e.pageY);
    }
    onMounted(()=>{
        window.addEventListener("click",savePoint)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',savePoint)
    })

    return point;
}

export default savePoint