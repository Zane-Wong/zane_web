<template>
    <TimeLine>
        <TimeLineItem v-for="(e, i) in events" :data="e"></TimeLineItem>
    </TimeLine>
    <div id="aaa" ref="aaa">aaa</div>
    <p id="ppp" ref="ppp"> ppp</p>
</template>
<script>
import TimeLine from '../../../components/TimeLine/TimeLine.vue';
import TimeLineItem from '../../../components/TimeLine/TimeLineItem.vue';
import {events} from './data.ts';
export default{
    name: 'Experience',
    components: {
        TimeLine,
        TimeLineItem
    },
    data(){
        return {
            events
        }
    },
    created(){
        console.log("Experience");
    },
    mounted(){
        console.log(this.$refs);
    }
}
</script>
<style scoped>

</style>