<template>
    <div class="nav">
        <div class="left">
            <div class="navItem logo">
                <img src="../../assets/img/avatar.png" alt="zane">
            </div>
            <ul>
                <li class="navItem" v-for="navItem in navList">
                    <a :href="navItem.url">{{ navItem.title }}</a>
                </li>
            </ul>
        </div>
        <div class="right">
            <DarkSwitch></DarkSwitch>
        </div>
    </div>
</template>

<script setup lang="ts">
import {navList} from './data';
import DarkSwitch from '../DarkSwitch.vue';
</script>

<style lang="scss" scoped>
.nav{
    background-color: rgba(0,0,0,0.1); 
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 100;
    width: 100%;
    // height: var(--height-large);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left{
        margin-left: var(--height-max);
        display: flex;
        align-items: center;
        li{
            display: inline-block;
            a{
                padding: var(--padding-small) var(--padding-default);
                // background-color: pink;
                font-size: larger;line-height: 1;
                border-radius: var(--radius-small);
                transition: all 0.3s;
                backdrop-filter: blur(5px);
            }

            a:hover{
                color: white;
                background-color: rgba(66, 66, 66, 0.605); 
            }
        }
    }
    .right{
        margin-right: var(--height-max);
    }
}
.navItem{
    margin: var(--margin-small) var(--margin-default) var(--margin-small) 0;
}
.logo{
    border-radius: 50%;
    overflow: hidden;
    height: var(--height-default);
    min-width: var(--height-default);
}
.logo img{
    height: 100%;
    height: 100%;
}
/* .dark .nav{
    background-color: var(--gray14);
} */
</style>
