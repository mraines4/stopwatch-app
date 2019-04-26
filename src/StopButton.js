import React from 'react';

function StopButton(props) {
    return (
        <button onClick={props.handleStop}>
            STOP
        </button>
    )
}

export default StopButton;