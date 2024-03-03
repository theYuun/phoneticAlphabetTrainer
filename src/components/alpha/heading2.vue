<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: String,
});
const emits = defineEmits([]);

</script>

<template>
<h2 v-if="props.text" class="heading2">{{ props.text }}</h2>
<h2 v-if="!props.text" class="heading2"><slot></slot></h2>
</template>

<style>
    .heading2 {
        color: black;
    }
    .heading2:hover {
        color: black;
    }
</style>