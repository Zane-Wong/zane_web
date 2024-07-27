<template>
    <div class="card-contariner">
        <div class="image-card" v-for="(img, index) in data" @click="previewImg">
            <img :src="img.src" :alt="img.desc" :id="index"/>
        </div>
        <Gallery v-model:visiable="showGallery" :imgs="data" :initialIndex="currentIndex" @update:visiable="galleryUpdate"></Gallery>
    </div>
    
</template>
<script setup>
import { ref, defineProps } from 'vue';
import Gallery from '../../components/Gallery/Gallery.vue';
defineProps({
    data:{
        type: Array,
        default: [
        {desc:'描述',src:'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png'},
        {desc:'描述',src:'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png'},
        {desc:'描述',src:'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png'}

        ],
    }
});
const showGallery = ref(false);
const currentIndex = ref(0);
function previewImg( event){
    if(!showGallery.value){
        showGallery.value = true;
        console.log(showGallery.value);
    }
    currentIndex.value = parseInt(event.target.id);
}
function galleryUpdate(isShow){
    showGallery.value= !isShow;
}
</script>
<style lang="scss" scoped>
.card-contariner{
    margin-left: var(--height-huge);
    margin-top: var(--height-huge);
}
.image-card{
    display: inline-block;
    width: var(--height-max);
    height: var(--height-max);
    border-radius: var(--radius-large);
    background-color: var(--gray4);
    overflow: hidden;
    border: 3px solid var(--gray4);
    box-shadow: 2px 0px 10px var(--gray6);
    transition: transform 0.2s ease-in-out;
    margin-top:calc(-1*var(--height-large));
    margin-left:calc(-2*var(--height-large));
    img{
        height: 100%;
    }
}
.dark .image-card{
    background-color: var(--gray12);
    border-color: var(--gray12);
    box-shadow: 2px 0px 10px var(--gray12);
}
.image-card:nth-child(n){
    // border-color: red;
}
.image-card:hover{
    transform: translateY(calc(-1*var(--height-small)));
}
</style>