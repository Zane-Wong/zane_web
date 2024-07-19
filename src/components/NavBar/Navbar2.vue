<template>
    <div class="navbar" :class="{fixed: isFixed}" :style="{opacity: navbarOpacity}">
        <div class="left">
            <div class="logo">
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
              <DarkSwitch ></DarkSwitch>
            </ul>
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
.fixed{
  position: fixed;
  width: 100%;
  z-index: 100;
}
.navbar{
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left{
    display: inline-flex;
    align-items: center;
    //margin-left: var(--margin-small);
    background-color: pink;
    .logo{
      width: var(--height-large);
      min-width: var(--height-large);
      height: var(--height-large);
      min-height: var(--height-large);
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
  .left::after{
    content:'Zane';
    font-size: var(--font-huge);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-left: var(--padding-default);
    font-weight: 600;
  }
  .right{
    background-color: yellow;
    //margin-right: var(--margin-small);
  }
}
</style>