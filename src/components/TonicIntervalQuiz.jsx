import { useState, useEffect } from "react";
import IntervalSelectorWheel from "./IntervalSelectorWheel";
import { Howl } from "howler"; // To control looping and stop/start of sounds easier
//Component for all quiz content
const TonicIntervalQuiz = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);

    const handleStartStop = () => {
        // if (isPlaying)
        //On click of the button, we want to change isPlaying to the opposite of what it was before
        setIsPlaying((prev) => !prev);
    }

    

    return (
        <div className="quiz">

            <IntervalSelectorWheel/>

            <button className='start-stop' onClick={handleStartStop}>
                start
            </button>
        </div>
    )
}


export default TonicIntervalQuiz;