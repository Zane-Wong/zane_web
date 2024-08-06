<template>
    <div class="navbar" :class="{fixed: isFixed}" :style="{opacity: navbarOpacity}">
        <div class="left">
            <div class="logo nav-item">
                <img src="../../assets/img/avatar.png" alt="zane">
            </div>
        </div>
        <div class="right">
            <ul>
                <li v-for="nav in navList" class="nav-item">
                  <router-link :to="nav.url">
                    <!-- <a href="javascript: void(0);">nav.url-->
                        {{ nav.title }}
                        <div class="bottom-line"></div>
<!--                    </a>-->
                  </router-link>
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
            // console.log(this.navbarHeight);
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // console.log(scrollTop);
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
.fixed{
  position: fixed;
  width: 100%;
  z-index: 100;
}
.navbar{
    background-color: rgba(255,255,255,0.8);
    backdrop-filter: blur(var(--blur-large));
    display: flex;
    justify-content: space-around;
    // transition: all 0.4s ease-out;
    .left{
        display: flex;
        align-items: center;
        .logo{
            width: var(--height-large);
            height: var(--height-large);
            border-radius: var(--radius-round);
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
    .left::after{
        content:'Zane';
        color:transparent;
        background: linear-gradient(to right, var(--blue5), var(--green5));
        background-clip: text;
        /* font-style font-weight font-size font-family */
        font: 600 calc(var(--font-small)*2) 'SmileySans', 'Gill Sans MT';
        letter-spacing: calc(0.5*var(--padding-small));
    }
    .right{
        display: flex;
        align-items: center;
        // ul{
            li{
                display: inline-flex;
                position: relative;
                a{
                    border-radius: 5px;
                    font-size: var(--font-large);
                    font-weight: 600;
                    padding: var(--padding-default) var(--padding-max);
                    .bottom-line{
                        position: absolute;
                        bottom: 5px;
                        left: 50%;
                        transform: translate(-50%, 50%);
                        border-radius: 2px;
                        height: 0;
                        width: 0;
                        background-color: var(--green5);
                        transition: all 0.3s ease-in-out;
                    }
                }
                
                a:hover{
                    background-color: rgba(20,20,20,0.1);
                    color: black;
                    .bottom-line{
                        width: 50%;
                        height: 4px;
                    }
                }
            }
        // }
    }
    .nav-item{
        margin: var(--margin-default);
    }
}

.dark .navbar{
    background-color: rgba(0,0,0,0.26);
    .right{
        // ul{
            li{
                a{

                }
                a:hover{
                    color: white;
                    background-color: rgba(245,245,245,0.15);
                }
            }
        // }
    }
}
</style>