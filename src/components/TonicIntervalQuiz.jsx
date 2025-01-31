import { useEffect, useState, useRef } from "react";
import IntervalSelectorWheel from "./IntervalSelectorWheel";
// import { Howl } from "howler"; // To control looping and stop/start of sounds easier

import * as Tone from "tone";
//Component for all quiz content
const TonicIntervalQuiz = () => {

    //Active/inactive status of quiz running
    const [ isPlaying, setIsPlaying ] = useState(false);

    //Current tone being played in the quiz
    const [ currentTone, setCurrentTone ] = useState(null);

    const [ isCorrect, setIsCorrect ] = useState(false);

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
        //Get a random note from the tones array and start playing it
        const randomSynth = randomSynthRef.current;
        const randomTone = tones[Math.floor(Math.random() * tones.length)];
        console.log(`Now playing random tone: ${randomTone}`);
        setCurrentTone(randomTone);
        console.log(`Current state: ${currentTone}`);
        randomSynth.triggerAttackRelease(randomTone, "4");
    }

    const handleSelection = (selectedTone) => {

        // console.log(`Selected tone: ${selectedTone}`);
        // console.log(`Current played tone ${currentTone}`);

        if (selectedTone == currentTone) {
            setIsCorrect(true);
            alert("Correct!");

        }

        else if (selectedTone != currentTone) {
            setIsCorrect(false);
            alert("Incorrect!");
        }


        //We want to generate the next tone shortly after the user has received their feedback.

        setTimeout(() => {
            generateRandomTone()
        }, 3000)


    }

    //EXPLAIN THIS CODE. When isPlaying turns from false to true, execute?
    useEffect(() => {
        if (isPlaying) {
            // Delay before playing the first random tone
            const timer = setTimeout(() => {
                generateRandomTone();
            }, 3000); // Wait 3 seconds after starting the quiz

            return () => clearTimeout(timer); // Clean up the timer if the component unmounts
        }
    }, [isPlaying]);

    return (
        <div className="quiz">

            <IntervalSelectorWheel handleSelection={handleSelection}/>

            <button className='start-stop' onClick={handleStartStop}>
                {isPlaying? 'stop' : 'start'}
            </button>
        </div>
    ) 
}


export default TonicIntervalQuiz;