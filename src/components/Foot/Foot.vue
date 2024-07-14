<template>
<dl>
    <div v-for="(a,i) in about">
        <dt> {{ a.title }}</dt>
        <dd v-for="d in a.data" :class="i===0?'copyright':''">{{ d.label }} {{ d.value }}</dd>
    </div>
</dl>

</template>
<script>
import { about } from './data';
console.log(about);
export default{
    name:'Foot',
    data(){
        return {
            about
        }
    }
}
</script>
<style lang="scss" scoped>
dl{
    // margin: var(--margin-large);
    display: flex;
    justify-content: center;
    // flex-wrap: nowrap;
    div{
        // flex:1;
        margin: calc(1*var(--margin-max)) var(--margin-large);
        dt{
            font-weight: 600;
            line-height: calc(2*var(--font-max));
            white-space: nowrap;
        }
        dd{
            line-height: var(--font-max);
            font-size: var(--font-small);
            white-space: nowrap;
        }
        .copyright{
            color:var(--gray6);
            user-select: none;
        }
    }
}
</style>