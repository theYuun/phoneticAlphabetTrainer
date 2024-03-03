<script setup>
import { provide, ref } from 'vue';
import data from '../../assets/data';
import alpha from '../alpha/alphas';

const emits = defineEmits([])
const Paragraph = alpha.Paragraph;
const Heading2 = alpha.Heading2;
const Divider = alpha.Divider;
const Input = alpha.Input;
const Label = alpha.Label;
const Span = alpha.Span;

const singleValue = ref(false);
const minMax = [3, 4];
const combo = () => {
  let question = '';
  let range = singleValue.value ? 1 : (minMax[0] + Math.floor(Math.random() * minMax[1]));
  for(let i = 0; i < range; i++)
  {
    const main = Object.keys(Math.random() < 0.7 ? data.alphabet : data.numbers);
    const sub = main[Math.floor(Math.random() * main.length)];
    question += sub.toUpperCase();
  }
  return question;
}

function GetNewCombo() {
  GetNewQuestion();
  input.value = '';
}

const selectedSequence = ref(combo());
function GetNewQuestion() {
  incorrectValues.value = [];
  isCorrect.value = false;
  answered.value = false;
  selectedSequence.value = combo();
}

/* Typing Solution controls */

const input = ref('');

/* ####### */

const incorrectValues = ref([]);
const isCorrect = ref(true);
const answered = ref(false);
const message = ref('');
function CheckAnswer() {
  incorrectValues.value = [];
  answered.value = true;
  const question = selectedSequence.value.split('');
  const answer = input.value.toLowerCase().split(' ');
  
  if(answer.length !== selectedSequence.value.length) {
    message.value = `Provide Full Answer ${answer} ${selectedSequence.value.length}`
  }
  else {
    for (let i =  0; i < question.length; i++) {
      if(!isNaN(Number(question[i]))) {
        if(answer[i] !== Object.values(data.numbers[question[i]]).join('')) {
          incorrectValues.value.push(answer[i]);
        }
      }
      else {
        if(answer[i] !== Object.values(data.alphabet[question[i].toLowerCase()]).join(''))
          incorrectValues.value.push(answer[i])
      }
    }
    isCorrect.value = incorrectValues.value.length > 0 ? false : true;
    if(isCorrect.value)
    {
      message.value = 'WELL DONE!';
    }
    else
      message.value = `Check values: ${incorrectValues.value.join(', ')}`;

  }
  
}

</script>

<template>
  <!--
    Add function to randomly select a letter from the phonetic alphabet and prompts the correct reference
    Add another function to display a letter and number combo with prompt to fill in entire correct sequence
  -->
  <div class="container">
    <Paragraph className="question">
      <Heading2 :text="selectedSequence" />
    </Paragraph>
    <Input
      type="text"
      :textModel="input"
      placeholder="ANSWER"
      className="answer"
      id="answer" 
      @textChanged="(val) => input = val"/>
    <Input
      type="button"
      @pressed="CheckAnswer"
      value="CHECK ANSWER"
      className="checkAnswer"
      id="checkAnswer" />
    
    <Divider
      className="checkSingleContainer"
      id="checkSingleContainer"
      >
      <Input
        className="newQuestion"
        id="newQuestion"
        type="button"
        value="NEW QUESTION"
        @pressed="GetNewCombo(); input = ''" >
        <Label
          :className="'checkSingleLabel'"
          :id="'checkboxText'"
          :for="'checkSingle'" >
          <Input
            :className="'checkSingle'"
            :id="'checkSingle'"
            :type="'checkbox'"
            :checkModel="singleValue"
            @changed="singleValue = !singleValue" >
            Single Value
          </Input>
        </Label>
      </Input>
    </Divider>
    <Span
      :className="'message'"
      :id="'message'"
      v-show="answered"
      :text="message">
    </Span>
  </div>
</template>

<style scoped>
.container {
  width: 300px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
:deep(input):not(.newQuestion), :deep(.question) {
  width: 80%;
  height: 60px;
  border: 2px solid #383;
  border-radius: 20px;
  background-color: #5a5;
  box-shadow:
    inset 0 0 10px 5px #0002,
    0 0 10px 0 #0005;
  margin: 0 auto;
  padding: auto;
  text-align: center;
}
:deep(.answer) {
  cursor: help;
}
:deep(.checkAnswer) {
  cursor: pointer;
}
:deep(.checkSingleContainer) {
  position: relative;
  width: 80%;
  border: 2px solid #383;
  border-radius: 20px;
  background-color: #5a5;
  box-shadow:
    inset 0 0 10px 5px #0002,
    0 0 10px 0 #0005;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
:deep(.checkSingleContainer):hover {
  background-color: #6b6;
}
:deep(.newQuestion) {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
:deep(.checkSingle)[type=checkbox] {
  width: 15px;
  height: 15px;
  /*
  */
  visibility: hidden;
  cursor: pointer;
}
:deep(.checkSingleFake) {
  position: absolute;
  top: 1px;
  width: 15px;
  height: 15px;
  background-color: #5a5;
  border: 1px solid #383;
  border-radius: 5px;
  cursor: pointer;
}
:deep(.checkSingleFakeFill) {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background-color: #383;
  transition: background-color 0.25s ease-out;
  cursor: pointer;
}
:deep(.checkSingleFake):hover {
  background-color: #6b6;
}
:deep(.checkSingleLabel) {
  position: relative;
  margin: auto;
  cursor: pointer;
}

@keyframes resultText {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(100%);
  }
}
:deep(.message) {
  transform: scale(0);
  transform-origin: 50% 100%;
  margin: auto;
  text-align: center;
  font-size: 150%;
  animation: resultText 0.5s 1 forwards;
  cursor: copy;
}
</style>
