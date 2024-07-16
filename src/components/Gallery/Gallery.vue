<template>
    <div @click="closeGallery">
        <ol>
            <li  v-for="(img,i) in imgs">
                <img v-if="i==currentIndex" :src="img.src" :alt="img.desc">
            </li>
        </ol>
    </div>
</template>
<script setup>
import { imgs } from "./data";
import { ref,onMounted,onUnmounted } from "vue";
const currentIndex = ref(0);
const y = window.scrollY;
function scrollEvent(e,a) {
    // $ref.style.display = 'none';
    window.scrollTo(0,y);
}
function closeGallery(){
    window.removeEventListener('scroll', scrollEvent);
}
onMounted(()=>{
    window.addEventListener('scroll', scrollEvent);
})
</script>
<style lang="scss" scoped>
div{
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 200;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    ol{

        li{
            // background-color: aquamarine;
            img{
                height: 40vh;
            }
        }
    }
}

</style>