import React from "react";

const NoteButton = (props) => {
    const { interval, style } = props;

    return (
        <button className="note-button" style={style}>
            {interval}
        </button>
    )
}

export default NoteButton;