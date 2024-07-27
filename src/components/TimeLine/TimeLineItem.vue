<template>
    <li>
        <div class="decoration">
            <div class="ico">◯</div><!--○-->
            <div class="line"></div>
        </div>
        <div class="intro">
            <h3>{{ data.start_time }} - {{ data.end_time }}</h3>
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
            <slot name="imgs">
            </slot>
        </div>
    </li>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
defineProps(['data']);

</script>
<style lang="scss" scoped>

li{
    margin: var(--margin-default) 0;
}
// @media screen and (max-width: 768px) {
    li:nth-child(7n+1){
        background-image: url(./imgs/1.png);
        .ico{
            color: var(--yellow5);
            text-shadow: 0px 0px 5px var(--yellow5);
        }
        .line{
            background: linear-gradient( to bottom, var(--yellow5), transparent) ;
        }
        .intro h2{
            color: var(--yellow5);
        }
    }
    li:nth-child(7n+2){
        background-image: url(./imgs/2.png);
        .ico{
            color: var(--red5);
            text-shadow: 0px 0px 5px var(--pink5);
        }
        .line{
            background: linear-gradient( to bottom, var(--red5), transparent) ;
        }
        .intro h2{
            color: var(--red5);
        }
    }
    li:nth-child(7n+3){
        background-image: url(./imgs/3.png);
        .ico{
            color: var(--orange5);
            text-shadow: 0px 0px 5px var(--yellow5);
        }
        .line{
            background: linear-gradient( to bottom, var(--orange5), transparent) ;
        }
        .intro h2{
            color: var(--orange5);
        }
    }
    li:nth-child(7n+4){
        background-image: url(./imgs/4.png);
        .ico{
            color: var(--green5);
            text-shadow: 0px 0px 5px var(--green5);
        }
        .line{
            background: linear-gradient( to bottom, var(--green5), transparent) ;
        }
        .intro h2{
            color:var(--green5);
        }
    }
    li:nth-child(7n+5){
        background-image: url(./imgs/5.png);
        .ico{
            color: var(--blue5);
            text-shadow: 0px 0px 5px var(--cyan5);
        }
        .line{
            background: linear-gradient( to bottom, var(--blue5), transparent) ;
        }
        .intro h2{
            color: var(--blue5);
        }
    }
    li:nth-child(7n+6){
        background-image: url(./imgs/9.png);
        .ico{
            color: var(--purple5);
            text-shadow: 0px 0px 5px var(--purple5);
        }
        .line{
            background: linear-gradient( to bottom, var(--purple5), transparent) ;
        }
        .intro h2{
            color: var(--purple5);
        }
    }
    li:nth-child(7n+7){
        background-image: url(./imgs/8.png);
        .ico{
            color: var(--cyan5);
            text-shadow: 0px 0px 5px var(--cyan5);
        }
        .line{
            background: linear-gradient( to bottom, var(--cyan5), transparent) ;
        }
        .intro h2{
            color: var(--cyan5);
        }
    }
    li{
        height: var(--height-huge);
        display: flex;
        border-radius: 0 var(--radius-default) var(--radius-default) 0;
        background: top right / contain no-repeat;
        background-repeat: no-repeat;
        margin: var(--margin-default);
        .decoration{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 var(--margin-small);
            .ico{
                line-height:calc(var(font-default)*1.5)
            }
            .line{
                width: 2px;
                height: 100%;
                margin-top: var(--padding-default);
                border-radius: var(--radius-small);
            }
        }
        .intro{
            // background-color: yellow;
            h3{
                color: var(--gray10);
                font-size: var(--font-small);
                line-height: calc(1.5*var(--font-default));
            }
            h2{ 
                margin: var(--margin-small) 0;
                font-size: var(--font-huge);
                font-weight: 600; 
            }
        }
    }
    
    .dark li{
        .intro, p{
            h3{
                color: var(--gray4);
            }
        }
    }

// }
// @media screen and (min-width: 768px) {


// }

</style>