<template>
    <section id="projects">
        <SectionTitle title="项目"></SectionTitle>
        <ul class="card-list">
            <Card v-for="project in projects" class="m-t m-b m-l m-r" :data="project"></Card>
        </ul>
    </section>
</template>
<script setup>
import { projects } from '../../components/Card/data';
import Card from '../../components/Card/Card.vue';
import SectionTitle from '../../components/SectionTitle.vue';
</script>
<style lang="scss">
.card-list{
    // background-color: gray; 
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>