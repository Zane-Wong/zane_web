<template>
    <div class="main-container">
        <Slogon id="index"></Slogon>
        <!-- <section class = "main" id="tools"></section> -->
        <main class = "main" id="projects">
            <SectionTitle title="标题"></SectionTitle>
            <ul class="card-list">
                <Card v-for="project in projects" class="m-t m-b m-l m-r" :data="project"></Card>
            </ul>
        </main>
        <footer id="about"></footer>
    </div>
</template>
<script>
import Slogon from '../../components/Slogon.vue';
import Card from '../../components/Card/Card.vue';
import SectionTitle from '../../components/SectionTitle.vue';
import {projects} from '../../components/Card/data';
export default{
    name:'Home',
    components:{
        Slogon,
        SectionTitle,
        Card
    },
    data(){
        return {
            title: "Powered by wangzhuo",
            projects: [
                { title: '标题', 
                coverImg:'https://www.calibrate.be/sites/default/files/styles/large/public/2020-01/vue-01.png?itok=XlGRr8mq', 
                url:'to project',
                subTitle: '子标题', 
                description: '描述特别长的情况如何，让我试一下，再长点，再仓点仓带你按时发放阿达阿斯蒂芬啊啊打发打发 阿斯顿发放', 
                tags:[1,2,3], 
                platform:'平台'},
                { title: '标题', url:'go to ...', coverImg:'https://www.calibrate.be/sites/default/files/styles/large/public/2020-01/vue-01.png?itok=XlGRr8mq', subTitle: '子标题', description: '描述', tags:[2,3,4], platform:'平台'}
            ]
        }
    },
    created(){
        this.projects = projects;
    }
}
</script>
<style lang="scss" scoped>
.main-container {
    position: absolute;
    width: 100%;
    z-index: 5;
}   
.main {
    // height: 100vh;
    padding: var(--padding-large) var(--padding-default);
    background-color: rgba(255,255,255,0.8);
    backdrop-filter: blur(var(--blur-large));
    .card-list{
        // background-color: gray; 
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
.dark .main {
    background-color: rgba(0,0,0,0.3);
}
footer {
    height: 30vh;

}
</style>