<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: String,
    for: String,
    className: String,
    id: String,
});
const emits = defineEmits(['pressed']);

</script>

<template>
<label
    v-if="props.text"
    :class="props.className"
    :for="props.for"
    :id="props.id"
    @click="$emit('pressed')">
    {{ props.text }}
</label>
<label
    v-if="!props.text"
    :class="props.className"
    :for="props.for"
    :id="props.id"
    @click="$emit('pressed')">
    <slot></slot>
</label>
</template>

<style>
</style>