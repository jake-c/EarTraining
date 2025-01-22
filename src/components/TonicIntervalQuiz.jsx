import { useState, useRef } from "react";
import IntervalSelectorWheel from "./IntervalSelectorWheel";
// import { Howl } from "howler"; // To control looping and stop/start of sounds easier

import * as Tone from "tone";
//Component for all quiz content
const TonicIntervalQuiz = () => {

    //Active/inactive status of quiz running
    const [ isPlaying, setIsPlaying ] = useState(false);

    //Current tone being played in the quiz
    const [ currentTone, setCurrentTone ] = useState(null);

    const tones = ['C4', 'C#4', 'D4', 'Eb4', 'E4', 'F4', 'F#4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'];

    // Use a ref to ensure the synth instance persists across renders
    const tonicSynthRef = useRef(null);  //Dedicated synth to play the persistent tonic note
    const randomSynthRef = useRef(null); //Dedicated synth for the random quiz notes


    //Initialize synths
    if (!tonicSynthRef.current) {
        tonicSynthRef.current = new Tone.Synth().toDestination();
    }
    if (!randomSynthRef.current) {
        randomSynthRef.current = new Tone.Synth().toDestination();
    }

    const handleStartStop = () => {

        const tonicSynth = tonicSynthRef.current;
        if (isPlaying) {
            tonicSynth.triggerRelease();
            
        }
        else {
            tonicSynth.triggerAttack('C3');
        }
        //On click of the button, we want to change isPlaying to the opposite of what it was before
        setIsPlaying((prev) => !prev);
    }

    const generateRandomTone = () => {
        //Get a random note from the tones array
        const randomSynth = randomSynthRef.current;
        const randomTone = tones[Math.floor(Math.random() * tones.length)];
        setCurrentTone(randomTone);
        randomSynth.triggerAttackRelease(randomTone, '2n')
    }

    

    return (
        <div className="quiz">

            <IntervalSelectorWheel/>

            <button className='start-stop' onClick={handleStartStop}>
                {isPlaying? 'stop' : 'start'}
            </button>
        </div>
    )
}


export default TonicIntervalQuiz;