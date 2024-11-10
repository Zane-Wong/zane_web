<template>
    <section>
        <SectionTitle title="博客"/>
        <h3 v-for="b in blogs" style="text-align: center">
          <Link :data="b"></Link>
        </h3><!--敬请期待~-->
    </section>
</template>
<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
import Link from '@/components/Link.vue';
const blogs=[
  {
    label:'CSDN🔗',
    value: "https://blog.csdn.net/m0_46332820",
    type:'link'
  },
  {
    label:'更多内容，',
    value: "敬请期待~",
    type:''
  }
]
</script>