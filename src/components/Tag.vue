<script setup lang="ts">

</script>
<template>
    <div class="tag-box">
        <span>
           <slot></slot> 
        </span>
    </div>
</template>

<style scoped>
.tag-box{
    display: inline-flex;
    border: var(--border-narrow) solid var(--blue7);
    color: var(--blue7);
    height: calc(1.3*var(--font-default));
    vertical-align: middle;
    align-items: center;
    padding: 0 var(--padding-large);
    border-radius: var(--radius-small);
    span{
        font-size: var(--font-small);
    }
    /* line-height: 1; */
    /* margin: var(--margin-small) var(--margin-small); */
    transition: all 300ms ease-in-out;
    flex-wrap: nowrap;
}
.dark .tag-box{
    color: var(--blue3);
    border-color: var(--blue3);
}
/* .dark .tag{
    color: var(--blue3);
}
.dark .tag :hover{
    background-color: var(--blue5);
} */
</style>