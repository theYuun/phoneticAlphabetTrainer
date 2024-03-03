<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: String,
});
const emits = defineEmits([]);

</script>

<template>
<h3 v-if="props.text" class="heading3">{{ props.text }}</h3>
<h3 v-if="!props.text" class="heading3"><slot></slot></h3>
</template>

<style>
    .heading3 {
        color: black;
    }
    .heading3:hover {
        color: black;
    }
</style>