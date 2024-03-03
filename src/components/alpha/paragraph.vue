<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: String,
    className: String,
});
const emits = defineEmits([]);

</script>

<template>
<p v-if="props.text" :class="props.className">{{ props.text }}</p>
<p v-if="!props.text" :class="props.className" ><slot></slot></p>
</template>

<style>

</style>