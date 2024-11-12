<template>
<dl>
    <div v-for="(a,i) in about">
        <!-- :class="{copyright : i==0}" -->
        <dt style="user-select: none;"> {{ a.title }}</dt>
        <dd v-for="d in a.data" >
            <!-- <Link :data="d" :class="{copyright: type!=='link'}"></Link> -->
            <!-- {{ d.label }} {{ d.value }} -->
                <Link :data="d" :class="d.type"></Link>
        </dd>
    </div>
</dl>

</template>
<script>
import { about } from './data';
import Link from '../Link.vue';
export default{
    name:'Foot',
    components:{
        Link
    },
    data(){
        return {
            about
        }
    }
}
</script>
<style lang="scss" scoped>
dl{
    box-sizing: border-box;
    padding: var(--padding-large);
    margin: var(--margin-large);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div{
         //flex:1;
        margin: calc(2*var(--margin-large)) calc(2.5*var(--margin-large));
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

    }
    .link, .text, .watermark{
        color: var(--gray6);
    }
    .link:hover{
        color: var(--green3);
    }
    .text{
        cursor: text;
    }
    .watermark{
        user-select: none;
    }
}
@media screen and (max-width: 1220px){
  dl{
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    div{
      //display: none;
      //width: 500px;
      margin-top: var(--margin-default);
      margin-bottom: var(--margin-large);
    }
  }
}
</style>