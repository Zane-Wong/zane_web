<template>
    <ul>
        <slot :selfdom-style="selfdom"></slot>
    </ul>
</template>
<script setup>
import {ref} from 'vue';
const widthQuery = window.matchMedia('(min-width: 768px)');
const selfdom = ref(false);

window.addEventListener('resize',()=>{
    if(widthQuery.matches && !selfdom.value){
        selfdom.value = true;
    }
    if(!widthQuery.matches && selfdom.value){
        selfdom.value = false;
    }
})
</script>
<style lang="scss" scoped>

</style>