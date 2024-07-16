<template>
     <Gallery v-model:visiable="showGallery" @update:visiable="galleryChange"></Gallery>
</template>
<script>
import Gallery from './Gallery.vue';
export default {
    components: {
        Gallery
    },
    data(){
        return {
            // imgs:[]
            showGallery: true
        }
    },
    methods: {
        galleryChange(e){
            console.log("gallery updated",this.showGallery);
        }
    }
}
</script>