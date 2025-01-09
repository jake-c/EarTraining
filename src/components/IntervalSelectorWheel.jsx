import NoteButton from "./NoteButton";

const IntervalSelectorWheel = (props) => {

    const intervals = ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'];

    const radius = 120;

    return (
        <div className="interval-wheel-container">
            {intervals.map((interval, index) => {
                const angle = ((index / intervals.length) * 360) - 90; // Divide circle into 12 equal parts
                const x = radius * Math.cos((angle * Math.PI) / 180); // Calculate x-offset
                const y = radius * Math.sin((angle * Math.PI) / 180); // Calculate y-offset
                
                console.log(`${index}: x:${x} y:${y}`);
                return (
                    <NoteButton
                      key={interval}
                      interval={interval}
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${x}px)`, // Position relative to the center
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)", // Center the button at its point
                      }}
                    />
                  );
                })}
        </div>
    )
}


export default IntervalSelectorWheel;
