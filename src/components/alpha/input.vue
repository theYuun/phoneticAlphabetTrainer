<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    type: String,
    className: String,
    id: String,
    value: String,
    textModel: Object,
    checkModel: Boolean,
    placeholder: String,
});
const emits = defineEmits(['pressed', 'changed', 'textChanged']);

const textInput = ref('')

</script>

<template>
    <input
        v-if="props.type === 'text'"
        :class="props.className"
        :id="props.id"
        type="text"
        v-model="textInput"
        @change="$emit('textChanged', textInput)"
        :placeholder="props.placeholder" >
    <input
        v-if="props.type === 'button'"
        :class="props.className"
        :id="props.id"
        type="button"
        :value="props.value"
        @click="$emit('pressed')">
    <input
        v-if="props.type === 'checkbox'"
        :class="props.className"
        :id="props.id"
        type="checkbox"
        v-model="props.checkModel"
        @change="$emit('changed')">
    <div
        v-if="props.type === 'checkbox'"
        :class="`${props.className}Fake`"
        :id="`${props.id}Fake`">
        <div
            v-if="props.type === 'checkbox' && props.checkModel"
            :class="`${props.className}FakeFill`"
            :id="`${props.id}FakeFill`">
        </div>
    </div>
    <slot></slot>
</template>

<style>
</style>