<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import data from '../../assets/data';
import alpha from '../alpha/alphas';

const   Divider = alpha.Divider,
        Heading2 = alpha.Heading2,
        Heading3 = alpha.Heading3,
        Input = alpha.Input,
        Label = alpha.Label,
        Paragraph = alpha.Paragraph,
        Span = alpha.Span;

const possibleAnswersArray = ref([])
function GetNewPossibleAnswersArray(sequence) {
    possibleAnswersArray.value = [];
    console.log( sequence );
    for (let i = 0; i < sequence.length; i++) {
      if(!isNaN(Number(sequence[i]))) {
        possibleAnswersArray.value.push(data.numbers[sequence[i].toLowerCase()]);
        console.log(data.fakeNumbers)
        console.log(data.fakeNumbers[sequence[i].toLowerCase()]);
        let possibleFakeVals = [...data.fakeNumbers[sequence[i].toLowerCase()]]
        let fakeValSelector = Math.random();
        possibleAnswersArray.value.push(possibleFakeVals.splice(fakeValSelector < 0.3 ? 0 : fakeValSelector < 0.6 ? 1 : 2, 1).toString());
        possibleAnswersArray.value.push(possibleFakeVals[Math.random() < 0.5 ? 0 : 1]);
      }
      else {
        possibleAnswersArray.value.push(data.alphabet[sequence[i].toLowerCase()]);
        console.log(data.fakeAlphabet)
        console.log(data.fakeAlphabet[sequence[i].toLowerCase()]);
        let possibleFakeVals = [...data.fakeAlphabet[sequence[i].toLowerCase()]]
        let fakeValSelector = Math.random();
        possibleAnswersArray.value.push(possibleFakeVals.splice(fakeValSelector < 0.3 ? 0 : fakeValSelector < 0.6 ? 1 : 2, 1).toString());
        possibleAnswersArray.value.push(possibleFakeVals[Math.random() < 0.5 ? 0 : 1]);
      }
    }
}
const answerArray = ref([]);
function AddAnswer(answer) {
    answerArray.value.push(answer);
    console.log(answerArray.value)
}
function RemoveAnswer(answer) {
    const index = answerArray.value.indexOf(answer);
    answerArray.value.splice(index, 1);
}

const singleValue = ref(false);
const minMax = [3, 4];
const combo = () => {
  let question = '';
  let range = singleValue.value ? 1 : (minMax[0] + Math.floor(Math.random() * minMax[1]));
  for(let i = 0; i < range; i++)
  {
    /*
    const val = Math.random();
    question += val < 0.3 ? 'A' : val < 0.6 ? 'B' : 'C';
    */
    const main = Object.keys(Math.random() < 0.7 ? data.alphabet : data.numbers);
    const sub = main[Math.floor(Math.random() * main.length)];
    question += sub.toUpperCase();
  }
  GetNewPossibleAnswersArray(question);
  return question;
}

function GetNewCombo() {
    GetNewQuestion();
}

const selectedSequence = ref(combo());
function GetNewQuestion() {
    incorrectValues.value = [];
    isCorrect.value = false;
    answered.value = false;
    selectedSequence.value = combo();
}

const incorrectValues = ref([]);
const isCorrect = ref(true);
const answered = ref(false);
const message = ref('');
/*
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
*/
</script>

<template>
    <Divider
        className="ANBPContainer"
        id="ANBPContainer" >
        <Paragraph>
            <Heading2 :text="selectedSequence" />
        </Paragraph>
        <Divider
            className="answersContainer"
            id="answersContainer">
            <!--
                Add here numerous options to choose from
                The options shall include the correct answers among a set of incorrect answers
                Scripting wise an array should be created that will hold all the options
                The array should be populated at random
                The list of options should be controlled by flex, allowing for a column direction with two columns and wrapping
            -->
            <Input
                v-for="(item, index) in answerArray"
                type="button"
                :value="item"
                @pressed="RemoveAnswer(item)"
                :className="`possibleAnswer ${item}`"
                :id="`possibleAnswer${item}`" />
        </Divider>
        <Divider
            className="possibleAnswersContainer"
            id="possibleAnswersContainer">
            <!--
                Add here numerous options to choose from
                The options shall include the correct answers among a set of incorrect answers
                Scripting wise an array should be created that will hold all the options
                The array should be populated at random
                The list of options should be controlled by flex, allowing for a column direction with two columns and wrapping
            -->
            <Input
                v-for="(item, index) in possibleAnswersArray"
                type="button"
                :value="item"
                @pressed="AddAnswer(item)"
                :className="`possibleAnswer ${item}`"
                :id="`possibleAnswer${item}`" />
        </Divider>
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
    </Divider>
</template>

<style scoped>
  .answersContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>