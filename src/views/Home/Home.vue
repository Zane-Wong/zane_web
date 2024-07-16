<template>
    <div class="main-container">
        <Slogon id="index"></Slogon>
        <!-- <section class = "main" id="tools"></section> -->
        <main class = "main">
            <section id="projects">
                <SectionTitle title="项目"></SectionTitle>
                <ul class="card-list">
                    <Card v-for="project in projects" class="m-t m-b m-l m-r" :data="project"></Card>
                </ul>
            </section>
            <section id="tools">
                <SectionTitle title="工具"></SectionTitle>
                
            </section>
           
        </main>
        <footer id="about">
            <Foot></Foot>
        </footer>
    </div>
    <!-- <test></test> -->
</template>
<script>
import Slogon from '../../components/Slogon.vue';
import Card from '../../components/Card/Card.vue';
import SectionTitle from '../../components/SectionTitle.vue';
import {projects} from '../../components/Card/data';
import Foot from '../../components/Foot/Foot.vue';
// import test from '../../components/Gallery/test.vue';
export default{
    name:'Home',
    components:{
        Slogon,
        SectionTitle,
        Card,
        Foot
        //, test
    },
    data(){
        return {
            title: "Powered by wangzhuo",
            projects: [
                { title: '', 
                coverImg:'', 
                url:'',
                subTitle: '', 
                description: '', 
                tags:[], 
                platform:''}
            ],

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
    width: 100vw;
    z-index: 5;
}   
.main {
    // height: 100vh;
    padding: var(--padding-large) var(--padding-default);
    background-color: rgba(255,255,255,0.8);
    // backdrop-filter: blur(var(--blur-large));
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
    color: var(--gray4);
    // padding: var(--padding-large);
}

</style>