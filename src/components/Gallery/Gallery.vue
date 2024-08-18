<template>
    <div class="overlay" @click.stop="closeGallery" @wheel.prevent @touchmove.prevent >
        <div class="viewer">
            <button @click.stop="prevImg" class="btn prev-btn"><</button>
            <img :src="imgs[currentIndex].src" class="image" @click.stop :alt="imgs[currentIndex].desc">
            <button @click.stop="nextImg" class="btn next-btn">></button>
            <div class="index">{{ currentIndex+1 }} / {{ imgs.length }}</div>
        </div>
    </div>
</template>
<script setup>
import { images } from "./data";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import emitter from "@/utils/emitter";
onMounted(()=>{
    emitter.emit("hide-navbar");
})
onBeforeUnmount(()=>{
    emitter.emit("show-navbar");
})
const props = defineProps({
    imgs: { type: Array, default: images, required: false },
    initialIndex: { type: Number, default: 0, required: false} // ,
    // visiable: { type: Boolean, default: false, required: false}
});
const emit = defineEmits(['close']); // "update:visiable"
const currentIndex = ref(props.initialIndex);
// const show = ref(props.visiable);
window.addEventListener('keydown',(e)=>{
    if(e.key=='Escape') emit('close');
    if(e.key=='ArrowRight') nextImg();
    if(e.key=='ArrowLeft') prevImg();
})
function prevImg(){
    if(currentIndex.value>0){
        currentIndex.value--;
    }
}
function nextImg(){
    if(currentIndex.value<props.imgs.length-1){
        currentIndex.value++;
    }
}
function closeGallery(){
    // props.visiables = false;
    emit('close'); // 'update:visiable', props.visiable
}
</script>
<style lang="scss" scoped>
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.7);
    backdrop-filter: blur(var(--blur-default));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    .viewer{
       width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .image{
            max-width: 80%;
            max-height: 80%;
        }
        .btn{
            background-color: transparent;
            border:none;
            font-size: var(--font-max);
            cursor: pointer;
            font-family: simsun, serif, sans-serif;
            font-weight:900;
            margin: 0 var(--margin-small);
            width: var(--font-large);
        }
        .prev-btn{
            margin-right: var(--font-max);
        }
        .next-btn{
            margin-left: var(--font-max);
        }
        .index{
            position: absolute;
            bottom: 0;
            left: 50%;
            color: white;
            transform: translateX(-50%);
            text-shadow: 0 0 2px black;
        }
    }

}
.dark .overlay{
    background-color: rgba(0,0,0,0.3);
    .viewer{
        .btn{
            color: white;
        }
    }
}
</style>