<template>
    <section id="tools" >
        <SectionTitle title="实用工具"></SectionTitle>
        <div class="layout-flex-wrap">
            <Card v-for="d in tools" :data="d"></Card>
        </div>
        <SectionTitle title="教程资料"></SectionTitle>
        <div class="layout-flex-wrap">
            <Card v-for="l in learningResources" :data="l"></Card>
        </div>
        <SectionTitle title="素材资源"></SectionTitle>
        <div class="layout-flex-wrap">
            <Card v-for="d in designResources" :data="d"></Card>
        </div>
    </section>
</template>
<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
import Card from "@/components/Card/Card.vue";
import { tools,learningResources,designResources } from "./data.js";

</script>
<style scoped>
.layout-flex-wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(1*var(--margin-large));
}
</style>/