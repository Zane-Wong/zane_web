<template>
    <li>
        <div class="decoration">
            <div class="ico">◯</div><!-- ○ -->
            <div class="line"></div>
        </div>
        <div class="intro">
            <h3>{{ data.start_time }} - {{ data.end_time }}</h3>
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
            <slot name="img">
            </slot>
        </div>
    </li>
</template>
<script lang="ts" setup>
import { defineProps ,PropType } from "vue";
defineProps(['data'])
</script>
<style lang="scss" scoped>
.decoration{
    background-color: green;
}
li{
    margin: var(--margin-default) 0;
}
@media screen and (max-width: 768px) {
    li:nth-child(n){
        background-image: url(./imgs/1.png);
        .intro{
            color: var(--blue5);
        }
    }
    li:nth-child(2n+1){
        background-color: url(./imgs/2.png);
        .intro{
            color: var(--orange5);
        }
    }
    li:nth-child(3n+2){
        background-image: url(./imgs/3.png);
        .intro{
            color: var(--green5);
        }
    }
    li:nth-child(4n+3){
        background-image: url(./imgs/4.png);
        .decoration .line{
            border-color: var(--red5);
        }
        .intro{
            
            color: var(--red5);
        }
    }
    li:nth-child(5n+4){
        background-image: url(./imgs/5.png);
        .decoration .line{
            border-color: var(--purple5);
        }
        .intro{
            color: var(--purple5);
        }
    }
    li:nth-child(6n+5){
        background-image: url(./imgs/6.png);
    }
    li{
        height: var(--height-huge);
        display: flex;
        /* border-radius: var(--radius-default); */
        .decoration{
            // background-color: pink;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 var(--margin-small);
            .line{
                border: 1px solid;
                height: 100%;
                margin-top: var(--padding-default);
            }
        }
        .intro{
            // background-color: yellow;
            h3{
                color: var(--gray10);
            }
            h2{ 
                // background-color: green;
                margin: var(--margin-small) 0;
                font-size: var(--font-large);
                font-weight: 600; 

            }
        }
    }
    
    .dark li{
        .decoration{
            .line{
                border-color: var(--blue3);
            }
        }
        .intro{
            h3{
                color: var(--gray8);
            }
        }
    }

}
@media screen and (min-width: 768px) {
    /* li{
        background-color: blue;
    } */

}

</style>