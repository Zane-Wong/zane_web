<template>
    <div class="main-container">
        <!-- <div class="slogan-container"> -->
        <Slogon></Slogon>
        <!-- </div> -->
        {{ title }}main Container
    </div>
</template>
<script>
import Slogon from '../../components/Slogon.vue';
export default{
    components:{
        Slogon
    },
    data(){
        return {
            title: "Powered by wangzhuo"
        }
    }
}
</script>
<style lang="scss" scoped>
.main-container{
    // top: calc(100vh);
    // top: 100vh;
    position: absolute;
    width: 100%;
    z-index: 5;
    // background-color: aqua;
    // .slogan-container{
    //     background-color: red;
    //     position: relative;
    // }
}
</style>