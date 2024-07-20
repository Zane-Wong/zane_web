<template>
    <div class="slogon-area">
        <h1>{{ hello }}</h1>
        <p>{{ mySlogon }}</p>
        <h2 v-if="slogonSuffix">{{ slogonSuffix }}</h2>
    </div>
</template>
<script>
export default{
    data(){
        return {
            slogonPrefix: '  Hello!',//AI时代
            mySlogon: '这里是 Zane · WANG ZHUO 的小站',
            slogonSuffix: '用技术实现创意!',//拥抱AI, 探索未来!
            hello: '',
            timer: null,
            count: 0
        }
    },
    methods:{
        typewriter(){
            this.count++;
            let i = this.count % this.slogonPrefix.length;
            this.hello = this.slogonPrefix.substring(0,i+1)
        },
    },
    mounted(){
        this.timer = setInterval(this.typewriter,400);
    },
    unmounted(){
        clearInterval(this.timer);
    }
}
</script>
<style lang="scss">
.slogon-area {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 10px;
    font-family: 'SmileySans' ;
    text-align: center;
    user-select: none;
    h1 {
        font-size: calc(var(--font-default)*6);
        font-weight: 600;
        background: linear-gradient(to left, var(--blue3), var(--green3));
        -webkit-background-clip: text;
        color: transparent;
        margin-top: var(--height-default);
    }
    @keyframes blink {
        from, to {
            color: var(--green3);
        }
        50% {
            color: var(--blue5);
        }
    }
    h1::after {
        content:"_";
        // -webkit-background-clip: text;
        font-size: 50%;
        animation: blink 600ms infinite;
    }
    p {
        padding: 0 calc(var(--font-default)*5);
        font-size:var(--font-large);
    }
    h2 {
        font-size: calc(var(--font-default)*6);
        letter-spacing: var(--font-large);
        background: linear-gradient(to right, var(--blue3), var(--orange3));
        -webkit-background-clip: text;
        color: transparent;
        margin-top: var(--height-default);
    }
}
</style>