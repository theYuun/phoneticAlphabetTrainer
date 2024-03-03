<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: String,
});
const emits = defineEmits([]);

</script>

<template>
<h1 v-if="props.text" class="heading1">{{ props.text }}</h1>
<h1 v-if="!props.text" class="heading1"><slot></slot></h1>
</template>

<style>
    .heading1 {
        color: black;
    }
    .heading1:hover {
        color: black;
    }
</style>