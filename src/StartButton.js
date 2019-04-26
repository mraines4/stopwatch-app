import React from 'react';

function StartButton(props) {
    return (
        <button onClick={props.handleStart}>
            START
        </button>
    )
}

export default StartButton;