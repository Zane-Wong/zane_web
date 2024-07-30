<template>
    <div class="card-container">
        <div class="image-card" v-for="(img, index) in data" @click="previewImg">
            <img :src="img.src" :alt="img.desc" :id="index"/>
        </div>
        <Gallery v-if="showGallery" :imgs="data" :initial-index="currentIndex" @close="galleryClose"></Gallery> <!--@update:visiable="galleryClose"-->
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import Gallery from '../../components/Gallery/Gallery.vue';
defineProps({
    data:{
        type: Array,
        default: [ ],
    }
});
const showGallery = ref(false);
const currentIndex = ref(0);
function previewImg( event){
    currentIndex.value = parseInt(event.target.id);
    // if(!showGallery.value){
    //     showGallery.value = true;
    //     console.log(showGallery.value);
    // }
    showGallery.value = true;
    
}
function galleryClose(){
    // showGallery.value= !isShow;
    showGallery.value = false;
}
</script>
<style lang="scss" scoped>
.card-container{
    margin-left: var(--height-huge);
    // margin-right: var(--height-default);
    margin-top: var(--height-default);
    margin-bottom: var(--height-small);
    // background-color: red;
}
.image-card{
    display: inline-block;
    width: var(--height-huge);
    height: var(--height-huge);
    border-radius: var(--radius-large);
    background-color: var(--gray4);
    overflow: hidden;
    border: 3px solid var(--gray4);
    box-shadow: 2px 0px 10px var(--gray6);
    transition: transform 0.2s ease-in-out;
    margin-top:calc(-1*var(--height-default));
    margin-left:calc(-1*var(--height-default));
    img{
        height: 100%;
    }
}
@media screen and (min-width: 768px) {
    .card-container{
        margin-left: var(--height-huge);
        margin-right: var(--height-default);
        margin-top: var(--height-large);
        margin-bottom: var(--height-default);
    }
    .image-card{
        // box-shadow: 10px 10px 100px red;
        margin-left: calc(-2*var(--height-default));
        width: var(--height-max);
        height: var(--height-max);
    }
}
.dark .image-card{
    background-color: var(--gray12);
    border-color: var(--gray12);
    box-shadow: 2px 0px 10px var(--gray12);
}
.image-card:nth-child(n+1){
    transform: rotate(15deg);
}

.image-card:hover{
    transform: translateY(calc(-1*var(--height-small)));
}
</style>