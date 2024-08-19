<template>
    <SectionTitle title="技术栈"></SectionTitle>
    <div style="height: var(--height-small);"></div>
    <div class="cubes-box" v-for="(tech,i) in techs" :style="{'--nums':nums}">
        <!-- :style="{ top: `calc(-${index}*var(--margin-large))`}" -->
        <div v-for="(t,j) in tech" :style="{ left:`calc(${j}*1.25*var(--width-large))`, top: `calc(-${j}*var(--margin-large))`}">
            <Cube :data="t"></Cube>
        </div>
    </div> <!-- :style="{ left:`calc(${index/3}*1.25*var(--width-large))`,top: `calc(-${index}*var(--margin-large))`}"> -->
</template>
<script setup>
import {computed} from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import Cube from "@/components/Cube/Cube.vue";
import { techs } from './data'; 
let nums = computed(()=>{
    return techs[0].length || 3;
});
</script>
<style lang="scss" scoped>
.cubes-box{
    // background-color: green;
    height: var(--height-large);
    margin-top: calc(1.2*var(--margin-max));
    position: relative;
    width: calc(var(--nums)*1.25*var(--width-large));
    margin-left: 50%;
    transform: translateX(-50%);
    div{
        position: absolute;
        // background-color: blue;
    }
}
</style>