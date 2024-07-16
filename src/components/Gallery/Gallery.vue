<template>
    <div v-if="show" class="overlay" @click.stop="closeGallery" @wheel.prevent >
        <!--  -->
        <div class="viewer">
            <button @click.stop="prevImg" class="btn prev-btn"><</button>
            <img :src="imgs[currentIndex].src" class="image" :alt="imgs[currentIndex].desc">
            <button @click.stop="nextImg" class="btn next-btn">></button>
            <div class="index">{{ currentIndex+1 }} / {{ imgs.length }}</div>
        </div>
        
    </div>
</template>
<script>
import { images } from "./data";
export default {
    name: "Gallery",
    props: {
        imgs: { type: Array, default: images, required: false },
        initialIndex: { type: Number, default: 0, required: false},
        visiable: { type: Boolean, default: false, required: false}
    },
    emits: ["update:visiable"],
    data(){
        return {
            currentIndex: this.initialIndex,
            show: this.visiable
        };
    },
    methods: {
        prevImg(){
            if(this.currentIndex>0){
                this.currentIndex--;
            }
        },
        nextImg(){
            if(this.currentIndex<this.imgs.length-1){
                this.currentIndex++;
            }
        },
        closeGallery(){
            this.show = false;
            console.log(this.show)
            this.$emit('update:visiable',this.show);
        }
    }
}
</script>
<style lang="scss" scoped>
.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    .viewer{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .image{
            max-width: 80%;
            max-height: 80%;
        }
        .btn{
            background-color: transparent;
            border:none;
            color: white;
            font-size: var(--font-max);
            cursor: pointer;
            font-family:simsun;
            font-weight:900;
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
            text-align: center;
            color: var(--gray2);
        }
    }

}
</style>