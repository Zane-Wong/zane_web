<template>
    <TimeLine>
        <TimeLineItem v-for="i in [1,2,3,4]"></TimeLineItem>
    </TimeLine>
    <div id="aaa" ref="aaa">aaa</div>
    <p id="ppp" ref="ppp"> ppp</p>
</template>
<script>
import TimeLine from '../../../components/TimeLine/TimeLine.vue';
import TimeLineItem from '../../../components/TimeLine/TimeLineItem.vue';
export default{
    name: 'Experience',
    components: {
        TimeLine,
        TimeLineItem
    },
    created(){
        console.log("Experience");
    },
    mounted(){
        console.log(this.$refs);
    }
}
</script>
<style>
</style>