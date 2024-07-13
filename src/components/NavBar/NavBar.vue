<template>
    <div class="nav">
        <div class="left">
            <div class="nav-item logo">
                <img src="../../assets/img/avatar.png" alt="zane">
            </div>
        </div>
        <div class="right">
            <ul>
                <li class="nav-item" v-for="navItem in navList">
                    <a :href="navItem.url">
                        {{ navItem.title }}
                        <div class="bottom-line"></div>
                    </a>
                </li>
            </ul>
            <DarkSwitch class="nav-item"></DarkSwitch>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navList } from './data';
import DarkSwitch from '../DarkSwitch.vue';
</script>

<style lang="scss" scoped>
.dark .nav{
    background-color: rgba(0,0,0,0.2);
    .right {
        li {
            // 黑底白字
            a:hover {
                color: white;
                background-color: rgba(255,255,255,0.2);
            }
        }
    }

}
.nav {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(var(--blur-large));
    -webkit-backdrop-filter: blur(var(--blur-large));
    position: fixed;
    z-index: 100;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left {
        // margin-left: var(--margin-large);
        display: flex;
        align-items: center;
        .logo {
            border-radius: 45%;
            overflow: hidden;
            height: var(--height-default);
            min-width: var(--height-default);
            max-width: var(--height-default);
            img {
                height: 100%;
                width: 100%;
            }
        }

    }
    .left::after {
        content: "Zane";
        font-size: calc(var(--font-small)*2);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background: linear-gradient(to right, var(--green5), var(--blue5));
        -webkit-background-clip: text;
        color: transparent;
    }
    .right {
        // margin-right: var(--margin-large);
        display: flex;
        align-items: center;
        li {
            display: inline-flex;
            a {
                border-radius: var(--radius-small);
                font-size: var(--font-large);
                line-height: var(--font-large);
                padding: var(--padding-default) var(--padding-max);
                font-weight: 500;
                .bottom-line {
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    margin-top: var(--margin-small);
                    background-color: var(--green5);
                    transition: all 200ms ease-in-out;
                }
            }
            a:hover {
                // 白底黑字
                backdrop-filter: blur(var(--blur-large));
                color: black;
                background-color: rgba(0,0,0,0.21);
                .bottom-line {
                    width: 100%;
                }
            }
        }

    }
}
.nav-item {
    margin: var(--margin-default) var(--margin-small);
}
</style>
