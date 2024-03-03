<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    className: String,
    id: String,
})
const emits = defineEmits(['pressed'])

</script>

<template>
<div :class="props.className" :id="props.id" @click="$emit('pressed')">
    <slot></slot>
</div>
</template>

<style>
</style>