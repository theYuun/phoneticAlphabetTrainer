<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: String,
    placeholder: String,
    value: String,
    model: String,
    className: String,
});
const emits = defineEmits([]);

</script>

<template>
<input v-if="!props.model" :class="props.className" :placeholder="props.placeholder" :value="props.value">
<input v-if="props.model" :class="props.className" :placeholder="props.placeholder" v-model="props.model">
</template>

<style>
</style>