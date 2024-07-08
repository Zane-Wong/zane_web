<template>
    <div class="nav">
        <div class="left">
            <div class="nav-item logo">
                <img src="../../assets/img/avatar.png" alt="zane">
            </div>
            <ul>
                <li class="nav-item" v-for="navItem in navList">
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
.dark .nav{
    background-color: rgba(0,0,0,0.1); 
    .left {
        li {
            // 黑底白字
            a:hover {
                color: white;
                background-color: rgba(255,255,255,0.15);
            }
        }
    }

}
.nav {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left {
        margin-left: var(--margin-large);
        display: flex;
        align-items: center;
        .nav-item {
            margin: var(--margin-default) var(--margin-default);
        }
        .logo {
            border-radius: 50%;
            overflow: hidden;
            height: var(--height-large);
            min-width: var(--height-large);
            max-width: var(--height-large);
            img {
                height: 100%;
                height: 100%;
            }
        }

        li {
            display: inline-flex;
            a {
                // color: var(--gray2);
                border-radius: var(--radius-small);
                font-size: var(--font-large);
                line-height: var(--font-large);
                padding: var(--padding-default) var(--padding-max) var(--padding-large);
                font-weight: 500;
            }
            a:hover {
                // 白底黑字
                backdrop-filter: blur(10px);
                color: black;
                background-color: rgba(5,5,5,0.15);
            }
        }

    }
    .right {
        margin-right: var(--margin-large);
    }
}
</style>
