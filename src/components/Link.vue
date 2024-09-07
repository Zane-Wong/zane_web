<template>
    <a v-if="data.type==`link`" :href="data.value" target="_blank">{{ data.label }}</a>
    <span v-else> {{ data.label }} {{ data.value }} </span>
</template>
<script lang="ts" setup>
defineProps(["data"]);
</script>