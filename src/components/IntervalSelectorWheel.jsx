import React from "react";

//Initialize the mapping of the intervals to notes outside of component
//Only run the computation once, not every
const intervals = ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'];
const tones = ['C4', 'C#4', 'D4', 'Eb4', 'E4', 'F4', 'F#4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'];

const intervalToneMap = new Map();

intervals.forEach((interval, index) => {
  intervalToneMap.set(interval, tones[index]);
})

const IntervalSelectorWheel = (props) => {


    const { handleSelection } = props;
    
    const radius = 120;

    return (
        <div className="interval-wheel-container">
            {intervals.map((interval, index) => {
                const angle = ((index / intervals.length) * 360) - 90; // Divide circle into 12 equal parts
                const x = radius * Math.cos((angle * Math.PI) / 180); // Calculate x-offset
                const y = radius * Math.sin((angle * Math.PI) / 180); // Calculate y-offset
                // console.log((intervalToneMap.get(interval)));
                // console.log(`${index}: x:${x} y:${y}`);
                return (

                  <button
                    key={interval}
                    className="note-button"
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${x}px)`, // Position relative to the center
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)", // Center the button at its point
                    }}
                    onClick={() => handleSelection(intervalToneMap.get(interval))}
                  >
                    {interval}
                  </button>
                  );
                })}
        </div>

        
    )
}


export default IntervalSelectorWheel;
