<template>
    <li>timelineItem---li</li>
</template>
<script setup>
// console.log(this.$refs);
console.log("TimeLineItem");
</script>
<style scoped>
/* li{
    background-color: rgba(255,255,255,0.8);
}
.dark li{
    background-color: rgba(0,0,0,0.2);
} */
li{
    background: url(./imgs/1.png) top right contain cover;
    height: var(--height-huge);
}
@media screen and (max-width: 768px) {
    li{
        background-color: #fff;
        
    }
    .drak li{
        background-color: #000000;
    }
}
@media screen and (min-width: 768px) {
    li{
        background-color: blue;
    }
    .drak li{
        background-color: rgba(0,0,0,1);
    }
}

</style>