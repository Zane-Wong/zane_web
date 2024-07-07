<template>
    <div class="nav">
        导航栏
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav{
    /* background-color: var(--gray2); */
    background-color: rgba(0,0,0,0.1);
    color: var(--gray2);
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 100;
    width: 100%;
    height: var(--height-large);
}
/* .dark .nav{
    background-color: var(--gray14);
} */
</style>
