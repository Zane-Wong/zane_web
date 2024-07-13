<template>
    <h1 :id="$attrs.title" >{{$attrs.title}}</h1>
    <div class="under-line"></div>
</template>
<script>
export default{
    name:'SectionTitle',
    props:['tilte'],
    // data(){
    //     return {
    //         title: this.title
    //     }
    // },
    created() {
    //  console.log(this.$attrs.title);   
    }
}
</script>
<style lang="scss" scoped>
h1{
    margin-top: var(--height-large);
    font-size: calc(2*var(--font-default));
    font-weight: 700;
    text-align: center;
    margin-bottom: var(--margin-large);
}
.under-line{
    width: calc(2*var(--font-max));
    height: var(--border-bough);
    border-radius: var(--radius-small);
    background-color: var(--blue5);
    margin: 0 auto;
    margin-bottom: var(--height-default);
}
</style>