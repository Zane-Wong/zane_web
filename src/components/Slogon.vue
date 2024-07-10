<template>
    <div class="slogon-area">
        <h1>{{ slogonPrefix }}</h1>
        <p>{{ mySlogon }}</p>
        <h2 v-if="slogonSuffix">{{ slogonSuffix }}</h2>
    </div>
</template>
<script>
export default{
    data(){
        return {
            slogonPrefix: 'Hello!',//AI时代
            mySlogon: '这里是 Zane · WANG ZHUO 的小站',
            slogonSuffix: '拥抱AI, 探索未来!'//拥抱AI, 探索未来! 打不过, 就加入!
        }
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
    h1 {
        font-size: calc(var(--font-default)*6);
        font-weight: 600;
        background: linear-gradient(to left, var(--blue3), var(--green3));
        -webkit-background-clip: text;
        color: transparent;
    }
    p {
        padding: 0 calc(var(--font-default)*5);
        font-size:var(--font-large);
    }
    h2 {
        font-size: calc(var(--font-default)*6);
        letter-spacing: 0.2;
        background: linear-gradient(to right, var(--blue3), var(--orange3));
        -webkit-background-clip: text;
        color: transparent;
    }
}
</style>