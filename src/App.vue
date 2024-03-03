<script setup>
import { ref } from 'vue';

import charlie from './components/charlie/charlies';

const   AlphaNumericTypingPractice = charlie.AlphaNumericTypingPractice,
        AlphaNumericButtonPractice = charlie.AlphaNumericButtonPractice;

const   alphaNumericTypingTraining = ref(false),
        alphaNumericButtonTraining = ref(false),
        fireClasses = ref(false),
        extinguisherTypes = ref(false),
        fireDrills = ref(false),
        strikeDrills = ref(false);

const trainingType = ref('');

function SetTraining(type) {
    if(trainingType.value == type)
        trainingType.value = '';
    else
        trainingType.value = type;
}

</script>

<template>
    <div class="app">
        <div class="information">
            <h1>Welcome to<br>Security Training</h1>
            <p>Here you'll be able to practice many a required knowledge to be an effective security officer</p>
            <p>Select from the list below which training you'd like to practice.</p>
            <div class="trainingButtons">
                <input type="checkbox" class="alphaNumericTypingCheckbox" id="alphaNumericTyping" @change="SetTraining('alphaNumericTyping')" />
                <label for="alphaNumericTyping" class="alphaNumericTypingLabel" >
                    Alpha Numeric Typing
                </label>
                <input type="checkbox" class="alphaNumericButtonCheckbox" id="alphaNumericButton" @change="SetTraining('alphaNumericButton')" />
                <label for="alphaNumericButton" class="alphaNumericButtonLabel" >
                    Alpha Numeric Buttons
                </label>
                <input type="checkbox" class="fireClassesCheckbox" id="fireClasses" @change="SetTraining('fireClasses')" />
                <label for="fireClasses" class="fireClassesLabel" >
                    Fire Classes
                </label>
                <input type="checkbox" class="extinguisherTypesCheckbox" id="extinguisherTypes" @change="SetTraining('extinguisherTypes')" />
                <label for="extinguisherTypes" class="extinguisherTypesLabel" >
                    Extinguisher Types
                </label>
                <input type="checkbox" class="fireDrillsCheckbox" id="fireDrills" @change="SetTraining('fireDrills')" />
                <label for="fireDrills" class="fireDrillsLabel" >
                    Fire Drills
                </label>
                <input type="checkbox" class="strikeDrillsCheckbox" id="strikeDrills" @change="SetTraining('strikeDrills')" />
                <label for="strikeDrills" class="strikeDrillsLabel" >
                    Strike Drills
                </label>
            </div>
        </div>
        <div class="trainingExercises">
            <AlphaNumericTypingPractice v-if="trainingType==='alphaNumericTyping'" />
            <AlphaNumericButtonPractice v-if="trainingType==='alphaNumericButton'" />
        </div>
    </div>
</template>

<style scoped>
    :root {
        --colorH1Shadow: #000;
    }
    .app {
        position: relative;
        width: 500px;
        margin: auto;
        text-align: center;
        background-color: #383;
    }
    .information {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #383;
        margin: auto;
        z-index: 1;
    }
    h1 {
        font-size: 64px;
        color: #5a5;
        text-shadow:
            -3px 3px var(--colorH1Shadow),
            0px 3px var(--colorH1Shadow),
            3px 3px var(--colorH1Shadow),
            3px 0px var(--colorH1Shadow),
            3px -3px var(--colorH1Shadow),
            0px -3px var(--colorH1Shadow),
            -3px -3px var(--colorH1Shadow),
            -3px 0px var(--colorH1Shadow);
    }
    p {
        width: 80%;
        margin: 20px auto;
        font-size: 30px;
        text-align: center;
        color: #7c7;
    }
    .trainingButtons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        margin: 0 20px;
        margin-top: 20px;
        padding-bottom: 30px;
    }
    label {
        position: relative;
        width: fit-content;
        margin: 0 auto;
        font-family: 'graduate';
        /*
        font-family: 'lato';
        font-family: 'latoB';
        font-family: 'rationale';
        font-family: 'stickNoBills';
        font-family: 'rubik';
        */
    }
    label::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--colorH1Shadow);
        background-color: #000;
        visibility: hidden;
    }
    input[type=checkbox] {
        position: absolute;
        visibility: hidden;
    }

    .alphaNumericTypingCheckbox:checked ~ .alphaNumericTypingLabel::before,
    .alphaNumericButtonCheckbox:checked ~ .alphaNumericButtonLabel::before,
    .fireClassesCheckbox:checked ~ .fireClassesLabel::before,
    .extinguisherTypesCheckbox:checked ~ .extinguisherTypesLabel::before,
    .fireDrillsCheckbox:checked ~ .fireDrillsLabel::before,
    .strikeDrillsCheckbox:checked ~ .strikeDrillsLabel::before {
        visibility: visible;
    }

    @keyframes fall-in {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0%);
        }
    }
    .trainingExercises {
        position: relative;
        z-index: 0;
        width: 100%;
    }
    .trainingExercises > div {
        padding-bottom: 30px;
        animation: fall-in 1s forwards;
    }
    input[type=checkbox]:checked ~ .trainingExercises {
    }
</style>