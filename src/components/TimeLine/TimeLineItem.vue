<template>
    <li>
        <div class="decoration">
            <div class="ico">⚪</div>
            <div class="line"></div>
        </div>
        <div class="intro">
            <h3>{{ new Date().toLocaleDateString() }} - {{ new Date().toLocaleDateString() }}</h3>
            <h2>事件</h2>
            <p>描述</p>
            <slot name="imgs"></slot>
        </div>
    </li>
</template>
<script setup>
console.log("TimeLineItem");
</script>
<style lang="scss" scoped>


@media screen and (max-width: 768px) {
    li{
        background-image: url(./imgs/1.png);
    }
    li:nth-child(2n+1){
        background-color: url(./imgs/2.png);
    }
    li:nth-child(3n+2){
        background-image: url(./imgs/3.png);
    }
    li:nth-child(4n+3){
        background-image: url(./imgs/4.png);
    }
    li:nth-child(5n+4){
        background-image: url(./imgs/5.png);
    }
    li:nth-child(6n+5){
        background-image: url(./imgs/6.png);
    }
    li{
        background: top right / contain no-repeat;
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
                border: 1px solid var(--blue5);
                height: 100%;
                margin: var(--padding-small) 0;
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