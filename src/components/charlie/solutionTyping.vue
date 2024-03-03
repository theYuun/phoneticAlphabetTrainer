<script setup>
import { defineEmits, defineProps, onMounted, onUnmounted, ref, watch } from 'vue';

const emits = defineEmits(['checkAnswer'])
const props = defineProps({
  function: Function,
})

const input = ref('');
function CheckAnswer() {
  emits('checkAnswer', input.value);
}
/*
const functionFired = ref('');
watch(() => {
  if(props.function)
    functionFired.value = props.function
  if(functionFired.value.length > 0)
  {
    console.log('function: ', props.function);
    functions[props.function]();
    functionFired.value = '';
  }
})
*/
onMounted(() => {
  document.addEventListener('clearInput', functions.clearInput)
})
onUnmounted(() => {
  document.removeEventListener('clearInput', functions.clearInput)
})

const functions = {
  clearInput: () => {
    console.log('clearInput');
    console.log(input.value);
    input.value = '';
    console.log(input.value);
  }
}

</script>

<template>
  <div class="typingContainer">
    <input
      class="input"
      v-model="input"
      placeholder="ANSWER" />
    <input
      class="checkAnswer"
      type="button"
      value="CHECK ANSWER"
      @click="CheckAnswer();" />
  </div>
</template>

<style scoped>
.typingContainer {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.input, .checkAnswer {
  height: 60px;
  border: 2px solid #383;
  border-radius: 20px;
  background-color: #5a5;
  box-shadow:
    inset 0 0 10px 5px #0002,
    0 0 10px 0 #0005;
  text-align: center;
}
.input::placeholder {
  color: #050;
}
.input:hover {
  background-color: #6b6;
}
</style>