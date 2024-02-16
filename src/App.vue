<script setup>
import { reactive, ref } from 'vue';
import data from './assets/data';

const singleValue = ref(false);
const minMax = [3, 7];
const combo = () => {
  let question = '';
  let range = singleValue.value ? 1 : (minMax[0] + Math.floor(Math.random() * minMax[1]));
  for(let i = 0; i < range; i++)
  {
    /*
    */
    //console.log('alphabet key: ', Object.keys(data.alphabet)[Math.floor(Math.random() * Object.keys(data.alphabet).length)]);
    const main = Object.keys(Math.random() < 0.7 ? data.alphabet : data.numbers);
    //console.log('main: ', main);
    const sub = main[Math.floor(Math.random() * main.length)];
    //const sub = Object.keys(data.numbers)[Math.floor(Math.random() * Object.keys(data.numbers).length)];
    //console.log('sub: ', sub);
    question += sub.toUpperCase();
  }
  //console.log(question);
  return question;
}

function GetNewSingle() {
  singleValue.value = true;
  GetNewQuestion();
}

function GetNewCombo() {
  singleValue.value = false;
  GetNewQuestion();
}

const selectedSequence = ref(combo());
function GetNewQuestion() {
  input.value = '';
  incorrectValues.value = [];
  isCorrect.value = false;
  answered.value = false;
  selectedSequence.value = combo();
  //console.log('new combo: ', selectedSequence.value);
}

const input = ref('');
const incorrectValues = ref([]);
const isCorrect = ref(true);
const answered = ref(false);
function CheckAnswer() {
  incorrectValues.value = [];
  answered.value = true;
  const answer = input.value.toLowerCase().split(' ');
  const question = selectedSequence.value.split('');
  for (let i =  0; i < question.length; i++) {
    //console.log('question: ', question[i], ' input: ', input.value, ' answer: ', answer[i], ' answer array: ', answer, ' reference: ', Object.values(data.numbers[question[i]]).join(''))
    if(!isNaN(Number(question[i]))) {
      console.log('answer: ', answer[i], ' reference: ', Object.values(data.numbers[question[i]]).join(''))
      if(answer[i] !== Object.values(data.numbers[question[i]]).join('')) {
        incorrectValues.value.push(i);
        console.log('wrong number: ', incorrectValues.value)
      }
    }
    else {
      console.log('answer: ', answer[i])
      console.log(' 0: ', Object.values(data))
      console.log(' 1: ', Object.values(data.alphabet))
      console.log(' 2: ', question[i])
      console.log(' reference: ', Object.values(data.alphabet[question[i].toLowerCase()]).join(''))
      console.log(' 4: ', data.alphabet[question[i].toLowerCase()])
      if(answer[i] !== Object.values(data.alphabet[question[i].toLowerCase()]).join(''))
        incorrectValues.value.push(i)
        console.log('wrong letter: ', incorrectValues.value)
    }
  }
  // error about is that the match is happening on only the first letter of the data.numbers/data.alphabet values
  /*
  /*
  for (let i = 0; i < question.length; i++) {
    if(typeof question[i] === 'string' && !isNaN(question[i])) {
      console.log('answer: ', answer[i], ' reference: ', Object.entries(data.numbers[question[i]]))
      
      if(answer[i] !== data.numbers[question[i]]) {
        incorrectValues.value.push(i);
        console.log(i);
      }
      
    }
    else if(typeof question[i] === 'string' && isNaN(question[i])) {
      console.log('answer: ', answer[i], ' reference: ', Object.entries(data.alphabet[question[i]]))
      
      if(answer[i] !== data.alphabet[question[i]]) {
        incorrectValues.value.push(i);
        console.log(i);
      }
      
    }
  }
  */
  isCorrect.value = incorrectValues.value.length > 0 ? false : true;
  console.log(isCorrect.value);
}

</script>

<template>
  <!--
    Add function to randomly select a letter from the phonetic alphabet and prompts the correct reference
    Add another function to display a letter and number combo with prompt to fill in entire correct sequence
  -->
  <div>
    <span>{{ selectedSequence }}</span>
    <!--

      @input="console.log(input)"
    -->
    <input
      v-model="input"
      placeholder="phonetic word"/>
    <input type="button" value="check answer" @click="CheckAnswer();" />
    <input type="button" value="select single value" @click="GetNewSingle()" />
    <input type="button" value="select new combo" @click="GetNewCombo()" />
    <span v-if="answered && !isCorrect">Check values {{ incorrectValues.join('') }}</span>
    <span v-if="answered && isCorrect">Well done!</span>
  </div>
</template>

<style>
</style>
