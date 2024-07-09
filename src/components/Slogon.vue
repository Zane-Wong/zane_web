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
            mySlogon: '这里是 孤影风晨 · WANG ZHUO 的小站',
            slogonSuffix: ''//拥抱AI, 探索未来! 打不过, 就加入!
        }
    }
}
</script>
<style lang="scss">
.slogon-area {
    height: 100vh;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 10px;
    h1 {
        // display: flex;
        // max-width: calc(var(--font-default)*30);
        font-size: calc(var(--font-default)*5);
        // justify-content: center;
        padding: calc(var(--height-max)*2) calc(var(--font-large)*4);
        font-weight: 500;
    }
    p {
        padding: 0 calc(var(--font-default)*5);
        font-size:var(--font-small);
    }
    h2 {
        // max-width: calc(var(--font-default)*30);
        font-size: calc(var(--font-default)*10);
        // justify-content: center;
        padding-top: calc(var(--height-max)*2) ;
        padding-left: var(--height-max);
        letter-spacing: 0.2;
        
        font-weight: 500;
    }
}
</style>