<template>
    <TimeLine>
        <template v-slot="slotProps">
            <TimeLineItem  v-for="(e, i) in events" :data="e">
                <template #imgs>
                    <Image :data="e.imgs"></Image>
                </template>
            </TimeLineItem>
        </template>
    </TimeLine>
    <div id="aaa" ref="aaa">aaa</div>
    <p id="ppp" ref="ppp"> ppp</p>
</template>
<script>
import TimeLine from '../../../components/TimeLine/TimeLine.vue';
import TimeLineItem from '../../../components/TimeLine/TimeLineItem.vue';
import Gallery from '../../../components/Gallery/Gallery.vue';
import Image from '../../../components/Image/Image.vue';
import {events} from './data.ts';
export default{
    name: 'Experience',
    components: {
        TimeLine,
        TimeLineItem,
        Image
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