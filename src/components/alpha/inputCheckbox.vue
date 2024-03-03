<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    value: String,
});
const emits = defineEmits(['pressed']);

</script>

<template>
<input class="inputButton" :value="props.value">
</template>

<style scoped>
    .inputButton {
        color: black;
    }
    .inputButton:hover {
        color: gray;
    }
</style>