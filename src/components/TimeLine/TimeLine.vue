<template>
    <ul>
        <slot ></slot>
    </ul>
</template>
<script setup>
const widthQuery = window.matchMedia('(min-width: 768px)');
window.addEventListener('resize',()=>{
    if(widthQuery.matches){
        selfdom = true;
    }
})
</script>
<style lang="scss" scoped>

</style>