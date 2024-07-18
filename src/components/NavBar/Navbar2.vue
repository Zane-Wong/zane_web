<template>
    <div class="navbar" :class="{fixed: isFixed}" :style="{opacity: navbarOpacity}">
        <div class="left">
            <div class="nav-item logo">
                <img src="../../assets/img/avatar.png" alt="zane">
            </div>
        </div>
        <div class="right">
            <ul>
                <li v-for="nav in navList" class="nav-item">
                    <a :href="nav.url">
                        {{ nav.title }}
                    </a>
                </li>
            </ul>
            <DarkSwitch class="nav-item"></DarkSwitch>
        </div>
    </div>
</template>
<script>
import { navList } from './data';
import DarkSwitch from '../../components/DarkSwitch.vue';
export default {
    components: {
        DarkSwitch
    },
    data(){
        return {
            isFixed: true,//false
            navbarOpacity: 0,
            navbarHeight: 0,
            navList
        }
    },
    mounted(){
        this.navbarHeight = this.$el.offsetHeight;//数值，无'px'
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy(){/** ************* */
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            console.log("scrollTop:",scrollTop);
            if(scrollTop > this.navbarHeight){
                // this.isFixed = true;
                this.$el.style.top = 0;
                this.navbarOpacity = 1;
            }else{
                // this.isFixed = false;
                this.navbarOpacity = scrollTop / this.navbarHeight;
                this.$el.style.top = `${scrollTop - this.navbarHeight}px`;                                                                                                                                                                                                                                                 
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(var(--blur-large));
    transition: all 0.4s ease-out;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left{
        .logo{
            border-radius: 50%;
            overflow: hidden;
            width: var(--height-large);
            min-width: var(--height-large);
            height: var(--height-large);
            img{
                width: 100%;
            }
        }
    }
    .right{
        ul{
            background-color: pink;
            display:flex;
            justify-content: space-around;
            a{
                padding: var(--padding-default) var(--padding-max);
                font-size:var(--font-large);
                background-color: green;
                color: var(--blue5);
            }
        }
    }

}
.fixed {
    position: fixed;
    z-index: 100;
    top: -100%; //0
    // transform: translateY(0);
}
.nav-item {
    margin: var(--margin-default) var(--margin-default);
}
</style>