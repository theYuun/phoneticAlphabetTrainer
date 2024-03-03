<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    className: String,
    id: String,
    text: String,
});
const emits = defineEmits(['clicked']);

</script>

<template>
<span
    v-if="props.text"
    :class="props.className"
    :id="props.id"
    @clicked="$emit('clicked')">
    {{ props.text }}
</span>
<span
    v-if="!props.text"
    :class="props.className"
    :id="props.id"
    @clicked="$emit('clicked')">
    <slot></slot>
</span>
</template>

<style>
</style>