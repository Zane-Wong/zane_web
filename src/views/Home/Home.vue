<template>
    <div class="main-container">
        <Slogon id="index"></Slogon>
        <!-- <section class = "main" id="tools"></section> -->
        <main id="main" class = "main">
            <!-- <section id="author"> -->
                <!-- <SectionTitle title="作者"></SectionTitle>
                <Author></Author> -->
                 <!-- <Image :data="myImgs"></Image> -->
            <!-- </section> -->
          <RouterView/>
        </main>
        <footer id="about">
            <Foot></Foot>
        </footer>
    </div>
    <!-- <test></test> -->
</template>
<script>
// import Slogon from '../../components/Slogon.vue';
import Slogon from "@/components/Slogon.vue";
import SectionTitle from '../../components/SectionTitle.vue';
import Author from '../Author/Author.vue';
import Foot from '../../components/Foot/Foot.vue';
import Projects from '../Projects/Projects.vue';
// import Image from '../../components/Image/Image.vue'
export default {
    name: 'Home',
    components: {
        Slogon,
        SectionTitle,

        Author,
        Foot,
        Projects
        //, Image
        //, test
    },
    data(){
        return {
            title: "Powered by wangzhuo",
            // myImgs:[        
            //     {desc:'描述',src:'https://images.viblo.asia/f71e4362-cb61-425b-9993-e75446351f78.jpg'},
            //     {desc:'描述',src:'https://swansoftwaresolutions.com/wp-content/uploads/2020/01/Benefits-of-Using-VUE.JS.jpeg'},
            //     {desc:'描述',src:'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png'},
            //     {desc:'描述',src:'https://images.viblo.asia/f71e4362-cb61-425b-9993-e75446351f78.jpg'}
            // ],
            // projects: [
            //     { title: '', 
            //     coverImg:'', 
            //     url:'',
            //     subTitle: '', 
            //     description: '', 
            //     tags:[], 
            //     platform:''}
            // ],

        }
    },
    // created(){
    //     this.projects = projects;
    // }
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
    background-color: rgba(255,255,255,0.88);
    // backdrop-filter: blur(var(--blur-large));
}
.dark .main {
    background-color: rgba(0,0,0,0.8);
}
footer {
    color: var(--gray4);
    // padding: var(--padding-large);
}

</style>