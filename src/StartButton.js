import React from 'react';

function StartButton(props) {
    return (
        <button onClick={props.handler}>
            START
        </button>
    )
}

export default StartButton;