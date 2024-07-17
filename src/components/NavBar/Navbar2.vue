<template>
    <div class="navbar" :class="{fixed: isFixed}" :style="{opacity: navbarOpacity; height: navbarHeight}">
        <ul>
            <li v-for="nav in navList"><a href="nav.url">{{ nav.title }}</a></li>
        </ul>
    </div>
</template>
<script>
import { navList } from './data';
export default {
    data(){
        return {
            isFixed: false,
            navbarOpacity: 0,
            navbarHeight: 60,
            // navbarTop: 60,
            navList
        }
    },
    mounted(){
        this.navbarHeight = this.$el.offsetHeight;
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestory(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYoffset || document.documentElement.scrollTop;
            if(scrollTop > this.navbarHeight){
                this.isFixed = true;
                this.navbarOpacity = 1;
            }else{
                this.isFixed = false;
                this.navbarOpacity = scrollTop;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar{
    // background-color: gray;
    width: 100%;
    background-color: rgba(255,255,255,0.5);
    transition: opacity 0.3, transform 0.3;
    .fixed{
        position: fixed;
        top: 0;
        transform: translateY(0);
    }

    ul{

    }
}
</style>