<template>
    <div class="cube-container"  :style="{'--exp': exp+'%','--start-color': startBgc, '--end-color': endBgc}">
        <div class="cube" >
            <div>
                {{ data.name }}
            </div>
            <div>
                <!-- <span :style="{'--level-img': '../assets/img/'+level.label+'-大号.png'}">{{ level.label }}</span> -->
                <span :style="{backgroundImage: 'url(' +'img/'+level.label+'-大号.png)'}"></span><!-- {{ level.label }} -->
            </div>
            <div :style="{backgroundImage: 'url(' + data.img + ')'}"></div>
            <div></div>
            <!-- <div>5</div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps(['data'])
const exp = props.data.exp>=0&&props.data.exp<=100? props.data.exp : 0;
let span = 100/(1+2+3+4+5+6+7+8); // 100/(8*(1+8)/2)
const LevelMap={
    0:{
        label:'见习',
        startColor:"rgba(254, 224, 130, 0.7)",
        endColor:"rgba(13, 186, 14, 0.8)"
    },
    1:{
        label:'资深',
        startColor:"rgba(13, 186, 14, 0.7)",
        endColor:"rgba(2, 197, 172, 0.8)"
    },
    2:{
        label:'精英',
        startColor:"rgba(2, 197, 172, 0.7)",
        endColor:"rgba(9, 142, 255, 0.8)"
    },
    3:{
        label:'宗师',
        startColor:"rgba(9, 142, 255, 0.7)",
        endColor:"rgba(227, 52, 145, 0.8)"
    },
    4:{
        label:'超凡',
        startColor:"rgba(227, 52, 145, 0.7)",
        endColor:"rgba(244, 37, 54, 0.8)"
    },
    5:{
        label:'巅峰',
        startColor:"rgba(244, 37, 54, 0.7)",
        endColor:"rgba(156, 39, 176, 0.8)"
    },
    6:{
        label:'神话',
        startColor:"rgba(156, 39, 176, .7) ",
        endColor:"rgba(255, 34, 109, .8)"
    }
}
let level:any;
switch(Math.floor(exp/span)){
    case 0:
    case 1:
    case 2:
    case 3:
        level = LevelMap[0];
        break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:  
        level = LevelMap[1];
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        level = LevelMap[2];
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
        level = LevelMap[3];
        break;
    case 26: 
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
        level = LevelMap[4];
        break;
    case 33:
    case 34:
    case 35:
        level = LevelMap[5];
        break;
    default:
        level = LevelMap[6];
        break;
}
let startBgc = computed(()=>{
   return level.startColor;
})
let endBgc = computed(()=>{
    return level.endColor;
})
</script>
<style lang="scss" scoped>
@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

@keyframes perChange {
  0% {
    --per: 0%;
  }
  90%,
  to {
    --per: var(--exp);
  }
}


.cube-container{
    position: relative;
    // background-color: pink;
    display: inline-block;
    height: var(--height-large);
    width: var(--width-large);
    margin: var(--margin-small) var(--margin-default);
    .cube{
        position: absolute;
        // background-color: blue; 
        top: 50%;
        left: 50%;
        width: var(--width-large);
        height: var(--height-large);
        transform-style: preserve-3d;
        transform: translate(-50%, -50%) rotateX(-20deg) rotateY(20deg); 
        div{
            border: none;
            position: absolute;
            // background-color: pink;
            width: 100%;
            height: 100%;
            // background: linear-gradient(to top, rgba(156, 39, 176, .3), rgba(255, 34, 109, .8), rgba(210, 210, 210, .6), rgba(245, 245, 245, .6));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        div:nth-child(1){ //前
            transform: translateZ(calc(0.5*var(--width-default)));
            background: rgba(205,205,205,.8);
        }
        div:nth-child(2){ //上
            background: rgba(255, 255, 255,.8);
            transform: rotateX(90deg) translateZ(calc(0.5*var(--height-large)));
            transform-style: preserve-3d;
            
            span{
                width: 50%;
                height: 50%;
                font-size: var(--font-small);
                display: block;
                text-align: center;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                opacity: 0;
                // background: url(var(--level-img)) center/contain no-repeat;
                transition: all 800ms ease-in-out;
                transform: rotateX(-90deg) rotateY(-20deg) translateY(calc(0.5*var(--height-small)));//translateZ(calc(1*var(--height-large)))
            }
        }
        div:nth-child(3){ //左
            width: var(--width-default);
            transform: rotateY(-90deg) translateZ(calc(0.5*var(--width-default)));
            background-color: rgba(150,150,150,.8);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
        div:nth-child(4){ //下
            transform: rotateX(90deg) translateZ(calc(-0.5 *var(--height-large)));
            background:rgba(150, 150, 150, 0.1);
            // border-radius: 40%;
            // filter: drop-shadow(0 0 100px rgba(40,40,40,.3))
        }
        // div:nth-child(5){ //后
        //     background:pink;
        //     transform: translateZ(calc(-0.5*var(--height-large)));
        // }
    }
    // .cube::after{
    //     content:"4";
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    // }
    .cube:hover{
        div:nth-child(1)
        // , div:nth-child(3)
        // , div:nth-child(5)
        {
            // background: linear-gradient(0deg, rgba(156, 39, 176, .3), rgba(255, 34, 109, .8) var(--per), rgba(255, 255, 255, .2) var(--per), rgba(255, 255, 255, 0.1));
            // filter: drop-shadow(0 0 10px rgba(255,34,109,.8));
            background: linear-gradient(0deg, var(--start-color), var(--end-color) var(--per), rgba(255, 255, 255, .2) var(--per), rgba(205, 205, 205, 0.6));
            // filter: drop-shadow(0 0 10px rgba(255,34,109,.8));
            animation: perChange 2s forwards;    
        }
        div:nth-child(2){
            span{
                opacity: 1;
                transform: rotateX(-90deg) rotateY(-20deg) translateY(calc(-0.5*var(--height-default)));
            }
        }
    }
}

.dark .cube-container{
    .cube{
        // div{
            // background: linear-gradient(to top,rgba(40,40,40), rgba(90,90,90))
        // }
        div:nth-child(1){
            background: rgba(60,60,60,0.8);
        }
        div:nth-child(2){ //上
            background: rgba(90, 90, 90, .8);
            transform: rotateX(90deg) translateZ(calc(0.5*var(--height-large)));
        }
        div:nth-child(3){
            background-color: rgba(30,30,30,.8);
        }
        div:nth-child(4){
            background: rgba(30,30,30,.1);
        }
    }
    .cube:hover{
        div:nth-child(1)//, div:nth-child(3)
       {
            //background: linear-gradient(0deg, rgba(156, 39, 176, .8), rgba(255, 34, 109, .8) var(--per), rgba(100, 100, 100, .2) var(--per), rgba(65, 65, 65,.6));
            // animation: perChange 2s forwards;    
            background: linear-gradient(0deg, var(--start-color), var(--end-color) var(--per), rgba(100, 100, 100, .2) var(--per), rgba(55, 55, 55,.6));
            animation: perChange 2s forwards;   
        }
    }
    // .cube::after{
    //     background-color: rgba(30,30,30,0.1);
    // }
}
</style>